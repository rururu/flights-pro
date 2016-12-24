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
var args__9938__auto__ = [];
var len__9931__auto___19362 = arguments.length;
var i__9932__auto___19363 = (0);
while(true){
if((i__9932__auto___19363 < len__9931__auto___19362)){
args__9938__auto__.push((arguments[i__9932__auto___19363]));

var G__19364 = (i__9932__auto___19363 + (1));
i__9932__auto___19363 = G__19364;
continue;
} else {
}
break;
}

var argseq__9939__auto__ = ((((3) < args__9938__auto__.length))?(new cljs.core.IndexedSeq(args__9938__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9939__auto__);
});

cljs.core$macros.__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
var x__$1 = x;
var forms__$1 = forms;
while(true){
if(cljs.core.truth_(forms__$1)){
var form = cljs.core.first.call(null,forms__$1);
var threaded = ((cljs.core.seq_QMARK_.call(null,form))?cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9660__auto__ = cljs.core.first.call(null,form);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = x__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),cljs.core.next.call(null,form)))),cljs.core.meta.call(null,form)):(function (){var x__9660__auto__ = form;
return cljs.core._conj.call(null,(function (){var x__9660__auto____$1 = x__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto____$1);
})(),x__9660__auto__);
})());
var G__19365 = threaded;
var G__19366 = cljs.core.next.call(null,forms__$1);
x__$1 = G__19365;
forms__$1 = G__19366;
continue;
} else {
return x__$1;
}
break;
}
});

cljs.core$macros.__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.__GT_.cljs$lang$applyTo = (function (seq19358){
var G__19359 = cljs.core.first.call(null,seq19358);
var seq19358__$1 = cljs.core.next.call(null,seq19358);
var G__19360 = cljs.core.first.call(null,seq19358__$1);
var seq19358__$2 = cljs.core.next.call(null,seq19358__$1);
var G__19361 = cljs.core.first.call(null,seq19358__$2);
var seq19358__$3 = cljs.core.next.call(null,seq19358__$2);
return cljs.core$macros.__GT_.cljs$core$IFn$_invoke$arity$variadic(G__19359,G__19360,G__19361,seq19358__$3);
});


cljs.core$macros.__GT_.cljs$lang$macro = true;
/**
 * Threads the expr through the forms. Inserts x as the
 *   last item in the first form, making a list of it if it is not a
 *   list already. If there are more forms, inserts the first form as the
 *   last item in second form, etc.
 */
cljs.core$macros.__GT__GT_ = (function cljs$core$macros$__GT__GT_(var_args){
var args__9938__auto__ = [];
var len__9931__auto___19371 = arguments.length;
var i__9932__auto___19372 = (0);
while(true){
if((i__9932__auto___19372 < len__9931__auto___19371)){
args__9938__auto__.push((arguments[i__9932__auto___19372]));

var G__19373 = (i__9932__auto___19372 + (1));
i__9932__auto___19372 = G__19373;
continue;
} else {
}
break;
}

var argseq__9939__auto__ = ((((3) < args__9938__auto__.length))?(new cljs.core.IndexedSeq(args__9938__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.__GT__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9939__auto__);
});

cljs.core$macros.__GT__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
var x__$1 = x;
var forms__$1 = forms;
while(true){
if(cljs.core.truth_(forms__$1)){
var form = cljs.core.first.call(null,forms__$1);
var threaded = ((cljs.core.seq_QMARK_.call(null,form))?cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9660__auto__ = cljs.core.first.call(null,form);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),cljs.core.next.call(null,form),(function (){var x__9660__auto__ = x__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})()))),cljs.core.meta.call(null,form)):(function (){var x__9660__auto__ = form;
return cljs.core._conj.call(null,(function (){var x__9660__auto____$1 = x__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto____$1);
})(),x__9660__auto__);
})());
var G__19374 = threaded;
var G__19375 = cljs.core.next.call(null,forms__$1);
x__$1 = G__19374;
forms__$1 = G__19375;
continue;
} else {
return x__$1;
}
break;
}
});

cljs.core$macros.__GT__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.__GT__GT_.cljs$lang$applyTo = (function (seq19367){
var G__19368 = cljs.core.first.call(null,seq19367);
var seq19367__$1 = cljs.core.next.call(null,seq19367);
var G__19369 = cljs.core.first.call(null,seq19367__$1);
var seq19367__$2 = cljs.core.next.call(null,seq19367__$1);
var G__19370 = cljs.core.first.call(null,seq19367__$2);
var seq19367__$3 = cljs.core.next.call(null,seq19367__$2);
return cljs.core$macros.__GT__GT_.cljs$core$IFn$_invoke$arity$variadic(G__19368,G__19369,G__19370,seq19367__$3);
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
var args19376 = [];
var len__9931__auto___19384 = arguments.length;
var i__9932__auto___19385 = (0);
while(true){
if((i__9932__auto___19385 < len__9931__auto___19384)){
args19376.push((arguments[i__9932__auto___19385]));

var G__19386 = (i__9932__auto___19385 + (1));
i__9932__auto___19385 = G__19386;
continue;
} else {
}
break;
}

var G__19383 = args19376.length;
switch (G__19383) {
case 4:
return cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__9950__auto__ = (new cljs.core.IndexedSeq(args19376.slice((4)),(0),null));
return cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__9950__auto__);

}
});

cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,form){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9660__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
});

cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,form,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"..","..",-300507420,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9660__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),more)));
});

cljs.core$macros._DOT__DOT_.cljs$lang$applyTo = (function (seq19377){
var G__19378 = cljs.core.first.call(null,seq19377);
var seq19377__$1 = cljs.core.next.call(null,seq19377);
var G__19379 = cljs.core.first.call(null,seq19377__$1);
var seq19377__$2 = cljs.core.next.call(null,seq19377__$1);
var G__19380 = cljs.core.first.call(null,seq19377__$2);
var seq19377__$3 = cljs.core.next.call(null,seq19377__$2);
var G__19381 = cljs.core.first.call(null,seq19377__$3);
var seq19377__$4 = cljs.core.next.call(null,seq19377__$3);
return cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$variadic(G__19378,G__19379,G__19380,G__19381,seq19377__$4);
});

cljs.core$macros._DOT__DOT_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._DOT__DOT_.cljs$lang$macro = true;
/**
 * Ignores body, yields nil
 */
cljs.core$macros.comment = (function cljs$core$macros$comment(var_args){
var args__9938__auto__ = [];
var len__9931__auto___19391 = arguments.length;
var i__9932__auto___19392 = (0);
while(true){
if((i__9932__auto___19392 < len__9931__auto___19391)){
args__9938__auto__.push((arguments[i__9932__auto___19392]));

var G__19393 = (i__9932__auto___19392 + (1));
i__9932__auto___19392 = G__19393;
continue;
} else {
}
break;
}

var argseq__9939__auto__ = ((((2) < args__9938__auto__.length))?(new cljs.core.IndexedSeq(args__9938__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.comment.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9939__auto__);
});

cljs.core$macros.comment.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return null;
});

cljs.core$macros.comment.cljs$lang$maxFixedArity = (2);

cljs.core$macros.comment.cljs$lang$applyTo = (function (seq19388){
var G__19389 = cljs.core.first.call(null,seq19388);
var seq19388__$1 = cljs.core.next.call(null,seq19388);
var G__19390 = cljs.core.first.call(null,seq19388__$1);
var seq19388__$2 = cljs.core.next.call(null,seq19388__$1);
return cljs.core$macros.comment.cljs$core$IFn$_invoke$arity$variadic(G__19389,G__19390,seq19388__$2);
});


cljs.core$macros.comment.cljs$lang$macro = true;
/**
 * Takes a set of test/expr pairs. It evaluates each test one at a
 *   time.  If a test returns logical true, cond evaluates and returns
 *   the value of the corresponding expr and doesn't evaluate any of the
 *   other tests or exprs. (cond) returns nil.
 */
cljs.core$macros.cond = (function cljs$core$macros$cond(var_args){
var args__9938__auto__ = [];
var len__9931__auto___19397 = arguments.length;
var i__9932__auto___19398 = (0);
while(true){
if((i__9932__auto___19398 < len__9931__auto___19397)){
args__9938__auto__.push((arguments[i__9932__auto___19398]));

var G__19399 = (i__9932__auto___19398 + (1));
i__9932__auto___19398 = G__19399;
continue;
} else {
}
break;
}

var argseq__9939__auto__ = ((((2) < args__9938__auto__.length))?(new cljs.core.IndexedSeq(args__9938__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.cond.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9939__auto__);
});

cljs.core$macros.cond.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,clauses){
if(cljs.core.truth_(clauses)){
return cljs.core._conj.call(null,(function (){var x__9660__auto__ = cljs.core.first.call(null,clauses);
return cljs.core._conj.call(null,(function (){var x__9660__auto____$1 = ((cljs.core.next.call(null,clauses))?cljs.core.second.call(null,clauses):(function(){throw (new Error("cond requires an even number of forms"))})());
return cljs.core._conj.call(null,(function (){var x__9660__auto____$2 = cljs.core.cons.call(null,new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",2005388338,null),cljs.core.next.call(null,cljs.core.next.call(null,clauses)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto____$2);
})(),x__9660__auto____$1);
})(),x__9660__auto__);
})(),new cljs.core.Symbol(null,"if","if",1181717262,null));
} else {
return null;
}
});

cljs.core$macros.cond.cljs$lang$maxFixedArity = (2);

cljs.core$macros.cond.cljs$lang$applyTo = (function (seq19394){
var G__19395 = cljs.core.first.call(null,seq19394);
var seq19394__$1 = cljs.core.next.call(null,seq19394);
var G__19396 = cljs.core.first.call(null,seq19394__$1);
var seq19394__$2 = cljs.core.next.call(null,seq19394__$1);
return cljs.core$macros.cond.cljs$core$IFn$_invoke$arity$variadic(G__19395,G__19396,seq19394__$2);
});


cljs.core$macros.cond.cljs$lang$macro = true;
/**
 * defs the supplied var names with no bindings, useful for making forward declarations.
 */
cljs.core$macros.declare = (function cljs$core$macros$declare(var_args){
var args__9938__auto__ = [];
var len__9931__auto___19404 = arguments.length;
var i__9932__auto___19405 = (0);
while(true){
if((i__9932__auto___19405 < len__9931__auto___19404)){
args__9938__auto__.push((arguments[i__9932__auto___19405]));

var G__19406 = (i__9932__auto___19405 + (1));
i__9932__auto___19405 = G__19406;
continue;
} else {
}
break;
}

var argseq__9939__auto__ = ((((2) < args__9938__auto__.length))?(new cljs.core.IndexedSeq(args__9938__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.declare.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9939__auto__);
});

cljs.core$macros.declare.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,names){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),cljs.core.map.call(null,(function (p1__19400_SHARP_){
return cljs.core._conj.call(null,(function (){var x__9660__auto__ = cljs.core.vary_meta.call(null,p1__19400_SHARP_,cljs.core.assoc,new cljs.core.Keyword(null,"declared","declared",92336021),true);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),new cljs.core.Symbol(null,"def","def",597100991,null));
}),names))));
});

cljs.core$macros.declare.cljs$lang$maxFixedArity = (2);

cljs.core$macros.declare.cljs$lang$applyTo = (function (seq19401){
var G__19402 = cljs.core.first.call(null,seq19401);
var seq19401__$1 = cljs.core.next.call(null,seq19401);
var G__19403 = cljs.core.first.call(null,seq19401__$1);
var seq19401__$2 = cljs.core.next.call(null,seq19401__$1);
return cljs.core$macros.declare.cljs$core$IFn$_invoke$arity$variadic(G__19402,G__19403,seq19401__$2);
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
var args__9938__auto__ = [];
var len__9931__auto___19411 = arguments.length;
var i__9932__auto___19412 = (0);
while(true){
if((i__9932__auto___19412 < len__9931__auto___19411)){
args__9938__auto__.push((arguments[i__9932__auto___19412]));

var G__19413 = (i__9932__auto___19412 + (1));
i__9932__auto___19412 = G__19413;
continue;
} else {
}
break;
}

var argseq__9939__auto__ = ((((3) < args__9938__auto__.length))?(new cljs.core.IndexedSeq(args__9938__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.doto.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9939__auto__);
});

cljs.core$macros.doto.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
var gx = cljs.core.gensym.call(null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9660__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9660__auto__ = gx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),cljs.core.map.call(null,((function (gx){
return (function (f){
if(cljs.core.seq_QMARK_.call(null,f)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9660__auto__ = cljs.core.first.call(null,f);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = gx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),cljs.core.next.call(null,f))));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9660__auto__ = f;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = gx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
}
});})(gx))
,forms),(function (){var x__9660__auto__ = gx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
});

cljs.core$macros.doto.cljs$lang$maxFixedArity = (3);

cljs.core$macros.doto.cljs$lang$applyTo = (function (seq19407){
var G__19408 = cljs.core.first.call(null,seq19407);
var seq19407__$1 = cljs.core.next.call(null,seq19407);
var G__19409 = cljs.core.first.call(null,seq19407__$1);
var seq19407__$2 = cljs.core.next.call(null,seq19407__$1);
var G__19410 = cljs.core.first.call(null,seq19407__$2);
var seq19407__$3 = cljs.core.next.call(null,seq19407__$2);
return cljs.core$macros.doto.cljs$core$IFn$_invoke$arity$variadic(G__19408,G__19409,G__19410,seq19407__$3);
});


cljs.core$macros.doto.cljs$lang$macro = true;
cljs.core$macros.parse_impls = (function cljs$core$macros$parse_impls(specs){
var ret = cljs.core.PersistentArrayMap.EMPTY;
var s = specs;
while(true){
if(cljs.core.seq.call(null,s)){
var G__19414 = cljs.core.assoc.call(null,ret,cljs.core.first.call(null,s),cljs.core.take_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,s)));
var G__19415 = cljs.core.drop_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,s));
ret = G__19414;
s = G__19415;
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
return (function (p__19420){
var vec__19421 = p__19420;
var t = cljs.core.nth.call(null,vec__19421,(0),null);
var fs = cljs.core.nth.call(null,vec__19421,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","extend-type","cljs.core$macros/extend-type",1713295201,null)),(function (){var x__9660__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = p;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
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
var args__9938__auto__ = [];
var len__9931__auto___19428 = arguments.length;
var i__9932__auto___19429 = (0);
while(true){
if((i__9932__auto___19429 < len__9931__auto___19428)){
args__9938__auto__.push((arguments[i__9932__auto___19429]));

var G__19430 = (i__9932__auto___19429 + (1));
i__9932__auto___19429 = G__19430;
continue;
} else {
}
break;
}

var argseq__9939__auto__ = ((((3) < args__9938__auto__.length))?(new cljs.core.IndexedSeq(args__9938__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.extend_protocol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9939__auto__);
});

cljs.core$macros.extend_protocol.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p,specs){
return cljs.core$macros.emit_extend_protocol.call(null,p,specs);
});

cljs.core$macros.extend_protocol.cljs$lang$maxFixedArity = (3);

cljs.core$macros.extend_protocol.cljs$lang$applyTo = (function (seq19424){
var G__19425 = cljs.core.first.call(null,seq19424);
var seq19424__$1 = cljs.core.next.call(null,seq19424);
var G__19426 = cljs.core.first.call(null,seq19424__$1);
var seq19424__$2 = cljs.core.next.call(null,seq19424__$1);
var G__19427 = cljs.core.first.call(null,seq19424__$2);
var seq19424__$3 = cljs.core.next.call(null,seq19424__$2);
return cljs.core$macros.extend_protocol.cljs$core$IFn$_invoke$arity$variadic(G__19425,G__19426,G__19427,seq19424__$3);
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
var G__19431 = cljs.core.next.call(null,params__$1);
var G__19432 = cljs.core.conj.call(null,new_params,cljs.core.first.call(null,params__$1));
var G__19433 = lets;
params__$1 = G__19431;
new_params = G__19432;
lets = G__19433;
continue;
} else {
var gparam = cljs.core.gensym.call(null,"p__");
var G__19434 = cljs.core.next.call(null,params__$1);
var G__19435 = cljs.core.conj.call(null,new_params,gparam);
var G__19436 = cljs.core.conj.call(null,cljs.core.conj.call(null,lets,cljs.core.first.call(null,params__$1)),gparam);
params__$1 = G__19434;
new_params = G__19435;
lets = G__19436;
continue;
}
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9660__auto__ = new_params;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9660__auto__ = lets;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
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
var args__9938__auto__ = [];
var len__9931__auto___19443 = arguments.length;
var i__9932__auto___19444 = (0);
while(true){
if((i__9932__auto___19444 < len__9931__auto___19443)){
args__9938__auto__.push((arguments[i__9932__auto___19444]));

var G__19445 = (i__9932__auto___19444 + (1));
i__9932__auto___19444 = G__19445;
continue;
} else {
}
break;
}

var argseq__9939__auto__ = ((((2) < args__9938__auto__.length))?(new cljs.core.IndexedSeq(args__9938__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.fn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9939__auto__);
});

cljs.core$macros.fn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,sigs){
var name = (((cljs.core.first.call(null,sigs) instanceof cljs.core.Symbol))?cljs.core.first.call(null,sigs):null);
var sigs__$1 = (cljs.core.truth_(name)?cljs.core.next.call(null,sigs):sigs);
var sigs__$2 = ((cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,sigs__$1)))?(function (){var x__9660__auto__ = sigs__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})():((cljs.core.seq_QMARK_.call(null,cljs.core.first.call(null,sigs__$1)))?sigs__$1:(function(){throw (new Error(((cljs.core.seq.call(null,sigs__$1))?[cljs.core.str("Parameter declaration "),cljs.core.str(cljs.core.first.call(null,sigs__$1)),cljs.core.str(" should be a vector")].join(''):[cljs.core.str("Parameter declaration missing")].join(''))))})()));
var psig = ((function (name,sigs__$1,sigs__$2){
return (function (sig){
if(!(cljs.core.seq_QMARK_.call(null,sig))){
throw (new Error([cljs.core.str("Invalid signature "),cljs.core.str(sig),cljs.core.str(" should be a list")].join('')));
} else {
}

var vec__19440 = sig;
var seq__19441 = cljs.core.seq.call(null,vec__19440);
var first__19442 = cljs.core.first.call(null,seq__19441);
var seq__19441__$1 = cljs.core.next.call(null,seq__19441);
var params = first__19442;
var body = seq__19441__$1;
var _ = ((!(cljs.core.vector_QMARK_.call(null,params)))?(function(){throw (new Error(((cljs.core.seq_QMARK_.call(null,cljs.core.first.call(null,sigs__$2)))?[cljs.core.str("Parameter declaration "),cljs.core.str(params),cljs.core.str(" should be a vector")].join(''):[cljs.core.str("Invalid signature "),cljs.core.str(sig),cljs.core.str(" should be a list")].join(''))))})():null);
var conds = (((cljs.core.next.call(null,body)) && (cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))))?cljs.core.first.call(null,body):null);
var body__$1 = (cljs.core.truth_(conds)?cljs.core.next.call(null,body):body);
var conds__$1 = (function (){var or__8823__auto__ = conds;
if(cljs.core.truth_(or__8823__auto__)){
return or__8823__auto__;
} else {
return cljs.core.meta.call(null,params);
}
})();
var pre = new cljs.core.Keyword(null,"pre","pre",2118456869).cljs$core$IFn$_invoke$arity$1(conds__$1);
var post = new cljs.core.Keyword(null,"post","post",269697687).cljs$core$IFn$_invoke$arity$1(conds__$1);
var body__$2 = (cljs.core.truth_(post)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9660__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"%","%",-950237169,null)),(function (){var x__9660__auto__ = ((((1) < cljs.core.count.call(null,body__$1)))?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),body__$1))):cljs.core.first.call(null,body__$1));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),cljs.core.map.call(null,((function (vec__19440,seq__19441,first__19442,seq__19441__$1,params,body,_,conds,body__$1,conds__$1,pre,post,name,sigs__$1,sigs__$2){
return (function (c){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","assert","cljs.core$macros/assert",1333198789,null)),(function (){var x__9660__auto__ = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
});})(vec__19440,seq__19441,first__19442,seq__19441__$1,params,body,_,conds,body__$1,conds__$1,pre,post,name,sigs__$1,sigs__$2))
,post),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"%","%",-950237169,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})()))):body__$1);
var body__$3 = (cljs.core.truth_(pre)?cljs.core.concat.call(null,cljs.core.map.call(null,((function (vec__19440,seq__19441,first__19442,seq__19441__$1,params,body,_,conds,body__$1,conds__$1,pre,post,body__$2,name,sigs__$1,sigs__$2){
return (function (c){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","assert","cljs.core$macros/assert",1333198789,null)),(function (){var x__9660__auto__ = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
});})(vec__19440,seq__19441,first__19442,seq__19441__$1,params,body,_,conds,body__$1,conds__$1,pre,post,body__$2,name,sigs__$1,sigs__$2))
,pre),body__$2):body__$2);
return cljs.core$macros.maybe_destructured.call(null,params,body__$3);
});})(name,sigs__$1,sigs__$2))
;
var new_sigs = cljs.core.map.call(null,psig,sigs__$2);
return cljs.core.with_meta.call(null,(cljs.core.truth_(name)?cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),name,new_sigs):cljs.core.cons.call(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new_sigs)),cljs.core.meta.call(null,_AMPERSAND_form));
});

cljs.core$macros.fn.cljs$lang$maxFixedArity = (2);

cljs.core$macros.fn.cljs$lang$applyTo = (function (seq19437){
var G__19438 = cljs.core.first.call(null,seq19437);
var seq19437__$1 = cljs.core.next.call(null,seq19437);
var G__19439 = cljs.core.first.call(null,seq19437__$1);
var seq19437__$2 = cljs.core.next.call(null,seq19437__$1);
return cljs.core$macros.fn.cljs$core$IFn$_invoke$arity$variadic(G__19438,G__19439,seq19437__$2);
});


cljs.core$macros.fn.cljs$lang$macro = true;
/**
 * same as defn, yielding non-public def
 */
cljs.core$macros.defn_ = (function cljs$core$macros$defn_(var_args){
var args__9938__auto__ = [];
var len__9931__auto___19450 = arguments.length;
var i__9932__auto___19451 = (0);
while(true){
if((i__9932__auto___19451 < len__9931__auto___19450)){
args__9938__auto__.push((arguments[i__9932__auto___19451]));

var G__19452 = (i__9932__auto___19451 + (1));
i__9932__auto___19451 = G__19452;
continue;
} else {
}
break;
}

var argseq__9939__auto__ = ((((3) < args__9938__auto__.length))?(new cljs.core.IndexedSeq(args__9938__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.defn_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9939__auto__);
});

cljs.core$macros.defn_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,decls){
return cljs.core.list_STAR_.call(null,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null),cljs.core.with_meta.call(null,name,cljs.core.assoc.call(null,cljs.core.meta.call(null,name),new cljs.core.Keyword(null,"private","private",-558947994),true)),decls);
});

cljs.core$macros.defn_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.defn_.cljs$lang$applyTo = (function (seq19446){
var G__19447 = cljs.core.first.call(null,seq19446);
var seq19446__$1 = cljs.core.next.call(null,seq19446);
var G__19448 = cljs.core.first.call(null,seq19446__$1);
var seq19446__$2 = cljs.core.next.call(null,seq19446__$1);
var G__19449 = cljs.core.first.call(null,seq19446__$2);
var seq19446__$3 = cljs.core.next.call(null,seq19446__$2);
return cljs.core$macros.defn_.cljs$core$IFn$_invoke$arity$variadic(G__19447,G__19448,G__19449,seq19446__$3);
});


cljs.core$macros.defn_.cljs$lang$macro = true;
/**
 * bindings => binding-form test
 * 
 *   If test is true, evaluates then with binding-form bound to the value of
 *   test, if not, yields else
 */
cljs.core$macros.if_let = (function cljs$core$macros$if_let(var_args){
var args19454 = [];
var len__9931__auto___19463 = arguments.length;
var i__9932__auto___19464 = (0);
while(true){
if((i__9932__auto___19464 < len__9931__auto___19463)){
args19454.push((arguments[i__9932__auto___19464]));

var G__19465 = (i__9932__auto___19464 + (1));
i__9932__auto___19464 = G__19465;
continue;
} else {
}
break;
}

var G__19462 = args19454.length;
switch (G__19462) {
case 4:
return cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__9950__auto__ = (new cljs.core.IndexedSeq(args19454.slice((5)),(0),null));
return cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__9950__auto__);

}
});

cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,then){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-let","cljs.core$macros/if-let",1291543946,null)),(function (){var x__9660__auto__ = bindings;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = then;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9660__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__19453__auto__","temp__19453__auto__",94136884,null)),(function (){var x__9660__auto__ = tst;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__19453__auto__","temp__19453__auto__",94136884,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9660__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9660__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__19453__auto__","temp__19453__auto__",94136884,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = then;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = else$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
});

cljs.core$macros.if_let.cljs$lang$applyTo = (function (seq19455){
var G__19456 = cljs.core.first.call(null,seq19455);
var seq19455__$1 = cljs.core.next.call(null,seq19455);
var G__19457 = cljs.core.first.call(null,seq19455__$1);
var seq19455__$2 = cljs.core.next.call(null,seq19455__$1);
var G__19458 = cljs.core.first.call(null,seq19455__$2);
var seq19455__$3 = cljs.core.next.call(null,seq19455__$2);
var G__19459 = cljs.core.first.call(null,seq19455__$3);
var seq19455__$4 = cljs.core.next.call(null,seq19455__$3);
var G__19460 = cljs.core.first.call(null,seq19455__$4);
var seq19455__$5 = cljs.core.next.call(null,seq19455__$4);
return cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$variadic(G__19456,G__19457,G__19458,G__19459,G__19460,seq19455__$5);
});

cljs.core$macros.if_let.cljs$lang$maxFixedArity = (5);


cljs.core$macros.if_let.cljs$lang$macro = true;
/**
 * Evaluates test. If logical false, evaluates and returns then expr,
 *   otherwise else expr, if supplied, else nil.
 */
cljs.core$macros.if_not = (function cljs$core$macros$if_not(var_args){
var args19467 = [];
var len__9931__auto___19470 = arguments.length;
var i__9932__auto___19471 = (0);
while(true){
if((i__9932__auto___19471 < len__9931__auto___19470)){
args19467.push((arguments[i__9932__auto___19471]));

var G__19472 = (i__9932__auto___19471 + (1));
i__9932__auto___19471 = G__19472;
continue;
} else {
}
break;
}

var G__19469 = args19467.length;
switch (G__19469) {
case 4:
return cljs.core$macros.if_not.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core$macros.if_not.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str((args19467.length - (2)))].join('')));

}
});

cljs.core$macros.if_not.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,test,then){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__9660__auto__ = test;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = then;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
});

cljs.core$macros.if_not.cljs$core$IFn$_invoke$arity$5 = (function (_AMPERSAND_form,_AMPERSAND_env,test,then,else$){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null)),(function (){var x__9660__auto__ = test;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = then;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = else$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
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
var args__9938__auto__ = [];
var len__9931__auto___19479 = arguments.length;
var i__9932__auto___19480 = (0);
while(true){
if((i__9932__auto___19480 < len__9931__auto___19479)){
args__9938__auto__.push((arguments[i__9932__auto___19480]));

var G__19481 = (i__9932__auto___19480 + (1));
i__9932__auto___19480 = G__19481;
continue;
} else {
}
break;
}

var argseq__9939__auto__ = ((((3) < args__9938__auto__.length))?(new cljs.core.IndexedSeq(args__9938__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.letfn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9939__auto__);
});

cljs.core$macros.letfn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,fnspecs,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"letfn*","letfn*",-110097810,null)),(function (){var x__9660__auto__ = cljs.core.vec.call(null,cljs.core.interleave.call(null,cljs.core.map.call(null,cljs.core.first,fnspecs),cljs.core.map.call(null,(function (p1__19474_SHARP_){
return cljs.core.cons.call(null,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null),p1__19474_SHARP_);
}),fnspecs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),body)));
});

cljs.core$macros.letfn.cljs$lang$maxFixedArity = (3);

cljs.core$macros.letfn.cljs$lang$applyTo = (function (seq19475){
var G__19476 = cljs.core.first.call(null,seq19475);
var seq19475__$1 = cljs.core.next.call(null,seq19475);
var G__19477 = cljs.core.first.call(null,seq19475__$1);
var seq19475__$2 = cljs.core.next.call(null,seq19475__$1);
var G__19478 = cljs.core.first.call(null,seq19475__$2);
var seq19475__$3 = cljs.core.next.call(null,seq19475__$2);
return cljs.core$macros.letfn.cljs$core$IFn$_invoke$arity$variadic(G__19476,G__19477,G__19478,seq19475__$3);
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
var args__9938__auto__ = [];
var len__9931__auto___19486 = arguments.length;
var i__9932__auto___19487 = (0);
while(true){
if((i__9932__auto___19487 < len__9931__auto___19486)){
args__9938__auto__.push((arguments[i__9932__auto___19487]));

var G__19488 = (i__9932__auto___19487 + (1));
i__9932__auto___19487 = G__19488;
continue;
} else {
}
break;
}

var argseq__9939__auto__ = ((((3) < args__9938__auto__.length))?(new cljs.core.IndexedSeq(args__9938__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.memfn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9939__auto__);
});

cljs.core$macros.memfn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,args){
var t = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"target"),cljs.core.meta.call(null,name));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9660__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9660__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),args))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9660__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9660__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),args)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
});

cljs.core$macros.memfn.cljs$lang$maxFixedArity = (3);

cljs.core$macros.memfn.cljs$lang$applyTo = (function (seq19482){
var G__19483 = cljs.core.first.call(null,seq19482);
var seq19482__$1 = cljs.core.next.call(null,seq19482);
var G__19484 = cljs.core.first.call(null,seq19482__$1);
var seq19482__$2 = cljs.core.next.call(null,seq19482__$1);
var G__19485 = cljs.core.first.call(null,seq19482__$2);
var seq19482__$3 = cljs.core.next.call(null,seq19482__$2);
return cljs.core$macros.memfn.cljs$core$IFn$_invoke$arity$variadic(G__19483,G__19484,G__19485,seq19482__$3);
});


cljs.core$macros.memfn.cljs$lang$macro = true;
/**
 * Evaluates test. If logical true, evaluates body in an implicit do.
 */
cljs.core$macros.when = (function cljs$core$macros$when(var_args){
var args__9938__auto__ = [];
var len__9931__auto___19493 = arguments.length;
var i__9932__auto___19494 = (0);
while(true){
if((i__9932__auto___19494 < len__9931__auto___19493)){
args__9938__auto__.push((arguments[i__9932__auto___19494]));

var G__19495 = (i__9932__auto___19494 + (1));
i__9932__auto___19494 = G__19495;
continue;
} else {
}
break;
}

var argseq__9939__auto__ = ((((3) < args__9938__auto__.length))?(new cljs.core.IndexedSeq(args__9938__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9939__auto__);
});

cljs.core$macros.when.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,test,body){
return cljs.core._conj.call(null,(function (){var x__9660__auto__ = test;
return cljs.core._conj.call(null,(function (){var x__9660__auto____$1 = cljs.core.cons.call(null,new cljs.core.Symbol(null,"do","do",1686842252,null),body);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto____$1);
})(),x__9660__auto__);
})(),new cljs.core.Symbol(null,"if","if",1181717262,null));
});

cljs.core$macros.when.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when.cljs$lang$applyTo = (function (seq19489){
var G__19490 = cljs.core.first.call(null,seq19489);
var seq19489__$1 = cljs.core.next.call(null,seq19489);
var G__19491 = cljs.core.first.call(null,seq19489__$1);
var seq19489__$2 = cljs.core.next.call(null,seq19489__$1);
var G__19492 = cljs.core.first.call(null,seq19489__$2);
var seq19489__$3 = cljs.core.next.call(null,seq19489__$2);
return cljs.core$macros.when.cljs$core$IFn$_invoke$arity$variadic(G__19490,G__19491,G__19492,seq19489__$3);
});


cljs.core$macros.when.cljs$lang$macro = true;
/**
 * bindings => x xs
 * 
 *   Roughly the same as (when (seq xs) (let [x (first xs)] body)) but xs is evaluated only once
 */
cljs.core$macros.when_first = (function cljs$core$macros$when_first(var_args){
var args__9938__auto__ = [];
var len__9931__auto___19504 = arguments.length;
var i__9932__auto___19505 = (0);
while(true){
if((i__9932__auto___19505 < len__9931__auto___19504)){
args__9938__auto__.push((arguments[i__9932__auto___19505]));

var G__19506 = (i__9932__auto___19505 + (1));
i__9932__auto___19505 = G__19506;
continue;
} else {
}
break;
}

var argseq__9939__auto__ = ((((3) < args__9938__auto__.length))?(new cljs.core.IndexedSeq(args__9938__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when_first.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9939__auto__);
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


var vec__19501 = bindings;
var x = cljs.core.nth.call(null,vec__19501,(0),null);
var xs = cljs.core.nth.call(null,vec__19501,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-let","cljs.core$macros/when-let",-2004472648,null)),(function (){var x__9660__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"xs__19496__auto__","xs__19496__auto__",261341931,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__9660__auto__ = xs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9660__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9660__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"xs__19496__auto__","xs__19496__auto__",261341931,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
});

cljs.core$macros.when_first.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when_first.cljs$lang$applyTo = (function (seq19497){
var G__19498 = cljs.core.first.call(null,seq19497);
var seq19497__$1 = cljs.core.next.call(null,seq19497);
var G__19499 = cljs.core.first.call(null,seq19497__$1);
var seq19497__$2 = cljs.core.next.call(null,seq19497__$1);
var G__19500 = cljs.core.first.call(null,seq19497__$2);
var seq19497__$3 = cljs.core.next.call(null,seq19497__$2);
return cljs.core$macros.when_first.cljs$core$IFn$_invoke$arity$variadic(G__19498,G__19499,G__19500,seq19497__$3);
});


cljs.core$macros.when_first.cljs$lang$macro = true;
/**
 * bindings => binding-form test
 * 
 *   When test is true, evaluates body with binding-form bound to the value of test
 */
cljs.core$macros.when_let = (function cljs$core$macros$when_let(var_args){
var args__9938__auto__ = [];
var len__9931__auto___19512 = arguments.length;
var i__9932__auto___19513 = (0);
while(true){
if((i__9932__auto___19513 < len__9931__auto___19512)){
args__9938__auto__.push((arguments[i__9932__auto___19513]));

var G__19514 = (i__9932__auto___19513 + (1));
i__9932__auto___19513 = G__19514;
continue;
} else {
}
break;
}

var argseq__9939__auto__ = ((((3) < args__9938__auto__.length))?(new cljs.core.IndexedSeq(args__9938__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when_let.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9939__auto__);
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9660__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__19507__auto__","temp__19507__auto__",1344796710,null)),(function (){var x__9660__auto__ = tst;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__19507__auto__","temp__19507__auto__",1344796710,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9660__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9660__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__19507__auto__","temp__19507__auto__",1344796710,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
});

cljs.core$macros.when_let.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when_let.cljs$lang$applyTo = (function (seq19508){
var G__19509 = cljs.core.first.call(null,seq19508);
var seq19508__$1 = cljs.core.next.call(null,seq19508);
var G__19510 = cljs.core.first.call(null,seq19508__$1);
var seq19508__$2 = cljs.core.next.call(null,seq19508__$1);
var G__19511 = cljs.core.first.call(null,seq19508__$2);
var seq19508__$3 = cljs.core.next.call(null,seq19508__$2);
return cljs.core$macros.when_let.cljs$core$IFn$_invoke$arity$variadic(G__19509,G__19510,G__19511,seq19508__$3);
});


cljs.core$macros.when_let.cljs$lang$macro = true;
/**
 * Evaluates test. If logical false, evaluates body in an implicit do.
 */
cljs.core$macros.when_not = (function cljs$core$macros$when_not(var_args){
var args__9938__auto__ = [];
var len__9931__auto___19519 = arguments.length;
var i__9932__auto___19520 = (0);
while(true){
if((i__9932__auto___19520 < len__9931__auto___19519)){
args__9938__auto__.push((arguments[i__9932__auto___19520]));

var G__19521 = (i__9932__auto___19520 + (1));
i__9932__auto___19520 = G__19521;
continue;
} else {
}
break;
}

var argseq__9939__auto__ = ((((3) < args__9938__auto__.length))?(new cljs.core.IndexedSeq(args__9938__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when_not.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9939__auto__);
});

cljs.core$macros.when_not.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,test,body){
return cljs.core._conj.call(null,(function (){var x__9660__auto__ = test;
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9660__auto____$1 = cljs.core.cons.call(null,new cljs.core.Symbol(null,"do","do",1686842252,null),body);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto____$1);
})(),null),x__9660__auto__);
})(),new cljs.core.Symbol(null,"if","if",1181717262,null));
});

cljs.core$macros.when_not.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when_not.cljs$lang$applyTo = (function (seq19515){
var G__19516 = cljs.core.first.call(null,seq19515);
var seq19515__$1 = cljs.core.next.call(null,seq19515);
var G__19517 = cljs.core.first.call(null,seq19515__$1);
var seq19515__$2 = cljs.core.next.call(null,seq19515__$1);
var G__19518 = cljs.core.first.call(null,seq19515__$2);
var seq19515__$3 = cljs.core.next.call(null,seq19515__$2);
return cljs.core$macros.when_not.cljs$core$IFn$_invoke$arity$variadic(G__19516,G__19517,G__19518,seq19515__$3);
});


cljs.core$macros.when_not.cljs$lang$macro = true;
/**
 * Repeatedly executes body while test expression is true. Presumes
 *   some side-effect will cause test to become false/nil. Returns nil
 */
cljs.core$macros.while$ = (function cljs$core$macros$while(var_args){
var args__9938__auto__ = [];
var len__9931__auto___19526 = arguments.length;
var i__9932__auto___19527 = (0);
while(true){
if((i__9932__auto___19527 < len__9931__auto___19526)){
args__9938__auto__.push((arguments[i__9932__auto___19527]));

var G__19528 = (i__9932__auto___19527 + (1));
i__9932__auto___19527 = G__19528;
continue;
} else {
}
break;
}

var argseq__9939__auto__ = ((((3) < args__9938__auto__.length))?(new cljs.core.IndexedSeq(args__9938__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.while$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9939__auto__);
});

cljs.core$macros.while$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,test,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__9660__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__9660__auto__ = test;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),body,(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
});

cljs.core$macros.while$.cljs$lang$maxFixedArity = (3);

cljs.core$macros.while$.cljs$lang$applyTo = (function (seq19522){
var G__19523 = cljs.core.first.call(null,seq19522);
var seq19522__$1 = cljs.core.next.call(null,seq19522);
var G__19524 = cljs.core.first.call(null,seq19522__$1);
var seq19522__$2 = cljs.core.next.call(null,seq19522__$1);
var G__19525 = cljs.core.first.call(null,seq19522__$2);
var seq19522__$3 = cljs.core.next.call(null,seq19522__$2);
return cljs.core$macros.while$.cljs$core$IFn$_invoke$arity$variadic(G__19523,G__19524,G__19525,seq19522__$3);
});


cljs.core$macros.while$.cljs$lang$macro = true;
/**
 * Takes an expression and a set of test/form pairs. Threads expr (via ->)
 *   through each form for which the corresponding test
 *   expression is true. Note that, unlike cond branching, cond-> threading does
 *   not short circuit after the first true test expression.
 */
cljs.core$macros.cond__GT_ = (function cljs$core$macros$cond__GT_(var_args){
var args__9938__auto__ = [];
var len__9931__auto___19537 = arguments.length;
var i__9932__auto___19538 = (0);
while(true){
if((i__9932__auto___19538 < len__9931__auto___19537)){
args__9938__auto__.push((arguments[i__9932__auto___19538]));

var G__19539 = (i__9932__auto___19538 + (1));
i__9932__auto___19538 = G__19539;
continue;
} else {
}
break;
}

var argseq__9939__auto__ = ((((3) < args__9938__auto__.length))?(new cljs.core.IndexedSeq(args__9938__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.cond__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9939__auto__);
});

cljs.core$macros.cond__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,clauses){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,clauses))){
} else {
throw (new Error("Assert failed: (even? (count clauses))"));
}

var g = cljs.core.gensym.call(null);
var pstep = ((function (g){
return (function (p__19533){
var vec__19534 = p__19533;
var test = cljs.core.nth.call(null,vec__19534,(0),null);
var step = cljs.core.nth.call(null,vec__19534,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9660__auto__ = test;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","->","cljs.core$macros/->",-1519455206,null)),(function (){var x__9660__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = step;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
});})(g))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9660__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9660__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),cljs.core.interleave.call(null,cljs.core.repeat.call(null,g),cljs.core.map.call(null,pstep,cljs.core.partition.call(null,(2),clauses)))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
});

cljs.core$macros.cond__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.cond__GT_.cljs$lang$applyTo = (function (seq19529){
var G__19530 = cljs.core.first.call(null,seq19529);
var seq19529__$1 = cljs.core.next.call(null,seq19529);
var G__19531 = cljs.core.first.call(null,seq19529__$1);
var seq19529__$2 = cljs.core.next.call(null,seq19529__$1);
var G__19532 = cljs.core.first.call(null,seq19529__$2);
var seq19529__$3 = cljs.core.next.call(null,seq19529__$2);
return cljs.core$macros.cond__GT_.cljs$core$IFn$_invoke$arity$variadic(G__19530,G__19531,G__19532,seq19529__$3);
});


cljs.core$macros.cond__GT_.cljs$lang$macro = true;
/**
 * Takes an expression and a set of test/form pairs. Threads expr (via ->>)
 *   through each form for which the corresponding test expression
 *   is true.  Note that, unlike cond branching, cond->> threading does not short circuit
 *   after the first true test expression.
 */
cljs.core$macros.cond__GT__GT_ = (function cljs$core$macros$cond__GT__GT_(var_args){
var args__9938__auto__ = [];
var len__9931__auto___19548 = arguments.length;
var i__9932__auto___19549 = (0);
while(true){
if((i__9932__auto___19549 < len__9931__auto___19548)){
args__9938__auto__.push((arguments[i__9932__auto___19549]));

var G__19550 = (i__9932__auto___19549 + (1));
i__9932__auto___19549 = G__19550;
continue;
} else {
}
break;
}

var argseq__9939__auto__ = ((((3) < args__9938__auto__.length))?(new cljs.core.IndexedSeq(args__9938__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.cond__GT__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9939__auto__);
});

cljs.core$macros.cond__GT__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,clauses){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,clauses))){
} else {
throw (new Error("Assert failed: (even? (count clauses))"));
}

var g = cljs.core.gensym.call(null);
var pstep = ((function (g){
return (function (p__19544){
var vec__19545 = p__19544;
var test = cljs.core.nth.call(null,vec__19545,(0),null);
var step = cljs.core.nth.call(null,vec__19545,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9660__auto__ = test;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","->>","cljs.core$macros/->>",-1353108561,null)),(function (){var x__9660__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = step;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
});})(g))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9660__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9660__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),cljs.core.interleave.call(null,cljs.core.repeat.call(null,g),cljs.core.map.call(null,pstep,cljs.core.partition.call(null,(2),clauses)))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
});

cljs.core$macros.cond__GT__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.cond__GT__GT_.cljs$lang$applyTo = (function (seq19540){
var G__19541 = cljs.core.first.call(null,seq19540);
var seq19540__$1 = cljs.core.next.call(null,seq19540);
var G__19542 = cljs.core.first.call(null,seq19540__$1);
var seq19540__$2 = cljs.core.next.call(null,seq19540__$1);
var G__19543 = cljs.core.first.call(null,seq19540__$2);
var seq19540__$3 = cljs.core.next.call(null,seq19540__$2);
return cljs.core$macros.cond__GT__GT_.cljs$core$IFn$_invoke$arity$variadic(G__19541,G__19542,G__19543,seq19540__$3);
});


cljs.core$macros.cond__GT__GT_.cljs$lang$macro = true;
/**
 * Binds name to expr, evaluates the first form in the lexical context
 *   of that binding, then binds name to that result, repeating for each
 *   successive form, returning the result of the last form.
 */
cljs.core$macros.as__GT_ = (function cljs$core$macros$as__GT_(var_args){
var args__9938__auto__ = [];
var len__9931__auto___19556 = arguments.length;
var i__9932__auto___19557 = (0);
while(true){
if((i__9932__auto___19557 < len__9931__auto___19556)){
args__9938__auto__.push((arguments[i__9932__auto___19557]));

var G__19558 = (i__9932__auto___19557 + (1));
i__9932__auto___19557 = G__19558;
continue;
} else {
}
break;
}

var argseq__9939__auto__ = ((((4) < args__9938__auto__.length))?(new cljs.core.IndexedSeq(args__9938__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.as__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__9939__auto__);
});

cljs.core$macros.as__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,name,forms){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9660__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9660__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),cljs.core.interleave.call(null,cljs.core.repeat.call(null,name),forms)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
});

cljs.core$macros.as__GT_.cljs$lang$maxFixedArity = (4);

cljs.core$macros.as__GT_.cljs$lang$applyTo = (function (seq19551){
var G__19552 = cljs.core.first.call(null,seq19551);
var seq19551__$1 = cljs.core.next.call(null,seq19551);
var G__19553 = cljs.core.first.call(null,seq19551__$1);
var seq19551__$2 = cljs.core.next.call(null,seq19551__$1);
var G__19554 = cljs.core.first.call(null,seq19551__$2);
var seq19551__$3 = cljs.core.next.call(null,seq19551__$2);
var G__19555 = cljs.core.first.call(null,seq19551__$3);
var seq19551__$4 = cljs.core.next.call(null,seq19551__$3);
return cljs.core$macros.as__GT_.cljs$core$IFn$_invoke$arity$variadic(G__19552,G__19553,G__19554,G__19555,seq19551__$4);
});


cljs.core$macros.as__GT_.cljs$lang$macro = true;
/**
 * When expr is not nil, threads it into the first form (via ->),
 *   and when that result is not nil, through the next etc
 */
cljs.core$macros.some__GT_ = (function cljs$core$macros$some__GT_(var_args){
var args__9938__auto__ = [];
var len__9931__auto___19563 = arguments.length;
var i__9932__auto___19564 = (0);
while(true){
if((i__9932__auto___19564 < len__9931__auto___19563)){
args__9938__auto__.push((arguments[i__9932__auto___19564]));

var G__19565 = (i__9932__auto___19564 + (1));
i__9932__auto___19564 = G__19565;
continue;
} else {
}
break;
}

var argseq__9939__auto__ = ((((3) < args__9938__auto__.length))?(new cljs.core.IndexedSeq(args__9938__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.some__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9939__auto__);
});

cljs.core$macros.some__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,forms){
var g = cljs.core.gensym.call(null);
var pstep = ((function (g){
return (function (step){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__9660__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","->","cljs.core$macros/->",-1519455206,null)),(function (){var x__9660__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = step;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
});})(g))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9660__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9660__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),cljs.core.interleave.call(null,cljs.core.repeat.call(null,g),cljs.core.map.call(null,pstep,forms))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
});

cljs.core$macros.some__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.some__GT_.cljs$lang$applyTo = (function (seq19559){
var G__19560 = cljs.core.first.call(null,seq19559);
var seq19559__$1 = cljs.core.next.call(null,seq19559);
var G__19561 = cljs.core.first.call(null,seq19559__$1);
var seq19559__$2 = cljs.core.next.call(null,seq19559__$1);
var G__19562 = cljs.core.first.call(null,seq19559__$2);
var seq19559__$3 = cljs.core.next.call(null,seq19559__$2);
return cljs.core$macros.some__GT_.cljs$core$IFn$_invoke$arity$variadic(G__19560,G__19561,G__19562,seq19559__$3);
});


cljs.core$macros.some__GT_.cljs$lang$macro = true;
/**
 * When expr is not nil, threads it into the first form (via ->>),
 *   and when that result is not nil, through the next etc
 */
cljs.core$macros.some__GT__GT_ = (function cljs$core$macros$some__GT__GT_(var_args){
var args__9938__auto__ = [];
var len__9931__auto___19570 = arguments.length;
var i__9932__auto___19571 = (0);
while(true){
if((i__9932__auto___19571 < len__9931__auto___19570)){
args__9938__auto__.push((arguments[i__9932__auto___19571]));

var G__19572 = (i__9932__auto___19571 + (1));
i__9932__auto___19571 = G__19572;
continue;
} else {
}
break;
}

var argseq__9939__auto__ = ((((3) < args__9938__auto__.length))?(new cljs.core.IndexedSeq(args__9938__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.some__GT__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9939__auto__);
});

cljs.core$macros.some__GT__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,forms){
var g = cljs.core.gensym.call(null);
var pstep = ((function (g){
return (function (step){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__9660__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","->>","cljs.core$macros/->>",-1353108561,null)),(function (){var x__9660__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = step;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
});})(g))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9660__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9660__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),cljs.core.interleave.call(null,cljs.core.repeat.call(null,g),cljs.core.map.call(null,pstep,forms))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
});

cljs.core$macros.some__GT__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.some__GT__GT_.cljs$lang$applyTo = (function (seq19566){
var G__19567 = cljs.core.first.call(null,seq19566);
var seq19566__$1 = cljs.core.next.call(null,seq19566);
var G__19568 = cljs.core.first.call(null,seq19566__$1);
var seq19566__$2 = cljs.core.next.call(null,seq19566__$1);
var G__19569 = cljs.core.first.call(null,seq19566__$2);
var seq19566__$3 = cljs.core.next.call(null,seq19566__$2);
return cljs.core$macros.some__GT__GT_.cljs$core$IFn$_invoke$arity$variadic(G__19567,G__19568,G__19569,seq19566__$3);
});


cljs.core$macros.some__GT__GT_.cljs$lang$macro = true;
/**
 * bindings => binding-form test
 * 
 *    If test is not nil, evaluates then with binding-form bound to the
 *    value of test, if not, yields else
 */
cljs.core$macros.if_some = (function cljs$core$macros$if_some(var_args){
var args19574 = [];
var len__9931__auto___19583 = arguments.length;
var i__9932__auto___19584 = (0);
while(true){
if((i__9932__auto___19584 < len__9931__auto___19583)){
args19574.push((arguments[i__9932__auto___19584]));

var G__19585 = (i__9932__auto___19584 + (1));
i__9932__auto___19584 = G__19585;
continue;
} else {
}
break;
}

var G__19582 = args19574.length;
switch (G__19582) {
case 4:
return cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__9950__auto__ = (new cljs.core.IndexedSeq(args19574.slice((5)),(0),null));
return cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__9950__auto__);

}
});

cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,then){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-some","cljs.core$macros/if-some",1405341529,null)),(function (){var x__9660__auto__ = bindings;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = then;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9660__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__19573__auto__","temp__19573__auto__",1287149799,null)),(function (){var x__9660__auto__ = tst;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__19573__auto__","temp__19573__auto__",1287149799,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = else$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9660__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9660__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__19573__auto__","temp__19573__auto__",1287149799,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = then;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
});

cljs.core$macros.if_some.cljs$lang$applyTo = (function (seq19575){
var G__19576 = cljs.core.first.call(null,seq19575);
var seq19575__$1 = cljs.core.next.call(null,seq19575);
var G__19577 = cljs.core.first.call(null,seq19575__$1);
var seq19575__$2 = cljs.core.next.call(null,seq19575__$1);
var G__19578 = cljs.core.first.call(null,seq19575__$2);
var seq19575__$3 = cljs.core.next.call(null,seq19575__$2);
var G__19579 = cljs.core.first.call(null,seq19575__$3);
var seq19575__$4 = cljs.core.next.call(null,seq19575__$3);
var G__19580 = cljs.core.first.call(null,seq19575__$4);
var seq19575__$5 = cljs.core.next.call(null,seq19575__$4);
return cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$variadic(G__19576,G__19577,G__19578,G__19579,G__19580,seq19575__$5);
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
var args__9938__auto__ = [];
var len__9931__auto___19592 = arguments.length;
var i__9932__auto___19593 = (0);
while(true){
if((i__9932__auto___19593 < len__9931__auto___19592)){
args__9938__auto__.push((arguments[i__9932__auto___19593]));

var G__19594 = (i__9932__auto___19593 + (1));
i__9932__auto___19593 = G__19594;
continue;
} else {
}
break;
}

var argseq__9939__auto__ = ((((3) < args__9938__auto__.length))?(new cljs.core.IndexedSeq(args__9938__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9939__auto__);
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9660__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__19587__auto__","temp__19587__auto__",1975055921,null)),(function (){var x__9660__auto__ = tst;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__19587__auto__","temp__19587__auto__",1975055921,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9660__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9660__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__19587__auto__","temp__19587__auto__",1975055921,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
});

cljs.core$macros.when_some.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when_some.cljs$lang$applyTo = (function (seq19588){
var G__19589 = cljs.core.first.call(null,seq19588);
var seq19588__$1 = cljs.core.next.call(null,seq19588);
var G__19590 = cljs.core.first.call(null,seq19588__$1);
var seq19588__$2 = cljs.core.next.call(null,seq19588__$1);
var G__19591 = cljs.core.first.call(null,seq19588__$2);
var seq19588__$3 = cljs.core.next.call(null,seq19588__$2);
return cljs.core$macros.when_some.cljs$core$IFn$_invoke$arity$variadic(G__19589,G__19590,G__19591,seq19588__$3);
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

var argdecls = cljs.core.map.call(null,(function (p1__19595_SHARP_){
if(cljs.core.seq_QMARK_.call(null,p1__19595_SHARP_)){
return cljs.core.first.call(null,p1__19595_SHARP_);
} else {
throw (new Error(((cljs.core.seq_QMARK_.call(null,cljs.core.first.call(null,fdecl)))?[cljs.core.str("Invalid signature \""),cljs.core.str(p1__19595_SHARP_),cljs.core.str("\" should be a list")].join(''):[cljs.core.str("Parameter declaration \""),cljs.core.str(p1__19595_SHARP_),cljs.core.str("\" should be a vector")].join(''))));
}
}),fdecl);
var bad_args = cljs.core.seq.call(null,cljs.core.remove.call(null,((function (argdecls){
return (function (p1__19596_SHARP_){
return cljs.core.vector_QMARK_.call(null,p1__19596_SHARP_);
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
var G__19597 = cljs.core.conj.call(null,ret,asig.call(null,cljs.core.first.call(null,fdecls)));
var G__19598 = cljs.core.next.call(null,fdecls);
ret = G__19597;
fdecls = G__19598;
continue;
} else {
return cljs.core.seq.call(null,ret);
}
break;
}
} else {
var x__9660__auto__ = asig.call(null,fdecl);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
}
});
/**
 * defs name to have the root value of init iff the named var has no root value,
 *   else init is unevaluated
 */
cljs.core$macros.defonce = (function cljs$core$macros$defonce(_AMPERSAND_form,_AMPERSAND_env,x,init){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-not","cljs.core$macros/when-not",-764302244,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","exists?","cljs.core$macros/exists?",-1828590389,null)),(function (){var x__9660__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"def","def",597100991,null)),(function (){var x__9660__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = init;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
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
return cljs.core.conj.call(null,ret,gseq,cljs.core._conj.call(null,(function (){var x__9660__auto__ = gvec;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
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
var G__19608 = cljs$core$macros$destructure_$_pb.call(null,ret,cljs.core.second.call(null,bs),gseq);
var G__19609 = n;
var G__19610 = cljs.core.nnext.call(null,bs);
var G__19611 = true;
ret = G__19608;
n = G__19609;
bs = G__19610;
seen_rest_QMARK_ = G__19611;
continue;
} else {
if(cljs.core._EQ_.call(null,firstb,new cljs.core.Keyword(null,"as","as",1148689641))){
return cljs$core$macros$destructure_$_pb.call(null,ret,cljs.core.second.call(null,bs),gvec);
} else {
if(seen_rest_QMARK_){
throw (new Error("Unsupported binding form, only :as can follow & parameter"));
} else {
var G__19612 = cljs$core$macros$destructure_$_pb.call(null,(cljs.core.truth_(has_rest)?cljs.core.conj.call(null,ret,gfirst,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null)),(function (){var x__9660__auto__ = gseq;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})()))),gseq,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","next","cljs.core/next",-1291438473,null)),(function (){var x__9660__auto__ = gseq;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())))):ret),firstb,(cljs.core.truth_(has_rest)?gfirst:cljs.core._conj.call(null,(function (){var x__9660__auto__ = gvec;
return cljs.core._conj.call(null,(function (){var x__9660__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,null),x__9660__auto____$1);
})(),x__9660__auto__);
})(),new cljs.core.Symbol("cljs.core","nth","cljs.core/nth",1961052085,null))));
var G__19613 = (n + (1));
var G__19614 = cljs.core.next.call(null,bs);
var G__19615 = seen_rest_QMARK_;
ret = G__19612;
n = G__19613;
bs = G__19614;
seen_rest_QMARK_ = G__19615;
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
.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,bvec__$1,gmap),v__$1),gmap),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","implements?","cljs.core$macros/implements?",-94762250,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","ISeq","cljs.core/ISeq",230133392,null)),(function (){var x__9660__auto__ = gmap;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","hash-map","cljs.core/hash-map",303385767,null)),(function (){var x__9660__auto__ = gmap;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = gmap;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())))));
var bes = (function (){var transforms = cljs.core.reduce.call(null,((function (ret,gmap,defaults,pvec,bents){
return (function (transforms,mk){
if((mk instanceof cljs.core.Keyword)){
var mkns = cljs.core.namespace.call(null,mk);
var mkn = cljs.core.name.call(null,mk);
if(cljs.core._EQ_.call(null,mkn,"keys")){
return cljs.core.assoc.call(null,transforms,mk,((function (mkns,mkn,ret,gmap,defaults,pvec,bents){
return (function (p1__19599_SHARP_){
return cljs.core.keyword.call(null,(function (){var or__8823__auto__ = mkns;
if(cljs.core.truth_(or__8823__auto__)){
return or__8823__auto__;
} else {
return cljs.core.namespace.call(null,p1__19599_SHARP_);
}
})(),cljs.core.name.call(null,p1__19599_SHARP_));
});})(mkns,mkn,ret,gmap,defaults,pvec,bents))
);
} else {
if(cljs.core._EQ_.call(null,mkn,"syms")){
return cljs.core.assoc.call(null,transforms,mk,((function (mkns,mkn,ret,gmap,defaults,pvec,bents){
return (function (p1__19600_SHARP_){
return cljs.core._conj.call(null,(function (){var x__9660__auto__ = cljs.core.symbol.call(null,(function (){var or__8823__auto__ = mkns;
if(cljs.core.truth_(or__8823__auto__)){
return or__8823__auto__;
} else {
return cljs.core.namespace.call(null,p1__19600_SHARP_);
}
})(),cljs.core.name.call(null,p1__19600_SHARP_));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
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
return (function (p1__19601_SHARP_,p2__19602_SHARP_){
return cljs.core.assoc.call(null,p1__19601_SHARP_,p2__19602_SHARP_,cljs.core.val.call(null,entry).call(null,p2__19602_SHARP_));
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
var bv = ((cljs.core.contains_QMARK_.call(null,defaults,local))?cljs.core._conj.call(null,(function (){var x__9660__auto__ = gmap;
return cljs.core._conj.call(null,(function (){var x__9660__auto____$1 = bk;
return cljs.core._conj.call(null,(function (){var x__9660__auto____$2 = defaults.call(null,local);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto____$2);
})(),x__9660__auto____$1);
})(),x__9660__auto__);
})(),new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null)):cljs.core._conj.call(null,(function (){var x__9660__auto__ = gmap;
return cljs.core._conj.call(null,(function (){var x__9660__auto____$1 = bk;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto____$1);
})(),x__9660__auto__);
})(),new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null)));
var G__19616 = ((((bb instanceof cljs.core.Keyword)) || ((bb instanceof cljs.core.Symbol)))?cljs.core.conj.call(null,ret,local,bv):cljs$core$macros$destructure_$_pb.call(null,ret,bb,bv));
var G__19617 = cljs.core.next.call(null,bes);
ret = G__19616;
bes = G__19617;
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
return (function (p1__19603_SHARP_){
return (cljs.core.first.call(null,p1__19603_SHARP_) instanceof cljs.core.Keyword);
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","declare","cljs.core$macros/declare",1172642527,null)),(function (){var x__9660__auto__ = cljs.core.symbol.call(null,sym);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),(function (){var x__9660__auto__ = [cljs.core.str("/** @define {"),cljs.core.str(type),cljs.core.str("} */")].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog","define","goog/define",-352722538,null)),(function (){var x__9660__auto__ = defname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = default$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
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
var args__9938__auto__ = [];
var len__9931__auto___19622 = arguments.length;
var i__9932__auto___19623 = (0);
while(true){
if((i__9932__auto___19623 < len__9931__auto___19622)){
args__9938__auto__.push((arguments[i__9932__auto___19623]));

var G__19624 = (i__9932__auto___19623 + (1));
i__9932__auto___19623 = G__19624;
continue;
} else {
}
break;
}

var argseq__9939__auto__ = ((((3) < args__9938__auto__.length))?(new cljs.core.IndexedSeq(args__9938__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.let$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9939__auto__);
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


return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"let*","let*",1920721458,null)),(function (){var x__9660__auto__ = cljs.core$macros.destructure.call(null,bindings);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),body)));
});

cljs.core$macros.let$.cljs$lang$maxFixedArity = (3);

cljs.core$macros.let$.cljs$lang$applyTo = (function (seq19618){
var G__19619 = cljs.core.first.call(null,seq19618);
var seq19618__$1 = cljs.core.next.call(null,seq19618);
var G__19620 = cljs.core.first.call(null,seq19618__$1);
var seq19618__$2 = cljs.core.next.call(null,seq19618__$1);
var G__19621 = cljs.core.first.call(null,seq19618__$2);
var seq19618__$3 = cljs.core.next.call(null,seq19618__$2);
return cljs.core$macros.let$.cljs$core$IFn$_invoke$arity$variadic(G__19619,G__19620,G__19621,seq19618__$3);
});


cljs.core$macros.let$.cljs$lang$macro = true;
/**
 * Evaluates the exprs in a lexical context in which the symbols in
 *   the binding-forms are bound to their respective init-exprs or parts
 *   therein. Acts as a recur target.
 */
cljs.core$macros.loop = (function cljs$core$macros$loop(var_args){
var args__9938__auto__ = [];
var len__9931__auto___19633 = arguments.length;
var i__9932__auto___19634 = (0);
while(true){
if((i__9932__auto___19634 < len__9931__auto___19633)){
args__9938__auto__.push((arguments[i__9932__auto___19634]));

var G__19635 = (i__9932__auto___19634 + (1));
i__9932__auto___19634 = G__19635;
continue;
} else {
}
break;
}

var argseq__9939__auto__ = ((((3) < args__9938__auto__.length))?(new cljs.core.IndexedSeq(args__9938__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.loop.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9939__auto__);
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"loop*","loop*",615029416,null)),(function (){var x__9660__auto__ = bindings;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
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
return (function (ret,p__19629){
var vec__19630 = p__19629;
var b = cljs.core.nth.call(null,vec__19630,(0),null);
var v = cljs.core.nth.call(null,vec__19630,(1),null);
var g = cljs.core.nth.call(null,vec__19630,(2),null);
if((b instanceof cljs.core.Symbol)){
return cljs.core.conj.call(null,ret,g,v);
} else {
return cljs.core.conj.call(null,ret,g,v,b,g);
}
});})(vs,bs,gs,db))
,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,cljs.core.vector,bs,vs,gs));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9660__auto__ = bfs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"loop*","loop*",615029416,null)),(function (){var x__9660__auto__ = cljs.core.vec.call(null,cljs.core.interleave.call(null,gs,gs));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9660__auto__ = cljs.core.vec.call(null,cljs.core.interleave.call(null,bs,gs));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
}
});

cljs.core$macros.loop.cljs$lang$maxFixedArity = (3);

cljs.core$macros.loop.cljs$lang$applyTo = (function (seq19625){
var G__19626 = cljs.core.first.call(null,seq19625);
var seq19625__$1 = cljs.core.next.call(null,seq19625);
var G__19627 = cljs.core.first.call(null,seq19625__$1);
var seq19625__$2 = cljs.core.next.call(null,seq19625__$1);
var G__19628 = cljs.core.first.call(null,seq19625__$2);
var seq19625__$3 = cljs.core.next.call(null,seq19625__$2);
return cljs.core$macros.loop.cljs$core$IFn$_invoke$arity$variadic(G__19626,G__19627,G__19628,seq19625__$3);
});


cljs.core$macros.loop.cljs$lang$macro = true;
/**
 * protocol fqn -> [partition number, bit]
 */
cljs.core$macros.fast_path_protocols = cljs.core.zipmap.call(null,cljs.core.map.call(null,(function (p1__19636_SHARP_){
return cljs.core.symbol.call(null,"cljs.core",[cljs.core.str(p1__19636_SHARP_)].join(''));
}),cljs.core.PersistentVector.fromArray([new cljs.core.Symbol(null,"IFn","IFn",-244881638,null),new cljs.core.Symbol(null,"ICounted","ICounted",-1705786327,null),new cljs.core.Symbol(null,"IEmptyableCollection","IEmptyableCollection",1477271438,null),new cljs.core.Symbol(null,"ICollection","ICollection",-686709190,null),new cljs.core.Symbol(null,"IIndexed","IIndexed",-574812826,null),new cljs.core.Symbol(null,"ASeq","ASeq",266390234,null),new cljs.core.Symbol(null,"ISeq","ISeq",1517365813,null),new cljs.core.Symbol(null,"INext","INext",562211849,null),new cljs.core.Symbol(null,"ILookup","ILookup",784647298,null),new cljs.core.Symbol(null,"IAssociative","IAssociative",-1306431882,null),new cljs.core.Symbol(null,"IMap","IMap",992876629,null),new cljs.core.Symbol(null,"IMapEntry","IMapEntry",-943754199,null),new cljs.core.Symbol(null,"ISet","ISet",-1398072657,null),new cljs.core.Symbol(null,"IStack","IStack",1136769449,null),new cljs.core.Symbol(null,"IVector","IVector",-1120721434,null),new cljs.core.Symbol(null,"IDeref","IDeref",1738423197,null),new cljs.core.Symbol(null,"IDerefWithTimeout","IDerefWithTimeout",2140974319,null),new cljs.core.Symbol(null,"IMeta","IMeta",1095313672,null),new cljs.core.Symbol(null,"IWithMeta","IWithMeta",-509493158,null),new cljs.core.Symbol(null,"IReduce","IReduce",-440384974,null),new cljs.core.Symbol(null,"IKVReduce","IKVReduce",-870856862,null),new cljs.core.Symbol(null,"IEquiv","IEquiv",-1912850869,null),new cljs.core.Symbol(null,"IHash","IHash",-1495374645,null),new cljs.core.Symbol(null,"ISeqable","ISeqable",1349682102,null),new cljs.core.Symbol(null,"ISequential","ISequential",-1626174217,null),new cljs.core.Symbol(null,"IList","IList",1682281311,null),new cljs.core.Symbol(null,"IRecord","IRecord",-903221169,null),new cljs.core.Symbol(null,"IReversible","IReversible",-723048599,null),new cljs.core.Symbol(null,"ISorted","ISorted",-253627362,null),new cljs.core.Symbol(null,"IPrintWithWriter","IPrintWithWriter",-1205316154,null),new cljs.core.Symbol(null,"IWriter","IWriter",-1681087107,null),new cljs.core.Symbol(null,"IPrintWithWriter","IPrintWithWriter",-1205316154,null),new cljs.core.Symbol(null,"IPending","IPending",1229113039,null),new cljs.core.Symbol(null,"IWatchable","IWatchable",-1929659016,null),new cljs.core.Symbol(null,"IEditableCollection","IEditableCollection",-906687187,null),new cljs.core.Symbol(null,"ITransientCollection","ITransientCollection",252832402,null),new cljs.core.Symbol(null,"ITransientAssociative","ITransientAssociative",-1612754624,null),new cljs.core.Symbol(null,"ITransientMap","ITransientMap",298423651,null),new cljs.core.Symbol(null,"ITransientVector","ITransientVector",1978793164,null),new cljs.core.Symbol(null,"ITransientSet","ITransientSet",-575559912,null),new cljs.core.Symbol(null,"IMultiFn","IMultiFn",-1848282794,null),new cljs.core.Symbol(null,"IChunkedSeq","IChunkedSeq",-1299765705,null),new cljs.core.Symbol(null,"IChunkedNext","IChunkedNext",1193289532,null),new cljs.core.Symbol(null,"IComparable","IComparable",1834481627,null),new cljs.core.Symbol(null,"INamed","INamed",357992946,null),new cljs.core.Symbol(null,"ICloneable","ICloneable",1882653160,null),new cljs.core.Symbol(null,"IAtom","IAtom",-1411134312,null),new cljs.core.Symbol(null,"IReset","IReset",-1893729426,null),new cljs.core.Symbol(null,"ISwap","ISwap",484378193,null)], true)),cljs.core.iterate.call(null,(function (p__19637){
var vec__19638 = p__19637;
var p = cljs.core.nth.call(null,vec__19638,(0),null);
var b = cljs.core.nth.call(null,vec__19638,(1),null);
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
var args__9938__auto__ = [];
var len__9931__auto___19644 = arguments.length;
var i__9932__auto___19645 = (0);
while(true){
if((i__9932__auto___19645 < len__9931__auto___19644)){
args__9938__auto__.push((arguments[i__9932__auto___19645]));

var G__19646 = (i__9932__auto___19645 + (1));
i__9932__auto___19645 = G__19646;
continue;
} else {
}
break;
}

var argseq__9939__auto__ = ((((2) < args__9938__auto__.length))?(new cljs.core.IndexedSeq(args__9938__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9939__auto__);
});

cljs.core$macros.str.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
var strs = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,",",cljs.core.repeat.call(null,cljs.core.count.call(null,xs),"cljs.core.str(~{})")));
return cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),[cljs.core.str("["),cljs.core.str(strs),cljs.core.str("].join('')")].join(''),xs);
});

cljs.core$macros.str.cljs$lang$maxFixedArity = (2);

cljs.core$macros.str.cljs$lang$applyTo = (function (seq19641){
var G__19642 = cljs.core.first.call(null,seq19641);
var seq19641__$1 = cljs.core.next.call(null,seq19641);
var G__19643 = cljs.core.first.call(null,seq19641__$1);
var seq19641__$2 = cljs.core.next.call(null,seq19641__$1);
return cljs.core$macros.str.cljs$core$IFn$_invoke$arity$variadic(G__19642,G__19643,seq19641__$2);
});


cljs.core$macros.str.cljs$lang$macro = true;
cljs.core$macros.bool_expr = (function cljs$core$macros$bool_expr(e){
return cljs.core.vary_meta.call(null,e,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null));
});
cljs.core$macros.simple_test_expr_QMARK_ = (function cljs$core$macros$simple_test_expr_QMARK_(env,ast){
var and__8811__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"js","js",1768080579),null,new cljs.core.Keyword(null,"constant","constant",-379609303),null,new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"invoke","invoke",1145927159),null,new cljs.core.Keyword(null,"dot","dot",1442709401),null], null), null).call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast));
if(cljs.core.truth_(and__8811__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null).call(null,cljs.analyzer.infer_tag.call(null,env,ast));
} else {
return and__8811__auto__;
}
});
/**
 * Evaluates exprs one at a time, from left to right. If a form
 *   returns logical false (nil or false), and returns that value and
 *   doesn't evaluate any of the other expressions, otherwise it returns
 *   the value of the last expr. (and) returns true.
 */
cljs.core$macros.and = (function cljs$core$macros$and(var_args){
var args19650 = [];
var len__9931__auto___19657 = arguments.length;
var i__9932__auto___19658 = (0);
while(true){
if((i__9932__auto___19658 < len__9931__auto___19657)){
args19650.push((arguments[i__9932__auto___19658]));

var G__19659 = (i__9932__auto___19658 + (1));
i__9932__auto___19658 = G__19659;
continue;
} else {
}
break;
}

var G__19656 = args19650.length;
switch (G__19656) {
case 2:
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__9950__auto__ = (new cljs.core.IndexedSeq(args19650.slice((3)),(0),null));
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9950__auto__);

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
return (function (p1__19647_SHARP_){
return cljs.core$macros.simple_test_expr_QMARK_.call(null,_AMPERSAND_env,p1__19647_SHARP_);
});})(forms))
,cljs.core.map.call(null,((function (forms){
return (function (p1__19648_SHARP_){
return cljs.analyzer.analyze.call(null,_AMPERSAND_env,p1__19648_SHARP_);
});})(forms))
,forms))){
var and_str = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," && ",cljs.core.repeat.call(null,cljs.core.count.call(null,forms),"(~{})")));
return cljs.core$macros.bool_expr.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),(function (){var x__9660__auto__ = and_str;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),forms))));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9660__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"and__19649__auto__","and__19649__auto__",-579276867,null)),(function (){var x__9660__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"and__19649__auto__","and__19649__auto__",-579276867,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),next)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"and__19649__auto__","and__19649__auto__",-579276867,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
}
});

cljs.core$macros.and.cljs$lang$applyTo = (function (seq19651){
var G__19652 = cljs.core.first.call(null,seq19651);
var seq19651__$1 = cljs.core.next.call(null,seq19651);
var G__19653 = cljs.core.first.call(null,seq19651__$1);
var seq19651__$2 = cljs.core.next.call(null,seq19651__$1);
var G__19654 = cljs.core.first.call(null,seq19651__$2);
var seq19651__$3 = cljs.core.next.call(null,seq19651__$2);
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$variadic(G__19652,G__19653,G__19654,seq19651__$3);
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
var args19664 = [];
var len__9931__auto___19671 = arguments.length;
var i__9932__auto___19672 = (0);
while(true){
if((i__9932__auto___19672 < len__9931__auto___19671)){
args19664.push((arguments[i__9932__auto___19672]));

var G__19673 = (i__9932__auto___19672 + (1));
i__9932__auto___19672 = G__19673;
continue;
} else {
}
break;
}

var G__19670 = args19664.length;
switch (G__19670) {
case 2:
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__9950__auto__ = (new cljs.core.IndexedSeq(args19664.slice((3)),(0),null));
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9950__auto__);

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
return (function (p1__19661_SHARP_){
return cljs.core$macros.simple_test_expr_QMARK_.call(null,_AMPERSAND_env,p1__19661_SHARP_);
});})(forms))
,cljs.core.map.call(null,((function (forms){
return (function (p1__19662_SHARP_){
return cljs.analyzer.analyze.call(null,_AMPERSAND_env,p1__19662_SHARP_);
});})(forms))
,forms))){
var or_str = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," || ",cljs.core.repeat.call(null,cljs.core.count.call(null,forms),"(~{})")));
return cljs.core$macros.bool_expr.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),(function (){var x__9660__auto__ = or_str;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),forms))));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9660__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"or__19663__auto__","or__19663__auto__",2067029711,null)),(function (){var x__9660__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"or__19663__auto__","or__19663__auto__",2067029711,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"or__19663__auto__","or__19663__auto__",2067029711,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","or","cljs.core$macros/or",1346243648,null)),next)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
}
});

cljs.core$macros.or.cljs$lang$applyTo = (function (seq19665){
var G__19666 = cljs.core.first.call(null,seq19665);
var seq19665__$1 = cljs.core.next.call(null,seq19665);
var G__19667 = cljs.core.first.call(null,seq19665__$1);
var seq19665__$2 = cljs.core.next.call(null,seq19665__$1);
var G__19668 = cljs.core.first.call(null,seq19665__$2);
var seq19665__$3 = cljs.core.next.call(null,seq19665__$2);
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$variadic(G__19666,G__19667,G__19668,seq19665__$3);
});

cljs.core$macros.or.cljs$lang$maxFixedArity = (3);


cljs.core$macros.or.cljs$lang$macro = true;
cljs.core$macros.nil_QMARK_ = (function cljs$core$macros$nil_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","coercive-=","cljs.core$macros/coercive-=",-1655776086,null)),(function (){var x__9660__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
});

cljs.core$macros.nil_QMARK_.cljs$lang$macro = true;
cljs.core$macros.coercive_not = (function cljs$core$macros$coercive_not(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9660__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),"(!~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.coercive_not.cljs$lang$macro = true;
cljs.core$macros.coercive_not_EQ_ = (function cljs$core$macros$coercive_not_EQ_(_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9660__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__9660__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto____$1);
})(),x__9660__auto__);
})(),"(~{} != ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.coercive_not_EQ_.cljs$lang$macro = true;
cljs.core$macros.coercive__EQ_ = (function cljs$core$macros$coercive__EQ_(_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9660__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__9660__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto____$1);
})(),x__9660__auto__);
})(),"(~{} == ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.coercive__EQ_.cljs$lang$macro = true;
cljs.core$macros.coercive_boolean = (function cljs$core$macros$coercive_boolean(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.with_meta.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9660__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),"~{}"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)], null));
});

cljs.core$macros.coercive_boolean.cljs$lang$macro = true;
cljs.core$macros.truth_ = (function cljs$core$macros$truth_(_AMPERSAND_form,_AMPERSAND_env,x){
if((x instanceof cljs.core.Symbol)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("x is substituted twice"),cljs.core.str("\n"),cljs.core.str("(core/symbol? x)")].join('')));
}

return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9660__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__9660__auto____$1 = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto____$1);
})(),x__9660__auto__);
})(),"(~{} != null && ~{} !== false)"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.truth_.cljs$lang$macro = true;
cljs.core$macros.js_arguments = (function cljs$core$macros$js_arguments(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"arguments"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.js_arguments.cljs$lang$macro = true;
cljs.core$macros.js_delete = (function cljs$core$macros$js_delete(_AMPERSAND_form,_AMPERSAND_env,obj,key){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9660__auto__ = obj;
return cljs.core._conj.call(null,(function (){var x__9660__auto____$1 = key;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto____$1);
})(),x__9660__auto__);
})(),"delete ~{}[~{}]"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.js_delete.cljs$lang$macro = true;
cljs.core$macros.js_in = (function cljs$core$macros$js_in(_AMPERSAND_form,_AMPERSAND_env,key,obj){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9660__auto__ = key;
return cljs.core._conj.call(null,(function (){var x__9660__auto____$1 = obj;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto____$1);
})(),x__9660__auto__);
})(),"~{} in ~{}"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.js_in.cljs$lang$macro = true;
/**
 * Emit JavaScript "debugger;" statement
 */
cljs.core$macros.js_debugger = (function cljs$core$macros$js_debugger(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core._conj.call(null,(function (){var x__9660__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"debugger"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,null),x__9660__auto__);
})(),new cljs.core.Symbol(null,"do","do",1686842252,null));
});

cljs.core$macros.js_debugger.cljs$lang$macro = true;
/**
 * Emit a top-level JavaScript multi-line comment. New lines will create a
 *   new comment line. Comment block will be preceded and followed by a newline
 */
cljs.core$macros.js_comment = (function cljs$core$macros$js_comment(_AMPERSAND_form,_AMPERSAND_env,comment){
var vec__19679 = clojure.string.split.call(null,comment,/\n/);
var seq__19680 = cljs.core.seq.call(null,vec__19679);
var first__19681 = cljs.core.first.call(null,seq__19680);
var seq__19680__$1 = cljs.core.next.call(null,seq__19680);
var x = first__19681;
var ys = seq__19680__$1;
return cljs.core._conj.call(null,(function (){var x__9660__auto__ = [cljs.core.str("\n/**\n"),cljs.core.str([cljs.core.str(" * "),cljs.core.str(x),cljs.core.str("\n")].join('')),cljs.core.str(cljs.core.reduce.call(null,cljs.core.str,"",cljs.core.map.call(null,((function (vec__19679,seq__19680,first__19681,seq__19680__$1,x,ys){
return (function (p1__19675_SHARP_){
return [cljs.core.str(" * "),cljs.core.str(clojure.string.replace.call(null,p1__19675_SHARP_,/^   /,"")),cljs.core.str("\n")].join('');
});})(vec__19679,seq__19680,first__19681,seq__19680__$1,x,ys))
,ys))),cljs.core.str(" */\n")].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.js_comment.cljs$lang$macro = true;
/**
 * EXPERIMENTAL: Subject to change. Unsafely cast a value to a different type.
 */
cljs.core$macros.unsafe_cast = (function cljs$core$macros$unsafe_cast(_AMPERSAND_form,_AMPERSAND_env,t,x){
var cast_expr = [cljs.core.str("~{} = /** @type {"),cljs.core.str(t),cljs.core.str("} */ (~{})")].join('');
return cljs.core._conj.call(null,(function (){var x__9660__auto__ = cast_expr;
return cljs.core._conj.call(null,(function (){var x__9660__auto____$1 = x;
return cljs.core._conj.call(null,(function (){var x__9660__auto____$2 = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto____$2);
})(),x__9660__auto____$1);
})(),x__9660__auto__);
})(),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.unsafe_cast.cljs$lang$macro = true;
/**
 * Emit an inline JavaScript comment.
 */
cljs.core$macros.js_inline_comment = (function cljs$core$macros$js_inline_comment(_AMPERSAND_form,_AMPERSAND_env,comment){
return cljs.core._conj.call(null,(function (){var x__9660__auto__ = [cljs.core.str("/**"),cljs.core.str(comment),cljs.core.str("*/")].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.js_inline_comment.cljs$lang$macro = true;
cljs.core$macros.true_QMARK_ = (function cljs$core$macros$true_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9660__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),"~{} === true"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.true_QMARK_.cljs$lang$macro = true;
cljs.core$macros.false_QMARK_ = (function cljs$core$macros$false_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9660__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),"~{} === false"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.false_QMARK_.cljs$lang$macro = true;
cljs.core$macros.string_QMARK_ = (function cljs$core$macros$string_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9660__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),"typeof ~{} === 'string'"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.string_QMARK_.cljs$lang$macro = true;
/**
 * Return true if argument exists, analogous to usage of typeof operator
 * in JavaScript.
 */
cljs.core$macros.exists_QMARK_ = (function cljs$core$macros$exists_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9660__auto__ = cljs.core.vary_meta.call(null,x,cljs.core.assoc,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),"typeof ~{} !== 'undefined'"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.exists_QMARK_.cljs$lang$macro = true;
/**
 * Return true if argument is identical to the JavaScript undefined value.
 */
cljs.core$macros.undefined_QMARK_ = (function cljs$core$macros$undefined_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9660__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),"(void 0 === ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.undefined_QMARK_.cljs$lang$macro = true;
cljs.core$macros.identical_QMARK_ = (function cljs$core$macros$identical_QMARK_(_AMPERSAND_form,_AMPERSAND_env,a,b){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9660__auto__ = a;
return cljs.core._conj.call(null,(function (){var x__9660__auto____$1 = b;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto____$1);
})(),x__9660__auto__);
})(),"(~{} === ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.identical_QMARK_.cljs$lang$macro = true;
cljs.core$macros.instance_QMARK_ = (function cljs$core$macros$instance_QMARK_(_AMPERSAND_form,_AMPERSAND_env,c,x){
return cljs.core$macros.bool_expr.call(null,(((c instanceof cljs.core.Symbol))?cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9660__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__9660__auto____$1 = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto____$1);
})(),x__9660__auto__);
})(),"(~{} instanceof ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)):cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9660__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__19682__auto__","c__19682__auto__",833695357,null)),(function (){var x__9660__auto__ = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__19683__auto__","x__19683__auto__",519108965,null)),(function (){var x__9660__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"(~{} instanceof ~{})"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__19683__auto__","x__19683__auto__",519108965,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__19682__auto__","c__19682__auto__",833695357,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())))));
});

cljs.core$macros.instance_QMARK_.cljs$lang$macro = true;
cljs.core$macros.number_QMARK_ = (function cljs$core$macros$number_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9660__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),"typeof ~{} === 'number'"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.number_QMARK_.cljs$lang$macro = true;
cljs.core$macros.symbol_QMARK_ = (function cljs$core$macros$symbol_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","instance?","cljs.core$macros/instance?",1829750179,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","Symbol","cljs.core/Symbol",292989338,null)),(function (){var x__9660__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})()))));
});

cljs.core$macros.symbol_QMARK_.cljs$lang$macro = true;
cljs.core$macros.keyword_QMARK_ = (function cljs$core$macros$keyword_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","instance?","cljs.core$macros/instance?",1829750179,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","Keyword","cljs.core/Keyword",-451434488,null)),(function (){var x__9660__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})()))));
});

cljs.core$macros.keyword_QMARK_.cljs$lang$macro = true;
cljs.core$macros.aget = (function cljs$core$macros$aget(var_args){
var args19684 = [];
var len__9931__auto___19692 = arguments.length;
var i__9932__auto___19693 = (0);
while(true){
if((i__9932__auto___19693 < len__9931__auto___19692)){
args19684.push((arguments[i__9932__auto___19693]));

var G__19694 = (i__9932__auto___19693 + (1));
i__9932__auto___19693 = G__19694;
continue;
} else {
}
break;
}

var G__19691 = args19684.length;
switch (G__19691) {
case 4:
return cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__9950__auto__ = (new cljs.core.IndexedSeq(args19684.slice((4)),(0),null));
return cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__9950__auto__);

}
});

cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,a,i){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9660__auto__ = a;
return cljs.core._conj.call(null,(function (){var x__9660__auto____$1 = i;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto____$1);
})(),x__9660__auto__);
})(),"(~{}[~{}])"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,a,i,idxs){
var astr = cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,cljs.core.count.call(null,idxs),"[~{}]"));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),(function (){var x__9660__auto__ = [cljs.core.str("(~{}[~{}]"),cljs.core.str(astr),cljs.core.str(")")].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = a;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = i;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),idxs)));
});

cljs.core$macros.aget.cljs$lang$applyTo = (function (seq19685){
var G__19686 = cljs.core.first.call(null,seq19685);
var seq19685__$1 = cljs.core.next.call(null,seq19685);
var G__19687 = cljs.core.first.call(null,seq19685__$1);
var seq19685__$2 = cljs.core.next.call(null,seq19685__$1);
var G__19688 = cljs.core.first.call(null,seq19685__$2);
var seq19685__$3 = cljs.core.next.call(null,seq19685__$2);
var G__19689 = cljs.core.first.call(null,seq19685__$3);
var seq19685__$4 = cljs.core.next.call(null,seq19685__$3);
return cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$variadic(G__19686,G__19687,G__19688,G__19689,seq19685__$4);
});

cljs.core$macros.aget.cljs$lang$maxFixedArity = (4);


cljs.core$macros.aget.cljs$lang$macro = true;
cljs.core$macros.aset = (function cljs$core$macros$aset(var_args){
var args19696 = [];
var len__9931__auto___19705 = arguments.length;
var i__9932__auto___19706 = (0);
while(true){
if((i__9932__auto___19706 < len__9931__auto___19705)){
args19696.push((arguments[i__9932__auto___19706]));

var G__19707 = (i__9932__auto___19706 + (1));
i__9932__auto___19706 = G__19707;
continue;
} else {
}
break;
}

var G__19704 = args19696.length;
switch (G__19704) {
case 5:
return cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
var argseq__9950__auto__ = (new cljs.core.IndexedSeq(args19696.slice((5)),(0),null));
return cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__9950__auto__);

}
});

cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$5 = (function (_AMPERSAND_form,_AMPERSAND_env,a,i,v){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9660__auto__ = a;
return cljs.core._conj.call(null,(function (){var x__9660__auto____$1 = i;
return cljs.core._conj.call(null,(function (){var x__9660__auto____$2 = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto____$2);
})(),x__9660__auto____$1);
})(),x__9660__auto__);
})(),"(~{}[~{}] = ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,a,idx,idx2,idxv){
var n = (cljs.core.count.call(null,idxv) - (1));
var astr = cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,n,"[~{}]"));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),(function (){var x__9660__auto__ = [cljs.core.str("(~{}[~{}][~{}]"),cljs.core.str(astr),cljs.core.str(" = ~{})")].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = a;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = idx2;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),idxv)));
});

cljs.core$macros.aset.cljs$lang$applyTo = (function (seq19697){
var G__19698 = cljs.core.first.call(null,seq19697);
var seq19697__$1 = cljs.core.next.call(null,seq19697);
var G__19699 = cljs.core.first.call(null,seq19697__$1);
var seq19697__$2 = cljs.core.next.call(null,seq19697__$1);
var G__19700 = cljs.core.first.call(null,seq19697__$2);
var seq19697__$3 = cljs.core.next.call(null,seq19697__$2);
var G__19701 = cljs.core.first.call(null,seq19697__$3);
var seq19697__$4 = cljs.core.next.call(null,seq19697__$3);
var G__19702 = cljs.core.first.call(null,seq19697__$4);
var seq19697__$5 = cljs.core.next.call(null,seq19697__$4);
return cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$variadic(G__19698,G__19699,G__19700,G__19701,G__19702,seq19697__$5);
});

cljs.core$macros.aset.cljs$lang$maxFixedArity = (5);


cljs.core$macros.aset.cljs$lang$macro = true;
cljs.core$macros._PLUS_ = (function cljs$core$macros$_PLUS_(var_args){
var args19709 = [];
var len__9931__auto___19717 = arguments.length;
var i__9932__auto___19718 = (0);
while(true){
if((i__9932__auto___19718 < len__9931__auto___19717)){
args19709.push((arguments[i__9932__auto___19718]));

var G__19719 = (i__9932__auto___19718 + (1));
i__9932__auto___19718 = G__19719;
continue;
} else {
}
break;
}

var G__19716 = args19709.length;
switch (G__19716) {
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
var argseq__9950__auto__ = (new cljs.core.IndexedSeq(args19709.slice((4)),(0),null));
return cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__9950__auto__);

}
});

cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return (0);
});

cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9660__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__9660__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto____$1);
})(),x__9660__auto__);
})(),"(~{} + ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),(function (){var x__9660__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),more)));
});

cljs.core$macros._PLUS_.cljs$lang$applyTo = (function (seq19710){
var G__19711 = cljs.core.first.call(null,seq19710);
var seq19710__$1 = cljs.core.next.call(null,seq19710);
var G__19712 = cljs.core.first.call(null,seq19710__$1);
var seq19710__$2 = cljs.core.next.call(null,seq19710__$1);
var G__19713 = cljs.core.first.call(null,seq19710__$2);
var seq19710__$3 = cljs.core.next.call(null,seq19710__$2);
var G__19714 = cljs.core.first.call(null,seq19710__$3);
var seq19710__$4 = cljs.core.next.call(null,seq19710__$3);
return cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$variadic(G__19711,G__19712,G__19713,G__19714,seq19710__$4);
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
var args__9938__auto__ = [];
var len__9931__auto___19724 = arguments.length;
var i__9932__auto___19725 = (0);
while(true){
if((i__9932__auto___19725 < len__9931__auto___19724)){
args__9938__auto__.push((arguments[i__9932__auto___19725]));

var G__19726 = (i__9932__auto___19725 + (1));
i__9932__auto___19725 = G__19726;
continue;
} else {
}
break;
}

var argseq__9939__auto__ = ((((2) < args__9938__auto__.length))?(new cljs.core.IndexedSeq(args__9938__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_add.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9939__auto__);
});

cljs.core$macros.unchecked_add.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),xs)));
});

cljs.core$macros.unchecked_add.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_add.cljs$lang$applyTo = (function (seq19721){
var G__19722 = cljs.core.first.call(null,seq19721);
var seq19721__$1 = cljs.core.next.call(null,seq19721);
var G__19723 = cljs.core.first.call(null,seq19721__$1);
var seq19721__$2 = cljs.core.next.call(null,seq19721__$1);
return cljs.core$macros.unchecked_add.cljs$core$IFn$_invoke$arity$variadic(G__19722,G__19723,seq19721__$2);
});


cljs.core$macros.unchecked_add.cljs$lang$macro = true;
cljs.core$macros.unchecked_add_int = (function cljs$core$macros$unchecked_add_int(var_args){
var args__9938__auto__ = [];
var len__9931__auto___19730 = arguments.length;
var i__9932__auto___19731 = (0);
while(true){
if((i__9932__auto___19731 < len__9931__auto___19730)){
args__9938__auto__.push((arguments[i__9932__auto___19731]));

var G__19732 = (i__9932__auto___19731 + (1));
i__9932__auto___19731 = G__19732;
continue;
} else {
}
break;
}

var argseq__9939__auto__ = ((((2) < args__9938__auto__.length))?(new cljs.core.IndexedSeq(args__9938__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_add_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9939__auto__);
});

cljs.core$macros.unchecked_add_int.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),xs)));
});

cljs.core$macros.unchecked_add_int.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_add_int.cljs$lang$applyTo = (function (seq19727){
var G__19728 = cljs.core.first.call(null,seq19727);
var seq19727__$1 = cljs.core.next.call(null,seq19727);
var G__19729 = cljs.core.first.call(null,seq19727__$1);
var seq19727__$2 = cljs.core.next.call(null,seq19727__$1);
return cljs.core$macros.unchecked_add_int.cljs$core$IFn$_invoke$arity$variadic(G__19728,G__19729,seq19727__$2);
});


cljs.core$macros.unchecked_add_int.cljs$lang$macro = true;
cljs.core$macros.unchecked_dec = (function cljs$core$macros$unchecked_dec(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","dec","cljs.core$macros/dec",-247694061,null)),(function (){var x__9660__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
});

cljs.core$macros.unchecked_dec.cljs$lang$macro = true;
cljs.core$macros.unchecked_dec_int = (function cljs$core$macros$unchecked_dec_int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","dec","cljs.core$macros/dec",-247694061,null)),(function (){var x__9660__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
});

cljs.core$macros.unchecked_dec_int.cljs$lang$macro = true;
cljs.core$macros.unchecked_divide_int = (function cljs$core$macros$unchecked_divide_int(var_args){
var args__9938__auto__ = [];
var len__9931__auto___19736 = arguments.length;
var i__9932__auto___19737 = (0);
while(true){
if((i__9932__auto___19737 < len__9931__auto___19736)){
args__9938__auto__.push((arguments[i__9932__auto___19737]));

var G__19738 = (i__9932__auto___19737 + (1));
i__9932__auto___19737 = G__19738;
continue;
} else {
}
break;
}

var argseq__9939__auto__ = ((((2) < args__9938__auto__.length))?(new cljs.core.IndexedSeq(args__9938__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_divide_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9939__auto__);
});

cljs.core$macros.unchecked_divide_int.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),xs)));
});

cljs.core$macros.unchecked_divide_int.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_divide_int.cljs$lang$applyTo = (function (seq19733){
var G__19734 = cljs.core.first.call(null,seq19733);
var seq19733__$1 = cljs.core.next.call(null,seq19733);
var G__19735 = cljs.core.first.call(null,seq19733__$1);
var seq19733__$2 = cljs.core.next.call(null,seq19733__$1);
return cljs.core$macros.unchecked_divide_int.cljs$core$IFn$_invoke$arity$variadic(G__19734,G__19735,seq19733__$2);
});


cljs.core$macros.unchecked_divide_int.cljs$lang$macro = true;
cljs.core$macros.unchecked_inc = (function cljs$core$macros$unchecked_inc(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),(function (){var x__9660__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
});

cljs.core$macros.unchecked_inc.cljs$lang$macro = true;
cljs.core$macros.unchecked_inc_int = (function cljs$core$macros$unchecked_inc_int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),(function (){var x__9660__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
});

cljs.core$macros.unchecked_inc_int.cljs$lang$macro = true;
cljs.core$macros.unchecked_multiply = (function cljs$core$macros$unchecked_multiply(var_args){
var args__9938__auto__ = [];
var len__9931__auto___19742 = arguments.length;
var i__9932__auto___19743 = (0);
while(true){
if((i__9932__auto___19743 < len__9931__auto___19742)){
args__9938__auto__.push((arguments[i__9932__auto___19743]));

var G__19744 = (i__9932__auto___19743 + (1));
i__9932__auto___19743 = G__19744;
continue;
} else {
}
break;
}

var argseq__9939__auto__ = ((((2) < args__9938__auto__.length))?(new cljs.core.IndexedSeq(args__9938__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_multiply.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9939__auto__);
});

cljs.core$macros.unchecked_multiply.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","*","cljs.core$macros/*",946321529,null)),xs)));
});

cljs.core$macros.unchecked_multiply.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_multiply.cljs$lang$applyTo = (function (seq19739){
var G__19740 = cljs.core.first.call(null,seq19739);
var seq19739__$1 = cljs.core.next.call(null,seq19739);
var G__19741 = cljs.core.first.call(null,seq19739__$1);
var seq19739__$2 = cljs.core.next.call(null,seq19739__$1);
return cljs.core$macros.unchecked_multiply.cljs$core$IFn$_invoke$arity$variadic(G__19740,G__19741,seq19739__$2);
});


cljs.core$macros.unchecked_multiply.cljs$lang$macro = true;
cljs.core$macros.unchecked_multiply_int = (function cljs$core$macros$unchecked_multiply_int(var_args){
var args__9938__auto__ = [];
var len__9931__auto___19748 = arguments.length;
var i__9932__auto___19749 = (0);
while(true){
if((i__9932__auto___19749 < len__9931__auto___19748)){
args__9938__auto__.push((arguments[i__9932__auto___19749]));

var G__19750 = (i__9932__auto___19749 + (1));
i__9932__auto___19749 = G__19750;
continue;
} else {
}
break;
}

var argseq__9939__auto__ = ((((2) < args__9938__auto__.length))?(new cljs.core.IndexedSeq(args__9938__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_multiply_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9939__auto__);
});

cljs.core$macros.unchecked_multiply_int.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","*","cljs.core$macros/*",946321529,null)),xs)));
});

cljs.core$macros.unchecked_multiply_int.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_multiply_int.cljs$lang$applyTo = (function (seq19745){
var G__19746 = cljs.core.first.call(null,seq19745);
var seq19745__$1 = cljs.core.next.call(null,seq19745);
var G__19747 = cljs.core.first.call(null,seq19745__$1);
var seq19745__$2 = cljs.core.next.call(null,seq19745__$1);
return cljs.core$macros.unchecked_multiply_int.cljs$core$IFn$_invoke$arity$variadic(G__19746,G__19747,seq19745__$2);
});


cljs.core$macros.unchecked_multiply_int.cljs$lang$macro = true;
cljs.core$macros.unchecked_negate = (function cljs$core$macros$unchecked_negate(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__9660__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
});

cljs.core$macros.unchecked_negate.cljs$lang$macro = true;
cljs.core$macros.unchecked_negate_int = (function cljs$core$macros$unchecked_negate_int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__9660__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
});

cljs.core$macros.unchecked_negate_int.cljs$lang$macro = true;
cljs.core$macros.unchecked_remainder_int = (function cljs$core$macros$unchecked_remainder_int(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","mod","cljs.core$macros/mod",2132457375,null)),(function (){var x__9660__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
});

cljs.core$macros.unchecked_remainder_int.cljs$lang$macro = true;
cljs.core$macros.unchecked_subtract = (function cljs$core$macros$unchecked_subtract(var_args){
var args__9938__auto__ = [];
var len__9931__auto___19754 = arguments.length;
var i__9932__auto___19755 = (0);
while(true){
if((i__9932__auto___19755 < len__9931__auto___19754)){
args__9938__auto__.push((arguments[i__9932__auto___19755]));

var G__19756 = (i__9932__auto___19755 + (1));
i__9932__auto___19755 = G__19756;
continue;
} else {
}
break;
}

var argseq__9939__auto__ = ((((2) < args__9938__auto__.length))?(new cljs.core.IndexedSeq(args__9938__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_subtract.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9939__auto__);
});

cljs.core$macros.unchecked_subtract.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),xs)));
});

cljs.core$macros.unchecked_subtract.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_subtract.cljs$lang$applyTo = (function (seq19751){
var G__19752 = cljs.core.first.call(null,seq19751);
var seq19751__$1 = cljs.core.next.call(null,seq19751);
var G__19753 = cljs.core.first.call(null,seq19751__$1);
var seq19751__$2 = cljs.core.next.call(null,seq19751__$1);
return cljs.core$macros.unchecked_subtract.cljs$core$IFn$_invoke$arity$variadic(G__19752,G__19753,seq19751__$2);
});


cljs.core$macros.unchecked_subtract.cljs$lang$macro = true;
cljs.core$macros.unchecked_subtract_int = (function cljs$core$macros$unchecked_subtract_int(var_args){
var args__9938__auto__ = [];
var len__9931__auto___19760 = arguments.length;
var i__9932__auto___19761 = (0);
while(true){
if((i__9932__auto___19761 < len__9931__auto___19760)){
args__9938__auto__.push((arguments[i__9932__auto___19761]));

var G__19762 = (i__9932__auto___19761 + (1));
i__9932__auto___19761 = G__19762;
continue;
} else {
}
break;
}

var argseq__9939__auto__ = ((((2) < args__9938__auto__.length))?(new cljs.core.IndexedSeq(args__9938__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_subtract_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9939__auto__);
});

cljs.core$macros.unchecked_subtract_int.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),xs)));
});

cljs.core$macros.unchecked_subtract_int.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_subtract_int.cljs$lang$applyTo = (function (seq19757){
var G__19758 = cljs.core.first.call(null,seq19757);
var seq19757__$1 = cljs.core.next.call(null,seq19757);
var G__19759 = cljs.core.first.call(null,seq19757__$1);
var seq19757__$2 = cljs.core.next.call(null,seq19757__$1);
return cljs.core$macros.unchecked_subtract_int.cljs$core$IFn$_invoke$arity$variadic(G__19758,G__19759,seq19757__$2);
});


cljs.core$macros.unchecked_subtract_int.cljs$lang$macro = true;
cljs.core$macros._ = (function cljs$core$macros$_(var_args){
var args19763 = [];
var len__9931__auto___19771 = arguments.length;
var i__9932__auto___19772 = (0);
while(true){
if((i__9932__auto___19772 < len__9931__auto___19771)){
args19763.push((arguments[i__9932__auto___19772]));

var G__19773 = (i__9932__auto___19772 + (1));
i__9932__auto___19772 = G__19773;
continue;
} else {
}
break;
}

var G__19770 = args19763.length;
switch (G__19770) {
case 3:
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__9950__auto__ = (new cljs.core.IndexedSeq(args19763.slice((4)),(0),null));
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__9950__auto__);

}
});

cljs.core$macros._.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9660__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),"(- ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros._.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9660__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__9660__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto____$1);
})(),x__9660__auto__);
})(),"(~{} - ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros._.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__9660__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),more)));
});

cljs.core$macros._.cljs$lang$applyTo = (function (seq19764){
var G__19765 = cljs.core.first.call(null,seq19764);
var seq19764__$1 = cljs.core.next.call(null,seq19764);
var G__19766 = cljs.core.first.call(null,seq19764__$1);
var seq19764__$2 = cljs.core.next.call(null,seq19764__$1);
var G__19767 = cljs.core.first.call(null,seq19764__$2);
var seq19764__$3 = cljs.core.next.call(null,seq19764__$2);
var G__19768 = cljs.core.first.call(null,seq19764__$3);
var seq19764__$4 = cljs.core.next.call(null,seq19764__$3);
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$variadic(G__19765,G__19766,G__19767,G__19768,seq19764__$4);
});

cljs.core$macros._.cljs$lang$maxFixedArity = (4);


cljs.core$macros._.cljs$lang$macro = true;
cljs.core$macros._STAR_ = (function cljs$core$macros$_STAR_(var_args){
var args19775 = [];
var len__9931__auto___19783 = arguments.length;
var i__9932__auto___19784 = (0);
while(true){
if((i__9932__auto___19784 < len__9931__auto___19783)){
args19775.push((arguments[i__9932__auto___19784]));

var G__19785 = (i__9932__auto___19784 + (1));
i__9932__auto___19784 = G__19785;
continue;
} else {
}
break;
}

var G__19782 = args19775.length;
switch (G__19782) {
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
var argseq__9950__auto__ = (new cljs.core.IndexedSeq(args19775.slice((4)),(0),null));
return cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__9950__auto__);

}
});

cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return (1);
});

cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9660__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__9660__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto____$1);
})(),x__9660__auto__);
})(),"(~{} * ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","*","cljs.core$macros/*",946321529,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","*","cljs.core$macros/*",946321529,null)),(function (){var x__9660__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),more)));
});

cljs.core$macros._STAR_.cljs$lang$applyTo = (function (seq19776){
var G__19777 = cljs.core.first.call(null,seq19776);
var seq19776__$1 = cljs.core.next.call(null,seq19776);
var G__19778 = cljs.core.first.call(null,seq19776__$1);
var seq19776__$2 = cljs.core.next.call(null,seq19776__$1);
var G__19779 = cljs.core.first.call(null,seq19776__$2);
var seq19776__$3 = cljs.core.next.call(null,seq19776__$2);
var G__19780 = cljs.core.first.call(null,seq19776__$3);
var seq19776__$4 = cljs.core.next.call(null,seq19776__$3);
return cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$variadic(G__19777,G__19778,G__19779,G__19780,seq19776__$4);
});

cljs.core$macros._STAR_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._STAR_.cljs$lang$macro = true;
cljs.core$macros._SLASH_ = (function cljs$core$macros$_SLASH_(var_args){
var args19787 = [];
var len__9931__auto___19795 = arguments.length;
var i__9932__auto___19796 = (0);
while(true){
if((i__9932__auto___19796 < len__9931__auto___19795)){
args19787.push((arguments[i__9932__auto___19796]));

var G__19797 = (i__9932__auto___19796 + (1));
i__9932__auto___19796 = G__19797;
continue;
} else {
}
break;
}

var G__19794 = args19787.length;
switch (G__19794) {
case 3:
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__9950__auto__ = (new cljs.core.IndexedSeq(args19787.slice((4)),(0),null));
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__9950__auto__);

}
});

cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)),(function (){var x__9660__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
});

cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9660__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__9660__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto____$1);
})(),x__9660__auto__);
})(),"(~{} / ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),(function (){var x__9660__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),more)));
});

cljs.core$macros._SLASH_.cljs$lang$applyTo = (function (seq19788){
var G__19789 = cljs.core.first.call(null,seq19788);
var seq19788__$1 = cljs.core.next.call(null,seq19788);
var G__19790 = cljs.core.first.call(null,seq19788__$1);
var seq19788__$2 = cljs.core.next.call(null,seq19788__$1);
var G__19791 = cljs.core.first.call(null,seq19788__$2);
var seq19788__$3 = cljs.core.next.call(null,seq19788__$2);
var G__19792 = cljs.core.first.call(null,seq19788__$3);
var seq19788__$4 = cljs.core.next.call(null,seq19788__$3);
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$variadic(G__19789,G__19790,G__19791,G__19792,seq19788__$4);
});

cljs.core$macros._SLASH_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._SLASH_.cljs$lang$macro = true;
cljs.core$macros.divide = (function cljs$core$macros$divide(var_args){
var args19799 = [];
var len__9931__auto___19807 = arguments.length;
var i__9932__auto___19808 = (0);
while(true){
if((i__9932__auto___19808 < len__9931__auto___19807)){
args19799.push((arguments[i__9932__auto___19808]));

var G__19809 = (i__9932__auto___19808 + (1));
i__9932__auto___19808 = G__19809;
continue;
} else {
}
break;
}

var G__19806 = args19799.length;
switch (G__19806) {
case 3:
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__9950__auto__ = (new cljs.core.IndexedSeq(args19799.slice((4)),(0),null));
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__9950__auto__);

}
});

cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)),(function (){var x__9660__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
});

cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9660__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__9660__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto____$1);
})(),x__9660__auto__);
})(),"(~{} / ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),(function (){var x__9660__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),more)));
});

cljs.core$macros.divide.cljs$lang$applyTo = (function (seq19800){
var G__19801 = cljs.core.first.call(null,seq19800);
var seq19800__$1 = cljs.core.next.call(null,seq19800);
var G__19802 = cljs.core.first.call(null,seq19800__$1);
var seq19800__$2 = cljs.core.next.call(null,seq19800__$1);
var G__19803 = cljs.core.first.call(null,seq19800__$2);
var seq19800__$3 = cljs.core.next.call(null,seq19800__$2);
var G__19804 = cljs.core.first.call(null,seq19800__$3);
var seq19800__$4 = cljs.core.next.call(null,seq19800__$3);
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$variadic(G__19801,G__19802,G__19803,G__19804,seq19800__$4);
});

cljs.core$macros.divide.cljs$lang$maxFixedArity = (4);


cljs.core$macros.divide.cljs$lang$macro = true;
cljs.core$macros._LT_ = (function cljs$core$macros$_LT_(var_args){
var args19811 = [];
var len__9931__auto___19819 = arguments.length;
var i__9932__auto___19820 = (0);
while(true){
if((i__9932__auto___19820 < len__9931__auto___19819)){
args19811.push((arguments[i__9932__auto___19820]));

var G__19821 = (i__9932__auto___19820 + (1));
i__9932__auto___19820 = G__19821;
continue;
} else {
}
break;
}

var G__19818 = args19811.length;
switch (G__19818) {
case 3:
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__9950__auto__ = (new cljs.core.IndexedSeq(args19811.slice((4)),(0),null));
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__9950__auto__);

}
});

cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9660__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__9660__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto____$1);
})(),x__9660__auto__);
})(),"(~{} < ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__9660__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__9660__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),more)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
});

cljs.core$macros._LT_.cljs$lang$applyTo = (function (seq19812){
var G__19813 = cljs.core.first.call(null,seq19812);
var seq19812__$1 = cljs.core.next.call(null,seq19812);
var G__19814 = cljs.core.first.call(null,seq19812__$1);
var seq19812__$2 = cljs.core.next.call(null,seq19812__$1);
var G__19815 = cljs.core.first.call(null,seq19812__$2);
var seq19812__$3 = cljs.core.next.call(null,seq19812__$2);
var G__19816 = cljs.core.first.call(null,seq19812__$3);
var seq19812__$4 = cljs.core.next.call(null,seq19812__$3);
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$variadic(G__19813,G__19814,G__19815,G__19816,seq19812__$4);
});

cljs.core$macros._LT_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._LT_.cljs$lang$macro = true;
cljs.core$macros._LT__EQ_ = (function cljs$core$macros$_LT__EQ_(var_args){
var args19823 = [];
var len__9931__auto___19831 = arguments.length;
var i__9932__auto___19832 = (0);
while(true){
if((i__9932__auto___19832 < len__9931__auto___19831)){
args19823.push((arguments[i__9932__auto___19832]));

var G__19833 = (i__9932__auto___19832 + (1));
i__9932__auto___19832 = G__19833;
continue;
} else {
}
break;
}

var G__19830 = args19823.length;
switch (G__19830) {
case 3:
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__9950__auto__ = (new cljs.core.IndexedSeq(args19823.slice((4)),(0),null));
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__9950__auto__);

}
});

cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9660__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__9660__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto____$1);
})(),x__9660__auto__);
})(),"(~{} <= ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<=","cljs.core$macros/<=",1865244377,null)),(function (){var x__9660__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<=","cljs.core$macros/<=",1865244377,null)),(function (){var x__9660__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),more)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
});

cljs.core$macros._LT__EQ_.cljs$lang$applyTo = (function (seq19824){
var G__19825 = cljs.core.first.call(null,seq19824);
var seq19824__$1 = cljs.core.next.call(null,seq19824);
var G__19826 = cljs.core.first.call(null,seq19824__$1);
var seq19824__$2 = cljs.core.next.call(null,seq19824__$1);
var G__19827 = cljs.core.first.call(null,seq19824__$2);
var seq19824__$3 = cljs.core.next.call(null,seq19824__$2);
var G__19828 = cljs.core.first.call(null,seq19824__$3);
var seq19824__$4 = cljs.core.next.call(null,seq19824__$3);
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__19825,G__19826,G__19827,G__19828,seq19824__$4);
});

cljs.core$macros._LT__EQ_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._LT__EQ_.cljs$lang$macro = true;
cljs.core$macros._GT_ = (function cljs$core$macros$_GT_(var_args){
var args19835 = [];
var len__9931__auto___19843 = arguments.length;
var i__9932__auto___19844 = (0);
while(true){
if((i__9932__auto___19844 < len__9931__auto___19843)){
args19835.push((arguments[i__9932__auto___19844]));

var G__19845 = (i__9932__auto___19844 + (1));
i__9932__auto___19844 = G__19845;
continue;
} else {
}
break;
}

var G__19842 = args19835.length;
switch (G__19842) {
case 3:
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__9950__auto__ = (new cljs.core.IndexedSeq(args19835.slice((4)),(0),null));
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__9950__auto__);

}
});

cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9660__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__9660__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto____$1);
})(),x__9660__auto__);
})(),"(~{} > ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros",">","cljs.core$macros/>",1703297853,null)),(function (){var x__9660__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros",">","cljs.core$macros/>",1703297853,null)),(function (){var x__9660__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),more)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
});

cljs.core$macros._GT_.cljs$lang$applyTo = (function (seq19836){
var G__19837 = cljs.core.first.call(null,seq19836);
var seq19836__$1 = cljs.core.next.call(null,seq19836);
var G__19838 = cljs.core.first.call(null,seq19836__$1);
var seq19836__$2 = cljs.core.next.call(null,seq19836__$1);
var G__19839 = cljs.core.first.call(null,seq19836__$2);
var seq19836__$3 = cljs.core.next.call(null,seq19836__$2);
var G__19840 = cljs.core.first.call(null,seq19836__$3);
var seq19836__$4 = cljs.core.next.call(null,seq19836__$3);
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$variadic(G__19837,G__19838,G__19839,G__19840,seq19836__$4);
});

cljs.core$macros._GT_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._GT_.cljs$lang$macro = true;
cljs.core$macros._GT__EQ_ = (function cljs$core$macros$_GT__EQ_(var_args){
var args19847 = [];
var len__9931__auto___19855 = arguments.length;
var i__9932__auto___19856 = (0);
while(true){
if((i__9932__auto___19856 < len__9931__auto___19855)){
args19847.push((arguments[i__9932__auto___19856]));

var G__19857 = (i__9932__auto___19856 + (1));
i__9932__auto___19856 = G__19857;
continue;
} else {
}
break;
}

var G__19854 = args19847.length;
switch (G__19854) {
case 3:
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__9950__auto__ = (new cljs.core.IndexedSeq(args19847.slice((4)),(0),null));
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__9950__auto__);

}
});

cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9660__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__9660__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto____$1);
})(),x__9660__auto__);
})(),"(~{} >= ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros",">=","cljs.core$macros/>=",527849062,null)),(function (){var x__9660__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros",">=","cljs.core$macros/>=",527849062,null)),(function (){var x__9660__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),more)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
});

cljs.core$macros._GT__EQ_.cljs$lang$applyTo = (function (seq19848){
var G__19849 = cljs.core.first.call(null,seq19848);
var seq19848__$1 = cljs.core.next.call(null,seq19848);
var G__19850 = cljs.core.first.call(null,seq19848__$1);
var seq19848__$2 = cljs.core.next.call(null,seq19848__$1);
var G__19851 = cljs.core.first.call(null,seq19848__$2);
var seq19848__$3 = cljs.core.next.call(null,seq19848__$2);
var G__19852 = cljs.core.first.call(null,seq19848__$3);
var seq19848__$4 = cljs.core.next.call(null,seq19848__$3);
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__19849,G__19850,G__19851,G__19852,seq19848__$4);
});

cljs.core$macros._GT__EQ_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._GT__EQ_.cljs$lang$macro = true;
cljs.core$macros._EQ__EQ_ = (function cljs$core$macros$_EQ__EQ_(var_args){
var args19859 = [];
var len__9931__auto___19867 = arguments.length;
var i__9932__auto___19868 = (0);
while(true){
if((i__9932__auto___19868 < len__9931__auto___19867)){
args19859.push((arguments[i__9932__auto___19868]));

var G__19869 = (i__9932__auto___19868 + (1));
i__9932__auto___19868 = G__19869;
continue;
} else {
}
break;
}

var G__19866 = args19859.length;
switch (G__19866) {
case 3:
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__9950__auto__ = (new cljs.core.IndexedSeq(args19859.slice((4)),(0),null));
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__9950__auto__);

}
});

cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9660__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__9660__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto____$1);
})(),x__9660__auto__);
})(),"(~{} === ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","==","cljs.core$macros/==",-818551413,null)),(function (){var x__9660__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","==","cljs.core$macros/==",-818551413,null)),(function (){var x__9660__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),more)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
});

cljs.core$macros._EQ__EQ_.cljs$lang$applyTo = (function (seq19860){
var G__19861 = cljs.core.first.call(null,seq19860);
var seq19860__$1 = cljs.core.next.call(null,seq19860);
var G__19862 = cljs.core.first.call(null,seq19860__$1);
var seq19860__$2 = cljs.core.next.call(null,seq19860__$1);
var G__19863 = cljs.core.first.call(null,seq19860__$2);
var seq19860__$3 = cljs.core.next.call(null,seq19860__$2);
var G__19864 = cljs.core.first.call(null,seq19860__$3);
var seq19860__$4 = cljs.core.next.call(null,seq19860__$3);
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__19861,G__19862,G__19863,G__19864,seq19860__$4);
});

cljs.core$macros._EQ__EQ_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._EQ__EQ_.cljs$lang$macro = true;
cljs.core$macros.dec = (function cljs$core$macros$dec(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__9660__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)))));
});

cljs.core$macros.dec.cljs$lang$macro = true;
cljs.core$macros.inc = (function cljs$core$macros$inc(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),(function (){var x__9660__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)))));
});

cljs.core$macros.inc.cljs$lang$macro = true;
cljs.core$macros.zero_QMARK_ = (function cljs$core$macros$zero_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","==","cljs.core$macros/==",-818551413,null)),(function (){var x__9660__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)))));
});

cljs.core$macros.zero_QMARK_.cljs$lang$macro = true;
cljs.core$macros.pos_QMARK_ = (function cljs$core$macros$pos_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros",">","cljs.core$macros/>",1703297853,null)),(function (){var x__9660__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)))));
});

cljs.core$macros.pos_QMARK_.cljs$lang$macro = true;
cljs.core$macros.neg_QMARK_ = (function cljs$core$macros$neg_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__9660__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)))));
});

cljs.core$macros.neg_QMARK_.cljs$lang$macro = true;
cljs.core$macros.max = (function cljs$core$macros$max(var_args){
var args19873 = [];
var len__9931__auto___19881 = arguments.length;
var i__9932__auto___19882 = (0);
while(true){
if((i__9932__auto___19882 < len__9931__auto___19881)){
args19873.push((arguments[i__9932__auto___19882]));

var G__19883 = (i__9932__auto___19882 + (1));
i__9932__auto___19882 = G__19883;
continue;
} else {
}
break;
}

var G__19880 = args19873.length;
switch (G__19880) {
case 3:
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__9950__auto__ = (new cljs.core.IndexedSeq(args19873.slice((4)),(0),null));
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__9950__auto__);

}
});

cljs.core$macros.max.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.max.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9660__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__19871__auto__","x__19871__auto__",1375108584,null)),(function (){var x__9660__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__19872__auto__","y__19872__auto__",14451158,null)),(function (){var x__9660__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"((~{} > ~{}) ? ~{} : ~{})"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__19871__auto__","x__19871__auto__",1375108584,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__19872__auto__","y__19872__auto__",14451158,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__19871__auto__","x__19871__auto__",1375108584,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__19872__auto__","y__19872__auto__",14451158,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
});

cljs.core$macros.max.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","max","cljs.core$macros/max",1176150699,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","max","cljs.core$macros/max",1176150699,null)),(function (){var x__9660__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),more)));
});

cljs.core$macros.max.cljs$lang$applyTo = (function (seq19874){
var G__19875 = cljs.core.first.call(null,seq19874);
var seq19874__$1 = cljs.core.next.call(null,seq19874);
var G__19876 = cljs.core.first.call(null,seq19874__$1);
var seq19874__$2 = cljs.core.next.call(null,seq19874__$1);
var G__19877 = cljs.core.first.call(null,seq19874__$2);
var seq19874__$3 = cljs.core.next.call(null,seq19874__$2);
var G__19878 = cljs.core.first.call(null,seq19874__$3);
var seq19874__$4 = cljs.core.next.call(null,seq19874__$3);
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$variadic(G__19875,G__19876,G__19877,G__19878,seq19874__$4);
});

cljs.core$macros.max.cljs$lang$maxFixedArity = (4);


cljs.core$macros.max.cljs$lang$macro = true;
cljs.core$macros.min = (function cljs$core$macros$min(var_args){
var args19887 = [];
var len__9931__auto___19895 = arguments.length;
var i__9932__auto___19896 = (0);
while(true){
if((i__9932__auto___19896 < len__9931__auto___19895)){
args19887.push((arguments[i__9932__auto___19896]));

var G__19897 = (i__9932__auto___19896 + (1));
i__9932__auto___19896 = G__19897;
continue;
} else {
}
break;
}

var G__19894 = args19887.length;
switch (G__19894) {
case 3:
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__9950__auto__ = (new cljs.core.IndexedSeq(args19887.slice((4)),(0),null));
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__9950__auto__);

}
});

cljs.core$macros.min.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.min.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9660__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__19885__auto__","x__19885__auto__",959201887,null)),(function (){var x__9660__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__19886__auto__","y__19886__auto__",1012926298,null)),(function (){var x__9660__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"((~{} < ~{}) ? ~{} : ~{})"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__19885__auto__","x__19885__auto__",959201887,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__19886__auto__","y__19886__auto__",1012926298,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__19885__auto__","x__19885__auto__",959201887,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__19886__auto__","y__19886__auto__",1012926298,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
});

cljs.core$macros.min.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","min","cljs.core$macros/min",1499775161,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","min","cljs.core$macros/min",1499775161,null)),(function (){var x__9660__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),more)));
});

cljs.core$macros.min.cljs$lang$applyTo = (function (seq19888){
var G__19889 = cljs.core.first.call(null,seq19888);
var seq19888__$1 = cljs.core.next.call(null,seq19888);
var G__19890 = cljs.core.first.call(null,seq19888__$1);
var seq19888__$2 = cljs.core.next.call(null,seq19888__$1);
var G__19891 = cljs.core.first.call(null,seq19888__$2);
var seq19888__$3 = cljs.core.next.call(null,seq19888__$2);
var G__19892 = cljs.core.first.call(null,seq19888__$3);
var seq19888__$4 = cljs.core.next.call(null,seq19888__$3);
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$variadic(G__19889,G__19890,G__19891,G__19892,seq19888__$4);
});

cljs.core$macros.min.cljs$lang$maxFixedArity = (4);


cljs.core$macros.min.cljs$lang$macro = true;
cljs.core$macros.js_mod = (function cljs$core$macros$js_mod(_AMPERSAND_form,_AMPERSAND_env,num,div){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9660__auto__ = num;
return cljs.core._conj.call(null,(function (){var x__9660__auto____$1 = div;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto____$1);
})(),x__9660__auto__);
})(),"(~{} % ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.js_mod.cljs$lang$macro = true;
cljs.core$macros.bit_not = (function cljs$core$macros$bit_not(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9660__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),"(~ ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_not.cljs$lang$macro = true;
cljs.core$macros.bit_and = (function cljs$core$macros$bit_and(var_args){
var args19899 = [];
var len__9931__auto___19907 = arguments.length;
var i__9932__auto___19908 = (0);
while(true){
if((i__9932__auto___19908 < len__9931__auto___19907)){
args19899.push((arguments[i__9932__auto___19908]));

var G__19909 = (i__9932__auto___19908 + (1));
i__9932__auto___19908 = G__19909;
continue;
} else {
}
break;
}

var G__19906 = args19899.length;
switch (G__19906) {
case 4:
return cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__9950__auto__ = (new cljs.core.IndexedSeq(args19899.slice((4)),(0),null));
return cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__9950__auto__);

}
});

cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9660__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__9660__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto____$1);
})(),x__9660__auto__);
})(),"(~{} & ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-and","cljs.core$macros/bit-and",-1069060797,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-and","cljs.core$macros/bit-and",-1069060797,null)),(function (){var x__9660__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),more)));
});

cljs.core$macros.bit_and.cljs$lang$applyTo = (function (seq19900){
var G__19901 = cljs.core.first.call(null,seq19900);
var seq19900__$1 = cljs.core.next.call(null,seq19900);
var G__19902 = cljs.core.first.call(null,seq19900__$1);
var seq19900__$2 = cljs.core.next.call(null,seq19900__$1);
var G__19903 = cljs.core.first.call(null,seq19900__$2);
var seq19900__$3 = cljs.core.next.call(null,seq19900__$2);
var G__19904 = cljs.core.first.call(null,seq19900__$3);
var seq19900__$4 = cljs.core.next.call(null,seq19900__$3);
return cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$variadic(G__19901,G__19902,G__19903,G__19904,seq19900__$4);
});

cljs.core$macros.bit_and.cljs$lang$maxFixedArity = (4);


cljs.core$macros.bit_and.cljs$lang$macro = true;
cljs.core$macros.unsafe_bit_and = (function cljs$core$macros$unsafe_bit_and(var_args){
var args19911 = [];
var len__9931__auto___19919 = arguments.length;
var i__9932__auto___19920 = (0);
while(true){
if((i__9932__auto___19920 < len__9931__auto___19919)){
args19911.push((arguments[i__9932__auto___19920]));

var G__19921 = (i__9932__auto___19920 + (1));
i__9932__auto___19920 = G__19921;
continue;
} else {
}
break;
}

var G__19918 = args19911.length;
switch (G__19918) {
case 4:
return cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__9950__auto__ = (new cljs.core.IndexedSeq(args19911.slice((4)),(0),null));
return cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__9950__auto__);

}
});

cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9660__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__9660__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto____$1);
})(),x__9660__auto__);
})(),"(~{} & ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__9660__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),more)));
});

cljs.core$macros.unsafe_bit_and.cljs$lang$applyTo = (function (seq19912){
var G__19913 = cljs.core.first.call(null,seq19912);
var seq19912__$1 = cljs.core.next.call(null,seq19912);
var G__19914 = cljs.core.first.call(null,seq19912__$1);
var seq19912__$2 = cljs.core.next.call(null,seq19912__$1);
var G__19915 = cljs.core.first.call(null,seq19912__$2);
var seq19912__$3 = cljs.core.next.call(null,seq19912__$2);
var G__19916 = cljs.core.first.call(null,seq19912__$3);
var seq19912__$4 = cljs.core.next.call(null,seq19912__$3);
return cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$variadic(G__19913,G__19914,G__19915,G__19916,seq19912__$4);
});

cljs.core$macros.unsafe_bit_and.cljs$lang$maxFixedArity = (4);


cljs.core$macros.unsafe_bit_and.cljs$lang$macro = true;
cljs.core$macros.bit_or = (function cljs$core$macros$bit_or(var_args){
var args19923 = [];
var len__9931__auto___19931 = arguments.length;
var i__9932__auto___19932 = (0);
while(true){
if((i__9932__auto___19932 < len__9931__auto___19931)){
args19923.push((arguments[i__9932__auto___19932]));

var G__19933 = (i__9932__auto___19932 + (1));
i__9932__auto___19932 = G__19933;
continue;
} else {
}
break;
}

var G__19930 = args19923.length;
switch (G__19930) {
case 4:
return cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__9950__auto__ = (new cljs.core.IndexedSeq(args19923.slice((4)),(0),null));
return cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__9950__auto__);

}
});

cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9660__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__9660__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto____$1);
})(),x__9660__auto__);
})(),"(~{} | ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-or","cljs.core$macros/bit-or",1463236165,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-or","cljs.core$macros/bit-or",1463236165,null)),(function (){var x__9660__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),more)));
});

cljs.core$macros.bit_or.cljs$lang$applyTo = (function (seq19924){
var G__19925 = cljs.core.first.call(null,seq19924);
var seq19924__$1 = cljs.core.next.call(null,seq19924);
var G__19926 = cljs.core.first.call(null,seq19924__$1);
var seq19924__$2 = cljs.core.next.call(null,seq19924__$1);
var G__19927 = cljs.core.first.call(null,seq19924__$2);
var seq19924__$3 = cljs.core.next.call(null,seq19924__$2);
var G__19928 = cljs.core.first.call(null,seq19924__$3);
var seq19924__$4 = cljs.core.next.call(null,seq19924__$3);
return cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$variadic(G__19925,G__19926,G__19927,G__19928,seq19924__$4);
});

cljs.core$macros.bit_or.cljs$lang$maxFixedArity = (4);


cljs.core$macros.bit_or.cljs$lang$macro = true;
cljs.core$macros.int$ = (function cljs$core$macros$int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-or","cljs.core$macros/bit-or",1463236165,null)),(function (){var x__9660__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)))));
});

cljs.core$macros.int$.cljs$lang$macro = true;
cljs.core$macros.bit_xor = (function cljs$core$macros$bit_xor(var_args){
var args19935 = [];
var len__9931__auto___19943 = arguments.length;
var i__9932__auto___19944 = (0);
while(true){
if((i__9932__auto___19944 < len__9931__auto___19943)){
args19935.push((arguments[i__9932__auto___19944]));

var G__19945 = (i__9932__auto___19944 + (1));
i__9932__auto___19944 = G__19945;
continue;
} else {
}
break;
}

var G__19942 = args19935.length;
switch (G__19942) {
case 4:
return cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__9950__auto__ = (new cljs.core.IndexedSeq(args19935.slice((4)),(0),null));
return cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__9950__auto__);

}
});

cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9660__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__9660__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto____$1);
})(),x__9660__auto__);
})(),"(~{} ^ ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-xor","cljs.core$macros/bit-xor",1284619191,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-xor","cljs.core$macros/bit-xor",1284619191,null)),(function (){var x__9660__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),more)));
});

cljs.core$macros.bit_xor.cljs$lang$applyTo = (function (seq19936){
var G__19937 = cljs.core.first.call(null,seq19936);
var seq19936__$1 = cljs.core.next.call(null,seq19936);
var G__19938 = cljs.core.first.call(null,seq19936__$1);
var seq19936__$2 = cljs.core.next.call(null,seq19936__$1);
var G__19939 = cljs.core.first.call(null,seq19936__$2);
var seq19936__$3 = cljs.core.next.call(null,seq19936__$2);
var G__19940 = cljs.core.first.call(null,seq19936__$3);
var seq19936__$4 = cljs.core.next.call(null,seq19936__$3);
return cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$variadic(G__19937,G__19938,G__19939,G__19940,seq19936__$4);
});

cljs.core$macros.bit_xor.cljs$lang$maxFixedArity = (4);


cljs.core$macros.bit_xor.cljs$lang$macro = true;
cljs.core$macros.bit_and_not = (function cljs$core$macros$bit_and_not(var_args){
var args19947 = [];
var len__9931__auto___19955 = arguments.length;
var i__9932__auto___19956 = (0);
while(true){
if((i__9932__auto___19956 < len__9931__auto___19955)){
args19947.push((arguments[i__9932__auto___19956]));

var G__19957 = (i__9932__auto___19956 + (1));
i__9932__auto___19956 = G__19957;
continue;
} else {
}
break;
}

var G__19954 = args19947.length;
switch (G__19954) {
case 4:
return cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__9950__auto__ = (new cljs.core.IndexedSeq(args19947.slice((4)),(0),null));
return cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__9950__auto__);

}
});

cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9660__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__9660__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto____$1);
})(),x__9660__auto__);
})(),"(~{} & ~~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-and-not","cljs.core$macros/bit-and-not",-537076037,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-and-not","cljs.core$macros/bit-and-not",-537076037,null)),(function (){var x__9660__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),more)));
});

cljs.core$macros.bit_and_not.cljs$lang$applyTo = (function (seq19948){
var G__19949 = cljs.core.first.call(null,seq19948);
var seq19948__$1 = cljs.core.next.call(null,seq19948);
var G__19950 = cljs.core.first.call(null,seq19948__$1);
var seq19948__$2 = cljs.core.next.call(null,seq19948__$1);
var G__19951 = cljs.core.first.call(null,seq19948__$2);
var seq19948__$3 = cljs.core.next.call(null,seq19948__$2);
var G__19952 = cljs.core.first.call(null,seq19948__$3);
var seq19948__$4 = cljs.core.next.call(null,seq19948__$3);
return cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$variadic(G__19949,G__19950,G__19951,G__19952,seq19948__$4);
});

cljs.core$macros.bit_and_not.cljs$lang$maxFixedArity = (4);


cljs.core$macros.bit_and_not.cljs$lang$macro = true;
cljs.core$macros.bit_clear = (function cljs$core$macros$bit_clear(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9660__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__9660__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto____$1);
})(),x__9660__auto__);
})(),"(~{} & ~(1 << ~{}))"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_clear.cljs$lang$macro = true;
cljs.core$macros.bit_flip = (function cljs$core$macros$bit_flip(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9660__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__9660__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto____$1);
})(),x__9660__auto__);
})(),"(~{} ^ (1 << ~{}))"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_flip.cljs$lang$macro = true;
cljs.core$macros.bit_test = (function cljs$core$macros$bit_test(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9660__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__9660__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto____$1);
})(),x__9660__auto__);
})(),"((~{} & (1 << ~{})) != 0)"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.bit_test.cljs$lang$macro = true;
cljs.core$macros.bit_shift_left = (function cljs$core$macros$bit_shift_left(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9660__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__9660__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto____$1);
})(),x__9660__auto__);
})(),"(~{} << ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_shift_left.cljs$lang$macro = true;
cljs.core$macros.bit_shift_right = (function cljs$core$macros$bit_shift_right(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9660__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__9660__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto____$1);
})(),x__9660__auto__);
})(),"(~{} >> ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_shift_right.cljs$lang$macro = true;
cljs.core$macros.bit_shift_right_zero_fill = (function cljs$core$macros$bit_shift_right_zero_fill(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9660__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__9660__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto____$1);
})(),x__9660__auto__);
})(),"(~{} >>> ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_shift_right_zero_fill.cljs$lang$macro = true;
cljs.core$macros.unsigned_bit_shift_right = (function cljs$core$macros$unsigned_bit_shift_right(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9660__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__9660__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto____$1);
})(),x__9660__auto__);
})(),"(~{} >>> ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.unsigned_bit_shift_right.cljs$lang$macro = true;
cljs.core$macros.bit_set = (function cljs$core$macros$bit_set(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9660__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__9660__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto____$1);
})(),x__9660__auto__);
})(),"(~{} | (1 << ~{}))"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_set.cljs$lang$macro = true;
cljs.core$macros.mask = (function cljs$core$macros$mask(_AMPERSAND_form,_AMPERSAND_env,hash,shift){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9660__auto__ = hash;
return cljs.core._conj.call(null,(function (){var x__9660__auto____$1 = shift;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto____$1);
})(),x__9660__auto__);
})(),"((~{} >>> ~{}) & 0x01f)"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.mask.cljs$lang$macro = true;
cljs.core$macros.bitpos = (function cljs$core$macros$bitpos(_AMPERSAND_form,_AMPERSAND_env,hash,shift){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","mask","cljs.core$macros/mask",1575319768,null)),(function (){var x__9660__auto__ = hash;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = shift;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),"(1 << ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bitpos.cljs$lang$macro = true;
cljs.core$macros.caching_hash = (function cljs$core$macros$caching_hash(_AMPERSAND_form,_AMPERSAND_env,coll,hash_fn,hash_key){
if((hash_key instanceof cljs.core.Symbol)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("hash-key is substituted twice"),cljs.core.str("\n"),cljs.core.str("(clojure.core/symbol? hash-key)")].join('')));
}

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9660__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__19959__auto__","h__19959__auto__",647189078,null)),(function (){var x__9660__auto__ = hash_key;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__19959__auto__","h__19959__auto__",647189078,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__19959__auto__","h__19959__auto__",647189078,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9660__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__19959__auto__","h__19959__auto__",647189078,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9660__auto__ = hash_fn;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = coll;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__9660__auto__ = hash_key;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__19959__auto__","h__19959__auto__",647189078,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__19959__auto__","h__19959__auto__",647189078,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
});

cljs.core$macros.caching_hash.cljs$lang$macro = true;
cljs.core$macros.do_curried = (function cljs$core$macros$do_curried(name,doc,meta,args,body){
var cargs = cljs.core.vec.call(null,cljs.core.butlast.call(null,args));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null)),(function (){var x__9660__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = doc;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = meta;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9660__auto__ = cargs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9660__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__19960__auto__","x__19960__auto__",1347651118,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9660__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),cargs,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__19960__auto__","x__19960__auto__",1347651118,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9660__auto__ = args;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
});
/**
 * Builds another arity of the fn that returns a fn awaiting the last
 *   param
 */
cljs.core$macros.defcurried = (function cljs$core$macros$defcurried(var_args){
var args__9938__auto__ = [];
var len__9931__auto___19968 = arguments.length;
var i__9932__auto___19969 = (0);
while(true){
if((i__9932__auto___19969 < len__9931__auto___19968)){
args__9938__auto__.push((arguments[i__9932__auto___19969]));

var G__19970 = (i__9932__auto___19969 + (1));
i__9932__auto___19969 = G__19970;
continue;
} else {
}
break;
}

var argseq__9939__auto__ = ((((6) < args__9938__auto__.length))?(new cljs.core.IndexedSeq(args__9938__auto__.slice((6)),(0),null)):null);
return cljs.core$macros.defcurried.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),argseq__9939__auto__);
});

cljs.core$macros.defcurried.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,doc,meta,args,body){
return cljs.core$macros.do_curried.call(null,name,doc,meta,args,body);
});

cljs.core$macros.defcurried.cljs$lang$maxFixedArity = (6);

cljs.core$macros.defcurried.cljs$lang$applyTo = (function (seq19961){
var G__19962 = cljs.core.first.call(null,seq19961);
var seq19961__$1 = cljs.core.next.call(null,seq19961);
var G__19963 = cljs.core.first.call(null,seq19961__$1);
var seq19961__$2 = cljs.core.next.call(null,seq19961__$1);
var G__19964 = cljs.core.first.call(null,seq19961__$2);
var seq19961__$3 = cljs.core.next.call(null,seq19961__$2);
var G__19965 = cljs.core.first.call(null,seq19961__$3);
var seq19961__$4 = cljs.core.next.call(null,seq19961__$3);
var G__19966 = cljs.core.first.call(null,seq19961__$4);
var seq19961__$5 = cljs.core.next.call(null,seq19961__$4);
var G__19967 = cljs.core.first.call(null,seq19961__$5);
var seq19961__$6 = cljs.core.next.call(null,seq19961__$5);
return cljs.core$macros.defcurried.cljs$core$IFn$_invoke$arity$variadic(G__19962,G__19963,G__19964,G__19965,G__19966,G__19967,seq19961__$6);
});


cljs.core$macros.defcurried.cljs$lang$macro = true;
cljs.core$macros.do_rfn = (function cljs$core$macros$do_rfn(f1,k,fkv){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9660__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9660__auto__ = f1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = clojure.walk.postwalk.call(null,(function (p1__19971_SHARP_){
if(cljs.core.sequential_QMARK_.call(null,p1__19971_SHARP_)){
return ((cljs.core.vector_QMARK_.call(null,p1__19971_SHARP_))?cljs.core.vec:cljs.core.identity).call(null,cljs.core.remove.call(null,cljs.core.PersistentHashSet.fromArray([k], true),p1__19971_SHARP_));
} else {
return p1__19971_SHARP_;
}
}),fkv);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = fkv;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
});
/**
 * Builds 3-arity reducing fn given names of wrapped fn and key, and k/v impl.
 */
cljs.core$macros.rfn = (function cljs$core$macros$rfn(_AMPERSAND_form,_AMPERSAND_env,p__19972,fkv){
var vec__19976 = p__19972;
var f1 = cljs.core.nth.call(null,vec__19976,(0),null);
var k = cljs.core.nth.call(null,vec__19976,(1),null);
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
var args__9938__auto__ = [];
var len__9931__auto___19982 = arguments.length;
var i__9932__auto___19983 = (0);
while(true){
if((i__9932__auto___19983 < len__9931__auto___19982)){
args__9938__auto__.push((arguments[i__9932__auto___19983]));

var G__19984 = (i__9932__auto___19983 + (1));
i__9932__auto___19983 = G__19984;
continue;
} else {
}
break;
}

var argseq__9939__auto__ = ((((2) < args__9938__auto__.length))?(new cljs.core.IndexedSeq(args__9938__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.reify.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9939__auto__);
});

cljs.core$macros.reify.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,impls){
var t = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,[cljs.core.str("t_"),cljs.core.str(clojure.string.replace.call(null,[cljs.core.str(cljs.core.munge.call(null,cljs.analyzer._STAR_cljs_ns_STAR_))].join(''),".","$"))].join('')),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"anonymous","anonymous",447897231),true], null));
var meta_sym = cljs.core.gensym.call(null,"meta");
var this_sym = cljs.core.gensym.call(null,"_");
var locals = cljs.core.keys.call(null,new cljs.core.Keyword(null,"locals","locals",535295783).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
var ns = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
var munge = cljs.compiler.munge;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-not","cljs.core$macros/when-not",-764302244,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","exists?","cljs.core$macros/exists?",-1828590389,null)),(function (){var x__9660__auto__ = cljs.core.symbol.call(null,[cljs.core.str(ns)].join(''),[cljs.core.str(t)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","deftype","cljs.core$macros/deftype",1799045688,null)),(function (){var x__9660__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,locals,(function (){var x__9660__auto__ = meta_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","IWithMeta","cljs.core/IWithMeta",-1981666051,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-with-meta","-with-meta",-1610713823,null)),(function (){var x__9660__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9660__auto__ = this_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = meta_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__9660__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),locals,(function (){var x__9660__auto__ = meta_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","IMeta","cljs.core/IMeta",-1459057517,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-meta","-meta",494863156,null)),(function (){var x__9660__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9660__auto__ = this_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = meta_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),impls)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__9660__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),locals,(function (){var x__9660__auto__ = cljs.analyzer.elide_reader_meta.call(null,cljs.core.meta.call(null,_AMPERSAND_form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
});

cljs.core$macros.reify.cljs$lang$maxFixedArity = (2);

cljs.core$macros.reify.cljs$lang$applyTo = (function (seq19979){
var G__19980 = cljs.core.first.call(null,seq19979);
var seq19979__$1 = cljs.core.next.call(null,seq19979);
var G__19981 = cljs.core.first.call(null,seq19979__$1);
var seq19979__$2 = cljs.core.next.call(null,seq19979__$1);
return cljs.core$macros.reify.cljs$core$IFn$_invoke$arity$variadic(G__19980,G__19981,seq19979__$2);
});


cljs.core$macros.reify.cljs$lang$macro = true;
/**
 * Identical to reify but mutates its first argument.
 */
cljs.core$macros.specify_BANG_ = (function cljs$core$macros$specify_BANG_(var_args){
var args__9938__auto__ = [];
var len__9931__auto___19989 = arguments.length;
var i__9932__auto___19990 = (0);
while(true){
if((i__9932__auto___19990 < len__9931__auto___19989)){
args__9938__auto__.push((arguments[i__9932__auto___19990]));

var G__19991 = (i__9932__auto___19990 + (1));
i__9932__auto___19990 = G__19991;
continue;
} else {
}
break;
}

var argseq__9939__auto__ = ((((3) < args__9938__auto__.length))?(new cljs.core.IndexedSeq(args__9938__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.specify_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9939__auto__);
});

cljs.core$macros.specify_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,impls){
var x = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"x"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"extend","extend",1836484006),new cljs.core.Keyword(null,"instance","instance",-2121349050)], null));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9660__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9660__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","extend-type","cljs.core$macros/extend-type",1713295201,null)),(function (){var x__9660__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),impls)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
});

cljs.core$macros.specify_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.specify_BANG_.cljs$lang$applyTo = (function (seq19985){
var G__19986 = cljs.core.first.call(null,seq19985);
var seq19985__$1 = cljs.core.next.call(null,seq19985);
var G__19987 = cljs.core.first.call(null,seq19985__$1);
var seq19985__$2 = cljs.core.next.call(null,seq19985__$1);
var G__19988 = cljs.core.first.call(null,seq19985__$2);
var seq19985__$3 = cljs.core.next.call(null,seq19985__$2);
return cljs.core$macros.specify_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__19986,G__19987,G__19988,seq19985__$3);
});


cljs.core$macros.specify_BANG_.cljs$lang$macro = true;
/**
 * Identical to specify! but does not mutate its first argument. The first
 *   argument must be an ICloneable instance.
 */
cljs.core$macros.specify = (function cljs$core$macros$specify(var_args){
var args__9938__auto__ = [];
var len__9931__auto___19996 = arguments.length;
var i__9932__auto___19997 = (0);
while(true){
if((i__9932__auto___19997 < len__9931__auto___19996)){
args__9938__auto__.push((arguments[i__9932__auto___19997]));

var G__19998 = (i__9932__auto___19997 + (1));
i__9932__auto___19997 = G__19998;
continue;
} else {
}
break;
}

var argseq__9939__auto__ = ((((3) < args__9938__auto__.length))?(new cljs.core.IndexedSeq(args__9938__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.specify.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9939__auto__);
});

cljs.core$macros.specify.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,impls){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","specify!","cljs.core/specify!",-585401629,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","clone","cljs.core/clone",1417120092,null)),(function (){var x__9660__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),impls)));
});

cljs.core$macros.specify.cljs$lang$maxFixedArity = (3);

cljs.core$macros.specify.cljs$lang$applyTo = (function (seq19992){
var G__19993 = cljs.core.first.call(null,seq19992);
var seq19992__$1 = cljs.core.next.call(null,seq19992);
var G__19994 = cljs.core.first.call(null,seq19992__$1);
var seq19992__$2 = cljs.core.next.call(null,seq19992__$1);
var G__19995 = cljs.core.first.call(null,seq19992__$2);
var seq19992__$3 = cljs.core.next.call(null,seq19992__$2);
return cljs.core$macros.specify.cljs$core$IFn$_invoke$arity$variadic(G__19993,G__19994,G__19995,seq19992__$3);
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
var args__9938__auto__ = [];
var len__9931__auto___20003 = arguments.length;
var i__9932__auto___20004 = (0);
while(true){
if((i__9932__auto___20004 < len__9931__auto___20003)){
args__9938__auto__.push((arguments[i__9932__auto___20004]));

var G__20005 = (i__9932__auto___20004 + (1));
i__9932__auto___20004 = G__20005;
continue;
} else {
}
break;
}

var argseq__9939__auto__ = ((((3) < args__9938__auto__.length))?(new cljs.core.IndexedSeq(args__9938__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.this_as.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9939__auto__);
});

cljs.core$macros.this_as.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9660__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9660__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-this","cljs.core$macros/js-this",353597180,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),body)));
});

cljs.core$macros.this_as.cljs$lang$maxFixedArity = (3);

cljs.core$macros.this_as.cljs$lang$applyTo = (function (seq19999){
var G__20000 = cljs.core.first.call(null,seq19999);
var seq19999__$1 = cljs.core.next.call(null,seq19999);
var G__20001 = cljs.core.first.call(null,seq19999__$1);
var seq19999__$2 = cljs.core.next.call(null,seq19999__$1);
var G__20002 = cljs.core.first.call(null,seq19999__$2);
var seq19999__$3 = cljs.core.next.call(null,seq19999__$2);
return cljs.core$macros.this_as.cljs$core$IFn$_invoke$arity$variadic(G__20000,G__20001,G__20002,seq19999__$3);
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

if(cljs.core.truth_((function (){var and__8811__auto__ = new cljs.core.Keyword(null,"protocol-deprecated","protocol-deprecated",103233497).cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_warnings_STAR_);
if(cljs.core.truth_(and__8811__auto__)){
var and__8811__auto____$1 = new cljs.core.Keyword(null,"deprecated","deprecated",1498275348).cljs$core$IFn$_invoke$arity$1(var$);
if(cljs.core.truth_(and__8811__auto____$1)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"deprecation-nowarn","deprecation-nowarn",-1762828044).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,p)));
} else {
return and__8811__auto____$1;
}
} else {
return and__8811__auto__;
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
var G__20006 = cljs.core.assoc.call(null,ret,cljs.core.first.call(null,s),cljs.core.take_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,s)));
var G__20007 = cljs.core.drop_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,s));
ret = G__20006;
s = G__20007;
continue;
} else {
return ret;
}
break;
}
});
cljs.core$macros.base_assign_impls = (function cljs$core$macros$base_assign_impls(env,resolve,tsym,type,p__20008){
var vec__20016 = p__20008;
var p = cljs.core.nth.call(null,vec__20016,(0),null);
var sigs = cljs.core.nth.call(null,vec__20016,(1),null);
cljs.core$macros.warn_and_update_protocol.call(null,p,tsym,env);

var psym = resolve.call(null,p);
var pfn_prefix = cljs.core.subs.call(null,[cljs.core.str(psym)].join(''),(0),([cljs.core.str(psym)].join('').indexOf("/") + (1)));
return cljs.core.cons.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aset","cljs.core$macros/aset",-693176374,null)),(function (){var x__9660__auto__ = psym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = type;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true)))),cljs.core.map.call(null,((function (psym,pfn_prefix,vec__20016,p,sigs){
return (function (p__20019){
var vec__20020 = p__20019;
var seq__20021 = cljs.core.seq.call(null,vec__20020);
var first__20022 = cljs.core.first.call(null,seq__20021);
var seq__20021__$1 = cljs.core.next.call(null,seq__20021);
var f = first__20022;
var meths = seq__20021__$1;
var form = vec__20020;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aset","cljs.core$macros/aset",-693176374,null)),(function (){var x__9660__auto__ = cljs.core.symbol.call(null,[cljs.core.str(pfn_prefix),cljs.core.str(f)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = type;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),meths))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
});})(psym,pfn_prefix,vec__20016,p,sigs))
,sigs));
});
if(typeof cljs.core$macros.extend_prefix !== 'undefined'){
} else {
cljs.core$macros.extend_prefix = (function (){var method_table__9751__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9752__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9753__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9754__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9755__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.core$macros","extend-prefix"),((function (method_table__9751__auto__,prefer_table__9752__auto__,method_cache__9753__auto__,cached_hierarchy__9754__auto__,hierarchy__9755__auto__){
return (function (tsym,sym){
return new cljs.core.Keyword(null,"extend","extend",1836484006).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,tsym));
});})(method_table__9751__auto__,prefer_table__9752__auto__,method_cache__9753__auto__,cached_hierarchy__9754__auto__,hierarchy__9755__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__9755__auto__,method_table__9751__auto__,prefer_table__9752__auto__,method_cache__9753__auto__,cached_hierarchy__9754__auto__));
})();
}
cljs.core._add_method.call(null,cljs.core$macros.extend_prefix,new cljs.core.Keyword(null,"instance","instance",-2121349050),(function (tsym,sym){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"..","..",-300507420,null)),(function (){var x__9660__auto__ = tsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core$macros.to_property.call(null,sym);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
}));
cljs.core._add_method.call(null,cljs.core$macros.extend_prefix,new cljs.core.Keyword(null,"default","default",-1987822328),(function (tsym,sym){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"..","..",-300507420,null)),(function (){var x__9660__auto__ = tsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-prototype","-prototype",-450831903,null)),(function (){var x__9660__auto__ = cljs.core$macros.to_property.call(null,sym);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
}));
cljs.core$macros.adapt_obj_params = (function cljs$core$macros$adapt_obj_params(type,p__20023){
var vec__20030 = p__20023;
var seq__20031 = cljs.core.seq.call(null,vec__20030);
var first__20032 = cljs.core.first.call(null,seq__20031);
var seq__20031__$1 = cljs.core.next.call(null,seq__20031);
var vec__20033 = first__20032;
var seq__20034 = cljs.core.seq.call(null,vec__20033);
var first__20035 = cljs.core.first.call(null,seq__20034);
var seq__20034__$1 = cljs.core.next.call(null,seq__20034);
var this$ = first__20035;
var args = seq__20034__$1;
var sig = vec__20033;
var body = seq__20031__$1;
var x__9660__auto__ = cljs.core.vec.call(null,args);
return cljs.core._conj.call(null,(function (){var x__9660__auto____$1 = cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"this-as","this-as",-848995740,null),cljs.core.vary_meta.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),type),body);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto____$1);
})(),x__9660__auto__);
});
cljs.core$macros.adapt_ifn_params = (function cljs$core$macros$adapt_ifn_params(type,p__20036){
var vec__20043 = p__20036;
var seq__20044 = cljs.core.seq.call(null,vec__20043);
var first__20045 = cljs.core.first.call(null,seq__20044);
var seq__20044__$1 = cljs.core.next.call(null,seq__20044);
var vec__20046 = first__20045;
var seq__20047 = cljs.core.seq.call(null,vec__20046);
var first__20048 = cljs.core.first.call(null,seq__20047);
var seq__20047__$1 = cljs.core.next.call(null,seq__20047);
var this$ = first__20048;
var args = seq__20047__$1;
var sig = vec__20046;
var body = seq__20044__$1;
var self_sym = cljs.core.with_meta.call(null,new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),type], null));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9660__auto__ = cljs.core.vec.call(null,cljs.core.cons.call(null,self_sym,args));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null)),(function (){var x__9660__auto__ = self_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9660__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9660__auto__ = this$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = self_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
});
cljs.core$macros.adapt_ifn_invoke_params = (function cljs$core$macros$adapt_ifn_invoke_params(type,p__20049){
var vec__20056 = p__20049;
var seq__20057 = cljs.core.seq.call(null,vec__20056);
var first__20058 = cljs.core.first.call(null,seq__20057);
var seq__20057__$1 = cljs.core.next.call(null,seq__20057);
var vec__20059 = first__20058;
var seq__20060 = cljs.core.seq.call(null,vec__20059);
var first__20061 = cljs.core.first.call(null,seq__20060);
var seq__20060__$1 = cljs.core.next.call(null,seq__20060);
var this$ = first__20061;
var args = seq__20060__$1;
var sig = vec__20059;
var body = seq__20057__$1;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9660__auto__ = cljs.core.vec.call(null,args);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null)),(function (){var x__9660__auto__ = cljs.core.vary_meta.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),type);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
});
cljs.core$macros.adapt_proto_params = (function cljs$core$macros$adapt_proto_params(type,p__20062){
var vec__20069 = p__20062;
var seq__20070 = cljs.core.seq.call(null,vec__20069);
var first__20071 = cljs.core.first.call(null,seq__20070);
var seq__20070__$1 = cljs.core.next.call(null,seq__20070);
var vec__20072 = first__20071;
var seq__20073 = cljs.core.seq.call(null,vec__20072);
var first__20074 = cljs.core.first.call(null,seq__20073);
var seq__20073__$1 = cljs.core.next.call(null,seq__20073);
var this$ = first__20074;
var args = seq__20073__$1;
var sig = vec__20072;
var body = seq__20070__$1;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9660__auto__ = cljs.core.vec.call(null,cljs.core.cons.call(null,cljs.core.vary_meta.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),type),args));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null)),(function (){var x__9660__auto__ = this$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
});
cljs.core$macros.add_obj_methods = (function cljs$core$macros$add_obj_methods(type,type_sym,sigs){
return cljs.core.map.call(null,(function (p__20083){
var vec__20084 = p__20083;
var seq__20085 = cljs.core.seq.call(null,vec__20084);
var first__20086 = cljs.core.first.call(null,seq__20085);
var seq__20085__$1 = cljs.core.next.call(null,seq__20085);
var f = first__20086;
var meths = seq__20085__$1;
var form = vec__20084;
var vec__20087 = ((cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,meths)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rest.call(null,form)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,meths], null));
var f__$1 = cljs.core.nth.call(null,vec__20087,(0),null);
var meths__$1 = cljs.core.nth.call(null,vec__20087,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__9660__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,f__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),cljs.core.map.call(null,((function (vec__20087,f__$1,meths__$1,vec__20084,seq__20085,first__20086,seq__20085__$1,f,meths,form){
return (function (p1__20075_SHARP_){
return cljs.core$macros.adapt_obj_params.call(null,type,p1__20075_SHARP_);
});})(vec__20087,f__$1,meths__$1,vec__20084,seq__20085,first__20086,seq__20085__$1,f,meths,form))
,meths__$1)))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
}),sigs);
});
cljs.core$macros.ifn_invoke_methods = (function cljs$core$macros$ifn_invoke_methods(type,type_sym,p__20091){
var vec__20095 = p__20091;
var seq__20096 = cljs.core.seq.call(null,vec__20095);
var first__20097 = cljs.core.first.call(null,seq__20096);
var seq__20096__$1 = cljs.core.next.call(null,seq__20096);
var f = first__20097;
var meths = seq__20096__$1;
var form = vec__20095;
return cljs.core.map.call(null,((function (vec__20095,seq__20096,first__20097,seq__20096__$1,f,meths,form){
return (function (meth){
var arity = cljs.core.count.call(null,cljs.core.first.call(null,meth));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__9660__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,cljs.core.symbol.call(null,[cljs.core.str("cljs$core$IFn$_invoke$arity$"),cljs.core.str(arity)].join('')));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9660__auto__ = meth;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})()))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
});})(vec__20095,seq__20096,first__20097,seq__20096__$1,f,meths,form))
,cljs.core.map.call(null,((function (vec__20095,seq__20096,first__20097,seq__20096__$1,f,meths,form){
return (function (p1__20090_SHARP_){
return cljs.core$macros.adapt_ifn_invoke_params.call(null,type,p1__20090_SHARP_);
});})(vec__20095,seq__20096,first__20097,seq__20096__$1,f,meths,form))
,meths));
});
cljs.core$macros.add_ifn_methods = (function cljs$core$macros$add_ifn_methods(type,type_sym,p__20099){
var vec__20103 = p__20099;
var seq__20104 = cljs.core.seq.call(null,vec__20103);
var first__20105 = cljs.core.first.call(null,seq__20104);
var seq__20104__$1 = cljs.core.next.call(null,seq__20104);
var f = first__20105;
var meths = seq__20104__$1;
var form = vec__20103;
var meths__$1 = cljs.core.map.call(null,((function (vec__20103,seq__20104,first__20105,seq__20104__$1,f,meths,form){
return (function (p1__20098_SHARP_){
return cljs.core$macros.adapt_ifn_params.call(null,type,p1__20098_SHARP_);
});})(vec__20103,seq__20104,first__20105,seq__20104__$1,f,meths,form))
,meths);
var this_sym = cljs.core.with_meta.call(null,new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),type], null));
var argsym = cljs.core.gensym.call(null,"args");
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__9660__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,new cljs.core.Symbol(null,"call","call",1120531661,null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),meths__$1))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})()))),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__9660__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,new cljs.core.Symbol(null,"apply","apply",-1334050276,null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9660__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this_sym,argsym], null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null)),(function (){var x__9660__auto__ = this_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".apply",".apply",-1176201338,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-call",".-call",1760541695,null)),(function (){var x__9660__auto__ = this_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = this_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".concat",".concat",1180408684,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),(function (){var x__9660__auto__ = this_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","aclone","cljs.core/aclone",-758078968,null)),(function (){var x__9660__auto__ = argsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})()))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())))], null),cljs.core$macros.ifn_invoke_methods.call(null,type,type_sym,form));
});
cljs.core$macros.add_proto_methods_STAR_ = (function cljs$core$macros$add_proto_methods_STAR_(pprefix,type,type_sym,p__20106){
var vec__20114 = p__20106;
var seq__20115 = cljs.core.seq.call(null,vec__20114);
var first__20116 = cljs.core.first.call(null,seq__20115);
var seq__20115__$1 = cljs.core.next.call(null,seq__20115);
var f = first__20116;
var meths = seq__20115__$1;
var form = vec__20114;
var pf = [cljs.core.str(pprefix),cljs.core.str(cljs.core.name.call(null,f))].join('');
if(cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,meths))){
var meth = meths;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__9660__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,[cljs.core.str(pf),cljs.core.str("$arity$"),cljs.core.str(cljs.core.count.call(null,cljs.core.first.call(null,meth)))].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),cljs.core$macros.adapt_proto_params.call(null,type,meth)))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())))], null);
} else {
return cljs.core.map.call(null,((function (pf,vec__20114,seq__20115,first__20116,seq__20115__$1,f,meths,form){
return (function (p__20117){
var vec__20118 = p__20117;
var seq__20119 = cljs.core.seq.call(null,vec__20118);
var first__20120 = cljs.core.first.call(null,seq__20119);
var seq__20119__$1 = cljs.core.next.call(null,seq__20119);
var sig = first__20120;
var body = seq__20119__$1;
var meth = vec__20118;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__9660__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,[cljs.core.str(pf),cljs.core.str("$arity$"),cljs.core.str(cljs.core.count.call(null,sig))].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9660__auto__ = cljs.core$macros.adapt_proto_params.call(null,type,meth);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})()))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
});})(pf,vec__20114,seq__20115,first__20116,seq__20115__$1,f,meths,form))
,meths);
}
});
cljs.core$macros.proto_assign_impls = (function cljs$core$macros$proto_assign_impls(env,resolve,type_sym,type,p__20121){
var vec__20125 = p__20121;
var p = cljs.core.nth.call(null,vec__20125,(0),null);
var sigs = cljs.core.nth.call(null,vec__20125,(1),null);
cljs.core$macros.warn_and_update_protocol.call(null,p,type,env);

var psym = resolve.call(null,p);
var pprefix = cljs.core$macros.protocol_prefix.call(null,psym);
var skip_flag = cljs.core.set.call(null,new cljs.core.Keyword(null,"skip-protocol-flag","skip-protocol-flag",-1426798630).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,type_sym)));
if(cljs.core._EQ_.call(null,p,new cljs.core.Symbol(null,"Object","Object",61210754,null))){
return cljs.core$macros.add_obj_methods.call(null,type,type_sym,sigs);
} else {
return cljs.core.concat.call(null,(cljs.core.truth_(skip_flag.call(null,psym))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__9660__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,pprefix);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PROTOCOL_SENTINEL","cljs.core/PROTOCOL_SENTINEL",210209696,null)))))], null)),cljs.core.mapcat.call(null,((function (psym,pprefix,skip_flag,vec__20125,p,sigs){
return (function (sig){
if(cljs.core._EQ_.call(null,psym,new cljs.core.Symbol("cljs.core","IFn","cljs.core/IFn",-920223129,null))){
return cljs.core$macros.add_ifn_methods.call(null,type,type_sym,sig);
} else {
return cljs.core$macros.add_proto_methods_STAR_.call(null,pprefix,type,type_sym,sig);
}
});})(psym,pprefix,skip_flag,vec__20125,p,sigs))
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
var vec__20131 = ((cljs.core.vector_QMARK_.call(null,cljs.core.second.call(null,method)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [__GT_name.call(null,method_name),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second.call(null,method)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [__GT_name.call(null,method_name),cljs.core.map.call(null,cljs.core.first,cljs.core.rest.call(null,method))], null));
var fname = cljs.core.nth.call(null,vec__20131,(0),null);
var sigs = cljs.core.nth.call(null,vec__20131,(1),null);
var decmeths = cljs.core.get.call(null,minfo,fname,new cljs.core.Keyword("cljs.core$macros","not-found","cljs.core$macros/not-found",-1226326556));
if(cljs.core._EQ_.call(null,decmeths,new cljs.core.Keyword("cljs.core$macros","not-found","cljs.core$macros/not-found",-1226326556))){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),env,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p,new cljs.core.Keyword(null,"fname","fname",1500291491),fname,new cljs.core.Keyword(null,"no-such-method","no-such-method",1087422840),true], null));
} else {
}

if(cljs.core.truth_(cljs.core.namespace.call(null,method_name))){
var method_var_20134 = cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),method_name,cljs.analyzer.confirm_var_exist_warning);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(var$),new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(method_var_20134))){
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

var G__20135 = cljs.core.next.call(null,sigs__$1);
var G__20136 = cljs.core.conj.call(null,seen,c);
sigs__$1 = G__20135;
seen = G__20136;
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

var seen_20143 = cljs.core.PersistentHashSet.EMPTY;
var methods_20144__$1 = methods$;
while(true){
if(cljs.core.seq.call(null,methods_20144__$1)){
var vec__20140_20145 = cljs.core.first.call(null,methods_20144__$1);
var fname_20146 = cljs.core.nth.call(null,vec__20140_20145,(0),null);
var method_20147 = vec__20140_20145;
if(cljs.core.contains_QMARK_.call(null,seen_20143,fname_20146)){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"extend-type-invalid-method-shape","extend-type-invalid-method-shape",1424103549),env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"protocol","protocol",652470118),proto,new cljs.core.Keyword(null,"method","method",55703592),fname_20146], null));
} else {
}

cljs.core$macros.validate_impl_sigs.call(null,env,proto,method_20147);

var G__20148 = cljs.core.conj.call(null,seen_20143,fname_20146);
var G__20149 = cljs.core.next.call(null,methods_20144__$1);
seen_20143 = G__20148;
methods_20144__$1 = G__20149;
continue;
} else {
}
break;
}

var G__20150 = cljs.core.conj.call(null,protos,proto);
var G__20151 = impls__$2;
protos = G__20150;
impls__$1 = G__20151;
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
var args__9938__auto__ = [];
var len__9931__auto___20160 = arguments.length;
var i__9932__auto___20161 = (0);
while(true){
if((i__9932__auto___20161 < len__9931__auto___20160)){
args__9938__auto__.push((arguments[i__9932__auto___20161]));

var G__20162 = (i__9932__auto___20161 + (1));
i__9932__auto___20161 = G__20162;
continue;
} else {
}
break;
}

var argseq__9939__auto__ = ((((3) < args__9938__auto__.length))?(new cljs.core.IndexedSeq(args__9938__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.extend_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9939__auto__);
});

cljs.core$macros.extend_type.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,type_sym,impls){
var env = _AMPERSAND_env;
var _ = cljs.core$macros.validate_impls.call(null,env,impls);
var resolve = cljs.core.partial.call(null,cljs.core$macros.resolve_var,env);
var impl_map = cljs.core$macros.__GT_impl_map.call(null,impls);
var impl_map__$1 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null,new cljs.core.Symbol(null,"number","number",-1084057331,null),null], null), null).call(null,type_sym))?cljs.core$macros.type_hint_impl_map.call(null,type_sym,impl_map):impl_map);
var vec__20157 = (function (){var temp__4655__auto__ = cljs.core$macros.base_type.call(null,type_sym);
if(cljs.core.truth_(temp__4655__auto__)){
var type = temp__4655__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core$macros.base_assign_impls], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [resolve.call(null,type_sym),cljs.core$macros.proto_assign_impls], null);
}
})();
var type = cljs.core.nth.call(null,vec__20157,(0),null);
var assign_impls = cljs.core.nth.call(null,vec__20157,(1),null);
if(cljs.core.truth_((function (){var and__8811__auto__ = new cljs.core.Keyword(null,"extending-base-js-type","extending-base-js-type",432787264).cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_warnings_STAR_);
if(cljs.core.truth_(and__8811__auto__)){
return cljs.core$macros.js_base_type.call(null,type_sym);
} else {
return and__8811__auto__;
}
})())){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"extending-base-js-type","extending-base-js-type",432787264),env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-symbol","current-symbol",-932381075),type_sym,new cljs.core.Keyword(null,"suggested-symbol","suggested-symbol",-1329631875),cljs.core$macros.js_base_type.call(null,type_sym)], null));
} else {
}

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),cljs.core.mapcat.call(null,((function (env,_,resolve,impl_map,impl_map__$1,vec__20157,type,assign_impls){
return (function (p1__20152_SHARP_){
return assign_impls.call(null,env,resolve,type_sym,type,p1__20152_SHARP_);
});})(env,_,resolve,impl_map,impl_map__$1,vec__20157,type,assign_impls))
,impl_map__$1))));
});

cljs.core$macros.extend_type.cljs$lang$maxFixedArity = (3);

cljs.core$macros.extend_type.cljs$lang$applyTo = (function (seq20153){
var G__20154 = cljs.core.first.call(null,seq20153);
var seq20153__$1 = cljs.core.next.call(null,seq20153);
var G__20155 = cljs.core.first.call(null,seq20153__$1);
var seq20153__$2 = cljs.core.next.call(null,seq20153__$1);
var G__20156 = cljs.core.first.call(null,seq20153__$2);
var seq20153__$3 = cljs.core.next.call(null,seq20153__$2);
return cljs.core$macros.extend_type.cljs$core$IFn$_invoke$arity$variadic(G__20154,G__20155,G__20156,seq20153__$3);
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
cljs.core$macros.annotate_specs = (function cljs$core$macros$annotate_specs(annots,v,p__20164){
var vec__20168 = p__20164;
var f = cljs.core.nth.call(null,vec__20168,(0),null);
var sigs = cljs.core.nth.call(null,vec__20168,(1),null);
return cljs.core.conj.call(null,v,cljs.core.vary_meta.call(null,cljs.core.cons.call(null,f,cljs.core.map.call(null,((function (vec__20168,f,sigs){
return (function (p1__20163_SHARP_){
return cljs.core.cons.call(null,cljs.core.second.call(null,p1__20163_SHARP_),cljs.core.nnext.call(null,p1__20163_SHARP_));
});})(vec__20168,f,sigs))
,sigs)),cljs.core.merge,annots));
});
cljs.core$macros.dt__GT_et = (function cljs$core$macros$dt__GT_et(var_args){
var args20171 = [];
var len__9931__auto___20174 = arguments.length;
var i__9932__auto___20175 = (0);
while(true){
if((i__9932__auto___20175 < len__9931__auto___20174)){
args20171.push((arguments[i__9932__auto___20175]));

var G__20176 = (i__9932__auto___20175 + (1));
i__9932__auto___20175 = G__20176;
continue;
} else {
}
break;
}

var G__20173 = args20171.length;
switch (G__20173) {
case 3:
return cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20171.length)].join('')));

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
var G__20178 = ret__$1;
var G__20179 = specs__$2;
ret = G__20178;
specs__$1 = G__20179;
continue;
} else {
return ret;
}
break;
}
});

cljs.core$macros.dt__GT_et.cljs$lang$maxFixedArity = 4;

cljs.core$macros.collect_protocols = (function cljs$core$macros$collect_protocols(impls,env){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,(function (p1__20180_SHARP_){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),p1__20180_SHARP_));
}),cljs.core.filter.call(null,cljs.core.symbol_QMARK_,impls)));
});
cljs.core$macros.build_positional_factory = (function cljs$core$macros$build_positional_factory(rsym,rname,fields){
var fn_name = cljs.core.with_meta.call(null,cljs.core.symbol.call(null,[cljs.core.str(new cljs.core.Symbol(null,"->","->",-2139605430,null)),cljs.core.str(rsym)].join('')),cljs.core.assoc.call(null,cljs.core.meta.call(null,rsym),new cljs.core.Keyword(null,"factory","factory",63933746),new cljs.core.Keyword(null,"positional","positional",-203580463)));
var field_values = (cljs.core.truth_(new cljs.core.Keyword(null,"internal-ctor","internal-ctor",937392560).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,rsym)))?cljs.core.conj.call(null,fields,null,null,null):fields);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null)),(function (){var x__9660__auto__ = fn_name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,fields))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__9660__auto__ = rname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),field_values)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
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
var args__9938__auto__ = [];
var len__9931__auto___20192 = arguments.length;
var i__9932__auto___20193 = (0);
while(true){
if((i__9932__auto___20193 < len__9931__auto___20192)){
args__9938__auto__.push((arguments[i__9932__auto___20193]));

var G__20194 = (i__9932__auto___20193 + (1));
i__9932__auto___20193 = G__20194;
continue;
} else {
}
break;
}

var argseq__9939__auto__ = ((((4) < args__9938__auto__.length))?(new cljs.core.IndexedSeq(args__9938__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.deftype.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__9939__auto__);
});

cljs.core$macros.deftype.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,t,fields,impls){
cljs.core$macros.validate_fields.call(null,"deftype",t,fields);

var env = _AMPERSAND_env;
var r = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),t));
var vec__20189 = cljs.core$macros.prepare_protocol_masks.call(null,env,impls);
var fpps = cljs.core.nth.call(null,vec__20189,(0),null);
var pmasks = cljs.core.nth.call(null,vec__20189,(1),null);
var protocols = cljs.core$macros.collect_protocols.call(null,impls,env);
var t__$1 = cljs.core.vary_meta.call(null,t,cljs.core.assoc,new cljs.core.Keyword(null,"protocols","protocols",-5615896),protocols,new cljs.core.Keyword(null,"skip-protocol-flag","skip-protocol-flag",-1426798630),fpps);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"deftype*","deftype*",962659890,null)),(function (){var x__9660__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = fields;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = pmasks;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = ((cljs.core.seq.call(null,impls))?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","extend-type","cljs.core$macros/extend-type",1713295201,null)),(function (){var x__9660__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),cljs.core$macros.dt__GT_et.call(null,t__$1,impls,fields)))):null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-getBasis",".-getBasis",-1306451468,null)),(function (){var x__9660__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9660__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__9660__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,fields))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$type",".-cljs$lang$type",-1029307724,null)),(function (){var x__9660__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$ctorStr",".-cljs$lang$ctorStr",-1820706991,null)),(function (){var x__9660__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = [cljs.core.str(r)].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$ctorPrWriter",".-cljs$lang$ctorPrWriter",255834464,null)),(function (){var x__9660__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9660__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__20181__auto__","this__20181__auto__",-1364004641,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__20182__auto__","writer__20182__auto__",580616246,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opt__20183__auto__","opt__20183__auto__",-402067801,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-write","cljs.core/-write",527220517,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__20182__auto__","writer__20182__auto__",580616246,null)),(function (){var x__9660__auto__ = [cljs.core.str(r)].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core$macros.build_positional_factory.call(null,t__$1,r,fields);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
});

cljs.core$macros.deftype.cljs$lang$maxFixedArity = (4);

cljs.core$macros.deftype.cljs$lang$applyTo = (function (seq20184){
var G__20185 = cljs.core.first.call(null,seq20184);
var seq20184__$1 = cljs.core.next.call(null,seq20184);
var G__20186 = cljs.core.first.call(null,seq20184__$1);
var seq20184__$2 = cljs.core.next.call(null,seq20184__$1);
var G__20187 = cljs.core.first.call(null,seq20184__$2);
var seq20184__$3 = cljs.core.next.call(null,seq20184__$2);
var G__20188 = cljs.core.first.call(null,seq20184__$3);
var seq20184__$4 = cljs.core.next.call(null,seq20184__$3);
return cljs.core$macros.deftype.cljs$core$IFn$_invoke$arity$variadic(G__20185,G__20186,G__20187,G__20188,seq20184__$4);
});


cljs.core$macros.deftype.cljs$lang$macro = true;
/**
 * Do not use this directly - use defrecord
 */
cljs.core$macros.emit_defrecord = (function cljs$core$macros$emit_defrecord(env,tagname,rname,fields,impls){
var hinted_fields = fields;
var fields__$1 = cljs.core.vec.call(null,cljs.core.map.call(null,((function (hinted_fields){
return (function (p1__20195_SHARP_){
return cljs.core.with_meta.call(null,p1__20195_SHARP_,null);
});})(hinted_fields))
,fields));
var base_fields = fields__$1;
var pr_open = [cljs.core.str("#"),cljs.core.str(cljs.core.namespace.call(null,rname)),cljs.core.str("."),cljs.core.str(cljs.core.name.call(null,rname)),cljs.core.str("{")].join('');
var fields__$2 = cljs.core.conj.call(null,fields__$1,new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),cljs.core.with_meta.call(null,new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)));
var gs = cljs.core.gensym.call(null);
var ksym = cljs.core.gensym.call(null,"k");
var impls__$1 = cljs.core.concat.call(null,impls,new cljs.core.PersistentVector(null, 28, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"IRecord","IRecord",-903221169,null),new cljs.core.Symbol(null,"ICloneable","ICloneable",1882653160,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-clone","-clone",227130084,null)),(function (){var x__9660__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__20196__auto__","this__20196__auto__",1589124095,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__9660__auto__ = tagname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),fields__$2)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})()))),new cljs.core.Symbol(null,"IHash","IHash",-1495374645,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-hash","-hash",-630070274,null)),(function (){var x__9660__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__20197__auto__","this__20197__auto__",-2050281634,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","caching-hash","cljs.core$macros/caching-hash",-1892393069,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__20197__auto__","this__20197__auto__",-2050281634,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"hash-imap","hash-imap",-1047446478,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})()))),new cljs.core.Symbol(null,"IEquiv","IEquiv",-1912850869,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-equiv","-equiv",320124272,null)),(function (){var x__9660__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__20198__auto__","this__20198__auto__",496104961,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"other__20199__auto__","other__20199__auto__",-1752443168,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"other__20199__auto__","other__20199__auto__",-1752443168,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","identical?","cljs.core$macros/identical?",815580547,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-constructor",".-constructor",279801701,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__20198__auto__","this__20198__auto__",496104961,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-constructor",".-constructor",279801701,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"other__20199__auto__","other__20199__auto__",-1752443168,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","equiv-map","cljs.core/equiv-map",-1185609892,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__20198__auto__","this__20198__auto__",496104961,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"other__20199__auto__","other__20199__auto__",-1752443168,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})()))),new cljs.core.Symbol(null,"IMeta","IMeta",1095313672,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-meta","-meta",494863156,null)),(function (){var x__9660__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__20200__auto__","this__20200__auto__",503152602,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__meta","__meta",-946752628,null))))),new cljs.core.Symbol(null,"IWithMeta","IWithMeta",-509493158,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-with-meta","-with-meta",-1610713823,null)),(function (){var x__9660__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__20201__auto__","this__20201__auto__",-615768194,null)),(function (){var x__9660__auto__ = gs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__9660__auto__ = tagname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),cljs.core.replace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),gs], null),fields__$2))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})()))),new cljs.core.Symbol(null,"ILookup","ILookup",784647298,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-lookup","-lookup",-1438393944,null)),(function (){var x__9660__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__20202__auto__","this__20202__auto__",1969133258,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__20203__auto__","k__20203__auto__",-1298384035,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-lookup","cljs.core/-lookup",-1845674443,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__20202__auto__","this__20202__auto__",1969133258,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__20203__auto__","k__20203__auto__",-1298384035,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})()))),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-lookup","-lookup",-1438393944,null)),(function (){var x__9660__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__20204__auto__","this__20204__auto__",1466701955,null)),(function (){var x__9660__auto__ = ksym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"else__20205__auto__","else__20205__auto__",-967756001,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","case","cljs.core$macros/case",-2131866965,null)),(function (){var x__9660__auto__ = ksym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),cljs.core.mapcat.call(null,((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (f){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,f),f], null);
});})(gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,base_fields),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)),(function (){var x__9660__auto__ = ksym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"else__20205__auto__","else__20205__auto__",-967756001,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})()))),new cljs.core.Symbol(null,"ICounted","ICounted",-1705786327,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-count","-count",416049189,null)),(function (){var x__9660__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__20206__auto__","this__20206__auto__",348947479,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),(function (){var x__9660__auto__ = cljs.core.count.call(null,base_fields);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})()))),new cljs.core.Symbol(null,"ICollection","ICollection",-686709190,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-conj","-conj",1373798691,null)),(function (){var x__9660__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__20207__auto__","this__20207__auto__",-2122346406,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"entry__20208__auto__","entry__20208__auto__",-1941681720,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"entry__20208__auto__","entry__20208__auto__",-1941681720,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-assoc","cljs.core/-assoc",-814539323,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__20207__auto__","this__20207__auto__",-2122346406,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-nth","cljs.core/-nth",504234802,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"entry__20208__auto__","entry__20208__auto__",-1941681720,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-nth","cljs.core/-nth",504234802,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"entry__20208__auto__","entry__20208__auto__",-1941681720,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","reduce","cljs.core/reduce",2025430439,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-conj","cljs.core/-conj",2040622670,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__20207__auto__","this__20207__auto__",-2122346406,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"entry__20208__auto__","entry__20208__auto__",-1941681720,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})()))),new cljs.core.Symbol(null,"IAssociative","IAssociative",-1306431882,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-assoc","-assoc",-416089758,null)),(function (){var x__9660__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__20209__auto__","this__20209__auto__",1664957870,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__20210__auto__","k__20210__auto__",-1244769364,null)),(function (){var x__9660__auto__ = gs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","condp","cljs.core$macros/condp",431619047,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","keyword-identical?","cljs.core/keyword-identical?",1598491177,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__20210__auto__","k__20210__auto__",-1244769364,null)),cljs.core.mapcat.call(null,((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (fld){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,fld),cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"new","new",-444906321,null),tagname,cljs.core.replace.call(null,cljs.core.PersistentArrayMap.fromArray([fld,gs,new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),null], true, false),fields__$2))], null);
});})(gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,base_fields),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__9660__auto__ = tagname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),null,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),null], null), null),fields__$2),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","assoc","cljs.core/assoc",322326297,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__20210__auto__","k__20210__auto__",-1244769364,null)),(function (){var x__9660__auto__ = gs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})()))),new cljs.core.Symbol(null,"IMap","IMap",992876629,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-dissoc","-dissoc",1638079447,null)),(function (){var x__9660__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__20211__auto__","this__20211__auto__",680972377,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__20212__auto__","k__20212__auto__",910034620,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null)),(function (){var x__9660__auto__ = cljs.core.apply.call(null,cljs.core.hash_set,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.keyword,base_fields)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__20212__auto__","k__20212__auto__",910034620,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","dissoc","cljs.core/dissoc",-432349815,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","with-meta","cljs.core/with-meta",749126446,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","into","cljs.core/into",1879938733,null)),(function (){var x__9660__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__20211__auto__","this__20211__auto__",680972377,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__meta","__meta",-946752628,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__20212__auto__","k__20212__auto__",910034620,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__9660__auto__ = tagname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),null,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),null], null), null),fields__$2),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not-empty","cljs.core/not-empty",540057011,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","dissoc","cljs.core/dissoc",-432349815,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__20212__auto__","k__20212__auto__",910034620,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})()))),new cljs.core.Symbol(null,"ISeqable","ISeqable",1349682102,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-seq","-seq",1019896831,null)),(function (){var x__9660__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__20214__auto__","this__20214__auto__",1299476373,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null)),(function (){var x__9660__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (p1__20213_SHARP_){
return cljs.core._conj.call(null,(function (){var x__9660__auto__ = cljs.core.keyword.call(null,p1__20213_SHARP_);
return cljs.core._conj.call(null,(function (){var x__9660__auto____$1 = p1__20213_SHARP_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto____$1);
})(),x__9660__auto__);
})(),new cljs.core.Symbol("cljs.core$macros","vector","cljs.core$macros/vector",912237829,null));
});})(gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,base_fields)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})()))),new cljs.core.Symbol(null,"IIterable","IIterable",577191430,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-iterator","-iterator",310937281,null)),(function (){var x__9660__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9660__auto__ = gs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"RecordIter.","RecordIter.",-265283060,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),(function (){var x__9660__auto__ = gs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.count.call(null,base_fields);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.keyword,base_fields)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-iterator","cljs.core/-iterator",1833427494,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","nil-iter","cljs.core/nil-iter",-1712403690,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})()))),new cljs.core.Symbol(null,"IPrintWithWriter","IPrintWithWriter",-1205316154,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-pr-writer","-pr-writer",-445354136,null)),(function (){var x__9660__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__20216__auto__","this__20216__auto__",865660295,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__20217__auto__","writer__20217__auto__",-1378874826,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opts__20218__auto__","opts__20218__auto__",755067293,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9660__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"pr-pair__20219__auto__","pr-pair__20219__auto__",351371117,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9660__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"keyval__20220__auto__","keyval__20220__auto__",700637788,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","pr-sequential-writer","cljs.core/pr-sequential-writer",-1101677821,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__20217__auto__","writer__20217__auto__",-1378874826,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","pr-writer","cljs.core/pr-writer",133956070,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,""),cljs.core._conj.call(null,cljs.core.List.EMPTY," "),cljs.core._conj.call(null,cljs.core.List.EMPTY,""),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opts__20218__auto__","opts__20218__auto__",755067293,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"keyval__20220__auto__","keyval__20220__auto__",700637788,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","pr-sequential-writer","cljs.core/pr-sequential-writer",-1101677821,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__20217__auto__","writer__20217__auto__",-1378874826,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"pr-pair__20219__auto__","pr-pair__20219__auto__",351371117,null)),(function (){var x__9660__auto__ = pr_open;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,", "),cljs.core._conj.call(null,cljs.core.List.EMPTY,"}"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opts__20218__auto__","opts__20218__auto__",755067293,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null)),(function (){var x__9660__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (p1__20215_SHARP_){
return cljs.core._conj.call(null,(function (){var x__9660__auto__ = cljs.core.keyword.call(null,p1__20215_SHARP_);
return cljs.core._conj.call(null,(function (){var x__9660__auto____$1 = p1__20215_SHARP_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto____$1);
})(),x__9660__auto__);
})(),new cljs.core.Symbol("cljs.core$macros","vector","cljs.core$macros/vector",912237829,null));
});})(gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,base_fields)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())))], null));
var vec__20224 = cljs.core$macros.prepare_protocol_masks.call(null,env,impls__$1);
var fpps = cljs.core.nth.call(null,vec__20224,(0),null);
var pmasks = cljs.core.nth.call(null,vec__20224,(1),null);
var protocols = cljs.core$macros.collect_protocols.call(null,impls__$1,env);
var tagname__$1 = cljs.core.vary_meta.call(null,tagname,cljs.core.assoc,new cljs.core.Keyword(null,"protocols","protocols",-5615896),protocols,new cljs.core.Keyword(null,"skip-protocol-flag","skip-protocol-flag",-1426798630),fpps);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"defrecord*","defrecord*",-1936366207,null)),(function (){var x__9660__auto__ = tagname__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = hinted_fields;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = pmasks;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","extend-type","cljs.core$macros/extend-type",1713295201,null)),(function (){var x__9660__auto__ = tagname__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),cljs.core$macros.dt__GT_et.call(null,tagname__$1,impls__$1,fields__$2,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
});
cljs.core$macros.build_map_factory = (function cljs$core$macros$build_map_factory(rsym,rname,fields){
var fn_name = cljs.core.with_meta.call(null,cljs.core.symbol.call(null,[cljs.core.str(new cljs.core.Symbol(null,"map->","map->",-999714600,null)),cljs.core.str(rsym)].join('')),cljs.core.assoc.call(null,cljs.core.meta.call(null,rsym),new cljs.core.Keyword(null,"factory","factory",63933746),new cljs.core.Keyword(null,"map","map",1371690461)));
var ms = cljs.core.gensym.call(null);
var ks = cljs.core.map.call(null,cljs.core.keyword,fields);
var getters = cljs.core.map.call(null,((function (fn_name,ms,ks){
return (function (k){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9660__auto__ = k;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = ms;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
});})(fn_name,ms,ks))
,ks);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null)),(function (){var x__9660__auto__ = fn_name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9660__auto__ = ms;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__9660__auto__ = rname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),getters,cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","dissoc","cljs.core/dissoc",-432349815,null)),(function (){var x__9660__auto__ = ms;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),ks)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
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
var args__9938__auto__ = [];
var len__9931__auto___20234 = arguments.length;
var i__9932__auto___20235 = (0);
while(true){
if((i__9932__auto___20235 < len__9931__auto___20234)){
args__9938__auto__.push((arguments[i__9932__auto___20235]));

var G__20236 = (i__9932__auto___20235 + (1));
i__9932__auto___20235 = G__20236;
continue;
} else {
}
break;
}

var argseq__9939__auto__ = ((((4) < args__9938__auto__.length))?(new cljs.core.IndexedSeq(args__9938__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.defrecord.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__9939__auto__);
});

cljs.core$macros.defrecord.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,rsym,fields,impls){
cljs.core$macros.validate_fields.call(null,"defrecord",rsym,fields);

var rsym__$1 = cljs.core.vary_meta.call(null,rsym,cljs.core.assoc,new cljs.core.Keyword(null,"internal-ctor","internal-ctor",937392560),true);
var r = cljs.core.vary_meta.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,_AMPERSAND_env,new cljs.core.Keyword(null,"locals","locals",535295783)),rsym__$1)),cljs.core.assoc,new cljs.core.Keyword(null,"internal-ctor","internal-ctor",937392560),true);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9660__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core$macros.emit_defrecord.call(null,_AMPERSAND_env,rsym__$1,r,fields,impls);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-getBasis",".-getBasis",-1306451468,null)),(function (){var x__9660__auto__ = r;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9660__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__9660__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,fields))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$type",".-cljs$lang$type",-1029307724,null)),(function (){var x__9660__auto__ = r;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$ctorPrSeq",".-cljs$lang$ctorPrSeq",41132414,null)),(function (){var x__9660__auto__ = r;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9660__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__20227__auto__","this__20227__auto__",-990380530,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null)),(function (){var x__9660__auto__ = [cljs.core.str(r)].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$ctorPrWriter",".-cljs$lang$ctorPrWriter",255834464,null)),(function (){var x__9660__auto__ = r;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9660__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__20227__auto__","this__20227__auto__",-990380530,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__20228__auto__","writer__20228__auto__",540620604,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-write","cljs.core/-write",527220517,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__20228__auto__","writer__20228__auto__",540620604,null)),(function (){var x__9660__auto__ = [cljs.core.str(r)].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core$macros.build_positional_factory.call(null,rsym__$1,r,fields);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core$macros.build_map_factory.call(null,rsym__$1,r,fields);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = r;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
});

cljs.core$macros.defrecord.cljs$lang$maxFixedArity = (4);

cljs.core$macros.defrecord.cljs$lang$applyTo = (function (seq20229){
var G__20230 = cljs.core.first.call(null,seq20229);
var seq20229__$1 = cljs.core.next.call(null,seq20229);
var G__20231 = cljs.core.first.call(null,seq20229__$1);
var seq20229__$2 = cljs.core.next.call(null,seq20229__$1);
var G__20232 = cljs.core.first.call(null,seq20229__$2);
var seq20229__$3 = cljs.core.next.call(null,seq20229__$2);
var G__20233 = cljs.core.first.call(null,seq20229__$3);
var seq20229__$4 = cljs.core.next.call(null,seq20229__$3);
return cljs.core$macros.defrecord.cljs$core$IFn$_invoke$arity$variadic(G__20230,G__20231,G__20232,G__20233,seq20229__$4);
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
var args__9938__auto__ = [];
var len__9931__auto___20264 = arguments.length;
var i__9932__auto___20265 = (0);
while(true){
if((i__9932__auto___20265 < len__9931__auto___20264)){
args__9938__auto__.push((arguments[i__9932__auto___20265]));

var G__20266 = (i__9932__auto___20265 + (1));
i__9932__auto___20265 = G__20266;
continue;
} else {
}
break;
}

var argseq__9939__auto__ = ((((3) < args__9938__auto__.length))?(new cljs.core.IndexedSeq(args__9938__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.defprotocol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9939__auto__);
});

cljs.core$macros.defprotocol.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,psym,doc_PLUS_methods){
var p = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,_AMPERSAND_env,new cljs.core.Keyword(null,"locals","locals",535295783)),psym));
var vec__20243 = ((typeof cljs.core.first.call(null,doc_PLUS_methods) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,doc_PLUS_methods),cljs.core.next.call(null,doc_PLUS_methods)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,doc_PLUS_methods], null));
var doc = cljs.core.nth.call(null,vec__20243,(0),null);
var methods$ = cljs.core.nth.call(null,vec__20243,(1),null);
var psym__$1 = cljs.core.vary_meta.call(null,psym,cljs.core.assoc,new cljs.core.Keyword(null,"doc","doc",1913296891),doc,new cljs.core.Keyword(null,"protocol-symbol","protocol-symbol",1279552198),true);
var ns_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
var fqn = ((function (p,vec__20243,doc,methods$,psym__$1,ns_name){
return (function (n){
return cljs.core.symbol.call(null,[cljs.core.str(ns_name),cljs.core.str("."),cljs.core.str(n)].join(''));
});})(p,vec__20243,doc,methods$,psym__$1,ns_name))
;
var prefix = cljs.core$macros.protocol_prefix.call(null,p);
var _ = (function (){var seq__20246 = cljs.core.seq.call(null,methods$);
var chunk__20247 = null;
var count__20248 = (0);
var i__20249 = (0);
while(true){
if((i__20249 < count__20248)){
var vec__20250 = cljs.core._nth.call(null,chunk__20247,i__20249);
var seq__20251 = cljs.core.seq.call(null,vec__20250);
var first__20252 = cljs.core.first.call(null,seq__20251);
var seq__20251__$1 = cljs.core.next.call(null,seq__20251);
var mname = first__20252;
var arities = seq__20251__$1;
if(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(0),null], null), null),cljs.core.map.call(null,cljs.core.count,cljs.core.filter.call(null,cljs.core.vector_QMARK_,arities))))){
throw (new Error([cljs.core.str("Invalid protocol, "),cljs.core.str(psym__$1),cljs.core.str(" defines method "),cljs.core.str(mname),cljs.core.str(" with arity 0")].join('')));
} else {
}

var G__20267 = seq__20246;
var G__20268 = chunk__20247;
var G__20269 = count__20248;
var G__20270 = (i__20249 + (1));
seq__20246 = G__20267;
chunk__20247 = G__20268;
count__20248 = G__20269;
i__20249 = G__20270;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__20246);
if(temp__4657__auto__){
var seq__20246__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20246__$1)){
var c__9637__auto__ = cljs.core.chunk_first.call(null,seq__20246__$1);
var G__20271 = cljs.core.chunk_rest.call(null,seq__20246__$1);
var G__20272 = c__9637__auto__;
var G__20273 = cljs.core.count.call(null,c__9637__auto__);
var G__20274 = (0);
seq__20246 = G__20271;
chunk__20247 = G__20272;
count__20248 = G__20273;
i__20249 = G__20274;
continue;
} else {
var vec__20253 = cljs.core.first.call(null,seq__20246__$1);
var seq__20254 = cljs.core.seq.call(null,vec__20253);
var first__20255 = cljs.core.first.call(null,seq__20254);
var seq__20254__$1 = cljs.core.next.call(null,seq__20254);
var mname = first__20255;
var arities = seq__20254__$1;
if(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(0),null], null), null),cljs.core.map.call(null,cljs.core.count,cljs.core.filter.call(null,cljs.core.vector_QMARK_,arities))))){
throw (new Error([cljs.core.str("Invalid protocol, "),cljs.core.str(psym__$1),cljs.core.str(" defines method "),cljs.core.str(mname),cljs.core.str(" with arity 0")].join('')));
} else {
}

var G__20275 = cljs.core.next.call(null,seq__20246__$1);
var G__20276 = null;
var G__20277 = (0);
var G__20278 = (0);
seq__20246 = G__20275;
chunk__20247 = G__20276;
count__20248 = G__20277;
i__20249 = G__20278;
continue;
}
} else {
return null;
}
}
break;
}
})();
var expand_sig = ((function (p,vec__20243,doc,methods$,psym__$1,ns_name,fqn,prefix,_){
return (function (fname,slot,sig){
var sig__$1 = ((!(cljs.core.every_QMARK_.call(null,cljs.core.symbol_QMARK_,sig)))?cljs.core.mapv.call(null,((function (p,vec__20243,doc,methods$,psym__$1,ns_name,fqn,prefix,_){
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
});})(p,vec__20243,doc,methods$,psym__$1,ns_name,fqn,prefix,_))
,sig):sig);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9660__auto__ = sig__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__9660__auto__ = cljs.core.first.call(null,sig__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9660__auto__ = cljs.core.first.call(null,sig__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.symbol.call(null,[cljs.core.str("-"),cljs.core.str(slot)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9660__auto__ = cljs.core.first.call(null,sig__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = slot;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),sig__$1)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9660__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__20237__auto__","x__20237__auto__",9775902,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__9660__auto__ = cljs.core.first.call(null,sig__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__9660__auto__ = cljs.core.first.call(null,sig__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__20238__auto__","m__20238__auto__",-1526663027,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aget","cljs.core$macros/aget",1976136178,null)),(function (){var x__9660__auto__ = fqn.call(null,fname);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog","typeOf","goog/typeOf",539097255,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__20237__auto__","x__20237__auto__",9775902,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__20238__auto__","m__20238__auto__",-1526663027,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__20238__auto__","m__20238__auto__",-1526663027,null)),sig__$1)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9660__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__20238__auto__","m__20238__auto__",-1526663027,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aget","cljs.core$macros/aget",1976136178,null)),(function (){var x__9660__auto__ = fqn.call(null,fname);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,"_"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__20238__auto__","m__20238__auto__",-1526663027,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__20238__auto__","m__20238__auto__",-1526663027,null)),sig__$1)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","missing-protocol","cljs.core/missing-protocol",531539732,null)),(function (){var x__9660__auto__ = [cljs.core.str(psym__$1),cljs.core.str("."),cljs.core.str(fname)].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.first.call(null,sig__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
});})(p,vec__20243,doc,methods$,psym__$1,ns_name,fqn,prefix,_))
;
var psym__$2 = cljs.core.vary_meta.call(null,cljs.core.vary_meta.call(null,psym__$1,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516)], null),cljs.core.conj,"@interface"),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"protocol-info","protocol-info",1471745843),new cljs.core.Keyword(null,"methods","methods",453930866)], null),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (p,vec__20243,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig){
return (function (p__20256){
var vec__20257 = p__20256;
var seq__20258 = cljs.core.seq.call(null,vec__20257);
var first__20259 = cljs.core.first.call(null,seq__20258);
var seq__20258__$1 = cljs.core.next.call(null,seq__20258);
var fname = first__20259;
var sigs = seq__20258__$1;
var doc__$1 = (function (){var doc__$1 = cljs.core.last.call(null,sigs);
if(typeof doc__$1 === 'string'){
return doc__$1;
} else {
return null;
}
})();
var sigs__$1 = cljs.core.take_while.call(null,cljs.core.vector_QMARK_,sigs);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vary_meta.call(null,fname,cljs.core.assoc,new cljs.core.Keyword(null,"doc","doc",1913296891),doc__$1),cljs.core.vec.call(null,sigs__$1)], null);
});})(p,vec__20243,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig))
,methods$)));
var method = ((function (p,vec__20243,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2){
return (function (p__20260){
var vec__20261 = p__20260;
var seq__20262 = cljs.core.seq.call(null,vec__20261);
var first__20263 = cljs.core.first.call(null,seq__20262);
var seq__20262__$1 = cljs.core.next.call(null,seq__20262);
var fname = first__20263;
var sigs = seq__20262__$1;
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null)),(function (){var x__9660__auto__ = fname__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),cljs.core.map.call(null,((function (doc__$1,sigs__$1,amp,slot,fname__$1,vec__20261,seq__20262,first__20263,seq__20262__$1,fname,sigs,p,vec__20243,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2){
return (function (sig){
return expand_sig.call(null,fname__$1,cljs.core.symbol.call(null,[cljs.core.str(slot),cljs.core.str("$arity$"),cljs.core.str(cljs.core.count.call(null,sig))].join('')),sig);
});})(doc__$1,sigs__$1,amp,slot,fname__$1,vec__20261,seq__20262,first__20263,seq__20262__$1,fname,sigs,p,vec__20243,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2))
,sigs__$1))));
});})(p,vec__20243,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"*unchecked-if*","*unchecked-if*",1542408350,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"def","def",597100991,null)),(function (){var x__9660__auto__ = psym__$2;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"function(){}"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),cljs.core.map.call(null,method,methods$),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"*unchecked-if*","*unchecked-if*",1542408350,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
});

cljs.core$macros.defprotocol.cljs$lang$maxFixedArity = (3);

cljs.core$macros.defprotocol.cljs$lang$applyTo = (function (seq20239){
var G__20240 = cljs.core.first.call(null,seq20239);
var seq20239__$1 = cljs.core.next.call(null,seq20239);
var G__20241 = cljs.core.first.call(null,seq20239__$1);
var seq20239__$2 = cljs.core.next.call(null,seq20239__$1);
var G__20242 = cljs.core.first.call(null,seq20239__$2);
var seq20239__$3 = cljs.core.next.call(null,seq20239__$2);
return cljs.core$macros.defprotocol.cljs$core$IFn$_invoke$arity$variadic(G__20240,G__20241,G__20242,seq20239__$3);
});


cljs.core$macros.defprotocol.cljs$lang$macro = true;
/**
 * EXPERIMENTAL
 */
cljs.core$macros.implements_QMARK_ = (function cljs$core$macros$implements_QMARK_(_AMPERSAND_form,_AMPERSAND_env,psym,x){
var p = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,_AMPERSAND_env,new cljs.core.Keyword(null,"locals","locals",535295783)),psym));
var prefix = cljs.core$macros.protocol_prefix.call(null,p);
var xsym = cljs.core$macros.bool_expr.call(null,cljs.core.gensym.call(null));
var vec__20282 = cljs.core$macros.fast_path_protocols.call(null,p);
var part = cljs.core.nth.call(null,vec__20282,(0),null);
var bit = cljs.core.nth.call(null,vec__20282,(1),null);
var msym = cljs.core.symbol.call(null,[cljs.core.str("-cljs$lang$protocol_mask$partition"),cljs.core.str(part),cljs.core.str("$")].join(''));
if(!((x instanceof cljs.core.Symbol))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9660__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9660__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9660__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","or","cljs.core$macros/or",1346243648,null)),(function (){var x__9660__auto__ = (cljs.core.truth_(bit)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9660__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = msym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = bit;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})()))):false);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","identical?","cljs.core$macros/identical?",815580547,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PROTOCOL_SENTINEL","cljs.core/PROTOCOL_SENTINEL",210209696,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9660__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.symbol.call(null,[cljs.core.str("-"),cljs.core.str(prefix)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__9660__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","or","cljs.core$macros/or",1346243648,null)),(function (){var x__9660__auto__ = (cljs.core.truth_(bit)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9660__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = msym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = bit;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})()))):false);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","identical?","cljs.core$macros/identical?",815580547,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PROTOCOL_SENTINEL","cljs.core/PROTOCOL_SENTINEL",210209696,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9660__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.symbol.call(null,[cljs.core.str("-"),cljs.core.str(prefix)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
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
var vec__20288 = cljs.core$macros.fast_path_protocols.call(null,p);
var part = cljs.core.nth.call(null,vec__20288,(0),null);
var bit = cljs.core.nth.call(null,vec__20288,(1),null);
var msym = cljs.core.symbol.call(null,[cljs.core.str("-cljs$lang$protocol_mask$partition"),cljs.core.str(part),cljs.core.str("$")].join(''));
if(!((x instanceof cljs.core.Symbol))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9660__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9660__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__9660__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","or","cljs.core$macros/or",1346243648,null)),(function (){var x__9660__auto__ = (cljs.core.truth_(bit)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9660__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = msym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = bit;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})()))):false);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","identical?","cljs.core$macros/identical?",815580547,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PROTOCOL_SENTINEL","cljs.core/PROTOCOL_SENTINEL",210209696,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9660__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.symbol.call(null,[cljs.core.str("-"),cljs.core.str(prefix)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","coercive-not","cljs.core$macros/coercive-not",115999987,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9660__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = msym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","native-satisfies?","cljs.core/native-satisfies?",1482305036,null)),(function (){var x__9660__auto__ = psym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","native-satisfies?","cljs.core/native-satisfies?",1482305036,null)),(function (){var x__9660__auto__ = psym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__9660__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","or","cljs.core$macros/or",1346243648,null)),(function (){var x__9660__auto__ = (cljs.core.truth_(bit)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9660__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = msym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = bit;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})()))):false);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","identical?","cljs.core$macros/identical?",815580547,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PROTOCOL_SENTINEL","cljs.core/PROTOCOL_SENTINEL",210209696,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9660__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.symbol.call(null,[cljs.core.str("-"),cljs.core.str(prefix)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","coercive-not","cljs.core$macros/coercive-not",115999987,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9660__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = msym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","native-satisfies?","cljs.core/native-satisfies?",1482305036,null)),(function (){var x__9660__auto__ = psym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","native-satisfies?","cljs.core/native-satisfies?",1482305036,null)),(function (){var x__9660__auto__ = psym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
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
var args__9938__auto__ = [];
var len__9931__auto___20294 = arguments.length;
var i__9932__auto___20295 = (0);
while(true){
if((i__9932__auto___20295 < len__9931__auto___20294)){
args__9938__auto__.push((arguments[i__9932__auto___20295]));

var G__20296 = (i__9932__auto___20295 + (1));
i__9932__auto___20295 = G__20296;
continue;
} else {
}
break;
}

var argseq__9939__auto__ = ((((2) < args__9938__auto__.length))?(new cljs.core.IndexedSeq(args__9938__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.lazy_seq.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9939__auto__);
});

cljs.core$macros.lazy_seq.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","LazySeq","cljs.core/LazySeq",1986389673,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9660__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
});

cljs.core$macros.lazy_seq.cljs$lang$maxFixedArity = (2);

cljs.core$macros.lazy_seq.cljs$lang$applyTo = (function (seq20291){
var G__20292 = cljs.core.first.call(null,seq20291);
var seq20291__$1 = cljs.core.next.call(null,seq20291);
var G__20293 = cljs.core.first.call(null,seq20291__$1);
var seq20291__$2 = cljs.core.next.call(null,seq20291__$1);
return cljs.core$macros.lazy_seq.cljs$core$IFn$_invoke$arity$variadic(G__20292,G__20293,seq20291__$2);
});


cljs.core$macros.lazy_seq.cljs$lang$macro = true;
/**
 * Takes a body of expressions and yields a Delay object that will
 *   invoke the body only the first time it is forced (with force or deref/@), and
 *   will cache the result and return it on all subsequent force
 *   calls.
 */
cljs.core$macros.delay = (function cljs$core$macros$delay(var_args){
var args__9938__auto__ = [];
var len__9931__auto___20300 = arguments.length;
var i__9932__auto___20301 = (0);
while(true){
if((i__9932__auto___20301 < len__9931__auto___20300)){
args__9938__auto__.push((arguments[i__9932__auto___20301]));

var G__20302 = (i__9932__auto___20301 + (1));
i__9932__auto___20301 = G__20302;
continue;
} else {
}
break;
}

var argseq__9939__auto__ = ((((2) < args__9938__auto__.length))?(new cljs.core.IndexedSeq(args__9938__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.delay.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9939__auto__);
});

cljs.core$macros.delay.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","Delay","cljs.core/Delay",-21574999,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9660__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
});

cljs.core$macros.delay.cljs$lang$maxFixedArity = (2);

cljs.core$macros.delay.cljs$lang$applyTo = (function (seq20297){
var G__20298 = cljs.core.first.call(null,seq20297);
var seq20297__$1 = cljs.core.next.call(null,seq20297);
var G__20299 = cljs.core.first.call(null,seq20297__$1);
var seq20297__$2 = cljs.core.next.call(null,seq20297__$1);
return cljs.core$macros.delay.cljs$core$IFn$_invoke$arity$variadic(G__20298,G__20299,seq20297__$2);
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
var args__9938__auto__ = [];
var len__9931__auto___20311 = arguments.length;
var i__9932__auto___20312 = (0);
while(true){
if((i__9932__auto___20312 < len__9931__auto___20311)){
args__9938__auto__.push((arguments[i__9932__auto___20312]));

var G__20313 = (i__9932__auto___20312 + (1));
i__9932__auto___20312 = G__20313;
continue;
} else {
}
break;
}

var argseq__9939__auto__ = ((((3) < args__9938__auto__.length))?(new cljs.core.IndexedSeq(args__9938__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.with_redefs.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9939__auto__);
});

cljs.core$macros.with_redefs.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
var names = cljs.core.take_nth.call(null,(2),bindings);
var vals = cljs.core.take_nth.call(null,(2),cljs.core.drop.call(null,(1),bindings));
var tempnames = cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.gensym,cljs.core.name),names);
var binds = cljs.core.map.call(null,cljs.core.vector,names,vals);
var resets = cljs.core.reverse.call(null,cljs.core.map.call(null,cljs.core.vector,names,tempnames));
var bind_value = ((function (names,vals,tempnames,binds,resets){
return (function (p__20307){
var vec__20308 = p__20307;
var k = cljs.core.nth.call(null,vec__20308,(0),null);
var v = cljs.core.nth.call(null,vec__20308,(1),null);
return cljs.core._conj.call(null,(function (){var x__9660__auto__ = k;
return cljs.core._conj.call(null,(function (){var x__9660__auto____$1 = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto____$1);
})(),x__9660__auto__);
})(),new cljs.core.Symbol(null,"set!","set!",250714521,null));
});})(names,vals,tempnames,binds,resets))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9660__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.interleave.call(null,tempnames,names)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),cljs.core.map.call(null,bind_value,binds),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"try","try",-1273693247,null)),body,(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"finally","finally",-1065347064,null)),cljs.core.map.call(null,bind_value,resets))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
});

cljs.core$macros.with_redefs.cljs$lang$maxFixedArity = (3);

cljs.core$macros.with_redefs.cljs$lang$applyTo = (function (seq20303){
var G__20304 = cljs.core.first.call(null,seq20303);
var seq20303__$1 = cljs.core.next.call(null,seq20303);
var G__20305 = cljs.core.first.call(null,seq20303__$1);
var seq20303__$2 = cljs.core.next.call(null,seq20303__$1);
var G__20306 = cljs.core.first.call(null,seq20303__$2);
var seq20303__$3 = cljs.core.next.call(null,seq20303__$2);
return cljs.core$macros.with_redefs.cljs$core$IFn$_invoke$arity$variadic(G__20304,G__20305,G__20306,seq20303__$3);
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
var args__9938__auto__ = [];
var len__9931__auto___20318 = arguments.length;
var i__9932__auto___20319 = (0);
while(true){
if((i__9932__auto___20319 < len__9931__auto___20318)){
args__9938__auto__.push((arguments[i__9932__auto___20319]));

var G__20320 = (i__9932__auto___20319 + (1));
i__9932__auto___20319 = G__20320;
continue;
} else {
}
break;
}

var argseq__9939__auto__ = ((((3) < args__9938__auto__.length))?(new cljs.core.IndexedSeq(args__9938__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.binding.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9939__auto__);
});

cljs.core$macros.binding.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
var names = cljs.core.take_nth.call(null,(2),bindings);
cljs.analyzer.confirm_bindings.call(null,_AMPERSAND_env,names);

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","with-redefs","cljs.core$macros/with-redefs",1489217801,null)),(function (){var x__9660__auto__ = bindings;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),body)));
});

cljs.core$macros.binding.cljs$lang$maxFixedArity = (3);

cljs.core$macros.binding.cljs$lang$applyTo = (function (seq20314){
var G__20315 = cljs.core.first.call(null,seq20314);
var seq20314__$1 = cljs.core.next.call(null,seq20314);
var G__20316 = cljs.core.first.call(null,seq20314__$1);
var seq20314__$2 = cljs.core.next.call(null,seq20314__$1);
var G__20317 = cljs.core.first.call(null,seq20314__$2);
var seq20314__$3 = cljs.core.next.call(null,seq20314__$2);
return cljs.core$macros.binding.cljs$core$IFn$_invoke$arity$variadic(G__20315,G__20316,G__20317,seq20314__$3);
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
var args__9938__auto__ = [];
var len__9931__auto___20339 = arguments.length;
var i__9932__auto___20340 = (0);
while(true){
if((i__9932__auto___20340 < len__9931__auto___20339)){
args__9938__auto__.push((arguments[i__9932__auto___20340]));

var G__20341 = (i__9932__auto___20340 + (1));
i__9932__auto___20340 = G__20341;
continue;
} else {
}
break;
}

var argseq__9939__auto__ = ((((4) < args__9938__auto__.length))?(new cljs.core.IndexedSeq(args__9938__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.condp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__9939__auto__);
});

cljs.core$macros.condp.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,pred,expr,clauses){
var gpred = cljs.core.gensym.call(null,"pred__");
var gexpr = cljs.core.gensym.call(null,"expr__");
var emit = ((function (gpred,gexpr){
return (function cljs$core$macros$emit(pred__$1,expr__$1,args){
var vec__20333 = cljs.core.split_at.call(null,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,">>",">>",-277509267),cljs.core.second.call(null,args)))?(3):(2)),args);
var vec__20336 = cljs.core.nth.call(null,vec__20333,(0),null);
var a = cljs.core.nth.call(null,vec__20336,(0),null);
var b = cljs.core.nth.call(null,vec__20336,(1),null);
var c = cljs.core.nth.call(null,vec__20336,(2),null);
var clause = vec__20336;
var more = cljs.core.nth.call(null,vec__20333,(1),null);
var n = cljs.core.count.call(null,clause);
if(cljs.core._EQ_.call(null,(0),n)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"No matching clause: "),(function (){var x__9660__auto__ = expr__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
} else {
if(cljs.core._EQ_.call(null,(1),n)){
return a;
} else {
if(cljs.core._EQ_.call(null,(2),n)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9660__auto__ = pred__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = a;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = expr__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = b;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs$core$macros$emit.call(null,pred__$1,expr__$1,more);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-let","cljs.core$macros/if-let",1291543946,null)),(function (){var x__9660__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"p__20321__auto__","p__20321__auto__",-694865855,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9660__auto__ = pred__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = a;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = expr__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9660__auto__ = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"p__20321__auto__","p__20321__auto__",-694865855,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs$core$macros$emit.call(null,pred__$1,expr__$1,more);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));

}
}
}
});})(gpred,gexpr))
;
var gres = cljs.core.gensym.call(null,"res__");
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9660__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9660__auto__ = gpred;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = pred;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = gexpr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = emit.call(null,gpred,gexpr,clauses);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
});

cljs.core$macros.condp.cljs$lang$maxFixedArity = (4);

cljs.core$macros.condp.cljs$lang$applyTo = (function (seq20322){
var G__20323 = cljs.core.first.call(null,seq20322);
var seq20322__$1 = cljs.core.next.call(null,seq20322);
var G__20324 = cljs.core.first.call(null,seq20322__$1);
var seq20322__$2 = cljs.core.next.call(null,seq20322__$1);
var G__20325 = cljs.core.first.call(null,seq20322__$2);
var seq20322__$3 = cljs.core.next.call(null,seq20322__$2);
var G__20326 = cljs.core.first.call(null,seq20322__$3);
var seq20322__$4 = cljs.core.next.call(null,seq20322__$3);
return cljs.core$macros.condp.cljs$core$IFn$_invoke$arity$variadic(G__20323,G__20324,G__20325,G__20326,seq20322__$4);
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
var m = (function (){var and__8811__auto__ = cljs.core.list_QMARK_.call(null,x);
if(and__8811__auto__){
return cljs.analyzer.resolve_var.call(null,env,cljs.core.last.call(null,x));
} else {
return and__8811__auto__;
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
var args__9938__auto__ = [];
var len__9931__auto___20362 = arguments.length;
var i__9932__auto___20363 = (0);
while(true){
if((i__9932__auto___20363 < len__9931__auto___20362)){
args__9938__auto__.push((arguments[i__9932__auto___20363]));

var G__20364 = (i__9932__auto___20363 + (1));
i__9932__auto___20363 = G__20364;
continue;
} else {
}
break;
}

var argseq__9939__auto__ = ((((3) < args__9938__auto__.length))?(new cljs.core.IndexedSeq(args__9938__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.case$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9939__auto__);
});

cljs.core$macros.case$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,e,clauses){
var default$ = ((cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,clauses)))?cljs.core.last.call(null,clauses):cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"No matching clause: "),(function (){var x__9660__auto__ = e;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})()))));
var env = _AMPERSAND_env;
var pairs = cljs.core.reduce.call(null,((function (default$,env){
return (function (m,p__20350){
var vec__20351 = p__20350;
var test = cljs.core.nth.call(null,vec__20351,(0),null);
var expr = cljs.core.nth.call(null,vec__20351,(1),null);
if(cljs.core.seq_QMARK_.call(null,test)){
return cljs.core.reduce.call(null,((function (vec__20351,test,expr,default$,env){
return (function (m__$1,test__$1){
var test__$2 = (((test__$1 instanceof cljs.core.Symbol))?cljs.core._conj.call(null,(function (){var x__9660__auto__ = test__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),new cljs.core.Symbol(null,"quote","quote",1377916282,null)):test__$1);
return cljs.core$macros.assoc_test.call(null,m__$1,test__$2,expr,env);
});})(vec__20351,test,expr,default$,env))
,m,test);
} else {
if((test instanceof cljs.core.Symbol)){
return cljs.core$macros.assoc_test.call(null,m,cljs.core._conj.call(null,(function (){var x__9660__auto__ = test;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
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
return (function (p1__20342_SHARP_){
return cljs.core$macros.const_QMARK_.call(null,env,p1__20342_SHARP_);
});})(default$,env,pairs,esym,tests))
),tests)){
var no_default = ((cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,clauses)))?cljs.core.butlast.call(null,clauses):clauses);
var tests__$1 = cljs.core.mapv.call(null,((function (no_default,default$,env,pairs,esym,tests){
return (function (p1__20343_SHARP_){
if(cljs.core.seq_QMARK_.call(null,p1__20343_SHARP_)){
return cljs.core.vec.call(null,p1__20343_SHARP_);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20343_SHARP_], null);
}
});})(no_default,default$,env,pairs,esym,tests))
,cljs.core.take_nth.call(null,(2),no_default));
var thens = cljs.core.vec.call(null,cljs.core.take_nth.call(null,(2),cljs.core.drop.call(null,(1),no_default)));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9660__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9660__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = e;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"case*","case*",-1938255072,null)),(function (){var x__9660__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = tests__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = thens;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = default$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
} else {
if(cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,tests)){
var tests__$1 = cljs.core.mapv.call(null,((function (default$,env,pairs,esym,tests){
return (function (p1__20345_SHARP_){
if(cljs.core.seq_QMARK_.call(null,p1__20345_SHARP_)){
return cljs.core.vec.call(null,p1__20345_SHARP_);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20345_SHARP_], null);
}
});})(default$,env,pairs,esym,tests))
,cljs.core.vec.call(null,cljs.core.map.call(null,((function (default$,env,pairs,esym,tests){
return (function (p1__20344_SHARP_){
return [cljs.core.str(p1__20344_SHARP_)].join('').substring((1));
});})(default$,env,pairs,esym,tests))
,tests)));
var thens = cljs.core.vec.call(null,cljs.core.vals.call(null,pairs));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9660__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9660__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","keyword?","cljs.core$macros/keyword?",1362730141,null)),(function (){var x__9660__auto__ = e;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-fqn",".-fqn",1246113027,null)),(function (){var x__9660__auto__ = e;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"case*","case*",-1938255072,null)),(function (){var x__9660__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = tests__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = thens;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = default$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9660__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9660__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = e;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","cond","cljs.core$macros/cond",1626318471,null)),cljs.core.mapcat.call(null,((function (default$,env,pairs,esym,tests){
return (function (p__20358){
var vec__20359 = p__20358;
var m = cljs.core.nth.call(null,vec__20359,(0),null);
var c = cljs.core.nth.call(null,vec__20359,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null)),(function (){var x__9660__auto__ = m;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
});})(default$,env,pairs,esym,tests))
,pairs),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"else","else",-1508377146)),(function (){var x__9660__auto__ = default$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));

}
}
});

cljs.core$macros.case$.cljs$lang$maxFixedArity = (3);

cljs.core$macros.case$.cljs$lang$applyTo = (function (seq20346){
var G__20347 = cljs.core.first.call(null,seq20346);
var seq20346__$1 = cljs.core.next.call(null,seq20346);
var G__20348 = cljs.core.first.call(null,seq20346__$1);
var seq20346__$2 = cljs.core.next.call(null,seq20346__$1);
var G__20349 = cljs.core.first.call(null,seq20346__$2);
var seq20346__$3 = cljs.core.next.call(null,seq20346__$2);
return cljs.core$macros.case$.cljs$core$IFn$_invoke$arity$variadic(G__20347,G__20348,G__20349,seq20346__$3);
});


cljs.core$macros.case$.cljs$lang$macro = true;
/**
 * Evaluates expr and throws an exception if it does not evaluate to
 *   logical true.
 */
cljs.core$macros.assert = (function cljs$core$macros$assert(var_args){
var args20365 = [];
var len__9931__auto___20368 = arguments.length;
var i__9932__auto___20369 = (0);
while(true){
if((i__9932__auto___20369 < len__9931__auto___20368)){
args20365.push((arguments[i__9932__auto___20369]));

var G__20370 = (i__9932__auto___20369 + (1));
i__9932__auto___20369 = G__20370;
continue;
} else {
}
break;
}

var G__20367 = args20365.length;
switch (G__20367) {
case 3:
return cljs.core$macros.assert.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.assert.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str((args20365.length - (2)))].join('')));

}
});

cljs.core$macros.assert.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
if(cljs.core.truth_(cljs.core._STAR_assert_STAR_)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-not","cljs.core$macros/when-not",-764302244,null)),(function (){var x__9660__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__9660__auto__ = [cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,x))].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
} else {
return null;
}
});

cljs.core$macros.assert.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,message){
if(cljs.core.truth_(cljs.core._STAR_assert_STAR_)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-not","cljs.core$macros/when-not",-764302244,null)),(function (){var x__9660__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"Assert failed: "),(function (){var x__9660__auto__ = message;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,"\n"),(function (){var x__9660__auto__ = cljs.core.pr_str.call(null,x);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
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
return cljs.core.reduce.call(null,(function (groups,p__20458){
var vec__20459 = p__20458;
var k = cljs.core.nth.call(null,vec__20459,(0),null);
var v = cljs.core.nth.call(null,vec__20459,(1),null);
if((k instanceof cljs.core.Keyword)){
return cljs.core.conj.call(null,cljs.core.pop.call(null,groups),cljs.core.conj.call(null,cljs.core.peek.call(null,groups),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null)));
} else {
return cljs.core.conj.call(null,groups,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
}
}),cljs.core.PersistentVector.EMPTY,cljs.core.partition.call(null,(2),seq_exprs__$1));
});
var err = ((function (to_groups){
return (function() { 
var G__20539__delegate = function (msg){
throw cljs.core.ex_info.call(null,cljs.core.apply.call(null,cljs.core.str,msg),cljs.core.PersistentArrayMap.EMPTY);
};
var G__20539 = function (var_args){
var msg = null;
if (arguments.length > 0) {
var G__20540__i = 0, G__20540__a = new Array(arguments.length -  0);
while (G__20540__i < G__20540__a.length) {G__20540__a[G__20540__i] = arguments[G__20540__i + 0]; ++G__20540__i;}
  msg = new cljs.core.IndexedSeq(G__20540__a,0);
} 
return G__20539__delegate.call(this,msg);};
G__20539.cljs$lang$maxFixedArity = 0;
G__20539.cljs$lang$applyTo = (function (arglist__20541){
var msg = cljs.core.seq(arglist__20541);
return G__20539__delegate(msg);
});
G__20539.cljs$core$IFn$_invoke$arity$variadic = G__20539__delegate;
return G__20539;
})()
;})(to_groups))
;
var emit_bind = ((function (to_groups,err){
return (function cljs$core$macros$for_$_emit_bind(p__20462){
var vec__20501 = p__20462;
var seq__20502 = cljs.core.seq.call(null,vec__20501);
var first__20503 = cljs.core.first.call(null,seq__20502);
var seq__20502__$1 = cljs.core.next.call(null,seq__20502);
var vec__20504 = first__20503;
var seq__20505 = cljs.core.seq.call(null,vec__20504);
var first__20506 = cljs.core.first.call(null,seq__20505);
var seq__20505__$1 = cljs.core.next.call(null,seq__20505);
var bind = first__20506;
var first__20506__$1 = cljs.core.first.call(null,seq__20505__$1);
var seq__20505__$2 = cljs.core.next.call(null,seq__20505__$1);
var expr = first__20506__$1;
var mod_pairs = seq__20505__$2;
var vec__20507 = seq__20502__$1;
var vec__20510 = cljs.core.nth.call(null,vec__20507,(0),null);
var _ = cljs.core.nth.call(null,vec__20510,(0),null);
var next_expr = cljs.core.nth.call(null,vec__20510,(1),null);
var next_groups = vec__20507;
var giter = cljs.core.gensym.call(null,"iter__");
var gxs = cljs.core.gensym.call(null,"s__");
var do_mod = ((function (giter,gxs,vec__20501,seq__20502,first__20503,seq__20502__$1,vec__20504,seq__20505,first__20506,seq__20505__$1,bind,first__20506__$1,seq__20505__$2,expr,mod_pairs,vec__20507,vec__20510,_,next_expr,next_groups,to_groups,err){
return (function cljs$core$macros$for_$_emit_bind_$_do_mod(p__20513){
var vec__20520 = p__20513;
var seq__20521 = cljs.core.seq.call(null,vec__20520);
var first__20522 = cljs.core.first.call(null,seq__20521);
var seq__20521__$1 = cljs.core.next.call(null,seq__20521);
var vec__20523 = first__20522;
var k = cljs.core.nth.call(null,vec__20523,(0),null);
var v = cljs.core.nth.call(null,vec__20523,(1),null);
var pair = vec__20523;
var etc = seq__20521__$1;
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"let","let",-1282412701))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9660__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs$core$macros$for_$_emit_bind_$_do_mod.call(null,etc);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
} else {
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"while","while",963117786))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__9660__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs$core$macros$for_$_emit_bind_$_do_mod.call(null,etc);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
} else {
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"when","when",-576417306))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9660__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs$core$macros$for_$_emit_bind_$_do_mod.call(null,etc);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","rest","cljs.core/rest",-285075455,null)),(function (){var x__9660__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
} else {
if((k instanceof cljs.core.Keyword)){
return err.call(null,"Invalid 'for' keyword ",k);
} else {
if(next_groups){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9660__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"iterys__20372__auto__","iterys__20372__auto__",752790445,null)),(function (){var x__9660__auto__ = cljs$core$macros$for_$_emit_bind.call(null,next_groups);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"fs__20373__auto__","fs__20373__auto__",-1466935236,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"iterys__20372__auto__","iterys__20372__auto__",752790445,null)),(function (){var x__9660__auto__ = next_expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"fs__20373__auto__","fs__20373__auto__",-1466935236,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"fs__20373__auto__","fs__20373__auto__",-1466935236,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9660__auto__ = giter;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","rest","cljs.core/rest",-285075455,null)),(function (){var x__9660__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","rest","cljs.core/rest",-285075455,null)),(function (){var x__9660__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","cons","cljs.core/cons",96507417,null)),(function (){var x__9660__auto__ = body_expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9660__auto__ = giter;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","rest","cljs.core/rest",-285075455,null)),(function (){var x__9660__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));

}
}
}
}
}
});})(giter,gxs,vec__20501,seq__20502,first__20503,seq__20502__$1,vec__20504,seq__20505,first__20506,seq__20505__$1,bind,first__20506__$1,seq__20505__$2,expr,mod_pairs,vec__20507,vec__20510,_,next_expr,next_groups,to_groups,err))
;
if(next_groups){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9660__auto__ = giter;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9660__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","lazy-seq","cljs.core$macros/lazy-seq",806482650,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__9660__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9660__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-first","cljs.core$macros/when-first",-840670160,null)),(function (){var x__9660__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9660__auto__ = bind;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = do_mod.call(null,mod_pairs);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
} else {
var gi = cljs.core.gensym.call(null,"i__");
var gb = cljs.core.gensym.call(null,"b__");
var do_cmod = ((function (gi,gb,giter,gxs,do_mod,vec__20501,seq__20502,first__20503,seq__20502__$1,vec__20504,seq__20505,first__20506,seq__20505__$1,bind,first__20506__$1,seq__20505__$2,expr,mod_pairs,vec__20507,vec__20510,_,next_expr,next_groups,to_groups,err){
return (function cljs$core$macros$for_$_emit_bind_$_do_cmod(p__20526){
var vec__20533 = p__20526;
var seq__20534 = cljs.core.seq.call(null,vec__20533);
var first__20535 = cljs.core.first.call(null,seq__20534);
var seq__20534__$1 = cljs.core.next.call(null,seq__20534);
var vec__20536 = first__20535;
var k = cljs.core.nth.call(null,vec__20536,(0),null);
var v = cljs.core.nth.call(null,vec__20536,(1),null);
var pair = vec__20536;
var etc = seq__20534__$1;
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"let","let",-1282412701))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9660__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs$core$macros$for_$_emit_bind_$_do_cmod.call(null,etc);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
} else {
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"while","while",963117786))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__9660__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs$core$macros$for_$_emit_bind_$_do_cmod.call(null,etc);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
} else {
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"when","when",-576417306))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9660__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs$core$macros$for_$_emit_bind_$_do_cmod.call(null,etc);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unchecked-inc","cljs.core$macros/unchecked-inc",-1615365330,null)),(function (){var x__9660__auto__ = gi;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
} else {
if((k instanceof cljs.core.Keyword)){
return err.call(null,"Invalid 'for' keyword ",k);
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-append","cljs.core/chunk-append",-243671470,null)),(function (){var x__9660__auto__ = gb;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = body_expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unchecked-inc","cljs.core$macros/unchecked-inc",-1615365330,null)),(function (){var x__9660__auto__ = gi;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));

}
}
}
}
});})(gi,gb,giter,gxs,do_mod,vec__20501,seq__20502,first__20503,seq__20502__$1,vec__20504,seq__20505,first__20506,seq__20505__$1,bind,first__20506__$1,seq__20505__$2,expr,mod_pairs,vec__20507,vec__20510,_,next_expr,next_groups,to_groups,err))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9660__auto__ = giter;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9660__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","lazy-seq","cljs.core$macros/lazy-seq",806482650,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__9660__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9660__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-let","cljs.core$macros/when-let",-2004472648,null)),(function (){var x__9660__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9660__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__9660__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunked-seq?","cljs.core/chunked-seq?",-712922369,null)),(function (){var x__9660__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9660__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__20374__auto__","c__20374__auto__",-2030683917,null)),(function (){var x__9660__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-first","cljs.core/chunk-first",-1157877305,null)),(function (){var x__9660__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})()))),cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"/Users/ru/clojure/fligts-pro/resources/public/js/out/cljs/core.cljc"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2326),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj.call(null,cljs.core.List.EMPTY,52),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2326),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj.call(null,cljs.core.List.EMPTY,82),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"tag","tag",-1290361223)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not-native","cljs.core/not-native",-1716909265,null)))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"size__20375__auto__","size__20375__auto__",1055322739,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__20374__auto__","c__20374__auto__",-2030683917,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = gb;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-buffer","cljs.core/chunk-buffer",14093626,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"size__20375__auto__","size__20375__auto__",1055322739,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","coercive-boolean","cljs.core$macros/coercive-boolean",-450758280,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__9660__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9660__auto__ = gi;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__9660__auto__ = gi;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"size__20375__auto__","size__20375__auto__",1055322739,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9660__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9660__auto__ = bind;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-nth","cljs.core/-nth",504234802,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__20374__auto__","c__20374__auto__",-2030683917,null)),(function (){var x__9660__auto__ = gi;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = do_cmod.call(null,mod_pairs);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-cons","cljs.core/chunk-cons",-250075688,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk","cljs.core/chunk",847936424,null)),(function (){var x__9660__auto__ = gb;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9660__auto__ = giter;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-rest","cljs.core/chunk-rest",-398161143,null)),(function (){var x__9660__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-cons","cljs.core/chunk-cons",-250075688,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk","cljs.core/chunk",847936424,null)),(function (){var x__9660__auto__ = gb;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9660__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9660__auto__ = bind;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null)),(function (){var x__9660__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = do_mod.call(null,mod_pairs);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
}
});})(to_groups,err))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9660__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"iter__20376__auto__","iter__20376__auto__",-1012422619,null)),(function (){var x__9660__auto__ = emit_bind.call(null,to_groups.call(null,seq_exprs));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"iter__20376__auto__","iter__20376__auto__",-1012422619,null)),(function (){var x__9660__auto__ = cljs.core.second.call(null,seq_exprs);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
});

cljs.core$macros.for$.cljs$lang$macro = true;
/**
 * Repeatedly executes body (presumably for side-effects) with
 *   bindings and filtering as provided by "for".  Does not retain
 *   the head of the sequence. Returns nil.
 */
cljs.core$macros.doseq = (function cljs$core$macros$doseq(var_args){
var args__9938__auto__ = [];
var len__9931__auto___20547 = arguments.length;
var i__9932__auto___20548 = (0);
while(true){
if((i__9932__auto___20548 < len__9931__auto___20547)){
args__9938__auto__.push((arguments[i__9932__auto___20548]));

var G__20549 = (i__9932__auto___20548 + (1));
i__9932__auto___20548 = G__20549;
continue;
} else {
}
break;
}

var argseq__9939__auto__ = ((((3) < args__9938__auto__.length))?(new cljs.core.IndexedSeq(args__9938__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.doseq.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9939__auto__);
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
var G__20550__delegate = function (msg){
throw cljs.core.ex_info.call(null,cljs.core.apply.call(null,cljs.core.str,msg),cljs.core.PersistentArrayMap.EMPTY);
};
var G__20550 = function (var_args){
var msg = null;
if (arguments.length > 0) {
var G__20551__i = 0, G__20551__a = new Array(arguments.length -  0);
while (G__20551__i < G__20551__a.length) {G__20551__a[G__20551__i] = arguments[G__20551__i + 0]; ++G__20551__i;}
  msg = new cljs.core.IndexedSeq(G__20551__a,0);
} 
return G__20550__delegate.call(this,msg);};
G__20550.cljs$lang$maxFixedArity = 0;
G__20550.cljs$lang$applyTo = (function (arglist__20552){
var msg = cljs.core.seq(arglist__20552);
return G__20550__delegate(msg);
});
G__20550.cljs$core$IFn$_invoke$arity$variadic = G__20550__delegate;
return G__20550;
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
var recform__$1 = (((k instanceof cljs.core.Keyword))?recform:cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","next","cljs.core/next",-1291438473,null)),(function (){var x__9660__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0))))));
var steppair = cljs$core$macros$step.call(null,recform__$1,cljs.core.nnext.call(null,exprs));
var needrec = steppair.call(null,(0));
var subform = steppair.call(null,(1));
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"let","let",-1282412701))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [needrec,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9660__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = subform;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())))], null);
} else {
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"while","while",963117786))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__9660__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = subform;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(cljs.core.truth_(needrec)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recform__$1], null):null))))], null);
} else {
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"when","when",-576417306))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9660__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__9660__auto__ = subform;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(cljs.core.truth_(needrec)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recform__$1], null):null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = recform__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())))], null);
} else {
if((k instanceof cljs.core.Keyword)){
return err.call(null,"Invalid 'doseq' keyword",k);
} else {
var chunksym = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"chunk__"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"not-native","not-native",-236392494,null)], null));
var countsym = cljs.core.gensym.call(null,"count__");
var isym = cljs.core.gensym.call(null,"i__");
var recform_chunk = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__9660__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = chunksym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = countsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unchecked-inc","cljs.core$macros/unchecked-inc",-1615365330,null)),(function (){var x__9660__auto__ = isym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
var steppair_chunk = cljs$core$macros$step.call(null,recform_chunk,cljs.core.nnext.call(null,exprs));
var subform_chunk = steppair_chunk.call(null,(1));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__9660__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9660__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__9660__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = chunksym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__9660__auto__ = countsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),(function (){var x__9660__auto__ = isym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","coercive-boolean","cljs.core$macros/coercive-boolean",-450758280,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__9660__auto__ = isym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = countsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9660__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9660__auto__ = k;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-nth","cljs.core/-nth",504234802,null)),(function (){var x__9660__auto__ = chunksym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = isym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = subform_chunk;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(cljs.core.truth_(needrec)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recform_chunk], null):null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-let","cljs.core$macros/when-let",-2004472648,null)),(function (){var x__9660__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9660__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__9660__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunked-seq?","cljs.core/chunked-seq?",-712922369,null)),(function (){var x__9660__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9660__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__20542__auto__","c__20542__auto__",-573598644,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-first","cljs.core/chunk-first",-1157877305,null)),(function (){var x__9660__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-rest","cljs.core/chunk-rest",-398161143,null)),(function (){var x__9660__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__20542__auto__","c__20542__auto__",-573598644,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__20542__auto__","c__20542__auto__",-573598644,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9660__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9660__auto__ = k;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null)),(function (){var x__9660__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = subform;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(cljs.core.truth_(needrec)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recform__$1], null):null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
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

cljs.core$macros.doseq.cljs$lang$applyTo = (function (seq20543){
var G__20544 = cljs.core.first.call(null,seq20543);
var seq20543__$1 = cljs.core.next.call(null,seq20543);
var G__20545 = cljs.core.first.call(null,seq20543__$1);
var seq20543__$2 = cljs.core.next.call(null,seq20543__$1);
var G__20546 = cljs.core.first.call(null,seq20543__$2);
var seq20543__$3 = cljs.core.next.call(null,seq20543__$2);
return cljs.core$macros.doseq.cljs$core$IFn$_invoke$arity$variadic(G__20544,G__20545,G__20546,seq20543__$3);
});


cljs.core$macros.doseq.cljs$lang$macro = true;
cljs.core$macros.array = (function cljs$core$macros$array(var_args){
var args__9938__auto__ = [];
var len__9931__auto___20556 = arguments.length;
var i__9932__auto___20557 = (0);
while(true){
if((i__9932__auto___20557 < len__9931__auto___20556)){
args__9938__auto__.push((arguments[i__9932__auto___20557]));

var G__20558 = (i__9932__auto___20557 + (1));
i__9932__auto___20557 = G__20558;
continue;
} else {
}
break;
}

var argseq__9939__auto__ = ((((2) < args__9938__auto__.length))?(new cljs.core.IndexedSeq(args__9938__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.array.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9939__auto__);
});

cljs.core$macros.array.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,rest){
var xs_str = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,",",cljs.core.take.call(null,cljs.core.count.call(null,rest),cljs.core.repeat.call(null,"~{}"))));
return cljs.core.vary_meta.call(null,cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),[cljs.core.str("["),cljs.core.str(xs_str),cljs.core.str("]")].join(''),rest),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"array","array",-440182315,null));
});

cljs.core$macros.array.cljs$lang$maxFixedArity = (2);

cljs.core$macros.array.cljs$lang$applyTo = (function (seq20553){
var G__20554 = cljs.core.first.call(null,seq20553);
var seq20553__$1 = cljs.core.next.call(null,seq20553);
var G__20555 = cljs.core.first.call(null,seq20553__$1);
var seq20553__$2 = cljs.core.next.call(null,seq20553__$1);
return cljs.core$macros.array.cljs$core$IFn$_invoke$arity$variadic(G__20554,G__20555,seq20553__$2);
});


cljs.core$macros.array.cljs$lang$macro = true;
cljs.core$macros.make_array = (function cljs$core$macros$make_array(var_args){
var args20562 = [];
var len__9931__auto___20570 = arguments.length;
var i__9932__auto___20571 = (0);
while(true){
if((i__9932__auto___20571 < len__9931__auto___20570)){
args20562.push((arguments[i__9932__auto___20571]));

var G__20572 = (i__9932__auto___20571 + (1));
i__9932__auto___20571 = G__20572;
continue;
} else {
}
break;
}

var G__20569 = args20562.length;
switch (G__20569) {
case 3:
return cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__9950__auto__ = (new cljs.core.IndexedSeq(args20562.slice((4)),(0),null));
return cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__9950__auto__);

}
});

cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,size){
return cljs.core.vary_meta.call(null,((typeof size === 'number')?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),cljs.core.take.call(null,size,cljs.core.repeat.call(null,null))))):cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Array.","js/Array.",1235645307,null)),(function (){var x__9660__auto__ = size;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"array","array",-440182315,null));
});

cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,type,size){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","make-array","cljs.core/make-array",-1802166799,null)),(function (){var x__9660__auto__ = size;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
});

cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,type,size,more_sizes){
return cljs.core.vary_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9660__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dims__20559__auto__","dims__20559__auto__",519932415,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","list","cljs.core$macros/list",-1408486806,null)),more_sizes)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dimarray__20560__auto__","dimarray__20560__auto__",1891738405,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","make-array","cljs.core/make-array",-1802166799,null)),(function (){var x__9660__auto__ = size;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","dotimes","cljs.core$macros/dotimes",-1407597661,null)),(function (){var x__9660__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__20561__auto__","i__20561__auto__",-881886615,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dimarray__20560__auto__","dimarray__20560__auto__",1891738405,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aset","cljs.core$macros/aset",-693176374,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dimarray__20560__auto__","dimarray__20560__auto__",1891738405,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__20561__auto__","i__20561__auto__",-881886615,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","make-array","cljs.core/make-array",-1802166799,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dims__20559__auto__","dims__20559__auto__",519932415,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dimarray__20560__auto__","dimarray__20560__auto__",1891738405,null))))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"array","array",-440182315,null));
});

cljs.core$macros.make_array.cljs$lang$applyTo = (function (seq20563){
var G__20564 = cljs.core.first.call(null,seq20563);
var seq20563__$1 = cljs.core.next.call(null,seq20563);
var G__20565 = cljs.core.first.call(null,seq20563__$1);
var seq20563__$2 = cljs.core.next.call(null,seq20563__$1);
var G__20566 = cljs.core.first.call(null,seq20563__$2);
var seq20563__$3 = cljs.core.next.call(null,seq20563__$2);
var G__20567 = cljs.core.first.call(null,seq20563__$3);
var seq20563__$4 = cljs.core.next.call(null,seq20563__$3);
return cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$variadic(G__20564,G__20565,G__20566,G__20567,seq20563__$4);
});

cljs.core$macros.make_array.cljs$lang$maxFixedArity = (4);


cljs.core$macros.make_array.cljs$lang$macro = true;
cljs.core$macros.list = (function cljs$core$macros$list(var_args){
var args20575 = [];
var len__9931__auto___20582 = arguments.length;
var i__9932__auto___20583 = (0);
while(true){
if((i__9932__auto___20583 < len__9931__auto___20582)){
args20575.push((arguments[i__9932__auto___20583]));

var G__20584 = (i__9932__auto___20583 + (1));
i__9932__auto___20583 = G__20584;
continue;
} else {
}
break;
}

var G__20581 = args20575.length;
switch (G__20581) {
case 2:
return cljs.core$macros.list.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__9950__auto__ = (new cljs.core.IndexedSeq(args20575.slice((3)),(0),null));
return cljs.core$macros.list.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9950__auto__);

}
});

cljs.core$macros.list.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.list(new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null),new cljs.core.Symbol("cljs.core","List","cljs.core/List",1708954352,null));
});

cljs.core$macros.list.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,xs){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"constant","constant",-379609303),new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.analyze.call(null,_AMPERSAND_env,x)))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-conj","cljs.core/-conj",2040622670,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","list","cljs.core$macros/list",-1408486806,null)),xs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9660__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__20574__auto__","x__20574__auto__",885052752,null)),(function (){var x__9660__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-conj","cljs.core/-conj",2040622670,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","list","cljs.core$macros/list",-1408486806,null)),xs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__20574__auto__","x__20574__auto__",885052752,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
}
});

cljs.core$macros.list.cljs$lang$applyTo = (function (seq20576){
var G__20577 = cljs.core.first.call(null,seq20576);
var seq20576__$1 = cljs.core.next.call(null,seq20576);
var G__20578 = cljs.core.first.call(null,seq20576__$1);
var seq20576__$2 = cljs.core.next.call(null,seq20576__$1);
var G__20579 = cljs.core.first.call(null,seq20576__$2);
var seq20576__$3 = cljs.core.next.call(null,seq20576__$2);
return cljs.core$macros.list.cljs$core$IFn$_invoke$arity$variadic(G__20577,G__20578,G__20579,seq20576__$3);
});

cljs.core$macros.list.cljs$lang$maxFixedArity = (3);


cljs.core$macros.list.cljs$lang$macro = true;
cljs.core$macros.vector = (function cljs$core$macros$vector(var_args){
var args20586 = [];
var len__9931__auto___20592 = arguments.length;
var i__9932__auto___20593 = (0);
while(true){
if((i__9932__auto___20593 < len__9931__auto___20592)){
args20586.push((arguments[i__9932__auto___20593]));

var G__20594 = (i__9932__auto___20593 + (1));
i__9932__auto___20593 = G__20594;
continue;
} else {
}
break;
}

var G__20591 = args20586.length;
switch (G__20591) {
case 2:
return cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__9950__auto__ = (new cljs.core.IndexedSeq(args20586.slice((2)),(0),null));
return cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9950__auto__);

}
});

cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.list(new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null),new cljs.core.Symbol("cljs.core","PersistentVector","cljs.core/PersistentVector",-1211028272,null));
});

cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
var cnt = cljs.core.count.call(null,xs);
if((cnt < (32))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentVector.","cljs.core/PersistentVector.",-1074647876,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__9660__auto__ = cnt;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(5)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-EMPTY-NODE",".-EMPTY-NODE",-1333332641,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentVector","cljs.core/PersistentVector",-1211028272,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),xs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
} else {
return cljs.core.vary_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".fromArray",".fromArray",1053499311,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentVector","cljs.core/PersistentVector",-1211028272,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),xs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true)))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","PersistentVector","cljs.core/PersistentVector",-1211028272,null));
}
});

cljs.core$macros.vector.cljs$lang$applyTo = (function (seq20587){
var G__20588 = cljs.core.first.call(null,seq20587);
var seq20587__$1 = cljs.core.next.call(null,seq20587);
var G__20589 = cljs.core.first.call(null,seq20587__$1);
var seq20587__$2 = cljs.core.next.call(null,seq20587__$1);
return cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$variadic(G__20588,G__20589,seq20587__$2);
});

cljs.core$macros.vector.cljs$lang$maxFixedArity = (2);


cljs.core$macros.vector.cljs$lang$macro = true;
cljs.core$macros.array_map = (function cljs$core$macros$array_map(var_args){
var args20598 = [];
var len__9931__auto___20604 = arguments.length;
var i__9932__auto___20605 = (0);
while(true){
if((i__9932__auto___20605 < len__9931__auto___20604)){
args20598.push((arguments[i__9932__auto___20605]));

var G__20606 = (i__9932__auto___20605 + (1));
i__9932__auto___20605 = G__20606;
continue;
} else {
}
break;
}

var G__20603 = args20598.length;
switch (G__20603) {
case 2:
return cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__9950__auto__ = (new cljs.core.IndexedSeq(args20598.slice((2)),(0),null));
return cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9950__auto__);

}
});

cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.list(new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null),new cljs.core.Symbol("cljs.core","PersistentArrayMap","cljs.core/PersistentArrayMap",1025194468,null));
});

cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,kvs){
var keys = cljs.core.map.call(null,cljs.core.first,cljs.core.partition.call(null,(2),kvs));
if((cljs.core.every_QMARK_.call(null,((function (keys){
return (function (p1__20596_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__20596_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
});})(keys))
,cljs.core.map.call(null,((function (keys){
return (function (p1__20597_SHARP_){
return cljs.analyzer.analyze.call(null,_AMPERSAND_env,p1__20597_SHARP_);
});})(keys))
,keys))) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,keys)),cljs.core.count.call(null,keys)))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentArrayMap.","cljs.core/PersistentArrayMap.",-471979341,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__9660__auto__ = (cljs.core.count.call(null,kvs) / (2));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),kvs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".fromArray",".fromArray",1053499311,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentArrayMap","cljs.core/PersistentArrayMap",1025194468,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),kvs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
}
});

cljs.core$macros.array_map.cljs$lang$applyTo = (function (seq20599){
var G__20600 = cljs.core.first.call(null,seq20599);
var seq20599__$1 = cljs.core.next.call(null,seq20599);
var G__20601 = cljs.core.first.call(null,seq20599__$1);
var seq20599__$2 = cljs.core.next.call(null,seq20599__$1);
return cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$variadic(G__20600,G__20601,seq20599__$2);
});

cljs.core$macros.array_map.cljs$lang$maxFixedArity = (2);


cljs.core$macros.array_map.cljs$lang$macro = true;
cljs.core$macros.hash_map = (function cljs$core$macros$hash_map(var_args){
var args20608 = [];
var len__9931__auto___20614 = arguments.length;
var i__9932__auto___20615 = (0);
while(true){
if((i__9932__auto___20615 < len__9931__auto___20614)){
args20608.push((arguments[i__9932__auto___20615]));

var G__20616 = (i__9932__auto___20615 + (1));
i__9932__auto___20615 = G__20616;
continue;
} else {
}
break;
}

var G__20613 = args20608.length;
switch (G__20613) {
case 2:
return cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__9950__auto__ = (new cljs.core.IndexedSeq(args20608.slice((2)),(0),null));
return cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9950__auto__);

}
});

cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentHashMap","cljs.core/PersistentHashMap",-454120575,null)))));
});

cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,kvs){
var pairs = cljs.core.partition.call(null,(2),kvs);
var ks = cljs.core.map.call(null,cljs.core.first,pairs);
var vs = cljs.core.map.call(null,cljs.core.second,pairs);
return cljs.core.vary_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".fromArrays",".fromArrays",1110244209,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentHashMap","cljs.core/PersistentHashMap",-454120575,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),ks)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),vs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})()))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","PersistentHashMap","cljs.core/PersistentHashMap",-454120575,null));
});

cljs.core$macros.hash_map.cljs$lang$applyTo = (function (seq20609){
var G__20610 = cljs.core.first.call(null,seq20609);
var seq20609__$1 = cljs.core.next.call(null,seq20609);
var G__20611 = cljs.core.first.call(null,seq20609__$1);
var seq20609__$2 = cljs.core.next.call(null,seq20609__$1);
return cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$variadic(G__20610,G__20611,seq20609__$2);
});

cljs.core$macros.hash_map.cljs$lang$maxFixedArity = (2);


cljs.core$macros.hash_map.cljs$lang$macro = true;
cljs.core$macros.hash_set = (function cljs$core$macros$hash_set(var_args){
var args20620 = [];
var len__9931__auto___20626 = arguments.length;
var i__9932__auto___20627 = (0);
while(true){
if((i__9932__auto___20627 < len__9931__auto___20626)){
args20620.push((arguments[i__9932__auto___20627]));

var G__20628 = (i__9932__auto___20627 + (1));
i__9932__auto___20627 = G__20628;
continue;
} else {
}
break;
}

var G__20625 = args20620.length;
switch (G__20625) {
case 2:
return cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__9950__auto__ = (new cljs.core.IndexedSeq(args20620.slice((2)),(0),null));
return cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9950__auto__);

}
});

cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentHashSet","cljs.core/PersistentHashSet",-967232330,null)))));
});

cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
if(((cljs.core.count.call(null,xs) <= (8))) && (cljs.core.every_QMARK_.call(null,(function (p1__20618_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__20618_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),cljs.core.map.call(null,(function (p1__20619_SHARP_){
return cljs.analyzer.analyze.call(null,_AMPERSAND_env,p1__20619_SHARP_);
}),xs))) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,xs)),cljs.core.count.call(null,xs)))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentHashSet.","cljs.core/PersistentHashSet.",300313251,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentArrayMap.","cljs.core/PersistentArrayMap.",-471979341,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__9660__auto__ = cljs.core.count.call(null,xs);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),cljs.core.interleave.call(null,xs,cljs.core.repeat.call(null,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
} else {
return cljs.core.vary_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".fromArray",".fromArray",1053499311,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentHashSet","cljs.core/PersistentHashSet",-967232330,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),xs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true)))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","PersistentHashSet","cljs.core/PersistentHashSet",-967232330,null));
}
});

cljs.core$macros.hash_set.cljs$lang$applyTo = (function (seq20621){
var G__20622 = cljs.core.first.call(null,seq20621);
var seq20621__$1 = cljs.core.next.call(null,seq20621);
var G__20623 = cljs.core.first.call(null,seq20621__$1);
var seq20621__$2 = cljs.core.next.call(null,seq20621__$1);
return cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$variadic(G__20622,G__20623,seq20621__$2);
});

cljs.core$macros.hash_set.cljs$lang$maxFixedArity = (2);


cljs.core$macros.hash_set.cljs$lang$macro = true;
cljs.core$macros.js_obj_STAR_ = (function cljs$core$macros$js_obj_STAR_(kvs){
var kvs_str = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,",",cljs.core.take.call(null,cljs.core.count.call(null,kvs),cljs.core.repeat.call(null,"~{}:~{}"))));
return cljs.core.vary_meta.call(null,cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),[cljs.core.str("{"),cljs.core.str(kvs_str),cljs.core.str("}")].join(''),cljs.core.apply.call(null,cljs.core.concat,kvs)),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"object","object",-1179821820,null));
});
cljs.core$macros.js_obj = (function cljs$core$macros$js_obj(var_args){
var args__9938__auto__ = [];
var len__9931__auto___20645 = arguments.length;
var i__9932__auto___20646 = (0);
while(true){
if((i__9932__auto___20646 < len__9931__auto___20645)){
args__9938__auto__.push((arguments[i__9932__auto___20646]));

var G__20647 = (i__9932__auto___20646 + (1));
i__9932__auto___20646 = G__20647;
continue;
} else {
}
break;
}

var argseq__9939__auto__ = ((((2) < args__9938__auto__.length))?(new cljs.core.IndexedSeq(args__9938__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.js_obj.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9939__auto__);
});

cljs.core$macros.js_obj.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,rest){
var sym_or_str_QMARK_ = (function (x){
return ((x instanceof cljs.core.Symbol)) || (typeof x === 'string');
});
var filter_on_keys = ((function (sym_or_str_QMARK_){
return (function (f,coll){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,((function (sym_or_str_QMARK_){
return (function (p__20633){
var vec__20634 = p__20633;
var k = cljs.core.nth.call(null,vec__20634,(0),null);
var _ = cljs.core.nth.call(null,vec__20634,(1),null);
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9660__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.apply.call(null,cljs.core.concat,clojure.set.map_invert.call(null,expr__GT_local)),(function (){var x__9660__auto__ = obj;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core$macros.js_obj_STAR_.call(null,filter_on_keys.call(null,cljs.core.string_QMARK_,kvs));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),cljs.core.map.call(null,((function (sym_or_str_QMARK_,filter_on_keys,kvs,sym_pairs,expr__GT_local,obj){
return (function (p__20637){
var vec__20638 = p__20637;
var k = cljs.core.nth.call(null,vec__20638,(0),null);
var v = cljs.core.nth.call(null,vec__20638,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aset","cljs.core$macros/aset",-693176374,null)),(function (){var x__9660__auto__ = obj;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = k;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
});})(sym_or_str_QMARK_,filter_on_keys,kvs,sym_pairs,expr__GT_local,obj))
,sym_pairs),cljs.core.map.call(null,((function (sym_or_str_QMARK_,filter_on_keys,kvs,sym_pairs,expr__GT_local,obj){
return (function (p__20641){
var vec__20642 = p__20641;
var k = cljs.core.nth.call(null,vec__20642,(0),null);
var v = cljs.core.nth.call(null,vec__20642,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aset","cljs.core$macros/aset",-693176374,null)),(function (){var x__9660__auto__ = obj;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.get.call(null,kvs,k);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
});})(sym_or_str_QMARK_,filter_on_keys,kvs,sym_pairs,expr__GT_local,obj))
,expr__GT_local),(function (){var x__9660__auto__ = obj;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
}
});

cljs.core$macros.js_obj.cljs$lang$maxFixedArity = (2);

cljs.core$macros.js_obj.cljs$lang$applyTo = (function (seq20630){
var G__20631 = cljs.core.first.call(null,seq20630);
var seq20630__$1 = cljs.core.next.call(null,seq20630);
var G__20632 = cljs.core.first.call(null,seq20630__$1);
var seq20630__$2 = cljs.core.next.call(null,seq20630__$1);
return cljs.core$macros.js_obj.cljs$core$IFn$_invoke$arity$variadic(G__20631,G__20632,seq20630__$2);
});


cljs.core$macros.js_obj.cljs$lang$macro = true;
cljs.core$macros.alength = (function cljs$core$macros$alength(_AMPERSAND_form,_AMPERSAND_env,a){
return cljs.core.vary_meta.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9660__auto__ = a;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9660__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"a__20648__auto__","a__20648__auto__",-579994275,null)),(function (){var x__9660__auto__ = a;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = ret;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","aclone","cljs.core/aclone",-758078968,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"a__20648__auto__","a__20648__auto__",-579994275,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__9660__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9660__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__9660__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"a__20648__auto__","a__20648__auto__",-579994275,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aset","cljs.core$macros/aset",-693176374,null)),(function (){var x__9660__auto__ = ret;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),(function (){var x__9660__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = ret;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
});

cljs.core$macros.amap.cljs$lang$macro = true;
/**
 * Reduces an expression across an array a, using an index named idx,
 *   and return value named ret, initialized to init, setting ret to the
 *   evaluation of expr at each step, returning ret.
 */
cljs.core$macros.areduce = (function cljs$core$macros$areduce(_AMPERSAND_form,_AMPERSAND_env,a,idx,ret,init,expr){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9660__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"a__20649__auto__","a__20649__auto__",890213423,null)),(function (){var x__9660__auto__ = a;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__9660__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9660__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),(function (){var x__9660__auto__ = ret;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = init;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__9660__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"a__20649__auto__","a__20649__auto__",890213423,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),(function (){var x__9660__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = ret;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
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
var args__9938__auto__ = [];
var len__9931__auto___20655 = arguments.length;
var i__9932__auto___20656 = (0);
while(true){
if((i__9932__auto___20656 < len__9931__auto___20655)){
args__9938__auto__.push((arguments[i__9932__auto___20656]));

var G__20657 = (i__9932__auto___20656 + (1));
i__9932__auto___20656 = G__20657;
continue;
} else {
}
break;
}

var argseq__9939__auto__ = ((((3) < args__9938__auto__.length))?(new cljs.core.IndexedSeq(args__9938__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.dotimes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9939__auto__);
});

cljs.core$macros.dotimes.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
var i = cljs.core.first.call(null,bindings);
var n = cljs.core.second.call(null,bindings);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9660__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"n__20650__auto__","n__20650__auto__",-420733025,null)),(function (){var x__9660__auto__ = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__9660__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9660__auto__ = i;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__9660__auto__ = i;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"n__20650__auto__","n__20650__auto__",-420733025,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),body,(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),(function (){var x__9660__auto__ = i;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
});

cljs.core$macros.dotimes.cljs$lang$maxFixedArity = (3);

cljs.core$macros.dotimes.cljs$lang$applyTo = (function (seq20651){
var G__20652 = cljs.core.first.call(null,seq20651);
var seq20651__$1 = cljs.core.next.call(null,seq20651);
var G__20653 = cljs.core.first.call(null,seq20651__$1);
var seq20651__$2 = cljs.core.next.call(null,seq20651__$1);
var G__20654 = cljs.core.first.call(null,seq20651__$2);
var seq20651__$3 = cljs.core.next.call(null,seq20651__$2);
return cljs.core$macros.dotimes.cljs$core$IFn$_invoke$arity$variadic(G__20652,G__20653,G__20654,seq20651__$3);
});


cljs.core$macros.dotimes.cljs$lang$macro = true;
/**
 * Throws an exception if the given option map contains keys not listed
 *   as valid, else returns nil.
 */
cljs.core$macros.check_valid_options = (function cljs$core$macros$check_valid_options(var_args){
var args__9938__auto__ = [];
var len__9931__auto___20661 = arguments.length;
var i__9932__auto___20662 = (0);
while(true){
if((i__9932__auto___20662 < len__9931__auto___20661)){
args__9938__auto__.push((arguments[i__9932__auto___20662]));

var G__20663 = (i__9932__auto___20662 + (1));
i__9932__auto___20662 = G__20663;
continue;
} else {
}
break;
}

var argseq__9939__auto__ = ((((1) < args__9938__auto__.length))?(new cljs.core.IndexedSeq(args__9938__auto__.slice((1)),(0),null)):null);
return cljs.core$macros.check_valid_options.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9939__auto__);
});

cljs.core$macros.check_valid_options.cljs$core$IFn$_invoke$arity$variadic = (function (options,valid_keys){
if(cljs.core.seq.call(null,cljs.core.apply.call(null,cljs.core.disj,cljs.core.apply.call(null,cljs.core.hash_set,cljs.core.keys.call(null,options)),valid_keys))){
throw cljs.core.apply.call(null,cljs.core.str,"Only these options are valid: ",cljs.core.first.call(null,valid_keys),cljs.core.map.call(null,(function (p1__20658_SHARP_){
return [cljs.core.str(", "),cljs.core.str(p1__20658_SHARP_)].join('');
}),cljs.core.rest.call(null,valid_keys)));
} else {
return null;
}
});

cljs.core$macros.check_valid_options.cljs$lang$maxFixedArity = (1);

cljs.core$macros.check_valid_options.cljs$lang$applyTo = (function (seq20659){
var G__20660 = cljs.core.first.call(null,seq20659);
var seq20659__$1 = cljs.core.next.call(null,seq20659);
return cljs.core$macros.check_valid_options.cljs$core$IFn$_invoke$arity$variadic(G__20660,seq20659__$1);
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
var args__9938__auto__ = [];
var len__9931__auto___20673 = arguments.length;
var i__9932__auto___20674 = (0);
while(true){
if((i__9932__auto___20674 < len__9931__auto___20673)){
args__9938__auto__.push((arguments[i__9932__auto___20674]));

var G__20675 = (i__9932__auto___20674 + (1));
i__9932__auto___20674 = G__20675;
continue;
} else {
}
break;
}

var argseq__9939__auto__ = ((((3) < args__9938__auto__.length))?(new cljs.core.IndexedSeq(args__9938__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.defmulti.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9939__auto__);
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

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defonce","cljs.core$macros/defonce",-1096231613,null)),(function (){var x__9660__auto__ = cljs.core.with_meta.call(null,mm_name,m__$2);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9660__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"method-table__20664__auto__","method-table__20664__auto__",-394839564,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null)),(function (){var x__9660__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"prefer-table__20665__auto__","prefer-table__20665__auto__",1955626522,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null)),(function (){var x__9660__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"method-cache__20666__auto__","method-cache__20666__auto__",-2013125625,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null)),(function (){var x__9660__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cached-hierarchy__20667__auto__","cached-hierarchy__20667__auto__",1416667149,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null)),(function (){var x__9660__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"hierarchy__20668__auto__","hierarchy__20668__auto__",1643872587,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null)),(function (){var x__9660__auto__ = options__$4;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","get-global-hierarchy","cljs.core/get-global-hierarchy",48052871,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","MultiFn.","cljs.core/MultiFn.",1073941573,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","symbol","cljs.core/symbol",195265748,null)),(function (){var x__9660__auto__ = mm_ns;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.name.call(null,mm_name);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = dispatch_fn;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = default$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"hierarchy__20668__auto__","hierarchy__20668__auto__",1643872587,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"method-table__20664__auto__","method-table__20664__auto__",-394839564,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"prefer-table__20665__auto__","prefer-table__20665__auto__",1955626522,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"method-cache__20666__auto__","method-cache__20666__auto__",-2013125625,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cached-hierarchy__20667__auto__","cached-hierarchy__20667__auto__",1416667149,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
});

cljs.core$macros.defmulti.cljs$lang$maxFixedArity = (3);

cljs.core$macros.defmulti.cljs$lang$applyTo = (function (seq20669){
var G__20670 = cljs.core.first.call(null,seq20669);
var seq20669__$1 = cljs.core.next.call(null,seq20669);
var G__20671 = cljs.core.first.call(null,seq20669__$1);
var seq20669__$2 = cljs.core.next.call(null,seq20669__$1);
var G__20672 = cljs.core.first.call(null,seq20669__$2);
var seq20669__$3 = cljs.core.next.call(null,seq20669__$2);
return cljs.core$macros.defmulti.cljs$core$IFn$_invoke$arity$variadic(G__20670,G__20671,G__20672,seq20669__$3);
});


cljs.core$macros.defmulti.cljs$lang$macro = true;
/**
 * Creates and installs a new method of multimethod associated with dispatch-value. 
 */
cljs.core$macros.defmethod = (function cljs$core$macros$defmethod(var_args){
var args__9938__auto__ = [];
var len__9931__auto___20681 = arguments.length;
var i__9932__auto___20682 = (0);
while(true){
if((i__9932__auto___20682 < len__9931__auto___20681)){
args__9938__auto__.push((arguments[i__9932__auto___20682]));

var G__20683 = (i__9932__auto___20682 + (1));
i__9932__auto___20682 = G__20683;
continue;
} else {
}
break;
}

var argseq__9939__auto__ = ((((4) < args__9938__auto__.length))?(new cljs.core.IndexedSeq(args__9938__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.defmethod.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__9939__auto__);
});

cljs.core$macros.defmethod.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,multifn,dispatch_val,fn_tail){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-add-method","cljs.core/-add-method",571092113,null)),(function (){var x__9660__auto__ = cljs.core.with_meta.call(null,multifn,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","MultiFn","cljs.core/MultiFn",1487419554,null)], null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = dispatch_val;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),fn_tail)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
});

cljs.core$macros.defmethod.cljs$lang$maxFixedArity = (4);

cljs.core$macros.defmethod.cljs$lang$applyTo = (function (seq20676){
var G__20677 = cljs.core.first.call(null,seq20676);
var seq20676__$1 = cljs.core.next.call(null,seq20676);
var G__20678 = cljs.core.first.call(null,seq20676__$1);
var seq20676__$2 = cljs.core.next.call(null,seq20676__$1);
var G__20679 = cljs.core.first.call(null,seq20676__$2);
var seq20676__$3 = cljs.core.next.call(null,seq20676__$2);
var G__20680 = cljs.core.first.call(null,seq20676__$3);
var seq20676__$4 = cljs.core.next.call(null,seq20676__$3);
return cljs.core$macros.defmethod.cljs$core$IFn$_invoke$arity$variadic(G__20677,G__20678,G__20679,G__20680,seq20676__$4);
});


cljs.core$macros.defmethod.cljs$lang$macro = true;
/**
 * Evaluates expr and prints the time it took. Returns the value of expr.
 */
cljs.core$macros.time = (function cljs$core$macros$time(_AMPERSAND_form,_AMPERSAND_env,expr){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9660__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"start__20684__auto__","start__20684__auto__",2063554663,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","system-time","cljs.core/system-time",1562011930,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ret__20685__auto__","ret__20685__auto__",-1175459513,null)),(function (){var x__9660__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","prn","cljs.core/prn",1725204552,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"Elapsed time: "),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".toFixed",".toFixed",-895046938,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","system-time","cljs.core/system-time",1562011930,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"start__20684__auto__","start__20684__auto__",2063554663,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(6)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY," msecs"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ret__20685__auto__","ret__20685__auto__",-1175459513,null)))));
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
var args__9938__auto__ = [];
var len__9931__auto___20700 = arguments.length;
var i__9932__auto___20701 = (0);
while(true){
if((i__9932__auto___20701 < len__9931__auto___20700)){
args__9938__auto__.push((arguments[i__9932__auto___20701]));

var G__20702 = (i__9932__auto___20701 + (1));
i__9932__auto___20701 = G__20702;
continue;
} else {
}
break;
}

var argseq__9939__auto__ = ((((5) < args__9938__auto__.length))?(new cljs.core.IndexedSeq(args__9938__auto__.slice((5)),(0),null)):null);
return cljs.core$macros.simple_benchmark.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__9939__auto__);
});

cljs.core$macros.simple_benchmark.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,expr,iterations,p__20697){
var map__20698 = p__20697;
var map__20698__$1 = ((((!((map__20698 == null)))?((((map__20698.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20698.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20698):map__20698);
var print_fn = cljs.core.get.call(null,map__20698__$1,new cljs.core.Keyword(null,"print-fn","print-fn",-1720960489),new cljs.core.Symbol(null,"println","println",-733595439,null));
var bs_str = cljs.core.pr_str.call(null,bindings);
var expr_str = cljs.core.pr_str.call(null,expr);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9660__auto__ = bindings;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9660__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"start__20686__auto__","start__20686__auto__",59978051,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".getTime",".getTime",-1048557777,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Date.","js/Date.",384205255,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ret__20687__auto__","ret__20687__auto__",-26758451,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","dotimes","cljs.core$macros/dotimes",-1407597661,null)),(function (){var x__9660__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"___20688__auto__","___20688__auto__",-1864190312,null)),(function (){var x__9660__auto__ = iterations;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"end__20689__auto__","end__20689__auto__",-1717799092,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".getTime",".getTime",-1048557777,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Date.","js/Date.",384205255,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"elapsed__20690__auto__","elapsed__20690__auto__",-117321408,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"end__20689__auto__","end__20689__auto__",-1717799092,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"start__20686__auto__","start__20686__auto__",59978051,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9660__auto__ = print_fn;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","str","cljs.core$macros/str",-2019499702,null)),(function (){var x__9660__auto__ = bs_str;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,", "),(function (){var x__9660__auto__ = expr_str;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,", "),(function (){var x__9660__auto__ = iterations;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY," runs, "),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"elapsed__20690__auto__","elapsed__20690__auto__",-117321408,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY," msecs"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
});

cljs.core$macros.simple_benchmark.cljs$lang$maxFixedArity = (5);

cljs.core$macros.simple_benchmark.cljs$lang$applyTo = (function (seq20691){
var G__20692 = cljs.core.first.call(null,seq20691);
var seq20691__$1 = cljs.core.next.call(null,seq20691);
var G__20693 = cljs.core.first.call(null,seq20691__$1);
var seq20691__$2 = cljs.core.next.call(null,seq20691__$1);
var G__20694 = cljs.core.first.call(null,seq20691__$2);
var seq20691__$3 = cljs.core.next.call(null,seq20691__$2);
var G__20695 = cljs.core.first.call(null,seq20691__$3);
var seq20691__$4 = cljs.core.next.call(null,seq20691__$3);
var G__20696 = cljs.core.first.call(null,seq20691__$4);
var seq20691__$5 = cljs.core.next.call(null,seq20691__$4);
return cljs.core$macros.simple_benchmark.cljs$core$IFn$_invoke$arity$variadic(G__20692,G__20693,G__20694,G__20695,G__20696,seq20691__$5);
});


cljs.core$macros.simple_benchmark.cljs$lang$macro = true;
cljs.core$macros.cs = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.gensym,cljs.core.str,cljs.core.char$),cljs.core.range.call(null,(97),(118))));
cljs.core$macros.gen_apply_to_helper = (function cljs$core$macros$gen_apply_to_helper(var_args){
var args20703 = [];
var len__9931__auto___20706 = arguments.length;
var i__9932__auto___20707 = (0);
while(true){
if((i__9932__auto___20707 < len__9931__auto___20706)){
args20703.push((arguments[i__9932__auto___20707]));

var G__20708 = (i__9932__auto___20707 + (1));
i__9932__auto___20707 = G__20708;
continue;
} else {
}
break;
}

var G__20705 = args20703.length;
switch (G__20705) {
case 0:
return cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20703.length)].join('')));

}
});

cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core$macros.gen_apply_to_helper.call(null,(1));
});

cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$1 = (function (n){
var prop = cljs.core.symbol.call(null,[cljs.core.str("-cljs$core$IFn$_invoke$arity$"),cljs.core.str(n)].join(''));
var f = cljs.core.symbol.call(null,[cljs.core.str("cljs$core$IFn$_invoke$arity$"),cljs.core.str(n)].join(''));
if((n <= (20))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9660__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9660__auto__ = cljs.core$macros.cs.call(null,(n - (1)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-first","cljs.core/-first",545297391,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-rest","cljs.core/-rest",-1829241664,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","==","cljs.core$macros/==",-818551413,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argc","argc",187692008,null)),(function (){var x__9660__auto__ = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"f","f",43394975,null)),(function (){var x__9660__auto__ = prop;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"f","f",43394975,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9660__auto__ = f;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),cljs.core.take.call(null,n,cljs.core$macros.cs))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"f","f",43394975,null)),cljs.core.take.call(null,n,cljs.core$macros.cs))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core$macros.gen_apply_to_helper.call(null,(n + (1)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"Only up to 20 arguments supported on functions"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
}
});

cljs.core$macros.gen_apply_to_helper.cljs$lang$maxFixedArity = 1;

cljs.core$macros.gen_apply_to = (function cljs$core$macros$gen_apply_to(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"*unchecked-if*","*unchecked-if*",1542408350,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"apply-to","apply-to",-1858571928,null)),(function (){var x__9660__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"f","f",43394975,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argc","argc",187692008,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9660__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","zero?","cljs.core$macros/zero?",-65998367,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argc","argc",187692008,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"f","f",43394975,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core$macros.gen_apply_to_helper.call(null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"*unchecked-if*","*unchecked-if*",1542408350,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
});

cljs.core$macros.gen_apply_to.cljs$lang$macro = true;
/**
 * Evaluates exprs in a context in which *print-fn* is bound to .append
 *   on a fresh StringBuffer.  Returns the string created by any nested
 *   printing calls.
 */
cljs.core$macros.with_out_str = (function cljs$core$macros$with_out_str(var_args){
var args__9938__auto__ = [];
var len__9931__auto___20715 = arguments.length;
var i__9932__auto___20716 = (0);
while(true){
if((i__9932__auto___20716 < len__9931__auto___20715)){
args__9938__auto__.push((arguments[i__9932__auto___20716]));

var G__20717 = (i__9932__auto___20716 + (1));
i__9932__auto___20716 = G__20717;
continue;
} else {
}
break;
}

var argseq__9939__auto__ = ((((2) < args__9938__auto__.length))?(new cljs.core.IndexedSeq(args__9938__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.with_out_str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9939__auto__);
});

cljs.core$macros.with_out_str.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9660__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"sb__20710__auto__","sb__20710__auto__",690048231,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","goog.string.StringBuffer.","js/goog.string.StringBuffer.",-1043451650,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","binding","cljs.core$macros/binding",1855847304,null)),(function (){var x__9660__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","*print-newline*","cljs.core/*print-newline*",6231625,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","*print-fn*","cljs.core/*print-fn*",1342365176,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9660__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__20711__auto__","x__20711__auto__",1940005372,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".append",".append",1595439852,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"sb__20710__auto__","sb__20710__auto__",690048231,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__20711__auto__","x__20711__auto__",1940005372,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"sb__20710__auto__","sb__20710__auto__",690048231,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
});

cljs.core$macros.with_out_str.cljs$lang$maxFixedArity = (2);

cljs.core$macros.with_out_str.cljs$lang$applyTo = (function (seq20712){
var G__20713 = cljs.core.first.call(null,seq20712);
var seq20712__$1 = cljs.core.next.call(null,seq20712);
var G__20714 = cljs.core.first.call(null,seq20712__$1);
var seq20712__$2 = cljs.core.next.call(null,seq20712__$1);
return cljs.core$macros.with_out_str.cljs$core$IFn$_invoke$arity$variadic(G__20713,G__20714,seq20712__$2);
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
var args__9938__auto__ = [];
var len__9931__auto___20722 = arguments.length;
var i__9932__auto___20723 = (0);
while(true){
if((i__9932__auto___20723 < len__9931__auto___20722)){
args__9938__auto__.push((arguments[i__9932__auto___20723]));

var G__20724 = (i__9932__auto___20723 + (1));
i__9932__auto___20723 = G__20724;
continue;
} else {
}
break;
}

var argseq__9939__auto__ = ((((2) < args__9938__auto__.length))?(new cljs.core.IndexedSeq(args__9938__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.lazy_cat.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9939__auto__);
});

cljs.core$macros.lazy_cat.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,colls){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null)),cljs.core.map.call(null,(function (p1__20718_SHARP_){
return cljs.core._conj.call(null,(function (){var x__9660__auto__ = p1__20718_SHARP_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),new cljs.core.Symbol("cljs.core$macros","lazy-seq","cljs.core$macros/lazy-seq",806482650,null));
}),colls))));
});

cljs.core$macros.lazy_cat.cljs$lang$maxFixedArity = (2);

cljs.core$macros.lazy_cat.cljs$lang$applyTo = (function (seq20719){
var G__20720 = cljs.core.first.call(null,seq20719);
var seq20719__$1 = cljs.core.next.call(null,seq20719);
var G__20721 = cljs.core.first.call(null,seq20719__$1);
var seq20719__$2 = cljs.core.next.call(null,seq20719__$1);
return cljs.core$macros.lazy_cat.cljs$core$IFn$_invoke$arity$variadic(G__20720,G__20721,seq20719__$2);
});


cljs.core$macros.lazy_cat.cljs$lang$macro = true;
cljs.core$macros.js_str = (function cljs$core$macros$js_str(_AMPERSAND_form,_AMPERSAND_env,s){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9660__auto__ = s;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),"''+~{}"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.js_str.cljs$lang$macro = true;
cljs.core$macros.es6_iterable = (function cljs$core$macros$es6_iterable(_AMPERSAND_form,_AMPERSAND_env,ty){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aset","cljs.core$macros/aset",-693176374,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-prototype",".-prototype",-1562038608,null)),(function (){var x__9660__auto__ = ty;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","ITER_SYMBOL","cljs.core/ITER_SYMBOL",-2091399233,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9660__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__20725__auto__","this__20725__auto__",61640748,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","es6-iterator","cljs.core/es6-iterator",856007913,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__20725__auto__","this__20725__auto__",61640748,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
});

cljs.core$macros.es6_iterable.cljs$lang$macro = true;
/**
 * Returns a map of the intern mappings for the namespace.
 */
cljs.core$macros.ns_interns = (function cljs$core$macros$ns_interns(_AMPERSAND_form,_AMPERSAND_env,p__20726){
var vec__20738 = p__20726;
var quote = cljs.core.nth.call(null,vec__20738,(0),null);
var ns = cljs.core.nth.call(null,vec__20738,(1),null);
if((cljs.core._EQ_.call(null,quote,new cljs.core.Symbol(null,"quote","quote",1377916282,null))) && ((ns instanceof cljs.core.Symbol))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Argument to ns-interns must be a quoted symbol"),cljs.core.str("\n"),cljs.core.str("(core/and (= quote (quote quote)) (core/symbol? ns))")].join('')));
}

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","into","cljs.core/into",1879938733,null)),(function (){var x__9660__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,((function (vec__20738,quote,ns){
return (function (p__20745){
var vec__20746 = p__20745;
var sym = cljs.core.nth.call(null,vec__20746,(0),null);
var _ = cljs.core.nth.call(null,vec__20746,(1),null);
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","symbol","cljs.core/symbol",195265748,null)),(function (){var x__9660__auto__ = cljs.core.name.call(null,sym);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"var","var",870848730,null)),(function (){var x__9660__auto__ = cljs.core.symbol.call(null,cljs.core.name.call(null,ns),cljs.core.name.call(null,sym));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})()))));
});})(vec__20738,quote,ns))
,cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns,new cljs.core.Keyword(null,"defs","defs",1398449717)], null)))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
});

cljs.core$macros.ns_interns.cljs$lang$macro = true;
/**
 * Removes the mappings for the symbol from the namespace.
 */
cljs.core$macros.ns_unmap = (function cljs$core$macros$ns_unmap(_AMPERSAND_form,_AMPERSAND_env,p__20749,p__20750){
var vec__20757 = p__20749;
var quote0 = cljs.core.nth.call(null,vec__20757,(0),null);
var ns = cljs.core.nth.call(null,vec__20757,(1),null);
var vec__20760 = p__20750;
var quote1 = cljs.core.nth.call(null,vec__20760,(0),null);
var sym = cljs.core.nth.call(null,vec__20760,(1),null);
if((cljs.core._EQ_.call(null,quote0,new cljs.core.Symbol(null,"quote","quote",1377916282,null))) && ((ns instanceof cljs.core.Symbol)) && (cljs.core._EQ_.call(null,quote1,new cljs.core.Symbol(null,"quote","quote",1377916282,null))) && ((sym instanceof cljs.core.Symbol))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Arguments to ns-unmap must be quoted symbols"),cljs.core.str("\n"),cljs.core.str("(core/and (= quote0 (quote quote)) (core/symbol? ns) (= quote1 (quote quote)) (core/symbol? sym))")].join('')));
}

cljs.core.swap_BANG_.call(null,cljs.env._STAR_compiler_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns,new cljs.core.Keyword(null,"defs","defs",1398449717)], null),cljs.core.dissoc,sym);

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-delete","cljs.core$macros/js-delete",387769082,null)),(function (){var x__9660__auto__ = cljs.compiler.munge.call(null,ns);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.compiler.munge.call(null,[cljs.core.str(sym)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
});

cljs.core$macros.ns_unmap.cljs$lang$macro = true;
/**
 * Non-atomically swaps the value of the volatile as if:
 * (apply f current-value-of-vol args). Returns the value that
 * was swapped in.
 */
cljs.core$macros.vswap_BANG_ = (function cljs$core$macros$vswap_BANG_(var_args){
var args__9938__auto__ = [];
var len__9931__auto___20768 = arguments.length;
var i__9932__auto___20769 = (0);
while(true){
if((i__9932__auto___20769 < len__9931__auto___20768)){
args__9938__auto__.push((arguments[i__9932__auto___20769]));

var G__20770 = (i__9932__auto___20769 + (1));
i__9932__auto___20769 = G__20770;
continue;
} else {
}
break;
}

var argseq__9939__auto__ = ((((4) < args__9938__auto__.length))?(new cljs.core.IndexedSeq(args__9938__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.vswap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__9939__auto__);
});

cljs.core$macros.vswap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,vol,f,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-vreset!","cljs.core/-vreset!",-1186516972,null)),(function (){var x__9660__auto__ = vol;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9660__auto__ = f;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-deref","cljs.core/-deref",-1260480154,null)),(function (){var x__9660__auto__ = vol;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),args)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
});

cljs.core$macros.vswap_BANG_.cljs$lang$maxFixedArity = (4);

cljs.core$macros.vswap_BANG_.cljs$lang$applyTo = (function (seq20763){
var G__20764 = cljs.core.first.call(null,seq20763);
var seq20763__$1 = cljs.core.next.call(null,seq20763);
var G__20765 = cljs.core.first.call(null,seq20763__$1);
var seq20763__$2 = cljs.core.next.call(null,seq20763__$1);
var G__20766 = cljs.core.first.call(null,seq20763__$2);
var seq20763__$3 = cljs.core.next.call(null,seq20763__$2);
var G__20767 = cljs.core.first.call(null,seq20763__$3);
var seq20763__$4 = cljs.core.next.call(null,seq20763__$3);
return cljs.core$macros.vswap_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__20764,G__20765,G__20766,G__20767,seq20763__$4);
});


cljs.core$macros.vswap_BANG_.cljs$lang$macro = true;
cljs.core$macros.locking = (function cljs$core$macros$locking(var_args){
var args__9938__auto__ = [];
var len__9931__auto___20775 = arguments.length;
var i__9932__auto___20776 = (0);
while(true){
if((i__9932__auto___20776 < len__9931__auto___20775)){
args__9938__auto__.push((arguments[i__9932__auto___20776]));

var G__20777 = (i__9932__auto___20776 + (1));
i__9932__auto___20776 = G__20777;
continue;
} else {
}
break;
}

var argseq__9939__auto__ = ((((3) < args__9938__auto__.length))?(new cljs.core.IndexedSeq(args__9938__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.locking.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9939__auto__);
});

cljs.core$macros.locking.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),forms)));
});

cljs.core$macros.locking.cljs$lang$maxFixedArity = (3);

cljs.core$macros.locking.cljs$lang$applyTo = (function (seq20771){
var G__20772 = cljs.core.first.call(null,seq20771);
var seq20771__$1 = cljs.core.next.call(null,seq20771);
var G__20773 = cljs.core.first.call(null,seq20771__$1);
var seq20771__$2 = cljs.core.next.call(null,seq20771__$1);
var G__20774 = cljs.core.first.call(null,seq20771__$2);
var seq20771__$3 = cljs.core.next.call(null,seq20771__$2);
return cljs.core$macros.locking.cljs$core$IFn$_invoke$arity$variadic(G__20772,G__20773,G__20774,seq20771__$3);
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
var args__9938__auto__ = [];
var len__9931__auto___20781 = arguments.length;
var i__9932__auto___20782 = (0);
while(true){
if((i__9932__auto___20782 < len__9931__auto___20781)){
args__9938__auto__.push((arguments[i__9932__auto___20782]));

var G__20783 = (i__9932__auto___20782 + (1));
i__9932__auto___20782 = G__20783;
continue;
} else {
}
break;
}

var argseq__9939__auto__ = ((((2) < args__9938__auto__.length))?(new cljs.core.IndexedSeq(args__9938__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.require.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9939__auto__);
});

cljs.core$macros.require.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ns*","ns*",1840949383,null)),(function (){var x__9660__auto__ = cljs.core.cons.call(null,new cljs.core.Keyword(null,"require","require",-468001333),args);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
});

cljs.core$macros.require.cljs$lang$maxFixedArity = (2);

cljs.core$macros.require.cljs$lang$applyTo = (function (seq20778){
var G__20779 = cljs.core.first.call(null,seq20778);
var seq20778__$1 = cljs.core.next.call(null,seq20778);
var G__20780 = cljs.core.first.call(null,seq20778__$1);
var seq20778__$2 = cljs.core.next.call(null,seq20778__$1);
return cljs.core$macros.require.cljs$core$IFn$_invoke$arity$variadic(G__20779,G__20780,seq20778__$2);
});


cljs.core$macros.require.cljs$lang$macro = true;
/**
 * Similar to require but only for macros.
 */
cljs.core$macros.require_macros = (function cljs$core$macros$require_macros(var_args){
var args__9938__auto__ = [];
var len__9931__auto___20787 = arguments.length;
var i__9932__auto___20788 = (0);
while(true){
if((i__9932__auto___20788 < len__9931__auto___20787)){
args__9938__auto__.push((arguments[i__9932__auto___20788]));

var G__20789 = (i__9932__auto___20788 + (1));
i__9932__auto___20788 = G__20789;
continue;
} else {
}
break;
}

var argseq__9939__auto__ = ((((2) < args__9938__auto__.length))?(new cljs.core.IndexedSeq(args__9938__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.require_macros.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9939__auto__);
});

cljs.core$macros.require_macros.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ns*","ns*",1840949383,null)),(function (){var x__9660__auto__ = cljs.core.cons.call(null,new cljs.core.Keyword(null,"require-macros","require-macros",707947416),args);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
});

cljs.core$macros.require_macros.cljs$lang$maxFixedArity = (2);

cljs.core$macros.require_macros.cljs$lang$applyTo = (function (seq20784){
var G__20785 = cljs.core.first.call(null,seq20784);
var seq20784__$1 = cljs.core.next.call(null,seq20784);
var G__20786 = cljs.core.first.call(null,seq20784__$1);
var seq20784__$2 = cljs.core.next.call(null,seq20784__$1);
return cljs.core$macros.require_macros.cljs$core$IFn$_invoke$arity$variadic(G__20785,G__20786,seq20784__$2);
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
var args__9938__auto__ = [];
var len__9931__auto___20793 = arguments.length;
var i__9932__auto___20794 = (0);
while(true){
if((i__9932__auto___20794 < len__9931__auto___20793)){
args__9938__auto__.push((arguments[i__9932__auto___20794]));

var G__20795 = (i__9932__auto___20794 + (1));
i__9932__auto___20794 = G__20795;
continue;
} else {
}
break;
}

var argseq__9939__auto__ = ((((2) < args__9938__auto__.length))?(new cljs.core.IndexedSeq(args__9938__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.use.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9939__auto__);
});

cljs.core$macros.use.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ns*","ns*",1840949383,null)),(function (){var x__9660__auto__ = cljs.core.cons.call(null,new cljs.core.Keyword(null,"use","use",-1846382424),args);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
});

cljs.core$macros.use.cljs$lang$maxFixedArity = (2);

cljs.core$macros.use.cljs$lang$applyTo = (function (seq20790){
var G__20791 = cljs.core.first.call(null,seq20790);
var seq20790__$1 = cljs.core.next.call(null,seq20790);
var G__20792 = cljs.core.first.call(null,seq20790__$1);
var seq20790__$2 = cljs.core.next.call(null,seq20790__$1);
return cljs.core$macros.use.cljs$core$IFn$_invoke$arity$variadic(G__20791,G__20792,seq20790__$2);
});


cljs.core$macros.use.cljs$lang$macro = true;
/**
 * Similar to use but only for macros.
 */
cljs.core$macros.use_macros = (function cljs$core$macros$use_macros(var_args){
var args__9938__auto__ = [];
var len__9931__auto___20799 = arguments.length;
var i__9932__auto___20800 = (0);
while(true){
if((i__9932__auto___20800 < len__9931__auto___20799)){
args__9938__auto__.push((arguments[i__9932__auto___20800]));

var G__20801 = (i__9932__auto___20800 + (1));
i__9932__auto___20800 = G__20801;
continue;
} else {
}
break;
}

var argseq__9939__auto__ = ((((2) < args__9938__auto__.length))?(new cljs.core.IndexedSeq(args__9938__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.use_macros.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9939__auto__);
});

cljs.core$macros.use_macros.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ns*","ns*",1840949383,null)),(function (){var x__9660__auto__ = cljs.core.cons.call(null,new cljs.core.Keyword(null,"use-macros","use-macros",-905638393),args);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
});

cljs.core$macros.use_macros.cljs$lang$maxFixedArity = (2);

cljs.core$macros.use_macros.cljs$lang$applyTo = (function (seq20796){
var G__20797 = cljs.core.first.call(null,seq20796);
var seq20796__$1 = cljs.core.next.call(null,seq20796);
var G__20798 = cljs.core.first.call(null,seq20796__$1);
var seq20796__$2 = cljs.core.next.call(null,seq20796__$1);
return cljs.core$macros.use_macros.cljs$core$IFn$_invoke$arity$variadic(G__20797,G__20798,seq20796__$2);
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
var args__9938__auto__ = [];
var len__9931__auto___20805 = arguments.length;
var i__9932__auto___20806 = (0);
while(true){
if((i__9932__auto___20806 < len__9931__auto___20805)){
args__9938__auto__.push((arguments[i__9932__auto___20806]));

var G__20807 = (i__9932__auto___20806 + (1));
i__9932__auto___20806 = G__20807;
continue;
} else {
}
break;
}

var argseq__9939__auto__ = ((((2) < args__9938__auto__.length))?(new cljs.core.IndexedSeq(args__9938__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.import$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9939__auto__);
});

cljs.core$macros.import$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,import_symbols_or_lists){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ns*","ns*",1840949383,null)),(function (){var x__9660__auto__ = cljs.core.cons.call(null,new cljs.core.Keyword(null,"import","import",-1399500709),import_symbols_or_lists);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
});

cljs.core$macros.import$.cljs$lang$maxFixedArity = (2);

cljs.core$macros.import$.cljs$lang$applyTo = (function (seq20802){
var G__20803 = cljs.core.first.call(null,seq20802);
var seq20802__$1 = cljs.core.next.call(null,seq20802);
var G__20804 = cljs.core.first.call(null,seq20802__$1);
var seq20802__$2 = cljs.core.next.call(null,seq20802__$1);
return cljs.core$macros.import$.cljs$core$IFn$_invoke$arity$variadic(G__20803,G__20804,seq20802__$2);
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
var args__9938__auto__ = [];
var len__9931__auto___20811 = arguments.length;
var i__9932__auto___20812 = (0);
while(true){
if((i__9932__auto___20812 < len__9931__auto___20811)){
args__9938__auto__.push((arguments[i__9932__auto___20812]));

var G__20813 = (i__9932__auto___20812 + (1));
i__9932__auto___20812 = G__20813;
continue;
} else {
}
break;
}

var argseq__9939__auto__ = ((((2) < args__9938__auto__.length))?(new cljs.core.IndexedSeq(args__9938__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.refer_clojure.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9939__auto__);
});

cljs.core$macros.refer_clojure.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ns*","ns*",1840949383,null)),(function (){var x__9660__auto__ = cljs.core.cons.call(null,new cljs.core.Keyword(null,"refer-clojure","refer-clojure",813784440),args);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
});

cljs.core$macros.refer_clojure.cljs$lang$maxFixedArity = (2);

cljs.core$macros.refer_clojure.cljs$lang$applyTo = (function (seq20808){
var G__20809 = cljs.core.first.call(null,seq20808);
var seq20808__$1 = cljs.core.next.call(null,seq20808);
var G__20810 = cljs.core.first.call(null,seq20808__$1);
var seq20808__$2 = cljs.core.next.call(null,seq20808__$1);
return cljs.core$macros.refer_clojure.cljs$core$IFn$_invoke$arity$variadic(G__20809,G__20810,seq20808__$2);
});


cljs.core$macros.refer_clojure.cljs$lang$macro = true;
cljs.core$macros.load_file_STAR_ = (function cljs$core$macros$load_file_STAR_(_AMPERSAND_form,_AMPERSAND_env,f){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","goog","js/goog",-70605150,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"nodeGlobalRequire","nodeGlobalRequire",167018599,null)),(function (){var x__9660__auto__ = f;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__9660__auto__ = cljs.analyzer.macroexpand_1.call(null,_AMPERSAND_env,form);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
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
var G__20814 = form_SINGLEQUOTE_;
var G__20815 = cljs.analyzer.macroexpand_1.call(null,env,form_SINGLEQUOTE_);
form__$1 = G__20814;
form_SINGLEQUOTE_ = G__20815;
continue;
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__9660__auto__ = form_SINGLEQUOTE_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
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
var and__8811__auto__ = cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,fdecl));
if(and__8811__auto__){
return cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),cljs.core.ffirst.call(null,fdecl));
} else {
return and__8811__auto__;
}
});
cljs.core$macros.variadic_fn_STAR_ = (function cljs$core$macros$variadic_fn_STAR_(var_args){
var args20816 = [];
var len__9931__auto___20823 = arguments.length;
var i__9932__auto___20824 = (0);
while(true){
if((i__9932__auto___20824 < len__9931__auto___20823)){
args20816.push((arguments[i__9932__auto___20824]));

var G__20825 = (i__9932__auto___20824 + (1));
i__9932__auto___20824 = G__20825;
continue;
} else {
}
break;
}

var G__20818 = args20816.length;
switch (G__20818) {
case 2:
return cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20816.length)].join('')));

}
});

cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (sym,method){
return cljs.core$macros.variadic_fn_STAR_.call(null,sym,method,true);
});

cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (sym,p__20819,solo){
var vec__20820 = p__20819;
var seq__20821 = cljs.core.seq.call(null,vec__20820);
var first__20822 = cljs.core.first.call(null,seq__20821);
var seq__20821__$1 = cljs.core.next.call(null,seq__20821);
var arglist = first__20822;
var body = seq__20821__$1;
var method = vec__20820;
var sig = cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),arglist);
var restarg = cljs.core.gensym.call(null,"seq");
var get_delegate = ((function (sig,restarg,vec__20820,seq__20821,first__20822,seq__20821__$1,arglist,body,method){
return (function cljs$core$macros$get_delegate(){
return new cljs.core.Symbol(null,"cljs$core$IFn$_invoke$arity$variadic","cljs$core$IFn$_invoke$arity$variadic",-378825034,null);
});})(sig,restarg,vec__20820,seq__20821,first__20822,seq__20821__$1,arglist,body,method))
;
var get_delegate_prop = ((function (sig,restarg,vec__20820,seq__20821,first__20822,seq__20821__$1,arglist,body,method){
return (function cljs$core$macros$get_delegate_prop(){
return cljs.core.symbol.call(null,[cljs.core.str("-"),cljs.core.str(get_delegate.call(null))].join(''));
});})(sig,restarg,vec__20820,seq__20821,first__20822,seq__20821__$1,arglist,body,method))
;
var param_bind = ((function (sig,restarg,vec__20820,seq__20821,first__20822,seq__20821__$1,arglist,body,method){
return (function cljs$core$macros$param_bind(param){
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9660__auto__ = param;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9660__auto__ = cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null),cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"/Users/ru/clojure/fligts-pro/resources/public/js/out/cljs/core.cljc"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2877),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj.call(null,cljs.core.List.EMPTY,49),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2877),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj.call(null,cljs.core.List.EMPTY,54),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9660__auto__ = cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core","next","cljs.core/next",-1291438473,null),cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"/Users/ru/clojure/fligts-pro/resources/public/js/out/cljs/core.cljc"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2878),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj.call(null,cljs.core.List.EMPTY,51),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2878),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj.call(null,cljs.core.List.EMPTY,55),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})()))));
});})(sig,restarg,vec__20820,seq__20821,first__20822,seq__20821__$1,arglist,body,method))
;
var apply_to = ((function (sig,restarg,vec__20820,seq__20821,first__20822,seq__20821__$1,arglist,body,method){
return (function cljs$core$macros$apply_to(){
if(((1) < cljs.core.count.call(null,sig))){
var params = cljs.core.repeatedly.call(null,(cljs.core.count.call(null,sig) - (1)),cljs.core.gensym);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9660__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9660__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9660__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.mapcat.call(null,param_bind,params)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9660__auto__ = sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9660__auto__ = get_delegate.call(null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),params,(function (){var x__9660__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9660__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9660__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9660__auto__ = sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9660__auto__ = get_delegate.call(null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__9660__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
}
});})(sig,restarg,vec__20820,seq__20821,first__20822,seq__20821__$1,arglist,body,method))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9660__auto__ = sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = get_delegate_prop.call(null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9660__auto__ = cljs.core.vec.call(null,sig);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(cljs.core.truth_(solo)?cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9660__auto__ = sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-cljs$lang$maxFixedArity","-cljs$lang$maxFixedArity",-1481434279,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = (cljs.core.count.call(null,sig) - (1));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())))):null),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9660__auto__ = sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-cljs$lang$applyTo","-cljs$lang$applyTo",-225535181,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = apply_to.call(null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
});

cljs.core$macros.variadic_fn_STAR_.cljs$lang$maxFixedArity = 3;

cljs.core$macros.copy_arguments = (function cljs$core$macros$copy_arguments(_AMPERSAND_form,_AMPERSAND_env,dest){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9660__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"len__20827__auto__","len__20827__auto__",19987524,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__9660__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__20828__auto__","i__20828__auto__",1233249646,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__20828__auto__","i__20828__auto__",1233249646,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"len__20827__auto__","len__20827__auto__",19987524,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".push",".push",-1497267248,null)),(function (){var x__9660__auto__ = dest;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aget","cljs.core$macros/aget",1976136178,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__20828__auto__","i__20828__auto__",1233249646,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__20828__auto__","i__20828__auto__",1233249646,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
});

cljs.core$macros.copy_arguments.cljs$lang$macro = true;
cljs.core$macros.variadic_fn = (function cljs$core$macros$variadic_fn(name,meta,p__20831,emit_var_QMARK_){
var vec__20838 = p__20831;
var vec__20841 = cljs.core.nth.call(null,vec__20838,(0),null);
var seq__20842 = cljs.core.seq.call(null,vec__20841);
var first__20843 = cljs.core.first.call(null,seq__20842);
var seq__20842__$1 = cljs.core.next.call(null,seq__20842);
var arglist = first__20843;
var body = seq__20842__$1;
var method = vec__20841;
var fdecl = vec__20838;
var dest_args = ((function (vec__20838,vec__20841,seq__20842,first__20843,seq__20842__$1,arglist,body,method,fdecl){
return (function cljs$core$macros$variadic_fn_$_dest_args(c){
return cljs.core.map.call(null,((function (vec__20838,vec__20841,seq__20842,first__20843,seq__20842__$1,arglist,body,method,fdecl){
return (function (n){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aget","cljs.core$macros/aget",1976136178,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
});})(vec__20838,vec__20841,seq__20842,first__20843,seq__20842__$1,arglist,body,method,fdecl))
,cljs.core.range.call(null,c));
});})(vec__20838,vec__20841,seq__20842,first__20843,seq__20842__$1,arglist,body,method,fdecl))
;
var rname = cljs.core.symbol.call(null,[cljs.core.str(cljs.analyzer._STAR_cljs_ns_STAR_)].join(''),[cljs.core.str(name)].join(''));
var sig = cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),arglist);
var c_1 = (cljs.core.count.call(null,sig) - (1));
var meta__$1 = cljs.core.assoc.call(null,meta,new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",882626057),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),c_1,new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sig], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),(function (){var x__9660__auto__ = arglist;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.doall.call(null,cljs.core.map.call(null,meta,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arglist], null)))], null));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"def","def",597100991,null)),(function (){var x__9660__auto__ = cljs.core.with_meta.call(null,name,meta__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9660__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"var_args","var_args",1214280389,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9660__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args__20829__auto__","args__20829__auto__",-1428608377,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","copy-arguments","cljs.core$macros/copy-arguments",-1675962356,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args__20829__auto__","args__20829__auto__",-1428608377,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9660__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argseq__20830__auto__","argseq__20830__auto__",57281305,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__9660__auto__ = c_1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args__20829__auto__","args__20829__auto__",-1428608377,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__9660__auto__ = cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core","IndexedSeq","cljs.core/IndexedSeq",-228688698,null),cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"/Users/ru/clojure/fligts-pro/resources/public/js/out/cljs/core.cljc"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2925),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj.call(null,cljs.core.List.EMPTY,55),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2925),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj.call(null,cljs.core.List.EMPTY,75),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".slice",".slice",1874048374,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args__20829__auto__","args__20829__auto__",-1428608377,null)),(function (){var x__9660__auto__ = c_1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9660__auto__ = rname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cljs$core$IFn$_invoke$arity$variadic","cljs$core$IFn$_invoke$arity$variadic",-378825034,null)),dest_args.call(null,c_1),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argseq__20830__auto__","argseq__20830__auto__",57281305,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core$macros.variadic_fn_STAR_.call(null,rname,method);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = (cljs.core.truth_(emit_var_QMARK_)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"var","var",870848730,null)),(function (){var x__9660__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})()))):null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
});
cljs.core$macros.multi_arity_fn = (function cljs$core$macros$multi_arity_fn(name,meta,fdecl,emit_var_QMARK_){
var dest_args = (function cljs$core$macros$multi_arity_fn_$_dest_args(c){
return cljs.core.map.call(null,(function (n){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aget","cljs.core$macros/aget",1976136178,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
}),cljs.core.range.call(null,c));
});
var fixed_arity = (function cljs$core$macros$multi_arity_fn_$_fixed_arity(rname,sig){
var c = cljs.core.count.call(null,sig);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9660__auto__ = rname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9660__auto__ = cljs.core.symbol.call(null,[cljs.core.str("cljs$core$IFn$_invoke$arity$"),cljs.core.str(c)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),dest_args.call(null,c))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())))], null);
});
var fn_method = (function cljs$core$macros$multi_arity_fn_$_fn_method(p__20868){
var vec__20872 = p__20868;
var seq__20873 = cljs.core.seq.call(null,vec__20872);
var first__20874 = cljs.core.first.call(null,seq__20873);
var seq__20873__$1 = cljs.core.next.call(null,seq__20873);
var sig = first__20874;
var body = seq__20873__$1;
var method = vec__20872;
if(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),sig))){
return cljs.core$macros.variadic_fn_STAR_.call(null,name,method,false);
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9660__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.symbol.call(null,[cljs.core.str("-cljs$core$IFn$_invoke$arity$"),cljs.core.str(cljs.core.count.call(null,sig))].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9660__auto__ = method;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
}
});
var rname = cljs.core.symbol.call(null,[cljs.core.str(cljs.analyzer._STAR_cljs_ns_STAR_)].join(''),[cljs.core.str(name)].join(''));
var arglists = cljs.core.map.call(null,cljs.core.first,fdecl);
var varsig_QMARK_ = ((function (rname,arglists){
return (function (p1__20844_SHARP_){
return cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),p1__20844_SHARP_);
});})(rname,arglists))
;
var variadic = cljs.core.boolean$.call(null,cljs.core.some.call(null,varsig_QMARK_,arglists));
var sigs = cljs.core.remove.call(null,varsig_QMARK_,arglists);
var maxfa = cljs.core.apply.call(null,cljs.core.max,cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.count,sigs),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.count.call(null,cljs.core.first.call(null,cljs.core.filter.call(null,varsig_QMARK_,arglists))) - (2))], null)));
var meta__$1 = cljs.core.assoc.call(null,meta,new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",882626057),variadic,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),maxfa,new cljs.core.Keyword(null,"method-params","method-params",-980792179),sigs,new cljs.core.Keyword(null,"arglists","arglists",1661989754),arglists,new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.doall.call(null,cljs.core.map.call(null,meta,arglists))], null));
var args_sym = cljs.core.gensym.call(null,"args");
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"def","def",597100991,null)),(function (){var x__9660__auto__ = cljs.core.with_meta.call(null,name,meta__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9660__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"var_args","var_args",1214280389,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9660__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9660__auto__ = args_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","copy-arguments","cljs.core$macros/copy-arguments",-1675962356,null)),(function (){var x__9660__auto__ = args_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","case","cljs.core$macros/case",-2131866965,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),(function (){var x__9660__auto__ = args_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),cljs.core.mapcat.call(null,((function (rname,arglists,varsig_QMARK_,variadic,sigs,maxfa,meta__$1,args_sym){
return (function (p1__20845_SHARP_){
return fixed_arity.call(null,rname,p1__20845_SHARP_);
});})(rname,arglists,varsig_QMARK_,variadic,sigs,maxfa,meta__$1,args_sym))
,sigs),(function (){var x__9660__auto__ = ((variadic)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9660__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argseq__20846__auto__","argseq__20846__auto__",-1319773433,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__9660__auto__ = cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core","IndexedSeq","cljs.core/IndexedSeq",-228688698,null),cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"/Users/ru/clojure/fligts-pro/resources/public/js/out/cljs/core.cljc"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2983),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj.call(null,cljs.core.List.EMPTY,58),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2983),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj.call(null,cljs.core.List.EMPTY,78),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".slice",".slice",1874048374,null)),(function (){var x__9660__auto__ = args_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = maxfa;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9660__auto__ = rname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cljs$core$IFn$_invoke$arity$variadic","cljs$core$IFn$_invoke$arity$variadic",-378825034,null)),dest_args.call(null,maxfa),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argseq__20846__auto__","argseq__20846__auto__",-1319773433,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})()))):(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(meta__$1))?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","str","cljs.core$macros/str",-2019499702,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"Invalid arity: "),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),(function (){var x__9660__auto__ = args_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(2)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})()))):cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","str","cljs.core$macros/str",-2019499702,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"Invalid arity: "),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),(function (){var x__9660__auto__ = args_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),cljs.core.map.call(null,fn_method,fdecl),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__9660__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9660__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-cljs$lang$maxFixedArity","-cljs$lang$maxFixedArity",-1481434279,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = maxfa;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),(function (){var x__9660__auto__ = (cljs.core.truth_(emit_var_QMARK_)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"var","var",870848730,null)),(function (){var x__9660__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})()))):null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
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
var fdecl__$3 = ((cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,fdecl__$2)))?(function (){var x__9660__auto__ = fdecl__$2;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})():fdecl__$2);
var m__$2 = ((cljs.core.map_QMARK_.call(null,cljs.core.last.call(null,fdecl__$3)))?cljs.core.conj.call(null,m__$1,cljs.core.last.call(null,fdecl__$3)):m__$1);
var fdecl__$4 = ((cljs.core.map_QMARK_.call(null,cljs.core.last.call(null,fdecl__$3)))?cljs.core.butlast.call(null,fdecl__$3):fdecl__$3);
var m__$3 = cljs.core.conj.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core._conj.call(null,(function (){var x__9660__auto__ = cljs.core$macros.sigs.call(null,fdecl__$4);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})(),new cljs.core.Symbol(null,"quote","quote",1377916282,null))], null),m__$2);
var m__$4 = cljs.core.conj.call(null,(cljs.core.truth_(cljs.core.meta.call(null,name))?cljs.core.meta.call(null,name):cljs.core.PersistentArrayMap.EMPTY),m__$3);
if(cljs.core.truth_(cljs.core$macros.multi_arity_fn_QMARK_.call(null,fdecl__$4))){
return cljs.core$macros.multi_arity_fn.call(null,name,(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))?cljs.core.update_in.call(null,m__$4,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516)], null),cljs.core.conj,"@param {...*} var_args"):m__$4),fdecl__$4,new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
} else {
if(cljs.core.truth_(cljs.core$macros.variadic_fn_QMARK_.call(null,fdecl__$4))){
return cljs.core$macros.variadic_fn.call(null,name,(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))?cljs.core.update_in.call(null,m__$4,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516)], null),cljs.core.conj,"@param {...*} var_args"):m__$4),fdecl__$4,new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
} else {
return cljs.core._conj.call(null,(function (){var x__9660__auto__ = cljs.core.with_meta.call(null,name,m__$4);
return cljs.core._conj.call(null,(function (){var x__9660__auto____$1 = cljs.core.cons.call(null,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null),fdecl__$4);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto____$1);
})(),x__9660__auto__);
})(),new cljs.core.Symbol(null,"def","def",597100991,null));

}
}
};
var cljs$core$macros$defn = function (_AMPERSAND_form,_AMPERSAND_env,name,var_args){
var fdecl = null;
if (arguments.length > 3) {
var G__20875__i = 0, G__20875__a = new Array(arguments.length -  3);
while (G__20875__i < G__20875__a.length) {G__20875__a[G__20875__i] = arguments[G__20875__i + 3]; ++G__20875__i;}
  fdecl = new cljs.core.IndexedSeq(G__20875__a,0);
} 
return cljs$core$macros$defn__delegate.call(this,_AMPERSAND_form,_AMPERSAND_env,name,fdecl);};
cljs$core$macros$defn.cljs$lang$maxFixedArity = 3;
cljs$core$macros$defn.cljs$lang$applyTo = (function (arglist__20876){
var _AMPERSAND_form = cljs.core.first(arglist__20876);
arglist__20876 = cljs.core.next(arglist__20876);
var _AMPERSAND_env = cljs.core.first(arglist__20876);
arglist__20876 = cljs.core.next(arglist__20876);
var name = cljs.core.first(arglist__20876);
var fdecl = cljs.core.rest(arglist__20876);
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
var args__9938__auto__ = [];
var len__9931__auto___20881 = arguments.length;
var i__9932__auto___20882 = (0);
while(true){
if((i__9932__auto___20882 < len__9931__auto___20881)){
args__9938__auto__.push((arguments[i__9932__auto___20882]));

var G__20883 = (i__9932__auto___20882 + (1));
i__9932__auto___20882 = G__20883;
continue;
} else {
}
break;
}

var argseq__9939__auto__ = ((((3) < args__9938__auto__.length))?(new cljs.core.IndexedSeq(args__9938__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.defmacro.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9939__auto__);
});

cljs.core$macros.defmacro.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,args){
var prefix = (function (){var p = (function (){var x__9660__auto__ = cljs.core.vary_meta.call(null,name,cljs.core.assoc,new cljs.core.Keyword(null,"macro","macro",-867863404),true);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
})();
var args__$1 = args;
while(true){
var f = cljs.core.first.call(null,args__$1);
if(typeof f === 'string'){
var G__20884 = cljs.core.cons.call(null,f,p);
var G__20885 = cljs.core.next.call(null,args__$1);
p = G__20884;
args__$1 = G__20885;
continue;
} else {
if(cljs.core.map_QMARK_.call(null,f)){
var G__20886 = cljs.core.cons.call(null,f,p);
var G__20887 = cljs.core.next.call(null,args__$1);
p = G__20886;
args__$1 = G__20887;
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
var G__20888 = cljs.core.next.call(null,fd);
fd = G__20888;
continue;
} else {
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,fd))){
var G__20889 = cljs.core.next.call(null,fd);
fd = G__20889;
continue;
} else {
return fd;
}
}
break;
}
})();
var fdecl__$1 = ((cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,fdecl)))?(function (){var x__9660__auto__ = fdecl;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto__);
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
var G__20890 = cljs.core.conj.call(null,acc,add_implicit_args.call(null,d));
var G__20891 = cljs.core.next.call(null,ds);
acc = G__20890;
ds = G__20891;
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
var G__20892 = cljs.core.next.call(null,p);
var G__20893 = cljs.core.cons.call(null,cljs.core.first.call(null,p),d);
p = G__20892;
d = G__20893;
continue;
} else {
return d;
}
break;
}
})();
return cljs.core._conj.call(null,(function (){var x__9660__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null),decl);
return cljs.core._conj.call(null,(function (){var x__9660__auto____$1 = cljs.core._conj.call(null,(function (){var x__9660__auto____$1 = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9660__auto____$1 = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto____$1);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-cljs$lang$macro","-cljs$lang$macro",443600924,null)))));
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,true),x__9660__auto____$1);
})(),new cljs.core.Symbol(null,"set!","set!",250714521,null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9660__auto____$1);
})(),x__9660__auto__);
})(),new cljs.core.Symbol(null,"do","do",1686842252,null));
});

cljs.core$macros.defmacro.cljs$lang$maxFixedArity = (3);

cljs.core$macros.defmacro.cljs$lang$applyTo = (function (seq20877){
var G__20878 = cljs.core.first.call(null,seq20877);
var seq20877__$1 = cljs.core.next.call(null,seq20877);
var G__20879 = cljs.core.first.call(null,seq20877__$1);
var seq20877__$2 = cljs.core.next.call(null,seq20877__$1);
var G__20880 = cljs.core.first.call(null,seq20877__$2);
var seq20877__$3 = cljs.core.next.call(null,seq20877__$2);
return cljs.core$macros.defmacro.cljs$core$IFn$_invoke$arity$variadic(G__20878,G__20879,G__20880,seq20877__$3);
});

cljs.core$macros.defmacro.cljs$lang$macro = true;

//# sourceMappingURL=core$macros.js.map