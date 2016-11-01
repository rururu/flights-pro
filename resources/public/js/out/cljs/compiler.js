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
var map__12566 = s;
var map__12566__$1 = ((((!((map__12566 == null)))?((((map__12566.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12566.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12566):map__12566);
var name = cljs.core.get.call(null,map__12566__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__12566__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__12569 = info;
var map__12570 = G__12569;
var map__12570__$1 = ((((!((map__12570 == null)))?((((map__12570.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12570.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12570):map__12570);
var shadow = cljs.core.get.call(null,map__12570__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__12569__$1 = G__12569;
while(true){
var d__$2 = d__$1;
var map__12572 = G__12569__$1;
var map__12572__$1 = ((((!((map__12572 == null)))?((((map__12572.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12572.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12572):map__12572);
var shadow__$1 = cljs.core.get.call(null,map__12572__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__12574 = (d__$2 + (1));
var G__12575 = shadow__$1;
d__$1 = G__12574;
G__12569__$1 = G__12575;
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
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__12576){
var map__12581 = p__12576;
var map__12581__$1 = ((((!((map__12581 == null)))?((((map__12581.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12581.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12581):map__12581);
var name_var = map__12581__$1;
var name = cljs.core.get.call(null,map__12581__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__12581__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace.call(null,[cljs.core.str(name)].join(''),"..","_DOT__DOT_");
var map__12583 = info;
var map__12583__$1 = ((((!((map__12583 == null)))?((((map__12583.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12583.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12583):map__12583);
var ns = cljs.core.get.call(null,map__12583__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.call(null,map__12583__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
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
var args12585 = [];
var len__9926__auto___12588 = arguments.length;
var i__9927__auto___12589 = (0);
while(true){
if((i__9927__auto___12589 < len__9926__auto___12588)){
args12585.push((arguments[i__9927__auto___12589]));

var G__12590 = (i__9927__auto___12589 + (1));
i__9927__auto___12589 = G__12590;
continue;
} else {
}
break;
}

var G__12587 = args12585.length;
switch (G__12587) {
case 1:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12585.length)].join('')));

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
var G__12593 = cp;
switch (G__12593) {
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
var seq__12599_12603 = cljs.core.seq.call(null,s);
var chunk__12600_12604 = null;
var count__12601_12605 = (0);
var i__12602_12606 = (0);
while(true){
if((i__12602_12606 < count__12601_12605)){
var c_12607 = cljs.core._nth.call(null,chunk__12600_12604,i__12602_12606);
sb.append(cljs.compiler.escape_char.call(null,c_12607));

var G__12608 = seq__12599_12603;
var G__12609 = chunk__12600_12604;
var G__12610 = count__12601_12605;
var G__12611 = (i__12602_12606 + (1));
seq__12599_12603 = G__12608;
chunk__12600_12604 = G__12609;
count__12601_12605 = G__12610;
i__12602_12606 = G__12611;
continue;
} else {
var temp__4657__auto___12612 = cljs.core.seq.call(null,seq__12599_12603);
if(temp__4657__auto___12612){
var seq__12599_12613__$1 = temp__4657__auto___12612;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12599_12613__$1)){
var c__9632__auto___12614 = cljs.core.chunk_first.call(null,seq__12599_12613__$1);
var G__12615 = cljs.core.chunk_rest.call(null,seq__12599_12613__$1);
var G__12616 = c__9632__auto___12614;
var G__12617 = cljs.core.count.call(null,c__9632__auto___12614);
var G__12618 = (0);
seq__12599_12603 = G__12615;
chunk__12600_12604 = G__12616;
count__12601_12605 = G__12617;
i__12602_12606 = G__12618;
continue;
} else {
var c_12619 = cljs.core.first.call(null,seq__12599_12613__$1);
sb.append(cljs.compiler.escape_char.call(null,c_12619));

var G__12620 = cljs.core.next.call(null,seq__12599_12613__$1);
var G__12621 = null;
var G__12622 = (0);
var G__12623 = (0);
seq__12599_12603 = G__12620;
chunk__12600_12604 = G__12621;
count__12601_12605 = G__12622;
i__12602_12606 = G__12623;
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
cljs.compiler.emit_STAR_ = (function (){var method_table__9746__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9747__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9748__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9749__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9750__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.compiler","emit*"),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__9750__auto__,method_table__9746__auto__,prefer_table__9747__auto__,method_cache__9748__auto__,cached_hierarchy__9749__auto__));
})();
}
cljs.compiler.emit = (function cljs$compiler$emit(ast){
var val__10666__auto__ = cljs.env._STAR_compiler_STAR_;
if((val__10666__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = cljs.env.default_compiler_env.call(null);
} else {
}

try{if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__12629_12634 = ast;
var map__12629_12635__$1 = ((((!((map__12629_12634 == null)))?((((map__12629_12634.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12629_12634.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12629_12634):map__12629_12634);
var env_12636 = cljs.core.get.call(null,map__12629_12635__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_12636))){
var map__12631_12637 = env_12636;
var map__12631_12638__$1 = ((((!((map__12631_12637 == null)))?((((map__12631_12637.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12631_12637.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12631_12637):map__12631_12637);
var line_12639 = cljs.core.get.call(null,map__12631_12638__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_12640 = cljs.core.get.call(null,map__12631_12638__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,((function (map__12631_12637,map__12631_12638__$1,line_12639,column_12640,map__12629_12634,map__12629_12635__$1,env_12636,val__10666__auto__){
return (function (m){
var minfo = (function (){var G__12633 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast),new cljs.core.Keyword(null,"var","var",-769682797))){
return cljs.core.assoc.call(null,G__12633,new cljs.core.Keyword(null,"name","name",1843675177),[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast)))].join(''));
} else {
return G__12633;
}
})();
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_12639 - (1))], null),cljs.core.fnil.call(null,((function (minfo,map__12631_12637,map__12631_12638__$1,line_12639,column_12640,map__12629_12634,map__12629_12635__$1,env_12636,val__10666__auto__){
return (function (line__$1){
return cljs.core.update_in.call(null,line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_12640)?(column_12640 - (1)):(0))], null),cljs.core.fnil.call(null,((function (minfo,map__12631_12637,map__12631_12638__$1,line_12639,column_12640,map__12629_12634,map__12629_12635__$1,env_12636,val__10666__auto__){
return (function (column__$1){
return cljs.core.conj.call(null,column__$1,minfo);
});})(minfo,map__12631_12637,map__12631_12638__$1,line_12639,column_12640,map__12629_12634,map__12629_12635__$1,env_12636,val__10666__auto__))
,cljs.core.PersistentVector.EMPTY));
});})(minfo,map__12631_12637,map__12631_12638__$1,line_12639,column_12640,map__12629_12634,map__12629_12635__$1,env_12636,val__10666__auto__))
,cljs.core.sorted_map.call(null)));
});})(map__12631_12637,map__12631_12638__$1,line_12639,column_12640,map__12629_12634,map__12629_12635__$1,env_12636,val__10666__auto__))
);
} else {
}
} else {
}

return cljs.compiler.emit_STAR_.call(null,ast);
}finally {if((val__10666__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = null;
} else {
}
}});
cljs.compiler.emits = (function cljs$compiler$emits(var_args){
var args__9933__auto__ = [];
var len__9926__auto___12647 = arguments.length;
var i__9927__auto___12648 = (0);
while(true){
if((i__9927__auto___12648 < len__9926__auto___12647)){
args__9933__auto__.push((arguments[i__9927__auto___12648]));

var G__12649 = (i__9927__auto___12648 + (1));
i__9927__auto___12648 = G__12649;
continue;
} else {
}
break;
}

var argseq__9934__auto__ = ((((0) < args__9933__auto__.length))?(new cljs.core.IndexedSeq(args__9933__auto__.slice((0)),(0),null)):null);
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(argseq__9934__auto__);
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
var seq__12643_12650 = cljs.core.seq.call(null,xs);
var chunk__12644_12651 = null;
var count__12645_12652 = (0);
var i__12646_12653 = (0);
while(true){
if((i__12646_12653 < count__12645_12652)){
var x_12654 = cljs.core._nth.call(null,chunk__12644_12651,i__12646_12653);
if((x_12654 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_12654)){
cljs.compiler.emit.call(null,x_12654);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_12654)){
cljs.core.apply.call(null,cljs.compiler.emits,x_12654);
} else {
if(goog.isFunction(x_12654)){
x_12654.call(null);
} else {
var s_12655 = cljs.core.print_str.call(null,x_12654);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__12643_12650,chunk__12644_12651,count__12645_12652,i__12646_12653,s_12655,x_12654){
return (function (p1__12641_SHARP_){
return (p1__12641_SHARP_ + cljs.core.count.call(null,s_12655));
});})(seq__12643_12650,chunk__12644_12651,count__12645_12652,i__12646_12653,s_12655,x_12654))
);
}

cljs.core.print.call(null,s_12655);

}
}
}
}

var G__12656 = seq__12643_12650;
var G__12657 = chunk__12644_12651;
var G__12658 = count__12645_12652;
var G__12659 = (i__12646_12653 + (1));
seq__12643_12650 = G__12656;
chunk__12644_12651 = G__12657;
count__12645_12652 = G__12658;
i__12646_12653 = G__12659;
continue;
} else {
var temp__4657__auto___12660 = cljs.core.seq.call(null,seq__12643_12650);
if(temp__4657__auto___12660){
var seq__12643_12661__$1 = temp__4657__auto___12660;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12643_12661__$1)){
var c__9632__auto___12662 = cljs.core.chunk_first.call(null,seq__12643_12661__$1);
var G__12663 = cljs.core.chunk_rest.call(null,seq__12643_12661__$1);
var G__12664 = c__9632__auto___12662;
var G__12665 = cljs.core.count.call(null,c__9632__auto___12662);
var G__12666 = (0);
seq__12643_12650 = G__12663;
chunk__12644_12651 = G__12664;
count__12645_12652 = G__12665;
i__12646_12653 = G__12666;
continue;
} else {
var x_12667 = cljs.core.first.call(null,seq__12643_12661__$1);
if((x_12667 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_12667)){
cljs.compiler.emit.call(null,x_12667);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_12667)){
cljs.core.apply.call(null,cljs.compiler.emits,x_12667);
} else {
if(goog.isFunction(x_12667)){
x_12667.call(null);
} else {
var s_12668 = cljs.core.print_str.call(null,x_12667);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__12643_12650,chunk__12644_12651,count__12645_12652,i__12646_12653,s_12668,x_12667,seq__12643_12661__$1,temp__4657__auto___12660){
return (function (p1__12641_SHARP_){
return (p1__12641_SHARP_ + cljs.core.count.call(null,s_12668));
});})(seq__12643_12650,chunk__12644_12651,count__12645_12652,i__12646_12653,s_12668,x_12667,seq__12643_12661__$1,temp__4657__auto___12660))
);
}

cljs.core.print.call(null,s_12668);

}
}
}
}

var G__12669 = cljs.core.next.call(null,seq__12643_12661__$1);
var G__12670 = null;
var G__12671 = (0);
var G__12672 = (0);
seq__12643_12650 = G__12669;
chunk__12644_12651 = G__12670;
count__12645_12652 = G__12671;
i__12646_12653 = G__12672;
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

cljs.compiler.emits.cljs$lang$applyTo = (function (seq12642){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12642));
});

cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var args__9933__auto__ = [];
var len__9926__auto___12677 = arguments.length;
var i__9927__auto___12678 = (0);
while(true){
if((i__9927__auto___12678 < len__9926__auto___12677)){
args__9933__auto__.push((arguments[i__9927__auto___12678]));

var G__12679 = (i__9927__auto___12678 + (1));
i__9927__auto___12678 = G__12679;
continue;
} else {
}
break;
}

var argseq__9934__auto__ = ((((0) < args__9933__auto__.length))?(new cljs.core.IndexedSeq(args__9933__auto__.slice((0)),(0),null)):null);
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(argseq__9934__auto__);
});

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
cljs.core.apply.call(null,cljs.compiler.emits,xs);

cljs.core.println.call(null);

if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,(function (p__12674){
var map__12675 = p__12674;
var map__12675__$1 = ((((!((map__12675 == null)))?((((map__12675.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12675.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12675):map__12675);
var m = map__12675__$1;
var gen_line = cljs.core.get.call(null,map__12675__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0));
}));
} else {
}

return null;
});

cljs.compiler.emitln.cljs$lang$maxFixedArity = (0);

cljs.compiler.emitln.cljs$lang$applyTo = (function (seq12673){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12673));
});

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__9807__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_12682_12684 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_12683_12685 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_12682_12684,_STAR_print_fn_STAR_12683_12685,sb__9807__auto__){
return (function (x__9808__auto__){
return sb__9807__auto__.append(x__9808__auto__);
});})(_STAR_print_newline_STAR_12682_12684,_STAR_print_fn_STAR_12683_12685,sb__9807__auto__))
;

try{cljs.compiler.emit.call(null,expr);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_12683_12685;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_12682_12684;
}
return [cljs.core.str(sb__9807__auto__)].join('');
});
if(typeof cljs.compiler.emit_constant !== 'undefined'){
} else {
cljs.compiler.emit_constant = (function (){var method_table__9746__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9747__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9748__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9749__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9750__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.compiler","emit-constant"),cljs.core.type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__9750__auto__,method_table__9746__auto__,prefer_table__9747__auto__,method_cache__9748__auto__,cached_hierarchy__9749__auto__));
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
var vec__12686 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,[cljs.core.str(x)].join(''));
var _ = cljs.core.nth.call(null,vec__12686,(0),null);
var flags = cljs.core.nth.call(null,vec__12686,(1),null);
var pattern = cljs.core.nth.call(null,vec__12686,(2),null);
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"var","var",-769682797),(function (p__12690){
var map__12691 = p__12690;
var map__12691__$1 = ((((!((map__12691 == null)))?((((map__12691.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12691.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12691):map__12691);
var arg = map__12691__$1;
var info = cljs.core.get.call(null,map__12691__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.call(null,map__12691__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.call(null,map__12691__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var var_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
var info__$1 = ((cljs.core._EQ_.call(null,cljs.core.namespace.call(null,var_name),"js"))?(function (){var js_module_name = cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-module-index","js-module-index",2072061931),cljs.core.name.call(null,var_name)], null));
var or__8818__auto__ = js_module_name;
if(cljs.core.truth_(or__8818__auto__)){
return or__8818__auto__;
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
var env__12550__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12550__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,(function (){var G__12693 = info__$1;
if(cljs.core.not_EQ_.call(null,form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null))){
return cljs.compiler.munge.call(null,G__12693);
} else {
return G__12693;
}
})());

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12550__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"var-special","var-special",1131576802),(function (p__12694){
var map__12695 = p__12694;
var map__12695__$1 = ((((!((map__12695 == null)))?((((map__12695.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12695.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12695):map__12695);
var arg = map__12695__$1;
var env = cljs.core.get.call(null,map__12695__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.call(null,map__12695__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.call(null,map__12695__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.call(null,map__12695__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_.call(null,sym)){
} else {
throw (new Error("Assert failed: (ana/ast? sym)"));
}

if(cljs.analyzer.ast_QMARK_.call(null,meta)){
} else {
throw (new Error("Assert failed: (ana/ast? meta)"));
}

var map__12697 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__12697__$1 = ((((!((map__12697 == null)))?((((map__12697.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12697.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12697):map__12697);
var name = cljs.core.get.call(null,map__12697__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__12550__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12550__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"new cljs.core.Var(function(){return ",cljs.compiler.munge.call(null,name),";},",sym,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12550__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"meta","meta",1499536964),(function (p__12699){
var map__12700 = p__12699;
var map__12700__$1 = ((((!((map__12700 == null)))?((((map__12700.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12700.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12700):map__12700);
var expr = cljs.core.get.call(null,map__12700__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.call(null,map__12700__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.call(null,map__12700__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__12550__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12550__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"cljs.core.with_meta(",expr,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12550__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.array_map_threshold = (8);
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
return (cljs.core.every_QMARK_.call(null,(function (p1__12702_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__12702_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),keys)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,keys)),cljs.core.count.call(null,keys)));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__12703){
var map__12704 = p__12703;
var map__12704__$1 = ((((!((map__12704 == null)))?((((map__12704.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12704.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12704):map__12704);
var env = cljs.core.get.call(null,map__12704__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.call(null,map__12704__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__12704__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__12550__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12550__auto__))){
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12550__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"list","list",765357683),(function (p__12706){
var map__12707 = p__12706;
var map__12707__$1 = ((((!((map__12707 == null)))?((((map__12707.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12707.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12707):map__12707);
var items = cljs.core.get.call(null,map__12707__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__12707__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__12550__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12550__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.List.EMPTY");
} else {
cljs.compiler.emits.call(null,"cljs.core.list(",cljs.compiler.comma_sep.call(null,items),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12550__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__12709){
var map__12710 = p__12709;
var map__12710__$1 = ((((!((map__12710 == null)))?((((map__12710.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12710.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12710):map__12710);
var items = cljs.core.get.call(null,map__12710__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__12710__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__12550__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12550__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.PersistentVector.EMPTY");
} else {
var cnt_12712 = cljs.core.count.call(null,items);
if((cnt_12712 < (32))){
cljs.compiler.emits.call(null,"new cljs.core.PersistentVector(null, ",cnt_12712,", 5, cljs.core.PersistentVector.EMPTY_NODE, [",cljs.compiler.comma_sep.call(null,items),"], null)");
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentVector.fromArray([",cljs.compiler.comma_sep.call(null,items),"], true)");
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12550__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
return (cljs.core.every_QMARK_.call(null,(function (p1__12713_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__12713_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),items)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,items)),cljs.core.count.call(null,items)));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set","set",304602554),(function (p__12714){
var map__12715 = p__12714;
var map__12715__$1 = ((((!((map__12715 == null)))?((((map__12715.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12715.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12715):map__12715);
var items = cljs.core.get.call(null,map__12715__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__12715__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__12550__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12550__auto__))){
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12550__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-value","js-value",-758336661),(function (p__12717){
var map__12718 = p__12717;
var map__12718__$1 = ((((!((map__12718 == null)))?((((map__12718.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12718.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12718):map__12718);
var items = cljs.core.get.call(null,map__12718__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var js_type = cljs.core.get.call(null,map__12718__$1,new cljs.core.Keyword(null,"js-type","js-type",539386702));
var env = cljs.core.get.call(null,map__12718__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__12550__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12550__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core._EQ_.call(null,js_type,new cljs.core.Keyword(null,"object","object",1474613949))){
cljs.compiler.emits.call(null,"({");

var temp__4657__auto___12736 = cljs.core.seq.call(null,items);
if(temp__4657__auto___12736){
var items_12737__$1 = temp__4657__auto___12736;
var vec__12720_12738 = items_12737__$1;
var seq__12721_12739 = cljs.core.seq.call(null,vec__12720_12738);
var first__12722_12740 = cljs.core.first.call(null,seq__12721_12739);
var seq__12721_12741__$1 = cljs.core.next.call(null,seq__12721_12739);
var vec__12723_12742 = first__12722_12740;
var k_12743 = cljs.core.nth.call(null,vec__12723_12742,(0),null);
var v_12744 = cljs.core.nth.call(null,vec__12723_12742,(1),null);
var r_12745 = seq__12721_12741__$1;
cljs.compiler.emits.call(null,"\"",cljs.core.name.call(null,k_12743),"\": ",v_12744);

var seq__12726_12746 = cljs.core.seq.call(null,r_12745);
var chunk__12727_12747 = null;
var count__12728_12748 = (0);
var i__12729_12749 = (0);
while(true){
if((i__12729_12749 < count__12728_12748)){
var vec__12730_12750 = cljs.core._nth.call(null,chunk__12727_12747,i__12729_12749);
var k_12751__$1 = cljs.core.nth.call(null,vec__12730_12750,(0),null);
var v_12752__$1 = cljs.core.nth.call(null,vec__12730_12750,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_12751__$1),"\": ",v_12752__$1);

var G__12753 = seq__12726_12746;
var G__12754 = chunk__12727_12747;
var G__12755 = count__12728_12748;
var G__12756 = (i__12729_12749 + (1));
seq__12726_12746 = G__12753;
chunk__12727_12747 = G__12754;
count__12728_12748 = G__12755;
i__12729_12749 = G__12756;
continue;
} else {
var temp__4657__auto___12757__$1 = cljs.core.seq.call(null,seq__12726_12746);
if(temp__4657__auto___12757__$1){
var seq__12726_12758__$1 = temp__4657__auto___12757__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12726_12758__$1)){
var c__9632__auto___12759 = cljs.core.chunk_first.call(null,seq__12726_12758__$1);
var G__12760 = cljs.core.chunk_rest.call(null,seq__12726_12758__$1);
var G__12761 = c__9632__auto___12759;
var G__12762 = cljs.core.count.call(null,c__9632__auto___12759);
var G__12763 = (0);
seq__12726_12746 = G__12760;
chunk__12727_12747 = G__12761;
count__12728_12748 = G__12762;
i__12729_12749 = G__12763;
continue;
} else {
var vec__12733_12764 = cljs.core.first.call(null,seq__12726_12758__$1);
var k_12765__$1 = cljs.core.nth.call(null,vec__12733_12764,(0),null);
var v_12766__$1 = cljs.core.nth.call(null,vec__12733_12764,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_12765__$1),"\": ",v_12766__$1);

var G__12767 = cljs.core.next.call(null,seq__12726_12758__$1);
var G__12768 = null;
var G__12769 = (0);
var G__12770 = (0);
seq__12726_12746 = G__12767;
chunk__12727_12747 = G__12768;
count__12728_12748 = G__12769;
i__12729_12749 = G__12770;
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12550__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"constant","constant",-379609303),(function (p__12771){
var map__12772 = p__12771;
var map__12772__$1 = ((((!((map__12772 == null)))?((((map__12772.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12772.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12772):map__12772);
var form = cljs.core.get.call(null,map__12772__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.call(null,map__12772__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__12550__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12550__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_constant.call(null,form);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12550__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(p__12774){
var map__12777 = p__12774;
var map__12777__$1 = ((((!((map__12777 == null)))?((((map__12777.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12777.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12777):map__12777);
var op = cljs.core.get.call(null,map__12777__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__12777__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var and__8806__auto__ = cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"constant","constant",-379609303));
if(and__8806__auto__){
var and__8806__auto____$1 = form;
if(cljs.core.truth_(and__8806__auto____$1)){
return !(((typeof form === 'string') && (cljs.core._EQ_.call(null,form,""))) || ((typeof form === 'number') && ((form === (0)))));
} else {
return and__8806__auto____$1;
}
} else {
return and__8806__auto__;
}
});
cljs.compiler.falsey_constant_QMARK_ = (function cljs$compiler$falsey_constant_QMARK_(p__12779){
var map__12782 = p__12779;
var map__12782__$1 = ((((!((map__12782 == null)))?((((map__12782.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12782.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12782):map__12782);
var op = cljs.core.get.call(null,map__12782__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__12782__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
return (cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"constant","constant",-379609303))) && ((form === false) || ((form == null)));
});
cljs.compiler.safe_test_QMARK_ = (function cljs$compiler$safe_test_QMARK_(env,e){
var tag = cljs.analyzer.infer_tag.call(null,env,e);
var or__8818__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null).call(null,tag);
if(cljs.core.truth_(or__8818__auto__)){
return or__8818__auto__;
} else {
return cljs.compiler.truthy_constant_QMARK_.call(null,e);
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__12784){
var map__12785 = p__12784;
var map__12785__$1 = ((((!((map__12785 == null)))?((((map__12785.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12785.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12785):map__12785);
var test = cljs.core.get.call(null,map__12785__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.call(null,map__12785__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.call(null,map__12785__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.call(null,map__12785__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.call(null,map__12785__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
var checked = cljs.core.not.call(null,(function (){var or__8818__auto__ = unchecked;
if(cljs.core.truth_(or__8818__auto__)){
return or__8818__auto__;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"case*","case*",716180697),(function (p__12787){
var map__12788 = p__12787;
var map__12788__$1 = ((((!((map__12788 == null)))?((((map__12788.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12788.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12788):map__12788);
var v = cljs.core.get.call(null,map__12788__$1,new cljs.core.Keyword(null,"v","v",21465059));
var tests = cljs.core.get.call(null,map__12788__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var thens = cljs.core.get.call(null,map__12788__$1,new cljs.core.Keyword(null,"thens","thens",226631442));
var default$ = cljs.core.get.call(null,map__12788__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.call(null,map__12788__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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

var seq__12790_12808 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),cljs.core.interleave.call(null,tests,thens)));
var chunk__12791_12809 = null;
var count__12792_12810 = (0);
var i__12793_12811 = (0);
while(true){
if((i__12793_12811 < count__12792_12810)){
var vec__12794_12812 = cljs.core._nth.call(null,chunk__12791_12809,i__12793_12811);
var ts_12813 = cljs.core.nth.call(null,vec__12794_12812,(0),null);
var then_12814 = cljs.core.nth.call(null,vec__12794_12812,(1),null);
var seq__12797_12815 = cljs.core.seq.call(null,ts_12813);
var chunk__12798_12816 = null;
var count__12799_12817 = (0);
var i__12800_12818 = (0);
while(true){
if((i__12800_12818 < count__12799_12817)){
var test_12819 = cljs.core._nth.call(null,chunk__12798_12816,i__12800_12818);
cljs.compiler.emitln.call(null,"case ",test_12819,":");

var G__12820 = seq__12797_12815;
var G__12821 = chunk__12798_12816;
var G__12822 = count__12799_12817;
var G__12823 = (i__12800_12818 + (1));
seq__12797_12815 = G__12820;
chunk__12798_12816 = G__12821;
count__12799_12817 = G__12822;
i__12800_12818 = G__12823;
continue;
} else {
var temp__4657__auto___12824 = cljs.core.seq.call(null,seq__12797_12815);
if(temp__4657__auto___12824){
var seq__12797_12825__$1 = temp__4657__auto___12824;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12797_12825__$1)){
var c__9632__auto___12826 = cljs.core.chunk_first.call(null,seq__12797_12825__$1);
var G__12827 = cljs.core.chunk_rest.call(null,seq__12797_12825__$1);
var G__12828 = c__9632__auto___12826;
var G__12829 = cljs.core.count.call(null,c__9632__auto___12826);
var G__12830 = (0);
seq__12797_12815 = G__12827;
chunk__12798_12816 = G__12828;
count__12799_12817 = G__12829;
i__12800_12818 = G__12830;
continue;
} else {
var test_12831 = cljs.core.first.call(null,seq__12797_12825__$1);
cljs.compiler.emitln.call(null,"case ",test_12831,":");

var G__12832 = cljs.core.next.call(null,seq__12797_12825__$1);
var G__12833 = null;
var G__12834 = (0);
var G__12835 = (0);
seq__12797_12815 = G__12832;
chunk__12798_12816 = G__12833;
count__12799_12817 = G__12834;
i__12800_12818 = G__12835;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_12814);
} else {
cljs.compiler.emitln.call(null,then_12814);
}

cljs.compiler.emitln.call(null,"break;");

var G__12836 = seq__12790_12808;
var G__12837 = chunk__12791_12809;
var G__12838 = count__12792_12810;
var G__12839 = (i__12793_12811 + (1));
seq__12790_12808 = G__12836;
chunk__12791_12809 = G__12837;
count__12792_12810 = G__12838;
i__12793_12811 = G__12839;
continue;
} else {
var temp__4657__auto___12840 = cljs.core.seq.call(null,seq__12790_12808);
if(temp__4657__auto___12840){
var seq__12790_12841__$1 = temp__4657__auto___12840;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12790_12841__$1)){
var c__9632__auto___12842 = cljs.core.chunk_first.call(null,seq__12790_12841__$1);
var G__12843 = cljs.core.chunk_rest.call(null,seq__12790_12841__$1);
var G__12844 = c__9632__auto___12842;
var G__12845 = cljs.core.count.call(null,c__9632__auto___12842);
var G__12846 = (0);
seq__12790_12808 = G__12843;
chunk__12791_12809 = G__12844;
count__12792_12810 = G__12845;
i__12793_12811 = G__12846;
continue;
} else {
var vec__12801_12847 = cljs.core.first.call(null,seq__12790_12841__$1);
var ts_12848 = cljs.core.nth.call(null,vec__12801_12847,(0),null);
var then_12849 = cljs.core.nth.call(null,vec__12801_12847,(1),null);
var seq__12804_12850 = cljs.core.seq.call(null,ts_12848);
var chunk__12805_12851 = null;
var count__12806_12852 = (0);
var i__12807_12853 = (0);
while(true){
if((i__12807_12853 < count__12806_12852)){
var test_12854 = cljs.core._nth.call(null,chunk__12805_12851,i__12807_12853);
cljs.compiler.emitln.call(null,"case ",test_12854,":");

var G__12855 = seq__12804_12850;
var G__12856 = chunk__12805_12851;
var G__12857 = count__12806_12852;
var G__12858 = (i__12807_12853 + (1));
seq__12804_12850 = G__12855;
chunk__12805_12851 = G__12856;
count__12806_12852 = G__12857;
i__12807_12853 = G__12858;
continue;
} else {
var temp__4657__auto___12859__$1 = cljs.core.seq.call(null,seq__12804_12850);
if(temp__4657__auto___12859__$1){
var seq__12804_12860__$1 = temp__4657__auto___12859__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12804_12860__$1)){
var c__9632__auto___12861 = cljs.core.chunk_first.call(null,seq__12804_12860__$1);
var G__12862 = cljs.core.chunk_rest.call(null,seq__12804_12860__$1);
var G__12863 = c__9632__auto___12861;
var G__12864 = cljs.core.count.call(null,c__9632__auto___12861);
var G__12865 = (0);
seq__12804_12850 = G__12862;
chunk__12805_12851 = G__12863;
count__12806_12852 = G__12864;
i__12807_12853 = G__12865;
continue;
} else {
var test_12866 = cljs.core.first.call(null,seq__12804_12860__$1);
cljs.compiler.emitln.call(null,"case ",test_12866,":");

var G__12867 = cljs.core.next.call(null,seq__12804_12860__$1);
var G__12868 = null;
var G__12869 = (0);
var G__12870 = (0);
seq__12804_12850 = G__12867;
chunk__12805_12851 = G__12868;
count__12806_12852 = G__12869;
i__12807_12853 = G__12870;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_12849);
} else {
cljs.compiler.emitln.call(null,then_12849);
}

cljs.compiler.emitln.call(null,"break;");

var G__12871 = cljs.core.next.call(null,seq__12790_12841__$1);
var G__12872 = null;
var G__12873 = (0);
var G__12874 = (0);
seq__12790_12808 = G__12871;
chunk__12791_12809 = G__12872;
count__12792_12810 = G__12873;
i__12793_12811 = G__12874;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__12875){
var map__12876 = p__12875;
var map__12876__$1 = ((((!((map__12876 == null)))?((((map__12876.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12876.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12876):map__12876);
var throw$ = cljs.core.get.call(null,map__12876__$1,new cljs.core.Keyword(null,"throw","throw",-1044625833));
var env = cljs.core.get.call(null,map__12876__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var vec__12883 = ((!(((-1) === idx)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,t,(0),idx),cljs.core.subs.call(null,t,(idx + (1)),cljs.core.count.call(null,t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.call(null,vec__12883,(0),null);
var rstr = cljs.core.nth.call(null,vec__12883,(1),null);
var ret_t = (cljs.core.truth_(rstr)?cljs.compiler.resolve_type.call(null,env,rstr):null);
var axstr = cljs.core.subs.call(null,fstr,(9),(cljs.core.count.call(null,fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_.call(null,axstr))?null:cljs.core.map.call(null,cljs.core.comp.call(null,((function (idx,vec__12883,fstr,rstr,ret_t,axstr){
return (function (p1__12878_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__12878_SHARP_);
});})(idx,vec__12883,fstr,rstr,ret_t,axstr))
,clojure.string.trim),clojure.string.split.call(null,axstr,/,/)));
var G__12886 = [cljs.core.str("function("),cljs.core.str(clojure.string.join.call(null,",",args_ts)),cljs.core.str(")")].join('');
if(cljs.core.truth_(ret_t)){
return [cljs.core.str(G__12886),cljs.core.str(":"),cljs.core.str(ret_t)].join('');
} else {
return G__12886;
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
return (function (p1__12887_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__12887_SHARP_);
});})(ts__$1,xs))
,xs))),cljs.core.str("}")].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find.call(null,/@param/,line))){
var vec__12894 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__12895 = cljs.core.seq.call(null,vec__12894);
var first__12896 = cljs.core.first.call(null,seq__12895);
var seq__12895__$1 = cljs.core.next.call(null,seq__12895);
var p = first__12896;
var first__12896__$1 = cljs.core.first.call(null,seq__12895__$1);
var seq__12895__$2 = cljs.core.next.call(null,seq__12895__$1);
var ts = first__12896__$1;
var first__12896__$2 = cljs.core.first.call(null,seq__12895__$2);
var seq__12895__$3 = cljs.core.next.call(null,seq__12895__$2);
var n = first__12896__$2;
var xs = seq__12895__$3;
if(cljs.core.truth_((function (){var and__8806__auto__ = cljs.core._EQ_.call(null,"@param",p);
if(and__8806__auto__){
var and__8806__auto____$1 = ts;
if(cljs.core.truth_(and__8806__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__8806__auto____$1;
}
} else {
return and__8806__auto__;
}
})())){
return clojure.string.join.call(null," ",cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types.call(null,env,ts),cljs.compiler.munge.call(null,n)], null),xs));
} else {
return line;
}
} else {
if(cljs.core.truth_(cljs.core.re_find.call(null,/@return/,line))){
var vec__12897 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__12898 = cljs.core.seq.call(null,vec__12897);
var first__12899 = cljs.core.first.call(null,seq__12898);
var seq__12898__$1 = cljs.core.next.call(null,seq__12898);
var p = first__12899;
var first__12899__$1 = cljs.core.first.call(null,seq__12898__$1);
var seq__12898__$2 = cljs.core.next.call(null,seq__12898__$1);
var ts = first__12899__$1;
var xs = seq__12898__$2;
if(cljs.core.truth_((function (){var and__8806__auto__ = cljs.core._EQ_.call(null,"@return",p);
if(and__8806__auto__){
var and__8806__auto____$1 = ts;
if(cljs.core.truth_(and__8806__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__8806__auto____$1;
}
} else {
return and__8806__auto__;
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
var args12901 = [];
var len__9926__auto___12936 = arguments.length;
var i__9927__auto___12937 = (0);
while(true){
if((i__9927__auto___12937 < len__9926__auto___12936)){
args12901.push((arguments[i__9927__auto___12937]));

var G__12938 = (i__9927__auto___12937 + (1));
i__9927__auto___12937 = G__12938;
continue;
} else {
}
break;
}

var G__12903 = args12901.length;
switch (G__12903) {
case 2:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12901.length)].join('')));

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
var vec__12925 = cljs.core.map.call(null,((function (docs,docs__$1,docs__$2){
return (function (p1__12900_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))){
return cljs.compiler.munge_param_return.call(null,env,p1__12900_SHARP_);
} else {
return p1__12900_SHARP_;
}
});})(docs,docs__$1,docs__$2))
,clojure.string.split_lines.call(null,e));
var seq__12926 = cljs.core.seq.call(null,vec__12925);
var first__12927 = cljs.core.first.call(null,seq__12926);
var seq__12926__$1 = cljs.core.next.call(null,seq__12926);
var x = first__12927;
var ys = seq__12926__$1;
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,x,"*/","* /"));

var seq__12928 = cljs.core.seq.call(null,ys);
var chunk__12929 = null;
var count__12930 = (0);
var i__12931 = (0);
while(true){
if((i__12931 < count__12930)){
var next_line = cljs.core._nth.call(null,chunk__12929,i__12931);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));

var G__12940 = seq__12928;
var G__12941 = chunk__12929;
var G__12942 = count__12930;
var G__12943 = (i__12931 + (1));
seq__12928 = G__12940;
chunk__12929 = G__12941;
count__12930 = G__12942;
i__12931 = G__12943;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__12928);
if(temp__4657__auto__){
var seq__12928__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12928__$1)){
var c__9632__auto__ = cljs.core.chunk_first.call(null,seq__12928__$1);
var G__12944 = cljs.core.chunk_rest.call(null,seq__12928__$1);
var G__12945 = c__9632__auto__;
var G__12946 = cljs.core.count.call(null,c__9632__auto__);
var G__12947 = (0);
seq__12928 = G__12944;
chunk__12929 = G__12945;
count__12930 = G__12946;
i__12931 = G__12947;
continue;
} else {
var next_line = cljs.core.first.call(null,seq__12928__$1);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));

var G__12948 = cljs.core.next.call(null,seq__12928__$1);
var G__12949 = null;
var G__12950 = (0);
var G__12951 = (0);
seq__12928 = G__12948;
chunk__12929 = G__12949;
count__12930 = G__12950;
i__12931 = G__12951;
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

var seq__12932_12952 = cljs.core.seq.call(null,docs__$2);
var chunk__12933_12953 = null;
var count__12934_12954 = (0);
var i__12935_12955 = (0);
while(true){
if((i__12935_12955 < count__12934_12954)){
var e_12956 = cljs.core._nth.call(null,chunk__12933_12953,i__12935_12955);
if(cljs.core.truth_(e_12956)){
print_comment_lines.call(null,e_12956);
} else {
}

var G__12957 = seq__12932_12952;
var G__12958 = chunk__12933_12953;
var G__12959 = count__12934_12954;
var G__12960 = (i__12935_12955 + (1));
seq__12932_12952 = G__12957;
chunk__12933_12953 = G__12958;
count__12934_12954 = G__12959;
i__12935_12955 = G__12960;
continue;
} else {
var temp__4657__auto___12961 = cljs.core.seq.call(null,seq__12932_12952);
if(temp__4657__auto___12961){
var seq__12932_12962__$1 = temp__4657__auto___12961;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12932_12962__$1)){
var c__9632__auto___12963 = cljs.core.chunk_first.call(null,seq__12932_12962__$1);
var G__12964 = cljs.core.chunk_rest.call(null,seq__12932_12962__$1);
var G__12965 = c__9632__auto___12963;
var G__12966 = cljs.core.count.call(null,c__9632__auto___12963);
var G__12967 = (0);
seq__12932_12952 = G__12964;
chunk__12933_12953 = G__12965;
count__12934_12954 = G__12966;
i__12935_12955 = G__12967;
continue;
} else {
var e_12968 = cljs.core.first.call(null,seq__12932_12962__$1);
if(cljs.core.truth_(e_12968)){
print_comment_lines.call(null,e_12968);
} else {
}

var G__12969 = cljs.core.next.call(null,seq__12932_12962__$1);
var G__12970 = null;
var G__12971 = (0);
var G__12972 = (0);
seq__12932_12952 = G__12969;
chunk__12933_12953 = G__12970;
count__12934_12954 = G__12971;
i__12935_12955 = G__12972;
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
var and__8806__auto__ = cljs.core.some.call(null,((function (opts){
return (function (p1__12974_SHARP_){
return goog.string.startsWith(p1__12974_SHARP_,"@define");
});})(opts))
,jsdoc);
if(cljs.core.truth_(and__8806__auto__)){
var and__8806__auto____$1 = opts;
if(cljs.core.truth_(and__8806__auto____$1)){
var and__8806__auto____$2 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"none","none",1333468478));
if(and__8806__auto____$2){
var define = cljs.core.get_in.call(null,opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"closure-defines","closure-defines",-1213856476),[cljs.core.str(mname)].join('')], null));
if(cljs.core.truth_(cljs.compiler.valid_define_value_QMARK_.call(null,define))){
return cljs.core.pr_str.call(null,define);
} else {
return null;
}
} else {
return and__8806__auto____$2;
}
} else {
return and__8806__auto____$1;
}
} else {
return and__8806__auto__;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__12975){
var map__12976 = p__12975;
var map__12976__$1 = ((((!((map__12976 == null)))?((((map__12976.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12976.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12976):map__12976);
var name = cljs.core.get.call(null,map__12976__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var var$ = cljs.core.get.call(null,map__12976__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var init = cljs.core.get.call(null,map__12976__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var env = cljs.core.get.call(null,map__12976__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var doc = cljs.core.get.call(null,map__12976__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.call(null,map__12976__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var export$ = cljs.core.get.call(null,map__12976__$1,new cljs.core.Keyword(null,"export","export",214356590));
var test = cljs.core.get.call(null,map__12976__$1,new cljs.core.Keyword(null,"test","test",577538877));
var var_ast = cljs.core.get.call(null,map__12976__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
if(cljs.core.truth_((function (){var or__8818__auto__ = init;
if(cljs.core.truth_(or__8818__auto__)){
return or__8818__auto__;
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

if(cljs.core.truth_((function (){var and__8806__auto__ = cljs.analyzer._STAR_load_tests_STAR_;
if(cljs.core.truth_(and__8806__auto__)){
return test;
} else {
return and__8806__auto__;
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
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__12978){
var map__12999 = p__12978;
var map__12999__$1 = ((((!((map__12999 == null)))?((((map__12999.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12999.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12999):map__12999);
var name = cljs.core.get.call(null,map__12999__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__12999__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__12999__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.call(null,"arglist__");
var delegate_name = [cljs.core.str(cljs.compiler.munge.call(null,name)),cljs.core.str("__delegate")].join('');
cljs.compiler.emitln.call(null,"(function (",arglist,"){");

var seq__13001_13019 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.drop_last.call(null,(2),params)));
var chunk__13002_13020 = null;
var count__13003_13021 = (0);
var i__13004_13022 = (0);
while(true){
if((i__13004_13022 < count__13003_13021)){
var vec__13005_13023 = cljs.core._nth.call(null,chunk__13002_13020,i__13004_13022);
var i_13024 = cljs.core.nth.call(null,vec__13005_13023,(0),null);
var param_13025 = cljs.core.nth.call(null,vec__13005_13023,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_13025);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");

var G__13026 = seq__13001_13019;
var G__13027 = chunk__13002_13020;
var G__13028 = count__13003_13021;
var G__13029 = (i__13004_13022 + (1));
seq__13001_13019 = G__13026;
chunk__13002_13020 = G__13027;
count__13003_13021 = G__13028;
i__13004_13022 = G__13029;
continue;
} else {
var temp__4657__auto___13030 = cljs.core.seq.call(null,seq__13001_13019);
if(temp__4657__auto___13030){
var seq__13001_13031__$1 = temp__4657__auto___13030;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13001_13031__$1)){
var c__9632__auto___13032 = cljs.core.chunk_first.call(null,seq__13001_13031__$1);
var G__13033 = cljs.core.chunk_rest.call(null,seq__13001_13031__$1);
var G__13034 = c__9632__auto___13032;
var G__13035 = cljs.core.count.call(null,c__9632__auto___13032);
var G__13036 = (0);
seq__13001_13019 = G__13033;
chunk__13002_13020 = G__13034;
count__13003_13021 = G__13035;
i__13004_13022 = G__13036;
continue;
} else {
var vec__13008_13037 = cljs.core.first.call(null,seq__13001_13031__$1);
var i_13038 = cljs.core.nth.call(null,vec__13008_13037,(0),null);
var param_13039 = cljs.core.nth.call(null,vec__13008_13037,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_13039);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");

var G__13040 = cljs.core.next.call(null,seq__13001_13031__$1);
var G__13041 = null;
var G__13042 = (0);
var G__13043 = (0);
seq__13001_13019 = G__13040;
chunk__13002_13020 = G__13041;
count__13003_13021 = G__13042;
i__13004_13022 = G__13043;
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

var seq__13011_13044 = cljs.core.seq.call(null,params);
var chunk__13012_13045 = null;
var count__13013_13046 = (0);
var i__13014_13047 = (0);
while(true){
if((i__13014_13047 < count__13013_13046)){
var param_13048 = cljs.core._nth.call(null,chunk__13012_13045,i__13014_13047);
cljs.compiler.emit.call(null,param_13048);

if(cljs.core._EQ_.call(null,param_13048,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__13049 = seq__13011_13044;
var G__13050 = chunk__13012_13045;
var G__13051 = count__13013_13046;
var G__13052 = (i__13014_13047 + (1));
seq__13011_13044 = G__13049;
chunk__13012_13045 = G__13050;
count__13013_13046 = G__13051;
i__13014_13047 = G__13052;
continue;
} else {
var temp__4657__auto___13053 = cljs.core.seq.call(null,seq__13011_13044);
if(temp__4657__auto___13053){
var seq__13011_13054__$1 = temp__4657__auto___13053;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13011_13054__$1)){
var c__9632__auto___13055 = cljs.core.chunk_first.call(null,seq__13011_13054__$1);
var G__13056 = cljs.core.chunk_rest.call(null,seq__13011_13054__$1);
var G__13057 = c__9632__auto___13055;
var G__13058 = cljs.core.count.call(null,c__9632__auto___13055);
var G__13059 = (0);
seq__13011_13044 = G__13056;
chunk__13012_13045 = G__13057;
count__13013_13046 = G__13058;
i__13014_13047 = G__13059;
continue;
} else {
var param_13060 = cljs.core.first.call(null,seq__13011_13054__$1);
cljs.compiler.emit.call(null,param_13060);

if(cljs.core._EQ_.call(null,param_13060,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__13061 = cljs.core.next.call(null,seq__13011_13054__$1);
var G__13062 = null;
var G__13063 = (0);
var G__13064 = (0);
seq__13011_13044 = G__13061;
chunk__13012_13045 = G__13062;
count__13013_13046 = G__13063;
i__13014_13047 = G__13064;
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

var seq__13015_13065 = cljs.core.seq.call(null,params);
var chunk__13016_13066 = null;
var count__13017_13067 = (0);
var i__13018_13068 = (0);
while(true){
if((i__13018_13068 < count__13017_13067)){
var param_13069 = cljs.core._nth.call(null,chunk__13016_13066,i__13018_13068);
cljs.compiler.emit.call(null,param_13069);

if(cljs.core._EQ_.call(null,param_13069,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__13070 = seq__13015_13065;
var G__13071 = chunk__13016_13066;
var G__13072 = count__13017_13067;
var G__13073 = (i__13018_13068 + (1));
seq__13015_13065 = G__13070;
chunk__13016_13066 = G__13071;
count__13017_13067 = G__13072;
i__13018_13068 = G__13073;
continue;
} else {
var temp__4657__auto___13074 = cljs.core.seq.call(null,seq__13015_13065);
if(temp__4657__auto___13074){
var seq__13015_13075__$1 = temp__4657__auto___13074;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13015_13075__$1)){
var c__9632__auto___13076 = cljs.core.chunk_first.call(null,seq__13015_13075__$1);
var G__13077 = cljs.core.chunk_rest.call(null,seq__13015_13075__$1);
var G__13078 = c__9632__auto___13076;
var G__13079 = cljs.core.count.call(null,c__9632__auto___13076);
var G__13080 = (0);
seq__13015_13065 = G__13077;
chunk__13016_13066 = G__13078;
count__13017_13067 = G__13079;
i__13018_13068 = G__13080;
continue;
} else {
var param_13081 = cljs.core.first.call(null,seq__13015_13075__$1);
cljs.compiler.emit.call(null,param_13081);

if(cljs.core._EQ_.call(null,param_13081,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__13082 = cljs.core.next.call(null,seq__13015_13075__$1);
var G__13083 = null;
var G__13084 = (0);
var G__13085 = (0);
seq__13015_13065 = G__13082;
chunk__13016_13066 = G__13083;
count__13017_13067 = G__13084;
i__13018_13068 = G__13085;
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
var seq__13090 = cljs.core.seq.call(null,params);
var chunk__13091 = null;
var count__13092 = (0);
var i__13093 = (0);
while(true){
if((i__13093 < count__13092)){
var param = cljs.core._nth.call(null,chunk__13091,i__13093);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__13094 = seq__13090;
var G__13095 = chunk__13091;
var G__13096 = count__13092;
var G__13097 = (i__13093 + (1));
seq__13090 = G__13094;
chunk__13091 = G__13095;
count__13092 = G__13096;
i__13093 = G__13097;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__13090);
if(temp__4657__auto__){
var seq__13090__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13090__$1)){
var c__9632__auto__ = cljs.core.chunk_first.call(null,seq__13090__$1);
var G__13098 = cljs.core.chunk_rest.call(null,seq__13090__$1);
var G__13099 = c__9632__auto__;
var G__13100 = cljs.core.count.call(null,c__9632__auto__);
var G__13101 = (0);
seq__13090 = G__13098;
chunk__13091 = G__13099;
count__13092 = G__13100;
i__13093 = G__13101;
continue;
} else {
var param = cljs.core.first.call(null,seq__13090__$1);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__13102 = cljs.core.next.call(null,seq__13090__$1);
var G__13103 = null;
var G__13104 = (0);
var G__13105 = (0);
seq__13090 = G__13102;
chunk__13091 = G__13103;
count__13092 = G__13104;
i__13093 = G__13105;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__13106){
var map__13109 = p__13106;
var map__13109__$1 = ((((!((map__13109 == null)))?((((map__13109.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13109.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13109):map__13109);
var type = cljs.core.get.call(null,map__13109__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__13109__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.call(null,map__13109__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.call(null,map__13109__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.call(null,map__13109__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__13109__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__13109__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.call(null,map__13109__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__12550__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12550__auto__))){
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12550__auto__))){
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
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__13111){
var map__13122 = p__13111;
var map__13122__$1 = ((((!((map__13122 == null)))?((((map__13122.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13122.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13122):map__13122);
var f = map__13122__$1;
var type = cljs.core.get.call(null,map__13122__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__13122__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.call(null,map__13122__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.call(null,map__13122__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.call(null,map__13122__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__13122__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__13122__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.call(null,map__13122__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__12550__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12550__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var name_13132__$1 = (function (){var or__8818__auto__ = name;
if(cljs.core.truth_(or__8818__auto__)){
return or__8818__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_13133 = cljs.compiler.munge.call(null,name_13132__$1);
var delegate_name_13134 = [cljs.core.str(mname_13133),cljs.core.str("__delegate")].join('');
cljs.compiler.emitln.call(null,"(function() { ");

cljs.compiler.emits.call(null,"var ",delegate_name_13134," = function (");

var seq__13124_13135 = cljs.core.seq.call(null,params);
var chunk__13125_13136 = null;
var count__13126_13137 = (0);
var i__13127_13138 = (0);
while(true){
if((i__13127_13138 < count__13126_13137)){
var param_13139 = cljs.core._nth.call(null,chunk__13125_13136,i__13127_13138);
cljs.compiler.emit.call(null,param_13139);

if(cljs.core._EQ_.call(null,param_13139,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__13140 = seq__13124_13135;
var G__13141 = chunk__13125_13136;
var G__13142 = count__13126_13137;
var G__13143 = (i__13127_13138 + (1));
seq__13124_13135 = G__13140;
chunk__13125_13136 = G__13141;
count__13126_13137 = G__13142;
i__13127_13138 = G__13143;
continue;
} else {
var temp__4657__auto___13144 = cljs.core.seq.call(null,seq__13124_13135);
if(temp__4657__auto___13144){
var seq__13124_13145__$1 = temp__4657__auto___13144;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13124_13145__$1)){
var c__9632__auto___13146 = cljs.core.chunk_first.call(null,seq__13124_13145__$1);
var G__13147 = cljs.core.chunk_rest.call(null,seq__13124_13145__$1);
var G__13148 = c__9632__auto___13146;
var G__13149 = cljs.core.count.call(null,c__9632__auto___13146);
var G__13150 = (0);
seq__13124_13135 = G__13147;
chunk__13125_13136 = G__13148;
count__13126_13137 = G__13149;
i__13127_13138 = G__13150;
continue;
} else {
var param_13151 = cljs.core.first.call(null,seq__13124_13145__$1);
cljs.compiler.emit.call(null,param_13151);

if(cljs.core._EQ_.call(null,param_13151,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__13152 = cljs.core.next.call(null,seq__13124_13145__$1);
var G__13153 = null;
var G__13154 = (0);
var G__13155 = (0);
seq__13124_13135 = G__13152;
chunk__13125_13136 = G__13153;
count__13126_13137 = G__13154;
i__13127_13138 = G__13155;
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

cljs.compiler.emitln.call(null,"var ",mname_13133," = function (",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",(cljs.core.count.call(null,params) - (1)),") {");

var a_13156 = cljs.compiler.emit_arguments_to_array.call(null,(cljs.core.count.call(null,params) - (1)));
cljs.compiler.emitln.call(null,"  ",cljs.core.last.call(null,params)," = new cljs.core.IndexedSeq(",a_13156,",0);");

cljs.compiler.emitln.call(null,"} ");
} else {
}

cljs.compiler.emits.call(null,"return ",delegate_name_13134,".call(this,");

var seq__13128_13157 = cljs.core.seq.call(null,params);
var chunk__13129_13158 = null;
var count__13130_13159 = (0);
var i__13131_13160 = (0);
while(true){
if((i__13131_13160 < count__13130_13159)){
var param_13161 = cljs.core._nth.call(null,chunk__13129_13158,i__13131_13160);
cljs.compiler.emit.call(null,param_13161);

if(cljs.core._EQ_.call(null,param_13161,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__13162 = seq__13128_13157;
var G__13163 = chunk__13129_13158;
var G__13164 = count__13130_13159;
var G__13165 = (i__13131_13160 + (1));
seq__13128_13157 = G__13162;
chunk__13129_13158 = G__13163;
count__13130_13159 = G__13164;
i__13131_13160 = G__13165;
continue;
} else {
var temp__4657__auto___13166 = cljs.core.seq.call(null,seq__13128_13157);
if(temp__4657__auto___13166){
var seq__13128_13167__$1 = temp__4657__auto___13166;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13128_13167__$1)){
var c__9632__auto___13168 = cljs.core.chunk_first.call(null,seq__13128_13167__$1);
var G__13169 = cljs.core.chunk_rest.call(null,seq__13128_13167__$1);
var G__13170 = c__9632__auto___13168;
var G__13171 = cljs.core.count.call(null,c__9632__auto___13168);
var G__13172 = (0);
seq__13128_13157 = G__13169;
chunk__13129_13158 = G__13170;
count__13130_13159 = G__13171;
i__13131_13160 = G__13172;
continue;
} else {
var param_13173 = cljs.core.first.call(null,seq__13128_13167__$1);
cljs.compiler.emit.call(null,param_13173);

if(cljs.core._EQ_.call(null,param_13173,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__13174 = cljs.core.next.call(null,seq__13128_13167__$1);
var G__13175 = null;
var G__13176 = (0);
var G__13177 = (0);
seq__13128_13157 = G__13174;
chunk__13129_13158 = G__13175;
count__13130_13159 = G__13176;
i__13131_13160 = G__13177;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,");");

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,mname_13133,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.call(null,mname_13133,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to.call(null,cljs.core.assoc.call(null,f,new cljs.core.Keyword(null,"name","name",1843675177),name_13132__$1));

cljs.compiler.emitln.call(null,";");

cljs.compiler.emitln.call(null,mname_13133,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_13134,";");

cljs.compiler.emitln.call(null,"return ",mname_13133,";");

cljs.compiler.emitln.call(null,"})()");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12550__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__13181){
var map__13182 = p__13181;
var map__13182__$1 = ((((!((map__13182 == null)))?((((map__13182.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13182.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13182):map__13182);
var name = cljs.core.get.call(null,map__13182__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__13182__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.call(null,map__13182__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.call(null,map__13182__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var variadic = cljs.core.get.call(null,map__13182__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var recur_frames = cljs.core.get.call(null,map__13182__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var loop_lets = cljs.core.get.call(null,map__13182__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var loop_locals = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.compiler.munge,cljs.core.concat.call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.filter.call(null,((function (map__13182,map__13182__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__13178_SHARP_){
var and__8806__auto__ = p1__13178_SHARP_;
if(cljs.core.truth_(and__8806__auto__)){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__13178_SHARP_));
} else {
return and__8806__auto__;
}
});})(map__13182,map__13182__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
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
var name_13217__$1 = (function (){var or__8818__auto__ = name;
if(cljs.core.truth_(or__8818__auto__)){
return or__8818__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_13218 = cljs.compiler.munge.call(null,name_13217__$1);
var maxparams_13219 = cljs.core.apply.call(null,cljs.core.max_key,cljs.core.count,cljs.core.map.call(null,new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_13220 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (name_13217__$1,mname_13218,maxparams_13219,loop_locals,map__13182,map__13182__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.call(null,cljs.core.symbol.call(null,[cljs.core.str(mname_13218),cljs.core.str("__"),cljs.core.str(cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
});})(name_13217__$1,mname_13218,maxparams_13219,loop_locals,map__13182,map__13182__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,methods$));
var ms_13221 = cljs.core.sort_by.call(null,((function (name_13217__$1,mname_13218,maxparams_13219,mmap_13220,loop_locals,map__13182,map__13182__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__13179_SHARP_){
return cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__13179_SHARP_)));
});})(name_13217__$1,mname_13218,maxparams_13219,mmap_13220,loop_locals,map__13182,map__13182__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,cljs.core.seq.call(null,mmap_13220));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"(function() {");

cljs.compiler.emitln.call(null,"var ",mname_13218," = null;");

var seq__13184_13222 = cljs.core.seq.call(null,ms_13221);
var chunk__13185_13223 = null;
var count__13186_13224 = (0);
var i__13187_13225 = (0);
while(true){
if((i__13187_13225 < count__13186_13224)){
var vec__13188_13226 = cljs.core._nth.call(null,chunk__13185_13223,i__13187_13225);
var n_13227 = cljs.core.nth.call(null,vec__13188_13226,(0),null);
var meth_13228 = cljs.core.nth.call(null,vec__13188_13226,(1),null);
cljs.compiler.emits.call(null,"var ",n_13227," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_13228))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_13228);
} else {
cljs.compiler.emit_fn_method.call(null,meth_13228);
}

cljs.compiler.emitln.call(null,";");

var G__13229 = seq__13184_13222;
var G__13230 = chunk__13185_13223;
var G__13231 = count__13186_13224;
var G__13232 = (i__13187_13225 + (1));
seq__13184_13222 = G__13229;
chunk__13185_13223 = G__13230;
count__13186_13224 = G__13231;
i__13187_13225 = G__13232;
continue;
} else {
var temp__4657__auto___13233 = cljs.core.seq.call(null,seq__13184_13222);
if(temp__4657__auto___13233){
var seq__13184_13234__$1 = temp__4657__auto___13233;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13184_13234__$1)){
var c__9632__auto___13235 = cljs.core.chunk_first.call(null,seq__13184_13234__$1);
var G__13236 = cljs.core.chunk_rest.call(null,seq__13184_13234__$1);
var G__13237 = c__9632__auto___13235;
var G__13238 = cljs.core.count.call(null,c__9632__auto___13235);
var G__13239 = (0);
seq__13184_13222 = G__13236;
chunk__13185_13223 = G__13237;
count__13186_13224 = G__13238;
i__13187_13225 = G__13239;
continue;
} else {
var vec__13191_13240 = cljs.core.first.call(null,seq__13184_13234__$1);
var n_13241 = cljs.core.nth.call(null,vec__13191_13240,(0),null);
var meth_13242 = cljs.core.nth.call(null,vec__13191_13240,(1),null);
cljs.compiler.emits.call(null,"var ",n_13241," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_13242))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_13242);
} else {
cljs.compiler.emit_fn_method.call(null,meth_13242);
}

cljs.compiler.emitln.call(null,";");

var G__13243 = cljs.core.next.call(null,seq__13184_13234__$1);
var G__13244 = null;
var G__13245 = (0);
var G__13246 = (0);
seq__13184_13222 = G__13243;
chunk__13185_13223 = G__13244;
count__13186_13224 = G__13245;
i__13187_13225 = G__13246;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,mname_13218," = function(",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,maxparams_13219),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_13219)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,maxparams_13219));

cljs.compiler.emitln.call(null," = var_args;");
} else {
}

cljs.compiler.emitln.call(null,"switch(arguments.length){");

var seq__13194_13247 = cljs.core.seq.call(null,ms_13221);
var chunk__13195_13248 = null;
var count__13196_13249 = (0);
var i__13197_13250 = (0);
while(true){
if((i__13197_13250 < count__13196_13249)){
var vec__13198_13251 = cljs.core._nth.call(null,chunk__13195_13248,i__13197_13250);
var n_13252 = cljs.core.nth.call(null,vec__13198_13251,(0),null);
var meth_13253 = cljs.core.nth.call(null,vec__13198_13251,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_13253))){
cljs.compiler.emitln.call(null,"default:");

var restarg_13254 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_13254," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_13255 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_13254," = new cljs.core.IndexedSeq(",a_13255,",0);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_13252,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_13219)),(((cljs.core.count.call(null,maxparams_13219) > (1)))?", ":null),restarg_13254,");");
} else {
var pcnt_13256 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_13253));
cljs.compiler.emitln.call(null,"case ",pcnt_13256,":");

cljs.compiler.emitln.call(null,"return ",n_13252,".call(this",(((pcnt_13256 === (0)))?null:cljs.core._conj.call(null,(function (){var x__9655__auto__ = cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_13256,maxparams_13219));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),",")),");");
}

var G__13257 = seq__13194_13247;
var G__13258 = chunk__13195_13248;
var G__13259 = count__13196_13249;
var G__13260 = (i__13197_13250 + (1));
seq__13194_13247 = G__13257;
chunk__13195_13248 = G__13258;
count__13196_13249 = G__13259;
i__13197_13250 = G__13260;
continue;
} else {
var temp__4657__auto___13261 = cljs.core.seq.call(null,seq__13194_13247);
if(temp__4657__auto___13261){
var seq__13194_13262__$1 = temp__4657__auto___13261;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13194_13262__$1)){
var c__9632__auto___13263 = cljs.core.chunk_first.call(null,seq__13194_13262__$1);
var G__13264 = cljs.core.chunk_rest.call(null,seq__13194_13262__$1);
var G__13265 = c__9632__auto___13263;
var G__13266 = cljs.core.count.call(null,c__9632__auto___13263);
var G__13267 = (0);
seq__13194_13247 = G__13264;
chunk__13195_13248 = G__13265;
count__13196_13249 = G__13266;
i__13197_13250 = G__13267;
continue;
} else {
var vec__13201_13268 = cljs.core.first.call(null,seq__13194_13262__$1);
var n_13269 = cljs.core.nth.call(null,vec__13201_13268,(0),null);
var meth_13270 = cljs.core.nth.call(null,vec__13201_13268,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_13270))){
cljs.compiler.emitln.call(null,"default:");

var restarg_13271 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_13271," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_13272 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_13271," = new cljs.core.IndexedSeq(",a_13272,",0);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_13269,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_13219)),(((cljs.core.count.call(null,maxparams_13219) > (1)))?", ":null),restarg_13271,");");
} else {
var pcnt_13273 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_13270));
cljs.compiler.emitln.call(null,"case ",pcnt_13273,":");

cljs.compiler.emitln.call(null,"return ",n_13269,".call(this",(((pcnt_13273 === (0)))?null:cljs.core._conj.call(null,(function (){var x__9655__auto__ = cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_13273,maxparams_13219));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),",")),");");
}

var G__13274 = cljs.core.next.call(null,seq__13194_13262__$1);
var G__13275 = null;
var G__13276 = (0);
var G__13277 = (0);
seq__13194_13247 = G__13274;
chunk__13195_13248 = G__13275;
count__13196_13249 = G__13276;
i__13197_13250 = G__13277;
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
cljs.compiler.emitln.call(null,mname_13218,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.call(null,mname_13218,".cljs$lang$applyTo = ",cljs.core.some.call(null,((function (name_13217__$1,mname_13218,maxparams_13219,mmap_13220,ms_13221,loop_locals,map__13182,map__13182__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__13180_SHARP_){
var vec__13204 = p1__13180_SHARP_;
var n = cljs.core.nth.call(null,vec__13204,(0),null);
var m = cljs.core.nth.call(null,vec__13204,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
});})(name_13217__$1,mname_13218,maxparams_13219,mmap_13220,ms_13221,loop_locals,map__13182,map__13182__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,ms_13221),".cljs$lang$applyTo;");
} else {
}

var seq__13207_13278 = cljs.core.seq.call(null,ms_13221);
var chunk__13208_13279 = null;
var count__13209_13280 = (0);
var i__13210_13281 = (0);
while(true){
if((i__13210_13281 < count__13209_13280)){
var vec__13211_13282 = cljs.core._nth.call(null,chunk__13208_13279,i__13210_13281);
var n_13283 = cljs.core.nth.call(null,vec__13211_13282,(0),null);
var meth_13284 = cljs.core.nth.call(null,vec__13211_13282,(1),null);
var c_13285 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_13284));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_13284))){
cljs.compiler.emitln.call(null,mname_13218,".cljs$core$IFn$_invoke$arity$variadic = ",n_13283,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_13218,".cljs$core$IFn$_invoke$arity$",c_13285," = ",n_13283,";");
}

var G__13286 = seq__13207_13278;
var G__13287 = chunk__13208_13279;
var G__13288 = count__13209_13280;
var G__13289 = (i__13210_13281 + (1));
seq__13207_13278 = G__13286;
chunk__13208_13279 = G__13287;
count__13209_13280 = G__13288;
i__13210_13281 = G__13289;
continue;
} else {
var temp__4657__auto___13290 = cljs.core.seq.call(null,seq__13207_13278);
if(temp__4657__auto___13290){
var seq__13207_13291__$1 = temp__4657__auto___13290;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13207_13291__$1)){
var c__9632__auto___13292 = cljs.core.chunk_first.call(null,seq__13207_13291__$1);
var G__13293 = cljs.core.chunk_rest.call(null,seq__13207_13291__$1);
var G__13294 = c__9632__auto___13292;
var G__13295 = cljs.core.count.call(null,c__9632__auto___13292);
var G__13296 = (0);
seq__13207_13278 = G__13293;
chunk__13208_13279 = G__13294;
count__13209_13280 = G__13295;
i__13210_13281 = G__13296;
continue;
} else {
var vec__13214_13297 = cljs.core.first.call(null,seq__13207_13291__$1);
var n_13298 = cljs.core.nth.call(null,vec__13214_13297,(0),null);
var meth_13299 = cljs.core.nth.call(null,vec__13214_13297,(1),null);
var c_13300 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_13299));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_13299))){
cljs.compiler.emitln.call(null,mname_13218,".cljs$core$IFn$_invoke$arity$variadic = ",n_13298,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_13218,".cljs$core$IFn$_invoke$arity$",c_13300," = ",n_13298,";");
}

var G__13301 = cljs.core.next.call(null,seq__13207_13291__$1);
var G__13302 = null;
var G__13303 = (0);
var G__13304 = (0);
seq__13207_13278 = G__13301;
chunk__13208_13279 = G__13302;
count__13209_13280 = G__13303;
i__13210_13281 = G__13304;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"return ",mname_13218,";");

cljs.compiler.emitln.call(null,"})()");
}

if(loop_locals){
return cljs.compiler.emitln.call(null,";})(",cljs.compiler.comma_sep.call(null,loop_locals),"))");
} else {
return null;
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"do","do",46310725),(function (p__13305){
var map__13306 = p__13305;
var map__13306__$1 = ((((!((map__13306 == null)))?((((map__13306.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13306.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13306):map__13306);
var statements = cljs.core.get.call(null,map__13306__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.call(null,map__13306__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.call(null,map__13306__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var and__8806__auto__ = statements;
if(cljs.core.truth_(and__8806__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context);
} else {
return and__8806__auto__;
}
})())){
cljs.compiler.emitln.call(null,"(function (){");
} else {
}

var seq__13308_13312 = cljs.core.seq.call(null,statements);
var chunk__13309_13313 = null;
var count__13310_13314 = (0);
var i__13311_13315 = (0);
while(true){
if((i__13311_13315 < count__13310_13314)){
var s_13316 = cljs.core._nth.call(null,chunk__13309_13313,i__13311_13315);
cljs.compiler.emitln.call(null,s_13316);

var G__13317 = seq__13308_13312;
var G__13318 = chunk__13309_13313;
var G__13319 = count__13310_13314;
var G__13320 = (i__13311_13315 + (1));
seq__13308_13312 = G__13317;
chunk__13309_13313 = G__13318;
count__13310_13314 = G__13319;
i__13311_13315 = G__13320;
continue;
} else {
var temp__4657__auto___13321 = cljs.core.seq.call(null,seq__13308_13312);
if(temp__4657__auto___13321){
var seq__13308_13322__$1 = temp__4657__auto___13321;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13308_13322__$1)){
var c__9632__auto___13323 = cljs.core.chunk_first.call(null,seq__13308_13322__$1);
var G__13324 = cljs.core.chunk_rest.call(null,seq__13308_13322__$1);
var G__13325 = c__9632__auto___13323;
var G__13326 = cljs.core.count.call(null,c__9632__auto___13323);
var G__13327 = (0);
seq__13308_13312 = G__13324;
chunk__13309_13313 = G__13325;
count__13310_13314 = G__13326;
i__13311_13315 = G__13327;
continue;
} else {
var s_13328 = cljs.core.first.call(null,seq__13308_13322__$1);
cljs.compiler.emitln.call(null,s_13328);

var G__13329 = cljs.core.next.call(null,seq__13308_13322__$1);
var G__13330 = null;
var G__13331 = (0);
var G__13332 = (0);
seq__13308_13312 = G__13329;
chunk__13309_13313 = G__13330;
count__13310_13314 = G__13331;
i__13311_13315 = G__13332;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emit.call(null,ret);

if(cljs.core.truth_((function (){var and__8806__auto__ = statements;
if(cljs.core.truth_(and__8806__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context);
} else {
return and__8806__auto__;
}
})())){
return cljs.compiler.emitln.call(null,"})()");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__13333){
var map__13334 = p__13333;
var map__13334__$1 = ((((!((map__13334 == null)))?((((map__13334.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13334.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13334):map__13334);
var env = cljs.core.get.call(null,map__13334__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var try$ = cljs.core.get.call(null,map__13334__$1,new cljs.core.Keyword(null,"try","try",1380742522));
var catch$ = cljs.core.get.call(null,map__13334__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.call(null,map__13334__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.call(null,map__13334__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var or__8818__auto__ = name;
if(cljs.core.truth_(or__8818__auto__)){
return or__8818__auto__;
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
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__13336,is_loop){
var map__13348 = p__13336;
var map__13348__$1 = ((((!((map__13348 == null)))?((((map__13348.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13348.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13348):map__13348);
var bindings = cljs.core.get.call(null,map__13348__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.call(null,map__13348__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__13348__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var _STAR_lexical_renames_STAR_13350_13359 = cljs.compiler._STAR_lexical_renames_STAR_;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.into.call(null,cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.call(null,((function (_STAR_lexical_renames_STAR_13350_13359,context,map__13348,map__13348__$1,bindings,expr,env){
return (function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope.call(null,binding),cljs.core.gensym.call(null,[cljs.core.str(name),cljs.core.str("-")].join(''))],null));
});})(_STAR_lexical_renames_STAR_13350_13359,context,map__13348,map__13348__$1,bindings,expr,env))
,bindings):null));

try{var seq__13351_13360 = cljs.core.seq.call(null,bindings);
var chunk__13352_13361 = null;
var count__13353_13362 = (0);
var i__13354_13363 = (0);
while(true){
if((i__13354_13363 < count__13353_13362)){
var map__13355_13364 = cljs.core._nth.call(null,chunk__13352_13361,i__13354_13363);
var map__13355_13365__$1 = ((((!((map__13355_13364 == null)))?((((map__13355_13364.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13355_13364.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13355_13364):map__13355_13364);
var binding_13366 = map__13355_13365__$1;
var init_13367 = cljs.core.get.call(null,map__13355_13365__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_13366);

cljs.compiler.emitln.call(null," = ",init_13367,";");

var G__13368 = seq__13351_13360;
var G__13369 = chunk__13352_13361;
var G__13370 = count__13353_13362;
var G__13371 = (i__13354_13363 + (1));
seq__13351_13360 = G__13368;
chunk__13352_13361 = G__13369;
count__13353_13362 = G__13370;
i__13354_13363 = G__13371;
continue;
} else {
var temp__4657__auto___13372 = cljs.core.seq.call(null,seq__13351_13360);
if(temp__4657__auto___13372){
var seq__13351_13373__$1 = temp__4657__auto___13372;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13351_13373__$1)){
var c__9632__auto___13374 = cljs.core.chunk_first.call(null,seq__13351_13373__$1);
var G__13375 = cljs.core.chunk_rest.call(null,seq__13351_13373__$1);
var G__13376 = c__9632__auto___13374;
var G__13377 = cljs.core.count.call(null,c__9632__auto___13374);
var G__13378 = (0);
seq__13351_13360 = G__13375;
chunk__13352_13361 = G__13376;
count__13353_13362 = G__13377;
i__13354_13363 = G__13378;
continue;
} else {
var map__13357_13379 = cljs.core.first.call(null,seq__13351_13373__$1);
var map__13357_13380__$1 = ((((!((map__13357_13379 == null)))?((((map__13357_13379.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13357_13379.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13357_13379):map__13357_13379);
var binding_13381 = map__13357_13380__$1;
var init_13382 = cljs.core.get.call(null,map__13357_13380__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_13381);

cljs.compiler.emitln.call(null," = ",init_13382,";");

var G__13383 = cljs.core.next.call(null,seq__13351_13373__$1);
var G__13384 = null;
var G__13385 = (0);
var G__13386 = (0);
seq__13351_13360 = G__13383;
chunk__13352_13361 = G__13384;
count__13353_13362 = G__13385;
i__13354_13363 = G__13386;
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
}finally {cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR_13350_13359;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__13387){
var map__13388 = p__13387;
var map__13388__$1 = ((((!((map__13388 == null)))?((((map__13388.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13388.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13388):map__13388);
var frame = cljs.core.get.call(null,map__13388__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.call(null,map__13388__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.call(null,map__13388__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,exprs),cljs.core.repeatedly.call(null,cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__9736__auto___13390 = cljs.core.count.call(null,exprs);
var i_13391 = (0);
while(true){
if((i_13391 < n__9736__auto___13390)){
cljs.compiler.emitln.call(null,"var ",temps.call(null,i_13391)," = ",exprs.call(null,i_13391),";");

var G__13392 = (i_13391 + (1));
i_13391 = G__13392;
continue;
} else {
}
break;
}

var n__9736__auto___13393 = cljs.core.count.call(null,exprs);
var i_13394 = (0);
while(true){
if((i_13394 < n__9736__auto___13393)){
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,params.call(null,i_13394))," = ",temps.call(null,i_13394),";");

var G__13395 = (i_13394 + (1));
i_13394 = G__13395;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.call(null,"continue;");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__13396){
var map__13397 = p__13396;
var map__13397__$1 = ((((!((map__13397 == null)))?((((map__13397.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13397.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13397):map__13397);
var bindings = cljs.core.get.call(null,map__13397__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.call(null,map__13397__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__13397__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var seq__13399_13407 = cljs.core.seq.call(null,bindings);
var chunk__13400_13408 = null;
var count__13401_13409 = (0);
var i__13402_13410 = (0);
while(true){
if((i__13402_13410 < count__13401_13409)){
var map__13403_13411 = cljs.core._nth.call(null,chunk__13400_13408,i__13402_13410);
var map__13403_13412__$1 = ((((!((map__13403_13411 == null)))?((((map__13403_13411.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13403_13411.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13403_13411):map__13403_13411);
var binding_13413 = map__13403_13412__$1;
var init_13414 = cljs.core.get.call(null,map__13403_13412__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_13413)," = ",init_13414,";");

var G__13415 = seq__13399_13407;
var G__13416 = chunk__13400_13408;
var G__13417 = count__13401_13409;
var G__13418 = (i__13402_13410 + (1));
seq__13399_13407 = G__13415;
chunk__13400_13408 = G__13416;
count__13401_13409 = G__13417;
i__13402_13410 = G__13418;
continue;
} else {
var temp__4657__auto___13419 = cljs.core.seq.call(null,seq__13399_13407);
if(temp__4657__auto___13419){
var seq__13399_13420__$1 = temp__4657__auto___13419;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13399_13420__$1)){
var c__9632__auto___13421 = cljs.core.chunk_first.call(null,seq__13399_13420__$1);
var G__13422 = cljs.core.chunk_rest.call(null,seq__13399_13420__$1);
var G__13423 = c__9632__auto___13421;
var G__13424 = cljs.core.count.call(null,c__9632__auto___13421);
var G__13425 = (0);
seq__13399_13407 = G__13422;
chunk__13400_13408 = G__13423;
count__13401_13409 = G__13424;
i__13402_13410 = G__13425;
continue;
} else {
var map__13405_13426 = cljs.core.first.call(null,seq__13399_13420__$1);
var map__13405_13427__$1 = ((((!((map__13405_13426 == null)))?((((map__13405_13426.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13405_13426.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13405_13426):map__13405_13426);
var binding_13428 = map__13405_13427__$1;
var init_13429 = cljs.core.get.call(null,map__13405_13427__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_13428)," = ",init_13429,";");

var G__13430 = cljs.core.next.call(null,seq__13399_13420__$1);
var G__13431 = null;
var G__13432 = (0);
var G__13433 = (0);
seq__13399_13407 = G__13430;
chunk__13400_13408 = G__13431;
count__13401_13409 = G__13432;
i__13402_13410 = G__13433;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__13436){
var map__13437 = p__13436;
var map__13437__$1 = ((((!((map__13437 == null)))?((((map__13437.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13437.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13437):map__13437);
var expr = map__13437__$1;
var f = cljs.core.get.call(null,map__13437__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var args = cljs.core.get.call(null,map__13437__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__13437__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(f);
var fn_QMARK_ = (function (){var and__8806__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__8806__auto__)){
var and__8806__auto____$1 = cljs.core.not.call(null,new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(info));
if(and__8806__auto____$1){
return new cljs.core.Keyword(null,"fn-var","fn-var",1086204730).cljs$core$IFn$_invoke$arity$1(info);
} else {
return and__8806__auto____$1;
}
} else {
return and__8806__auto__;
}
})();
var protocol = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(info);
var tag = cljs.analyzer.infer_tag.call(null,env,cljs.core.first.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr)));
var proto_QMARK_ = (function (){var and__8806__auto__ = protocol;
if(cljs.core.truth_(and__8806__auto__)){
var and__8806__auto____$1 = tag;
if(cljs.core.truth_(and__8806__auto____$1)){
var or__8818__auto__ = (function (){var and__8806__auto____$2 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__8806__auto____$2)){
var and__8806__auto____$3 = protocol;
if(cljs.core.truth_(and__8806__auto____$3)){
return cljs.core._EQ_.call(null,tag,new cljs.core.Symbol(null,"not-native","not-native",-236392494,null));
} else {
return and__8806__auto____$3;
}
} else {
return and__8806__auto____$2;
}
})();
if(cljs.core.truth_(or__8818__auto__)){
return or__8818__auto__;
} else {
var and__8806__auto____$2 = (function (){var or__8818__auto____$1 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(or__8818__auto____$1)){
return or__8818__auto____$1;
} else {
return new cljs.core.Keyword(null,"protocol-inline","protocol-inline",1550487556).cljs$core$IFn$_invoke$arity$1(env);
}
})();
if(cljs.core.truth_(and__8806__auto____$2)){
var or__8818__auto____$1 = cljs.core._EQ_.call(null,protocol,tag);
if(or__8818__auto____$1){
return or__8818__auto____$1;
} else {
var and__8806__auto____$3 = !(cljs.core.set_QMARK_.call(null,tag));
if(and__8806__auto____$3){
var and__8806__auto____$4 = cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [new cljs.core.Symbol(null,"clj","clj",980036099,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null,new cljs.core.Symbol(null,"object","object",-1179821820,null),null,new cljs.core.Symbol(null,"any","any",-948528346,null),null,new cljs.core.Symbol(null,"number","number",-1084057331,null),null,new cljs.core.Symbol(null,"clj-or-nil","clj-or-nil",-2008798668,null),null,new cljs.core.Symbol(null,"array","array",-440182315,null),null,new cljs.core.Symbol(null,"string","string",-349010059,null),null,new cljs.core.Symbol(null,"function","function",-486723946,null),null,new cljs.core.Symbol(null,"clj-nil","clj-nil",1321798654,null),null], null), null).call(null,tag));
if(and__8806__auto____$4){
var temp__4657__auto__ = new cljs.core.Keyword(null,"protocols","protocols",-5615896).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_existing_var.call(null,env,cljs.core.symbol.call(null,cljs.core.name.call(null,tag))));
if(cljs.core.truth_(temp__4657__auto__)){
var ps = temp__4657__auto__;
return ps.call(null,protocol);
} else {
return null;
}
} else {
return and__8806__auto____$4;
}
} else {
return and__8806__auto____$3;
}
}
} else {
return and__8806__auto____$2;
}
}
} else {
return and__8806__auto____$1;
}
} else {
return and__8806__auto__;
}
})();
var opt_not_QMARK_ = (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null))) && (cljs.core._EQ_.call(null,cljs.analyzer.infer_tag.call(null,env,cljs.core.first.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr))),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)));
var ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(info);
var js_QMARK_ = (cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"js","js",-886355190,null))) || (cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"Math","Math",2033287572,null)));
var goog_QMARK_ = (cljs.core.truth_(ns)?(function (){var or__8818__auto__ = cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"goog","goog",-70603925,null));
if(or__8818__auto__){
return or__8818__auto__;
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
var vec__13439 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count.call(null,args);
var variadic_QMARK_ = new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(info);
var mps = new cljs.core.Keyword(null,"method-params","method-params",-980792179).cljs$core$IFn$_invoke$arity$1(info);
var mfa = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(info);
if((cljs.core.not.call(null,variadic_QMARK_)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,mps),(1)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
} else {
if(cljs.core.truth_((function (){var and__8806__auto__ = variadic_QMARK_;
if(cljs.core.truth_(and__8806__auto__)){
return (arity > mfa);
} else {
return and__8806__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__13437,map__13437__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str(cljs.compiler.munge.call(null,info__$1)),cljs.core.str(".cljs$core$IFn$_invoke$arity$variadic")].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__13437,map__13437__$1,expr,f,args,env){
return (function (p1__13434_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__13434_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__13437,map__13437__$1,expr,f,args,env))
);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__13437,map__13437__$1,expr,f,args,env))
),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.call(null,cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([arity], true),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__13437,map__13437__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str(cljs.compiler.munge.call(null,info__$1)),cljs.core.str(".cljs$core$IFn$_invoke$arity$"),cljs.core.str(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__13437,map__13437__$1,expr,f,args,env){
return (function (p1__13435_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__13435_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__13437,map__13437__$1,expr,f,args,env))
);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__13437,map__13437__$1,expr,f,args,env))
),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.call(null,vec__13439,(0),null);
var variadic_invoke = cljs.core.nth.call(null,vec__13439,(1),null);
var env__12550__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12550__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.call(null,"!(",cljs.core.first.call(null,args),")");
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_13442 = [cljs.core.str(cljs.compiler.munge.call(null,cljs.compiler.protocol_prefix.call(null,protocol))),cljs.core.str(cljs.compiler.munge.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),cljs.core.str("$arity$"),cljs.core.str(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,cljs.core.first.call(null,args),".",pimpl_13442,"(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",cljs.core.rest.call(null,args))),")");
} else {
if(keyword_QMARK_){
cljs.compiler.emits.call(null,f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count.call(null,args),"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_13443 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,mfa_13443,args)),(((mfa_13443 === (0)))?null:","),"cljs.core.array_seq([",cljs.compiler.comma_sep.call(null,cljs.core.drop.call(null,mfa_13443,args)),"], 0))");
} else {
if(cljs.core.truth_((function (){var or__8818__auto__ = fn_QMARK_;
if(cljs.core.truth_(or__8818__auto__)){
return or__8818__auto__;
} else {
var or__8818__auto____$1 = js_QMARK_;
if(or__8818__auto____$1){
return or__8818__auto____$1;
} else {
return goog_QMARK_;
}
}
})())){
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_((function (){var and__8806__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__8806__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1),new cljs.core.Keyword(null,"var","var",-769682797));
} else {
return and__8806__auto__;
}
})())){
var fprop_13444 = [cljs.core.str(".cljs$core$IFn$_invoke$arity$"),cljs.core.str(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,"(",f__$1,fprop_13444," ? ",f__$1,fprop_13444,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),"))");
} else {
cljs.compiler.emits.call(null,f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),")");
}

}
}
}
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12550__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__13445){
var map__13446 = p__13445;
var map__13446__$1 = ((((!((map__13446 == null)))?((((map__13446.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13446.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13446):map__13446);
var ctor = cljs.core.get.call(null,map__13446__$1,new cljs.core.Keyword(null,"ctor","ctor",1750864802));
var args = cljs.core.get.call(null,map__13446__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__13446__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__12550__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12550__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(new ",ctor,"(",cljs.compiler.comma_sep.call(null,args),"))");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12550__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__13448){
var map__13449 = p__13448;
var map__13449__$1 = ((((!((map__13449 == null)))?((((map__13449.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13449.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13449):map__13449);
var target = cljs.core.get.call(null,map__13449__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.call(null,map__13449__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.call(null,map__13449__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__12550__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12550__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,target," = ",val);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12550__auto__))){
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

var seq__13455_13459 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,seen)),cljs.core.distinct.call(null,cljs.core.vals.call(null,libs))));
var chunk__13456_13460 = null;
var count__13457_13461 = (0);
var i__13458_13462 = (0);
while(true){
if((i__13458_13462 < count__13457_13461)){
var lib_13463 = cljs.core._nth.call(null,chunk__13456_13460,i__13458_13462);
if(cljs.core.truth_((function (){var or__8818__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__8818__auto__)){
return or__8818__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_13463),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_13463),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__8818__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__8818__auto__)){
return or__8818__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_13463),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_13463),"', 'reload-all');");
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_13463),"');");

}
}

var G__13464 = seq__13455_13459;
var G__13465 = chunk__13456_13460;
var G__13466 = count__13457_13461;
var G__13467 = (i__13458_13462 + (1));
seq__13455_13459 = G__13464;
chunk__13456_13460 = G__13465;
count__13457_13461 = G__13466;
i__13458_13462 = G__13467;
continue;
} else {
var temp__4657__auto___13468 = cljs.core.seq.call(null,seq__13455_13459);
if(temp__4657__auto___13468){
var seq__13455_13469__$1 = temp__4657__auto___13468;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13455_13469__$1)){
var c__9632__auto___13470 = cljs.core.chunk_first.call(null,seq__13455_13469__$1);
var G__13471 = cljs.core.chunk_rest.call(null,seq__13455_13469__$1);
var G__13472 = c__9632__auto___13470;
var G__13473 = cljs.core.count.call(null,c__9632__auto___13470);
var G__13474 = (0);
seq__13455_13459 = G__13471;
chunk__13456_13460 = G__13472;
count__13457_13461 = G__13473;
i__13458_13462 = G__13474;
continue;
} else {
var lib_13475 = cljs.core.first.call(null,seq__13455_13469__$1);
if(cljs.core.truth_((function (){var or__8818__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__8818__auto__)){
return or__8818__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_13475),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_13475),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__8818__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__8818__auto__)){
return or__8818__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_13475),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_13475),"', 'reload-all');");
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_13475),"');");

}
}

var G__13476 = cljs.core.next.call(null,seq__13455_13469__$1);
var G__13477 = null;
var G__13478 = (0);
var G__13479 = (0);
seq__13455_13459 = G__13476;
chunk__13456_13460 = G__13477;
count__13457_13461 = G__13478;
i__13458_13462 = G__13479;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns*","ns*",200417856),(function (p__13480){
var map__13481 = p__13480;
var map__13481__$1 = ((((!((map__13481 == null)))?((((map__13481.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13481.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13481):map__13481);
var name = cljs.core.get.call(null,map__13481__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__13481__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__13481__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__13481__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__13481__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__13481__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads));

return cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__13483){
var map__13484 = p__13483;
var map__13484__$1 = ((((!((map__13484 == null)))?((((map__13484.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13484.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13484):map__13484);
var name = cljs.core.get.call(null,map__13484__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__13484__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__13484__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__13484__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__13484__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__13484__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
cljs.compiler.emitln.call(null,"goog.provide('",cljs.compiler.munge.call(null,name),"');");

if(cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('cljs.core');");
}

cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads));

return cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"deftype*","deftype*",-677871637),(function (p__13486){
var map__13487 = p__13486;
var map__13487__$1 = ((((!((map__13487 == null)))?((((map__13487.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13487.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13487):map__13487);
var t = cljs.core.get.call(null,map__13487__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__13487__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__13487__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__13487__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__13487__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.call(null,cljs.compiler.munge,fields);
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__13489_13507 = cljs.core.seq.call(null,protocols);
var chunk__13490_13508 = null;
var count__13491_13509 = (0);
var i__13492_13510 = (0);
while(true){
if((i__13492_13510 < count__13491_13509)){
var protocol_13511 = cljs.core._nth.call(null,chunk__13490_13508,i__13492_13510);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_13511)].join('')),"}");

var G__13512 = seq__13489_13507;
var G__13513 = chunk__13490_13508;
var G__13514 = count__13491_13509;
var G__13515 = (i__13492_13510 + (1));
seq__13489_13507 = G__13512;
chunk__13490_13508 = G__13513;
count__13491_13509 = G__13514;
i__13492_13510 = G__13515;
continue;
} else {
var temp__4657__auto___13516 = cljs.core.seq.call(null,seq__13489_13507);
if(temp__4657__auto___13516){
var seq__13489_13517__$1 = temp__4657__auto___13516;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13489_13517__$1)){
var c__9632__auto___13518 = cljs.core.chunk_first.call(null,seq__13489_13517__$1);
var G__13519 = cljs.core.chunk_rest.call(null,seq__13489_13517__$1);
var G__13520 = c__9632__auto___13518;
var G__13521 = cljs.core.count.call(null,c__9632__auto___13518);
var G__13522 = (0);
seq__13489_13507 = G__13519;
chunk__13490_13508 = G__13520;
count__13491_13509 = G__13521;
i__13492_13510 = G__13522;
continue;
} else {
var protocol_13523 = cljs.core.first.call(null,seq__13489_13517__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_13523)].join('')),"}");

var G__13524 = cljs.core.next.call(null,seq__13489_13517__$1);
var G__13525 = null;
var G__13526 = (0);
var G__13527 = (0);
seq__13489_13507 = G__13524;
chunk__13490_13508 = G__13525;
count__13491_13509 = G__13526;
i__13492_13510 = G__13527;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__13493_13528 = cljs.core.seq.call(null,fields__$1);
var chunk__13494_13529 = null;
var count__13495_13530 = (0);
var i__13496_13531 = (0);
while(true){
if((i__13496_13531 < count__13495_13530)){
var fld_13532 = cljs.core._nth.call(null,chunk__13494_13529,i__13496_13531);
cljs.compiler.emitln.call(null,"this.",fld_13532," = ",fld_13532,";");

var G__13533 = seq__13493_13528;
var G__13534 = chunk__13494_13529;
var G__13535 = count__13495_13530;
var G__13536 = (i__13496_13531 + (1));
seq__13493_13528 = G__13533;
chunk__13494_13529 = G__13534;
count__13495_13530 = G__13535;
i__13496_13531 = G__13536;
continue;
} else {
var temp__4657__auto___13537 = cljs.core.seq.call(null,seq__13493_13528);
if(temp__4657__auto___13537){
var seq__13493_13538__$1 = temp__4657__auto___13537;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13493_13538__$1)){
var c__9632__auto___13539 = cljs.core.chunk_first.call(null,seq__13493_13538__$1);
var G__13540 = cljs.core.chunk_rest.call(null,seq__13493_13538__$1);
var G__13541 = c__9632__auto___13539;
var G__13542 = cljs.core.count.call(null,c__9632__auto___13539);
var G__13543 = (0);
seq__13493_13528 = G__13540;
chunk__13494_13529 = G__13541;
count__13495_13530 = G__13542;
i__13496_13531 = G__13543;
continue;
} else {
var fld_13544 = cljs.core.first.call(null,seq__13493_13538__$1);
cljs.compiler.emitln.call(null,"this.",fld_13544," = ",fld_13544,";");

var G__13545 = cljs.core.next.call(null,seq__13493_13538__$1);
var G__13546 = null;
var G__13547 = (0);
var G__13548 = (0);
seq__13493_13528 = G__13545;
chunk__13494_13529 = G__13546;
count__13495_13530 = G__13547;
i__13496_13531 = G__13548;
continue;
}
} else {
}
}
break;
}

var seq__13497_13549 = cljs.core.seq.call(null,pmasks);
var chunk__13498_13550 = null;
var count__13499_13551 = (0);
var i__13500_13552 = (0);
while(true){
if((i__13500_13552 < count__13499_13551)){
var vec__13501_13553 = cljs.core._nth.call(null,chunk__13498_13550,i__13500_13552);
var pno_13554 = cljs.core.nth.call(null,vec__13501_13553,(0),null);
var pmask_13555 = cljs.core.nth.call(null,vec__13501_13553,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_13554,"$ = ",pmask_13555,";");

var G__13556 = seq__13497_13549;
var G__13557 = chunk__13498_13550;
var G__13558 = count__13499_13551;
var G__13559 = (i__13500_13552 + (1));
seq__13497_13549 = G__13556;
chunk__13498_13550 = G__13557;
count__13499_13551 = G__13558;
i__13500_13552 = G__13559;
continue;
} else {
var temp__4657__auto___13560 = cljs.core.seq.call(null,seq__13497_13549);
if(temp__4657__auto___13560){
var seq__13497_13561__$1 = temp__4657__auto___13560;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13497_13561__$1)){
var c__9632__auto___13562 = cljs.core.chunk_first.call(null,seq__13497_13561__$1);
var G__13563 = cljs.core.chunk_rest.call(null,seq__13497_13561__$1);
var G__13564 = c__9632__auto___13562;
var G__13565 = cljs.core.count.call(null,c__9632__auto___13562);
var G__13566 = (0);
seq__13497_13549 = G__13563;
chunk__13498_13550 = G__13564;
count__13499_13551 = G__13565;
i__13500_13552 = G__13566;
continue;
} else {
var vec__13504_13567 = cljs.core.first.call(null,seq__13497_13561__$1);
var pno_13568 = cljs.core.nth.call(null,vec__13504_13567,(0),null);
var pmask_13569 = cljs.core.nth.call(null,vec__13504_13567,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_13568,"$ = ",pmask_13569,";");

var G__13570 = cljs.core.next.call(null,seq__13497_13561__$1);
var G__13571 = null;
var G__13572 = (0);
var G__13573 = (0);
seq__13497_13549 = G__13570;
chunk__13498_13550 = G__13571;
count__13499_13551 = G__13572;
i__13500_13552 = G__13573;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"defrecord*","defrecord*",718069562),(function (p__13574){
var map__13575 = p__13574;
var map__13575__$1 = ((((!((map__13575 == null)))?((((map__13575.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13575.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13575):map__13575);
var t = cljs.core.get.call(null,map__13575__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__13575__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__13575__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__13575__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__13575__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.call(null,cljs.core.map.call(null,cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__13577_13595 = cljs.core.seq.call(null,protocols);
var chunk__13578_13596 = null;
var count__13579_13597 = (0);
var i__13580_13598 = (0);
while(true){
if((i__13580_13598 < count__13579_13597)){
var protocol_13599 = cljs.core._nth.call(null,chunk__13578_13596,i__13580_13598);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_13599)].join('')),"}");

var G__13600 = seq__13577_13595;
var G__13601 = chunk__13578_13596;
var G__13602 = count__13579_13597;
var G__13603 = (i__13580_13598 + (1));
seq__13577_13595 = G__13600;
chunk__13578_13596 = G__13601;
count__13579_13597 = G__13602;
i__13580_13598 = G__13603;
continue;
} else {
var temp__4657__auto___13604 = cljs.core.seq.call(null,seq__13577_13595);
if(temp__4657__auto___13604){
var seq__13577_13605__$1 = temp__4657__auto___13604;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13577_13605__$1)){
var c__9632__auto___13606 = cljs.core.chunk_first.call(null,seq__13577_13605__$1);
var G__13607 = cljs.core.chunk_rest.call(null,seq__13577_13605__$1);
var G__13608 = c__9632__auto___13606;
var G__13609 = cljs.core.count.call(null,c__9632__auto___13606);
var G__13610 = (0);
seq__13577_13595 = G__13607;
chunk__13578_13596 = G__13608;
count__13579_13597 = G__13609;
i__13580_13598 = G__13610;
continue;
} else {
var protocol_13611 = cljs.core.first.call(null,seq__13577_13605__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_13611)].join('')),"}");

var G__13612 = cljs.core.next.call(null,seq__13577_13605__$1);
var G__13613 = null;
var G__13614 = (0);
var G__13615 = (0);
seq__13577_13595 = G__13612;
chunk__13578_13596 = G__13613;
count__13579_13597 = G__13614;
i__13580_13598 = G__13615;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__13581_13616 = cljs.core.seq.call(null,fields__$1);
var chunk__13582_13617 = null;
var count__13583_13618 = (0);
var i__13584_13619 = (0);
while(true){
if((i__13584_13619 < count__13583_13618)){
var fld_13620 = cljs.core._nth.call(null,chunk__13582_13617,i__13584_13619);
cljs.compiler.emitln.call(null,"this.",fld_13620," = ",fld_13620,";");

var G__13621 = seq__13581_13616;
var G__13622 = chunk__13582_13617;
var G__13623 = count__13583_13618;
var G__13624 = (i__13584_13619 + (1));
seq__13581_13616 = G__13621;
chunk__13582_13617 = G__13622;
count__13583_13618 = G__13623;
i__13584_13619 = G__13624;
continue;
} else {
var temp__4657__auto___13625 = cljs.core.seq.call(null,seq__13581_13616);
if(temp__4657__auto___13625){
var seq__13581_13626__$1 = temp__4657__auto___13625;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13581_13626__$1)){
var c__9632__auto___13627 = cljs.core.chunk_first.call(null,seq__13581_13626__$1);
var G__13628 = cljs.core.chunk_rest.call(null,seq__13581_13626__$1);
var G__13629 = c__9632__auto___13627;
var G__13630 = cljs.core.count.call(null,c__9632__auto___13627);
var G__13631 = (0);
seq__13581_13616 = G__13628;
chunk__13582_13617 = G__13629;
count__13583_13618 = G__13630;
i__13584_13619 = G__13631;
continue;
} else {
var fld_13632 = cljs.core.first.call(null,seq__13581_13626__$1);
cljs.compiler.emitln.call(null,"this.",fld_13632," = ",fld_13632,";");

var G__13633 = cljs.core.next.call(null,seq__13581_13626__$1);
var G__13634 = null;
var G__13635 = (0);
var G__13636 = (0);
seq__13581_13616 = G__13633;
chunk__13582_13617 = G__13634;
count__13583_13618 = G__13635;
i__13584_13619 = G__13636;
continue;
}
} else {
}
}
break;
}

var seq__13585_13637 = cljs.core.seq.call(null,pmasks);
var chunk__13586_13638 = null;
var count__13587_13639 = (0);
var i__13588_13640 = (0);
while(true){
if((i__13588_13640 < count__13587_13639)){
var vec__13589_13641 = cljs.core._nth.call(null,chunk__13586_13638,i__13588_13640);
var pno_13642 = cljs.core.nth.call(null,vec__13589_13641,(0),null);
var pmask_13643 = cljs.core.nth.call(null,vec__13589_13641,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_13642,"$ = ",pmask_13643,";");

var G__13644 = seq__13585_13637;
var G__13645 = chunk__13586_13638;
var G__13646 = count__13587_13639;
var G__13647 = (i__13588_13640 + (1));
seq__13585_13637 = G__13644;
chunk__13586_13638 = G__13645;
count__13587_13639 = G__13646;
i__13588_13640 = G__13647;
continue;
} else {
var temp__4657__auto___13648 = cljs.core.seq.call(null,seq__13585_13637);
if(temp__4657__auto___13648){
var seq__13585_13649__$1 = temp__4657__auto___13648;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13585_13649__$1)){
var c__9632__auto___13650 = cljs.core.chunk_first.call(null,seq__13585_13649__$1);
var G__13651 = cljs.core.chunk_rest.call(null,seq__13585_13649__$1);
var G__13652 = c__9632__auto___13650;
var G__13653 = cljs.core.count.call(null,c__9632__auto___13650);
var G__13654 = (0);
seq__13585_13637 = G__13651;
chunk__13586_13638 = G__13652;
count__13587_13639 = G__13653;
i__13588_13640 = G__13654;
continue;
} else {
var vec__13592_13655 = cljs.core.first.call(null,seq__13585_13649__$1);
var pno_13656 = cljs.core.nth.call(null,vec__13592_13655,(0),null);
var pmask_13657 = cljs.core.nth.call(null,vec__13592_13655,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_13656,"$ = ",pmask_13657,";");

var G__13658 = cljs.core.next.call(null,seq__13585_13649__$1);
var G__13659 = null;
var G__13660 = (0);
var G__13661 = (0);
seq__13585_13637 = G__13658;
chunk__13586_13638 = G__13659;
count__13587_13639 = G__13660;
i__13588_13640 = G__13661;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"dot","dot",1442709401),(function (p__13662){
var map__13663 = p__13662;
var map__13663__$1 = ((((!((map__13663 == null)))?((((map__13663.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13663.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13663):map__13663);
var target = cljs.core.get.call(null,map__13663__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.call(null,map__13663__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.call(null,map__13663__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.call(null,map__13663__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__13663__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__12550__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12550__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep.call(null,args),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12550__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__13665){
var map__13666 = p__13665;
var map__13666__$1 = ((((!((map__13666 == null)))?((((map__13666.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13666.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13666):map__13666);
var op = cljs.core.get.call(null,map__13666__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.call(null,map__13666__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.call(null,map__13666__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.call(null,map__13666__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.call(null,map__13666__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_((function (){var and__8806__auto__ = code;
if(cljs.core.truth_(and__8806__auto__)){
return goog.string.startsWith(clojure.string.trim.call(null,code),"/*");
} else {
return and__8806__auto__;
}
})())){
return cljs.compiler.emits.call(null,code);
} else {
var env__12550__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12550__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.call(null,code);
} else {
cljs.compiler.emits.call(null,cljs.core.interleave.call(null,cljs.core.concat.call(null,segs,cljs.core.repeat.call(null,null)),cljs.core.concat.call(null,args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12550__auto__))){
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
var seq__13680 = cljs.core.seq.call(null,table);
var chunk__13681 = null;
var count__13682 = (0);
var i__13683 = (0);
while(true){
if((i__13683 < count__13682)){
var vec__13684 = cljs.core._nth.call(null,chunk__13681,i__13683);
var sym = cljs.core.nth.call(null,vec__13684,(0),null);
var value = cljs.core.nth.call(null,vec__13684,(1),null);
var ns_13690 = cljs.core.namespace.call(null,sym);
var name_13691 = cljs.core.name.call(null,sym);
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

var G__13692 = seq__13680;
var G__13693 = chunk__13681;
var G__13694 = count__13682;
var G__13695 = (i__13683 + (1));
seq__13680 = G__13692;
chunk__13681 = G__13693;
count__13682 = G__13694;
i__13683 = G__13695;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__13680);
if(temp__4657__auto__){
var seq__13680__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13680__$1)){
var c__9632__auto__ = cljs.core.chunk_first.call(null,seq__13680__$1);
var G__13696 = cljs.core.chunk_rest.call(null,seq__13680__$1);
var G__13697 = c__9632__auto__;
var G__13698 = cljs.core.count.call(null,c__9632__auto__);
var G__13699 = (0);
seq__13680 = G__13696;
chunk__13681 = G__13697;
count__13682 = G__13698;
i__13683 = G__13699;
continue;
} else {
var vec__13687 = cljs.core.first.call(null,seq__13680__$1);
var sym = cljs.core.nth.call(null,vec__13687,(0),null);
var value = cljs.core.nth.call(null,vec__13687,(1),null);
var ns_13700 = cljs.core.namespace.call(null,sym);
var name_13701 = cljs.core.name.call(null,sym);
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

var G__13702 = cljs.core.next.call(null,seq__13680__$1);
var G__13703 = null;
var G__13704 = (0);
var G__13705 = (0);
seq__13680 = G__13702;
chunk__13681 = G__13703;
count__13682 = G__13704;
i__13683 = G__13705;
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