// Compiled by ClojureScript 1.9.521 {}
goog.provide('cljs.env');
goog.require('cljs.core');
cljs.env._STAR_compiler_STAR_ = null;
cljs.env.default_compiler_env = (function cljs$env$default_compiler_env(var_args){
var args17383 = [];
var len__11449__auto___17386 = arguments.length;
var i__11450__auto___17387 = (0);
while(true){
if((i__11450__auto___17387 < len__11449__auto___17386)){
args17383.push((arguments[i__11450__auto___17387]));

var G__17388 = (i__11450__auto___17387 + (1));
i__11450__auto___17387 = G__17388;
continue;
} else {
}
break;
}

var G__17385 = args17383.length;
switch (G__17385) {
case 0:
return cljs.env.default_compiler_env.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.env.default_compiler_env.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args17383.length)].join('')));

}
});

cljs.env.default_compiler_env.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.env.default_compiler_env.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cljs.env.default_compiler_env.cljs$core$IFn$_invoke$arity$1 = (function (options){
return cljs.core.atom.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"cljs.user","cljs.user",877795071,null)], null)], null),new cljs.core.Keyword("cljs.analyzer","constant-table","cljs.analyzer/constant-table",-114131889),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.analyzer","data-readers","cljs.analyzer/data-readers",1778544933),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.analyzer","externs","cljs.analyzer/externs",893359239),null,new cljs.core.Keyword(null,"options","options",99638489),options], null)));
});

cljs.env.default_compiler_env.cljs$lang$maxFixedArity = 1;


//# sourceMappingURL=env.js.map