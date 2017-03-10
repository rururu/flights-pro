// Compiled by ClojureScript 1.9.293 {}
goog.provide('cljs.core$macros');
goog.require('cljs.core');
goog.require('cljs.compiler');
goog.require('cljs.core');
goog.require('cljs.env');
goog.require('cljs.analyzer');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('clojure.walk');
/**
 * Threads the expr through the forms. Inserts x as the
 *   second item in the first form, making a list of it if it is not a
 *   list already. If there are more forms, inserts the first form as the
 *   second item in second form, etc.
 */
cljs.core$macros.__GT_ = (function cljs$core$macros$__GT_(var_args){
var args__48246__auto__ = [];
var len__48239__auto___57327 = arguments.length;
var i__48240__auto___57328 = (0);
while(true){
if((i__48240__auto___57328 < len__48239__auto___57327)){
args__48246__auto__.push((arguments[i__48240__auto___57328]));

var G__57329 = (i__48240__auto___57328 + (1));
i__48240__auto___57328 = G__57329;
continue;
} else {
}
break;
}

var argseq__48247__auto__ = ((((3) < args__48246__auto__.length))?(new cljs.core.IndexedSeq(args__48246__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__48247__auto__);
});

cljs.core$macros.__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
var x__$1 = x;
var forms__$1 = forms;
while(true){
if(cljs.core.truth_(forms__$1)){
var form = cljs.core.first.call(null,forms__$1);
var threaded = ((cljs.core.seq_QMARK_.call(null,form))?cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__47968__auto__ = cljs.core.first.call(null,form);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = x__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),cljs.core.next.call(null,form)))),cljs.core.meta.call(null,form)):(function (){var x__47968__auto__ = form;
return cljs.core._conj.call(null,(function (){var x__47968__auto____$1 = x__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto____$1);
})(),x__47968__auto__);
})());
var G__57330 = threaded;
var G__57331 = cljs.core.next.call(null,forms__$1);
x__$1 = G__57330;
forms__$1 = G__57331;
continue;
} else {
return x__$1;
}
break;
}
});

cljs.core$macros.__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.__GT_.cljs$lang$applyTo = (function (seq57323){
var G__57324 = cljs.core.first.call(null,seq57323);
var seq57323__$1 = cljs.core.next.call(null,seq57323);
var G__57325 = cljs.core.first.call(null,seq57323__$1);
var seq57323__$2 = cljs.core.next.call(null,seq57323__$1);
var G__57326 = cljs.core.first.call(null,seq57323__$2);
var seq57323__$3 = cljs.core.next.call(null,seq57323__$2);
return cljs.core$macros.__GT_.cljs$core$IFn$_invoke$arity$variadic(G__57324,G__57325,G__57326,seq57323__$3);
});


cljs.core$macros.__GT_.cljs$lang$macro = true;
/**
 * Threads the expr through the forms. Inserts x as the
 *   last item in the first form, making a list of it if it is not a
 *   list already. If there are more forms, inserts the first form as the
 *   last item in second form, etc.
 */
cljs.core$macros.__GT__GT_ = (function cljs$core$macros$__GT__GT_(var_args){
var args__48246__auto__ = [];
var len__48239__auto___57336 = arguments.length;
var i__48240__auto___57337 = (0);
while(true){
if((i__48240__auto___57337 < len__48239__auto___57336)){
args__48246__auto__.push((arguments[i__48240__auto___57337]));

var G__57338 = (i__48240__auto___57337 + (1));
i__48240__auto___57337 = G__57338;
continue;
} else {
}
break;
}

var argseq__48247__auto__ = ((((3) < args__48246__auto__.length))?(new cljs.core.IndexedSeq(args__48246__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.__GT__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__48247__auto__);
});

cljs.core$macros.__GT__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
var x__$1 = x;
var forms__$1 = forms;
while(true){
if(cljs.core.truth_(forms__$1)){
var form = cljs.core.first.call(null,forms__$1);
var threaded = ((cljs.core.seq_QMARK_.call(null,form))?cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__47968__auto__ = cljs.core.first.call(null,form);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),cljs.core.next.call(null,form),(function (){var x__47968__auto__ = x__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})()))),cljs.core.meta.call(null,form)):(function (){var x__47968__auto__ = form;
return cljs.core._conj.call(null,(function (){var x__47968__auto____$1 = x__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto____$1);
})(),x__47968__auto__);
})());
var G__57339 = threaded;
var G__57340 = cljs.core.next.call(null,forms__$1);
x__$1 = G__57339;
forms__$1 = G__57340;
continue;
} else {
return x__$1;
}
break;
}
});

cljs.core$macros.__GT__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.__GT__GT_.cljs$lang$applyTo = (function (seq57332){
var G__57333 = cljs.core.first.call(null,seq57332);
var seq57332__$1 = cljs.core.next.call(null,seq57332);
var G__57334 = cljs.core.first.call(null,seq57332__$1);
var seq57332__$2 = cljs.core.next.call(null,seq57332__$1);
var G__57335 = cljs.core.first.call(null,seq57332__$2);
var seq57332__$3 = cljs.core.next.call(null,seq57332__$2);
return cljs.core$macros.__GT__GT_.cljs$core$IFn$_invoke$arity$variadic(G__57333,G__57334,G__57335,seq57332__$3);
});


cljs.core$macros.__GT__GT_.cljs$lang$macro = true;
/**
 * form => fieldName-symbol or (instanceMethodName-symbol args*)
 * 
 *   Expands into a member access (.) of the first member on the first
 *   argument, followed by the next member on the result, etc. For
 *   instance:
 * 
 *   (.. System (getProperties) (get "os.name"))
 * 
 *   expands to:
 * 
 *   (. (. System (getProperties)) (get "os.name"))
 * 
 *   but is easier to write, read, and understand.
 */
cljs.core$macros._DOT__DOT_ = (function cljs$core$macros$_DOT__DOT_(var_args){
var args57341 = [];
var len__48239__auto___57349 = arguments.length;
var i__48240__auto___57350 = (0);
while(true){
if((i__48240__auto___57350 < len__48239__auto___57349)){
args57341.push((arguments[i__48240__auto___57350]));

var G__57351 = (i__48240__auto___57350 + (1));
i__48240__auto___57350 = G__57351;
continue;
} else {
}
break;
}

var G__57348 = args57341.length;
switch (G__57348) {
case 4:
return cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__48258__auto__ = (new cljs.core.IndexedSeq(args57341.slice((4)),(0),null));
return cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__48258__auto__);

}
});

cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,form){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__47968__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
});

cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,form,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"..","..",-300507420,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__47968__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),more)));
});

cljs.core$macros._DOT__DOT_.cljs$lang$applyTo = (function (seq57342){
var G__57343 = cljs.core.first.call(null,seq57342);
var seq57342__$1 = cljs.core.next.call(null,seq57342);
var G__57344 = cljs.core.first.call(null,seq57342__$1);
var seq57342__$2 = cljs.core.next.call(null,seq57342__$1);
var G__57345 = cljs.core.first.call(null,seq57342__$2);
var seq57342__$3 = cljs.core.next.call(null,seq57342__$2);
var G__57346 = cljs.core.first.call(null,seq57342__$3);
var seq57342__$4 = cljs.core.next.call(null,seq57342__$3);
return cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$variadic(G__57343,G__57344,G__57345,G__57346,seq57342__$4);
});

cljs.core$macros._DOT__DOT_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._DOT__DOT_.cljs$lang$macro = true;
/**
 * Ignores body, yields nil
 */
cljs.core$macros.comment = (function cljs$core$macros$comment(var_args){
var args__48246__auto__ = [];
var len__48239__auto___57356 = arguments.length;
var i__48240__auto___57357 = (0);
while(true){
if((i__48240__auto___57357 < len__48239__auto___57356)){
args__48246__auto__.push((arguments[i__48240__auto___57357]));

var G__57358 = (i__48240__auto___57357 + (1));
i__48240__auto___57357 = G__57358;
continue;
} else {
}
break;
}

var argseq__48247__auto__ = ((((2) < args__48246__auto__.length))?(new cljs.core.IndexedSeq(args__48246__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.comment.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__48247__auto__);
});

cljs.core$macros.comment.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return null;
});

cljs.core$macros.comment.cljs$lang$maxFixedArity = (2);

cljs.core$macros.comment.cljs$lang$applyTo = (function (seq57353){
var G__57354 = cljs.core.first.call(null,seq57353);
var seq57353__$1 = cljs.core.next.call(null,seq57353);
var G__57355 = cljs.core.first.call(null,seq57353__$1);
var seq57353__$2 = cljs.core.next.call(null,seq57353__$1);
return cljs.core$macros.comment.cljs$core$IFn$_invoke$arity$variadic(G__57354,G__57355,seq57353__$2);
});


cljs.core$macros.comment.cljs$lang$macro = true;
/**
 * Takes a set of test/expr pairs. It evaluates each test one at a
 *   time.  If a test returns logical true, cond evaluates and returns
 *   the value of the corresponding expr and doesn't evaluate any of the
 *   other tests or exprs. (cond) returns nil.
 */
cljs.core$macros.cond = (function cljs$core$macros$cond(var_args){
var args__48246__auto__ = [];
var len__48239__auto___57362 = arguments.length;
var i__48240__auto___57363 = (0);
while(true){
if((i__48240__auto___57363 < len__48239__auto___57362)){
args__48246__auto__.push((arguments[i__48240__auto___57363]));

var G__57364 = (i__48240__auto___57363 + (1));
i__48240__auto___57363 = G__57364;
continue;
} else {
}
break;
}

var argseq__48247__auto__ = ((((2) < args__48246__auto__.length))?(new cljs.core.IndexedSeq(args__48246__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.cond.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__48247__auto__);
});

cljs.core$macros.cond.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,clauses){
if(cljs.core.truth_(clauses)){
return cljs.core._conj.call(null,(function (){var x__47968__auto__ = cljs.core.first.call(null,clauses);
return cljs.core._conj.call(null,(function (){var x__47968__auto____$1 = ((cljs.core.next.call(null,clauses))?cljs.core.second.call(null,clauses):(function(){throw (new Error("cond requires an even number of forms"))})());
return cljs.core._conj.call(null,(function (){var x__47968__auto____$2 = cljs.core.cons.call(null,new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",2005388338,null),cljs.core.next.call(null,cljs.core.next.call(null,clauses)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto____$2);
})(),x__47968__auto____$1);
})(),x__47968__auto__);
})(),new cljs.core.Symbol(null,"if","if",1181717262,null));
} else {
return null;
}
});

cljs.core$macros.cond.cljs$lang$maxFixedArity = (2);

cljs.core$macros.cond.cljs$lang$applyTo = (function (seq57359){
var G__57360 = cljs.core.first.call(null,seq57359);
var seq57359__$1 = cljs.core.next.call(null,seq57359);
var G__57361 = cljs.core.first.call(null,seq57359__$1);
var seq57359__$2 = cljs.core.next.call(null,seq57359__$1);
return cljs.core$macros.cond.cljs$core$IFn$_invoke$arity$variadic(G__57360,G__57361,seq57359__$2);
});


cljs.core$macros.cond.cljs$lang$macro = true;
/**
 * defs the supplied var names with no bindings, useful for making forward declarations.
 */
cljs.core$macros.declare = (function cljs$core$macros$declare(var_args){
var args__48246__auto__ = [];
var len__48239__auto___57369 = arguments.length;
var i__48240__auto___57370 = (0);
while(true){
if((i__48240__auto___57370 < len__48239__auto___57369)){
args__48246__auto__.push((arguments[i__48240__auto___57370]));

var G__57371 = (i__48240__auto___57370 + (1));
i__48240__auto___57370 = G__57371;
continue;
} else {
}
break;
}

var argseq__48247__auto__ = ((((2) < args__48246__auto__.length))?(new cljs.core.IndexedSeq(args__48246__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.declare.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__48247__auto__);
});

cljs.core$macros.declare.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,names){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),cljs.core.map.call(null,(function (p1__57365_SHARP_){
return cljs.core._conj.call(null,(function (){var x__47968__auto__ = cljs.core.vary_meta.call(null,p1__57365_SHARP_,cljs.core.assoc,new cljs.core.Keyword(null,"declared","declared",92336021),true);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),new cljs.core.Symbol(null,"def","def",597100991,null));
}),names))));
});

cljs.core$macros.declare.cljs$lang$maxFixedArity = (2);

cljs.core$macros.declare.cljs$lang$applyTo = (function (seq57366){
var G__57367 = cljs.core.first.call(null,seq57366);
var seq57366__$1 = cljs.core.next.call(null,seq57366);
var G__57368 = cljs.core.first.call(null,seq57366__$1);
var seq57366__$2 = cljs.core.next.call(null,seq57366__$1);
return cljs.core$macros.declare.cljs$core$IFn$_invoke$arity$variadic(G__57367,G__57368,seq57366__$2);
});


cljs.core$macros.declare.cljs$lang$macro = true;
/**
 * Evaluates x then calls all of the methods and functions with the
 *   value of x supplied at the front of the given arguments.  The forms
 *   are evaluated in order.  Returns x.
 * 
 *   (doto (new java.util.HashMap) (.put "a" 1) (.put "b" 2))
 */
cljs.core$macros.doto = (function cljs$core$macros$doto(var_args){
var args__48246__auto__ = [];
var len__48239__auto___57376 = arguments.length;
var i__48240__auto___57377 = (0);
while(true){
if((i__48240__auto___57377 < len__48239__auto___57376)){
args__48246__auto__.push((arguments[i__48240__auto___57377]));

var G__57378 = (i__48240__auto___57377 + (1));
i__48240__auto___57377 = G__57378;
continue;
} else {
}
break;
}

var argseq__48247__auto__ = ((((3) < args__48246__auto__.length))?(new cljs.core.IndexedSeq(args__48246__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.doto.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__48247__auto__);
});

cljs.core$macros.doto.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
var gx = cljs.core.gensym.call(null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__47968__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__47968__auto__ = gx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),cljs.core.map.call(null,((function (gx){
return (function (f){
if(cljs.core.seq_QMARK_.call(null,f)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__47968__auto__ = cljs.core.first.call(null,f);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = gx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),cljs.core.next.call(null,f))));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__47968__auto__ = f;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = gx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
}
});})(gx))
,forms),(function (){var x__47968__auto__ = gx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
});

cljs.core$macros.doto.cljs$lang$maxFixedArity = (3);

cljs.core$macros.doto.cljs$lang$applyTo = (function (seq57372){
var G__57373 = cljs.core.first.call(null,seq57372);
var seq57372__$1 = cljs.core.next.call(null,seq57372);
var G__57374 = cljs.core.first.call(null,seq57372__$1);
var seq57372__$2 = cljs.core.next.call(null,seq57372__$1);
var G__57375 = cljs.core.first.call(null,seq57372__$2);
var seq57372__$3 = cljs.core.next.call(null,seq57372__$2);
return cljs.core$macros.doto.cljs$core$IFn$_invoke$arity$variadic(G__57373,G__57374,G__57375,seq57372__$3);
});


cljs.core$macros.doto.cljs$lang$macro = true;
cljs.core$macros.parse_impls = (function cljs$core$macros$parse_impls(specs){
var ret = cljs.core.PersistentArrayMap.EMPTY;
var s = specs;
while(true){
if(cljs.core.seq.call(null,s)){
var G__57379 = cljs.core.assoc.call(null,ret,cljs.core.first.call(null,s),cljs.core.take_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,s)));
var G__57380 = cljs.core.drop_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,s));
ret = G__57379;
s = G__57380;
continue;
} else {
return ret;
}
break;
}
});
cljs.core$macros.emit_extend_protocol = (function cljs$core$macros$emit_extend_protocol(p,specs){
var impls = cljs.core$macros.parse_impls.call(null,specs);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),cljs.core.map.call(null,((function (impls){
return (function (p__57385){
var vec__57386 = p__57385;
var t = cljs.core.nth.call(null,vec__57386,(0),null);
var fs = cljs.core.nth.call(null,vec__57386,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","extend-type","cljs.core$macros/extend-type",1713295201,null)),(function (){var x__47968__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = p;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),fs)));
});})(impls))
,impls))));
});
/**
 * Useful when you want to provide several implementations of the same
 *   protocol all at once. Takes a single protocol and the implementation
 *   of that protocol for one or more types. Expands into calls to
 *   extend-type:
 * 
 *   (extend-protocol Protocol
 *     AType
 *       (foo [x] ...)
 *       (bar [x y] ...)
 *     BType
 *       (foo [x] ...)
 *       (bar [x y] ...)
 *     AClass
 *       (foo [x] ...)
 *       (bar [x y] ...)
 *     nil
 *       (foo [x] ...)
 *       (bar [x y] ...))
 * 
 *   expands into:
 * 
 *   (do
 *    (clojure.core/extend-type AType Protocol
 *      (foo [x] ...)
 *      (bar [x y] ...))
 *    (clojure.core/extend-type BType Protocol
 *      (foo [x] ...)
 *      (bar [x y] ...))
 *    (clojure.core/extend-type AClass Protocol
 *      (foo [x] ...)
 *      (bar [x y] ...))
 *    (clojure.core/extend-type nil Protocol
 *      (foo [x] ...)
 *      (bar [x y] ...)))
 */
cljs.core$macros.extend_protocol = (function cljs$core$macros$extend_protocol(var_args){
var args__48246__auto__ = [];
var len__48239__auto___57393 = arguments.length;
var i__48240__auto___57394 = (0);
while(true){
if((i__48240__auto___57394 < len__48239__auto___57393)){
args__48246__auto__.push((arguments[i__48240__auto___57394]));

var G__57395 = (i__48240__auto___57394 + (1));
i__48240__auto___57394 = G__57395;
continue;
} else {
}
break;
}

var argseq__48247__auto__ = ((((3) < args__48246__auto__.length))?(new cljs.core.IndexedSeq(args__48246__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.extend_protocol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__48247__auto__);
});

cljs.core$macros.extend_protocol.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p,specs){
return cljs.core$macros.emit_extend_protocol.call(null,p,specs);
});

cljs.core$macros.extend_protocol.cljs$lang$maxFixedArity = (3);

cljs.core$macros.extend_protocol.cljs$lang$applyTo = (function (seq57389){
var G__57390 = cljs.core.first.call(null,seq57389);
var seq57389__$1 = cljs.core.next.call(null,seq57389);
var G__57391 = cljs.core.first.call(null,seq57389__$1);
var seq57389__$2 = cljs.core.next.call(null,seq57389__$1);
var G__57392 = cljs.core.first.call(null,seq57389__$2);
var seq57389__$3 = cljs.core.next.call(null,seq57389__$2);
return cljs.core$macros.extend_protocol.cljs$core$IFn$_invoke$arity$variadic(G__57390,G__57391,G__57392,seq57389__$3);
});


cljs.core$macros.extend_protocol.cljs$lang$macro = true;
cljs.core$macros.maybe_destructured = (function cljs$core$macros$maybe_destructured(params,body){
if(cljs.core.every_QMARK_.call(null,cljs.core.symbol_QMARK_,params)){
return cljs.core.cons.call(null,params,body);
} else {
var params__$1 = params;
var new_params = cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.meta.call(null,params__$1));
var lets = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.truth_(params__$1)){
if((cljs.core.first.call(null,params__$1) instanceof cljs.core.Symbol)){
var G__57396 = cljs.core.next.call(null,params__$1);
var G__57397 = cljs.core.conj.call(null,new_params,cljs.core.first.call(null,params__$1));
var G__57398 = lets;
params__$1 = G__57396;
new_params = G__57397;
lets = G__57398;
continue;
} else {
var gparam = cljs.core.gensym.call(null,"p__");
var G__57399 = cljs.core.next.call(null,params__$1);
var G__57400 = cljs.core.conj.call(null,new_params,gparam);
var G__57401 = cljs.core.conj.call(null,cljs.core.conj.call(null,lets,cljs.core.first.call(null,params__$1)),gparam);
params__$1 = G__57399;
new_params = G__57400;
lets = G__57401;
continue;
}
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__47968__auto__ = new_params;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__47968__auto__ = lets;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
}
break;
}
}
});
/**
 * params => positional-params* , or positional-params* & next-param
 *   positional-param => binding-form
 *   next-param => binding-form
 *   name => symbol
 * 
 *   Defines a function
 */
cljs.core$macros.fn = (function cljs$core$macros$fn(var_args){
var args__48246__auto__ = [];
var len__48239__auto___57408 = arguments.length;
var i__48240__auto___57409 = (0);
while(true){
if((i__48240__auto___57409 < len__48239__auto___57408)){
args__48246__auto__.push((arguments[i__48240__auto___57409]));

var G__57410 = (i__48240__auto___57409 + (1));
i__48240__auto___57409 = G__57410;
continue;
} else {
}
break;
}

var argseq__48247__auto__ = ((((2) < args__48246__auto__.length))?(new cljs.core.IndexedSeq(args__48246__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.fn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__48247__auto__);
});

cljs.core$macros.fn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,sigs){
var name = (((cljs.core.first.call(null,sigs) instanceof cljs.core.Symbol))?cljs.core.first.call(null,sigs):null);
var sigs__$1 = (cljs.core.truth_(name)?cljs.core.next.call(null,sigs):sigs);
var sigs__$2 = ((cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,sigs__$1)))?(function (){var x__47968__auto__ = sigs__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})():((cljs.core.seq_QMARK_.call(null,cljs.core.first.call(null,sigs__$1)))?sigs__$1:(function(){throw (new Error(((cljs.core.seq.call(null,sigs__$1))?[cljs.core.str("Parameter declaration "),cljs.core.str(cljs.core.first.call(null,sigs__$1)),cljs.core.str(" should be a vector")].join(''):[cljs.core.str("Parameter declaration missing")].join(''))))})()));
var psig = ((function (name,sigs__$1,sigs__$2){
return (function (sig){
if(!(cljs.core.seq_QMARK_.call(null,sig))){
throw (new Error([cljs.core.str("Invalid signature "),cljs.core.str(sig),cljs.core.str(" should be a list")].join('')));
} else {
}

var vec__57405 = sig;
var seq__57406 = cljs.core.seq.call(null,vec__57405);
var first__57407 = cljs.core.first.call(null,seq__57406);
var seq__57406__$1 = cljs.core.next.call(null,seq__57406);
var params = first__57407;
var body = seq__57406__$1;
var _ = ((!(cljs.core.vector_QMARK_.call(null,params)))?(function(){throw (new Error(((cljs.core.seq_QMARK_.call(null,cljs.core.first.call(null,sigs__$2)))?[cljs.core.str("Parameter declaration "),cljs.core.str(params),cljs.core.str(" should be a vector")].join(''):[cljs.core.str("Invalid signature "),cljs.core.str(sig),cljs.core.str(" should be a list")].join(''))))})():null);
var conds = (((cljs.core.next.call(null,body)) && (cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))))?cljs.core.first.call(null,body):null);
var body__$1 = (cljs.core.truth_(conds)?cljs.core.next.call(null,body):body);
var conds__$1 = (function (){var or__47131__auto__ = conds;
if(cljs.core.truth_(or__47131__auto__)){
return or__47131__auto__;
} else {
return cljs.core.meta.call(null,params);
}
})();
var pre = new cljs.core.Keyword(null,"pre","pre",2118456869).cljs$core$IFn$_invoke$arity$1(conds__$1);
var post = new cljs.core.Keyword(null,"post","post",269697687).cljs$core$IFn$_invoke$arity$1(conds__$1);
var body__$2 = (cljs.core.truth_(post)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__47968__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"%","%",-950237169,null)),(function (){var x__47968__auto__ = ((((1) < cljs.core.count.call(null,body__$1)))?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),body__$1))):cljs.core.first.call(null,body__$1));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),cljs.core.map.call(null,((function (vec__57405,seq__57406,first__57407,seq__57406__$1,params,body,_,conds,body__$1,conds__$1,pre,post,name,sigs__$1,sigs__$2){
return (function (c){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","assert","cljs.core$macros/assert",1333198789,null)),(function (){var x__47968__auto__ = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
});})(vec__57405,seq__57406,first__57407,seq__57406__$1,params,body,_,conds,body__$1,conds__$1,pre,post,name,sigs__$1,sigs__$2))
,post),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"%","%",-950237169,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})()))):body__$1);
var body__$3 = (cljs.core.truth_(pre)?cljs.core.concat.call(null,cljs.core.map.call(null,((function (vec__57405,seq__57406,first__57407,seq__57406__$1,params,body,_,conds,body__$1,conds__$1,pre,post,body__$2,name,sigs__$1,sigs__$2){
return (function (c){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","assert","cljs.core$macros/assert",1333198789,null)),(function (){var x__47968__auto__ = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
});})(vec__57405,seq__57406,first__57407,seq__57406__$1,params,body,_,conds,body__$1,conds__$1,pre,post,body__$2,name,sigs__$1,sigs__$2))
,pre),body__$2):body__$2);
return cljs.core$macros.maybe_destructured.call(null,params,body__$3);
});})(name,sigs__$1,sigs__$2))
;
var new_sigs = cljs.core.map.call(null,psig,sigs__$2);
return cljs.core.with_meta.call(null,(cljs.core.truth_(name)?cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),name,new_sigs):cljs.core.cons.call(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new_sigs)),cljs.core.meta.call(null,_AMPERSAND_form));
});

cljs.core$macros.fn.cljs$lang$maxFixedArity = (2);

cljs.core$macros.fn.cljs$lang$applyTo = (function (seq57402){
var G__57403 = cljs.core.first.call(null,seq57402);
var seq57402__$1 = cljs.core.next.call(null,seq57402);
var G__57404 = cljs.core.first.call(null,seq57402__$1);
var seq57402__$2 = cljs.core.next.call(null,seq57402__$1);
return cljs.core$macros.fn.cljs$core$IFn$_invoke$arity$variadic(G__57403,G__57404,seq57402__$2);
});


cljs.core$macros.fn.cljs$lang$macro = true;
/**
 * same as defn, yielding non-public def
 */
cljs.core$macros.defn_ = (function cljs$core$macros$defn_(var_args){
var args__48246__auto__ = [];
var len__48239__auto___57415 = arguments.length;
var i__48240__auto___57416 = (0);
while(true){
if((i__48240__auto___57416 < len__48239__auto___57415)){
args__48246__auto__.push((arguments[i__48240__auto___57416]));

var G__57417 = (i__48240__auto___57416 + (1));
i__48240__auto___57416 = G__57417;
continue;
} else {
}
break;
}

var argseq__48247__auto__ = ((((3) < args__48246__auto__.length))?(new cljs.core.IndexedSeq(args__48246__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.defn_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__48247__auto__);
});

cljs.core$macros.defn_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,decls){
return cljs.core.list_STAR_.call(null,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null),cljs.core.with_meta.call(null,name,cljs.core.assoc.call(null,cljs.core.meta.call(null,name),new cljs.core.Keyword(null,"private","private",-558947994),true)),decls);
});

cljs.core$macros.defn_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.defn_.cljs$lang$applyTo = (function (seq57411){
var G__57412 = cljs.core.first.call(null,seq57411);
var seq57411__$1 = cljs.core.next.call(null,seq57411);
var G__57413 = cljs.core.first.call(null,seq57411__$1);
var seq57411__$2 = cljs.core.next.call(null,seq57411__$1);
var G__57414 = cljs.core.first.call(null,seq57411__$2);
var seq57411__$3 = cljs.core.next.call(null,seq57411__$2);
return cljs.core$macros.defn_.cljs$core$IFn$_invoke$arity$variadic(G__57412,G__57413,G__57414,seq57411__$3);
});


cljs.core$macros.defn_.cljs$lang$macro = true;
/**
 * bindings => binding-form test
 * 
 *   If test is true, evaluates then with binding-form bound to the value of
 *   test, if not, yields else
 */
cljs.core$macros.if_let = (function cljs$core$macros$if_let(var_args){
var args57419 = [];
var len__48239__auto___57428 = arguments.length;
var i__48240__auto___57429 = (0);
while(true){
if((i__48240__auto___57429 < len__48239__auto___57428)){
args57419.push((arguments[i__48240__auto___57429]));

var G__57430 = (i__48240__auto___57429 + (1));
i__48240__auto___57429 = G__57430;
continue;
} else {
}
break;
}

var G__57427 = args57419.length;
switch (G__57427) {
case 4:
return cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__48258__auto__ = (new cljs.core.IndexedSeq(args57419.slice((5)),(0),null));
return cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__48258__auto__);

}
});

cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,then){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-let","cljs.core$macros/if-let",1291543946,null)),(function (){var x__47968__auto__ = bindings;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = then;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
});

cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,then,else$,oldform){
if(cljs.core.vector_QMARK_.call(null,bindings)){
} else {
throw cljs.core.ex_info.call(null,"if-let requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core.empty_QMARK_.call(null,oldform)){
} else {
throw cljs.core.ex_info.call(null,"if-let requires 1 or 2 forms after binding vector",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core._EQ_.call(null,(2),cljs.core.count.call(null,bindings))){
} else {
throw cljs.core.ex_info.call(null,"if-let requires exactly 2 forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var form = bindings.call(null,(0));
var tst = bindings.call(null,(1));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__47968__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__57418__auto__","temp__57418__auto__",-776155543,null)),(function (){var x__47968__auto__ = tst;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__57418__auto__","temp__57418__auto__",-776155543,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__47968__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__47968__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__57418__auto__","temp__57418__auto__",-776155543,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = then;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = else$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
});

cljs.core$macros.if_let.cljs$lang$applyTo = (function (seq57420){
var G__57421 = cljs.core.first.call(null,seq57420);
var seq57420__$1 = cljs.core.next.call(null,seq57420);
var G__57422 = cljs.core.first.call(null,seq57420__$1);
var seq57420__$2 = cljs.core.next.call(null,seq57420__$1);
var G__57423 = cljs.core.first.call(null,seq57420__$2);
var seq57420__$3 = cljs.core.next.call(null,seq57420__$2);
var G__57424 = cljs.core.first.call(null,seq57420__$3);
var seq57420__$4 = cljs.core.next.call(null,seq57420__$3);
var G__57425 = cljs.core.first.call(null,seq57420__$4);
var seq57420__$5 = cljs.core.next.call(null,seq57420__$4);
return cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$variadic(G__57421,G__57422,G__57423,G__57424,G__57425,seq57420__$5);
});

cljs.core$macros.if_let.cljs$lang$maxFixedArity = (5);


cljs.core$macros.if_let.cljs$lang$macro = true;
/**
 * Evaluates test. If logical false, evaluates and returns then expr,
 *   otherwise else expr, if supplied, else nil.
 */
cljs.core$macros.if_not = (function cljs$core$macros$if_not(var_args){
var args57432 = [];
var len__48239__auto___57435 = arguments.length;
var i__48240__auto___57436 = (0);
while(true){
if((i__48240__auto___57436 < len__48239__auto___57435)){
args57432.push((arguments[i__48240__auto___57436]));

var G__57437 = (i__48240__auto___57436 + (1));
i__48240__auto___57436 = G__57437;
continue;
} else {
}
break;
}

var G__57434 = args57432.length;
switch (G__57434) {
case 4:
return cljs.core$macros.if_not.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core$macros.if_not.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str((args57432.length - (2)))].join('')));

}
});

cljs.core$macros.if_not.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,test,then){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__47968__auto__ = test;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = then;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
});

cljs.core$macros.if_not.cljs$core$IFn$_invoke$arity$5 = (function (_AMPERSAND_form,_AMPERSAND_env,test,then,else$){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null)),(function (){var x__47968__auto__ = test;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = then;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = else$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
});

cljs.core$macros.if_not.cljs$lang$maxFixedArity = 5;


cljs.core$macros.if_not.cljs$lang$macro = true;
/**
 * fnspec ==> (fname [params*] exprs) or (fname ([params*] exprs)+)
 * 
 *   Takes a vector of function specs and a body, and generates a set of
 *   bindings of functions to their names. All of the names are available
 *   in all of the definitions of the functions, as well as the body.
 */
cljs.core$macros.letfn = (function cljs$core$macros$letfn(var_args){
var args__48246__auto__ = [];
var len__48239__auto___57444 = arguments.length;
var i__48240__auto___57445 = (0);
while(true){
if((i__48240__auto___57445 < len__48239__auto___57444)){
args__48246__auto__.push((arguments[i__48240__auto___57445]));

var G__57446 = (i__48240__auto___57445 + (1));
i__48240__auto___57445 = G__57446;
continue;
} else {
}
break;
}

var argseq__48247__auto__ = ((((3) < args__48246__auto__.length))?(new cljs.core.IndexedSeq(args__48246__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.letfn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__48247__auto__);
});

cljs.core$macros.letfn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,fnspecs,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"letfn*","letfn*",-110097810,null)),(function (){var x__47968__auto__ = cljs.core.vec.call(null,cljs.core.interleave.call(null,cljs.core.map.call(null,cljs.core.first,fnspecs),cljs.core.map.call(null,(function (p1__57439_SHARP_){
return cljs.core.cons.call(null,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null),p1__57439_SHARP_);
}),fnspecs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),body)));
});

cljs.core$macros.letfn.cljs$lang$maxFixedArity = (3);

cljs.core$macros.letfn.cljs$lang$applyTo = (function (seq57440){
var G__57441 = cljs.core.first.call(null,seq57440);
var seq57440__$1 = cljs.core.next.call(null,seq57440);
var G__57442 = cljs.core.first.call(null,seq57440__$1);
var seq57440__$2 = cljs.core.next.call(null,seq57440__$1);
var G__57443 = cljs.core.first.call(null,seq57440__$2);
var seq57440__$3 = cljs.core.next.call(null,seq57440__$2);
return cljs.core$macros.letfn.cljs$core$IFn$_invoke$arity$variadic(G__57441,G__57442,G__57443,seq57440__$3);
});


cljs.core$macros.letfn.cljs$lang$macro = true;
/**
 * Expands into code that creates a fn that expects to be passed an
 *   object and any args and calls the named instance method on the
 *   object passing the args. Use when you want to treat a Java method as
 *   a first-class fn. name may be type-hinted with the method receiver's
 *   type in order to avoid reflective calls.
 */
cljs.core$macros.memfn = (function cljs$core$macros$memfn(var_args){
var args__48246__auto__ = [];
var len__48239__auto___57451 = arguments.length;
var i__48240__auto___57452 = (0);
while(true){
if((i__48240__auto___57452 < len__48239__auto___57451)){
args__48246__auto__.push((arguments[i__48240__auto___57452]));

var G__57453 = (i__48240__auto___57452 + (1));
i__48240__auto___57452 = G__57453;
continue;
} else {
}
break;
}

var argseq__48247__auto__ = ((((3) < args__48246__auto__.length))?(new cljs.core.IndexedSeq(args__48246__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.memfn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__48247__auto__);
});

cljs.core$macros.memfn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,args){
var t = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"target"),cljs.core.meta.call(null,name));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__47968__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__47968__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),args))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__47968__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__47968__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),args)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
});

cljs.core$macros.memfn.cljs$lang$maxFixedArity = (3);

cljs.core$macros.memfn.cljs$lang$applyTo = (function (seq57447){
var G__57448 = cljs.core.first.call(null,seq57447);
var seq57447__$1 = cljs.core.next.call(null,seq57447);
var G__57449 = cljs.core.first.call(null,seq57447__$1);
var seq57447__$2 = cljs.core.next.call(null,seq57447__$1);
var G__57450 = cljs.core.first.call(null,seq57447__$2);
var seq57447__$3 = cljs.core.next.call(null,seq57447__$2);
return cljs.core$macros.memfn.cljs$core$IFn$_invoke$arity$variadic(G__57448,G__57449,G__57450,seq57447__$3);
});


cljs.core$macros.memfn.cljs$lang$macro = true;
/**
 * Evaluates test. If logical true, evaluates body in an implicit do.
 */
cljs.core$macros.when = (function cljs$core$macros$when(var_args){
var args__48246__auto__ = [];
var len__48239__auto___57458 = arguments.length;
var i__48240__auto___57459 = (0);
while(true){
if((i__48240__auto___57459 < len__48239__auto___57458)){
args__48246__auto__.push((arguments[i__48240__auto___57459]));

var G__57460 = (i__48240__auto___57459 + (1));
i__48240__auto___57459 = G__57460;
continue;
} else {
}
break;
}

var argseq__48247__auto__ = ((((3) < args__48246__auto__.length))?(new cljs.core.IndexedSeq(args__48246__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__48247__auto__);
});

cljs.core$macros.when.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,test,body){
return cljs.core._conj.call(null,(function (){var x__47968__auto__ = test;
return cljs.core._conj.call(null,(function (){var x__47968__auto____$1 = cljs.core.cons.call(null,new cljs.core.Symbol(null,"do","do",1686842252,null),body);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto____$1);
})(),x__47968__auto__);
})(),new cljs.core.Symbol(null,"if","if",1181717262,null));
});

cljs.core$macros.when.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when.cljs$lang$applyTo = (function (seq57454){
var G__57455 = cljs.core.first.call(null,seq57454);
var seq57454__$1 = cljs.core.next.call(null,seq57454);
var G__57456 = cljs.core.first.call(null,seq57454__$1);
var seq57454__$2 = cljs.core.next.call(null,seq57454__$1);
var G__57457 = cljs.core.first.call(null,seq57454__$2);
var seq57454__$3 = cljs.core.next.call(null,seq57454__$2);
return cljs.core$macros.when.cljs$core$IFn$_invoke$arity$variadic(G__57455,G__57456,G__57457,seq57454__$3);
});


cljs.core$macros.when.cljs$lang$macro = true;
/**
 * bindings => x xs
 * 
 *   Roughly the same as (when (seq xs) (let [x (first xs)] body)) but xs is evaluated only once
 */
cljs.core$macros.when_first = (function cljs$core$macros$when_first(var_args){
var args__48246__auto__ = [];
var len__48239__auto___57469 = arguments.length;
var i__48240__auto___57470 = (0);
while(true){
if((i__48240__auto___57470 < len__48239__auto___57469)){
args__48246__auto__.push((arguments[i__48240__auto___57470]));

var G__57471 = (i__48240__auto___57470 + (1));
i__48240__auto___57470 = G__57471;
continue;
} else {
}
break;
}

var argseq__48247__auto__ = ((((3) < args__48246__auto__.length))?(new cljs.core.IndexedSeq(args__48246__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when_first.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__48247__auto__);
});

cljs.core$macros.when_first.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
if(cljs.core.vector_QMARK_.call(null,bindings)){
} else {
throw cljs.core.ex_info.call(null,"when-first requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core._EQ_.call(null,(2),cljs.core.count.call(null,bindings))){
} else {
throw cljs.core.ex_info.call(null,"when-first requires exactly 2 forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var vec__57466 = bindings;
var x = cljs.core.nth.call(null,vec__57466,(0),null);
var xs = cljs.core.nth.call(null,vec__57466,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-let","cljs.core$macros/when-let",-2004472648,null)),(function (){var x__47968__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"xs__57461__auto__","xs__57461__auto__",-556446528,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__47968__auto__ = xs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__47968__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__47968__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"xs__57461__auto__","xs__57461__auto__",-556446528,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
});

cljs.core$macros.when_first.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when_first.cljs$lang$applyTo = (function (seq57462){
var G__57463 = cljs.core.first.call(null,seq57462);
var seq57462__$1 = cljs.core.next.call(null,seq57462);
var G__57464 = cljs.core.first.call(null,seq57462__$1);
var seq57462__$2 = cljs.core.next.call(null,seq57462__$1);
var G__57465 = cljs.core.first.call(null,seq57462__$2);
var seq57462__$3 = cljs.core.next.call(null,seq57462__$2);
return cljs.core$macros.when_first.cljs$core$IFn$_invoke$arity$variadic(G__57463,G__57464,G__57465,seq57462__$3);
});


cljs.core$macros.when_first.cljs$lang$macro = true;
/**
 * bindings => binding-form test
 * 
 *   When test is true, evaluates body with binding-form bound to the value of test
 */
cljs.core$macros.when_let = (function cljs$core$macros$when_let(var_args){
var args__48246__auto__ = [];
var len__48239__auto___57477 = arguments.length;
var i__48240__auto___57478 = (0);
while(true){
if((i__48240__auto___57478 < len__48239__auto___57477)){
args__48246__auto__.push((arguments[i__48240__auto___57478]));

var G__57479 = (i__48240__auto___57478 + (1));
i__48240__auto___57478 = G__57479;
continue;
} else {
}
break;
}

var argseq__48247__auto__ = ((((3) < args__48246__auto__.length))?(new cljs.core.IndexedSeq(args__48246__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when_let.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__48247__auto__);
});

cljs.core$macros.when_let.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
if(cljs.core.vector_QMARK_.call(null,bindings)){
} else {
throw cljs.core.ex_info.call(null,"when-let requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core._EQ_.call(null,(2),cljs.core.count.call(null,bindings))){
} else {
throw cljs.core.ex_info.call(null,"when-let requires exactly 2 forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var form = bindings.call(null,(0));
var tst = bindings.call(null,(1));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__47968__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__57472__auto__","temp__57472__auto__",-1663752842,null)),(function (){var x__47968__auto__ = tst;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__57472__auto__","temp__57472__auto__",-1663752842,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__47968__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__47968__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__57472__auto__","temp__57472__auto__",-1663752842,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
});

cljs.core$macros.when_let.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when_let.cljs$lang$applyTo = (function (seq57473){
var G__57474 = cljs.core.first.call(null,seq57473);
var seq57473__$1 = cljs.core.next.call(null,seq57473);
var G__57475 = cljs.core.first.call(null,seq57473__$1);
var seq57473__$2 = cljs.core.next.call(null,seq57473__$1);
var G__57476 = cljs.core.first.call(null,seq57473__$2);
var seq57473__$3 = cljs.core.next.call(null,seq57473__$2);
return cljs.core$macros.when_let.cljs$core$IFn$_invoke$arity$variadic(G__57474,G__57475,G__57476,seq57473__$3);
});


cljs.core$macros.when_let.cljs$lang$macro = true;
/**
 * Evaluates test. If logical false, evaluates body in an implicit do.
 */
cljs.core$macros.when_not = (function cljs$core$macros$when_not(var_args){
var args__48246__auto__ = [];
var len__48239__auto___57484 = arguments.length;
var i__48240__auto___57485 = (0);
while(true){
if((i__48240__auto___57485 < len__48239__auto___57484)){
args__48246__auto__.push((arguments[i__48240__auto___57485]));

var G__57486 = (i__48240__auto___57485 + (1));
i__48240__auto___57485 = G__57486;
continue;
} else {
}
break;
}

var argseq__48247__auto__ = ((((3) < args__48246__auto__.length))?(new cljs.core.IndexedSeq(args__48246__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when_not.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__48247__auto__);
});

cljs.core$macros.when_not.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,test,body){
return cljs.core._conj.call(null,(function (){var x__47968__auto__ = test;
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__47968__auto____$1 = cljs.core.cons.call(null,new cljs.core.Symbol(null,"do","do",1686842252,null),body);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto____$1);
})(),null),x__47968__auto__);
})(),new cljs.core.Symbol(null,"if","if",1181717262,null));
});

cljs.core$macros.when_not.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when_not.cljs$lang$applyTo = (function (seq57480){
var G__57481 = cljs.core.first.call(null,seq57480);
var seq57480__$1 = cljs.core.next.call(null,seq57480);
var G__57482 = cljs.core.first.call(null,seq57480__$1);
var seq57480__$2 = cljs.core.next.call(null,seq57480__$1);
var G__57483 = cljs.core.first.call(null,seq57480__$2);
var seq57480__$3 = cljs.core.next.call(null,seq57480__$2);
return cljs.core$macros.when_not.cljs$core$IFn$_invoke$arity$variadic(G__57481,G__57482,G__57483,seq57480__$3);
});


cljs.core$macros.when_not.cljs$lang$macro = true;
/**
 * Repeatedly executes body while test expression is true. Presumes
 *   some side-effect will cause test to become false/nil. Returns nil
 */
cljs.core$macros.while$ = (function cljs$core$macros$while(var_args){
var args__48246__auto__ = [];
var len__48239__auto___57491 = arguments.length;
var i__48240__auto___57492 = (0);
while(true){
if((i__48240__auto___57492 < len__48239__auto___57491)){
args__48246__auto__.push((arguments[i__48240__auto___57492]));

var G__57493 = (i__48240__auto___57492 + (1));
i__48240__auto___57492 = G__57493;
continue;
} else {
}
break;
}

var argseq__48247__auto__ = ((((3) < args__48246__auto__.length))?(new cljs.core.IndexedSeq(args__48246__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.while$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__48247__auto__);
});

cljs.core$macros.while$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,test,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__47968__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__47968__auto__ = test;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),body,(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
});

cljs.core$macros.while$.cljs$lang$maxFixedArity = (3);

cljs.core$macros.while$.cljs$lang$applyTo = (function (seq57487){
var G__57488 = cljs.core.first.call(null,seq57487);
var seq57487__$1 = cljs.core.next.call(null,seq57487);
var G__57489 = cljs.core.first.call(null,seq57487__$1);
var seq57487__$2 = cljs.core.next.call(null,seq57487__$1);
var G__57490 = cljs.core.first.call(null,seq57487__$2);
var seq57487__$3 = cljs.core.next.call(null,seq57487__$2);
return cljs.core$macros.while$.cljs$core$IFn$_invoke$arity$variadic(G__57488,G__57489,G__57490,seq57487__$3);
});


cljs.core$macros.while$.cljs$lang$macro = true;
/**
 * Takes an expression and a set of test/form pairs. Threads expr (via ->)
 *   through each form for which the corresponding test
 *   expression is true. Note that, unlike cond branching, cond-> threading does
 *   not short circuit after the first true test expression.
 */
cljs.core$macros.cond__GT_ = (function cljs$core$macros$cond__GT_(var_args){
var args__48246__auto__ = [];
var len__48239__auto___57502 = arguments.length;
var i__48240__auto___57503 = (0);
while(true){
if((i__48240__auto___57503 < len__48239__auto___57502)){
args__48246__auto__.push((arguments[i__48240__auto___57503]));

var G__57504 = (i__48240__auto___57503 + (1));
i__48240__auto___57503 = G__57504;
continue;
} else {
}
break;
}

var argseq__48247__auto__ = ((((3) < args__48246__auto__.length))?(new cljs.core.IndexedSeq(args__48246__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.cond__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__48247__auto__);
});

cljs.core$macros.cond__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,clauses){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,clauses))){
} else {
throw (new Error("Assert failed: (even? (count clauses))"));
}

var g = cljs.core.gensym.call(null);
var pstep = ((function (g){
return (function (p__57498){
var vec__57499 = p__57498;
var test = cljs.core.nth.call(null,vec__57499,(0),null);
var step = cljs.core.nth.call(null,vec__57499,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__47968__auto__ = test;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","->","cljs.core$macros/->",-1519455206,null)),(function (){var x__47968__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = step;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
});})(g))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__47968__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__47968__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),cljs.core.interleave.call(null,cljs.core.repeat.call(null,g),cljs.core.map.call(null,pstep,cljs.core.partition.call(null,(2),clauses)))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
});

cljs.core$macros.cond__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.cond__GT_.cljs$lang$applyTo = (function (seq57494){
var G__57495 = cljs.core.first.call(null,seq57494);
var seq57494__$1 = cljs.core.next.call(null,seq57494);
var G__57496 = cljs.core.first.call(null,seq57494__$1);
var seq57494__$2 = cljs.core.next.call(null,seq57494__$1);
var G__57497 = cljs.core.first.call(null,seq57494__$2);
var seq57494__$3 = cljs.core.next.call(null,seq57494__$2);
return cljs.core$macros.cond__GT_.cljs$core$IFn$_invoke$arity$variadic(G__57495,G__57496,G__57497,seq57494__$3);
});


cljs.core$macros.cond__GT_.cljs$lang$macro = true;
/**
 * Takes an expression and a set of test/form pairs. Threads expr (via ->>)
 *   through each form for which the corresponding test expression
 *   is true.  Note that, unlike cond branching, cond->> threading does not short circuit
 *   after the first true test expression.
 */
cljs.core$macros.cond__GT__GT_ = (function cljs$core$macros$cond__GT__GT_(var_args){
var args__48246__auto__ = [];
var len__48239__auto___57513 = arguments.length;
var i__48240__auto___57514 = (0);
while(true){
if((i__48240__auto___57514 < len__48239__auto___57513)){
args__48246__auto__.push((arguments[i__48240__auto___57514]));

var G__57515 = (i__48240__auto___57514 + (1));
i__48240__auto___57514 = G__57515;
continue;
} else {
}
break;
}

var argseq__48247__auto__ = ((((3) < args__48246__auto__.length))?(new cljs.core.IndexedSeq(args__48246__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.cond__GT__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__48247__auto__);
});

cljs.core$macros.cond__GT__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,clauses){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,clauses))){
} else {
throw (new Error("Assert failed: (even? (count clauses))"));
}

var g = cljs.core.gensym.call(null);
var pstep = ((function (g){
return (function (p__57509){
var vec__57510 = p__57509;
var test = cljs.core.nth.call(null,vec__57510,(0),null);
var step = cljs.core.nth.call(null,vec__57510,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__47968__auto__ = test;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","->>","cljs.core$macros/->>",-1353108561,null)),(function (){var x__47968__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = step;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
});})(g))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__47968__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__47968__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),cljs.core.interleave.call(null,cljs.core.repeat.call(null,g),cljs.core.map.call(null,pstep,cljs.core.partition.call(null,(2),clauses)))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
});

cljs.core$macros.cond__GT__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.cond__GT__GT_.cljs$lang$applyTo = (function (seq57505){
var G__57506 = cljs.core.first.call(null,seq57505);
var seq57505__$1 = cljs.core.next.call(null,seq57505);
var G__57507 = cljs.core.first.call(null,seq57505__$1);
var seq57505__$2 = cljs.core.next.call(null,seq57505__$1);
var G__57508 = cljs.core.first.call(null,seq57505__$2);
var seq57505__$3 = cljs.core.next.call(null,seq57505__$2);
return cljs.core$macros.cond__GT__GT_.cljs$core$IFn$_invoke$arity$variadic(G__57506,G__57507,G__57508,seq57505__$3);
});


cljs.core$macros.cond__GT__GT_.cljs$lang$macro = true;
/**
 * Binds name to expr, evaluates the first form in the lexical context
 *   of that binding, then binds name to that result, repeating for each
 *   successive form, returning the result of the last form.
 */
cljs.core$macros.as__GT_ = (function cljs$core$macros$as__GT_(var_args){
var args__48246__auto__ = [];
var len__48239__auto___57521 = arguments.length;
var i__48240__auto___57522 = (0);
while(true){
if((i__48240__auto___57522 < len__48239__auto___57521)){
args__48246__auto__.push((arguments[i__48240__auto___57522]));

var G__57523 = (i__48240__auto___57522 + (1));
i__48240__auto___57522 = G__57523;
continue;
} else {
}
break;
}

var argseq__48247__auto__ = ((((4) < args__48246__auto__.length))?(new cljs.core.IndexedSeq(args__48246__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.as__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__48247__auto__);
});

cljs.core$macros.as__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,name,forms){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__47968__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__47968__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),cljs.core.interleave.call(null,cljs.core.repeat.call(null,name),forms)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
});

cljs.core$macros.as__GT_.cljs$lang$maxFixedArity = (4);

cljs.core$macros.as__GT_.cljs$lang$applyTo = (function (seq57516){
var G__57517 = cljs.core.first.call(null,seq57516);
var seq57516__$1 = cljs.core.next.call(null,seq57516);
var G__57518 = cljs.core.first.call(null,seq57516__$1);
var seq57516__$2 = cljs.core.next.call(null,seq57516__$1);
var G__57519 = cljs.core.first.call(null,seq57516__$2);
var seq57516__$3 = cljs.core.next.call(null,seq57516__$2);
var G__57520 = cljs.core.first.call(null,seq57516__$3);
var seq57516__$4 = cljs.core.next.call(null,seq57516__$3);
return cljs.core$macros.as__GT_.cljs$core$IFn$_invoke$arity$variadic(G__57517,G__57518,G__57519,G__57520,seq57516__$4);
});


cljs.core$macros.as__GT_.cljs$lang$macro = true;
/**
 * When expr is not nil, threads it into the first form (via ->),
 *   and when that result is not nil, through the next etc
 */
cljs.core$macros.some__GT_ = (function cljs$core$macros$some__GT_(var_args){
var args__48246__auto__ = [];
var len__48239__auto___57528 = arguments.length;
var i__48240__auto___57529 = (0);
while(true){
if((i__48240__auto___57529 < len__48239__auto___57528)){
args__48246__auto__.push((arguments[i__48240__auto___57529]));

var G__57530 = (i__48240__auto___57529 + (1));
i__48240__auto___57529 = G__57530;
continue;
} else {
}
break;
}

var argseq__48247__auto__ = ((((3) < args__48246__auto__.length))?(new cljs.core.IndexedSeq(args__48246__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.some__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__48247__auto__);
});

cljs.core$macros.some__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,forms){
var g = cljs.core.gensym.call(null);
var pstep = ((function (g){
return (function (step){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__47968__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","->","cljs.core$macros/->",-1519455206,null)),(function (){var x__47968__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = step;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
});})(g))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__47968__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__47968__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),cljs.core.interleave.call(null,cljs.core.repeat.call(null,g),cljs.core.map.call(null,pstep,forms))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
});

cljs.core$macros.some__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.some__GT_.cljs$lang$applyTo = (function (seq57524){
var G__57525 = cljs.core.first.call(null,seq57524);
var seq57524__$1 = cljs.core.next.call(null,seq57524);
var G__57526 = cljs.core.first.call(null,seq57524__$1);
var seq57524__$2 = cljs.core.next.call(null,seq57524__$1);
var G__57527 = cljs.core.first.call(null,seq57524__$2);
var seq57524__$3 = cljs.core.next.call(null,seq57524__$2);
return cljs.core$macros.some__GT_.cljs$core$IFn$_invoke$arity$variadic(G__57525,G__57526,G__57527,seq57524__$3);
});


cljs.core$macros.some__GT_.cljs$lang$macro = true;
/**
 * When expr is not nil, threads it into the first form (via ->>),
 *   and when that result is not nil, through the next etc
 */
cljs.core$macros.some__GT__GT_ = (function cljs$core$macros$some__GT__GT_(var_args){
var args__48246__auto__ = [];
var len__48239__auto___57535 = arguments.length;
var i__48240__auto___57536 = (0);
while(true){
if((i__48240__auto___57536 < len__48239__auto___57535)){
args__48246__auto__.push((arguments[i__48240__auto___57536]));

var G__57537 = (i__48240__auto___57536 + (1));
i__48240__auto___57536 = G__57537;
continue;
} else {
}
break;
}

var argseq__48247__auto__ = ((((3) < args__48246__auto__.length))?(new cljs.core.IndexedSeq(args__48246__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.some__GT__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__48247__auto__);
});

cljs.core$macros.some__GT__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,forms){
var g = cljs.core.gensym.call(null);
var pstep = ((function (g){
return (function (step){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__47968__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","->>","cljs.core$macros/->>",-1353108561,null)),(function (){var x__47968__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = step;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
});})(g))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__47968__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__47968__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),cljs.core.interleave.call(null,cljs.core.repeat.call(null,g),cljs.core.map.call(null,pstep,forms))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
});

cljs.core$macros.some__GT__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.some__GT__GT_.cljs$lang$applyTo = (function (seq57531){
var G__57532 = cljs.core.first.call(null,seq57531);
var seq57531__$1 = cljs.core.next.call(null,seq57531);
var G__57533 = cljs.core.first.call(null,seq57531__$1);
var seq57531__$2 = cljs.core.next.call(null,seq57531__$1);
var G__57534 = cljs.core.first.call(null,seq57531__$2);
var seq57531__$3 = cljs.core.next.call(null,seq57531__$2);
return cljs.core$macros.some__GT__GT_.cljs$core$IFn$_invoke$arity$variadic(G__57532,G__57533,G__57534,seq57531__$3);
});


cljs.core$macros.some__GT__GT_.cljs$lang$macro = true;
/**
 * bindings => binding-form test
 * 
 *    If test is not nil, evaluates then with binding-form bound to the
 *    value of test, if not, yields else
 */
cljs.core$macros.if_some = (function cljs$core$macros$if_some(var_args){
var args57539 = [];
var len__48239__auto___57548 = arguments.length;
var i__48240__auto___57549 = (0);
while(true){
if((i__48240__auto___57549 < len__48239__auto___57548)){
args57539.push((arguments[i__48240__auto___57549]));

var G__57550 = (i__48240__auto___57549 + (1));
i__48240__auto___57549 = G__57550;
continue;
} else {
}
break;
}

var G__57547 = args57539.length;
switch (G__57547) {
case 4:
return cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__48258__auto__ = (new cljs.core.IndexedSeq(args57539.slice((5)),(0),null));
return cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__48258__auto__);

}
});

cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,then){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-some","cljs.core$macros/if-some",1405341529,null)),(function (){var x__47968__auto__ = bindings;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = then;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
});

cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,then,else$,oldform){
if(cljs.core.vector_QMARK_.call(null,bindings)){
} else {
throw cljs.core.ex_info.call(null,"if-some requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core.empty_QMARK_.call(null,oldform)){
} else {
throw cljs.core.ex_info.call(null,"if-some requires 1 or 2 forms after binding vector",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core._EQ_.call(null,(2),cljs.core.count.call(null,bindings))){
} else {
throw cljs.core.ex_info.call(null,"if-some requires exactly 2 forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var form = bindings.call(null,(0));
var tst = bindings.call(null,(1));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__47968__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__57538__auto__","temp__57538__auto__",-75382867,null)),(function (){var x__47968__auto__ = tst;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__57538__auto__","temp__57538__auto__",-75382867,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = else$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__47968__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__47968__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__57538__auto__","temp__57538__auto__",-75382867,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = then;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
});

cljs.core$macros.if_some.cljs$lang$applyTo = (function (seq57540){
var G__57541 = cljs.core.first.call(null,seq57540);
var seq57540__$1 = cljs.core.next.call(null,seq57540);
var G__57542 = cljs.core.first.call(null,seq57540__$1);
var seq57540__$2 = cljs.core.next.call(null,seq57540__$1);
var G__57543 = cljs.core.first.call(null,seq57540__$2);
var seq57540__$3 = cljs.core.next.call(null,seq57540__$2);
var G__57544 = cljs.core.first.call(null,seq57540__$3);
var seq57540__$4 = cljs.core.next.call(null,seq57540__$3);
var G__57545 = cljs.core.first.call(null,seq57540__$4);
var seq57540__$5 = cljs.core.next.call(null,seq57540__$4);
return cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$variadic(G__57541,G__57542,G__57543,G__57544,G__57545,seq57540__$5);
});

cljs.core$macros.if_some.cljs$lang$maxFixedArity = (5);


cljs.core$macros.if_some.cljs$lang$macro = true;
/**
 * bindings => binding-form test
 * 
 *    When test is not nil, evaluates body with binding-form bound to the
 *    value of test
 */
cljs.core$macros.when_some = (function cljs$core$macros$when_some(var_args){
var args__48246__auto__ = [];
var len__48239__auto___57557 = arguments.length;
var i__48240__auto___57558 = (0);
while(true){
if((i__48240__auto___57558 < len__48239__auto___57557)){
args__48246__auto__.push((arguments[i__48240__auto___57558]));

var G__57559 = (i__48240__auto___57558 + (1));
i__48240__auto___57558 = G__57559;
continue;
} else {
}
break;
}

var argseq__48247__auto__ = ((((3) < args__48246__auto__.length))?(new cljs.core.IndexedSeq(args__48246__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__48247__auto__);
});

cljs.core$macros.when_some.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
if(cljs.core.vector_QMARK_.call(null,bindings)){
} else {
throw cljs.core.ex_info.call(null,"when-some requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core._EQ_.call(null,(2),cljs.core.count.call(null,bindings))){
} else {
throw cljs.core.ex_info.call(null,"when-some requires exactly 2 forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var form = bindings.call(null,(0));
var tst = bindings.call(null,(1));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__47968__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__57552__auto__","temp__57552__auto__",73088306,null)),(function (){var x__47968__auto__ = tst;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__57552__auto__","temp__57552__auto__",73088306,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__47968__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__47968__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__57552__auto__","temp__57552__auto__",73088306,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
});

cljs.core$macros.when_some.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when_some.cljs$lang$applyTo = (function (seq57553){
var G__57554 = cljs.core.first.call(null,seq57553);
var seq57553__$1 = cljs.core.next.call(null,seq57553);
var G__57555 = cljs.core.first.call(null,seq57553__$1);
var seq57553__$2 = cljs.core.next.call(null,seq57553__$1);
var G__57556 = cljs.core.first.call(null,seq57553__$2);
var seq57553__$3 = cljs.core.next.call(null,seq57553__$2);
return cljs.core$macros.when_some.cljs$core$IFn$_invoke$arity$variadic(G__57554,G__57555,G__57556,seq57553__$3);
});


cljs.core$macros.when_some.cljs$lang$macro = true;
/**
 * A good fdecl looks like (([a] ...) ([a b] ...)) near the end of defn.
 */
cljs.core$macros.assert_valid_fdecl = (function cljs$core$macros$assert_valid_fdecl(fdecl){
if(cljs.core.empty_QMARK_.call(null,fdecl)){
throw (new Error("Parameter declaration missing"));
} else {
}

var argdecls = cljs.core.map.call(null,(function (p1__57560_SHARP_){
if(cljs.core.seq_QMARK_.call(null,p1__57560_SHARP_)){
return cljs.core.first.call(null,p1__57560_SHARP_);
} else {
throw (new Error(((cljs.core.seq_QMARK_.call(null,cljs.core.first.call(null,fdecl)))?[cljs.core.str("Invalid signature \""),cljs.core.str(p1__57560_SHARP_),cljs.core.str("\" should be a list")].join(''):[cljs.core.str("Parameter declaration \""),cljs.core.str(p1__57560_SHARP_),cljs.core.str("\" should be a vector")].join(''))));
}
}),fdecl);
var bad_args = cljs.core.seq.call(null,cljs.core.remove.call(null,((function (argdecls){
return (function (p1__57561_SHARP_){
return cljs.core.vector_QMARK_.call(null,p1__57561_SHARP_);
});})(argdecls))
,argdecls));
if(bad_args){
throw (new Error([cljs.core.str("Parameter declaration \""),cljs.core.str(cljs.core.first.call(null,bad_args)),cljs.core.str("\" should be a vector")].join('')));
} else {
return null;
}
});
cljs.core$macros.sigs = (function cljs$core$macros$sigs(fdecl){
cljs.core$macros.assert_valid_fdecl.call(null,fdecl);

var asig = (function (fdecl__$1){
var arglist = cljs.core.first.call(null,fdecl__$1);
var arglist__$1 = ((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"&form","&form",1482799337,null),cljs.core.first.call(null,arglist)))?cljs.core.subvec.call(null,arglist,(2),cljs.core.count.call(null,arglist)):arglist);
var body = cljs.core.next.call(null,fdecl__$1);
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
if(cljs.core.next.call(null,body)){
return cljs.core.with_meta.call(null,arglist__$1,cljs.core.conj.call(null,(cljs.core.truth_(cljs.core.meta.call(null,arglist__$1))?cljs.core.meta.call(null,arglist__$1):cljs.core.PersistentArrayMap.EMPTY),cljs.core.first.call(null,body)));
} else {
return arglist__$1;
}
} else {
return arglist__$1;
}
});
if(cljs.core.seq_QMARK_.call(null,cljs.core.first.call(null,fdecl))){
var ret = cljs.core.PersistentVector.EMPTY;
var fdecls = fdecl;
while(true){
if(cljs.core.truth_(fdecls)){
var G__57562 = cljs.core.conj.call(null,ret,asig.call(null,cljs.core.first.call(null,fdecls)));
var G__57563 = cljs.core.next.call(null,fdecls);
ret = G__57562;
fdecls = G__57563;
continue;
} else {
return cljs.core.seq.call(null,ret);
}
break;
}
} else {
var x__47968__auto__ = asig.call(null,fdecl);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
}
});
/**
 * defs name to have the root value of init iff the named var has no root value,
 *   else init is unevaluated
 */
cljs.core$macros.defonce = (function cljs$core$macros$defonce(_AMPERSAND_form,_AMPERSAND_env,x,init){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-not","cljs.core$macros/when-not",-764302244,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","exists?","cljs.core$macros/exists?",-1828590389,null)),(function (){var x__47968__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"def","def",597100991,null)),(function (){var x__47968__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = init;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
});

cljs.core$macros.defonce.cljs$lang$macro = true;
cljs.core$macros.destructure = (function cljs$core$macros$destructure(bindings){
var bents = cljs.core.partition.call(null,(2),bindings);
var pb = ((function (bents){
return (function cljs$core$macros$destructure_$_pb(bvec,b,v){
var pvec = ((function (bents){
return (function (bvec__$1,b__$1,val){
var gvec = cljs.core.gensym.call(null,"vec__");
var gseq = cljs.core.gensym.call(null,"seq__");
var gfirst = cljs.core.gensym.call(null,"first__");
var has_rest = cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),b__$1);
var ret = (function (){var ret = cljs.core.conj.call(null,bvec__$1,gvec,val);
if(cljs.core.truth_(has_rest)){
return cljs.core.conj.call(null,ret,gseq,cljs.core._conj.call(null,(function (){var x__47968__auto__ = gvec;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)));
} else {
return ret;
}
})();
var n = (0);
var bs = b__$1;
var seen_rest_QMARK_ = false;
while(true){
if(cljs.core.seq.call(null,bs)){
var firstb = cljs.core.first.call(null,bs);
if(cljs.core._EQ_.call(null,firstb,new cljs.core.Symbol(null,"&","&",-2144855648,null))){
var G__57573 = cljs$core$macros$destructure_$_pb.call(null,ret,cljs.core.second.call(null,bs),gseq);
var G__57574 = n;
var G__57575 = cljs.core.nnext.call(null,bs);
var G__57576 = true;
ret = G__57573;
n = G__57574;
bs = G__57575;
seen_rest_QMARK_ = G__57576;
continue;
} else {
if(cljs.core._EQ_.call(null,firstb,new cljs.core.Keyword(null,"as","as",1148689641))){
return cljs$core$macros$destructure_$_pb.call(null,ret,cljs.core.second.call(null,bs),gvec);
} else {
if(seen_rest_QMARK_){
throw (new Error("Unsupported binding form, only :as can follow & parameter"));
} else {
var G__57577 = cljs$core$macros$destructure_$_pb.call(null,(cljs.core.truth_(has_rest)?cljs.core.conj.call(null,ret,gfirst,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null)),(function (){var x__47968__auto__ = gseq;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})()))),gseq,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","next","cljs.core/next",-1291438473,null)),(function (){var x__47968__auto__ = gseq;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())))):ret),firstb,(cljs.core.truth_(has_rest)?gfirst:cljs.core._conj.call(null,(function (){var x__47968__auto__ = gvec;
return cljs.core._conj.call(null,(function (){var x__47968__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,null),x__47968__auto____$1);
})(),x__47968__auto__);
})(),new cljs.core.Symbol("cljs.core","nth","cljs.core/nth",1961052085,null))));
var G__57578 = (n + (1));
var G__57579 = cljs.core.next.call(null,bs);
var G__57580 = seen_rest_QMARK_;
ret = G__57577;
n = G__57578;
bs = G__57579;
seen_rest_QMARK_ = G__57580;
continue;
}

}
}
} else {
return ret;
}
break;
}
});})(bents))
;
var pmap = ((function (pvec,bents){
return (function (bvec__$1,b__$1,v__$1){
var gmap = cljs.core.gensym.call(null,"map__");
var defaults = new cljs.core.Keyword(null,"or","or",235744169).cljs$core$IFn$_invoke$arity$1(b__$1);
var ret = ((function (gmap,defaults,pvec,bents){
return (function (ret){
if(cljs.core.truth_(new cljs.core.Keyword(null,"as","as",1148689641).cljs$core$IFn$_invoke$arity$1(b__$1))){
return cljs.core.conj.call(null,ret,new cljs.core.Keyword(null,"as","as",1148689641).cljs$core$IFn$_invoke$arity$1(b__$1),gmap);
} else {
return ret;
}
});})(gmap,defaults,pvec,bents))
.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,bvec__$1,gmap),v__$1),gmap),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","implements?","cljs.core$macros/implements?",-94762250,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","ISeq","cljs.core/ISeq",230133392,null)),(function (){var x__47968__auto__ = gmap;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","hash-map","cljs.core/hash-map",303385767,null)),(function (){var x__47968__auto__ = gmap;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = gmap;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())))));
var bes = (function (){var transforms = cljs.core.reduce.call(null,((function (ret,gmap,defaults,pvec,bents){
return (function (transforms,mk){
if((mk instanceof cljs.core.Keyword)){
var mkns = cljs.core.namespace.call(null,mk);
var mkn = cljs.core.name.call(null,mk);
if(cljs.core._EQ_.call(null,mkn,"keys")){
return cljs.core.assoc.call(null,transforms,mk,((function (mkns,mkn,ret,gmap,defaults,pvec,bents){
return (function (p1__57564_SHARP_){
return cljs.core.keyword.call(null,(function (){var or__47131__auto__ = mkns;
if(cljs.core.truth_(or__47131__auto__)){
return or__47131__auto__;
} else {
return cljs.core.namespace.call(null,p1__57564_SHARP_);
}
})(),cljs.core.name.call(null,p1__57564_SHARP_));
});})(mkns,mkn,ret,gmap,defaults,pvec,bents))
);
} else {
if(cljs.core._EQ_.call(null,mkn,"syms")){
return cljs.core.assoc.call(null,transforms,mk,((function (mkns,mkn,ret,gmap,defaults,pvec,bents){
return (function (p1__57565_SHARP_){
return cljs.core._conj.call(null,(function (){var x__47968__auto__ = cljs.core.symbol.call(null,(function (){var or__47131__auto__ = mkns;
if(cljs.core.truth_(or__47131__auto__)){
return or__47131__auto__;
} else {
return cljs.core.namespace.call(null,p1__57565_SHARP_);
}
})(),cljs.core.name.call(null,p1__57565_SHARP_));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),new cljs.core.Symbol(null,"quote","quote",1377916282,null));
});})(mkns,mkn,ret,gmap,defaults,pvec,bents))
);
} else {
if(cljs.core._EQ_.call(null,mkn,"strs")){
return cljs.core.assoc.call(null,transforms,mk,cljs.core.str);
} else {
return transforms;

}
}
}
} else {
return transforms;
}
});})(ret,gmap,defaults,pvec,bents))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keys.call(null,b__$1));
return cljs.core.reduce.call(null,((function (transforms,ret,gmap,defaults,pvec,bents){
return (function (bes,entry){
return cljs.core.reduce.call(null,((function (transforms,ret,gmap,defaults,pvec,bents){
return (function (p1__57566_SHARP_,p2__57567_SHARP_){
return cljs.core.assoc.call(null,p1__57566_SHARP_,p2__57567_SHARP_,cljs.core.val.call(null,entry).call(null,p2__57567_SHARP_));
});})(transforms,ret,gmap,defaults,pvec,bents))
,cljs.core.dissoc.call(null,bes,cljs.core.key.call(null,entry)),cljs.core.key.call(null,entry).call(null,bes));
});})(transforms,ret,gmap,defaults,pvec,bents))
,cljs.core.dissoc.call(null,b__$1,new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Keyword(null,"or","or",235744169)),transforms);
})();
while(true){
if(cljs.core.seq.call(null,bes)){
var bb = cljs.core.key.call(null,cljs.core.first.call(null,bes));
var bk = cljs.core.val.call(null,cljs.core.first.call(null,bes));
var local = ((((!((bb == null)))?((((bb.cljs$lang$protocol_mask$partition1$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === bb.cljs$core$INamed$)))?true:false):false))?cljs.core.with_meta.call(null,cljs.core.symbol.call(null,null,cljs.core.name.call(null,bb)),cljs.core.meta.call(null,bb)):bb);
var bv = ((cljs.core.contains_QMARK_.call(null,defaults,local))?cljs.core._conj.call(null,(function (){var x__47968__auto__ = gmap;
return cljs.core._conj.call(null,(function (){var x__47968__auto____$1 = bk;
return cljs.core._conj.call(null,(function (){var x__47968__auto____$2 = defaults.call(null,local);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto____$2);
})(),x__47968__auto____$1);
})(),x__47968__auto__);
})(),new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null)):cljs.core._conj.call(null,(function (){var x__47968__auto__ = gmap;
return cljs.core._conj.call(null,(function (){var x__47968__auto____$1 = bk;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto____$1);
})(),x__47968__auto__);
})(),new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null)));
var G__57581 = ((((bb instanceof cljs.core.Keyword)) || ((bb instanceof cljs.core.Symbol)))?cljs.core.conj.call(null,ret,local,bv):cljs$core$macros$destructure_$_pb.call(null,ret,bb,bv));
var G__57582 = cljs.core.next.call(null,bes);
ret = G__57581;
bes = G__57582;
continue;
} else {
return ret;
}
break;
}
});})(pvec,bents))
;
if((b instanceof cljs.core.Symbol)){
return cljs.core.conj.call(null,cljs.core.conj.call(null,bvec,(cljs.core.truth_(cljs.core.namespace.call(null,b))?cljs.core.symbol.call(null,cljs.core.name.call(null,b)):b)),v);
} else {
if((b instanceof cljs.core.Keyword)){
return cljs.core.conj.call(null,cljs.core.conj.call(null,bvec,cljs.core.symbol.call(null,cljs.core.name.call(null,b))),v);
} else {
if(cljs.core.vector_QMARK_.call(null,b)){
return pvec.call(null,bvec,b,v);
} else {
if(cljs.core.map_QMARK_.call(null,b)){
return pmap.call(null,bvec,b,v);
} else {
throw (new Error([cljs.core.str("Unsupported binding form: "),cljs.core.str(b)].join('')));

}
}
}
}
});})(bents))
;
var process_entry = ((function (bents,pb){
return (function (bvec,b){
return pb.call(null,bvec,cljs.core.first.call(null,b),cljs.core.second.call(null,b));
});})(bents,pb))
;
if(cljs.core.every_QMARK_.call(null,cljs.core.symbol_QMARK_,cljs.core.map.call(null,cljs.core.first,bents))){
return bindings;
} else {
var temp__4655__auto__ = cljs.core.seq.call(null,cljs.core.filter.call(null,((function (bents,pb,process_entry){
return (function (p1__57568_SHARP_){
return (cljs.core.first.call(null,p1__57568_SHARP_) instanceof cljs.core.Keyword);
});})(bents,pb,process_entry))
,bents));
if(temp__4655__auto__){
var kwbs = temp__4655__auto__;
throw (new Error([cljs.core.str("Unsupported binding key: "),cljs.core.str(cljs.core.ffirst.call(null,kwbs))].join('')));
} else {
return cljs.core.reduce.call(null,process_entry,cljs.core.PersistentVector.EMPTY,bents);
}
}
});
/**
 * Defines a var using `goog.define`. Passed default value must be
 *   string, number or boolean.
 * 
 *   Default value can be overridden at compile time using the
 *   compiler option `:closure-defines`.
 * 
 *   Example:
 *  (ns your-app.core)
 *  (goog-define DEBUG! false)
 *  ;; can be overridden with
 *  :closure-defines {"your_app.core.DEBUG_BANG_" true}
 *  or
 *  :closure-defines {'your-app.core/DEBUG! true}
 */
cljs.core$macros.goog_define = (function cljs$core$macros$goog_define(_AMPERSAND_form,_AMPERSAND_env,sym,default$){
if((typeof default$ === 'string') || (typeof default$ === 'number') || (default$ === true) || (default$ === false)){
} else {
throw cljs.core.ex_info.call(null,"goog-define requires a string, number or boolean as default value",cljs.core.PersistentArrayMap.EMPTY);
}


var defname = cljs.compiler.munge.call(null,[cljs.core.str(cljs.core._STAR_ns_STAR_),cljs.core.str("/"),cljs.core.str(sym)].join(''));
var type = ((typeof default$ === 'string')?"string":((typeof default$ === 'number')?"number":(((default$ === true) || (default$ === false))?"boolean":null)));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","declare","cljs.core$macros/declare",1172642527,null)),(function (){var x__47968__auto__ = cljs.core.symbol.call(null,sym);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),(function (){var x__47968__auto__ = [cljs.core.str("/** @define {"),cljs.core.str(type),cljs.core.str("} */")].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog","define","goog/define",-352722538,null)),(function (){var x__47968__auto__ = defname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = default$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
});

cljs.core$macros.goog_define.cljs$lang$macro = true;
/**
 * binding => binding-form init-expr
 * 
 *   Evaluates the exprs in a lexical context in which the symbols in
 *   the binding-forms are bound to their respective init-exprs or parts
 *   therein.
 */
cljs.core$macros.let$ = (function cljs$core$macros$let(var_args){
var args__48246__auto__ = [];
var len__48239__auto___57587 = arguments.length;
var i__48240__auto___57588 = (0);
while(true){
if((i__48240__auto___57588 < len__48239__auto___57587)){
args__48246__auto__.push((arguments[i__48240__auto___57588]));

var G__57589 = (i__48240__auto___57588 + (1));
i__48240__auto___57588 = G__57589;
continue;
} else {
}
break;
}

var argseq__48247__auto__ = ((((3) < args__48246__auto__.length))?(new cljs.core.IndexedSeq(args__48246__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.let$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__48247__auto__);
});

cljs.core$macros.let$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
if(cljs.core.vector_QMARK_.call(null,bindings)){
} else {
throw cljs.core.ex_info.call(null,"let requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,bindings))){
} else {
throw cljs.core.ex_info.call(null,"let requires an even number of forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"let*","let*",1920721458,null)),(function (){var x__47968__auto__ = cljs.core$macros.destructure.call(null,bindings);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),body)));
});

cljs.core$macros.let$.cljs$lang$maxFixedArity = (3);

cljs.core$macros.let$.cljs$lang$applyTo = (function (seq57583){
var G__57584 = cljs.core.first.call(null,seq57583);
var seq57583__$1 = cljs.core.next.call(null,seq57583);
var G__57585 = cljs.core.first.call(null,seq57583__$1);
var seq57583__$2 = cljs.core.next.call(null,seq57583__$1);
var G__57586 = cljs.core.first.call(null,seq57583__$2);
var seq57583__$3 = cljs.core.next.call(null,seq57583__$2);
return cljs.core$macros.let$.cljs$core$IFn$_invoke$arity$variadic(G__57584,G__57585,G__57586,seq57583__$3);
});


cljs.core$macros.let$.cljs$lang$macro = true;
/**
 * Evaluates the exprs in a lexical context in which the symbols in
 *   the binding-forms are bound to their respective init-exprs or parts
 *   therein. Acts as a recur target.
 */
cljs.core$macros.loop = (function cljs$core$macros$loop(var_args){
var args__48246__auto__ = [];
var len__48239__auto___57598 = arguments.length;
var i__48240__auto___57599 = (0);
while(true){
if((i__48240__auto___57599 < len__48239__auto___57598)){
args__48246__auto__.push((arguments[i__48240__auto___57599]));

var G__57600 = (i__48240__auto___57599 + (1));
i__48240__auto___57599 = G__57600;
continue;
} else {
}
break;
}

var argseq__48247__auto__ = ((((3) < args__48246__auto__.length))?(new cljs.core.IndexedSeq(args__48246__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.loop.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__48247__auto__);
});

cljs.core$macros.loop.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
if(cljs.core.vector_QMARK_.call(null,bindings)){
} else {
throw cljs.core.ex_info.call(null,"loop requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,bindings))){
} else {
throw cljs.core.ex_info.call(null,"loop requires an even number of forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var db = cljs.core$macros.destructure.call(null,bindings);
if(cljs.core._EQ_.call(null,db,bindings)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"loop*","loop*",615029416,null)),(function (){var x__47968__auto__ = bindings;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),body)));
} else {
var vs = cljs.core.take_nth.call(null,(2),cljs.core.drop.call(null,(1),bindings));
var bs = cljs.core.take_nth.call(null,(2),bindings);
var gs = cljs.core.map.call(null,((function (vs,bs,db){
return (function (b){
if((b instanceof cljs.core.Symbol)){
return b;
} else {
return cljs.core.gensym.call(null);
}
});})(vs,bs,db))
,bs);
var bfs = cljs.core.reduce.call(null,((function (vs,bs,gs,db){
return (function (ret,p__57594){
var vec__57595 = p__57594;
var b = cljs.core.nth.call(null,vec__57595,(0),null);
var v = cljs.core.nth.call(null,vec__57595,(1),null);
var g = cljs.core.nth.call(null,vec__57595,(2),null);
if((b instanceof cljs.core.Symbol)){
return cljs.core.conj.call(null,ret,g,v);
} else {
return cljs.core.conj.call(null,ret,g,v,b,g);
}
});})(vs,bs,gs,db))
,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,cljs.core.vector,bs,vs,gs));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__47968__auto__ = bfs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"loop*","loop*",615029416,null)),(function (){var x__47968__auto__ = cljs.core.vec.call(null,cljs.core.interleave.call(null,gs,gs));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__47968__auto__ = cljs.core.vec.call(null,cljs.core.interleave.call(null,bs,gs));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
}
});

cljs.core$macros.loop.cljs$lang$maxFixedArity = (3);

cljs.core$macros.loop.cljs$lang$applyTo = (function (seq57590){
var G__57591 = cljs.core.first.call(null,seq57590);
var seq57590__$1 = cljs.core.next.call(null,seq57590);
var G__57592 = cljs.core.first.call(null,seq57590__$1);
var seq57590__$2 = cljs.core.next.call(null,seq57590__$1);
var G__57593 = cljs.core.first.call(null,seq57590__$2);
var seq57590__$3 = cljs.core.next.call(null,seq57590__$2);
return cljs.core$macros.loop.cljs$core$IFn$_invoke$arity$variadic(G__57591,G__57592,G__57593,seq57590__$3);
});


cljs.core$macros.loop.cljs$lang$macro = true;
/**
 * protocol fqn -> [partition number, bit]
 */
cljs.core$macros.fast_path_protocols = cljs.core.zipmap.call(null,cljs.core.map.call(null,(function (p1__57601_SHARP_){
return cljs.core.symbol.call(null,"cljs.core",[cljs.core.str(p1__57601_SHARP_)].join(''));
}),cljs.core.PersistentVector.fromArray([new cljs.core.Symbol(null,"IFn","IFn",-244881638,null),new cljs.core.Symbol(null,"ICounted","ICounted",-1705786327,null),new cljs.core.Symbol(null,"IEmptyableCollection","IEmptyableCollection",1477271438,null),new cljs.core.Symbol(null,"ICollection","ICollection",-686709190,null),new cljs.core.Symbol(null,"IIndexed","IIndexed",-574812826,null),new cljs.core.Symbol(null,"ASeq","ASeq",266390234,null),new cljs.core.Symbol(null,"ISeq","ISeq",1517365813,null),new cljs.core.Symbol(null,"INext","INext",562211849,null),new cljs.core.Symbol(null,"ILookup","ILookup",784647298,null),new cljs.core.Symbol(null,"IAssociative","IAssociative",-1306431882,null),new cljs.core.Symbol(null,"IMap","IMap",992876629,null),new cljs.core.Symbol(null,"IMapEntry","IMapEntry",-943754199,null),new cljs.core.Symbol(null,"ISet","ISet",-1398072657,null),new cljs.core.Symbol(null,"IStack","IStack",1136769449,null),new cljs.core.Symbol(null,"IVector","IVector",-1120721434,null),new cljs.core.Symbol(null,"IDeref","IDeref",1738423197,null),new cljs.core.Symbol(null,"IDerefWithTimeout","IDerefWithTimeout",2140974319,null),new cljs.core.Symbol(null,"IMeta","IMeta",1095313672,null),new cljs.core.Symbol(null,"IWithMeta","IWithMeta",-509493158,null),new cljs.core.Symbol(null,"IReduce","IReduce",-440384974,null),new cljs.core.Symbol(null,"IKVReduce","IKVReduce",-870856862,null),new cljs.core.Symbol(null,"IEquiv","IEquiv",-1912850869,null),new cljs.core.Symbol(null,"IHash","IHash",-1495374645,null),new cljs.core.Symbol(null,"ISeqable","ISeqable",1349682102,null),new cljs.core.Symbol(null,"ISequential","ISequential",-1626174217,null),new cljs.core.Symbol(null,"IList","IList",1682281311,null),new cljs.core.Symbol(null,"IRecord","IRecord",-903221169,null),new cljs.core.Symbol(null,"IReversible","IReversible",-723048599,null),new cljs.core.Symbol(null,"ISorted","ISorted",-253627362,null),new cljs.core.Symbol(null,"IPrintWithWriter","IPrintWithWriter",-1205316154,null),new cljs.core.Symbol(null,"IWriter","IWriter",-1681087107,null),new cljs.core.Symbol(null,"IPrintWithWriter","IPrintWithWriter",-1205316154,null),new cljs.core.Symbol(null,"IPending","IPending",1229113039,null),new cljs.core.Symbol(null,"IWatchable","IWatchable",-1929659016,null),new cljs.core.Symbol(null,"IEditableCollection","IEditableCollection",-906687187,null),new cljs.core.Symbol(null,"ITransientCollection","ITransientCollection",252832402,null),new cljs.core.Symbol(null,"ITransientAssociative","ITransientAssociative",-1612754624,null),new cljs.core.Symbol(null,"ITransientMap","ITransientMap",298423651,null),new cljs.core.Symbol(null,"ITransientVector","ITransientVector",1978793164,null),new cljs.core.Symbol(null,"ITransientSet","ITransientSet",-575559912,null),new cljs.core.Symbol(null,"IMultiFn","IMultiFn",-1848282794,null),new cljs.core.Symbol(null,"IChunkedSeq","IChunkedSeq",-1299765705,null),new cljs.core.Symbol(null,"IChunkedNext","IChunkedNext",1193289532,null),new cljs.core.Symbol(null,"IComparable","IComparable",1834481627,null),new cljs.core.Symbol(null,"INamed","INamed",357992946,null),new cljs.core.Symbol(null,"ICloneable","ICloneable",1882653160,null),new cljs.core.Symbol(null,"IAtom","IAtom",-1411134312,null),new cljs.core.Symbol(null,"IReset","IReset",-1893729426,null),new cljs.core.Symbol(null,"ISwap","ISwap",484378193,null)], true)),cljs.core.iterate.call(null,(function (p__57602){
var vec__57603 = p__57602;
var p = cljs.core.nth.call(null,vec__57603,(0),null);
var b = cljs.core.nth.call(null,vec__57603,(1),null);
if(((2147483648) === b)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(p + (1)),(1)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,((2) * b)], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null)));
/**
 * total number of partitions
 */
cljs.core$macros.fast_path_protocol_partitions_count = (function (){var c = cljs.core.count.call(null,cljs.core$macros.fast_path_protocols);
var m = cljs.core.mod.call(null,c,(32));
if((m === (0))){
return cljs.core.quot.call(null,c,(32));
} else {
return (cljs.core.quot.call(null,c,(32)) + (1));
}
})();
cljs.core$macros.str = (function cljs$core$macros$str(var_args){
var args__48246__auto__ = [];
var len__48239__auto___57609 = arguments.length;
var i__48240__auto___57610 = (0);
while(true){
if((i__48240__auto___57610 < len__48239__auto___57609)){
args__48246__auto__.push((arguments[i__48240__auto___57610]));

var G__57611 = (i__48240__auto___57610 + (1));
i__48240__auto___57610 = G__57611;
continue;
} else {
}
break;
}

var argseq__48247__auto__ = ((((2) < args__48246__auto__.length))?(new cljs.core.IndexedSeq(args__48246__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__48247__auto__);
});

cljs.core$macros.str.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
var strs = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,",",cljs.core.repeat.call(null,cljs.core.count.call(null,xs),"cljs.core.str(~{})")));
return cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),[cljs.core.str("["),cljs.core.str(strs),cljs.core.str("].join('')")].join(''),xs);
});

cljs.core$macros.str.cljs$lang$maxFixedArity = (2);

cljs.core$macros.str.cljs$lang$applyTo = (function (seq57606){
var G__57607 = cljs.core.first.call(null,seq57606);
var seq57606__$1 = cljs.core.next.call(null,seq57606);
var G__57608 = cljs.core.first.call(null,seq57606__$1);
var seq57606__$2 = cljs.core.next.call(null,seq57606__$1);
return cljs.core$macros.str.cljs$core$IFn$_invoke$arity$variadic(G__57607,G__57608,seq57606__$2);
});


cljs.core$macros.str.cljs$lang$macro = true;
cljs.core$macros.bool_expr = (function cljs$core$macros$bool_expr(e){
return cljs.core.vary_meta.call(null,e,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null));
});
cljs.core$macros.simple_test_expr_QMARK_ = (function cljs$core$macros$simple_test_expr_QMARK_(env,ast){
var and__47119__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"js","js",1768080579),null,new cljs.core.Keyword(null,"constant","constant",-379609303),null,new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"invoke","invoke",1145927159),null,new cljs.core.Keyword(null,"dot","dot",1442709401),null], null), null).call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast));
if(cljs.core.truth_(and__47119__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null).call(null,cljs.analyzer.infer_tag.call(null,env,ast));
} else {
return and__47119__auto__;
}
});
/**
 * Evaluates exprs one at a time, from left to right. If a form
 *   returns logical false (nil or false), and returns that value and
 *   doesn't evaluate any of the other expressions, otherwise it returns
 *   the value of the last expr. (and) returns true.
 */
cljs.core$macros.and = (function cljs$core$macros$and(var_args){
var args57615 = [];
var len__48239__auto___57622 = arguments.length;
var i__48240__auto___57623 = (0);
while(true){
if((i__48240__auto___57623 < len__48239__auto___57622)){
args57615.push((arguments[i__48240__auto___57623]));

var G__57624 = (i__48240__auto___57623 + (1));
i__48240__auto___57623 = G__57624;
continue;
} else {
}
break;
}

var G__57621 = args57615.length;
switch (G__57621) {
case 2:
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__48258__auto__ = (new cljs.core.IndexedSeq(args57615.slice((3)),(0),null));
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__48258__auto__);

}
});

cljs.core$macros.and.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return true;
});

cljs.core$macros.and.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.and.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,next){
var forms = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null),next);
if(cljs.core.every_QMARK_.call(null,((function (forms){
return (function (p1__57612_SHARP_){
return cljs.core$macros.simple_test_expr_QMARK_.call(null,_AMPERSAND_env,p1__57612_SHARP_);
});})(forms))
,cljs.core.map.call(null,((function (forms){
return (function (p1__57613_SHARP_){
return cljs.analyzer.analyze.call(null,_AMPERSAND_env,p1__57613_SHARP_);
});})(forms))
,forms))){
var and_str = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," && ",cljs.core.repeat.call(null,cljs.core.count.call(null,forms),"(~{})")));
return cljs.core$macros.bool_expr.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),(function (){var x__47968__auto__ = and_str;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),forms))));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__47968__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"and__57614__auto__","and__57614__auto__",2105380829,null)),(function (){var x__47968__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"and__57614__auto__","and__57614__auto__",2105380829,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),next)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"and__57614__auto__","and__57614__auto__",2105380829,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
}
});

cljs.core$macros.and.cljs$lang$applyTo = (function (seq57616){
var G__57617 = cljs.core.first.call(null,seq57616);
var seq57616__$1 = cljs.core.next.call(null,seq57616);
var G__57618 = cljs.core.first.call(null,seq57616__$1);
var seq57616__$2 = cljs.core.next.call(null,seq57616__$1);
var G__57619 = cljs.core.first.call(null,seq57616__$2);
var seq57616__$3 = cljs.core.next.call(null,seq57616__$2);
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$variadic(G__57617,G__57618,G__57619,seq57616__$3);
});

cljs.core$macros.and.cljs$lang$maxFixedArity = (3);


cljs.core$macros.and.cljs$lang$macro = true;
/**
 * Evaluates exprs one at a time, from left to right. If a form
 *   returns a logical true value, or returns that value and doesn't
 *   evaluate any of the other expressions, otherwise it returns the
 *   value of the last expression. (or) returns nil.
 */
cljs.core$macros.or = (function cljs$core$macros$or(var_args){
var args57629 = [];
var len__48239__auto___57636 = arguments.length;
var i__48240__auto___57637 = (0);
while(true){
if((i__48240__auto___57637 < len__48239__auto___57636)){
args57629.push((arguments[i__48240__auto___57637]));

var G__57638 = (i__48240__auto___57637 + (1));
i__48240__auto___57637 = G__57638;
continue;
} else {
}
break;
}

var G__57635 = args57629.length;
switch (G__57635) {
case 2:
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__48258__auto__ = (new cljs.core.IndexedSeq(args57629.slice((3)),(0),null));
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__48258__auto__);

}
});

cljs.core$macros.or.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return null;
});

cljs.core$macros.or.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.or.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,next){
var forms = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null),next);
if(cljs.core.every_QMARK_.call(null,((function (forms){
return (function (p1__57626_SHARP_){
return cljs.core$macros.simple_test_expr_QMARK_.call(null,_AMPERSAND_env,p1__57626_SHARP_);
});})(forms))
,cljs.core.map.call(null,((function (forms){
return (function (p1__57627_SHARP_){
return cljs.analyzer.analyze.call(null,_AMPERSAND_env,p1__57627_SHARP_);
});})(forms))
,forms))){
var or_str = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," || ",cljs.core.repeat.call(null,cljs.core.count.call(null,forms),"(~{})")));
return cljs.core$macros.bool_expr.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),(function (){var x__47968__auto__ = or_str;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),forms))));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__47968__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"or__57628__auto__","or__57628__auto__",-1256786774,null)),(function (){var x__47968__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"or__57628__auto__","or__57628__auto__",-1256786774,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"or__57628__auto__","or__57628__auto__",-1256786774,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","or","cljs.core$macros/or",1346243648,null)),next)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
}
});

cljs.core$macros.or.cljs$lang$applyTo = (function (seq57630){
var G__57631 = cljs.core.first.call(null,seq57630);
var seq57630__$1 = cljs.core.next.call(null,seq57630);
var G__57632 = cljs.core.first.call(null,seq57630__$1);
var seq57630__$2 = cljs.core.next.call(null,seq57630__$1);
var G__57633 = cljs.core.first.call(null,seq57630__$2);
var seq57630__$3 = cljs.core.next.call(null,seq57630__$2);
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$variadic(G__57631,G__57632,G__57633,seq57630__$3);
});

cljs.core$macros.or.cljs$lang$maxFixedArity = (3);


cljs.core$macros.or.cljs$lang$macro = true;
cljs.core$macros.nil_QMARK_ = (function cljs$core$macros$nil_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","coercive-=","cljs.core$macros/coercive-=",-1655776086,null)),(function (){var x__47968__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
});

cljs.core$macros.nil_QMARK_.cljs$lang$macro = true;
cljs.core$macros.coercive_not = (function cljs$core$macros$coercive_not(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__47968__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),"(!~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.coercive_not.cljs$lang$macro = true;
cljs.core$macros.coercive_not_EQ_ = (function cljs$core$macros$coercive_not_EQ_(_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__47968__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__47968__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto____$1);
})(),x__47968__auto__);
})(),"(~{} != ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.coercive_not_EQ_.cljs$lang$macro = true;
cljs.core$macros.coercive__EQ_ = (function cljs$core$macros$coercive__EQ_(_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__47968__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__47968__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto____$1);
})(),x__47968__auto__);
})(),"(~{} == ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.coercive__EQ_.cljs$lang$macro = true;
cljs.core$macros.coercive_boolean = (function cljs$core$macros$coercive_boolean(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.with_meta.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__47968__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),"~{}"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)], null));
});

cljs.core$macros.coercive_boolean.cljs$lang$macro = true;
cljs.core$macros.truth_ = (function cljs$core$macros$truth_(_AMPERSAND_form,_AMPERSAND_env,x){
if((x instanceof cljs.core.Symbol)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("x is substituted twice"),cljs.core.str("\n"),cljs.core.str("(core/symbol? x)")].join('')));
}

return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__47968__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__47968__auto____$1 = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto____$1);
})(),x__47968__auto__);
})(),"(~{} != null && ~{} !== false)"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.truth_.cljs$lang$macro = true;
cljs.core$macros.js_arguments = (function cljs$core$macros$js_arguments(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"arguments"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.js_arguments.cljs$lang$macro = true;
cljs.core$macros.js_delete = (function cljs$core$macros$js_delete(_AMPERSAND_form,_AMPERSAND_env,obj,key){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__47968__auto__ = obj;
return cljs.core._conj.call(null,(function (){var x__47968__auto____$1 = key;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto____$1);
})(),x__47968__auto__);
})(),"delete ~{}[~{}]"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.js_delete.cljs$lang$macro = true;
cljs.core$macros.js_in = (function cljs$core$macros$js_in(_AMPERSAND_form,_AMPERSAND_env,key,obj){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__47968__auto__ = key;
return cljs.core._conj.call(null,(function (){var x__47968__auto____$1 = obj;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto____$1);
})(),x__47968__auto__);
})(),"~{} in ~{}"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.js_in.cljs$lang$macro = true;
/**
 * Emit JavaScript "debugger;" statement
 */
cljs.core$macros.js_debugger = (function cljs$core$macros$js_debugger(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core._conj.call(null,(function (){var x__47968__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"debugger"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,null),x__47968__auto__);
})(),new cljs.core.Symbol(null,"do","do",1686842252,null));
});

cljs.core$macros.js_debugger.cljs$lang$macro = true;
/**
 * Emit a top-level JavaScript multi-line comment. New lines will create a
 *   new comment line. Comment block will be preceded and followed by a newline
 */
cljs.core$macros.js_comment = (function cljs$core$macros$js_comment(_AMPERSAND_form,_AMPERSAND_env,comment){
var vec__57644 = clojure.string.split.call(null,comment,/\n/);
var seq__57645 = cljs.core.seq.call(null,vec__57644);
var first__57646 = cljs.core.first.call(null,seq__57645);
var seq__57645__$1 = cljs.core.next.call(null,seq__57645);
var x = first__57646;
var ys = seq__57645__$1;
return cljs.core._conj.call(null,(function (){var x__47968__auto__ = [cljs.core.str("\n/**\n"),cljs.core.str([cljs.core.str(" * "),cljs.core.str(x),cljs.core.str("\n")].join('')),cljs.core.str(cljs.core.reduce.call(null,cljs.core.str,"",cljs.core.map.call(null,((function (vec__57644,seq__57645,first__57646,seq__57645__$1,x,ys){
return (function (p1__57640_SHARP_){
return [cljs.core.str(" * "),cljs.core.str(clojure.string.replace.call(null,p1__57640_SHARP_,/^   /,"")),cljs.core.str("\n")].join('');
});})(vec__57644,seq__57645,first__57646,seq__57645__$1,x,ys))
,ys))),cljs.core.str(" */\n")].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.js_comment.cljs$lang$macro = true;
/**
 * EXPERIMENTAL: Subject to change. Unsafely cast a value to a different type.
 */
cljs.core$macros.unsafe_cast = (function cljs$core$macros$unsafe_cast(_AMPERSAND_form,_AMPERSAND_env,t,x){
var cast_expr = [cljs.core.str("~{} = /** @type {"),cljs.core.str(t),cljs.core.str("} */ (~{})")].join('');
return cljs.core._conj.call(null,(function (){var x__47968__auto__ = cast_expr;
return cljs.core._conj.call(null,(function (){var x__47968__auto____$1 = x;
return cljs.core._conj.call(null,(function (){var x__47968__auto____$2 = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto____$2);
})(),x__47968__auto____$1);
})(),x__47968__auto__);
})(),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.unsafe_cast.cljs$lang$macro = true;
/**
 * Emit an inline JavaScript comment.
 */
cljs.core$macros.js_inline_comment = (function cljs$core$macros$js_inline_comment(_AMPERSAND_form,_AMPERSAND_env,comment){
return cljs.core._conj.call(null,(function (){var x__47968__auto__ = [cljs.core.str("/**"),cljs.core.str(comment),cljs.core.str("*/")].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.js_inline_comment.cljs$lang$macro = true;
cljs.core$macros.true_QMARK_ = (function cljs$core$macros$true_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__47968__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),"~{} === true"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.true_QMARK_.cljs$lang$macro = true;
cljs.core$macros.false_QMARK_ = (function cljs$core$macros$false_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__47968__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),"~{} === false"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.false_QMARK_.cljs$lang$macro = true;
cljs.core$macros.string_QMARK_ = (function cljs$core$macros$string_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__47968__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),"typeof ~{} === 'string'"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.string_QMARK_.cljs$lang$macro = true;
/**
 * Return true if argument exists, analogous to usage of typeof operator
 * in JavaScript.
 */
cljs.core$macros.exists_QMARK_ = (function cljs$core$macros$exists_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__47968__auto__ = cljs.core.vary_meta.call(null,x,cljs.core.assoc,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),"typeof ~{} !== 'undefined'"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.exists_QMARK_.cljs$lang$macro = true;
/**
 * Return true if argument is identical to the JavaScript undefined value.
 */
cljs.core$macros.undefined_QMARK_ = (function cljs$core$macros$undefined_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__47968__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),"(void 0 === ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.undefined_QMARK_.cljs$lang$macro = true;
cljs.core$macros.identical_QMARK_ = (function cljs$core$macros$identical_QMARK_(_AMPERSAND_form,_AMPERSAND_env,a,b){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__47968__auto__ = a;
return cljs.core._conj.call(null,(function (){var x__47968__auto____$1 = b;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto____$1);
})(),x__47968__auto__);
})(),"(~{} === ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.identical_QMARK_.cljs$lang$macro = true;
cljs.core$macros.instance_QMARK_ = (function cljs$core$macros$instance_QMARK_(_AMPERSAND_form,_AMPERSAND_env,c,x){
return cljs.core$macros.bool_expr.call(null,(((c instanceof cljs.core.Symbol))?cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__47968__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__47968__auto____$1 = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto____$1);
})(),x__47968__auto__);
})(),"(~{} instanceof ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)):cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__47968__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__57647__auto__","c__57647__auto__",2088765699,null)),(function (){var x__47968__auto__ = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__57648__auto__","x__57648__auto__",-983041838,null)),(function (){var x__47968__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"(~{} instanceof ~{})"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__57648__auto__","x__57648__auto__",-983041838,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__57647__auto__","c__57647__auto__",2088765699,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())))));
});

cljs.core$macros.instance_QMARK_.cljs$lang$macro = true;
cljs.core$macros.number_QMARK_ = (function cljs$core$macros$number_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__47968__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),"typeof ~{} === 'number'"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.number_QMARK_.cljs$lang$macro = true;
cljs.core$macros.symbol_QMARK_ = (function cljs$core$macros$symbol_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","instance?","cljs.core$macros/instance?",1829750179,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","Symbol","cljs.core/Symbol",292989338,null)),(function (){var x__47968__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})()))));
});

cljs.core$macros.symbol_QMARK_.cljs$lang$macro = true;
cljs.core$macros.keyword_QMARK_ = (function cljs$core$macros$keyword_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","instance?","cljs.core$macros/instance?",1829750179,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","Keyword","cljs.core/Keyword",-451434488,null)),(function (){var x__47968__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})()))));
});

cljs.core$macros.keyword_QMARK_.cljs$lang$macro = true;
cljs.core$macros.aget = (function cljs$core$macros$aget(var_args){
var args57649 = [];
var len__48239__auto___57657 = arguments.length;
var i__48240__auto___57658 = (0);
while(true){
if((i__48240__auto___57658 < len__48239__auto___57657)){
args57649.push((arguments[i__48240__auto___57658]));

var G__57659 = (i__48240__auto___57658 + (1));
i__48240__auto___57658 = G__57659;
continue;
} else {
}
break;
}

var G__57656 = args57649.length;
switch (G__57656) {
case 4:
return cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__48258__auto__ = (new cljs.core.IndexedSeq(args57649.slice((4)),(0),null));
return cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__48258__auto__);

}
});

cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,a,i){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__47968__auto__ = a;
return cljs.core._conj.call(null,(function (){var x__47968__auto____$1 = i;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto____$1);
})(),x__47968__auto__);
})(),"(~{}[~{}])"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,a,i,idxs){
var astr = cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,cljs.core.count.call(null,idxs),"[~{}]"));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),(function (){var x__47968__auto__ = [cljs.core.str("(~{}[~{}]"),cljs.core.str(astr),cljs.core.str(")")].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = a;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = i;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),idxs)));
});

cljs.core$macros.aget.cljs$lang$applyTo = (function (seq57650){
var G__57651 = cljs.core.first.call(null,seq57650);
var seq57650__$1 = cljs.core.next.call(null,seq57650);
var G__57652 = cljs.core.first.call(null,seq57650__$1);
var seq57650__$2 = cljs.core.next.call(null,seq57650__$1);
var G__57653 = cljs.core.first.call(null,seq57650__$2);
var seq57650__$3 = cljs.core.next.call(null,seq57650__$2);
var G__57654 = cljs.core.first.call(null,seq57650__$3);
var seq57650__$4 = cljs.core.next.call(null,seq57650__$3);
return cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$variadic(G__57651,G__57652,G__57653,G__57654,seq57650__$4);
});

cljs.core$macros.aget.cljs$lang$maxFixedArity = (4);


cljs.core$macros.aget.cljs$lang$macro = true;
cljs.core$macros.aset = (function cljs$core$macros$aset(var_args){
var args57661 = [];
var len__48239__auto___57670 = arguments.length;
var i__48240__auto___57671 = (0);
while(true){
if((i__48240__auto___57671 < len__48239__auto___57670)){
args57661.push((arguments[i__48240__auto___57671]));

var G__57672 = (i__48240__auto___57671 + (1));
i__48240__auto___57671 = G__57672;
continue;
} else {
}
break;
}

var G__57669 = args57661.length;
switch (G__57669) {
case 5:
return cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
var argseq__48258__auto__ = (new cljs.core.IndexedSeq(args57661.slice((5)),(0),null));
return cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__48258__auto__);

}
});

cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$5 = (function (_AMPERSAND_form,_AMPERSAND_env,a,i,v){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__47968__auto__ = a;
return cljs.core._conj.call(null,(function (){var x__47968__auto____$1 = i;
return cljs.core._conj.call(null,(function (){var x__47968__auto____$2 = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto____$2);
})(),x__47968__auto____$1);
})(),x__47968__auto__);
})(),"(~{}[~{}] = ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,a,idx,idx2,idxv){
var n = (cljs.core.count.call(null,idxv) - (1));
var astr = cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,n,"[~{}]"));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),(function (){var x__47968__auto__ = [cljs.core.str("(~{}[~{}][~{}]"),cljs.core.str(astr),cljs.core.str(" = ~{})")].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = a;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = idx2;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),idxv)));
});

cljs.core$macros.aset.cljs$lang$applyTo = (function (seq57662){
var G__57663 = cljs.core.first.call(null,seq57662);
var seq57662__$1 = cljs.core.next.call(null,seq57662);
var G__57664 = cljs.core.first.call(null,seq57662__$1);
var seq57662__$2 = cljs.core.next.call(null,seq57662__$1);
var G__57665 = cljs.core.first.call(null,seq57662__$2);
var seq57662__$3 = cljs.core.next.call(null,seq57662__$2);
var G__57666 = cljs.core.first.call(null,seq57662__$3);
var seq57662__$4 = cljs.core.next.call(null,seq57662__$3);
var G__57667 = cljs.core.first.call(null,seq57662__$4);
var seq57662__$5 = cljs.core.next.call(null,seq57662__$4);
return cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$variadic(G__57663,G__57664,G__57665,G__57666,G__57667,seq57662__$5);
});

cljs.core$macros.aset.cljs$lang$maxFixedArity = (5);


cljs.core$macros.aset.cljs$lang$macro = true;
cljs.core$macros._PLUS_ = (function cljs$core$macros$_PLUS_(var_args){
var args57674 = [];
var len__48239__auto___57682 = arguments.length;
var i__48240__auto___57683 = (0);
while(true){
if((i__48240__auto___57683 < len__48239__auto___57682)){
args57674.push((arguments[i__48240__auto___57683]));

var G__57684 = (i__48240__auto___57683 + (1));
i__48240__auto___57683 = G__57684;
continue;
} else {
}
break;
}

var G__57681 = args57674.length;
switch (G__57681) {
case 2:
return cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__48258__auto__ = (new cljs.core.IndexedSeq(args57674.slice((4)),(0),null));
return cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__48258__auto__);

}
});

cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return (0);
});

cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__47968__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__47968__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto____$1);
})(),x__47968__auto__);
})(),"(~{} + ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),(function (){var x__47968__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),more)));
});

cljs.core$macros._PLUS_.cljs$lang$applyTo = (function (seq57675){
var G__57676 = cljs.core.first.call(null,seq57675);
var seq57675__$1 = cljs.core.next.call(null,seq57675);
var G__57677 = cljs.core.first.call(null,seq57675__$1);
var seq57675__$2 = cljs.core.next.call(null,seq57675__$1);
var G__57678 = cljs.core.first.call(null,seq57675__$2);
var seq57675__$3 = cljs.core.next.call(null,seq57675__$2);
var G__57679 = cljs.core.first.call(null,seq57675__$3);
var seq57675__$4 = cljs.core.next.call(null,seq57675__$3);
return cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$variadic(G__57676,G__57677,G__57678,G__57679,seq57675__$4);
});

cljs.core$macros._PLUS_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._PLUS_.cljs$lang$macro = true;
cljs.core$macros.byte$ = (function cljs$core$macros$byte(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.byte$.cljs$lang$macro = true;
cljs.core$macros.short$ = (function cljs$core$macros$short(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.short$.cljs$lang$macro = true;
cljs.core$macros.float$ = (function cljs$core$macros$float(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.float$.cljs$lang$macro = true;
cljs.core$macros.double$ = (function cljs$core$macros$double(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.double$.cljs$lang$macro = true;
cljs.core$macros.unchecked_byte = (function cljs$core$macros$unchecked_byte(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.unchecked_byte.cljs$lang$macro = true;
cljs.core$macros.unchecked_char = (function cljs$core$macros$unchecked_char(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.unchecked_char.cljs$lang$macro = true;
cljs.core$macros.unchecked_short = (function cljs$core$macros$unchecked_short(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.unchecked_short.cljs$lang$macro = true;
cljs.core$macros.unchecked_float = (function cljs$core$macros$unchecked_float(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.unchecked_float.cljs$lang$macro = true;
cljs.core$macros.unchecked_double = (function cljs$core$macros$unchecked_double(_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.unchecked_double.cljs$lang$macro = true;
cljs.core$macros.unchecked_add = (function cljs$core$macros$unchecked_add(var_args){
var args__48246__auto__ = [];
var len__48239__auto___57689 = arguments.length;
var i__48240__auto___57690 = (0);
while(true){
if((i__48240__auto___57690 < len__48239__auto___57689)){
args__48246__auto__.push((arguments[i__48240__auto___57690]));

var G__57691 = (i__48240__auto___57690 + (1));
i__48240__auto___57690 = G__57691;
continue;
} else {
}
break;
}

var argseq__48247__auto__ = ((((2) < args__48246__auto__.length))?(new cljs.core.IndexedSeq(args__48246__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_add.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__48247__auto__);
});

cljs.core$macros.unchecked_add.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),xs)));
});

cljs.core$macros.unchecked_add.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_add.cljs$lang$applyTo = (function (seq57686){
var G__57687 = cljs.core.first.call(null,seq57686);
var seq57686__$1 = cljs.core.next.call(null,seq57686);
var G__57688 = cljs.core.first.call(null,seq57686__$1);
var seq57686__$2 = cljs.core.next.call(null,seq57686__$1);
return cljs.core$macros.unchecked_add.cljs$core$IFn$_invoke$arity$variadic(G__57687,G__57688,seq57686__$2);
});


cljs.core$macros.unchecked_add.cljs$lang$macro = true;
cljs.core$macros.unchecked_add_int = (function cljs$core$macros$unchecked_add_int(var_args){
var args__48246__auto__ = [];
var len__48239__auto___57695 = arguments.length;
var i__48240__auto___57696 = (0);
while(true){
if((i__48240__auto___57696 < len__48239__auto___57695)){
args__48246__auto__.push((arguments[i__48240__auto___57696]));

var G__57697 = (i__48240__auto___57696 + (1));
i__48240__auto___57696 = G__57697;
continue;
} else {
}
break;
}

var argseq__48247__auto__ = ((((2) < args__48246__auto__.length))?(new cljs.core.IndexedSeq(args__48246__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_add_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__48247__auto__);
});

cljs.core$macros.unchecked_add_int.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),xs)));
});

cljs.core$macros.unchecked_add_int.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_add_int.cljs$lang$applyTo = (function (seq57692){
var G__57693 = cljs.core.first.call(null,seq57692);
var seq57692__$1 = cljs.core.next.call(null,seq57692);
var G__57694 = cljs.core.first.call(null,seq57692__$1);
var seq57692__$2 = cljs.core.next.call(null,seq57692__$1);
return cljs.core$macros.unchecked_add_int.cljs$core$IFn$_invoke$arity$variadic(G__57693,G__57694,seq57692__$2);
});


cljs.core$macros.unchecked_add_int.cljs$lang$macro = true;
cljs.core$macros.unchecked_dec = (function cljs$core$macros$unchecked_dec(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","dec","cljs.core$macros/dec",-247694061,null)),(function (){var x__47968__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
});

cljs.core$macros.unchecked_dec.cljs$lang$macro = true;
cljs.core$macros.unchecked_dec_int = (function cljs$core$macros$unchecked_dec_int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","dec","cljs.core$macros/dec",-247694061,null)),(function (){var x__47968__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
});

cljs.core$macros.unchecked_dec_int.cljs$lang$macro = true;
cljs.core$macros.unchecked_divide_int = (function cljs$core$macros$unchecked_divide_int(var_args){
var args__48246__auto__ = [];
var len__48239__auto___57701 = arguments.length;
var i__48240__auto___57702 = (0);
while(true){
if((i__48240__auto___57702 < len__48239__auto___57701)){
args__48246__auto__.push((arguments[i__48240__auto___57702]));

var G__57703 = (i__48240__auto___57702 + (1));
i__48240__auto___57702 = G__57703;
continue;
} else {
}
break;
}

var argseq__48247__auto__ = ((((2) < args__48246__auto__.length))?(new cljs.core.IndexedSeq(args__48246__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_divide_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__48247__auto__);
});

cljs.core$macros.unchecked_divide_int.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),xs)));
});

cljs.core$macros.unchecked_divide_int.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_divide_int.cljs$lang$applyTo = (function (seq57698){
var G__57699 = cljs.core.first.call(null,seq57698);
var seq57698__$1 = cljs.core.next.call(null,seq57698);
var G__57700 = cljs.core.first.call(null,seq57698__$1);
var seq57698__$2 = cljs.core.next.call(null,seq57698__$1);
return cljs.core$macros.unchecked_divide_int.cljs$core$IFn$_invoke$arity$variadic(G__57699,G__57700,seq57698__$2);
});


cljs.core$macros.unchecked_divide_int.cljs$lang$macro = true;
cljs.core$macros.unchecked_inc = (function cljs$core$macros$unchecked_inc(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),(function (){var x__47968__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
});

cljs.core$macros.unchecked_inc.cljs$lang$macro = true;
cljs.core$macros.unchecked_inc_int = (function cljs$core$macros$unchecked_inc_int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),(function (){var x__47968__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
});

cljs.core$macros.unchecked_inc_int.cljs$lang$macro = true;
cljs.core$macros.unchecked_multiply = (function cljs$core$macros$unchecked_multiply(var_args){
var args__48246__auto__ = [];
var len__48239__auto___57707 = arguments.length;
var i__48240__auto___57708 = (0);
while(true){
if((i__48240__auto___57708 < len__48239__auto___57707)){
args__48246__auto__.push((arguments[i__48240__auto___57708]));

var G__57709 = (i__48240__auto___57708 + (1));
i__48240__auto___57708 = G__57709;
continue;
} else {
}
break;
}

var argseq__48247__auto__ = ((((2) < args__48246__auto__.length))?(new cljs.core.IndexedSeq(args__48246__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_multiply.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__48247__auto__);
});

cljs.core$macros.unchecked_multiply.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","*","cljs.core$macros/*",946321529,null)),xs)));
});

cljs.core$macros.unchecked_multiply.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_multiply.cljs$lang$applyTo = (function (seq57704){
var G__57705 = cljs.core.first.call(null,seq57704);
var seq57704__$1 = cljs.core.next.call(null,seq57704);
var G__57706 = cljs.core.first.call(null,seq57704__$1);
var seq57704__$2 = cljs.core.next.call(null,seq57704__$1);
return cljs.core$macros.unchecked_multiply.cljs$core$IFn$_invoke$arity$variadic(G__57705,G__57706,seq57704__$2);
});


cljs.core$macros.unchecked_multiply.cljs$lang$macro = true;
cljs.core$macros.unchecked_multiply_int = (function cljs$core$macros$unchecked_multiply_int(var_args){
var args__48246__auto__ = [];
var len__48239__auto___57713 = arguments.length;
var i__48240__auto___57714 = (0);
while(true){
if((i__48240__auto___57714 < len__48239__auto___57713)){
args__48246__auto__.push((arguments[i__48240__auto___57714]));

var G__57715 = (i__48240__auto___57714 + (1));
i__48240__auto___57714 = G__57715;
continue;
} else {
}
break;
}

var argseq__48247__auto__ = ((((2) < args__48246__auto__.length))?(new cljs.core.IndexedSeq(args__48246__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_multiply_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__48247__auto__);
});

cljs.core$macros.unchecked_multiply_int.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","*","cljs.core$macros/*",946321529,null)),xs)));
});

cljs.core$macros.unchecked_multiply_int.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_multiply_int.cljs$lang$applyTo = (function (seq57710){
var G__57711 = cljs.core.first.call(null,seq57710);
var seq57710__$1 = cljs.core.next.call(null,seq57710);
var G__57712 = cljs.core.first.call(null,seq57710__$1);
var seq57710__$2 = cljs.core.next.call(null,seq57710__$1);
return cljs.core$macros.unchecked_multiply_int.cljs$core$IFn$_invoke$arity$variadic(G__57711,G__57712,seq57710__$2);
});


cljs.core$macros.unchecked_multiply_int.cljs$lang$macro = true;
cljs.core$macros.unchecked_negate = (function cljs$core$macros$unchecked_negate(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__47968__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
});

cljs.core$macros.unchecked_negate.cljs$lang$macro = true;
cljs.core$macros.unchecked_negate_int = (function cljs$core$macros$unchecked_negate_int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__47968__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
});

cljs.core$macros.unchecked_negate_int.cljs$lang$macro = true;
cljs.core$macros.unchecked_remainder_int = (function cljs$core$macros$unchecked_remainder_int(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","mod","cljs.core$macros/mod",2132457375,null)),(function (){var x__47968__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
});

cljs.core$macros.unchecked_remainder_int.cljs$lang$macro = true;
cljs.core$macros.unchecked_subtract = (function cljs$core$macros$unchecked_subtract(var_args){
var args__48246__auto__ = [];
var len__48239__auto___57719 = arguments.length;
var i__48240__auto___57720 = (0);
while(true){
if((i__48240__auto___57720 < len__48239__auto___57719)){
args__48246__auto__.push((arguments[i__48240__auto___57720]));

var G__57721 = (i__48240__auto___57720 + (1));
i__48240__auto___57720 = G__57721;
continue;
} else {
}
break;
}

var argseq__48247__auto__ = ((((2) < args__48246__auto__.length))?(new cljs.core.IndexedSeq(args__48246__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_subtract.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__48247__auto__);
});

cljs.core$macros.unchecked_subtract.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),xs)));
});

cljs.core$macros.unchecked_subtract.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_subtract.cljs$lang$applyTo = (function (seq57716){
var G__57717 = cljs.core.first.call(null,seq57716);
var seq57716__$1 = cljs.core.next.call(null,seq57716);
var G__57718 = cljs.core.first.call(null,seq57716__$1);
var seq57716__$2 = cljs.core.next.call(null,seq57716__$1);
return cljs.core$macros.unchecked_subtract.cljs$core$IFn$_invoke$arity$variadic(G__57717,G__57718,seq57716__$2);
});


cljs.core$macros.unchecked_subtract.cljs$lang$macro = true;
cljs.core$macros.unchecked_subtract_int = (function cljs$core$macros$unchecked_subtract_int(var_args){
var args__48246__auto__ = [];
var len__48239__auto___57725 = arguments.length;
var i__48240__auto___57726 = (0);
while(true){
if((i__48240__auto___57726 < len__48239__auto___57725)){
args__48246__auto__.push((arguments[i__48240__auto___57726]));

var G__57727 = (i__48240__auto___57726 + (1));
i__48240__auto___57726 = G__57727;
continue;
} else {
}
break;
}

var argseq__48247__auto__ = ((((2) < args__48246__auto__.length))?(new cljs.core.IndexedSeq(args__48246__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_subtract_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__48247__auto__);
});

cljs.core$macros.unchecked_subtract_int.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),xs)));
});

cljs.core$macros.unchecked_subtract_int.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_subtract_int.cljs$lang$applyTo = (function (seq57722){
var G__57723 = cljs.core.first.call(null,seq57722);
var seq57722__$1 = cljs.core.next.call(null,seq57722);
var G__57724 = cljs.core.first.call(null,seq57722__$1);
var seq57722__$2 = cljs.core.next.call(null,seq57722__$1);
return cljs.core$macros.unchecked_subtract_int.cljs$core$IFn$_invoke$arity$variadic(G__57723,G__57724,seq57722__$2);
});


cljs.core$macros.unchecked_subtract_int.cljs$lang$macro = true;
cljs.core$macros._ = (function cljs$core$macros$_(var_args){
var args57728 = [];
var len__48239__auto___57736 = arguments.length;
var i__48240__auto___57737 = (0);
while(true){
if((i__48240__auto___57737 < len__48239__auto___57736)){
args57728.push((arguments[i__48240__auto___57737]));

var G__57738 = (i__48240__auto___57737 + (1));
i__48240__auto___57737 = G__57738;
continue;
} else {
}
break;
}

var G__57735 = args57728.length;
switch (G__57735) {
case 3:
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__48258__auto__ = (new cljs.core.IndexedSeq(args57728.slice((4)),(0),null));
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__48258__auto__);

}
});

cljs.core$macros._.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__47968__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),"(- ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros._.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__47968__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__47968__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto____$1);
})(),x__47968__auto__);
})(),"(~{} - ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros._.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__47968__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),more)));
});

cljs.core$macros._.cljs$lang$applyTo = (function (seq57729){
var G__57730 = cljs.core.first.call(null,seq57729);
var seq57729__$1 = cljs.core.next.call(null,seq57729);
var G__57731 = cljs.core.first.call(null,seq57729__$1);
var seq57729__$2 = cljs.core.next.call(null,seq57729__$1);
var G__57732 = cljs.core.first.call(null,seq57729__$2);
var seq57729__$3 = cljs.core.next.call(null,seq57729__$2);
var G__57733 = cljs.core.first.call(null,seq57729__$3);
var seq57729__$4 = cljs.core.next.call(null,seq57729__$3);
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$variadic(G__57730,G__57731,G__57732,G__57733,seq57729__$4);
});

cljs.core$macros._.cljs$lang$maxFixedArity = (4);


cljs.core$macros._.cljs$lang$macro = true;
cljs.core$macros._STAR_ = (function cljs$core$macros$_STAR_(var_args){
var args57740 = [];
var len__48239__auto___57748 = arguments.length;
var i__48240__auto___57749 = (0);
while(true){
if((i__48240__auto___57749 < len__48239__auto___57748)){
args57740.push((arguments[i__48240__auto___57749]));

var G__57750 = (i__48240__auto___57749 + (1));
i__48240__auto___57749 = G__57750;
continue;
} else {
}
break;
}

var G__57747 = args57740.length;
switch (G__57747) {
case 2:
return cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__48258__auto__ = (new cljs.core.IndexedSeq(args57740.slice((4)),(0),null));
return cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__48258__auto__);

}
});

cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return (1);
});

cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__47968__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__47968__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto____$1);
})(),x__47968__auto__);
})(),"(~{} * ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","*","cljs.core$macros/*",946321529,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","*","cljs.core$macros/*",946321529,null)),(function (){var x__47968__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),more)));
});

cljs.core$macros._STAR_.cljs$lang$applyTo = (function (seq57741){
var G__57742 = cljs.core.first.call(null,seq57741);
var seq57741__$1 = cljs.core.next.call(null,seq57741);
var G__57743 = cljs.core.first.call(null,seq57741__$1);
var seq57741__$2 = cljs.core.next.call(null,seq57741__$1);
var G__57744 = cljs.core.first.call(null,seq57741__$2);
var seq57741__$3 = cljs.core.next.call(null,seq57741__$2);
var G__57745 = cljs.core.first.call(null,seq57741__$3);
var seq57741__$4 = cljs.core.next.call(null,seq57741__$3);
return cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$variadic(G__57742,G__57743,G__57744,G__57745,seq57741__$4);
});

cljs.core$macros._STAR_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._STAR_.cljs$lang$macro = true;
cljs.core$macros._SLASH_ = (function cljs$core$macros$_SLASH_(var_args){
var args57752 = [];
var len__48239__auto___57760 = arguments.length;
var i__48240__auto___57761 = (0);
while(true){
if((i__48240__auto___57761 < len__48239__auto___57760)){
args57752.push((arguments[i__48240__auto___57761]));

var G__57762 = (i__48240__auto___57761 + (1));
i__48240__auto___57761 = G__57762;
continue;
} else {
}
break;
}

var G__57759 = args57752.length;
switch (G__57759) {
case 3:
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__48258__auto__ = (new cljs.core.IndexedSeq(args57752.slice((4)),(0),null));
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__48258__auto__);

}
});

cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)),(function (){var x__47968__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
});

cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__47968__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__47968__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto____$1);
})(),x__47968__auto__);
})(),"(~{} / ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),(function (){var x__47968__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),more)));
});

cljs.core$macros._SLASH_.cljs$lang$applyTo = (function (seq57753){
var G__57754 = cljs.core.first.call(null,seq57753);
var seq57753__$1 = cljs.core.next.call(null,seq57753);
var G__57755 = cljs.core.first.call(null,seq57753__$1);
var seq57753__$2 = cljs.core.next.call(null,seq57753__$1);
var G__57756 = cljs.core.first.call(null,seq57753__$2);
var seq57753__$3 = cljs.core.next.call(null,seq57753__$2);
var G__57757 = cljs.core.first.call(null,seq57753__$3);
var seq57753__$4 = cljs.core.next.call(null,seq57753__$3);
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$variadic(G__57754,G__57755,G__57756,G__57757,seq57753__$4);
});

cljs.core$macros._SLASH_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._SLASH_.cljs$lang$macro = true;
cljs.core$macros.divide = (function cljs$core$macros$divide(var_args){
var args57764 = [];
var len__48239__auto___57772 = arguments.length;
var i__48240__auto___57773 = (0);
while(true){
if((i__48240__auto___57773 < len__48239__auto___57772)){
args57764.push((arguments[i__48240__auto___57773]));

var G__57774 = (i__48240__auto___57773 + (1));
i__48240__auto___57773 = G__57774;
continue;
} else {
}
break;
}

var G__57771 = args57764.length;
switch (G__57771) {
case 3:
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__48258__auto__ = (new cljs.core.IndexedSeq(args57764.slice((4)),(0),null));
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__48258__auto__);

}
});

cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)),(function (){var x__47968__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
});

cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__47968__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__47968__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto____$1);
})(),x__47968__auto__);
})(),"(~{} / ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),(function (){var x__47968__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),more)));
});

cljs.core$macros.divide.cljs$lang$applyTo = (function (seq57765){
var G__57766 = cljs.core.first.call(null,seq57765);
var seq57765__$1 = cljs.core.next.call(null,seq57765);
var G__57767 = cljs.core.first.call(null,seq57765__$1);
var seq57765__$2 = cljs.core.next.call(null,seq57765__$1);
var G__57768 = cljs.core.first.call(null,seq57765__$2);
var seq57765__$3 = cljs.core.next.call(null,seq57765__$2);
var G__57769 = cljs.core.first.call(null,seq57765__$3);
var seq57765__$4 = cljs.core.next.call(null,seq57765__$3);
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$variadic(G__57766,G__57767,G__57768,G__57769,seq57765__$4);
});

cljs.core$macros.divide.cljs$lang$maxFixedArity = (4);


cljs.core$macros.divide.cljs$lang$macro = true;
cljs.core$macros._LT_ = (function cljs$core$macros$_LT_(var_args){
var args57776 = [];
var len__48239__auto___57784 = arguments.length;
var i__48240__auto___57785 = (0);
while(true){
if((i__48240__auto___57785 < len__48239__auto___57784)){
args57776.push((arguments[i__48240__auto___57785]));

var G__57786 = (i__48240__auto___57785 + (1));
i__48240__auto___57785 = G__57786;
continue;
} else {
}
break;
}

var G__57783 = args57776.length;
switch (G__57783) {
case 3:
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__48258__auto__ = (new cljs.core.IndexedSeq(args57776.slice((4)),(0),null));
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__48258__auto__);

}
});

cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__47968__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__47968__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto____$1);
})(),x__47968__auto__);
})(),"(~{} < ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__47968__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__47968__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),more)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
});

cljs.core$macros._LT_.cljs$lang$applyTo = (function (seq57777){
var G__57778 = cljs.core.first.call(null,seq57777);
var seq57777__$1 = cljs.core.next.call(null,seq57777);
var G__57779 = cljs.core.first.call(null,seq57777__$1);
var seq57777__$2 = cljs.core.next.call(null,seq57777__$1);
var G__57780 = cljs.core.first.call(null,seq57777__$2);
var seq57777__$3 = cljs.core.next.call(null,seq57777__$2);
var G__57781 = cljs.core.first.call(null,seq57777__$3);
var seq57777__$4 = cljs.core.next.call(null,seq57777__$3);
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$variadic(G__57778,G__57779,G__57780,G__57781,seq57777__$4);
});

cljs.core$macros._LT_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._LT_.cljs$lang$macro = true;
cljs.core$macros._LT__EQ_ = (function cljs$core$macros$_LT__EQ_(var_args){
var args57788 = [];
var len__48239__auto___57796 = arguments.length;
var i__48240__auto___57797 = (0);
while(true){
if((i__48240__auto___57797 < len__48239__auto___57796)){
args57788.push((arguments[i__48240__auto___57797]));

var G__57798 = (i__48240__auto___57797 + (1));
i__48240__auto___57797 = G__57798;
continue;
} else {
}
break;
}

var G__57795 = args57788.length;
switch (G__57795) {
case 3:
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__48258__auto__ = (new cljs.core.IndexedSeq(args57788.slice((4)),(0),null));
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__48258__auto__);

}
});

cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__47968__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__47968__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto____$1);
})(),x__47968__auto__);
})(),"(~{} <= ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<=","cljs.core$macros/<=",1865244377,null)),(function (){var x__47968__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<=","cljs.core$macros/<=",1865244377,null)),(function (){var x__47968__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),more)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
});

cljs.core$macros._LT__EQ_.cljs$lang$applyTo = (function (seq57789){
var G__57790 = cljs.core.first.call(null,seq57789);
var seq57789__$1 = cljs.core.next.call(null,seq57789);
var G__57791 = cljs.core.first.call(null,seq57789__$1);
var seq57789__$2 = cljs.core.next.call(null,seq57789__$1);
var G__57792 = cljs.core.first.call(null,seq57789__$2);
var seq57789__$3 = cljs.core.next.call(null,seq57789__$2);
var G__57793 = cljs.core.first.call(null,seq57789__$3);
var seq57789__$4 = cljs.core.next.call(null,seq57789__$3);
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__57790,G__57791,G__57792,G__57793,seq57789__$4);
});

cljs.core$macros._LT__EQ_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._LT__EQ_.cljs$lang$macro = true;
cljs.core$macros._GT_ = (function cljs$core$macros$_GT_(var_args){
var args57800 = [];
var len__48239__auto___57808 = arguments.length;
var i__48240__auto___57809 = (0);
while(true){
if((i__48240__auto___57809 < len__48239__auto___57808)){
args57800.push((arguments[i__48240__auto___57809]));

var G__57810 = (i__48240__auto___57809 + (1));
i__48240__auto___57809 = G__57810;
continue;
} else {
}
break;
}

var G__57807 = args57800.length;
switch (G__57807) {
case 3:
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__48258__auto__ = (new cljs.core.IndexedSeq(args57800.slice((4)),(0),null));
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__48258__auto__);

}
});

cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__47968__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__47968__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto____$1);
})(),x__47968__auto__);
})(),"(~{} > ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros",">","cljs.core$macros/>",1703297853,null)),(function (){var x__47968__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros",">","cljs.core$macros/>",1703297853,null)),(function (){var x__47968__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),more)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
});

cljs.core$macros._GT_.cljs$lang$applyTo = (function (seq57801){
var G__57802 = cljs.core.first.call(null,seq57801);
var seq57801__$1 = cljs.core.next.call(null,seq57801);
var G__57803 = cljs.core.first.call(null,seq57801__$1);
var seq57801__$2 = cljs.core.next.call(null,seq57801__$1);
var G__57804 = cljs.core.first.call(null,seq57801__$2);
var seq57801__$3 = cljs.core.next.call(null,seq57801__$2);
var G__57805 = cljs.core.first.call(null,seq57801__$3);
var seq57801__$4 = cljs.core.next.call(null,seq57801__$3);
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$variadic(G__57802,G__57803,G__57804,G__57805,seq57801__$4);
});

cljs.core$macros._GT_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._GT_.cljs$lang$macro = true;
cljs.core$macros._GT__EQ_ = (function cljs$core$macros$_GT__EQ_(var_args){
var args57812 = [];
var len__48239__auto___57820 = arguments.length;
var i__48240__auto___57821 = (0);
while(true){
if((i__48240__auto___57821 < len__48239__auto___57820)){
args57812.push((arguments[i__48240__auto___57821]));

var G__57822 = (i__48240__auto___57821 + (1));
i__48240__auto___57821 = G__57822;
continue;
} else {
}
break;
}

var G__57819 = args57812.length;
switch (G__57819) {
case 3:
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__48258__auto__ = (new cljs.core.IndexedSeq(args57812.slice((4)),(0),null));
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__48258__auto__);

}
});

cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__47968__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__47968__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto____$1);
})(),x__47968__auto__);
})(),"(~{} >= ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros",">=","cljs.core$macros/>=",527849062,null)),(function (){var x__47968__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros",">=","cljs.core$macros/>=",527849062,null)),(function (){var x__47968__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),more)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
});

cljs.core$macros._GT__EQ_.cljs$lang$applyTo = (function (seq57813){
var G__57814 = cljs.core.first.call(null,seq57813);
var seq57813__$1 = cljs.core.next.call(null,seq57813);
var G__57815 = cljs.core.first.call(null,seq57813__$1);
var seq57813__$2 = cljs.core.next.call(null,seq57813__$1);
var G__57816 = cljs.core.first.call(null,seq57813__$2);
var seq57813__$3 = cljs.core.next.call(null,seq57813__$2);
var G__57817 = cljs.core.first.call(null,seq57813__$3);
var seq57813__$4 = cljs.core.next.call(null,seq57813__$3);
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__57814,G__57815,G__57816,G__57817,seq57813__$4);
});

cljs.core$macros._GT__EQ_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._GT__EQ_.cljs$lang$macro = true;
cljs.core$macros._EQ__EQ_ = (function cljs$core$macros$_EQ__EQ_(var_args){
var args57824 = [];
var len__48239__auto___57832 = arguments.length;
var i__48240__auto___57833 = (0);
while(true){
if((i__48240__auto___57833 < len__48239__auto___57832)){
args57824.push((arguments[i__48240__auto___57833]));

var G__57834 = (i__48240__auto___57833 + (1));
i__48240__auto___57833 = G__57834;
continue;
} else {
}
break;
}

var G__57831 = args57824.length;
switch (G__57831) {
case 3:
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__48258__auto__ = (new cljs.core.IndexedSeq(args57824.slice((4)),(0),null));
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__48258__auto__);

}
});

cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__47968__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__47968__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto____$1);
})(),x__47968__auto__);
})(),"(~{} === ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","==","cljs.core$macros/==",-818551413,null)),(function (){var x__47968__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","==","cljs.core$macros/==",-818551413,null)),(function (){var x__47968__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),more)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
});

cljs.core$macros._EQ__EQ_.cljs$lang$applyTo = (function (seq57825){
var G__57826 = cljs.core.first.call(null,seq57825);
var seq57825__$1 = cljs.core.next.call(null,seq57825);
var G__57827 = cljs.core.first.call(null,seq57825__$1);
var seq57825__$2 = cljs.core.next.call(null,seq57825__$1);
var G__57828 = cljs.core.first.call(null,seq57825__$2);
var seq57825__$3 = cljs.core.next.call(null,seq57825__$2);
var G__57829 = cljs.core.first.call(null,seq57825__$3);
var seq57825__$4 = cljs.core.next.call(null,seq57825__$3);
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__57826,G__57827,G__57828,G__57829,seq57825__$4);
});

cljs.core$macros._EQ__EQ_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._EQ__EQ_.cljs$lang$macro = true;
cljs.core$macros.dec = (function cljs$core$macros$dec(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__47968__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)))));
});

cljs.core$macros.dec.cljs$lang$macro = true;
cljs.core$macros.inc = (function cljs$core$macros$inc(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),(function (){var x__47968__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)))));
});

cljs.core$macros.inc.cljs$lang$macro = true;
cljs.core$macros.zero_QMARK_ = (function cljs$core$macros$zero_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","==","cljs.core$macros/==",-818551413,null)),(function (){var x__47968__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)))));
});

cljs.core$macros.zero_QMARK_.cljs$lang$macro = true;
cljs.core$macros.pos_QMARK_ = (function cljs$core$macros$pos_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros",">","cljs.core$macros/>",1703297853,null)),(function (){var x__47968__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)))));
});

cljs.core$macros.pos_QMARK_.cljs$lang$macro = true;
cljs.core$macros.neg_QMARK_ = (function cljs$core$macros$neg_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__47968__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)))));
});

cljs.core$macros.neg_QMARK_.cljs$lang$macro = true;
cljs.core$macros.max = (function cljs$core$macros$max(var_args){
var args57838 = [];
var len__48239__auto___57846 = arguments.length;
var i__48240__auto___57847 = (0);
while(true){
if((i__48240__auto___57847 < len__48239__auto___57846)){
args57838.push((arguments[i__48240__auto___57847]));

var G__57848 = (i__48240__auto___57847 + (1));
i__48240__auto___57847 = G__57848;
continue;
} else {
}
break;
}

var G__57845 = args57838.length;
switch (G__57845) {
case 3:
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__48258__auto__ = (new cljs.core.IndexedSeq(args57838.slice((4)),(0),null));
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__48258__auto__);

}
});

cljs.core$macros.max.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.max.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__47968__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__57836__auto__","x__57836__auto__",172262695,null)),(function (){var x__47968__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__57837__auto__","y__57837__auto__",948882748,null)),(function (){var x__47968__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"((~{} > ~{}) ? ~{} : ~{})"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__57836__auto__","x__57836__auto__",172262695,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__57837__auto__","y__57837__auto__",948882748,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__57836__auto__","x__57836__auto__",172262695,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__57837__auto__","y__57837__auto__",948882748,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
});

cljs.core$macros.max.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","max","cljs.core$macros/max",1176150699,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","max","cljs.core$macros/max",1176150699,null)),(function (){var x__47968__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),more)));
});

cljs.core$macros.max.cljs$lang$applyTo = (function (seq57839){
var G__57840 = cljs.core.first.call(null,seq57839);
var seq57839__$1 = cljs.core.next.call(null,seq57839);
var G__57841 = cljs.core.first.call(null,seq57839__$1);
var seq57839__$2 = cljs.core.next.call(null,seq57839__$1);
var G__57842 = cljs.core.first.call(null,seq57839__$2);
var seq57839__$3 = cljs.core.next.call(null,seq57839__$2);
var G__57843 = cljs.core.first.call(null,seq57839__$3);
var seq57839__$4 = cljs.core.next.call(null,seq57839__$3);
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$variadic(G__57840,G__57841,G__57842,G__57843,seq57839__$4);
});

cljs.core$macros.max.cljs$lang$maxFixedArity = (4);


cljs.core$macros.max.cljs$lang$macro = true;
cljs.core$macros.min = (function cljs$core$macros$min(var_args){
var args57852 = [];
var len__48239__auto___57860 = arguments.length;
var i__48240__auto___57861 = (0);
while(true){
if((i__48240__auto___57861 < len__48239__auto___57860)){
args57852.push((arguments[i__48240__auto___57861]));

var G__57862 = (i__48240__auto___57861 + (1));
i__48240__auto___57861 = G__57862;
continue;
} else {
}
break;
}

var G__57859 = args57852.length;
switch (G__57859) {
case 3:
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__48258__auto__ = (new cljs.core.IndexedSeq(args57852.slice((4)),(0),null));
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__48258__auto__);

}
});

cljs.core$macros.min.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.min.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__47968__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__57850__auto__","x__57850__auto__",1250270886,null)),(function (){var x__47968__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__57851__auto__","y__57851__auto__",-169622790,null)),(function (){var x__47968__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"((~{} < ~{}) ? ~{} : ~{})"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__57850__auto__","x__57850__auto__",1250270886,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__57851__auto__","y__57851__auto__",-169622790,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__57850__auto__","x__57850__auto__",1250270886,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__57851__auto__","y__57851__auto__",-169622790,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
});

cljs.core$macros.min.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","min","cljs.core$macros/min",1499775161,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","min","cljs.core$macros/min",1499775161,null)),(function (){var x__47968__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),more)));
});

cljs.core$macros.min.cljs$lang$applyTo = (function (seq57853){
var G__57854 = cljs.core.first.call(null,seq57853);
var seq57853__$1 = cljs.core.next.call(null,seq57853);
var G__57855 = cljs.core.first.call(null,seq57853__$1);
var seq57853__$2 = cljs.core.next.call(null,seq57853__$1);
var G__57856 = cljs.core.first.call(null,seq57853__$2);
var seq57853__$3 = cljs.core.next.call(null,seq57853__$2);
var G__57857 = cljs.core.first.call(null,seq57853__$3);
var seq57853__$4 = cljs.core.next.call(null,seq57853__$3);
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$variadic(G__57854,G__57855,G__57856,G__57857,seq57853__$4);
});

cljs.core$macros.min.cljs$lang$maxFixedArity = (4);


cljs.core$macros.min.cljs$lang$macro = true;
cljs.core$macros.js_mod = (function cljs$core$macros$js_mod(_AMPERSAND_form,_AMPERSAND_env,num,div){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__47968__auto__ = num;
return cljs.core._conj.call(null,(function (){var x__47968__auto____$1 = div;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto____$1);
})(),x__47968__auto__);
})(),"(~{} % ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.js_mod.cljs$lang$macro = true;
cljs.core$macros.bit_not = (function cljs$core$macros$bit_not(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__47968__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),"(~ ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_not.cljs$lang$macro = true;
cljs.core$macros.bit_and = (function cljs$core$macros$bit_and(var_args){
var args57864 = [];
var len__48239__auto___57872 = arguments.length;
var i__48240__auto___57873 = (0);
while(true){
if((i__48240__auto___57873 < len__48239__auto___57872)){
args57864.push((arguments[i__48240__auto___57873]));

var G__57874 = (i__48240__auto___57873 + (1));
i__48240__auto___57873 = G__57874;
continue;
} else {
}
break;
}

var G__57871 = args57864.length;
switch (G__57871) {
case 4:
return cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__48258__auto__ = (new cljs.core.IndexedSeq(args57864.slice((4)),(0),null));
return cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__48258__auto__);

}
});

cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__47968__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__47968__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto____$1);
})(),x__47968__auto__);
})(),"(~{} & ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-and","cljs.core$macros/bit-and",-1069060797,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-and","cljs.core$macros/bit-and",-1069060797,null)),(function (){var x__47968__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),more)));
});

cljs.core$macros.bit_and.cljs$lang$applyTo = (function (seq57865){
var G__57866 = cljs.core.first.call(null,seq57865);
var seq57865__$1 = cljs.core.next.call(null,seq57865);
var G__57867 = cljs.core.first.call(null,seq57865__$1);
var seq57865__$2 = cljs.core.next.call(null,seq57865__$1);
var G__57868 = cljs.core.first.call(null,seq57865__$2);
var seq57865__$3 = cljs.core.next.call(null,seq57865__$2);
var G__57869 = cljs.core.first.call(null,seq57865__$3);
var seq57865__$4 = cljs.core.next.call(null,seq57865__$3);
return cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$variadic(G__57866,G__57867,G__57868,G__57869,seq57865__$4);
});

cljs.core$macros.bit_and.cljs$lang$maxFixedArity = (4);


cljs.core$macros.bit_and.cljs$lang$macro = true;
cljs.core$macros.unsafe_bit_and = (function cljs$core$macros$unsafe_bit_and(var_args){
var args57876 = [];
var len__48239__auto___57884 = arguments.length;
var i__48240__auto___57885 = (0);
while(true){
if((i__48240__auto___57885 < len__48239__auto___57884)){
args57876.push((arguments[i__48240__auto___57885]));

var G__57886 = (i__48240__auto___57885 + (1));
i__48240__auto___57885 = G__57886;
continue;
} else {
}
break;
}

var G__57883 = args57876.length;
switch (G__57883) {
case 4:
return cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__48258__auto__ = (new cljs.core.IndexedSeq(args57876.slice((4)),(0),null));
return cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__48258__auto__);

}
});

cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__47968__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__47968__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto____$1);
})(),x__47968__auto__);
})(),"(~{} & ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__47968__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),more)));
});

cljs.core$macros.unsafe_bit_and.cljs$lang$applyTo = (function (seq57877){
var G__57878 = cljs.core.first.call(null,seq57877);
var seq57877__$1 = cljs.core.next.call(null,seq57877);
var G__57879 = cljs.core.first.call(null,seq57877__$1);
var seq57877__$2 = cljs.core.next.call(null,seq57877__$1);
var G__57880 = cljs.core.first.call(null,seq57877__$2);
var seq57877__$3 = cljs.core.next.call(null,seq57877__$2);
var G__57881 = cljs.core.first.call(null,seq57877__$3);
var seq57877__$4 = cljs.core.next.call(null,seq57877__$3);
return cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$variadic(G__57878,G__57879,G__57880,G__57881,seq57877__$4);
});

cljs.core$macros.unsafe_bit_and.cljs$lang$maxFixedArity = (4);


cljs.core$macros.unsafe_bit_and.cljs$lang$macro = true;
cljs.core$macros.bit_or = (function cljs$core$macros$bit_or(var_args){
var args57888 = [];
var len__48239__auto___57896 = arguments.length;
var i__48240__auto___57897 = (0);
while(true){
if((i__48240__auto___57897 < len__48239__auto___57896)){
args57888.push((arguments[i__48240__auto___57897]));

var G__57898 = (i__48240__auto___57897 + (1));
i__48240__auto___57897 = G__57898;
continue;
} else {
}
break;
}

var G__57895 = args57888.length;
switch (G__57895) {
case 4:
return cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__48258__auto__ = (new cljs.core.IndexedSeq(args57888.slice((4)),(0),null));
return cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__48258__auto__);

}
});

cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__47968__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__47968__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto____$1);
})(),x__47968__auto__);
})(),"(~{} | ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-or","cljs.core$macros/bit-or",1463236165,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-or","cljs.core$macros/bit-or",1463236165,null)),(function (){var x__47968__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),more)));
});

cljs.core$macros.bit_or.cljs$lang$applyTo = (function (seq57889){
var G__57890 = cljs.core.first.call(null,seq57889);
var seq57889__$1 = cljs.core.next.call(null,seq57889);
var G__57891 = cljs.core.first.call(null,seq57889__$1);
var seq57889__$2 = cljs.core.next.call(null,seq57889__$1);
var G__57892 = cljs.core.first.call(null,seq57889__$2);
var seq57889__$3 = cljs.core.next.call(null,seq57889__$2);
var G__57893 = cljs.core.first.call(null,seq57889__$3);
var seq57889__$4 = cljs.core.next.call(null,seq57889__$3);
return cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$variadic(G__57890,G__57891,G__57892,G__57893,seq57889__$4);
});

cljs.core$macros.bit_or.cljs$lang$maxFixedArity = (4);


cljs.core$macros.bit_or.cljs$lang$macro = true;
cljs.core$macros.int$ = (function cljs$core$macros$int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-or","cljs.core$macros/bit-or",1463236165,null)),(function (){var x__47968__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)))));
});

cljs.core$macros.int$.cljs$lang$macro = true;
cljs.core$macros.bit_xor = (function cljs$core$macros$bit_xor(var_args){
var args57900 = [];
var len__48239__auto___57908 = arguments.length;
var i__48240__auto___57909 = (0);
while(true){
if((i__48240__auto___57909 < len__48239__auto___57908)){
args57900.push((arguments[i__48240__auto___57909]));

var G__57910 = (i__48240__auto___57909 + (1));
i__48240__auto___57909 = G__57910;
continue;
} else {
}
break;
}

var G__57907 = args57900.length;
switch (G__57907) {
case 4:
return cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__48258__auto__ = (new cljs.core.IndexedSeq(args57900.slice((4)),(0),null));
return cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__48258__auto__);

}
});

cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__47968__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__47968__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto____$1);
})(),x__47968__auto__);
})(),"(~{} ^ ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-xor","cljs.core$macros/bit-xor",1284619191,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-xor","cljs.core$macros/bit-xor",1284619191,null)),(function (){var x__47968__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),more)));
});

cljs.core$macros.bit_xor.cljs$lang$applyTo = (function (seq57901){
var G__57902 = cljs.core.first.call(null,seq57901);
var seq57901__$1 = cljs.core.next.call(null,seq57901);
var G__57903 = cljs.core.first.call(null,seq57901__$1);
var seq57901__$2 = cljs.core.next.call(null,seq57901__$1);
var G__57904 = cljs.core.first.call(null,seq57901__$2);
var seq57901__$3 = cljs.core.next.call(null,seq57901__$2);
var G__57905 = cljs.core.first.call(null,seq57901__$3);
var seq57901__$4 = cljs.core.next.call(null,seq57901__$3);
return cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$variadic(G__57902,G__57903,G__57904,G__57905,seq57901__$4);
});

cljs.core$macros.bit_xor.cljs$lang$maxFixedArity = (4);


cljs.core$macros.bit_xor.cljs$lang$macro = true;
cljs.core$macros.bit_and_not = (function cljs$core$macros$bit_and_not(var_args){
var args57912 = [];
var len__48239__auto___57920 = arguments.length;
var i__48240__auto___57921 = (0);
while(true){
if((i__48240__auto___57921 < len__48239__auto___57920)){
args57912.push((arguments[i__48240__auto___57921]));

var G__57922 = (i__48240__auto___57921 + (1));
i__48240__auto___57921 = G__57922;
continue;
} else {
}
break;
}

var G__57919 = args57912.length;
switch (G__57919) {
case 4:
return cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__48258__auto__ = (new cljs.core.IndexedSeq(args57912.slice((4)),(0),null));
return cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__48258__auto__);

}
});

cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__47968__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__47968__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto____$1);
})(),x__47968__auto__);
})(),"(~{} & ~~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-and-not","cljs.core$macros/bit-and-not",-537076037,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-and-not","cljs.core$macros/bit-and-not",-537076037,null)),(function (){var x__47968__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),more)));
});

cljs.core$macros.bit_and_not.cljs$lang$applyTo = (function (seq57913){
var G__57914 = cljs.core.first.call(null,seq57913);
var seq57913__$1 = cljs.core.next.call(null,seq57913);
var G__57915 = cljs.core.first.call(null,seq57913__$1);
var seq57913__$2 = cljs.core.next.call(null,seq57913__$1);
var G__57916 = cljs.core.first.call(null,seq57913__$2);
var seq57913__$3 = cljs.core.next.call(null,seq57913__$2);
var G__57917 = cljs.core.first.call(null,seq57913__$3);
var seq57913__$4 = cljs.core.next.call(null,seq57913__$3);
return cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$variadic(G__57914,G__57915,G__57916,G__57917,seq57913__$4);
});

cljs.core$macros.bit_and_not.cljs$lang$maxFixedArity = (4);


cljs.core$macros.bit_and_not.cljs$lang$macro = true;
cljs.core$macros.bit_clear = (function cljs$core$macros$bit_clear(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__47968__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__47968__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto____$1);
})(),x__47968__auto__);
})(),"(~{} & ~(1 << ~{}))"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_clear.cljs$lang$macro = true;
cljs.core$macros.bit_flip = (function cljs$core$macros$bit_flip(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__47968__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__47968__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto____$1);
})(),x__47968__auto__);
})(),"(~{} ^ (1 << ~{}))"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_flip.cljs$lang$macro = true;
cljs.core$macros.bit_test = (function cljs$core$macros$bit_test(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__47968__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__47968__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto____$1);
})(),x__47968__auto__);
})(),"((~{} & (1 << ~{})) != 0)"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.bit_test.cljs$lang$macro = true;
cljs.core$macros.bit_shift_left = (function cljs$core$macros$bit_shift_left(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__47968__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__47968__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto____$1);
})(),x__47968__auto__);
})(),"(~{} << ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_shift_left.cljs$lang$macro = true;
cljs.core$macros.bit_shift_right = (function cljs$core$macros$bit_shift_right(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__47968__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__47968__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto____$1);
})(),x__47968__auto__);
})(),"(~{} >> ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_shift_right.cljs$lang$macro = true;
cljs.core$macros.bit_shift_right_zero_fill = (function cljs$core$macros$bit_shift_right_zero_fill(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__47968__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__47968__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto____$1);
})(),x__47968__auto__);
})(),"(~{} >>> ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_shift_right_zero_fill.cljs$lang$macro = true;
cljs.core$macros.unsigned_bit_shift_right = (function cljs$core$macros$unsigned_bit_shift_right(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__47968__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__47968__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto____$1);
})(),x__47968__auto__);
})(),"(~{} >>> ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.unsigned_bit_shift_right.cljs$lang$macro = true;
cljs.core$macros.bit_set = (function cljs$core$macros$bit_set(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__47968__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__47968__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto____$1);
})(),x__47968__auto__);
})(),"(~{} | (1 << ~{}))"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_set.cljs$lang$macro = true;
cljs.core$macros.mask = (function cljs$core$macros$mask(_AMPERSAND_form,_AMPERSAND_env,hash,shift){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__47968__auto__ = hash;
return cljs.core._conj.call(null,(function (){var x__47968__auto____$1 = shift;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto____$1);
})(),x__47968__auto__);
})(),"((~{} >>> ~{}) & 0x01f)"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.mask.cljs$lang$macro = true;
cljs.core$macros.bitpos = (function cljs$core$macros$bitpos(_AMPERSAND_form,_AMPERSAND_env,hash,shift){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","mask","cljs.core$macros/mask",1575319768,null)),(function (){var x__47968__auto__ = hash;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = shift;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),"(1 << ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bitpos.cljs$lang$macro = true;
cljs.core$macros.caching_hash = (function cljs$core$macros$caching_hash(_AMPERSAND_form,_AMPERSAND_env,coll,hash_fn,hash_key){
if((hash_key instanceof cljs.core.Symbol)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("hash-key is substituted twice"),cljs.core.str("\n"),cljs.core.str("(clojure.core/symbol? hash-key)")].join('')));
}

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__47968__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__57924__auto__","h__57924__auto__",-1453017946,null)),(function (){var x__47968__auto__ = hash_key;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__57924__auto__","h__57924__auto__",-1453017946,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__57924__auto__","h__57924__auto__",-1453017946,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__47968__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__57924__auto__","h__57924__auto__",-1453017946,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__47968__auto__ = hash_fn;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = coll;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__47968__auto__ = hash_key;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__57924__auto__","h__57924__auto__",-1453017946,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__57924__auto__","h__57924__auto__",-1453017946,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
});

cljs.core$macros.caching_hash.cljs$lang$macro = true;
cljs.core$macros.do_curried = (function cljs$core$macros$do_curried(name,doc,meta,args,body){
var cargs = cljs.core.vec.call(null,cljs.core.butlast.call(null,args));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null)),(function (){var x__47968__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = doc;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = meta;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__47968__auto__ = cargs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__47968__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__57925__auto__","x__57925__auto__",-227037695,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__47968__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),cargs,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__57925__auto__","x__57925__auto__",-227037695,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__47968__auto__ = args;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
});
/**
 * Builds another arity of the fn that returns a fn awaiting the last
 *   param
 */
cljs.core$macros.defcurried = (function cljs$core$macros$defcurried(var_args){
var args__48246__auto__ = [];
var len__48239__auto___57933 = arguments.length;
var i__48240__auto___57934 = (0);
while(true){
if((i__48240__auto___57934 < len__48239__auto___57933)){
args__48246__auto__.push((arguments[i__48240__auto___57934]));

var G__57935 = (i__48240__auto___57934 + (1));
i__48240__auto___57934 = G__57935;
continue;
} else {
}
break;
}

var argseq__48247__auto__ = ((((6) < args__48246__auto__.length))?(new cljs.core.IndexedSeq(args__48246__auto__.slice((6)),(0),null)):null);
return cljs.core$macros.defcurried.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),argseq__48247__auto__);
});

cljs.core$macros.defcurried.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,doc,meta,args,body){
return cljs.core$macros.do_curried.call(null,name,doc,meta,args,body);
});

cljs.core$macros.defcurried.cljs$lang$maxFixedArity = (6);

cljs.core$macros.defcurried.cljs$lang$applyTo = (function (seq57926){
var G__57927 = cljs.core.first.call(null,seq57926);
var seq57926__$1 = cljs.core.next.call(null,seq57926);
var G__57928 = cljs.core.first.call(null,seq57926__$1);
var seq57926__$2 = cljs.core.next.call(null,seq57926__$1);
var G__57929 = cljs.core.first.call(null,seq57926__$2);
var seq57926__$3 = cljs.core.next.call(null,seq57926__$2);
var G__57930 = cljs.core.first.call(null,seq57926__$3);
var seq57926__$4 = cljs.core.next.call(null,seq57926__$3);
var G__57931 = cljs.core.first.call(null,seq57926__$4);
var seq57926__$5 = cljs.core.next.call(null,seq57926__$4);
var G__57932 = cljs.core.first.call(null,seq57926__$5);
var seq57926__$6 = cljs.core.next.call(null,seq57926__$5);
return cljs.core$macros.defcurried.cljs$core$IFn$_invoke$arity$variadic(G__57927,G__57928,G__57929,G__57930,G__57931,G__57932,seq57926__$6);
});


cljs.core$macros.defcurried.cljs$lang$macro = true;
cljs.core$macros.do_rfn = (function cljs$core$macros$do_rfn(f1,k,fkv){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__47968__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__47968__auto__ = f1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = clojure.walk.postwalk.call(null,(function (p1__57936_SHARP_){
if(cljs.core.sequential_QMARK_.call(null,p1__57936_SHARP_)){
return ((cljs.core.vector_QMARK_.call(null,p1__57936_SHARP_))?cljs.core.vec:cljs.core.identity).call(null,cljs.core.remove.call(null,cljs.core.PersistentHashSet.fromArray([k], true),p1__57936_SHARP_));
} else {
return p1__57936_SHARP_;
}
}),fkv);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = fkv;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
});
/**
 * Builds 3-arity reducing fn given names of wrapped fn and key, and k/v impl.
 */
cljs.core$macros.rfn = (function cljs$core$macros$rfn(_AMPERSAND_form,_AMPERSAND_env,p__57937,fkv){
var vec__57941 = p__57937;
var f1 = cljs.core.nth.call(null,vec__57941,(0),null);
var k = cljs.core.nth.call(null,vec__57941,(1),null);
return cljs.core$macros.do_rfn.call(null,f1,k,fkv);
});

cljs.core$macros.rfn.cljs$lang$macro = true;
cljs.core$macros.protocol_prefix = (function cljs$core$macros$protocol_prefix(psym){
return [cljs.core.str([cljs.core.str(psym)].join('').replace((new RegExp("\\.","g")),"$").replace("/","$")),cljs.core.str("$")].join('');
});
cljs.core$macros.base_type = new cljs.core.PersistentArrayMap(null, 8, [null,"null",new cljs.core.Symbol(null,"object","object",-1179821820,null),"object",new cljs.core.Symbol(null,"string","string",-349010059,null),"string",new cljs.core.Symbol(null,"number","number",-1084057331,null),"number",new cljs.core.Symbol(null,"array","array",-440182315,null),"array",new cljs.core.Symbol(null,"function","function",-486723946,null),"function",new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),"boolean",new cljs.core.Symbol(null,"default","default",-347290801,null),"_"], null);
cljs.core$macros.js_base_type = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Symbol("js","Boolean","js/Boolean",1661145260,null),"boolean",new cljs.core.Symbol("js","String","js/String",-2070054036,null),"string",new cljs.core.Symbol("js","Array","js/Array",-423508366,null),"array",new cljs.core.Symbol("js","Object","js/Object",61215323,null),"object",new cljs.core.Symbol("js","Number","js/Number",-508133572,null),"number",new cljs.core.Symbol("js","Function","js/Function",-749892063,null),"function"], null);
/**
 * reify is a macro with the following structure:
 * 
 *  (reify options* specs*)
 * 
 *   Currently there are no options.
 * 
 *   Each spec consists of the protocol name followed by zero
 *   or more method bodies:
 * 
 *   protocol
 *   (methodName [args+] body)*
 * 
 *   Methods should be supplied for all methods of the desired
 *   protocol(s). You can also define overrides for Object methods. Note that
 *   the first parameter must be supplied to correspond to the target object
 *   ('this' in JavaScript parlance). Note also that recur calls
 *   to the method head should *not* pass the target object, it will be supplied
 *   automatically and can not be substituted.
 * 
 *   recur works to method heads The method bodies of reify are lexical
 *   closures, and can refer to the surrounding local scope:
 * 
 *   (str (let [f "foo"]
 *     (reify Object
 *       (toString [this] f))))
 *   == "foo"
 * 
 *   (seq (let [f "foo"]
 *     (reify ISeqable
 *       (-seq [this] (-seq f)))))
 *   == (\f \o \o))
 * 
 *   reify always implements IMeta and IWithMeta and transfers meta
 *   data of the form to the created object.
 * 
 *   (meta ^{:k :v} (reify Object (toString [this] "foo")))
 *   == {:k :v}
 */
cljs.core$macros.reify = (function cljs$core$macros$reify(var_args){
var args__48246__auto__ = [];
var len__48239__auto___57947 = arguments.length;
var i__48240__auto___57948 = (0);
while(true){
if((i__48240__auto___57948 < len__48239__auto___57947)){
args__48246__auto__.push((arguments[i__48240__auto___57948]));

var G__57949 = (i__48240__auto___57948 + (1));
i__48240__auto___57948 = G__57949;
continue;
} else {
}
break;
}

var argseq__48247__auto__ = ((((2) < args__48246__auto__.length))?(new cljs.core.IndexedSeq(args__48246__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.reify.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__48247__auto__);
});

cljs.core$macros.reify.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,impls){
var t = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,[cljs.core.str("t_"),cljs.core.str(clojure.string.replace.call(null,[cljs.core.str(cljs.core.munge.call(null,cljs.analyzer._STAR_cljs_ns_STAR_))].join(''),".","$"))].join('')),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"anonymous","anonymous",447897231),true], null));
var meta_sym = cljs.core.gensym.call(null,"meta");
var this_sym = cljs.core.gensym.call(null,"_");
var locals = cljs.core.keys.call(null,new cljs.core.Keyword(null,"locals","locals",535295783).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
var ns = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
var munge = cljs.compiler.munge;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-not","cljs.core$macros/when-not",-764302244,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","exists?","cljs.core$macros/exists?",-1828590389,null)),(function (){var x__47968__auto__ = cljs.core.symbol.call(null,[cljs.core.str(ns)].join(''),[cljs.core.str(t)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","deftype","cljs.core$macros/deftype",1799045688,null)),(function (){var x__47968__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,locals,(function (){var x__47968__auto__ = meta_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","IWithMeta","cljs.core/IWithMeta",-1981666051,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-with-meta","-with-meta",-1610713823,null)),(function (){var x__47968__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__47968__auto__ = this_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = meta_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__47968__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),locals,(function (){var x__47968__auto__ = meta_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","IMeta","cljs.core/IMeta",-1459057517,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-meta","-meta",494863156,null)),(function (){var x__47968__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__47968__auto__ = this_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = meta_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),impls)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__47968__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),locals,(function (){var x__47968__auto__ = cljs.analyzer.elide_reader_meta.call(null,cljs.core.meta.call(null,_AMPERSAND_form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
});

cljs.core$macros.reify.cljs$lang$maxFixedArity = (2);

cljs.core$macros.reify.cljs$lang$applyTo = (function (seq57944){
var G__57945 = cljs.core.first.call(null,seq57944);
var seq57944__$1 = cljs.core.next.call(null,seq57944);
var G__57946 = cljs.core.first.call(null,seq57944__$1);
var seq57944__$2 = cljs.core.next.call(null,seq57944__$1);
return cljs.core$macros.reify.cljs$core$IFn$_invoke$arity$variadic(G__57945,G__57946,seq57944__$2);
});


cljs.core$macros.reify.cljs$lang$macro = true;
/**
 * Identical to reify but mutates its first argument.
 */
cljs.core$macros.specify_BANG_ = (function cljs$core$macros$specify_BANG_(var_args){
var args__48246__auto__ = [];
var len__48239__auto___57954 = arguments.length;
var i__48240__auto___57955 = (0);
while(true){
if((i__48240__auto___57955 < len__48239__auto___57954)){
args__48246__auto__.push((arguments[i__48240__auto___57955]));

var G__57956 = (i__48240__auto___57955 + (1));
i__48240__auto___57955 = G__57956;
continue;
} else {
}
break;
}

var argseq__48247__auto__ = ((((3) < args__48246__auto__.length))?(new cljs.core.IndexedSeq(args__48246__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.specify_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__48247__auto__);
});

cljs.core$macros.specify_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,impls){
var x = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"x"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"extend","extend",1836484006),new cljs.core.Keyword(null,"instance","instance",-2121349050)], null));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__47968__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__47968__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","extend-type","cljs.core$macros/extend-type",1713295201,null)),(function (){var x__47968__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),impls)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
});

cljs.core$macros.specify_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.specify_BANG_.cljs$lang$applyTo = (function (seq57950){
var G__57951 = cljs.core.first.call(null,seq57950);
var seq57950__$1 = cljs.core.next.call(null,seq57950);
var G__57952 = cljs.core.first.call(null,seq57950__$1);
var seq57950__$2 = cljs.core.next.call(null,seq57950__$1);
var G__57953 = cljs.core.first.call(null,seq57950__$2);
var seq57950__$3 = cljs.core.next.call(null,seq57950__$2);
return cljs.core$macros.specify_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__57951,G__57952,G__57953,seq57950__$3);
});


cljs.core$macros.specify_BANG_.cljs$lang$macro = true;
/**
 * Identical to specify! but does not mutate its first argument. The first
 *   argument must be an ICloneable instance.
 */
cljs.core$macros.specify = (function cljs$core$macros$specify(var_args){
var args__48246__auto__ = [];
var len__48239__auto___57961 = arguments.length;
var i__48240__auto___57962 = (0);
while(true){
if((i__48240__auto___57962 < len__48239__auto___57961)){
args__48246__auto__.push((arguments[i__48240__auto___57962]));

var G__57963 = (i__48240__auto___57962 + (1));
i__48240__auto___57962 = G__57963;
continue;
} else {
}
break;
}

var argseq__48247__auto__ = ((((3) < args__48246__auto__.length))?(new cljs.core.IndexedSeq(args__48246__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.specify.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__48247__auto__);
});

cljs.core$macros.specify.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,impls){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","specify!","cljs.core/specify!",-585401629,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","clone","cljs.core/clone",1417120092,null)),(function (){var x__47968__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),impls)));
});

cljs.core$macros.specify.cljs$lang$maxFixedArity = (3);

cljs.core$macros.specify.cljs$lang$applyTo = (function (seq57957){
var G__57958 = cljs.core.first.call(null,seq57957);
var seq57957__$1 = cljs.core.next.call(null,seq57957);
var G__57959 = cljs.core.first.call(null,seq57957__$1);
var seq57957__$2 = cljs.core.next.call(null,seq57957__$1);
var G__57960 = cljs.core.first.call(null,seq57957__$2);
var seq57957__$3 = cljs.core.next.call(null,seq57957__$2);
return cljs.core$macros.specify.cljs$core$IFn$_invoke$arity$variadic(G__57958,G__57959,G__57960,seq57957__$3);
});


cljs.core$macros.specify.cljs$lang$macro = true;
cljs.core$macros.js_this = (function cljs$core$macros$js_this(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"this"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.js_this.cljs$lang$macro = true;
/**
 * Defines a scope where JavaScript's implicit "this" is bound to the name provided.
 */
cljs.core$macros.this_as = (function cljs$core$macros$this_as(var_args){
var args__48246__auto__ = [];
var len__48239__auto___57968 = arguments.length;
var i__48240__auto___57969 = (0);
while(true){
if((i__48240__auto___57969 < len__48239__auto___57968)){
args__48246__auto__.push((arguments[i__48240__auto___57969]));

var G__57970 = (i__48240__auto___57969 + (1));
i__48240__auto___57969 = G__57970;
continue;
} else {
}
break;
}

var argseq__48247__auto__ = ((((3) < args__48246__auto__.length))?(new cljs.core.IndexedSeq(args__48246__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.this_as.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__48247__auto__);
});

cljs.core$macros.this_as.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__47968__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__47968__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-this","cljs.core$macros/js-this",353597180,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),body)));
});

cljs.core$macros.this_as.cljs$lang$maxFixedArity = (3);

cljs.core$macros.this_as.cljs$lang$applyTo = (function (seq57964){
var G__57965 = cljs.core.first.call(null,seq57964);
var seq57964__$1 = cljs.core.next.call(null,seq57964);
var G__57966 = cljs.core.first.call(null,seq57964__$1);
var seq57964__$2 = cljs.core.next.call(null,seq57964__$1);
var G__57967 = cljs.core.first.call(null,seq57964__$2);
var seq57964__$3 = cljs.core.next.call(null,seq57964__$2);
return cljs.core$macros.this_as.cljs$core$IFn$_invoke$arity$variadic(G__57965,G__57966,G__57967,seq57964__$3);
});


cljs.core$macros.this_as.cljs$lang$macro = true;
cljs.core$macros.to_property = (function cljs$core$macros$to_property(sym){
return cljs.core.symbol.call(null,[cljs.core.str("-"),cljs.core.str(sym)].join(''));
});
cljs.core$macros.warn_and_update_protocol = (function cljs$core$macros$warn_and_update_protocol(p,type,env){
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"Object","Object",61210754,null),p)){
return null;
} else {
var temp__4655__auto__ = cljs.analyzer.resolve_existing_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),p);
if(cljs.core.truth_(temp__4655__auto__)){
var var$ = temp__4655__auto__;
if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol-symbol","protocol-symbol",1279552198).cljs$core$IFn$_invoke$arity$1(var$))){
} else {
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"invalid-protocol-symbol","invalid-protocol-symbol",86246948),env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p], null));
}

if(cljs.core.truth_((function (){var and__47119__auto__ = new cljs.core.Keyword(null,"protocol-deprecated","protocol-deprecated",103233497).cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_warnings_STAR_);
if(cljs.core.truth_(and__47119__auto__)){
var and__47119__auto____$1 = new cljs.core.Keyword(null,"deprecated","deprecated",1498275348).cljs$core$IFn$_invoke$arity$1(var$);
if(cljs.core.truth_(and__47119__auto____$1)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"deprecation-nowarn","deprecation-nowarn",-1762828044).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,p)));
} else {
return and__47119__auto____$1;
}
} else {
return and__47119__auto__;
}
})())){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"protocol-deprecated","protocol-deprecated",103233497),env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p], null));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol-symbol","protocol-symbol",1279552198).cljs$core$IFn$_invoke$arity$1(var$))){
return cljs.core.swap_BANG_.call(null,cljs.env._STAR_compiler_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927)], null),((function (var$,temp__4655__auto__){
return (function (ns){
return cljs.core.update_in.call(null,ns,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(var$),new cljs.core.Keyword(null,"defs","defs",1398449717),cljs.core.symbol.call(null,cljs.core.name.call(null,p)),new cljs.core.Keyword(null,"impls","impls",-1314014853)], null),cljs.core.conj,type);
});})(var$,temp__4655__auto__))
);
} else {
return null;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"undeclared","undeclared",1446667347).cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_warnings_STAR_))){
return cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"undeclared-protocol-symbol","undeclared-protocol-symbol",462882867),env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p], null));
} else {
return null;
}
}
}
});
cljs.core$macros.resolve_var = (function cljs$core$macros$resolve_var(env,sym){
var ret = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),sym));
if(cljs.core.truth_(ret)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Can't resolve: "),cljs.core.str(sym)].join('')),cljs.core.str("\n"),cljs.core.str("ret")].join('')));
}

return ret;
});
cljs.core$macros.__GT_impl_map = (function cljs$core$macros$__GT_impl_map(impls){
var ret = cljs.core.PersistentArrayMap.EMPTY;
var s = impls;
while(true){
if(cljs.core.seq.call(null,s)){
var G__57971 = cljs.core.assoc.call(null,ret,cljs.core.first.call(null,s),cljs.core.take_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,s)));
var G__57972 = cljs.core.drop_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,s));
ret = G__57971;
s = G__57972;
continue;
} else {
return ret;
}
break;
}
});
cljs.core$macros.base_assign_impls = (function cljs$core$macros$base_assign_impls(env,resolve,tsym,type,p__57973){
var vec__57981 = p__57973;
var p = cljs.core.nth.call(null,vec__57981,(0),null);
var sigs = cljs.core.nth.call(null,vec__57981,(1),null);
cljs.core$macros.warn_and_update_protocol.call(null,p,tsym,env);

var psym = resolve.call(null,p);
var pfn_prefix = cljs.core.subs.call(null,[cljs.core.str(psym)].join(''),(0),([cljs.core.str(psym)].join('').indexOf("/") + (1)));
return cljs.core.cons.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aset","cljs.core$macros/aset",-693176374,null)),(function (){var x__47968__auto__ = psym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = type;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true)))),cljs.core.map.call(null,((function (psym,pfn_prefix,vec__57981,p,sigs){
return (function (p__57984){
var vec__57985 = p__57984;
var seq__57986 = cljs.core.seq.call(null,vec__57985);
var first__57987 = cljs.core.first.call(null,seq__57986);
var seq__57986__$1 = cljs.core.next.call(null,seq__57986);
var f = first__57987;
var meths = seq__57986__$1;
var form = vec__57985;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aset","cljs.core$macros/aset",-693176374,null)),(function (){var x__47968__auto__ = cljs.core.symbol.call(null,[cljs.core.str(pfn_prefix),cljs.core.str(f)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = type;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),meths))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
});})(psym,pfn_prefix,vec__57981,p,sigs))
,sigs));
});
if(typeof cljs.core$macros.extend_prefix !== 'undefined'){
} else {
cljs.core$macros.extend_prefix = (function (){var method_table__48059__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__48060__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__48061__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__48062__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__48063__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.core$macros","extend-prefix"),((function (method_table__48059__auto__,prefer_table__48060__auto__,method_cache__48061__auto__,cached_hierarchy__48062__auto__,hierarchy__48063__auto__){
return (function (tsym,sym){
return new cljs.core.Keyword(null,"extend","extend",1836484006).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,tsym));
});})(method_table__48059__auto__,prefer_table__48060__auto__,method_cache__48061__auto__,cached_hierarchy__48062__auto__,hierarchy__48063__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__48063__auto__,method_table__48059__auto__,prefer_table__48060__auto__,method_cache__48061__auto__,cached_hierarchy__48062__auto__));
})();
}
cljs.core._add_method.call(null,cljs.core$macros.extend_prefix,new cljs.core.Keyword(null,"instance","instance",-2121349050),(function (tsym,sym){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"..","..",-300507420,null)),(function (){var x__47968__auto__ = tsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core$macros.to_property.call(null,sym);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
}));
cljs.core._add_method.call(null,cljs.core$macros.extend_prefix,new cljs.core.Keyword(null,"default","default",-1987822328),(function (tsym,sym){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"..","..",-300507420,null)),(function (){var x__47968__auto__ = tsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-prototype","-prototype",-450831903,null)),(function (){var x__47968__auto__ = cljs.core$macros.to_property.call(null,sym);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
}));
cljs.core$macros.adapt_obj_params = (function cljs$core$macros$adapt_obj_params(type,p__57988){
var vec__57995 = p__57988;
var seq__57996 = cljs.core.seq.call(null,vec__57995);
var first__57997 = cljs.core.first.call(null,seq__57996);
var seq__57996__$1 = cljs.core.next.call(null,seq__57996);
var vec__57998 = first__57997;
var seq__57999 = cljs.core.seq.call(null,vec__57998);
var first__58000 = cljs.core.first.call(null,seq__57999);
var seq__57999__$1 = cljs.core.next.call(null,seq__57999);
var this$ = first__58000;
var args = seq__57999__$1;
var sig = vec__57998;
var body = seq__57996__$1;
var x__47968__auto__ = cljs.core.vec.call(null,args);
return cljs.core._conj.call(null,(function (){var x__47968__auto____$1 = cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"this-as","this-as",-848995740,null),cljs.core.vary_meta.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),type),body);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto____$1);
})(),x__47968__auto__);
});
cljs.core$macros.adapt_ifn_params = (function cljs$core$macros$adapt_ifn_params(type,p__58001){
var vec__58008 = p__58001;
var seq__58009 = cljs.core.seq.call(null,vec__58008);
var first__58010 = cljs.core.first.call(null,seq__58009);
var seq__58009__$1 = cljs.core.next.call(null,seq__58009);
var vec__58011 = first__58010;
var seq__58012 = cljs.core.seq.call(null,vec__58011);
var first__58013 = cljs.core.first.call(null,seq__58012);
var seq__58012__$1 = cljs.core.next.call(null,seq__58012);
var this$ = first__58013;
var args = seq__58012__$1;
var sig = vec__58011;
var body = seq__58009__$1;
var self_sym = cljs.core.with_meta.call(null,new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),type], null));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__47968__auto__ = cljs.core.vec.call(null,cljs.core.cons.call(null,self_sym,args));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null)),(function (){var x__47968__auto__ = self_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__47968__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__47968__auto__ = this$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = self_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
});
cljs.core$macros.adapt_ifn_invoke_params = (function cljs$core$macros$adapt_ifn_invoke_params(type,p__58014){
var vec__58021 = p__58014;
var seq__58022 = cljs.core.seq.call(null,vec__58021);
var first__58023 = cljs.core.first.call(null,seq__58022);
var seq__58022__$1 = cljs.core.next.call(null,seq__58022);
var vec__58024 = first__58023;
var seq__58025 = cljs.core.seq.call(null,vec__58024);
var first__58026 = cljs.core.first.call(null,seq__58025);
var seq__58025__$1 = cljs.core.next.call(null,seq__58025);
var this$ = first__58026;
var args = seq__58025__$1;
var sig = vec__58024;
var body = seq__58022__$1;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__47968__auto__ = cljs.core.vec.call(null,args);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null)),(function (){var x__47968__auto__ = cljs.core.vary_meta.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),type);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
});
cljs.core$macros.adapt_proto_params = (function cljs$core$macros$adapt_proto_params(type,p__58027){
var vec__58034 = p__58027;
var seq__58035 = cljs.core.seq.call(null,vec__58034);
var first__58036 = cljs.core.first.call(null,seq__58035);
var seq__58035__$1 = cljs.core.next.call(null,seq__58035);
var vec__58037 = first__58036;
var seq__58038 = cljs.core.seq.call(null,vec__58037);
var first__58039 = cljs.core.first.call(null,seq__58038);
var seq__58038__$1 = cljs.core.next.call(null,seq__58038);
var this$ = first__58039;
var args = seq__58038__$1;
var sig = vec__58037;
var body = seq__58035__$1;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__47968__auto__ = cljs.core.vec.call(null,cljs.core.cons.call(null,cljs.core.vary_meta.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),type),args));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null)),(function (){var x__47968__auto__ = this$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
});
cljs.core$macros.add_obj_methods = (function cljs$core$macros$add_obj_methods(type,type_sym,sigs){
return cljs.core.map.call(null,(function (p__58048){
var vec__58049 = p__58048;
var seq__58050 = cljs.core.seq.call(null,vec__58049);
var first__58051 = cljs.core.first.call(null,seq__58050);
var seq__58050__$1 = cljs.core.next.call(null,seq__58050);
var f = first__58051;
var meths = seq__58050__$1;
var form = vec__58049;
var vec__58052 = ((cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,meths)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rest.call(null,form)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,meths], null));
var f__$1 = cljs.core.nth.call(null,vec__58052,(0),null);
var meths__$1 = cljs.core.nth.call(null,vec__58052,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__47968__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,f__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),cljs.core.map.call(null,((function (vec__58052,f__$1,meths__$1,vec__58049,seq__58050,first__58051,seq__58050__$1,f,meths,form){
return (function (p1__58040_SHARP_){
return cljs.core$macros.adapt_obj_params.call(null,type,p1__58040_SHARP_);
});})(vec__58052,f__$1,meths__$1,vec__58049,seq__58050,first__58051,seq__58050__$1,f,meths,form))
,meths__$1)))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
}),sigs);
});
cljs.core$macros.ifn_invoke_methods = (function cljs$core$macros$ifn_invoke_methods(type,type_sym,p__58056){
var vec__58060 = p__58056;
var seq__58061 = cljs.core.seq.call(null,vec__58060);
var first__58062 = cljs.core.first.call(null,seq__58061);
var seq__58061__$1 = cljs.core.next.call(null,seq__58061);
var f = first__58062;
var meths = seq__58061__$1;
var form = vec__58060;
return cljs.core.map.call(null,((function (vec__58060,seq__58061,first__58062,seq__58061__$1,f,meths,form){
return (function (meth){
var arity = cljs.core.count.call(null,cljs.core.first.call(null,meth));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__47968__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,cljs.core.symbol.call(null,[cljs.core.str("cljs$core$IFn$_invoke$arity$"),cljs.core.str(arity)].join('')));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__47968__auto__ = meth;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})()))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
});})(vec__58060,seq__58061,first__58062,seq__58061__$1,f,meths,form))
,cljs.core.map.call(null,((function (vec__58060,seq__58061,first__58062,seq__58061__$1,f,meths,form){
return (function (p1__58055_SHARP_){
return cljs.core$macros.adapt_ifn_invoke_params.call(null,type,p1__58055_SHARP_);
});})(vec__58060,seq__58061,first__58062,seq__58061__$1,f,meths,form))
,meths));
});
cljs.core$macros.add_ifn_methods = (function cljs$core$macros$add_ifn_methods(type,type_sym,p__58064){
var vec__58068 = p__58064;
var seq__58069 = cljs.core.seq.call(null,vec__58068);
var first__58070 = cljs.core.first.call(null,seq__58069);
var seq__58069__$1 = cljs.core.next.call(null,seq__58069);
var f = first__58070;
var meths = seq__58069__$1;
var form = vec__58068;
var meths__$1 = cljs.core.map.call(null,((function (vec__58068,seq__58069,first__58070,seq__58069__$1,f,meths,form){
return (function (p1__58063_SHARP_){
return cljs.core$macros.adapt_ifn_params.call(null,type,p1__58063_SHARP_);
});})(vec__58068,seq__58069,first__58070,seq__58069__$1,f,meths,form))
,meths);
var this_sym = cljs.core.with_meta.call(null,new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),type], null));
var argsym = cljs.core.gensym.call(null,"args");
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__47968__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,new cljs.core.Symbol(null,"call","call",1120531661,null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),meths__$1))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})()))),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__47968__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,new cljs.core.Symbol(null,"apply","apply",-1334050276,null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__47968__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this_sym,argsym], null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null)),(function (){var x__47968__auto__ = this_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".apply",".apply",-1176201338,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-call",".-call",1760541695,null)),(function (){var x__47968__auto__ = this_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = this_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".concat",".concat",1180408684,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),(function (){var x__47968__auto__ = this_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","aclone","cljs.core/aclone",-758078968,null)),(function (){var x__47968__auto__ = argsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})()))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())))], null),cljs.core$macros.ifn_invoke_methods.call(null,type,type_sym,form));
});
cljs.core$macros.add_proto_methods_STAR_ = (function cljs$core$macros$add_proto_methods_STAR_(pprefix,type,type_sym,p__58071){
var vec__58079 = p__58071;
var seq__58080 = cljs.core.seq.call(null,vec__58079);
var first__58081 = cljs.core.first.call(null,seq__58080);
var seq__58080__$1 = cljs.core.next.call(null,seq__58080);
var f = first__58081;
var meths = seq__58080__$1;
var form = vec__58079;
var pf = [cljs.core.str(pprefix),cljs.core.str(cljs.core.name.call(null,f))].join('');
if(cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,meths))){
var meth = meths;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__47968__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,[cljs.core.str(pf),cljs.core.str("$arity$"),cljs.core.str(cljs.core.count.call(null,cljs.core.first.call(null,meth)))].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),cljs.core$macros.adapt_proto_params.call(null,type,meth)))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())))], null);
} else {
return cljs.core.map.call(null,((function (pf,vec__58079,seq__58080,first__58081,seq__58080__$1,f,meths,form){
return (function (p__58082){
var vec__58083 = p__58082;
var seq__58084 = cljs.core.seq.call(null,vec__58083);
var first__58085 = cljs.core.first.call(null,seq__58084);
var seq__58084__$1 = cljs.core.next.call(null,seq__58084);
var sig = first__58085;
var body = seq__58084__$1;
var meth = vec__58083;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__47968__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,[cljs.core.str(pf),cljs.core.str("$arity$"),cljs.core.str(cljs.core.count.call(null,sig))].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__47968__auto__ = cljs.core$macros.adapt_proto_params.call(null,type,meth);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})()))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
});})(pf,vec__58079,seq__58080,first__58081,seq__58080__$1,f,meths,form))
,meths);
}
});
cljs.core$macros.proto_assign_impls = (function cljs$core$macros$proto_assign_impls(env,resolve,type_sym,type,p__58086){
var vec__58090 = p__58086;
var p = cljs.core.nth.call(null,vec__58090,(0),null);
var sigs = cljs.core.nth.call(null,vec__58090,(1),null);
cljs.core$macros.warn_and_update_protocol.call(null,p,type,env);

var psym = resolve.call(null,p);
var pprefix = cljs.core$macros.protocol_prefix.call(null,psym);
var skip_flag = cljs.core.set.call(null,new cljs.core.Keyword(null,"skip-protocol-flag","skip-protocol-flag",-1426798630).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,type_sym)));
if(cljs.core._EQ_.call(null,p,new cljs.core.Symbol(null,"Object","Object",61210754,null))){
return cljs.core$macros.add_obj_methods.call(null,type,type_sym,sigs);
} else {
return cljs.core.concat.call(null,(cljs.core.truth_(skip_flag.call(null,psym))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__47968__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,pprefix);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PROTOCOL_SENTINEL","cljs.core/PROTOCOL_SENTINEL",210209696,null)))))], null)),cljs.core.mapcat.call(null,((function (psym,pprefix,skip_flag,vec__58090,p,sigs){
return (function (sig){
if(cljs.core._EQ_.call(null,psym,new cljs.core.Symbol("cljs.core","IFn","cljs.core/IFn",-920223129,null))){
return cljs.core$macros.add_ifn_methods.call(null,type,type_sym,sig);
} else {
return cljs.core$macros.add_proto_methods_STAR_.call(null,pprefix,type,type_sym,sig);
}
});})(psym,pprefix,skip_flag,vec__58090,p,sigs))
,sigs));
}
});
cljs.core$macros.validate_impl_sigs = (function cljs$core$macros$validate_impl_sigs(env,p,method){
if(cljs.core._EQ_.call(null,p,new cljs.core.Symbol(null,"Object","Object",61210754,null))){
return null;
} else {
var var$ = cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),p);
var minfo = new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"protocol-info","protocol-info",1471745843).cljs$core$IFn$_invoke$arity$1(var$));
var method_name = cljs.core.first.call(null,method);
var __GT_name = cljs.core.comp.call(null,cljs.core.symbol,cljs.core.name);
var vec__58096 = ((cljs.core.vector_QMARK_.call(null,cljs.core.second.call(null,method)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [__GT_name.call(null,method_name),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second.call(null,method)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [__GT_name.call(null,method_name),cljs.core.map.call(null,cljs.core.first,cljs.core.rest.call(null,method))], null));
var fname = cljs.core.nth.call(null,vec__58096,(0),null);
var sigs = cljs.core.nth.call(null,vec__58096,(1),null);
var decmeths = cljs.core.get.call(null,minfo,fname,new cljs.core.Keyword("cljs.core$macros","not-found","cljs.core$macros/not-found",-1226326556));
if(cljs.core._EQ_.call(null,decmeths,new cljs.core.Keyword("cljs.core$macros","not-found","cljs.core$macros/not-found",-1226326556))){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),env,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p,new cljs.core.Keyword(null,"fname","fname",1500291491),fname,new cljs.core.Keyword(null,"no-such-method","no-such-method",1087422840),true], null));
} else {
}

if(cljs.core.truth_(cljs.core.namespace.call(null,method_name))){
var method_var_58099 = cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),method_name,cljs.analyzer.confirm_var_exist_warning);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(var$),new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(method_var_58099))){
} else {
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),env,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p,new cljs.core.Keyword(null,"fname","fname",1500291491),method_name,new cljs.core.Keyword(null,"no-such-method","no-such-method",1087422840),true], null));
}
} else {
}

var sigs__$1 = sigs;
var seen = cljs.core.PersistentHashSet.EMPTY;
while(true){
if(cljs.core.seq.call(null,sigs__$1)){
var sig = cljs.core.first.call(null,sigs__$1);
var c = cljs.core.count.call(null,sig);
if(cljs.core.contains_QMARK_.call(null,seen,c)){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"protocol-duped-method","protocol-duped-method",15128166),env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p,new cljs.core.Keyword(null,"fname","fname",1500291491),fname], null));
} else {
}

if((cljs.core.not_EQ_.call(null,decmeths,new cljs.core.Keyword("cljs.core$macros","not-found","cljs.core$macros/not-found",-1226326556))) && (cljs.core.not.call(null,cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([c], true),cljs.core.map.call(null,cljs.core.count,decmeths))))){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),env,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p,new cljs.core.Keyword(null,"fname","fname",1500291491),fname,new cljs.core.Keyword(null,"invalid-arity","invalid-arity",1335461949),c], null));
} else {
}

var G__58100 = cljs.core.next.call(null,sigs__$1);
var G__58101 = cljs.core.conj.call(null,seen,c);
sigs__$1 = G__58100;
seen = G__58101;
continue;
} else {
return null;
}
break;
}
}
});
cljs.core$macros.validate_impls = (function cljs$core$macros$validate_impls(env,impls){
var protos = cljs.core.PersistentHashSet.EMPTY;
var impls__$1 = impls;
while(true){
if(cljs.core.seq.call(null,impls__$1)){
var proto = cljs.core.first.call(null,impls__$1);
var methods$ = cljs.core.take_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,impls__$1));
var impls__$2 = cljs.core.drop_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,impls__$1));
if(cljs.core.contains_QMARK_.call(null,protos,proto)){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"protocol-multiple-impls","protocol-multiple-impls",794179260),env,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"protocol","protocol",652470118),proto], null));
} else {
}

var seen_58108 = cljs.core.PersistentHashSet.EMPTY;
var methods_58109__$1 = methods$;
while(true){
if(cljs.core.seq.call(null,methods_58109__$1)){
var vec__58105_58110 = cljs.core.first.call(null,methods_58109__$1);
var fname_58111 = cljs.core.nth.call(null,vec__58105_58110,(0),null);
var method_58112 = vec__58105_58110;
if(cljs.core.contains_QMARK_.call(null,seen_58108,fname_58111)){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"extend-type-invalid-method-shape","extend-type-invalid-method-shape",1424103549),env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"protocol","protocol",652470118),proto,new cljs.core.Keyword(null,"method","method",55703592),fname_58111], null));
} else {
}

cljs.core$macros.validate_impl_sigs.call(null,env,proto,method_58112);

var G__58113 = cljs.core.conj.call(null,seen_58108,fname_58111);
var G__58114 = cljs.core.next.call(null,methods_58109__$1);
seen_58108 = G__58113;
methods_58109__$1 = G__58114;
continue;
} else {
}
break;
}

var G__58115 = cljs.core.conj.call(null,protos,proto);
var G__58116 = impls__$2;
protos = G__58115;
impls__$1 = G__58116;
continue;
} else {
return null;
}
break;
}
});
cljs.core$macros.type_hint_first_arg = (function cljs$core$macros$type_hint_first_arg(type_sym,argv){
return cljs.core.assoc.call(null,argv,(0),cljs.core.vary_meta.call(null,argv.call(null,(0)),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),type_sym));
});
cljs.core$macros.type_hint_single_arity_sig = (function cljs$core$macros$type_hint_single_arity_sig(type_sym,sig){
return cljs.core.list_STAR_.call(null,cljs.core.first.call(null,sig),cljs.core$macros.type_hint_first_arg.call(null,type_sym,cljs.core.second.call(null,sig)),cljs.core.nnext.call(null,sig));
});
cljs.core$macros.type_hint_multi_arity_sig = (function cljs$core$macros$type_hint_multi_arity_sig(type_sym,sig){
return cljs.core.list_STAR_.call(null,cljs.core$macros.type_hint_first_arg.call(null,type_sym,cljs.core.first.call(null,sig)),cljs.core.next.call(null,sig));
});
cljs.core$macros.type_hint_multi_arity_sigs = (function cljs$core$macros$type_hint_multi_arity_sigs(type_sym,sigs){
return cljs.core.list_STAR_.call(null,cljs.core.first.call(null,sigs),cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core$macros.type_hint_multi_arity_sig,type_sym),cljs.core.rest.call(null,sigs)));
});
cljs.core$macros.type_hint_sigs = (function cljs$core$macros$type_hint_sigs(type_sym,sig){
if(cljs.core.vector_QMARK_.call(null,cljs.core.second.call(null,sig))){
return cljs.core$macros.type_hint_single_arity_sig.call(null,type_sym,sig);
} else {
return cljs.core$macros.type_hint_multi_arity_sigs.call(null,type_sym,sig);
}
});
cljs.core$macros.type_hint_impl_map = (function cljs$core$macros$type_hint_impl_map(type_sym,impl_map){
return cljs.core.reduce_kv.call(null,(function (m,proto,sigs){
return cljs.core.assoc.call(null,m,proto,cljs.core.map.call(null,cljs.core.partial.call(null,cljs.core$macros.type_hint_sigs,type_sym),sigs));
}),cljs.core.PersistentArrayMap.EMPTY,impl_map);
});
/**
 * Extend a type to a series of protocols. Useful when you are
 *   supplying the definitions explicitly inline. Propagates the
 *   type as a type hint on the first argument of all fns.
 * 
 *   type-sym may be
 * 
 * * default, meaning the definitions will apply for any value,
 *   unless an extend-type exists for one of the more specific
 *   cases below.
 * * nil, meaning the definitions will apply for the nil value.
 * * any of object, boolean, number, string, array, or function,
 *   indicating the definitions will apply for values of the
 *   associated base JavaScript types. Note that, for example,
 *   string should be used instead of js/String.
 * * a JavaScript type not covered by the previous list, such
 *   as js/RegExp.
 * * a type defined by deftype or defrecord.
 * 
 *   (extend-type MyType
 *  ICounted
 *  (-count [c] ...)
 *  Foo
 *  (bar [x y] ...)
 *  (baz ([x] ...) ([x y & zs] ...))
 */
cljs.core$macros.extend_type = (function cljs$core$macros$extend_type(var_args){
var args__48246__auto__ = [];
var len__48239__auto___58125 = arguments.length;
var i__48240__auto___58126 = (0);
while(true){
if((i__48240__auto___58126 < len__48239__auto___58125)){
args__48246__auto__.push((arguments[i__48240__auto___58126]));

var G__58127 = (i__48240__auto___58126 + (1));
i__48240__auto___58126 = G__58127;
continue;
} else {
}
break;
}

var argseq__48247__auto__ = ((((3) < args__48246__auto__.length))?(new cljs.core.IndexedSeq(args__48246__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.extend_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__48247__auto__);
});

cljs.core$macros.extend_type.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,type_sym,impls){
var env = _AMPERSAND_env;
var _ = cljs.core$macros.validate_impls.call(null,env,impls);
var resolve = cljs.core.partial.call(null,cljs.core$macros.resolve_var,env);
var impl_map = cljs.core$macros.__GT_impl_map.call(null,impls);
var impl_map__$1 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null,new cljs.core.Symbol(null,"number","number",-1084057331,null),null], null), null).call(null,type_sym))?cljs.core$macros.type_hint_impl_map.call(null,type_sym,impl_map):impl_map);
var vec__58122 = (function (){var temp__4655__auto__ = cljs.core$macros.base_type.call(null,type_sym);
if(cljs.core.truth_(temp__4655__auto__)){
var type = temp__4655__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core$macros.base_assign_impls], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [resolve.call(null,type_sym),cljs.core$macros.proto_assign_impls], null);
}
})();
var type = cljs.core.nth.call(null,vec__58122,(0),null);
var assign_impls = cljs.core.nth.call(null,vec__58122,(1),null);
if(cljs.core.truth_((function (){var and__47119__auto__ = new cljs.core.Keyword(null,"extending-base-js-type","extending-base-js-type",432787264).cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_warnings_STAR_);
if(cljs.core.truth_(and__47119__auto__)){
return cljs.core$macros.js_base_type.call(null,type_sym);
} else {
return and__47119__auto__;
}
})())){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"extending-base-js-type","extending-base-js-type",432787264),env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-symbol","current-symbol",-932381075),type_sym,new cljs.core.Keyword(null,"suggested-symbol","suggested-symbol",-1329631875),cljs.core$macros.js_base_type.call(null,type_sym)], null));
} else {
}

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),cljs.core.mapcat.call(null,((function (env,_,resolve,impl_map,impl_map__$1,vec__58122,type,assign_impls){
return (function (p1__58117_SHARP_){
return assign_impls.call(null,env,resolve,type_sym,type,p1__58117_SHARP_);
});})(env,_,resolve,impl_map,impl_map__$1,vec__58122,type,assign_impls))
,impl_map__$1))));
});

cljs.core$macros.extend_type.cljs$lang$maxFixedArity = (3);

cljs.core$macros.extend_type.cljs$lang$applyTo = (function (seq58118){
var G__58119 = cljs.core.first.call(null,seq58118);
var seq58118__$1 = cljs.core.next.call(null,seq58118);
var G__58120 = cljs.core.first.call(null,seq58118__$1);
var seq58118__$2 = cljs.core.next.call(null,seq58118__$1);
var G__58121 = cljs.core.first.call(null,seq58118__$2);
var seq58118__$3 = cljs.core.next.call(null,seq58118__$2);
return cljs.core$macros.extend_type.cljs$core$IFn$_invoke$arity$variadic(G__58119,G__58120,G__58121,seq58118__$3);
});


cljs.core$macros.extend_type.cljs$lang$macro = true;
cljs.core$macros.prepare_protocol_masks = (function cljs$core$macros$prepare_protocol_masks(env,impls){
var resolve = cljs.core.partial.call(null,cljs.core$macros.resolve_var,env);
var impl_map = cljs.core$macros.__GT_impl_map.call(null,impls);
var fpp_pbs = cljs.core.seq.call(null,cljs.core.keep.call(null,cljs.core$macros.fast_path_protocols,cljs.core.map.call(null,resolve,cljs.core.keys.call(null,impl_map))));
if(fpp_pbs){
var fpps = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,cljs.core.partial.call(null,cljs.core.contains_QMARK_,cljs.core$macros.fast_path_protocols),cljs.core.map.call(null,resolve,cljs.core.keys.call(null,impl_map))));
var parts = (function (){var parts = cljs.core.group_by.call(null,cljs.core.first,fpp_pbs);
var parts__$1 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.juxt.call(null,cljs.core.key,cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,cljs.core.peek),cljs.core.val)),parts));
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.juxt.call(null,cljs.core.key,cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.reduce,cljs.core.bit_or),cljs.core.val)),parts__$1));
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fpps,cljs.core.reduce.call(null,((function (fpps,parts,resolve,impl_map,fpp_pbs){
return (function (ps,p){
return cljs.core.update_in.call(null,ps,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p], null),cljs.core.fnil.call(null,cljs.core.identity,(0)));
});})(fpps,parts,resolve,impl_map,fpp_pbs))
,parts,cljs.core.range.call(null,cljs.core$macros.fast_path_protocol_partitions_count))], null);
} else {
return null;
}
});
cljs.core$macros.annotate_specs = (function cljs$core$macros$annotate_specs(annots,v,p__58129){
var vec__58133 = p__58129;
var f = cljs.core.nth.call(null,vec__58133,(0),null);
var sigs = cljs.core.nth.call(null,vec__58133,(1),null);
return cljs.core.conj.call(null,v,cljs.core.vary_meta.call(null,cljs.core.cons.call(null,f,cljs.core.map.call(null,((function (vec__58133,f,sigs){
return (function (p1__58128_SHARP_){
return cljs.core.cons.call(null,cljs.core.second.call(null,p1__58128_SHARP_),cljs.core.nnext.call(null,p1__58128_SHARP_));
});})(vec__58133,f,sigs))
,sigs)),cljs.core.merge,annots));
});
cljs.core$macros.dt__GT_et = (function cljs$core$macros$dt__GT_et(var_args){
var args58136 = [];
var len__48239__auto___58139 = arguments.length;
var i__48240__auto___58140 = (0);
while(true){
if((i__48240__auto___58140 < len__48239__auto___58139)){
args58136.push((arguments[i__48240__auto___58140]));

var G__58141 = (i__48240__auto___58140 + (1));
i__48240__auto___58140 = G__58141;
continue;
} else {
}
break;
}

var G__58138 = args58136.length;
switch (G__58138) {
case 3:
return cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args58136.length)].join('')));

}
});

cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$3 = (function (type,specs,fields){
return cljs.core$macros.dt__GT_et.call(null,type,specs,fields,false);
});

cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$4 = (function (type,specs,fields,inline){
var annots = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("cljs.analyzer","type","cljs.analyzer/type",478749742),type,new cljs.core.Keyword("cljs.analyzer","protocol-impl","cljs.analyzer/protocol-impl",-1523935409),true,new cljs.core.Keyword("cljs.analyzer","protocol-inline","cljs.analyzer/protocol-inline",-1611519026),inline], null);
var ret = cljs.core.PersistentVector.EMPTY;
var specs__$1 = specs;
while(true){
if(cljs.core.seq.call(null,specs__$1)){
var p = cljs.core.first.call(null,specs__$1);
var ret__$1 = cljs.core.into.call(null,cljs.core.conj.call(null,ret,p),cljs.core.reduce.call(null,cljs.core.partial.call(null,cljs.core$macros.annotate_specs,annots),cljs.core.PersistentVector.EMPTY,cljs.core.group_by.call(null,cljs.core.first,cljs.core.take_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,specs__$1)))));
var specs__$2 = cljs.core.drop_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,specs__$1));
var G__58143 = ret__$1;
var G__58144 = specs__$2;
ret = G__58143;
specs__$1 = G__58144;
continue;
} else {
return ret;
}
break;
}
});

cljs.core$macros.dt__GT_et.cljs$lang$maxFixedArity = 4;

cljs.core$macros.collect_protocols = (function cljs$core$macros$collect_protocols(impls,env){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,(function (p1__58145_SHARP_){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),p1__58145_SHARP_));
}),cljs.core.filter.call(null,cljs.core.symbol_QMARK_,impls)));
});
cljs.core$macros.build_positional_factory = (function cljs$core$macros$build_positional_factory(rsym,rname,fields){
var fn_name = cljs.core.with_meta.call(null,cljs.core.symbol.call(null,[cljs.core.str(new cljs.core.Symbol(null,"->","->",-2139605430,null)),cljs.core.str(rsym)].join('')),cljs.core.assoc.call(null,cljs.core.meta.call(null,rsym),new cljs.core.Keyword(null,"factory","factory",63933746),new cljs.core.Keyword(null,"positional","positional",-203580463)));
var field_values = (cljs.core.truth_(new cljs.core.Keyword(null,"internal-ctor","internal-ctor",937392560).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,rsym)))?cljs.core.conj.call(null,fields,null,null,null):fields);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null)),(function (){var x__47968__auto__ = fn_name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,fields))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__47968__auto__ = rname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),field_values)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
});
cljs.core$macros.validate_fields = (function cljs$core$macros$validate_fields(case$,name,fields){
if(cljs.core.vector_QMARK_.call(null,fields)){
return null;
} else {
throw (new Error([cljs.core.str(case$),cljs.core.str(" "),cljs.core.str(name),cljs.core.str(", no fields vector given.")].join('')));
}
});
/**
 * (deftype name [fields*]  options* specs*)
 * 
 *   Currently there are no options.
 * 
 *   Each spec consists of a protocol or interface name followed by zero
 *   or more method bodies:
 * 
 *   protocol-or-Object
 *   (methodName [args*] body)*
 * 
 *   The type will have the (by default, immutable) fields named by
 *   fields, which can have type hints. Protocols and methods
 *   are optional. The only methods that can be supplied are those
 *   declared in the protocols/interfaces.  Note that method bodies are
 *   not closures, the local environment includes only the named fields,
 *   and those fields can be accessed directly. Fields can be qualified
 *   with the metadata :mutable true at which point (set! afield aval) will be
 *   supported in method bodies. Note well that mutable fields are extremely
 *   difficult to use correctly, and are present only to facilitate the building
 *   of higherlevel constructs, such as ClojureScript's reference types, in
 *   ClojureScript itself. They are for experts only - if the semantics and
 *   implications of :mutable are not immediately apparent to you, you should not
 *   be using them.
 * 
 *   Method definitions take the form:
 * 
 *   (methodname [args*] body)
 * 
 *   The argument and return types can be hinted on the arg and
 *   methodname symbols. If not supplied, they will be inferred, so type
 *   hints should be reserved for disambiguation.
 * 
 *   Methods should be supplied for all methods of the desired
 *   protocol(s). You can also define overrides for methods of Object. Note that
 *   a parameter must be supplied to correspond to the target object
 *   ('this' in JavaScript parlance). Note also that recur calls to the method
 *   head should *not* pass the target object, it will be supplied
 *   automatically and can not be substituted.
 * 
 *   In the method bodies, the (unqualified) name can be used to name the
 *   class (for calls to new, instance? etc).
 * 
 *   One constructor will be defined, taking the designated fields.  Note
 *   that the field names __meta and __extmap are currently reserved and
 *   should not be used when defining your own types.
 * 
 *   Given (deftype TypeName ...), a factory function called ->TypeName
 *   will be defined, taking positional parameters for the fields
 */
cljs.core$macros.deftype = (function cljs$core$macros$deftype(var_args){
var args__48246__auto__ = [];
var len__48239__auto___58157 = arguments.length;
var i__48240__auto___58158 = (0);
while(true){
if((i__48240__auto___58158 < len__48239__auto___58157)){
args__48246__auto__.push((arguments[i__48240__auto___58158]));

var G__58159 = (i__48240__auto___58158 + (1));
i__48240__auto___58158 = G__58159;
continue;
} else {
}
break;
}

var argseq__48247__auto__ = ((((4) < args__48246__auto__.length))?(new cljs.core.IndexedSeq(args__48246__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.deftype.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__48247__auto__);
});

cljs.core$macros.deftype.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,t,fields,impls){
cljs.core$macros.validate_fields.call(null,"deftype",t,fields);

var env = _AMPERSAND_env;
var r = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),t));
var vec__58154 = cljs.core$macros.prepare_protocol_masks.call(null,env,impls);
var fpps = cljs.core.nth.call(null,vec__58154,(0),null);
var pmasks = cljs.core.nth.call(null,vec__58154,(1),null);
var protocols = cljs.core$macros.collect_protocols.call(null,impls,env);
var t__$1 = cljs.core.vary_meta.call(null,t,cljs.core.assoc,new cljs.core.Keyword(null,"protocols","protocols",-5615896),protocols,new cljs.core.Keyword(null,"skip-protocol-flag","skip-protocol-flag",-1426798630),fpps);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"deftype*","deftype*",962659890,null)),(function (){var x__47968__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = fields;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = pmasks;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = ((cljs.core.seq.call(null,impls))?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","extend-type","cljs.core$macros/extend-type",1713295201,null)),(function (){var x__47968__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),cljs.core$macros.dt__GT_et.call(null,t__$1,impls,fields)))):null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-getBasis",".-getBasis",-1306451468,null)),(function (){var x__47968__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__47968__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__47968__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,fields))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$type",".-cljs$lang$type",-1029307724,null)),(function (){var x__47968__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$ctorStr",".-cljs$lang$ctorStr",-1820706991,null)),(function (){var x__47968__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = [cljs.core.str(r)].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$ctorPrWriter",".-cljs$lang$ctorPrWriter",255834464,null)),(function (){var x__47968__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__47968__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__58146__auto__","this__58146__auto__",-1623338969,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__58147__auto__","writer__58147__auto__",228833914,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opt__58148__auto__","opt__58148__auto__",853835872,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-write","cljs.core/-write",527220517,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__58147__auto__","writer__58147__auto__",228833914,null)),(function (){var x__47968__auto__ = [cljs.core.str(r)].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core$macros.build_positional_factory.call(null,t__$1,r,fields);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
});

cljs.core$macros.deftype.cljs$lang$maxFixedArity = (4);

cljs.core$macros.deftype.cljs$lang$applyTo = (function (seq58149){
var G__58150 = cljs.core.first.call(null,seq58149);
var seq58149__$1 = cljs.core.next.call(null,seq58149);
var G__58151 = cljs.core.first.call(null,seq58149__$1);
var seq58149__$2 = cljs.core.next.call(null,seq58149__$1);
var G__58152 = cljs.core.first.call(null,seq58149__$2);
var seq58149__$3 = cljs.core.next.call(null,seq58149__$2);
var G__58153 = cljs.core.first.call(null,seq58149__$3);
var seq58149__$4 = cljs.core.next.call(null,seq58149__$3);
return cljs.core$macros.deftype.cljs$core$IFn$_invoke$arity$variadic(G__58150,G__58151,G__58152,G__58153,seq58149__$4);
});


cljs.core$macros.deftype.cljs$lang$macro = true;
/**
 * Do not use this directly - use defrecord
 */
cljs.core$macros.emit_defrecord = (function cljs$core$macros$emit_defrecord(env,tagname,rname,fields,impls){
var hinted_fields = fields;
var fields__$1 = cljs.core.vec.call(null,cljs.core.map.call(null,((function (hinted_fields){
return (function (p1__58160_SHARP_){
return cljs.core.with_meta.call(null,p1__58160_SHARP_,null);
});})(hinted_fields))
,fields));
var base_fields = fields__$1;
var pr_open = [cljs.core.str("#"),cljs.core.str(cljs.core.namespace.call(null,rname)),cljs.core.str("."),cljs.core.str(cljs.core.name.call(null,rname)),cljs.core.str("{")].join('');
var fields__$2 = cljs.core.conj.call(null,fields__$1,new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),cljs.core.with_meta.call(null,new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)));
var gs = cljs.core.gensym.call(null);
var ksym = cljs.core.gensym.call(null,"k");
var impls__$1 = cljs.core.concat.call(null,impls,new cljs.core.PersistentVector(null, 28, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"IRecord","IRecord",-903221169,null),new cljs.core.Symbol(null,"ICloneable","ICloneable",1882653160,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-clone","-clone",227130084,null)),(function (){var x__47968__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__58161__auto__","this__58161__auto__",386999176,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__47968__auto__ = tagname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),fields__$2)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})()))),new cljs.core.Symbol(null,"IHash","IHash",-1495374645,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-hash","-hash",-630070274,null)),(function (){var x__47968__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__58162__auto__","this__58162__auto__",-954643001,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","caching-hash","cljs.core$macros/caching-hash",-1892393069,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__58162__auto__","this__58162__auto__",-954643001,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"hash-imap","hash-imap",-1047446478,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})()))),new cljs.core.Symbol(null,"IEquiv","IEquiv",-1912850869,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-equiv","-equiv",320124272,null)),(function (){var x__47968__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__58163__auto__","this__58163__auto__",1811072702,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"other__58164__auto__","other__58164__auto__",472458052,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"other__58164__auto__","other__58164__auto__",472458052,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","identical?","cljs.core$macros/identical?",815580547,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-constructor",".-constructor",279801701,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__58163__auto__","this__58163__auto__",1811072702,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-constructor",".-constructor",279801701,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"other__58164__auto__","other__58164__auto__",472458052,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","equiv-map","cljs.core/equiv-map",-1185609892,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__58163__auto__","this__58163__auto__",1811072702,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"other__58164__auto__","other__58164__auto__",472458052,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})()))),new cljs.core.Symbol(null,"IMeta","IMeta",1095313672,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-meta","-meta",494863156,null)),(function (){var x__47968__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__58165__auto__","this__58165__auto__",1368759634,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__meta","__meta",-946752628,null))))),new cljs.core.Symbol(null,"IWithMeta","IWithMeta",-509493158,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-with-meta","-with-meta",-1610713823,null)),(function (){var x__47968__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__58166__auto__","this__58166__auto__",1201040214,null)),(function (){var x__47968__auto__ = gs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__47968__auto__ = tagname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),cljs.core.replace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),gs], null),fields__$2))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})()))),new cljs.core.Symbol(null,"ILookup","ILookup",784647298,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-lookup","-lookup",-1438393944,null)),(function (){var x__47968__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__58167__auto__","this__58167__auto__",-1259984901,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__58168__auto__","k__58168__auto__",-1565161475,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-lookup","cljs.core/-lookup",-1845674443,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__58167__auto__","this__58167__auto__",-1259984901,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__58168__auto__","k__58168__auto__",-1565161475,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})()))),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-lookup","-lookup",-1438393944,null)),(function (){var x__47968__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__58169__auto__","this__58169__auto__",89406671,null)),(function (){var x__47968__auto__ = ksym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"else__58170__auto__","else__58170__auto__",-1651506759,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","case","cljs.core$macros/case",-2131866965,null)),(function (){var x__47968__auto__ = ksym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),cljs.core.mapcat.call(null,((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (f){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,f),f], null);
});})(gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,base_fields),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)),(function (){var x__47968__auto__ = ksym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"else__58170__auto__","else__58170__auto__",-1651506759,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})()))),new cljs.core.Symbol(null,"ICounted","ICounted",-1705786327,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-count","-count",416049189,null)),(function (){var x__47968__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__58171__auto__","this__58171__auto__",2024942479,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),(function (){var x__47968__auto__ = cljs.core.count.call(null,base_fields);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})()))),new cljs.core.Symbol(null,"ICollection","ICollection",-686709190,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-conj","-conj",1373798691,null)),(function (){var x__47968__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__58172__auto__","this__58172__auto__",935801564,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"entry__58173__auto__","entry__58173__auto__",-2096801536,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"entry__58173__auto__","entry__58173__auto__",-2096801536,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-assoc","cljs.core/-assoc",-814539323,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__58172__auto__","this__58172__auto__",935801564,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-nth","cljs.core/-nth",504234802,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"entry__58173__auto__","entry__58173__auto__",-2096801536,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-nth","cljs.core/-nth",504234802,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"entry__58173__auto__","entry__58173__auto__",-2096801536,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","reduce","cljs.core/reduce",2025430439,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-conj","cljs.core/-conj",2040622670,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__58172__auto__","this__58172__auto__",935801564,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"entry__58173__auto__","entry__58173__auto__",-2096801536,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})()))),new cljs.core.Symbol(null,"IAssociative","IAssociative",-1306431882,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-assoc","-assoc",-416089758,null)),(function (){var x__47968__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__58174__auto__","this__58174__auto__",93249303,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__58175__auto__","k__58175__auto__",-1003081887,null)),(function (){var x__47968__auto__ = gs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","condp","cljs.core$macros/condp",431619047,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","keyword-identical?","cljs.core/keyword-identical?",1598491177,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__58175__auto__","k__58175__auto__",-1003081887,null)),cljs.core.mapcat.call(null,((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (fld){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,fld),cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"new","new",-444906321,null),tagname,cljs.core.replace.call(null,cljs.core.PersistentArrayMap.fromArray([fld,gs,new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),null], true, false),fields__$2))], null);
});})(gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,base_fields),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__47968__auto__ = tagname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),null,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),null], null), null),fields__$2),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","assoc","cljs.core/assoc",322326297,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__58175__auto__","k__58175__auto__",-1003081887,null)),(function (){var x__47968__auto__ = gs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})()))),new cljs.core.Symbol(null,"IMap","IMap",992876629,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-dissoc","-dissoc",1638079447,null)),(function (){var x__47968__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__58176__auto__","this__58176__auto__",-1697362167,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__58177__auto__","k__58177__auto__",88479624,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null)),(function (){var x__47968__auto__ = cljs.core.apply.call(null,cljs.core.hash_set,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.keyword,base_fields)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__58177__auto__","k__58177__auto__",88479624,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","dissoc","cljs.core/dissoc",-432349815,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","with-meta","cljs.core/with-meta",749126446,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","into","cljs.core/into",1879938733,null)),(function (){var x__47968__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__58176__auto__","this__58176__auto__",-1697362167,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__meta","__meta",-946752628,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__58177__auto__","k__58177__auto__",88479624,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__47968__auto__ = tagname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),null,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),null], null), null),fields__$2),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not-empty","cljs.core/not-empty",540057011,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","dissoc","cljs.core/dissoc",-432349815,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__58177__auto__","k__58177__auto__",88479624,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})()))),new cljs.core.Symbol(null,"ISeqable","ISeqable",1349682102,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-seq","-seq",1019896831,null)),(function (){var x__47968__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__58179__auto__","this__58179__auto__",245913861,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null)),(function (){var x__47968__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (p1__58178_SHARP_){
return cljs.core._conj.call(null,(function (){var x__47968__auto__ = cljs.core.keyword.call(null,p1__58178_SHARP_);
return cljs.core._conj.call(null,(function (){var x__47968__auto____$1 = p1__58178_SHARP_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto____$1);
})(),x__47968__auto__);
})(),new cljs.core.Symbol("cljs.core$macros","vector","cljs.core$macros/vector",912237829,null));
});})(gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,base_fields)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})()))),new cljs.core.Symbol(null,"IIterable","IIterable",577191430,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-iterator","-iterator",310937281,null)),(function (){var x__47968__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__47968__auto__ = gs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"RecordIter.","RecordIter.",-265283060,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),(function (){var x__47968__auto__ = gs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.count.call(null,base_fields);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.keyword,base_fields)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-iterator","cljs.core/-iterator",1833427494,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","nil-iter","cljs.core/nil-iter",-1712403690,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})()))),new cljs.core.Symbol(null,"IPrintWithWriter","IPrintWithWriter",-1205316154,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-pr-writer","-pr-writer",-445354136,null)),(function (){var x__47968__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__58181__auto__","this__58181__auto__",-1001935011,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__58182__auto__","writer__58182__auto__",395983491,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opts__58183__auto__","opts__58183__auto__",812051470,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__47968__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"pr-pair__58184__auto__","pr-pair__58184__auto__",-936865879,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__47968__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"keyval__58185__auto__","keyval__58185__auto__",-405680293,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","pr-sequential-writer","cljs.core/pr-sequential-writer",-1101677821,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__58182__auto__","writer__58182__auto__",395983491,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","pr-writer","cljs.core/pr-writer",133956070,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,""),cljs.core._conj.call(null,cljs.core.List.EMPTY," "),cljs.core._conj.call(null,cljs.core.List.EMPTY,""),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opts__58183__auto__","opts__58183__auto__",812051470,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"keyval__58185__auto__","keyval__58185__auto__",-405680293,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","pr-sequential-writer","cljs.core/pr-sequential-writer",-1101677821,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__58182__auto__","writer__58182__auto__",395983491,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"pr-pair__58184__auto__","pr-pair__58184__auto__",-936865879,null)),(function (){var x__47968__auto__ = pr_open;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,", "),cljs.core._conj.call(null,cljs.core.List.EMPTY,"}"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opts__58183__auto__","opts__58183__auto__",812051470,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null)),(function (){var x__47968__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (p1__58180_SHARP_){
return cljs.core._conj.call(null,(function (){var x__47968__auto__ = cljs.core.keyword.call(null,p1__58180_SHARP_);
return cljs.core._conj.call(null,(function (){var x__47968__auto____$1 = p1__58180_SHARP_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto____$1);
})(),x__47968__auto__);
})(),new cljs.core.Symbol("cljs.core$macros","vector","cljs.core$macros/vector",912237829,null));
});})(gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,base_fields)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())))], null));
var vec__58189 = cljs.core$macros.prepare_protocol_masks.call(null,env,impls__$1);
var fpps = cljs.core.nth.call(null,vec__58189,(0),null);
var pmasks = cljs.core.nth.call(null,vec__58189,(1),null);
var protocols = cljs.core$macros.collect_protocols.call(null,impls__$1,env);
var tagname__$1 = cljs.core.vary_meta.call(null,tagname,cljs.core.assoc,new cljs.core.Keyword(null,"protocols","protocols",-5615896),protocols,new cljs.core.Keyword(null,"skip-protocol-flag","skip-protocol-flag",-1426798630),fpps);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"defrecord*","defrecord*",-1936366207,null)),(function (){var x__47968__auto__ = tagname__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = hinted_fields;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = pmasks;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","extend-type","cljs.core$macros/extend-type",1713295201,null)),(function (){var x__47968__auto__ = tagname__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),cljs.core$macros.dt__GT_et.call(null,tagname__$1,impls__$1,fields__$2,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
});
cljs.core$macros.build_map_factory = (function cljs$core$macros$build_map_factory(rsym,rname,fields){
var fn_name = cljs.core.with_meta.call(null,cljs.core.symbol.call(null,[cljs.core.str(new cljs.core.Symbol(null,"map->","map->",-999714600,null)),cljs.core.str(rsym)].join('')),cljs.core.assoc.call(null,cljs.core.meta.call(null,rsym),new cljs.core.Keyword(null,"factory","factory",63933746),new cljs.core.Keyword(null,"map","map",1371690461)));
var ms = cljs.core.gensym.call(null);
var ks = cljs.core.map.call(null,cljs.core.keyword,fields);
var getters = cljs.core.map.call(null,((function (fn_name,ms,ks){
return (function (k){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__47968__auto__ = k;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = ms;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
});})(fn_name,ms,ks))
,ks);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null)),(function (){var x__47968__auto__ = fn_name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__47968__auto__ = ms;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__47968__auto__ = rname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),getters,cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","dissoc","cljs.core/dissoc",-432349815,null)),(function (){var x__47968__auto__ = ms;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),ks)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
});
/**
 * (defrecord name [fields*]  options* specs*)
 * 
 *   Currently there are no options.
 * 
 *   Each spec consists of a protocol or interface name followed by zero
 *   or more method bodies:
 * 
 *   protocol-or-Object
 *   (methodName [args*] body)*
 * 
 *   The record will have the (immutable) fields named by
 *   fields, which can have type hints. Protocols and methods
 *   are optional. The only methods that can be supplied are those
 *   declared in the protocols.  Note that method bodies are
 *   not closures, the local environment includes only the named fields,
 *   and those fields can be accessed directly.
 * 
 *   Method definitions take the form:
 * 
 *   (methodname [args*] body)
 * 
 *   The argument and return types can be hinted on the arg and
 *   methodname symbols. If not supplied, they will be inferred, so type
 *   hints should be reserved for disambiguation.
 * 
 *   Methods should be supplied for all methods of the desired
 *   protocol(s). You can also define overrides for
 *   methods of Object. Note that a parameter must be supplied to
 *   correspond to the target object ('this' in JavaScript parlance). Note also
 *   that recur calls to the method head should *not* pass the target object, it
 *   will be supplied automatically and can not be substituted.
 * 
 *   In the method bodies, the (unqualified) name can be used to name the
 *   class (for calls to new, instance? etc).
 * 
 *   The type will have implementations of several ClojureScript
 *   protocol generated automatically: IMeta/IWithMeta (metadata support) and
 *   IMap, etc.
 * 
 *   In addition, defrecord will define type-and-value-based =,
 *   and will define ClojureScript IHash and IEquiv.
 * 
 *   Two constructors will be defined, one taking the designated fields
 *   followed by a metadata map (nil for none) and an extension field
 *   map (nil for none), and one taking only the fields (using nil for
 *   meta and extension fields). Note that the field names __meta
 *   and __extmap are currently reserved and should not be used when
 *   defining your own records.
 * 
 *   Given (defrecord TypeName ...), two factory functions will be
 *   defined: ->TypeName, taking positional parameters for the fields,
 *   and map->TypeName, taking a map of keywords to field values.
 */
cljs.core$macros.defrecord = (function cljs$core$macros$defrecord(var_args){
var args__48246__auto__ = [];
var len__48239__auto___58199 = arguments.length;
var i__48240__auto___58200 = (0);
while(true){
if((i__48240__auto___58200 < len__48239__auto___58199)){
args__48246__auto__.push((arguments[i__48240__auto___58200]));

var G__58201 = (i__48240__auto___58200 + (1));
i__48240__auto___58200 = G__58201;
continue;
} else {
}
break;
}

var argseq__48247__auto__ = ((((4) < args__48246__auto__.length))?(new cljs.core.IndexedSeq(args__48246__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.defrecord.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__48247__auto__);
});

cljs.core$macros.defrecord.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,rsym,fields,impls){
cljs.core$macros.validate_fields.call(null,"defrecord",rsym,fields);

var rsym__$1 = cljs.core.vary_meta.call(null,rsym,cljs.core.assoc,new cljs.core.Keyword(null,"internal-ctor","internal-ctor",937392560),true);
var r = cljs.core.vary_meta.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,_AMPERSAND_env,new cljs.core.Keyword(null,"locals","locals",535295783)),rsym__$1)),cljs.core.assoc,new cljs.core.Keyword(null,"internal-ctor","internal-ctor",937392560),true);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__47968__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core$macros.emit_defrecord.call(null,_AMPERSAND_env,rsym__$1,r,fields,impls);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-getBasis",".-getBasis",-1306451468,null)),(function (){var x__47968__auto__ = r;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__47968__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__47968__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,fields))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$type",".-cljs$lang$type",-1029307724,null)),(function (){var x__47968__auto__ = r;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$ctorPrSeq",".-cljs$lang$ctorPrSeq",41132414,null)),(function (){var x__47968__auto__ = r;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__47968__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__58192__auto__","this__58192__auto__",1747527664,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null)),(function (){var x__47968__auto__ = [cljs.core.str(r)].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$ctorPrWriter",".-cljs$lang$ctorPrWriter",255834464,null)),(function (){var x__47968__auto__ = r;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__47968__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__58192__auto__","this__58192__auto__",1747527664,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__58193__auto__","writer__58193__auto__",-1313513692,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-write","cljs.core/-write",527220517,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__58193__auto__","writer__58193__auto__",-1313513692,null)),(function (){var x__47968__auto__ = [cljs.core.str(r)].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core$macros.build_positional_factory.call(null,rsym__$1,r,fields);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core$macros.build_map_factory.call(null,rsym__$1,r,fields);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = r;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
});

cljs.core$macros.defrecord.cljs$lang$maxFixedArity = (4);

cljs.core$macros.defrecord.cljs$lang$applyTo = (function (seq58194){
var G__58195 = cljs.core.first.call(null,seq58194);
var seq58194__$1 = cljs.core.next.call(null,seq58194);
var G__58196 = cljs.core.first.call(null,seq58194__$1);
var seq58194__$2 = cljs.core.next.call(null,seq58194__$1);
var G__58197 = cljs.core.first.call(null,seq58194__$2);
var seq58194__$3 = cljs.core.next.call(null,seq58194__$2);
var G__58198 = cljs.core.first.call(null,seq58194__$3);
var seq58194__$4 = cljs.core.next.call(null,seq58194__$3);
return cljs.core$macros.defrecord.cljs$core$IFn$_invoke$arity$variadic(G__58195,G__58196,G__58197,G__58198,seq58194__$4);
});


cljs.core$macros.defrecord.cljs$lang$macro = true;
/**
 * A protocol is a named set of named methods and their signatures:
 * 
 *   (defprotocol AProtocolName
 *  ;optional doc string
 *  "A doc string for AProtocol abstraction"
 * 
 *   ;method signatures
 *  (bar [this a b] "bar docs")
 *  (baz [this a] [this a b] [this a b c] "baz docs"))
 * 
 *   No implementations are provided. Docs can be specified for the
 *   protocol overall and for each method. The above yields a set of
 *   polymorphic functions and a protocol object. All are
 *   namespace-qualified by the ns enclosing the definition The resulting
 *   functions dispatch on the type of their first argument, which is
 *   required and corresponds to the implicit target object ('this' in
 *   JavaScript parlance). defprotocol is dynamic, has no special compile-time
 *   effect, and defines no new types.
 * 
 *   (defprotocol P
 *  (foo [this])
 *  (bar-me [this] [this y]))
 * 
 *   (deftype Foo [a b c]
 *  P
 *  (foo [this] a)
 *  (bar-me [this] b)
 *  (bar-me [this y] (+ c y)))
 * 
 *   (bar-me (Foo. 1 2 3) 42)
 *   => 45
 * 
 *   (foo
 *  (let [x 42]
 *    (reify P
 *      (foo [this] 17)
 *      (bar-me [this] x)
 *      (bar-me [this y] x))))
 *   => 17
 */
cljs.core$macros.defprotocol = (function cljs$core$macros$defprotocol(var_args){
var args__48246__auto__ = [];
var len__48239__auto___58229 = arguments.length;
var i__48240__auto___58230 = (0);
while(true){
if((i__48240__auto___58230 < len__48239__auto___58229)){
args__48246__auto__.push((arguments[i__48240__auto___58230]));

var G__58231 = (i__48240__auto___58230 + (1));
i__48240__auto___58230 = G__58231;
continue;
} else {
}
break;
}

var argseq__48247__auto__ = ((((3) < args__48246__auto__.length))?(new cljs.core.IndexedSeq(args__48246__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.defprotocol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__48247__auto__);
});

cljs.core$macros.defprotocol.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,psym,doc_PLUS_methods){
var p = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,_AMPERSAND_env,new cljs.core.Keyword(null,"locals","locals",535295783)),psym));
var vec__58208 = ((typeof cljs.core.first.call(null,doc_PLUS_methods) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,doc_PLUS_methods),cljs.core.next.call(null,doc_PLUS_methods)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,doc_PLUS_methods], null));
var doc = cljs.core.nth.call(null,vec__58208,(0),null);
var methods$ = cljs.core.nth.call(null,vec__58208,(1),null);
var psym__$1 = cljs.core.vary_meta.call(null,psym,cljs.core.assoc,new cljs.core.Keyword(null,"doc","doc",1913296891),doc,new cljs.core.Keyword(null,"protocol-symbol","protocol-symbol",1279552198),true);
var ns_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
var fqn = ((function (p,vec__58208,doc,methods$,psym__$1,ns_name){
return (function (n){
return cljs.core.symbol.call(null,[cljs.core.str(ns_name),cljs.core.str("."),cljs.core.str(n)].join(''));
});})(p,vec__58208,doc,methods$,psym__$1,ns_name))
;
var prefix = cljs.core$macros.protocol_prefix.call(null,p);
var _ = (function (){var seq__58211 = cljs.core.seq.call(null,methods$);
var chunk__58212 = null;
var count__58213 = (0);
var i__58214 = (0);
while(true){
if((i__58214 < count__58213)){
var vec__58215 = cljs.core._nth.call(null,chunk__58212,i__58214);
var seq__58216 = cljs.core.seq.call(null,vec__58215);
var first__58217 = cljs.core.first.call(null,seq__58216);
var seq__58216__$1 = cljs.core.next.call(null,seq__58216);
var mname = first__58217;
var arities = seq__58216__$1;
if(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(0),null], null), null),cljs.core.map.call(null,cljs.core.count,cljs.core.filter.call(null,cljs.core.vector_QMARK_,arities))))){
throw (new Error([cljs.core.str("Invalid protocol, "),cljs.core.str(psym__$1),cljs.core.str(" defines method "),cljs.core.str(mname),cljs.core.str(" with arity 0")].join('')));
} else {
}

var G__58232 = seq__58211;
var G__58233 = chunk__58212;
var G__58234 = count__58213;
var G__58235 = (i__58214 + (1));
seq__58211 = G__58232;
chunk__58212 = G__58233;
count__58213 = G__58234;
i__58214 = G__58235;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__58211);
if(temp__4657__auto__){
var seq__58211__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__58211__$1)){
var c__47945__auto__ = cljs.core.chunk_first.call(null,seq__58211__$1);
var G__58236 = cljs.core.chunk_rest.call(null,seq__58211__$1);
var G__58237 = c__47945__auto__;
var G__58238 = cljs.core.count.call(null,c__47945__auto__);
var G__58239 = (0);
seq__58211 = G__58236;
chunk__58212 = G__58237;
count__58213 = G__58238;
i__58214 = G__58239;
continue;
} else {
var vec__58218 = cljs.core.first.call(null,seq__58211__$1);
var seq__58219 = cljs.core.seq.call(null,vec__58218);
var first__58220 = cljs.core.first.call(null,seq__58219);
var seq__58219__$1 = cljs.core.next.call(null,seq__58219);
var mname = first__58220;
var arities = seq__58219__$1;
if(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(0),null], null), null),cljs.core.map.call(null,cljs.core.count,cljs.core.filter.call(null,cljs.core.vector_QMARK_,arities))))){
throw (new Error([cljs.core.str("Invalid protocol, "),cljs.core.str(psym__$1),cljs.core.str(" defines method "),cljs.core.str(mname),cljs.core.str(" with arity 0")].join('')));
} else {
}

var G__58240 = cljs.core.next.call(null,seq__58211__$1);
var G__58241 = null;
var G__58242 = (0);
var G__58243 = (0);
seq__58211 = G__58240;
chunk__58212 = G__58241;
count__58213 = G__58242;
i__58214 = G__58243;
continue;
}
} else {
return null;
}
}
break;
}
})();
var expand_sig = ((function (p,vec__58208,doc,methods$,psym__$1,ns_name,fqn,prefix,_){
return (function (fname,slot,sig){
var sig__$1 = ((!(cljs.core.every_QMARK_.call(null,cljs.core.symbol_QMARK_,sig)))?cljs.core.mapv.call(null,((function (p,vec__58208,doc,methods$,psym__$1,ns_name,fqn,prefix,_){
return (function (arg){
if((arg instanceof cljs.core.Symbol)){
return arg;
} else {
if((cljs.core.map_QMARK_.call(null,arg)) && (cljs.core.some_QMARK_.call(null,new cljs.core.Keyword(null,"as","as",1148689641).cljs$core$IFn$_invoke$arity$1(arg)))){
return new cljs.core.Keyword(null,"as","as",1148689641).cljs$core$IFn$_invoke$arity$1(arg);
} else {
return cljs.core.gensym.call(null);

}
}
});})(p,vec__58208,doc,methods$,psym__$1,ns_name,fqn,prefix,_))
,sig):sig);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__47968__auto__ = sig__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__47968__auto__ = cljs.core.first.call(null,sig__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__47968__auto__ = cljs.core.first.call(null,sig__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.symbol.call(null,[cljs.core.str("-"),cljs.core.str(slot)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__47968__auto__ = cljs.core.first.call(null,sig__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = slot;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),sig__$1)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__47968__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__58202__auto__","x__58202__auto__",2110378431,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__47968__auto__ = cljs.core.first.call(null,sig__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__47968__auto__ = cljs.core.first.call(null,sig__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__58203__auto__","m__58203__auto__",994968827,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aget","cljs.core$macros/aget",1976136178,null)),(function (){var x__47968__auto__ = fqn.call(null,fname);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog","typeOf","goog/typeOf",539097255,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__58202__auto__","x__58202__auto__",2110378431,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__58203__auto__","m__58203__auto__",994968827,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__58203__auto__","m__58203__auto__",994968827,null)),sig__$1)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__47968__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__58203__auto__","m__58203__auto__",994968827,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aget","cljs.core$macros/aget",1976136178,null)),(function (){var x__47968__auto__ = fqn.call(null,fname);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,"_"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__58203__auto__","m__58203__auto__",994968827,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__58203__auto__","m__58203__auto__",994968827,null)),sig__$1)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","missing-protocol","cljs.core/missing-protocol",531539732,null)),(function (){var x__47968__auto__ = [cljs.core.str(psym__$1),cljs.core.str("."),cljs.core.str(fname)].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.first.call(null,sig__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
});})(p,vec__58208,doc,methods$,psym__$1,ns_name,fqn,prefix,_))
;
var psym__$2 = cljs.core.vary_meta.call(null,cljs.core.vary_meta.call(null,psym__$1,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516)], null),cljs.core.conj,"@interface"),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"protocol-info","protocol-info",1471745843),new cljs.core.Keyword(null,"methods","methods",453930866)], null),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (p,vec__58208,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig){
return (function (p__58221){
var vec__58222 = p__58221;
var seq__58223 = cljs.core.seq.call(null,vec__58222);
var first__58224 = cljs.core.first.call(null,seq__58223);
var seq__58223__$1 = cljs.core.next.call(null,seq__58223);
var fname = first__58224;
var sigs = seq__58223__$1;
var doc__$1 = (function (){var doc__$1 = cljs.core.last.call(null,sigs);
if(typeof doc__$1 === 'string'){
return doc__$1;
} else {
return null;
}
})();
var sigs__$1 = cljs.core.take_while.call(null,cljs.core.vector_QMARK_,sigs);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vary_meta.call(null,fname,cljs.core.assoc,new cljs.core.Keyword(null,"doc","doc",1913296891),doc__$1),cljs.core.vec.call(null,sigs__$1)], null);
});})(p,vec__58208,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig))
,methods$)));
var method = ((function (p,vec__58208,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2){
return (function (p__58225){
var vec__58226 = p__58225;
var seq__58227 = cljs.core.seq.call(null,vec__58226);
var first__58228 = cljs.core.first.call(null,seq__58227);
var seq__58227__$1 = cljs.core.next.call(null,seq__58227);
var fname = first__58228;
var sigs = seq__58227__$1;
var doc__$1 = (function (){var doc__$1 = cljs.core.last.call(null,sigs);
if(typeof doc__$1 === 'string'){
return doc__$1;
} else {
return null;
}
})();
var sigs__$1 = cljs.core.take_while.call(null,cljs.core.vector_QMARK_,sigs);
var amp = (cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),cljs.core.apply.call(null,cljs.core.concat,sigs__$1)))?cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"protocol-with-variadic-method","protocol-with-variadic-method",-693368178),_AMPERSAND_env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"protocol","protocol",652470118),psym__$2,new cljs.core.Keyword(null,"name","name",1843675177),fname], null)):null);
var slot = cljs.core.symbol.call(null,[cljs.core.str(prefix),cljs.core.str(cljs.core.name.call(null,fname))].join(''));
var fname__$1 = cljs.core.vary_meta.call(null,fname,cljs.core.assoc,new cljs.core.Keyword(null,"protocol","protocol",652470118),p,new cljs.core.Keyword(null,"doc","doc",1913296891),doc__$1);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null)),(function (){var x__47968__auto__ = fname__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),cljs.core.map.call(null,((function (doc__$1,sigs__$1,amp,slot,fname__$1,vec__58226,seq__58227,first__58228,seq__58227__$1,fname,sigs,p,vec__58208,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2){
return (function (sig){
return expand_sig.call(null,fname__$1,cljs.core.symbol.call(null,[cljs.core.str(slot),cljs.core.str("$arity$"),cljs.core.str(cljs.core.count.call(null,sig))].join('')),sig);
});})(doc__$1,sigs__$1,amp,slot,fname__$1,vec__58226,seq__58227,first__58228,seq__58227__$1,fname,sigs,p,vec__58208,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2))
,sigs__$1))));
});})(p,vec__58208,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"*unchecked-if*","*unchecked-if*",1542408350,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"def","def",597100991,null)),(function (){var x__47968__auto__ = psym__$2;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"function(){}"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),cljs.core.map.call(null,method,methods$),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"*unchecked-if*","*unchecked-if*",1542408350,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
});

cljs.core$macros.defprotocol.cljs$lang$maxFixedArity = (3);

cljs.core$macros.defprotocol.cljs$lang$applyTo = (function (seq58204){
var G__58205 = cljs.core.first.call(null,seq58204);
var seq58204__$1 = cljs.core.next.call(null,seq58204);
var G__58206 = cljs.core.first.call(null,seq58204__$1);
var seq58204__$2 = cljs.core.next.call(null,seq58204__$1);
var G__58207 = cljs.core.first.call(null,seq58204__$2);
var seq58204__$3 = cljs.core.next.call(null,seq58204__$2);
return cljs.core$macros.defprotocol.cljs$core$IFn$_invoke$arity$variadic(G__58205,G__58206,G__58207,seq58204__$3);
});


cljs.core$macros.defprotocol.cljs$lang$macro = true;
/**
 * EXPERIMENTAL
 */
cljs.core$macros.implements_QMARK_ = (function cljs$core$macros$implements_QMARK_(_AMPERSAND_form,_AMPERSAND_env,psym,x){
var p = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,_AMPERSAND_env,new cljs.core.Keyword(null,"locals","locals",535295783)),psym));
var prefix = cljs.core$macros.protocol_prefix.call(null,p);
var xsym = cljs.core$macros.bool_expr.call(null,cljs.core.gensym.call(null));
var vec__58247 = cljs.core$macros.fast_path_protocols.call(null,p);
var part = cljs.core.nth.call(null,vec__58247,(0),null);
var bit = cljs.core.nth.call(null,vec__58247,(1),null);
var msym = cljs.core.symbol.call(null,[cljs.core.str("-cljs$lang$protocol_mask$partition"),cljs.core.str(part),cljs.core.str("$")].join(''));
if(!((x instanceof cljs.core.Symbol))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__47968__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__47968__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__47968__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","or","cljs.core$macros/or",1346243648,null)),(function (){var x__47968__auto__ = (cljs.core.truth_(bit)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__47968__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = msym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = bit;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})()))):false);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","identical?","cljs.core$macros/identical?",815580547,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PROTOCOL_SENTINEL","cljs.core/PROTOCOL_SENTINEL",210209696,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__47968__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.symbol.call(null,[cljs.core.str("-"),cljs.core.str(prefix)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__47968__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","or","cljs.core$macros/or",1346243648,null)),(function (){var x__47968__auto__ = (cljs.core.truth_(bit)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__47968__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = msym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = bit;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})()))):false);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","identical?","cljs.core$macros/identical?",815580547,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PROTOCOL_SENTINEL","cljs.core/PROTOCOL_SENTINEL",210209696,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__47968__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.symbol.call(null,[cljs.core.str("-"),cljs.core.str(prefix)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
}
});

cljs.core$macros.implements_QMARK_.cljs$lang$macro = true;
/**
 * Returns true if x satisfies the protocol
 */
cljs.core$macros.satisfies_QMARK_ = (function cljs$core$macros$satisfies_QMARK_(_AMPERSAND_form,_AMPERSAND_env,psym,x){
var p = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,_AMPERSAND_env,new cljs.core.Keyword(null,"locals","locals",535295783)),psym));
var prefix = cljs.core$macros.protocol_prefix.call(null,p);
var xsym = cljs.core$macros.bool_expr.call(null,cljs.core.gensym.call(null));
var vec__58253 = cljs.core$macros.fast_path_protocols.call(null,p);
var part = cljs.core.nth.call(null,vec__58253,(0),null);
var bit = cljs.core.nth.call(null,vec__58253,(1),null);
var msym = cljs.core.symbol.call(null,[cljs.core.str("-cljs$lang$protocol_mask$partition"),cljs.core.str(part),cljs.core.str("$")].join(''));
if(!((x instanceof cljs.core.Symbol))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__47968__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__47968__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__47968__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","or","cljs.core$macros/or",1346243648,null)),(function (){var x__47968__auto__ = (cljs.core.truth_(bit)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__47968__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = msym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = bit;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})()))):false);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","identical?","cljs.core$macros/identical?",815580547,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PROTOCOL_SENTINEL","cljs.core/PROTOCOL_SENTINEL",210209696,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__47968__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.symbol.call(null,[cljs.core.str("-"),cljs.core.str(prefix)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","coercive-not","cljs.core$macros/coercive-not",115999987,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__47968__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = msym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","native-satisfies?","cljs.core/native-satisfies?",1482305036,null)),(function (){var x__47968__auto__ = psym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","native-satisfies?","cljs.core/native-satisfies?",1482305036,null)),(function (){var x__47968__auto__ = psym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__47968__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","or","cljs.core$macros/or",1346243648,null)),(function (){var x__47968__auto__ = (cljs.core.truth_(bit)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__47968__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = msym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = bit;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})()))):false);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","identical?","cljs.core$macros/identical?",815580547,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PROTOCOL_SENTINEL","cljs.core/PROTOCOL_SENTINEL",210209696,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__47968__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.symbol.call(null,[cljs.core.str("-"),cljs.core.str(prefix)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","coercive-not","cljs.core$macros/coercive-not",115999987,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__47968__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = msym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","native-satisfies?","cljs.core/native-satisfies?",1482305036,null)),(function (){var x__47968__auto__ = psym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","native-satisfies?","cljs.core/native-satisfies?",1482305036,null)),(function (){var x__47968__auto__ = psym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
}
});

cljs.core$macros.satisfies_QMARK_.cljs$lang$macro = true;
/**
 * Takes a body of expressions that returns an ISeq or nil, and yields
 *   a ISeqable object that will invoke the body only the first time seq
 *   is called, and will cache the result and return it on all subsequent
 *   seq calls.
 */
cljs.core$macros.lazy_seq = (function cljs$core$macros$lazy_seq(var_args){
var args__48246__auto__ = [];
var len__48239__auto___58259 = arguments.length;
var i__48240__auto___58260 = (0);
while(true){
if((i__48240__auto___58260 < len__48239__auto___58259)){
args__48246__auto__.push((arguments[i__48240__auto___58260]));

var G__58261 = (i__48240__auto___58260 + (1));
i__48240__auto___58260 = G__58261;
continue;
} else {
}
break;
}

var argseq__48247__auto__ = ((((2) < args__48246__auto__.length))?(new cljs.core.IndexedSeq(args__48246__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.lazy_seq.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__48247__auto__);
});

cljs.core$macros.lazy_seq.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","LazySeq","cljs.core/LazySeq",1986389673,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__47968__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
});

cljs.core$macros.lazy_seq.cljs$lang$maxFixedArity = (2);

cljs.core$macros.lazy_seq.cljs$lang$applyTo = (function (seq58256){
var G__58257 = cljs.core.first.call(null,seq58256);
var seq58256__$1 = cljs.core.next.call(null,seq58256);
var G__58258 = cljs.core.first.call(null,seq58256__$1);
var seq58256__$2 = cljs.core.next.call(null,seq58256__$1);
return cljs.core$macros.lazy_seq.cljs$core$IFn$_invoke$arity$variadic(G__58257,G__58258,seq58256__$2);
});


cljs.core$macros.lazy_seq.cljs$lang$macro = true;
/**
 * Takes a body of expressions and yields a Delay object that will
 *   invoke the body only the first time it is forced (with force or deref/@), and
 *   will cache the result and return it on all subsequent force
 *   calls.
 */
cljs.core$macros.delay = (function cljs$core$macros$delay(var_args){
var args__48246__auto__ = [];
var len__48239__auto___58265 = arguments.length;
var i__48240__auto___58266 = (0);
while(true){
if((i__48240__auto___58266 < len__48239__auto___58265)){
args__48246__auto__.push((arguments[i__48240__auto___58266]));

var G__58267 = (i__48240__auto___58266 + (1));
i__48240__auto___58266 = G__58267;
continue;
} else {
}
break;
}

var argseq__48247__auto__ = ((((2) < args__48246__auto__.length))?(new cljs.core.IndexedSeq(args__48246__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.delay.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__48247__auto__);
});

cljs.core$macros.delay.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","Delay","cljs.core/Delay",-21574999,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__47968__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
});

cljs.core$macros.delay.cljs$lang$maxFixedArity = (2);

cljs.core$macros.delay.cljs$lang$applyTo = (function (seq58262){
var G__58263 = cljs.core.first.call(null,seq58262);
var seq58262__$1 = cljs.core.next.call(null,seq58262);
var G__58264 = cljs.core.first.call(null,seq58262__$1);
var seq58262__$2 = cljs.core.next.call(null,seq58262__$1);
return cljs.core$macros.delay.cljs$core$IFn$_invoke$arity$variadic(G__58263,G__58264,seq58262__$2);
});


cljs.core$macros.delay.cljs$lang$macro = true;
/**
 * binding => var-symbol temp-value-expr
 * 
 *   Temporarily redefines vars while executing the body.  The
 *   temp-value-exprs will be evaluated and each resulting value will
 *   replace in parallel the root value of its var.  After the body is
 *   executed, the root values of all the vars will be set back to their
 *   old values. Useful for mocking out functions during testing.
 */
cljs.core$macros.with_redefs = (function cljs$core$macros$with_redefs(var_args){
var args__48246__auto__ = [];
var len__48239__auto___58276 = arguments.length;
var i__48240__auto___58277 = (0);
while(true){
if((i__48240__auto___58277 < len__48239__auto___58276)){
args__48246__auto__.push((arguments[i__48240__auto___58277]));

var G__58278 = (i__48240__auto___58277 + (1));
i__48240__auto___58277 = G__58278;
continue;
} else {
}
break;
}

var argseq__48247__auto__ = ((((3) < args__48246__auto__.length))?(new cljs.core.IndexedSeq(args__48246__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.with_redefs.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__48247__auto__);
});

cljs.core$macros.with_redefs.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
var names = cljs.core.take_nth.call(null,(2),bindings);
var vals = cljs.core.take_nth.call(null,(2),cljs.core.drop.call(null,(1),bindings));
var tempnames = cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.gensym,cljs.core.name),names);
var binds = cljs.core.map.call(null,cljs.core.vector,names,vals);
var resets = cljs.core.reverse.call(null,cljs.core.map.call(null,cljs.core.vector,names,tempnames));
var bind_value = ((function (names,vals,tempnames,binds,resets){
return (function (p__58272){
var vec__58273 = p__58272;
var k = cljs.core.nth.call(null,vec__58273,(0),null);
var v = cljs.core.nth.call(null,vec__58273,(1),null);
return cljs.core._conj.call(null,(function (){var x__47968__auto__ = k;
return cljs.core._conj.call(null,(function (){var x__47968__auto____$1 = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto____$1);
})(),x__47968__auto__);
})(),new cljs.core.Symbol(null,"set!","set!",250714521,null));
});})(names,vals,tempnames,binds,resets))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__47968__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.interleave.call(null,tempnames,names)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),cljs.core.map.call(null,bind_value,binds),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"try","try",-1273693247,null)),body,(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"finally","finally",-1065347064,null)),cljs.core.map.call(null,bind_value,resets))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
});

cljs.core$macros.with_redefs.cljs$lang$maxFixedArity = (3);

cljs.core$macros.with_redefs.cljs$lang$applyTo = (function (seq58268){
var G__58269 = cljs.core.first.call(null,seq58268);
var seq58268__$1 = cljs.core.next.call(null,seq58268);
var G__58270 = cljs.core.first.call(null,seq58268__$1);
var seq58268__$2 = cljs.core.next.call(null,seq58268__$1);
var G__58271 = cljs.core.first.call(null,seq58268__$2);
var seq58268__$3 = cljs.core.next.call(null,seq58268__$2);
return cljs.core$macros.with_redefs.cljs$core$IFn$_invoke$arity$variadic(G__58269,G__58270,G__58271,seq58268__$3);
});


cljs.core$macros.with_redefs.cljs$lang$macro = true;
/**
 * binding => var-symbol init-expr
 * 
 *   Creates new bindings for the (already-existing) vars, with the
 *   supplied initial values, executes the exprs in an implicit do, then
 *   re-establishes the bindings that existed before.  The new bindings
 *   are made in parallel (unlike let); all init-exprs are evaluated
 *   before the vars are bound to their new values.
 */
cljs.core$macros.binding = (function cljs$core$macros$binding(var_args){
var args__48246__auto__ = [];
var len__48239__auto___58283 = arguments.length;
var i__48240__auto___58284 = (0);
while(true){
if((i__48240__auto___58284 < len__48239__auto___58283)){
args__48246__auto__.push((arguments[i__48240__auto___58284]));

var G__58285 = (i__48240__auto___58284 + (1));
i__48240__auto___58284 = G__58285;
continue;
} else {
}
break;
}

var argseq__48247__auto__ = ((((3) < args__48246__auto__.length))?(new cljs.core.IndexedSeq(args__48246__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.binding.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__48247__auto__);
});

cljs.core$macros.binding.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
var names = cljs.core.take_nth.call(null,(2),bindings);
cljs.analyzer.confirm_bindings.call(null,_AMPERSAND_env,names);

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","with-redefs","cljs.core$macros/with-redefs",1489217801,null)),(function (){var x__47968__auto__ = bindings;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),body)));
});

cljs.core$macros.binding.cljs$lang$maxFixedArity = (3);

cljs.core$macros.binding.cljs$lang$applyTo = (function (seq58279){
var G__58280 = cljs.core.first.call(null,seq58279);
var seq58279__$1 = cljs.core.next.call(null,seq58279);
var G__58281 = cljs.core.first.call(null,seq58279__$1);
var seq58279__$2 = cljs.core.next.call(null,seq58279__$1);
var G__58282 = cljs.core.first.call(null,seq58279__$2);
var seq58279__$3 = cljs.core.next.call(null,seq58279__$2);
return cljs.core$macros.binding.cljs$core$IFn$_invoke$arity$variadic(G__58280,G__58281,G__58282,seq58279__$3);
});


cljs.core$macros.binding.cljs$lang$macro = true;
/**
 * Takes a binary predicate, an expression, and a set of clauses.
 *   Each clause can take the form of either:
 * 
 *   test-expr result-expr
 * 
 *   test-expr :>> result-fn
 * 
 *   Note :>> is an ordinary keyword.
 * 
 *   For each clause, (pred test-expr expr) is evaluated. If it returns
 *   logical true, the clause is a match. If a binary clause matches, the
 *   result-expr is returned, if a ternary clause matches, its result-fn,
 *   which must be a unary function, is called with the result of the
 *   predicate as its argument, the result of that call being the return
 *   value of condp. A single default expression can follow the clauses,
 *   and its value will be returned if no clause matches. If no default
 *   expression is provided and no clause matches, an
 *   IllegalArgumentException is thrown.
 */
cljs.core$macros.condp = (function cljs$core$macros$condp(var_args){
var args__48246__auto__ = [];
var len__48239__auto___58304 = arguments.length;
var i__48240__auto___58305 = (0);
while(true){
if((i__48240__auto___58305 < len__48239__auto___58304)){
args__48246__auto__.push((arguments[i__48240__auto___58305]));

var G__58306 = (i__48240__auto___58305 + (1));
i__48240__auto___58305 = G__58306;
continue;
} else {
}
break;
}

var argseq__48247__auto__ = ((((4) < args__48246__auto__.length))?(new cljs.core.IndexedSeq(args__48246__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.condp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__48247__auto__);
});

cljs.core$macros.condp.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,pred,expr,clauses){
var gpred = cljs.core.gensym.call(null,"pred__");
var gexpr = cljs.core.gensym.call(null,"expr__");
var emit = ((function (gpred,gexpr){
return (function cljs$core$macros$emit(pred__$1,expr__$1,args){
var vec__58298 = cljs.core.split_at.call(null,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,">>",">>",-277509267),cljs.core.second.call(null,args)))?(3):(2)),args);
var vec__58301 = cljs.core.nth.call(null,vec__58298,(0),null);
var a = cljs.core.nth.call(null,vec__58301,(0),null);
var b = cljs.core.nth.call(null,vec__58301,(1),null);
var c = cljs.core.nth.call(null,vec__58301,(2),null);
var clause = vec__58301;
var more = cljs.core.nth.call(null,vec__58298,(1),null);
var n = cljs.core.count.call(null,clause);
if(cljs.core._EQ_.call(null,(0),n)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"No matching clause: "),(function (){var x__47968__auto__ = expr__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
} else {
if(cljs.core._EQ_.call(null,(1),n)){
return a;
} else {
if(cljs.core._EQ_.call(null,(2),n)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__47968__auto__ = pred__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = a;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = expr__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = b;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs$core$macros$emit.call(null,pred__$1,expr__$1,more);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-let","cljs.core$macros/if-let",1291543946,null)),(function (){var x__47968__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"p__58286__auto__","p__58286__auto__",-134985486,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__47968__auto__ = pred__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = a;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = expr__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__47968__auto__ = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"p__58286__auto__","p__58286__auto__",-134985486,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs$core$macros$emit.call(null,pred__$1,expr__$1,more);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));

}
}
}
});})(gpred,gexpr))
;
var gres = cljs.core.gensym.call(null,"res__");
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__47968__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__47968__auto__ = gpred;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = pred;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = gexpr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = emit.call(null,gpred,gexpr,clauses);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
});

cljs.core$macros.condp.cljs$lang$maxFixedArity = (4);

cljs.core$macros.condp.cljs$lang$applyTo = (function (seq58287){
var G__58288 = cljs.core.first.call(null,seq58287);
var seq58287__$1 = cljs.core.next.call(null,seq58287);
var G__58289 = cljs.core.first.call(null,seq58287__$1);
var seq58287__$2 = cljs.core.next.call(null,seq58287__$1);
var G__58290 = cljs.core.first.call(null,seq58287__$2);
var seq58287__$3 = cljs.core.next.call(null,seq58287__$2);
var G__58291 = cljs.core.first.call(null,seq58287__$3);
var seq58287__$4 = cljs.core.next.call(null,seq58287__$3);
return cljs.core$macros.condp.cljs$core$IFn$_invoke$arity$variadic(G__58288,G__58289,G__58290,G__58291,seq58287__$4);
});


cljs.core$macros.condp.cljs$lang$macro = true;
cljs.core$macros.assoc_test = (function cljs$core$macros$assoc_test(m,test,expr,env){
if(cljs.core.contains_QMARK_.call(null,m,test)){
throw (new Error([cljs.core.str("Duplicate case test constant '"),cljs.core.str(test),cljs.core.str("'"),cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env))?[cljs.core.str(" on line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env)),cljs.core.str(" "),cljs.core.str(cljs.analyzer._STAR_cljs_file_STAR_)].join(''):null))].join('')));
} else {
return cljs.core.assoc.call(null,m,test,expr);
}
});
cljs.core$macros.const_QMARK_ = (function cljs$core$macros$const_QMARK_(env,x){
var m = (function (){var and__47119__auto__ = cljs.core.list_QMARK_.call(null,x);
if(and__47119__auto__){
return cljs.analyzer.resolve_var.call(null,env,cljs.core.last.call(null,x));
} else {
return and__47119__auto__;
}
})();
if(cljs.core.truth_(m)){
return cljs.core.get.call(null,m,new cljs.core.Keyword(null,"const","const",1709929842));
} else {
return null;
}
});
/**
 * Takes an expression, and a set of clauses.
 * 
 *   Each clause can take the form of either:
 * 
 *   test-constant result-expr
 * 
 *   (test-constant1 ... test-constantN)  result-expr
 * 
 *   The test-constants are not evaluated. They must be compile-time
 *   literals, and need not be quoted.  If the expression is equal to a
 *   test-constant, the corresponding result-expr is returned. A single
 *   default expression can follow the clauses, and its value will be
 *   returned if no clause matches. If no default expression is provided
 *   and no clause matches, an Error is thrown.
 * 
 *   Unlike cond and condp, case does a constant-time dispatch, the
 *   clauses are not considered sequentially.  All manner of constant
 *   expressions are acceptable in case, including numbers, strings,
 *   symbols, keywords, and (ClojureScript) composites thereof. Note that since
 *   lists are used to group multiple constants that map to the same
 *   expression, a vector can be used to match a list if needed. The
 *   test-constants need not be all of the same type.
 */
cljs.core$macros.case$ = (function cljs$core$macros$case(var_args){
var args__48246__auto__ = [];
var len__48239__auto___58327 = arguments.length;
var i__48240__auto___58328 = (0);
while(true){
if((i__48240__auto___58328 < len__48239__auto___58327)){
args__48246__auto__.push((arguments[i__48240__auto___58328]));

var G__58329 = (i__48240__auto___58328 + (1));
i__48240__auto___58328 = G__58329;
continue;
} else {
}
break;
}

var argseq__48247__auto__ = ((((3) < args__48246__auto__.length))?(new cljs.core.IndexedSeq(args__48246__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.case$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__48247__auto__);
});

cljs.core$macros.case$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,e,clauses){
var default$ = ((cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,clauses)))?cljs.core.last.call(null,clauses):cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"No matching clause: "),(function (){var x__47968__auto__ = e;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})()))));
var env = _AMPERSAND_env;
var pairs = cljs.core.reduce.call(null,((function (default$,env){
return (function (m,p__58315){
var vec__58316 = p__58315;
var test = cljs.core.nth.call(null,vec__58316,(0),null);
var expr = cljs.core.nth.call(null,vec__58316,(1),null);
if(cljs.core.seq_QMARK_.call(null,test)){
return cljs.core.reduce.call(null,((function (vec__58316,test,expr,default$,env){
return (function (m__$1,test__$1){
var test__$2 = (((test__$1 instanceof cljs.core.Symbol))?cljs.core._conj.call(null,(function (){var x__47968__auto__ = test__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),new cljs.core.Symbol(null,"quote","quote",1377916282,null)):test__$1);
return cljs.core$macros.assoc_test.call(null,m__$1,test__$2,expr,env);
});})(vec__58316,test,expr,default$,env))
,m,test);
} else {
if((test instanceof cljs.core.Symbol)){
return cljs.core$macros.assoc_test.call(null,m,cljs.core._conj.call(null,(function (){var x__47968__auto__ = test;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),new cljs.core.Symbol(null,"quote","quote",1377916282,null)),expr,env);
} else {
return cljs.core$macros.assoc_test.call(null,m,test,expr,env);

}
}
});})(default$,env))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.partition.call(null,(2),clauses));
var esym = cljs.core.gensym.call(null);
var tests = cljs.core.keys.call(null,pairs);
if(cljs.core.every_QMARK_.call(null,cljs.core.some_fn.call(null,cljs.core.number_QMARK_,cljs.core.string_QMARK_,cljs.core.fnil.call(null,cljs.core.char_QMARK_,new cljs.core.Keyword(null,"nonchar","nonchar",-421759703)),((function (default$,env,pairs,esym,tests){
return (function (p1__58307_SHARP_){
return cljs.core$macros.const_QMARK_.call(null,env,p1__58307_SHARP_);
});})(default$,env,pairs,esym,tests))
),tests)){
var no_default = ((cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,clauses)))?cljs.core.butlast.call(null,clauses):clauses);
var tests__$1 = cljs.core.mapv.call(null,((function (no_default,default$,env,pairs,esym,tests){
return (function (p1__58308_SHARP_){
if(cljs.core.seq_QMARK_.call(null,p1__58308_SHARP_)){
return cljs.core.vec.call(null,p1__58308_SHARP_);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__58308_SHARP_], null);
}
});})(no_default,default$,env,pairs,esym,tests))
,cljs.core.take_nth.call(null,(2),no_default));
var thens = cljs.core.vec.call(null,cljs.core.take_nth.call(null,(2),cljs.core.drop.call(null,(1),no_default)));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__47968__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__47968__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = e;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"case*","case*",-1938255072,null)),(function (){var x__47968__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = tests__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = thens;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = default$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
} else {
if(cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,tests)){
var tests__$1 = cljs.core.mapv.call(null,((function (default$,env,pairs,esym,tests){
return (function (p1__58310_SHARP_){
if(cljs.core.seq_QMARK_.call(null,p1__58310_SHARP_)){
return cljs.core.vec.call(null,p1__58310_SHARP_);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__58310_SHARP_], null);
}
});})(default$,env,pairs,esym,tests))
,cljs.core.vec.call(null,cljs.core.map.call(null,((function (default$,env,pairs,esym,tests){
return (function (p1__58309_SHARP_){
return [cljs.core.str(p1__58309_SHARP_)].join('').substring((1));
});})(default$,env,pairs,esym,tests))
,tests)));
var thens = cljs.core.vec.call(null,cljs.core.vals.call(null,pairs));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__47968__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__47968__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","keyword?","cljs.core$macros/keyword?",1362730141,null)),(function (){var x__47968__auto__ = e;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-fqn",".-fqn",1246113027,null)),(function (){var x__47968__auto__ = e;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"case*","case*",-1938255072,null)),(function (){var x__47968__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = tests__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = thens;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = default$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__47968__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__47968__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = e;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","cond","cljs.core$macros/cond",1626318471,null)),cljs.core.mapcat.call(null,((function (default$,env,pairs,esym,tests){
return (function (p__58323){
var vec__58324 = p__58323;
var m = cljs.core.nth.call(null,vec__58324,(0),null);
var c = cljs.core.nth.call(null,vec__58324,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null)),(function (){var x__47968__auto__ = m;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
});})(default$,env,pairs,esym,tests))
,pairs),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"else","else",-1508377146)),(function (){var x__47968__auto__ = default$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));

}
}
});

cljs.core$macros.case$.cljs$lang$maxFixedArity = (3);

cljs.core$macros.case$.cljs$lang$applyTo = (function (seq58311){
var G__58312 = cljs.core.first.call(null,seq58311);
var seq58311__$1 = cljs.core.next.call(null,seq58311);
var G__58313 = cljs.core.first.call(null,seq58311__$1);
var seq58311__$2 = cljs.core.next.call(null,seq58311__$1);
var G__58314 = cljs.core.first.call(null,seq58311__$2);
var seq58311__$3 = cljs.core.next.call(null,seq58311__$2);
return cljs.core$macros.case$.cljs$core$IFn$_invoke$arity$variadic(G__58312,G__58313,G__58314,seq58311__$3);
});


cljs.core$macros.case$.cljs$lang$macro = true;
/**
 * Evaluates expr and throws an exception if it does not evaluate to
 *   logical true.
 */
cljs.core$macros.assert = (function cljs$core$macros$assert(var_args){
var args58330 = [];
var len__48239__auto___58333 = arguments.length;
var i__48240__auto___58334 = (0);
while(true){
if((i__48240__auto___58334 < len__48239__auto___58333)){
args58330.push((arguments[i__48240__auto___58334]));

var G__58335 = (i__48240__auto___58334 + (1));
i__48240__auto___58334 = G__58335;
continue;
} else {
}
break;
}

var G__58332 = args58330.length;
switch (G__58332) {
case 3:
return cljs.core$macros.assert.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.assert.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str((args58330.length - (2)))].join('')));

}
});

cljs.core$macros.assert.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
if(cljs.core.truth_(cljs.core._STAR_assert_STAR_)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-not","cljs.core$macros/when-not",-764302244,null)),(function (){var x__47968__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__47968__auto__ = [cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,x))].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
} else {
return null;
}
});

cljs.core$macros.assert.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,message){
if(cljs.core.truth_(cljs.core._STAR_assert_STAR_)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-not","cljs.core$macros/when-not",-764302244,null)),(function (){var x__47968__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"Assert failed: "),(function (){var x__47968__auto__ = message;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,"\n"),(function (){var x__47968__auto__ = cljs.core.pr_str.call(null,x);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
} else {
return null;
}
});

cljs.core$macros.assert.cljs$lang$maxFixedArity = 4;


cljs.core$macros.assert.cljs$lang$macro = true;
/**
 * List comprehension. Takes a vector of one or more
 * binding-form/collection-expr pairs, each followed by zero or more
 * modifiers, and yields a lazy sequence of evaluations of expr.
 * Collections are iterated in a nested fashion, rightmost fastest,
 * and nested coll-exprs can refer to bindings created in prior
 * binding-forms.  Supported modifiers are: :let [binding-form expr ...],
 * :while test, :when test.
 * 
 *   (take 100 (for [x (range 100000000) y (range 1000000) :while (< y x)]  [x y]))
 */
cljs.core$macros.for$ = (function cljs$core$macros$for(_AMPERSAND_form,_AMPERSAND_env,seq_exprs,body_expr){
if(cljs.core.vector_QMARK_.call(null,seq_exprs)){
} else {
throw cljs.core.ex_info.call(null,"for requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,seq_exprs))){
} else {
throw cljs.core.ex_info.call(null,"for requires an even number of forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var to_groups = (function (seq_exprs__$1){
return cljs.core.reduce.call(null,(function (groups,p__58423){
var vec__58424 = p__58423;
var k = cljs.core.nth.call(null,vec__58424,(0),null);
var v = cljs.core.nth.call(null,vec__58424,(1),null);
if((k instanceof cljs.core.Keyword)){
return cljs.core.conj.call(null,cljs.core.pop.call(null,groups),cljs.core.conj.call(null,cljs.core.peek.call(null,groups),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null)));
} else {
return cljs.core.conj.call(null,groups,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
}
}),cljs.core.PersistentVector.EMPTY,cljs.core.partition.call(null,(2),seq_exprs__$1));
});
var err = ((function (to_groups){
return (function() { 
var G__58504__delegate = function (msg){
throw cljs.core.ex_info.call(null,cljs.core.apply.call(null,cljs.core.str,msg),cljs.core.PersistentArrayMap.EMPTY);
};
var G__58504 = function (var_args){
var msg = null;
if (arguments.length > 0) {
var G__58505__i = 0, G__58505__a = new Array(arguments.length -  0);
while (G__58505__i < G__58505__a.length) {G__58505__a[G__58505__i] = arguments[G__58505__i + 0]; ++G__58505__i;}
  msg = new cljs.core.IndexedSeq(G__58505__a,0);
} 
return G__58504__delegate.call(this,msg);};
G__58504.cljs$lang$maxFixedArity = 0;
G__58504.cljs$lang$applyTo = (function (arglist__58506){
var msg = cljs.core.seq(arglist__58506);
return G__58504__delegate(msg);
});
G__58504.cljs$core$IFn$_invoke$arity$variadic = G__58504__delegate;
return G__58504;
})()
;})(to_groups))
;
var emit_bind = ((function (to_groups,err){
return (function cljs$core$macros$for_$_emit_bind(p__58427){
var vec__58466 = p__58427;
var seq__58467 = cljs.core.seq.call(null,vec__58466);
var first__58468 = cljs.core.first.call(null,seq__58467);
var seq__58467__$1 = cljs.core.next.call(null,seq__58467);
var vec__58469 = first__58468;
var seq__58470 = cljs.core.seq.call(null,vec__58469);
var first__58471 = cljs.core.first.call(null,seq__58470);
var seq__58470__$1 = cljs.core.next.call(null,seq__58470);
var bind = first__58471;
var first__58471__$1 = cljs.core.first.call(null,seq__58470__$1);
var seq__58470__$2 = cljs.core.next.call(null,seq__58470__$1);
var expr = first__58471__$1;
var mod_pairs = seq__58470__$2;
var vec__58472 = seq__58467__$1;
var vec__58475 = cljs.core.nth.call(null,vec__58472,(0),null);
var _ = cljs.core.nth.call(null,vec__58475,(0),null);
var next_expr = cljs.core.nth.call(null,vec__58475,(1),null);
var next_groups = vec__58472;
var giter = cljs.core.gensym.call(null,"iter__");
var gxs = cljs.core.gensym.call(null,"s__");
var do_mod = ((function (giter,gxs,vec__58466,seq__58467,first__58468,seq__58467__$1,vec__58469,seq__58470,first__58471,seq__58470__$1,bind,first__58471__$1,seq__58470__$2,expr,mod_pairs,vec__58472,vec__58475,_,next_expr,next_groups,to_groups,err){
return (function cljs$core$macros$for_$_emit_bind_$_do_mod(p__58478){
var vec__58485 = p__58478;
var seq__58486 = cljs.core.seq.call(null,vec__58485);
var first__58487 = cljs.core.first.call(null,seq__58486);
var seq__58486__$1 = cljs.core.next.call(null,seq__58486);
var vec__58488 = first__58487;
var k = cljs.core.nth.call(null,vec__58488,(0),null);
var v = cljs.core.nth.call(null,vec__58488,(1),null);
var pair = vec__58488;
var etc = seq__58486__$1;
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"let","let",-1282412701))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__47968__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs$core$macros$for_$_emit_bind_$_do_mod.call(null,etc);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
} else {
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"while","while",963117786))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__47968__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs$core$macros$for_$_emit_bind_$_do_mod.call(null,etc);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
} else {
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"when","when",-576417306))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__47968__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs$core$macros$for_$_emit_bind_$_do_mod.call(null,etc);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","rest","cljs.core/rest",-285075455,null)),(function (){var x__47968__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
} else {
if((k instanceof cljs.core.Keyword)){
return err.call(null,"Invalid 'for' keyword ",k);
} else {
if(next_groups){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__47968__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"iterys__58337__auto__","iterys__58337__auto__",504417532,null)),(function (){var x__47968__auto__ = cljs$core$macros$for_$_emit_bind.call(null,next_groups);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"fs__58338__auto__","fs__58338__auto__",-1173436331,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"iterys__58337__auto__","iterys__58337__auto__",504417532,null)),(function (){var x__47968__auto__ = next_expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"fs__58338__auto__","fs__58338__auto__",-1173436331,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"fs__58338__auto__","fs__58338__auto__",-1173436331,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__47968__auto__ = giter;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","rest","cljs.core/rest",-285075455,null)),(function (){var x__47968__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","rest","cljs.core/rest",-285075455,null)),(function (){var x__47968__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","cons","cljs.core/cons",96507417,null)),(function (){var x__47968__auto__ = body_expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__47968__auto__ = giter;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","rest","cljs.core/rest",-285075455,null)),(function (){var x__47968__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));

}
}
}
}
}
});})(giter,gxs,vec__58466,seq__58467,first__58468,seq__58467__$1,vec__58469,seq__58470,first__58471,seq__58470__$1,bind,first__58471__$1,seq__58470__$2,expr,mod_pairs,vec__58472,vec__58475,_,next_expr,next_groups,to_groups,err))
;
if(next_groups){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__47968__auto__ = giter;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__47968__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","lazy-seq","cljs.core$macros/lazy-seq",806482650,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__47968__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__47968__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-first","cljs.core$macros/when-first",-840670160,null)),(function (){var x__47968__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__47968__auto__ = bind;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = do_mod.call(null,mod_pairs);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
} else {
var gi = cljs.core.gensym.call(null,"i__");
var gb = cljs.core.gensym.call(null,"b__");
var do_cmod = ((function (gi,gb,giter,gxs,do_mod,vec__58466,seq__58467,first__58468,seq__58467__$1,vec__58469,seq__58470,first__58471,seq__58470__$1,bind,first__58471__$1,seq__58470__$2,expr,mod_pairs,vec__58472,vec__58475,_,next_expr,next_groups,to_groups,err){
return (function cljs$core$macros$for_$_emit_bind_$_do_cmod(p__58491){
var vec__58498 = p__58491;
var seq__58499 = cljs.core.seq.call(null,vec__58498);
var first__58500 = cljs.core.first.call(null,seq__58499);
var seq__58499__$1 = cljs.core.next.call(null,seq__58499);
var vec__58501 = first__58500;
var k = cljs.core.nth.call(null,vec__58501,(0),null);
var v = cljs.core.nth.call(null,vec__58501,(1),null);
var pair = vec__58501;
var etc = seq__58499__$1;
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"let","let",-1282412701))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__47968__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs$core$macros$for_$_emit_bind_$_do_cmod.call(null,etc);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
} else {
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"while","while",963117786))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__47968__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs$core$macros$for_$_emit_bind_$_do_cmod.call(null,etc);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
} else {
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"when","when",-576417306))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__47968__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs$core$macros$for_$_emit_bind_$_do_cmod.call(null,etc);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unchecked-inc","cljs.core$macros/unchecked-inc",-1615365330,null)),(function (){var x__47968__auto__ = gi;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
} else {
if((k instanceof cljs.core.Keyword)){
return err.call(null,"Invalid 'for' keyword ",k);
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-append","cljs.core/chunk-append",-243671470,null)),(function (){var x__47968__auto__ = gb;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = body_expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unchecked-inc","cljs.core$macros/unchecked-inc",-1615365330,null)),(function (){var x__47968__auto__ = gi;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));

}
}
}
}
});})(gi,gb,giter,gxs,do_mod,vec__58466,seq__58467,first__58468,seq__58467__$1,vec__58469,seq__58470,first__58471,seq__58470__$1,bind,first__58471__$1,seq__58470__$2,expr,mod_pairs,vec__58472,vec__58475,_,next_expr,next_groups,to_groups,err))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__47968__auto__ = giter;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__47968__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","lazy-seq","cljs.core$macros/lazy-seq",806482650,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__47968__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__47968__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-let","cljs.core$macros/when-let",-2004472648,null)),(function (){var x__47968__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__47968__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__47968__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunked-seq?","cljs.core/chunked-seq?",-712922369,null)),(function (){var x__47968__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__47968__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__58339__auto__","c__58339__auto__",1782205119,null)),(function (){var x__47968__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-first","cljs.core/chunk-first",-1157877305,null)),(function (){var x__47968__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})()))),cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"/Users/ru/clojure/fligts-pro/resources/public/js/out/cljs/core.cljc"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2326),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj.call(null,cljs.core.List.EMPTY,52),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2326),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj.call(null,cljs.core.List.EMPTY,82),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"tag","tag",-1290361223)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not-native","cljs.core/not-native",-1716909265,null)))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"size__58340__auto__","size__58340__auto__",1358318186,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__58339__auto__","c__58339__auto__",1782205119,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = gb;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-buffer","cljs.core/chunk-buffer",14093626,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"size__58340__auto__","size__58340__auto__",1358318186,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","coercive-boolean","cljs.core$macros/coercive-boolean",-450758280,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__47968__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__47968__auto__ = gi;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__47968__auto__ = gi;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"size__58340__auto__","size__58340__auto__",1358318186,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__47968__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__47968__auto__ = bind;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-nth","cljs.core/-nth",504234802,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__58339__auto__","c__58339__auto__",1782205119,null)),(function (){var x__47968__auto__ = gi;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = do_cmod.call(null,mod_pairs);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-cons","cljs.core/chunk-cons",-250075688,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk","cljs.core/chunk",847936424,null)),(function (){var x__47968__auto__ = gb;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__47968__auto__ = giter;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-rest","cljs.core/chunk-rest",-398161143,null)),(function (){var x__47968__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-cons","cljs.core/chunk-cons",-250075688,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk","cljs.core/chunk",847936424,null)),(function (){var x__47968__auto__ = gb;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__47968__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__47968__auto__ = bind;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null)),(function (){var x__47968__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = do_mod.call(null,mod_pairs);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
}
});})(to_groups,err))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__47968__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"iter__58341__auto__","iter__58341__auto__",1878128,null)),(function (){var x__47968__auto__ = emit_bind.call(null,to_groups.call(null,seq_exprs));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"iter__58341__auto__","iter__58341__auto__",1878128,null)),(function (){var x__47968__auto__ = cljs.core.second.call(null,seq_exprs);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
});

cljs.core$macros.for$.cljs$lang$macro = true;
/**
 * Repeatedly executes body (presumably for side-effects) with
 *   bindings and filtering as provided by "for".  Does not retain
 *   the head of the sequence. Returns nil.
 */
cljs.core$macros.doseq = (function cljs$core$macros$doseq(var_args){
var args__48246__auto__ = [];
var len__48239__auto___58512 = arguments.length;
var i__48240__auto___58513 = (0);
while(true){
if((i__48240__auto___58513 < len__48239__auto___58512)){
args__48246__auto__.push((arguments[i__48240__auto___58513]));

var G__58514 = (i__48240__auto___58513 + (1));
i__48240__auto___58513 = G__58514;
continue;
} else {
}
break;
}

var argseq__48247__auto__ = ((((3) < args__48246__auto__.length))?(new cljs.core.IndexedSeq(args__48246__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.doseq.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__48247__auto__);
});

cljs.core$macros.doseq.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,seq_exprs,body){
if(cljs.core.vector_QMARK_.call(null,seq_exprs)){
} else {
throw cljs.core.ex_info.call(null,"doseq requires a vector for its binding",cljs.core.PersistentArrayMap.EMPTY);
}

if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,seq_exprs))){
} else {
throw cljs.core.ex_info.call(null,"doseq requires an even number of forms in binding vector",cljs.core.PersistentArrayMap.EMPTY);
}


var err = (function() { 
var G__58515__delegate = function (msg){
throw cljs.core.ex_info.call(null,cljs.core.apply.call(null,cljs.core.str,msg),cljs.core.PersistentArrayMap.EMPTY);
};
var G__58515 = function (var_args){
var msg = null;
if (arguments.length > 0) {
var G__58516__i = 0, G__58516__a = new Array(arguments.length -  0);
while (G__58516__i < G__58516__a.length) {G__58516__a[G__58516__i] = arguments[G__58516__i + 0]; ++G__58516__i;}
  msg = new cljs.core.IndexedSeq(G__58516__a,0);
} 
return G__58515__delegate.call(this,msg);};
G__58515.cljs$lang$maxFixedArity = 0;
G__58515.cljs$lang$applyTo = (function (arglist__58517){
var msg = cljs.core.seq(arglist__58517);
return G__58515__delegate(msg);
});
G__58515.cljs$core$IFn$_invoke$arity$variadic = G__58515__delegate;
return G__58515;
})()
;
var step = ((function (err){
return (function cljs$core$macros$step(recform,exprs){
if(cljs.core.not.call(null,exprs)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),body)))], null);
} else {
var k = cljs.core.first.call(null,exprs);
var v = cljs.core.second.call(null,exprs);
var seqsym = cljs.core.gensym.call(null,"seq__");
var recform__$1 = (((k instanceof cljs.core.Keyword))?recform:cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","next","cljs.core/next",-1291438473,null)),(function (){var x__47968__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0))))));
var steppair = cljs$core$macros$step.call(null,recform__$1,cljs.core.nnext.call(null,exprs));
var needrec = steppair.call(null,(0));
var subform = steppair.call(null,(1));
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"let","let",-1282412701))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [needrec,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__47968__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = subform;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())))], null);
} else {
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"while","while",963117786))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__47968__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = subform;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(cljs.core.truth_(needrec)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recform__$1], null):null))))], null);
} else {
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"when","when",-576417306))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__47968__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__47968__auto__ = subform;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(cljs.core.truth_(needrec)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recform__$1], null):null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = recform__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())))], null);
} else {
if((k instanceof cljs.core.Keyword)){
return err.call(null,"Invalid 'doseq' keyword",k);
} else {
var chunksym = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"chunk__"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"not-native","not-native",-236392494,null)], null));
var countsym = cljs.core.gensym.call(null,"count__");
var isym = cljs.core.gensym.call(null,"i__");
var recform_chunk = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__47968__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = chunksym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = countsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unchecked-inc","cljs.core$macros/unchecked-inc",-1615365330,null)),(function (){var x__47968__auto__ = isym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
var steppair_chunk = cljs$core$macros$step.call(null,recform_chunk,cljs.core.nnext.call(null,exprs));
var subform_chunk = steppair_chunk.call(null,(1));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__47968__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__47968__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__47968__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = chunksym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__47968__auto__ = countsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),(function (){var x__47968__auto__ = isym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","coercive-boolean","cljs.core$macros/coercive-boolean",-450758280,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__47968__auto__ = isym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = countsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__47968__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__47968__auto__ = k;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-nth","cljs.core/-nth",504234802,null)),(function (){var x__47968__auto__ = chunksym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = isym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = subform_chunk;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(cljs.core.truth_(needrec)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recform_chunk], null):null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-let","cljs.core$macros/when-let",-2004472648,null)),(function (){var x__47968__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__47968__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__47968__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunked-seq?","cljs.core/chunked-seq?",-712922369,null)),(function (){var x__47968__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__47968__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__58507__auto__","c__58507__auto__",-158952697,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-first","cljs.core/chunk-first",-1157877305,null)),(function (){var x__47968__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-rest","cljs.core/chunk-rest",-398161143,null)),(function (){var x__47968__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__58507__auto__","c__58507__auto__",-158952697,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__58507__auto__","c__58507__auto__",-158952697,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__47968__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__47968__auto__ = k;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null)),(function (){var x__47968__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = subform;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(cljs.core.truth_(needrec)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recform__$1], null):null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())))], null);

}
}
}
}
}
});})(err))
;
return cljs.core.nth.call(null,step.call(null,null,cljs.core.seq.call(null,seq_exprs)),(1));
});

cljs.core$macros.doseq.cljs$lang$maxFixedArity = (3);

cljs.core$macros.doseq.cljs$lang$applyTo = (function (seq58508){
var G__58509 = cljs.core.first.call(null,seq58508);
var seq58508__$1 = cljs.core.next.call(null,seq58508);
var G__58510 = cljs.core.first.call(null,seq58508__$1);
var seq58508__$2 = cljs.core.next.call(null,seq58508__$1);
var G__58511 = cljs.core.first.call(null,seq58508__$2);
var seq58508__$3 = cljs.core.next.call(null,seq58508__$2);
return cljs.core$macros.doseq.cljs$core$IFn$_invoke$arity$variadic(G__58509,G__58510,G__58511,seq58508__$3);
});


cljs.core$macros.doseq.cljs$lang$macro = true;
cljs.core$macros.array = (function cljs$core$macros$array(var_args){
var args__48246__auto__ = [];
var len__48239__auto___58521 = arguments.length;
var i__48240__auto___58522 = (0);
while(true){
if((i__48240__auto___58522 < len__48239__auto___58521)){
args__48246__auto__.push((arguments[i__48240__auto___58522]));

var G__58523 = (i__48240__auto___58522 + (1));
i__48240__auto___58522 = G__58523;
continue;
} else {
}
break;
}

var argseq__48247__auto__ = ((((2) < args__48246__auto__.length))?(new cljs.core.IndexedSeq(args__48246__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.array.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__48247__auto__);
});

cljs.core$macros.array.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,rest){
var xs_str = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,",",cljs.core.take.call(null,cljs.core.count.call(null,rest),cljs.core.repeat.call(null,"~{}"))));
return cljs.core.vary_meta.call(null,cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),[cljs.core.str("["),cljs.core.str(xs_str),cljs.core.str("]")].join(''),rest),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"array","array",-440182315,null));
});

cljs.core$macros.array.cljs$lang$maxFixedArity = (2);

cljs.core$macros.array.cljs$lang$applyTo = (function (seq58518){
var G__58519 = cljs.core.first.call(null,seq58518);
var seq58518__$1 = cljs.core.next.call(null,seq58518);
var G__58520 = cljs.core.first.call(null,seq58518__$1);
var seq58518__$2 = cljs.core.next.call(null,seq58518__$1);
return cljs.core$macros.array.cljs$core$IFn$_invoke$arity$variadic(G__58519,G__58520,seq58518__$2);
});


cljs.core$macros.array.cljs$lang$macro = true;
cljs.core$macros.make_array = (function cljs$core$macros$make_array(var_args){
var args58527 = [];
var len__48239__auto___58535 = arguments.length;
var i__48240__auto___58536 = (0);
while(true){
if((i__48240__auto___58536 < len__48239__auto___58535)){
args58527.push((arguments[i__48240__auto___58536]));

var G__58537 = (i__48240__auto___58536 + (1));
i__48240__auto___58536 = G__58537;
continue;
} else {
}
break;
}

var G__58534 = args58527.length;
switch (G__58534) {
case 3:
return cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__48258__auto__ = (new cljs.core.IndexedSeq(args58527.slice((4)),(0),null));
return cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__48258__auto__);

}
});

cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,size){
return cljs.core.vary_meta.call(null,((typeof size === 'number')?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),cljs.core.take.call(null,size,cljs.core.repeat.call(null,null))))):cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Array.","js/Array.",1235645307,null)),(function (){var x__47968__auto__ = size;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"array","array",-440182315,null));
});

cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,type,size){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","make-array","cljs.core/make-array",-1802166799,null)),(function (){var x__47968__auto__ = size;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
});

cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,type,size,more_sizes){
return cljs.core.vary_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__47968__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dims__58524__auto__","dims__58524__auto__",1344323882,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","list","cljs.core$macros/list",-1408486806,null)),more_sizes)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dimarray__58525__auto__","dimarray__58525__auto__",-1692663496,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","make-array","cljs.core/make-array",-1802166799,null)),(function (){var x__47968__auto__ = size;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","dotimes","cljs.core$macros/dotimes",-1407597661,null)),(function (){var x__47968__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__58526__auto__","i__58526__auto__",287198930,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dimarray__58525__auto__","dimarray__58525__auto__",-1692663496,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aset","cljs.core$macros/aset",-693176374,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dimarray__58525__auto__","dimarray__58525__auto__",-1692663496,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__58526__auto__","i__58526__auto__",287198930,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","make-array","cljs.core/make-array",-1802166799,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dims__58524__auto__","dims__58524__auto__",1344323882,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dimarray__58525__auto__","dimarray__58525__auto__",-1692663496,null))))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"array","array",-440182315,null));
});

cljs.core$macros.make_array.cljs$lang$applyTo = (function (seq58528){
var G__58529 = cljs.core.first.call(null,seq58528);
var seq58528__$1 = cljs.core.next.call(null,seq58528);
var G__58530 = cljs.core.first.call(null,seq58528__$1);
var seq58528__$2 = cljs.core.next.call(null,seq58528__$1);
var G__58531 = cljs.core.first.call(null,seq58528__$2);
var seq58528__$3 = cljs.core.next.call(null,seq58528__$2);
var G__58532 = cljs.core.first.call(null,seq58528__$3);
var seq58528__$4 = cljs.core.next.call(null,seq58528__$3);
return cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$variadic(G__58529,G__58530,G__58531,G__58532,seq58528__$4);
});

cljs.core$macros.make_array.cljs$lang$maxFixedArity = (4);


cljs.core$macros.make_array.cljs$lang$macro = true;
cljs.core$macros.list = (function cljs$core$macros$list(var_args){
var args58540 = [];
var len__48239__auto___58547 = arguments.length;
var i__48240__auto___58548 = (0);
while(true){
if((i__48240__auto___58548 < len__48239__auto___58547)){
args58540.push((arguments[i__48240__auto___58548]));

var G__58549 = (i__48240__auto___58548 + (1));
i__48240__auto___58548 = G__58549;
continue;
} else {
}
break;
}

var G__58546 = args58540.length;
switch (G__58546) {
case 2:
return cljs.core$macros.list.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__48258__auto__ = (new cljs.core.IndexedSeq(args58540.slice((3)),(0),null));
return cljs.core$macros.list.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__48258__auto__);

}
});

cljs.core$macros.list.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.list(new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null),new cljs.core.Symbol("cljs.core","List","cljs.core/List",1708954352,null));
});

cljs.core$macros.list.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,xs){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"constant","constant",-379609303),new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.analyze.call(null,_AMPERSAND_env,x)))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-conj","cljs.core/-conj",2040622670,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","list","cljs.core$macros/list",-1408486806,null)),xs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__47968__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__58539__auto__","x__58539__auto__",-736845291,null)),(function (){var x__47968__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-conj","cljs.core/-conj",2040622670,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","list","cljs.core$macros/list",-1408486806,null)),xs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__58539__auto__","x__58539__auto__",-736845291,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
}
});

cljs.core$macros.list.cljs$lang$applyTo = (function (seq58541){
var G__58542 = cljs.core.first.call(null,seq58541);
var seq58541__$1 = cljs.core.next.call(null,seq58541);
var G__58543 = cljs.core.first.call(null,seq58541__$1);
var seq58541__$2 = cljs.core.next.call(null,seq58541__$1);
var G__58544 = cljs.core.first.call(null,seq58541__$2);
var seq58541__$3 = cljs.core.next.call(null,seq58541__$2);
return cljs.core$macros.list.cljs$core$IFn$_invoke$arity$variadic(G__58542,G__58543,G__58544,seq58541__$3);
});

cljs.core$macros.list.cljs$lang$maxFixedArity = (3);


cljs.core$macros.list.cljs$lang$macro = true;
cljs.core$macros.vector = (function cljs$core$macros$vector(var_args){
var args58551 = [];
var len__48239__auto___58557 = arguments.length;
var i__48240__auto___58558 = (0);
while(true){
if((i__48240__auto___58558 < len__48239__auto___58557)){
args58551.push((arguments[i__48240__auto___58558]));

var G__58559 = (i__48240__auto___58558 + (1));
i__48240__auto___58558 = G__58559;
continue;
} else {
}
break;
}

var G__58556 = args58551.length;
switch (G__58556) {
case 2:
return cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__48258__auto__ = (new cljs.core.IndexedSeq(args58551.slice((2)),(0),null));
return cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__48258__auto__);

}
});

cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.list(new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null),new cljs.core.Symbol("cljs.core","PersistentVector","cljs.core/PersistentVector",-1211028272,null));
});

cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
var cnt = cljs.core.count.call(null,xs);
if((cnt < (32))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentVector.","cljs.core/PersistentVector.",-1074647876,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__47968__auto__ = cnt;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(5)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-EMPTY-NODE",".-EMPTY-NODE",-1333332641,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentVector","cljs.core/PersistentVector",-1211028272,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),xs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
} else {
return cljs.core.vary_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".fromArray",".fromArray",1053499311,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentVector","cljs.core/PersistentVector",-1211028272,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),xs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true)))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","PersistentVector","cljs.core/PersistentVector",-1211028272,null));
}
});

cljs.core$macros.vector.cljs$lang$applyTo = (function (seq58552){
var G__58553 = cljs.core.first.call(null,seq58552);
var seq58552__$1 = cljs.core.next.call(null,seq58552);
var G__58554 = cljs.core.first.call(null,seq58552__$1);
var seq58552__$2 = cljs.core.next.call(null,seq58552__$1);
return cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$variadic(G__58553,G__58554,seq58552__$2);
});

cljs.core$macros.vector.cljs$lang$maxFixedArity = (2);


cljs.core$macros.vector.cljs$lang$macro = true;
cljs.core$macros.array_map = (function cljs$core$macros$array_map(var_args){
var args58563 = [];
var len__48239__auto___58569 = arguments.length;
var i__48240__auto___58570 = (0);
while(true){
if((i__48240__auto___58570 < len__48239__auto___58569)){
args58563.push((arguments[i__48240__auto___58570]));

var G__58571 = (i__48240__auto___58570 + (1));
i__48240__auto___58570 = G__58571;
continue;
} else {
}
break;
}

var G__58568 = args58563.length;
switch (G__58568) {
case 2:
return cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__48258__auto__ = (new cljs.core.IndexedSeq(args58563.slice((2)),(0),null));
return cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__48258__auto__);

}
});

cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.list(new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null),new cljs.core.Symbol("cljs.core","PersistentArrayMap","cljs.core/PersistentArrayMap",1025194468,null));
});

cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,kvs){
var keys = cljs.core.map.call(null,cljs.core.first,cljs.core.partition.call(null,(2),kvs));
if((cljs.core.every_QMARK_.call(null,((function (keys){
return (function (p1__58561_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__58561_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
});})(keys))
,cljs.core.map.call(null,((function (keys){
return (function (p1__58562_SHARP_){
return cljs.analyzer.analyze.call(null,_AMPERSAND_env,p1__58562_SHARP_);
});})(keys))
,keys))) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,keys)),cljs.core.count.call(null,keys)))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentArrayMap.","cljs.core/PersistentArrayMap.",-471979341,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__47968__auto__ = (cljs.core.count.call(null,kvs) / (2));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),kvs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".fromArray",".fromArray",1053499311,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentArrayMap","cljs.core/PersistentArrayMap",1025194468,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),kvs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
}
});

cljs.core$macros.array_map.cljs$lang$applyTo = (function (seq58564){
var G__58565 = cljs.core.first.call(null,seq58564);
var seq58564__$1 = cljs.core.next.call(null,seq58564);
var G__58566 = cljs.core.first.call(null,seq58564__$1);
var seq58564__$2 = cljs.core.next.call(null,seq58564__$1);
return cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$variadic(G__58565,G__58566,seq58564__$2);
});

cljs.core$macros.array_map.cljs$lang$maxFixedArity = (2);


cljs.core$macros.array_map.cljs$lang$macro = true;
cljs.core$macros.hash_map = (function cljs$core$macros$hash_map(var_args){
var args58573 = [];
var len__48239__auto___58579 = arguments.length;
var i__48240__auto___58580 = (0);
while(true){
if((i__48240__auto___58580 < len__48239__auto___58579)){
args58573.push((arguments[i__48240__auto___58580]));

var G__58581 = (i__48240__auto___58580 + (1));
i__48240__auto___58580 = G__58581;
continue;
} else {
}
break;
}

var G__58578 = args58573.length;
switch (G__58578) {
case 2:
return cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__48258__auto__ = (new cljs.core.IndexedSeq(args58573.slice((2)),(0),null));
return cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__48258__auto__);

}
});

cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentHashMap","cljs.core/PersistentHashMap",-454120575,null)))));
});

cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,kvs){
var pairs = cljs.core.partition.call(null,(2),kvs);
var ks = cljs.core.map.call(null,cljs.core.first,pairs);
var vs = cljs.core.map.call(null,cljs.core.second,pairs);
return cljs.core.vary_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".fromArrays",".fromArrays",1110244209,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentHashMap","cljs.core/PersistentHashMap",-454120575,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),ks)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),vs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})()))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","PersistentHashMap","cljs.core/PersistentHashMap",-454120575,null));
});

cljs.core$macros.hash_map.cljs$lang$applyTo = (function (seq58574){
var G__58575 = cljs.core.first.call(null,seq58574);
var seq58574__$1 = cljs.core.next.call(null,seq58574);
var G__58576 = cljs.core.first.call(null,seq58574__$1);
var seq58574__$2 = cljs.core.next.call(null,seq58574__$1);
return cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$variadic(G__58575,G__58576,seq58574__$2);
});

cljs.core$macros.hash_map.cljs$lang$maxFixedArity = (2);


cljs.core$macros.hash_map.cljs$lang$macro = true;
cljs.core$macros.hash_set = (function cljs$core$macros$hash_set(var_args){
var args58585 = [];
var len__48239__auto___58591 = arguments.length;
var i__48240__auto___58592 = (0);
while(true){
if((i__48240__auto___58592 < len__48239__auto___58591)){
args58585.push((arguments[i__48240__auto___58592]));

var G__58593 = (i__48240__auto___58592 + (1));
i__48240__auto___58592 = G__58593;
continue;
} else {
}
break;
}

var G__58590 = args58585.length;
switch (G__58590) {
case 2:
return cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__48258__auto__ = (new cljs.core.IndexedSeq(args58585.slice((2)),(0),null));
return cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__48258__auto__);

}
});

cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentHashSet","cljs.core/PersistentHashSet",-967232330,null)))));
});

cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
if(((cljs.core.count.call(null,xs) <= (8))) && (cljs.core.every_QMARK_.call(null,(function (p1__58583_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__58583_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),cljs.core.map.call(null,(function (p1__58584_SHARP_){
return cljs.analyzer.analyze.call(null,_AMPERSAND_env,p1__58584_SHARP_);
}),xs))) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,xs)),cljs.core.count.call(null,xs)))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentHashSet.","cljs.core/PersistentHashSet.",300313251,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentArrayMap.","cljs.core/PersistentArrayMap.",-471979341,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__47968__auto__ = cljs.core.count.call(null,xs);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),cljs.core.interleave.call(null,xs,cljs.core.repeat.call(null,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
} else {
return cljs.core.vary_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".fromArray",".fromArray",1053499311,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentHashSet","cljs.core/PersistentHashSet",-967232330,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),xs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true)))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","PersistentHashSet","cljs.core/PersistentHashSet",-967232330,null));
}
});

cljs.core$macros.hash_set.cljs$lang$applyTo = (function (seq58586){
var G__58587 = cljs.core.first.call(null,seq58586);
var seq58586__$1 = cljs.core.next.call(null,seq58586);
var G__58588 = cljs.core.first.call(null,seq58586__$1);
var seq58586__$2 = cljs.core.next.call(null,seq58586__$1);
return cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$variadic(G__58587,G__58588,seq58586__$2);
});

cljs.core$macros.hash_set.cljs$lang$maxFixedArity = (2);


cljs.core$macros.hash_set.cljs$lang$macro = true;
cljs.core$macros.js_obj_STAR_ = (function cljs$core$macros$js_obj_STAR_(kvs){
var kvs_str = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,",",cljs.core.take.call(null,cljs.core.count.call(null,kvs),cljs.core.repeat.call(null,"~{}:~{}"))));
return cljs.core.vary_meta.call(null,cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),[cljs.core.str("{"),cljs.core.str(kvs_str),cljs.core.str("}")].join(''),cljs.core.apply.call(null,cljs.core.concat,kvs)),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"object","object",-1179821820,null));
});
cljs.core$macros.js_obj = (function cljs$core$macros$js_obj(var_args){
var args__48246__auto__ = [];
var len__48239__auto___58610 = arguments.length;
var i__48240__auto___58611 = (0);
while(true){
if((i__48240__auto___58611 < len__48239__auto___58610)){
args__48246__auto__.push((arguments[i__48240__auto___58611]));

var G__58612 = (i__48240__auto___58611 + (1));
i__48240__auto___58611 = G__58612;
continue;
} else {
}
break;
}

var argseq__48247__auto__ = ((((2) < args__48246__auto__.length))?(new cljs.core.IndexedSeq(args__48246__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.js_obj.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__48247__auto__);
});

cljs.core$macros.js_obj.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,rest){
var sym_or_str_QMARK_ = (function (x){
return ((x instanceof cljs.core.Symbol)) || (typeof x === 'string');
});
var filter_on_keys = ((function (sym_or_str_QMARK_){
return (function (f,coll){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,((function (sym_or_str_QMARK_){
return (function (p__58598){
var vec__58599 = p__58598;
var k = cljs.core.nth.call(null,vec__58599,(0),null);
var _ = cljs.core.nth.call(null,vec__58599,(1),null);
return f.call(null,k);
});})(sym_or_str_QMARK_))
,coll));
});})(sym_or_str_QMARK_))
;
var kvs = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,(2),rest)));
var sym_pairs = filter_on_keys.call(null,cljs.core.symbol_QMARK_,kvs);
var expr__GT_local = cljs.core.zipmap.call(null,cljs.core.filter.call(null,cljs.core.complement.call(null,sym_or_str_QMARK_),cljs.core.keys.call(null,kvs)),cljs.core.repeatedly.call(null,cljs.core.gensym));
var obj = cljs.core.gensym.call(null,"obj");
if(cljs.core.empty_QMARK_.call(null,rest)){
return cljs.core$macros.js_obj_STAR_.call(null,cljs.core.List.EMPTY);
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__47968__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.apply.call(null,cljs.core.concat,clojure.set.map_invert.call(null,expr__GT_local)),(function (){var x__47968__auto__ = obj;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core$macros.js_obj_STAR_.call(null,filter_on_keys.call(null,cljs.core.string_QMARK_,kvs));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),cljs.core.map.call(null,((function (sym_or_str_QMARK_,filter_on_keys,kvs,sym_pairs,expr__GT_local,obj){
return (function (p__58602){
var vec__58603 = p__58602;
var k = cljs.core.nth.call(null,vec__58603,(0),null);
var v = cljs.core.nth.call(null,vec__58603,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aset","cljs.core$macros/aset",-693176374,null)),(function (){var x__47968__auto__ = obj;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = k;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
});})(sym_or_str_QMARK_,filter_on_keys,kvs,sym_pairs,expr__GT_local,obj))
,sym_pairs),cljs.core.map.call(null,((function (sym_or_str_QMARK_,filter_on_keys,kvs,sym_pairs,expr__GT_local,obj){
return (function (p__58606){
var vec__58607 = p__58606;
var k = cljs.core.nth.call(null,vec__58607,(0),null);
var v = cljs.core.nth.call(null,vec__58607,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aset","cljs.core$macros/aset",-693176374,null)),(function (){var x__47968__auto__ = obj;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.get.call(null,kvs,k);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
});})(sym_or_str_QMARK_,filter_on_keys,kvs,sym_pairs,expr__GT_local,obj))
,expr__GT_local),(function (){var x__47968__auto__ = obj;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
}
});

cljs.core$macros.js_obj.cljs$lang$maxFixedArity = (2);

cljs.core$macros.js_obj.cljs$lang$applyTo = (function (seq58595){
var G__58596 = cljs.core.first.call(null,seq58595);
var seq58595__$1 = cljs.core.next.call(null,seq58595);
var G__58597 = cljs.core.first.call(null,seq58595__$1);
var seq58595__$2 = cljs.core.next.call(null,seq58595__$1);
return cljs.core$macros.js_obj.cljs$core$IFn$_invoke$arity$variadic(G__58596,G__58597,seq58595__$2);
});


cljs.core$macros.js_obj.cljs$lang$macro = true;
cljs.core$macros.alength = (function cljs$core$macros$alength(_AMPERSAND_form,_AMPERSAND_env,a){
return cljs.core.vary_meta.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__47968__auto__ = a;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),"~{}.length"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"number","number",-1084057331,null));
});

cljs.core$macros.alength.cljs$lang$macro = true;
/**
 * Maps an expression across an array a, using an index named idx, and
 *   return value named ret, initialized to a clone of a, then setting
 *   each element of ret to the evaluation of expr, returning the new
 *   array ret.
 */
cljs.core$macros.amap = (function cljs$core$macros$amap(_AMPERSAND_form,_AMPERSAND_env,a,idx,ret,expr){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__47968__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"a__58613__auto__","a__58613__auto__",-532477505,null)),(function (){var x__47968__auto__ = a;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = ret;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","aclone","cljs.core/aclone",-758078968,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"a__58613__auto__","a__58613__auto__",-532477505,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__47968__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__47968__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__47968__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"a__58613__auto__","a__58613__auto__",-532477505,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aset","cljs.core$macros/aset",-693176374,null)),(function (){var x__47968__auto__ = ret;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),(function (){var x__47968__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = ret;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
});

cljs.core$macros.amap.cljs$lang$macro = true;
/**
 * Reduces an expression across an array a, using an index named idx,
 *   and return value named ret, initialized to init, setting ret to the
 *   evaluation of expr at each step, returning ret.
 */
cljs.core$macros.areduce = (function cljs$core$macros$areduce(_AMPERSAND_form,_AMPERSAND_env,a,idx,ret,init,expr){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__47968__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"a__58614__auto__","a__58614__auto__",16619134,null)),(function (){var x__47968__auto__ = a;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__47968__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__47968__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),(function (){var x__47968__auto__ = ret;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = init;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__47968__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"a__58614__auto__","a__58614__auto__",16619134,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),(function (){var x__47968__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = ret;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
});

cljs.core$macros.areduce.cljs$lang$macro = true;
/**
 * bindings => name n
 * 
 *   Repeatedly executes body (presumably for side-effects) with name
 *   bound to integers from 0 through n-1.
 */
cljs.core$macros.dotimes = (function cljs$core$macros$dotimes(var_args){
var args__48246__auto__ = [];
var len__48239__auto___58620 = arguments.length;
var i__48240__auto___58621 = (0);
while(true){
if((i__48240__auto___58621 < len__48239__auto___58620)){
args__48246__auto__.push((arguments[i__48240__auto___58621]));

var G__58622 = (i__48240__auto___58621 + (1));
i__48240__auto___58621 = G__58622;
continue;
} else {
}
break;
}

var argseq__48247__auto__ = ((((3) < args__48246__auto__.length))?(new cljs.core.IndexedSeq(args__48246__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.dotimes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__48247__auto__);
});

cljs.core$macros.dotimes.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
var i = cljs.core.first.call(null,bindings);
var n = cljs.core.second.call(null,bindings);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__47968__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"n__58615__auto__","n__58615__auto__",-903164294,null)),(function (){var x__47968__auto__ = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__47968__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__47968__auto__ = i;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__47968__auto__ = i;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"n__58615__auto__","n__58615__auto__",-903164294,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),body,(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),(function (){var x__47968__auto__ = i;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
});

cljs.core$macros.dotimes.cljs$lang$maxFixedArity = (3);

cljs.core$macros.dotimes.cljs$lang$applyTo = (function (seq58616){
var G__58617 = cljs.core.first.call(null,seq58616);
var seq58616__$1 = cljs.core.next.call(null,seq58616);
var G__58618 = cljs.core.first.call(null,seq58616__$1);
var seq58616__$2 = cljs.core.next.call(null,seq58616__$1);
var G__58619 = cljs.core.first.call(null,seq58616__$2);
var seq58616__$3 = cljs.core.next.call(null,seq58616__$2);
return cljs.core$macros.dotimes.cljs$core$IFn$_invoke$arity$variadic(G__58617,G__58618,G__58619,seq58616__$3);
});


cljs.core$macros.dotimes.cljs$lang$macro = true;
/**
 * Throws an exception if the given option map contains keys not listed
 *   as valid, else returns nil.
 */
cljs.core$macros.check_valid_options = (function cljs$core$macros$check_valid_options(var_args){
var args__48246__auto__ = [];
var len__48239__auto___58626 = arguments.length;
var i__48240__auto___58627 = (0);
while(true){
if((i__48240__auto___58627 < len__48239__auto___58626)){
args__48246__auto__.push((arguments[i__48240__auto___58627]));

var G__58628 = (i__48240__auto___58627 + (1));
i__48240__auto___58627 = G__58628;
continue;
} else {
}
break;
}

var argseq__48247__auto__ = ((((1) < args__48246__auto__.length))?(new cljs.core.IndexedSeq(args__48246__auto__.slice((1)),(0),null)):null);
return cljs.core$macros.check_valid_options.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__48247__auto__);
});

cljs.core$macros.check_valid_options.cljs$core$IFn$_invoke$arity$variadic = (function (options,valid_keys){
if(cljs.core.seq.call(null,cljs.core.apply.call(null,cljs.core.disj,cljs.core.apply.call(null,cljs.core.hash_set,cljs.core.keys.call(null,options)),valid_keys))){
throw cljs.core.apply.call(null,cljs.core.str,"Only these options are valid: ",cljs.core.first.call(null,valid_keys),cljs.core.map.call(null,(function (p1__58623_SHARP_){
return [cljs.core.str(", "),cljs.core.str(p1__58623_SHARP_)].join('');
}),cljs.core.rest.call(null,valid_keys)));
} else {
return null;
}
});

cljs.core$macros.check_valid_options.cljs$lang$maxFixedArity = (1);

cljs.core$macros.check_valid_options.cljs$lang$applyTo = (function (seq58624){
var G__58625 = cljs.core.first.call(null,seq58624);
var seq58624__$1 = cljs.core.next.call(null,seq58624);
return cljs.core$macros.check_valid_options.cljs$core$IFn$_invoke$arity$variadic(G__58625,seq58624__$1);
});

/**
 * Creates a new multimethod with the associated dispatch function.
 *   The docstring and attribute-map are optional.
 * 
 *   Options are key-value pairs and may be one of:
 *  :default    the default dispatch value, defaults to :default
 *  :hierarchy  the isa? hierarchy to use for dispatching
 *              defaults to the global hierarchy
 */
cljs.core$macros.defmulti = (function cljs$core$macros$defmulti(var_args){
var args__48246__auto__ = [];
var len__48239__auto___58638 = arguments.length;
var i__48240__auto___58639 = (0);
while(true){
if((i__48240__auto___58639 < len__48239__auto___58638)){
args__48246__auto__.push((arguments[i__48240__auto___58639]));

var G__58640 = (i__48240__auto___58639 + (1));
i__48240__auto___58639 = G__58640;
continue;
} else {
}
break;
}

var argseq__48247__auto__ = ((((3) < args__48246__auto__.length))?(new cljs.core.IndexedSeq(args__48246__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.defmulti.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__48247__auto__);
});

cljs.core$macros.defmulti.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,mm_name,options){
var docstring = ((typeof cljs.core.first.call(null,options) === 'string')?cljs.core.first.call(null,options):null);
var options__$1 = ((typeof cljs.core.first.call(null,options) === 'string')?cljs.core.next.call(null,options):options);
var m = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,options__$1)))?cljs.core.first.call(null,options__$1):cljs.core.PersistentArrayMap.EMPTY);
var options__$2 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,options__$1)))?cljs.core.next.call(null,options__$1):options__$1);
var dispatch_fn = cljs.core.first.call(null,options__$2);
var options__$3 = cljs.core.next.call(null,options__$2);
var m__$1 = (cljs.core.truth_(docstring)?cljs.core.assoc.call(null,m,new cljs.core.Keyword(null,"doc","doc",1913296891),docstring):m);
var m__$2 = (cljs.core.truth_(cljs.core.meta.call(null,mm_name))?cljs.core.conj.call(null,cljs.core.meta.call(null,mm_name),m__$1):m__$1);
var mm_ns = [cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env)))].join('');
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,options__$3),(1))){
throw (new Error("The syntax for defmulti has changed. Example: (defmulti name dispatch-fn :default dispatch-value)"));
} else {
}

var options__$4 = cljs.core.apply.call(null,cljs.core.hash_map,options__$3);
var default$ = cljs.core.get.call(null,options__$4,new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"default","default",-1987822328));
cljs.core$macros.check_valid_options.call(null,options__$4,new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341));

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defonce","cljs.core$macros/defonce",-1096231613,null)),(function (){var x__47968__auto__ = cljs.core.with_meta.call(null,mm_name,m__$2);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__47968__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"method-table__58629__auto__","method-table__58629__auto__",-1082228767,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null)),(function (){var x__47968__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"prefer-table__58630__auto__","prefer-table__58630__auto__",802412587,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null)),(function (){var x__47968__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"method-cache__58631__auto__","method-cache__58631__auto__",-783870119,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null)),(function (){var x__47968__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cached-hierarchy__58632__auto__","cached-hierarchy__58632__auto__",701545768,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null)),(function (){var x__47968__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"hierarchy__58633__auto__","hierarchy__58633__auto__",-1637559599,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null)),(function (){var x__47968__auto__ = options__$4;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","get-global-hierarchy","cljs.core/get-global-hierarchy",48052871,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","MultiFn.","cljs.core/MultiFn.",1073941573,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","symbol","cljs.core/symbol",195265748,null)),(function (){var x__47968__auto__ = mm_ns;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.name.call(null,mm_name);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = dispatch_fn;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = default$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"hierarchy__58633__auto__","hierarchy__58633__auto__",-1637559599,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"method-table__58629__auto__","method-table__58629__auto__",-1082228767,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"prefer-table__58630__auto__","prefer-table__58630__auto__",802412587,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"method-cache__58631__auto__","method-cache__58631__auto__",-783870119,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cached-hierarchy__58632__auto__","cached-hierarchy__58632__auto__",701545768,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
});

cljs.core$macros.defmulti.cljs$lang$maxFixedArity = (3);

cljs.core$macros.defmulti.cljs$lang$applyTo = (function (seq58634){
var G__58635 = cljs.core.first.call(null,seq58634);
var seq58634__$1 = cljs.core.next.call(null,seq58634);
var G__58636 = cljs.core.first.call(null,seq58634__$1);
var seq58634__$2 = cljs.core.next.call(null,seq58634__$1);
var G__58637 = cljs.core.first.call(null,seq58634__$2);
var seq58634__$3 = cljs.core.next.call(null,seq58634__$2);
return cljs.core$macros.defmulti.cljs$core$IFn$_invoke$arity$variadic(G__58635,G__58636,G__58637,seq58634__$3);
});


cljs.core$macros.defmulti.cljs$lang$macro = true;
/**
 * Creates and installs a new method of multimethod associated with dispatch-value. 
 */
cljs.core$macros.defmethod = (function cljs$core$macros$defmethod(var_args){
var args__48246__auto__ = [];
var len__48239__auto___58646 = arguments.length;
var i__48240__auto___58647 = (0);
while(true){
if((i__48240__auto___58647 < len__48239__auto___58646)){
args__48246__auto__.push((arguments[i__48240__auto___58647]));

var G__58648 = (i__48240__auto___58647 + (1));
i__48240__auto___58647 = G__58648;
continue;
} else {
}
break;
}

var argseq__48247__auto__ = ((((4) < args__48246__auto__.length))?(new cljs.core.IndexedSeq(args__48246__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.defmethod.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__48247__auto__);
});

cljs.core$macros.defmethod.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,multifn,dispatch_val,fn_tail){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-add-method","cljs.core/-add-method",571092113,null)),(function (){var x__47968__auto__ = cljs.core.with_meta.call(null,multifn,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","MultiFn","cljs.core/MultiFn",1487419554,null)], null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = dispatch_val;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),fn_tail)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
});

cljs.core$macros.defmethod.cljs$lang$maxFixedArity = (4);

cljs.core$macros.defmethod.cljs$lang$applyTo = (function (seq58641){
var G__58642 = cljs.core.first.call(null,seq58641);
var seq58641__$1 = cljs.core.next.call(null,seq58641);
var G__58643 = cljs.core.first.call(null,seq58641__$1);
var seq58641__$2 = cljs.core.next.call(null,seq58641__$1);
var G__58644 = cljs.core.first.call(null,seq58641__$2);
var seq58641__$3 = cljs.core.next.call(null,seq58641__$2);
var G__58645 = cljs.core.first.call(null,seq58641__$3);
var seq58641__$4 = cljs.core.next.call(null,seq58641__$3);
return cljs.core$macros.defmethod.cljs$core$IFn$_invoke$arity$variadic(G__58642,G__58643,G__58644,G__58645,seq58641__$4);
});


cljs.core$macros.defmethod.cljs$lang$macro = true;
/**
 * Evaluates expr and prints the time it took. Returns the value of expr.
 */
cljs.core$macros.time = (function cljs$core$macros$time(_AMPERSAND_form,_AMPERSAND_env,expr){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__47968__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"start__58649__auto__","start__58649__auto__",1938524040,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","system-time","cljs.core/system-time",1562011930,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ret__58650__auto__","ret__58650__auto__",-1150556944,null)),(function (){var x__47968__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","prn","cljs.core/prn",1725204552,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"Elapsed time: "),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".toFixed",".toFixed",-895046938,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","system-time","cljs.core/system-time",1562011930,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"start__58649__auto__","start__58649__auto__",1938524040,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(6)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY," msecs"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ret__58650__auto__","ret__58650__auto__",-1150556944,null)))));
});

cljs.core$macros.time.cljs$lang$macro = true;
/**
 * Runs expr iterations times in the context of a let expression with
 *   the given bindings, then prints out the bindings and the expr
 *   followed by number of iterations and total time. The optional
 *   argument print-fn, defaulting to println, sets function used to
 *   print the result. expr's string representation will be produced
 *   using pr-str in any case.
 */
cljs.core$macros.simple_benchmark = (function cljs$core$macros$simple_benchmark(var_args){
var args__48246__auto__ = [];
var len__48239__auto___58665 = arguments.length;
var i__48240__auto___58666 = (0);
while(true){
if((i__48240__auto___58666 < len__48239__auto___58665)){
args__48246__auto__.push((arguments[i__48240__auto___58666]));

var G__58667 = (i__48240__auto___58666 + (1));
i__48240__auto___58666 = G__58667;
continue;
} else {
}
break;
}

var argseq__48247__auto__ = ((((5) < args__48246__auto__.length))?(new cljs.core.IndexedSeq(args__48246__auto__.slice((5)),(0),null)):null);
return cljs.core$macros.simple_benchmark.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__48247__auto__);
});

cljs.core$macros.simple_benchmark.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,expr,iterations,p__58662){
var map__58663 = p__58662;
var map__58663__$1 = ((((!((map__58663 == null)))?((((map__58663.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58663.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58663):map__58663);
var print_fn = cljs.core.get.call(null,map__58663__$1,new cljs.core.Keyword(null,"print-fn","print-fn",-1720960489),new cljs.core.Symbol(null,"println","println",-733595439,null));
var bs_str = cljs.core.pr_str.call(null,bindings);
var expr_str = cljs.core.pr_str.call(null,expr);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__47968__auto__ = bindings;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__47968__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"start__58651__auto__","start__58651__auto__",154798065,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".getTime",".getTime",-1048557777,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Date.","js/Date.",384205255,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ret__58652__auto__","ret__58652__auto__",-1839483344,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","dotimes","cljs.core$macros/dotimes",-1407597661,null)),(function (){var x__47968__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"___58653__auto__","___58653__auto__",1442502482,null)),(function (){var x__47968__auto__ = iterations;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"end__58654__auto__","end__58654__auto__",825549301,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".getTime",".getTime",-1048557777,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Date.","js/Date.",384205255,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"elapsed__58655__auto__","elapsed__58655__auto__",749200789,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"end__58654__auto__","end__58654__auto__",825549301,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"start__58651__auto__","start__58651__auto__",154798065,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__47968__auto__ = print_fn;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","str","cljs.core$macros/str",-2019499702,null)),(function (){var x__47968__auto__ = bs_str;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,", "),(function (){var x__47968__auto__ = expr_str;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,", "),(function (){var x__47968__auto__ = iterations;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY," runs, "),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"elapsed__58655__auto__","elapsed__58655__auto__",749200789,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY," msecs"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
});

cljs.core$macros.simple_benchmark.cljs$lang$maxFixedArity = (5);

cljs.core$macros.simple_benchmark.cljs$lang$applyTo = (function (seq58656){
var G__58657 = cljs.core.first.call(null,seq58656);
var seq58656__$1 = cljs.core.next.call(null,seq58656);
var G__58658 = cljs.core.first.call(null,seq58656__$1);
var seq58656__$2 = cljs.core.next.call(null,seq58656__$1);
var G__58659 = cljs.core.first.call(null,seq58656__$2);
var seq58656__$3 = cljs.core.next.call(null,seq58656__$2);
var G__58660 = cljs.core.first.call(null,seq58656__$3);
var seq58656__$4 = cljs.core.next.call(null,seq58656__$3);
var G__58661 = cljs.core.first.call(null,seq58656__$4);
var seq58656__$5 = cljs.core.next.call(null,seq58656__$4);
return cljs.core$macros.simple_benchmark.cljs$core$IFn$_invoke$arity$variadic(G__58657,G__58658,G__58659,G__58660,G__58661,seq58656__$5);
});


cljs.core$macros.simple_benchmark.cljs$lang$macro = true;
cljs.core$macros.cs = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.gensym,cljs.core.str,cljs.core.char$),cljs.core.range.call(null,(97),(118))));
cljs.core$macros.gen_apply_to_helper = (function cljs$core$macros$gen_apply_to_helper(var_args){
var args58668 = [];
var len__48239__auto___58671 = arguments.length;
var i__48240__auto___58672 = (0);
while(true){
if((i__48240__auto___58672 < len__48239__auto___58671)){
args58668.push((arguments[i__48240__auto___58672]));

var G__58673 = (i__48240__auto___58672 + (1));
i__48240__auto___58672 = G__58673;
continue;
} else {
}
break;
}

var G__58670 = args58668.length;
switch (G__58670) {
case 0:
return cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args58668.length)].join('')));

}
});

cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core$macros.gen_apply_to_helper.call(null,(1));
});

cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$1 = (function (n){
var prop = cljs.core.symbol.call(null,[cljs.core.str("-cljs$core$IFn$_invoke$arity$"),cljs.core.str(n)].join(''));
var f = cljs.core.symbol.call(null,[cljs.core.str("cljs$core$IFn$_invoke$arity$"),cljs.core.str(n)].join(''));
if((n <= (20))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__47968__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__47968__auto__ = cljs.core$macros.cs.call(null,(n - (1)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-first","cljs.core/-first",545297391,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-rest","cljs.core/-rest",-1829241664,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","==","cljs.core$macros/==",-818551413,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argc","argc",187692008,null)),(function (){var x__47968__auto__ = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"f","f",43394975,null)),(function (){var x__47968__auto__ = prop;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"f","f",43394975,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__47968__auto__ = f;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),cljs.core.take.call(null,n,cljs.core$macros.cs))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"f","f",43394975,null)),cljs.core.take.call(null,n,cljs.core$macros.cs))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core$macros.gen_apply_to_helper.call(null,(n + (1)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"Only up to 20 arguments supported on functions"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
}
});

cljs.core$macros.gen_apply_to_helper.cljs$lang$maxFixedArity = 1;

cljs.core$macros.gen_apply_to = (function cljs$core$macros$gen_apply_to(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"*unchecked-if*","*unchecked-if*",1542408350,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"apply-to","apply-to",-1858571928,null)),(function (){var x__47968__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"f","f",43394975,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argc","argc",187692008,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__47968__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","zero?","cljs.core$macros/zero?",-65998367,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argc","argc",187692008,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"f","f",43394975,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core$macros.gen_apply_to_helper.call(null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"*unchecked-if*","*unchecked-if*",1542408350,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
});

cljs.core$macros.gen_apply_to.cljs$lang$macro = true;
/**
 * Evaluates exprs in a context in which *print-fn* is bound to .append
 *   on a fresh StringBuffer.  Returns the string created by any nested
 *   printing calls.
 */
cljs.core$macros.with_out_str = (function cljs$core$macros$with_out_str(var_args){
var args__48246__auto__ = [];
var len__48239__auto___58680 = arguments.length;
var i__48240__auto___58681 = (0);
while(true){
if((i__48240__auto___58681 < len__48239__auto___58680)){
args__48246__auto__.push((arguments[i__48240__auto___58681]));

var G__58682 = (i__48240__auto___58681 + (1));
i__48240__auto___58681 = G__58682;
continue;
} else {
}
break;
}

var argseq__48247__auto__ = ((((2) < args__48246__auto__.length))?(new cljs.core.IndexedSeq(args__48246__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.with_out_str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__48247__auto__);
});

cljs.core$macros.with_out_str.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__47968__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"sb__58675__auto__","sb__58675__auto__",-778620906,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","goog.string.StringBuffer.","js/goog.string.StringBuffer.",-1043451650,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","binding","cljs.core$macros/binding",1855847304,null)),(function (){var x__47968__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","*print-newline*","cljs.core/*print-newline*",6231625,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","*print-fn*","cljs.core/*print-fn*",1342365176,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__47968__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__58676__auto__","x__58676__auto__",-844534921,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".append",".append",1595439852,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"sb__58675__auto__","sb__58675__auto__",-778620906,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__58676__auto__","x__58676__auto__",-844534921,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"sb__58675__auto__","sb__58675__auto__",-778620906,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
});

cljs.core$macros.with_out_str.cljs$lang$maxFixedArity = (2);

cljs.core$macros.with_out_str.cljs$lang$applyTo = (function (seq58677){
var G__58678 = cljs.core.first.call(null,seq58677);
var seq58677__$1 = cljs.core.next.call(null,seq58677);
var G__58679 = cljs.core.first.call(null,seq58677__$1);
var seq58677__$2 = cljs.core.next.call(null,seq58677__$1);
return cljs.core$macros.with_out_str.cljs$core$IFn$_invoke$arity$variadic(G__58678,G__58679,seq58677__$2);
});


cljs.core$macros.with_out_str.cljs$lang$macro = true;
/**
 * Expands to code which yields a lazy sequence of the concatenation
 *   of the supplied colls.  Each coll expr is not evaluated until it is
 *   needed.
 * 
 *   (lazy-cat xs ys zs) === (concat (lazy-seq xs) (lazy-seq ys) (lazy-seq zs))
 */
cljs.core$macros.lazy_cat = (function cljs$core$macros$lazy_cat(var_args){
var args__48246__auto__ = [];
var len__48239__auto___58687 = arguments.length;
var i__48240__auto___58688 = (0);
while(true){
if((i__48240__auto___58688 < len__48239__auto___58687)){
args__48246__auto__.push((arguments[i__48240__auto___58688]));

var G__58689 = (i__48240__auto___58688 + (1));
i__48240__auto___58688 = G__58689;
continue;
} else {
}
break;
}

var argseq__48247__auto__ = ((((2) < args__48246__auto__.length))?(new cljs.core.IndexedSeq(args__48246__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.lazy_cat.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__48247__auto__);
});

cljs.core$macros.lazy_cat.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,colls){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null)),cljs.core.map.call(null,(function (p1__58683_SHARP_){
return cljs.core._conj.call(null,(function (){var x__47968__auto__ = p1__58683_SHARP_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),new cljs.core.Symbol("cljs.core$macros","lazy-seq","cljs.core$macros/lazy-seq",806482650,null));
}),colls))));
});

cljs.core$macros.lazy_cat.cljs$lang$maxFixedArity = (2);

cljs.core$macros.lazy_cat.cljs$lang$applyTo = (function (seq58684){
var G__58685 = cljs.core.first.call(null,seq58684);
var seq58684__$1 = cljs.core.next.call(null,seq58684);
var G__58686 = cljs.core.first.call(null,seq58684__$1);
var seq58684__$2 = cljs.core.next.call(null,seq58684__$1);
return cljs.core$macros.lazy_cat.cljs$core$IFn$_invoke$arity$variadic(G__58685,G__58686,seq58684__$2);
});


cljs.core$macros.lazy_cat.cljs$lang$macro = true;
cljs.core$macros.js_str = (function cljs$core$macros$js_str(_AMPERSAND_form,_AMPERSAND_env,s){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__47968__auto__ = s;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),"''+~{}"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.js_str.cljs$lang$macro = true;
cljs.core$macros.es6_iterable = (function cljs$core$macros$es6_iterable(_AMPERSAND_form,_AMPERSAND_env,ty){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aset","cljs.core$macros/aset",-693176374,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-prototype",".-prototype",-1562038608,null)),(function (){var x__47968__auto__ = ty;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","ITER_SYMBOL","cljs.core/ITER_SYMBOL",-2091399233,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__47968__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__58690__auto__","this__58690__auto__",1723397434,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","es6-iterator","cljs.core/es6-iterator",856007913,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__58690__auto__","this__58690__auto__",1723397434,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
});

cljs.core$macros.es6_iterable.cljs$lang$macro = true;
/**
 * Returns a map of the intern mappings for the namespace.
 */
cljs.core$macros.ns_interns = (function cljs$core$macros$ns_interns(_AMPERSAND_form,_AMPERSAND_env,p__58691){
var vec__58703 = p__58691;
var quote = cljs.core.nth.call(null,vec__58703,(0),null);
var ns = cljs.core.nth.call(null,vec__58703,(1),null);
if((cljs.core._EQ_.call(null,quote,new cljs.core.Symbol(null,"quote","quote",1377916282,null))) && ((ns instanceof cljs.core.Symbol))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Argument to ns-interns must be a quoted symbol"),cljs.core.str("\n"),cljs.core.str("(core/and (= quote (quote quote)) (core/symbol? ns))")].join('')));
}

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","into","cljs.core/into",1879938733,null)),(function (){var x__47968__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,((function (vec__58703,quote,ns){
return (function (p__58710){
var vec__58711 = p__58710;
var sym = cljs.core.nth.call(null,vec__58711,(0),null);
var _ = cljs.core.nth.call(null,vec__58711,(1),null);
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","symbol","cljs.core/symbol",195265748,null)),(function (){var x__47968__auto__ = cljs.core.name.call(null,sym);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"var","var",870848730,null)),(function (){var x__47968__auto__ = cljs.core.symbol.call(null,cljs.core.name.call(null,ns),cljs.core.name.call(null,sym));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})()))));
});})(vec__58703,quote,ns))
,cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns,new cljs.core.Keyword(null,"defs","defs",1398449717)], null)))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
});

cljs.core$macros.ns_interns.cljs$lang$macro = true;
/**
 * Removes the mappings for the symbol from the namespace.
 */
cljs.core$macros.ns_unmap = (function cljs$core$macros$ns_unmap(_AMPERSAND_form,_AMPERSAND_env,p__58714,p__58715){
var vec__58722 = p__58714;
var quote0 = cljs.core.nth.call(null,vec__58722,(0),null);
var ns = cljs.core.nth.call(null,vec__58722,(1),null);
var vec__58725 = p__58715;
var quote1 = cljs.core.nth.call(null,vec__58725,(0),null);
var sym = cljs.core.nth.call(null,vec__58725,(1),null);
if((cljs.core._EQ_.call(null,quote0,new cljs.core.Symbol(null,"quote","quote",1377916282,null))) && ((ns instanceof cljs.core.Symbol)) && (cljs.core._EQ_.call(null,quote1,new cljs.core.Symbol(null,"quote","quote",1377916282,null))) && ((sym instanceof cljs.core.Symbol))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Arguments to ns-unmap must be quoted symbols"),cljs.core.str("\n"),cljs.core.str("(core/and (= quote0 (quote quote)) (core/symbol? ns) (= quote1 (quote quote)) (core/symbol? sym))")].join('')));
}

cljs.core.swap_BANG_.call(null,cljs.env._STAR_compiler_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns,new cljs.core.Keyword(null,"defs","defs",1398449717)], null),cljs.core.dissoc,sym);

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-delete","cljs.core$macros/js-delete",387769082,null)),(function (){var x__47968__auto__ = cljs.compiler.munge.call(null,ns);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.compiler.munge.call(null,[cljs.core.str(sym)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
});

cljs.core$macros.ns_unmap.cljs$lang$macro = true;
/**
 * Non-atomically swaps the value of the volatile as if:
 * (apply f current-value-of-vol args). Returns the value that
 * was swapped in.
 */
cljs.core$macros.vswap_BANG_ = (function cljs$core$macros$vswap_BANG_(var_args){
var args__48246__auto__ = [];
var len__48239__auto___58733 = arguments.length;
var i__48240__auto___58734 = (0);
while(true){
if((i__48240__auto___58734 < len__48239__auto___58733)){
args__48246__auto__.push((arguments[i__48240__auto___58734]));

var G__58735 = (i__48240__auto___58734 + (1));
i__48240__auto___58734 = G__58735;
continue;
} else {
}
break;
}

var argseq__48247__auto__ = ((((4) < args__48246__auto__.length))?(new cljs.core.IndexedSeq(args__48246__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.vswap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__48247__auto__);
});

cljs.core$macros.vswap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,vol,f,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-vreset!","cljs.core/-vreset!",-1186516972,null)),(function (){var x__47968__auto__ = vol;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__47968__auto__ = f;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-deref","cljs.core/-deref",-1260480154,null)),(function (){var x__47968__auto__ = vol;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),args)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
});

cljs.core$macros.vswap_BANG_.cljs$lang$maxFixedArity = (4);

cljs.core$macros.vswap_BANG_.cljs$lang$applyTo = (function (seq58728){
var G__58729 = cljs.core.first.call(null,seq58728);
var seq58728__$1 = cljs.core.next.call(null,seq58728);
var G__58730 = cljs.core.first.call(null,seq58728__$1);
var seq58728__$2 = cljs.core.next.call(null,seq58728__$1);
var G__58731 = cljs.core.first.call(null,seq58728__$2);
var seq58728__$3 = cljs.core.next.call(null,seq58728__$2);
var G__58732 = cljs.core.first.call(null,seq58728__$3);
var seq58728__$4 = cljs.core.next.call(null,seq58728__$3);
return cljs.core$macros.vswap_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__58729,G__58730,G__58731,G__58732,seq58728__$4);
});


cljs.core$macros.vswap_BANG_.cljs$lang$macro = true;
cljs.core$macros.locking = (function cljs$core$macros$locking(var_args){
var args__48246__auto__ = [];
var len__48239__auto___58740 = arguments.length;
var i__48240__auto___58741 = (0);
while(true){
if((i__48240__auto___58741 < len__48239__auto___58740)){
args__48246__auto__.push((arguments[i__48240__auto___58741]));

var G__58742 = (i__48240__auto___58741 + (1));
i__48240__auto___58741 = G__58742;
continue;
} else {
}
break;
}

var argseq__48247__auto__ = ((((3) < args__48246__auto__.length))?(new cljs.core.IndexedSeq(args__48246__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.locking.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__48247__auto__);
});

cljs.core$macros.locking.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),forms)));
});

cljs.core$macros.locking.cljs$lang$maxFixedArity = (3);

cljs.core$macros.locking.cljs$lang$applyTo = (function (seq58736){
var G__58737 = cljs.core.first.call(null,seq58736);
var seq58736__$1 = cljs.core.next.call(null,seq58736);
var G__58738 = cljs.core.first.call(null,seq58736__$1);
var seq58736__$2 = cljs.core.next.call(null,seq58736__$1);
var G__58739 = cljs.core.first.call(null,seq58736__$2);
var seq58736__$3 = cljs.core.next.call(null,seq58736__$2);
return cljs.core$macros.locking.cljs$core$IFn$_invoke$arity$variadic(G__58737,G__58738,G__58739,seq58736__$3);
});


cljs.core$macros.locking.cljs$lang$macro = true;
/**
 * Loads libs, skipping any that are already loaded. Each argument is
 *   either a libspec that identifies a lib or a flag that modifies how all the identified
 *   libs are loaded. Use :require in the ns macro in preference to calling this
 *   directly.
 * 
 *   Libs
 * 
 *   A 'lib' is a named set of resources in classpath whose contents define a
 *   library of ClojureScript code. Lib names are symbols and each lib is associated
 *   with a ClojureScript namespace. A lib's name also locates its root directory
 *   within classpath using Java's package name to classpath-relative path mapping.
 *   All resources in a lib should be contained in the directory structure under its
 *   root directory. All definitions a lib makes should be in its associated namespace.
 * 
 *   'require loads a lib by loading its root resource. The root resource path
 *   is derived from the lib name in the following manner:
 *   Consider a lib named by the symbol 'x.y.z; it has the root directory
 *   <classpath>/x/y/, and its root resource is <classpath>/x/y/z.clj. The root
 *   resource should contain code to create the lib's namespace (usually by using
 *   the ns macro) and load any additional lib resources.
 * 
 *   Libspecs
 * 
 *   A libspec is a lib name or a vector containing a lib name followed by
 *   options expressed as sequential keywords and arguments.
 * 
 *   Recognized options:
 *   :as takes a symbol as its argument and makes that symbol an alias to the
 *  lib's namespace in the current namespace.
 *   :refer takes a list of symbols to refer from the namespace..
 *   :refer-macros takes a list of macro symbols to refer from the namespace.
 *   :include-macros true causes macros from the namespace to be required.
 * 
 *   Flags
 * 
 *   A flag is a keyword.
 *   Recognized flags: :reload, :reload-all, :verbose
 *   :reload forces loading of all the identified libs even if they are
 *  already loaded
 *   :reload-all implies :reload and also forces loading of all libs that the
 *  identified libs directly or indirectly load via require or use
 *   :verbose triggers printing information about each load, alias, and refer
 * 
 *   Example:
 * 
 *   The following would load the library clojure.string :as string.
 * 
 *   (require '[clojure/string :as string])
 */
cljs.core$macros.require = (function cljs$core$macros$require(var_args){
var args__48246__auto__ = [];
var len__48239__auto___58746 = arguments.length;
var i__48240__auto___58747 = (0);
while(true){
if((i__48240__auto___58747 < len__48239__auto___58746)){
args__48246__auto__.push((arguments[i__48240__auto___58747]));

var G__58748 = (i__48240__auto___58747 + (1));
i__48240__auto___58747 = G__58748;
continue;
} else {
}
break;
}

var argseq__48247__auto__ = ((((2) < args__48246__auto__.length))?(new cljs.core.IndexedSeq(args__48246__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.require.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__48247__auto__);
});

cljs.core$macros.require.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ns*","ns*",1840949383,null)),(function (){var x__47968__auto__ = cljs.core.cons.call(null,new cljs.core.Keyword(null,"require","require",-468001333),args);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
});

cljs.core$macros.require.cljs$lang$maxFixedArity = (2);

cljs.core$macros.require.cljs$lang$applyTo = (function (seq58743){
var G__58744 = cljs.core.first.call(null,seq58743);
var seq58743__$1 = cljs.core.next.call(null,seq58743);
var G__58745 = cljs.core.first.call(null,seq58743__$1);
var seq58743__$2 = cljs.core.next.call(null,seq58743__$1);
return cljs.core$macros.require.cljs$core$IFn$_invoke$arity$variadic(G__58744,G__58745,seq58743__$2);
});


cljs.core$macros.require.cljs$lang$macro = true;
/**
 * Similar to require but only for macros.
 */
cljs.core$macros.require_macros = (function cljs$core$macros$require_macros(var_args){
var args__48246__auto__ = [];
var len__48239__auto___58752 = arguments.length;
var i__48240__auto___58753 = (0);
while(true){
if((i__48240__auto___58753 < len__48239__auto___58752)){
args__48246__auto__.push((arguments[i__48240__auto___58753]));

var G__58754 = (i__48240__auto___58753 + (1));
i__48240__auto___58753 = G__58754;
continue;
} else {
}
break;
}

var argseq__48247__auto__ = ((((2) < args__48246__auto__.length))?(new cljs.core.IndexedSeq(args__48246__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.require_macros.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__48247__auto__);
});

cljs.core$macros.require_macros.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ns*","ns*",1840949383,null)),(function (){var x__47968__auto__ = cljs.core.cons.call(null,new cljs.core.Keyword(null,"require-macros","require-macros",707947416),args);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
});

cljs.core$macros.require_macros.cljs$lang$maxFixedArity = (2);

cljs.core$macros.require_macros.cljs$lang$applyTo = (function (seq58749){
var G__58750 = cljs.core.first.call(null,seq58749);
var seq58749__$1 = cljs.core.next.call(null,seq58749);
var G__58751 = cljs.core.first.call(null,seq58749__$1);
var seq58749__$2 = cljs.core.next.call(null,seq58749__$1);
return cljs.core$macros.require_macros.cljs$core$IFn$_invoke$arity$variadic(G__58750,G__58751,seq58749__$2);
});


cljs.core$macros.require_macros.cljs$lang$macro = true;
/**
 * Like require, but referring vars specified by the mandatory
 *   :only option.
 * 
 *   Example:
 * 
 *   The following would load the library clojure.set while referring
 *   the intersection var.
 * 
 *   (use '[clojure.set :only [intersection]])
 */
cljs.core$macros.use = (function cljs$core$macros$use(var_args){
var args__48246__auto__ = [];
var len__48239__auto___58758 = arguments.length;
var i__48240__auto___58759 = (0);
while(true){
if((i__48240__auto___58759 < len__48239__auto___58758)){
args__48246__auto__.push((arguments[i__48240__auto___58759]));

var G__58760 = (i__48240__auto___58759 + (1));
i__48240__auto___58759 = G__58760;
continue;
} else {
}
break;
}

var argseq__48247__auto__ = ((((2) < args__48246__auto__.length))?(new cljs.core.IndexedSeq(args__48246__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.use.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__48247__auto__);
});

cljs.core$macros.use.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ns*","ns*",1840949383,null)),(function (){var x__47968__auto__ = cljs.core.cons.call(null,new cljs.core.Keyword(null,"use","use",-1846382424),args);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
});

cljs.core$macros.use.cljs$lang$maxFixedArity = (2);

cljs.core$macros.use.cljs$lang$applyTo = (function (seq58755){
var G__58756 = cljs.core.first.call(null,seq58755);
var seq58755__$1 = cljs.core.next.call(null,seq58755);
var G__58757 = cljs.core.first.call(null,seq58755__$1);
var seq58755__$2 = cljs.core.next.call(null,seq58755__$1);
return cljs.core$macros.use.cljs$core$IFn$_invoke$arity$variadic(G__58756,G__58757,seq58755__$2);
});


cljs.core$macros.use.cljs$lang$macro = true;
/**
 * Similar to use but only for macros.
 */
cljs.core$macros.use_macros = (function cljs$core$macros$use_macros(var_args){
var args__48246__auto__ = [];
var len__48239__auto___58764 = arguments.length;
var i__48240__auto___58765 = (0);
while(true){
if((i__48240__auto___58765 < len__48239__auto___58764)){
args__48246__auto__.push((arguments[i__48240__auto___58765]));

var G__58766 = (i__48240__auto___58765 + (1));
i__48240__auto___58765 = G__58766;
continue;
} else {
}
break;
}

var argseq__48247__auto__ = ((((2) < args__48246__auto__.length))?(new cljs.core.IndexedSeq(args__48246__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.use_macros.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__48247__auto__);
});

cljs.core$macros.use_macros.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ns*","ns*",1840949383,null)),(function (){var x__47968__auto__ = cljs.core.cons.call(null,new cljs.core.Keyword(null,"use-macros","use-macros",-905638393),args);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
});

cljs.core$macros.use_macros.cljs$lang$maxFixedArity = (2);

cljs.core$macros.use_macros.cljs$lang$applyTo = (function (seq58761){
var G__58762 = cljs.core.first.call(null,seq58761);
var seq58761__$1 = cljs.core.next.call(null,seq58761);
var G__58763 = cljs.core.first.call(null,seq58761__$1);
var seq58761__$2 = cljs.core.next.call(null,seq58761__$1);
return cljs.core$macros.use_macros.cljs$core$IFn$_invoke$arity$variadic(G__58762,G__58763,seq58761__$2);
});


cljs.core$macros.use_macros.cljs$lang$macro = true;
/**
 * import-list => (closure-namespace constructor-name-symbols*)
 * 
 *   For each name in constructor-name-symbols, adds a mapping from name to the
 *   constructor named by closure-namespace to the current namespace. Use :import in the ns
 *   macro in preference to calling this directly.
 */
cljs.core$macros.import$ = (function cljs$core$macros$import(var_args){
var args__48246__auto__ = [];
var len__48239__auto___58770 = arguments.length;
var i__48240__auto___58771 = (0);
while(true){
if((i__48240__auto___58771 < len__48239__auto___58770)){
args__48246__auto__.push((arguments[i__48240__auto___58771]));

var G__58772 = (i__48240__auto___58771 + (1));
i__48240__auto___58771 = G__58772;
continue;
} else {
}
break;
}

var argseq__48247__auto__ = ((((2) < args__48246__auto__.length))?(new cljs.core.IndexedSeq(args__48246__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.import$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__48247__auto__);
});

cljs.core$macros.import$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,import_symbols_or_lists){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ns*","ns*",1840949383,null)),(function (){var x__47968__auto__ = cljs.core.cons.call(null,new cljs.core.Keyword(null,"import","import",-1399500709),import_symbols_or_lists);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
});

cljs.core$macros.import$.cljs$lang$maxFixedArity = (2);

cljs.core$macros.import$.cljs$lang$applyTo = (function (seq58767){
var G__58768 = cljs.core.first.call(null,seq58767);
var seq58767__$1 = cljs.core.next.call(null,seq58767);
var G__58769 = cljs.core.first.call(null,seq58767__$1);
var seq58767__$2 = cljs.core.next.call(null,seq58767__$1);
return cljs.core$macros.import$.cljs$core$IFn$_invoke$arity$variadic(G__58768,G__58769,seq58767__$2);
});


cljs.core$macros.import$.cljs$lang$macro = true;
/**
 * Refers to all the public vars of `cljs.core`, subject to
 *   filters.
 *   Filters can include at most one each of:
 * 
 *   :exclude list-of-symbols
 *   :rename map-of-fromsymbol-tosymbol
 * 
 *   Filters can be used to select a subset, via exclusion, or to provide a mapping
 *   to a symbol different from the var's name, in order to prevent clashes.
 */
cljs.core$macros.refer_clojure = (function cljs$core$macros$refer_clojure(var_args){
var args__48246__auto__ = [];
var len__48239__auto___58776 = arguments.length;
var i__48240__auto___58777 = (0);
while(true){
if((i__48240__auto___58777 < len__48239__auto___58776)){
args__48246__auto__.push((arguments[i__48240__auto___58777]));

var G__58778 = (i__48240__auto___58777 + (1));
i__48240__auto___58777 = G__58778;
continue;
} else {
}
break;
}

var argseq__48247__auto__ = ((((2) < args__48246__auto__.length))?(new cljs.core.IndexedSeq(args__48246__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.refer_clojure.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__48247__auto__);
});

cljs.core$macros.refer_clojure.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ns*","ns*",1840949383,null)),(function (){var x__47968__auto__ = cljs.core.cons.call(null,new cljs.core.Keyword(null,"refer-clojure","refer-clojure",813784440),args);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
});

cljs.core$macros.refer_clojure.cljs$lang$maxFixedArity = (2);

cljs.core$macros.refer_clojure.cljs$lang$applyTo = (function (seq58773){
var G__58774 = cljs.core.first.call(null,seq58773);
var seq58773__$1 = cljs.core.next.call(null,seq58773);
var G__58775 = cljs.core.first.call(null,seq58773__$1);
var seq58773__$2 = cljs.core.next.call(null,seq58773__$1);
return cljs.core$macros.refer_clojure.cljs$core$IFn$_invoke$arity$variadic(G__58774,G__58775,seq58773__$2);
});


cljs.core$macros.refer_clojure.cljs$lang$macro = true;
cljs.core$macros.load_file_STAR_ = (function cljs$core$macros$load_file_STAR_(_AMPERSAND_form,_AMPERSAND_env,f){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","goog","js/goog",-70605150,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"nodeGlobalRequire","nodeGlobalRequire",167018599,null)),(function (){var x__47968__auto__ = f;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
});

cljs.core$macros.load_file_STAR_.cljs$lang$macro = true;
/**
 * If form represents a macro form, returns its expansion,
 *   else returns form.
 */
cljs.core$macros.macroexpand_1 = (function cljs$core$macros$macroexpand_1(_AMPERSAND_form,_AMPERSAND_env,quoted){
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,quoted),new cljs.core.Symbol(null,"quote","quote",1377916282,null))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Argument to macroexpand-1 must be quoted"),cljs.core.str("\n"),cljs.core.str("(core/= (core/first quoted) (quote quote))")].join('')));
}

var form = cljs.core.second.call(null,quoted);
if(cljs.core.seq_QMARK_.call(null,form)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__47968__auto__ = cljs.analyzer.macroexpand_1.call(null,_AMPERSAND_env,form);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
} else {
return form;
}
});

cljs.core$macros.macroexpand_1.cljs$lang$macro = true;
/**
 * Repeatedly calls macroexpand-1 on form until it no longer
 *   represents a macro form, then returns it.  Note neither
 *   macroexpand-1 nor macroexpand expand macros in subforms.
 */
cljs.core$macros.macroexpand = (function cljs$core$macros$macroexpand(_AMPERSAND_form,_AMPERSAND_env,quoted){
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,quoted),new cljs.core.Symbol(null,"quote","quote",1377916282,null))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Argument to macroexpand must be quoted"),cljs.core.str("\n"),cljs.core.str("(core/= (core/first quoted) (quote quote))")].join('')));
}

var form = cljs.core.second.call(null,quoted);
var env = _AMPERSAND_env;
if(cljs.core.seq_QMARK_.call(null,form)){
var form__$1 = form;
var form_SINGLEQUOTE_ = cljs.analyzer.macroexpand_1.call(null,env,form__$1);
while(true){
if(!((form__$1 === form_SINGLEQUOTE_))){
var G__58779 = form_SINGLEQUOTE_;
var G__58780 = cljs.analyzer.macroexpand_1.call(null,env,form_SINGLEQUOTE_);
form__$1 = G__58779;
form_SINGLEQUOTE_ = G__58780;
continue;
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__47968__auto__ = form_SINGLEQUOTE_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
}
break;
}
} else {
return form;
}
});

cljs.core$macros.macroexpand.cljs$lang$macro = true;
cljs.core$macros.multi_arity_fn_QMARK_ = (function cljs$core$macros$multi_arity_fn_QMARK_(fdecl){
return ((1) < cljs.core.count.call(null,fdecl));
});
cljs.core$macros.variadic_fn_QMARK_ = (function cljs$core$macros$variadic_fn_QMARK_(fdecl){
var and__47119__auto__ = cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,fdecl));
if(and__47119__auto__){
return cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),cljs.core.ffirst.call(null,fdecl));
} else {
return and__47119__auto__;
}
});
cljs.core$macros.variadic_fn_STAR_ = (function cljs$core$macros$variadic_fn_STAR_(var_args){
var args58781 = [];
var len__48239__auto___58788 = arguments.length;
var i__48240__auto___58789 = (0);
while(true){
if((i__48240__auto___58789 < len__48239__auto___58788)){
args58781.push((arguments[i__48240__auto___58789]));

var G__58790 = (i__48240__auto___58789 + (1));
i__48240__auto___58789 = G__58790;
continue;
} else {
}
break;
}

var G__58783 = args58781.length;
switch (G__58783) {
case 2:
return cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args58781.length)].join('')));

}
});

cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (sym,method){
return cljs.core$macros.variadic_fn_STAR_.call(null,sym,method,true);
});

cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (sym,p__58784,solo){
var vec__58785 = p__58784;
var seq__58786 = cljs.core.seq.call(null,vec__58785);
var first__58787 = cljs.core.first.call(null,seq__58786);
var seq__58786__$1 = cljs.core.next.call(null,seq__58786);
var arglist = first__58787;
var body = seq__58786__$1;
var method = vec__58785;
var sig = cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),arglist);
var restarg = cljs.core.gensym.call(null,"seq");
var get_delegate = ((function (sig,restarg,vec__58785,seq__58786,first__58787,seq__58786__$1,arglist,body,method){
return (function cljs$core$macros$get_delegate(){
return new cljs.core.Symbol(null,"cljs$core$IFn$_invoke$arity$variadic","cljs$core$IFn$_invoke$arity$variadic",-378825034,null);
});})(sig,restarg,vec__58785,seq__58786,first__58787,seq__58786__$1,arglist,body,method))
;
var get_delegate_prop = ((function (sig,restarg,vec__58785,seq__58786,first__58787,seq__58786__$1,arglist,body,method){
return (function cljs$core$macros$get_delegate_prop(){
return cljs.core.symbol.call(null,[cljs.core.str("-"),cljs.core.str(get_delegate.call(null))].join(''));
});})(sig,restarg,vec__58785,seq__58786,first__58787,seq__58786__$1,arglist,body,method))
;
var param_bind = ((function (sig,restarg,vec__58785,seq__58786,first__58787,seq__58786__$1,arglist,body,method){
return (function cljs$core$macros$param_bind(param){
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__47968__auto__ = param;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__47968__auto__ = cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null),cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"/Users/ru/clojure/fligts-pro/resources/public/js/out/cljs/core.cljc"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2877),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj.call(null,cljs.core.List.EMPTY,49),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2877),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj.call(null,cljs.core.List.EMPTY,54),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__47968__auto__ = cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core","next","cljs.core/next",-1291438473,null),cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"/Users/ru/clojure/fligts-pro/resources/public/js/out/cljs/core.cljc"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2878),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj.call(null,cljs.core.List.EMPTY,51),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2878),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj.call(null,cljs.core.List.EMPTY,55),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})()))));
});})(sig,restarg,vec__58785,seq__58786,first__58787,seq__58786__$1,arglist,body,method))
;
var apply_to = ((function (sig,restarg,vec__58785,seq__58786,first__58787,seq__58786__$1,arglist,body,method){
return (function cljs$core$macros$apply_to(){
if(((1) < cljs.core.count.call(null,sig))){
var params = cljs.core.repeatedly.call(null,(cljs.core.count.call(null,sig) - (1)),cljs.core.gensym);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__47968__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__47968__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__47968__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.mapcat.call(null,param_bind,params)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__47968__auto__ = sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__47968__auto__ = get_delegate.call(null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),params,(function (){var x__47968__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__47968__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__47968__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__47968__auto__ = sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__47968__auto__ = get_delegate.call(null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__47968__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
}
});})(sig,restarg,vec__58785,seq__58786,first__58787,seq__58786__$1,arglist,body,method))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__47968__auto__ = sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = get_delegate_prop.call(null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__47968__auto__ = cljs.core.vec.call(null,sig);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(cljs.core.truth_(solo)?cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__47968__auto__ = sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-cljs$lang$maxFixedArity","-cljs$lang$maxFixedArity",-1481434279,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = (cljs.core.count.call(null,sig) - (1));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())))):null),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__47968__auto__ = sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-cljs$lang$applyTo","-cljs$lang$applyTo",-225535181,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = apply_to.call(null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
});

cljs.core$macros.variadic_fn_STAR_.cljs$lang$maxFixedArity = 3;

cljs.core$macros.copy_arguments = (function cljs$core$macros$copy_arguments(_AMPERSAND_form,_AMPERSAND_env,dest){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__47968__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"len__58792__auto__","len__58792__auto__",1106724872,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__47968__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__58793__auto__","i__58793__auto__",1863459420,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__58793__auto__","i__58793__auto__",1863459420,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"len__58792__auto__","len__58792__auto__",1106724872,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".push",".push",-1497267248,null)),(function (){var x__47968__auto__ = dest;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aget","cljs.core$macros/aget",1976136178,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__58793__auto__","i__58793__auto__",1863459420,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__58793__auto__","i__58793__auto__",1863459420,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
});

cljs.core$macros.copy_arguments.cljs$lang$macro = true;
cljs.core$macros.variadic_fn = (function cljs$core$macros$variadic_fn(name,meta,p__58796,emit_var_QMARK_){
var vec__58803 = p__58796;
var vec__58806 = cljs.core.nth.call(null,vec__58803,(0),null);
var seq__58807 = cljs.core.seq.call(null,vec__58806);
var first__58808 = cljs.core.first.call(null,seq__58807);
var seq__58807__$1 = cljs.core.next.call(null,seq__58807);
var arglist = first__58808;
var body = seq__58807__$1;
var method = vec__58806;
var fdecl = vec__58803;
var dest_args = ((function (vec__58803,vec__58806,seq__58807,first__58808,seq__58807__$1,arglist,body,method,fdecl){
return (function cljs$core$macros$variadic_fn_$_dest_args(c){
return cljs.core.map.call(null,((function (vec__58803,vec__58806,seq__58807,first__58808,seq__58807__$1,arglist,body,method,fdecl){
return (function (n){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aget","cljs.core$macros/aget",1976136178,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
});})(vec__58803,vec__58806,seq__58807,first__58808,seq__58807__$1,arglist,body,method,fdecl))
,cljs.core.range.call(null,c));
});})(vec__58803,vec__58806,seq__58807,first__58808,seq__58807__$1,arglist,body,method,fdecl))
;
var rname = cljs.core.symbol.call(null,[cljs.core.str(cljs.analyzer._STAR_cljs_ns_STAR_)].join(''),[cljs.core.str(name)].join(''));
var sig = cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),arglist);
var c_1 = (cljs.core.count.call(null,sig) - (1));
var meta__$1 = cljs.core.assoc.call(null,meta,new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",882626057),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),c_1,new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sig], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),(function (){var x__47968__auto__ = arglist;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.doall.call(null,cljs.core.map.call(null,meta,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arglist], null)))], null));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"def","def",597100991,null)),(function (){var x__47968__auto__ = cljs.core.with_meta.call(null,name,meta__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__47968__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"var_args","var_args",1214280389,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__47968__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args__58794__auto__","args__58794__auto__",-2101808219,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","copy-arguments","cljs.core$macros/copy-arguments",-1675962356,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args__58794__auto__","args__58794__auto__",-2101808219,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__47968__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argseq__58795__auto__","argseq__58795__auto__",105280324,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__47968__auto__ = c_1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args__58794__auto__","args__58794__auto__",-2101808219,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__47968__auto__ = cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core","IndexedSeq","cljs.core/IndexedSeq",-228688698,null),cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"/Users/ru/clojure/fligts-pro/resources/public/js/out/cljs/core.cljc"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2925),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj.call(null,cljs.core.List.EMPTY,55),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2925),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj.call(null,cljs.core.List.EMPTY,75),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".slice",".slice",1874048374,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args__58794__auto__","args__58794__auto__",-2101808219,null)),(function (){var x__47968__auto__ = c_1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__47968__auto__ = rname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cljs$core$IFn$_invoke$arity$variadic","cljs$core$IFn$_invoke$arity$variadic",-378825034,null)),dest_args.call(null,c_1),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argseq__58795__auto__","argseq__58795__auto__",105280324,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core$macros.variadic_fn_STAR_.call(null,rname,method);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = (cljs.core.truth_(emit_var_QMARK_)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"var","var",870848730,null)),(function (){var x__47968__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})()))):null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
});
cljs.core$macros.multi_arity_fn = (function cljs$core$macros$multi_arity_fn(name,meta,fdecl,emit_var_QMARK_){
var dest_args = (function cljs$core$macros$multi_arity_fn_$_dest_args(c){
return cljs.core.map.call(null,(function (n){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aget","cljs.core$macros/aget",1976136178,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
}),cljs.core.range.call(null,c));
});
var fixed_arity = (function cljs$core$macros$multi_arity_fn_$_fixed_arity(rname,sig){
var c = cljs.core.count.call(null,sig);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__47968__auto__ = rname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__47968__auto__ = cljs.core.symbol.call(null,[cljs.core.str("cljs$core$IFn$_invoke$arity$"),cljs.core.str(c)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),dest_args.call(null,c))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())))], null);
});
var fn_method = (function cljs$core$macros$multi_arity_fn_$_fn_method(p__58833){
var vec__58837 = p__58833;
var seq__58838 = cljs.core.seq.call(null,vec__58837);
var first__58839 = cljs.core.first.call(null,seq__58838);
var seq__58838__$1 = cljs.core.next.call(null,seq__58838);
var sig = first__58839;
var body = seq__58838__$1;
var method = vec__58837;
if(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),sig))){
return cljs.core$macros.variadic_fn_STAR_.call(null,name,method,false);
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__47968__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.symbol.call(null,[cljs.core.str("-cljs$core$IFn$_invoke$arity$"),cljs.core.str(cljs.core.count.call(null,sig))].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__47968__auto__ = method;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
}
});
var rname = cljs.core.symbol.call(null,[cljs.core.str(cljs.analyzer._STAR_cljs_ns_STAR_)].join(''),[cljs.core.str(name)].join(''));
var arglists = cljs.core.map.call(null,cljs.core.first,fdecl);
var varsig_QMARK_ = ((function (rname,arglists){
return (function (p1__58809_SHARP_){
return cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),p1__58809_SHARP_);
});})(rname,arglists))
;
var variadic = cljs.core.boolean$.call(null,cljs.core.some.call(null,varsig_QMARK_,arglists));
var sigs = cljs.core.remove.call(null,varsig_QMARK_,arglists);
var maxfa = cljs.core.apply.call(null,cljs.core.max,cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.count,sigs),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.count.call(null,cljs.core.first.call(null,cljs.core.filter.call(null,varsig_QMARK_,arglists))) - (2))], null)));
var meta__$1 = cljs.core.assoc.call(null,meta,new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",882626057),variadic,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),maxfa,new cljs.core.Keyword(null,"method-params","method-params",-980792179),sigs,new cljs.core.Keyword(null,"arglists","arglists",1661989754),arglists,new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.doall.call(null,cljs.core.map.call(null,meta,arglists))], null));
var args_sym = cljs.core.gensym.call(null,"args");
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"def","def",597100991,null)),(function (){var x__47968__auto__ = cljs.core.with_meta.call(null,name,meta__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__47968__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"var_args","var_args",1214280389,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__47968__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__47968__auto__ = args_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","copy-arguments","cljs.core$macros/copy-arguments",-1675962356,null)),(function (){var x__47968__auto__ = args_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","case","cljs.core$macros/case",-2131866965,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),(function (){var x__47968__auto__ = args_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),cljs.core.mapcat.call(null,((function (rname,arglists,varsig_QMARK_,variadic,sigs,maxfa,meta__$1,args_sym){
return (function (p1__58810_SHARP_){
return fixed_arity.call(null,rname,p1__58810_SHARP_);
});})(rname,arglists,varsig_QMARK_,variadic,sigs,maxfa,meta__$1,args_sym))
,sigs),(function (){var x__47968__auto__ = ((variadic)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__47968__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argseq__58811__auto__","argseq__58811__auto__",314272049,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__47968__auto__ = cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core","IndexedSeq","cljs.core/IndexedSeq",-228688698,null),cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"/Users/ru/clojure/fligts-pro/resources/public/js/out/cljs/core.cljc"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2983),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj.call(null,cljs.core.List.EMPTY,58),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2983),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj.call(null,cljs.core.List.EMPTY,78),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".slice",".slice",1874048374,null)),(function (){var x__47968__auto__ = args_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = maxfa;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__47968__auto__ = rname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cljs$core$IFn$_invoke$arity$variadic","cljs$core$IFn$_invoke$arity$variadic",-378825034,null)),dest_args.call(null,maxfa),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argseq__58811__auto__","argseq__58811__auto__",314272049,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})()))):(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(meta__$1))?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","str","cljs.core$macros/str",-2019499702,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"Invalid arity: "),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),(function (){var x__47968__auto__ = args_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(2)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})()))):cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","str","cljs.core$macros/str",-2019499702,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"Invalid arity: "),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),(function (){var x__47968__auto__ = args_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),cljs.core.map.call(null,fn_method,fdecl),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__47968__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__47968__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-cljs$lang$maxFixedArity","-cljs$lang$maxFixedArity",-1481434279,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = maxfa;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),(function (){var x__47968__auto__ = (cljs.core.truth_(emit_var_QMARK_)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"var","var",870848730,null)),(function (){var x__47968__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})()))):null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})())));
});
/**
 * Same as (def name (core/fn [params* ] exprs*)) or (def
 *  name (core/fn ([params* ] exprs*)+)) with any doc-string or attrs added
 *  to the var metadata. prepost-map defines a map with optional keys
 *  :pre and :post that contain collections of pre or post conditions.
 * @param {...*} var_args
 */
cljs.core$macros.defn = (function() { 
var cljs$core$macros$defn__delegate = function (_AMPERSAND_form,_AMPERSAND_env,name,fdecl){
if((name instanceof cljs.core.Symbol)){
} else {
throw (new Error("First argument to defn must be a symbol"));
}

var m = ((typeof cljs.core.first.call(null,fdecl) === 'string')?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),cljs.core.first.call(null,fdecl)], null):cljs.core.PersistentArrayMap.EMPTY);
var fdecl__$1 = ((typeof cljs.core.first.call(null,fdecl) === 'string')?cljs.core.next.call(null,fdecl):fdecl);
var m__$1 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,fdecl__$1)))?cljs.core.conj.call(null,m,cljs.core.first.call(null,fdecl__$1)):m);
var fdecl__$2 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,fdecl__$1)))?cljs.core.next.call(null,fdecl__$1):fdecl__$1);
var fdecl__$3 = ((cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,fdecl__$2)))?(function (){var x__47968__auto__ = fdecl__$2;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})():fdecl__$2);
var m__$2 = ((cljs.core.map_QMARK_.call(null,cljs.core.last.call(null,fdecl__$3)))?cljs.core.conj.call(null,m__$1,cljs.core.last.call(null,fdecl__$3)):m__$1);
var fdecl__$4 = ((cljs.core.map_QMARK_.call(null,cljs.core.last.call(null,fdecl__$3)))?cljs.core.butlast.call(null,fdecl__$3):fdecl__$3);
var m__$3 = cljs.core.conj.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core._conj.call(null,(function (){var x__47968__auto__ = cljs.core$macros.sigs.call(null,fdecl__$4);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})(),new cljs.core.Symbol(null,"quote","quote",1377916282,null))], null),m__$2);
var m__$4 = cljs.core.conj.call(null,(cljs.core.truth_(cljs.core.meta.call(null,name))?cljs.core.meta.call(null,name):cljs.core.PersistentArrayMap.EMPTY),m__$3);
if(cljs.core.truth_(cljs.core$macros.multi_arity_fn_QMARK_.call(null,fdecl__$4))){
return cljs.core$macros.multi_arity_fn.call(null,name,(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))?cljs.core.update_in.call(null,m__$4,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516)], null),cljs.core.conj,"@param {...*} var_args"):m__$4),fdecl__$4,new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
} else {
if(cljs.core.truth_(cljs.core$macros.variadic_fn_QMARK_.call(null,fdecl__$4))){
return cljs.core$macros.variadic_fn.call(null,name,(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))?cljs.core.update_in.call(null,m__$4,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516)], null),cljs.core.conj,"@param {...*} var_args"):m__$4),fdecl__$4,new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
} else {
return cljs.core._conj.call(null,(function (){var x__47968__auto__ = cljs.core.with_meta.call(null,name,m__$4);
return cljs.core._conj.call(null,(function (){var x__47968__auto____$1 = cljs.core.cons.call(null,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null),fdecl__$4);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto____$1);
})(),x__47968__auto__);
})(),new cljs.core.Symbol(null,"def","def",597100991,null));

}
}
};
var cljs$core$macros$defn = function (_AMPERSAND_form,_AMPERSAND_env,name,var_args){
var fdecl = null;
if (arguments.length > 3) {
var G__58840__i = 0, G__58840__a = new Array(arguments.length -  3);
while (G__58840__i < G__58840__a.length) {G__58840__a[G__58840__i] = arguments[G__58840__i + 3]; ++G__58840__i;}
  fdecl = new cljs.core.IndexedSeq(G__58840__a,0);
} 
return cljs$core$macros$defn__delegate.call(this,_AMPERSAND_form,_AMPERSAND_env,name,fdecl);};
cljs$core$macros$defn.cljs$lang$maxFixedArity = 3;
cljs$core$macros$defn.cljs$lang$applyTo = (function (arglist__58841){
var _AMPERSAND_form = cljs.core.first(arglist__58841);
arglist__58841 = cljs.core.next(arglist__58841);
var _AMPERSAND_env = cljs.core.first(arglist__58841);
arglist__58841 = cljs.core.next(arglist__58841);
var name = cljs.core.first(arglist__58841);
var fdecl = cljs.core.rest(arglist__58841);
return cljs$core$macros$defn__delegate(_AMPERSAND_form,_AMPERSAND_env,name,fdecl);
});
cljs$core$macros$defn.cljs$core$IFn$_invoke$arity$variadic = cljs$core$macros$defn__delegate;
return cljs$core$macros$defn;
})()
;
cljs.core$macros.defn.cljs$lang$macro = true;
/**
 * Like defn, but the resulting function name is declared as a
 *   macro and will be used as a macro by the compiler when it is
 *   called.
 */
cljs.core$macros.defmacro = (function cljs$core$macros$defmacro(var_args){
var args__48246__auto__ = [];
var len__48239__auto___58846 = arguments.length;
var i__48240__auto___58847 = (0);
while(true){
if((i__48240__auto___58847 < len__48239__auto___58846)){
args__48246__auto__.push((arguments[i__48240__auto___58847]));

var G__58848 = (i__48240__auto___58847 + (1));
i__48240__auto___58847 = G__58848;
continue;
} else {
}
break;
}

var argseq__48247__auto__ = ((((3) < args__48246__auto__.length))?(new cljs.core.IndexedSeq(args__48246__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.defmacro.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__48247__auto__);
});

cljs.core$macros.defmacro.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,args){
var prefix = (function (){var p = (function (){var x__47968__auto__ = cljs.core.vary_meta.call(null,name,cljs.core.assoc,new cljs.core.Keyword(null,"macro","macro",-867863404),true);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})();
var args__$1 = args;
while(true){
var f = cljs.core.first.call(null,args__$1);
if(typeof f === 'string'){
var G__58849 = cljs.core.cons.call(null,f,p);
var G__58850 = cljs.core.next.call(null,args__$1);
p = G__58849;
args__$1 = G__58850;
continue;
} else {
if(cljs.core.map_QMARK_.call(null,f)){
var G__58851 = cljs.core.cons.call(null,f,p);
var G__58852 = cljs.core.next.call(null,args__$1);
p = G__58851;
args__$1 = G__58852;
continue;
} else {
return p;
}
}
break;
}
})();
var fdecl = (function (){var fd = args;
while(true){
if(typeof cljs.core.first.call(null,fd) === 'string'){
var G__58853 = cljs.core.next.call(null,fd);
fd = G__58853;
continue;
} else {
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,fd))){
var G__58854 = cljs.core.next.call(null,fd);
fd = G__58854;
continue;
} else {
return fd;
}
}
break;
}
})();
var fdecl__$1 = ((cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,fdecl)))?(function (){var x__47968__auto__ = fdecl;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto__);
})():fdecl);
var add_implicit_args = ((function (prefix,fdecl,fdecl__$1){
return (function (fd){
var args__$1 = cljs.core.first.call(null,fd);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"&form","&form",1482799337,null),cljs.core.cons.call(null,new cljs.core.Symbol(null,"&env","&env",-919163083,null),args__$1))),cljs.core.next.call(null,fd));
});})(prefix,fdecl,fdecl__$1))
;
var add_args = ((function (prefix,fdecl,fdecl__$1,add_implicit_args){
return (function (acc,ds){
while(true){
if((ds == null)){
return acc;
} else {
var d = cljs.core.first.call(null,ds);
if(cljs.core.map_QMARK_.call(null,d)){
return cljs.core.conj.call(null,acc,d);
} else {
var G__58855 = cljs.core.conj.call(null,acc,add_implicit_args.call(null,d));
var G__58856 = cljs.core.next.call(null,ds);
acc = G__58855;
ds = G__58856;
continue;
}
}
break;
}
});})(prefix,fdecl,fdecl__$1,add_implicit_args))
;
var fdecl__$2 = cljs.core.seq.call(null,add_args.call(null,cljs.core.PersistentVector.EMPTY,fdecl__$1));
var decl = (function (){var p = prefix;
var d = fdecl__$2;
while(true){
if(cljs.core.truth_(p)){
var G__58857 = cljs.core.next.call(null,p);
var G__58858 = cljs.core.cons.call(null,cljs.core.first.call(null,p),d);
p = G__58857;
d = G__58858;
continue;
} else {
return d;
}
break;
}
})();
return cljs.core._conj.call(null,(function (){var x__47968__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null),decl);
return cljs.core._conj.call(null,(function (){var x__47968__auto____$1 = cljs.core._conj.call(null,(function (){var x__47968__auto____$1 = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__47968__auto____$1 = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto____$1);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-cljs$lang$macro","-cljs$lang$macro",443600924,null)))));
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,true),x__47968__auto____$1);
})(),new cljs.core.Symbol(null,"set!","set!",250714521,null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__47968__auto____$1);
})(),x__47968__auto__);
})(),new cljs.core.Symbol(null,"do","do",1686842252,null));
});

cljs.core$macros.defmacro.cljs$lang$maxFixedArity = (3);

cljs.core$macros.defmacro.cljs$lang$applyTo = (function (seq58842){
var G__58843 = cljs.core.first.call(null,seq58842);
var seq58842__$1 = cljs.core.next.call(null,seq58842);
var G__58844 = cljs.core.first.call(null,seq58842__$1);
var seq58842__$2 = cljs.core.next.call(null,seq58842__$1);
var G__58845 = cljs.core.first.call(null,seq58842__$2);
var seq58842__$3 = cljs.core.next.call(null,seq58842__$2);
return cljs.core$macros.defmacro.cljs$core$IFn$_invoke$arity$variadic(G__58843,G__58844,G__58845,seq58842__$3);
});

cljs.core$macros.defmacro.cljs$lang$macro = true;

//# sourceMappingURL=core$macros.js.map