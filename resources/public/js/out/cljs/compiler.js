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
var map__12644 = s;
var map__12644__$1 = ((((!((map__12644 == null)))?((((map__12644.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12644.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12644):map__12644);
var name = cljs.core.get.call(null,map__12644__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__12644__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var d = (0);
var G__12647 = info;
var map__12648 = G__12647;
var map__12648__$1 = ((((!((map__12648 == null)))?((((map__12648.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12648.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12648):map__12648);
var shadow = cljs.core.get.call(null,map__12648__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var d__$1 = d;
var G__12647__$1 = G__12647;
while(true){
var d__$2 = d__$1;
var map__12650 = G__12647__$1;
var map__12650__$1 = ((((!((map__12650 == null)))?((((map__12650.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12650.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12650):map__12650);
var shadow__$1 = cljs.core.get.call(null,map__12650__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803));
if(cljs.core.truth_(shadow__$1)){
var G__12652 = (d__$2 + (1));
var G__12653 = shadow__$1;
d__$1 = G__12652;
G__12647__$1 = G__12653;
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
cljs.compiler.fn_self_name = (function cljs$compiler$fn_self_name(p__12654){
var map__12659 = p__12654;
var map__12659__$1 = ((((!((map__12659 == null)))?((((map__12659.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12659.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12659):map__12659);
var name_var = map__12659__$1;
var name = cljs.core.get.call(null,map__12659__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var info = cljs.core.get.call(null,map__12659__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var name__$1 = clojure.string.replace.call(null,[cljs.core.str(name)].join(''),"..","_DOT__DOT_");
var map__12661 = info;
var map__12661__$1 = ((((!((map__12661 == null)))?((((map__12661.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12661.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12661):map__12661);
var ns = cljs.core.get.call(null,map__12661__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var fn_scope = cljs.core.get.call(null,map__12661__$1,new cljs.core.Keyword(null,"fn-scope","fn-scope",-865664859));
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
var args12663 = [];
var len__9931__auto___12666 = arguments.length;
var i__9932__auto___12667 = (0);
while(true){
if((i__9932__auto___12667 < len__9931__auto___12666)){
args12663.push((arguments[i__9932__auto___12667]));

var G__12668 = (i__9932__auto___12667 + (1));
i__9932__auto___12667 = G__12668;
continue;
} else {
}
break;
}

var G__12665 = args12663.length;
switch (G__12665) {
case 1:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.compiler.munge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12663.length)].join('')));

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
var G__12671 = cp;
switch (G__12671) {
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
var seq__12677_12681 = cljs.core.seq.call(null,s);
var chunk__12678_12682 = null;
var count__12679_12683 = (0);
var i__12680_12684 = (0);
while(true){
if((i__12680_12684 < count__12679_12683)){
var c_12685 = cljs.core._nth.call(null,chunk__12678_12682,i__12680_12684);
sb.append(cljs.compiler.escape_char.call(null,c_12685));

var G__12686 = seq__12677_12681;
var G__12687 = chunk__12678_12682;
var G__12688 = count__12679_12683;
var G__12689 = (i__12680_12684 + (1));
seq__12677_12681 = G__12686;
chunk__12678_12682 = G__12687;
count__12679_12683 = G__12688;
i__12680_12684 = G__12689;
continue;
} else {
var temp__4657__auto___12690 = cljs.core.seq.call(null,seq__12677_12681);
if(temp__4657__auto___12690){
var seq__12677_12691__$1 = temp__4657__auto___12690;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12677_12691__$1)){
var c__9637__auto___12692 = cljs.core.chunk_first.call(null,seq__12677_12691__$1);
var G__12693 = cljs.core.chunk_rest.call(null,seq__12677_12691__$1);
var G__12694 = c__9637__auto___12692;
var G__12695 = cljs.core.count.call(null,c__9637__auto___12692);
var G__12696 = (0);
seq__12677_12681 = G__12693;
chunk__12678_12682 = G__12694;
count__12679_12683 = G__12695;
i__12680_12684 = G__12696;
continue;
} else {
var c_12697 = cljs.core.first.call(null,seq__12677_12691__$1);
sb.append(cljs.compiler.escape_char.call(null,c_12697));

var G__12698 = cljs.core.next.call(null,seq__12677_12691__$1);
var G__12699 = null;
var G__12700 = (0);
var G__12701 = (0);
seq__12677_12681 = G__12698;
chunk__12678_12682 = G__12699;
count__12679_12683 = G__12700;
i__12680_12684 = G__12701;
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
cljs.compiler.emit_STAR_ = (function (){var method_table__9751__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9752__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9753__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9754__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9755__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.compiler","emit*"),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__9755__auto__,method_table__9751__auto__,prefer_table__9752__auto__,method_cache__9753__auto__,cached_hierarchy__9754__auto__));
})();
}
cljs.compiler.emit = (function cljs$compiler$emit(ast){
var val__10744__auto__ = cljs.env._STAR_compiler_STAR_;
if((val__10744__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = cljs.env.default_compiler_env.call(null);
} else {
}

try{if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
var map__12707_12712 = ast;
var map__12707_12713__$1 = ((((!((map__12707_12712 == null)))?((((map__12707_12712.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12707_12712.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12707_12712):map__12707_12712);
var env_12714 = cljs.core.get.call(null,map__12707_12713__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env_12714))){
var map__12709_12715 = env_12714;
var map__12709_12716__$1 = ((((!((map__12709_12715 == null)))?((((map__12709_12715.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12709_12715.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12709_12715):map__12709_12715);
var line_12717 = cljs.core.get.call(null,map__12709_12716__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_12718 = cljs.core.get.call(null,map__12709_12716__$1,new cljs.core.Keyword(null,"column","column",2078222095));
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,((function (map__12709_12715,map__12709_12716__$1,line_12717,column_12718,map__12707_12712,map__12707_12713__$1,env_12714,val__10744__auto__){
return (function (m){
var minfo = (function (){var G__12711 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gcol","gcol",309250807),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"gline","gline",-1086242431),new cljs.core.Keyword(null,"gen-line","gen-line",589592125).cljs$core$IFn$_invoke$arity$1(m)], null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast),new cljs.core.Keyword(null,"var","var",-769682797))){
return cljs.core.assoc.call(null,G__12711,new cljs.core.Keyword(null,"name","name",1843675177),[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(ast)))].join(''));
} else {
return G__12711;
}
})();
return cljs.core.update_in.call(null,m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"source-map","source-map",1706252311),(line_12717 - (1))], null),cljs.core.fnil.call(null,((function (minfo,map__12709_12715,map__12709_12716__$1,line_12717,column_12718,map__12707_12712,map__12707_12713__$1,env_12714,val__10744__auto__){
return (function (line__$1){
return cljs.core.update_in.call(null,line__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(column_12718)?(column_12718 - (1)):(0))], null),cljs.core.fnil.call(null,((function (minfo,map__12709_12715,map__12709_12716__$1,line_12717,column_12718,map__12707_12712,map__12707_12713__$1,env_12714,val__10744__auto__){
return (function (column__$1){
return cljs.core.conj.call(null,column__$1,minfo);
});})(minfo,map__12709_12715,map__12709_12716__$1,line_12717,column_12718,map__12707_12712,map__12707_12713__$1,env_12714,val__10744__auto__))
,cljs.core.PersistentVector.EMPTY));
});})(minfo,map__12709_12715,map__12709_12716__$1,line_12717,column_12718,map__12707_12712,map__12707_12713__$1,env_12714,val__10744__auto__))
,cljs.core.sorted_map.call(null)));
});})(map__12709_12715,map__12709_12716__$1,line_12717,column_12718,map__12707_12712,map__12707_12713__$1,env_12714,val__10744__auto__))
);
} else {
}
} else {
}

return cljs.compiler.emit_STAR_.call(null,ast);
}finally {if((val__10744__auto__ == null)){
cljs.env._STAR_compiler_STAR_ = null;
} else {
}
}});
cljs.compiler.emits = (function cljs$compiler$emits(var_args){
var args__9938__auto__ = [];
var len__9931__auto___12725 = arguments.length;
var i__9932__auto___12726 = (0);
while(true){
if((i__9932__auto___12726 < len__9931__auto___12725)){
args__9938__auto__.push((arguments[i__9932__auto___12726]));

var G__12727 = (i__9932__auto___12726 + (1));
i__9932__auto___12726 = G__12727;
continue;
} else {
}
break;
}

var argseq__9939__auto__ = ((((0) < args__9938__auto__.length))?(new cljs.core.IndexedSeq(args__9938__auto__.slice((0)),(0),null)):null);
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(argseq__9939__auto__);
});

cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
var seq__12721_12728 = cljs.core.seq.call(null,xs);
var chunk__12722_12729 = null;
var count__12723_12730 = (0);
var i__12724_12731 = (0);
while(true){
if((i__12724_12731 < count__12723_12730)){
var x_12732 = cljs.core._nth.call(null,chunk__12722_12729,i__12724_12731);
if((x_12732 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_12732)){
cljs.compiler.emit.call(null,x_12732);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_12732)){
cljs.core.apply.call(null,cljs.compiler.emits,x_12732);
} else {
if(goog.isFunction(x_12732)){
x_12732.call(null);
} else {
var s_12733 = cljs.core.print_str.call(null,x_12732);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__12721_12728,chunk__12722_12729,count__12723_12730,i__12724_12731,s_12733,x_12732){
return (function (p1__12719_SHARP_){
return (p1__12719_SHARP_ + cljs.core.count.call(null,s_12733));
});})(seq__12721_12728,chunk__12722_12729,count__12723_12730,i__12724_12731,s_12733,x_12732))
);
}

cljs.core.print.call(null,s_12733);

}
}
}
}

var G__12734 = seq__12721_12728;
var G__12735 = chunk__12722_12729;
var G__12736 = count__12723_12730;
var G__12737 = (i__12724_12731 + (1));
seq__12721_12728 = G__12734;
chunk__12722_12729 = G__12735;
count__12723_12730 = G__12736;
i__12724_12731 = G__12737;
continue;
} else {
var temp__4657__auto___12738 = cljs.core.seq.call(null,seq__12721_12728);
if(temp__4657__auto___12738){
var seq__12721_12739__$1 = temp__4657__auto___12738;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12721_12739__$1)){
var c__9637__auto___12740 = cljs.core.chunk_first.call(null,seq__12721_12739__$1);
var G__12741 = cljs.core.chunk_rest.call(null,seq__12721_12739__$1);
var G__12742 = c__9637__auto___12740;
var G__12743 = cljs.core.count.call(null,c__9637__auto___12740);
var G__12744 = (0);
seq__12721_12728 = G__12741;
chunk__12722_12729 = G__12742;
count__12723_12730 = G__12743;
i__12724_12731 = G__12744;
continue;
} else {
var x_12745 = cljs.core.first.call(null,seq__12721_12739__$1);
if((x_12745 == null)){
} else {
if(cljs.analyzer.cljs_map_QMARK_.call(null,x_12745)){
cljs.compiler.emit.call(null,x_12745);
} else {
if(cljs.analyzer.cljs_seq_QMARK_.call(null,x_12745)){
cljs.core.apply.call(null,cljs.compiler.emits,x_12745);
} else {
if(goog.isFunction(x_12745)){
x_12745.call(null);
} else {
var s_12746 = cljs.core.print_str.call(null,x_12745);
if((cljs.compiler._STAR_source_map_data_STAR_ == null)){
} else {
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gen-col","gen-col",1901918303)], null),((function (seq__12721_12728,chunk__12722_12729,count__12723_12730,i__12724_12731,s_12746,x_12745,seq__12721_12739__$1,temp__4657__auto___12738){
return (function (p1__12719_SHARP_){
return (p1__12719_SHARP_ + cljs.core.count.call(null,s_12746));
});})(seq__12721_12728,chunk__12722_12729,count__12723_12730,i__12724_12731,s_12746,x_12745,seq__12721_12739__$1,temp__4657__auto___12738))
);
}

cljs.core.print.call(null,s_12746);

}
}
}
}

var G__12747 = cljs.core.next.call(null,seq__12721_12739__$1);
var G__12748 = null;
var G__12749 = (0);
var G__12750 = (0);
seq__12721_12728 = G__12747;
chunk__12722_12729 = G__12748;
count__12723_12730 = G__12749;
i__12724_12731 = G__12750;
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

cljs.compiler.emits.cljs$lang$applyTo = (function (seq12720){
return cljs.compiler.emits.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12720));
});

cljs.compiler.emitln = (function cljs$compiler$emitln(var_args){
var args__9938__auto__ = [];
var len__9931__auto___12755 = arguments.length;
var i__9932__auto___12756 = (0);
while(true){
if((i__9932__auto___12756 < len__9931__auto___12755)){
args__9938__auto__.push((arguments[i__9932__auto___12756]));

var G__12757 = (i__9932__auto___12756 + (1));
i__9932__auto___12756 = G__12757;
continue;
} else {
}
break;
}

var argseq__9939__auto__ = ((((0) < args__9938__auto__.length))?(new cljs.core.IndexedSeq(args__9938__auto__.slice((0)),(0),null)):null);
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(argseq__9939__auto__);
});

cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
cljs.core.apply.call(null,cljs.compiler.emits,xs);

cljs.core.println.call(null);

if(cljs.core.truth_(cljs.compiler._STAR_source_map_data_STAR_)){
cljs.core.swap_BANG_.call(null,cljs.compiler._STAR_source_map_data_STAR_,(function (p__12752){
var map__12753 = p__12752;
var map__12753__$1 = ((((!((map__12753 == null)))?((((map__12753.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12753.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12753):map__12753);
var m = map__12753__$1;
var gen_line = cljs.core.get.call(null,map__12753__$1,new cljs.core.Keyword(null,"gen-line","gen-line",589592125));
return cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"gen-line","gen-line",589592125),(gen_line + (1)),new cljs.core.Keyword(null,"gen-col","gen-col",1901918303),(0));
}));
} else {
}

return null;
});

cljs.compiler.emitln.cljs$lang$maxFixedArity = (0);

cljs.compiler.emitln.cljs$lang$applyTo = (function (seq12751){
return cljs.compiler.emitln.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12751));
});

cljs.compiler.emit_str = (function cljs$compiler$emit_str(expr){
var sb__9812__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_12760_12762 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_12761_12763 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_12760_12762,_STAR_print_fn_STAR_12761_12763,sb__9812__auto__){
return (function (x__9813__auto__){
return sb__9812__auto__.append(x__9813__auto__);
});})(_STAR_print_newline_STAR_12760_12762,_STAR_print_fn_STAR_12761_12763,sb__9812__auto__))
;

try{cljs.compiler.emit.call(null,expr);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_12761_12763;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_12760_12762;
}
return [cljs.core.str(sb__9812__auto__)].join('');
});
if(typeof cljs.compiler.emit_constant !== 'undefined'){
} else {
cljs.compiler.emit_constant = (function (){var method_table__9751__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9752__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9753__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9754__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9755__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.compiler","emit-constant"),cljs.core.type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__9755__auto__,method_table__9751__auto__,prefer_table__9752__auto__,method_cache__9753__auto__,cached_hierarchy__9754__auto__));
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
var vec__12764 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,[cljs.core.str(x)].join(''));
var _ = cljs.core.nth.call(null,vec__12764,(0),null);
var flags = cljs.core.nth.call(null,vec__12764,(1),null);
var pattern = cljs.core.nth.call(null,vec__12764,(2),null);
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"var","var",-769682797),(function (p__12768){
var map__12769 = p__12768;
var map__12769__$1 = ((((!((map__12769 == null)))?((((map__12769.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12769.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12769):map__12769);
var arg = map__12769__$1;
var info = cljs.core.get.call(null,map__12769__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var env = cljs.core.get.call(null,map__12769__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var form = cljs.core.get.call(null,map__12769__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var var_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info);
var info__$1 = ((cljs.core._EQ_.call(null,cljs.core.namespace.call(null,var_name),"js"))?(function (){var js_module_name = cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js-module-index","js-module-index",2072061931),cljs.core.name.call(null,var_name)], null));
var or__8823__auto__ = js_module_name;
if(cljs.core.truth_(or__8823__auto__)){
return or__8823__auto__;
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
var env__12628__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12628__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,(function (){var G__12771 = info__$1;
if(cljs.core.not_EQ_.call(null,form,new cljs.core.Symbol("js","-Infinity","js/-Infinity",958706333,null))){
return cljs.compiler.munge.call(null,G__12771);
} else {
return G__12771;
}
})());

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12628__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"var-special","var-special",1131576802),(function (p__12772){
var map__12773 = p__12772;
var map__12773__$1 = ((((!((map__12773 == null)))?((((map__12773.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12773.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12773):map__12773);
var arg = map__12773__$1;
var env = cljs.core.get.call(null,map__12773__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var var$ = cljs.core.get.call(null,map__12773__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var sym = cljs.core.get.call(null,map__12773__$1,new cljs.core.Keyword(null,"sym","sym",-1444860305));
var meta = cljs.core.get.call(null,map__12773__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
if(cljs.analyzer.ast_QMARK_.call(null,sym)){
} else {
throw (new Error("Assert failed: (ana/ast? sym)"));
}

if(cljs.analyzer.ast_QMARK_.call(null,meta)){
} else {
throw (new Error("Assert failed: (ana/ast? meta)"));
}

var map__12775 = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(var$);
var map__12775__$1 = ((((!((map__12775 == null)))?((((map__12775.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12775.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12775):map__12775);
var name = cljs.core.get.call(null,map__12775__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env__12628__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12628__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"new cljs.core.Var(function(){return ",cljs.compiler.munge.call(null,name),";},",sym,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12628__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"meta","meta",1499536964),(function (p__12777){
var map__12778 = p__12777;
var map__12778__$1 = ((((!((map__12778 == null)))?((((map__12778.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12778.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12778):map__12778);
var expr = cljs.core.get.call(null,map__12778__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var meta = cljs.core.get.call(null,map__12778__$1,new cljs.core.Keyword(null,"meta","meta",1499536964));
var env = cljs.core.get.call(null,map__12778__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__12628__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12628__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"cljs.core.with_meta(",expr,",",meta,")");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12628__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.array_map_threshold = (8);
cljs.compiler.distinct_keys_QMARK_ = (function cljs$compiler$distinct_keys_QMARK_(keys){
return (cljs.core.every_QMARK_.call(null,(function (p1__12780_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__12780_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),keys)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,keys)),cljs.core.count.call(null,keys)));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"map","map",1371690461),(function (p__12781){
var map__12782 = p__12781;
var map__12782__$1 = ((((!((map__12782 == null)))?((((map__12782.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12782.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12782):map__12782);
var env = cljs.core.get.call(null,map__12782__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var keys = cljs.core.get.call(null,map__12782__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var vals = cljs.core.get.call(null,map__12782__$1,new cljs.core.Keyword(null,"vals","vals",768058733));
var env__12628__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12628__auto__))){
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12628__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"list","list",765357683),(function (p__12784){
var map__12785 = p__12784;
var map__12785__$1 = ((((!((map__12785 == null)))?((((map__12785.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12785.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12785):map__12785);
var items = cljs.core.get.call(null,map__12785__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__12785__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__12628__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12628__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.List.EMPTY");
} else {
cljs.compiler.emits.call(null,"cljs.core.list(",cljs.compiler.comma_sep.call(null,items),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12628__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (p__12787){
var map__12788 = p__12787;
var map__12788__$1 = ((((!((map__12788 == null)))?((((map__12788.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12788.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12788):map__12788);
var items = cljs.core.get.call(null,map__12788__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__12788__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__12628__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12628__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.empty_QMARK_.call(null,items)){
cljs.compiler.emits.call(null,"cljs.core.PersistentVector.EMPTY");
} else {
var cnt_12790 = cljs.core.count.call(null,items);
if((cnt_12790 < (32))){
cljs.compiler.emits.call(null,"new cljs.core.PersistentVector(null, ",cnt_12790,", 5, cljs.core.PersistentVector.EMPTY_NODE, [",cljs.compiler.comma_sep.call(null,items),"], null)");
} else {
cljs.compiler.emits.call(null,"cljs.core.PersistentVector.fromArray([",cljs.compiler.comma_sep.call(null,items),"], true)");
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12628__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.compiler.distinct_constants_QMARK_ = (function cljs$compiler$distinct_constants_QMARK_(items){
return (cljs.core.every_QMARK_.call(null,(function (p1__12791_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__12791_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),items)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,items)),cljs.core.count.call(null,items)));
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set","set",304602554),(function (p__12792){
var map__12793 = p__12792;
var map__12793__$1 = ((((!((map__12793 == null)))?((((map__12793.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12793.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12793):map__12793);
var items = cljs.core.get.call(null,map__12793__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var env = cljs.core.get.call(null,map__12793__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__12628__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12628__auto__))){
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12628__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js-value","js-value",-758336661),(function (p__12795){
var map__12796 = p__12795;
var map__12796__$1 = ((((!((map__12796 == null)))?((((map__12796.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12796.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12796):map__12796);
var items = cljs.core.get.call(null,map__12796__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var js_type = cljs.core.get.call(null,map__12796__$1,new cljs.core.Keyword(null,"js-type","js-type",539386702));
var env = cljs.core.get.call(null,map__12796__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__12628__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12628__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core._EQ_.call(null,js_type,new cljs.core.Keyword(null,"object","object",1474613949))){
cljs.compiler.emits.call(null,"({");

var temp__4657__auto___12814 = cljs.core.seq.call(null,items);
if(temp__4657__auto___12814){
var items_12815__$1 = temp__4657__auto___12814;
var vec__12798_12816 = items_12815__$1;
var seq__12799_12817 = cljs.core.seq.call(null,vec__12798_12816);
var first__12800_12818 = cljs.core.first.call(null,seq__12799_12817);
var seq__12799_12819__$1 = cljs.core.next.call(null,seq__12799_12817);
var vec__12801_12820 = first__12800_12818;
var k_12821 = cljs.core.nth.call(null,vec__12801_12820,(0),null);
var v_12822 = cljs.core.nth.call(null,vec__12801_12820,(1),null);
var r_12823 = seq__12799_12819__$1;
cljs.compiler.emits.call(null,"\"",cljs.core.name.call(null,k_12821),"\": ",v_12822);

var seq__12804_12824 = cljs.core.seq.call(null,r_12823);
var chunk__12805_12825 = null;
var count__12806_12826 = (0);
var i__12807_12827 = (0);
while(true){
if((i__12807_12827 < count__12806_12826)){
var vec__12808_12828 = cljs.core._nth.call(null,chunk__12805_12825,i__12807_12827);
var k_12829__$1 = cljs.core.nth.call(null,vec__12808_12828,(0),null);
var v_12830__$1 = cljs.core.nth.call(null,vec__12808_12828,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_12829__$1),"\": ",v_12830__$1);

var G__12831 = seq__12804_12824;
var G__12832 = chunk__12805_12825;
var G__12833 = count__12806_12826;
var G__12834 = (i__12807_12827 + (1));
seq__12804_12824 = G__12831;
chunk__12805_12825 = G__12832;
count__12806_12826 = G__12833;
i__12807_12827 = G__12834;
continue;
} else {
var temp__4657__auto___12835__$1 = cljs.core.seq.call(null,seq__12804_12824);
if(temp__4657__auto___12835__$1){
var seq__12804_12836__$1 = temp__4657__auto___12835__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12804_12836__$1)){
var c__9637__auto___12837 = cljs.core.chunk_first.call(null,seq__12804_12836__$1);
var G__12838 = cljs.core.chunk_rest.call(null,seq__12804_12836__$1);
var G__12839 = c__9637__auto___12837;
var G__12840 = cljs.core.count.call(null,c__9637__auto___12837);
var G__12841 = (0);
seq__12804_12824 = G__12838;
chunk__12805_12825 = G__12839;
count__12806_12826 = G__12840;
i__12807_12827 = G__12841;
continue;
} else {
var vec__12811_12842 = cljs.core.first.call(null,seq__12804_12836__$1);
var k_12843__$1 = cljs.core.nth.call(null,vec__12811_12842,(0),null);
var v_12844__$1 = cljs.core.nth.call(null,vec__12811_12842,(1),null);
cljs.compiler.emits.call(null,", \"",cljs.core.name.call(null,k_12843__$1),"\": ",v_12844__$1);

var G__12845 = cljs.core.next.call(null,seq__12804_12836__$1);
var G__12846 = null;
var G__12847 = (0);
var G__12848 = (0);
seq__12804_12824 = G__12845;
chunk__12805_12825 = G__12846;
count__12806_12826 = G__12847;
i__12807_12827 = G__12848;
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12628__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"constant","constant",-379609303),(function (p__12849){
var map__12850 = p__12849;
var map__12850__$1 = ((((!((map__12850 == null)))?((((map__12850.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12850.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12850):map__12850);
var form = cljs.core.get.call(null,map__12850__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var env = cljs.core.get.call(null,map__12850__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var env__12628__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12628__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emit_constant.call(null,form);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12628__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}
}));
cljs.compiler.truthy_constant_QMARK_ = (function cljs$compiler$truthy_constant_QMARK_(p__12852){
var map__12855 = p__12852;
var map__12855__$1 = ((((!((map__12855 == null)))?((((map__12855.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12855.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12855):map__12855);
var op = cljs.core.get.call(null,map__12855__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__12855__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var and__8811__auto__ = cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"constant","constant",-379609303));
if(and__8811__auto__){
var and__8811__auto____$1 = form;
if(cljs.core.truth_(and__8811__auto____$1)){
return !(((typeof form === 'string') && (cljs.core._EQ_.call(null,form,""))) || ((typeof form === 'number') && ((form === (0)))));
} else {
return and__8811__auto____$1;
}
} else {
return and__8811__auto__;
}
});
cljs.compiler.falsey_constant_QMARK_ = (function cljs$compiler$falsey_constant_QMARK_(p__12857){
var map__12860 = p__12857;
var map__12860__$1 = ((((!((map__12860 == null)))?((((map__12860.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12860.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12860):map__12860);
var op = cljs.core.get.call(null,map__12860__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var form = cljs.core.get.call(null,map__12860__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
return (cljs.core._EQ_.call(null,op,new cljs.core.Keyword(null,"constant","constant",-379609303))) && ((form === false) || ((form == null)));
});
cljs.compiler.safe_test_QMARK_ = (function cljs$compiler$safe_test_QMARK_(env,e){
var tag = cljs.analyzer.infer_tag.call(null,env,e);
var or__8823__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null).call(null,tag);
if(cljs.core.truth_(or__8823__auto__)){
return or__8823__auto__;
} else {
return cljs.compiler.truthy_constant_QMARK_.call(null,e);
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"if","if",-458814265),(function (p__12862){
var map__12863 = p__12862;
var map__12863__$1 = ((((!((map__12863 == null)))?((((map__12863.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12863.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12863):map__12863);
var test = cljs.core.get.call(null,map__12863__$1,new cljs.core.Keyword(null,"test","test",577538877));
var then = cljs.core.get.call(null,map__12863__$1,new cljs.core.Keyword(null,"then","then",460598070));
var else$ = cljs.core.get.call(null,map__12863__$1,new cljs.core.Keyword(null,"else","else",-1508377146));
var env = cljs.core.get.call(null,map__12863__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var unchecked = cljs.core.get.call(null,map__12863__$1,new cljs.core.Keyword(null,"unchecked","unchecked",924418378));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
var checked = cljs.core.not.call(null,(function (){var or__8823__auto__ = unchecked;
if(cljs.core.truth_(or__8823__auto__)){
return or__8823__auto__;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"case*","case*",716180697),(function (p__12865){
var map__12866 = p__12865;
var map__12866__$1 = ((((!((map__12866 == null)))?((((map__12866.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12866.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12866):map__12866);
var v = cljs.core.get.call(null,map__12866__$1,new cljs.core.Keyword(null,"v","v",21465059));
var tests = cljs.core.get.call(null,map__12866__$1,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var thens = cljs.core.get.call(null,map__12866__$1,new cljs.core.Keyword(null,"thens","thens",226631442));
var default$ = cljs.core.get.call(null,map__12866__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var env = cljs.core.get.call(null,map__12866__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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

var seq__12868_12886 = cljs.core.seq.call(null,cljs.core.partition.call(null,(2),cljs.core.interleave.call(null,tests,thens)));
var chunk__12869_12887 = null;
var count__12870_12888 = (0);
var i__12871_12889 = (0);
while(true){
if((i__12871_12889 < count__12870_12888)){
var vec__12872_12890 = cljs.core._nth.call(null,chunk__12869_12887,i__12871_12889);
var ts_12891 = cljs.core.nth.call(null,vec__12872_12890,(0),null);
var then_12892 = cljs.core.nth.call(null,vec__12872_12890,(1),null);
var seq__12875_12893 = cljs.core.seq.call(null,ts_12891);
var chunk__12876_12894 = null;
var count__12877_12895 = (0);
var i__12878_12896 = (0);
while(true){
if((i__12878_12896 < count__12877_12895)){
var test_12897 = cljs.core._nth.call(null,chunk__12876_12894,i__12878_12896);
cljs.compiler.emitln.call(null,"case ",test_12897,":");

var G__12898 = seq__12875_12893;
var G__12899 = chunk__12876_12894;
var G__12900 = count__12877_12895;
var G__12901 = (i__12878_12896 + (1));
seq__12875_12893 = G__12898;
chunk__12876_12894 = G__12899;
count__12877_12895 = G__12900;
i__12878_12896 = G__12901;
continue;
} else {
var temp__4657__auto___12902 = cljs.core.seq.call(null,seq__12875_12893);
if(temp__4657__auto___12902){
var seq__12875_12903__$1 = temp__4657__auto___12902;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12875_12903__$1)){
var c__9637__auto___12904 = cljs.core.chunk_first.call(null,seq__12875_12903__$1);
var G__12905 = cljs.core.chunk_rest.call(null,seq__12875_12903__$1);
var G__12906 = c__9637__auto___12904;
var G__12907 = cljs.core.count.call(null,c__9637__auto___12904);
var G__12908 = (0);
seq__12875_12893 = G__12905;
chunk__12876_12894 = G__12906;
count__12877_12895 = G__12907;
i__12878_12896 = G__12908;
continue;
} else {
var test_12909 = cljs.core.first.call(null,seq__12875_12903__$1);
cljs.compiler.emitln.call(null,"case ",test_12909,":");

var G__12910 = cljs.core.next.call(null,seq__12875_12903__$1);
var G__12911 = null;
var G__12912 = (0);
var G__12913 = (0);
seq__12875_12893 = G__12910;
chunk__12876_12894 = G__12911;
count__12877_12895 = G__12912;
i__12878_12896 = G__12913;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_12892);
} else {
cljs.compiler.emitln.call(null,then_12892);
}

cljs.compiler.emitln.call(null,"break;");

var G__12914 = seq__12868_12886;
var G__12915 = chunk__12869_12887;
var G__12916 = count__12870_12888;
var G__12917 = (i__12871_12889 + (1));
seq__12868_12886 = G__12914;
chunk__12869_12887 = G__12915;
count__12870_12888 = G__12916;
i__12871_12889 = G__12917;
continue;
} else {
var temp__4657__auto___12918 = cljs.core.seq.call(null,seq__12868_12886);
if(temp__4657__auto___12918){
var seq__12868_12919__$1 = temp__4657__auto___12918;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12868_12919__$1)){
var c__9637__auto___12920 = cljs.core.chunk_first.call(null,seq__12868_12919__$1);
var G__12921 = cljs.core.chunk_rest.call(null,seq__12868_12919__$1);
var G__12922 = c__9637__auto___12920;
var G__12923 = cljs.core.count.call(null,c__9637__auto___12920);
var G__12924 = (0);
seq__12868_12886 = G__12921;
chunk__12869_12887 = G__12922;
count__12870_12888 = G__12923;
i__12871_12889 = G__12924;
continue;
} else {
var vec__12879_12925 = cljs.core.first.call(null,seq__12868_12919__$1);
var ts_12926 = cljs.core.nth.call(null,vec__12879_12925,(0),null);
var then_12927 = cljs.core.nth.call(null,vec__12879_12925,(1),null);
var seq__12882_12928 = cljs.core.seq.call(null,ts_12926);
var chunk__12883_12929 = null;
var count__12884_12930 = (0);
var i__12885_12931 = (0);
while(true){
if((i__12885_12931 < count__12884_12930)){
var test_12932 = cljs.core._nth.call(null,chunk__12883_12929,i__12885_12931);
cljs.compiler.emitln.call(null,"case ",test_12932,":");

var G__12933 = seq__12882_12928;
var G__12934 = chunk__12883_12929;
var G__12935 = count__12884_12930;
var G__12936 = (i__12885_12931 + (1));
seq__12882_12928 = G__12933;
chunk__12883_12929 = G__12934;
count__12884_12930 = G__12935;
i__12885_12931 = G__12936;
continue;
} else {
var temp__4657__auto___12937__$1 = cljs.core.seq.call(null,seq__12882_12928);
if(temp__4657__auto___12937__$1){
var seq__12882_12938__$1 = temp__4657__auto___12937__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12882_12938__$1)){
var c__9637__auto___12939 = cljs.core.chunk_first.call(null,seq__12882_12938__$1);
var G__12940 = cljs.core.chunk_rest.call(null,seq__12882_12938__$1);
var G__12941 = c__9637__auto___12939;
var G__12942 = cljs.core.count.call(null,c__9637__auto___12939);
var G__12943 = (0);
seq__12882_12928 = G__12940;
chunk__12883_12929 = G__12941;
count__12884_12930 = G__12942;
i__12885_12931 = G__12943;
continue;
} else {
var test_12944 = cljs.core.first.call(null,seq__12882_12938__$1);
cljs.compiler.emitln.call(null,"case ",test_12944,":");

var G__12945 = cljs.core.next.call(null,seq__12882_12938__$1);
var G__12946 = null;
var G__12947 = (0);
var G__12948 = (0);
seq__12882_12928 = G__12945;
chunk__12883_12929 = G__12946;
count__12884_12930 = G__12947;
i__12885_12931 = G__12948;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emitln.call(null,gs,"=",then_12927);
} else {
cljs.compiler.emitln.call(null,then_12927);
}

cljs.compiler.emitln.call(null,"break;");

var G__12949 = cljs.core.next.call(null,seq__12868_12919__$1);
var G__12950 = null;
var G__12951 = (0);
var G__12952 = (0);
seq__12868_12886 = G__12949;
chunk__12869_12887 = G__12950;
count__12870_12888 = G__12951;
i__12871_12889 = G__12952;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"throw","throw",-1044625833),(function (p__12953){
var map__12954 = p__12953;
var map__12954__$1 = ((((!((map__12954 == null)))?((((map__12954.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12954.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12954):map__12954);
var throw$ = cljs.core.get.call(null,map__12954__$1,new cljs.core.Keyword(null,"throw","throw",-1044625833));
var env = cljs.core.get.call(null,map__12954__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
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
var vec__12961 = ((!(((-1) === idx)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,t,(0),idx),cljs.core.subs.call(null,t,(idx + (1)),cljs.core.count.call(null,t))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [t,null], null));
var fstr = cljs.core.nth.call(null,vec__12961,(0),null);
var rstr = cljs.core.nth.call(null,vec__12961,(1),null);
var ret_t = (cljs.core.truth_(rstr)?cljs.compiler.resolve_type.call(null,env,rstr):null);
var axstr = cljs.core.subs.call(null,fstr,(9),(cljs.core.count.call(null,fstr) - (1)));
var args_ts = ((clojure.string.blank_QMARK_.call(null,axstr))?null:cljs.core.map.call(null,cljs.core.comp.call(null,((function (idx,vec__12961,fstr,rstr,ret_t,axstr){
return (function (p1__12956_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__12956_SHARP_);
});})(idx,vec__12961,fstr,rstr,ret_t,axstr))
,clojure.string.trim),clojure.string.split.call(null,axstr,/,/)));
var G__12964 = [cljs.core.str("function("),cljs.core.str(clojure.string.join.call(null,",",args_ts)),cljs.core.str(")")].join('');
if(cljs.core.truth_(ret_t)){
return [cljs.core.str(G__12964),cljs.core.str(":"),cljs.core.str(ret_t)].join('');
} else {
return G__12964;
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
return (function (p1__12965_SHARP_){
return cljs.compiler.resolve_type.call(null,env,p1__12965_SHARP_);
});})(ts__$1,xs))
,xs))),cljs.core.str("}")].join('');
});
cljs.compiler.munge_param_return = (function cljs$compiler$munge_param_return(env,line){
if(cljs.core.truth_(cljs.core.re_find.call(null,/@param/,line))){
var vec__12972 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__12973 = cljs.core.seq.call(null,vec__12972);
var first__12974 = cljs.core.first.call(null,seq__12973);
var seq__12973__$1 = cljs.core.next.call(null,seq__12973);
var p = first__12974;
var first__12974__$1 = cljs.core.first.call(null,seq__12973__$1);
var seq__12973__$2 = cljs.core.next.call(null,seq__12973__$1);
var ts = first__12974__$1;
var first__12974__$2 = cljs.core.first.call(null,seq__12973__$2);
var seq__12973__$3 = cljs.core.next.call(null,seq__12973__$2);
var n = first__12974__$2;
var xs = seq__12973__$3;
if(cljs.core.truth_((function (){var and__8811__auto__ = cljs.core._EQ_.call(null,"@param",p);
if(and__8811__auto__){
var and__8811__auto____$1 = ts;
if(cljs.core.truth_(and__8811__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__8811__auto____$1;
}
} else {
return and__8811__auto__;
}
})())){
return clojure.string.join.call(null," ",cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.compiler.resolve_types.call(null,env,ts),cljs.compiler.munge.call(null,n)], null),xs));
} else {
return line;
}
} else {
if(cljs.core.truth_(cljs.core.re_find.call(null,/@return/,line))){
var vec__12975 = cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,clojure.string.trim.call(null,line),/ /));
var seq__12976 = cljs.core.seq.call(null,vec__12975);
var first__12977 = cljs.core.first.call(null,seq__12976);
var seq__12976__$1 = cljs.core.next.call(null,seq__12976);
var p = first__12977;
var first__12977__$1 = cljs.core.first.call(null,seq__12976__$1);
var seq__12976__$2 = cljs.core.next.call(null,seq__12976__$1);
var ts = first__12977__$1;
var xs = seq__12976__$2;
if(cljs.core.truth_((function (){var and__8811__auto__ = cljs.core._EQ_.call(null,"@return",p);
if(and__8811__auto__){
var and__8811__auto____$1 = ts;
if(cljs.core.truth_(and__8811__auto____$1)){
return goog.string.startsWith(ts,"{");
} else {
return and__8811__auto____$1;
}
} else {
return and__8811__auto__;
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
var args12979 = [];
var len__9931__auto___13014 = arguments.length;
var i__9932__auto___13015 = (0);
while(true){
if((i__9932__auto___13015 < len__9931__auto___13014)){
args12979.push((arguments[i__9932__auto___13015]));

var G__13016 = (i__9932__auto___13015 + (1));
i__9932__auto___13015 = G__13016;
continue;
} else {
}
break;
}

var G__12981 = args12979.length;
switch (G__12981) {
case 2:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.compiler.emit_comment.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12979.length)].join('')));

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
var vec__13003 = cljs.core.map.call(null,((function (docs,docs__$1,docs__$2){
return (function (p1__12978_SHARP_){
if(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))){
return cljs.compiler.munge_param_return.call(null,env,p1__12978_SHARP_);
} else {
return p1__12978_SHARP_;
}
});})(docs,docs__$1,docs__$2))
,clojure.string.split_lines.call(null,e));
var seq__13004 = cljs.core.seq.call(null,vec__13003);
var first__13005 = cljs.core.first.call(null,seq__13004);
var seq__13004__$1 = cljs.core.next.call(null,seq__13004);
var x = first__13005;
var ys = seq__13004__$1;
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,x,"*/","* /"));

var seq__13006 = cljs.core.seq.call(null,ys);
var chunk__13007 = null;
var count__13008 = (0);
var i__13009 = (0);
while(true){
if((i__13009 < count__13008)){
var next_line = cljs.core._nth.call(null,chunk__13007,i__13009);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));

var G__13018 = seq__13006;
var G__13019 = chunk__13007;
var G__13020 = count__13008;
var G__13021 = (i__13009 + (1));
seq__13006 = G__13018;
chunk__13007 = G__13019;
count__13008 = G__13020;
i__13009 = G__13021;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__13006);
if(temp__4657__auto__){
var seq__13006__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13006__$1)){
var c__9637__auto__ = cljs.core.chunk_first.call(null,seq__13006__$1);
var G__13022 = cljs.core.chunk_rest.call(null,seq__13006__$1);
var G__13023 = c__9637__auto__;
var G__13024 = cljs.core.count.call(null,c__9637__auto__);
var G__13025 = (0);
seq__13006 = G__13022;
chunk__13007 = G__13023;
count__13008 = G__13024;
i__13009 = G__13025;
continue;
} else {
var next_line = cljs.core.first.call(null,seq__13006__$1);
cljs.compiler.emitln.call(null," * ",clojure.string.replace.call(null,clojure.string.replace.call(null,next_line,/^   /,""),"*/","* /"));

var G__13026 = cljs.core.next.call(null,seq__13006__$1);
var G__13027 = null;
var G__13028 = (0);
var G__13029 = (0);
seq__13006 = G__13026;
chunk__13007 = G__13027;
count__13008 = G__13028;
i__13009 = G__13029;
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

var seq__13010_13030 = cljs.core.seq.call(null,docs__$2);
var chunk__13011_13031 = null;
var count__13012_13032 = (0);
var i__13013_13033 = (0);
while(true){
if((i__13013_13033 < count__13012_13032)){
var e_13034 = cljs.core._nth.call(null,chunk__13011_13031,i__13013_13033);
if(cljs.core.truth_(e_13034)){
print_comment_lines.call(null,e_13034);
} else {
}

var G__13035 = seq__13010_13030;
var G__13036 = chunk__13011_13031;
var G__13037 = count__13012_13032;
var G__13038 = (i__13013_13033 + (1));
seq__13010_13030 = G__13035;
chunk__13011_13031 = G__13036;
count__13012_13032 = G__13037;
i__13013_13033 = G__13038;
continue;
} else {
var temp__4657__auto___13039 = cljs.core.seq.call(null,seq__13010_13030);
if(temp__4657__auto___13039){
var seq__13010_13040__$1 = temp__4657__auto___13039;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13010_13040__$1)){
var c__9637__auto___13041 = cljs.core.chunk_first.call(null,seq__13010_13040__$1);
var G__13042 = cljs.core.chunk_rest.call(null,seq__13010_13040__$1);
var G__13043 = c__9637__auto___13041;
var G__13044 = cljs.core.count.call(null,c__9637__auto___13041);
var G__13045 = (0);
seq__13010_13030 = G__13042;
chunk__13011_13031 = G__13043;
count__13012_13032 = G__13044;
i__13013_13033 = G__13045;
continue;
} else {
var e_13046 = cljs.core.first.call(null,seq__13010_13040__$1);
if(cljs.core.truth_(e_13046)){
print_comment_lines.call(null,e_13046);
} else {
}

var G__13047 = cljs.core.next.call(null,seq__13010_13040__$1);
var G__13048 = null;
var G__13049 = (0);
var G__13050 = (0);
seq__13010_13030 = G__13047;
chunk__13011_13031 = G__13048;
count__13012_13032 = G__13049;
i__13013_13033 = G__13050;
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
var and__8811__auto__ = cljs.core.some.call(null,((function (opts){
return (function (p1__13052_SHARP_){
return goog.string.startsWith(p1__13052_SHARP_,"@define");
});})(opts))
,jsdoc);
if(cljs.core.truth_(and__8811__auto__)){
var and__8811__auto____$1 = opts;
if(cljs.core.truth_(and__8811__auto____$1)){
var and__8811__auto____$2 = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"optimizations","optimizations",-2047476854).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"none","none",1333468478));
if(and__8811__auto____$2){
var define = cljs.core.get_in.call(null,opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"closure-defines","closure-defines",-1213856476),[cljs.core.str(mname)].join('')], null));
if(cljs.core.truth_(cljs.compiler.valid_define_value_QMARK_.call(null,define))){
return cljs.core.pr_str.call(null,define);
} else {
return null;
}
} else {
return and__8811__auto____$2;
}
} else {
return and__8811__auto____$1;
}
} else {
return and__8811__auto__;
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"def","def",-1043430536),(function (p__13053){
var map__13054 = p__13053;
var map__13054__$1 = ((((!((map__13054 == null)))?((((map__13054.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13054.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13054):map__13054);
var name = cljs.core.get.call(null,map__13054__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var var$ = cljs.core.get.call(null,map__13054__$1,new cljs.core.Keyword(null,"var","var",-769682797));
var init = cljs.core.get.call(null,map__13054__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
var env = cljs.core.get.call(null,map__13054__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var doc = cljs.core.get.call(null,map__13054__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var jsdoc = cljs.core.get.call(null,map__13054__$1,new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516));
var export$ = cljs.core.get.call(null,map__13054__$1,new cljs.core.Keyword(null,"export","export",214356590));
var test = cljs.core.get.call(null,map__13054__$1,new cljs.core.Keyword(null,"test","test",577538877));
var var_ast = cljs.core.get.call(null,map__13054__$1,new cljs.core.Keyword(null,"var-ast","var-ast",1200379319));
if(cljs.core.truth_((function (){var or__8823__auto__ = init;
if(cljs.core.truth_(or__8823__auto__)){
return or__8823__auto__;
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

if(cljs.core.truth_((function (){var and__8811__auto__ = cljs.analyzer._STAR_load_tests_STAR_;
if(cljs.core.truth_(and__8811__auto__)){
return test;
} else {
return and__8811__auto__;
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
cljs.compiler.emit_apply_to = (function cljs$compiler$emit_apply_to(p__13056){
var map__13077 = p__13056;
var map__13077__$1 = ((((!((map__13077 == null)))?((((map__13077.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13077.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13077):map__13077);
var name = cljs.core.get.call(null,map__13077__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var params = cljs.core.get.call(null,map__13077__$1,new cljs.core.Keyword(null,"params","params",710516235));
var env = cljs.core.get.call(null,map__13077__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var arglist = cljs.core.gensym.call(null,"arglist__");
var delegate_name = [cljs.core.str(cljs.compiler.munge.call(null,name)),cljs.core.str("__delegate")].join('');
cljs.compiler.emitln.call(null,"(function (",arglist,"){");

var seq__13079_13097 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.drop_last.call(null,(2),params)));
var chunk__13080_13098 = null;
var count__13081_13099 = (0);
var i__13082_13100 = (0);
while(true){
if((i__13082_13100 < count__13081_13099)){
var vec__13083_13101 = cljs.core._nth.call(null,chunk__13080_13098,i__13082_13100);
var i_13102 = cljs.core.nth.call(null,vec__13083_13101,(0),null);
var param_13103 = cljs.core.nth.call(null,vec__13083_13101,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_13103);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");

var G__13104 = seq__13079_13097;
var G__13105 = chunk__13080_13098;
var G__13106 = count__13081_13099;
var G__13107 = (i__13082_13100 + (1));
seq__13079_13097 = G__13104;
chunk__13080_13098 = G__13105;
count__13081_13099 = G__13106;
i__13082_13100 = G__13107;
continue;
} else {
var temp__4657__auto___13108 = cljs.core.seq.call(null,seq__13079_13097);
if(temp__4657__auto___13108){
var seq__13079_13109__$1 = temp__4657__auto___13108;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13079_13109__$1)){
var c__9637__auto___13110 = cljs.core.chunk_first.call(null,seq__13079_13109__$1);
var G__13111 = cljs.core.chunk_rest.call(null,seq__13079_13109__$1);
var G__13112 = c__9637__auto___13110;
var G__13113 = cljs.core.count.call(null,c__9637__auto___13110);
var G__13114 = (0);
seq__13079_13097 = G__13111;
chunk__13080_13098 = G__13112;
count__13081_13099 = G__13113;
i__13082_13100 = G__13114;
continue;
} else {
var vec__13086_13115 = cljs.core.first.call(null,seq__13079_13109__$1);
var i_13116 = cljs.core.nth.call(null,vec__13086_13115,(0),null);
var param_13117 = cljs.core.nth.call(null,vec__13086_13115,(1),null);
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,param_13117);

cljs.compiler.emits.call(null," = cljs.core.first(");

cljs.compiler.emitln.call(null,arglist,");");

cljs.compiler.emitln.call(null,arglist," = cljs.core.next(",arglist,");");

var G__13118 = cljs.core.next.call(null,seq__13079_13109__$1);
var G__13119 = null;
var G__13120 = (0);
var G__13121 = (0);
seq__13079_13097 = G__13118;
chunk__13080_13098 = G__13119;
count__13081_13099 = G__13120;
i__13082_13100 = G__13121;
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

var seq__13089_13122 = cljs.core.seq.call(null,params);
var chunk__13090_13123 = null;
var count__13091_13124 = (0);
var i__13092_13125 = (0);
while(true){
if((i__13092_13125 < count__13091_13124)){
var param_13126 = cljs.core._nth.call(null,chunk__13090_13123,i__13092_13125);
cljs.compiler.emit.call(null,param_13126);

if(cljs.core._EQ_.call(null,param_13126,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__13127 = seq__13089_13122;
var G__13128 = chunk__13090_13123;
var G__13129 = count__13091_13124;
var G__13130 = (i__13092_13125 + (1));
seq__13089_13122 = G__13127;
chunk__13090_13123 = G__13128;
count__13091_13124 = G__13129;
i__13092_13125 = G__13130;
continue;
} else {
var temp__4657__auto___13131 = cljs.core.seq.call(null,seq__13089_13122);
if(temp__4657__auto___13131){
var seq__13089_13132__$1 = temp__4657__auto___13131;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13089_13132__$1)){
var c__9637__auto___13133 = cljs.core.chunk_first.call(null,seq__13089_13132__$1);
var G__13134 = cljs.core.chunk_rest.call(null,seq__13089_13132__$1);
var G__13135 = c__9637__auto___13133;
var G__13136 = cljs.core.count.call(null,c__9637__auto___13133);
var G__13137 = (0);
seq__13089_13122 = G__13134;
chunk__13090_13123 = G__13135;
count__13091_13124 = G__13136;
i__13092_13125 = G__13137;
continue;
} else {
var param_13138 = cljs.core.first.call(null,seq__13089_13132__$1);
cljs.compiler.emit.call(null,param_13138);

if(cljs.core._EQ_.call(null,param_13138,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__13139 = cljs.core.next.call(null,seq__13089_13132__$1);
var G__13140 = null;
var G__13141 = (0);
var G__13142 = (0);
seq__13089_13122 = G__13139;
chunk__13090_13123 = G__13140;
count__13091_13124 = G__13141;
i__13092_13125 = G__13142;
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

var seq__13093_13143 = cljs.core.seq.call(null,params);
var chunk__13094_13144 = null;
var count__13095_13145 = (0);
var i__13096_13146 = (0);
while(true){
if((i__13096_13146 < count__13095_13145)){
var param_13147 = cljs.core._nth.call(null,chunk__13094_13144,i__13096_13146);
cljs.compiler.emit.call(null,param_13147);

if(cljs.core._EQ_.call(null,param_13147,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__13148 = seq__13093_13143;
var G__13149 = chunk__13094_13144;
var G__13150 = count__13095_13145;
var G__13151 = (i__13096_13146 + (1));
seq__13093_13143 = G__13148;
chunk__13094_13144 = G__13149;
count__13095_13145 = G__13150;
i__13096_13146 = G__13151;
continue;
} else {
var temp__4657__auto___13152 = cljs.core.seq.call(null,seq__13093_13143);
if(temp__4657__auto___13152){
var seq__13093_13153__$1 = temp__4657__auto___13152;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13093_13153__$1)){
var c__9637__auto___13154 = cljs.core.chunk_first.call(null,seq__13093_13153__$1);
var G__13155 = cljs.core.chunk_rest.call(null,seq__13093_13153__$1);
var G__13156 = c__9637__auto___13154;
var G__13157 = cljs.core.count.call(null,c__9637__auto___13154);
var G__13158 = (0);
seq__13093_13143 = G__13155;
chunk__13094_13144 = G__13156;
count__13095_13145 = G__13157;
i__13096_13146 = G__13158;
continue;
} else {
var param_13159 = cljs.core.first.call(null,seq__13093_13153__$1);
cljs.compiler.emit.call(null,param_13159);

if(cljs.core._EQ_.call(null,param_13159,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__13160 = cljs.core.next.call(null,seq__13093_13153__$1);
var G__13161 = null;
var G__13162 = (0);
var G__13163 = (0);
seq__13093_13143 = G__13160;
chunk__13094_13144 = G__13161;
count__13095_13145 = G__13162;
i__13096_13146 = G__13163;
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
var seq__13168 = cljs.core.seq.call(null,params);
var chunk__13169 = null;
var count__13170 = (0);
var i__13171 = (0);
while(true){
if((i__13171 < count__13170)){
var param = cljs.core._nth.call(null,chunk__13169,i__13171);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__13172 = seq__13168;
var G__13173 = chunk__13169;
var G__13174 = count__13170;
var G__13175 = (i__13171 + (1));
seq__13168 = G__13172;
chunk__13169 = G__13173;
count__13170 = G__13174;
i__13171 = G__13175;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__13168);
if(temp__4657__auto__){
var seq__13168__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13168__$1)){
var c__9637__auto__ = cljs.core.chunk_first.call(null,seq__13168__$1);
var G__13176 = cljs.core.chunk_rest.call(null,seq__13168__$1);
var G__13177 = c__9637__auto__;
var G__13178 = cljs.core.count.call(null,c__9637__auto__);
var G__13179 = (0);
seq__13168 = G__13176;
chunk__13169 = G__13177;
count__13170 = G__13178;
i__13171 = G__13179;
continue;
} else {
var param = cljs.core.first.call(null,seq__13168__$1);
cljs.compiler.emit.call(null,param);

if(cljs.core._EQ_.call(null,param,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__13180 = cljs.core.next.call(null,seq__13168__$1);
var G__13181 = null;
var G__13182 = (0);
var G__13183 = (0);
seq__13168 = G__13180;
chunk__13169 = G__13181;
count__13170 = G__13182;
i__13171 = G__13183;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.compiler.emit_fn_method = (function cljs$compiler$emit_fn_method(p__13184){
var map__13187 = p__13184;
var map__13187__$1 = ((((!((map__13187 == null)))?((((map__13187.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13187.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13187):map__13187);
var type = cljs.core.get.call(null,map__13187__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__13187__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.call(null,map__13187__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.call(null,map__13187__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.call(null,map__13187__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__13187__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__13187__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.call(null,map__13187__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__12628__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12628__auto__))){
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

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12628__auto__))){
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
cljs.compiler.emit_variadic_fn_method = (function cljs$compiler$emit_variadic_fn_method(p__13189){
var map__13200 = p__13189;
var map__13200__$1 = ((((!((map__13200 == null)))?((((map__13200.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13200.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13200):map__13200);
var f = map__13200__$1;
var type = cljs.core.get.call(null,map__13200__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var name = cljs.core.get.call(null,map__13200__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var variadic = cljs.core.get.call(null,map__13200__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var params = cljs.core.get.call(null,map__13200__$1,new cljs.core.Keyword(null,"params","params",710516235));
var expr = cljs.core.get.call(null,map__13200__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__13200__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var recurs = cljs.core.get.call(null,map__13200__$1,new cljs.core.Keyword(null,"recurs","recurs",-1959309309));
var max_fixed_arity = cljs.core.get.call(null,map__13200__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var env__12628__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12628__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

var name_13210__$1 = (function (){var or__8823__auto__ = name;
if(cljs.core.truth_(or__8823__auto__)){
return or__8823__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_13211 = cljs.compiler.munge.call(null,name_13210__$1);
var delegate_name_13212 = [cljs.core.str(mname_13211),cljs.core.str("__delegate")].join('');
cljs.compiler.emitln.call(null,"(function() { ");

cljs.compiler.emits.call(null,"var ",delegate_name_13212," = function (");

var seq__13202_13213 = cljs.core.seq.call(null,params);
var chunk__13203_13214 = null;
var count__13204_13215 = (0);
var i__13205_13216 = (0);
while(true){
if((i__13205_13216 < count__13204_13215)){
var param_13217 = cljs.core._nth.call(null,chunk__13203_13214,i__13205_13216);
cljs.compiler.emit.call(null,param_13217);

if(cljs.core._EQ_.call(null,param_13217,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__13218 = seq__13202_13213;
var G__13219 = chunk__13203_13214;
var G__13220 = count__13204_13215;
var G__13221 = (i__13205_13216 + (1));
seq__13202_13213 = G__13218;
chunk__13203_13214 = G__13219;
count__13204_13215 = G__13220;
i__13205_13216 = G__13221;
continue;
} else {
var temp__4657__auto___13222 = cljs.core.seq.call(null,seq__13202_13213);
if(temp__4657__auto___13222){
var seq__13202_13223__$1 = temp__4657__auto___13222;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13202_13223__$1)){
var c__9637__auto___13224 = cljs.core.chunk_first.call(null,seq__13202_13223__$1);
var G__13225 = cljs.core.chunk_rest.call(null,seq__13202_13223__$1);
var G__13226 = c__9637__auto___13224;
var G__13227 = cljs.core.count.call(null,c__9637__auto___13224);
var G__13228 = (0);
seq__13202_13213 = G__13225;
chunk__13203_13214 = G__13226;
count__13204_13215 = G__13227;
i__13205_13216 = G__13228;
continue;
} else {
var param_13229 = cljs.core.first.call(null,seq__13202_13223__$1);
cljs.compiler.emit.call(null,param_13229);

if(cljs.core._EQ_.call(null,param_13229,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__13230 = cljs.core.next.call(null,seq__13202_13223__$1);
var G__13231 = null;
var G__13232 = (0);
var G__13233 = (0);
seq__13202_13213 = G__13230;
chunk__13203_13214 = G__13231;
count__13204_13215 = G__13232;
i__13205_13216 = G__13233;
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

cljs.compiler.emitln.call(null,"var ",mname_13211," = function (",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,params),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):params)),"){");

if(cljs.core.truth_(type)){
cljs.compiler.emitln.call(null,"var self__ = this;");
} else {
}

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,params));

cljs.compiler.emitln.call(null," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",(cljs.core.count.call(null,params) - (1)),") {");

var a_13234 = cljs.compiler.emit_arguments_to_array.call(null,(cljs.core.count.call(null,params) - (1)));
cljs.compiler.emitln.call(null,"  ",cljs.core.last.call(null,params)," = new cljs.core.IndexedSeq(",a_13234,",0);");

cljs.compiler.emitln.call(null,"} ");
} else {
}

cljs.compiler.emits.call(null,"return ",delegate_name_13212,".call(this,");

var seq__13206_13235 = cljs.core.seq.call(null,params);
var chunk__13207_13236 = null;
var count__13208_13237 = (0);
var i__13209_13238 = (0);
while(true){
if((i__13209_13238 < count__13208_13237)){
var param_13239 = cljs.core._nth.call(null,chunk__13207_13236,i__13209_13238);
cljs.compiler.emit.call(null,param_13239);

if(cljs.core._EQ_.call(null,param_13239,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__13240 = seq__13206_13235;
var G__13241 = chunk__13207_13236;
var G__13242 = count__13208_13237;
var G__13243 = (i__13209_13238 + (1));
seq__13206_13235 = G__13240;
chunk__13207_13236 = G__13241;
count__13208_13237 = G__13242;
i__13209_13238 = G__13243;
continue;
} else {
var temp__4657__auto___13244 = cljs.core.seq.call(null,seq__13206_13235);
if(temp__4657__auto___13244){
var seq__13206_13245__$1 = temp__4657__auto___13244;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13206_13245__$1)){
var c__9637__auto___13246 = cljs.core.chunk_first.call(null,seq__13206_13245__$1);
var G__13247 = cljs.core.chunk_rest.call(null,seq__13206_13245__$1);
var G__13248 = c__9637__auto___13246;
var G__13249 = cljs.core.count.call(null,c__9637__auto___13246);
var G__13250 = (0);
seq__13206_13235 = G__13247;
chunk__13207_13236 = G__13248;
count__13208_13237 = G__13249;
i__13209_13238 = G__13250;
continue;
} else {
var param_13251 = cljs.core.first.call(null,seq__13206_13245__$1);
cljs.compiler.emit.call(null,param_13251);

if(cljs.core._EQ_.call(null,param_13251,cljs.core.last.call(null,params))){
} else {
cljs.compiler.emits.call(null,",");
}

var G__13252 = cljs.core.next.call(null,seq__13206_13245__$1);
var G__13253 = null;
var G__13254 = (0);
var G__13255 = (0);
seq__13206_13235 = G__13252;
chunk__13207_13236 = G__13253;
count__13208_13237 = G__13254;
i__13209_13238 = G__13255;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emits.call(null,");");

cljs.compiler.emitln.call(null,"};");

cljs.compiler.emitln.call(null,mname_13211,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emits.call(null,mname_13211,".cljs$lang$applyTo = ");

cljs.compiler.emit_apply_to.call(null,cljs.core.assoc.call(null,f,new cljs.core.Keyword(null,"name","name",1843675177),name_13210__$1));

cljs.compiler.emitln.call(null,";");

cljs.compiler.emitln.call(null,mname_13211,".cljs$core$IFn$_invoke$arity$variadic = ",delegate_name_13212,";");

cljs.compiler.emitln.call(null,"return ",mname_13211,";");

cljs.compiler.emitln.call(null,"})()");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12628__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
});
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p__13259){
var map__13260 = p__13259;
var map__13260__$1 = ((((!((map__13260 == null)))?((((map__13260.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13260.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13260):map__13260);
var name = cljs.core.get.call(null,map__13260__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var env = cljs.core.get.call(null,map__13260__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var methods$ = cljs.core.get.call(null,map__13260__$1,new cljs.core.Keyword(null,"methods","methods",453930866));
var max_fixed_arity = cljs.core.get.call(null,map__13260__$1,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543));
var variadic = cljs.core.get.call(null,map__13260__$1,new cljs.core.Keyword(null,"variadic","variadic",882626057));
var recur_frames = cljs.core.get.call(null,map__13260__$1,new cljs.core.Keyword(null,"recur-frames","recur-frames",-307205196));
var loop_lets = cljs.core.get.call(null,map__13260__$1,new cljs.core.Keyword(null,"loop-lets","loop-lets",2036794185));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
return null;
} else {
var loop_locals = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.compiler.munge,cljs.core.concat.call(null,cljs.core.mapcat.call(null,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.filter.call(null,((function (map__13260,map__13260__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__13256_SHARP_){
var and__8811__auto__ = p1__13256_SHARP_;
if(cljs.core.truth_(and__8811__auto__)){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"flag","flag",1088647881).cljs$core$IFn$_invoke$arity$1(p1__13256_SHARP_));
} else {
return and__8811__auto__;
}
});})(map__13260,map__13260__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
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
var name_13295__$1 = (function (){var or__8823__auto__ = name;
if(cljs.core.truth_(or__8823__auto__)){
return or__8823__auto__;
} else {
return cljs.core.gensym.call(null);
}
})();
var mname_13296 = cljs.compiler.munge.call(null,name_13295__$1);
var maxparams_13297 = cljs.core.apply.call(null,cljs.core.max_key,cljs.core.count,cljs.core.map.call(null,new cljs.core.Keyword(null,"params","params",710516235),methods$));
var mmap_13298 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (name_13295__$1,mname_13296,maxparams_13297,loop_locals,map__13260,map__13260__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (method){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.compiler.munge.call(null,cljs.core.symbol.call(null,[cljs.core.str(mname_13296),cljs.core.str("__"),cljs.core.str(cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(method)))].join(''))),method], null);
});})(name_13295__$1,mname_13296,maxparams_13297,loop_locals,map__13260,map__13260__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,methods$));
var ms_13299 = cljs.core.sort_by.call(null,((function (name_13295__$1,mname_13296,maxparams_13297,mmap_13298,loop_locals,map__13260,map__13260__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__13257_SHARP_){
return cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__13257_SHARP_)));
});})(name_13295__$1,mname_13296,maxparams_13297,mmap_13298,loop_locals,map__13260,map__13260__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,cljs.core.seq.call(null,mmap_13298));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emitln.call(null,"(function() {");

cljs.compiler.emitln.call(null,"var ",mname_13296," = null;");

var seq__13262_13300 = cljs.core.seq.call(null,ms_13299);
var chunk__13263_13301 = null;
var count__13264_13302 = (0);
var i__13265_13303 = (0);
while(true){
if((i__13265_13303 < count__13264_13302)){
var vec__13266_13304 = cljs.core._nth.call(null,chunk__13263_13301,i__13265_13303);
var n_13305 = cljs.core.nth.call(null,vec__13266_13304,(0),null);
var meth_13306 = cljs.core.nth.call(null,vec__13266_13304,(1),null);
cljs.compiler.emits.call(null,"var ",n_13305," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_13306))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_13306);
} else {
cljs.compiler.emit_fn_method.call(null,meth_13306);
}

cljs.compiler.emitln.call(null,";");

var G__13307 = seq__13262_13300;
var G__13308 = chunk__13263_13301;
var G__13309 = count__13264_13302;
var G__13310 = (i__13265_13303 + (1));
seq__13262_13300 = G__13307;
chunk__13263_13301 = G__13308;
count__13264_13302 = G__13309;
i__13265_13303 = G__13310;
continue;
} else {
var temp__4657__auto___13311 = cljs.core.seq.call(null,seq__13262_13300);
if(temp__4657__auto___13311){
var seq__13262_13312__$1 = temp__4657__auto___13311;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13262_13312__$1)){
var c__9637__auto___13313 = cljs.core.chunk_first.call(null,seq__13262_13312__$1);
var G__13314 = cljs.core.chunk_rest.call(null,seq__13262_13312__$1);
var G__13315 = c__9637__auto___13313;
var G__13316 = cljs.core.count.call(null,c__9637__auto___13313);
var G__13317 = (0);
seq__13262_13300 = G__13314;
chunk__13263_13301 = G__13315;
count__13264_13302 = G__13316;
i__13265_13303 = G__13317;
continue;
} else {
var vec__13269_13318 = cljs.core.first.call(null,seq__13262_13312__$1);
var n_13319 = cljs.core.nth.call(null,vec__13269_13318,(0),null);
var meth_13320 = cljs.core.nth.call(null,vec__13269_13318,(1),null);
cljs.compiler.emits.call(null,"var ",n_13319," = ");

if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_13320))){
cljs.compiler.emit_variadic_fn_method.call(null,meth_13320);
} else {
cljs.compiler.emit_fn_method.call(null,meth_13320);
}

cljs.compiler.emitln.call(null,";");

var G__13321 = cljs.core.next.call(null,seq__13262_13312__$1);
var G__13322 = null;
var G__13323 = (0);
var G__13324 = (0);
seq__13262_13300 = G__13321;
chunk__13263_13301 = G__13322;
count__13264_13302 = G__13323;
i__13265_13303 = G__13324;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,mname_13296," = function(",cljs.compiler.comma_sep.call(null,(cljs.core.truth_(variadic)?cljs.core.concat.call(null,cljs.core.butlast.call(null,maxparams_13297),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"var_args","var_args",1214280389,null)], null)):maxparams_13297)),"){");

if(cljs.core.truth_(variadic)){
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,cljs.core.last.call(null,maxparams_13297));

cljs.compiler.emitln.call(null," = var_args;");
} else {
}

cljs.compiler.emitln.call(null,"switch(arguments.length){");

var seq__13272_13325 = cljs.core.seq.call(null,ms_13299);
var chunk__13273_13326 = null;
var count__13274_13327 = (0);
var i__13275_13328 = (0);
while(true){
if((i__13275_13328 < count__13274_13327)){
var vec__13276_13329 = cljs.core._nth.call(null,chunk__13273_13326,i__13275_13328);
var n_13330 = cljs.core.nth.call(null,vec__13276_13329,(0),null);
var meth_13331 = cljs.core.nth.call(null,vec__13276_13329,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_13331))){
cljs.compiler.emitln.call(null,"default:");

var restarg_13332 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_13332," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_13333 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_13332," = new cljs.core.IndexedSeq(",a_13333,",0);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_13330,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_13297)),(((cljs.core.count.call(null,maxparams_13297) > (1)))?", ":null),restarg_13332,");");
} else {
var pcnt_13334 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_13331));
cljs.compiler.emitln.call(null,"case ",pcnt_13334,":");

cljs.compiler.emitln.call(null,"return ",n_13330,".call(this",(((pcnt_13334 === (0)))?null:cljs.core._conj.call(null,(function (){var x__9660__auto__ = cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_13334,maxparams_13297));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),",")),");");
}

var G__13335 = seq__13272_13325;
var G__13336 = chunk__13273_13326;
var G__13337 = count__13274_13327;
var G__13338 = (i__13275_13328 + (1));
seq__13272_13325 = G__13335;
chunk__13273_13326 = G__13336;
count__13274_13327 = G__13337;
i__13275_13328 = G__13338;
continue;
} else {
var temp__4657__auto___13339 = cljs.core.seq.call(null,seq__13272_13325);
if(temp__4657__auto___13339){
var seq__13272_13340__$1 = temp__4657__auto___13339;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13272_13340__$1)){
var c__9637__auto___13341 = cljs.core.chunk_first.call(null,seq__13272_13340__$1);
var G__13342 = cljs.core.chunk_rest.call(null,seq__13272_13340__$1);
var G__13343 = c__9637__auto___13341;
var G__13344 = cljs.core.count.call(null,c__9637__auto___13341);
var G__13345 = (0);
seq__13272_13325 = G__13342;
chunk__13273_13326 = G__13343;
count__13274_13327 = G__13344;
i__13275_13328 = G__13345;
continue;
} else {
var vec__13279_13346 = cljs.core.first.call(null,seq__13272_13340__$1);
var n_13347 = cljs.core.nth.call(null,vec__13279_13346,(0),null);
var meth_13348 = cljs.core.nth.call(null,vec__13279_13346,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_13348))){
cljs.compiler.emitln.call(null,"default:");

var restarg_13349 = cljs.compiler.munge.call(null,cljs.core.gensym.call(null));
cljs.compiler.emitln.call(null,"var ",restarg_13349," = null;");

cljs.compiler.emitln.call(null,"if (arguments.length > ",max_fixed_arity,") {");

var a_13350 = cljs.compiler.emit_arguments_to_array.call(null,max_fixed_arity);
cljs.compiler.emitln.call(null,restarg_13349," = new cljs.core.IndexedSeq(",a_13350,",0);");

cljs.compiler.emitln.call(null,"}");

cljs.compiler.emitln.call(null,"return ",n_13347,".cljs$core$IFn$_invoke$arity$variadic(",cljs.compiler.comma_sep.call(null,cljs.core.butlast.call(null,maxparams_13297)),(((cljs.core.count.call(null,maxparams_13297) > (1)))?", ":null),restarg_13349,");");
} else {
var pcnt_13351 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_13348));
cljs.compiler.emitln.call(null,"case ",pcnt_13351,":");

cljs.compiler.emitln.call(null,"return ",n_13347,".call(this",(((pcnt_13351 === (0)))?null:cljs.core._conj.call(null,(function (){var x__9660__auto__ = cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,pcnt_13351,maxparams_13297));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),",")),");");
}

var G__13352 = cljs.core.next.call(null,seq__13272_13340__$1);
var G__13353 = null;
var G__13354 = (0);
var G__13355 = (0);
seq__13272_13325 = G__13352;
chunk__13273_13326 = G__13353;
count__13274_13327 = G__13354;
i__13275_13328 = G__13355;
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
cljs.compiler.emitln.call(null,mname_13296,".cljs$lang$maxFixedArity = ",max_fixed_arity,";");

cljs.compiler.emitln.call(null,mname_13296,".cljs$lang$applyTo = ",cljs.core.some.call(null,((function (name_13295__$1,mname_13296,maxparams_13297,mmap_13298,ms_13299,loop_locals,map__13260,map__13260__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets){
return (function (p1__13258_SHARP_){
var vec__13282 = p1__13258_SHARP_;
var n = cljs.core.nth.call(null,vec__13282,(0),null);
var m = cljs.core.nth.call(null,vec__13282,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(m))){
return n;
} else {
return null;
}
});})(name_13295__$1,mname_13296,maxparams_13297,mmap_13298,ms_13299,loop_locals,map__13260,map__13260__$1,name,env,methods$,max_fixed_arity,variadic,recur_frames,loop_lets))
,ms_13299),".cljs$lang$applyTo;");
} else {
}

var seq__13285_13356 = cljs.core.seq.call(null,ms_13299);
var chunk__13286_13357 = null;
var count__13287_13358 = (0);
var i__13288_13359 = (0);
while(true){
if((i__13288_13359 < count__13287_13358)){
var vec__13289_13360 = cljs.core._nth.call(null,chunk__13286_13357,i__13288_13359);
var n_13361 = cljs.core.nth.call(null,vec__13289_13360,(0),null);
var meth_13362 = cljs.core.nth.call(null,vec__13289_13360,(1),null);
var c_13363 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_13362));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_13362))){
cljs.compiler.emitln.call(null,mname_13296,".cljs$core$IFn$_invoke$arity$variadic = ",n_13361,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_13296,".cljs$core$IFn$_invoke$arity$",c_13363," = ",n_13361,";");
}

var G__13364 = seq__13285_13356;
var G__13365 = chunk__13286_13357;
var G__13366 = count__13287_13358;
var G__13367 = (i__13288_13359 + (1));
seq__13285_13356 = G__13364;
chunk__13286_13357 = G__13365;
count__13287_13358 = G__13366;
i__13288_13359 = G__13367;
continue;
} else {
var temp__4657__auto___13368 = cljs.core.seq.call(null,seq__13285_13356);
if(temp__4657__auto___13368){
var seq__13285_13369__$1 = temp__4657__auto___13368;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13285_13369__$1)){
var c__9637__auto___13370 = cljs.core.chunk_first.call(null,seq__13285_13369__$1);
var G__13371 = cljs.core.chunk_rest.call(null,seq__13285_13369__$1);
var G__13372 = c__9637__auto___13370;
var G__13373 = cljs.core.count.call(null,c__9637__auto___13370);
var G__13374 = (0);
seq__13285_13356 = G__13371;
chunk__13286_13357 = G__13372;
count__13287_13358 = G__13373;
i__13288_13359 = G__13374;
continue;
} else {
var vec__13292_13375 = cljs.core.first.call(null,seq__13285_13369__$1);
var n_13376 = cljs.core.nth.call(null,vec__13292_13375,(0),null);
var meth_13377 = cljs.core.nth.call(null,vec__13292_13375,(1),null);
var c_13378 = cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(meth_13377));
if(cljs.core.truth_(new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(meth_13377))){
cljs.compiler.emitln.call(null,mname_13296,".cljs$core$IFn$_invoke$arity$variadic = ",n_13376,".cljs$core$IFn$_invoke$arity$variadic;");
} else {
cljs.compiler.emitln.call(null,mname_13296,".cljs$core$IFn$_invoke$arity$",c_13378," = ",n_13376,";");
}

var G__13379 = cljs.core.next.call(null,seq__13285_13369__$1);
var G__13380 = null;
var G__13381 = (0);
var G__13382 = (0);
seq__13285_13356 = G__13379;
chunk__13286_13357 = G__13380;
count__13287_13358 = G__13381;
i__13288_13359 = G__13382;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"return ",mname_13296,";");

cljs.compiler.emitln.call(null,"})()");
}

if(loop_locals){
return cljs.compiler.emitln.call(null,";})(",cljs.compiler.comma_sep.call(null,loop_locals),"))");
} else {
return null;
}
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"do","do",46310725),(function (p__13383){
var map__13384 = p__13383;
var map__13384__$1 = ((((!((map__13384 == null)))?((((map__13384.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13384.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13384):map__13384);
var statements = cljs.core.get.call(null,map__13384__$1,new cljs.core.Keyword(null,"statements","statements",600349855));
var ret = cljs.core.get.call(null,map__13384__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var env = cljs.core.get.call(null,map__13384__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var and__8811__auto__ = statements;
if(cljs.core.truth_(and__8811__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context);
} else {
return and__8811__auto__;
}
})())){
cljs.compiler.emitln.call(null,"(function (){");
} else {
}

var seq__13386_13390 = cljs.core.seq.call(null,statements);
var chunk__13387_13391 = null;
var count__13388_13392 = (0);
var i__13389_13393 = (0);
while(true){
if((i__13389_13393 < count__13388_13392)){
var s_13394 = cljs.core._nth.call(null,chunk__13387_13391,i__13389_13393);
cljs.compiler.emitln.call(null,s_13394);

var G__13395 = seq__13386_13390;
var G__13396 = chunk__13387_13391;
var G__13397 = count__13388_13392;
var G__13398 = (i__13389_13393 + (1));
seq__13386_13390 = G__13395;
chunk__13387_13391 = G__13396;
count__13388_13392 = G__13397;
i__13389_13393 = G__13398;
continue;
} else {
var temp__4657__auto___13399 = cljs.core.seq.call(null,seq__13386_13390);
if(temp__4657__auto___13399){
var seq__13386_13400__$1 = temp__4657__auto___13399;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13386_13400__$1)){
var c__9637__auto___13401 = cljs.core.chunk_first.call(null,seq__13386_13400__$1);
var G__13402 = cljs.core.chunk_rest.call(null,seq__13386_13400__$1);
var G__13403 = c__9637__auto___13401;
var G__13404 = cljs.core.count.call(null,c__9637__auto___13401);
var G__13405 = (0);
seq__13386_13390 = G__13402;
chunk__13387_13391 = G__13403;
count__13388_13392 = G__13404;
i__13389_13393 = G__13405;
continue;
} else {
var s_13406 = cljs.core.first.call(null,seq__13386_13400__$1);
cljs.compiler.emitln.call(null,s_13406);

var G__13407 = cljs.core.next.call(null,seq__13386_13400__$1);
var G__13408 = null;
var G__13409 = (0);
var G__13410 = (0);
seq__13386_13390 = G__13407;
chunk__13387_13391 = G__13408;
count__13388_13392 = G__13409;
i__13389_13393 = G__13410;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emit.call(null,ret);

if(cljs.core.truth_((function (){var and__8811__auto__ = statements;
if(cljs.core.truth_(and__8811__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context);
} else {
return and__8811__auto__;
}
})())){
return cljs.compiler.emitln.call(null,"})()");
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"try","try",1380742522),(function (p__13411){
var map__13412 = p__13411;
var map__13412__$1 = ((((!((map__13412 == null)))?((((map__13412.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13412.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13412):map__13412);
var env = cljs.core.get.call(null,map__13412__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var try$ = cljs.core.get.call(null,map__13412__$1,new cljs.core.Keyword(null,"try","try",1380742522));
var catch$ = cljs.core.get.call(null,map__13412__$1,new cljs.core.Keyword(null,"catch","catch",1038065524));
var name = cljs.core.get.call(null,map__13412__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var finally$ = cljs.core.get.call(null,map__13412__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_((function (){var or__8823__auto__ = name;
if(cljs.core.truth_(or__8823__auto__)){
return or__8823__auto__;
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
cljs.compiler.emit_let = (function cljs$compiler$emit_let(p__13414,is_loop){
var map__13426 = p__13414;
var map__13426__$1 = ((((!((map__13426 == null)))?((((map__13426.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13426.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13426):map__13426);
var bindings = cljs.core.get.call(null,map__13426__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.call(null,map__13426__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__13426__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var _STAR_lexical_renames_STAR_13428_13437 = cljs.compiler._STAR_lexical_renames_STAR_;
cljs.compiler._STAR_lexical_renames_STAR_ = cljs.core.into.call(null,cljs.compiler._STAR_lexical_renames_STAR_,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"statement","statement",-32780863),context))?cljs.core.map.call(null,((function (_STAR_lexical_renames_STAR_13428_13437,context,map__13426,map__13426__$1,bindings,expr,env){
return (function (binding){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(binding);
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.compiler.hash_scope.call(null,binding),cljs.core.gensym.call(null,[cljs.core.str(name),cljs.core.str("-")].join(''))],null));
});})(_STAR_lexical_renames_STAR_13428_13437,context,map__13426,map__13426__$1,bindings,expr,env))
,bindings):null));

try{var seq__13429_13438 = cljs.core.seq.call(null,bindings);
var chunk__13430_13439 = null;
var count__13431_13440 = (0);
var i__13432_13441 = (0);
while(true){
if((i__13432_13441 < count__13431_13440)){
var map__13433_13442 = cljs.core._nth.call(null,chunk__13430_13439,i__13432_13441);
var map__13433_13443__$1 = ((((!((map__13433_13442 == null)))?((((map__13433_13442.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13433_13442.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13433_13442):map__13433_13442);
var binding_13444 = map__13433_13443__$1;
var init_13445 = cljs.core.get.call(null,map__13433_13443__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_13444);

cljs.compiler.emitln.call(null," = ",init_13445,";");

var G__13446 = seq__13429_13438;
var G__13447 = chunk__13430_13439;
var G__13448 = count__13431_13440;
var G__13449 = (i__13432_13441 + (1));
seq__13429_13438 = G__13446;
chunk__13430_13439 = G__13447;
count__13431_13440 = G__13448;
i__13432_13441 = G__13449;
continue;
} else {
var temp__4657__auto___13450 = cljs.core.seq.call(null,seq__13429_13438);
if(temp__4657__auto___13450){
var seq__13429_13451__$1 = temp__4657__auto___13450;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13429_13451__$1)){
var c__9637__auto___13452 = cljs.core.chunk_first.call(null,seq__13429_13451__$1);
var G__13453 = cljs.core.chunk_rest.call(null,seq__13429_13451__$1);
var G__13454 = c__9637__auto___13452;
var G__13455 = cljs.core.count.call(null,c__9637__auto___13452);
var G__13456 = (0);
seq__13429_13438 = G__13453;
chunk__13430_13439 = G__13454;
count__13431_13440 = G__13455;
i__13432_13441 = G__13456;
continue;
} else {
var map__13435_13457 = cljs.core.first.call(null,seq__13429_13451__$1);
var map__13435_13458__$1 = ((((!((map__13435_13457 == null)))?((((map__13435_13457.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13435_13457.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13435_13457):map__13435_13457);
var binding_13459 = map__13435_13458__$1;
var init_13460 = cljs.core.get.call(null,map__13435_13458__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emits.call(null,"var ");

cljs.compiler.emit.call(null,binding_13459);

cljs.compiler.emitln.call(null," = ",init_13460,";");

var G__13461 = cljs.core.next.call(null,seq__13429_13451__$1);
var G__13462 = null;
var G__13463 = (0);
var G__13464 = (0);
seq__13429_13438 = G__13461;
chunk__13430_13439 = G__13462;
count__13431_13440 = G__13463;
i__13432_13441 = G__13464;
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
}finally {cljs.compiler._STAR_lexical_renames_STAR_ = _STAR_lexical_renames_STAR_13428_13437;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"recur","recur",-437573268),(function (p__13465){
var map__13466 = p__13465;
var map__13466__$1 = ((((!((map__13466 == null)))?((((map__13466.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13466.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13466):map__13466);
var frame = cljs.core.get.call(null,map__13466__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var exprs = cljs.core.get.call(null,map__13466__$1,new cljs.core.Keyword(null,"exprs","exprs",1795829094));
var env = cljs.core.get.call(null,map__13466__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var temps = cljs.core.vec.call(null,cljs.core.take.call(null,cljs.core.count.call(null,exprs),cljs.core.repeatedly.call(null,cljs.core.gensym)));
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(frame);
var n__9741__auto___13468 = cljs.core.count.call(null,exprs);
var i_13469 = (0);
while(true){
if((i_13469 < n__9741__auto___13468)){
cljs.compiler.emitln.call(null,"var ",temps.call(null,i_13469)," = ",exprs.call(null,i_13469),";");

var G__13470 = (i_13469 + (1));
i_13469 = G__13470;
continue;
} else {
}
break;
}

var n__9741__auto___13471 = cljs.core.count.call(null,exprs);
var i_13472 = (0);
while(true){
if((i_13472 < n__9741__auto___13471)){
cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,params.call(null,i_13472))," = ",temps.call(null,i_13472),";");

var G__13473 = (i_13472 + (1));
i_13472 = G__13473;
continue;
} else {
}
break;
}

return cljs.compiler.emitln.call(null,"continue;");
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"letfn","letfn",-2121022354),(function (p__13474){
var map__13475 = p__13474;
var map__13475__$1 = ((((!((map__13475 == null)))?((((map__13475.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13475.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13475):map__13475);
var bindings = cljs.core.get.call(null,map__13475__$1,new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var expr = cljs.core.get.call(null,map__13475__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var env = cljs.core.get.call(null,map__13475__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var context = new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),context)){
cljs.compiler.emits.call(null,"(function (){");
} else {
}

var seq__13477_13485 = cljs.core.seq.call(null,bindings);
var chunk__13478_13486 = null;
var count__13479_13487 = (0);
var i__13480_13488 = (0);
while(true){
if((i__13480_13488 < count__13479_13487)){
var map__13481_13489 = cljs.core._nth.call(null,chunk__13478_13486,i__13480_13488);
var map__13481_13490__$1 = ((((!((map__13481_13489 == null)))?((((map__13481_13489.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13481_13489.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13481_13489):map__13481_13489);
var binding_13491 = map__13481_13490__$1;
var init_13492 = cljs.core.get.call(null,map__13481_13490__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_13491)," = ",init_13492,";");

var G__13493 = seq__13477_13485;
var G__13494 = chunk__13478_13486;
var G__13495 = count__13479_13487;
var G__13496 = (i__13480_13488 + (1));
seq__13477_13485 = G__13493;
chunk__13478_13486 = G__13494;
count__13479_13487 = G__13495;
i__13480_13488 = G__13496;
continue;
} else {
var temp__4657__auto___13497 = cljs.core.seq.call(null,seq__13477_13485);
if(temp__4657__auto___13497){
var seq__13477_13498__$1 = temp__4657__auto___13497;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13477_13498__$1)){
var c__9637__auto___13499 = cljs.core.chunk_first.call(null,seq__13477_13498__$1);
var G__13500 = cljs.core.chunk_rest.call(null,seq__13477_13498__$1);
var G__13501 = c__9637__auto___13499;
var G__13502 = cljs.core.count.call(null,c__9637__auto___13499);
var G__13503 = (0);
seq__13477_13485 = G__13500;
chunk__13478_13486 = G__13501;
count__13479_13487 = G__13502;
i__13480_13488 = G__13503;
continue;
} else {
var map__13483_13504 = cljs.core.first.call(null,seq__13477_13498__$1);
var map__13483_13505__$1 = ((((!((map__13483_13504 == null)))?((((map__13483_13504.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13483_13504.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13483_13504):map__13483_13504);
var binding_13506 = map__13483_13505__$1;
var init_13507 = cljs.core.get.call(null,map__13483_13505__$1,new cljs.core.Keyword(null,"init","init",-1875481434));
cljs.compiler.emitln.call(null,"var ",cljs.compiler.munge.call(null,binding_13506)," = ",init_13507,";");

var G__13508 = cljs.core.next.call(null,seq__13477_13498__$1);
var G__13509 = null;
var G__13510 = (0);
var G__13511 = (0);
seq__13477_13485 = G__13508;
chunk__13478_13486 = G__13509;
count__13479_13487 = G__13510;
i__13480_13488 = G__13511;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"invoke","invoke",1145927159),(function (p__13514){
var map__13515 = p__13514;
var map__13515__$1 = ((((!((map__13515 == null)))?((((map__13515.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13515.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13515):map__13515);
var expr = map__13515__$1;
var f = cljs.core.get.call(null,map__13515__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
var args = cljs.core.get.call(null,map__13515__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__13515__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var info = new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(f);
var fn_QMARK_ = (function (){var and__8811__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__8811__auto__)){
var and__8811__auto____$1 = cljs.core.not.call(null,new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(info));
if(and__8811__auto____$1){
return new cljs.core.Keyword(null,"fn-var","fn-var",1086204730).cljs$core$IFn$_invoke$arity$1(info);
} else {
return and__8811__auto____$1;
}
} else {
return and__8811__auto__;
}
})();
var protocol = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(info);
var tag = cljs.analyzer.infer_tag.call(null,env,cljs.core.first.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr)));
var proto_QMARK_ = (function (){var and__8811__auto__ = protocol;
if(cljs.core.truth_(and__8811__auto__)){
var and__8811__auto____$1 = tag;
if(cljs.core.truth_(and__8811__auto____$1)){
var or__8823__auto__ = (function (){var and__8811__auto____$2 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__8811__auto____$2)){
var and__8811__auto____$3 = protocol;
if(cljs.core.truth_(and__8811__auto____$3)){
return cljs.core._EQ_.call(null,tag,new cljs.core.Symbol(null,"not-native","not-native",-236392494,null));
} else {
return and__8811__auto____$3;
}
} else {
return and__8811__auto____$2;
}
})();
if(cljs.core.truth_(or__8823__auto__)){
return or__8823__auto__;
} else {
var and__8811__auto____$2 = (function (){var or__8823__auto____$1 = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(or__8823__auto____$1)){
return or__8823__auto____$1;
} else {
return new cljs.core.Keyword(null,"protocol-inline","protocol-inline",1550487556).cljs$core$IFn$_invoke$arity$1(env);
}
})();
if(cljs.core.truth_(and__8811__auto____$2)){
var or__8823__auto____$1 = cljs.core._EQ_.call(null,protocol,tag);
if(or__8823__auto____$1){
return or__8823__auto____$1;
} else {
var and__8811__auto____$3 = !(cljs.core.set_QMARK_.call(null,tag));
if(and__8811__auto____$3){
var and__8811__auto____$4 = cljs.core.not.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [new cljs.core.Symbol(null,"clj","clj",980036099,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null,new cljs.core.Symbol(null,"object","object",-1179821820,null),null,new cljs.core.Symbol(null,"any","any",-948528346,null),null,new cljs.core.Symbol(null,"number","number",-1084057331,null),null,new cljs.core.Symbol(null,"clj-or-nil","clj-or-nil",-2008798668,null),null,new cljs.core.Symbol(null,"array","array",-440182315,null),null,new cljs.core.Symbol(null,"string","string",-349010059,null),null,new cljs.core.Symbol(null,"function","function",-486723946,null),null,new cljs.core.Symbol(null,"clj-nil","clj-nil",1321798654,null),null], null), null).call(null,tag));
if(and__8811__auto____$4){
var temp__4657__auto__ = new cljs.core.Keyword(null,"protocols","protocols",-5615896).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_existing_var.call(null,env,cljs.core.symbol.call(null,cljs.core.name.call(null,tag))));
if(cljs.core.truth_(temp__4657__auto__)){
var ps = temp__4657__auto__;
return ps.call(null,protocol);
} else {
return null;
}
} else {
return and__8811__auto____$4;
}
} else {
return and__8811__auto____$3;
}
}
} else {
return and__8811__auto____$2;
}
}
} else {
return and__8811__auto____$1;
}
} else {
return and__8811__auto__;
}
})();
var opt_not_QMARK_ = (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info),new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null))) && (cljs.core._EQ_.call(null,cljs.analyzer.infer_tag.call(null,env,cljs.core.first.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(expr))),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)));
var ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(info);
var js_QMARK_ = (cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"js","js",-886355190,null))) || (cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"Math","Math",2033287572,null)));
var goog_QMARK_ = (cljs.core.truth_(ns)?(function (){var or__8823__auto__ = cljs.core._EQ_.call(null,ns,new cljs.core.Symbol(null,"goog","goog",-70603925,null));
if(or__8823__auto__){
return or__8823__auto__;
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
var vec__13517 = (cljs.core.truth_(fn_QMARK_)?(function (){var arity = cljs.core.count.call(null,args);
var variadic_QMARK_ = new cljs.core.Keyword(null,"variadic","variadic",882626057).cljs$core$IFn$_invoke$arity$1(info);
var mps = new cljs.core.Keyword(null,"method-params","method-params",-980792179).cljs$core$IFn$_invoke$arity$1(info);
var mfa = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(info);
if((cljs.core.not.call(null,variadic_QMARK_)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,mps),(1)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
} else {
if(cljs.core.truth_((function (){var and__8811__auto__ = variadic_QMARK_;
if(cljs.core.truth_(and__8811__auto__)){
return (arity > mfa);
} else {
return and__8811__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__13515,map__13515__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str(cljs.compiler.munge.call(null,info__$1)),cljs.core.str(".cljs$core$IFn$_invoke$arity$variadic")].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__13515,map__13515__$1,expr,f,args,env){
return (function (p1__13512_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__13512_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__13515,map__13515__$1,expr,f,args,env))
);
});})(arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__13515,map__13515__$1,expr,f,args,env))
),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),mfa], null)], null);
} else {
var arities = cljs.core.map.call(null,cljs.core.count,mps);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([arity], true),arities))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__13515,map__13515__$1,expr,f,args,env){
return (function (info__$1){
return cljs.core.update_in.call(null,cljs.core.assoc.call(null,info__$1,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.symbol.call(null,[cljs.core.str(cljs.compiler.munge.call(null,info__$1)),cljs.core.str(".cljs$core$IFn$_invoke$arity$"),cljs.core.str(arity)].join(''))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null),((function (arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__13515,map__13515__$1,expr,f,args,env){
return (function (p1__13513_SHARP_){
return cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,p1__13513_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803)),new cljs.core.Keyword(null,"fn-self-name","fn-self-name",1461143531));
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__13515,map__13515__$1,expr,f,args,env))
);
});})(arities,arity,variadic_QMARK_,mps,mfa,info,fn_QMARK_,protocol,tag,proto_QMARK_,opt_not_QMARK_,ns,js_QMARK_,goog_QMARK_,keyword_QMARK_,map__13515,map__13515__$1,expr,f,args,env))
),null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null);
}

}
}
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,null], null));
var f__$1 = cljs.core.nth.call(null,vec__13517,(0),null);
var variadic_invoke = cljs.core.nth.call(null,vec__13517,(1),null);
var env__12628__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12628__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(opt_not_QMARK_){
cljs.compiler.emits.call(null,"!(",cljs.core.first.call(null,args),")");
} else {
if(cljs.core.truth_(proto_QMARK_)){
var pimpl_13520 = [cljs.core.str(cljs.compiler.munge.call(null,cljs.compiler.protocol_prefix.call(null,protocol))),cljs.core.str(cljs.compiler.munge.call(null,cljs.core.name.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(info)))),cljs.core.str("$arity$"),cljs.core.str(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,cljs.core.first.call(null,args),".",pimpl_13520,"(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",cljs.core.rest.call(null,args))),")");
} else {
if(keyword_QMARK_){
cljs.compiler.emits.call(null,f__$1,".cljs$core$IFn$_invoke$arity$",cljs.core.count.call(null,args),"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_(variadic_invoke)){
var mfa_13521 = new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543).cljs$core$IFn$_invoke$arity$1(variadic_invoke);
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,cljs.core.take.call(null,mfa_13521,args)),(((mfa_13521 === (0)))?null:","),"cljs.core.array_seq([",cljs.compiler.comma_sep.call(null,cljs.core.drop.call(null,mfa_13521,args)),"], 0))");
} else {
if(cljs.core.truth_((function (){var or__8823__auto__ = fn_QMARK_;
if(cljs.core.truth_(or__8823__auto__)){
return or__8823__auto__;
} else {
var or__8823__auto____$1 = js_QMARK_;
if(or__8823__auto____$1){
return or__8823__auto____$1;
} else {
return goog_QMARK_;
}
}
})())){
cljs.compiler.emits.call(null,f__$1,"(",cljs.compiler.comma_sep.call(null,args),")");
} else {
if(cljs.core.truth_((function (){var and__8811__auto__ = cljs.analyzer._STAR_cljs_static_fns_STAR_;
if(cljs.core.truth_(and__8811__auto__)){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(f__$1),new cljs.core.Keyword(null,"var","var",-769682797));
} else {
return and__8811__auto__;
}
})())){
var fprop_13522 = [cljs.core.str(".cljs$core$IFn$_invoke$arity$"),cljs.core.str(cljs.core.count.call(null,args))].join('');
cljs.compiler.emits.call(null,"(",f__$1,fprop_13522," ? ",f__$1,fprop_13522,"(",cljs.compiler.comma_sep.call(null,args),") : ",f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),"))");
} else {
cljs.compiler.emits.call(null,f__$1,".call(",cljs.compiler.comma_sep.call(null,cljs.core.cons.call(null,"null",args)),")");
}

}
}
}
}
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12628__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"new","new",-2085437848),(function (p__13523){
var map__13524 = p__13523;
var map__13524__$1 = ((((!((map__13524 == null)))?((((map__13524.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13524.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13524):map__13524);
var ctor = cljs.core.get.call(null,map__13524__$1,new cljs.core.Keyword(null,"ctor","ctor",1750864802));
var args = cljs.core.get.call(null,map__13524__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__13524__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__12628__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12628__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,"(new ",ctor,"(",cljs.compiler.comma_sep.call(null,args),"))");

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12628__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"set!","set!",-1389817006),(function (p__13526){
var map__13527 = p__13526;
var map__13527__$1 = ((((!((map__13527 == null)))?((((map__13527.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13527.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13527):map__13527);
var target = cljs.core.get.call(null,map__13527__$1,new cljs.core.Keyword(null,"target","target",253001721));
var val = cljs.core.get.call(null,map__13527__$1,new cljs.core.Keyword(null,"val","val",128701612));
var env = cljs.core.get.call(null,map__13527__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__12628__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12628__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

cljs.compiler.emits.call(null,target," = ",val);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12628__auto__))){
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

var seq__13533_13537 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.set.call(null,cljs.core.vals.call(null,seen)),cljs.core.distinct.call(null,cljs.core.vals.call(null,libs))));
var chunk__13534_13538 = null;
var count__13535_13539 = (0);
var i__13536_13540 = (0);
while(true){
if((i__13536_13540 < count__13535_13539)){
var lib_13541 = cljs.core._nth.call(null,chunk__13534_13538,i__13536_13540);
if(cljs.core.truth_((function (){var or__8823__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__8823__auto__)){
return or__8823__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_13541),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_13541),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__8823__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__8823__auto__)){
return or__8823__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_13541),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_13541),"', 'reload-all');");
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_13541),"');");

}
}

var G__13542 = seq__13533_13537;
var G__13543 = chunk__13534_13538;
var G__13544 = count__13535_13539;
var G__13545 = (i__13536_13540 + (1));
seq__13533_13537 = G__13542;
chunk__13534_13538 = G__13543;
count__13535_13539 = G__13544;
i__13536_13540 = G__13545;
continue;
} else {
var temp__4657__auto___13546 = cljs.core.seq.call(null,seq__13533_13537);
if(temp__4657__auto___13546){
var seq__13533_13547__$1 = temp__4657__auto___13546;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13533_13547__$1)){
var c__9637__auto___13548 = cljs.core.chunk_first.call(null,seq__13533_13547__$1);
var G__13549 = cljs.core.chunk_rest.call(null,seq__13533_13547__$1);
var G__13550 = c__9637__auto___13548;
var G__13551 = cljs.core.count.call(null,c__9637__auto___13548);
var G__13552 = (0);
seq__13533_13537 = G__13549;
chunk__13534_13538 = G__13550;
count__13535_13539 = G__13551;
i__13536_13540 = G__13552;
continue;
} else {
var lib_13553 = cljs.core.first.call(null,seq__13533_13547__$1);
if(cljs.core.truth_((function (){var or__8823__auto__ = new cljs.core.Keyword(null,"reload","reload",863702807).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__8823__auto__)){
return or__8823__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_13553),new cljs.core.Keyword(null,"reload","reload",863702807));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_13553),"', 'reload');");
} else {
if(cljs.core.truth_((function (){var or__8823__auto__ = new cljs.core.Keyword(null,"reload-all","reload-all",761570200).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,libs));
if(cljs.core.truth_(or__8823__auto__)){
return or__8823__auto__;
} else {
return cljs.core._EQ_.call(null,cljs.core.get.call(null,reloads,lib_13553),new cljs.core.Keyword(null,"reload-all","reload-all",761570200));
}
})())){
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_13553),"', 'reload-all');");
} else {
cljs.compiler.emitln.call(null,"goog.require('",cljs.compiler.munge.call(null,lib_13553),"');");

}
}

var G__13554 = cljs.core.next.call(null,seq__13533_13547__$1);
var G__13555 = null;
var G__13556 = (0);
var G__13557 = (0);
seq__13533_13537 = G__13554;
chunk__13534_13538 = G__13555;
count__13535_13539 = G__13556;
i__13536_13540 = G__13557;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns*","ns*",200417856),(function (p__13558){
var map__13559 = p__13558;
var map__13559__$1 = ((((!((map__13559 == null)))?((((map__13559.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13559.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13559):map__13559);
var name = cljs.core.get.call(null,map__13559__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__13559__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__13559__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__13559__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__13559__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__13559__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads));

return cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"ns","ns",441598760),(function (p__13561){
var map__13562 = p__13561;
var map__13562__$1 = ((((!((map__13562 == null)))?((((map__13562.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13562.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13562):map__13562);
var name = cljs.core.get.call(null,map__13562__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var requires = cljs.core.get.call(null,map__13562__$1,new cljs.core.Keyword(null,"requires","requires",-1201390927));
var uses = cljs.core.get.call(null,map__13562__$1,new cljs.core.Keyword(null,"uses","uses",232664692));
var require_macros = cljs.core.get.call(null,map__13562__$1,new cljs.core.Keyword(null,"require-macros","require-macros",707947416));
var reloads = cljs.core.get.call(null,map__13562__$1,new cljs.core.Keyword(null,"reloads","reloads",610698522));
var env = cljs.core.get.call(null,map__13562__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
cljs.compiler.emitln.call(null,"goog.provide('",cljs.compiler.munge.call(null,name),"');");

if(cljs.core._EQ_.call(null,name,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null))){
} else {
cljs.compiler.emitln.call(null,"goog.require('cljs.core');");
}

cljs.compiler.load_libs.call(null,requires,null,new cljs.core.Keyword(null,"require","require",-468001333).cljs$core$IFn$_invoke$arity$1(reloads));

return cljs.compiler.load_libs.call(null,uses,requires,new cljs.core.Keyword(null,"use","use",-1846382424).cljs$core$IFn$_invoke$arity$1(reloads));
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"deftype*","deftype*",-677871637),(function (p__13564){
var map__13565 = p__13564;
var map__13565__$1 = ((((!((map__13565 == null)))?((((map__13565.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13565.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13565):map__13565);
var t = cljs.core.get.call(null,map__13565__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__13565__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__13565__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__13565__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__13565__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.map.call(null,cljs.compiler.munge,fields);
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__13567_13585 = cljs.core.seq.call(null,protocols);
var chunk__13568_13586 = null;
var count__13569_13587 = (0);
var i__13570_13588 = (0);
while(true){
if((i__13570_13588 < count__13569_13587)){
var protocol_13589 = cljs.core._nth.call(null,chunk__13568_13586,i__13570_13588);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_13589)].join('')),"}");

var G__13590 = seq__13567_13585;
var G__13591 = chunk__13568_13586;
var G__13592 = count__13569_13587;
var G__13593 = (i__13570_13588 + (1));
seq__13567_13585 = G__13590;
chunk__13568_13586 = G__13591;
count__13569_13587 = G__13592;
i__13570_13588 = G__13593;
continue;
} else {
var temp__4657__auto___13594 = cljs.core.seq.call(null,seq__13567_13585);
if(temp__4657__auto___13594){
var seq__13567_13595__$1 = temp__4657__auto___13594;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13567_13595__$1)){
var c__9637__auto___13596 = cljs.core.chunk_first.call(null,seq__13567_13595__$1);
var G__13597 = cljs.core.chunk_rest.call(null,seq__13567_13595__$1);
var G__13598 = c__9637__auto___13596;
var G__13599 = cljs.core.count.call(null,c__9637__auto___13596);
var G__13600 = (0);
seq__13567_13585 = G__13597;
chunk__13568_13586 = G__13598;
count__13569_13587 = G__13599;
i__13570_13588 = G__13600;
continue;
} else {
var protocol_13601 = cljs.core.first.call(null,seq__13567_13595__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_13601)].join('')),"}");

var G__13602 = cljs.core.next.call(null,seq__13567_13595__$1);
var G__13603 = null;
var G__13604 = (0);
var G__13605 = (0);
seq__13567_13585 = G__13602;
chunk__13568_13586 = G__13603;
count__13569_13587 = G__13604;
i__13570_13588 = G__13605;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__13571_13606 = cljs.core.seq.call(null,fields__$1);
var chunk__13572_13607 = null;
var count__13573_13608 = (0);
var i__13574_13609 = (0);
while(true){
if((i__13574_13609 < count__13573_13608)){
var fld_13610 = cljs.core._nth.call(null,chunk__13572_13607,i__13574_13609);
cljs.compiler.emitln.call(null,"this.",fld_13610," = ",fld_13610,";");

var G__13611 = seq__13571_13606;
var G__13612 = chunk__13572_13607;
var G__13613 = count__13573_13608;
var G__13614 = (i__13574_13609 + (1));
seq__13571_13606 = G__13611;
chunk__13572_13607 = G__13612;
count__13573_13608 = G__13613;
i__13574_13609 = G__13614;
continue;
} else {
var temp__4657__auto___13615 = cljs.core.seq.call(null,seq__13571_13606);
if(temp__4657__auto___13615){
var seq__13571_13616__$1 = temp__4657__auto___13615;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13571_13616__$1)){
var c__9637__auto___13617 = cljs.core.chunk_first.call(null,seq__13571_13616__$1);
var G__13618 = cljs.core.chunk_rest.call(null,seq__13571_13616__$1);
var G__13619 = c__9637__auto___13617;
var G__13620 = cljs.core.count.call(null,c__9637__auto___13617);
var G__13621 = (0);
seq__13571_13606 = G__13618;
chunk__13572_13607 = G__13619;
count__13573_13608 = G__13620;
i__13574_13609 = G__13621;
continue;
} else {
var fld_13622 = cljs.core.first.call(null,seq__13571_13616__$1);
cljs.compiler.emitln.call(null,"this.",fld_13622," = ",fld_13622,";");

var G__13623 = cljs.core.next.call(null,seq__13571_13616__$1);
var G__13624 = null;
var G__13625 = (0);
var G__13626 = (0);
seq__13571_13606 = G__13623;
chunk__13572_13607 = G__13624;
count__13573_13608 = G__13625;
i__13574_13609 = G__13626;
continue;
}
} else {
}
}
break;
}

var seq__13575_13627 = cljs.core.seq.call(null,pmasks);
var chunk__13576_13628 = null;
var count__13577_13629 = (0);
var i__13578_13630 = (0);
while(true){
if((i__13578_13630 < count__13577_13629)){
var vec__13579_13631 = cljs.core._nth.call(null,chunk__13576_13628,i__13578_13630);
var pno_13632 = cljs.core.nth.call(null,vec__13579_13631,(0),null);
var pmask_13633 = cljs.core.nth.call(null,vec__13579_13631,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_13632,"$ = ",pmask_13633,";");

var G__13634 = seq__13575_13627;
var G__13635 = chunk__13576_13628;
var G__13636 = count__13577_13629;
var G__13637 = (i__13578_13630 + (1));
seq__13575_13627 = G__13634;
chunk__13576_13628 = G__13635;
count__13577_13629 = G__13636;
i__13578_13630 = G__13637;
continue;
} else {
var temp__4657__auto___13638 = cljs.core.seq.call(null,seq__13575_13627);
if(temp__4657__auto___13638){
var seq__13575_13639__$1 = temp__4657__auto___13638;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13575_13639__$1)){
var c__9637__auto___13640 = cljs.core.chunk_first.call(null,seq__13575_13639__$1);
var G__13641 = cljs.core.chunk_rest.call(null,seq__13575_13639__$1);
var G__13642 = c__9637__auto___13640;
var G__13643 = cljs.core.count.call(null,c__9637__auto___13640);
var G__13644 = (0);
seq__13575_13627 = G__13641;
chunk__13576_13628 = G__13642;
count__13577_13629 = G__13643;
i__13578_13630 = G__13644;
continue;
} else {
var vec__13582_13645 = cljs.core.first.call(null,seq__13575_13639__$1);
var pno_13646 = cljs.core.nth.call(null,vec__13582_13645,(0),null);
var pmask_13647 = cljs.core.nth.call(null,vec__13582_13645,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_13646,"$ = ",pmask_13647,";");

var G__13648 = cljs.core.next.call(null,seq__13575_13639__$1);
var G__13649 = null;
var G__13650 = (0);
var G__13651 = (0);
seq__13575_13627 = G__13648;
chunk__13576_13628 = G__13649;
count__13577_13629 = G__13650;
i__13578_13630 = G__13651;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"defrecord*","defrecord*",718069562),(function (p__13652){
var map__13653 = p__13652;
var map__13653__$1 = ((((!((map__13653 == null)))?((((map__13653.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13653.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13653):map__13653);
var t = cljs.core.get.call(null,map__13653__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
var fields = cljs.core.get.call(null,map__13653__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
var pmasks = cljs.core.get.call(null,map__13653__$1,new cljs.core.Keyword(null,"pmasks","pmasks",-871416698));
var body = cljs.core.get.call(null,map__13653__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var protocols = cljs.core.get.call(null,map__13653__$1,new cljs.core.Keyword(null,"protocols","protocols",-5615896));
var fields__$1 = cljs.core.concat.call(null,cljs.core.map.call(null,cljs.compiler.munge,fields),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)], null));
cljs.compiler.emitln.call(null,"");

cljs.compiler.emitln.call(null,"/**");

cljs.compiler.emitln.call(null,"* @constructor");

var seq__13655_13673 = cljs.core.seq.call(null,protocols);
var chunk__13656_13674 = null;
var count__13657_13675 = (0);
var i__13658_13676 = (0);
while(true){
if((i__13658_13676 < count__13657_13675)){
var protocol_13677 = cljs.core._nth.call(null,chunk__13656_13674,i__13658_13676);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_13677)].join('')),"}");

var G__13678 = seq__13655_13673;
var G__13679 = chunk__13656_13674;
var G__13680 = count__13657_13675;
var G__13681 = (i__13658_13676 + (1));
seq__13655_13673 = G__13678;
chunk__13656_13674 = G__13679;
count__13657_13675 = G__13680;
i__13658_13676 = G__13681;
continue;
} else {
var temp__4657__auto___13682 = cljs.core.seq.call(null,seq__13655_13673);
if(temp__4657__auto___13682){
var seq__13655_13683__$1 = temp__4657__auto___13682;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13655_13683__$1)){
var c__9637__auto___13684 = cljs.core.chunk_first.call(null,seq__13655_13683__$1);
var G__13685 = cljs.core.chunk_rest.call(null,seq__13655_13683__$1);
var G__13686 = c__9637__auto___13684;
var G__13687 = cljs.core.count.call(null,c__9637__auto___13684);
var G__13688 = (0);
seq__13655_13673 = G__13685;
chunk__13656_13674 = G__13686;
count__13657_13675 = G__13687;
i__13658_13676 = G__13688;
continue;
} else {
var protocol_13689 = cljs.core.first.call(null,seq__13655_13683__$1);
cljs.compiler.emitln.call(null," * @implements {",cljs.compiler.munge.call(null,[cljs.core.str(protocol_13689)].join('')),"}");

var G__13690 = cljs.core.next.call(null,seq__13655_13683__$1);
var G__13691 = null;
var G__13692 = (0);
var G__13693 = (0);
seq__13655_13673 = G__13690;
chunk__13656_13674 = G__13691;
count__13657_13675 = G__13692;
i__13658_13676 = G__13693;
continue;
}
} else {
}
}
break;
}

cljs.compiler.emitln.call(null,"*/");

cljs.compiler.emitln.call(null,cljs.compiler.munge.call(null,t)," = (function (",cljs.compiler.comma_sep.call(null,fields__$1),"){");

var seq__13659_13694 = cljs.core.seq.call(null,fields__$1);
var chunk__13660_13695 = null;
var count__13661_13696 = (0);
var i__13662_13697 = (0);
while(true){
if((i__13662_13697 < count__13661_13696)){
var fld_13698 = cljs.core._nth.call(null,chunk__13660_13695,i__13662_13697);
cljs.compiler.emitln.call(null,"this.",fld_13698," = ",fld_13698,";");

var G__13699 = seq__13659_13694;
var G__13700 = chunk__13660_13695;
var G__13701 = count__13661_13696;
var G__13702 = (i__13662_13697 + (1));
seq__13659_13694 = G__13699;
chunk__13660_13695 = G__13700;
count__13661_13696 = G__13701;
i__13662_13697 = G__13702;
continue;
} else {
var temp__4657__auto___13703 = cljs.core.seq.call(null,seq__13659_13694);
if(temp__4657__auto___13703){
var seq__13659_13704__$1 = temp__4657__auto___13703;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13659_13704__$1)){
var c__9637__auto___13705 = cljs.core.chunk_first.call(null,seq__13659_13704__$1);
var G__13706 = cljs.core.chunk_rest.call(null,seq__13659_13704__$1);
var G__13707 = c__9637__auto___13705;
var G__13708 = cljs.core.count.call(null,c__9637__auto___13705);
var G__13709 = (0);
seq__13659_13694 = G__13706;
chunk__13660_13695 = G__13707;
count__13661_13696 = G__13708;
i__13662_13697 = G__13709;
continue;
} else {
var fld_13710 = cljs.core.first.call(null,seq__13659_13704__$1);
cljs.compiler.emitln.call(null,"this.",fld_13710," = ",fld_13710,";");

var G__13711 = cljs.core.next.call(null,seq__13659_13704__$1);
var G__13712 = null;
var G__13713 = (0);
var G__13714 = (0);
seq__13659_13694 = G__13711;
chunk__13660_13695 = G__13712;
count__13661_13696 = G__13713;
i__13662_13697 = G__13714;
continue;
}
} else {
}
}
break;
}

var seq__13663_13715 = cljs.core.seq.call(null,pmasks);
var chunk__13664_13716 = null;
var count__13665_13717 = (0);
var i__13666_13718 = (0);
while(true){
if((i__13666_13718 < count__13665_13717)){
var vec__13667_13719 = cljs.core._nth.call(null,chunk__13664_13716,i__13666_13718);
var pno_13720 = cljs.core.nth.call(null,vec__13667_13719,(0),null);
var pmask_13721 = cljs.core.nth.call(null,vec__13667_13719,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_13720,"$ = ",pmask_13721,";");

var G__13722 = seq__13663_13715;
var G__13723 = chunk__13664_13716;
var G__13724 = count__13665_13717;
var G__13725 = (i__13666_13718 + (1));
seq__13663_13715 = G__13722;
chunk__13664_13716 = G__13723;
count__13665_13717 = G__13724;
i__13666_13718 = G__13725;
continue;
} else {
var temp__4657__auto___13726 = cljs.core.seq.call(null,seq__13663_13715);
if(temp__4657__auto___13726){
var seq__13663_13727__$1 = temp__4657__auto___13726;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13663_13727__$1)){
var c__9637__auto___13728 = cljs.core.chunk_first.call(null,seq__13663_13727__$1);
var G__13729 = cljs.core.chunk_rest.call(null,seq__13663_13727__$1);
var G__13730 = c__9637__auto___13728;
var G__13731 = cljs.core.count.call(null,c__9637__auto___13728);
var G__13732 = (0);
seq__13663_13715 = G__13729;
chunk__13664_13716 = G__13730;
count__13665_13717 = G__13731;
i__13666_13718 = G__13732;
continue;
} else {
var vec__13670_13733 = cljs.core.first.call(null,seq__13663_13727__$1);
var pno_13734 = cljs.core.nth.call(null,vec__13670_13733,(0),null);
var pmask_13735 = cljs.core.nth.call(null,vec__13670_13733,(1),null);
cljs.compiler.emitln.call(null,"this.cljs$lang$protocol_mask$partition",pno_13734,"$ = ",pmask_13735,";");

var G__13736 = cljs.core.next.call(null,seq__13663_13727__$1);
var G__13737 = null;
var G__13738 = (0);
var G__13739 = (0);
seq__13663_13715 = G__13736;
chunk__13664_13716 = G__13737;
count__13665_13717 = G__13738;
i__13666_13718 = G__13739;
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
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"dot","dot",1442709401),(function (p__13740){
var map__13741 = p__13740;
var map__13741__$1 = ((((!((map__13741 == null)))?((((map__13741.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13741.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13741):map__13741);
var target = cljs.core.get.call(null,map__13741__$1,new cljs.core.Keyword(null,"target","target",253001721));
var field = cljs.core.get.call(null,map__13741__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var method = cljs.core.get.call(null,map__13741__$1,new cljs.core.Keyword(null,"method","method",55703592));
var args = cljs.core.get.call(null,map__13741__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var env = cljs.core.get.call(null,map__13741__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var env__12628__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12628__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(field)){
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,field,cljs.core.PersistentHashSet.EMPTY));
} else {
cljs.compiler.emits.call(null,target,".",cljs.compiler.munge.call(null,method,cljs.core.PersistentHashSet.EMPTY),"(",cljs.compiler.comma_sep.call(null,args),")");
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12628__auto__))){
return null;
} else {
return cljs.compiler.emitln.call(null,";");
}
}));
cljs.core._add_method.call(null,cljs.compiler.emit_STAR_,new cljs.core.Keyword(null,"js","js",1768080579),(function (p__13743){
var map__13744 = p__13743;
var map__13744__$1 = ((((!((map__13744 == null)))?((((map__13744.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13744.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13744):map__13744);
var op = cljs.core.get.call(null,map__13744__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var env = cljs.core.get.call(null,map__13744__$1,new cljs.core.Keyword(null,"env","env",-1815813235));
var code = cljs.core.get.call(null,map__13744__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var segs = cljs.core.get.call(null,map__13744__$1,new cljs.core.Keyword(null,"segs","segs",-1940299576));
var args = cljs.core.get.call(null,map__13744__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_((function (){var and__8811__auto__ = code;
if(cljs.core.truth_(and__8811__auto__)){
return goog.string.startsWith(clojure.string.trim.call(null,code),"/*");
} else {
return and__8811__auto__;
}
})())){
return cljs.compiler.emits.call(null,code);
} else {
var env__12628__auto__ = env;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"return","return",-1891502105),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12628__auto__))){
cljs.compiler.emits.call(null,"return ");
} else {
}

if(cljs.core.truth_(code)){
cljs.compiler.emits.call(null,code);
} else {
cljs.compiler.emits.call(null,cljs.core.interleave.call(null,cljs.core.concat.call(null,segs,cljs.core.repeat.call(null,null)),cljs.core.concat.call(null,args,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null))));
}

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"expr","expr",745722291),new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(env__12628__auto__))){
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
var seq__13758 = cljs.core.seq.call(null,table);
var chunk__13759 = null;
var count__13760 = (0);
var i__13761 = (0);
while(true){
if((i__13761 < count__13760)){
var vec__13762 = cljs.core._nth.call(null,chunk__13759,i__13761);
var sym = cljs.core.nth.call(null,vec__13762,(0),null);
var value = cljs.core.nth.call(null,vec__13762,(1),null);
var ns_13768 = cljs.core.namespace.call(null,sym);
var name_13769 = cljs.core.name.call(null,sym);
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

var G__13770 = seq__13758;
var G__13771 = chunk__13759;
var G__13772 = count__13760;
var G__13773 = (i__13761 + (1));
seq__13758 = G__13770;
chunk__13759 = G__13771;
count__13760 = G__13772;
i__13761 = G__13773;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__13758);
if(temp__4657__auto__){
var seq__13758__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13758__$1)){
var c__9637__auto__ = cljs.core.chunk_first.call(null,seq__13758__$1);
var G__13774 = cljs.core.chunk_rest.call(null,seq__13758__$1);
var G__13775 = c__9637__auto__;
var G__13776 = cljs.core.count.call(null,c__9637__auto__);
var G__13777 = (0);
seq__13758 = G__13774;
chunk__13759 = G__13775;
count__13760 = G__13776;
i__13761 = G__13777;
continue;
} else {
var vec__13765 = cljs.core.first.call(null,seq__13758__$1);
var sym = cljs.core.nth.call(null,vec__13765,(0),null);
var value = cljs.core.nth.call(null,vec__13765,(1),null);
var ns_13778 = cljs.core.namespace.call(null,sym);
var name_13779 = cljs.core.name.call(null,sym);
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

var G__13780 = cljs.core.next.call(null,seq__13758__$1);
var G__13781 = null;
var G__13782 = (0);
var G__13783 = (0);
seq__13758 = G__13780;
chunk__13759 = G__13781;
count__13760 = G__13782;
i__13761 = G__13783;
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