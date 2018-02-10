// Compiled by ClojureScript 1.9.521 {}
goog.provide('cljs.core$macros');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('cljs.compiler');
goog.require('cljs.env');
goog.require('cljs.core');
goog.require('cljs.analyzer');
/**
 * Threads the expr through the forms. Inserts x as the
 *   second item in the first form, making a list of it if it is not a
 *   list already. If there are more forms, inserts the first form as the
 *   second item in second form, etc.
 */
cljs.core$macros.__GT_ = (function cljs$core$macros$__GT_(var_args){
var args__10037__auto__ = [];
var len__10030__auto___20739 = arguments.length;
var i__10031__auto___20740 = (0);
while(true){
if((i__10031__auto___20740 < len__10030__auto___20739)){
args__10037__auto__.push((arguments[i__10031__auto___20740]));

var G__20741 = (i__10031__auto___20740 + (1));
i__10031__auto___20740 = G__20741;
continue;
} else {
}
break;
}

var argseq__10038__auto__ = ((((3) < args__10037__auto__.length))?(new cljs.core.IndexedSeq(args__10037__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10038__auto__);
});

cljs.core$macros.__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
var x__$1 = x;
var forms__$1 = forms;
while(true){
if(cljs.core.truth_(forms__$1)){
var form = cljs.core.first.call(null,forms__$1);
var threaded = ((cljs.core.seq_QMARK_.call(null,form))?cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9759__auto__ = cljs.core.first.call(null,form);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = x__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),cljs.core.next.call(null,form)))),cljs.core.meta.call(null,form)):(function (){var x__9759__auto__ = form;
return cljs.core._conj.call(null,(function (){var x__9759__auto____$1 = x__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto____$1);
})(),x__9759__auto__);
})());
var G__20742 = threaded;
var G__20743 = cljs.core.next.call(null,forms__$1);
x__$1 = G__20742;
forms__$1 = G__20743;
continue;
} else {
return x__$1;
}
break;
}
});

cljs.core$macros.__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.__GT_.cljs$lang$applyTo = (function (seq20735){
var G__20736 = cljs.core.first.call(null,seq20735);
var seq20735__$1 = cljs.core.next.call(null,seq20735);
var G__20737 = cljs.core.first.call(null,seq20735__$1);
var seq20735__$2 = cljs.core.next.call(null,seq20735__$1);
var G__20738 = cljs.core.first.call(null,seq20735__$2);
var seq20735__$3 = cljs.core.next.call(null,seq20735__$2);
return cljs.core$macros.__GT_.cljs$core$IFn$_invoke$arity$variadic(G__20736,G__20737,G__20738,seq20735__$3);
});


cljs.core$macros.__GT_.cljs$lang$macro = true;
/**
 * Threads the expr through the forms. Inserts x as the
 *   last item in the first form, making a list of it if it is not a
 *   list already. If there are more forms, inserts the first form as the
 *   last item in second form, etc.
 */
cljs.core$macros.__GT__GT_ = (function cljs$core$macros$__GT__GT_(var_args){
var args__10037__auto__ = [];
var len__10030__auto___20748 = arguments.length;
var i__10031__auto___20749 = (0);
while(true){
if((i__10031__auto___20749 < len__10030__auto___20748)){
args__10037__auto__.push((arguments[i__10031__auto___20749]));

var G__20750 = (i__10031__auto___20749 + (1));
i__10031__auto___20749 = G__20750;
continue;
} else {
}
break;
}

var argseq__10038__auto__ = ((((3) < args__10037__auto__.length))?(new cljs.core.IndexedSeq(args__10037__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.__GT__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10038__auto__);
});

cljs.core$macros.__GT__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
var x__$1 = x;
var forms__$1 = forms;
while(true){
if(cljs.core.truth_(forms__$1)){
var form = cljs.core.first.call(null,forms__$1);
var threaded = ((cljs.core.seq_QMARK_.call(null,form))?cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9759__auto__ = cljs.core.first.call(null,form);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),cljs.core.next.call(null,form),(function (){var x__9759__auto__ = x__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})()))),cljs.core.meta.call(null,form)):(function (){var x__9759__auto__ = form;
return cljs.core._conj.call(null,(function (){var x__9759__auto____$1 = x__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto____$1);
})(),x__9759__auto__);
})());
var G__20751 = threaded;
var G__20752 = cljs.core.next.call(null,forms__$1);
x__$1 = G__20751;
forms__$1 = G__20752;
continue;
} else {
return x__$1;
}
break;
}
});

cljs.core$macros.__GT__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.__GT__GT_.cljs$lang$applyTo = (function (seq20744){
var G__20745 = cljs.core.first.call(null,seq20744);
var seq20744__$1 = cljs.core.next.call(null,seq20744);
var G__20746 = cljs.core.first.call(null,seq20744__$1);
var seq20744__$2 = cljs.core.next.call(null,seq20744__$1);
var G__20747 = cljs.core.first.call(null,seq20744__$2);
var seq20744__$3 = cljs.core.next.call(null,seq20744__$2);
return cljs.core$macros.__GT__GT_.cljs$core$IFn$_invoke$arity$variadic(G__20745,G__20746,G__20747,seq20744__$3);
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
var args20753 = [];
var len__10030__auto___20761 = arguments.length;
var i__10031__auto___20762 = (0);
while(true){
if((i__10031__auto___20762 < len__10030__auto___20761)){
args20753.push((arguments[i__10031__auto___20762]));

var G__20763 = (i__10031__auto___20762 + (1));
i__10031__auto___20762 = G__20763;
continue;
} else {
}
break;
}

var G__20760 = args20753.length;
switch (G__20760) {
case 4:
return cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__10049__auto__ = (new cljs.core.IndexedSeq(args20753.slice((4)),(0),null));
return cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__10049__auto__);

}
});

cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,form){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9759__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
});

cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,form,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"..","..",-300507420,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9759__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),more)));
});

cljs.core$macros._DOT__DOT_.cljs$lang$applyTo = (function (seq20754){
var G__20755 = cljs.core.first.call(null,seq20754);
var seq20754__$1 = cljs.core.next.call(null,seq20754);
var G__20756 = cljs.core.first.call(null,seq20754__$1);
var seq20754__$2 = cljs.core.next.call(null,seq20754__$1);
var G__20757 = cljs.core.first.call(null,seq20754__$2);
var seq20754__$3 = cljs.core.next.call(null,seq20754__$2);
var G__20758 = cljs.core.first.call(null,seq20754__$3);
var seq20754__$4 = cljs.core.next.call(null,seq20754__$3);
return cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$variadic(G__20755,G__20756,G__20757,G__20758,seq20754__$4);
});

cljs.core$macros._DOT__DOT_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._DOT__DOT_.cljs$lang$macro = true;
/**
 * Ignores body, yields nil
 */
cljs.core$macros.comment = (function cljs$core$macros$comment(var_args){
var args__10037__auto__ = [];
var len__10030__auto___20768 = arguments.length;
var i__10031__auto___20769 = (0);
while(true){
if((i__10031__auto___20769 < len__10030__auto___20768)){
args__10037__auto__.push((arguments[i__10031__auto___20769]));

var G__20770 = (i__10031__auto___20769 + (1));
i__10031__auto___20769 = G__20770;
continue;
} else {
}
break;
}

var argseq__10038__auto__ = ((((2) < args__10037__auto__.length))?(new cljs.core.IndexedSeq(args__10037__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.comment.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10038__auto__);
});

cljs.core$macros.comment.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return null;
});

cljs.core$macros.comment.cljs$lang$maxFixedArity = (2);

cljs.core$macros.comment.cljs$lang$applyTo = (function (seq20765){
var G__20766 = cljs.core.first.call(null,seq20765);
var seq20765__$1 = cljs.core.next.call(null,seq20765);
var G__20767 = cljs.core.first.call(null,seq20765__$1);
var seq20765__$2 = cljs.core.next.call(null,seq20765__$1);
return cljs.core$macros.comment.cljs$core$IFn$_invoke$arity$variadic(G__20766,G__20767,seq20765__$2);
});


cljs.core$macros.comment.cljs$lang$macro = true;
/**
 * Takes a set of test/expr pairs. It evaluates each test one at a
 *   time.  If a test returns logical true, cond evaluates and returns
 *   the value of the corresponding expr and doesn't evaluate any of the
 *   other tests or exprs. (cond) returns nil.
 */
cljs.core$macros.cond = (function cljs$core$macros$cond(var_args){
var args__10037__auto__ = [];
var len__10030__auto___20774 = arguments.length;
var i__10031__auto___20775 = (0);
while(true){
if((i__10031__auto___20775 < len__10030__auto___20774)){
args__10037__auto__.push((arguments[i__10031__auto___20775]));

var G__20776 = (i__10031__auto___20775 + (1));
i__10031__auto___20775 = G__20776;
continue;
} else {
}
break;
}

var argseq__10038__auto__ = ((((2) < args__10037__auto__.length))?(new cljs.core.IndexedSeq(args__10037__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.cond.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10038__auto__);
});

cljs.core$macros.cond.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,clauses){
if(cljs.core.truth_(clauses)){
return cljs.core._conj.call(null,(function (){var x__9759__auto__ = cljs.core.first.call(null,clauses);
return cljs.core._conj.call(null,(function (){var x__9759__auto____$1 = ((cljs.core.next.call(null,clauses))?cljs.core.second.call(null,clauses):(function(){throw (new Error("cond requires an even number of forms"))})());
return cljs.core._conj.call(null,(function (){var x__9759__auto____$2 = cljs.core.cons.call(null,new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",2005388338,null),cljs.core.next.call(null,cljs.core.next.call(null,clauses)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto____$2);
})(),x__9759__auto____$1);
})(),x__9759__auto__);
})(),new cljs.core.Symbol(null,"if","if",1181717262,null));
} else {
return null;
}
});

cljs.core$macros.cond.cljs$lang$maxFixedArity = (2);

cljs.core$macros.cond.cljs$lang$applyTo = (function (seq20771){
var G__20772 = cljs.core.first.call(null,seq20771);
var seq20771__$1 = cljs.core.next.call(null,seq20771);
var G__20773 = cljs.core.first.call(null,seq20771__$1);
var seq20771__$2 = cljs.core.next.call(null,seq20771__$1);
return cljs.core$macros.cond.cljs$core$IFn$_invoke$arity$variadic(G__20772,G__20773,seq20771__$2);
});


cljs.core$macros.cond.cljs$lang$macro = true;
/**
 * defs the supplied var names with no bindings, useful for making forward declarations.
 */
cljs.core$macros.declare = (function cljs$core$macros$declare(var_args){
var args__10037__auto__ = [];
var len__10030__auto___20781 = arguments.length;
var i__10031__auto___20782 = (0);
while(true){
if((i__10031__auto___20782 < len__10030__auto___20781)){
args__10037__auto__.push((arguments[i__10031__auto___20782]));

var G__20783 = (i__10031__auto___20782 + (1));
i__10031__auto___20782 = G__20783;
continue;
} else {
}
break;
}

var argseq__10038__auto__ = ((((2) < args__10037__auto__.length))?(new cljs.core.IndexedSeq(args__10037__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.declare.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10038__auto__);
});

cljs.core$macros.declare.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,names){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),cljs.core.map.call(null,(function (p1__20777_SHARP_){
return cljs.core._conj.call(null,(function (){var x__9759__auto__ = cljs.core.vary_meta.call(null,p1__20777_SHARP_,cljs.core.assoc,new cljs.core.Keyword(null,"declared","declared",92336021),true);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),new cljs.core.Symbol(null,"def","def",597100991,null));
}),names))));
});

cljs.core$macros.declare.cljs$lang$maxFixedArity = (2);

cljs.core$macros.declare.cljs$lang$applyTo = (function (seq20778){
var G__20779 = cljs.core.first.call(null,seq20778);
var seq20778__$1 = cljs.core.next.call(null,seq20778);
var G__20780 = cljs.core.first.call(null,seq20778__$1);
var seq20778__$2 = cljs.core.next.call(null,seq20778__$1);
return cljs.core$macros.declare.cljs$core$IFn$_invoke$arity$variadic(G__20779,G__20780,seq20778__$2);
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
var args__10037__auto__ = [];
var len__10030__auto___20788 = arguments.length;
var i__10031__auto___20789 = (0);
while(true){
if((i__10031__auto___20789 < len__10030__auto___20788)){
args__10037__auto__.push((arguments[i__10031__auto___20789]));

var G__20790 = (i__10031__auto___20789 + (1));
i__10031__auto___20789 = G__20790;
continue;
} else {
}
break;
}

var argseq__10038__auto__ = ((((3) < args__10037__auto__.length))?(new cljs.core.IndexedSeq(args__10037__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.doto.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10038__auto__);
});

cljs.core$macros.doto.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
var gx = cljs.core.gensym.call(null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9759__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9759__auto__ = gx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),cljs.core.map.call(null,((function (gx){
return (function (f){
if(cljs.core.seq_QMARK_.call(null,f)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9759__auto__ = cljs.core.first.call(null,f);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = gx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),cljs.core.next.call(null,f))));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9759__auto__ = f;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = gx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
}
});})(gx))
,forms),(function (){var x__9759__auto__ = gx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
});

cljs.core$macros.doto.cljs$lang$maxFixedArity = (3);

cljs.core$macros.doto.cljs$lang$applyTo = (function (seq20784){
var G__20785 = cljs.core.first.call(null,seq20784);
var seq20784__$1 = cljs.core.next.call(null,seq20784);
var G__20786 = cljs.core.first.call(null,seq20784__$1);
var seq20784__$2 = cljs.core.next.call(null,seq20784__$1);
var G__20787 = cljs.core.first.call(null,seq20784__$2);
var seq20784__$3 = cljs.core.next.call(null,seq20784__$2);
return cljs.core$macros.doto.cljs$core$IFn$_invoke$arity$variadic(G__20785,G__20786,G__20787,seq20784__$3);
});


cljs.core$macros.doto.cljs$lang$macro = true;
cljs.core$macros.parse_impls = (function cljs$core$macros$parse_impls(specs){
var ret = cljs.core.PersistentArrayMap.EMPTY;
var s = specs;
while(true){
if(cljs.core.seq.call(null,s)){
var G__20791 = cljs.core.assoc.call(null,ret,cljs.core.first.call(null,s),cljs.core.take_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,s)));
var G__20792 = cljs.core.drop_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,s));
ret = G__20791;
s = G__20792;
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
return (function (p__20797){
var vec__20798 = p__20797;
var t = cljs.core.nth.call(null,vec__20798,(0),null);
var fs = cljs.core.nth.call(null,vec__20798,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","extend-type","cljs.core$macros/extend-type",1713295201,null)),(function (){var x__9759__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = p;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
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
var args__10037__auto__ = [];
var len__10030__auto___20805 = arguments.length;
var i__10031__auto___20806 = (0);
while(true){
if((i__10031__auto___20806 < len__10030__auto___20805)){
args__10037__auto__.push((arguments[i__10031__auto___20806]));

var G__20807 = (i__10031__auto___20806 + (1));
i__10031__auto___20806 = G__20807;
continue;
} else {
}
break;
}

var argseq__10038__auto__ = ((((3) < args__10037__auto__.length))?(new cljs.core.IndexedSeq(args__10037__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.extend_protocol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10038__auto__);
});

cljs.core$macros.extend_protocol.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p,specs){
return cljs.core$macros.emit_extend_protocol.call(null,p,specs);
});

cljs.core$macros.extend_protocol.cljs$lang$maxFixedArity = (3);

cljs.core$macros.extend_protocol.cljs$lang$applyTo = (function (seq20801){
var G__20802 = cljs.core.first.call(null,seq20801);
var seq20801__$1 = cljs.core.next.call(null,seq20801);
var G__20803 = cljs.core.first.call(null,seq20801__$1);
var seq20801__$2 = cljs.core.next.call(null,seq20801__$1);
var G__20804 = cljs.core.first.call(null,seq20801__$2);
var seq20801__$3 = cljs.core.next.call(null,seq20801__$2);
return cljs.core$macros.extend_protocol.cljs$core$IFn$_invoke$arity$variadic(G__20802,G__20803,G__20804,seq20801__$3);
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
var G__20808 = cljs.core.next.call(null,params__$1);
var G__20809 = cljs.core.conj.call(null,new_params,cljs.core.first.call(null,params__$1));
var G__20810 = lets;
params__$1 = G__20808;
new_params = G__20809;
lets = G__20810;
continue;
} else {
var gparam = cljs.core.gensym.call(null,"p__");
var G__20811 = cljs.core.next.call(null,params__$1);
var G__20812 = cljs.core.conj.call(null,new_params,gparam);
var G__20813 = cljs.core.conj.call(null,cljs.core.conj.call(null,lets,cljs.core.first.call(null,params__$1)),gparam);
params__$1 = G__20811;
new_params = G__20812;
lets = G__20813;
continue;
}
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9759__auto__ = new_params;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9759__auto__ = lets;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
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
var args__10037__auto__ = [];
var len__10030__auto___20820 = arguments.length;
var i__10031__auto___20821 = (0);
while(true){
if((i__10031__auto___20821 < len__10030__auto___20820)){
args__10037__auto__.push((arguments[i__10031__auto___20821]));

var G__20822 = (i__10031__auto___20821 + (1));
i__10031__auto___20821 = G__20822;
continue;
} else {
}
break;
}

var argseq__10038__auto__ = ((((2) < args__10037__auto__.length))?(new cljs.core.IndexedSeq(args__10037__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.fn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10038__auto__);
});

cljs.core$macros.fn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,sigs){
var name = (((cljs.core.first.call(null,sigs) instanceof cljs.core.Symbol))?cljs.core.first.call(null,sigs):null);
var sigs__$1 = (cljs.core.truth_(name)?cljs.core.next.call(null,sigs):sigs);
var sigs__$2 = ((cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,sigs__$1)))?(function (){var x__9759__auto__ = sigs__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})():((cljs.core.seq_QMARK_.call(null,cljs.core.first.call(null,sigs__$1)))?sigs__$1:(function(){throw (new Error(((cljs.core.seq.call(null,sigs__$1))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Parameter declaration "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,sigs__$1)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" should be a vector")].join(''):[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Parameter declaration missing")].join(''))))})()));
var psig = ((function (name,sigs__$1,sigs__$2){
return (function (sig){
if(!(cljs.core.seq_QMARK_.call(null,sig))){
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid signature "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sig),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" should be a list")].join('')));
} else {
}

var vec__20817 = sig;
var seq__20818 = cljs.core.seq.call(null,vec__20817);
var first__20819 = cljs.core.first.call(null,seq__20818);
var seq__20818__$1 = cljs.core.next.call(null,seq__20818);
var params = first__20819;
var body = seq__20818__$1;
var _ = ((!(cljs.core.vector_QMARK_.call(null,params)))?(function(){throw (new Error(((cljs.core.seq_QMARK_.call(null,cljs.core.first.call(null,sigs__$2)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Parameter declaration "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(params),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" should be a vector")].join(''):[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid signature "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sig),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" should be a list")].join(''))))})():null);
var conds = (((cljs.core.next.call(null,body)) && (cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))))?cljs.core.first.call(null,body):null);
var body__$1 = (cljs.core.truth_(conds)?cljs.core.next.call(null,body):body);
var conds__$1 = (function (){var or__8917__auto__ = conds;
if(cljs.core.truth_(or__8917__auto__)){
return or__8917__auto__;
} else {
return cljs.core.meta.call(null,params);
}
})();
var pre = new cljs.core.Keyword(null,"pre","pre",2118456869).cljs$core$IFn$_invoke$arity$1(conds__$1);
var post = new cljs.core.Keyword(null,"post","post",269697687).cljs$core$IFn$_invoke$arity$1(conds__$1);
var body__$2 = (cljs.core.truth_(post)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9759__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"%","%",-950237169,null)),(function (){var x__9759__auto__ = ((((1) < cljs.core.count.call(null,body__$1)))?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),body__$1))):cljs.core.first.call(null,body__$1));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),cljs.core.map.call(null,((function (vec__20817,seq__20818,first__20819,seq__20818__$1,params,body,_,conds,body__$1,conds__$1,pre,post,name,sigs__$1,sigs__$2){
return (function (c){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","assert","cljs.core$macros/assert",1333198789,null)),(function (){var x__9759__auto__ = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
});})(vec__20817,seq__20818,first__20819,seq__20818__$1,params,body,_,conds,body__$1,conds__$1,pre,post,name,sigs__$1,sigs__$2))
,post),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"%","%",-950237169,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})()))):body__$1);
var body__$3 = (cljs.core.truth_(pre)?cljs.core.concat.call(null,cljs.core.map.call(null,((function (vec__20817,seq__20818,first__20819,seq__20818__$1,params,body,_,conds,body__$1,conds__$1,pre,post,body__$2,name,sigs__$1,sigs__$2){
return (function (c){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","assert","cljs.core$macros/assert",1333198789,null)),(function (){var x__9759__auto__ = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
});})(vec__20817,seq__20818,first__20819,seq__20818__$1,params,body,_,conds,body__$1,conds__$1,pre,post,body__$2,name,sigs__$1,sigs__$2))
,pre),body__$2):body__$2);
return cljs.core$macros.maybe_destructured.call(null,params,body__$3);
});})(name,sigs__$1,sigs__$2))
;
var new_sigs = cljs.core.map.call(null,psig,sigs__$2);
return cljs.core.with_meta.call(null,(cljs.core.truth_(name)?cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),name,new_sigs):cljs.core.cons.call(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new_sigs)),cljs.core.meta.call(null,_AMPERSAND_form));
});

cljs.core$macros.fn.cljs$lang$maxFixedArity = (2);

cljs.core$macros.fn.cljs$lang$applyTo = (function (seq20814){
var G__20815 = cljs.core.first.call(null,seq20814);
var seq20814__$1 = cljs.core.next.call(null,seq20814);
var G__20816 = cljs.core.first.call(null,seq20814__$1);
var seq20814__$2 = cljs.core.next.call(null,seq20814__$1);
return cljs.core$macros.fn.cljs$core$IFn$_invoke$arity$variadic(G__20815,G__20816,seq20814__$2);
});


cljs.core$macros.fn.cljs$lang$macro = true;
/**
 * same as defn, yielding non-public def
 */
cljs.core$macros.defn_ = (function cljs$core$macros$defn_(var_args){
var args__10037__auto__ = [];
var len__10030__auto___20827 = arguments.length;
var i__10031__auto___20828 = (0);
while(true){
if((i__10031__auto___20828 < len__10030__auto___20827)){
args__10037__auto__.push((arguments[i__10031__auto___20828]));

var G__20829 = (i__10031__auto___20828 + (1));
i__10031__auto___20828 = G__20829;
continue;
} else {
}
break;
}

var argseq__10038__auto__ = ((((3) < args__10037__auto__.length))?(new cljs.core.IndexedSeq(args__10037__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.defn_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10038__auto__);
});

cljs.core$macros.defn_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,decls){
return cljs.core.list_STAR_.call(null,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null),cljs.core.with_meta.call(null,name,cljs.core.assoc.call(null,cljs.core.meta.call(null,name),new cljs.core.Keyword(null,"private","private",-558947994),true)),decls);
});

cljs.core$macros.defn_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.defn_.cljs$lang$applyTo = (function (seq20823){
var G__20824 = cljs.core.first.call(null,seq20823);
var seq20823__$1 = cljs.core.next.call(null,seq20823);
var G__20825 = cljs.core.first.call(null,seq20823__$1);
var seq20823__$2 = cljs.core.next.call(null,seq20823__$1);
var G__20826 = cljs.core.first.call(null,seq20823__$2);
var seq20823__$3 = cljs.core.next.call(null,seq20823__$2);
return cljs.core$macros.defn_.cljs$core$IFn$_invoke$arity$variadic(G__20824,G__20825,G__20826,seq20823__$3);
});


cljs.core$macros.defn_.cljs$lang$macro = true;
/**
 * bindings => binding-form test
 * 
 *   If test is true, evaluates then with binding-form bound to the value of
 *   test, if not, yields else
 */
cljs.core$macros.if_let = (function cljs$core$macros$if_let(var_args){
var args20831 = [];
var len__10030__auto___20840 = arguments.length;
var i__10031__auto___20841 = (0);
while(true){
if((i__10031__auto___20841 < len__10030__auto___20840)){
args20831.push((arguments[i__10031__auto___20841]));

var G__20842 = (i__10031__auto___20841 + (1));
i__10031__auto___20841 = G__20842;
continue;
} else {
}
break;
}

var G__20839 = args20831.length;
switch (G__20839) {
case 4:
return cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__10049__auto__ = (new cljs.core.IndexedSeq(args20831.slice((5)),(0),null));
return cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__10049__auto__);

}
});

cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,then){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-let","cljs.core$macros/if-let",1291543946,null)),(function (){var x__9759__auto__ = bindings;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = then;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9759__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__20830__auto__","temp__20830__auto__",1634768000,null)),(function (){var x__9759__auto__ = tst;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__20830__auto__","temp__20830__auto__",1634768000,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9759__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9759__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__20830__auto__","temp__20830__auto__",1634768000,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = then;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = else$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
});

cljs.core$macros.if_let.cljs$lang$applyTo = (function (seq20832){
var G__20833 = cljs.core.first.call(null,seq20832);
var seq20832__$1 = cljs.core.next.call(null,seq20832);
var G__20834 = cljs.core.first.call(null,seq20832__$1);
var seq20832__$2 = cljs.core.next.call(null,seq20832__$1);
var G__20835 = cljs.core.first.call(null,seq20832__$2);
var seq20832__$3 = cljs.core.next.call(null,seq20832__$2);
var G__20836 = cljs.core.first.call(null,seq20832__$3);
var seq20832__$4 = cljs.core.next.call(null,seq20832__$3);
var G__20837 = cljs.core.first.call(null,seq20832__$4);
var seq20832__$5 = cljs.core.next.call(null,seq20832__$4);
return cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$variadic(G__20833,G__20834,G__20835,G__20836,G__20837,seq20832__$5);
});

cljs.core$macros.if_let.cljs$lang$maxFixedArity = (5);


cljs.core$macros.if_let.cljs$lang$macro = true;
/**
 * Evaluates test. If logical false, evaluates and returns then expr,
 *   otherwise else expr, if supplied, else nil.
 */
cljs.core$macros.if_not = (function cljs$core$macros$if_not(var_args){
var args20844 = [];
var len__10030__auto___20847 = arguments.length;
var i__10031__auto___20848 = (0);
while(true){
if((i__10031__auto___20848 < len__10030__auto___20847)){
args20844.push((arguments[i__10031__auto___20848]));

var G__20849 = (i__10031__auto___20848 + (1));
i__10031__auto___20848 = G__20849;
continue;
} else {
}
break;
}

var G__20846 = args20844.length;
switch (G__20846) {
case 4:
return cljs.core$macros.if_not.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core$macros.if_not.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((args20844.length - (2)))].join('')));

}
});

cljs.core$macros.if_not.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,test,then){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__9759__auto__ = test;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = then;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
});

cljs.core$macros.if_not.cljs$core$IFn$_invoke$arity$5 = (function (_AMPERSAND_form,_AMPERSAND_env,test,then,else$){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null)),(function (){var x__9759__auto__ = test;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = then;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = else$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
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
var args__10037__auto__ = [];
var len__10030__auto___20856 = arguments.length;
var i__10031__auto___20857 = (0);
while(true){
if((i__10031__auto___20857 < len__10030__auto___20856)){
args__10037__auto__.push((arguments[i__10031__auto___20857]));

var G__20858 = (i__10031__auto___20857 + (1));
i__10031__auto___20857 = G__20858;
continue;
} else {
}
break;
}

var argseq__10038__auto__ = ((((3) < args__10037__auto__.length))?(new cljs.core.IndexedSeq(args__10037__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.letfn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10038__auto__);
});

cljs.core$macros.letfn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,fnspecs,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"letfn*","letfn*",-110097810,null)),(function (){var x__9759__auto__ = cljs.core.vec.call(null,cljs.core.interleave.call(null,cljs.core.map.call(null,cljs.core.first,fnspecs),cljs.core.map.call(null,(function (p1__20851_SHARP_){
return cljs.core.cons.call(null,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null),p1__20851_SHARP_);
}),fnspecs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),body)));
});

cljs.core$macros.letfn.cljs$lang$maxFixedArity = (3);

cljs.core$macros.letfn.cljs$lang$applyTo = (function (seq20852){
var G__20853 = cljs.core.first.call(null,seq20852);
var seq20852__$1 = cljs.core.next.call(null,seq20852);
var G__20854 = cljs.core.first.call(null,seq20852__$1);
var seq20852__$2 = cljs.core.next.call(null,seq20852__$1);
var G__20855 = cljs.core.first.call(null,seq20852__$2);
var seq20852__$3 = cljs.core.next.call(null,seq20852__$2);
return cljs.core$macros.letfn.cljs$core$IFn$_invoke$arity$variadic(G__20853,G__20854,G__20855,seq20852__$3);
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
var args__10037__auto__ = [];
var len__10030__auto___20863 = arguments.length;
var i__10031__auto___20864 = (0);
while(true){
if((i__10031__auto___20864 < len__10030__auto___20863)){
args__10037__auto__.push((arguments[i__10031__auto___20864]));

var G__20865 = (i__10031__auto___20864 + (1));
i__10031__auto___20864 = G__20865;
continue;
} else {
}
break;
}

var argseq__10038__auto__ = ((((3) < args__10037__auto__.length))?(new cljs.core.IndexedSeq(args__10037__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.memfn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10038__auto__);
});

cljs.core$macros.memfn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,args){
var t = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"target"),cljs.core.meta.call(null,name));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9759__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9759__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),args))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9759__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9759__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),args)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
});

cljs.core$macros.memfn.cljs$lang$maxFixedArity = (3);

cljs.core$macros.memfn.cljs$lang$applyTo = (function (seq20859){
var G__20860 = cljs.core.first.call(null,seq20859);
var seq20859__$1 = cljs.core.next.call(null,seq20859);
var G__20861 = cljs.core.first.call(null,seq20859__$1);
var seq20859__$2 = cljs.core.next.call(null,seq20859__$1);
var G__20862 = cljs.core.first.call(null,seq20859__$2);
var seq20859__$3 = cljs.core.next.call(null,seq20859__$2);
return cljs.core$macros.memfn.cljs$core$IFn$_invoke$arity$variadic(G__20860,G__20861,G__20862,seq20859__$3);
});


cljs.core$macros.memfn.cljs$lang$macro = true;
/**
 * Evaluates test. If logical true, evaluates body in an implicit do.
 */
cljs.core$macros.when = (function cljs$core$macros$when(var_args){
var args__10037__auto__ = [];
var len__10030__auto___20870 = arguments.length;
var i__10031__auto___20871 = (0);
while(true){
if((i__10031__auto___20871 < len__10030__auto___20870)){
args__10037__auto__.push((arguments[i__10031__auto___20871]));

var G__20872 = (i__10031__auto___20871 + (1));
i__10031__auto___20871 = G__20872;
continue;
} else {
}
break;
}

var argseq__10038__auto__ = ((((3) < args__10037__auto__.length))?(new cljs.core.IndexedSeq(args__10037__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10038__auto__);
});

cljs.core$macros.when.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,test,body){
return cljs.core._conj.call(null,(function (){var x__9759__auto__ = test;
return cljs.core._conj.call(null,(function (){var x__9759__auto____$1 = cljs.core.cons.call(null,new cljs.core.Symbol(null,"do","do",1686842252,null),body);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto____$1);
})(),x__9759__auto__);
})(),new cljs.core.Symbol(null,"if","if",1181717262,null));
});

cljs.core$macros.when.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when.cljs$lang$applyTo = (function (seq20866){
var G__20867 = cljs.core.first.call(null,seq20866);
var seq20866__$1 = cljs.core.next.call(null,seq20866);
var G__20868 = cljs.core.first.call(null,seq20866__$1);
var seq20866__$2 = cljs.core.next.call(null,seq20866__$1);
var G__20869 = cljs.core.first.call(null,seq20866__$2);
var seq20866__$3 = cljs.core.next.call(null,seq20866__$2);
return cljs.core$macros.when.cljs$core$IFn$_invoke$arity$variadic(G__20867,G__20868,G__20869,seq20866__$3);
});


cljs.core$macros.when.cljs$lang$macro = true;
/**
 * bindings => x xs
 * 
 *   Roughly the same as (when (seq xs) (let [x (first xs)] body)) but xs is evaluated only once
 */
cljs.core$macros.when_first = (function cljs$core$macros$when_first(var_args){
var args__10037__auto__ = [];
var len__10030__auto___20881 = arguments.length;
var i__10031__auto___20882 = (0);
while(true){
if((i__10031__auto___20882 < len__10030__auto___20881)){
args__10037__auto__.push((arguments[i__10031__auto___20882]));

var G__20883 = (i__10031__auto___20882 + (1));
i__10031__auto___20882 = G__20883;
continue;
} else {
}
break;
}

var argseq__10038__auto__ = ((((3) < args__10037__auto__.length))?(new cljs.core.IndexedSeq(args__10037__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when_first.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10038__auto__);
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


var vec__20878 = bindings;
var x = cljs.core.nth.call(null,vec__20878,(0),null);
var xs = cljs.core.nth.call(null,vec__20878,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-let","cljs.core$macros/when-let",-2004472648,null)),(function (){var x__9759__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"xs__20873__auto__","xs__20873__auto__",1761121333,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__9759__auto__ = xs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9759__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9759__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"xs__20873__auto__","xs__20873__auto__",1761121333,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
});

cljs.core$macros.when_first.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when_first.cljs$lang$applyTo = (function (seq20874){
var G__20875 = cljs.core.first.call(null,seq20874);
var seq20874__$1 = cljs.core.next.call(null,seq20874);
var G__20876 = cljs.core.first.call(null,seq20874__$1);
var seq20874__$2 = cljs.core.next.call(null,seq20874__$1);
var G__20877 = cljs.core.first.call(null,seq20874__$2);
var seq20874__$3 = cljs.core.next.call(null,seq20874__$2);
return cljs.core$macros.when_first.cljs$core$IFn$_invoke$arity$variadic(G__20875,G__20876,G__20877,seq20874__$3);
});


cljs.core$macros.when_first.cljs$lang$macro = true;
/**
 * bindings => binding-form test
 * 
 *   When test is true, evaluates body with binding-form bound to the value of test
 */
cljs.core$macros.when_let = (function cljs$core$macros$when_let(var_args){
var args__10037__auto__ = [];
var len__10030__auto___20889 = arguments.length;
var i__10031__auto___20890 = (0);
while(true){
if((i__10031__auto___20890 < len__10030__auto___20889)){
args__10037__auto__.push((arguments[i__10031__auto___20890]));

var G__20891 = (i__10031__auto___20890 + (1));
i__10031__auto___20890 = G__20891;
continue;
} else {
}
break;
}

var argseq__10038__auto__ = ((((3) < args__10037__auto__.length))?(new cljs.core.IndexedSeq(args__10037__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when_let.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10038__auto__);
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9759__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__20884__auto__","temp__20884__auto__",-1566630401,null)),(function (){var x__9759__auto__ = tst;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__20884__auto__","temp__20884__auto__",-1566630401,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9759__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9759__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__20884__auto__","temp__20884__auto__",-1566630401,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
});

cljs.core$macros.when_let.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when_let.cljs$lang$applyTo = (function (seq20885){
var G__20886 = cljs.core.first.call(null,seq20885);
var seq20885__$1 = cljs.core.next.call(null,seq20885);
var G__20887 = cljs.core.first.call(null,seq20885__$1);
var seq20885__$2 = cljs.core.next.call(null,seq20885__$1);
var G__20888 = cljs.core.first.call(null,seq20885__$2);
var seq20885__$3 = cljs.core.next.call(null,seq20885__$2);
return cljs.core$macros.when_let.cljs$core$IFn$_invoke$arity$variadic(G__20886,G__20887,G__20888,seq20885__$3);
});


cljs.core$macros.when_let.cljs$lang$macro = true;
/**
 * Evaluates test. If logical false, evaluates body in an implicit do.
 */
cljs.core$macros.when_not = (function cljs$core$macros$when_not(var_args){
var args__10037__auto__ = [];
var len__10030__auto___20896 = arguments.length;
var i__10031__auto___20897 = (0);
while(true){
if((i__10031__auto___20897 < len__10030__auto___20896)){
args__10037__auto__.push((arguments[i__10031__auto___20897]));

var G__20898 = (i__10031__auto___20897 + (1));
i__10031__auto___20897 = G__20898;
continue;
} else {
}
break;
}

var argseq__10038__auto__ = ((((3) < args__10037__auto__.length))?(new cljs.core.IndexedSeq(args__10037__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when_not.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10038__auto__);
});

cljs.core$macros.when_not.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,test,body){
return cljs.core._conj.call(null,(function (){var x__9759__auto__ = test;
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9759__auto____$1 = cljs.core.cons.call(null,new cljs.core.Symbol(null,"do","do",1686842252,null),body);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto____$1);
})(),null),x__9759__auto__);
})(),new cljs.core.Symbol(null,"if","if",1181717262,null));
});

cljs.core$macros.when_not.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when_not.cljs$lang$applyTo = (function (seq20892){
var G__20893 = cljs.core.first.call(null,seq20892);
var seq20892__$1 = cljs.core.next.call(null,seq20892);
var G__20894 = cljs.core.first.call(null,seq20892__$1);
var seq20892__$2 = cljs.core.next.call(null,seq20892__$1);
var G__20895 = cljs.core.first.call(null,seq20892__$2);
var seq20892__$3 = cljs.core.next.call(null,seq20892__$2);
return cljs.core$macros.when_not.cljs$core$IFn$_invoke$arity$variadic(G__20893,G__20894,G__20895,seq20892__$3);
});


cljs.core$macros.when_not.cljs$lang$macro = true;
/**
 * Repeatedly executes body while test expression is true. Presumes
 *   some side-effect will cause test to become false/nil. Returns nil
 */
cljs.core$macros.while$ = (function cljs$core$macros$while(var_args){
var args__10037__auto__ = [];
var len__10030__auto___20903 = arguments.length;
var i__10031__auto___20904 = (0);
while(true){
if((i__10031__auto___20904 < len__10030__auto___20903)){
args__10037__auto__.push((arguments[i__10031__auto___20904]));

var G__20905 = (i__10031__auto___20904 + (1));
i__10031__auto___20904 = G__20905;
continue;
} else {
}
break;
}

var argseq__10038__auto__ = ((((3) < args__10037__auto__.length))?(new cljs.core.IndexedSeq(args__10037__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.while$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10038__auto__);
});

cljs.core$macros.while$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,test,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__9759__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__9759__auto__ = test;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),body,(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
});

cljs.core$macros.while$.cljs$lang$maxFixedArity = (3);

cljs.core$macros.while$.cljs$lang$applyTo = (function (seq20899){
var G__20900 = cljs.core.first.call(null,seq20899);
var seq20899__$1 = cljs.core.next.call(null,seq20899);
var G__20901 = cljs.core.first.call(null,seq20899__$1);
var seq20899__$2 = cljs.core.next.call(null,seq20899__$1);
var G__20902 = cljs.core.first.call(null,seq20899__$2);
var seq20899__$3 = cljs.core.next.call(null,seq20899__$2);
return cljs.core$macros.while$.cljs$core$IFn$_invoke$arity$variadic(G__20900,G__20901,G__20902,seq20899__$3);
});


cljs.core$macros.while$.cljs$lang$macro = true;
/**
 * Takes an expression and a set of test/form pairs. Threads expr (via ->)
 *   through each form for which the corresponding test
 *   expression is true. Note that, unlike cond branching, cond-> threading does
 *   not short circuit after the first true test expression.
 */
cljs.core$macros.cond__GT_ = (function cljs$core$macros$cond__GT_(var_args){
var args__10037__auto__ = [];
var len__10030__auto___20914 = arguments.length;
var i__10031__auto___20915 = (0);
while(true){
if((i__10031__auto___20915 < len__10030__auto___20914)){
args__10037__auto__.push((arguments[i__10031__auto___20915]));

var G__20916 = (i__10031__auto___20915 + (1));
i__10031__auto___20915 = G__20916;
continue;
} else {
}
break;
}

var argseq__10038__auto__ = ((((3) < args__10037__auto__.length))?(new cljs.core.IndexedSeq(args__10037__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.cond__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10038__auto__);
});

cljs.core$macros.cond__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,clauses){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,clauses))){
} else {
throw (new Error("Assert failed: (even? (count clauses))"));
}

var g = cljs.core.gensym.call(null);
var pstep = ((function (g){
return (function (p__20910){
var vec__20911 = p__20910;
var test = cljs.core.nth.call(null,vec__20911,(0),null);
var step = cljs.core.nth.call(null,vec__20911,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9759__auto__ = test;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","->","cljs.core$macros/->",-1519455206,null)),(function (){var x__9759__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = step;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
});})(g))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9759__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9759__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),cljs.core.interleave.call(null,cljs.core.repeat.call(null,g),cljs.core.map.call(null,pstep,cljs.core.partition.call(null,(2),clauses)))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
});

cljs.core$macros.cond__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.cond__GT_.cljs$lang$applyTo = (function (seq20906){
var G__20907 = cljs.core.first.call(null,seq20906);
var seq20906__$1 = cljs.core.next.call(null,seq20906);
var G__20908 = cljs.core.first.call(null,seq20906__$1);
var seq20906__$2 = cljs.core.next.call(null,seq20906__$1);
var G__20909 = cljs.core.first.call(null,seq20906__$2);
var seq20906__$3 = cljs.core.next.call(null,seq20906__$2);
return cljs.core$macros.cond__GT_.cljs$core$IFn$_invoke$arity$variadic(G__20907,G__20908,G__20909,seq20906__$3);
});


cljs.core$macros.cond__GT_.cljs$lang$macro = true;
/**
 * Takes an expression and a set of test/form pairs. Threads expr (via ->>)
 *   through each form for which the corresponding test expression
 *   is true.  Note that, unlike cond branching, cond->> threading does not short circuit
 *   after the first true test expression.
 */
cljs.core$macros.cond__GT__GT_ = (function cljs$core$macros$cond__GT__GT_(var_args){
var args__10037__auto__ = [];
var len__10030__auto___20925 = arguments.length;
var i__10031__auto___20926 = (0);
while(true){
if((i__10031__auto___20926 < len__10030__auto___20925)){
args__10037__auto__.push((arguments[i__10031__auto___20926]));

var G__20927 = (i__10031__auto___20926 + (1));
i__10031__auto___20926 = G__20927;
continue;
} else {
}
break;
}

var argseq__10038__auto__ = ((((3) < args__10037__auto__.length))?(new cljs.core.IndexedSeq(args__10037__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.cond__GT__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10038__auto__);
});

cljs.core$macros.cond__GT__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,clauses){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,clauses))){
} else {
throw (new Error("Assert failed: (even? (count clauses))"));
}

var g = cljs.core.gensym.call(null);
var pstep = ((function (g){
return (function (p__20921){
var vec__20922 = p__20921;
var test = cljs.core.nth.call(null,vec__20922,(0),null);
var step = cljs.core.nth.call(null,vec__20922,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9759__auto__ = test;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","->>","cljs.core$macros/->>",-1353108561,null)),(function (){var x__9759__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = step;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
});})(g))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9759__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9759__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),cljs.core.interleave.call(null,cljs.core.repeat.call(null,g),cljs.core.map.call(null,pstep,cljs.core.partition.call(null,(2),clauses)))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
});

cljs.core$macros.cond__GT__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.cond__GT__GT_.cljs$lang$applyTo = (function (seq20917){
var G__20918 = cljs.core.first.call(null,seq20917);
var seq20917__$1 = cljs.core.next.call(null,seq20917);
var G__20919 = cljs.core.first.call(null,seq20917__$1);
var seq20917__$2 = cljs.core.next.call(null,seq20917__$1);
var G__20920 = cljs.core.first.call(null,seq20917__$2);
var seq20917__$3 = cljs.core.next.call(null,seq20917__$2);
return cljs.core$macros.cond__GT__GT_.cljs$core$IFn$_invoke$arity$variadic(G__20918,G__20919,G__20920,seq20917__$3);
});


cljs.core$macros.cond__GT__GT_.cljs$lang$macro = true;
/**
 * Binds name to expr, evaluates the first form in the lexical context
 *   of that binding, then binds name to that result, repeating for each
 *   successive form, returning the result of the last form.
 */
cljs.core$macros.as__GT_ = (function cljs$core$macros$as__GT_(var_args){
var args__10037__auto__ = [];
var len__10030__auto___20933 = arguments.length;
var i__10031__auto___20934 = (0);
while(true){
if((i__10031__auto___20934 < len__10030__auto___20933)){
args__10037__auto__.push((arguments[i__10031__auto___20934]));

var G__20935 = (i__10031__auto___20934 + (1));
i__10031__auto___20934 = G__20935;
continue;
} else {
}
break;
}

var argseq__10038__auto__ = ((((4) < args__10037__auto__.length))?(new cljs.core.IndexedSeq(args__10037__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.as__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__10038__auto__);
});

cljs.core$macros.as__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,name,forms){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9759__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9759__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),cljs.core.interleave.call(null,cljs.core.repeat.call(null,name),forms)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
});

cljs.core$macros.as__GT_.cljs$lang$maxFixedArity = (4);

cljs.core$macros.as__GT_.cljs$lang$applyTo = (function (seq20928){
var G__20929 = cljs.core.first.call(null,seq20928);
var seq20928__$1 = cljs.core.next.call(null,seq20928);
var G__20930 = cljs.core.first.call(null,seq20928__$1);
var seq20928__$2 = cljs.core.next.call(null,seq20928__$1);
var G__20931 = cljs.core.first.call(null,seq20928__$2);
var seq20928__$3 = cljs.core.next.call(null,seq20928__$2);
var G__20932 = cljs.core.first.call(null,seq20928__$3);
var seq20928__$4 = cljs.core.next.call(null,seq20928__$3);
return cljs.core$macros.as__GT_.cljs$core$IFn$_invoke$arity$variadic(G__20929,G__20930,G__20931,G__20932,seq20928__$4);
});


cljs.core$macros.as__GT_.cljs$lang$macro = true;
/**
 * When expr is not nil, threads it into the first form (via ->),
 *   and when that result is not nil, through the next etc
 */
cljs.core$macros.some__GT_ = (function cljs$core$macros$some__GT_(var_args){
var args__10037__auto__ = [];
var len__10030__auto___20940 = arguments.length;
var i__10031__auto___20941 = (0);
while(true){
if((i__10031__auto___20941 < len__10030__auto___20940)){
args__10037__auto__.push((arguments[i__10031__auto___20941]));

var G__20942 = (i__10031__auto___20941 + (1));
i__10031__auto___20941 = G__20942;
continue;
} else {
}
break;
}

var argseq__10038__auto__ = ((((3) < args__10037__auto__.length))?(new cljs.core.IndexedSeq(args__10037__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.some__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10038__auto__);
});

cljs.core$macros.some__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,forms){
var g = cljs.core.gensym.call(null);
var pstep = ((function (g){
return (function (step){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__9759__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","->","cljs.core$macros/->",-1519455206,null)),(function (){var x__9759__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = step;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
});})(g))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9759__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9759__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),cljs.core.interleave.call(null,cljs.core.repeat.call(null,g),cljs.core.map.call(null,pstep,forms))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
});

cljs.core$macros.some__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.some__GT_.cljs$lang$applyTo = (function (seq20936){
var G__20937 = cljs.core.first.call(null,seq20936);
var seq20936__$1 = cljs.core.next.call(null,seq20936);
var G__20938 = cljs.core.first.call(null,seq20936__$1);
var seq20936__$2 = cljs.core.next.call(null,seq20936__$1);
var G__20939 = cljs.core.first.call(null,seq20936__$2);
var seq20936__$3 = cljs.core.next.call(null,seq20936__$2);
return cljs.core$macros.some__GT_.cljs$core$IFn$_invoke$arity$variadic(G__20937,G__20938,G__20939,seq20936__$3);
});


cljs.core$macros.some__GT_.cljs$lang$macro = true;
/**
 * When expr is not nil, threads it into the first form (via ->>),
 *   and when that result is not nil, through the next etc
 */
cljs.core$macros.some__GT__GT_ = (function cljs$core$macros$some__GT__GT_(var_args){
var args__10037__auto__ = [];
var len__10030__auto___20947 = arguments.length;
var i__10031__auto___20948 = (0);
while(true){
if((i__10031__auto___20948 < len__10030__auto___20947)){
args__10037__auto__.push((arguments[i__10031__auto___20948]));

var G__20949 = (i__10031__auto___20948 + (1));
i__10031__auto___20948 = G__20949;
continue;
} else {
}
break;
}

var argseq__10038__auto__ = ((((3) < args__10037__auto__.length))?(new cljs.core.IndexedSeq(args__10037__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.some__GT__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10038__auto__);
});

cljs.core$macros.some__GT__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,forms){
var g = cljs.core.gensym.call(null);
var pstep = ((function (g){
return (function (step){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__9759__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","->>","cljs.core$macros/->>",-1353108561,null)),(function (){var x__9759__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = step;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
});})(g))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9759__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9759__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),cljs.core.interleave.call(null,cljs.core.repeat.call(null,g),cljs.core.map.call(null,pstep,forms))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
});

cljs.core$macros.some__GT__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.some__GT__GT_.cljs$lang$applyTo = (function (seq20943){
var G__20944 = cljs.core.first.call(null,seq20943);
var seq20943__$1 = cljs.core.next.call(null,seq20943);
var G__20945 = cljs.core.first.call(null,seq20943__$1);
var seq20943__$2 = cljs.core.next.call(null,seq20943__$1);
var G__20946 = cljs.core.first.call(null,seq20943__$2);
var seq20943__$3 = cljs.core.next.call(null,seq20943__$2);
return cljs.core$macros.some__GT__GT_.cljs$core$IFn$_invoke$arity$variadic(G__20944,G__20945,G__20946,seq20943__$3);
});


cljs.core$macros.some__GT__GT_.cljs$lang$macro = true;
/**
 * bindings => binding-form test
 * 
 *    If test is not nil, evaluates then with binding-form bound to the
 *    value of test, if not, yields else
 */
cljs.core$macros.if_some = (function cljs$core$macros$if_some(var_args){
var args20951 = [];
var len__10030__auto___20960 = arguments.length;
var i__10031__auto___20961 = (0);
while(true){
if((i__10031__auto___20961 < len__10030__auto___20960)){
args20951.push((arguments[i__10031__auto___20961]));

var G__20962 = (i__10031__auto___20961 + (1));
i__10031__auto___20961 = G__20962;
continue;
} else {
}
break;
}

var G__20959 = args20951.length;
switch (G__20959) {
case 4:
return cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__10049__auto__ = (new cljs.core.IndexedSeq(args20951.slice((5)),(0),null));
return cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__10049__auto__);

}
});

cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,then){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-some","cljs.core$macros/if-some",1405341529,null)),(function (){var x__9759__auto__ = bindings;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = then;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9759__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__20950__auto__","temp__20950__auto__",-335940107,null)),(function (){var x__9759__auto__ = tst;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__20950__auto__","temp__20950__auto__",-335940107,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = else$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9759__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9759__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__20950__auto__","temp__20950__auto__",-335940107,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = then;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
});

cljs.core$macros.if_some.cljs$lang$applyTo = (function (seq20952){
var G__20953 = cljs.core.first.call(null,seq20952);
var seq20952__$1 = cljs.core.next.call(null,seq20952);
var G__20954 = cljs.core.first.call(null,seq20952__$1);
var seq20952__$2 = cljs.core.next.call(null,seq20952__$1);
var G__20955 = cljs.core.first.call(null,seq20952__$2);
var seq20952__$3 = cljs.core.next.call(null,seq20952__$2);
var G__20956 = cljs.core.first.call(null,seq20952__$3);
var seq20952__$4 = cljs.core.next.call(null,seq20952__$3);
var G__20957 = cljs.core.first.call(null,seq20952__$4);
var seq20952__$5 = cljs.core.next.call(null,seq20952__$4);
return cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$variadic(G__20953,G__20954,G__20955,G__20956,G__20957,seq20952__$5);
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
var args__10037__auto__ = [];
var len__10030__auto___20969 = arguments.length;
var i__10031__auto___20970 = (0);
while(true){
if((i__10031__auto___20970 < len__10030__auto___20969)){
args__10037__auto__.push((arguments[i__10031__auto___20970]));

var G__20971 = (i__10031__auto___20970 + (1));
i__10031__auto___20970 = G__20971;
continue;
} else {
}
break;
}

var argseq__10038__auto__ = ((((3) < args__10037__auto__.length))?(new cljs.core.IndexedSeq(args__10037__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10038__auto__);
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9759__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__20964__auto__","temp__20964__auto__",-1695945123,null)),(function (){var x__9759__auto__ = tst;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__20964__auto__","temp__20964__auto__",-1695945123,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9759__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9759__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__20964__auto__","temp__20964__auto__",-1695945123,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
});

cljs.core$macros.when_some.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when_some.cljs$lang$applyTo = (function (seq20965){
var G__20966 = cljs.core.first.call(null,seq20965);
var seq20965__$1 = cljs.core.next.call(null,seq20965);
var G__20967 = cljs.core.first.call(null,seq20965__$1);
var seq20965__$2 = cljs.core.next.call(null,seq20965__$1);
var G__20968 = cljs.core.first.call(null,seq20965__$2);
var seq20965__$3 = cljs.core.next.call(null,seq20965__$2);
return cljs.core$macros.when_some.cljs$core$IFn$_invoke$arity$variadic(G__20966,G__20967,G__20968,seq20965__$3);
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

var argdecls = cljs.core.map.call(null,(function (p1__20972_SHARP_){
if(cljs.core.seq_QMARK_.call(null,p1__20972_SHARP_)){
return cljs.core.first.call(null,p1__20972_SHARP_);
} else {
throw (new Error(((cljs.core.seq_QMARK_.call(null,cljs.core.first.call(null,fdecl)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid signature \""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__20972_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\" should be a list")].join(''):[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Parameter declaration \""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__20972_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\" should be a vector")].join(''))));
}
}),fdecl);
var bad_args = cljs.core.seq.call(null,cljs.core.remove.call(null,((function (argdecls){
return (function (p1__20973_SHARP_){
return cljs.core.vector_QMARK_.call(null,p1__20973_SHARP_);
});})(argdecls))
,argdecls));
if(bad_args){
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Parameter declaration \""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,bad_args)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\" should be a vector")].join('')));
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
var G__20974 = cljs.core.conj.call(null,ret,asig.call(null,cljs.core.first.call(null,fdecls)));
var G__20975 = cljs.core.next.call(null,fdecls);
ret = G__20974;
fdecls = G__20975;
continue;
} else {
return cljs.core.seq.call(null,ret);
}
break;
}
} else {
var x__9759__auto__ = asig.call(null,fdecl);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
}
});
/**
 * defs name to have the root value of init iff the named var has no root value,
 *   else init is unevaluated
 */
cljs.core$macros.defonce = (function cljs$core$macros$defonce(_AMPERSAND_form,_AMPERSAND_env,x,init){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-not","cljs.core$macros/when-not",-764302244,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","exists?","cljs.core$macros/exists?",-1828590389,null)),(function (){var x__9759__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"def","def",597100991,null)),(function (){var x__9759__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = init;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
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
return cljs.core.conj.call(null,ret,gseq,cljs.core._conj.call(null,(function (){var x__9759__auto__ = gvec;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
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
var G__20985 = cljs$core$macros$destructure_$_pb.call(null,ret,cljs.core.second.call(null,bs),gseq);
var G__20986 = n;
var G__20987 = cljs.core.nnext.call(null,bs);
var G__20988 = true;
ret = G__20985;
n = G__20986;
bs = G__20987;
seen_rest_QMARK_ = G__20988;
continue;
} else {
if(cljs.core._EQ_.call(null,firstb,new cljs.core.Keyword(null,"as","as",1148689641))){
return cljs$core$macros$destructure_$_pb.call(null,ret,cljs.core.second.call(null,bs),gvec);
} else {
if(seen_rest_QMARK_){
throw (new Error("Unsupported binding form, only :as can follow & parameter"));
} else {
var G__20989 = cljs$core$macros$destructure_$_pb.call(null,(cljs.core.truth_(has_rest)?cljs.core.conj.call(null,ret,gfirst,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null)),(function (){var x__9759__auto__ = gseq;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})()))),gseq,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","next","cljs.core/next",-1291438473,null)),(function (){var x__9759__auto__ = gseq;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())))):ret),firstb,(cljs.core.truth_(has_rest)?gfirst:cljs.core._conj.call(null,(function (){var x__9759__auto__ = gvec;
return cljs.core._conj.call(null,(function (){var x__9759__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,null),x__9759__auto____$1);
})(),x__9759__auto__);
})(),new cljs.core.Symbol("cljs.core","nth","cljs.core/nth",1961052085,null))));
var G__20990 = (n + (1));
var G__20991 = cljs.core.next.call(null,bs);
var G__20992 = seen_rest_QMARK_;
ret = G__20989;
n = G__20990;
bs = G__20991;
seen_rest_QMARK_ = G__20992;
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
.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,bvec__$1,gmap),v__$1),gmap),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","implements?","cljs.core$macros/implements?",-94762250,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","ISeq","cljs.core/ISeq",230133392,null)),(function (){var x__9759__auto__ = gmap;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","hash-map","cljs.core/hash-map",303385767,null)),(function (){var x__9759__auto__ = gmap;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = gmap;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())))));
var bes = (function (){var transforms = cljs.core.reduce.call(null,((function (ret,gmap,defaults,pvec,bents){
return (function (transforms,mk){
if((mk instanceof cljs.core.Keyword)){
var mkns = cljs.core.namespace.call(null,mk);
var mkn = cljs.core.name.call(null,mk);
if(cljs.core._EQ_.call(null,mkn,"keys")){
return cljs.core.assoc.call(null,transforms,mk,((function (mkns,mkn,ret,gmap,defaults,pvec,bents){
return (function (p1__20976_SHARP_){
return cljs.core.keyword.call(null,(function (){var or__8917__auto__ = mkns;
if(cljs.core.truth_(or__8917__auto__)){
return or__8917__auto__;
} else {
return cljs.core.namespace.call(null,p1__20976_SHARP_);
}
})(),cljs.core.name.call(null,p1__20976_SHARP_));
});})(mkns,mkn,ret,gmap,defaults,pvec,bents))
);
} else {
if(cljs.core._EQ_.call(null,mkn,"syms")){
return cljs.core.assoc.call(null,transforms,mk,((function (mkns,mkn,ret,gmap,defaults,pvec,bents){
return (function (p1__20977_SHARP_){
return cljs.core._conj.call(null,(function (){var x__9759__auto__ = cljs.core.symbol.call(null,(function (){var or__8917__auto__ = mkns;
if(cljs.core.truth_(or__8917__auto__)){
return or__8917__auto__;
} else {
return cljs.core.namespace.call(null,p1__20977_SHARP_);
}
})(),cljs.core.name.call(null,p1__20977_SHARP_));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
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
return (function (p1__20978_SHARP_,p2__20979_SHARP_){
return cljs.core.assoc.call(null,p1__20978_SHARP_,p2__20979_SHARP_,cljs.core.val.call(null,entry).call(null,p2__20979_SHARP_));
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
var bv = ((cljs.core.contains_QMARK_.call(null,defaults,local))?cljs.core._conj.call(null,(function (){var x__9759__auto__ = gmap;
return cljs.core._conj.call(null,(function (){var x__9759__auto____$1 = bk;
return cljs.core._conj.call(null,(function (){var x__9759__auto____$2 = defaults.call(null,local);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto____$2);
})(),x__9759__auto____$1);
})(),x__9759__auto__);
})(),new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null)):cljs.core._conj.call(null,(function (){var x__9759__auto__ = gmap;
return cljs.core._conj.call(null,(function (){var x__9759__auto____$1 = bk;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto____$1);
})(),x__9759__auto__);
})(),new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null)));
var G__20993 = ((((bb instanceof cljs.core.Keyword)) || ((bb instanceof cljs.core.Symbol)))?cljs.core.conj.call(null,ret,local,bv):cljs$core$macros$destructure_$_pb.call(null,ret,bb,bv));
var G__20994 = cljs.core.next.call(null,bes);
ret = G__20993;
bes = G__20994;
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Unsupported binding form: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(b)].join('')));

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
return (function (p1__20980_SHARP_){
return (cljs.core.first.call(null,p1__20980_SHARP_) instanceof cljs.core.Keyword);
});})(bents,pb,process_entry))
,bents));
if(temp__4655__auto__){
var kwbs = temp__4655__auto__;
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Unsupported binding key: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ffirst.call(null,kwbs))].join('')));
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


var defname = cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core._STAR_ns_STAR_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)].join(''));
var type = ((typeof default$ === 'string')?"string":((typeof default$ === 'number')?"number":(((default$ === true) || (default$ === false))?"boolean":null)));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","declare","cljs.core$macros/declare",1172642527,null)),(function (){var x__9759__auto__ = cljs.core.symbol.call(null,sym);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),(function (){var x__9759__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("/** @define {"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(type),cljs.core.str.cljs$core$IFn$_invoke$arity$1("} */")].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog","define","goog/define",-352722538,null)),(function (){var x__9759__auto__ = defname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = default$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
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
var args__10037__auto__ = [];
var len__10030__auto___20999 = arguments.length;
var i__10031__auto___21000 = (0);
while(true){
if((i__10031__auto___21000 < len__10030__auto___20999)){
args__10037__auto__.push((arguments[i__10031__auto___21000]));

var G__21001 = (i__10031__auto___21000 + (1));
i__10031__auto___21000 = G__21001;
continue;
} else {
}
break;
}

var argseq__10038__auto__ = ((((3) < args__10037__auto__.length))?(new cljs.core.IndexedSeq(args__10037__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.let$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10038__auto__);
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


return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"let*","let*",1920721458,null)),(function (){var x__9759__auto__ = cljs.core$macros.destructure.call(null,bindings);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),body)));
});

cljs.core$macros.let$.cljs$lang$maxFixedArity = (3);

cljs.core$macros.let$.cljs$lang$applyTo = (function (seq20995){
var G__20996 = cljs.core.first.call(null,seq20995);
var seq20995__$1 = cljs.core.next.call(null,seq20995);
var G__20997 = cljs.core.first.call(null,seq20995__$1);
var seq20995__$2 = cljs.core.next.call(null,seq20995__$1);
var G__20998 = cljs.core.first.call(null,seq20995__$2);
var seq20995__$3 = cljs.core.next.call(null,seq20995__$2);
return cljs.core$macros.let$.cljs$core$IFn$_invoke$arity$variadic(G__20996,G__20997,G__20998,seq20995__$3);
});


cljs.core$macros.let$.cljs$lang$macro = true;
/**
 * Evaluates the exprs in a lexical context in which the symbols in
 *   the binding-forms are bound to their respective init-exprs or parts
 *   therein. Acts as a recur target.
 */
cljs.core$macros.loop = (function cljs$core$macros$loop(var_args){
var args__10037__auto__ = [];
var len__10030__auto___21010 = arguments.length;
var i__10031__auto___21011 = (0);
while(true){
if((i__10031__auto___21011 < len__10030__auto___21010)){
args__10037__auto__.push((arguments[i__10031__auto___21011]));

var G__21012 = (i__10031__auto___21011 + (1));
i__10031__auto___21011 = G__21012;
continue;
} else {
}
break;
}

var argseq__10038__auto__ = ((((3) < args__10037__auto__.length))?(new cljs.core.IndexedSeq(args__10037__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.loop.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10038__auto__);
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"loop*","loop*",615029416,null)),(function (){var x__9759__auto__ = bindings;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
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
return (function (ret,p__21006){
var vec__21007 = p__21006;
var b = cljs.core.nth.call(null,vec__21007,(0),null);
var v = cljs.core.nth.call(null,vec__21007,(1),null);
var g = cljs.core.nth.call(null,vec__21007,(2),null);
if((b instanceof cljs.core.Symbol)){
return cljs.core.conj.call(null,ret,g,v);
} else {
return cljs.core.conj.call(null,ret,g,v,b,g);
}
});})(vs,bs,gs,db))
,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,cljs.core.vector,bs,vs,gs));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9759__auto__ = bfs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"loop*","loop*",615029416,null)),(function (){var x__9759__auto__ = cljs.core.vec.call(null,cljs.core.interleave.call(null,gs,gs));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9759__auto__ = cljs.core.vec.call(null,cljs.core.interleave.call(null,bs,gs));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
}
});

cljs.core$macros.loop.cljs$lang$maxFixedArity = (3);

cljs.core$macros.loop.cljs$lang$applyTo = (function (seq21002){
var G__21003 = cljs.core.first.call(null,seq21002);
var seq21002__$1 = cljs.core.next.call(null,seq21002);
var G__21004 = cljs.core.first.call(null,seq21002__$1);
var seq21002__$2 = cljs.core.next.call(null,seq21002__$1);
var G__21005 = cljs.core.first.call(null,seq21002__$2);
var seq21002__$3 = cljs.core.next.call(null,seq21002__$2);
return cljs.core$macros.loop.cljs$core$IFn$_invoke$arity$variadic(G__21003,G__21004,G__21005,seq21002__$3);
});


cljs.core$macros.loop.cljs$lang$macro = true;
/**
 * protocol fqn -> [partition number, bit]
 */
cljs.core$macros.fast_path_protocols = cljs.core.zipmap.call(null,cljs.core.map.call(null,(function (p1__21013_SHARP_){
return cljs.core.symbol.call(null,"cljs.core",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__21013_SHARP_)].join(''));
}),cljs.core.PersistentVector.fromArray([new cljs.core.Symbol(null,"IFn","IFn",-244881638,null),new cljs.core.Symbol(null,"ICounted","ICounted",-1705786327,null),new cljs.core.Symbol(null,"IEmptyableCollection","IEmptyableCollection",1477271438,null),new cljs.core.Symbol(null,"ICollection","ICollection",-686709190,null),new cljs.core.Symbol(null,"IIndexed","IIndexed",-574812826,null),new cljs.core.Symbol(null,"ASeq","ASeq",266390234,null),new cljs.core.Symbol(null,"ISeq","ISeq",1517365813,null),new cljs.core.Symbol(null,"INext","INext",562211849,null),new cljs.core.Symbol(null,"ILookup","ILookup",784647298,null),new cljs.core.Symbol(null,"IAssociative","IAssociative",-1306431882,null),new cljs.core.Symbol(null,"IMap","IMap",992876629,null),new cljs.core.Symbol(null,"IMapEntry","IMapEntry",-943754199,null),new cljs.core.Symbol(null,"ISet","ISet",-1398072657,null),new cljs.core.Symbol(null,"IStack","IStack",1136769449,null),new cljs.core.Symbol(null,"IVector","IVector",-1120721434,null),new cljs.core.Symbol(null,"IDeref","IDeref",1738423197,null),new cljs.core.Symbol(null,"IDerefWithTimeout","IDerefWithTimeout",2140974319,null),new cljs.core.Symbol(null,"IMeta","IMeta",1095313672,null),new cljs.core.Symbol(null,"IWithMeta","IWithMeta",-509493158,null),new cljs.core.Symbol(null,"IReduce","IReduce",-440384974,null),new cljs.core.Symbol(null,"IKVReduce","IKVReduce",-870856862,null),new cljs.core.Symbol(null,"IEquiv","IEquiv",-1912850869,null),new cljs.core.Symbol(null,"IHash","IHash",-1495374645,null),new cljs.core.Symbol(null,"ISeqable","ISeqable",1349682102,null),new cljs.core.Symbol(null,"ISequential","ISequential",-1626174217,null),new cljs.core.Symbol(null,"IList","IList",1682281311,null),new cljs.core.Symbol(null,"IRecord","IRecord",-903221169,null),new cljs.core.Symbol(null,"IReversible","IReversible",-723048599,null),new cljs.core.Symbol(null,"ISorted","ISorted",-253627362,null),new cljs.core.Symbol(null,"IPrintWithWriter","IPrintWithWriter",-1205316154,null),new cljs.core.Symbol(null,"IWriter","IWriter",-1681087107,null),new cljs.core.Symbol(null,"IPrintWithWriter","IPrintWithWriter",-1205316154,null),new cljs.core.Symbol(null,"IPending","IPending",1229113039,null),new cljs.core.Symbol(null,"IWatchable","IWatchable",-1929659016,null),new cljs.core.Symbol(null,"IEditableCollection","IEditableCollection",-906687187,null),new cljs.core.Symbol(null,"ITransientCollection","ITransientCollection",252832402,null),new cljs.core.Symbol(null,"ITransientAssociative","ITransientAssociative",-1612754624,null),new cljs.core.Symbol(null,"ITransientMap","ITransientMap",298423651,null),new cljs.core.Symbol(null,"ITransientVector","ITransientVector",1978793164,null),new cljs.core.Symbol(null,"ITransientSet","ITransientSet",-575559912,null),new cljs.core.Symbol(null,"IMultiFn","IMultiFn",-1848282794,null),new cljs.core.Symbol(null,"IChunkedSeq","IChunkedSeq",-1299765705,null),new cljs.core.Symbol(null,"IChunkedNext","IChunkedNext",1193289532,null),new cljs.core.Symbol(null,"IComparable","IComparable",1834481627,null),new cljs.core.Symbol(null,"INamed","INamed",357992946,null),new cljs.core.Symbol(null,"ICloneable","ICloneable",1882653160,null),new cljs.core.Symbol(null,"IAtom","IAtom",-1411134312,null),new cljs.core.Symbol(null,"IReset","IReset",-1893729426,null),new cljs.core.Symbol(null,"ISwap","ISwap",484378193,null)], true)),cljs.core.iterate.call(null,(function (p__21014){
var vec__21015 = p__21014;
var p = cljs.core.nth.call(null,vec__21015,(0),null);
var b = cljs.core.nth.call(null,vec__21015,(1),null);
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
var args__10037__auto__ = [];
var len__10030__auto___21021 = arguments.length;
var i__10031__auto___21022 = (0);
while(true){
if((i__10031__auto___21022 < len__10030__auto___21021)){
args__10037__auto__.push((arguments[i__10031__auto___21022]));

var G__21023 = (i__10031__auto___21022 + (1));
i__10031__auto___21022 = G__21023;
continue;
} else {
}
break;
}

var argseq__10038__auto__ = ((((2) < args__10037__auto__.length))?(new cljs.core.IndexedSeq(args__10037__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10038__auto__);
});

cljs.core$macros.str.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
var strs = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,",",cljs.core.repeat.call(null,cljs.core.count.call(null,xs),"cljs.core.str.cljs$core$IFn$_invoke$arity$1(~{})")));
return cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("["),cljs.core.str.cljs$core$IFn$_invoke$arity$1(strs),cljs.core.str.cljs$core$IFn$_invoke$arity$1("].join('')")].join(''),xs);
});

cljs.core$macros.str.cljs$lang$maxFixedArity = (2);

cljs.core$macros.str.cljs$lang$applyTo = (function (seq21018){
var G__21019 = cljs.core.first.call(null,seq21018);
var seq21018__$1 = cljs.core.next.call(null,seq21018);
var G__21020 = cljs.core.first.call(null,seq21018__$1);
var seq21018__$2 = cljs.core.next.call(null,seq21018__$1);
return cljs.core$macros.str.cljs$core$IFn$_invoke$arity$variadic(G__21019,G__21020,seq21018__$2);
});


cljs.core$macros.str.cljs$lang$macro = true;
cljs.core$macros.bool_expr = (function cljs$core$macros$bool_expr(e){
return cljs.core.vary_meta.call(null,e,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null));
});
cljs.core$macros.simple_test_expr_QMARK_ = (function cljs$core$macros$simple_test_expr_QMARK_(env,ast){
var and__8905__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"js","js",1768080579),null,new cljs.core.Keyword(null,"constant","constant",-379609303),null,new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"invoke","invoke",1145927159),null,new cljs.core.Keyword(null,"dot","dot",1442709401),null], null), null).call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast));
if(cljs.core.truth_(and__8905__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null).call(null,cljs.analyzer.infer_tag.call(null,env,ast));
} else {
return and__8905__auto__;
}
});
/**
 * Evaluates exprs one at a time, from left to right. If a form
 *   returns logical false (nil or false), and returns that value and
 *   doesn't evaluate any of the other expressions, otherwise it returns
 *   the value of the last expr. (and) returns true.
 */
cljs.core$macros.and = (function cljs$core$macros$and(var_args){
var args21027 = [];
var len__10030__auto___21034 = arguments.length;
var i__10031__auto___21035 = (0);
while(true){
if((i__10031__auto___21035 < len__10030__auto___21034)){
args21027.push((arguments[i__10031__auto___21035]));

var G__21036 = (i__10031__auto___21035 + (1));
i__10031__auto___21035 = G__21036;
continue;
} else {
}
break;
}

var G__21033 = args21027.length;
switch (G__21033) {
case 2:
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__10049__auto__ = (new cljs.core.IndexedSeq(args21027.slice((3)),(0),null));
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10049__auto__);

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
return (function (p1__21024_SHARP_){
return cljs.core$macros.simple_test_expr_QMARK_.call(null,_AMPERSAND_env,p1__21024_SHARP_);
});})(forms))
,cljs.core.map.call(null,((function (forms){
return (function (p1__21025_SHARP_){
return cljs.analyzer.analyze.call(null,_AMPERSAND_env,p1__21025_SHARP_);
});})(forms))
,forms))){
var and_str = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," && ",cljs.core.repeat.call(null,cljs.core.count.call(null,forms),"(~{})")));
return cljs.core$macros.bool_expr.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),(function (){var x__9759__auto__ = and_str;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),forms))));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9759__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"and__21026__auto__","and__21026__auto__",999895724,null)),(function (){var x__9759__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"and__21026__auto__","and__21026__auto__",999895724,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),next)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"and__21026__auto__","and__21026__auto__",999895724,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
}
});

cljs.core$macros.and.cljs$lang$applyTo = (function (seq21028){
var G__21029 = cljs.core.first.call(null,seq21028);
var seq21028__$1 = cljs.core.next.call(null,seq21028);
var G__21030 = cljs.core.first.call(null,seq21028__$1);
var seq21028__$2 = cljs.core.next.call(null,seq21028__$1);
var G__21031 = cljs.core.first.call(null,seq21028__$2);
var seq21028__$3 = cljs.core.next.call(null,seq21028__$2);
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$variadic(G__21029,G__21030,G__21031,seq21028__$3);
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
var args21041 = [];
var len__10030__auto___21048 = arguments.length;
var i__10031__auto___21049 = (0);
while(true){
if((i__10031__auto___21049 < len__10030__auto___21048)){
args21041.push((arguments[i__10031__auto___21049]));

var G__21050 = (i__10031__auto___21049 + (1));
i__10031__auto___21049 = G__21050;
continue;
} else {
}
break;
}

var G__21047 = args21041.length;
switch (G__21047) {
case 2:
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__10049__auto__ = (new cljs.core.IndexedSeq(args21041.slice((3)),(0),null));
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10049__auto__);

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
return (function (p1__21038_SHARP_){
return cljs.core$macros.simple_test_expr_QMARK_.call(null,_AMPERSAND_env,p1__21038_SHARP_);
});})(forms))
,cljs.core.map.call(null,((function (forms){
return (function (p1__21039_SHARP_){
return cljs.analyzer.analyze.call(null,_AMPERSAND_env,p1__21039_SHARP_);
});})(forms))
,forms))){
var or_str = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," || ",cljs.core.repeat.call(null,cljs.core.count.call(null,forms),"(~{})")));
return cljs.core$macros.bool_expr.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),(function (){var x__9759__auto__ = or_str;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),forms))));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9759__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"or__21040__auto__","or__21040__auto__",660685219,null)),(function (){var x__9759__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"or__21040__auto__","or__21040__auto__",660685219,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"or__21040__auto__","or__21040__auto__",660685219,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","or","cljs.core$macros/or",1346243648,null)),next)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
}
});

cljs.core$macros.or.cljs$lang$applyTo = (function (seq21042){
var G__21043 = cljs.core.first.call(null,seq21042);
var seq21042__$1 = cljs.core.next.call(null,seq21042);
var G__21044 = cljs.core.first.call(null,seq21042__$1);
var seq21042__$2 = cljs.core.next.call(null,seq21042__$1);
var G__21045 = cljs.core.first.call(null,seq21042__$2);
var seq21042__$3 = cljs.core.next.call(null,seq21042__$2);
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$variadic(G__21043,G__21044,G__21045,seq21042__$3);
});

cljs.core$macros.or.cljs$lang$maxFixedArity = (3);


cljs.core$macros.or.cljs$lang$macro = true;
cljs.core$macros.nil_QMARK_ = (function cljs$core$macros$nil_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","coercive-=","cljs.core$macros/coercive-=",-1655776086,null)),(function (){var x__9759__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
});

cljs.core$macros.nil_QMARK_.cljs$lang$macro = true;
cljs.core$macros.some_QMARK_ = (function cljs$core$macros$some_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__9759__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
});

cljs.core$macros.some_QMARK_.cljs$lang$macro = true;
cljs.core$macros.coercive_not = (function cljs$core$macros$coercive_not(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9759__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),"(!~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.coercive_not.cljs$lang$macro = true;
cljs.core$macros.coercive_not_EQ_ = (function cljs$core$macros$coercive_not_EQ_(_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9759__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__9759__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto____$1);
})(),x__9759__auto__);
})(),"(~{} != ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.coercive_not_EQ_.cljs$lang$macro = true;
cljs.core$macros.coercive__EQ_ = (function cljs$core$macros$coercive__EQ_(_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9759__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__9759__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto____$1);
})(),x__9759__auto__);
})(),"(~{} == ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.coercive__EQ_.cljs$lang$macro = true;
cljs.core$macros.coercive_boolean = (function cljs$core$macros$coercive_boolean(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.with_meta.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9759__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),"~{}"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)], null));
});

cljs.core$macros.coercive_boolean.cljs$lang$macro = true;
cljs.core$macros.truth_ = (function cljs$core$macros$truth_(_AMPERSAND_form,_AMPERSAND_env,x){
if((x instanceof cljs.core.Symbol)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("x is substituted twice"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(core/symbol? x)")].join('')));
}

return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9759__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__9759__auto____$1 = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto____$1);
})(),x__9759__auto__);
})(),"(~{} != null && ~{} !== false)"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.truth_.cljs$lang$macro = true;
cljs.core$macros.js_arguments = (function cljs$core$macros$js_arguments(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"arguments"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.js_arguments.cljs$lang$macro = true;
cljs.core$macros.js_delete = (function cljs$core$macros$js_delete(_AMPERSAND_form,_AMPERSAND_env,obj,key){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9759__auto__ = obj;
return cljs.core._conj.call(null,(function (){var x__9759__auto____$1 = key;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto____$1);
})(),x__9759__auto__);
})(),"delete ~{}[~{}]"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.js_delete.cljs$lang$macro = true;
cljs.core$macros.js_in = (function cljs$core$macros$js_in(_AMPERSAND_form,_AMPERSAND_env,key,obj){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9759__auto__ = key;
return cljs.core._conj.call(null,(function (){var x__9759__auto____$1 = obj;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto____$1);
})(),x__9759__auto__);
})(),"~{} in ~{}"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.js_in.cljs$lang$macro = true;
/**
 * Emit JavaScript "debugger;" statement
 */
cljs.core$macros.js_debugger = (function cljs$core$macros$js_debugger(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core._conj.call(null,(function (){var x__9759__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"debugger"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,null),x__9759__auto__);
})(),new cljs.core.Symbol(null,"do","do",1686842252,null));
});

cljs.core$macros.js_debugger.cljs$lang$macro = true;
/**
 * Emit a top-level JavaScript multi-line comment. New lines will create a
 *   new comment line. Comment block will be preceded and followed by a newline
 */
cljs.core$macros.js_comment = (function cljs$core$macros$js_comment(_AMPERSAND_form,_AMPERSAND_env,comment){
var vec__21056 = clojure.string.split.call(null,comment,/\n/);
var seq__21057 = cljs.core.seq.call(null,vec__21056);
var first__21058 = cljs.core.first.call(null,seq__21057);
var seq__21057__$1 = cljs.core.next.call(null,seq__21057);
var x = first__21058;
var ys = seq__21057__$1;
return cljs.core._conj.call(null,(function (){var x__9759__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n/**\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(" * "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n")].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.call(null,cljs.core.str,"",cljs.core.map.call(null,((function (vec__21056,seq__21057,first__21058,seq__21057__$1,x,ys){
return (function (p1__21052_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(" * "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.replace.call(null,p1__21052_SHARP_,/^   /,"")),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n")].join('');
});})(vec__21056,seq__21057,first__21058,seq__21057__$1,x,ys))
,ys))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" */\n")].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.js_comment.cljs$lang$macro = true;
/**
 * EXPERIMENTAL: Subject to change. Unsafely cast a value to a different type.
 */
cljs.core$macros.unsafe_cast = (function cljs$core$macros$unsafe_cast(_AMPERSAND_form,_AMPERSAND_env,t,x){
var cast_expr = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("~{} = /** @type {"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(t),cljs.core.str.cljs$core$IFn$_invoke$arity$1("} */ (~{})")].join('');
return cljs.core._conj.call(null,(function (){var x__9759__auto__ = cast_expr;
return cljs.core._conj.call(null,(function (){var x__9759__auto____$1 = x;
return cljs.core._conj.call(null,(function (){var x__9759__auto____$2 = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto____$2);
})(),x__9759__auto____$1);
})(),x__9759__auto__);
})(),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.unsafe_cast.cljs$lang$macro = true;
/**
 * Emit an inline JavaScript comment.
 */
cljs.core$macros.js_inline_comment = (function cljs$core$macros$js_inline_comment(_AMPERSAND_form,_AMPERSAND_env,comment){
return cljs.core._conj.call(null,(function (){var x__9759__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("/**"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(comment),cljs.core.str.cljs$core$IFn$_invoke$arity$1("*/")].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.js_inline_comment.cljs$lang$macro = true;
cljs.core$macros.true_QMARK_ = (function cljs$core$macros$true_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9759__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),"~{} === true"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.true_QMARK_.cljs$lang$macro = true;
cljs.core$macros.false_QMARK_ = (function cljs$core$macros$false_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9759__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),"~{} === false"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.false_QMARK_.cljs$lang$macro = true;
cljs.core$macros.string_QMARK_ = (function cljs$core$macros$string_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9759__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),"typeof ~{} === 'string'"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.string_QMARK_.cljs$lang$macro = true;
/**
 * Return true if argument exists, analogous to usage of typeof operator
 * in JavaScript.
 */
cljs.core$macros.exists_QMARK_ = (function cljs$core$macros$exists_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9759__auto__ = cljs.core.vary_meta.call(null,x,cljs.core.assoc,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),"typeof ~{} !== 'undefined'"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.exists_QMARK_.cljs$lang$macro = true;
/**
 * Return true if argument is identical to the JavaScript undefined value.
 */
cljs.core$macros.undefined_QMARK_ = (function cljs$core$macros$undefined_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9759__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),"(void 0 === ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.undefined_QMARK_.cljs$lang$macro = true;
cljs.core$macros.identical_QMARK_ = (function cljs$core$macros$identical_QMARK_(_AMPERSAND_form,_AMPERSAND_env,a,b){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9759__auto__ = a;
return cljs.core._conj.call(null,(function (){var x__9759__auto____$1 = b;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto____$1);
})(),x__9759__auto__);
})(),"(~{} === ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.identical_QMARK_.cljs$lang$macro = true;
cljs.core$macros.instance_QMARK_ = (function cljs$core$macros$instance_QMARK_(_AMPERSAND_form,_AMPERSAND_env,c,x){
return cljs.core$macros.bool_expr.call(null,(((c instanceof cljs.core.Symbol))?cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9759__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__9759__auto____$1 = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto____$1);
})(),x__9759__auto__);
})(),"(~{} instanceof ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)):cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9759__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__21059__auto__","c__21059__auto__",1420901107,null)),(function (){var x__9759__auto__ = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__21060__auto__","x__21060__auto__",483004181,null)),(function (){var x__9759__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"(~{} instanceof ~{})"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__21060__auto__","x__21060__auto__",483004181,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__21059__auto__","c__21059__auto__",1420901107,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())))));
});

cljs.core$macros.instance_QMARK_.cljs$lang$macro = true;
cljs.core$macros.number_QMARK_ = (function cljs$core$macros$number_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9759__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),"typeof ~{} === 'number'"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.number_QMARK_.cljs$lang$macro = true;
cljs.core$macros.symbol_QMARK_ = (function cljs$core$macros$symbol_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","instance?","cljs.core$macros/instance?",1829750179,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","Symbol","cljs.core/Symbol",292989338,null)),(function (){var x__9759__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})()))));
});

cljs.core$macros.symbol_QMARK_.cljs$lang$macro = true;
cljs.core$macros.keyword_QMARK_ = (function cljs$core$macros$keyword_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","instance?","cljs.core$macros/instance?",1829750179,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","Keyword","cljs.core/Keyword",-451434488,null)),(function (){var x__9759__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})()))));
});

cljs.core$macros.keyword_QMARK_.cljs$lang$macro = true;
cljs.core$macros.aget = (function cljs$core$macros$aget(var_args){
var args21061 = [];
var len__10030__auto___21069 = arguments.length;
var i__10031__auto___21070 = (0);
while(true){
if((i__10031__auto___21070 < len__10030__auto___21069)){
args21061.push((arguments[i__10031__auto___21070]));

var G__21071 = (i__10031__auto___21070 + (1));
i__10031__auto___21070 = G__21071;
continue;
} else {
}
break;
}

var G__21068 = args21061.length;
switch (G__21068) {
case 4:
return cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__10049__auto__ = (new cljs.core.IndexedSeq(args21061.slice((4)),(0),null));
return cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__10049__auto__);

}
});

cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,a,i){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9759__auto__ = a;
return cljs.core._conj.call(null,(function (){var x__9759__auto____$1 = i;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto____$1);
})(),x__9759__auto__);
})(),"(~{}[~{}])"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,a,i,idxs){
var astr = cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,cljs.core.count.call(null,idxs),"[~{}]"));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),(function (){var x__9759__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("(~{}[~{}]"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(astr),cljs.core.str.cljs$core$IFn$_invoke$arity$1(")")].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = a;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = i;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),idxs)));
});

cljs.core$macros.aget.cljs$lang$applyTo = (function (seq21062){
var G__21063 = cljs.core.first.call(null,seq21062);
var seq21062__$1 = cljs.core.next.call(null,seq21062);
var G__21064 = cljs.core.first.call(null,seq21062__$1);
var seq21062__$2 = cljs.core.next.call(null,seq21062__$1);
var G__21065 = cljs.core.first.call(null,seq21062__$2);
var seq21062__$3 = cljs.core.next.call(null,seq21062__$2);
var G__21066 = cljs.core.first.call(null,seq21062__$3);
var seq21062__$4 = cljs.core.next.call(null,seq21062__$3);
return cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$variadic(G__21063,G__21064,G__21065,G__21066,seq21062__$4);
});

cljs.core$macros.aget.cljs$lang$maxFixedArity = (4);


cljs.core$macros.aget.cljs$lang$macro = true;
cljs.core$macros.aset = (function cljs$core$macros$aset(var_args){
var args21073 = [];
var len__10030__auto___21082 = arguments.length;
var i__10031__auto___21083 = (0);
while(true){
if((i__10031__auto___21083 < len__10030__auto___21082)){
args21073.push((arguments[i__10031__auto___21083]));

var G__21084 = (i__10031__auto___21083 + (1));
i__10031__auto___21083 = G__21084;
continue;
} else {
}
break;
}

var G__21081 = args21073.length;
switch (G__21081) {
case 5:
return cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
var argseq__10049__auto__ = (new cljs.core.IndexedSeq(args21073.slice((5)),(0),null));
return cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__10049__auto__);

}
});

cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$5 = (function (_AMPERSAND_form,_AMPERSAND_env,a,i,v){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9759__auto__ = a;
return cljs.core._conj.call(null,(function (){var x__9759__auto____$1 = i;
return cljs.core._conj.call(null,(function (){var x__9759__auto____$2 = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto____$2);
})(),x__9759__auto____$1);
})(),x__9759__auto__);
})(),"(~{}[~{}] = ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,a,idx,idx2,idxv){
var n = (cljs.core.count.call(null,idxv) - (1));
var astr = cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,n,"[~{}]"));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),(function (){var x__9759__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("(~{}[~{}][~{}]"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(astr),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" = ~{})")].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = a;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = idx2;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),idxv)));
});

cljs.core$macros.aset.cljs$lang$applyTo = (function (seq21074){
var G__21075 = cljs.core.first.call(null,seq21074);
var seq21074__$1 = cljs.core.next.call(null,seq21074);
var G__21076 = cljs.core.first.call(null,seq21074__$1);
var seq21074__$2 = cljs.core.next.call(null,seq21074__$1);
var G__21077 = cljs.core.first.call(null,seq21074__$2);
var seq21074__$3 = cljs.core.next.call(null,seq21074__$2);
var G__21078 = cljs.core.first.call(null,seq21074__$3);
var seq21074__$4 = cljs.core.next.call(null,seq21074__$3);
var G__21079 = cljs.core.first.call(null,seq21074__$4);
var seq21074__$5 = cljs.core.next.call(null,seq21074__$4);
return cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$variadic(G__21075,G__21076,G__21077,G__21078,G__21079,seq21074__$5);
});

cljs.core$macros.aset.cljs$lang$maxFixedArity = (5);


cljs.core$macros.aset.cljs$lang$macro = true;
cljs.core$macros._PLUS_ = (function cljs$core$macros$_PLUS_(var_args){
var args21086 = [];
var len__10030__auto___21094 = arguments.length;
var i__10031__auto___21095 = (0);
while(true){
if((i__10031__auto___21095 < len__10030__auto___21094)){
args21086.push((arguments[i__10031__auto___21095]));

var G__21096 = (i__10031__auto___21095 + (1));
i__10031__auto___21095 = G__21096;
continue;
} else {
}
break;
}

var G__21093 = args21086.length;
switch (G__21093) {
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
var argseq__10049__auto__ = (new cljs.core.IndexedSeq(args21086.slice((4)),(0),null));
return cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__10049__auto__);

}
});

cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return (0);
});

cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9759__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__9759__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto____$1);
})(),x__9759__auto__);
})(),"(~{} + ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),(function (){var x__9759__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),more)));
});

cljs.core$macros._PLUS_.cljs$lang$applyTo = (function (seq21087){
var G__21088 = cljs.core.first.call(null,seq21087);
var seq21087__$1 = cljs.core.next.call(null,seq21087);
var G__21089 = cljs.core.first.call(null,seq21087__$1);
var seq21087__$2 = cljs.core.next.call(null,seq21087__$1);
var G__21090 = cljs.core.first.call(null,seq21087__$2);
var seq21087__$3 = cljs.core.next.call(null,seq21087__$2);
var G__21091 = cljs.core.first.call(null,seq21087__$3);
var seq21087__$4 = cljs.core.next.call(null,seq21087__$3);
return cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$variadic(G__21088,G__21089,G__21090,G__21091,seq21087__$4);
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
var args__10037__auto__ = [];
var len__10030__auto___21101 = arguments.length;
var i__10031__auto___21102 = (0);
while(true){
if((i__10031__auto___21102 < len__10030__auto___21101)){
args__10037__auto__.push((arguments[i__10031__auto___21102]));

var G__21103 = (i__10031__auto___21102 + (1));
i__10031__auto___21102 = G__21103;
continue;
} else {
}
break;
}

var argseq__10038__auto__ = ((((2) < args__10037__auto__.length))?(new cljs.core.IndexedSeq(args__10037__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_add.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10038__auto__);
});

cljs.core$macros.unchecked_add.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),xs)));
});

cljs.core$macros.unchecked_add.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_add.cljs$lang$applyTo = (function (seq21098){
var G__21099 = cljs.core.first.call(null,seq21098);
var seq21098__$1 = cljs.core.next.call(null,seq21098);
var G__21100 = cljs.core.first.call(null,seq21098__$1);
var seq21098__$2 = cljs.core.next.call(null,seq21098__$1);
return cljs.core$macros.unchecked_add.cljs$core$IFn$_invoke$arity$variadic(G__21099,G__21100,seq21098__$2);
});


cljs.core$macros.unchecked_add.cljs$lang$macro = true;
cljs.core$macros.unchecked_add_int = (function cljs$core$macros$unchecked_add_int(var_args){
var args__10037__auto__ = [];
var len__10030__auto___21107 = arguments.length;
var i__10031__auto___21108 = (0);
while(true){
if((i__10031__auto___21108 < len__10030__auto___21107)){
args__10037__auto__.push((arguments[i__10031__auto___21108]));

var G__21109 = (i__10031__auto___21108 + (1));
i__10031__auto___21108 = G__21109;
continue;
} else {
}
break;
}

var argseq__10038__auto__ = ((((2) < args__10037__auto__.length))?(new cljs.core.IndexedSeq(args__10037__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_add_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10038__auto__);
});

cljs.core$macros.unchecked_add_int.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),xs)));
});

cljs.core$macros.unchecked_add_int.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_add_int.cljs$lang$applyTo = (function (seq21104){
var G__21105 = cljs.core.first.call(null,seq21104);
var seq21104__$1 = cljs.core.next.call(null,seq21104);
var G__21106 = cljs.core.first.call(null,seq21104__$1);
var seq21104__$2 = cljs.core.next.call(null,seq21104__$1);
return cljs.core$macros.unchecked_add_int.cljs$core$IFn$_invoke$arity$variadic(G__21105,G__21106,seq21104__$2);
});


cljs.core$macros.unchecked_add_int.cljs$lang$macro = true;
cljs.core$macros.unchecked_dec = (function cljs$core$macros$unchecked_dec(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","dec","cljs.core$macros/dec",-247694061,null)),(function (){var x__9759__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
});

cljs.core$macros.unchecked_dec.cljs$lang$macro = true;
cljs.core$macros.unchecked_dec_int = (function cljs$core$macros$unchecked_dec_int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","dec","cljs.core$macros/dec",-247694061,null)),(function (){var x__9759__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
});

cljs.core$macros.unchecked_dec_int.cljs$lang$macro = true;
cljs.core$macros.unchecked_divide_int = (function cljs$core$macros$unchecked_divide_int(var_args){
var args__10037__auto__ = [];
var len__10030__auto___21113 = arguments.length;
var i__10031__auto___21114 = (0);
while(true){
if((i__10031__auto___21114 < len__10030__auto___21113)){
args__10037__auto__.push((arguments[i__10031__auto___21114]));

var G__21115 = (i__10031__auto___21114 + (1));
i__10031__auto___21114 = G__21115;
continue;
} else {
}
break;
}

var argseq__10038__auto__ = ((((2) < args__10037__auto__.length))?(new cljs.core.IndexedSeq(args__10037__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_divide_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10038__auto__);
});

cljs.core$macros.unchecked_divide_int.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),xs)));
});

cljs.core$macros.unchecked_divide_int.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_divide_int.cljs$lang$applyTo = (function (seq21110){
var G__21111 = cljs.core.first.call(null,seq21110);
var seq21110__$1 = cljs.core.next.call(null,seq21110);
var G__21112 = cljs.core.first.call(null,seq21110__$1);
var seq21110__$2 = cljs.core.next.call(null,seq21110__$1);
return cljs.core$macros.unchecked_divide_int.cljs$core$IFn$_invoke$arity$variadic(G__21111,G__21112,seq21110__$2);
});


cljs.core$macros.unchecked_divide_int.cljs$lang$macro = true;
cljs.core$macros.unchecked_inc = (function cljs$core$macros$unchecked_inc(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),(function (){var x__9759__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
});

cljs.core$macros.unchecked_inc.cljs$lang$macro = true;
cljs.core$macros.unchecked_inc_int = (function cljs$core$macros$unchecked_inc_int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),(function (){var x__9759__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
});

cljs.core$macros.unchecked_inc_int.cljs$lang$macro = true;
cljs.core$macros.unchecked_multiply = (function cljs$core$macros$unchecked_multiply(var_args){
var args__10037__auto__ = [];
var len__10030__auto___21119 = arguments.length;
var i__10031__auto___21120 = (0);
while(true){
if((i__10031__auto___21120 < len__10030__auto___21119)){
args__10037__auto__.push((arguments[i__10031__auto___21120]));

var G__21121 = (i__10031__auto___21120 + (1));
i__10031__auto___21120 = G__21121;
continue;
} else {
}
break;
}

var argseq__10038__auto__ = ((((2) < args__10037__auto__.length))?(new cljs.core.IndexedSeq(args__10037__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_multiply.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10038__auto__);
});

cljs.core$macros.unchecked_multiply.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","*","cljs.core$macros/*",946321529,null)),xs)));
});

cljs.core$macros.unchecked_multiply.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_multiply.cljs$lang$applyTo = (function (seq21116){
var G__21117 = cljs.core.first.call(null,seq21116);
var seq21116__$1 = cljs.core.next.call(null,seq21116);
var G__21118 = cljs.core.first.call(null,seq21116__$1);
var seq21116__$2 = cljs.core.next.call(null,seq21116__$1);
return cljs.core$macros.unchecked_multiply.cljs$core$IFn$_invoke$arity$variadic(G__21117,G__21118,seq21116__$2);
});


cljs.core$macros.unchecked_multiply.cljs$lang$macro = true;
cljs.core$macros.unchecked_multiply_int = (function cljs$core$macros$unchecked_multiply_int(var_args){
var args__10037__auto__ = [];
var len__10030__auto___21125 = arguments.length;
var i__10031__auto___21126 = (0);
while(true){
if((i__10031__auto___21126 < len__10030__auto___21125)){
args__10037__auto__.push((arguments[i__10031__auto___21126]));

var G__21127 = (i__10031__auto___21126 + (1));
i__10031__auto___21126 = G__21127;
continue;
} else {
}
break;
}

var argseq__10038__auto__ = ((((2) < args__10037__auto__.length))?(new cljs.core.IndexedSeq(args__10037__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_multiply_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10038__auto__);
});

cljs.core$macros.unchecked_multiply_int.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","*","cljs.core$macros/*",946321529,null)),xs)));
});

cljs.core$macros.unchecked_multiply_int.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_multiply_int.cljs$lang$applyTo = (function (seq21122){
var G__21123 = cljs.core.first.call(null,seq21122);
var seq21122__$1 = cljs.core.next.call(null,seq21122);
var G__21124 = cljs.core.first.call(null,seq21122__$1);
var seq21122__$2 = cljs.core.next.call(null,seq21122__$1);
return cljs.core$macros.unchecked_multiply_int.cljs$core$IFn$_invoke$arity$variadic(G__21123,G__21124,seq21122__$2);
});


cljs.core$macros.unchecked_multiply_int.cljs$lang$macro = true;
cljs.core$macros.unchecked_negate = (function cljs$core$macros$unchecked_negate(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__9759__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
});

cljs.core$macros.unchecked_negate.cljs$lang$macro = true;
cljs.core$macros.unchecked_negate_int = (function cljs$core$macros$unchecked_negate_int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__9759__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
});

cljs.core$macros.unchecked_negate_int.cljs$lang$macro = true;
cljs.core$macros.unchecked_remainder_int = (function cljs$core$macros$unchecked_remainder_int(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","mod","cljs.core/mod",1925370196,null)),(function (){var x__9759__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
});

cljs.core$macros.unchecked_remainder_int.cljs$lang$macro = true;
cljs.core$macros.unchecked_subtract = (function cljs$core$macros$unchecked_subtract(var_args){
var args__10037__auto__ = [];
var len__10030__auto___21131 = arguments.length;
var i__10031__auto___21132 = (0);
while(true){
if((i__10031__auto___21132 < len__10030__auto___21131)){
args__10037__auto__.push((arguments[i__10031__auto___21132]));

var G__21133 = (i__10031__auto___21132 + (1));
i__10031__auto___21132 = G__21133;
continue;
} else {
}
break;
}

var argseq__10038__auto__ = ((((2) < args__10037__auto__.length))?(new cljs.core.IndexedSeq(args__10037__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_subtract.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10038__auto__);
});

cljs.core$macros.unchecked_subtract.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),xs)));
});

cljs.core$macros.unchecked_subtract.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_subtract.cljs$lang$applyTo = (function (seq21128){
var G__21129 = cljs.core.first.call(null,seq21128);
var seq21128__$1 = cljs.core.next.call(null,seq21128);
var G__21130 = cljs.core.first.call(null,seq21128__$1);
var seq21128__$2 = cljs.core.next.call(null,seq21128__$1);
return cljs.core$macros.unchecked_subtract.cljs$core$IFn$_invoke$arity$variadic(G__21129,G__21130,seq21128__$2);
});


cljs.core$macros.unchecked_subtract.cljs$lang$macro = true;
cljs.core$macros.unchecked_subtract_int = (function cljs$core$macros$unchecked_subtract_int(var_args){
var args__10037__auto__ = [];
var len__10030__auto___21137 = arguments.length;
var i__10031__auto___21138 = (0);
while(true){
if((i__10031__auto___21138 < len__10030__auto___21137)){
args__10037__auto__.push((arguments[i__10031__auto___21138]));

var G__21139 = (i__10031__auto___21138 + (1));
i__10031__auto___21138 = G__21139;
continue;
} else {
}
break;
}

var argseq__10038__auto__ = ((((2) < args__10037__auto__.length))?(new cljs.core.IndexedSeq(args__10037__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_subtract_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10038__auto__);
});

cljs.core$macros.unchecked_subtract_int.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),xs)));
});

cljs.core$macros.unchecked_subtract_int.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_subtract_int.cljs$lang$applyTo = (function (seq21134){
var G__21135 = cljs.core.first.call(null,seq21134);
var seq21134__$1 = cljs.core.next.call(null,seq21134);
var G__21136 = cljs.core.first.call(null,seq21134__$1);
var seq21134__$2 = cljs.core.next.call(null,seq21134__$1);
return cljs.core$macros.unchecked_subtract_int.cljs$core$IFn$_invoke$arity$variadic(G__21135,G__21136,seq21134__$2);
});


cljs.core$macros.unchecked_subtract_int.cljs$lang$macro = true;
cljs.core$macros._ = (function cljs$core$macros$_(var_args){
var args21140 = [];
var len__10030__auto___21148 = arguments.length;
var i__10031__auto___21149 = (0);
while(true){
if((i__10031__auto___21149 < len__10030__auto___21148)){
args21140.push((arguments[i__10031__auto___21149]));

var G__21150 = (i__10031__auto___21149 + (1));
i__10031__auto___21149 = G__21150;
continue;
} else {
}
break;
}

var G__21147 = args21140.length;
switch (G__21147) {
case 3:
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__10049__auto__ = (new cljs.core.IndexedSeq(args21140.slice((4)),(0),null));
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__10049__auto__);

}
});

cljs.core$macros._.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9759__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),"(- ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros._.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9759__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__9759__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto____$1);
})(),x__9759__auto__);
})(),"(~{} - ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros._.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__9759__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),more)));
});

cljs.core$macros._.cljs$lang$applyTo = (function (seq21141){
var G__21142 = cljs.core.first.call(null,seq21141);
var seq21141__$1 = cljs.core.next.call(null,seq21141);
var G__21143 = cljs.core.first.call(null,seq21141__$1);
var seq21141__$2 = cljs.core.next.call(null,seq21141__$1);
var G__21144 = cljs.core.first.call(null,seq21141__$2);
var seq21141__$3 = cljs.core.next.call(null,seq21141__$2);
var G__21145 = cljs.core.first.call(null,seq21141__$3);
var seq21141__$4 = cljs.core.next.call(null,seq21141__$3);
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$variadic(G__21142,G__21143,G__21144,G__21145,seq21141__$4);
});

cljs.core$macros._.cljs$lang$maxFixedArity = (4);


cljs.core$macros._.cljs$lang$macro = true;
cljs.core$macros._STAR_ = (function cljs$core$macros$_STAR_(var_args){
var args21152 = [];
var len__10030__auto___21160 = arguments.length;
var i__10031__auto___21161 = (0);
while(true){
if((i__10031__auto___21161 < len__10030__auto___21160)){
args21152.push((arguments[i__10031__auto___21161]));

var G__21162 = (i__10031__auto___21161 + (1));
i__10031__auto___21161 = G__21162;
continue;
} else {
}
break;
}

var G__21159 = args21152.length;
switch (G__21159) {
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
var argseq__10049__auto__ = (new cljs.core.IndexedSeq(args21152.slice((4)),(0),null));
return cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__10049__auto__);

}
});

cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return (1);
});

cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9759__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__9759__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto____$1);
})(),x__9759__auto__);
})(),"(~{} * ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","*","cljs.core$macros/*",946321529,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","*","cljs.core$macros/*",946321529,null)),(function (){var x__9759__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),more)));
});

cljs.core$macros._STAR_.cljs$lang$applyTo = (function (seq21153){
var G__21154 = cljs.core.first.call(null,seq21153);
var seq21153__$1 = cljs.core.next.call(null,seq21153);
var G__21155 = cljs.core.first.call(null,seq21153__$1);
var seq21153__$2 = cljs.core.next.call(null,seq21153__$1);
var G__21156 = cljs.core.first.call(null,seq21153__$2);
var seq21153__$3 = cljs.core.next.call(null,seq21153__$2);
var G__21157 = cljs.core.first.call(null,seq21153__$3);
var seq21153__$4 = cljs.core.next.call(null,seq21153__$3);
return cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$variadic(G__21154,G__21155,G__21156,G__21157,seq21153__$4);
});

cljs.core$macros._STAR_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._STAR_.cljs$lang$macro = true;
cljs.core$macros._SLASH_ = (function cljs$core$macros$_SLASH_(var_args){
var args21164 = [];
var len__10030__auto___21172 = arguments.length;
var i__10031__auto___21173 = (0);
while(true){
if((i__10031__auto___21173 < len__10030__auto___21172)){
args21164.push((arguments[i__10031__auto___21173]));

var G__21174 = (i__10031__auto___21173 + (1));
i__10031__auto___21173 = G__21174;
continue;
} else {
}
break;
}

var G__21171 = args21164.length;
switch (G__21171) {
case 3:
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__10049__auto__ = (new cljs.core.IndexedSeq(args21164.slice((4)),(0),null));
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__10049__auto__);

}
});

cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)),(function (){var x__9759__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
});

cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9759__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__9759__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto____$1);
})(),x__9759__auto__);
})(),"(~{} / ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),(function (){var x__9759__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),more)));
});

cljs.core$macros._SLASH_.cljs$lang$applyTo = (function (seq21165){
var G__21166 = cljs.core.first.call(null,seq21165);
var seq21165__$1 = cljs.core.next.call(null,seq21165);
var G__21167 = cljs.core.first.call(null,seq21165__$1);
var seq21165__$2 = cljs.core.next.call(null,seq21165__$1);
var G__21168 = cljs.core.first.call(null,seq21165__$2);
var seq21165__$3 = cljs.core.next.call(null,seq21165__$2);
var G__21169 = cljs.core.first.call(null,seq21165__$3);
var seq21165__$4 = cljs.core.next.call(null,seq21165__$3);
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$variadic(G__21166,G__21167,G__21168,G__21169,seq21165__$4);
});

cljs.core$macros._SLASH_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._SLASH_.cljs$lang$macro = true;
cljs.core$macros.divide = (function cljs$core$macros$divide(var_args){
var args21176 = [];
var len__10030__auto___21184 = arguments.length;
var i__10031__auto___21185 = (0);
while(true){
if((i__10031__auto___21185 < len__10030__auto___21184)){
args21176.push((arguments[i__10031__auto___21185]));

var G__21186 = (i__10031__auto___21185 + (1));
i__10031__auto___21185 = G__21186;
continue;
} else {
}
break;
}

var G__21183 = args21176.length;
switch (G__21183) {
case 3:
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__10049__auto__ = (new cljs.core.IndexedSeq(args21176.slice((4)),(0),null));
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__10049__auto__);

}
});

cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)),(function (){var x__9759__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
});

cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9759__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__9759__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto____$1);
})(),x__9759__auto__);
})(),"(~{} / ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),(function (){var x__9759__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),more)));
});

cljs.core$macros.divide.cljs$lang$applyTo = (function (seq21177){
var G__21178 = cljs.core.first.call(null,seq21177);
var seq21177__$1 = cljs.core.next.call(null,seq21177);
var G__21179 = cljs.core.first.call(null,seq21177__$1);
var seq21177__$2 = cljs.core.next.call(null,seq21177__$1);
var G__21180 = cljs.core.first.call(null,seq21177__$2);
var seq21177__$3 = cljs.core.next.call(null,seq21177__$2);
var G__21181 = cljs.core.first.call(null,seq21177__$3);
var seq21177__$4 = cljs.core.next.call(null,seq21177__$3);
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$variadic(G__21178,G__21179,G__21180,G__21181,seq21177__$4);
});

cljs.core$macros.divide.cljs$lang$maxFixedArity = (4);


cljs.core$macros.divide.cljs$lang$macro = true;
cljs.core$macros._LT_ = (function cljs$core$macros$_LT_(var_args){
var args21188 = [];
var len__10030__auto___21196 = arguments.length;
var i__10031__auto___21197 = (0);
while(true){
if((i__10031__auto___21197 < len__10030__auto___21196)){
args21188.push((arguments[i__10031__auto___21197]));

var G__21198 = (i__10031__auto___21197 + (1));
i__10031__auto___21197 = G__21198;
continue;
} else {
}
break;
}

var G__21195 = args21188.length;
switch (G__21195) {
case 3:
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__10049__auto__ = (new cljs.core.IndexedSeq(args21188.slice((4)),(0),null));
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__10049__auto__);

}
});

cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9759__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__9759__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto____$1);
})(),x__9759__auto__);
})(),"(~{} < ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__9759__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__9759__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),more)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
});

cljs.core$macros._LT_.cljs$lang$applyTo = (function (seq21189){
var G__21190 = cljs.core.first.call(null,seq21189);
var seq21189__$1 = cljs.core.next.call(null,seq21189);
var G__21191 = cljs.core.first.call(null,seq21189__$1);
var seq21189__$2 = cljs.core.next.call(null,seq21189__$1);
var G__21192 = cljs.core.first.call(null,seq21189__$2);
var seq21189__$3 = cljs.core.next.call(null,seq21189__$2);
var G__21193 = cljs.core.first.call(null,seq21189__$3);
var seq21189__$4 = cljs.core.next.call(null,seq21189__$3);
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$variadic(G__21190,G__21191,G__21192,G__21193,seq21189__$4);
});

cljs.core$macros._LT_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._LT_.cljs$lang$macro = true;
cljs.core$macros._LT__EQ_ = (function cljs$core$macros$_LT__EQ_(var_args){
var args21200 = [];
var len__10030__auto___21208 = arguments.length;
var i__10031__auto___21209 = (0);
while(true){
if((i__10031__auto___21209 < len__10030__auto___21208)){
args21200.push((arguments[i__10031__auto___21209]));

var G__21210 = (i__10031__auto___21209 + (1));
i__10031__auto___21209 = G__21210;
continue;
} else {
}
break;
}

var G__21207 = args21200.length;
switch (G__21207) {
case 3:
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__10049__auto__ = (new cljs.core.IndexedSeq(args21200.slice((4)),(0),null));
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__10049__auto__);

}
});

cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9759__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__9759__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto____$1);
})(),x__9759__auto__);
})(),"(~{} <= ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<=","cljs.core$macros/<=",1865244377,null)),(function (){var x__9759__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<=","cljs.core$macros/<=",1865244377,null)),(function (){var x__9759__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),more)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
});

cljs.core$macros._LT__EQ_.cljs$lang$applyTo = (function (seq21201){
var G__21202 = cljs.core.first.call(null,seq21201);
var seq21201__$1 = cljs.core.next.call(null,seq21201);
var G__21203 = cljs.core.first.call(null,seq21201__$1);
var seq21201__$2 = cljs.core.next.call(null,seq21201__$1);
var G__21204 = cljs.core.first.call(null,seq21201__$2);
var seq21201__$3 = cljs.core.next.call(null,seq21201__$2);
var G__21205 = cljs.core.first.call(null,seq21201__$3);
var seq21201__$4 = cljs.core.next.call(null,seq21201__$3);
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__21202,G__21203,G__21204,G__21205,seq21201__$4);
});

cljs.core$macros._LT__EQ_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._LT__EQ_.cljs$lang$macro = true;
cljs.core$macros._GT_ = (function cljs$core$macros$_GT_(var_args){
var args21212 = [];
var len__10030__auto___21220 = arguments.length;
var i__10031__auto___21221 = (0);
while(true){
if((i__10031__auto___21221 < len__10030__auto___21220)){
args21212.push((arguments[i__10031__auto___21221]));

var G__21222 = (i__10031__auto___21221 + (1));
i__10031__auto___21221 = G__21222;
continue;
} else {
}
break;
}

var G__21219 = args21212.length;
switch (G__21219) {
case 3:
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__10049__auto__ = (new cljs.core.IndexedSeq(args21212.slice((4)),(0),null));
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__10049__auto__);

}
});

cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9759__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__9759__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto____$1);
})(),x__9759__auto__);
})(),"(~{} > ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros",">","cljs.core$macros/>",1703297853,null)),(function (){var x__9759__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros",">","cljs.core$macros/>",1703297853,null)),(function (){var x__9759__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),more)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
});

cljs.core$macros._GT_.cljs$lang$applyTo = (function (seq21213){
var G__21214 = cljs.core.first.call(null,seq21213);
var seq21213__$1 = cljs.core.next.call(null,seq21213);
var G__21215 = cljs.core.first.call(null,seq21213__$1);
var seq21213__$2 = cljs.core.next.call(null,seq21213__$1);
var G__21216 = cljs.core.first.call(null,seq21213__$2);
var seq21213__$3 = cljs.core.next.call(null,seq21213__$2);
var G__21217 = cljs.core.first.call(null,seq21213__$3);
var seq21213__$4 = cljs.core.next.call(null,seq21213__$3);
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$variadic(G__21214,G__21215,G__21216,G__21217,seq21213__$4);
});

cljs.core$macros._GT_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._GT_.cljs$lang$macro = true;
cljs.core$macros._GT__EQ_ = (function cljs$core$macros$_GT__EQ_(var_args){
var args21224 = [];
var len__10030__auto___21232 = arguments.length;
var i__10031__auto___21233 = (0);
while(true){
if((i__10031__auto___21233 < len__10030__auto___21232)){
args21224.push((arguments[i__10031__auto___21233]));

var G__21234 = (i__10031__auto___21233 + (1));
i__10031__auto___21233 = G__21234;
continue;
} else {
}
break;
}

var G__21231 = args21224.length;
switch (G__21231) {
case 3:
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__10049__auto__ = (new cljs.core.IndexedSeq(args21224.slice((4)),(0),null));
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__10049__auto__);

}
});

cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9759__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__9759__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto____$1);
})(),x__9759__auto__);
})(),"(~{} >= ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros",">=","cljs.core$macros/>=",527849062,null)),(function (){var x__9759__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros",">=","cljs.core$macros/>=",527849062,null)),(function (){var x__9759__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),more)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
});

cljs.core$macros._GT__EQ_.cljs$lang$applyTo = (function (seq21225){
var G__21226 = cljs.core.first.call(null,seq21225);
var seq21225__$1 = cljs.core.next.call(null,seq21225);
var G__21227 = cljs.core.first.call(null,seq21225__$1);
var seq21225__$2 = cljs.core.next.call(null,seq21225__$1);
var G__21228 = cljs.core.first.call(null,seq21225__$2);
var seq21225__$3 = cljs.core.next.call(null,seq21225__$2);
var G__21229 = cljs.core.first.call(null,seq21225__$3);
var seq21225__$4 = cljs.core.next.call(null,seq21225__$3);
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__21226,G__21227,G__21228,G__21229,seq21225__$4);
});

cljs.core$macros._GT__EQ_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._GT__EQ_.cljs$lang$macro = true;
cljs.core$macros._EQ__EQ_ = (function cljs$core$macros$_EQ__EQ_(var_args){
var args21236 = [];
var len__10030__auto___21244 = arguments.length;
var i__10031__auto___21245 = (0);
while(true){
if((i__10031__auto___21245 < len__10030__auto___21244)){
args21236.push((arguments[i__10031__auto___21245]));

var G__21246 = (i__10031__auto___21245 + (1));
i__10031__auto___21245 = G__21246;
continue;
} else {
}
break;
}

var G__21243 = args21236.length;
switch (G__21243) {
case 3:
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__10049__auto__ = (new cljs.core.IndexedSeq(args21236.slice((4)),(0),null));
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__10049__auto__);

}
});

cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9759__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__9759__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto____$1);
})(),x__9759__auto__);
})(),"(~{} === ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","==","cljs.core$macros/==",-818551413,null)),(function (){var x__9759__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","==","cljs.core$macros/==",-818551413,null)),(function (){var x__9759__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),more)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
});

cljs.core$macros._EQ__EQ_.cljs$lang$applyTo = (function (seq21237){
var G__21238 = cljs.core.first.call(null,seq21237);
var seq21237__$1 = cljs.core.next.call(null,seq21237);
var G__21239 = cljs.core.first.call(null,seq21237__$1);
var seq21237__$2 = cljs.core.next.call(null,seq21237__$1);
var G__21240 = cljs.core.first.call(null,seq21237__$2);
var seq21237__$3 = cljs.core.next.call(null,seq21237__$2);
var G__21241 = cljs.core.first.call(null,seq21237__$3);
var seq21237__$4 = cljs.core.next.call(null,seq21237__$3);
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__21238,G__21239,G__21240,G__21241,seq21237__$4);
});

cljs.core$macros._EQ__EQ_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._EQ__EQ_.cljs$lang$macro = true;
cljs.core$macros.dec = (function cljs$core$macros$dec(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__9759__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)))));
});

cljs.core$macros.dec.cljs$lang$macro = true;
cljs.core$macros.inc = (function cljs$core$macros$inc(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),(function (){var x__9759__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)))));
});

cljs.core$macros.inc.cljs$lang$macro = true;
cljs.core$macros.zero_QMARK_ = (function cljs$core$macros$zero_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","==","cljs.core$macros/==",-818551413,null)),(function (){var x__9759__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)))));
});

cljs.core$macros.zero_QMARK_.cljs$lang$macro = true;
cljs.core$macros.pos_QMARK_ = (function cljs$core$macros$pos_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros",">","cljs.core$macros/>",1703297853,null)),(function (){var x__9759__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)))));
});

cljs.core$macros.pos_QMARK_.cljs$lang$macro = true;
cljs.core$macros.neg_QMARK_ = (function cljs$core$macros$neg_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__9759__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)))));
});

cljs.core$macros.neg_QMARK_.cljs$lang$macro = true;
cljs.core$macros.max = (function cljs$core$macros$max(var_args){
var args21250 = [];
var len__10030__auto___21258 = arguments.length;
var i__10031__auto___21259 = (0);
while(true){
if((i__10031__auto___21259 < len__10030__auto___21258)){
args21250.push((arguments[i__10031__auto___21259]));

var G__21260 = (i__10031__auto___21259 + (1));
i__10031__auto___21259 = G__21260;
continue;
} else {
}
break;
}

var G__21257 = args21250.length;
switch (G__21257) {
case 3:
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__10049__auto__ = (new cljs.core.IndexedSeq(args21250.slice((4)),(0),null));
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__10049__auto__);

}
});

cljs.core$macros.max.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.max.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9759__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__21248__auto__","x__21248__auto__",-423162255,null)),(function (){var x__9759__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__21249__auto__","y__21249__auto__",579176741,null)),(function (){var x__9759__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"((~{} > ~{}) ? ~{} : ~{})"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__21248__auto__","x__21248__auto__",-423162255,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__21249__auto__","y__21249__auto__",579176741,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__21248__auto__","x__21248__auto__",-423162255,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__21249__auto__","y__21249__auto__",579176741,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
});

cljs.core$macros.max.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","max","cljs.core$macros/max",1176150699,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","max","cljs.core$macros/max",1176150699,null)),(function (){var x__9759__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),more)));
});

cljs.core$macros.max.cljs$lang$applyTo = (function (seq21251){
var G__21252 = cljs.core.first.call(null,seq21251);
var seq21251__$1 = cljs.core.next.call(null,seq21251);
var G__21253 = cljs.core.first.call(null,seq21251__$1);
var seq21251__$2 = cljs.core.next.call(null,seq21251__$1);
var G__21254 = cljs.core.first.call(null,seq21251__$2);
var seq21251__$3 = cljs.core.next.call(null,seq21251__$2);
var G__21255 = cljs.core.first.call(null,seq21251__$3);
var seq21251__$4 = cljs.core.next.call(null,seq21251__$3);
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$variadic(G__21252,G__21253,G__21254,G__21255,seq21251__$4);
});

cljs.core$macros.max.cljs$lang$maxFixedArity = (4);


cljs.core$macros.max.cljs$lang$macro = true;
cljs.core$macros.min = (function cljs$core$macros$min(var_args){
var args21264 = [];
var len__10030__auto___21272 = arguments.length;
var i__10031__auto___21273 = (0);
while(true){
if((i__10031__auto___21273 < len__10030__auto___21272)){
args21264.push((arguments[i__10031__auto___21273]));

var G__21274 = (i__10031__auto___21273 + (1));
i__10031__auto___21273 = G__21274;
continue;
} else {
}
break;
}

var G__21271 = args21264.length;
switch (G__21271) {
case 3:
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__10049__auto__ = (new cljs.core.IndexedSeq(args21264.slice((4)),(0),null));
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__10049__auto__);

}
});

cljs.core$macros.min.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.min.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9759__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__21262__auto__","x__21262__auto__",2010694990,null)),(function (){var x__9759__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__21263__auto__","y__21263__auto__",268917186,null)),(function (){var x__9759__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"((~{} < ~{}) ? ~{} : ~{})"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__21262__auto__","x__21262__auto__",2010694990,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__21263__auto__","y__21263__auto__",268917186,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__21262__auto__","x__21262__auto__",2010694990,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__21263__auto__","y__21263__auto__",268917186,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
});

cljs.core$macros.min.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","min","cljs.core$macros/min",1499775161,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","min","cljs.core$macros/min",1499775161,null)),(function (){var x__9759__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),more)));
});

cljs.core$macros.min.cljs$lang$applyTo = (function (seq21265){
var G__21266 = cljs.core.first.call(null,seq21265);
var seq21265__$1 = cljs.core.next.call(null,seq21265);
var G__21267 = cljs.core.first.call(null,seq21265__$1);
var seq21265__$2 = cljs.core.next.call(null,seq21265__$1);
var G__21268 = cljs.core.first.call(null,seq21265__$2);
var seq21265__$3 = cljs.core.next.call(null,seq21265__$2);
var G__21269 = cljs.core.first.call(null,seq21265__$3);
var seq21265__$4 = cljs.core.next.call(null,seq21265__$3);
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$variadic(G__21266,G__21267,G__21268,G__21269,seq21265__$4);
});

cljs.core$macros.min.cljs$lang$maxFixedArity = (4);


cljs.core$macros.min.cljs$lang$macro = true;
cljs.core$macros.js_mod = (function cljs$core$macros$js_mod(_AMPERSAND_form,_AMPERSAND_env,num,div){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9759__auto__ = num;
return cljs.core._conj.call(null,(function (){var x__9759__auto____$1 = div;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto____$1);
})(),x__9759__auto__);
})(),"(~{} % ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.js_mod.cljs$lang$macro = true;
cljs.core$macros.bit_not = (function cljs$core$macros$bit_not(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9759__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),"(~ ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_not.cljs$lang$macro = true;
cljs.core$macros.bit_and = (function cljs$core$macros$bit_and(var_args){
var args21276 = [];
var len__10030__auto___21284 = arguments.length;
var i__10031__auto___21285 = (0);
while(true){
if((i__10031__auto___21285 < len__10030__auto___21284)){
args21276.push((arguments[i__10031__auto___21285]));

var G__21286 = (i__10031__auto___21285 + (1));
i__10031__auto___21285 = G__21286;
continue;
} else {
}
break;
}

var G__21283 = args21276.length;
switch (G__21283) {
case 4:
return cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__10049__auto__ = (new cljs.core.IndexedSeq(args21276.slice((4)),(0),null));
return cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__10049__auto__);

}
});

cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9759__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__9759__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto____$1);
})(),x__9759__auto__);
})(),"(~{} & ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-and","cljs.core$macros/bit-and",-1069060797,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-and","cljs.core$macros/bit-and",-1069060797,null)),(function (){var x__9759__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),more)));
});

cljs.core$macros.bit_and.cljs$lang$applyTo = (function (seq21277){
var G__21278 = cljs.core.first.call(null,seq21277);
var seq21277__$1 = cljs.core.next.call(null,seq21277);
var G__21279 = cljs.core.first.call(null,seq21277__$1);
var seq21277__$2 = cljs.core.next.call(null,seq21277__$1);
var G__21280 = cljs.core.first.call(null,seq21277__$2);
var seq21277__$3 = cljs.core.next.call(null,seq21277__$2);
var G__21281 = cljs.core.first.call(null,seq21277__$3);
var seq21277__$4 = cljs.core.next.call(null,seq21277__$3);
return cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$variadic(G__21278,G__21279,G__21280,G__21281,seq21277__$4);
});

cljs.core$macros.bit_and.cljs$lang$maxFixedArity = (4);


cljs.core$macros.bit_and.cljs$lang$macro = true;
cljs.core$macros.unsafe_bit_and = (function cljs$core$macros$unsafe_bit_and(var_args){
var args21288 = [];
var len__10030__auto___21296 = arguments.length;
var i__10031__auto___21297 = (0);
while(true){
if((i__10031__auto___21297 < len__10030__auto___21296)){
args21288.push((arguments[i__10031__auto___21297]));

var G__21298 = (i__10031__auto___21297 + (1));
i__10031__auto___21297 = G__21298;
continue;
} else {
}
break;
}

var G__21295 = args21288.length;
switch (G__21295) {
case 4:
return cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__10049__auto__ = (new cljs.core.IndexedSeq(args21288.slice((4)),(0),null));
return cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__10049__auto__);

}
});

cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9759__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__9759__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto____$1);
})(),x__9759__auto__);
})(),"(~{} & ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__9759__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),more)));
});

cljs.core$macros.unsafe_bit_and.cljs$lang$applyTo = (function (seq21289){
var G__21290 = cljs.core.first.call(null,seq21289);
var seq21289__$1 = cljs.core.next.call(null,seq21289);
var G__21291 = cljs.core.first.call(null,seq21289__$1);
var seq21289__$2 = cljs.core.next.call(null,seq21289__$1);
var G__21292 = cljs.core.first.call(null,seq21289__$2);
var seq21289__$3 = cljs.core.next.call(null,seq21289__$2);
var G__21293 = cljs.core.first.call(null,seq21289__$3);
var seq21289__$4 = cljs.core.next.call(null,seq21289__$3);
return cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$variadic(G__21290,G__21291,G__21292,G__21293,seq21289__$4);
});

cljs.core$macros.unsafe_bit_and.cljs$lang$maxFixedArity = (4);


cljs.core$macros.unsafe_bit_and.cljs$lang$macro = true;
cljs.core$macros.bit_or = (function cljs$core$macros$bit_or(var_args){
var args21300 = [];
var len__10030__auto___21308 = arguments.length;
var i__10031__auto___21309 = (0);
while(true){
if((i__10031__auto___21309 < len__10030__auto___21308)){
args21300.push((arguments[i__10031__auto___21309]));

var G__21310 = (i__10031__auto___21309 + (1));
i__10031__auto___21309 = G__21310;
continue;
} else {
}
break;
}

var G__21307 = args21300.length;
switch (G__21307) {
case 4:
return cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__10049__auto__ = (new cljs.core.IndexedSeq(args21300.slice((4)),(0),null));
return cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__10049__auto__);

}
});

cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9759__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__9759__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto____$1);
})(),x__9759__auto__);
})(),"(~{} | ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-or","cljs.core$macros/bit-or",1463236165,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-or","cljs.core$macros/bit-or",1463236165,null)),(function (){var x__9759__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),more)));
});

cljs.core$macros.bit_or.cljs$lang$applyTo = (function (seq21301){
var G__21302 = cljs.core.first.call(null,seq21301);
var seq21301__$1 = cljs.core.next.call(null,seq21301);
var G__21303 = cljs.core.first.call(null,seq21301__$1);
var seq21301__$2 = cljs.core.next.call(null,seq21301__$1);
var G__21304 = cljs.core.first.call(null,seq21301__$2);
var seq21301__$3 = cljs.core.next.call(null,seq21301__$2);
var G__21305 = cljs.core.first.call(null,seq21301__$3);
var seq21301__$4 = cljs.core.next.call(null,seq21301__$3);
return cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$variadic(G__21302,G__21303,G__21304,G__21305,seq21301__$4);
});

cljs.core$macros.bit_or.cljs$lang$maxFixedArity = (4);


cljs.core$macros.bit_or.cljs$lang$macro = true;
cljs.core$macros.int$ = (function cljs$core$macros$int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-or","cljs.core$macros/bit-or",1463236165,null)),(function (){var x__9759__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)))));
});

cljs.core$macros.int$.cljs$lang$macro = true;
cljs.core$macros.bit_xor = (function cljs$core$macros$bit_xor(var_args){
var args21312 = [];
var len__10030__auto___21320 = arguments.length;
var i__10031__auto___21321 = (0);
while(true){
if((i__10031__auto___21321 < len__10030__auto___21320)){
args21312.push((arguments[i__10031__auto___21321]));

var G__21322 = (i__10031__auto___21321 + (1));
i__10031__auto___21321 = G__21322;
continue;
} else {
}
break;
}

var G__21319 = args21312.length;
switch (G__21319) {
case 4:
return cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__10049__auto__ = (new cljs.core.IndexedSeq(args21312.slice((4)),(0),null));
return cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__10049__auto__);

}
});

cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9759__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__9759__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto____$1);
})(),x__9759__auto__);
})(),"(~{} ^ ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-xor","cljs.core$macros/bit-xor",1284619191,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-xor","cljs.core$macros/bit-xor",1284619191,null)),(function (){var x__9759__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),more)));
});

cljs.core$macros.bit_xor.cljs$lang$applyTo = (function (seq21313){
var G__21314 = cljs.core.first.call(null,seq21313);
var seq21313__$1 = cljs.core.next.call(null,seq21313);
var G__21315 = cljs.core.first.call(null,seq21313__$1);
var seq21313__$2 = cljs.core.next.call(null,seq21313__$1);
var G__21316 = cljs.core.first.call(null,seq21313__$2);
var seq21313__$3 = cljs.core.next.call(null,seq21313__$2);
var G__21317 = cljs.core.first.call(null,seq21313__$3);
var seq21313__$4 = cljs.core.next.call(null,seq21313__$3);
return cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$variadic(G__21314,G__21315,G__21316,G__21317,seq21313__$4);
});

cljs.core$macros.bit_xor.cljs$lang$maxFixedArity = (4);


cljs.core$macros.bit_xor.cljs$lang$macro = true;
cljs.core$macros.bit_and_not = (function cljs$core$macros$bit_and_not(var_args){
var args21324 = [];
var len__10030__auto___21332 = arguments.length;
var i__10031__auto___21333 = (0);
while(true){
if((i__10031__auto___21333 < len__10030__auto___21332)){
args21324.push((arguments[i__10031__auto___21333]));

var G__21334 = (i__10031__auto___21333 + (1));
i__10031__auto___21333 = G__21334;
continue;
} else {
}
break;
}

var G__21331 = args21324.length;
switch (G__21331) {
case 4:
return cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__10049__auto__ = (new cljs.core.IndexedSeq(args21324.slice((4)),(0),null));
return cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__10049__auto__);

}
});

cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9759__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__9759__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto____$1);
})(),x__9759__auto__);
})(),"(~{} & ~~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-and-not","cljs.core$macros/bit-and-not",-537076037,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-and-not","cljs.core$macros/bit-and-not",-537076037,null)),(function (){var x__9759__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),more)));
});

cljs.core$macros.bit_and_not.cljs$lang$applyTo = (function (seq21325){
var G__21326 = cljs.core.first.call(null,seq21325);
var seq21325__$1 = cljs.core.next.call(null,seq21325);
var G__21327 = cljs.core.first.call(null,seq21325__$1);
var seq21325__$2 = cljs.core.next.call(null,seq21325__$1);
var G__21328 = cljs.core.first.call(null,seq21325__$2);
var seq21325__$3 = cljs.core.next.call(null,seq21325__$2);
var G__21329 = cljs.core.first.call(null,seq21325__$3);
var seq21325__$4 = cljs.core.next.call(null,seq21325__$3);
return cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$variadic(G__21326,G__21327,G__21328,G__21329,seq21325__$4);
});

cljs.core$macros.bit_and_not.cljs$lang$maxFixedArity = (4);


cljs.core$macros.bit_and_not.cljs$lang$macro = true;
cljs.core$macros.bit_clear = (function cljs$core$macros$bit_clear(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9759__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__9759__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto____$1);
})(),x__9759__auto__);
})(),"(~{} & ~(1 << ~{}))"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_clear.cljs$lang$macro = true;
cljs.core$macros.bit_flip = (function cljs$core$macros$bit_flip(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9759__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__9759__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto____$1);
})(),x__9759__auto__);
})(),"(~{} ^ (1 << ~{}))"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_flip.cljs$lang$macro = true;
cljs.core$macros.bit_test = (function cljs$core$macros$bit_test(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9759__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__9759__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto____$1);
})(),x__9759__auto__);
})(),"((~{} & (1 << ~{})) != 0)"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.bit_test.cljs$lang$macro = true;
cljs.core$macros.bit_shift_left = (function cljs$core$macros$bit_shift_left(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9759__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__9759__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto____$1);
})(),x__9759__auto__);
})(),"(~{} << ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_shift_left.cljs$lang$macro = true;
cljs.core$macros.bit_shift_right = (function cljs$core$macros$bit_shift_right(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9759__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__9759__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto____$1);
})(),x__9759__auto__);
})(),"(~{} >> ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_shift_right.cljs$lang$macro = true;
cljs.core$macros.bit_shift_right_zero_fill = (function cljs$core$macros$bit_shift_right_zero_fill(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9759__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__9759__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto____$1);
})(),x__9759__auto__);
})(),"(~{} >>> ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_shift_right_zero_fill.cljs$lang$macro = true;
cljs.core$macros.unsigned_bit_shift_right = (function cljs$core$macros$unsigned_bit_shift_right(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9759__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__9759__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto____$1);
})(),x__9759__auto__);
})(),"(~{} >>> ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.unsigned_bit_shift_right.cljs$lang$macro = true;
cljs.core$macros.bit_set = (function cljs$core$macros$bit_set(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9759__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__9759__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto____$1);
})(),x__9759__auto__);
})(),"(~{} | (1 << ~{}))"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_set.cljs$lang$macro = true;
cljs.core$macros.mask = (function cljs$core$macros$mask(_AMPERSAND_form,_AMPERSAND_env,hash,shift){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9759__auto__ = hash;
return cljs.core._conj.call(null,(function (){var x__9759__auto____$1 = shift;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto____$1);
})(),x__9759__auto__);
})(),"((~{} >>> ~{}) & 0x01f)"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.mask.cljs$lang$macro = true;
cljs.core$macros.bitpos = (function cljs$core$macros$bitpos(_AMPERSAND_form,_AMPERSAND_env,hash,shift){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","mask","cljs.core$macros/mask",1575319768,null)),(function (){var x__9759__auto__ = hash;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = shift;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),"(1 << ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bitpos.cljs$lang$macro = true;
cljs.core$macros.caching_hash = (function cljs$core$macros$caching_hash(_AMPERSAND_form,_AMPERSAND_env,coll,hash_fn,hash_key){
if((hash_key instanceof cljs.core.Symbol)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("hash-key is substituted twice"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(clojure.core/symbol? hash-key)")].join('')));
}

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9759__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__21336__auto__","h__21336__auto__",-1136183658,null)),(function (){var x__9759__auto__ = hash_key;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__21336__auto__","h__21336__auto__",-1136183658,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__21336__auto__","h__21336__auto__",-1136183658,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9759__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__21336__auto__","h__21336__auto__",-1136183658,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9759__auto__ = hash_fn;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = coll;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__9759__auto__ = hash_key;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__21336__auto__","h__21336__auto__",-1136183658,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__21336__auto__","h__21336__auto__",-1136183658,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
});

cljs.core$macros.caching_hash.cljs$lang$macro = true;
cljs.core$macros.do_curried = (function cljs$core$macros$do_curried(name,doc,meta,args,body){
var cargs = cljs.core.vec.call(null,cljs.core.butlast.call(null,args));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null)),(function (){var x__9759__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = doc;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = meta;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9759__auto__ = cargs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9759__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__21337__auto__","x__21337__auto__",1209093164,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9759__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),cargs,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__21337__auto__","x__21337__auto__",1209093164,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9759__auto__ = args;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
});
/**
 * Builds another arity of the fn that returns a fn awaiting the last
 *   param
 */
cljs.core$macros.defcurried = (function cljs$core$macros$defcurried(var_args){
var args__10037__auto__ = [];
var len__10030__auto___21345 = arguments.length;
var i__10031__auto___21346 = (0);
while(true){
if((i__10031__auto___21346 < len__10030__auto___21345)){
args__10037__auto__.push((arguments[i__10031__auto___21346]));

var G__21347 = (i__10031__auto___21346 + (1));
i__10031__auto___21346 = G__21347;
continue;
} else {
}
break;
}

var argseq__10038__auto__ = ((((6) < args__10037__auto__.length))?(new cljs.core.IndexedSeq(args__10037__auto__.slice((6)),(0),null)):null);
return cljs.core$macros.defcurried.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),argseq__10038__auto__);
});

cljs.core$macros.defcurried.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,doc,meta,args,body){
return cljs.core$macros.do_curried.call(null,name,doc,meta,args,body);
});

cljs.core$macros.defcurried.cljs$lang$maxFixedArity = (6);

cljs.core$macros.defcurried.cljs$lang$applyTo = (function (seq21338){
var G__21339 = cljs.core.first.call(null,seq21338);
var seq21338__$1 = cljs.core.next.call(null,seq21338);
var G__21340 = cljs.core.first.call(null,seq21338__$1);
var seq21338__$2 = cljs.core.next.call(null,seq21338__$1);
var G__21341 = cljs.core.first.call(null,seq21338__$2);
var seq21338__$3 = cljs.core.next.call(null,seq21338__$2);
var G__21342 = cljs.core.first.call(null,seq21338__$3);
var seq21338__$4 = cljs.core.next.call(null,seq21338__$3);
var G__21343 = cljs.core.first.call(null,seq21338__$4);
var seq21338__$5 = cljs.core.next.call(null,seq21338__$4);
var G__21344 = cljs.core.first.call(null,seq21338__$5);
var seq21338__$6 = cljs.core.next.call(null,seq21338__$5);
return cljs.core$macros.defcurried.cljs$core$IFn$_invoke$arity$variadic(G__21339,G__21340,G__21341,G__21342,G__21343,G__21344,seq21338__$6);
});


cljs.core$macros.defcurried.cljs$lang$macro = true;
cljs.core$macros.do_rfn = (function cljs$core$macros$do_rfn(f1,k,fkv){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9759__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9759__auto__ = f1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = clojure.walk.postwalk.call(null,(function (p1__21348_SHARP_){
if(cljs.core.sequential_QMARK_.call(null,p1__21348_SHARP_)){
return ((cljs.core.vector_QMARK_.call(null,p1__21348_SHARP_))?cljs.core.vec:cljs.core.identity).call(null,cljs.core.remove.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([k], true),p1__21348_SHARP_));
} else {
return p1__21348_SHARP_;
}
}),fkv);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = fkv;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
});
/**
 * Builds 3-arity reducing fn given names of wrapped fn and key, and k/v impl.
 */
cljs.core$macros.rfn = (function cljs$core$macros$rfn(_AMPERSAND_form,_AMPERSAND_env,p__21349,fkv){
var vec__21353 = p__21349;
var f1 = cljs.core.nth.call(null,vec__21353,(0),null);
var k = cljs.core.nth.call(null,vec__21353,(1),null);
return cljs.core$macros.do_rfn.call(null,f1,k,fkv);
});

cljs.core$macros.rfn.cljs$lang$macro = true;
cljs.core$macros.protocol_prefix = (function cljs$core$macros$protocol_prefix(psym){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym)].join('').replace((new RegExp("\\.","g")),"$").replace("/","$")),cljs.core.str.cljs$core$IFn$_invoke$arity$1("$")].join('');
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
var args__10037__auto__ = [];
var len__10030__auto___21359 = arguments.length;
var i__10031__auto___21360 = (0);
while(true){
if((i__10031__auto___21360 < len__10030__auto___21359)){
args__10037__auto__.push((arguments[i__10031__auto___21360]));

var G__21361 = (i__10031__auto___21360 + (1));
i__10031__auto___21360 = G__21361;
continue;
} else {
}
break;
}

var argseq__10038__auto__ = ((((2) < args__10037__auto__.length))?(new cljs.core.IndexedSeq(args__10037__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.reify.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10038__auto__);
});

cljs.core$macros.reify.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,impls){
var t = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("t_"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.replace.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.munge.call(null,cljs.analyzer._STAR_cljs_ns_STAR_))].join(''),".","$"))].join('')),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"anonymous","anonymous",447897231),true], null));
var meta_sym = cljs.core.gensym.call(null,"meta");
var this_sym = cljs.core.gensym.call(null,"_");
var locals = cljs.core.keys.call(null,new cljs.core.Keyword(null,"locals","locals",535295783).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
var ns = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
var munge = cljs.compiler.munge;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-not","cljs.core$macros/when-not",-764302244,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","exists?","cljs.core$macros/exists?",-1828590389,null)),(function (){var x__9759__auto__ = cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(t)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","deftype","cljs.core$macros/deftype",1799045688,null)),(function (){var x__9759__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,locals,(function (){var x__9759__auto__ = meta_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","IWithMeta","cljs.core/IWithMeta",-1981666051,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-with-meta","-with-meta",-1610713823,null)),(function (){var x__9759__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9759__auto__ = this_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = meta_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__9759__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),locals,(function (){var x__9759__auto__ = meta_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","IMeta","cljs.core/IMeta",-1459057517,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-meta","-meta",494863156,null)),(function (){var x__9759__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9759__auto__ = this_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = meta_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),impls)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__9759__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),locals,(function (){var x__9759__auto__ = cljs.analyzer.elide_reader_meta.call(null,cljs.core.meta.call(null,_AMPERSAND_form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
});

cljs.core$macros.reify.cljs$lang$maxFixedArity = (2);

cljs.core$macros.reify.cljs$lang$applyTo = (function (seq21356){
var G__21357 = cljs.core.first.call(null,seq21356);
var seq21356__$1 = cljs.core.next.call(null,seq21356);
var G__21358 = cljs.core.first.call(null,seq21356__$1);
var seq21356__$2 = cljs.core.next.call(null,seq21356__$1);
return cljs.core$macros.reify.cljs$core$IFn$_invoke$arity$variadic(G__21357,G__21358,seq21356__$2);
});


cljs.core$macros.reify.cljs$lang$macro = true;
/**
 * Identical to reify but mutates its first argument.
 */
cljs.core$macros.specify_BANG_ = (function cljs$core$macros$specify_BANG_(var_args){
var args__10037__auto__ = [];
var len__10030__auto___21366 = arguments.length;
var i__10031__auto___21367 = (0);
while(true){
if((i__10031__auto___21367 < len__10030__auto___21366)){
args__10037__auto__.push((arguments[i__10031__auto___21367]));

var G__21368 = (i__10031__auto___21367 + (1));
i__10031__auto___21367 = G__21368;
continue;
} else {
}
break;
}

var argseq__10038__auto__ = ((((3) < args__10037__auto__.length))?(new cljs.core.IndexedSeq(args__10037__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.specify_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10038__auto__);
});

cljs.core$macros.specify_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,impls){
var x = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"x"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"extend","extend",1836484006),new cljs.core.Keyword(null,"instance","instance",-2121349050)], null));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9759__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9759__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","extend-type","cljs.core$macros/extend-type",1713295201,null)),(function (){var x__9759__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),impls)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
});

cljs.core$macros.specify_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.specify_BANG_.cljs$lang$applyTo = (function (seq21362){
var G__21363 = cljs.core.first.call(null,seq21362);
var seq21362__$1 = cljs.core.next.call(null,seq21362);
var G__21364 = cljs.core.first.call(null,seq21362__$1);
var seq21362__$2 = cljs.core.next.call(null,seq21362__$1);
var G__21365 = cljs.core.first.call(null,seq21362__$2);
var seq21362__$3 = cljs.core.next.call(null,seq21362__$2);
return cljs.core$macros.specify_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__21363,G__21364,G__21365,seq21362__$3);
});


cljs.core$macros.specify_BANG_.cljs$lang$macro = true;
/**
 * Identical to specify! but does not mutate its first argument. The first
 *   argument must be an ICloneable instance.
 */
cljs.core$macros.specify = (function cljs$core$macros$specify(var_args){
var args__10037__auto__ = [];
var len__10030__auto___21373 = arguments.length;
var i__10031__auto___21374 = (0);
while(true){
if((i__10031__auto___21374 < len__10030__auto___21373)){
args__10037__auto__.push((arguments[i__10031__auto___21374]));

var G__21375 = (i__10031__auto___21374 + (1));
i__10031__auto___21374 = G__21375;
continue;
} else {
}
break;
}

var argseq__10038__auto__ = ((((3) < args__10037__auto__.length))?(new cljs.core.IndexedSeq(args__10037__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.specify.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10038__auto__);
});

cljs.core$macros.specify.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,impls){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","specify!","cljs.core/specify!",-585401629,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","clone","cljs.core/clone",1417120092,null)),(function (){var x__9759__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),impls)));
});

cljs.core$macros.specify.cljs$lang$maxFixedArity = (3);

cljs.core$macros.specify.cljs$lang$applyTo = (function (seq21369){
var G__21370 = cljs.core.first.call(null,seq21369);
var seq21369__$1 = cljs.core.next.call(null,seq21369);
var G__21371 = cljs.core.first.call(null,seq21369__$1);
var seq21369__$2 = cljs.core.next.call(null,seq21369__$1);
var G__21372 = cljs.core.first.call(null,seq21369__$2);
var seq21369__$3 = cljs.core.next.call(null,seq21369__$2);
return cljs.core$macros.specify.cljs$core$IFn$_invoke$arity$variadic(G__21370,G__21371,G__21372,seq21369__$3);
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
var args__10037__auto__ = [];
var len__10030__auto___21380 = arguments.length;
var i__10031__auto___21381 = (0);
while(true){
if((i__10031__auto___21381 < len__10030__auto___21380)){
args__10037__auto__.push((arguments[i__10031__auto___21381]));

var G__21382 = (i__10031__auto___21381 + (1));
i__10031__auto___21381 = G__21382;
continue;
} else {
}
break;
}

var argseq__10038__auto__ = ((((3) < args__10037__auto__.length))?(new cljs.core.IndexedSeq(args__10037__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.this_as.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10038__auto__);
});

cljs.core$macros.this_as.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9759__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9759__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-this","cljs.core$macros/js-this",353597180,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),body)));
});

cljs.core$macros.this_as.cljs$lang$maxFixedArity = (3);

cljs.core$macros.this_as.cljs$lang$applyTo = (function (seq21376){
var G__21377 = cljs.core.first.call(null,seq21376);
var seq21376__$1 = cljs.core.next.call(null,seq21376);
var G__21378 = cljs.core.first.call(null,seq21376__$1);
var seq21376__$2 = cljs.core.next.call(null,seq21376__$1);
var G__21379 = cljs.core.first.call(null,seq21376__$2);
var seq21376__$3 = cljs.core.next.call(null,seq21376__$2);
return cljs.core$macros.this_as.cljs$core$IFn$_invoke$arity$variadic(G__21377,G__21378,G__21379,seq21376__$3);
});


cljs.core$macros.this_as.cljs$lang$macro = true;
cljs.core$macros.to_property = (function cljs$core$macros$to_property(sym){
return cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)].join(''));
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

if(cljs.core.truth_((function (){var and__8905__auto__ = new cljs.core.Keyword(null,"protocol-deprecated","protocol-deprecated",103233497).cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_warnings_STAR_);
if(cljs.core.truth_(and__8905__auto__)){
var and__8905__auto____$1 = new cljs.core.Keyword(null,"deprecated","deprecated",1498275348).cljs$core$IFn$_invoke$arity$1(var$);
if(cljs.core.truth_(and__8905__auto____$1)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"deprecation-nowarn","deprecation-nowarn",-1762828044).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,p)));
} else {
return and__8905__auto____$1;
}
} else {
return and__8905__auto__;
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
var ret = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,env,sym));
if(cljs.core.truth_(ret)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Can't resolve: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("ret")].join('')));
}

return ret;
});
cljs.core$macros.__GT_impl_map = (function cljs$core$macros$__GT_impl_map(impls){
var ret = cljs.core.PersistentArrayMap.EMPTY;
var s = impls;
while(true){
if(cljs.core.seq.call(null,s)){
var G__21383 = cljs.core.assoc.call(null,ret,cljs.core.first.call(null,s),cljs.core.take_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,s)));
var G__21384 = cljs.core.drop_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,s));
ret = G__21383;
s = G__21384;
continue;
} else {
return ret;
}
break;
}
});
cljs.core$macros.base_assign_impls = (function cljs$core$macros$base_assign_impls(env,resolve,tsym,type,p__21385){
var vec__21393 = p__21385;
var p = cljs.core.nth.call(null,vec__21393,(0),null);
var sigs = cljs.core.nth.call(null,vec__21393,(1),null);
cljs.core$macros.warn_and_update_protocol.call(null,p,tsym,env);

var psym = resolve.call(null,p);
var pfn_prefix = cljs.core.subs.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym)].join(''),(0),([cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym)].join('').indexOf("/") + (1)));
return cljs.core.cons.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aset","cljs.core$macros/aset",-693176374,null)),(function (){var x__9759__auto__ = psym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = type;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true)))),cljs.core.map.call(null,((function (psym,pfn_prefix,vec__21393,p,sigs){
return (function (p__21396){
var vec__21397 = p__21396;
var seq__21398 = cljs.core.seq.call(null,vec__21397);
var first__21399 = cljs.core.first.call(null,seq__21398);
var seq__21398__$1 = cljs.core.next.call(null,seq__21398);
var f = first__21399;
var meths = seq__21398__$1;
var form = vec__21397;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aset","cljs.core$macros/aset",-693176374,null)),(function (){var x__9759__auto__ = cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(pfn_prefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = type;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),meths))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
});})(psym,pfn_prefix,vec__21393,p,sigs))
,sigs));
});
if(typeof cljs.core$macros.extend_prefix !== 'undefined'){
} else {
cljs.core$macros.extend_prefix = (function (){var method_table__9850__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9851__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9852__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9853__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9854__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.core$macros","extend-prefix"),((function (method_table__9850__auto__,prefer_table__9851__auto__,method_cache__9852__auto__,cached_hierarchy__9853__auto__,hierarchy__9854__auto__){
return (function (tsym,sym){
return new cljs.core.Keyword(null,"extend","extend",1836484006).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,tsym));
});})(method_table__9850__auto__,prefer_table__9851__auto__,method_cache__9852__auto__,cached_hierarchy__9853__auto__,hierarchy__9854__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__9854__auto__,method_table__9850__auto__,prefer_table__9851__auto__,method_cache__9852__auto__,cached_hierarchy__9853__auto__));
})();
}
cljs.core._add_method.call(null,cljs.core$macros.extend_prefix,new cljs.core.Keyword(null,"instance","instance",-2121349050),(function (tsym,sym){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"..","..",-300507420,null)),(function (){var x__9759__auto__ = tsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core$macros.to_property.call(null,sym);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
}));
cljs.core._add_method.call(null,cljs.core$macros.extend_prefix,new cljs.core.Keyword(null,"default","default",-1987822328),(function (tsym,sym){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"..","..",-300507420,null)),(function (){var x__9759__auto__ = tsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-prototype","-prototype",-450831903,null)),(function (){var x__9759__auto__ = cljs.core$macros.to_property.call(null,sym);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
}));
cljs.core$macros.adapt_obj_params = (function cljs$core$macros$adapt_obj_params(type,p__21400){
var vec__21407 = p__21400;
var seq__21408 = cljs.core.seq.call(null,vec__21407);
var first__21409 = cljs.core.first.call(null,seq__21408);
var seq__21408__$1 = cljs.core.next.call(null,seq__21408);
var vec__21410 = first__21409;
var seq__21411 = cljs.core.seq.call(null,vec__21410);
var first__21412 = cljs.core.first.call(null,seq__21411);
var seq__21411__$1 = cljs.core.next.call(null,seq__21411);
var this$ = first__21412;
var args = seq__21411__$1;
var sig = vec__21410;
var body = seq__21408__$1;
var x__9759__auto__ = cljs.core.vec.call(null,args);
return cljs.core._conj.call(null,(function (){var x__9759__auto____$1 = cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"this-as","this-as",-848995740,null),cljs.core.vary_meta.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),type),body);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto____$1);
})(),x__9759__auto__);
});
cljs.core$macros.adapt_ifn_params = (function cljs$core$macros$adapt_ifn_params(type,p__21413){
var vec__21420 = p__21413;
var seq__21421 = cljs.core.seq.call(null,vec__21420);
var first__21422 = cljs.core.first.call(null,seq__21421);
var seq__21421__$1 = cljs.core.next.call(null,seq__21421);
var vec__21423 = first__21422;
var seq__21424 = cljs.core.seq.call(null,vec__21423);
var first__21425 = cljs.core.first.call(null,seq__21424);
var seq__21424__$1 = cljs.core.next.call(null,seq__21424);
var this$ = first__21425;
var args = seq__21424__$1;
var sig = vec__21423;
var body = seq__21421__$1;
var self_sym = cljs.core.with_meta.call(null,new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),type], null));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9759__auto__ = cljs.core.vec.call(null,cljs.core.cons.call(null,self_sym,args));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null)),(function (){var x__9759__auto__ = self_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9759__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9759__auto__ = this$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = self_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
});
cljs.core$macros.adapt_ifn_invoke_params = (function cljs$core$macros$adapt_ifn_invoke_params(type,p__21426){
var vec__21433 = p__21426;
var seq__21434 = cljs.core.seq.call(null,vec__21433);
var first__21435 = cljs.core.first.call(null,seq__21434);
var seq__21434__$1 = cljs.core.next.call(null,seq__21434);
var vec__21436 = first__21435;
var seq__21437 = cljs.core.seq.call(null,vec__21436);
var first__21438 = cljs.core.first.call(null,seq__21437);
var seq__21437__$1 = cljs.core.next.call(null,seq__21437);
var this$ = first__21438;
var args = seq__21437__$1;
var sig = vec__21436;
var body = seq__21434__$1;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9759__auto__ = cljs.core.vec.call(null,args);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null)),(function (){var x__9759__auto__ = cljs.core.vary_meta.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),type);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
});
cljs.core$macros.adapt_proto_params = (function cljs$core$macros$adapt_proto_params(type,p__21439){
var vec__21446 = p__21439;
var seq__21447 = cljs.core.seq.call(null,vec__21446);
var first__21448 = cljs.core.first.call(null,seq__21447);
var seq__21447__$1 = cljs.core.next.call(null,seq__21447);
var vec__21449 = first__21448;
var seq__21450 = cljs.core.seq.call(null,vec__21449);
var first__21451 = cljs.core.first.call(null,seq__21450);
var seq__21450__$1 = cljs.core.next.call(null,seq__21450);
var this$ = first__21451;
var args = seq__21450__$1;
var sig = vec__21449;
var body = seq__21447__$1;
var this_SINGLEQUOTE_ = cljs.core.vary_meta.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),type);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9759__auto__ = cljs.core.vec.call(null,cljs.core.cons.call(null,this_SINGLEQUOTE_,args));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null)),(function (){var x__9759__auto__ = this_SINGLEQUOTE_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
});
cljs.core$macros.add_obj_methods = (function cljs$core$macros$add_obj_methods(type,type_sym,sigs){
return cljs.core.map.call(null,(function (p__21460){
var vec__21461 = p__21460;
var seq__21462 = cljs.core.seq.call(null,vec__21461);
var first__21463 = cljs.core.first.call(null,seq__21462);
var seq__21462__$1 = cljs.core.next.call(null,seq__21462);
var f = first__21463;
var meths = seq__21462__$1;
var form = vec__21461;
var vec__21464 = ((cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,meths)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rest.call(null,form)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,meths], null));
var f__$1 = cljs.core.nth.call(null,vec__21464,(0),null);
var meths__$1 = cljs.core.nth.call(null,vec__21464,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__9759__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,f__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),cljs.core.map.call(null,((function (vec__21464,f__$1,meths__$1,vec__21461,seq__21462,first__21463,seq__21462__$1,f,meths,form){
return (function (p1__21452_SHARP_){
return cljs.core$macros.adapt_obj_params.call(null,type,p1__21452_SHARP_);
});})(vec__21464,f__$1,meths__$1,vec__21461,seq__21462,first__21463,seq__21462__$1,f,meths,form))
,meths__$1)))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
}),sigs);
});
cljs.core$macros.ifn_invoke_methods = (function cljs$core$macros$ifn_invoke_methods(type,type_sym,p__21468){
var vec__21472 = p__21468;
var seq__21473 = cljs.core.seq.call(null,vec__21472);
var first__21474 = cljs.core.first.call(null,seq__21473);
var seq__21473__$1 = cljs.core.next.call(null,seq__21473);
var f = first__21474;
var meths = seq__21473__$1;
var form = vec__21472;
return cljs.core.map.call(null,((function (vec__21472,seq__21473,first__21474,seq__21473__$1,f,meths,form){
return (function (meth){
var arity = cljs.core.count.call(null,cljs.core.first.call(null,meth));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__9759__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("cljs$core$IFn$_invoke$arity$"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arity)].join('')));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9759__auto__ = meth;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})()))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
});})(vec__21472,seq__21473,first__21474,seq__21473__$1,f,meths,form))
,cljs.core.map.call(null,((function (vec__21472,seq__21473,first__21474,seq__21473__$1,f,meths,form){
return (function (p1__21467_SHARP_){
return cljs.core$macros.adapt_ifn_invoke_params.call(null,type,p1__21467_SHARP_);
});})(vec__21472,seq__21473,first__21474,seq__21473__$1,f,meths,form))
,meths));
});
cljs.core$macros.add_ifn_methods = (function cljs$core$macros$add_ifn_methods(type,type_sym,p__21476){
var vec__21480 = p__21476;
var seq__21481 = cljs.core.seq.call(null,vec__21480);
var first__21482 = cljs.core.first.call(null,seq__21481);
var seq__21481__$1 = cljs.core.next.call(null,seq__21481);
var f = first__21482;
var meths = seq__21481__$1;
var form = vec__21480;
var meths__$1 = cljs.core.map.call(null,((function (vec__21480,seq__21481,first__21482,seq__21481__$1,f,meths,form){
return (function (p1__21475_SHARP_){
return cljs.core$macros.adapt_ifn_params.call(null,type,p1__21475_SHARP_);
});})(vec__21480,seq__21481,first__21482,seq__21481__$1,f,meths,form))
,meths);
var this_sym = cljs.core.with_meta.call(null,new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),type], null));
var argsym = cljs.core.gensym.call(null,"args");
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__9759__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,new cljs.core.Symbol(null,"call","call",1120531661,null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),meths__$1))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})()))),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__9759__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,new cljs.core.Symbol(null,"apply","apply",-1334050276,null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9759__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this_sym,argsym], null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null)),(function (){var x__9759__auto__ = this_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".apply",".apply",-1176201338,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-call",".-call",1760541695,null)),(function (){var x__9759__auto__ = this_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = this_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".concat",".concat",1180408684,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),(function (){var x__9759__auto__ = this_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","aclone","cljs.core/aclone",-758078968,null)),(function (){var x__9759__auto__ = argsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})()))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())))], null),cljs.core$macros.ifn_invoke_methods.call(null,type,type_sym,form));
});
cljs.core$macros.add_proto_methods_STAR_ = (function cljs$core$macros$add_proto_methods_STAR_(pprefix,type,type_sym,p__21483){
var vec__21491 = p__21483;
var seq__21492 = cljs.core.seq.call(null,vec__21491);
var first__21493 = cljs.core.first.call(null,seq__21492);
var seq__21492__$1 = cljs.core.next.call(null,seq__21492);
var f = first__21493;
var meths = seq__21492__$1;
var form = vec__21491;
var pf = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(pprefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,f))].join('');
if(cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,meths))){
var meth = meths;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__9759__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(pf),cljs.core.str.cljs$core$IFn$_invoke$arity$1("$arity$"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,cljs.core.first.call(null,meth)))].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),cljs.core$macros.adapt_proto_params.call(null,type,meth)))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())))], null);
} else {
return cljs.core.map.call(null,((function (pf,vec__21491,seq__21492,first__21493,seq__21492__$1,f,meths,form){
return (function (p__21494){
var vec__21495 = p__21494;
var seq__21496 = cljs.core.seq.call(null,vec__21495);
var first__21497 = cljs.core.first.call(null,seq__21496);
var seq__21496__$1 = cljs.core.next.call(null,seq__21496);
var sig = first__21497;
var body = seq__21496__$1;
var meth = vec__21495;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__9759__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(pf),cljs.core.str.cljs$core$IFn$_invoke$arity$1("$arity$"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,sig))].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9759__auto__ = cljs.core$macros.adapt_proto_params.call(null,type,meth);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})()))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
});})(pf,vec__21491,seq__21492,first__21493,seq__21492__$1,f,meths,form))
,meths);
}
});
cljs.core$macros.proto_assign_impls = (function cljs$core$macros$proto_assign_impls(env,resolve,type_sym,type,p__21498){
var vec__21502 = p__21498;
var p = cljs.core.nth.call(null,vec__21502,(0),null);
var sigs = cljs.core.nth.call(null,vec__21502,(1),null);
cljs.core$macros.warn_and_update_protocol.call(null,p,type,env);

var psym = resolve.call(null,p);
var pprefix = cljs.core$macros.protocol_prefix.call(null,psym);
var skip_flag = cljs.core.set.call(null,new cljs.core.Keyword(null,"skip-protocol-flag","skip-protocol-flag",-1426798630).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,type_sym)));
if(cljs.core._EQ_.call(null,p,new cljs.core.Symbol(null,"Object","Object",61210754,null))){
return cljs.core$macros.add_obj_methods.call(null,type,type_sym,sigs);
} else {
return cljs.core.concat.call(null,(cljs.core.truth_(skip_flag.call(null,psym))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__9759__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,pprefix);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PROTOCOL_SENTINEL","cljs.core/PROTOCOL_SENTINEL",210209696,null)))))], null)),cljs.core.mapcat.call(null,((function (psym,pprefix,skip_flag,vec__21502,p,sigs){
return (function (sig){
if(cljs.core._EQ_.call(null,psym,new cljs.core.Symbol("cljs.core","IFn","cljs.core/IFn",-920223129,null))){
return cljs.core$macros.add_ifn_methods.call(null,type,type_sym,sig);
} else {
return cljs.core$macros.add_proto_methods_STAR_.call(null,pprefix,type,type_sym,sig);
}
});})(psym,pprefix,skip_flag,vec__21502,p,sigs))
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
var vec__21508 = ((cljs.core.vector_QMARK_.call(null,cljs.core.second.call(null,method)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [__GT_name.call(null,method_name),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second.call(null,method)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [__GT_name.call(null,method_name),cljs.core.map.call(null,cljs.core.first,cljs.core.rest.call(null,method))], null));
var fname = cljs.core.nth.call(null,vec__21508,(0),null);
var sigs = cljs.core.nth.call(null,vec__21508,(1),null);
var decmeths = cljs.core.get.call(null,minfo,fname,new cljs.core.Keyword("cljs.core$macros","not-found","cljs.core$macros/not-found",-1226326556));
if(cljs.core._EQ_.call(null,decmeths,new cljs.core.Keyword("cljs.core$macros","not-found","cljs.core$macros/not-found",-1226326556))){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),env,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p,new cljs.core.Keyword(null,"fname","fname",1500291491),fname,new cljs.core.Keyword(null,"no-such-method","no-such-method",1087422840),true], null));
} else {
}

if(cljs.core.truth_(cljs.core.namespace.call(null,method_name))){
var method_var_21511 = cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),method_name,cljs.analyzer.confirm_var_exist_warning);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(var$),new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(method_var_21511))){
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

if((cljs.core.not_EQ_.call(null,decmeths,new cljs.core.Keyword("cljs.core$macros","not-found","cljs.core$macros/not-found",-1226326556))) && (cljs.core.not.call(null,cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([c], true),cljs.core.map.call(null,cljs.core.count,decmeths))))){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),env,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p,new cljs.core.Keyword(null,"fname","fname",1500291491),fname,new cljs.core.Keyword(null,"invalid-arity","invalid-arity",1335461949),c], null));
} else {
}

var G__21512 = cljs.core.next.call(null,sigs__$1);
var G__21513 = cljs.core.conj.call(null,seen,c);
sigs__$1 = G__21512;
seen = G__21513;
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

var seen_21520 = cljs.core.PersistentHashSet.EMPTY;
var methods_21521__$1 = methods$;
while(true){
if(cljs.core.seq.call(null,methods_21521__$1)){
var vec__21517_21522 = cljs.core.first.call(null,methods_21521__$1);
var fname_21523 = cljs.core.nth.call(null,vec__21517_21522,(0),null);
var method_21524 = vec__21517_21522;
if(cljs.core.contains_QMARK_.call(null,seen_21520,fname_21523)){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"extend-type-invalid-method-shape","extend-type-invalid-method-shape",1424103549),env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"protocol","protocol",652470118),proto,new cljs.core.Keyword(null,"method","method",55703592),fname_21523], null));
} else {
}

cljs.core$macros.validate_impl_sigs.call(null,env,proto,method_21524);

var G__21525 = cljs.core.conj.call(null,seen_21520,fname_21523);
var G__21526 = cljs.core.next.call(null,methods_21521__$1);
seen_21520 = G__21525;
methods_21521__$1 = G__21526;
continue;
} else {
}
break;
}

var G__21527 = cljs.core.conj.call(null,protos,proto);
var G__21528 = impls__$2;
protos = G__21527;
impls__$1 = G__21528;
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
var args__10037__auto__ = [];
var len__10030__auto___21537 = arguments.length;
var i__10031__auto___21538 = (0);
while(true){
if((i__10031__auto___21538 < len__10030__auto___21537)){
args__10037__auto__.push((arguments[i__10031__auto___21538]));

var G__21539 = (i__10031__auto___21538 + (1));
i__10031__auto___21538 = G__21539;
continue;
} else {
}
break;
}

var argseq__10038__auto__ = ((((3) < args__10037__auto__.length))?(new cljs.core.IndexedSeq(args__10037__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.extend_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10038__auto__);
});

cljs.core$macros.extend_type.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,type_sym,impls){
var env = _AMPERSAND_env;
var _ = cljs.core$macros.validate_impls.call(null,env,impls);
var resolve = cljs.core.partial.call(null,cljs.core$macros.resolve_var,env);
var impl_map = cljs.core$macros.__GT_impl_map.call(null,impls);
var impl_map__$1 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null,new cljs.core.Symbol(null,"number","number",-1084057331,null),null], null), null).call(null,type_sym))?cljs.core$macros.type_hint_impl_map.call(null,type_sym,impl_map):impl_map);
var vec__21534 = (function (){var temp__4655__auto__ = cljs.core$macros.base_type.call(null,type_sym);
if(cljs.core.truth_(temp__4655__auto__)){
var type = temp__4655__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core$macros.base_assign_impls], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [resolve.call(null,type_sym),cljs.core$macros.proto_assign_impls], null);
}
})();
var type = cljs.core.nth.call(null,vec__21534,(0),null);
var assign_impls = cljs.core.nth.call(null,vec__21534,(1),null);
if(cljs.core.truth_((function (){var and__8905__auto__ = new cljs.core.Keyword(null,"extending-base-js-type","extending-base-js-type",432787264).cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_warnings_STAR_);
if(cljs.core.truth_(and__8905__auto__)){
return cljs.core$macros.js_base_type.call(null,type_sym);
} else {
return and__8905__auto__;
}
})())){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"extending-base-js-type","extending-base-js-type",432787264),env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-symbol","current-symbol",-932381075),type_sym,new cljs.core.Keyword(null,"suggested-symbol","suggested-symbol",-1329631875),cljs.core$macros.js_base_type.call(null,type_sym)], null));
} else {
}

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),cljs.core.mapcat.call(null,((function (env,_,resolve,impl_map,impl_map__$1,vec__21534,type,assign_impls){
return (function (p1__21529_SHARP_){
return assign_impls.call(null,env,resolve,type_sym,type,p1__21529_SHARP_);
});})(env,_,resolve,impl_map,impl_map__$1,vec__21534,type,assign_impls))
,impl_map__$1))));
});

cljs.core$macros.extend_type.cljs$lang$maxFixedArity = (3);

cljs.core$macros.extend_type.cljs$lang$applyTo = (function (seq21530){
var G__21531 = cljs.core.first.call(null,seq21530);
var seq21530__$1 = cljs.core.next.call(null,seq21530);
var G__21532 = cljs.core.first.call(null,seq21530__$1);
var seq21530__$2 = cljs.core.next.call(null,seq21530__$1);
var G__21533 = cljs.core.first.call(null,seq21530__$2);
var seq21530__$3 = cljs.core.next.call(null,seq21530__$2);
return cljs.core$macros.extend_type.cljs$core$IFn$_invoke$arity$variadic(G__21531,G__21532,G__21533,seq21530__$3);
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
cljs.core$macros.annotate_specs = (function cljs$core$macros$annotate_specs(annots,v,p__21541){
var vec__21545 = p__21541;
var f = cljs.core.nth.call(null,vec__21545,(0),null);
var sigs = cljs.core.nth.call(null,vec__21545,(1),null);
return cljs.core.conj.call(null,v,cljs.core.vary_meta.call(null,cljs.core.cons.call(null,f,cljs.core.map.call(null,((function (vec__21545,f,sigs){
return (function (p1__21540_SHARP_){
return cljs.core.cons.call(null,cljs.core.second.call(null,p1__21540_SHARP_),cljs.core.nnext.call(null,p1__21540_SHARP_));
});})(vec__21545,f,sigs))
,sigs)),cljs.core.merge,annots));
});
cljs.core$macros.dt__GT_et = (function cljs$core$macros$dt__GT_et(var_args){
var args21548 = [];
var len__10030__auto___21551 = arguments.length;
var i__10031__auto___21552 = (0);
while(true){
if((i__10031__auto___21552 < len__10030__auto___21551)){
args21548.push((arguments[i__10031__auto___21552]));

var G__21553 = (i__10031__auto___21552 + (1));
i__10031__auto___21552 = G__21553;
continue;
} else {
}
break;
}

var G__21550 = args21548.length;
switch (G__21550) {
case 3:
return cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args21548.length)].join('')));

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
var G__21555 = ret__$1;
var G__21556 = specs__$2;
ret = G__21555;
specs__$1 = G__21556;
continue;
} else {
return ret;
}
break;
}
});

cljs.core$macros.dt__GT_et.cljs$lang$maxFixedArity = 4;

cljs.core$macros.collect_protocols = (function cljs$core$macros$collect_protocols(impls,env){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,(function (p1__21557_SHARP_){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),p1__21557_SHARP_));
}),cljs.core.filter.call(null,cljs.core.symbol_QMARK_,impls)));
});
cljs.core$macros.build_positional_factory = (function cljs$core$macros$build_positional_factory(rsym,rname,fields){
var fn_name = cljs.core.with_meta.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"->","->",-2139605430,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(rsym)].join('')),cljs.core.assoc.call(null,cljs.core.meta.call(null,rsym),new cljs.core.Keyword(null,"factory","factory",63933746),new cljs.core.Keyword(null,"positional","positional",-203580463)));
var field_values = (cljs.core.truth_(new cljs.core.Keyword(null,"internal-ctor","internal-ctor",937392560).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,rsym)))?cljs.core.conj.call(null,fields,null,null,null):fields);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null)),(function (){var x__9759__auto__ = fn_name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,fields))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__9759__auto__ = rname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),field_values)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
});
cljs.core$macros.validate_fields = (function cljs$core$macros$validate_fields(case$,name,fields){
if(cljs.core.vector_QMARK_.call(null,fields)){
return null;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1(case$),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", no fields vector given.")].join('')));
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
var args__10037__auto__ = [];
var len__10030__auto___21569 = arguments.length;
var i__10031__auto___21570 = (0);
while(true){
if((i__10031__auto___21570 < len__10030__auto___21569)){
args__10037__auto__.push((arguments[i__10031__auto___21570]));

var G__21571 = (i__10031__auto___21570 + (1));
i__10031__auto___21570 = G__21571;
continue;
} else {
}
break;
}

var argseq__10038__auto__ = ((((4) < args__10037__auto__.length))?(new cljs.core.IndexedSeq(args__10037__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.deftype.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__10038__auto__);
});

cljs.core$macros.deftype.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,t,fields,impls){
cljs.core$macros.validate_fields.call(null,"deftype",t,fields);

var env = _AMPERSAND_env;
var r = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),t));
var vec__21566 = cljs.core$macros.prepare_protocol_masks.call(null,env,impls);
var fpps = cljs.core.nth.call(null,vec__21566,(0),null);
var pmasks = cljs.core.nth.call(null,vec__21566,(1),null);
var protocols = cljs.core$macros.collect_protocols.call(null,impls,env);
var t__$1 = cljs.core.vary_meta.call(null,t,cljs.core.assoc,new cljs.core.Keyword(null,"protocols","protocols",-5615896),protocols,new cljs.core.Keyword(null,"skip-protocol-flag","skip-protocol-flag",-1426798630),fpps);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"deftype*","deftype*",962659890,null)),(function (){var x__9759__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = fields;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = pmasks;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = ((cljs.core.seq.call(null,impls))?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","extend-type","cljs.core$macros/extend-type",1713295201,null)),(function (){var x__9759__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),cljs.core$macros.dt__GT_et.call(null,t__$1,impls,fields)))):null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-getBasis",".-getBasis",-1306451468,null)),(function (){var x__9759__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9759__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__9759__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,fields))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$type",".-cljs$lang$type",-1029307724,null)),(function (){var x__9759__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$ctorStr",".-cljs$lang$ctorStr",-1820706991,null)),(function (){var x__9759__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(r)].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$ctorPrWriter",".-cljs$lang$ctorPrWriter",255834464,null)),(function (){var x__9759__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9759__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__21558__auto__","this__21558__auto__",-58756667,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__21559__auto__","writer__21559__auto__",-657724644,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opt__21560__auto__","opt__21560__auto__",1759531859,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-write","cljs.core/-write",527220517,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__21559__auto__","writer__21559__auto__",-657724644,null)),(function (){var x__9759__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(r)].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core$macros.build_positional_factory.call(null,t__$1,r,fields);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
});

cljs.core$macros.deftype.cljs$lang$maxFixedArity = (4);

cljs.core$macros.deftype.cljs$lang$applyTo = (function (seq21561){
var G__21562 = cljs.core.first.call(null,seq21561);
var seq21561__$1 = cljs.core.next.call(null,seq21561);
var G__21563 = cljs.core.first.call(null,seq21561__$1);
var seq21561__$2 = cljs.core.next.call(null,seq21561__$1);
var G__21564 = cljs.core.first.call(null,seq21561__$2);
var seq21561__$3 = cljs.core.next.call(null,seq21561__$2);
var G__21565 = cljs.core.first.call(null,seq21561__$3);
var seq21561__$4 = cljs.core.next.call(null,seq21561__$3);
return cljs.core$macros.deftype.cljs$core$IFn$_invoke$arity$variadic(G__21562,G__21563,G__21564,G__21565,seq21561__$4);
});


cljs.core$macros.deftype.cljs$lang$macro = true;
/**
 * Do not use this directly - use defrecord
 */
cljs.core$macros.emit_defrecord = (function cljs$core$macros$emit_defrecord(env,tagname,rname,fields,impls){
var hinted_fields = fields;
var fields__$1 = cljs.core.vec.call(null,cljs.core.map.call(null,((function (hinted_fields){
return (function (p1__21572_SHARP_){
return cljs.core.with_meta.call(null,p1__21572_SHARP_,null);
});})(hinted_fields))
,fields));
var base_fields = fields__$1;
var pr_open = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("#"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,rname)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("."),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,rname)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("{")].join('');
var fields__$2 = cljs.core.conj.call(null,fields__$1,new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),cljs.core.with_meta.call(null,new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)));
var gs = cljs.core.gensym.call(null);
var ksym = cljs.core.gensym.call(null,"k");
var impls__$1 = cljs.core.concat.call(null,impls,new cljs.core.PersistentVector(null, 28, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"IRecord","IRecord",-903221169,null),new cljs.core.Symbol(null,"ICloneable","ICloneable",1882653160,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-clone","-clone",227130084,null)),(function (){var x__9759__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__21573__auto__","this__21573__auto__",-938984929,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__9759__auto__ = tagname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),fields__$2)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})()))),new cljs.core.Symbol(null,"IHash","IHash",-1495374645,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-hash","-hash",-630070274,null)),(function (){var x__9759__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__21574__auto__","this__21574__auto__",-853610773,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","caching-hash","cljs.core$macros/caching-hash",-1892393069,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__21574__auto__","this__21574__auto__",-853610773,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"hash-imap","hash-imap",-1047446478,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})()))),new cljs.core.Symbol(null,"IEquiv","IEquiv",-1912850869,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-equiv","-equiv",320124272,null)),(function (){var x__9759__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__21575__auto__","this__21575__auto__",854624389,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"other__21576__auto__","other__21576__auto__",651504283,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"other__21576__auto__","other__21576__auto__",651504283,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","identical?","cljs.core$macros/identical?",815580547,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-constructor",".-constructor",279801701,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__21575__auto__","this__21575__auto__",854624389,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-constructor",".-constructor",279801701,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"other__21576__auto__","other__21576__auto__",651504283,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","equiv-map","cljs.core/equiv-map",-1185609892,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__21575__auto__","this__21575__auto__",854624389,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"other__21576__auto__","other__21576__auto__",651504283,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})()))),new cljs.core.Symbol(null,"IMeta","IMeta",1095313672,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-meta","-meta",494863156,null)),(function (){var x__9759__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__21577__auto__","this__21577__auto__",425480475,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__meta","__meta",-946752628,null))))),new cljs.core.Symbol(null,"IWithMeta","IWithMeta",-509493158,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-with-meta","-with-meta",-1610713823,null)),(function (){var x__9759__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__21578__auto__","this__21578__auto__",-1549452161,null)),(function (){var x__9759__auto__ = gs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__9759__auto__ = tagname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),cljs.core.replace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),gs], null),fields__$2))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})()))),new cljs.core.Symbol(null,"ILookup","ILookup",784647298,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-lookup","-lookup",-1438393944,null)),(function (){var x__9759__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__21579__auto__","this__21579__auto__",-893457017,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__21580__auto__","k__21580__auto__",-1595147881,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-lookup","cljs.core/-lookup",-1845674443,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__21579__auto__","this__21579__auto__",-893457017,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__21580__auto__","k__21580__auto__",-1595147881,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})()))),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-lookup","-lookup",-1438393944,null)),(function (){var x__9759__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__21581__auto__","this__21581__auto__",-787926567,null)),(function (){var x__9759__auto__ = ksym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"else__21582__auto__","else__21582__auto__",-1943260374,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","case","cljs.core$macros/case",-2131866965,null)),(function (){var x__9759__auto__ = ksym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),cljs.core.mapcat.call(null,((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (f){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,f),f], null);
});})(gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,base_fields),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)),(function (){var x__9759__auto__ = ksym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"else__21582__auto__","else__21582__auto__",-1943260374,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})()))),new cljs.core.Symbol(null,"ICounted","ICounted",-1705786327,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-count","-count",416049189,null)),(function (){var x__9759__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__21583__auto__","this__21583__auto__",-243602689,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),(function (){var x__9759__auto__ = cljs.core.count.call(null,base_fields);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})()))),new cljs.core.Symbol(null,"ICollection","ICollection",-686709190,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-conj","-conj",1373798691,null)),(function (){var x__9759__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__21584__auto__","this__21584__auto__",-989259698,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"entry__21585__auto__","entry__21585__auto__",300654934,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"entry__21585__auto__","entry__21585__auto__",300654934,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-assoc","cljs.core/-assoc",-814539323,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__21584__auto__","this__21584__auto__",-989259698,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-nth","cljs.core/-nth",504234802,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"entry__21585__auto__","entry__21585__auto__",300654934,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-nth","cljs.core/-nth",504234802,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"entry__21585__auto__","entry__21585__auto__",300654934,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","reduce","cljs.core/reduce",2025430439,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-conj","cljs.core/-conj",2040622670,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__21584__auto__","this__21584__auto__",-989259698,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"entry__21585__auto__","entry__21585__auto__",300654934,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})()))),new cljs.core.Symbol(null,"IAssociative","IAssociative",-1306431882,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-assoc","-assoc",-416089758,null)),(function (){var x__9759__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__21586__auto__","this__21586__auto__",-1122025206,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__21587__auto__","k__21587__auto__",-669761818,null)),(function (){var x__9759__auto__ = gs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","condp","cljs.core$macros/condp",431619047,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","keyword-identical?","cljs.core/keyword-identical?",1598491177,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__21587__auto__","k__21587__auto__",-669761818,null)),cljs.core.mapcat.call(null,((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (fld){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,fld),cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"new","new",-444906321,null),tagname,cljs.core.replace.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([fld,gs,new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),null]),fields__$2))], null);
});})(gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,base_fields),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__9759__auto__ = tagname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),null,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),null], null), null),fields__$2),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","assoc","cljs.core/assoc",322326297,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__21587__auto__","k__21587__auto__",-669761818,null)),(function (){var x__9759__auto__ = gs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})()))),new cljs.core.Symbol(null,"IMap","IMap",992876629,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-dissoc","-dissoc",1638079447,null)),(function (){var x__9759__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__21588__auto__","this__21588__auto__",-252615113,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__21589__auto__","k__21589__auto__",-323619973,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null)),(function (){var x__9759__auto__ = cljs.core.apply.call(null,cljs.core.hash_set,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.keyword,base_fields)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__21589__auto__","k__21589__auto__",-323619973,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","dissoc","cljs.core/dissoc",-432349815,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","with-meta","cljs.core/with-meta",749126446,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","into","cljs.core/into",1879938733,null)),(function (){var x__9759__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__21588__auto__","this__21588__auto__",-252615113,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__meta","__meta",-946752628,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__21589__auto__","k__21589__auto__",-323619973,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__9759__auto__ = tagname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),null,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),null], null), null),fields__$2),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not-empty","cljs.core/not-empty",540057011,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","dissoc","cljs.core/dissoc",-432349815,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__21589__auto__","k__21589__auto__",-323619973,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})()))),new cljs.core.Symbol(null,"ISeqable","ISeqable",1349682102,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-seq","-seq",1019896831,null)),(function (){var x__9759__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__21591__auto__","this__21591__auto__",-1970641923,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null)),(function (){var x__9759__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (p1__21590_SHARP_){
return cljs.core._conj.call(null,(function (){var x__9759__auto__ = cljs.core.keyword.call(null,p1__21590_SHARP_);
return cljs.core._conj.call(null,(function (){var x__9759__auto____$1 = p1__21590_SHARP_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto____$1);
})(),x__9759__auto__);
})(),new cljs.core.Symbol("cljs.core$macros","vector","cljs.core$macros/vector",912237829,null));
});})(gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,base_fields)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})()))),new cljs.core.Symbol(null,"IIterable","IIterable",577191430,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-iterator","-iterator",310937281,null)),(function (){var x__9759__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9759__auto__ = gs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"RecordIter.","RecordIter.",-265283060,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),(function (){var x__9759__auto__ = gs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.count.call(null,base_fields);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.keyword,base_fields)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-iterator","cljs.core/-iterator",1833427494,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","nil-iter","cljs.core/nil-iter",-1712403690,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})()))),new cljs.core.Symbol(null,"IPrintWithWriter","IPrintWithWriter",-1205316154,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-pr-writer","-pr-writer",-445354136,null)),(function (){var x__9759__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__21593__auto__","this__21593__auto__",1936202879,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__21594__auto__","writer__21594__auto__",112298174,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opts__21595__auto__","opts__21595__auto__",-1539714626,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9759__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"pr-pair__21596__auto__","pr-pair__21596__auto__",-1601126129,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9759__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"keyval__21597__auto__","keyval__21597__auto__",1355909947,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","pr-sequential-writer","cljs.core/pr-sequential-writer",-1101677821,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__21594__auto__","writer__21594__auto__",112298174,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","pr-writer","cljs.core/pr-writer",133956070,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,""),cljs.core._conj.call(null,cljs.core.List.EMPTY," "),cljs.core._conj.call(null,cljs.core.List.EMPTY,""),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opts__21595__auto__","opts__21595__auto__",-1539714626,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"keyval__21597__auto__","keyval__21597__auto__",1355909947,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","pr-sequential-writer","cljs.core/pr-sequential-writer",-1101677821,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__21594__auto__","writer__21594__auto__",112298174,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"pr-pair__21596__auto__","pr-pair__21596__auto__",-1601126129,null)),(function (){var x__9759__auto__ = pr_open;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,", "),cljs.core._conj.call(null,cljs.core.List.EMPTY,"}"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opts__21595__auto__","opts__21595__auto__",-1539714626,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null)),(function (){var x__9759__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (p1__21592_SHARP_){
return cljs.core._conj.call(null,(function (){var x__9759__auto__ = cljs.core.keyword.call(null,p1__21592_SHARP_);
return cljs.core._conj.call(null,(function (){var x__9759__auto____$1 = p1__21592_SHARP_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto____$1);
})(),x__9759__auto__);
})(),new cljs.core.Symbol("cljs.core$macros","vector","cljs.core$macros/vector",912237829,null));
});})(gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,base_fields)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())))], null));
var vec__21601 = cljs.core$macros.prepare_protocol_masks.call(null,env,impls__$1);
var fpps = cljs.core.nth.call(null,vec__21601,(0),null);
var pmasks = cljs.core.nth.call(null,vec__21601,(1),null);
var protocols = cljs.core$macros.collect_protocols.call(null,impls__$1,env);
var tagname__$1 = cljs.core.vary_meta.call(null,tagname,cljs.core.assoc,new cljs.core.Keyword(null,"protocols","protocols",-5615896),protocols,new cljs.core.Keyword(null,"skip-protocol-flag","skip-protocol-flag",-1426798630),fpps);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"defrecord*","defrecord*",-1936366207,null)),(function (){var x__9759__auto__ = tagname__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = hinted_fields;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = pmasks;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","extend-type","cljs.core$macros/extend-type",1713295201,null)),(function (){var x__9759__auto__ = tagname__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),cljs.core$macros.dt__GT_et.call(null,tagname__$1,impls__$1,fields__$2,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
});
cljs.core$macros.build_map_factory = (function cljs$core$macros$build_map_factory(rsym,rname,fields){
var fn_name = cljs.core.with_meta.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"map->","map->",-999714600,null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(rsym)].join('')),cljs.core.assoc.call(null,cljs.core.meta.call(null,rsym),new cljs.core.Keyword(null,"factory","factory",63933746),new cljs.core.Keyword(null,"map","map",1371690461)));
var ms = cljs.core.gensym.call(null);
var ks = cljs.core.map.call(null,cljs.core.keyword,fields);
var getters = cljs.core.map.call(null,((function (fn_name,ms,ks){
return (function (k){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9759__auto__ = k;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = ms;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
});})(fn_name,ms,ks))
,ks);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null)),(function (){var x__9759__auto__ = fn_name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9759__auto__ = ms;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__9759__auto__ = rname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),getters,cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","dissoc","cljs.core/dissoc",-432349815,null)),(function (){var x__9759__auto__ = ms;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),ks)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
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
var args__10037__auto__ = [];
var len__10030__auto___21611 = arguments.length;
var i__10031__auto___21612 = (0);
while(true){
if((i__10031__auto___21612 < len__10030__auto___21611)){
args__10037__auto__.push((arguments[i__10031__auto___21612]));

var G__21613 = (i__10031__auto___21612 + (1));
i__10031__auto___21612 = G__21613;
continue;
} else {
}
break;
}

var argseq__10038__auto__ = ((((4) < args__10037__auto__.length))?(new cljs.core.IndexedSeq(args__10037__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.defrecord.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__10038__auto__);
});

cljs.core$macros.defrecord.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,rsym,fields,impls){
cljs.core$macros.validate_fields.call(null,"defrecord",rsym,fields);

var rsym__$1 = cljs.core.vary_meta.call(null,rsym,cljs.core.assoc,new cljs.core.Keyword(null,"internal-ctor","internal-ctor",937392560),true);
var r = cljs.core.vary_meta.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,_AMPERSAND_env,new cljs.core.Keyword(null,"locals","locals",535295783)),rsym__$1)),cljs.core.assoc,new cljs.core.Keyword(null,"internal-ctor","internal-ctor",937392560),true);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9759__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core$macros.emit_defrecord.call(null,_AMPERSAND_env,rsym__$1,r,fields,impls);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-getBasis",".-getBasis",-1306451468,null)),(function (){var x__9759__auto__ = r;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9759__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__9759__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,fields))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$type",".-cljs$lang$type",-1029307724,null)),(function (){var x__9759__auto__ = r;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$ctorPrSeq",".-cljs$lang$ctorPrSeq",41132414,null)),(function (){var x__9759__auto__ = r;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9759__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__21604__auto__","this__21604__auto__",76792207,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null)),(function (){var x__9759__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(r)].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$ctorPrWriter",".-cljs$lang$ctorPrWriter",255834464,null)),(function (){var x__9759__auto__ = r;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9759__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__21604__auto__","this__21604__auto__",76792207,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__21605__auto__","writer__21605__auto__",837878081,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-write","cljs.core/-write",527220517,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__21605__auto__","writer__21605__auto__",837878081,null)),(function (){var x__9759__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(r)].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core$macros.build_positional_factory.call(null,rsym__$1,r,fields);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core$macros.build_map_factory.call(null,rsym__$1,r,fields);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = r;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
});

cljs.core$macros.defrecord.cljs$lang$maxFixedArity = (4);

cljs.core$macros.defrecord.cljs$lang$applyTo = (function (seq21606){
var G__21607 = cljs.core.first.call(null,seq21606);
var seq21606__$1 = cljs.core.next.call(null,seq21606);
var G__21608 = cljs.core.first.call(null,seq21606__$1);
var seq21606__$2 = cljs.core.next.call(null,seq21606__$1);
var G__21609 = cljs.core.first.call(null,seq21606__$2);
var seq21606__$3 = cljs.core.next.call(null,seq21606__$2);
var G__21610 = cljs.core.first.call(null,seq21606__$3);
var seq21606__$4 = cljs.core.next.call(null,seq21606__$3);
return cljs.core$macros.defrecord.cljs$core$IFn$_invoke$arity$variadic(G__21607,G__21608,G__21609,G__21610,seq21606__$4);
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
var args__10037__auto__ = [];
var len__10030__auto___21641 = arguments.length;
var i__10031__auto___21642 = (0);
while(true){
if((i__10031__auto___21642 < len__10030__auto___21641)){
args__10037__auto__.push((arguments[i__10031__auto___21642]));

var G__21643 = (i__10031__auto___21642 + (1));
i__10031__auto___21642 = G__21643;
continue;
} else {
}
break;
}

var argseq__10038__auto__ = ((((3) < args__10037__auto__.length))?(new cljs.core.IndexedSeq(args__10037__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.defprotocol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10038__auto__);
});

cljs.core$macros.defprotocol.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,psym,doc_PLUS_methods){
var p = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,_AMPERSAND_env,new cljs.core.Keyword(null,"locals","locals",535295783)),psym));
var vec__21620 = ((typeof cljs.core.first.call(null,doc_PLUS_methods) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,doc_PLUS_methods),cljs.core.next.call(null,doc_PLUS_methods)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,doc_PLUS_methods], null));
var doc = cljs.core.nth.call(null,vec__21620,(0),null);
var methods$ = cljs.core.nth.call(null,vec__21620,(1),null);
var psym__$1 = cljs.core.vary_meta.call(null,psym,cljs.core.assoc,new cljs.core.Keyword(null,"doc","doc",1913296891),doc,new cljs.core.Keyword(null,"protocol-symbol","protocol-symbol",1279552198),true);
var ns_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
var fqn = ((function (p,vec__21620,doc,methods$,psym__$1,ns_name){
return (function (n){
return cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns_name),cljs.core.str.cljs$core$IFn$_invoke$arity$1("."),cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));
});})(p,vec__21620,doc,methods$,psym__$1,ns_name))
;
var prefix = cljs.core$macros.protocol_prefix.call(null,p);
var _ = (function (){var seq__21623 = cljs.core.seq.call(null,methods$);
var chunk__21624 = null;
var count__21625 = (0);
var i__21626 = (0);
while(true){
if((i__21626 < count__21625)){
var vec__21627 = cljs.core._nth.call(null,chunk__21624,i__21626);
var seq__21628 = cljs.core.seq.call(null,vec__21627);
var first__21629 = cljs.core.first.call(null,seq__21628);
var seq__21628__$1 = cljs.core.next.call(null,seq__21628);
var mname = first__21629;
var arities = seq__21628__$1;
if(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(0),null], null), null),cljs.core.map.call(null,cljs.core.count,cljs.core.filter.call(null,cljs.core.vector_QMARK_,arities))))){
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid protocol, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" defines method "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" with arity 0")].join('')));
} else {
}

var G__21644 = seq__21623;
var G__21645 = chunk__21624;
var G__21646 = count__21625;
var G__21647 = (i__21626 + (1));
seq__21623 = G__21644;
chunk__21624 = G__21645;
count__21625 = G__21646;
i__21626 = G__21647;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__21623);
if(temp__4657__auto__){
var seq__21623__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21623__$1)){
var c__9736__auto__ = cljs.core.chunk_first.call(null,seq__21623__$1);
var G__21648 = cljs.core.chunk_rest.call(null,seq__21623__$1);
var G__21649 = c__9736__auto__;
var G__21650 = cljs.core.count.call(null,c__9736__auto__);
var G__21651 = (0);
seq__21623 = G__21648;
chunk__21624 = G__21649;
count__21625 = G__21650;
i__21626 = G__21651;
continue;
} else {
var vec__21630 = cljs.core.first.call(null,seq__21623__$1);
var seq__21631 = cljs.core.seq.call(null,vec__21630);
var first__21632 = cljs.core.first.call(null,seq__21631);
var seq__21631__$1 = cljs.core.next.call(null,seq__21631);
var mname = first__21632;
var arities = seq__21631__$1;
if(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(0),null], null), null),cljs.core.map.call(null,cljs.core.count,cljs.core.filter.call(null,cljs.core.vector_QMARK_,arities))))){
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid protocol, "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" defines method "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mname),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" with arity 0")].join('')));
} else {
}

var G__21652 = cljs.core.next.call(null,seq__21623__$1);
var G__21653 = null;
var G__21654 = (0);
var G__21655 = (0);
seq__21623 = G__21652;
chunk__21624 = G__21653;
count__21625 = G__21654;
i__21626 = G__21655;
continue;
}
} else {
return null;
}
}
break;
}
})();
var expand_sig = ((function (p,vec__21620,doc,methods$,psym__$1,ns_name,fqn,prefix,_){
return (function (fname,slot,sig){
var sig__$1 = ((!(cljs.core.every_QMARK_.call(null,cljs.core.symbol_QMARK_,sig)))?cljs.core.mapv.call(null,((function (p,vec__21620,doc,methods$,psym__$1,ns_name,fqn,prefix,_){
return (function (arg){
if((arg instanceof cljs.core.Symbol)){
return arg;
} else {
if((cljs.core.map_QMARK_.call(null,arg)) && (!((new cljs.core.Keyword(null,"as","as",1148689641).cljs$core$IFn$_invoke$arity$1(arg) == null)))){
return new cljs.core.Keyword(null,"as","as",1148689641).cljs$core$IFn$_invoke$arity$1(arg);
} else {
return cljs.core.gensym.call(null);

}
}
});})(p,vec__21620,doc,methods$,psym__$1,ns_name,fqn,prefix,_))
,sig):sig);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9759__auto__ = sig__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__9759__auto__ = cljs.core.first.call(null,sig__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9759__auto__ = cljs.core.first.call(null,sig__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(slot)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9759__auto__ = cljs.core.first.call(null,sig__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = slot;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),sig__$1)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9759__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__21614__auto__","x__21614__auto__",1911903954,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__9759__auto__ = cljs.core.first.call(null,sig__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__9759__auto__ = cljs.core.first.call(null,sig__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__21615__auto__","m__21615__auto__",1095675265,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aget","cljs.core$macros/aget",1976136178,null)),(function (){var x__9759__auto__ = fqn.call(null,fname);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog","typeOf","goog/typeOf",539097255,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__21614__auto__","x__21614__auto__",1911903954,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__21615__auto__","m__21615__auto__",1095675265,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__21615__auto__","m__21615__auto__",1095675265,null)),sig__$1)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9759__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__21615__auto__","m__21615__auto__",1095675265,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aget","cljs.core$macros/aget",1976136178,null)),(function (){var x__9759__auto__ = fqn.call(null,fname);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,"_"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__21615__auto__","m__21615__auto__",1095675265,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__21615__auto__","m__21615__auto__",1095675265,null)),sig__$1)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","missing-protocol","cljs.core/missing-protocol",531539732,null)),(function (){var x__9759__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(psym__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1("."),cljs.core.str.cljs$core$IFn$_invoke$arity$1(fname)].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.first.call(null,sig__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
});})(p,vec__21620,doc,methods$,psym__$1,ns_name,fqn,prefix,_))
;
var psym__$2 = cljs.core.vary_meta.call(null,cljs.core.vary_meta.call(null,psym__$1,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516)], null),cljs.core.conj,"@interface"),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"protocol-info","protocol-info",1471745843),new cljs.core.Keyword(null,"methods","methods",453930866)], null),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (p,vec__21620,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig){
return (function (p__21633){
var vec__21634 = p__21633;
var seq__21635 = cljs.core.seq.call(null,vec__21634);
var first__21636 = cljs.core.first.call(null,seq__21635);
var seq__21635__$1 = cljs.core.next.call(null,seq__21635);
var fname = first__21636;
var sigs = seq__21635__$1;
var doc__$1 = (function (){var doc__$1 = cljs.core.last.call(null,sigs);
if(typeof doc__$1 === 'string'){
return doc__$1;
} else {
return null;
}
})();
var sigs__$1 = cljs.core.take_while.call(null,cljs.core.vector_QMARK_,sigs);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vary_meta.call(null,fname,cljs.core.assoc,new cljs.core.Keyword(null,"doc","doc",1913296891),doc__$1),cljs.core.vec.call(null,sigs__$1)], null);
});})(p,vec__21620,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig))
,methods$)));
var method = ((function (p,vec__21620,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2){
return (function (p__21637){
var vec__21638 = p__21637;
var seq__21639 = cljs.core.seq.call(null,vec__21638);
var first__21640 = cljs.core.first.call(null,seq__21639);
var seq__21639__$1 = cljs.core.next.call(null,seq__21639);
var fname = first__21640;
var sigs = seq__21639__$1;
var doc__$1 = (function (){var doc__$1 = cljs.core.last.call(null,sigs);
if(typeof doc__$1 === 'string'){
return doc__$1;
} else {
return null;
}
})();
var sigs__$1 = cljs.core.take_while.call(null,cljs.core.vector_QMARK_,sigs);
var amp = (cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),cljs.core.apply.call(null,cljs.core.concat,sigs__$1)))?cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"protocol-with-variadic-method","protocol-with-variadic-method",-693368178),_AMPERSAND_env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"protocol","protocol",652470118),psym__$2,new cljs.core.Keyword(null,"name","name",1843675177),fname], null)):null);
var slot = cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,fname))].join(''));
var fname__$1 = cljs.core.vary_meta.call(null,fname,cljs.core.assoc,new cljs.core.Keyword(null,"protocol","protocol",652470118),p,new cljs.core.Keyword(null,"doc","doc",1913296891),doc__$1);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null)),(function (){var x__9759__auto__ = fname__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),cljs.core.map.call(null,((function (doc__$1,sigs__$1,amp,slot,fname__$1,vec__21638,seq__21639,first__21640,seq__21639__$1,fname,sigs,p,vec__21620,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2){
return (function (sig){
return expand_sig.call(null,fname__$1,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(slot),cljs.core.str.cljs$core$IFn$_invoke$arity$1("$arity$"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,sig))].join('')),sig);
});})(doc__$1,sigs__$1,amp,slot,fname__$1,vec__21638,seq__21639,first__21640,seq__21639__$1,fname,sigs,p,vec__21620,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2))
,sigs__$1))));
});})(p,vec__21620,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"*unchecked-if*","*unchecked-if*",1542408350,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"def","def",597100991,null)),(function (){var x__9759__auto__ = psym__$2;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"function(){}"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),cljs.core.map.call(null,method,methods$),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"*unchecked-if*","*unchecked-if*",1542408350,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
});

cljs.core$macros.defprotocol.cljs$lang$maxFixedArity = (3);

cljs.core$macros.defprotocol.cljs$lang$applyTo = (function (seq21616){
var G__21617 = cljs.core.first.call(null,seq21616);
var seq21616__$1 = cljs.core.next.call(null,seq21616);
var G__21618 = cljs.core.first.call(null,seq21616__$1);
var seq21616__$2 = cljs.core.next.call(null,seq21616__$1);
var G__21619 = cljs.core.first.call(null,seq21616__$2);
var seq21616__$3 = cljs.core.next.call(null,seq21616__$2);
return cljs.core$macros.defprotocol.cljs$core$IFn$_invoke$arity$variadic(G__21617,G__21618,G__21619,seq21616__$3);
});


cljs.core$macros.defprotocol.cljs$lang$macro = true;
/**
 * EXPERIMENTAL
 */
cljs.core$macros.implements_QMARK_ = (function cljs$core$macros$implements_QMARK_(_AMPERSAND_form,_AMPERSAND_env,psym,x){
var p = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,_AMPERSAND_env,new cljs.core.Keyword(null,"locals","locals",535295783)),psym));
var prefix = cljs.core$macros.protocol_prefix.call(null,p);
var xsym = cljs.core$macros.bool_expr.call(null,cljs.core.gensym.call(null));
var vec__21659 = cljs.core$macros.fast_path_protocols.call(null,p);
var part = cljs.core.nth.call(null,vec__21659,(0),null);
var bit = cljs.core.nth.call(null,vec__21659,(1),null);
var msym = cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("-cljs$lang$protocol_mask$partition"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(part),cljs.core.str.cljs$core$IFn$_invoke$arity$1("$")].join(''));
if(!((x instanceof cljs.core.Symbol))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9759__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9759__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9759__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","or","cljs.core$macros/or",1346243648,null)),(function (){var x__9759__auto__ = (cljs.core.truth_(bit)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9759__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = msym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = bit;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})()))):false);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","identical?","cljs.core$macros/identical?",815580547,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PROTOCOL_SENTINEL","cljs.core/PROTOCOL_SENTINEL",210209696,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9759__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__9759__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","or","cljs.core$macros/or",1346243648,null)),(function (){var x__9759__auto__ = (cljs.core.truth_(bit)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9759__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = msym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = bit;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})()))):false);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","identical?","cljs.core$macros/identical?",815580547,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PROTOCOL_SENTINEL","cljs.core/PROTOCOL_SENTINEL",210209696,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9759__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
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
var vec__21665 = cljs.core$macros.fast_path_protocols.call(null,p);
var part = cljs.core.nth.call(null,vec__21665,(0),null);
var bit = cljs.core.nth.call(null,vec__21665,(1),null);
var msym = cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("-cljs$lang$protocol_mask$partition"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(part),cljs.core.str.cljs$core$IFn$_invoke$arity$1("$")].join(''));
if(!((x instanceof cljs.core.Symbol))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9759__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9759__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__9759__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","or","cljs.core$macros/or",1346243648,null)),(function (){var x__9759__auto__ = (cljs.core.truth_(bit)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9759__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = msym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = bit;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})()))):false);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","identical?","cljs.core$macros/identical?",815580547,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PROTOCOL_SENTINEL","cljs.core/PROTOCOL_SENTINEL",210209696,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9759__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","coercive-not","cljs.core$macros/coercive-not",115999987,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9759__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = msym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","native-satisfies?","cljs.core/native-satisfies?",1482305036,null)),(function (){var x__9759__auto__ = psym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","native-satisfies?","cljs.core/native-satisfies?",1482305036,null)),(function (){var x__9759__auto__ = psym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__9759__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","or","cljs.core$macros/or",1346243648,null)),(function (){var x__9759__auto__ = (cljs.core.truth_(bit)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9759__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = msym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = bit;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})()))):false);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","identical?","cljs.core$macros/identical?",815580547,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PROTOCOL_SENTINEL","cljs.core/PROTOCOL_SENTINEL",210209696,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9759__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","coercive-not","cljs.core$macros/coercive-not",115999987,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9759__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = msym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","native-satisfies?","cljs.core/native-satisfies?",1482305036,null)),(function (){var x__9759__auto__ = psym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","native-satisfies?","cljs.core/native-satisfies?",1482305036,null)),(function (){var x__9759__auto__ = psym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
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
var args__10037__auto__ = [];
var len__10030__auto___21671 = arguments.length;
var i__10031__auto___21672 = (0);
while(true){
if((i__10031__auto___21672 < len__10030__auto___21671)){
args__10037__auto__.push((arguments[i__10031__auto___21672]));

var G__21673 = (i__10031__auto___21672 + (1));
i__10031__auto___21672 = G__21673;
continue;
} else {
}
break;
}

var argseq__10038__auto__ = ((((2) < args__10037__auto__.length))?(new cljs.core.IndexedSeq(args__10037__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.lazy_seq.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10038__auto__);
});

cljs.core$macros.lazy_seq.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","LazySeq","cljs.core/LazySeq",1986389673,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9759__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
});

cljs.core$macros.lazy_seq.cljs$lang$maxFixedArity = (2);

cljs.core$macros.lazy_seq.cljs$lang$applyTo = (function (seq21668){
var G__21669 = cljs.core.first.call(null,seq21668);
var seq21668__$1 = cljs.core.next.call(null,seq21668);
var G__21670 = cljs.core.first.call(null,seq21668__$1);
var seq21668__$2 = cljs.core.next.call(null,seq21668__$1);
return cljs.core$macros.lazy_seq.cljs$core$IFn$_invoke$arity$variadic(G__21669,G__21670,seq21668__$2);
});


cljs.core$macros.lazy_seq.cljs$lang$macro = true;
/**
 * Takes a body of expressions and yields a Delay object that will
 *   invoke the body only the first time it is forced (with force or deref/@), and
 *   will cache the result and return it on all subsequent force
 *   calls.
 */
cljs.core$macros.delay = (function cljs$core$macros$delay(var_args){
var args__10037__auto__ = [];
var len__10030__auto___21677 = arguments.length;
var i__10031__auto___21678 = (0);
while(true){
if((i__10031__auto___21678 < len__10030__auto___21677)){
args__10037__auto__.push((arguments[i__10031__auto___21678]));

var G__21679 = (i__10031__auto___21678 + (1));
i__10031__auto___21678 = G__21679;
continue;
} else {
}
break;
}

var argseq__10038__auto__ = ((((2) < args__10037__auto__.length))?(new cljs.core.IndexedSeq(args__10037__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.delay.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10038__auto__);
});

cljs.core$macros.delay.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","Delay","cljs.core/Delay",-21574999,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9759__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
});

cljs.core$macros.delay.cljs$lang$maxFixedArity = (2);

cljs.core$macros.delay.cljs$lang$applyTo = (function (seq21674){
var G__21675 = cljs.core.first.call(null,seq21674);
var seq21674__$1 = cljs.core.next.call(null,seq21674);
var G__21676 = cljs.core.first.call(null,seq21674__$1);
var seq21674__$2 = cljs.core.next.call(null,seq21674__$1);
return cljs.core$macros.delay.cljs$core$IFn$_invoke$arity$variadic(G__21675,G__21676,seq21674__$2);
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
var args__10037__auto__ = [];
var len__10030__auto___21688 = arguments.length;
var i__10031__auto___21689 = (0);
while(true){
if((i__10031__auto___21689 < len__10030__auto___21688)){
args__10037__auto__.push((arguments[i__10031__auto___21689]));

var G__21690 = (i__10031__auto___21689 + (1));
i__10031__auto___21689 = G__21690;
continue;
} else {
}
break;
}

var argseq__10038__auto__ = ((((3) < args__10037__auto__.length))?(new cljs.core.IndexedSeq(args__10037__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.with_redefs.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10038__auto__);
});

cljs.core$macros.with_redefs.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
var names = cljs.core.take_nth.call(null,(2),bindings);
var vals = cljs.core.take_nth.call(null,(2),cljs.core.drop.call(null,(1),bindings));
var tempnames = cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.gensym,cljs.core.name),names);
var binds = cljs.core.map.call(null,cljs.core.vector,names,vals);
var resets = cljs.core.reverse.call(null,cljs.core.map.call(null,cljs.core.vector,names,tempnames));
var bind_value = ((function (names,vals,tempnames,binds,resets){
return (function (p__21684){
var vec__21685 = p__21684;
var k = cljs.core.nth.call(null,vec__21685,(0),null);
var v = cljs.core.nth.call(null,vec__21685,(1),null);
return cljs.core._conj.call(null,(function (){var x__9759__auto__ = k;
return cljs.core._conj.call(null,(function (){var x__9759__auto____$1 = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto____$1);
})(),x__9759__auto__);
})(),new cljs.core.Symbol(null,"set!","set!",250714521,null));
});})(names,vals,tempnames,binds,resets))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9759__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.interleave.call(null,tempnames,names)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),cljs.core.map.call(null,bind_value,binds),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"try","try",-1273693247,null)),body,(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"finally","finally",-1065347064,null)),cljs.core.map.call(null,bind_value,resets))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
});

cljs.core$macros.with_redefs.cljs$lang$maxFixedArity = (3);

cljs.core$macros.with_redefs.cljs$lang$applyTo = (function (seq21680){
var G__21681 = cljs.core.first.call(null,seq21680);
var seq21680__$1 = cljs.core.next.call(null,seq21680);
var G__21682 = cljs.core.first.call(null,seq21680__$1);
var seq21680__$2 = cljs.core.next.call(null,seq21680__$1);
var G__21683 = cljs.core.first.call(null,seq21680__$2);
var seq21680__$3 = cljs.core.next.call(null,seq21680__$2);
return cljs.core$macros.with_redefs.cljs$core$IFn$_invoke$arity$variadic(G__21681,G__21682,G__21683,seq21680__$3);
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
var args__10037__auto__ = [];
var len__10030__auto___21695 = arguments.length;
var i__10031__auto___21696 = (0);
while(true){
if((i__10031__auto___21696 < len__10030__auto___21695)){
args__10037__auto__.push((arguments[i__10031__auto___21696]));

var G__21697 = (i__10031__auto___21696 + (1));
i__10031__auto___21696 = G__21697;
continue;
} else {
}
break;
}

var argseq__10038__auto__ = ((((3) < args__10037__auto__.length))?(new cljs.core.IndexedSeq(args__10037__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.binding.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10038__auto__);
});

cljs.core$macros.binding.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
var names = cljs.core.take_nth.call(null,(2),bindings);
cljs.analyzer.confirm_bindings.call(null,_AMPERSAND_env,names);

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","with-redefs","cljs.core$macros/with-redefs",1489217801,null)),(function (){var x__9759__auto__ = bindings;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),body)));
});

cljs.core$macros.binding.cljs$lang$maxFixedArity = (3);

cljs.core$macros.binding.cljs$lang$applyTo = (function (seq21691){
var G__21692 = cljs.core.first.call(null,seq21691);
var seq21691__$1 = cljs.core.next.call(null,seq21691);
var G__21693 = cljs.core.first.call(null,seq21691__$1);
var seq21691__$2 = cljs.core.next.call(null,seq21691__$1);
var G__21694 = cljs.core.first.call(null,seq21691__$2);
var seq21691__$3 = cljs.core.next.call(null,seq21691__$2);
return cljs.core$macros.binding.cljs$core$IFn$_invoke$arity$variadic(G__21692,G__21693,G__21694,seq21691__$3);
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
var args__10037__auto__ = [];
var len__10030__auto___21716 = arguments.length;
var i__10031__auto___21717 = (0);
while(true){
if((i__10031__auto___21717 < len__10030__auto___21716)){
args__10037__auto__.push((arguments[i__10031__auto___21717]));

var G__21718 = (i__10031__auto___21717 + (1));
i__10031__auto___21717 = G__21718;
continue;
} else {
}
break;
}

var argseq__10038__auto__ = ((((4) < args__10037__auto__.length))?(new cljs.core.IndexedSeq(args__10037__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.condp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__10038__auto__);
});

cljs.core$macros.condp.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,pred,expr,clauses){
var gpred = cljs.core.gensym.call(null,"pred__");
var gexpr = cljs.core.gensym.call(null,"expr__");
var emit = ((function (gpred,gexpr){
return (function cljs$core$macros$emit(pred__$1,expr__$1,args){
var vec__21710 = cljs.core.split_at.call(null,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,">>",">>",-277509267),cljs.core.second.call(null,args)))?(3):(2)),args);
var vec__21713 = cljs.core.nth.call(null,vec__21710,(0),null);
var a = cljs.core.nth.call(null,vec__21713,(0),null);
var b = cljs.core.nth.call(null,vec__21713,(1),null);
var c = cljs.core.nth.call(null,vec__21713,(2),null);
var clause = vec__21713;
var more = cljs.core.nth.call(null,vec__21710,(1),null);
var n = cljs.core.count.call(null,clause);
if(cljs.core._EQ_.call(null,(0),n)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"No matching clause: "),(function (){var x__9759__auto__ = expr__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
} else {
if(cljs.core._EQ_.call(null,(1),n)){
return a;
} else {
if(cljs.core._EQ_.call(null,(2),n)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9759__auto__ = pred__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = a;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = expr__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = b;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs$core$macros$emit.call(null,pred__$1,expr__$1,more);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-let","cljs.core$macros/if-let",1291543946,null)),(function (){var x__9759__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"p__21698__auto__","p__21698__auto__",908526598,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9759__auto__ = pred__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = a;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = expr__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9759__auto__ = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"p__21698__auto__","p__21698__auto__",908526598,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs$core$macros$emit.call(null,pred__$1,expr__$1,more);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));

}
}
}
});})(gpred,gexpr))
;
var gres = cljs.core.gensym.call(null,"res__");
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9759__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9759__auto__ = gpred;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = pred;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = gexpr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = emit.call(null,gpred,gexpr,clauses);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
});

cljs.core$macros.condp.cljs$lang$maxFixedArity = (4);

cljs.core$macros.condp.cljs$lang$applyTo = (function (seq21699){
var G__21700 = cljs.core.first.call(null,seq21699);
var seq21699__$1 = cljs.core.next.call(null,seq21699);
var G__21701 = cljs.core.first.call(null,seq21699__$1);
var seq21699__$2 = cljs.core.next.call(null,seq21699__$1);
var G__21702 = cljs.core.first.call(null,seq21699__$2);
var seq21699__$3 = cljs.core.next.call(null,seq21699__$2);
var G__21703 = cljs.core.first.call(null,seq21699__$3);
var seq21699__$4 = cljs.core.next.call(null,seq21699__$3);
return cljs.core$macros.condp.cljs$core$IFn$_invoke$arity$variadic(G__21700,G__21701,G__21702,G__21703,seq21699__$4);
});


cljs.core$macros.condp.cljs$lang$macro = true;
cljs.core$macros.assoc_test = (function cljs$core$macros$assoc_test(m,test,expr,env){
if(cljs.core.contains_QMARK_.call(null,m,test)){
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Duplicate case test constant '"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(test),cljs.core.str.cljs$core$IFn$_invoke$arity$1("'"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(" on line "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(env)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_file_STAR_)].join(''):null))].join('')));
} else {
return cljs.core.assoc.call(null,m,test,expr);
}
});
cljs.core$macros.const_QMARK_ = (function cljs$core$macros$const_QMARK_(env,x){
var m = (function (){var and__8905__auto__ = cljs.core.list_QMARK_.call(null,x);
if(and__8905__auto__){
return cljs.analyzer.resolve_var.call(null,env,cljs.core.last.call(null,x));
} else {
return and__8905__auto__;
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
var args__10037__auto__ = [];
var len__10030__auto___21739 = arguments.length;
var i__10031__auto___21740 = (0);
while(true){
if((i__10031__auto___21740 < len__10030__auto___21739)){
args__10037__auto__.push((arguments[i__10031__auto___21740]));

var G__21741 = (i__10031__auto___21740 + (1));
i__10031__auto___21740 = G__21741;
continue;
} else {
}
break;
}

var argseq__10038__auto__ = ((((3) < args__10037__auto__.length))?(new cljs.core.IndexedSeq(args__10037__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.case$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10038__auto__);
});

cljs.core$macros.case$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,e,clauses){
var default$ = ((cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,clauses)))?cljs.core.last.call(null,clauses):cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"No matching clause: "),(function (){var x__9759__auto__ = e;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})()))));
var env = _AMPERSAND_env;
var pairs = cljs.core.reduce.call(null,((function (default$,env){
return (function (m,p__21727){
var vec__21728 = p__21727;
var test = cljs.core.nth.call(null,vec__21728,(0),null);
var expr = cljs.core.nth.call(null,vec__21728,(1),null);
if(cljs.core.seq_QMARK_.call(null,test)){
return cljs.core.reduce.call(null,((function (vec__21728,test,expr,default$,env){
return (function (m__$1,test__$1){
var test__$2 = (((test__$1 instanceof cljs.core.Symbol))?cljs.core._conj.call(null,(function (){var x__9759__auto__ = test__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),new cljs.core.Symbol(null,"quote","quote",1377916282,null)):test__$1);
return cljs.core$macros.assoc_test.call(null,m__$1,test__$2,expr,env);
});})(vec__21728,test,expr,default$,env))
,m,test);
} else {
if((test instanceof cljs.core.Symbol)){
return cljs.core$macros.assoc_test.call(null,m,cljs.core._conj.call(null,(function (){var x__9759__auto__ = test;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
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
return (function (p1__21719_SHARP_){
return cljs.core$macros.const_QMARK_.call(null,env,p1__21719_SHARP_);
});})(default$,env,pairs,esym,tests))
),tests)){
var no_default = ((cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,clauses)))?cljs.core.butlast.call(null,clauses):clauses);
var tests__$1 = cljs.core.mapv.call(null,((function (no_default,default$,env,pairs,esym,tests){
return (function (p1__21720_SHARP_){
if(cljs.core.seq_QMARK_.call(null,p1__21720_SHARP_)){
return cljs.core.vec.call(null,p1__21720_SHARP_);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21720_SHARP_], null);
}
});})(no_default,default$,env,pairs,esym,tests))
,cljs.core.take_nth.call(null,(2),no_default));
var thens = cljs.core.vec.call(null,cljs.core.take_nth.call(null,(2),cljs.core.drop.call(null,(1),no_default)));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9759__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9759__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = e;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"case*","case*",-1938255072,null)),(function (){var x__9759__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = tests__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = thens;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = default$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
} else {
if(cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,tests)){
var tests__$1 = cljs.core.mapv.call(null,((function (default$,env,pairs,esym,tests){
return (function (p1__21722_SHARP_){
if(cljs.core.seq_QMARK_.call(null,p1__21722_SHARP_)){
return cljs.core.vec.call(null,p1__21722_SHARP_);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21722_SHARP_], null);
}
});})(default$,env,pairs,esym,tests))
,cljs.core.vec.call(null,cljs.core.map.call(null,((function (default$,env,pairs,esym,tests){
return (function (p1__21721_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__21721_SHARP_)].join('').substring((1));
});})(default$,env,pairs,esym,tests))
,tests)));
var thens = cljs.core.vec.call(null,cljs.core.vals.call(null,pairs));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9759__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9759__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","keyword?","cljs.core$macros/keyword?",1362730141,null)),(function (){var x__9759__auto__ = e;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-fqn",".-fqn",1246113027,null)),(function (){var x__9759__auto__ = e;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"case*","case*",-1938255072,null)),(function (){var x__9759__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = tests__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = thens;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = default$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9759__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9759__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = e;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","cond","cljs.core$macros/cond",1626318471,null)),cljs.core.mapcat.call(null,((function (default$,env,pairs,esym,tests){
return (function (p__21735){
var vec__21736 = p__21735;
var m = cljs.core.nth.call(null,vec__21736,(0),null);
var c = cljs.core.nth.call(null,vec__21736,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null)),(function (){var x__9759__auto__ = m;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
});})(default$,env,pairs,esym,tests))
,pairs),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"else","else",-1508377146)),(function (){var x__9759__auto__ = default$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));

}
}
});

cljs.core$macros.case$.cljs$lang$maxFixedArity = (3);

cljs.core$macros.case$.cljs$lang$applyTo = (function (seq21723){
var G__21724 = cljs.core.first.call(null,seq21723);
var seq21723__$1 = cljs.core.next.call(null,seq21723);
var G__21725 = cljs.core.first.call(null,seq21723__$1);
var seq21723__$2 = cljs.core.next.call(null,seq21723__$1);
var G__21726 = cljs.core.first.call(null,seq21723__$2);
var seq21723__$3 = cljs.core.next.call(null,seq21723__$2);
return cljs.core$macros.case$.cljs$core$IFn$_invoke$arity$variadic(G__21724,G__21725,G__21726,seq21723__$3);
});


cljs.core$macros.case$.cljs$lang$macro = true;
/**
 * Evaluates expr and throws an exception if it does not evaluate to
 *   logical true.
 */
cljs.core$macros.assert = (function cljs$core$macros$assert(var_args){
var args21742 = [];
var len__10030__auto___21745 = arguments.length;
var i__10031__auto___21746 = (0);
while(true){
if((i__10031__auto___21746 < len__10030__auto___21745)){
args21742.push((arguments[i__10031__auto___21746]));

var G__21747 = (i__10031__auto___21746 + (1));
i__10031__auto___21746 = G__21747;
continue;
} else {
}
break;
}

var G__21744 = args21742.length;
switch (G__21744) {
case 3:
return cljs.core$macros.assert.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.assert.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((args21742.length - (2)))].join('')));

}
});

cljs.core$macros.assert.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
if(cljs.core._STAR_assert_STAR_){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-not","cljs.core$macros/when-not",-764302244,null)),(function (){var x__9759__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__9759__auto__ = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,x))].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
} else {
return null;
}
});

cljs.core$macros.assert.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,message){
if(cljs.core._STAR_assert_STAR_){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-not","cljs.core$macros/when-not",-764302244,null)),(function (){var x__9759__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"Assert failed: "),(function (){var x__9759__auto__ = message;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,"\n"),(function (){var x__9759__auto__ = cljs.core.pr_str.call(null,x);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
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
return cljs.core.reduce.call(null,(function (groups,p__21835){
var vec__21836 = p__21835;
var k = cljs.core.nth.call(null,vec__21836,(0),null);
var v = cljs.core.nth.call(null,vec__21836,(1),null);
if((k instanceof cljs.core.Keyword)){
return cljs.core.conj.call(null,cljs.core.pop.call(null,groups),cljs.core.conj.call(null,cljs.core.peek.call(null,groups),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null)));
} else {
return cljs.core.conj.call(null,groups,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
}
}),cljs.core.PersistentVector.EMPTY,cljs.core.partition.call(null,(2),seq_exprs__$1));
});
var err = ((function (to_groups){
return (function() { 
var G__21916__delegate = function (msg){
throw cljs.core.ex_info.call(null,cljs.core.apply.call(null,cljs.core.str,msg),cljs.core.PersistentArrayMap.EMPTY);
};
var G__21916 = function (var_args){
var msg = null;
if (arguments.length > 0) {
var G__21917__i = 0, G__21917__a = new Array(arguments.length -  0);
while (G__21917__i < G__21917__a.length) {G__21917__a[G__21917__i] = arguments[G__21917__i + 0]; ++G__21917__i;}
  msg = new cljs.core.IndexedSeq(G__21917__a,0);
} 
return G__21916__delegate.call(this,msg);};
G__21916.cljs$lang$maxFixedArity = 0;
G__21916.cljs$lang$applyTo = (function (arglist__21918){
var msg = cljs.core.seq(arglist__21918);
return G__21916__delegate(msg);
});
G__21916.cljs$core$IFn$_invoke$arity$variadic = G__21916__delegate;
return G__21916;
})()
;})(to_groups))
;
var emit_bind = ((function (to_groups,err){
return (function cljs$core$macros$for_$_emit_bind(p__21839){
var vec__21878 = p__21839;
var seq__21879 = cljs.core.seq.call(null,vec__21878);
var first__21880 = cljs.core.first.call(null,seq__21879);
var seq__21879__$1 = cljs.core.next.call(null,seq__21879);
var vec__21881 = first__21880;
var seq__21882 = cljs.core.seq.call(null,vec__21881);
var first__21883 = cljs.core.first.call(null,seq__21882);
var seq__21882__$1 = cljs.core.next.call(null,seq__21882);
var bind = first__21883;
var first__21883__$1 = cljs.core.first.call(null,seq__21882__$1);
var seq__21882__$2 = cljs.core.next.call(null,seq__21882__$1);
var expr = first__21883__$1;
var mod_pairs = seq__21882__$2;
var vec__21884 = seq__21879__$1;
var vec__21887 = cljs.core.nth.call(null,vec__21884,(0),null);
var _ = cljs.core.nth.call(null,vec__21887,(0),null);
var next_expr = cljs.core.nth.call(null,vec__21887,(1),null);
var next_groups = vec__21884;
var giter = cljs.core.gensym.call(null,"iter__");
var gxs = cljs.core.gensym.call(null,"s__");
var do_mod = ((function (giter,gxs,vec__21878,seq__21879,first__21880,seq__21879__$1,vec__21881,seq__21882,first__21883,seq__21882__$1,bind,first__21883__$1,seq__21882__$2,expr,mod_pairs,vec__21884,vec__21887,_,next_expr,next_groups,to_groups,err){
return (function cljs$core$macros$for_$_emit_bind_$_do_mod(p__21890){
var vec__21897 = p__21890;
var seq__21898 = cljs.core.seq.call(null,vec__21897);
var first__21899 = cljs.core.first.call(null,seq__21898);
var seq__21898__$1 = cljs.core.next.call(null,seq__21898);
var vec__21900 = first__21899;
var k = cljs.core.nth.call(null,vec__21900,(0),null);
var v = cljs.core.nth.call(null,vec__21900,(1),null);
var pair = vec__21900;
var etc = seq__21898__$1;
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"let","let",-1282412701))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9759__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs$core$macros$for_$_emit_bind_$_do_mod.call(null,etc);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
} else {
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"while","while",963117786))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__9759__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs$core$macros$for_$_emit_bind_$_do_mod.call(null,etc);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
} else {
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"when","when",-576417306))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9759__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs$core$macros$for_$_emit_bind_$_do_mod.call(null,etc);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","rest","cljs.core/rest",-285075455,null)),(function (){var x__9759__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
} else {
if((k instanceof cljs.core.Keyword)){
return err.call(null,"Invalid 'for' keyword ",k);
} else {
if(next_groups){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9759__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"iterys__21749__auto__","iterys__21749__auto__",-842078455,null)),(function (){var x__9759__auto__ = cljs$core$macros$for_$_emit_bind.call(null,next_groups);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"fs__21750__auto__","fs__21750__auto__",-1964188650,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"iterys__21749__auto__","iterys__21749__auto__",-842078455,null)),(function (){var x__9759__auto__ = next_expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"fs__21750__auto__","fs__21750__auto__",-1964188650,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"fs__21750__auto__","fs__21750__auto__",-1964188650,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9759__auto__ = giter;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","rest","cljs.core/rest",-285075455,null)),(function (){var x__9759__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","rest","cljs.core/rest",-285075455,null)),(function (){var x__9759__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","cons","cljs.core/cons",96507417,null)),(function (){var x__9759__auto__ = body_expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9759__auto__ = giter;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","rest","cljs.core/rest",-285075455,null)),(function (){var x__9759__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));

}
}
}
}
}
});})(giter,gxs,vec__21878,seq__21879,first__21880,seq__21879__$1,vec__21881,seq__21882,first__21883,seq__21882__$1,bind,first__21883__$1,seq__21882__$2,expr,mod_pairs,vec__21884,vec__21887,_,next_expr,next_groups,to_groups,err))
;
if(next_groups){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9759__auto__ = giter;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9759__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","lazy-seq","cljs.core$macros/lazy-seq",806482650,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__9759__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9759__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-first","cljs.core$macros/when-first",-840670160,null)),(function (){var x__9759__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9759__auto__ = bind;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = do_mod.call(null,mod_pairs);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
} else {
var gi = cljs.core.gensym.call(null,"i__");
var gb = cljs.core.gensym.call(null,"b__");
var do_cmod = ((function (gi,gb,giter,gxs,do_mod,vec__21878,seq__21879,first__21880,seq__21879__$1,vec__21881,seq__21882,first__21883,seq__21882__$1,bind,first__21883__$1,seq__21882__$2,expr,mod_pairs,vec__21884,vec__21887,_,next_expr,next_groups,to_groups,err){
return (function cljs$core$macros$for_$_emit_bind_$_do_cmod(p__21903){
var vec__21910 = p__21903;
var seq__21911 = cljs.core.seq.call(null,vec__21910);
var first__21912 = cljs.core.first.call(null,seq__21911);
var seq__21911__$1 = cljs.core.next.call(null,seq__21911);
var vec__21913 = first__21912;
var k = cljs.core.nth.call(null,vec__21913,(0),null);
var v = cljs.core.nth.call(null,vec__21913,(1),null);
var pair = vec__21913;
var etc = seq__21911__$1;
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"let","let",-1282412701))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9759__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs$core$macros$for_$_emit_bind_$_do_cmod.call(null,etc);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
} else {
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"while","while",963117786))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__9759__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs$core$macros$for_$_emit_bind_$_do_cmod.call(null,etc);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
} else {
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"when","when",-576417306))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9759__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs$core$macros$for_$_emit_bind_$_do_cmod.call(null,etc);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unchecked-inc","cljs.core$macros/unchecked-inc",-1615365330,null)),(function (){var x__9759__auto__ = gi;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
} else {
if((k instanceof cljs.core.Keyword)){
return err.call(null,"Invalid 'for' keyword ",k);
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-append","cljs.core/chunk-append",-243671470,null)),(function (){var x__9759__auto__ = gb;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = body_expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unchecked-inc","cljs.core$macros/unchecked-inc",-1615365330,null)),(function (){var x__9759__auto__ = gi;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));

}
}
}
}
});})(gi,gb,giter,gxs,do_mod,vec__21878,seq__21879,first__21880,seq__21879__$1,vec__21881,seq__21882,first__21883,seq__21882__$1,bind,first__21883__$1,seq__21882__$2,expr,mod_pairs,vec__21884,vec__21887,_,next_expr,next_groups,to_groups,err))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9759__auto__ = giter;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9759__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","lazy-seq","cljs.core$macros/lazy-seq",806482650,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__9759__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9759__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-let","cljs.core$macros/when-let",-2004472648,null)),(function (){var x__9759__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9759__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__9759__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunked-seq?","cljs.core/chunked-seq?",-712922369,null)),(function (){var x__9759__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9759__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__21751__auto__","c__21751__auto__",-1920232244,null)),(function (){var x__9759__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-first","cljs.core/chunk-first",-1157877305,null)),(function (){var x__9759__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})()))),cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"/Users/ru/clojure/flights-pro/resources/public/js/out/cljs/core.cljc"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2324),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj.call(null,cljs.core.List.EMPTY,52),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2324),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj.call(null,cljs.core.List.EMPTY,82),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"tag","tag",-1290361223)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not-native","cljs.core/not-native",-1716909265,null)))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"size__21752__auto__","size__21752__auto__",-1759916273,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__21751__auto__","c__21751__auto__",-1920232244,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = gb;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-buffer","cljs.core/chunk-buffer",14093626,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"size__21752__auto__","size__21752__auto__",-1759916273,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","coercive-boolean","cljs.core$macros/coercive-boolean",-450758280,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__9759__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9759__auto__ = gi;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__9759__auto__ = gi;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"size__21752__auto__","size__21752__auto__",-1759916273,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9759__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9759__auto__ = bind;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-nth","cljs.core/-nth",504234802,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__21751__auto__","c__21751__auto__",-1920232244,null)),(function (){var x__9759__auto__ = gi;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = do_cmod.call(null,mod_pairs);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-cons","cljs.core/chunk-cons",-250075688,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk","cljs.core/chunk",847936424,null)),(function (){var x__9759__auto__ = gb;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9759__auto__ = giter;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-rest","cljs.core/chunk-rest",-398161143,null)),(function (){var x__9759__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-cons","cljs.core/chunk-cons",-250075688,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk","cljs.core/chunk",847936424,null)),(function (){var x__9759__auto__ = gb;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9759__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9759__auto__ = bind;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null)),(function (){var x__9759__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = do_mod.call(null,mod_pairs);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
}
});})(to_groups,err))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9759__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"iter__21753__auto__","iter__21753__auto__",-653705192,null)),(function (){var x__9759__auto__ = emit_bind.call(null,to_groups.call(null,seq_exprs));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"iter__21753__auto__","iter__21753__auto__",-653705192,null)),(function (){var x__9759__auto__ = cljs.core.second.call(null,seq_exprs);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
});

cljs.core$macros.for$.cljs$lang$macro = true;
/**
 * Repeatedly executes body (presumably for side-effects) with
 *   bindings and filtering as provided by "for".  Does not retain
 *   the head of the sequence. Returns nil.
 */
cljs.core$macros.doseq = (function cljs$core$macros$doseq(var_args){
var args__10037__auto__ = [];
var len__10030__auto___21924 = arguments.length;
var i__10031__auto___21925 = (0);
while(true){
if((i__10031__auto___21925 < len__10030__auto___21924)){
args__10037__auto__.push((arguments[i__10031__auto___21925]));

var G__21926 = (i__10031__auto___21925 + (1));
i__10031__auto___21925 = G__21926;
continue;
} else {
}
break;
}

var argseq__10038__auto__ = ((((3) < args__10037__auto__.length))?(new cljs.core.IndexedSeq(args__10037__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.doseq.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10038__auto__);
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
var G__21927__delegate = function (msg){
throw cljs.core.ex_info.call(null,cljs.core.apply.call(null,cljs.core.str,msg),cljs.core.PersistentArrayMap.EMPTY);
};
var G__21927 = function (var_args){
var msg = null;
if (arguments.length > 0) {
var G__21928__i = 0, G__21928__a = new Array(arguments.length -  0);
while (G__21928__i < G__21928__a.length) {G__21928__a[G__21928__i] = arguments[G__21928__i + 0]; ++G__21928__i;}
  msg = new cljs.core.IndexedSeq(G__21928__a,0);
} 
return G__21927__delegate.call(this,msg);};
G__21927.cljs$lang$maxFixedArity = 0;
G__21927.cljs$lang$applyTo = (function (arglist__21929){
var msg = cljs.core.seq(arglist__21929);
return G__21927__delegate(msg);
});
G__21927.cljs$core$IFn$_invoke$arity$variadic = G__21927__delegate;
return G__21927;
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
var recform__$1 = (((k instanceof cljs.core.Keyword))?recform:cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","next","cljs.core/next",-1291438473,null)),(function (){var x__9759__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0))))));
var steppair = cljs$core$macros$step.call(null,recform__$1,cljs.core.nnext.call(null,exprs));
var needrec = steppair.call(null,(0));
var subform = steppair.call(null,(1));
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"let","let",-1282412701))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [needrec,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9759__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = subform;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())))], null);
} else {
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"while","while",963117786))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__9759__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = subform;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(cljs.core.truth_(needrec)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recform__$1], null):null))))], null);
} else {
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"when","when",-576417306))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9759__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__9759__auto__ = subform;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(cljs.core.truth_(needrec)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recform__$1], null):null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = recform__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())))], null);
} else {
if((k instanceof cljs.core.Keyword)){
return err.call(null,"Invalid 'doseq' keyword",k);
} else {
var chunksym = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"chunk__"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"not-native","not-native",-236392494,null)], null));
var countsym = cljs.core.gensym.call(null,"count__");
var isym = cljs.core.gensym.call(null,"i__");
var recform_chunk = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__9759__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = chunksym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = countsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unchecked-inc","cljs.core$macros/unchecked-inc",-1615365330,null)),(function (){var x__9759__auto__ = isym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
var steppair_chunk = cljs$core$macros$step.call(null,recform_chunk,cljs.core.nnext.call(null,exprs));
var subform_chunk = steppair_chunk.call(null,(1));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__9759__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9759__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__9759__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = chunksym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__9759__auto__ = countsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),(function (){var x__9759__auto__ = isym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","coercive-boolean","cljs.core$macros/coercive-boolean",-450758280,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__9759__auto__ = isym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = countsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9759__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9759__auto__ = k;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-nth","cljs.core/-nth",504234802,null)),(function (){var x__9759__auto__ = chunksym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = isym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = subform_chunk;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(cljs.core.truth_(needrec)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recform_chunk], null):null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-let","cljs.core$macros/when-let",-2004472648,null)),(function (){var x__9759__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9759__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__9759__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunked-seq?","cljs.core/chunked-seq?",-712922369,null)),(function (){var x__9759__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9759__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__21919__auto__","c__21919__auto__",1093436624,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-first","cljs.core/chunk-first",-1157877305,null)),(function (){var x__9759__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-rest","cljs.core/chunk-rest",-398161143,null)),(function (){var x__9759__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__21919__auto__","c__21919__auto__",1093436624,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__21919__auto__","c__21919__auto__",1093436624,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9759__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9759__auto__ = k;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null)),(function (){var x__9759__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = subform;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(cljs.core.truth_(needrec)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recform__$1], null):null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
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

cljs.core$macros.doseq.cljs$lang$applyTo = (function (seq21920){
var G__21921 = cljs.core.first.call(null,seq21920);
var seq21920__$1 = cljs.core.next.call(null,seq21920);
var G__21922 = cljs.core.first.call(null,seq21920__$1);
var seq21920__$2 = cljs.core.next.call(null,seq21920__$1);
var G__21923 = cljs.core.first.call(null,seq21920__$2);
var seq21920__$3 = cljs.core.next.call(null,seq21920__$2);
return cljs.core$macros.doseq.cljs$core$IFn$_invoke$arity$variadic(G__21921,G__21922,G__21923,seq21920__$3);
});


cljs.core$macros.doseq.cljs$lang$macro = true;
cljs.core$macros.array = (function cljs$core$macros$array(var_args){
var args__10037__auto__ = [];
var len__10030__auto___21933 = arguments.length;
var i__10031__auto___21934 = (0);
while(true){
if((i__10031__auto___21934 < len__10030__auto___21933)){
args__10037__auto__.push((arguments[i__10031__auto___21934]));

var G__21935 = (i__10031__auto___21934 + (1));
i__10031__auto___21934 = G__21935;
continue;
} else {
}
break;
}

var argseq__10038__auto__ = ((((2) < args__10037__auto__.length))?(new cljs.core.IndexedSeq(args__10037__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.array.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10038__auto__);
});

cljs.core$macros.array.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,rest){
var xs_str = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,",",cljs.core.take.call(null,cljs.core.count.call(null,rest),cljs.core.repeat.call(null,"~{}"))));
return cljs.core.vary_meta.call(null,cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("["),cljs.core.str.cljs$core$IFn$_invoke$arity$1(xs_str),cljs.core.str.cljs$core$IFn$_invoke$arity$1("]")].join(''),rest),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"array","array",-440182315,null));
});

cljs.core$macros.array.cljs$lang$maxFixedArity = (2);

cljs.core$macros.array.cljs$lang$applyTo = (function (seq21930){
var G__21931 = cljs.core.first.call(null,seq21930);
var seq21930__$1 = cljs.core.next.call(null,seq21930);
var G__21932 = cljs.core.first.call(null,seq21930__$1);
var seq21930__$2 = cljs.core.next.call(null,seq21930__$1);
return cljs.core$macros.array.cljs$core$IFn$_invoke$arity$variadic(G__21931,G__21932,seq21930__$2);
});


cljs.core$macros.array.cljs$lang$macro = true;
cljs.core$macros.make_array = (function cljs$core$macros$make_array(var_args){
var args21939 = [];
var len__10030__auto___21947 = arguments.length;
var i__10031__auto___21948 = (0);
while(true){
if((i__10031__auto___21948 < len__10030__auto___21947)){
args21939.push((arguments[i__10031__auto___21948]));

var G__21949 = (i__10031__auto___21948 + (1));
i__10031__auto___21948 = G__21949;
continue;
} else {
}
break;
}

var G__21946 = args21939.length;
switch (G__21946) {
case 3:
return cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__10049__auto__ = (new cljs.core.IndexedSeq(args21939.slice((4)),(0),null));
return cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__10049__auto__);

}
});

cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,size){
return cljs.core.vary_meta.call(null,((typeof size === 'number')?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),cljs.core.take.call(null,size,cljs.core.repeat.call(null,null))))):cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Array.","js/Array.",1235645307,null)),(function (){var x__9759__auto__ = size;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"array","array",-440182315,null));
});

cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,type,size){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","make-array","cljs.core/make-array",-1802166799,null)),(function (){var x__9759__auto__ = size;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
});

cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,type,size,more_sizes){
return cljs.core.vary_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9759__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dims__21936__auto__","dims__21936__auto__",1700518771,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","list","cljs.core$macros/list",-1408486806,null)),more_sizes)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dimarray__21937__auto__","dimarray__21937__auto__",-1113461007,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","make-array","cljs.core/make-array",-1802166799,null)),(function (){var x__9759__auto__ = size;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","dotimes","cljs.core$macros/dotimes",-1407597661,null)),(function (){var x__9759__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__21938__auto__","i__21938__auto__",-512206970,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dimarray__21937__auto__","dimarray__21937__auto__",-1113461007,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aset","cljs.core$macros/aset",-693176374,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dimarray__21937__auto__","dimarray__21937__auto__",-1113461007,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__21938__auto__","i__21938__auto__",-512206970,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","make-array","cljs.core/make-array",-1802166799,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dims__21936__auto__","dims__21936__auto__",1700518771,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dimarray__21937__auto__","dimarray__21937__auto__",-1113461007,null))))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"array","array",-440182315,null));
});

cljs.core$macros.make_array.cljs$lang$applyTo = (function (seq21940){
var G__21941 = cljs.core.first.call(null,seq21940);
var seq21940__$1 = cljs.core.next.call(null,seq21940);
var G__21942 = cljs.core.first.call(null,seq21940__$1);
var seq21940__$2 = cljs.core.next.call(null,seq21940__$1);
var G__21943 = cljs.core.first.call(null,seq21940__$2);
var seq21940__$3 = cljs.core.next.call(null,seq21940__$2);
var G__21944 = cljs.core.first.call(null,seq21940__$3);
var seq21940__$4 = cljs.core.next.call(null,seq21940__$3);
return cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$variadic(G__21941,G__21942,G__21943,G__21944,seq21940__$4);
});

cljs.core$macros.make_array.cljs$lang$maxFixedArity = (4);


cljs.core$macros.make_array.cljs$lang$macro = true;
cljs.core$macros.list = (function cljs$core$macros$list(var_args){
var args21952 = [];
var len__10030__auto___21959 = arguments.length;
var i__10031__auto___21960 = (0);
while(true){
if((i__10031__auto___21960 < len__10030__auto___21959)){
args21952.push((arguments[i__10031__auto___21960]));

var G__21961 = (i__10031__auto___21960 + (1));
i__10031__auto___21960 = G__21961;
continue;
} else {
}
break;
}

var G__21958 = args21952.length;
switch (G__21958) {
case 2:
return cljs.core$macros.list.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__10049__auto__ = (new cljs.core.IndexedSeq(args21952.slice((3)),(0),null));
return cljs.core$macros.list.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10049__auto__);

}
});

cljs.core$macros.list.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.list(new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null),new cljs.core.Symbol("cljs.core","List","cljs.core/List",1708954352,null));
});

cljs.core$macros.list.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,xs){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"constant","constant",-379609303),new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.analyze.call(null,_AMPERSAND_env,x)))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-conj","cljs.core/-conj",2040622670,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","list","cljs.core$macros/list",-1408486806,null)),xs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9759__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__21951__auto__","x__21951__auto__",-958109685,null)),(function (){var x__9759__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-conj","cljs.core/-conj",2040622670,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","list","cljs.core$macros/list",-1408486806,null)),xs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__21951__auto__","x__21951__auto__",-958109685,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
}
});

cljs.core$macros.list.cljs$lang$applyTo = (function (seq21953){
var G__21954 = cljs.core.first.call(null,seq21953);
var seq21953__$1 = cljs.core.next.call(null,seq21953);
var G__21955 = cljs.core.first.call(null,seq21953__$1);
var seq21953__$2 = cljs.core.next.call(null,seq21953__$1);
var G__21956 = cljs.core.first.call(null,seq21953__$2);
var seq21953__$3 = cljs.core.next.call(null,seq21953__$2);
return cljs.core$macros.list.cljs$core$IFn$_invoke$arity$variadic(G__21954,G__21955,G__21956,seq21953__$3);
});

cljs.core$macros.list.cljs$lang$maxFixedArity = (3);


cljs.core$macros.list.cljs$lang$macro = true;
cljs.core$macros.vector = (function cljs$core$macros$vector(var_args){
var args21963 = [];
var len__10030__auto___21969 = arguments.length;
var i__10031__auto___21970 = (0);
while(true){
if((i__10031__auto___21970 < len__10030__auto___21969)){
args21963.push((arguments[i__10031__auto___21970]));

var G__21971 = (i__10031__auto___21970 + (1));
i__10031__auto___21970 = G__21971;
continue;
} else {
}
break;
}

var G__21968 = args21963.length;
switch (G__21968) {
case 2:
return cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__10049__auto__ = (new cljs.core.IndexedSeq(args21963.slice((2)),(0),null));
return cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10049__auto__);

}
});

cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.list(new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null),new cljs.core.Symbol("cljs.core","PersistentVector","cljs.core/PersistentVector",-1211028272,null));
});

cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
var cnt = cljs.core.count.call(null,xs);
if((cnt < (32))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentVector.","cljs.core/PersistentVector.",-1074647876,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__9759__auto__ = cnt;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(5)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-EMPTY-NODE",".-EMPTY-NODE",-1333332641,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentVector","cljs.core/PersistentVector",-1211028272,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),xs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
} else {
return cljs.core.vary_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".fromArray",".fromArray",1053499311,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentVector","cljs.core/PersistentVector",-1211028272,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),xs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true)))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","PersistentVector","cljs.core/PersistentVector",-1211028272,null));
}
});

cljs.core$macros.vector.cljs$lang$applyTo = (function (seq21964){
var G__21965 = cljs.core.first.call(null,seq21964);
var seq21964__$1 = cljs.core.next.call(null,seq21964);
var G__21966 = cljs.core.first.call(null,seq21964__$1);
var seq21964__$2 = cljs.core.next.call(null,seq21964__$1);
return cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$variadic(G__21965,G__21966,seq21964__$2);
});

cljs.core$macros.vector.cljs$lang$maxFixedArity = (2);


cljs.core$macros.vector.cljs$lang$macro = true;
cljs.core$macros.array_map = (function cljs$core$macros$array_map(var_args){
var args21975 = [];
var len__10030__auto___21981 = arguments.length;
var i__10031__auto___21982 = (0);
while(true){
if((i__10031__auto___21982 < len__10030__auto___21981)){
args21975.push((arguments[i__10031__auto___21982]));

var G__21983 = (i__10031__auto___21982 + (1));
i__10031__auto___21982 = G__21983;
continue;
} else {
}
break;
}

var G__21980 = args21975.length;
switch (G__21980) {
case 2:
return cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__10049__auto__ = (new cljs.core.IndexedSeq(args21975.slice((2)),(0),null));
return cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10049__auto__);

}
});

cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.list(new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null),new cljs.core.Symbol("cljs.core","PersistentArrayMap","cljs.core/PersistentArrayMap",1025194468,null));
});

cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,kvs){
var keys = cljs.core.map.call(null,cljs.core.first,cljs.core.partition.call(null,(2),kvs));
if((cljs.core.every_QMARK_.call(null,((function (keys){
return (function (p1__21973_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__21973_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
});})(keys))
,cljs.core.map.call(null,((function (keys){
return (function (p1__21974_SHARP_){
return cljs.analyzer.analyze.call(null,_AMPERSAND_env,p1__21974_SHARP_);
});})(keys))
,keys))) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,keys)),cljs.core.count.call(null,keys)))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentArrayMap.","cljs.core/PersistentArrayMap.",-471979341,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__9759__auto__ = (cljs.core.count.call(null,kvs) / (2));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),kvs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".createAsIfByAssoc",".createAsIfByAssoc",18554053,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentArrayMap","cljs.core/PersistentArrayMap",1025194468,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),kvs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
}
});

cljs.core$macros.array_map.cljs$lang$applyTo = (function (seq21976){
var G__21977 = cljs.core.first.call(null,seq21976);
var seq21976__$1 = cljs.core.next.call(null,seq21976);
var G__21978 = cljs.core.first.call(null,seq21976__$1);
var seq21976__$2 = cljs.core.next.call(null,seq21976__$1);
return cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$variadic(G__21977,G__21978,seq21976__$2);
});

cljs.core$macros.array_map.cljs$lang$maxFixedArity = (2);


cljs.core$macros.array_map.cljs$lang$macro = true;
cljs.core$macros.hash_map = (function cljs$core$macros$hash_map(var_args){
var args21985 = [];
var len__10030__auto___21991 = arguments.length;
var i__10031__auto___21992 = (0);
while(true){
if((i__10031__auto___21992 < len__10030__auto___21991)){
args21985.push((arguments[i__10031__auto___21992]));

var G__21993 = (i__10031__auto___21992 + (1));
i__10031__auto___21992 = G__21993;
continue;
} else {
}
break;
}

var G__21990 = args21985.length;
switch (G__21990) {
case 2:
return cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__10049__auto__ = (new cljs.core.IndexedSeq(args21985.slice((2)),(0),null));
return cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10049__auto__);

}
});

cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentHashMap","cljs.core/PersistentHashMap",-454120575,null)))));
});

cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,kvs){
var pairs = cljs.core.partition.call(null,(2),kvs);
var ks = cljs.core.map.call(null,cljs.core.first,pairs);
var vs = cljs.core.map.call(null,cljs.core.second,pairs);
return cljs.core.vary_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".fromArrays",".fromArrays",1110244209,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentHashMap","cljs.core/PersistentHashMap",-454120575,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),ks)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),vs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})()))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","PersistentHashMap","cljs.core/PersistentHashMap",-454120575,null));
});

cljs.core$macros.hash_map.cljs$lang$applyTo = (function (seq21986){
var G__21987 = cljs.core.first.call(null,seq21986);
var seq21986__$1 = cljs.core.next.call(null,seq21986);
var G__21988 = cljs.core.first.call(null,seq21986__$1);
var seq21986__$2 = cljs.core.next.call(null,seq21986__$1);
return cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$variadic(G__21987,G__21988,seq21986__$2);
});

cljs.core$macros.hash_map.cljs$lang$maxFixedArity = (2);


cljs.core$macros.hash_map.cljs$lang$macro = true;
cljs.core$macros.hash_set = (function cljs$core$macros$hash_set(var_args){
var args21997 = [];
var len__10030__auto___22003 = arguments.length;
var i__10031__auto___22004 = (0);
while(true){
if((i__10031__auto___22004 < len__10030__auto___22003)){
args21997.push((arguments[i__10031__auto___22004]));

var G__22005 = (i__10031__auto___22004 + (1));
i__10031__auto___22004 = G__22005;
continue;
} else {
}
break;
}

var G__22002 = args21997.length;
switch (G__22002) {
case 2:
return cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__10049__auto__ = (new cljs.core.IndexedSeq(args21997.slice((2)),(0),null));
return cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10049__auto__);

}
});

cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentHashSet","cljs.core/PersistentHashSet",-967232330,null)))));
});

cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
if(((cljs.core.count.call(null,xs) <= (8))) && (cljs.core.every_QMARK_.call(null,(function (p1__21995_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__21995_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),cljs.core.map.call(null,(function (p1__21996_SHARP_){
return cljs.analyzer.analyze.call(null,_AMPERSAND_env,p1__21996_SHARP_);
}),xs))) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,xs)),cljs.core.count.call(null,xs)))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentHashSet.","cljs.core/PersistentHashSet.",300313251,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentArrayMap.","cljs.core/PersistentArrayMap.",-471979341,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__9759__auto__ = cljs.core.count.call(null,xs);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),cljs.core.interleave.call(null,xs,cljs.core.repeat.call(null,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
} else {
return cljs.core.vary_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".createAsIfByAssoc",".createAsIfByAssoc",18554053,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentHashSet","cljs.core/PersistentHashSet",-967232330,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),xs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})()))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","PersistentHashSet","cljs.core/PersistentHashSet",-967232330,null));
}
});

cljs.core$macros.hash_set.cljs$lang$applyTo = (function (seq21998){
var G__21999 = cljs.core.first.call(null,seq21998);
var seq21998__$1 = cljs.core.next.call(null,seq21998);
var G__22000 = cljs.core.first.call(null,seq21998__$1);
var seq21998__$2 = cljs.core.next.call(null,seq21998__$1);
return cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$variadic(G__21999,G__22000,seq21998__$2);
});

cljs.core$macros.hash_set.cljs$lang$maxFixedArity = (2);


cljs.core$macros.hash_set.cljs$lang$macro = true;
cljs.core$macros.js_obj_STAR_ = (function cljs$core$macros$js_obj_STAR_(kvs){
var kvs_str = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,",",cljs.core.take.call(null,cljs.core.count.call(null,kvs),cljs.core.repeat.call(null,"~{}:~{}"))));
return cljs.core.vary_meta.call(null,cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("{"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(kvs_str),cljs.core.str.cljs$core$IFn$_invoke$arity$1("}")].join(''),cljs.core.apply.call(null,cljs.core.concat,kvs)),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"object","object",-1179821820,null));
});
cljs.core$macros.js_obj = (function cljs$core$macros$js_obj(var_args){
var args__10037__auto__ = [];
var len__10030__auto___22022 = arguments.length;
var i__10031__auto___22023 = (0);
while(true){
if((i__10031__auto___22023 < len__10030__auto___22022)){
args__10037__auto__.push((arguments[i__10031__auto___22023]));

var G__22024 = (i__10031__auto___22023 + (1));
i__10031__auto___22023 = G__22024;
continue;
} else {
}
break;
}

var argseq__10038__auto__ = ((((2) < args__10037__auto__.length))?(new cljs.core.IndexedSeq(args__10037__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.js_obj.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10038__auto__);
});

cljs.core$macros.js_obj.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,rest){
var sym_or_str_QMARK_ = (function (x){
return ((x instanceof cljs.core.Symbol)) || (typeof x === 'string');
});
var filter_on_keys = ((function (sym_or_str_QMARK_){
return (function (f,coll){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,((function (sym_or_str_QMARK_){
return (function (p__22010){
var vec__22011 = p__22010;
var k = cljs.core.nth.call(null,vec__22011,(0),null);
var _ = cljs.core.nth.call(null,vec__22011,(1),null);
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9759__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.apply.call(null,cljs.core.concat,clojure.set.map_invert.call(null,expr__GT_local)),(function (){var x__9759__auto__ = obj;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core$macros.js_obj_STAR_.call(null,filter_on_keys.call(null,cljs.core.string_QMARK_,kvs));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),cljs.core.map.call(null,((function (sym_or_str_QMARK_,filter_on_keys,kvs,sym_pairs,expr__GT_local,obj){
return (function (p__22014){
var vec__22015 = p__22014;
var k = cljs.core.nth.call(null,vec__22015,(0),null);
var v = cljs.core.nth.call(null,vec__22015,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aset","cljs.core$macros/aset",-693176374,null)),(function (){var x__9759__auto__ = obj;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = k;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
});})(sym_or_str_QMARK_,filter_on_keys,kvs,sym_pairs,expr__GT_local,obj))
,sym_pairs),cljs.core.map.call(null,((function (sym_or_str_QMARK_,filter_on_keys,kvs,sym_pairs,expr__GT_local,obj){
return (function (p__22018){
var vec__22019 = p__22018;
var k = cljs.core.nth.call(null,vec__22019,(0),null);
var v = cljs.core.nth.call(null,vec__22019,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aset","cljs.core$macros/aset",-693176374,null)),(function (){var x__9759__auto__ = obj;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.get.call(null,kvs,k);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
});})(sym_or_str_QMARK_,filter_on_keys,kvs,sym_pairs,expr__GT_local,obj))
,expr__GT_local),(function (){var x__9759__auto__ = obj;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
}
});

cljs.core$macros.js_obj.cljs$lang$maxFixedArity = (2);

cljs.core$macros.js_obj.cljs$lang$applyTo = (function (seq22007){
var G__22008 = cljs.core.first.call(null,seq22007);
var seq22007__$1 = cljs.core.next.call(null,seq22007);
var G__22009 = cljs.core.first.call(null,seq22007__$1);
var seq22007__$2 = cljs.core.next.call(null,seq22007__$1);
return cljs.core$macros.js_obj.cljs$core$IFn$_invoke$arity$variadic(G__22008,G__22009,seq22007__$2);
});


cljs.core$macros.js_obj.cljs$lang$macro = true;
cljs.core$macros.alength = (function cljs$core$macros$alength(_AMPERSAND_form,_AMPERSAND_env,a){
return cljs.core.vary_meta.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9759__auto__ = a;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9759__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"a__22025__auto__","a__22025__auto__",-1604875738,null)),(function (){var x__9759__auto__ = a;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = ret;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","aclone","cljs.core/aclone",-758078968,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"a__22025__auto__","a__22025__auto__",-1604875738,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__9759__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9759__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__9759__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"a__22025__auto__","a__22025__auto__",-1604875738,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aset","cljs.core$macros/aset",-693176374,null)),(function (){var x__9759__auto__ = ret;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),(function (){var x__9759__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = ret;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
});

cljs.core$macros.amap.cljs$lang$macro = true;
/**
 * Reduces an expression across an array a, using an index named idx,
 *   and return value named ret, initialized to init, setting ret to the
 *   evaluation of expr at each step, returning ret.
 */
cljs.core$macros.areduce = (function cljs$core$macros$areduce(_AMPERSAND_form,_AMPERSAND_env,a,idx,ret,init,expr){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9759__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"a__22026__auto__","a__22026__auto__",-1127443036,null)),(function (){var x__9759__auto__ = a;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__9759__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9759__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),(function (){var x__9759__auto__ = ret;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = init;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__9759__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"a__22026__auto__","a__22026__auto__",-1127443036,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),(function (){var x__9759__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = ret;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
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
var args__10037__auto__ = [];
var len__10030__auto___22032 = arguments.length;
var i__10031__auto___22033 = (0);
while(true){
if((i__10031__auto___22033 < len__10030__auto___22032)){
args__10037__auto__.push((arguments[i__10031__auto___22033]));

var G__22034 = (i__10031__auto___22033 + (1));
i__10031__auto___22033 = G__22034;
continue;
} else {
}
break;
}

var argseq__10038__auto__ = ((((3) < args__10037__auto__.length))?(new cljs.core.IndexedSeq(args__10037__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.dotimes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10038__auto__);
});

cljs.core$macros.dotimes.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
var i = cljs.core.first.call(null,bindings);
var n = cljs.core.second.call(null,bindings);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9759__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"n__22027__auto__","n__22027__auto__",82089186,null)),(function (){var x__9759__auto__ = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__9759__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9759__auto__ = i;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__9759__auto__ = i;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"n__22027__auto__","n__22027__auto__",82089186,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),body,(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),(function (){var x__9759__auto__ = i;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
});

cljs.core$macros.dotimes.cljs$lang$maxFixedArity = (3);

cljs.core$macros.dotimes.cljs$lang$applyTo = (function (seq22028){
var G__22029 = cljs.core.first.call(null,seq22028);
var seq22028__$1 = cljs.core.next.call(null,seq22028);
var G__22030 = cljs.core.first.call(null,seq22028__$1);
var seq22028__$2 = cljs.core.next.call(null,seq22028__$1);
var G__22031 = cljs.core.first.call(null,seq22028__$2);
var seq22028__$3 = cljs.core.next.call(null,seq22028__$2);
return cljs.core$macros.dotimes.cljs$core$IFn$_invoke$arity$variadic(G__22029,G__22030,G__22031,seq22028__$3);
});


cljs.core$macros.dotimes.cljs$lang$macro = true;
/**
 * Throws an exception if the given option map contains keys not listed
 *   as valid, else returns nil.
 */
cljs.core$macros.check_valid_options = (function cljs$core$macros$check_valid_options(var_args){
var args__10037__auto__ = [];
var len__10030__auto___22038 = arguments.length;
var i__10031__auto___22039 = (0);
while(true){
if((i__10031__auto___22039 < len__10030__auto___22038)){
args__10037__auto__.push((arguments[i__10031__auto___22039]));

var G__22040 = (i__10031__auto___22039 + (1));
i__10031__auto___22039 = G__22040;
continue;
} else {
}
break;
}

var argseq__10038__auto__ = ((((1) < args__10037__auto__.length))?(new cljs.core.IndexedSeq(args__10037__auto__.slice((1)),(0),null)):null);
return cljs.core$macros.check_valid_options.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10038__auto__);
});

cljs.core$macros.check_valid_options.cljs$core$IFn$_invoke$arity$variadic = (function (options,valid_keys){
if(cljs.core.seq.call(null,cljs.core.apply.call(null,cljs.core.disj,cljs.core.apply.call(null,cljs.core.hash_set,cljs.core.keys.call(null,options)),valid_keys))){
throw cljs.core.apply.call(null,cljs.core.str,"Only these options are valid: ",cljs.core.first.call(null,valid_keys),cljs.core.map.call(null,(function (p1__22035_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(", "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__22035_SHARP_)].join('');
}),cljs.core.rest.call(null,valid_keys)));
} else {
return null;
}
});

cljs.core$macros.check_valid_options.cljs$lang$maxFixedArity = (1);

cljs.core$macros.check_valid_options.cljs$lang$applyTo = (function (seq22036){
var G__22037 = cljs.core.first.call(null,seq22036);
var seq22036__$1 = cljs.core.next.call(null,seq22036);
return cljs.core$macros.check_valid_options.cljs$core$IFn$_invoke$arity$variadic(G__22037,seq22036__$1);
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
var args__10037__auto__ = [];
var len__10030__auto___22050 = arguments.length;
var i__10031__auto___22051 = (0);
while(true){
if((i__10031__auto___22051 < len__10030__auto___22050)){
args__10037__auto__.push((arguments[i__10031__auto___22051]));

var G__22052 = (i__10031__auto___22051 + (1));
i__10031__auto___22051 = G__22052;
continue;
} else {
}
break;
}

var argseq__10038__auto__ = ((((3) < args__10037__auto__.length))?(new cljs.core.IndexedSeq(args__10037__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.defmulti.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10038__auto__);
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
var mm_ns = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env)))].join('');
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,options__$3),(1))){
throw (new Error("The syntax for defmulti has changed. Example: (defmulti name dispatch-fn :default dispatch-value)"));
} else {
}

var options__$4 = cljs.core.apply.call(null,cljs.core.hash_map,options__$3);
var default$ = cljs.core.get.call(null,options__$4,new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"default","default",-1987822328));
cljs.core$macros.check_valid_options.call(null,options__$4,new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341));

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defonce","cljs.core$macros/defonce",-1096231613,null)),(function (){var x__9759__auto__ = cljs.core.with_meta.call(null,mm_name,m__$2);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9759__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"method-table__22041__auto__","method-table__22041__auto__",1666665225,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null)),(function (){var x__9759__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"prefer-table__22042__auto__","prefer-table__22042__auto__",-1460530131,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null)),(function (){var x__9759__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"method-cache__22043__auto__","method-cache__22043__auto__",-1985017722,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null)),(function (){var x__9759__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cached-hierarchy__22044__auto__","cached-hierarchy__22044__auto__",-2011251837,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null)),(function (){var x__9759__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"hierarchy__22045__auto__","hierarchy__22045__auto__",-12573960,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null)),(function (){var x__9759__auto__ = options__$4;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","get-global-hierarchy","cljs.core/get-global-hierarchy",48052871,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","MultiFn.","cljs.core/MultiFn.",1073941573,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","symbol","cljs.core/symbol",195265748,null)),(function (){var x__9759__auto__ = mm_ns;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.name.call(null,mm_name);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = dispatch_fn;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = default$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"hierarchy__22045__auto__","hierarchy__22045__auto__",-12573960,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"method-table__22041__auto__","method-table__22041__auto__",1666665225,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"prefer-table__22042__auto__","prefer-table__22042__auto__",-1460530131,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"method-cache__22043__auto__","method-cache__22043__auto__",-1985017722,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cached-hierarchy__22044__auto__","cached-hierarchy__22044__auto__",-2011251837,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
});

cljs.core$macros.defmulti.cljs$lang$maxFixedArity = (3);

cljs.core$macros.defmulti.cljs$lang$applyTo = (function (seq22046){
var G__22047 = cljs.core.first.call(null,seq22046);
var seq22046__$1 = cljs.core.next.call(null,seq22046);
var G__22048 = cljs.core.first.call(null,seq22046__$1);
var seq22046__$2 = cljs.core.next.call(null,seq22046__$1);
var G__22049 = cljs.core.first.call(null,seq22046__$2);
var seq22046__$3 = cljs.core.next.call(null,seq22046__$2);
return cljs.core$macros.defmulti.cljs$core$IFn$_invoke$arity$variadic(G__22047,G__22048,G__22049,seq22046__$3);
});


cljs.core$macros.defmulti.cljs$lang$macro = true;
/**
 * Creates and installs a new method of multimethod associated with dispatch-value. 
 */
cljs.core$macros.defmethod = (function cljs$core$macros$defmethod(var_args){
var args__10037__auto__ = [];
var len__10030__auto___22058 = arguments.length;
var i__10031__auto___22059 = (0);
while(true){
if((i__10031__auto___22059 < len__10030__auto___22058)){
args__10037__auto__.push((arguments[i__10031__auto___22059]));

var G__22060 = (i__10031__auto___22059 + (1));
i__10031__auto___22059 = G__22060;
continue;
} else {
}
break;
}

var argseq__10038__auto__ = ((((4) < args__10037__auto__.length))?(new cljs.core.IndexedSeq(args__10037__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.defmethod.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__10038__auto__);
});

cljs.core$macros.defmethod.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,multifn,dispatch_val,fn_tail){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-add-method","cljs.core/-add-method",571092113,null)),(function (){var x__9759__auto__ = cljs.core.with_meta.call(null,multifn,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","MultiFn","cljs.core/MultiFn",1487419554,null)], null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = dispatch_val;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),fn_tail)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
});

cljs.core$macros.defmethod.cljs$lang$maxFixedArity = (4);

cljs.core$macros.defmethod.cljs$lang$applyTo = (function (seq22053){
var G__22054 = cljs.core.first.call(null,seq22053);
var seq22053__$1 = cljs.core.next.call(null,seq22053);
var G__22055 = cljs.core.first.call(null,seq22053__$1);
var seq22053__$2 = cljs.core.next.call(null,seq22053__$1);
var G__22056 = cljs.core.first.call(null,seq22053__$2);
var seq22053__$3 = cljs.core.next.call(null,seq22053__$2);
var G__22057 = cljs.core.first.call(null,seq22053__$3);
var seq22053__$4 = cljs.core.next.call(null,seq22053__$3);
return cljs.core$macros.defmethod.cljs$core$IFn$_invoke$arity$variadic(G__22054,G__22055,G__22056,G__22057,seq22053__$4);
});


cljs.core$macros.defmethod.cljs$lang$macro = true;
/**
 * Evaluates expr and prints the time it took. Returns the value of expr.
 */
cljs.core$macros.time = (function cljs$core$macros$time(_AMPERSAND_form,_AMPERSAND_env,expr){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9759__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"start__22061__auto__","start__22061__auto__",-1217601522,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","system-time","cljs.core/system-time",1562011930,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ret__22062__auto__","ret__22062__auto__",865491438,null)),(function (){var x__9759__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","prn","cljs.core/prn",1725204552,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"Elapsed time: "),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".toFixed",".toFixed",-895046938,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","system-time","cljs.core/system-time",1562011930,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"start__22061__auto__","start__22061__auto__",-1217601522,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(6)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY," msecs"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ret__22062__auto__","ret__22062__auto__",865491438,null)))));
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
var args__10037__auto__ = [];
var len__10030__auto___22077 = arguments.length;
var i__10031__auto___22078 = (0);
while(true){
if((i__10031__auto___22078 < len__10030__auto___22077)){
args__10037__auto__.push((arguments[i__10031__auto___22078]));

var G__22079 = (i__10031__auto___22078 + (1));
i__10031__auto___22078 = G__22079;
continue;
} else {
}
break;
}

var argseq__10038__auto__ = ((((5) < args__10037__auto__.length))?(new cljs.core.IndexedSeq(args__10037__auto__.slice((5)),(0),null)):null);
return cljs.core$macros.simple_benchmark.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__10038__auto__);
});

cljs.core$macros.simple_benchmark.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,expr,iterations,p__22074){
var map__22075 = p__22074;
var map__22075__$1 = ((((!((map__22075 == null)))?((((map__22075.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22075.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22075):map__22075);
var print_fn = cljs.core.get.call(null,map__22075__$1,new cljs.core.Keyword(null,"print-fn","print-fn",-1720960489),new cljs.core.Symbol(null,"println","println",-733595439,null));
var bs_str = cljs.core.pr_str.call(null,bindings);
var expr_str = cljs.core.pr_str.call(null,expr);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9759__auto__ = bindings;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9759__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"start__22063__auto__","start__22063__auto__",1110107511,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".getTime",".getTime",-1048557777,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Date.","js/Date.",384205255,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ret__22064__auto__","ret__22064__auto__",-237486000,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","dotimes","cljs.core$macros/dotimes",-1407597661,null)),(function (){var x__9759__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"___22065__auto__","___22065__auto__",1647439417,null)),(function (){var x__9759__auto__ = iterations;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"end__22066__auto__","end__22066__auto__",674324401,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".getTime",".getTime",-1048557777,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Date.","js/Date.",384205255,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"elapsed__22067__auto__","elapsed__22067__auto__",-1754099021,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"end__22066__auto__","end__22066__auto__",674324401,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"start__22063__auto__","start__22063__auto__",1110107511,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9759__auto__ = print_fn;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","str","cljs.core$macros/str",-2019499702,null)),(function (){var x__9759__auto__ = bs_str;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,", "),(function (){var x__9759__auto__ = expr_str;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,", "),(function (){var x__9759__auto__ = iterations;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY," runs, "),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"elapsed__22067__auto__","elapsed__22067__auto__",-1754099021,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY," msecs"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
});

cljs.core$macros.simple_benchmark.cljs$lang$maxFixedArity = (5);

cljs.core$macros.simple_benchmark.cljs$lang$applyTo = (function (seq22068){
var G__22069 = cljs.core.first.call(null,seq22068);
var seq22068__$1 = cljs.core.next.call(null,seq22068);
var G__22070 = cljs.core.first.call(null,seq22068__$1);
var seq22068__$2 = cljs.core.next.call(null,seq22068__$1);
var G__22071 = cljs.core.first.call(null,seq22068__$2);
var seq22068__$3 = cljs.core.next.call(null,seq22068__$2);
var G__22072 = cljs.core.first.call(null,seq22068__$3);
var seq22068__$4 = cljs.core.next.call(null,seq22068__$3);
var G__22073 = cljs.core.first.call(null,seq22068__$4);
var seq22068__$5 = cljs.core.next.call(null,seq22068__$4);
return cljs.core$macros.simple_benchmark.cljs$core$IFn$_invoke$arity$variadic(G__22069,G__22070,G__22071,G__22072,G__22073,seq22068__$5);
});


cljs.core$macros.simple_benchmark.cljs$lang$macro = true;
cljs.core$macros.cs = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.gensym,cljs.core.str,cljs.core.char$),cljs.core.range.call(null,(97),(118))));
cljs.core$macros.gen_apply_to_helper = (function cljs$core$macros$gen_apply_to_helper(var_args){
var args22080 = [];
var len__10030__auto___22083 = arguments.length;
var i__10031__auto___22084 = (0);
while(true){
if((i__10031__auto___22084 < len__10030__auto___22083)){
args22080.push((arguments[i__10031__auto___22084]));

var G__22085 = (i__10031__auto___22084 + (1));
i__10031__auto___22084 = G__22085;
continue;
} else {
}
break;
}

var G__22082 = args22080.length;
switch (G__22082) {
case 0:
return cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args22080.length)].join('')));

}
});

cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core$macros.gen_apply_to_helper.call(null,(1));
});

cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$1 = (function (n){
var prop = cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("-cljs$core$IFn$_invoke$arity$"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));
var f = cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("cljs$core$IFn$_invoke$arity$"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));
if((n <= (20))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9759__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9759__auto__ = cljs.core$macros.cs.call(null,(n - (1)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-first","cljs.core/-first",545297391,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-rest","cljs.core/-rest",-1829241664,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","==","cljs.core$macros/==",-818551413,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argc","argc",187692008,null)),(function (){var x__9759__auto__ = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"f","f",43394975,null)),(function (){var x__9759__auto__ = prop;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"f","f",43394975,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9759__auto__ = f;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),cljs.core.take.call(null,n,cljs.core$macros.cs))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"f","f",43394975,null)),cljs.core.take.call(null,n,cljs.core$macros.cs))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core$macros.gen_apply_to_helper.call(null,(n + (1)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"Only up to 20 arguments supported on functions"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
}
});

cljs.core$macros.gen_apply_to_helper.cljs$lang$maxFixedArity = 1;

cljs.core$macros.gen_apply_to = (function cljs$core$macros$gen_apply_to(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"*unchecked-if*","*unchecked-if*",1542408350,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"apply-to","apply-to",-1858571928,null)),(function (){var x__9759__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"f","f",43394975,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argc","argc",187692008,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9759__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","zero?","cljs.core$macros/zero?",-65998367,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argc","argc",187692008,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"f","f",43394975,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core$macros.gen_apply_to_helper.call(null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"*unchecked-if*","*unchecked-if*",1542408350,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
});

cljs.core$macros.gen_apply_to.cljs$lang$macro = true;
/**
 * Evaluates exprs in a context in which *print-fn* is bound to .append
 *   on a fresh StringBuffer.  Returns the string created by any nested
 *   printing calls.
 */
cljs.core$macros.with_out_str = (function cljs$core$macros$with_out_str(var_args){
var args__10037__auto__ = [];
var len__10030__auto___22092 = arguments.length;
var i__10031__auto___22093 = (0);
while(true){
if((i__10031__auto___22093 < len__10030__auto___22092)){
args__10037__auto__.push((arguments[i__10031__auto___22093]));

var G__22094 = (i__10031__auto___22093 + (1));
i__10031__auto___22093 = G__22094;
continue;
} else {
}
break;
}

var argseq__10038__auto__ = ((((2) < args__10037__auto__.length))?(new cljs.core.IndexedSeq(args__10037__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.with_out_str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10038__auto__);
});

cljs.core$macros.with_out_str.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9759__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"sb__22087__auto__","sb__22087__auto__",-1786679160,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","goog.string.StringBuffer.","js/goog.string.StringBuffer.",-1043451650,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","binding","cljs.core$macros/binding",1855847304,null)),(function (){var x__9759__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","*print-newline*","cljs.core/*print-newline*",6231625,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","*print-fn*","cljs.core/*print-fn*",1342365176,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9759__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__22088__auto__","x__22088__auto__",348279642,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".append",".append",1595439852,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"sb__22087__auto__","sb__22087__auto__",-1786679160,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__22088__auto__","x__22088__auto__",348279642,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"sb__22087__auto__","sb__22087__auto__",-1786679160,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
});

cljs.core$macros.with_out_str.cljs$lang$maxFixedArity = (2);

cljs.core$macros.with_out_str.cljs$lang$applyTo = (function (seq22089){
var G__22090 = cljs.core.first.call(null,seq22089);
var seq22089__$1 = cljs.core.next.call(null,seq22089);
var G__22091 = cljs.core.first.call(null,seq22089__$1);
var seq22089__$2 = cljs.core.next.call(null,seq22089__$1);
return cljs.core$macros.with_out_str.cljs$core$IFn$_invoke$arity$variadic(G__22090,G__22091,seq22089__$2);
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
var args__10037__auto__ = [];
var len__10030__auto___22099 = arguments.length;
var i__10031__auto___22100 = (0);
while(true){
if((i__10031__auto___22100 < len__10030__auto___22099)){
args__10037__auto__.push((arguments[i__10031__auto___22100]));

var G__22101 = (i__10031__auto___22100 + (1));
i__10031__auto___22100 = G__22101;
continue;
} else {
}
break;
}

var argseq__10038__auto__ = ((((2) < args__10037__auto__.length))?(new cljs.core.IndexedSeq(args__10037__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.lazy_cat.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10038__auto__);
});

cljs.core$macros.lazy_cat.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,colls){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null)),cljs.core.map.call(null,(function (p1__22095_SHARP_){
return cljs.core._conj.call(null,(function (){var x__9759__auto__ = p1__22095_SHARP_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),new cljs.core.Symbol("cljs.core$macros","lazy-seq","cljs.core$macros/lazy-seq",806482650,null));
}),colls))));
});

cljs.core$macros.lazy_cat.cljs$lang$maxFixedArity = (2);

cljs.core$macros.lazy_cat.cljs$lang$applyTo = (function (seq22096){
var G__22097 = cljs.core.first.call(null,seq22096);
var seq22096__$1 = cljs.core.next.call(null,seq22096);
var G__22098 = cljs.core.first.call(null,seq22096__$1);
var seq22096__$2 = cljs.core.next.call(null,seq22096__$1);
return cljs.core$macros.lazy_cat.cljs$core$IFn$_invoke$arity$variadic(G__22097,G__22098,seq22096__$2);
});


cljs.core$macros.lazy_cat.cljs$lang$macro = true;
cljs.core$macros.js_str = (function cljs$core$macros$js_str(_AMPERSAND_form,_AMPERSAND_env,s){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9759__auto__ = s;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),"''+~{}"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.js_str.cljs$lang$macro = true;
cljs.core$macros.es6_iterable = (function cljs$core$macros$es6_iterable(_AMPERSAND_form,_AMPERSAND_env,ty){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aset","cljs.core$macros/aset",-693176374,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-prototype",".-prototype",-1562038608,null)),(function (){var x__9759__auto__ = ty;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","ITER_SYMBOL","cljs.core/ITER_SYMBOL",-2091399233,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9759__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__22102__auto__","this__22102__auto__",-1744912428,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","es6-iterator","cljs.core/es6-iterator",856007913,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__22102__auto__","this__22102__auto__",-1744912428,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
});

cljs.core$macros.es6_iterable.cljs$lang$macro = true;
/**
 * Returns a map of the intern mappings for the namespace.
 */
cljs.core$macros.ns_interns = (function cljs$core$macros$ns_interns(_AMPERSAND_form,_AMPERSAND_env,p__22103){
var vec__22115 = p__22103;
var quote = cljs.core.nth.call(null,vec__22115,(0),null);
var ns = cljs.core.nth.call(null,vec__22115,(1),null);
if((cljs.core._EQ_.call(null,quote,new cljs.core.Symbol(null,"quote","quote",1377916282,null))) && ((ns instanceof cljs.core.Symbol))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Argument to ns-interns must be a quoted symbol"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(core/and (= quote (quote quote)) (core/symbol? ns))")].join('')));
}

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","into","cljs.core/into",1879938733,null)),(function (){var x__9759__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,((function (vec__22115,quote,ns){
return (function (p__22122){
var vec__22123 = p__22122;
var sym = cljs.core.nth.call(null,vec__22123,(0),null);
var _ = cljs.core.nth.call(null,vec__22123,(1),null);
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","symbol","cljs.core/symbol",195265748,null)),(function (){var x__9759__auto__ = cljs.core.name.call(null,sym);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"var","var",870848730,null)),(function (){var x__9759__auto__ = cljs.core.symbol.call(null,cljs.core.name.call(null,ns),cljs.core.name.call(null,sym));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})()))));
});})(vec__22115,quote,ns))
,cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns,new cljs.core.Keyword(null,"defs","defs",1398449717)], null)))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
});

cljs.core$macros.ns_interns.cljs$lang$macro = true;
/**
 * Removes the mappings for the symbol from the namespace.
 */
cljs.core$macros.ns_unmap = (function cljs$core$macros$ns_unmap(_AMPERSAND_form,_AMPERSAND_env,p__22126,p__22127){
var vec__22134 = p__22126;
var quote0 = cljs.core.nth.call(null,vec__22134,(0),null);
var ns = cljs.core.nth.call(null,vec__22134,(1),null);
var vec__22137 = p__22127;
var quote1 = cljs.core.nth.call(null,vec__22137,(0),null);
var sym = cljs.core.nth.call(null,vec__22137,(1),null);
if((cljs.core._EQ_.call(null,quote0,new cljs.core.Symbol(null,"quote","quote",1377916282,null))) && ((ns instanceof cljs.core.Symbol)) && (cljs.core._EQ_.call(null,quote1,new cljs.core.Symbol(null,"quote","quote",1377916282,null))) && ((sym instanceof cljs.core.Symbol))){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Arguments to ns-unmap must be quoted symbols"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(core/and (= quote0 (quote quote)) (core/symbol? ns) (= quote1 (quote quote)) (core/symbol? sym))")].join('')));
}

cljs.core.swap_BANG_.call(null,cljs.env._STAR_compiler_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns,new cljs.core.Keyword(null,"defs","defs",1398449717)], null),cljs.core.dissoc,sym);

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-delete","cljs.core$macros/js-delete",387769082,null)),(function (){var x__9759__auto__ = cljs.compiler.munge.call(null,ns);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.compiler.munge.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
});

cljs.core$macros.ns_unmap.cljs$lang$macro = true;
/**
 * Non-atomically swaps the value of the volatile as if:
 * (apply f current-value-of-vol args). Returns the value that
 * was swapped in.
 */
cljs.core$macros.vswap_BANG_ = (function cljs$core$macros$vswap_BANG_(var_args){
var args__10037__auto__ = [];
var len__10030__auto___22145 = arguments.length;
var i__10031__auto___22146 = (0);
while(true){
if((i__10031__auto___22146 < len__10030__auto___22145)){
args__10037__auto__.push((arguments[i__10031__auto___22146]));

var G__22147 = (i__10031__auto___22146 + (1));
i__10031__auto___22146 = G__22147;
continue;
} else {
}
break;
}

var argseq__10038__auto__ = ((((4) < args__10037__auto__.length))?(new cljs.core.IndexedSeq(args__10037__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.vswap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__10038__auto__);
});

cljs.core$macros.vswap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,vol,f,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-vreset!","cljs.core/-vreset!",-1186516972,null)),(function (){var x__9759__auto__ = vol;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9759__auto__ = f;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-deref","cljs.core/-deref",-1260480154,null)),(function (){var x__9759__auto__ = vol;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),args)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
});

cljs.core$macros.vswap_BANG_.cljs$lang$maxFixedArity = (4);

cljs.core$macros.vswap_BANG_.cljs$lang$applyTo = (function (seq22140){
var G__22141 = cljs.core.first.call(null,seq22140);
var seq22140__$1 = cljs.core.next.call(null,seq22140);
var G__22142 = cljs.core.first.call(null,seq22140__$1);
var seq22140__$2 = cljs.core.next.call(null,seq22140__$1);
var G__22143 = cljs.core.first.call(null,seq22140__$2);
var seq22140__$3 = cljs.core.next.call(null,seq22140__$2);
var G__22144 = cljs.core.first.call(null,seq22140__$3);
var seq22140__$4 = cljs.core.next.call(null,seq22140__$3);
return cljs.core$macros.vswap_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__22141,G__22142,G__22143,G__22144,seq22140__$4);
});


cljs.core$macros.vswap_BANG_.cljs$lang$macro = true;
cljs.core$macros.locking = (function cljs$core$macros$locking(var_args){
var args__10037__auto__ = [];
var len__10030__auto___22152 = arguments.length;
var i__10031__auto___22153 = (0);
while(true){
if((i__10031__auto___22153 < len__10030__auto___22152)){
args__10037__auto__.push((arguments[i__10031__auto___22153]));

var G__22154 = (i__10031__auto___22153 + (1));
i__10031__auto___22153 = G__22154;
continue;
} else {
}
break;
}

var argseq__10038__auto__ = ((((3) < args__10037__auto__.length))?(new cljs.core.IndexedSeq(args__10037__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.locking.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10038__auto__);
});

cljs.core$macros.locking.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),forms)));
});

cljs.core$macros.locking.cljs$lang$maxFixedArity = (3);

cljs.core$macros.locking.cljs$lang$applyTo = (function (seq22148){
var G__22149 = cljs.core.first.call(null,seq22148);
var seq22148__$1 = cljs.core.next.call(null,seq22148);
var G__22150 = cljs.core.first.call(null,seq22148__$1);
var seq22148__$2 = cljs.core.next.call(null,seq22148__$1);
var G__22151 = cljs.core.first.call(null,seq22148__$2);
var seq22148__$3 = cljs.core.next.call(null,seq22148__$2);
return cljs.core$macros.locking.cljs$core$IFn$_invoke$arity$variadic(G__22149,G__22150,G__22151,seq22148__$3);
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
 *   :rename specifies a map from referred var names to different
 *  symbols (and can be used to prevent clashes)
 * 
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
var args__10037__auto__ = [];
var len__10030__auto___22158 = arguments.length;
var i__10031__auto___22159 = (0);
while(true){
if((i__10031__auto___22159 < len__10030__auto___22158)){
args__10037__auto__.push((arguments[i__10031__auto___22159]));

var G__22160 = (i__10031__auto___22159 + (1));
i__10031__auto___22159 = G__22160;
continue;
} else {
}
break;
}

var argseq__10038__auto__ = ((((2) < args__10037__auto__.length))?(new cljs.core.IndexedSeq(args__10037__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.require.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10038__auto__);
});

cljs.core$macros.require.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ns*","ns*",1840949383,null)),(function (){var x__9759__auto__ = cljs.core.cons.call(null,new cljs.core.Keyword(null,"require","require",-468001333),args);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
});

cljs.core$macros.require.cljs$lang$maxFixedArity = (2);

cljs.core$macros.require.cljs$lang$applyTo = (function (seq22155){
var G__22156 = cljs.core.first.call(null,seq22155);
var seq22155__$1 = cljs.core.next.call(null,seq22155);
var G__22157 = cljs.core.first.call(null,seq22155__$1);
var seq22155__$2 = cljs.core.next.call(null,seq22155__$1);
return cljs.core$macros.require.cljs$core$IFn$_invoke$arity$variadic(G__22156,G__22157,seq22155__$2);
});


cljs.core$macros.require.cljs$lang$macro = true;
/**
 * Similar to require but only for macros.
 */
cljs.core$macros.require_macros = (function cljs$core$macros$require_macros(var_args){
var args__10037__auto__ = [];
var len__10030__auto___22164 = arguments.length;
var i__10031__auto___22165 = (0);
while(true){
if((i__10031__auto___22165 < len__10030__auto___22164)){
args__10037__auto__.push((arguments[i__10031__auto___22165]));

var G__22166 = (i__10031__auto___22165 + (1));
i__10031__auto___22165 = G__22166;
continue;
} else {
}
break;
}

var argseq__10038__auto__ = ((((2) < args__10037__auto__.length))?(new cljs.core.IndexedSeq(args__10037__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.require_macros.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10038__auto__);
});

cljs.core$macros.require_macros.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ns*","ns*",1840949383,null)),(function (){var x__9759__auto__ = cljs.core.cons.call(null,new cljs.core.Keyword(null,"require-macros","require-macros",707947416),args);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
});

cljs.core$macros.require_macros.cljs$lang$maxFixedArity = (2);

cljs.core$macros.require_macros.cljs$lang$applyTo = (function (seq22161){
var G__22162 = cljs.core.first.call(null,seq22161);
var seq22161__$1 = cljs.core.next.call(null,seq22161);
var G__22163 = cljs.core.first.call(null,seq22161__$1);
var seq22161__$2 = cljs.core.next.call(null,seq22161__$1);
return cljs.core$macros.require_macros.cljs$core$IFn$_invoke$arity$variadic(G__22162,G__22163,seq22161__$2);
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
var args__10037__auto__ = [];
var len__10030__auto___22170 = arguments.length;
var i__10031__auto___22171 = (0);
while(true){
if((i__10031__auto___22171 < len__10030__auto___22170)){
args__10037__auto__.push((arguments[i__10031__auto___22171]));

var G__22172 = (i__10031__auto___22171 + (1));
i__10031__auto___22171 = G__22172;
continue;
} else {
}
break;
}

var argseq__10038__auto__ = ((((2) < args__10037__auto__.length))?(new cljs.core.IndexedSeq(args__10037__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.use.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10038__auto__);
});

cljs.core$macros.use.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ns*","ns*",1840949383,null)),(function (){var x__9759__auto__ = cljs.core.cons.call(null,new cljs.core.Keyword(null,"use","use",-1846382424),args);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
});

cljs.core$macros.use.cljs$lang$maxFixedArity = (2);

cljs.core$macros.use.cljs$lang$applyTo = (function (seq22167){
var G__22168 = cljs.core.first.call(null,seq22167);
var seq22167__$1 = cljs.core.next.call(null,seq22167);
var G__22169 = cljs.core.first.call(null,seq22167__$1);
var seq22167__$2 = cljs.core.next.call(null,seq22167__$1);
return cljs.core$macros.use.cljs$core$IFn$_invoke$arity$variadic(G__22168,G__22169,seq22167__$2);
});


cljs.core$macros.use.cljs$lang$macro = true;
/**
 * Similar to use but only for macros.
 */
cljs.core$macros.use_macros = (function cljs$core$macros$use_macros(var_args){
var args__10037__auto__ = [];
var len__10030__auto___22176 = arguments.length;
var i__10031__auto___22177 = (0);
while(true){
if((i__10031__auto___22177 < len__10030__auto___22176)){
args__10037__auto__.push((arguments[i__10031__auto___22177]));

var G__22178 = (i__10031__auto___22177 + (1));
i__10031__auto___22177 = G__22178;
continue;
} else {
}
break;
}

var argseq__10038__auto__ = ((((2) < args__10037__auto__.length))?(new cljs.core.IndexedSeq(args__10037__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.use_macros.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10038__auto__);
});

cljs.core$macros.use_macros.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ns*","ns*",1840949383,null)),(function (){var x__9759__auto__ = cljs.core.cons.call(null,new cljs.core.Keyword(null,"use-macros","use-macros",-905638393),args);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
});

cljs.core$macros.use_macros.cljs$lang$maxFixedArity = (2);

cljs.core$macros.use_macros.cljs$lang$applyTo = (function (seq22173){
var G__22174 = cljs.core.first.call(null,seq22173);
var seq22173__$1 = cljs.core.next.call(null,seq22173);
var G__22175 = cljs.core.first.call(null,seq22173__$1);
var seq22173__$2 = cljs.core.next.call(null,seq22173__$1);
return cljs.core$macros.use_macros.cljs$core$IFn$_invoke$arity$variadic(G__22174,G__22175,seq22173__$2);
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
var args__10037__auto__ = [];
var len__10030__auto___22182 = arguments.length;
var i__10031__auto___22183 = (0);
while(true){
if((i__10031__auto___22183 < len__10030__auto___22182)){
args__10037__auto__.push((arguments[i__10031__auto___22183]));

var G__22184 = (i__10031__auto___22183 + (1));
i__10031__auto___22183 = G__22184;
continue;
} else {
}
break;
}

var argseq__10038__auto__ = ((((2) < args__10037__auto__.length))?(new cljs.core.IndexedSeq(args__10037__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.import$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10038__auto__);
});

cljs.core$macros.import$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,import_symbols_or_lists){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ns*","ns*",1840949383,null)),(function (){var x__9759__auto__ = cljs.core.cons.call(null,new cljs.core.Keyword(null,"import","import",-1399500709),import_symbols_or_lists);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
});

cljs.core$macros.import$.cljs$lang$maxFixedArity = (2);

cljs.core$macros.import$.cljs$lang$applyTo = (function (seq22179){
var G__22180 = cljs.core.first.call(null,seq22179);
var seq22179__$1 = cljs.core.next.call(null,seq22179);
var G__22181 = cljs.core.first.call(null,seq22179__$1);
var seq22179__$2 = cljs.core.next.call(null,seq22179__$1);
return cljs.core$macros.import$.cljs$core$IFn$_invoke$arity$variadic(G__22180,G__22181,seq22179__$2);
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
var args__10037__auto__ = [];
var len__10030__auto___22188 = arguments.length;
var i__10031__auto___22189 = (0);
while(true){
if((i__10031__auto___22189 < len__10030__auto___22188)){
args__10037__auto__.push((arguments[i__10031__auto___22189]));

var G__22190 = (i__10031__auto___22189 + (1));
i__10031__auto___22189 = G__22190;
continue;
} else {
}
break;
}

var argseq__10038__auto__ = ((((2) < args__10037__auto__.length))?(new cljs.core.IndexedSeq(args__10037__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.refer_clojure.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10038__auto__);
});

cljs.core$macros.refer_clojure.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ns*","ns*",1840949383,null)),(function (){var x__9759__auto__ = cljs.core.cons.call(null,new cljs.core.Keyword(null,"refer-clojure","refer-clojure",813784440),args);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
});

cljs.core$macros.refer_clojure.cljs$lang$maxFixedArity = (2);

cljs.core$macros.refer_clojure.cljs$lang$applyTo = (function (seq22185){
var G__22186 = cljs.core.first.call(null,seq22185);
var seq22185__$1 = cljs.core.next.call(null,seq22185);
var G__22187 = cljs.core.first.call(null,seq22185__$1);
var seq22185__$2 = cljs.core.next.call(null,seq22185__$1);
return cljs.core$macros.refer_clojure.cljs$core$IFn$_invoke$arity$variadic(G__22186,G__22187,seq22185__$2);
});


cljs.core$macros.refer_clojure.cljs$lang$macro = true;
cljs.core$macros.load_file_STAR_ = (function cljs$core$macros$load_file_STAR_(_AMPERSAND_form,_AMPERSAND_env,f){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","goog","js/goog",-70605150,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"nodeGlobalRequire","nodeGlobalRequire",167018599,null)),(function (){var x__9759__auto__ = f;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Argument to macroexpand-1 must be quoted"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(core/= (core/first quoted) (quote quote))")].join('')));
}

var form = cljs.core.second.call(null,quoted);
if(cljs.core.seq_QMARK_.call(null,form)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__9759__auto__ = cljs.analyzer.macroexpand_1.call(null,_AMPERSAND_env,form);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Argument to macroexpand must be quoted"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("(core/= (core/first quoted) (quote quote))")].join('')));
}

var form = cljs.core.second.call(null,quoted);
var env = _AMPERSAND_env;
if(cljs.core.seq_QMARK_.call(null,form)){
var form__$1 = form;
var form_SINGLEQUOTE_ = cljs.analyzer.macroexpand_1.call(null,env,form__$1);
while(true){
if(!((form__$1 === form_SINGLEQUOTE_))){
var G__22191 = form_SINGLEQUOTE_;
var G__22192 = cljs.analyzer.macroexpand_1.call(null,env,form_SINGLEQUOTE_);
form__$1 = G__22191;
form_SINGLEQUOTE_ = G__22192;
continue;
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__9759__auto__ = form_SINGLEQUOTE_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
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
var and__8905__auto__ = cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,fdecl));
if(and__8905__auto__){
return cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),cljs.core.ffirst.call(null,fdecl));
} else {
return and__8905__auto__;
}
});
cljs.core$macros.variadic_fn_STAR_ = (function cljs$core$macros$variadic_fn_STAR_(var_args){
var args22193 = [];
var len__10030__auto___22200 = arguments.length;
var i__10031__auto___22201 = (0);
while(true){
if((i__10031__auto___22201 < len__10030__auto___22200)){
args22193.push((arguments[i__10031__auto___22201]));

var G__22202 = (i__10031__auto___22201 + (1));
i__10031__auto___22201 = G__22202;
continue;
} else {
}
break;
}

var G__22195 = args22193.length;
switch (G__22195) {
case 2:
return cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args22193.length)].join('')));

}
});

cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (sym,method){
return cljs.core$macros.variadic_fn_STAR_.call(null,sym,method,true);
});

cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (sym,p__22196,solo){
var vec__22197 = p__22196;
var seq__22198 = cljs.core.seq.call(null,vec__22197);
var first__22199 = cljs.core.first.call(null,seq__22198);
var seq__22198__$1 = cljs.core.next.call(null,seq__22198);
var arglist = first__22199;
var body = seq__22198__$1;
var method = vec__22197;
var sig = cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),arglist);
var restarg = cljs.core.gensym.call(null,"seq");
var get_delegate = ((function (sig,restarg,vec__22197,seq__22198,first__22199,seq__22198__$1,arglist,body,method){
return (function cljs$core$macros$get_delegate(){
return new cljs.core.Symbol(null,"cljs$core$IFn$_invoke$arity$variadic","cljs$core$IFn$_invoke$arity$variadic",-378825034,null);
});})(sig,restarg,vec__22197,seq__22198,first__22199,seq__22198__$1,arglist,body,method))
;
var get_delegate_prop = ((function (sig,restarg,vec__22197,seq__22198,first__22199,seq__22198__$1,arglist,body,method){
return (function cljs$core$macros$get_delegate_prop(){
return cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(get_delegate.call(null))].join(''));
});})(sig,restarg,vec__22197,seq__22198,first__22199,seq__22198__$1,arglist,body,method))
;
var param_bind = ((function (sig,restarg,vec__22197,seq__22198,first__22199,seq__22198__$1,arglist,body,method){
return (function cljs$core$macros$param_bind(param){
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9759__auto__ = param;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9759__auto__ = cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null),cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"/Users/ru/clojure/flights-pro/resources/public/js/out/cljs/core.cljc"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2878),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj.call(null,cljs.core.List.EMPTY,49),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2878),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj.call(null,cljs.core.List.EMPTY,54),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9759__auto__ = cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core","next","cljs.core/next",-1291438473,null),cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"/Users/ru/clojure/flights-pro/resources/public/js/out/cljs/core.cljc"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2879),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj.call(null,cljs.core.List.EMPTY,51),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2879),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj.call(null,cljs.core.List.EMPTY,55),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})()))));
});})(sig,restarg,vec__22197,seq__22198,first__22199,seq__22198__$1,arglist,body,method))
;
var apply_to = ((function (sig,restarg,vec__22197,seq__22198,first__22199,seq__22198__$1,arglist,body,method){
return (function cljs$core$macros$apply_to(){
if(((1) < cljs.core.count.call(null,sig))){
var params = cljs.core.repeatedly.call(null,(cljs.core.count.call(null,sig) - (1)),cljs.core.gensym);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9759__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9759__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9759__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.mapcat.call(null,param_bind,params)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9759__auto__ = sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9759__auto__ = get_delegate.call(null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),params,(function (){var x__9759__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9759__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9759__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9759__auto__ = sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9759__auto__ = get_delegate.call(null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__9759__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
}
});})(sig,restarg,vec__22197,seq__22198,first__22199,seq__22198__$1,arglist,body,method))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9759__auto__ = sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = get_delegate_prop.call(null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9759__auto__ = cljs.core.vec.call(null,sig);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(cljs.core.truth_(solo)?cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9759__auto__ = sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-cljs$lang$maxFixedArity","-cljs$lang$maxFixedArity",-1481434279,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = (cljs.core.count.call(null,sig) - (1));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())))):null),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9759__auto__ = sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-cljs$lang$applyTo","-cljs$lang$applyTo",-225535181,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = apply_to.call(null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
});

cljs.core$macros.variadic_fn_STAR_.cljs$lang$maxFixedArity = 3;

cljs.core$macros.copy_arguments = (function cljs$core$macros$copy_arguments(_AMPERSAND_form,_AMPERSAND_env,dest){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9759__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"len__22204__auto__","len__22204__auto__",-729911067,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__9759__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__22205__auto__","i__22205__auto__",-893250130,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__22205__auto__","i__22205__auto__",-893250130,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"len__22204__auto__","len__22204__auto__",-729911067,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".push",".push",-1497267248,null)),(function (){var x__9759__auto__ = dest;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aget","cljs.core$macros/aget",1976136178,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__22205__auto__","i__22205__auto__",-893250130,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__22205__auto__","i__22205__auto__",-893250130,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
});

cljs.core$macros.copy_arguments.cljs$lang$macro = true;
cljs.core$macros.variadic_fn = (function cljs$core$macros$variadic_fn(name,meta,p__22208,emit_var_QMARK_){
var vec__22215 = p__22208;
var vec__22218 = cljs.core.nth.call(null,vec__22215,(0),null);
var seq__22219 = cljs.core.seq.call(null,vec__22218);
var first__22220 = cljs.core.first.call(null,seq__22219);
var seq__22219__$1 = cljs.core.next.call(null,seq__22219);
var arglist = first__22220;
var body = seq__22219__$1;
var method = vec__22218;
var fdecl = vec__22215;
var dest_args = ((function (vec__22215,vec__22218,seq__22219,first__22220,seq__22219__$1,arglist,body,method,fdecl){
return (function cljs$core$macros$variadic_fn_$_dest_args(c){
return cljs.core.map.call(null,((function (vec__22215,vec__22218,seq__22219,first__22220,seq__22219__$1,arglist,body,method,fdecl){
return (function (n){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aget","cljs.core$macros/aget",1976136178,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
});})(vec__22215,vec__22218,seq__22219,first__22220,seq__22219__$1,arglist,body,method,fdecl))
,cljs.core.range.call(null,c));
});})(vec__22215,vec__22218,seq__22219,first__22220,seq__22219__$1,arglist,body,method,fdecl))
;
var rname = cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_ns_STAR_)].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''));
var sig = cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),arglist);
var c_1 = (cljs.core.count.call(null,sig) - (1));
var meta__$1 = cljs.core.assoc.call(null,meta,new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",882626057),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),c_1,new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sig], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),(function (){var x__9759__auto__ = arglist;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.doall.call(null,cljs.core.map.call(null,meta,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arglist], null)))], null));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"def","def",597100991,null)),(function (){var x__9759__auto__ = cljs.core.with_meta.call(null,name,meta__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9759__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"var_args","var_args",1214280389,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9759__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args__22206__auto__","args__22206__auto__",9652389,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","copy-arguments","cljs.core$macros/copy-arguments",-1675962356,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args__22206__auto__","args__22206__auto__",9652389,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9759__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argseq__22207__auto__","argseq__22207__auto__",-1271834838,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__9759__auto__ = c_1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args__22206__auto__","args__22206__auto__",9652389,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__9759__auto__ = cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core","IndexedSeq","cljs.core/IndexedSeq",-228688698,null),cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"/Users/ru/clojure/flights-pro/resources/public/js/out/cljs/core.cljc"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2926),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj.call(null,cljs.core.List.EMPTY,55),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2926),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj.call(null,cljs.core.List.EMPTY,75),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".slice",".slice",1874048374,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args__22206__auto__","args__22206__auto__",9652389,null)),(function (){var x__9759__auto__ = c_1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9759__auto__ = rname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cljs$core$IFn$_invoke$arity$variadic","cljs$core$IFn$_invoke$arity$variadic",-378825034,null)),dest_args.call(null,c_1),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argseq__22207__auto__","argseq__22207__auto__",-1271834838,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core$macros.variadic_fn_STAR_.call(null,rname,method);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = (cljs.core.truth_(emit_var_QMARK_)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"var","var",870848730,null)),(function (){var x__9759__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})()))):null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
});
cljs.core$macros.multi_arity_fn = (function cljs$core$macros$multi_arity_fn(name,meta,fdecl,emit_var_QMARK_){
var dest_args = (function cljs$core$macros$multi_arity_fn_$_dest_args(c){
return cljs.core.map.call(null,(function (n){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aget","cljs.core$macros/aget",1976136178,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
}),cljs.core.range.call(null,c));
});
var fixed_arity = (function cljs$core$macros$multi_arity_fn_$_fixed_arity(rname,sig){
var c = cljs.core.count.call(null,sig);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9759__auto__ = rname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9759__auto__ = cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("cljs$core$IFn$_invoke$arity$"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),dest_args.call(null,c))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())))], null);
});
var fn_method = (function cljs$core$macros$multi_arity_fn_$_fn_method(p__22245){
var vec__22249 = p__22245;
var seq__22250 = cljs.core.seq.call(null,vec__22249);
var first__22251 = cljs.core.first.call(null,seq__22250);
var seq__22250__$1 = cljs.core.next.call(null,seq__22250);
var sig = first__22251;
var body = seq__22250__$1;
var method = vec__22249;
if(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),sig))){
return cljs.core$macros.variadic_fn_STAR_.call(null,name,method,false);
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9759__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("-cljs$core$IFn$_invoke$arity$"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,sig))].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9759__auto__ = method;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
}
});
var rname = cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_ns_STAR_)].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''));
var arglists = cljs.core.map.call(null,cljs.core.first,fdecl);
var varsig_QMARK_ = ((function (rname,arglists){
return (function (p1__22221_SHARP_){
return cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),p1__22221_SHARP_);
});})(rname,arglists))
;
var variadic = cljs.core.boolean$.call(null,cljs.core.some.call(null,varsig_QMARK_,arglists));
var sigs = cljs.core.remove.call(null,varsig_QMARK_,arglists);
var maxfa = cljs.core.apply.call(null,cljs.core.max,cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.count,sigs),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.count.call(null,cljs.core.first.call(null,cljs.core.filter.call(null,varsig_QMARK_,arglists))) - (2))], null)));
var meta__$1 = cljs.core.assoc.call(null,meta,new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",882626057),variadic,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),maxfa,new cljs.core.Keyword(null,"method-params","method-params",-980792179),sigs,new cljs.core.Keyword(null,"arglists","arglists",1661989754),arglists,new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.doall.call(null,cljs.core.map.call(null,meta,arglists))], null));
var args_sym = cljs.core.gensym.call(null,"args");
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"def","def",597100991,null)),(function (){var x__9759__auto__ = cljs.core.with_meta.call(null,name,meta__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9759__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"var_args","var_args",1214280389,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9759__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9759__auto__ = args_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","copy-arguments","cljs.core$macros/copy-arguments",-1675962356,null)),(function (){var x__9759__auto__ = args_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","case","cljs.core$macros/case",-2131866965,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),(function (){var x__9759__auto__ = args_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),cljs.core.mapcat.call(null,((function (rname,arglists,varsig_QMARK_,variadic,sigs,maxfa,meta__$1,args_sym){
return (function (p1__22222_SHARP_){
return fixed_arity.call(null,rname,p1__22222_SHARP_);
});})(rname,arglists,varsig_QMARK_,variadic,sigs,maxfa,meta__$1,args_sym))
,sigs),(function (){var x__9759__auto__ = ((variadic)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9759__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argseq__22223__auto__","argseq__22223__auto__",728452933,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__9759__auto__ = cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core","IndexedSeq","cljs.core/IndexedSeq",-228688698,null),cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"/Users/ru/clojure/flights-pro/resources/public/js/out/cljs/core.cljc"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2984),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj.call(null,cljs.core.List.EMPTY,58),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2984),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj.call(null,cljs.core.List.EMPTY,78),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".slice",".slice",1874048374,null)),(function (){var x__9759__auto__ = args_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = maxfa;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9759__auto__ = rname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cljs$core$IFn$_invoke$arity$variadic","cljs$core$IFn$_invoke$arity$variadic",-378825034,null)),dest_args.call(null,maxfa),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argseq__22223__auto__","argseq__22223__auto__",728452933,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})()))):(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(meta__$1))?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","str","cljs.core$macros/str",-2019499702,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"Invalid arity: "),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),(function (){var x__9759__auto__ = args_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(2)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})()))):cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","str","cljs.core$macros/str",-2019499702,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"Invalid arity: "),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),(function (){var x__9759__auto__ = args_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),cljs.core.map.call(null,fn_method,fdecl),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__9759__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9759__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-cljs$lang$maxFixedArity","-cljs$lang$maxFixedArity",-1481434279,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = maxfa;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),(function (){var x__9759__auto__ = (cljs.core.truth_(emit_var_QMARK_)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"var","var",870848730,null)),(function (){var x__9759__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})()))):null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
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
var fdecl__$3 = ((cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,fdecl__$2)))?(function (){var x__9759__auto__ = fdecl__$2;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})():fdecl__$2);
var m__$2 = ((cljs.core.map_QMARK_.call(null,cljs.core.last.call(null,fdecl__$3)))?cljs.core.conj.call(null,m__$1,cljs.core.last.call(null,fdecl__$3)):m__$1);
var fdecl__$4 = ((cljs.core.map_QMARK_.call(null,cljs.core.last.call(null,fdecl__$3)))?cljs.core.butlast.call(null,fdecl__$3):fdecl__$3);
var m__$3 = cljs.core.conj.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core._conj.call(null,(function (){var x__9759__auto__ = cljs.core$macros.sigs.call(null,fdecl__$4);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})(),new cljs.core.Symbol(null,"quote","quote",1377916282,null))], null),m__$2);
var m__$4 = cljs.core.conj.call(null,(cljs.core.truth_(cljs.core.meta.call(null,name))?cljs.core.meta.call(null,name):cljs.core.PersistentArrayMap.EMPTY),m__$3);
if(cljs.core.truth_(cljs.core$macros.multi_arity_fn_QMARK_.call(null,fdecl__$4))){
return cljs.core$macros.multi_arity_fn.call(null,name,(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))?cljs.core.update_in.call(null,m__$4,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516)], null),cljs.core.conj,"@param {...*} var_args"):m__$4),fdecl__$4,new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
} else {
if(cljs.core.truth_(cljs.core$macros.variadic_fn_QMARK_.call(null,fdecl__$4))){
return cljs.core$macros.variadic_fn.call(null,name,(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))?cljs.core.update_in.call(null,m__$4,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516)], null),cljs.core.conj,"@param {...*} var_args"):m__$4),fdecl__$4,new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
} else {
return cljs.core._conj.call(null,(function (){var x__9759__auto__ = cljs.core.with_meta.call(null,name,m__$4);
return cljs.core._conj.call(null,(function (){var x__9759__auto____$1 = cljs.core.cons.call(null,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null),fdecl__$4);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto____$1);
})(),x__9759__auto__);
})(),new cljs.core.Symbol(null,"def","def",597100991,null));

}
}
};
var cljs$core$macros$defn = function (_AMPERSAND_form,_AMPERSAND_env,name,var_args){
var fdecl = null;
if (arguments.length > 3) {
var G__22252__i = 0, G__22252__a = new Array(arguments.length -  3);
while (G__22252__i < G__22252__a.length) {G__22252__a[G__22252__i] = arguments[G__22252__i + 3]; ++G__22252__i;}
  fdecl = new cljs.core.IndexedSeq(G__22252__a,0);
} 
return cljs$core$macros$defn__delegate.call(this,_AMPERSAND_form,_AMPERSAND_env,name,fdecl);};
cljs$core$macros$defn.cljs$lang$maxFixedArity = 3;
cljs$core$macros$defn.cljs$lang$applyTo = (function (arglist__22253){
var _AMPERSAND_form = cljs.core.first(arglist__22253);
arglist__22253 = cljs.core.next(arglist__22253);
var _AMPERSAND_env = cljs.core.first(arglist__22253);
arglist__22253 = cljs.core.next(arglist__22253);
var name = cljs.core.first(arglist__22253);
var fdecl = cljs.core.rest(arglist__22253);
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
var args__10037__auto__ = [];
var len__10030__auto___22258 = arguments.length;
var i__10031__auto___22259 = (0);
while(true){
if((i__10031__auto___22259 < len__10030__auto___22258)){
args__10037__auto__.push((arguments[i__10031__auto___22259]));

var G__22260 = (i__10031__auto___22259 + (1));
i__10031__auto___22259 = G__22260;
continue;
} else {
}
break;
}

var argseq__10038__auto__ = ((((3) < args__10037__auto__.length))?(new cljs.core.IndexedSeq(args__10037__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.defmacro.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10038__auto__);
});

cljs.core$macros.defmacro.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,args){
var prefix = (function (){var p = (function (){var x__9759__auto__ = cljs.core.vary_meta.call(null,name,cljs.core.assoc,new cljs.core.Keyword(null,"macro","macro",-867863404),true);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
})();
var args__$1 = args;
while(true){
var f = cljs.core.first.call(null,args__$1);
if(typeof f === 'string'){
var G__22261 = cljs.core.cons.call(null,f,p);
var G__22262 = cljs.core.next.call(null,args__$1);
p = G__22261;
args__$1 = G__22262;
continue;
} else {
if(cljs.core.map_QMARK_.call(null,f)){
var G__22263 = cljs.core.cons.call(null,f,p);
var G__22264 = cljs.core.next.call(null,args__$1);
p = G__22263;
args__$1 = G__22264;
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
var G__22265 = cljs.core.next.call(null,fd);
fd = G__22265;
continue;
} else {
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,fd))){
var G__22266 = cljs.core.next.call(null,fd);
fd = G__22266;
continue;
} else {
return fd;
}
}
break;
}
})();
var fdecl__$1 = ((cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,fdecl)))?(function (){var x__9759__auto__ = fdecl;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto__);
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
var G__22267 = cljs.core.conj.call(null,acc,add_implicit_args.call(null,d));
var G__22268 = cljs.core.next.call(null,ds);
acc = G__22267;
ds = G__22268;
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
var G__22269 = cljs.core.next.call(null,p);
var G__22270 = cljs.core.cons.call(null,cljs.core.first.call(null,p),d);
p = G__22269;
d = G__22270;
continue;
} else {
return d;
}
break;
}
})();
return cljs.core._conj.call(null,(function (){var x__9759__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null),decl);
return cljs.core._conj.call(null,(function (){var x__9759__auto____$1 = cljs.core._conj.call(null,(function (){var x__9759__auto____$1 = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9759__auto____$1 = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto____$1);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-cljs$lang$macro","-cljs$lang$macro",443600924,null)))));
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,true),x__9759__auto____$1);
})(),new cljs.core.Symbol(null,"set!","set!",250714521,null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9759__auto____$1);
})(),x__9759__auto__);
})(),new cljs.core.Symbol(null,"do","do",1686842252,null));
});

cljs.core$macros.defmacro.cljs$lang$maxFixedArity = (3);

cljs.core$macros.defmacro.cljs$lang$applyTo = (function (seq22254){
var G__22255 = cljs.core.first.call(null,seq22254);
var seq22254__$1 = cljs.core.next.call(null,seq22254);
var G__22256 = cljs.core.first.call(null,seq22254__$1);
var seq22254__$2 = cljs.core.next.call(null,seq22254__$1);
var G__22257 = cljs.core.first.call(null,seq22254__$2);
var seq22254__$3 = cljs.core.next.call(null,seq22254__$2);
return cljs.core$macros.defmacro.cljs$core$IFn$_invoke$arity$variadic(G__22255,G__22256,G__22257,seq22254__$3);
});

cljs.core$macros.defmacro.cljs$lang$macro = true;

//# sourceMappingURL=core$macros.js.map