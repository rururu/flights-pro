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
var args__11392__auto__ = [];
var len__11385__auto___20814 = arguments.length;
var i__11386__auto___20815 = (0);
while(true){
if((i__11386__auto___20815 < len__11385__auto___20814)){
args__11392__auto__.push((arguments[i__11386__auto___20815]));

var G__20816 = (i__11386__auto___20815 + (1));
i__11386__auto___20815 = G__20816;
continue;
} else {
}
break;
}

var argseq__11393__auto__ = ((((3) < args__11392__auto__.length))?(new cljs.core.IndexedSeq(args__11392__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__11393__auto__);
});

cljs.core$macros.__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
var x__$1 = x;
var forms__$1 = forms;
while(true){
if(cljs.core.truth_(forms__$1)){
var form = cljs.core.first.call(null,forms__$1);
var threaded = ((cljs.core.seq_QMARK_.call(null,form))?cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__11114__auto__ = cljs.core.first.call(null,form);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = x__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),cljs.core.next.call(null,form)))),cljs.core.meta.call(null,form)):(function (){var x__11114__auto__ = form;
return cljs.core._conj.call(null,(function (){var x__11114__auto____$1 = x__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto____$1);
})(),x__11114__auto__);
})());
var G__20817 = threaded;
var G__20818 = cljs.core.next.call(null,forms__$1);
x__$1 = G__20817;
forms__$1 = G__20818;
continue;
} else {
return x__$1;
}
break;
}
});

cljs.core$macros.__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.__GT_.cljs$lang$applyTo = (function (seq20810){
var G__20811 = cljs.core.first.call(null,seq20810);
var seq20810__$1 = cljs.core.next.call(null,seq20810);
var G__20812 = cljs.core.first.call(null,seq20810__$1);
var seq20810__$2 = cljs.core.next.call(null,seq20810__$1);
var G__20813 = cljs.core.first.call(null,seq20810__$2);
var seq20810__$3 = cljs.core.next.call(null,seq20810__$2);
return cljs.core$macros.__GT_.cljs$core$IFn$_invoke$arity$variadic(G__20811,G__20812,G__20813,seq20810__$3);
});


cljs.core$macros.__GT_.cljs$lang$macro = true;
/**
 * Threads the expr through the forms. Inserts x as the
 *   last item in the first form, making a list of it if it is not a
 *   list already. If there are more forms, inserts the first form as the
 *   last item in second form, etc.
 */
cljs.core$macros.__GT__GT_ = (function cljs$core$macros$__GT__GT_(var_args){
var args__11392__auto__ = [];
var len__11385__auto___20823 = arguments.length;
var i__11386__auto___20824 = (0);
while(true){
if((i__11386__auto___20824 < len__11385__auto___20823)){
args__11392__auto__.push((arguments[i__11386__auto___20824]));

var G__20825 = (i__11386__auto___20824 + (1));
i__11386__auto___20824 = G__20825;
continue;
} else {
}
break;
}

var argseq__11393__auto__ = ((((3) < args__11392__auto__.length))?(new cljs.core.IndexedSeq(args__11392__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.__GT__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__11393__auto__);
});

cljs.core$macros.__GT__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
var x__$1 = x;
var forms__$1 = forms;
while(true){
if(cljs.core.truth_(forms__$1)){
var form = cljs.core.first.call(null,forms__$1);
var threaded = ((cljs.core.seq_QMARK_.call(null,form))?cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__11114__auto__ = cljs.core.first.call(null,form);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),cljs.core.next.call(null,form),(function (){var x__11114__auto__ = x__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})()))),cljs.core.meta.call(null,form)):(function (){var x__11114__auto__ = form;
return cljs.core._conj.call(null,(function (){var x__11114__auto____$1 = x__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto____$1);
})(),x__11114__auto__);
})());
var G__20826 = threaded;
var G__20827 = cljs.core.next.call(null,forms__$1);
x__$1 = G__20826;
forms__$1 = G__20827;
continue;
} else {
return x__$1;
}
break;
}
});

cljs.core$macros.__GT__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.__GT__GT_.cljs$lang$applyTo = (function (seq20819){
var G__20820 = cljs.core.first.call(null,seq20819);
var seq20819__$1 = cljs.core.next.call(null,seq20819);
var G__20821 = cljs.core.first.call(null,seq20819__$1);
var seq20819__$2 = cljs.core.next.call(null,seq20819__$1);
var G__20822 = cljs.core.first.call(null,seq20819__$2);
var seq20819__$3 = cljs.core.next.call(null,seq20819__$2);
return cljs.core$macros.__GT__GT_.cljs$core$IFn$_invoke$arity$variadic(G__20820,G__20821,G__20822,seq20819__$3);
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
var args20828 = [];
var len__11385__auto___20836 = arguments.length;
var i__11386__auto___20837 = (0);
while(true){
if((i__11386__auto___20837 < len__11385__auto___20836)){
args20828.push((arguments[i__11386__auto___20837]));

var G__20838 = (i__11386__auto___20837 + (1));
i__11386__auto___20837 = G__20838;
continue;
} else {
}
break;
}

var G__20835 = args20828.length;
switch (G__20835) {
case 4:
return cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__11404__auto__ = (new cljs.core.IndexedSeq(args20828.slice((4)),(0),null));
return cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__11404__auto__);

}
});

cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,form){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__11114__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
});

cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,form,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"..","..",-300507420,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__11114__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),more)));
});

cljs.core$macros._DOT__DOT_.cljs$lang$applyTo = (function (seq20829){
var G__20830 = cljs.core.first.call(null,seq20829);
var seq20829__$1 = cljs.core.next.call(null,seq20829);
var G__20831 = cljs.core.first.call(null,seq20829__$1);
var seq20829__$2 = cljs.core.next.call(null,seq20829__$1);
var G__20832 = cljs.core.first.call(null,seq20829__$2);
var seq20829__$3 = cljs.core.next.call(null,seq20829__$2);
var G__20833 = cljs.core.first.call(null,seq20829__$3);
var seq20829__$4 = cljs.core.next.call(null,seq20829__$3);
return cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$variadic(G__20830,G__20831,G__20832,G__20833,seq20829__$4);
});

cljs.core$macros._DOT__DOT_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._DOT__DOT_.cljs$lang$macro = true;
/**
 * Ignores body, yields nil
 */
cljs.core$macros.comment = (function cljs$core$macros$comment(var_args){
var args__11392__auto__ = [];
var len__11385__auto___20843 = arguments.length;
var i__11386__auto___20844 = (0);
while(true){
if((i__11386__auto___20844 < len__11385__auto___20843)){
args__11392__auto__.push((arguments[i__11386__auto___20844]));

var G__20845 = (i__11386__auto___20844 + (1));
i__11386__auto___20844 = G__20845;
continue;
} else {
}
break;
}

var argseq__11393__auto__ = ((((2) < args__11392__auto__.length))?(new cljs.core.IndexedSeq(args__11392__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.comment.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__11393__auto__);
});

cljs.core$macros.comment.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return null;
});

cljs.core$macros.comment.cljs$lang$maxFixedArity = (2);

cljs.core$macros.comment.cljs$lang$applyTo = (function (seq20840){
var G__20841 = cljs.core.first.call(null,seq20840);
var seq20840__$1 = cljs.core.next.call(null,seq20840);
var G__20842 = cljs.core.first.call(null,seq20840__$1);
var seq20840__$2 = cljs.core.next.call(null,seq20840__$1);
return cljs.core$macros.comment.cljs$core$IFn$_invoke$arity$variadic(G__20841,G__20842,seq20840__$2);
});


cljs.core$macros.comment.cljs$lang$macro = true;
/**
 * Takes a set of test/expr pairs. It evaluates each test one at a
 *   time.  If a test returns logical true, cond evaluates and returns
 *   the value of the corresponding expr and doesn't evaluate any of the
 *   other tests or exprs. (cond) returns nil.
 */
cljs.core$macros.cond = (function cljs$core$macros$cond(var_args){
var args__11392__auto__ = [];
var len__11385__auto___20849 = arguments.length;
var i__11386__auto___20850 = (0);
while(true){
if((i__11386__auto___20850 < len__11385__auto___20849)){
args__11392__auto__.push((arguments[i__11386__auto___20850]));

var G__20851 = (i__11386__auto___20850 + (1));
i__11386__auto___20850 = G__20851;
continue;
} else {
}
break;
}

var argseq__11393__auto__ = ((((2) < args__11392__auto__.length))?(new cljs.core.IndexedSeq(args__11392__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.cond.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__11393__auto__);
});

cljs.core$macros.cond.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,clauses){
if(cljs.core.truth_(clauses)){
return cljs.core._conj.call(null,(function (){var x__11114__auto__ = cljs.core.first.call(null,clauses);
return cljs.core._conj.call(null,(function (){var x__11114__auto____$1 = ((cljs.core.next.call(null,clauses))?cljs.core.second.call(null,clauses):(function(){throw (new Error("cond requires an even number of forms"))})());
return cljs.core._conj.call(null,(function (){var x__11114__auto____$2 = cljs.core.cons.call(null,new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",2005388338,null),cljs.core.next.call(null,cljs.core.next.call(null,clauses)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto____$2);
})(),x__11114__auto____$1);
})(),x__11114__auto__);
})(),new cljs.core.Symbol(null,"if","if",1181717262,null));
} else {
return null;
}
});

cljs.core$macros.cond.cljs$lang$maxFixedArity = (2);

cljs.core$macros.cond.cljs$lang$applyTo = (function (seq20846){
var G__20847 = cljs.core.first.call(null,seq20846);
var seq20846__$1 = cljs.core.next.call(null,seq20846);
var G__20848 = cljs.core.first.call(null,seq20846__$1);
var seq20846__$2 = cljs.core.next.call(null,seq20846__$1);
return cljs.core$macros.cond.cljs$core$IFn$_invoke$arity$variadic(G__20847,G__20848,seq20846__$2);
});


cljs.core$macros.cond.cljs$lang$macro = true;
/**
 * defs the supplied var names with no bindings, useful for making forward declarations.
 */
cljs.core$macros.declare = (function cljs$core$macros$declare(var_args){
var args__11392__auto__ = [];
var len__11385__auto___20856 = arguments.length;
var i__11386__auto___20857 = (0);
while(true){
if((i__11386__auto___20857 < len__11385__auto___20856)){
args__11392__auto__.push((arguments[i__11386__auto___20857]));

var G__20858 = (i__11386__auto___20857 + (1));
i__11386__auto___20857 = G__20858;
continue;
} else {
}
break;
}

var argseq__11393__auto__ = ((((2) < args__11392__auto__.length))?(new cljs.core.IndexedSeq(args__11392__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.declare.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__11393__auto__);
});

cljs.core$macros.declare.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,names){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),cljs.core.map.call(null,(function (p1__20852_SHARP_){
return cljs.core._conj.call(null,(function (){var x__11114__auto__ = cljs.core.vary_meta.call(null,p1__20852_SHARP_,cljs.core.assoc,new cljs.core.Keyword(null,"declared","declared",92336021),true);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),new cljs.core.Symbol(null,"def","def",597100991,null));
}),names))));
});

cljs.core$macros.declare.cljs$lang$maxFixedArity = (2);

cljs.core$macros.declare.cljs$lang$applyTo = (function (seq20853){
var G__20854 = cljs.core.first.call(null,seq20853);
var seq20853__$1 = cljs.core.next.call(null,seq20853);
var G__20855 = cljs.core.first.call(null,seq20853__$1);
var seq20853__$2 = cljs.core.next.call(null,seq20853__$1);
return cljs.core$macros.declare.cljs$core$IFn$_invoke$arity$variadic(G__20854,G__20855,seq20853__$2);
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
var args__11392__auto__ = [];
var len__11385__auto___20863 = arguments.length;
var i__11386__auto___20864 = (0);
while(true){
if((i__11386__auto___20864 < len__11385__auto___20863)){
args__11392__auto__.push((arguments[i__11386__auto___20864]));

var G__20865 = (i__11386__auto___20864 + (1));
i__11386__auto___20864 = G__20865;
continue;
} else {
}
break;
}

var argseq__11393__auto__ = ((((3) < args__11392__auto__.length))?(new cljs.core.IndexedSeq(args__11392__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.doto.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__11393__auto__);
});

cljs.core$macros.doto.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
var gx = cljs.core.gensym.call(null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__11114__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__11114__auto__ = gx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),cljs.core.map.call(null,((function (gx){
return (function (f){
if(cljs.core.seq_QMARK_.call(null,f)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__11114__auto__ = cljs.core.first.call(null,f);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = gx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),cljs.core.next.call(null,f))));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__11114__auto__ = f;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = gx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
}
});})(gx))
,forms),(function (){var x__11114__auto__ = gx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
});

cljs.core$macros.doto.cljs$lang$maxFixedArity = (3);

cljs.core$macros.doto.cljs$lang$applyTo = (function (seq20859){
var G__20860 = cljs.core.first.call(null,seq20859);
var seq20859__$1 = cljs.core.next.call(null,seq20859);
var G__20861 = cljs.core.first.call(null,seq20859__$1);
var seq20859__$2 = cljs.core.next.call(null,seq20859__$1);
var G__20862 = cljs.core.first.call(null,seq20859__$2);
var seq20859__$3 = cljs.core.next.call(null,seq20859__$2);
return cljs.core$macros.doto.cljs$core$IFn$_invoke$arity$variadic(G__20860,G__20861,G__20862,seq20859__$3);
});


cljs.core$macros.doto.cljs$lang$macro = true;
cljs.core$macros.parse_impls = (function cljs$core$macros$parse_impls(specs){
var ret = cljs.core.PersistentArrayMap.EMPTY;
var s = specs;
while(true){
if(cljs.core.seq.call(null,s)){
var G__20866 = cljs.core.assoc.call(null,ret,cljs.core.first.call(null,s),cljs.core.take_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,s)));
var G__20867 = cljs.core.drop_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,s));
ret = G__20866;
s = G__20867;
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
return (function (p__20872){
var vec__20873 = p__20872;
var t = cljs.core.nth.call(null,vec__20873,(0),null);
var fs = cljs.core.nth.call(null,vec__20873,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","extend-type","cljs.core$macros/extend-type",1713295201,null)),(function (){var x__11114__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = p;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
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
var args__11392__auto__ = [];
var len__11385__auto___20880 = arguments.length;
var i__11386__auto___20881 = (0);
while(true){
if((i__11386__auto___20881 < len__11385__auto___20880)){
args__11392__auto__.push((arguments[i__11386__auto___20881]));

var G__20882 = (i__11386__auto___20881 + (1));
i__11386__auto___20881 = G__20882;
continue;
} else {
}
break;
}

var argseq__11393__auto__ = ((((3) < args__11392__auto__.length))?(new cljs.core.IndexedSeq(args__11392__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.extend_protocol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__11393__auto__);
});

cljs.core$macros.extend_protocol.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p,specs){
return cljs.core$macros.emit_extend_protocol.call(null,p,specs);
});

cljs.core$macros.extend_protocol.cljs$lang$maxFixedArity = (3);

cljs.core$macros.extend_protocol.cljs$lang$applyTo = (function (seq20876){
var G__20877 = cljs.core.first.call(null,seq20876);
var seq20876__$1 = cljs.core.next.call(null,seq20876);
var G__20878 = cljs.core.first.call(null,seq20876__$1);
var seq20876__$2 = cljs.core.next.call(null,seq20876__$1);
var G__20879 = cljs.core.first.call(null,seq20876__$2);
var seq20876__$3 = cljs.core.next.call(null,seq20876__$2);
return cljs.core$macros.extend_protocol.cljs$core$IFn$_invoke$arity$variadic(G__20877,G__20878,G__20879,seq20876__$3);
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
var G__20883 = cljs.core.next.call(null,params__$1);
var G__20884 = cljs.core.conj.call(null,new_params,cljs.core.first.call(null,params__$1));
var G__20885 = lets;
params__$1 = G__20883;
new_params = G__20884;
lets = G__20885;
continue;
} else {
var gparam = cljs.core.gensym.call(null,"p__");
var G__20886 = cljs.core.next.call(null,params__$1);
var G__20887 = cljs.core.conj.call(null,new_params,gparam);
var G__20888 = cljs.core.conj.call(null,cljs.core.conj.call(null,lets,cljs.core.first.call(null,params__$1)),gparam);
params__$1 = G__20886;
new_params = G__20887;
lets = G__20888;
continue;
}
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__11114__auto__ = new_params;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__11114__auto__ = lets;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
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
var args__11392__auto__ = [];
var len__11385__auto___20895 = arguments.length;
var i__11386__auto___20896 = (0);
while(true){
if((i__11386__auto___20896 < len__11385__auto___20895)){
args__11392__auto__.push((arguments[i__11386__auto___20896]));

var G__20897 = (i__11386__auto___20896 + (1));
i__11386__auto___20896 = G__20897;
continue;
} else {
}
break;
}

var argseq__11393__auto__ = ((((2) < args__11392__auto__.length))?(new cljs.core.IndexedSeq(args__11392__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.fn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__11393__auto__);
});

cljs.core$macros.fn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,sigs){
var name = (((cljs.core.first.call(null,sigs) instanceof cljs.core.Symbol))?cljs.core.first.call(null,sigs):null);
var sigs__$1 = (cljs.core.truth_(name)?cljs.core.next.call(null,sigs):sigs);
var sigs__$2 = ((cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,sigs__$1)))?(function (){var x__11114__auto__ = sigs__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})():((cljs.core.seq_QMARK_.call(null,cljs.core.first.call(null,sigs__$1)))?sigs__$1:(function(){throw (new Error(((cljs.core.seq.call(null,sigs__$1))?[cljs.core.str("Parameter declaration "),cljs.core.str(cljs.core.first.call(null,sigs__$1)),cljs.core.str(" should be a vector")].join(''):[cljs.core.str("Parameter declaration missing")].join(''))))})()));
var psig = ((function (name,sigs__$1,sigs__$2){
return (function (sig){
if(!(cljs.core.seq_QMARK_.call(null,sig))){
throw (new Error([cljs.core.str("Invalid signature "),cljs.core.str(sig),cljs.core.str(" should be a list")].join('')));
} else {
}

var vec__20892 = sig;
var seq__20893 = cljs.core.seq.call(null,vec__20892);
var first__20894 = cljs.core.first.call(null,seq__20893);
var seq__20893__$1 = cljs.core.next.call(null,seq__20893);
var params = first__20894;
var body = seq__20893__$1;
var _ = ((!(cljs.core.vector_QMARK_.call(null,params)))?(function(){throw (new Error(((cljs.core.seq_QMARK_.call(null,cljs.core.first.call(null,sigs__$2)))?[cljs.core.str("Parameter declaration "),cljs.core.str(params),cljs.core.str(" should be a vector")].join(''):[cljs.core.str("Invalid signature "),cljs.core.str(sig),cljs.core.str(" should be a list")].join(''))))})():null);
var conds = (((cljs.core.next.call(null,body)) && (cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))))?cljs.core.first.call(null,body):null);
var body__$1 = (cljs.core.truth_(conds)?cljs.core.next.call(null,body):body);
var conds__$1 = (function (){var or__10277__auto__ = conds;
if(cljs.core.truth_(or__10277__auto__)){
return or__10277__auto__;
} else {
return cljs.core.meta.call(null,params);
}
})();
var pre = new cljs.core.Keyword(null,"pre","pre",2118456869).cljs$core$IFn$_invoke$arity$1(conds__$1);
var post = new cljs.core.Keyword(null,"post","post",269697687).cljs$core$IFn$_invoke$arity$1(conds__$1);
var body__$2 = (cljs.core.truth_(post)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__11114__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"%","%",-950237169,null)),(function (){var x__11114__auto__ = ((((1) < cljs.core.count.call(null,body__$1)))?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),body__$1))):cljs.core.first.call(null,body__$1));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),cljs.core.map.call(null,((function (vec__20892,seq__20893,first__20894,seq__20893__$1,params,body,_,conds,body__$1,conds__$1,pre,post,name,sigs__$1,sigs__$2){
return (function (c){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","assert","cljs.core$macros/assert",1333198789,null)),(function (){var x__11114__auto__ = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
});})(vec__20892,seq__20893,first__20894,seq__20893__$1,params,body,_,conds,body__$1,conds__$1,pre,post,name,sigs__$1,sigs__$2))
,post),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"%","%",-950237169,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})()))):body__$1);
var body__$3 = (cljs.core.truth_(pre)?cljs.core.concat.call(null,cljs.core.map.call(null,((function (vec__20892,seq__20893,first__20894,seq__20893__$1,params,body,_,conds,body__$1,conds__$1,pre,post,body__$2,name,sigs__$1,sigs__$2){
return (function (c){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","assert","cljs.core$macros/assert",1333198789,null)),(function (){var x__11114__auto__ = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
});})(vec__20892,seq__20893,first__20894,seq__20893__$1,params,body,_,conds,body__$1,conds__$1,pre,post,body__$2,name,sigs__$1,sigs__$2))
,pre),body__$2):body__$2);
return cljs.core$macros.maybe_destructured.call(null,params,body__$3);
});})(name,sigs__$1,sigs__$2))
;
var new_sigs = cljs.core.map.call(null,psig,sigs__$2);
return cljs.core.with_meta.call(null,(cljs.core.truth_(name)?cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),name,new_sigs):cljs.core.cons.call(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new_sigs)),cljs.core.meta.call(null,_AMPERSAND_form));
});

cljs.core$macros.fn.cljs$lang$maxFixedArity = (2);

cljs.core$macros.fn.cljs$lang$applyTo = (function (seq20889){
var G__20890 = cljs.core.first.call(null,seq20889);
var seq20889__$1 = cljs.core.next.call(null,seq20889);
var G__20891 = cljs.core.first.call(null,seq20889__$1);
var seq20889__$2 = cljs.core.next.call(null,seq20889__$1);
return cljs.core$macros.fn.cljs$core$IFn$_invoke$arity$variadic(G__20890,G__20891,seq20889__$2);
});


cljs.core$macros.fn.cljs$lang$macro = true;
/**
 * same as defn, yielding non-public def
 */
cljs.core$macros.defn_ = (function cljs$core$macros$defn_(var_args){
var args__11392__auto__ = [];
var len__11385__auto___20902 = arguments.length;
var i__11386__auto___20903 = (0);
while(true){
if((i__11386__auto___20903 < len__11385__auto___20902)){
args__11392__auto__.push((arguments[i__11386__auto___20903]));

var G__20904 = (i__11386__auto___20903 + (1));
i__11386__auto___20903 = G__20904;
continue;
} else {
}
break;
}

var argseq__11393__auto__ = ((((3) < args__11392__auto__.length))?(new cljs.core.IndexedSeq(args__11392__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.defn_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__11393__auto__);
});

cljs.core$macros.defn_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,decls){
return cljs.core.list_STAR_.call(null,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null),cljs.core.with_meta.call(null,name,cljs.core.assoc.call(null,cljs.core.meta.call(null,name),new cljs.core.Keyword(null,"private","private",-558947994),true)),decls);
});

cljs.core$macros.defn_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.defn_.cljs$lang$applyTo = (function (seq20898){
var G__20899 = cljs.core.first.call(null,seq20898);
var seq20898__$1 = cljs.core.next.call(null,seq20898);
var G__20900 = cljs.core.first.call(null,seq20898__$1);
var seq20898__$2 = cljs.core.next.call(null,seq20898__$1);
var G__20901 = cljs.core.first.call(null,seq20898__$2);
var seq20898__$3 = cljs.core.next.call(null,seq20898__$2);
return cljs.core$macros.defn_.cljs$core$IFn$_invoke$arity$variadic(G__20899,G__20900,G__20901,seq20898__$3);
});


cljs.core$macros.defn_.cljs$lang$macro = true;
/**
 * bindings => binding-form test
 * 
 *   If test is true, evaluates then with binding-form bound to the value of
 *   test, if not, yields else
 */
cljs.core$macros.if_let = (function cljs$core$macros$if_let(var_args){
var args20906 = [];
var len__11385__auto___20915 = arguments.length;
var i__11386__auto___20916 = (0);
while(true){
if((i__11386__auto___20916 < len__11385__auto___20915)){
args20906.push((arguments[i__11386__auto___20916]));

var G__20917 = (i__11386__auto___20916 + (1));
i__11386__auto___20916 = G__20917;
continue;
} else {
}
break;
}

var G__20914 = args20906.length;
switch (G__20914) {
case 4:
return cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__11404__auto__ = (new cljs.core.IndexedSeq(args20906.slice((5)),(0),null));
return cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__11404__auto__);

}
});

cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,then){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-let","cljs.core$macros/if-let",1291543946,null)),(function (){var x__11114__auto__ = bindings;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = then;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__11114__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__20905__auto__","temp__20905__auto__",2080278135,null)),(function (){var x__11114__auto__ = tst;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__20905__auto__","temp__20905__auto__",2080278135,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__11114__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__11114__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__20905__auto__","temp__20905__auto__",2080278135,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = then;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = else$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
});

cljs.core$macros.if_let.cljs$lang$applyTo = (function (seq20907){
var G__20908 = cljs.core.first.call(null,seq20907);
var seq20907__$1 = cljs.core.next.call(null,seq20907);
var G__20909 = cljs.core.first.call(null,seq20907__$1);
var seq20907__$2 = cljs.core.next.call(null,seq20907__$1);
var G__20910 = cljs.core.first.call(null,seq20907__$2);
var seq20907__$3 = cljs.core.next.call(null,seq20907__$2);
var G__20911 = cljs.core.first.call(null,seq20907__$3);
var seq20907__$4 = cljs.core.next.call(null,seq20907__$3);
var G__20912 = cljs.core.first.call(null,seq20907__$4);
var seq20907__$5 = cljs.core.next.call(null,seq20907__$4);
return cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$variadic(G__20908,G__20909,G__20910,G__20911,G__20912,seq20907__$5);
});

cljs.core$macros.if_let.cljs$lang$maxFixedArity = (5);


cljs.core$macros.if_let.cljs$lang$macro = true;
/**
 * Evaluates test. If logical false, evaluates and returns then expr,
 *   otherwise else expr, if supplied, else nil.
 */
cljs.core$macros.if_not = (function cljs$core$macros$if_not(var_args){
var args20919 = [];
var len__11385__auto___20922 = arguments.length;
var i__11386__auto___20923 = (0);
while(true){
if((i__11386__auto___20923 < len__11385__auto___20922)){
args20919.push((arguments[i__11386__auto___20923]));

var G__20924 = (i__11386__auto___20923 + (1));
i__11386__auto___20923 = G__20924;
continue;
} else {
}
break;
}

var G__20921 = args20919.length;
switch (G__20921) {
case 4:
return cljs.core$macros.if_not.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core$macros.if_not.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str((args20919.length - (2)))].join('')));

}
});

cljs.core$macros.if_not.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,test,then){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__11114__auto__ = test;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = then;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
});

cljs.core$macros.if_not.cljs$core$IFn$_invoke$arity$5 = (function (_AMPERSAND_form,_AMPERSAND_env,test,then,else$){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null)),(function (){var x__11114__auto__ = test;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = then;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = else$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
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
var args__11392__auto__ = [];
var len__11385__auto___20931 = arguments.length;
var i__11386__auto___20932 = (0);
while(true){
if((i__11386__auto___20932 < len__11385__auto___20931)){
args__11392__auto__.push((arguments[i__11386__auto___20932]));

var G__20933 = (i__11386__auto___20932 + (1));
i__11386__auto___20932 = G__20933;
continue;
} else {
}
break;
}

var argseq__11393__auto__ = ((((3) < args__11392__auto__.length))?(new cljs.core.IndexedSeq(args__11392__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.letfn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__11393__auto__);
});

cljs.core$macros.letfn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,fnspecs,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"letfn*","letfn*",-110097810,null)),(function (){var x__11114__auto__ = cljs.core.vec.call(null,cljs.core.interleave.call(null,cljs.core.map.call(null,cljs.core.first,fnspecs),cljs.core.map.call(null,(function (p1__20926_SHARP_){
return cljs.core.cons.call(null,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null),p1__20926_SHARP_);
}),fnspecs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),body)));
});

cljs.core$macros.letfn.cljs$lang$maxFixedArity = (3);

cljs.core$macros.letfn.cljs$lang$applyTo = (function (seq20927){
var G__20928 = cljs.core.first.call(null,seq20927);
var seq20927__$1 = cljs.core.next.call(null,seq20927);
var G__20929 = cljs.core.first.call(null,seq20927__$1);
var seq20927__$2 = cljs.core.next.call(null,seq20927__$1);
var G__20930 = cljs.core.first.call(null,seq20927__$2);
var seq20927__$3 = cljs.core.next.call(null,seq20927__$2);
return cljs.core$macros.letfn.cljs$core$IFn$_invoke$arity$variadic(G__20928,G__20929,G__20930,seq20927__$3);
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
var args__11392__auto__ = [];
var len__11385__auto___20938 = arguments.length;
var i__11386__auto___20939 = (0);
while(true){
if((i__11386__auto___20939 < len__11385__auto___20938)){
args__11392__auto__.push((arguments[i__11386__auto___20939]));

var G__20940 = (i__11386__auto___20939 + (1));
i__11386__auto___20939 = G__20940;
continue;
} else {
}
break;
}

var argseq__11393__auto__ = ((((3) < args__11392__auto__.length))?(new cljs.core.IndexedSeq(args__11392__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.memfn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__11393__auto__);
});

cljs.core$macros.memfn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,args){
var t = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"target"),cljs.core.meta.call(null,name));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__11114__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__11114__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),args))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__11114__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__11114__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),args)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
});

cljs.core$macros.memfn.cljs$lang$maxFixedArity = (3);

cljs.core$macros.memfn.cljs$lang$applyTo = (function (seq20934){
var G__20935 = cljs.core.first.call(null,seq20934);
var seq20934__$1 = cljs.core.next.call(null,seq20934);
var G__20936 = cljs.core.first.call(null,seq20934__$1);
var seq20934__$2 = cljs.core.next.call(null,seq20934__$1);
var G__20937 = cljs.core.first.call(null,seq20934__$2);
var seq20934__$3 = cljs.core.next.call(null,seq20934__$2);
return cljs.core$macros.memfn.cljs$core$IFn$_invoke$arity$variadic(G__20935,G__20936,G__20937,seq20934__$3);
});


cljs.core$macros.memfn.cljs$lang$macro = true;
/**
 * Evaluates test. If logical true, evaluates body in an implicit do.
 */
cljs.core$macros.when = (function cljs$core$macros$when(var_args){
var args__11392__auto__ = [];
var len__11385__auto___20945 = arguments.length;
var i__11386__auto___20946 = (0);
while(true){
if((i__11386__auto___20946 < len__11385__auto___20945)){
args__11392__auto__.push((arguments[i__11386__auto___20946]));

var G__20947 = (i__11386__auto___20946 + (1));
i__11386__auto___20946 = G__20947;
continue;
} else {
}
break;
}

var argseq__11393__auto__ = ((((3) < args__11392__auto__.length))?(new cljs.core.IndexedSeq(args__11392__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__11393__auto__);
});

cljs.core$macros.when.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,test,body){
return cljs.core._conj.call(null,(function (){var x__11114__auto__ = test;
return cljs.core._conj.call(null,(function (){var x__11114__auto____$1 = cljs.core.cons.call(null,new cljs.core.Symbol(null,"do","do",1686842252,null),body);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto____$1);
})(),x__11114__auto__);
})(),new cljs.core.Symbol(null,"if","if",1181717262,null));
});

cljs.core$macros.when.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when.cljs$lang$applyTo = (function (seq20941){
var G__20942 = cljs.core.first.call(null,seq20941);
var seq20941__$1 = cljs.core.next.call(null,seq20941);
var G__20943 = cljs.core.first.call(null,seq20941__$1);
var seq20941__$2 = cljs.core.next.call(null,seq20941__$1);
var G__20944 = cljs.core.first.call(null,seq20941__$2);
var seq20941__$3 = cljs.core.next.call(null,seq20941__$2);
return cljs.core$macros.when.cljs$core$IFn$_invoke$arity$variadic(G__20942,G__20943,G__20944,seq20941__$3);
});


cljs.core$macros.when.cljs$lang$macro = true;
/**
 * bindings => x xs
 * 
 *   Roughly the same as (when (seq xs) (let [x (first xs)] body)) but xs is evaluated only once
 */
cljs.core$macros.when_first = (function cljs$core$macros$when_first(var_args){
var args__11392__auto__ = [];
var len__11385__auto___20956 = arguments.length;
var i__11386__auto___20957 = (0);
while(true){
if((i__11386__auto___20957 < len__11385__auto___20956)){
args__11392__auto__.push((arguments[i__11386__auto___20957]));

var G__20958 = (i__11386__auto___20957 + (1));
i__11386__auto___20957 = G__20958;
continue;
} else {
}
break;
}

var argseq__11393__auto__ = ((((3) < args__11392__auto__.length))?(new cljs.core.IndexedSeq(args__11392__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when_first.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__11393__auto__);
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


var vec__20953 = bindings;
var x = cljs.core.nth.call(null,vec__20953,(0),null);
var xs = cljs.core.nth.call(null,vec__20953,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-let","cljs.core$macros/when-let",-2004472648,null)),(function (){var x__11114__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"xs__20948__auto__","xs__20948__auto__",765212373,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__11114__auto__ = xs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__11114__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__11114__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"xs__20948__auto__","xs__20948__auto__",765212373,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
});

cljs.core$macros.when_first.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when_first.cljs$lang$applyTo = (function (seq20949){
var G__20950 = cljs.core.first.call(null,seq20949);
var seq20949__$1 = cljs.core.next.call(null,seq20949);
var G__20951 = cljs.core.first.call(null,seq20949__$1);
var seq20949__$2 = cljs.core.next.call(null,seq20949__$1);
var G__20952 = cljs.core.first.call(null,seq20949__$2);
var seq20949__$3 = cljs.core.next.call(null,seq20949__$2);
return cljs.core$macros.when_first.cljs$core$IFn$_invoke$arity$variadic(G__20950,G__20951,G__20952,seq20949__$3);
});


cljs.core$macros.when_first.cljs$lang$macro = true;
/**
 * bindings => binding-form test
 * 
 *   When test is true, evaluates body with binding-form bound to the value of test
 */
cljs.core$macros.when_let = (function cljs$core$macros$when_let(var_args){
var args__11392__auto__ = [];
var len__11385__auto___20964 = arguments.length;
var i__11386__auto___20965 = (0);
while(true){
if((i__11386__auto___20965 < len__11385__auto___20964)){
args__11392__auto__.push((arguments[i__11386__auto___20965]));

var G__20966 = (i__11386__auto___20965 + (1));
i__11386__auto___20965 = G__20966;
continue;
} else {
}
break;
}

var argseq__11393__auto__ = ((((3) < args__11392__auto__.length))?(new cljs.core.IndexedSeq(args__11392__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when_let.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__11393__auto__);
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__11114__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__20959__auto__","temp__20959__auto__",1121234529,null)),(function (){var x__11114__auto__ = tst;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__20959__auto__","temp__20959__auto__",1121234529,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__11114__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__11114__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__20959__auto__","temp__20959__auto__",1121234529,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
});

cljs.core$macros.when_let.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when_let.cljs$lang$applyTo = (function (seq20960){
var G__20961 = cljs.core.first.call(null,seq20960);
var seq20960__$1 = cljs.core.next.call(null,seq20960);
var G__20962 = cljs.core.first.call(null,seq20960__$1);
var seq20960__$2 = cljs.core.next.call(null,seq20960__$1);
var G__20963 = cljs.core.first.call(null,seq20960__$2);
var seq20960__$3 = cljs.core.next.call(null,seq20960__$2);
return cljs.core$macros.when_let.cljs$core$IFn$_invoke$arity$variadic(G__20961,G__20962,G__20963,seq20960__$3);
});


cljs.core$macros.when_let.cljs$lang$macro = true;
/**
 * Evaluates test. If logical false, evaluates body in an implicit do.
 */
cljs.core$macros.when_not = (function cljs$core$macros$when_not(var_args){
var args__11392__auto__ = [];
var len__11385__auto___20971 = arguments.length;
var i__11386__auto___20972 = (0);
while(true){
if((i__11386__auto___20972 < len__11385__auto___20971)){
args__11392__auto__.push((arguments[i__11386__auto___20972]));

var G__20973 = (i__11386__auto___20972 + (1));
i__11386__auto___20972 = G__20973;
continue;
} else {
}
break;
}

var argseq__11393__auto__ = ((((3) < args__11392__auto__.length))?(new cljs.core.IndexedSeq(args__11392__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when_not.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__11393__auto__);
});

cljs.core$macros.when_not.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,test,body){
return cljs.core._conj.call(null,(function (){var x__11114__auto__ = test;
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__11114__auto____$1 = cljs.core.cons.call(null,new cljs.core.Symbol(null,"do","do",1686842252,null),body);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto____$1);
})(),null),x__11114__auto__);
})(),new cljs.core.Symbol(null,"if","if",1181717262,null));
});

cljs.core$macros.when_not.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when_not.cljs$lang$applyTo = (function (seq20967){
var G__20968 = cljs.core.first.call(null,seq20967);
var seq20967__$1 = cljs.core.next.call(null,seq20967);
var G__20969 = cljs.core.first.call(null,seq20967__$1);
var seq20967__$2 = cljs.core.next.call(null,seq20967__$1);
var G__20970 = cljs.core.first.call(null,seq20967__$2);
var seq20967__$3 = cljs.core.next.call(null,seq20967__$2);
return cljs.core$macros.when_not.cljs$core$IFn$_invoke$arity$variadic(G__20968,G__20969,G__20970,seq20967__$3);
});


cljs.core$macros.when_not.cljs$lang$macro = true;
/**
 * Repeatedly executes body while test expression is true. Presumes
 *   some side-effect will cause test to become false/nil. Returns nil
 */
cljs.core$macros.while$ = (function cljs$core$macros$while(var_args){
var args__11392__auto__ = [];
var len__11385__auto___20978 = arguments.length;
var i__11386__auto___20979 = (0);
while(true){
if((i__11386__auto___20979 < len__11385__auto___20978)){
args__11392__auto__.push((arguments[i__11386__auto___20979]));

var G__20980 = (i__11386__auto___20979 + (1));
i__11386__auto___20979 = G__20980;
continue;
} else {
}
break;
}

var argseq__11393__auto__ = ((((3) < args__11392__auto__.length))?(new cljs.core.IndexedSeq(args__11392__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.while$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__11393__auto__);
});

cljs.core$macros.while$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,test,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__11114__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__11114__auto__ = test;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),body,(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
});

cljs.core$macros.while$.cljs$lang$maxFixedArity = (3);

cljs.core$macros.while$.cljs$lang$applyTo = (function (seq20974){
var G__20975 = cljs.core.first.call(null,seq20974);
var seq20974__$1 = cljs.core.next.call(null,seq20974);
var G__20976 = cljs.core.first.call(null,seq20974__$1);
var seq20974__$2 = cljs.core.next.call(null,seq20974__$1);
var G__20977 = cljs.core.first.call(null,seq20974__$2);
var seq20974__$3 = cljs.core.next.call(null,seq20974__$2);
return cljs.core$macros.while$.cljs$core$IFn$_invoke$arity$variadic(G__20975,G__20976,G__20977,seq20974__$3);
});


cljs.core$macros.while$.cljs$lang$macro = true;
/**
 * Takes an expression and a set of test/form pairs. Threads expr (via ->)
 *   through each form for which the corresponding test
 *   expression is true. Note that, unlike cond branching, cond-> threading does
 *   not short circuit after the first true test expression.
 */
cljs.core$macros.cond__GT_ = (function cljs$core$macros$cond__GT_(var_args){
var args__11392__auto__ = [];
var len__11385__auto___20989 = arguments.length;
var i__11386__auto___20990 = (0);
while(true){
if((i__11386__auto___20990 < len__11385__auto___20989)){
args__11392__auto__.push((arguments[i__11386__auto___20990]));

var G__20991 = (i__11386__auto___20990 + (1));
i__11386__auto___20990 = G__20991;
continue;
} else {
}
break;
}

var argseq__11393__auto__ = ((((3) < args__11392__auto__.length))?(new cljs.core.IndexedSeq(args__11392__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.cond__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__11393__auto__);
});

cljs.core$macros.cond__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,clauses){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,clauses))){
} else {
throw (new Error("Assert failed: (even? (count clauses))"));
}

var g = cljs.core.gensym.call(null);
var pstep = ((function (g){
return (function (p__20985){
var vec__20986 = p__20985;
var test = cljs.core.nth.call(null,vec__20986,(0),null);
var step = cljs.core.nth.call(null,vec__20986,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__11114__auto__ = test;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","->","cljs.core$macros/->",-1519455206,null)),(function (){var x__11114__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = step;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
});})(g))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__11114__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__11114__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),cljs.core.interleave.call(null,cljs.core.repeat.call(null,g),cljs.core.map.call(null,pstep,cljs.core.partition.call(null,(2),clauses)))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
});

cljs.core$macros.cond__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.cond__GT_.cljs$lang$applyTo = (function (seq20981){
var G__20982 = cljs.core.first.call(null,seq20981);
var seq20981__$1 = cljs.core.next.call(null,seq20981);
var G__20983 = cljs.core.first.call(null,seq20981__$1);
var seq20981__$2 = cljs.core.next.call(null,seq20981__$1);
var G__20984 = cljs.core.first.call(null,seq20981__$2);
var seq20981__$3 = cljs.core.next.call(null,seq20981__$2);
return cljs.core$macros.cond__GT_.cljs$core$IFn$_invoke$arity$variadic(G__20982,G__20983,G__20984,seq20981__$3);
});


cljs.core$macros.cond__GT_.cljs$lang$macro = true;
/**
 * Takes an expression and a set of test/form pairs. Threads expr (via ->>)
 *   through each form for which the corresponding test expression
 *   is true.  Note that, unlike cond branching, cond->> threading does not short circuit
 *   after the first true test expression.
 */
cljs.core$macros.cond__GT__GT_ = (function cljs$core$macros$cond__GT__GT_(var_args){
var args__11392__auto__ = [];
var len__11385__auto___21000 = arguments.length;
var i__11386__auto___21001 = (0);
while(true){
if((i__11386__auto___21001 < len__11385__auto___21000)){
args__11392__auto__.push((arguments[i__11386__auto___21001]));

var G__21002 = (i__11386__auto___21001 + (1));
i__11386__auto___21001 = G__21002;
continue;
} else {
}
break;
}

var argseq__11393__auto__ = ((((3) < args__11392__auto__.length))?(new cljs.core.IndexedSeq(args__11392__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.cond__GT__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__11393__auto__);
});

cljs.core$macros.cond__GT__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,clauses){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,clauses))){
} else {
throw (new Error("Assert failed: (even? (count clauses))"));
}

var g = cljs.core.gensym.call(null);
var pstep = ((function (g){
return (function (p__20996){
var vec__20997 = p__20996;
var test = cljs.core.nth.call(null,vec__20997,(0),null);
var step = cljs.core.nth.call(null,vec__20997,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__11114__auto__ = test;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","->>","cljs.core$macros/->>",-1353108561,null)),(function (){var x__11114__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = step;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
});})(g))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__11114__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__11114__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),cljs.core.interleave.call(null,cljs.core.repeat.call(null,g),cljs.core.map.call(null,pstep,cljs.core.partition.call(null,(2),clauses)))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
});

cljs.core$macros.cond__GT__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.cond__GT__GT_.cljs$lang$applyTo = (function (seq20992){
var G__20993 = cljs.core.first.call(null,seq20992);
var seq20992__$1 = cljs.core.next.call(null,seq20992);
var G__20994 = cljs.core.first.call(null,seq20992__$1);
var seq20992__$2 = cljs.core.next.call(null,seq20992__$1);
var G__20995 = cljs.core.first.call(null,seq20992__$2);
var seq20992__$3 = cljs.core.next.call(null,seq20992__$2);
return cljs.core$macros.cond__GT__GT_.cljs$core$IFn$_invoke$arity$variadic(G__20993,G__20994,G__20995,seq20992__$3);
});


cljs.core$macros.cond__GT__GT_.cljs$lang$macro = true;
/**
 * Binds name to expr, evaluates the first form in the lexical context
 *   of that binding, then binds name to that result, repeating for each
 *   successive form, returning the result of the last form.
 */
cljs.core$macros.as__GT_ = (function cljs$core$macros$as__GT_(var_args){
var args__11392__auto__ = [];
var len__11385__auto___21008 = arguments.length;
var i__11386__auto___21009 = (0);
while(true){
if((i__11386__auto___21009 < len__11385__auto___21008)){
args__11392__auto__.push((arguments[i__11386__auto___21009]));

var G__21010 = (i__11386__auto___21009 + (1));
i__11386__auto___21009 = G__21010;
continue;
} else {
}
break;
}

var argseq__11393__auto__ = ((((4) < args__11392__auto__.length))?(new cljs.core.IndexedSeq(args__11392__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.as__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__11393__auto__);
});

cljs.core$macros.as__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,name,forms){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__11114__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__11114__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),cljs.core.interleave.call(null,cljs.core.repeat.call(null,name),forms)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
});

cljs.core$macros.as__GT_.cljs$lang$maxFixedArity = (4);

cljs.core$macros.as__GT_.cljs$lang$applyTo = (function (seq21003){
var G__21004 = cljs.core.first.call(null,seq21003);
var seq21003__$1 = cljs.core.next.call(null,seq21003);
var G__21005 = cljs.core.first.call(null,seq21003__$1);
var seq21003__$2 = cljs.core.next.call(null,seq21003__$1);
var G__21006 = cljs.core.first.call(null,seq21003__$2);
var seq21003__$3 = cljs.core.next.call(null,seq21003__$2);
var G__21007 = cljs.core.first.call(null,seq21003__$3);
var seq21003__$4 = cljs.core.next.call(null,seq21003__$3);
return cljs.core$macros.as__GT_.cljs$core$IFn$_invoke$arity$variadic(G__21004,G__21005,G__21006,G__21007,seq21003__$4);
});


cljs.core$macros.as__GT_.cljs$lang$macro = true;
/**
 * When expr is not nil, threads it into the first form (via ->),
 *   and when that result is not nil, through the next etc
 */
cljs.core$macros.some__GT_ = (function cljs$core$macros$some__GT_(var_args){
var args__11392__auto__ = [];
var len__11385__auto___21015 = arguments.length;
var i__11386__auto___21016 = (0);
while(true){
if((i__11386__auto___21016 < len__11385__auto___21015)){
args__11392__auto__.push((arguments[i__11386__auto___21016]));

var G__21017 = (i__11386__auto___21016 + (1));
i__11386__auto___21016 = G__21017;
continue;
} else {
}
break;
}

var argseq__11393__auto__ = ((((3) < args__11392__auto__.length))?(new cljs.core.IndexedSeq(args__11392__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.some__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__11393__auto__);
});

cljs.core$macros.some__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,forms){
var g = cljs.core.gensym.call(null);
var pstep = ((function (g){
return (function (step){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__11114__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","->","cljs.core$macros/->",-1519455206,null)),(function (){var x__11114__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = step;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
});})(g))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__11114__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__11114__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),cljs.core.interleave.call(null,cljs.core.repeat.call(null,g),cljs.core.map.call(null,pstep,forms))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
});

cljs.core$macros.some__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.some__GT_.cljs$lang$applyTo = (function (seq21011){
var G__21012 = cljs.core.first.call(null,seq21011);
var seq21011__$1 = cljs.core.next.call(null,seq21011);
var G__21013 = cljs.core.first.call(null,seq21011__$1);
var seq21011__$2 = cljs.core.next.call(null,seq21011__$1);
var G__21014 = cljs.core.first.call(null,seq21011__$2);
var seq21011__$3 = cljs.core.next.call(null,seq21011__$2);
return cljs.core$macros.some__GT_.cljs$core$IFn$_invoke$arity$variadic(G__21012,G__21013,G__21014,seq21011__$3);
});


cljs.core$macros.some__GT_.cljs$lang$macro = true;
/**
 * When expr is not nil, threads it into the first form (via ->>),
 *   and when that result is not nil, through the next etc
 */
cljs.core$macros.some__GT__GT_ = (function cljs$core$macros$some__GT__GT_(var_args){
var args__11392__auto__ = [];
var len__11385__auto___21022 = arguments.length;
var i__11386__auto___21023 = (0);
while(true){
if((i__11386__auto___21023 < len__11385__auto___21022)){
args__11392__auto__.push((arguments[i__11386__auto___21023]));

var G__21024 = (i__11386__auto___21023 + (1));
i__11386__auto___21023 = G__21024;
continue;
} else {
}
break;
}

var argseq__11393__auto__ = ((((3) < args__11392__auto__.length))?(new cljs.core.IndexedSeq(args__11392__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.some__GT__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__11393__auto__);
});

cljs.core$macros.some__GT__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,forms){
var g = cljs.core.gensym.call(null);
var pstep = ((function (g){
return (function (step){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__11114__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","->>","cljs.core$macros/->>",-1353108561,null)),(function (){var x__11114__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = step;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
});})(g))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__11114__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__11114__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),cljs.core.interleave.call(null,cljs.core.repeat.call(null,g),cljs.core.map.call(null,pstep,forms))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
});

cljs.core$macros.some__GT__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.some__GT__GT_.cljs$lang$applyTo = (function (seq21018){
var G__21019 = cljs.core.first.call(null,seq21018);
var seq21018__$1 = cljs.core.next.call(null,seq21018);
var G__21020 = cljs.core.first.call(null,seq21018__$1);
var seq21018__$2 = cljs.core.next.call(null,seq21018__$1);
var G__21021 = cljs.core.first.call(null,seq21018__$2);
var seq21018__$3 = cljs.core.next.call(null,seq21018__$2);
return cljs.core$macros.some__GT__GT_.cljs$core$IFn$_invoke$arity$variadic(G__21019,G__21020,G__21021,seq21018__$3);
});


cljs.core$macros.some__GT__GT_.cljs$lang$macro = true;
/**
 * bindings => binding-form test
 * 
 *    If test is not nil, evaluates then with binding-form bound to the
 *    value of test, if not, yields else
 */
cljs.core$macros.if_some = (function cljs$core$macros$if_some(var_args){
var args21026 = [];
var len__11385__auto___21035 = arguments.length;
var i__11386__auto___21036 = (0);
while(true){
if((i__11386__auto___21036 < len__11385__auto___21035)){
args21026.push((arguments[i__11386__auto___21036]));

var G__21037 = (i__11386__auto___21036 + (1));
i__11386__auto___21036 = G__21037;
continue;
} else {
}
break;
}

var G__21034 = args21026.length;
switch (G__21034) {
case 4:
return cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__11404__auto__ = (new cljs.core.IndexedSeq(args21026.slice((5)),(0),null));
return cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__11404__auto__);

}
});

cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,then){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-some","cljs.core$macros/if-some",1405341529,null)),(function (){var x__11114__auto__ = bindings;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = then;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__11114__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__21025__auto__","temp__21025__auto__",-1956152466,null)),(function (){var x__11114__auto__ = tst;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__21025__auto__","temp__21025__auto__",-1956152466,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = else$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__11114__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__11114__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__21025__auto__","temp__21025__auto__",-1956152466,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = then;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
});

cljs.core$macros.if_some.cljs$lang$applyTo = (function (seq21027){
var G__21028 = cljs.core.first.call(null,seq21027);
var seq21027__$1 = cljs.core.next.call(null,seq21027);
var G__21029 = cljs.core.first.call(null,seq21027__$1);
var seq21027__$2 = cljs.core.next.call(null,seq21027__$1);
var G__21030 = cljs.core.first.call(null,seq21027__$2);
var seq21027__$3 = cljs.core.next.call(null,seq21027__$2);
var G__21031 = cljs.core.first.call(null,seq21027__$3);
var seq21027__$4 = cljs.core.next.call(null,seq21027__$3);
var G__21032 = cljs.core.first.call(null,seq21027__$4);
var seq21027__$5 = cljs.core.next.call(null,seq21027__$4);
return cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$variadic(G__21028,G__21029,G__21030,G__21031,G__21032,seq21027__$5);
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
var args__11392__auto__ = [];
var len__11385__auto___21044 = arguments.length;
var i__11386__auto___21045 = (0);
while(true){
if((i__11386__auto___21045 < len__11385__auto___21044)){
args__11392__auto__.push((arguments[i__11386__auto___21045]));

var G__21046 = (i__11386__auto___21045 + (1));
i__11386__auto___21045 = G__21046;
continue;
} else {
}
break;
}

var argseq__11393__auto__ = ((((3) < args__11392__auto__.length))?(new cljs.core.IndexedSeq(args__11392__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__11393__auto__);
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__11114__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__21039__auto__","temp__21039__auto__",-1791912988,null)),(function (){var x__11114__auto__ = tst;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__21039__auto__","temp__21039__auto__",-1791912988,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__11114__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__11114__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__21039__auto__","temp__21039__auto__",-1791912988,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
});

cljs.core$macros.when_some.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when_some.cljs$lang$applyTo = (function (seq21040){
var G__21041 = cljs.core.first.call(null,seq21040);
var seq21040__$1 = cljs.core.next.call(null,seq21040);
var G__21042 = cljs.core.first.call(null,seq21040__$1);
var seq21040__$2 = cljs.core.next.call(null,seq21040__$1);
var G__21043 = cljs.core.first.call(null,seq21040__$2);
var seq21040__$3 = cljs.core.next.call(null,seq21040__$2);
return cljs.core$macros.when_some.cljs$core$IFn$_invoke$arity$variadic(G__21041,G__21042,G__21043,seq21040__$3);
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

var argdecls = cljs.core.map.call(null,(function (p1__21047_SHARP_){
if(cljs.core.seq_QMARK_.call(null,p1__21047_SHARP_)){
return cljs.core.first.call(null,p1__21047_SHARP_);
} else {
throw (new Error(((cljs.core.seq_QMARK_.call(null,cljs.core.first.call(null,fdecl)))?[cljs.core.str("Invalid signature \""),cljs.core.str(p1__21047_SHARP_),cljs.core.str("\" should be a list")].join(''):[cljs.core.str("Parameter declaration \""),cljs.core.str(p1__21047_SHARP_),cljs.core.str("\" should be a vector")].join(''))));
}
}),fdecl);
var bad_args = cljs.core.seq.call(null,cljs.core.remove.call(null,((function (argdecls){
return (function (p1__21048_SHARP_){
return cljs.core.vector_QMARK_.call(null,p1__21048_SHARP_);
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
var G__21049 = cljs.core.conj.call(null,ret,asig.call(null,cljs.core.first.call(null,fdecls)));
var G__21050 = cljs.core.next.call(null,fdecls);
ret = G__21049;
fdecls = G__21050;
continue;
} else {
return cljs.core.seq.call(null,ret);
}
break;
}
} else {
var x__11114__auto__ = asig.call(null,fdecl);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
}
});
/**
 * defs name to have the root value of init iff the named var has no root value,
 *   else init is unevaluated
 */
cljs.core$macros.defonce = (function cljs$core$macros$defonce(_AMPERSAND_form,_AMPERSAND_env,x,init){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-not","cljs.core$macros/when-not",-764302244,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","exists?","cljs.core$macros/exists?",-1828590389,null)),(function (){var x__11114__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"def","def",597100991,null)),(function (){var x__11114__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = init;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
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
return cljs.core.conj.call(null,ret,gseq,cljs.core._conj.call(null,(function (){var x__11114__auto__ = gvec;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
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
var G__21060 = cljs$core$macros$destructure_$_pb.call(null,ret,cljs.core.second.call(null,bs),gseq);
var G__21061 = n;
var G__21062 = cljs.core.nnext.call(null,bs);
var G__21063 = true;
ret = G__21060;
n = G__21061;
bs = G__21062;
seen_rest_QMARK_ = G__21063;
continue;
} else {
if(cljs.core._EQ_.call(null,firstb,new cljs.core.Keyword(null,"as","as",1148689641))){
return cljs$core$macros$destructure_$_pb.call(null,ret,cljs.core.second.call(null,bs),gvec);
} else {
if(seen_rest_QMARK_){
throw (new Error("Unsupported binding form, only :as can follow & parameter"));
} else {
var G__21064 = cljs$core$macros$destructure_$_pb.call(null,(cljs.core.truth_(has_rest)?cljs.core.conj.call(null,ret,gfirst,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null)),(function (){var x__11114__auto__ = gseq;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})()))),gseq,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","next","cljs.core/next",-1291438473,null)),(function (){var x__11114__auto__ = gseq;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())))):ret),firstb,(cljs.core.truth_(has_rest)?gfirst:cljs.core._conj.call(null,(function (){var x__11114__auto__ = gvec;
return cljs.core._conj.call(null,(function (){var x__11114__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,null),x__11114__auto____$1);
})(),x__11114__auto__);
})(),new cljs.core.Symbol("cljs.core","nth","cljs.core/nth",1961052085,null))));
var G__21065 = (n + (1));
var G__21066 = cljs.core.next.call(null,bs);
var G__21067 = seen_rest_QMARK_;
ret = G__21064;
n = G__21065;
bs = G__21066;
seen_rest_QMARK_ = G__21067;
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
.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,bvec__$1,gmap),v__$1),gmap),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","implements?","cljs.core$macros/implements?",-94762250,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","ISeq","cljs.core/ISeq",230133392,null)),(function (){var x__11114__auto__ = gmap;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","hash-map","cljs.core/hash-map",303385767,null)),(function (){var x__11114__auto__ = gmap;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = gmap;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())))));
var bes = (function (){var transforms = cljs.core.reduce.call(null,((function (ret,gmap,defaults,pvec,bents){
return (function (transforms,mk){
if((mk instanceof cljs.core.Keyword)){
var mkns = cljs.core.namespace.call(null,mk);
var mkn = cljs.core.name.call(null,mk);
if(cljs.core._EQ_.call(null,mkn,"keys")){
return cljs.core.assoc.call(null,transforms,mk,((function (mkns,mkn,ret,gmap,defaults,pvec,bents){
return (function (p1__21051_SHARP_){
return cljs.core.keyword.call(null,(function (){var or__10277__auto__ = mkns;
if(cljs.core.truth_(or__10277__auto__)){
return or__10277__auto__;
} else {
return cljs.core.namespace.call(null,p1__21051_SHARP_);
}
})(),cljs.core.name.call(null,p1__21051_SHARP_));
});})(mkns,mkn,ret,gmap,defaults,pvec,bents))
);
} else {
if(cljs.core._EQ_.call(null,mkn,"syms")){
return cljs.core.assoc.call(null,transforms,mk,((function (mkns,mkn,ret,gmap,defaults,pvec,bents){
return (function (p1__21052_SHARP_){
return cljs.core._conj.call(null,(function (){var x__11114__auto__ = cljs.core.symbol.call(null,(function (){var or__10277__auto__ = mkns;
if(cljs.core.truth_(or__10277__auto__)){
return or__10277__auto__;
} else {
return cljs.core.namespace.call(null,p1__21052_SHARP_);
}
})(),cljs.core.name.call(null,p1__21052_SHARP_));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
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
return (function (p1__21053_SHARP_,p2__21054_SHARP_){
return cljs.core.assoc.call(null,p1__21053_SHARP_,p2__21054_SHARP_,cljs.core.val.call(null,entry).call(null,p2__21054_SHARP_));
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
var bv = ((cljs.core.contains_QMARK_.call(null,defaults,local))?cljs.core._conj.call(null,(function (){var x__11114__auto__ = gmap;
return cljs.core._conj.call(null,(function (){var x__11114__auto____$1 = bk;
return cljs.core._conj.call(null,(function (){var x__11114__auto____$2 = defaults.call(null,local);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto____$2);
})(),x__11114__auto____$1);
})(),x__11114__auto__);
})(),new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null)):cljs.core._conj.call(null,(function (){var x__11114__auto__ = gmap;
return cljs.core._conj.call(null,(function (){var x__11114__auto____$1 = bk;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto____$1);
})(),x__11114__auto__);
})(),new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null)));
var G__21068 = ((((bb instanceof cljs.core.Keyword)) || ((bb instanceof cljs.core.Symbol)))?cljs.core.conj.call(null,ret,local,bv):cljs$core$macros$destructure_$_pb.call(null,ret,bb,bv));
var G__21069 = cljs.core.next.call(null,bes);
ret = G__21068;
bes = G__21069;
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
return (function (p1__21055_SHARP_){
return (cljs.core.first.call(null,p1__21055_SHARP_) instanceof cljs.core.Keyword);
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","declare","cljs.core$macros/declare",1172642527,null)),(function (){var x__11114__auto__ = cljs.core.symbol.call(null,sym);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),(function (){var x__11114__auto__ = [cljs.core.str("/** @define {"),cljs.core.str(type),cljs.core.str("} */")].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog","define","goog/define",-352722538,null)),(function (){var x__11114__auto__ = defname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = default$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
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
var args__11392__auto__ = [];
var len__11385__auto___21074 = arguments.length;
var i__11386__auto___21075 = (0);
while(true){
if((i__11386__auto___21075 < len__11385__auto___21074)){
args__11392__auto__.push((arguments[i__11386__auto___21075]));

var G__21076 = (i__11386__auto___21075 + (1));
i__11386__auto___21075 = G__21076;
continue;
} else {
}
break;
}

var argseq__11393__auto__ = ((((3) < args__11392__auto__.length))?(new cljs.core.IndexedSeq(args__11392__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.let$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__11393__auto__);
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


return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"let*","let*",1920721458,null)),(function (){var x__11114__auto__ = cljs.core$macros.destructure.call(null,bindings);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),body)));
});

cljs.core$macros.let$.cljs$lang$maxFixedArity = (3);

cljs.core$macros.let$.cljs$lang$applyTo = (function (seq21070){
var G__21071 = cljs.core.first.call(null,seq21070);
var seq21070__$1 = cljs.core.next.call(null,seq21070);
var G__21072 = cljs.core.first.call(null,seq21070__$1);
var seq21070__$2 = cljs.core.next.call(null,seq21070__$1);
var G__21073 = cljs.core.first.call(null,seq21070__$2);
var seq21070__$3 = cljs.core.next.call(null,seq21070__$2);
return cljs.core$macros.let$.cljs$core$IFn$_invoke$arity$variadic(G__21071,G__21072,G__21073,seq21070__$3);
});


cljs.core$macros.let$.cljs$lang$macro = true;
/**
 * Evaluates the exprs in a lexical context in which the symbols in
 *   the binding-forms are bound to their respective init-exprs or parts
 *   therein. Acts as a recur target.
 */
cljs.core$macros.loop = (function cljs$core$macros$loop(var_args){
var args__11392__auto__ = [];
var len__11385__auto___21085 = arguments.length;
var i__11386__auto___21086 = (0);
while(true){
if((i__11386__auto___21086 < len__11385__auto___21085)){
args__11392__auto__.push((arguments[i__11386__auto___21086]));

var G__21087 = (i__11386__auto___21086 + (1));
i__11386__auto___21086 = G__21087;
continue;
} else {
}
break;
}

var argseq__11393__auto__ = ((((3) < args__11392__auto__.length))?(new cljs.core.IndexedSeq(args__11392__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.loop.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__11393__auto__);
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"loop*","loop*",615029416,null)),(function (){var x__11114__auto__ = bindings;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
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
return (function (ret,p__21081){
var vec__21082 = p__21081;
var b = cljs.core.nth.call(null,vec__21082,(0),null);
var v = cljs.core.nth.call(null,vec__21082,(1),null);
var g = cljs.core.nth.call(null,vec__21082,(2),null);
if((b instanceof cljs.core.Symbol)){
return cljs.core.conj.call(null,ret,g,v);
} else {
return cljs.core.conj.call(null,ret,g,v,b,g);
}
});})(vs,bs,gs,db))
,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,cljs.core.vector,bs,vs,gs));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__11114__auto__ = bfs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"loop*","loop*",615029416,null)),(function (){var x__11114__auto__ = cljs.core.vec.call(null,cljs.core.interleave.call(null,gs,gs));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__11114__auto__ = cljs.core.vec.call(null,cljs.core.interleave.call(null,bs,gs));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
}
});

cljs.core$macros.loop.cljs$lang$maxFixedArity = (3);

cljs.core$macros.loop.cljs$lang$applyTo = (function (seq21077){
var G__21078 = cljs.core.first.call(null,seq21077);
var seq21077__$1 = cljs.core.next.call(null,seq21077);
var G__21079 = cljs.core.first.call(null,seq21077__$1);
var seq21077__$2 = cljs.core.next.call(null,seq21077__$1);
var G__21080 = cljs.core.first.call(null,seq21077__$2);
var seq21077__$3 = cljs.core.next.call(null,seq21077__$2);
return cljs.core$macros.loop.cljs$core$IFn$_invoke$arity$variadic(G__21078,G__21079,G__21080,seq21077__$3);
});


cljs.core$macros.loop.cljs$lang$macro = true;
/**
 * protocol fqn -> [partition number, bit]
 */
cljs.core$macros.fast_path_protocols = cljs.core.zipmap.call(null,cljs.core.map.call(null,(function (p1__21088_SHARP_){
return cljs.core.symbol.call(null,"cljs.core",[cljs.core.str(p1__21088_SHARP_)].join(''));
}),cljs.core.PersistentVector.fromArray([new cljs.core.Symbol(null,"IFn","IFn",-244881638,null),new cljs.core.Symbol(null,"ICounted","ICounted",-1705786327,null),new cljs.core.Symbol(null,"IEmptyableCollection","IEmptyableCollection",1477271438,null),new cljs.core.Symbol(null,"ICollection","ICollection",-686709190,null),new cljs.core.Symbol(null,"IIndexed","IIndexed",-574812826,null),new cljs.core.Symbol(null,"ASeq","ASeq",266390234,null),new cljs.core.Symbol(null,"ISeq","ISeq",1517365813,null),new cljs.core.Symbol(null,"INext","INext",562211849,null),new cljs.core.Symbol(null,"ILookup","ILookup",784647298,null),new cljs.core.Symbol(null,"IAssociative","IAssociative",-1306431882,null),new cljs.core.Symbol(null,"IMap","IMap",992876629,null),new cljs.core.Symbol(null,"IMapEntry","IMapEntry",-943754199,null),new cljs.core.Symbol(null,"ISet","ISet",-1398072657,null),new cljs.core.Symbol(null,"IStack","IStack",1136769449,null),new cljs.core.Symbol(null,"IVector","IVector",-1120721434,null),new cljs.core.Symbol(null,"IDeref","IDeref",1738423197,null),new cljs.core.Symbol(null,"IDerefWithTimeout","IDerefWithTimeout",2140974319,null),new cljs.core.Symbol(null,"IMeta","IMeta",1095313672,null),new cljs.core.Symbol(null,"IWithMeta","IWithMeta",-509493158,null),new cljs.core.Symbol(null,"IReduce","IReduce",-440384974,null),new cljs.core.Symbol(null,"IKVReduce","IKVReduce",-870856862,null),new cljs.core.Symbol(null,"IEquiv","IEquiv",-1912850869,null),new cljs.core.Symbol(null,"IHash","IHash",-1495374645,null),new cljs.core.Symbol(null,"ISeqable","ISeqable",1349682102,null),new cljs.core.Symbol(null,"ISequential","ISequential",-1626174217,null),new cljs.core.Symbol(null,"IList","IList",1682281311,null),new cljs.core.Symbol(null,"IRecord","IRecord",-903221169,null),new cljs.core.Symbol(null,"IReversible","IReversible",-723048599,null),new cljs.core.Symbol(null,"ISorted","ISorted",-253627362,null),new cljs.core.Symbol(null,"IPrintWithWriter","IPrintWithWriter",-1205316154,null),new cljs.core.Symbol(null,"IWriter","IWriter",-1681087107,null),new cljs.core.Symbol(null,"IPrintWithWriter","IPrintWithWriter",-1205316154,null),new cljs.core.Symbol(null,"IPending","IPending",1229113039,null),new cljs.core.Symbol(null,"IWatchable","IWatchable",-1929659016,null),new cljs.core.Symbol(null,"IEditableCollection","IEditableCollection",-906687187,null),new cljs.core.Symbol(null,"ITransientCollection","ITransientCollection",252832402,null),new cljs.core.Symbol(null,"ITransientAssociative","ITransientAssociative",-1612754624,null),new cljs.core.Symbol(null,"ITransientMap","ITransientMap",298423651,null),new cljs.core.Symbol(null,"ITransientVector","ITransientVector",1978793164,null),new cljs.core.Symbol(null,"ITransientSet","ITransientSet",-575559912,null),new cljs.core.Symbol(null,"IMultiFn","IMultiFn",-1848282794,null),new cljs.core.Symbol(null,"IChunkedSeq","IChunkedSeq",-1299765705,null),new cljs.core.Symbol(null,"IChunkedNext","IChunkedNext",1193289532,null),new cljs.core.Symbol(null,"IComparable","IComparable",1834481627,null),new cljs.core.Symbol(null,"INamed","INamed",357992946,null),new cljs.core.Symbol(null,"ICloneable","ICloneable",1882653160,null),new cljs.core.Symbol(null,"IAtom","IAtom",-1411134312,null),new cljs.core.Symbol(null,"IReset","IReset",-1893729426,null),new cljs.core.Symbol(null,"ISwap","ISwap",484378193,null)], true)),cljs.core.iterate.call(null,(function (p__21089){
var vec__21090 = p__21089;
var p = cljs.core.nth.call(null,vec__21090,(0),null);
var b = cljs.core.nth.call(null,vec__21090,(1),null);
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
var args__11392__auto__ = [];
var len__11385__auto___21096 = arguments.length;
var i__11386__auto___21097 = (0);
while(true){
if((i__11386__auto___21097 < len__11385__auto___21096)){
args__11392__auto__.push((arguments[i__11386__auto___21097]));

var G__21098 = (i__11386__auto___21097 + (1));
i__11386__auto___21097 = G__21098;
continue;
} else {
}
break;
}

var argseq__11393__auto__ = ((((2) < args__11392__auto__.length))?(new cljs.core.IndexedSeq(args__11392__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__11393__auto__);
});

cljs.core$macros.str.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
var strs = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,",",cljs.core.repeat.call(null,cljs.core.count.call(null,xs),"cljs.core.str(~{})")));
return cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),[cljs.core.str("["),cljs.core.str(strs),cljs.core.str("].join('')")].join(''),xs);
});

cljs.core$macros.str.cljs$lang$maxFixedArity = (2);

cljs.core$macros.str.cljs$lang$applyTo = (function (seq21093){
var G__21094 = cljs.core.first.call(null,seq21093);
var seq21093__$1 = cljs.core.next.call(null,seq21093);
var G__21095 = cljs.core.first.call(null,seq21093__$1);
var seq21093__$2 = cljs.core.next.call(null,seq21093__$1);
return cljs.core$macros.str.cljs$core$IFn$_invoke$arity$variadic(G__21094,G__21095,seq21093__$2);
});


cljs.core$macros.str.cljs$lang$macro = true;
cljs.core$macros.bool_expr = (function cljs$core$macros$bool_expr(e){
return cljs.core.vary_meta.call(null,e,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null));
});
cljs.core$macros.simple_test_expr_QMARK_ = (function cljs$core$macros$simple_test_expr_QMARK_(env,ast){
var and__10265__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"js","js",1768080579),null,new cljs.core.Keyword(null,"constant","constant",-379609303),null,new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"invoke","invoke",1145927159),null,new cljs.core.Keyword(null,"dot","dot",1442709401),null], null), null).call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast));
if(cljs.core.truth_(and__10265__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null).call(null,cljs.analyzer.infer_tag.call(null,env,ast));
} else {
return and__10265__auto__;
}
});
/**
 * Evaluates exprs one at a time, from left to right. If a form
 *   returns logical false (nil or false), and returns that value and
 *   doesn't evaluate any of the other expressions, otherwise it returns
 *   the value of the last expr. (and) returns true.
 */
cljs.core$macros.and = (function cljs$core$macros$and(var_args){
var args21102 = [];
var len__11385__auto___21109 = arguments.length;
var i__11386__auto___21110 = (0);
while(true){
if((i__11386__auto___21110 < len__11385__auto___21109)){
args21102.push((arguments[i__11386__auto___21110]));

var G__21111 = (i__11386__auto___21110 + (1));
i__11386__auto___21110 = G__21111;
continue;
} else {
}
break;
}

var G__21108 = args21102.length;
switch (G__21108) {
case 2:
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__11404__auto__ = (new cljs.core.IndexedSeq(args21102.slice((3)),(0),null));
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__11404__auto__);

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
return (function (p1__21099_SHARP_){
return cljs.core$macros.simple_test_expr_QMARK_.call(null,_AMPERSAND_env,p1__21099_SHARP_);
});})(forms))
,cljs.core.map.call(null,((function (forms){
return (function (p1__21100_SHARP_){
return cljs.analyzer.analyze.call(null,_AMPERSAND_env,p1__21100_SHARP_);
});})(forms))
,forms))){
var and_str = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," && ",cljs.core.repeat.call(null,cljs.core.count.call(null,forms),"(~{})")));
return cljs.core$macros.bool_expr.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),(function (){var x__11114__auto__ = and_str;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),forms))));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__11114__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"and__21101__auto__","and__21101__auto__",-1746525499,null)),(function (){var x__11114__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"and__21101__auto__","and__21101__auto__",-1746525499,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),next)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"and__21101__auto__","and__21101__auto__",-1746525499,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
}
});

cljs.core$macros.and.cljs$lang$applyTo = (function (seq21103){
var G__21104 = cljs.core.first.call(null,seq21103);
var seq21103__$1 = cljs.core.next.call(null,seq21103);
var G__21105 = cljs.core.first.call(null,seq21103__$1);
var seq21103__$2 = cljs.core.next.call(null,seq21103__$1);
var G__21106 = cljs.core.first.call(null,seq21103__$2);
var seq21103__$3 = cljs.core.next.call(null,seq21103__$2);
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$variadic(G__21104,G__21105,G__21106,seq21103__$3);
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
var args21116 = [];
var len__11385__auto___21123 = arguments.length;
var i__11386__auto___21124 = (0);
while(true){
if((i__11386__auto___21124 < len__11385__auto___21123)){
args21116.push((arguments[i__11386__auto___21124]));

var G__21125 = (i__11386__auto___21124 + (1));
i__11386__auto___21124 = G__21125;
continue;
} else {
}
break;
}

var G__21122 = args21116.length;
switch (G__21122) {
case 2:
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__11404__auto__ = (new cljs.core.IndexedSeq(args21116.slice((3)),(0),null));
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__11404__auto__);

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
return (function (p1__21113_SHARP_){
return cljs.core$macros.simple_test_expr_QMARK_.call(null,_AMPERSAND_env,p1__21113_SHARP_);
});})(forms))
,cljs.core.map.call(null,((function (forms){
return (function (p1__21114_SHARP_){
return cljs.analyzer.analyze.call(null,_AMPERSAND_env,p1__21114_SHARP_);
});})(forms))
,forms))){
var or_str = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," || ",cljs.core.repeat.call(null,cljs.core.count.call(null,forms),"(~{})")));
return cljs.core$macros.bool_expr.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),(function (){var x__11114__auto__ = or_str;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),forms))));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__11114__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"or__21115__auto__","or__21115__auto__",-1986686135,null)),(function (){var x__11114__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"or__21115__auto__","or__21115__auto__",-1986686135,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"or__21115__auto__","or__21115__auto__",-1986686135,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","or","cljs.core$macros/or",1346243648,null)),next)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
}
});

cljs.core$macros.or.cljs$lang$applyTo = (function (seq21117){
var G__21118 = cljs.core.first.call(null,seq21117);
var seq21117__$1 = cljs.core.next.call(null,seq21117);
var G__21119 = cljs.core.first.call(null,seq21117__$1);
var seq21117__$2 = cljs.core.next.call(null,seq21117__$1);
var G__21120 = cljs.core.first.call(null,seq21117__$2);
var seq21117__$3 = cljs.core.next.call(null,seq21117__$2);
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$variadic(G__21118,G__21119,G__21120,seq21117__$3);
});

cljs.core$macros.or.cljs$lang$maxFixedArity = (3);


cljs.core$macros.or.cljs$lang$macro = true;
cljs.core$macros.nil_QMARK_ = (function cljs$core$macros$nil_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","coercive-=","cljs.core$macros/coercive-=",-1655776086,null)),(function (){var x__11114__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
});

cljs.core$macros.nil_QMARK_.cljs$lang$macro = true;
cljs.core$macros.coercive_not = (function cljs$core$macros$coercive_not(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__11114__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),"(!~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.coercive_not.cljs$lang$macro = true;
cljs.core$macros.coercive_not_EQ_ = (function cljs$core$macros$coercive_not_EQ_(_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__11114__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__11114__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto____$1);
})(),x__11114__auto__);
})(),"(~{} != ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.coercive_not_EQ_.cljs$lang$macro = true;
cljs.core$macros.coercive__EQ_ = (function cljs$core$macros$coercive__EQ_(_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__11114__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__11114__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto____$1);
})(),x__11114__auto__);
})(),"(~{} == ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.coercive__EQ_.cljs$lang$macro = true;
cljs.core$macros.coercive_boolean = (function cljs$core$macros$coercive_boolean(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.with_meta.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__11114__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),"~{}"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)], null));
});

cljs.core$macros.coercive_boolean.cljs$lang$macro = true;
cljs.core$macros.truth_ = (function cljs$core$macros$truth_(_AMPERSAND_form,_AMPERSAND_env,x){
if((x instanceof cljs.core.Symbol)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("x is substituted twice"),cljs.core.str("\n"),cljs.core.str("(core/symbol? x)")].join('')));
}

return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__11114__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__11114__auto____$1 = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto____$1);
})(),x__11114__auto__);
})(),"(~{} != null && ~{} !== false)"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.truth_.cljs$lang$macro = true;
cljs.core$macros.js_arguments = (function cljs$core$macros$js_arguments(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"arguments"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.js_arguments.cljs$lang$macro = true;
cljs.core$macros.js_delete = (function cljs$core$macros$js_delete(_AMPERSAND_form,_AMPERSAND_env,obj,key){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__11114__auto__ = obj;
return cljs.core._conj.call(null,(function (){var x__11114__auto____$1 = key;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto____$1);
})(),x__11114__auto__);
})(),"delete ~{}[~{}]"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.js_delete.cljs$lang$macro = true;
cljs.core$macros.js_in = (function cljs$core$macros$js_in(_AMPERSAND_form,_AMPERSAND_env,key,obj){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__11114__auto__ = key;
return cljs.core._conj.call(null,(function (){var x__11114__auto____$1 = obj;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto____$1);
})(),x__11114__auto__);
})(),"~{} in ~{}"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.js_in.cljs$lang$macro = true;
/**
 * Emit JavaScript "debugger;" statement
 */
cljs.core$macros.js_debugger = (function cljs$core$macros$js_debugger(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core._conj.call(null,(function (){var x__11114__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"debugger"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,null),x__11114__auto__);
})(),new cljs.core.Symbol(null,"do","do",1686842252,null));
});

cljs.core$macros.js_debugger.cljs$lang$macro = true;
/**
 * Emit a top-level JavaScript multi-line comment. New lines will create a
 *   new comment line. Comment block will be preceded and followed by a newline
 */
cljs.core$macros.js_comment = (function cljs$core$macros$js_comment(_AMPERSAND_form,_AMPERSAND_env,comment){
var vec__21131 = clojure.string.split.call(null,comment,/\n/);
var seq__21132 = cljs.core.seq.call(null,vec__21131);
var first__21133 = cljs.core.first.call(null,seq__21132);
var seq__21132__$1 = cljs.core.next.call(null,seq__21132);
var x = first__21133;
var ys = seq__21132__$1;
return cljs.core._conj.call(null,(function (){var x__11114__auto__ = [cljs.core.str("\n/**\n"),cljs.core.str([cljs.core.str(" * "),cljs.core.str(x),cljs.core.str("\n")].join('')),cljs.core.str(cljs.core.reduce.call(null,cljs.core.str,"",cljs.core.map.call(null,((function (vec__21131,seq__21132,first__21133,seq__21132__$1,x,ys){
return (function (p1__21127_SHARP_){
return [cljs.core.str(" * "),cljs.core.str(clojure.string.replace.call(null,p1__21127_SHARP_,/^   /,"")),cljs.core.str("\n")].join('');
});})(vec__21131,seq__21132,first__21133,seq__21132__$1,x,ys))
,ys))),cljs.core.str(" */\n")].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.js_comment.cljs$lang$macro = true;
/**
 * EXPERIMENTAL: Subject to change. Unsafely cast a value to a different type.
 */
cljs.core$macros.unsafe_cast = (function cljs$core$macros$unsafe_cast(_AMPERSAND_form,_AMPERSAND_env,t,x){
var cast_expr = [cljs.core.str("~{} = /** @type {"),cljs.core.str(t),cljs.core.str("} */ (~{})")].join('');
return cljs.core._conj.call(null,(function (){var x__11114__auto__ = cast_expr;
return cljs.core._conj.call(null,(function (){var x__11114__auto____$1 = x;
return cljs.core._conj.call(null,(function (){var x__11114__auto____$2 = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto____$2);
})(),x__11114__auto____$1);
})(),x__11114__auto__);
})(),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.unsafe_cast.cljs$lang$macro = true;
/**
 * Emit an inline JavaScript comment.
 */
cljs.core$macros.js_inline_comment = (function cljs$core$macros$js_inline_comment(_AMPERSAND_form,_AMPERSAND_env,comment){
return cljs.core._conj.call(null,(function (){var x__11114__auto__ = [cljs.core.str("/**"),cljs.core.str(comment),cljs.core.str("*/")].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.js_inline_comment.cljs$lang$macro = true;
cljs.core$macros.true_QMARK_ = (function cljs$core$macros$true_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__11114__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),"~{} === true"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.true_QMARK_.cljs$lang$macro = true;
cljs.core$macros.false_QMARK_ = (function cljs$core$macros$false_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__11114__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),"~{} === false"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.false_QMARK_.cljs$lang$macro = true;
cljs.core$macros.string_QMARK_ = (function cljs$core$macros$string_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__11114__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),"typeof ~{} === 'string'"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.string_QMARK_.cljs$lang$macro = true;
/**
 * Return true if argument exists, analogous to usage of typeof operator
 * in JavaScript.
 */
cljs.core$macros.exists_QMARK_ = (function cljs$core$macros$exists_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__11114__auto__ = cljs.core.vary_meta.call(null,x,cljs.core.assoc,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),"typeof ~{} !== 'undefined'"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.exists_QMARK_.cljs$lang$macro = true;
/**
 * Return true if argument is identical to the JavaScript undefined value.
 */
cljs.core$macros.undefined_QMARK_ = (function cljs$core$macros$undefined_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__11114__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),"(void 0 === ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.undefined_QMARK_.cljs$lang$macro = true;
cljs.core$macros.identical_QMARK_ = (function cljs$core$macros$identical_QMARK_(_AMPERSAND_form,_AMPERSAND_env,a,b){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__11114__auto__ = a;
return cljs.core._conj.call(null,(function (){var x__11114__auto____$1 = b;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto____$1);
})(),x__11114__auto__);
})(),"(~{} === ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.identical_QMARK_.cljs$lang$macro = true;
cljs.core$macros.instance_QMARK_ = (function cljs$core$macros$instance_QMARK_(_AMPERSAND_form,_AMPERSAND_env,c,x){
return cljs.core$macros.bool_expr.call(null,(((c instanceof cljs.core.Symbol))?cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__11114__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__11114__auto____$1 = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto____$1);
})(),x__11114__auto__);
})(),"(~{} instanceof ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)):cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__11114__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__21134__auto__","c__21134__auto__",531345403,null)),(function (){var x__11114__auto__ = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__21135__auto__","x__21135__auto__",-2044603003,null)),(function (){var x__11114__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"(~{} instanceof ~{})"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__21135__auto__","x__21135__auto__",-2044603003,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__21134__auto__","c__21134__auto__",531345403,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())))));
});

cljs.core$macros.instance_QMARK_.cljs$lang$macro = true;
cljs.core$macros.number_QMARK_ = (function cljs$core$macros$number_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__11114__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),"typeof ~{} === 'number'"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.number_QMARK_.cljs$lang$macro = true;
cljs.core$macros.symbol_QMARK_ = (function cljs$core$macros$symbol_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","instance?","cljs.core$macros/instance?",1829750179,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","Symbol","cljs.core/Symbol",292989338,null)),(function (){var x__11114__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})()))));
});

cljs.core$macros.symbol_QMARK_.cljs$lang$macro = true;
cljs.core$macros.keyword_QMARK_ = (function cljs$core$macros$keyword_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","instance?","cljs.core$macros/instance?",1829750179,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","Keyword","cljs.core/Keyword",-451434488,null)),(function (){var x__11114__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})()))));
});

cljs.core$macros.keyword_QMARK_.cljs$lang$macro = true;
cljs.core$macros.aget = (function cljs$core$macros$aget(var_args){
var args21136 = [];
var len__11385__auto___21144 = arguments.length;
var i__11386__auto___21145 = (0);
while(true){
if((i__11386__auto___21145 < len__11385__auto___21144)){
args21136.push((arguments[i__11386__auto___21145]));

var G__21146 = (i__11386__auto___21145 + (1));
i__11386__auto___21145 = G__21146;
continue;
} else {
}
break;
}

var G__21143 = args21136.length;
switch (G__21143) {
case 4:
return cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__11404__auto__ = (new cljs.core.IndexedSeq(args21136.slice((4)),(0),null));
return cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__11404__auto__);

}
});

cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,a,i){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__11114__auto__ = a;
return cljs.core._conj.call(null,(function (){var x__11114__auto____$1 = i;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto____$1);
})(),x__11114__auto__);
})(),"(~{}[~{}])"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,a,i,idxs){
var astr = cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,cljs.core.count.call(null,idxs),"[~{}]"));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),(function (){var x__11114__auto__ = [cljs.core.str("(~{}[~{}]"),cljs.core.str(astr),cljs.core.str(")")].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = a;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = i;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),idxs)));
});

cljs.core$macros.aget.cljs$lang$applyTo = (function (seq21137){
var G__21138 = cljs.core.first.call(null,seq21137);
var seq21137__$1 = cljs.core.next.call(null,seq21137);
var G__21139 = cljs.core.first.call(null,seq21137__$1);
var seq21137__$2 = cljs.core.next.call(null,seq21137__$1);
var G__21140 = cljs.core.first.call(null,seq21137__$2);
var seq21137__$3 = cljs.core.next.call(null,seq21137__$2);
var G__21141 = cljs.core.first.call(null,seq21137__$3);
var seq21137__$4 = cljs.core.next.call(null,seq21137__$3);
return cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$variadic(G__21138,G__21139,G__21140,G__21141,seq21137__$4);
});

cljs.core$macros.aget.cljs$lang$maxFixedArity = (4);


cljs.core$macros.aget.cljs$lang$macro = true;
cljs.core$macros.aset = (function cljs$core$macros$aset(var_args){
var args21148 = [];
var len__11385__auto___21157 = arguments.length;
var i__11386__auto___21158 = (0);
while(true){
if((i__11386__auto___21158 < len__11385__auto___21157)){
args21148.push((arguments[i__11386__auto___21158]));

var G__21159 = (i__11386__auto___21158 + (1));
i__11386__auto___21158 = G__21159;
continue;
} else {
}
break;
}

var G__21156 = args21148.length;
switch (G__21156) {
case 5:
return cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
var argseq__11404__auto__ = (new cljs.core.IndexedSeq(args21148.slice((5)),(0),null));
return cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__11404__auto__);

}
});

cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$5 = (function (_AMPERSAND_form,_AMPERSAND_env,a,i,v){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__11114__auto__ = a;
return cljs.core._conj.call(null,(function (){var x__11114__auto____$1 = i;
return cljs.core._conj.call(null,(function (){var x__11114__auto____$2 = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto____$2);
})(),x__11114__auto____$1);
})(),x__11114__auto__);
})(),"(~{}[~{}] = ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,a,idx,idx2,idxv){
var n = (cljs.core.count.call(null,idxv) - (1));
var astr = cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,n,"[~{}]"));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),(function (){var x__11114__auto__ = [cljs.core.str("(~{}[~{}][~{}]"),cljs.core.str(astr),cljs.core.str(" = ~{})")].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = a;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = idx2;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),idxv)));
});

cljs.core$macros.aset.cljs$lang$applyTo = (function (seq21149){
var G__21150 = cljs.core.first.call(null,seq21149);
var seq21149__$1 = cljs.core.next.call(null,seq21149);
var G__21151 = cljs.core.first.call(null,seq21149__$1);
var seq21149__$2 = cljs.core.next.call(null,seq21149__$1);
var G__21152 = cljs.core.first.call(null,seq21149__$2);
var seq21149__$3 = cljs.core.next.call(null,seq21149__$2);
var G__21153 = cljs.core.first.call(null,seq21149__$3);
var seq21149__$4 = cljs.core.next.call(null,seq21149__$3);
var G__21154 = cljs.core.first.call(null,seq21149__$4);
var seq21149__$5 = cljs.core.next.call(null,seq21149__$4);
return cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$variadic(G__21150,G__21151,G__21152,G__21153,G__21154,seq21149__$5);
});

cljs.core$macros.aset.cljs$lang$maxFixedArity = (5);


cljs.core$macros.aset.cljs$lang$macro = true;
cljs.core$macros._PLUS_ = (function cljs$core$macros$_PLUS_(var_args){
var args21161 = [];
var len__11385__auto___21169 = arguments.length;
var i__11386__auto___21170 = (0);
while(true){
if((i__11386__auto___21170 < len__11385__auto___21169)){
args21161.push((arguments[i__11386__auto___21170]));

var G__21171 = (i__11386__auto___21170 + (1));
i__11386__auto___21170 = G__21171;
continue;
} else {
}
break;
}

var G__21168 = args21161.length;
switch (G__21168) {
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
var argseq__11404__auto__ = (new cljs.core.IndexedSeq(args21161.slice((4)),(0),null));
return cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__11404__auto__);

}
});

cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return (0);
});

cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__11114__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__11114__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto____$1);
})(),x__11114__auto__);
})(),"(~{} + ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),(function (){var x__11114__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),more)));
});

cljs.core$macros._PLUS_.cljs$lang$applyTo = (function (seq21162){
var G__21163 = cljs.core.first.call(null,seq21162);
var seq21162__$1 = cljs.core.next.call(null,seq21162);
var G__21164 = cljs.core.first.call(null,seq21162__$1);
var seq21162__$2 = cljs.core.next.call(null,seq21162__$1);
var G__21165 = cljs.core.first.call(null,seq21162__$2);
var seq21162__$3 = cljs.core.next.call(null,seq21162__$2);
var G__21166 = cljs.core.first.call(null,seq21162__$3);
var seq21162__$4 = cljs.core.next.call(null,seq21162__$3);
return cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$variadic(G__21163,G__21164,G__21165,G__21166,seq21162__$4);
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
var args__11392__auto__ = [];
var len__11385__auto___21176 = arguments.length;
var i__11386__auto___21177 = (0);
while(true){
if((i__11386__auto___21177 < len__11385__auto___21176)){
args__11392__auto__.push((arguments[i__11386__auto___21177]));

var G__21178 = (i__11386__auto___21177 + (1));
i__11386__auto___21177 = G__21178;
continue;
} else {
}
break;
}

var argseq__11393__auto__ = ((((2) < args__11392__auto__.length))?(new cljs.core.IndexedSeq(args__11392__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_add.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__11393__auto__);
});

cljs.core$macros.unchecked_add.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),xs)));
});

cljs.core$macros.unchecked_add.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_add.cljs$lang$applyTo = (function (seq21173){
var G__21174 = cljs.core.first.call(null,seq21173);
var seq21173__$1 = cljs.core.next.call(null,seq21173);
var G__21175 = cljs.core.first.call(null,seq21173__$1);
var seq21173__$2 = cljs.core.next.call(null,seq21173__$1);
return cljs.core$macros.unchecked_add.cljs$core$IFn$_invoke$arity$variadic(G__21174,G__21175,seq21173__$2);
});


cljs.core$macros.unchecked_add.cljs$lang$macro = true;
cljs.core$macros.unchecked_add_int = (function cljs$core$macros$unchecked_add_int(var_args){
var args__11392__auto__ = [];
var len__11385__auto___21182 = arguments.length;
var i__11386__auto___21183 = (0);
while(true){
if((i__11386__auto___21183 < len__11385__auto___21182)){
args__11392__auto__.push((arguments[i__11386__auto___21183]));

var G__21184 = (i__11386__auto___21183 + (1));
i__11386__auto___21183 = G__21184;
continue;
} else {
}
break;
}

var argseq__11393__auto__ = ((((2) < args__11392__auto__.length))?(new cljs.core.IndexedSeq(args__11392__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_add_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__11393__auto__);
});

cljs.core$macros.unchecked_add_int.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),xs)));
});

cljs.core$macros.unchecked_add_int.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_add_int.cljs$lang$applyTo = (function (seq21179){
var G__21180 = cljs.core.first.call(null,seq21179);
var seq21179__$1 = cljs.core.next.call(null,seq21179);
var G__21181 = cljs.core.first.call(null,seq21179__$1);
var seq21179__$2 = cljs.core.next.call(null,seq21179__$1);
return cljs.core$macros.unchecked_add_int.cljs$core$IFn$_invoke$arity$variadic(G__21180,G__21181,seq21179__$2);
});


cljs.core$macros.unchecked_add_int.cljs$lang$macro = true;
cljs.core$macros.unchecked_dec = (function cljs$core$macros$unchecked_dec(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","dec","cljs.core$macros/dec",-247694061,null)),(function (){var x__11114__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
});

cljs.core$macros.unchecked_dec.cljs$lang$macro = true;
cljs.core$macros.unchecked_dec_int = (function cljs$core$macros$unchecked_dec_int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","dec","cljs.core$macros/dec",-247694061,null)),(function (){var x__11114__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
});

cljs.core$macros.unchecked_dec_int.cljs$lang$macro = true;
cljs.core$macros.unchecked_divide_int = (function cljs$core$macros$unchecked_divide_int(var_args){
var args__11392__auto__ = [];
var len__11385__auto___21188 = arguments.length;
var i__11386__auto___21189 = (0);
while(true){
if((i__11386__auto___21189 < len__11385__auto___21188)){
args__11392__auto__.push((arguments[i__11386__auto___21189]));

var G__21190 = (i__11386__auto___21189 + (1));
i__11386__auto___21189 = G__21190;
continue;
} else {
}
break;
}

var argseq__11393__auto__ = ((((2) < args__11392__auto__.length))?(new cljs.core.IndexedSeq(args__11392__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_divide_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__11393__auto__);
});

cljs.core$macros.unchecked_divide_int.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),xs)));
});

cljs.core$macros.unchecked_divide_int.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_divide_int.cljs$lang$applyTo = (function (seq21185){
var G__21186 = cljs.core.first.call(null,seq21185);
var seq21185__$1 = cljs.core.next.call(null,seq21185);
var G__21187 = cljs.core.first.call(null,seq21185__$1);
var seq21185__$2 = cljs.core.next.call(null,seq21185__$1);
return cljs.core$macros.unchecked_divide_int.cljs$core$IFn$_invoke$arity$variadic(G__21186,G__21187,seq21185__$2);
});


cljs.core$macros.unchecked_divide_int.cljs$lang$macro = true;
cljs.core$macros.unchecked_inc = (function cljs$core$macros$unchecked_inc(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),(function (){var x__11114__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
});

cljs.core$macros.unchecked_inc.cljs$lang$macro = true;
cljs.core$macros.unchecked_inc_int = (function cljs$core$macros$unchecked_inc_int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),(function (){var x__11114__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
});

cljs.core$macros.unchecked_inc_int.cljs$lang$macro = true;
cljs.core$macros.unchecked_multiply = (function cljs$core$macros$unchecked_multiply(var_args){
var args__11392__auto__ = [];
var len__11385__auto___21194 = arguments.length;
var i__11386__auto___21195 = (0);
while(true){
if((i__11386__auto___21195 < len__11385__auto___21194)){
args__11392__auto__.push((arguments[i__11386__auto___21195]));

var G__21196 = (i__11386__auto___21195 + (1));
i__11386__auto___21195 = G__21196;
continue;
} else {
}
break;
}

var argseq__11393__auto__ = ((((2) < args__11392__auto__.length))?(new cljs.core.IndexedSeq(args__11392__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_multiply.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__11393__auto__);
});

cljs.core$macros.unchecked_multiply.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","*","cljs.core$macros/*",946321529,null)),xs)));
});

cljs.core$macros.unchecked_multiply.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_multiply.cljs$lang$applyTo = (function (seq21191){
var G__21192 = cljs.core.first.call(null,seq21191);
var seq21191__$1 = cljs.core.next.call(null,seq21191);
var G__21193 = cljs.core.first.call(null,seq21191__$1);
var seq21191__$2 = cljs.core.next.call(null,seq21191__$1);
return cljs.core$macros.unchecked_multiply.cljs$core$IFn$_invoke$arity$variadic(G__21192,G__21193,seq21191__$2);
});


cljs.core$macros.unchecked_multiply.cljs$lang$macro = true;
cljs.core$macros.unchecked_multiply_int = (function cljs$core$macros$unchecked_multiply_int(var_args){
var args__11392__auto__ = [];
var len__11385__auto___21200 = arguments.length;
var i__11386__auto___21201 = (0);
while(true){
if((i__11386__auto___21201 < len__11385__auto___21200)){
args__11392__auto__.push((arguments[i__11386__auto___21201]));

var G__21202 = (i__11386__auto___21201 + (1));
i__11386__auto___21201 = G__21202;
continue;
} else {
}
break;
}

var argseq__11393__auto__ = ((((2) < args__11392__auto__.length))?(new cljs.core.IndexedSeq(args__11392__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_multiply_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__11393__auto__);
});

cljs.core$macros.unchecked_multiply_int.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","*","cljs.core$macros/*",946321529,null)),xs)));
});

cljs.core$macros.unchecked_multiply_int.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_multiply_int.cljs$lang$applyTo = (function (seq21197){
var G__21198 = cljs.core.first.call(null,seq21197);
var seq21197__$1 = cljs.core.next.call(null,seq21197);
var G__21199 = cljs.core.first.call(null,seq21197__$1);
var seq21197__$2 = cljs.core.next.call(null,seq21197__$1);
return cljs.core$macros.unchecked_multiply_int.cljs$core$IFn$_invoke$arity$variadic(G__21198,G__21199,seq21197__$2);
});


cljs.core$macros.unchecked_multiply_int.cljs$lang$macro = true;
cljs.core$macros.unchecked_negate = (function cljs$core$macros$unchecked_negate(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__11114__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
});

cljs.core$macros.unchecked_negate.cljs$lang$macro = true;
cljs.core$macros.unchecked_negate_int = (function cljs$core$macros$unchecked_negate_int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__11114__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
});

cljs.core$macros.unchecked_negate_int.cljs$lang$macro = true;
cljs.core$macros.unchecked_remainder_int = (function cljs$core$macros$unchecked_remainder_int(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","mod","cljs.core$macros/mod",2132457375,null)),(function (){var x__11114__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
});

cljs.core$macros.unchecked_remainder_int.cljs$lang$macro = true;
cljs.core$macros.unchecked_subtract = (function cljs$core$macros$unchecked_subtract(var_args){
var args__11392__auto__ = [];
var len__11385__auto___21206 = arguments.length;
var i__11386__auto___21207 = (0);
while(true){
if((i__11386__auto___21207 < len__11385__auto___21206)){
args__11392__auto__.push((arguments[i__11386__auto___21207]));

var G__21208 = (i__11386__auto___21207 + (1));
i__11386__auto___21207 = G__21208;
continue;
} else {
}
break;
}

var argseq__11393__auto__ = ((((2) < args__11392__auto__.length))?(new cljs.core.IndexedSeq(args__11392__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_subtract.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__11393__auto__);
});

cljs.core$macros.unchecked_subtract.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),xs)));
});

cljs.core$macros.unchecked_subtract.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_subtract.cljs$lang$applyTo = (function (seq21203){
var G__21204 = cljs.core.first.call(null,seq21203);
var seq21203__$1 = cljs.core.next.call(null,seq21203);
var G__21205 = cljs.core.first.call(null,seq21203__$1);
var seq21203__$2 = cljs.core.next.call(null,seq21203__$1);
return cljs.core$macros.unchecked_subtract.cljs$core$IFn$_invoke$arity$variadic(G__21204,G__21205,seq21203__$2);
});


cljs.core$macros.unchecked_subtract.cljs$lang$macro = true;
cljs.core$macros.unchecked_subtract_int = (function cljs$core$macros$unchecked_subtract_int(var_args){
var args__11392__auto__ = [];
var len__11385__auto___21212 = arguments.length;
var i__11386__auto___21213 = (0);
while(true){
if((i__11386__auto___21213 < len__11385__auto___21212)){
args__11392__auto__.push((arguments[i__11386__auto___21213]));

var G__21214 = (i__11386__auto___21213 + (1));
i__11386__auto___21213 = G__21214;
continue;
} else {
}
break;
}

var argseq__11393__auto__ = ((((2) < args__11392__auto__.length))?(new cljs.core.IndexedSeq(args__11392__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_subtract_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__11393__auto__);
});

cljs.core$macros.unchecked_subtract_int.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),xs)));
});

cljs.core$macros.unchecked_subtract_int.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_subtract_int.cljs$lang$applyTo = (function (seq21209){
var G__21210 = cljs.core.first.call(null,seq21209);
var seq21209__$1 = cljs.core.next.call(null,seq21209);
var G__21211 = cljs.core.first.call(null,seq21209__$1);
var seq21209__$2 = cljs.core.next.call(null,seq21209__$1);
return cljs.core$macros.unchecked_subtract_int.cljs$core$IFn$_invoke$arity$variadic(G__21210,G__21211,seq21209__$2);
});


cljs.core$macros.unchecked_subtract_int.cljs$lang$macro = true;
cljs.core$macros._ = (function cljs$core$macros$_(var_args){
var args21215 = [];
var len__11385__auto___21223 = arguments.length;
var i__11386__auto___21224 = (0);
while(true){
if((i__11386__auto___21224 < len__11385__auto___21223)){
args21215.push((arguments[i__11386__auto___21224]));

var G__21225 = (i__11386__auto___21224 + (1));
i__11386__auto___21224 = G__21225;
continue;
} else {
}
break;
}

var G__21222 = args21215.length;
switch (G__21222) {
case 3:
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__11404__auto__ = (new cljs.core.IndexedSeq(args21215.slice((4)),(0),null));
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__11404__auto__);

}
});

cljs.core$macros._.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__11114__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),"(- ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros._.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__11114__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__11114__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto____$1);
})(),x__11114__auto__);
})(),"(~{} - ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros._.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__11114__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),more)));
});

cljs.core$macros._.cljs$lang$applyTo = (function (seq21216){
var G__21217 = cljs.core.first.call(null,seq21216);
var seq21216__$1 = cljs.core.next.call(null,seq21216);
var G__21218 = cljs.core.first.call(null,seq21216__$1);
var seq21216__$2 = cljs.core.next.call(null,seq21216__$1);
var G__21219 = cljs.core.first.call(null,seq21216__$2);
var seq21216__$3 = cljs.core.next.call(null,seq21216__$2);
var G__21220 = cljs.core.first.call(null,seq21216__$3);
var seq21216__$4 = cljs.core.next.call(null,seq21216__$3);
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$variadic(G__21217,G__21218,G__21219,G__21220,seq21216__$4);
});

cljs.core$macros._.cljs$lang$maxFixedArity = (4);


cljs.core$macros._.cljs$lang$macro = true;
cljs.core$macros._STAR_ = (function cljs$core$macros$_STAR_(var_args){
var args21227 = [];
var len__11385__auto___21235 = arguments.length;
var i__11386__auto___21236 = (0);
while(true){
if((i__11386__auto___21236 < len__11385__auto___21235)){
args21227.push((arguments[i__11386__auto___21236]));

var G__21237 = (i__11386__auto___21236 + (1));
i__11386__auto___21236 = G__21237;
continue;
} else {
}
break;
}

var G__21234 = args21227.length;
switch (G__21234) {
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
var argseq__11404__auto__ = (new cljs.core.IndexedSeq(args21227.slice((4)),(0),null));
return cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__11404__auto__);

}
});

cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return (1);
});

cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__11114__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__11114__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto____$1);
})(),x__11114__auto__);
})(),"(~{} * ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","*","cljs.core$macros/*",946321529,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","*","cljs.core$macros/*",946321529,null)),(function (){var x__11114__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),more)));
});

cljs.core$macros._STAR_.cljs$lang$applyTo = (function (seq21228){
var G__21229 = cljs.core.first.call(null,seq21228);
var seq21228__$1 = cljs.core.next.call(null,seq21228);
var G__21230 = cljs.core.first.call(null,seq21228__$1);
var seq21228__$2 = cljs.core.next.call(null,seq21228__$1);
var G__21231 = cljs.core.first.call(null,seq21228__$2);
var seq21228__$3 = cljs.core.next.call(null,seq21228__$2);
var G__21232 = cljs.core.first.call(null,seq21228__$3);
var seq21228__$4 = cljs.core.next.call(null,seq21228__$3);
return cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$variadic(G__21229,G__21230,G__21231,G__21232,seq21228__$4);
});

cljs.core$macros._STAR_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._STAR_.cljs$lang$macro = true;
cljs.core$macros._SLASH_ = (function cljs$core$macros$_SLASH_(var_args){
var args21239 = [];
var len__11385__auto___21247 = arguments.length;
var i__11386__auto___21248 = (0);
while(true){
if((i__11386__auto___21248 < len__11385__auto___21247)){
args21239.push((arguments[i__11386__auto___21248]));

var G__21249 = (i__11386__auto___21248 + (1));
i__11386__auto___21248 = G__21249;
continue;
} else {
}
break;
}

var G__21246 = args21239.length;
switch (G__21246) {
case 3:
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__11404__auto__ = (new cljs.core.IndexedSeq(args21239.slice((4)),(0),null));
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__11404__auto__);

}
});

cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)),(function (){var x__11114__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
});

cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__11114__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__11114__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto____$1);
})(),x__11114__auto__);
})(),"(~{} / ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),(function (){var x__11114__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),more)));
});

cljs.core$macros._SLASH_.cljs$lang$applyTo = (function (seq21240){
var G__21241 = cljs.core.first.call(null,seq21240);
var seq21240__$1 = cljs.core.next.call(null,seq21240);
var G__21242 = cljs.core.first.call(null,seq21240__$1);
var seq21240__$2 = cljs.core.next.call(null,seq21240__$1);
var G__21243 = cljs.core.first.call(null,seq21240__$2);
var seq21240__$3 = cljs.core.next.call(null,seq21240__$2);
var G__21244 = cljs.core.first.call(null,seq21240__$3);
var seq21240__$4 = cljs.core.next.call(null,seq21240__$3);
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$variadic(G__21241,G__21242,G__21243,G__21244,seq21240__$4);
});

cljs.core$macros._SLASH_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._SLASH_.cljs$lang$macro = true;
cljs.core$macros.divide = (function cljs$core$macros$divide(var_args){
var args21251 = [];
var len__11385__auto___21259 = arguments.length;
var i__11386__auto___21260 = (0);
while(true){
if((i__11386__auto___21260 < len__11385__auto___21259)){
args21251.push((arguments[i__11386__auto___21260]));

var G__21261 = (i__11386__auto___21260 + (1));
i__11386__auto___21260 = G__21261;
continue;
} else {
}
break;
}

var G__21258 = args21251.length;
switch (G__21258) {
case 3:
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__11404__auto__ = (new cljs.core.IndexedSeq(args21251.slice((4)),(0),null));
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__11404__auto__);

}
});

cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)),(function (){var x__11114__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
});

cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__11114__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__11114__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto____$1);
})(),x__11114__auto__);
})(),"(~{} / ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),(function (){var x__11114__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),more)));
});

cljs.core$macros.divide.cljs$lang$applyTo = (function (seq21252){
var G__21253 = cljs.core.first.call(null,seq21252);
var seq21252__$1 = cljs.core.next.call(null,seq21252);
var G__21254 = cljs.core.first.call(null,seq21252__$1);
var seq21252__$2 = cljs.core.next.call(null,seq21252__$1);
var G__21255 = cljs.core.first.call(null,seq21252__$2);
var seq21252__$3 = cljs.core.next.call(null,seq21252__$2);
var G__21256 = cljs.core.first.call(null,seq21252__$3);
var seq21252__$4 = cljs.core.next.call(null,seq21252__$3);
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$variadic(G__21253,G__21254,G__21255,G__21256,seq21252__$4);
});

cljs.core$macros.divide.cljs$lang$maxFixedArity = (4);


cljs.core$macros.divide.cljs$lang$macro = true;
cljs.core$macros._LT_ = (function cljs$core$macros$_LT_(var_args){
var args21263 = [];
var len__11385__auto___21271 = arguments.length;
var i__11386__auto___21272 = (0);
while(true){
if((i__11386__auto___21272 < len__11385__auto___21271)){
args21263.push((arguments[i__11386__auto___21272]));

var G__21273 = (i__11386__auto___21272 + (1));
i__11386__auto___21272 = G__21273;
continue;
} else {
}
break;
}

var G__21270 = args21263.length;
switch (G__21270) {
case 3:
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__11404__auto__ = (new cljs.core.IndexedSeq(args21263.slice((4)),(0),null));
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__11404__auto__);

}
});

cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__11114__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__11114__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto____$1);
})(),x__11114__auto__);
})(),"(~{} < ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__11114__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__11114__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),more)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
});

cljs.core$macros._LT_.cljs$lang$applyTo = (function (seq21264){
var G__21265 = cljs.core.first.call(null,seq21264);
var seq21264__$1 = cljs.core.next.call(null,seq21264);
var G__21266 = cljs.core.first.call(null,seq21264__$1);
var seq21264__$2 = cljs.core.next.call(null,seq21264__$1);
var G__21267 = cljs.core.first.call(null,seq21264__$2);
var seq21264__$3 = cljs.core.next.call(null,seq21264__$2);
var G__21268 = cljs.core.first.call(null,seq21264__$3);
var seq21264__$4 = cljs.core.next.call(null,seq21264__$3);
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$variadic(G__21265,G__21266,G__21267,G__21268,seq21264__$4);
});

cljs.core$macros._LT_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._LT_.cljs$lang$macro = true;
cljs.core$macros._LT__EQ_ = (function cljs$core$macros$_LT__EQ_(var_args){
var args21275 = [];
var len__11385__auto___21283 = arguments.length;
var i__11386__auto___21284 = (0);
while(true){
if((i__11386__auto___21284 < len__11385__auto___21283)){
args21275.push((arguments[i__11386__auto___21284]));

var G__21285 = (i__11386__auto___21284 + (1));
i__11386__auto___21284 = G__21285;
continue;
} else {
}
break;
}

var G__21282 = args21275.length;
switch (G__21282) {
case 3:
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__11404__auto__ = (new cljs.core.IndexedSeq(args21275.slice((4)),(0),null));
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__11404__auto__);

}
});

cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__11114__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__11114__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto____$1);
})(),x__11114__auto__);
})(),"(~{} <= ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<=","cljs.core$macros/<=",1865244377,null)),(function (){var x__11114__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<=","cljs.core$macros/<=",1865244377,null)),(function (){var x__11114__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),more)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
});

cljs.core$macros._LT__EQ_.cljs$lang$applyTo = (function (seq21276){
var G__21277 = cljs.core.first.call(null,seq21276);
var seq21276__$1 = cljs.core.next.call(null,seq21276);
var G__21278 = cljs.core.first.call(null,seq21276__$1);
var seq21276__$2 = cljs.core.next.call(null,seq21276__$1);
var G__21279 = cljs.core.first.call(null,seq21276__$2);
var seq21276__$3 = cljs.core.next.call(null,seq21276__$2);
var G__21280 = cljs.core.first.call(null,seq21276__$3);
var seq21276__$4 = cljs.core.next.call(null,seq21276__$3);
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__21277,G__21278,G__21279,G__21280,seq21276__$4);
});

cljs.core$macros._LT__EQ_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._LT__EQ_.cljs$lang$macro = true;
cljs.core$macros._GT_ = (function cljs$core$macros$_GT_(var_args){
var args21287 = [];
var len__11385__auto___21295 = arguments.length;
var i__11386__auto___21296 = (0);
while(true){
if((i__11386__auto___21296 < len__11385__auto___21295)){
args21287.push((arguments[i__11386__auto___21296]));

var G__21297 = (i__11386__auto___21296 + (1));
i__11386__auto___21296 = G__21297;
continue;
} else {
}
break;
}

var G__21294 = args21287.length;
switch (G__21294) {
case 3:
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__11404__auto__ = (new cljs.core.IndexedSeq(args21287.slice((4)),(0),null));
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__11404__auto__);

}
});

cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__11114__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__11114__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto____$1);
})(),x__11114__auto__);
})(),"(~{} > ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros",">","cljs.core$macros/>",1703297853,null)),(function (){var x__11114__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros",">","cljs.core$macros/>",1703297853,null)),(function (){var x__11114__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),more)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
});

cljs.core$macros._GT_.cljs$lang$applyTo = (function (seq21288){
var G__21289 = cljs.core.first.call(null,seq21288);
var seq21288__$1 = cljs.core.next.call(null,seq21288);
var G__21290 = cljs.core.first.call(null,seq21288__$1);
var seq21288__$2 = cljs.core.next.call(null,seq21288__$1);
var G__21291 = cljs.core.first.call(null,seq21288__$2);
var seq21288__$3 = cljs.core.next.call(null,seq21288__$2);
var G__21292 = cljs.core.first.call(null,seq21288__$3);
var seq21288__$4 = cljs.core.next.call(null,seq21288__$3);
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$variadic(G__21289,G__21290,G__21291,G__21292,seq21288__$4);
});

cljs.core$macros._GT_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._GT_.cljs$lang$macro = true;
cljs.core$macros._GT__EQ_ = (function cljs$core$macros$_GT__EQ_(var_args){
var args21299 = [];
var len__11385__auto___21307 = arguments.length;
var i__11386__auto___21308 = (0);
while(true){
if((i__11386__auto___21308 < len__11385__auto___21307)){
args21299.push((arguments[i__11386__auto___21308]));

var G__21309 = (i__11386__auto___21308 + (1));
i__11386__auto___21308 = G__21309;
continue;
} else {
}
break;
}

var G__21306 = args21299.length;
switch (G__21306) {
case 3:
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__11404__auto__ = (new cljs.core.IndexedSeq(args21299.slice((4)),(0),null));
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__11404__auto__);

}
});

cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__11114__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__11114__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto____$1);
})(),x__11114__auto__);
})(),"(~{} >= ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros",">=","cljs.core$macros/>=",527849062,null)),(function (){var x__11114__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros",">=","cljs.core$macros/>=",527849062,null)),(function (){var x__11114__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),more)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
});

cljs.core$macros._GT__EQ_.cljs$lang$applyTo = (function (seq21300){
var G__21301 = cljs.core.first.call(null,seq21300);
var seq21300__$1 = cljs.core.next.call(null,seq21300);
var G__21302 = cljs.core.first.call(null,seq21300__$1);
var seq21300__$2 = cljs.core.next.call(null,seq21300__$1);
var G__21303 = cljs.core.first.call(null,seq21300__$2);
var seq21300__$3 = cljs.core.next.call(null,seq21300__$2);
var G__21304 = cljs.core.first.call(null,seq21300__$3);
var seq21300__$4 = cljs.core.next.call(null,seq21300__$3);
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__21301,G__21302,G__21303,G__21304,seq21300__$4);
});

cljs.core$macros._GT__EQ_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._GT__EQ_.cljs$lang$macro = true;
cljs.core$macros._EQ__EQ_ = (function cljs$core$macros$_EQ__EQ_(var_args){
var args21311 = [];
var len__11385__auto___21319 = arguments.length;
var i__11386__auto___21320 = (0);
while(true){
if((i__11386__auto___21320 < len__11385__auto___21319)){
args21311.push((arguments[i__11386__auto___21320]));

var G__21321 = (i__11386__auto___21320 + (1));
i__11386__auto___21320 = G__21321;
continue;
} else {
}
break;
}

var G__21318 = args21311.length;
switch (G__21318) {
case 3:
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__11404__auto__ = (new cljs.core.IndexedSeq(args21311.slice((4)),(0),null));
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__11404__auto__);

}
});

cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__11114__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__11114__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto____$1);
})(),x__11114__auto__);
})(),"(~{} === ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","==","cljs.core$macros/==",-818551413,null)),(function (){var x__11114__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","==","cljs.core$macros/==",-818551413,null)),(function (){var x__11114__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),more)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
});

cljs.core$macros._EQ__EQ_.cljs$lang$applyTo = (function (seq21312){
var G__21313 = cljs.core.first.call(null,seq21312);
var seq21312__$1 = cljs.core.next.call(null,seq21312);
var G__21314 = cljs.core.first.call(null,seq21312__$1);
var seq21312__$2 = cljs.core.next.call(null,seq21312__$1);
var G__21315 = cljs.core.first.call(null,seq21312__$2);
var seq21312__$3 = cljs.core.next.call(null,seq21312__$2);
var G__21316 = cljs.core.first.call(null,seq21312__$3);
var seq21312__$4 = cljs.core.next.call(null,seq21312__$3);
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__21313,G__21314,G__21315,G__21316,seq21312__$4);
});

cljs.core$macros._EQ__EQ_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._EQ__EQ_.cljs$lang$macro = true;
cljs.core$macros.dec = (function cljs$core$macros$dec(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__11114__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)))));
});

cljs.core$macros.dec.cljs$lang$macro = true;
cljs.core$macros.inc = (function cljs$core$macros$inc(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),(function (){var x__11114__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)))));
});

cljs.core$macros.inc.cljs$lang$macro = true;
cljs.core$macros.zero_QMARK_ = (function cljs$core$macros$zero_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","==","cljs.core$macros/==",-818551413,null)),(function (){var x__11114__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)))));
});

cljs.core$macros.zero_QMARK_.cljs$lang$macro = true;
cljs.core$macros.pos_QMARK_ = (function cljs$core$macros$pos_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros",">","cljs.core$macros/>",1703297853,null)),(function (){var x__11114__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)))));
});

cljs.core$macros.pos_QMARK_.cljs$lang$macro = true;
cljs.core$macros.neg_QMARK_ = (function cljs$core$macros$neg_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__11114__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)))));
});

cljs.core$macros.neg_QMARK_.cljs$lang$macro = true;
cljs.core$macros.max = (function cljs$core$macros$max(var_args){
var args21325 = [];
var len__11385__auto___21333 = arguments.length;
var i__11386__auto___21334 = (0);
while(true){
if((i__11386__auto___21334 < len__11385__auto___21333)){
args21325.push((arguments[i__11386__auto___21334]));

var G__21335 = (i__11386__auto___21334 + (1));
i__11386__auto___21334 = G__21335;
continue;
} else {
}
break;
}

var G__21332 = args21325.length;
switch (G__21332) {
case 3:
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__11404__auto__ = (new cljs.core.IndexedSeq(args21325.slice((4)),(0),null));
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__11404__auto__);

}
});

cljs.core$macros.max.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.max.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__11114__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__21323__auto__","x__21323__auto__",1442169117,null)),(function (){var x__11114__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__21324__auto__","y__21324__auto__",1712998227,null)),(function (){var x__11114__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"((~{} > ~{}) ? ~{} : ~{})"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__21323__auto__","x__21323__auto__",1442169117,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__21324__auto__","y__21324__auto__",1712998227,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__21323__auto__","x__21323__auto__",1442169117,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__21324__auto__","y__21324__auto__",1712998227,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
});

cljs.core$macros.max.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","max","cljs.core$macros/max",1176150699,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","max","cljs.core$macros/max",1176150699,null)),(function (){var x__11114__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),more)));
});

cljs.core$macros.max.cljs$lang$applyTo = (function (seq21326){
var G__21327 = cljs.core.first.call(null,seq21326);
var seq21326__$1 = cljs.core.next.call(null,seq21326);
var G__21328 = cljs.core.first.call(null,seq21326__$1);
var seq21326__$2 = cljs.core.next.call(null,seq21326__$1);
var G__21329 = cljs.core.first.call(null,seq21326__$2);
var seq21326__$3 = cljs.core.next.call(null,seq21326__$2);
var G__21330 = cljs.core.first.call(null,seq21326__$3);
var seq21326__$4 = cljs.core.next.call(null,seq21326__$3);
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$variadic(G__21327,G__21328,G__21329,G__21330,seq21326__$4);
});

cljs.core$macros.max.cljs$lang$maxFixedArity = (4);


cljs.core$macros.max.cljs$lang$macro = true;
cljs.core$macros.min = (function cljs$core$macros$min(var_args){
var args21339 = [];
var len__11385__auto___21347 = arguments.length;
var i__11386__auto___21348 = (0);
while(true){
if((i__11386__auto___21348 < len__11385__auto___21347)){
args21339.push((arguments[i__11386__auto___21348]));

var G__21349 = (i__11386__auto___21348 + (1));
i__11386__auto___21348 = G__21349;
continue;
} else {
}
break;
}

var G__21346 = args21339.length;
switch (G__21346) {
case 3:
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__11404__auto__ = (new cljs.core.IndexedSeq(args21339.slice((4)),(0),null));
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__11404__auto__);

}
});

cljs.core$macros.min.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.min.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__11114__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__21337__auto__","x__21337__auto__",1209093164,null)),(function (){var x__11114__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__21338__auto__","y__21338__auto__",233741422,null)),(function (){var x__11114__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"((~{} < ~{}) ? ~{} : ~{})"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__21337__auto__","x__21337__auto__",1209093164,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__21338__auto__","y__21338__auto__",233741422,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__21337__auto__","x__21337__auto__",1209093164,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__21338__auto__","y__21338__auto__",233741422,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
});

cljs.core$macros.min.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","min","cljs.core$macros/min",1499775161,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","min","cljs.core$macros/min",1499775161,null)),(function (){var x__11114__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),more)));
});

cljs.core$macros.min.cljs$lang$applyTo = (function (seq21340){
var G__21341 = cljs.core.first.call(null,seq21340);
var seq21340__$1 = cljs.core.next.call(null,seq21340);
var G__21342 = cljs.core.first.call(null,seq21340__$1);
var seq21340__$2 = cljs.core.next.call(null,seq21340__$1);
var G__21343 = cljs.core.first.call(null,seq21340__$2);
var seq21340__$3 = cljs.core.next.call(null,seq21340__$2);
var G__21344 = cljs.core.first.call(null,seq21340__$3);
var seq21340__$4 = cljs.core.next.call(null,seq21340__$3);
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$variadic(G__21341,G__21342,G__21343,G__21344,seq21340__$4);
});

cljs.core$macros.min.cljs$lang$maxFixedArity = (4);


cljs.core$macros.min.cljs$lang$macro = true;
cljs.core$macros.js_mod = (function cljs$core$macros$js_mod(_AMPERSAND_form,_AMPERSAND_env,num,div){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__11114__auto__ = num;
return cljs.core._conj.call(null,(function (){var x__11114__auto____$1 = div;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto____$1);
})(),x__11114__auto__);
})(),"(~{} % ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.js_mod.cljs$lang$macro = true;
cljs.core$macros.bit_not = (function cljs$core$macros$bit_not(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__11114__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),"(~ ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_not.cljs$lang$macro = true;
cljs.core$macros.bit_and = (function cljs$core$macros$bit_and(var_args){
var args21351 = [];
var len__11385__auto___21359 = arguments.length;
var i__11386__auto___21360 = (0);
while(true){
if((i__11386__auto___21360 < len__11385__auto___21359)){
args21351.push((arguments[i__11386__auto___21360]));

var G__21361 = (i__11386__auto___21360 + (1));
i__11386__auto___21360 = G__21361;
continue;
} else {
}
break;
}

var G__21358 = args21351.length;
switch (G__21358) {
case 4:
return cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__11404__auto__ = (new cljs.core.IndexedSeq(args21351.slice((4)),(0),null));
return cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__11404__auto__);

}
});

cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__11114__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__11114__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto____$1);
})(),x__11114__auto__);
})(),"(~{} & ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-and","cljs.core$macros/bit-and",-1069060797,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-and","cljs.core$macros/bit-and",-1069060797,null)),(function (){var x__11114__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),more)));
});

cljs.core$macros.bit_and.cljs$lang$applyTo = (function (seq21352){
var G__21353 = cljs.core.first.call(null,seq21352);
var seq21352__$1 = cljs.core.next.call(null,seq21352);
var G__21354 = cljs.core.first.call(null,seq21352__$1);
var seq21352__$2 = cljs.core.next.call(null,seq21352__$1);
var G__21355 = cljs.core.first.call(null,seq21352__$2);
var seq21352__$3 = cljs.core.next.call(null,seq21352__$2);
var G__21356 = cljs.core.first.call(null,seq21352__$3);
var seq21352__$4 = cljs.core.next.call(null,seq21352__$3);
return cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$variadic(G__21353,G__21354,G__21355,G__21356,seq21352__$4);
});

cljs.core$macros.bit_and.cljs$lang$maxFixedArity = (4);


cljs.core$macros.bit_and.cljs$lang$macro = true;
cljs.core$macros.unsafe_bit_and = (function cljs$core$macros$unsafe_bit_and(var_args){
var args21363 = [];
var len__11385__auto___21371 = arguments.length;
var i__11386__auto___21372 = (0);
while(true){
if((i__11386__auto___21372 < len__11385__auto___21371)){
args21363.push((arguments[i__11386__auto___21372]));

var G__21373 = (i__11386__auto___21372 + (1));
i__11386__auto___21372 = G__21373;
continue;
} else {
}
break;
}

var G__21370 = args21363.length;
switch (G__21370) {
case 4:
return cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__11404__auto__ = (new cljs.core.IndexedSeq(args21363.slice((4)),(0),null));
return cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__11404__auto__);

}
});

cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__11114__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__11114__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto____$1);
})(),x__11114__auto__);
})(),"(~{} & ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__11114__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),more)));
});

cljs.core$macros.unsafe_bit_and.cljs$lang$applyTo = (function (seq21364){
var G__21365 = cljs.core.first.call(null,seq21364);
var seq21364__$1 = cljs.core.next.call(null,seq21364);
var G__21366 = cljs.core.first.call(null,seq21364__$1);
var seq21364__$2 = cljs.core.next.call(null,seq21364__$1);
var G__21367 = cljs.core.first.call(null,seq21364__$2);
var seq21364__$3 = cljs.core.next.call(null,seq21364__$2);
var G__21368 = cljs.core.first.call(null,seq21364__$3);
var seq21364__$4 = cljs.core.next.call(null,seq21364__$3);
return cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$variadic(G__21365,G__21366,G__21367,G__21368,seq21364__$4);
});

cljs.core$macros.unsafe_bit_and.cljs$lang$maxFixedArity = (4);


cljs.core$macros.unsafe_bit_and.cljs$lang$macro = true;
cljs.core$macros.bit_or = (function cljs$core$macros$bit_or(var_args){
var args21375 = [];
var len__11385__auto___21383 = arguments.length;
var i__11386__auto___21384 = (0);
while(true){
if((i__11386__auto___21384 < len__11385__auto___21383)){
args21375.push((arguments[i__11386__auto___21384]));

var G__21385 = (i__11386__auto___21384 + (1));
i__11386__auto___21384 = G__21385;
continue;
} else {
}
break;
}

var G__21382 = args21375.length;
switch (G__21382) {
case 4:
return cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__11404__auto__ = (new cljs.core.IndexedSeq(args21375.slice((4)),(0),null));
return cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__11404__auto__);

}
});

cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__11114__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__11114__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto____$1);
})(),x__11114__auto__);
})(),"(~{} | ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-or","cljs.core$macros/bit-or",1463236165,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-or","cljs.core$macros/bit-or",1463236165,null)),(function (){var x__11114__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),more)));
});

cljs.core$macros.bit_or.cljs$lang$applyTo = (function (seq21376){
var G__21377 = cljs.core.first.call(null,seq21376);
var seq21376__$1 = cljs.core.next.call(null,seq21376);
var G__21378 = cljs.core.first.call(null,seq21376__$1);
var seq21376__$2 = cljs.core.next.call(null,seq21376__$1);
var G__21379 = cljs.core.first.call(null,seq21376__$2);
var seq21376__$3 = cljs.core.next.call(null,seq21376__$2);
var G__21380 = cljs.core.first.call(null,seq21376__$3);
var seq21376__$4 = cljs.core.next.call(null,seq21376__$3);
return cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$variadic(G__21377,G__21378,G__21379,G__21380,seq21376__$4);
});

cljs.core$macros.bit_or.cljs$lang$maxFixedArity = (4);


cljs.core$macros.bit_or.cljs$lang$macro = true;
cljs.core$macros.int$ = (function cljs$core$macros$int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-or","cljs.core$macros/bit-or",1463236165,null)),(function (){var x__11114__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)))));
});

cljs.core$macros.int$.cljs$lang$macro = true;
cljs.core$macros.bit_xor = (function cljs$core$macros$bit_xor(var_args){
var args21387 = [];
var len__11385__auto___21395 = arguments.length;
var i__11386__auto___21396 = (0);
while(true){
if((i__11386__auto___21396 < len__11385__auto___21395)){
args21387.push((arguments[i__11386__auto___21396]));

var G__21397 = (i__11386__auto___21396 + (1));
i__11386__auto___21396 = G__21397;
continue;
} else {
}
break;
}

var G__21394 = args21387.length;
switch (G__21394) {
case 4:
return cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__11404__auto__ = (new cljs.core.IndexedSeq(args21387.slice((4)),(0),null));
return cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__11404__auto__);

}
});

cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__11114__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__11114__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto____$1);
})(),x__11114__auto__);
})(),"(~{} ^ ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-xor","cljs.core$macros/bit-xor",1284619191,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-xor","cljs.core$macros/bit-xor",1284619191,null)),(function (){var x__11114__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),more)));
});

cljs.core$macros.bit_xor.cljs$lang$applyTo = (function (seq21388){
var G__21389 = cljs.core.first.call(null,seq21388);
var seq21388__$1 = cljs.core.next.call(null,seq21388);
var G__21390 = cljs.core.first.call(null,seq21388__$1);
var seq21388__$2 = cljs.core.next.call(null,seq21388__$1);
var G__21391 = cljs.core.first.call(null,seq21388__$2);
var seq21388__$3 = cljs.core.next.call(null,seq21388__$2);
var G__21392 = cljs.core.first.call(null,seq21388__$3);
var seq21388__$4 = cljs.core.next.call(null,seq21388__$3);
return cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$variadic(G__21389,G__21390,G__21391,G__21392,seq21388__$4);
});

cljs.core$macros.bit_xor.cljs$lang$maxFixedArity = (4);


cljs.core$macros.bit_xor.cljs$lang$macro = true;
cljs.core$macros.bit_and_not = (function cljs$core$macros$bit_and_not(var_args){
var args21399 = [];
var len__11385__auto___21407 = arguments.length;
var i__11386__auto___21408 = (0);
while(true){
if((i__11386__auto___21408 < len__11385__auto___21407)){
args21399.push((arguments[i__11386__auto___21408]));

var G__21409 = (i__11386__auto___21408 + (1));
i__11386__auto___21408 = G__21409;
continue;
} else {
}
break;
}

var G__21406 = args21399.length;
switch (G__21406) {
case 4:
return cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__11404__auto__ = (new cljs.core.IndexedSeq(args21399.slice((4)),(0),null));
return cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__11404__auto__);

}
});

cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__11114__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__11114__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto____$1);
})(),x__11114__auto__);
})(),"(~{} & ~~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-and-not","cljs.core$macros/bit-and-not",-537076037,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-and-not","cljs.core$macros/bit-and-not",-537076037,null)),(function (){var x__11114__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),more)));
});

cljs.core$macros.bit_and_not.cljs$lang$applyTo = (function (seq21400){
var G__21401 = cljs.core.first.call(null,seq21400);
var seq21400__$1 = cljs.core.next.call(null,seq21400);
var G__21402 = cljs.core.first.call(null,seq21400__$1);
var seq21400__$2 = cljs.core.next.call(null,seq21400__$1);
var G__21403 = cljs.core.first.call(null,seq21400__$2);
var seq21400__$3 = cljs.core.next.call(null,seq21400__$2);
var G__21404 = cljs.core.first.call(null,seq21400__$3);
var seq21400__$4 = cljs.core.next.call(null,seq21400__$3);
return cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$variadic(G__21401,G__21402,G__21403,G__21404,seq21400__$4);
});

cljs.core$macros.bit_and_not.cljs$lang$maxFixedArity = (4);


cljs.core$macros.bit_and_not.cljs$lang$macro = true;
cljs.core$macros.bit_clear = (function cljs$core$macros$bit_clear(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__11114__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__11114__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto____$1);
})(),x__11114__auto__);
})(),"(~{} & ~(1 << ~{}))"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_clear.cljs$lang$macro = true;
cljs.core$macros.bit_flip = (function cljs$core$macros$bit_flip(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__11114__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__11114__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto____$1);
})(),x__11114__auto__);
})(),"(~{} ^ (1 << ~{}))"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_flip.cljs$lang$macro = true;
cljs.core$macros.bit_test = (function cljs$core$macros$bit_test(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__11114__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__11114__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto____$1);
})(),x__11114__auto__);
})(),"((~{} & (1 << ~{})) != 0)"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.bit_test.cljs$lang$macro = true;
cljs.core$macros.bit_shift_left = (function cljs$core$macros$bit_shift_left(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__11114__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__11114__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto____$1);
})(),x__11114__auto__);
})(),"(~{} << ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_shift_left.cljs$lang$macro = true;
cljs.core$macros.bit_shift_right = (function cljs$core$macros$bit_shift_right(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__11114__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__11114__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto____$1);
})(),x__11114__auto__);
})(),"(~{} >> ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_shift_right.cljs$lang$macro = true;
cljs.core$macros.bit_shift_right_zero_fill = (function cljs$core$macros$bit_shift_right_zero_fill(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__11114__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__11114__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto____$1);
})(),x__11114__auto__);
})(),"(~{} >>> ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_shift_right_zero_fill.cljs$lang$macro = true;
cljs.core$macros.unsigned_bit_shift_right = (function cljs$core$macros$unsigned_bit_shift_right(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__11114__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__11114__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto____$1);
})(),x__11114__auto__);
})(),"(~{} >>> ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.unsigned_bit_shift_right.cljs$lang$macro = true;
cljs.core$macros.bit_set = (function cljs$core$macros$bit_set(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__11114__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__11114__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto____$1);
})(),x__11114__auto__);
})(),"(~{} | (1 << ~{}))"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_set.cljs$lang$macro = true;
cljs.core$macros.mask = (function cljs$core$macros$mask(_AMPERSAND_form,_AMPERSAND_env,hash,shift){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__11114__auto__ = hash;
return cljs.core._conj.call(null,(function (){var x__11114__auto____$1 = shift;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto____$1);
})(),x__11114__auto__);
})(),"((~{} >>> ~{}) & 0x01f)"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.mask.cljs$lang$macro = true;
cljs.core$macros.bitpos = (function cljs$core$macros$bitpos(_AMPERSAND_form,_AMPERSAND_env,hash,shift){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","mask","cljs.core$macros/mask",1575319768,null)),(function (){var x__11114__auto__ = hash;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = shift;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),"(1 << ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bitpos.cljs$lang$macro = true;
cljs.core$macros.caching_hash = (function cljs$core$macros$caching_hash(_AMPERSAND_form,_AMPERSAND_env,coll,hash_fn,hash_key){
if((hash_key instanceof cljs.core.Symbol)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("hash-key is substituted twice"),cljs.core.str("\n"),cljs.core.str("(clojure.core/symbol? hash-key)")].join('')));
}

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__11114__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__21411__auto__","h__21411__auto__",-1439220209,null)),(function (){var x__11114__auto__ = hash_key;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__21411__auto__","h__21411__auto__",-1439220209,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__21411__auto__","h__21411__auto__",-1439220209,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__11114__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__21411__auto__","h__21411__auto__",-1439220209,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__11114__auto__ = hash_fn;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = coll;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__11114__auto__ = hash_key;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__21411__auto__","h__21411__auto__",-1439220209,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__21411__auto__","h__21411__auto__",-1439220209,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
});

cljs.core$macros.caching_hash.cljs$lang$macro = true;
cljs.core$macros.do_curried = (function cljs$core$macros$do_curried(name,doc,meta,args,body){
var cargs = cljs.core.vec.call(null,cljs.core.butlast.call(null,args));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null)),(function (){var x__11114__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = doc;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = meta;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__11114__auto__ = cargs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__11114__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__21412__auto__","x__21412__auto__",-1039982438,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__11114__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),cargs,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__21412__auto__","x__21412__auto__",-1039982438,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__11114__auto__ = args;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
});
/**
 * Builds another arity of the fn that returns a fn awaiting the last
 *   param
 */
cljs.core$macros.defcurried = (function cljs$core$macros$defcurried(var_args){
var args__11392__auto__ = [];
var len__11385__auto___21420 = arguments.length;
var i__11386__auto___21421 = (0);
while(true){
if((i__11386__auto___21421 < len__11385__auto___21420)){
args__11392__auto__.push((arguments[i__11386__auto___21421]));

var G__21422 = (i__11386__auto___21421 + (1));
i__11386__auto___21421 = G__21422;
continue;
} else {
}
break;
}

var argseq__11393__auto__ = ((((6) < args__11392__auto__.length))?(new cljs.core.IndexedSeq(args__11392__auto__.slice((6)),(0),null)):null);
return cljs.core$macros.defcurried.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),argseq__11393__auto__);
});

cljs.core$macros.defcurried.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,doc,meta,args,body){
return cljs.core$macros.do_curried.call(null,name,doc,meta,args,body);
});

cljs.core$macros.defcurried.cljs$lang$maxFixedArity = (6);

cljs.core$macros.defcurried.cljs$lang$applyTo = (function (seq21413){
var G__21414 = cljs.core.first.call(null,seq21413);
var seq21413__$1 = cljs.core.next.call(null,seq21413);
var G__21415 = cljs.core.first.call(null,seq21413__$1);
var seq21413__$2 = cljs.core.next.call(null,seq21413__$1);
var G__21416 = cljs.core.first.call(null,seq21413__$2);
var seq21413__$3 = cljs.core.next.call(null,seq21413__$2);
var G__21417 = cljs.core.first.call(null,seq21413__$3);
var seq21413__$4 = cljs.core.next.call(null,seq21413__$3);
var G__21418 = cljs.core.first.call(null,seq21413__$4);
var seq21413__$5 = cljs.core.next.call(null,seq21413__$4);
var G__21419 = cljs.core.first.call(null,seq21413__$5);
var seq21413__$6 = cljs.core.next.call(null,seq21413__$5);
return cljs.core$macros.defcurried.cljs$core$IFn$_invoke$arity$variadic(G__21414,G__21415,G__21416,G__21417,G__21418,G__21419,seq21413__$6);
});


cljs.core$macros.defcurried.cljs$lang$macro = true;
cljs.core$macros.do_rfn = (function cljs$core$macros$do_rfn(f1,k,fkv){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__11114__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__11114__auto__ = f1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = clojure.walk.postwalk.call(null,(function (p1__21423_SHARP_){
if(cljs.core.sequential_QMARK_.call(null,p1__21423_SHARP_)){
return ((cljs.core.vector_QMARK_.call(null,p1__21423_SHARP_))?cljs.core.vec:cljs.core.identity).call(null,cljs.core.remove.call(null,cljs.core.PersistentHashSet.fromArray([k], true),p1__21423_SHARP_));
} else {
return p1__21423_SHARP_;
}
}),fkv);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = fkv;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
});
/**
 * Builds 3-arity reducing fn given names of wrapped fn and key, and k/v impl.
 */
cljs.core$macros.rfn = (function cljs$core$macros$rfn(_AMPERSAND_form,_AMPERSAND_env,p__21424,fkv){
var vec__21428 = p__21424;
var f1 = cljs.core.nth.call(null,vec__21428,(0),null);
var k = cljs.core.nth.call(null,vec__21428,(1),null);
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
var args__11392__auto__ = [];
var len__11385__auto___21434 = arguments.length;
var i__11386__auto___21435 = (0);
while(true){
if((i__11386__auto___21435 < len__11385__auto___21434)){
args__11392__auto__.push((arguments[i__11386__auto___21435]));

var G__21436 = (i__11386__auto___21435 + (1));
i__11386__auto___21435 = G__21436;
continue;
} else {
}
break;
}

var argseq__11393__auto__ = ((((2) < args__11392__auto__.length))?(new cljs.core.IndexedSeq(args__11392__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.reify.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__11393__auto__);
});

cljs.core$macros.reify.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,impls){
var t = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,[cljs.core.str("t_"),cljs.core.str(clojure.string.replace.call(null,[cljs.core.str(cljs.core.munge.call(null,cljs.analyzer._STAR_cljs_ns_STAR_))].join(''),".","$"))].join('')),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"anonymous","anonymous",447897231),true], null));
var meta_sym = cljs.core.gensym.call(null,"meta");
var this_sym = cljs.core.gensym.call(null,"_");
var locals = cljs.core.keys.call(null,new cljs.core.Keyword(null,"locals","locals",535295783).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
var ns = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
var munge = cljs.compiler.munge;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-not","cljs.core$macros/when-not",-764302244,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","exists?","cljs.core$macros/exists?",-1828590389,null)),(function (){var x__11114__auto__ = cljs.core.symbol.call(null,[cljs.core.str(ns)].join(''),[cljs.core.str(t)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","deftype","cljs.core$macros/deftype",1799045688,null)),(function (){var x__11114__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,locals,(function (){var x__11114__auto__ = meta_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","IWithMeta","cljs.core/IWithMeta",-1981666051,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-with-meta","-with-meta",-1610713823,null)),(function (){var x__11114__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__11114__auto__ = this_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = meta_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__11114__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),locals,(function (){var x__11114__auto__ = meta_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","IMeta","cljs.core/IMeta",-1459057517,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-meta","-meta",494863156,null)),(function (){var x__11114__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__11114__auto__ = this_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = meta_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),impls)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__11114__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),locals,(function (){var x__11114__auto__ = cljs.analyzer.elide_reader_meta.call(null,cljs.core.meta.call(null,_AMPERSAND_form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
});

cljs.core$macros.reify.cljs$lang$maxFixedArity = (2);

cljs.core$macros.reify.cljs$lang$applyTo = (function (seq21431){
var G__21432 = cljs.core.first.call(null,seq21431);
var seq21431__$1 = cljs.core.next.call(null,seq21431);
var G__21433 = cljs.core.first.call(null,seq21431__$1);
var seq21431__$2 = cljs.core.next.call(null,seq21431__$1);
return cljs.core$macros.reify.cljs$core$IFn$_invoke$arity$variadic(G__21432,G__21433,seq21431__$2);
});


cljs.core$macros.reify.cljs$lang$macro = true;
/**
 * Identical to reify but mutates its first argument.
 */
cljs.core$macros.specify_BANG_ = (function cljs$core$macros$specify_BANG_(var_args){
var args__11392__auto__ = [];
var len__11385__auto___21441 = arguments.length;
var i__11386__auto___21442 = (0);
while(true){
if((i__11386__auto___21442 < len__11385__auto___21441)){
args__11392__auto__.push((arguments[i__11386__auto___21442]));

var G__21443 = (i__11386__auto___21442 + (1));
i__11386__auto___21442 = G__21443;
continue;
} else {
}
break;
}

var argseq__11393__auto__ = ((((3) < args__11392__auto__.length))?(new cljs.core.IndexedSeq(args__11392__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.specify_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__11393__auto__);
});

cljs.core$macros.specify_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,impls){
var x = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"x"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"extend","extend",1836484006),new cljs.core.Keyword(null,"instance","instance",-2121349050)], null));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__11114__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__11114__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","extend-type","cljs.core$macros/extend-type",1713295201,null)),(function (){var x__11114__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),impls)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
});

cljs.core$macros.specify_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.specify_BANG_.cljs$lang$applyTo = (function (seq21437){
var G__21438 = cljs.core.first.call(null,seq21437);
var seq21437__$1 = cljs.core.next.call(null,seq21437);
var G__21439 = cljs.core.first.call(null,seq21437__$1);
var seq21437__$2 = cljs.core.next.call(null,seq21437__$1);
var G__21440 = cljs.core.first.call(null,seq21437__$2);
var seq21437__$3 = cljs.core.next.call(null,seq21437__$2);
return cljs.core$macros.specify_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__21438,G__21439,G__21440,seq21437__$3);
});


cljs.core$macros.specify_BANG_.cljs$lang$macro = true;
/**
 * Identical to specify! but does not mutate its first argument. The first
 *   argument must be an ICloneable instance.
 */
cljs.core$macros.specify = (function cljs$core$macros$specify(var_args){
var args__11392__auto__ = [];
var len__11385__auto___21448 = arguments.length;
var i__11386__auto___21449 = (0);
while(true){
if((i__11386__auto___21449 < len__11385__auto___21448)){
args__11392__auto__.push((arguments[i__11386__auto___21449]));

var G__21450 = (i__11386__auto___21449 + (1));
i__11386__auto___21449 = G__21450;
continue;
} else {
}
break;
}

var argseq__11393__auto__ = ((((3) < args__11392__auto__.length))?(new cljs.core.IndexedSeq(args__11392__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.specify.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__11393__auto__);
});

cljs.core$macros.specify.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,impls){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","specify!","cljs.core/specify!",-585401629,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","clone","cljs.core/clone",1417120092,null)),(function (){var x__11114__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),impls)));
});

cljs.core$macros.specify.cljs$lang$maxFixedArity = (3);

cljs.core$macros.specify.cljs$lang$applyTo = (function (seq21444){
var G__21445 = cljs.core.first.call(null,seq21444);
var seq21444__$1 = cljs.core.next.call(null,seq21444);
var G__21446 = cljs.core.first.call(null,seq21444__$1);
var seq21444__$2 = cljs.core.next.call(null,seq21444__$1);
var G__21447 = cljs.core.first.call(null,seq21444__$2);
var seq21444__$3 = cljs.core.next.call(null,seq21444__$2);
return cljs.core$macros.specify.cljs$core$IFn$_invoke$arity$variadic(G__21445,G__21446,G__21447,seq21444__$3);
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
var args__11392__auto__ = [];
var len__11385__auto___21455 = arguments.length;
var i__11386__auto___21456 = (0);
while(true){
if((i__11386__auto___21456 < len__11385__auto___21455)){
args__11392__auto__.push((arguments[i__11386__auto___21456]));

var G__21457 = (i__11386__auto___21456 + (1));
i__11386__auto___21456 = G__21457;
continue;
} else {
}
break;
}

var argseq__11393__auto__ = ((((3) < args__11392__auto__.length))?(new cljs.core.IndexedSeq(args__11392__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.this_as.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__11393__auto__);
});

cljs.core$macros.this_as.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__11114__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__11114__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-this","cljs.core$macros/js-this",353597180,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),body)));
});

cljs.core$macros.this_as.cljs$lang$maxFixedArity = (3);

cljs.core$macros.this_as.cljs$lang$applyTo = (function (seq21451){
var G__21452 = cljs.core.first.call(null,seq21451);
var seq21451__$1 = cljs.core.next.call(null,seq21451);
var G__21453 = cljs.core.first.call(null,seq21451__$1);
var seq21451__$2 = cljs.core.next.call(null,seq21451__$1);
var G__21454 = cljs.core.first.call(null,seq21451__$2);
var seq21451__$3 = cljs.core.next.call(null,seq21451__$2);
return cljs.core$macros.this_as.cljs$core$IFn$_invoke$arity$variadic(G__21452,G__21453,G__21454,seq21451__$3);
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

if(cljs.core.truth_((function (){var and__10265__auto__ = new cljs.core.Keyword(null,"protocol-deprecated","protocol-deprecated",103233497).cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_warnings_STAR_);
if(cljs.core.truth_(and__10265__auto__)){
var and__10265__auto____$1 = new cljs.core.Keyword(null,"deprecated","deprecated",1498275348).cljs$core$IFn$_invoke$arity$1(var$);
if(cljs.core.truth_(and__10265__auto____$1)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"deprecation-nowarn","deprecation-nowarn",-1762828044).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,p)));
} else {
return and__10265__auto____$1;
}
} else {
return and__10265__auto__;
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
var G__21458 = cljs.core.assoc.call(null,ret,cljs.core.first.call(null,s),cljs.core.take_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,s)));
var G__21459 = cljs.core.drop_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,s));
ret = G__21458;
s = G__21459;
continue;
} else {
return ret;
}
break;
}
});
cljs.core$macros.base_assign_impls = (function cljs$core$macros$base_assign_impls(env,resolve,tsym,type,p__21460){
var vec__21468 = p__21460;
var p = cljs.core.nth.call(null,vec__21468,(0),null);
var sigs = cljs.core.nth.call(null,vec__21468,(1),null);
cljs.core$macros.warn_and_update_protocol.call(null,p,tsym,env);

var psym = resolve.call(null,p);
var pfn_prefix = cljs.core.subs.call(null,[cljs.core.str(psym)].join(''),(0),([cljs.core.str(psym)].join('').indexOf("/") + (1)));
return cljs.core.cons.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aset","cljs.core$macros/aset",-693176374,null)),(function (){var x__11114__auto__ = psym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = type;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true)))),cljs.core.map.call(null,((function (psym,pfn_prefix,vec__21468,p,sigs){
return (function (p__21471){
var vec__21472 = p__21471;
var seq__21473 = cljs.core.seq.call(null,vec__21472);
var first__21474 = cljs.core.first.call(null,seq__21473);
var seq__21473__$1 = cljs.core.next.call(null,seq__21473);
var f = first__21474;
var meths = seq__21473__$1;
var form = vec__21472;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aset","cljs.core$macros/aset",-693176374,null)),(function (){var x__11114__auto__ = cljs.core.symbol.call(null,[cljs.core.str(pfn_prefix),cljs.core.str(f)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = type;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),meths))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
});})(psym,pfn_prefix,vec__21468,p,sigs))
,sigs));
});
if(typeof cljs.core$macros.extend_prefix !== 'undefined'){
} else {
cljs.core$macros.extend_prefix = (function (){var method_table__11205__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__11206__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__11207__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__11208__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__11209__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.core$macros","extend-prefix"),((function (method_table__11205__auto__,prefer_table__11206__auto__,method_cache__11207__auto__,cached_hierarchy__11208__auto__,hierarchy__11209__auto__){
return (function (tsym,sym){
return new cljs.core.Keyword(null,"extend","extend",1836484006).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,tsym));
});})(method_table__11205__auto__,prefer_table__11206__auto__,method_cache__11207__auto__,cached_hierarchy__11208__auto__,hierarchy__11209__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__11209__auto__,method_table__11205__auto__,prefer_table__11206__auto__,method_cache__11207__auto__,cached_hierarchy__11208__auto__));
})();
}
cljs.core._add_method.call(null,cljs.core$macros.extend_prefix,new cljs.core.Keyword(null,"instance","instance",-2121349050),(function (tsym,sym){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"..","..",-300507420,null)),(function (){var x__11114__auto__ = tsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core$macros.to_property.call(null,sym);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
}));
cljs.core._add_method.call(null,cljs.core$macros.extend_prefix,new cljs.core.Keyword(null,"default","default",-1987822328),(function (tsym,sym){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"..","..",-300507420,null)),(function (){var x__11114__auto__ = tsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-prototype","-prototype",-450831903,null)),(function (){var x__11114__auto__ = cljs.core$macros.to_property.call(null,sym);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
}));
cljs.core$macros.adapt_obj_params = (function cljs$core$macros$adapt_obj_params(type,p__21475){
var vec__21482 = p__21475;
var seq__21483 = cljs.core.seq.call(null,vec__21482);
var first__21484 = cljs.core.first.call(null,seq__21483);
var seq__21483__$1 = cljs.core.next.call(null,seq__21483);
var vec__21485 = first__21484;
var seq__21486 = cljs.core.seq.call(null,vec__21485);
var first__21487 = cljs.core.first.call(null,seq__21486);
var seq__21486__$1 = cljs.core.next.call(null,seq__21486);
var this$ = first__21487;
var args = seq__21486__$1;
var sig = vec__21485;
var body = seq__21483__$1;
var x__11114__auto__ = cljs.core.vec.call(null,args);
return cljs.core._conj.call(null,(function (){var x__11114__auto____$1 = cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"this-as","this-as",-848995740,null),cljs.core.vary_meta.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),type),body);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto____$1);
})(),x__11114__auto__);
});
cljs.core$macros.adapt_ifn_params = (function cljs$core$macros$adapt_ifn_params(type,p__21488){
var vec__21495 = p__21488;
var seq__21496 = cljs.core.seq.call(null,vec__21495);
var first__21497 = cljs.core.first.call(null,seq__21496);
var seq__21496__$1 = cljs.core.next.call(null,seq__21496);
var vec__21498 = first__21497;
var seq__21499 = cljs.core.seq.call(null,vec__21498);
var first__21500 = cljs.core.first.call(null,seq__21499);
var seq__21499__$1 = cljs.core.next.call(null,seq__21499);
var this$ = first__21500;
var args = seq__21499__$1;
var sig = vec__21498;
var body = seq__21496__$1;
var self_sym = cljs.core.with_meta.call(null,new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),type], null));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__11114__auto__ = cljs.core.vec.call(null,cljs.core.cons.call(null,self_sym,args));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null)),(function (){var x__11114__auto__ = self_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__11114__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__11114__auto__ = this$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = self_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
});
cljs.core$macros.adapt_ifn_invoke_params = (function cljs$core$macros$adapt_ifn_invoke_params(type,p__21501){
var vec__21508 = p__21501;
var seq__21509 = cljs.core.seq.call(null,vec__21508);
var first__21510 = cljs.core.first.call(null,seq__21509);
var seq__21509__$1 = cljs.core.next.call(null,seq__21509);
var vec__21511 = first__21510;
var seq__21512 = cljs.core.seq.call(null,vec__21511);
var first__21513 = cljs.core.first.call(null,seq__21512);
var seq__21512__$1 = cljs.core.next.call(null,seq__21512);
var this$ = first__21513;
var args = seq__21512__$1;
var sig = vec__21511;
var body = seq__21509__$1;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__11114__auto__ = cljs.core.vec.call(null,args);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null)),(function (){var x__11114__auto__ = cljs.core.vary_meta.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),type);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
});
cljs.core$macros.adapt_proto_params = (function cljs$core$macros$adapt_proto_params(type,p__21514){
var vec__21521 = p__21514;
var seq__21522 = cljs.core.seq.call(null,vec__21521);
var first__21523 = cljs.core.first.call(null,seq__21522);
var seq__21522__$1 = cljs.core.next.call(null,seq__21522);
var vec__21524 = first__21523;
var seq__21525 = cljs.core.seq.call(null,vec__21524);
var first__21526 = cljs.core.first.call(null,seq__21525);
var seq__21525__$1 = cljs.core.next.call(null,seq__21525);
var this$ = first__21526;
var args = seq__21525__$1;
var sig = vec__21524;
var body = seq__21522__$1;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__11114__auto__ = cljs.core.vec.call(null,cljs.core.cons.call(null,cljs.core.vary_meta.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),type),args));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null)),(function (){var x__11114__auto__ = this$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
});
cljs.core$macros.add_obj_methods = (function cljs$core$macros$add_obj_methods(type,type_sym,sigs){
return cljs.core.map.call(null,(function (p__21535){
var vec__21536 = p__21535;
var seq__21537 = cljs.core.seq.call(null,vec__21536);
var first__21538 = cljs.core.first.call(null,seq__21537);
var seq__21537__$1 = cljs.core.next.call(null,seq__21537);
var f = first__21538;
var meths = seq__21537__$1;
var form = vec__21536;
var vec__21539 = ((cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,meths)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rest.call(null,form)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,meths], null));
var f__$1 = cljs.core.nth.call(null,vec__21539,(0),null);
var meths__$1 = cljs.core.nth.call(null,vec__21539,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__11114__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,f__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),cljs.core.map.call(null,((function (vec__21539,f__$1,meths__$1,vec__21536,seq__21537,first__21538,seq__21537__$1,f,meths,form){
return (function (p1__21527_SHARP_){
return cljs.core$macros.adapt_obj_params.call(null,type,p1__21527_SHARP_);
});})(vec__21539,f__$1,meths__$1,vec__21536,seq__21537,first__21538,seq__21537__$1,f,meths,form))
,meths__$1)))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
}),sigs);
});
cljs.core$macros.ifn_invoke_methods = (function cljs$core$macros$ifn_invoke_methods(type,type_sym,p__21543){
var vec__21547 = p__21543;
var seq__21548 = cljs.core.seq.call(null,vec__21547);
var first__21549 = cljs.core.first.call(null,seq__21548);
var seq__21548__$1 = cljs.core.next.call(null,seq__21548);
var f = first__21549;
var meths = seq__21548__$1;
var form = vec__21547;
return cljs.core.map.call(null,((function (vec__21547,seq__21548,first__21549,seq__21548__$1,f,meths,form){
return (function (meth){
var arity = cljs.core.count.call(null,cljs.core.first.call(null,meth));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__11114__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,cljs.core.symbol.call(null,[cljs.core.str("cljs$core$IFn$_invoke$arity$"),cljs.core.str(arity)].join('')));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__11114__auto__ = meth;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})()))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
});})(vec__21547,seq__21548,first__21549,seq__21548__$1,f,meths,form))
,cljs.core.map.call(null,((function (vec__21547,seq__21548,first__21549,seq__21548__$1,f,meths,form){
return (function (p1__21542_SHARP_){
return cljs.core$macros.adapt_ifn_invoke_params.call(null,type,p1__21542_SHARP_);
});})(vec__21547,seq__21548,first__21549,seq__21548__$1,f,meths,form))
,meths));
});
cljs.core$macros.add_ifn_methods = (function cljs$core$macros$add_ifn_methods(type,type_sym,p__21551){
var vec__21555 = p__21551;
var seq__21556 = cljs.core.seq.call(null,vec__21555);
var first__21557 = cljs.core.first.call(null,seq__21556);
var seq__21556__$1 = cljs.core.next.call(null,seq__21556);
var f = first__21557;
var meths = seq__21556__$1;
var form = vec__21555;
var meths__$1 = cljs.core.map.call(null,((function (vec__21555,seq__21556,first__21557,seq__21556__$1,f,meths,form){
return (function (p1__21550_SHARP_){
return cljs.core$macros.adapt_ifn_params.call(null,type,p1__21550_SHARP_);
});})(vec__21555,seq__21556,first__21557,seq__21556__$1,f,meths,form))
,meths);
var this_sym = cljs.core.with_meta.call(null,new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),type], null));
var argsym = cljs.core.gensym.call(null,"args");
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__11114__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,new cljs.core.Symbol(null,"call","call",1120531661,null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),meths__$1))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})()))),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__11114__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,new cljs.core.Symbol(null,"apply","apply",-1334050276,null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__11114__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this_sym,argsym], null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null)),(function (){var x__11114__auto__ = this_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".apply",".apply",-1176201338,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-call",".-call",1760541695,null)),(function (){var x__11114__auto__ = this_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = this_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".concat",".concat",1180408684,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),(function (){var x__11114__auto__ = this_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","aclone","cljs.core/aclone",-758078968,null)),(function (){var x__11114__auto__ = argsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})()))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())))], null),cljs.core$macros.ifn_invoke_methods.call(null,type,type_sym,form));
});
cljs.core$macros.add_proto_methods_STAR_ = (function cljs$core$macros$add_proto_methods_STAR_(pprefix,type,type_sym,p__21558){
var vec__21566 = p__21558;
var seq__21567 = cljs.core.seq.call(null,vec__21566);
var first__21568 = cljs.core.first.call(null,seq__21567);
var seq__21567__$1 = cljs.core.next.call(null,seq__21567);
var f = first__21568;
var meths = seq__21567__$1;
var form = vec__21566;
var pf = [cljs.core.str(pprefix),cljs.core.str(cljs.core.name.call(null,f))].join('');
if(cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,meths))){
var meth = meths;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__11114__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,[cljs.core.str(pf),cljs.core.str("$arity$"),cljs.core.str(cljs.core.count.call(null,cljs.core.first.call(null,meth)))].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),cljs.core$macros.adapt_proto_params.call(null,type,meth)))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())))], null);
} else {
return cljs.core.map.call(null,((function (pf,vec__21566,seq__21567,first__21568,seq__21567__$1,f,meths,form){
return (function (p__21569){
var vec__21570 = p__21569;
var seq__21571 = cljs.core.seq.call(null,vec__21570);
var first__21572 = cljs.core.first.call(null,seq__21571);
var seq__21571__$1 = cljs.core.next.call(null,seq__21571);
var sig = first__21572;
var body = seq__21571__$1;
var meth = vec__21570;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__11114__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,[cljs.core.str(pf),cljs.core.str("$arity$"),cljs.core.str(cljs.core.count.call(null,sig))].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__11114__auto__ = cljs.core$macros.adapt_proto_params.call(null,type,meth);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})()))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
});})(pf,vec__21566,seq__21567,first__21568,seq__21567__$1,f,meths,form))
,meths);
}
});
cljs.core$macros.proto_assign_impls = (function cljs$core$macros$proto_assign_impls(env,resolve,type_sym,type,p__21573){
var vec__21577 = p__21573;
var p = cljs.core.nth.call(null,vec__21577,(0),null);
var sigs = cljs.core.nth.call(null,vec__21577,(1),null);
cljs.core$macros.warn_and_update_protocol.call(null,p,type,env);

var psym = resolve.call(null,p);
var pprefix = cljs.core$macros.protocol_prefix.call(null,psym);
var skip_flag = cljs.core.set.call(null,new cljs.core.Keyword(null,"skip-protocol-flag","skip-protocol-flag",-1426798630).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,type_sym)));
if(cljs.core._EQ_.call(null,p,new cljs.core.Symbol(null,"Object","Object",61210754,null))){
return cljs.core$macros.add_obj_methods.call(null,type,type_sym,sigs);
} else {
return cljs.core.concat.call(null,(cljs.core.truth_(skip_flag.call(null,psym))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__11114__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,pprefix);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PROTOCOL_SENTINEL","cljs.core/PROTOCOL_SENTINEL",210209696,null)))))], null)),cljs.core.mapcat.call(null,((function (psym,pprefix,skip_flag,vec__21577,p,sigs){
return (function (sig){
if(cljs.core._EQ_.call(null,psym,new cljs.core.Symbol("cljs.core","IFn","cljs.core/IFn",-920223129,null))){
return cljs.core$macros.add_ifn_methods.call(null,type,type_sym,sig);
} else {
return cljs.core$macros.add_proto_methods_STAR_.call(null,pprefix,type,type_sym,sig);
}
});})(psym,pprefix,skip_flag,vec__21577,p,sigs))
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
var vec__21583 = ((cljs.core.vector_QMARK_.call(null,cljs.core.second.call(null,method)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [__GT_name.call(null,method_name),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second.call(null,method)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [__GT_name.call(null,method_name),cljs.core.map.call(null,cljs.core.first,cljs.core.rest.call(null,method))], null));
var fname = cljs.core.nth.call(null,vec__21583,(0),null);
var sigs = cljs.core.nth.call(null,vec__21583,(1),null);
var decmeths = cljs.core.get.call(null,minfo,fname,new cljs.core.Keyword("cljs.core$macros","not-found","cljs.core$macros/not-found",-1226326556));
if(cljs.core._EQ_.call(null,decmeths,new cljs.core.Keyword("cljs.core$macros","not-found","cljs.core$macros/not-found",-1226326556))){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),env,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p,new cljs.core.Keyword(null,"fname","fname",1500291491),fname,new cljs.core.Keyword(null,"no-such-method","no-such-method",1087422840),true], null));
} else {
}

if(cljs.core.truth_(cljs.core.namespace.call(null,method_name))){
var method_var_21586 = cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),method_name,cljs.analyzer.confirm_var_exist_warning);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(var$),new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(method_var_21586))){
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

var G__21587 = cljs.core.next.call(null,sigs__$1);
var G__21588 = cljs.core.conj.call(null,seen,c);
sigs__$1 = G__21587;
seen = G__21588;
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

var seen_21595 = cljs.core.PersistentHashSet.EMPTY;
var methods_21596__$1 = methods$;
while(true){
if(cljs.core.seq.call(null,methods_21596__$1)){
var vec__21592_21597 = cljs.core.first.call(null,methods_21596__$1);
var fname_21598 = cljs.core.nth.call(null,vec__21592_21597,(0),null);
var method_21599 = vec__21592_21597;
if(cljs.core.contains_QMARK_.call(null,seen_21595,fname_21598)){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"extend-type-invalid-method-shape","extend-type-invalid-method-shape",1424103549),env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"protocol","protocol",652470118),proto,new cljs.core.Keyword(null,"method","method",55703592),fname_21598], null));
} else {
}

cljs.core$macros.validate_impl_sigs.call(null,env,proto,method_21599);

var G__21600 = cljs.core.conj.call(null,seen_21595,fname_21598);
var G__21601 = cljs.core.next.call(null,methods_21596__$1);
seen_21595 = G__21600;
methods_21596__$1 = G__21601;
continue;
} else {
}
break;
}

var G__21602 = cljs.core.conj.call(null,protos,proto);
var G__21603 = impls__$2;
protos = G__21602;
impls__$1 = G__21603;
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
var args__11392__auto__ = [];
var len__11385__auto___21612 = arguments.length;
var i__11386__auto___21613 = (0);
while(true){
if((i__11386__auto___21613 < len__11385__auto___21612)){
args__11392__auto__.push((arguments[i__11386__auto___21613]));

var G__21614 = (i__11386__auto___21613 + (1));
i__11386__auto___21613 = G__21614;
continue;
} else {
}
break;
}

var argseq__11393__auto__ = ((((3) < args__11392__auto__.length))?(new cljs.core.IndexedSeq(args__11392__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.extend_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__11393__auto__);
});

cljs.core$macros.extend_type.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,type_sym,impls){
var env = _AMPERSAND_env;
var _ = cljs.core$macros.validate_impls.call(null,env,impls);
var resolve = cljs.core.partial.call(null,cljs.core$macros.resolve_var,env);
var impl_map = cljs.core$macros.__GT_impl_map.call(null,impls);
var impl_map__$1 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null,new cljs.core.Symbol(null,"number","number",-1084057331,null),null], null), null).call(null,type_sym))?cljs.core$macros.type_hint_impl_map.call(null,type_sym,impl_map):impl_map);
var vec__21609 = (function (){var temp__4655__auto__ = cljs.core$macros.base_type.call(null,type_sym);
if(cljs.core.truth_(temp__4655__auto__)){
var type = temp__4655__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core$macros.base_assign_impls], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [resolve.call(null,type_sym),cljs.core$macros.proto_assign_impls], null);
}
})();
var type = cljs.core.nth.call(null,vec__21609,(0),null);
var assign_impls = cljs.core.nth.call(null,vec__21609,(1),null);
if(cljs.core.truth_((function (){var and__10265__auto__ = new cljs.core.Keyword(null,"extending-base-js-type","extending-base-js-type",432787264).cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_warnings_STAR_);
if(cljs.core.truth_(and__10265__auto__)){
return cljs.core$macros.js_base_type.call(null,type_sym);
} else {
return and__10265__auto__;
}
})())){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"extending-base-js-type","extending-base-js-type",432787264),env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-symbol","current-symbol",-932381075),type_sym,new cljs.core.Keyword(null,"suggested-symbol","suggested-symbol",-1329631875),cljs.core$macros.js_base_type.call(null,type_sym)], null));
} else {
}

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),cljs.core.mapcat.call(null,((function (env,_,resolve,impl_map,impl_map__$1,vec__21609,type,assign_impls){
return (function (p1__21604_SHARP_){
return assign_impls.call(null,env,resolve,type_sym,type,p1__21604_SHARP_);
});})(env,_,resolve,impl_map,impl_map__$1,vec__21609,type,assign_impls))
,impl_map__$1))));
});

cljs.core$macros.extend_type.cljs$lang$maxFixedArity = (3);

cljs.core$macros.extend_type.cljs$lang$applyTo = (function (seq21605){
var G__21606 = cljs.core.first.call(null,seq21605);
var seq21605__$1 = cljs.core.next.call(null,seq21605);
var G__21607 = cljs.core.first.call(null,seq21605__$1);
var seq21605__$2 = cljs.core.next.call(null,seq21605__$1);
var G__21608 = cljs.core.first.call(null,seq21605__$2);
var seq21605__$3 = cljs.core.next.call(null,seq21605__$2);
return cljs.core$macros.extend_type.cljs$core$IFn$_invoke$arity$variadic(G__21606,G__21607,G__21608,seq21605__$3);
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
cljs.core$macros.annotate_specs = (function cljs$core$macros$annotate_specs(annots,v,p__21616){
var vec__21620 = p__21616;
var f = cljs.core.nth.call(null,vec__21620,(0),null);
var sigs = cljs.core.nth.call(null,vec__21620,(1),null);
return cljs.core.conj.call(null,v,cljs.core.vary_meta.call(null,cljs.core.cons.call(null,f,cljs.core.map.call(null,((function (vec__21620,f,sigs){
return (function (p1__21615_SHARP_){
return cljs.core.cons.call(null,cljs.core.second.call(null,p1__21615_SHARP_),cljs.core.nnext.call(null,p1__21615_SHARP_));
});})(vec__21620,f,sigs))
,sigs)),cljs.core.merge,annots));
});
cljs.core$macros.dt__GT_et = (function cljs$core$macros$dt__GT_et(var_args){
var args21623 = [];
var len__11385__auto___21626 = arguments.length;
var i__11386__auto___21627 = (0);
while(true){
if((i__11386__auto___21627 < len__11385__auto___21626)){
args21623.push((arguments[i__11386__auto___21627]));

var G__21628 = (i__11386__auto___21627 + (1));
i__11386__auto___21627 = G__21628;
continue;
} else {
}
break;
}

var G__21625 = args21623.length;
switch (G__21625) {
case 3:
return cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21623.length)].join('')));

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
var G__21630 = ret__$1;
var G__21631 = specs__$2;
ret = G__21630;
specs__$1 = G__21631;
continue;
} else {
return ret;
}
break;
}
});

cljs.core$macros.dt__GT_et.cljs$lang$maxFixedArity = 4;

cljs.core$macros.collect_protocols = (function cljs$core$macros$collect_protocols(impls,env){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,(function (p1__21632_SHARP_){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),p1__21632_SHARP_));
}),cljs.core.filter.call(null,cljs.core.symbol_QMARK_,impls)));
});
cljs.core$macros.build_positional_factory = (function cljs$core$macros$build_positional_factory(rsym,rname,fields){
var fn_name = cljs.core.with_meta.call(null,cljs.core.symbol.call(null,[cljs.core.str(new cljs.core.Symbol(null,"->","->",-2139605430,null)),cljs.core.str(rsym)].join('')),cljs.core.assoc.call(null,cljs.core.meta.call(null,rsym),new cljs.core.Keyword(null,"factory","factory",63933746),new cljs.core.Keyword(null,"positional","positional",-203580463)));
var field_values = (cljs.core.truth_(new cljs.core.Keyword(null,"internal-ctor","internal-ctor",937392560).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,rsym)))?cljs.core.conj.call(null,fields,null,null,null):fields);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null)),(function (){var x__11114__auto__ = fn_name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,fields))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__11114__auto__ = rname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),field_values)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
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
var args__11392__auto__ = [];
var len__11385__auto___21644 = arguments.length;
var i__11386__auto___21645 = (0);
while(true){
if((i__11386__auto___21645 < len__11385__auto___21644)){
args__11392__auto__.push((arguments[i__11386__auto___21645]));

var G__21646 = (i__11386__auto___21645 + (1));
i__11386__auto___21645 = G__21646;
continue;
} else {
}
break;
}

var argseq__11393__auto__ = ((((4) < args__11392__auto__.length))?(new cljs.core.IndexedSeq(args__11392__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.deftype.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__11393__auto__);
});

cljs.core$macros.deftype.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,t,fields,impls){
cljs.core$macros.validate_fields.call(null,"deftype",t,fields);

var env = _AMPERSAND_env;
var r = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),t));
var vec__21641 = cljs.core$macros.prepare_protocol_masks.call(null,env,impls);
var fpps = cljs.core.nth.call(null,vec__21641,(0),null);
var pmasks = cljs.core.nth.call(null,vec__21641,(1),null);
var protocols = cljs.core$macros.collect_protocols.call(null,impls,env);
var t__$1 = cljs.core.vary_meta.call(null,t,cljs.core.assoc,new cljs.core.Keyword(null,"protocols","protocols",-5615896),protocols,new cljs.core.Keyword(null,"skip-protocol-flag","skip-protocol-flag",-1426798630),fpps);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"deftype*","deftype*",962659890,null)),(function (){var x__11114__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = fields;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = pmasks;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = ((cljs.core.seq.call(null,impls))?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","extend-type","cljs.core$macros/extend-type",1713295201,null)),(function (){var x__11114__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),cljs.core$macros.dt__GT_et.call(null,t__$1,impls,fields)))):null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-getBasis",".-getBasis",-1306451468,null)),(function (){var x__11114__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__11114__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__11114__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,fields))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$type",".-cljs$lang$type",-1029307724,null)),(function (){var x__11114__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$ctorStr",".-cljs$lang$ctorStr",-1820706991,null)),(function (){var x__11114__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = [cljs.core.str(r)].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$ctorPrWriter",".-cljs$lang$ctorPrWriter",255834464,null)),(function (){var x__11114__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__11114__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__21633__auto__","this__21633__auto__",-1405135271,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__21634__auto__","writer__21634__auto__",-749088805,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opt__21635__auto__","opt__21635__auto__",-452812700,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-write","cljs.core/-write",527220517,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__21634__auto__","writer__21634__auto__",-749088805,null)),(function (){var x__11114__auto__ = [cljs.core.str(r)].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core$macros.build_positional_factory.call(null,t__$1,r,fields);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
});

cljs.core$macros.deftype.cljs$lang$maxFixedArity = (4);

cljs.core$macros.deftype.cljs$lang$applyTo = (function (seq21636){
var G__21637 = cljs.core.first.call(null,seq21636);
var seq21636__$1 = cljs.core.next.call(null,seq21636);
var G__21638 = cljs.core.first.call(null,seq21636__$1);
var seq21636__$2 = cljs.core.next.call(null,seq21636__$1);
var G__21639 = cljs.core.first.call(null,seq21636__$2);
var seq21636__$3 = cljs.core.next.call(null,seq21636__$2);
var G__21640 = cljs.core.first.call(null,seq21636__$3);
var seq21636__$4 = cljs.core.next.call(null,seq21636__$3);
return cljs.core$macros.deftype.cljs$core$IFn$_invoke$arity$variadic(G__21637,G__21638,G__21639,G__21640,seq21636__$4);
});


cljs.core$macros.deftype.cljs$lang$macro = true;
/**
 * Do not use this directly - use defrecord
 */
cljs.core$macros.emit_defrecord = (function cljs$core$macros$emit_defrecord(env,tagname,rname,fields,impls){
var hinted_fields = fields;
var fields__$1 = cljs.core.vec.call(null,cljs.core.map.call(null,((function (hinted_fields){
return (function (p1__21647_SHARP_){
return cljs.core.with_meta.call(null,p1__21647_SHARP_,null);
});})(hinted_fields))
,fields));
var base_fields = fields__$1;
var pr_open = [cljs.core.str("#"),cljs.core.str(cljs.core.namespace.call(null,rname)),cljs.core.str("."),cljs.core.str(cljs.core.name.call(null,rname)),cljs.core.str("{")].join('');
var fields__$2 = cljs.core.conj.call(null,fields__$1,new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),cljs.core.with_meta.call(null,new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)));
var gs = cljs.core.gensym.call(null);
var ksym = cljs.core.gensym.call(null,"k");
var impls__$1 = cljs.core.concat.call(null,impls,new cljs.core.PersistentVector(null, 28, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"IRecord","IRecord",-903221169,null),new cljs.core.Symbol(null,"ICloneable","ICloneable",1882653160,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-clone","-clone",227130084,null)),(function (){var x__11114__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__21648__auto__","this__21648__auto__",1751616905,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__11114__auto__ = tagname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),fields__$2)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})()))),new cljs.core.Symbol(null,"IHash","IHash",-1495374645,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-hash","-hash",-630070274,null)),(function (){var x__11114__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__21649__auto__","this__21649__auto__",885465119,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","caching-hash","cljs.core$macros/caching-hash",-1892393069,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__21649__auto__","this__21649__auto__",885465119,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"hash-imap","hash-imap",-1047446478,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})()))),new cljs.core.Symbol(null,"IEquiv","IEquiv",-1912850869,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-equiv","-equiv",320124272,null)),(function (){var x__11114__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__21650__auto__","this__21650__auto__",-770735143,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"other__21651__auto__","other__21651__auto__",1618651904,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"other__21651__auto__","other__21651__auto__",1618651904,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","identical?","cljs.core$macros/identical?",815580547,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-constructor",".-constructor",279801701,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__21650__auto__","this__21650__auto__",-770735143,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-constructor",".-constructor",279801701,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"other__21651__auto__","other__21651__auto__",1618651904,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","equiv-map","cljs.core/equiv-map",-1185609892,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__21650__auto__","this__21650__auto__",-770735143,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"other__21651__auto__","other__21651__auto__",1618651904,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})()))),new cljs.core.Symbol(null,"IMeta","IMeta",1095313672,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-meta","-meta",494863156,null)),(function (){var x__11114__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__21652__auto__","this__21652__auto__",-332438138,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__meta","__meta",-946752628,null))))),new cljs.core.Symbol(null,"IWithMeta","IWithMeta",-509493158,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-with-meta","-with-meta",-1610713823,null)),(function (){var x__11114__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__21653__auto__","this__21653__auto__",-1316388153,null)),(function (){var x__11114__auto__ = gs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__11114__auto__ = tagname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),cljs.core.replace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),gs], null),fields__$2))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})()))),new cljs.core.Symbol(null,"ILookup","ILookup",784647298,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-lookup","-lookup",-1438393944,null)),(function (){var x__11114__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__21654__auto__","this__21654__auto__",-1917739017,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__21655__auto__","k__21655__auto__",-897962096,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-lookup","cljs.core/-lookup",-1845674443,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__21654__auto__","this__21654__auto__",-1917739017,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__21655__auto__","k__21655__auto__",-897962096,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})()))),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-lookup","-lookup",-1438393944,null)),(function (){var x__11114__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__21656__auto__","this__21656__auto__",-1201726598,null)),(function (){var x__11114__auto__ = ksym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"else__21657__auto__","else__21657__auto__",-662925449,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","case","cljs.core$macros/case",-2131866965,null)),(function (){var x__11114__auto__ = ksym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),cljs.core.mapcat.call(null,((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (f){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,f),f], null);
});})(gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,base_fields),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)),(function (){var x__11114__auto__ = ksym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"else__21657__auto__","else__21657__auto__",-662925449,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})()))),new cljs.core.Symbol(null,"ICounted","ICounted",-1705786327,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-count","-count",416049189,null)),(function (){var x__11114__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__21658__auto__","this__21658__auto__",-71167017,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),(function (){var x__11114__auto__ = cljs.core.count.call(null,base_fields);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})()))),new cljs.core.Symbol(null,"ICollection","ICollection",-686709190,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-conj","-conj",1373798691,null)),(function (){var x__11114__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__21659__auto__","this__21659__auto__",912674900,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"entry__21660__auto__","entry__21660__auto__",1259376706,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"entry__21660__auto__","entry__21660__auto__",1259376706,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-assoc","cljs.core/-assoc",-814539323,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__21659__auto__","this__21659__auto__",912674900,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-nth","cljs.core/-nth",504234802,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"entry__21660__auto__","entry__21660__auto__",1259376706,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-nth","cljs.core/-nth",504234802,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"entry__21660__auto__","entry__21660__auto__",1259376706,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","reduce","cljs.core/reduce",2025430439,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-conj","cljs.core/-conj",2040622670,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__21659__auto__","this__21659__auto__",912674900,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"entry__21660__auto__","entry__21660__auto__",1259376706,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})()))),new cljs.core.Symbol(null,"IAssociative","IAssociative",-1306431882,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-assoc","-assoc",-416089758,null)),(function (){var x__11114__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__21661__auto__","this__21661__auto__",-2091447687,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__21662__auto__","k__21662__auto__",450413957,null)),(function (){var x__11114__auto__ = gs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","condp","cljs.core$macros/condp",431619047,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","keyword-identical?","cljs.core/keyword-identical?",1598491177,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__21662__auto__","k__21662__auto__",450413957,null)),cljs.core.mapcat.call(null,((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (fld){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,fld),cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"new","new",-444906321,null),tagname,cljs.core.replace.call(null,cljs.core.PersistentArrayMap.fromArray([fld,gs,new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),null], true, false),fields__$2))], null);
});})(gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,base_fields),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__11114__auto__ = tagname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),null,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),null], null), null),fields__$2),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","assoc","cljs.core/assoc",322326297,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__21662__auto__","k__21662__auto__",450413957,null)),(function (){var x__11114__auto__ = gs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})()))),new cljs.core.Symbol(null,"IMap","IMap",992876629,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-dissoc","-dissoc",1638079447,null)),(function (){var x__11114__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__21663__auto__","this__21663__auto__",1086275422,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__21664__auto__","k__21664__auto__",562115932,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null)),(function (){var x__11114__auto__ = cljs.core.apply.call(null,cljs.core.hash_set,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.keyword,base_fields)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__21664__auto__","k__21664__auto__",562115932,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","dissoc","cljs.core/dissoc",-432349815,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","with-meta","cljs.core/with-meta",749126446,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","into","cljs.core/into",1879938733,null)),(function (){var x__11114__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__21663__auto__","this__21663__auto__",1086275422,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__meta","__meta",-946752628,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__21664__auto__","k__21664__auto__",562115932,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__11114__auto__ = tagname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),null,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),null], null), null),fields__$2),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not-empty","cljs.core/not-empty",540057011,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","dissoc","cljs.core/dissoc",-432349815,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__21664__auto__","k__21664__auto__",562115932,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})()))),new cljs.core.Symbol(null,"ISeqable","ISeqable",1349682102,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-seq","-seq",1019896831,null)),(function (){var x__11114__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__21666__auto__","this__21666__auto__",202827156,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null)),(function (){var x__11114__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (p1__21665_SHARP_){
return cljs.core._conj.call(null,(function (){var x__11114__auto__ = cljs.core.keyword.call(null,p1__21665_SHARP_);
return cljs.core._conj.call(null,(function (){var x__11114__auto____$1 = p1__21665_SHARP_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto____$1);
})(),x__11114__auto__);
})(),new cljs.core.Symbol("cljs.core$macros","vector","cljs.core$macros/vector",912237829,null));
});})(gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,base_fields)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})()))),new cljs.core.Symbol(null,"IIterable","IIterable",577191430,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-iterator","-iterator",310937281,null)),(function (){var x__11114__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__11114__auto__ = gs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"RecordIter.","RecordIter.",-265283060,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),(function (){var x__11114__auto__ = gs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.count.call(null,base_fields);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.keyword,base_fields)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-iterator","cljs.core/-iterator",1833427494,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","nil-iter","cljs.core/nil-iter",-1712403690,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})()))),new cljs.core.Symbol(null,"IPrintWithWriter","IPrintWithWriter",-1205316154,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-pr-writer","-pr-writer",-445354136,null)),(function (){var x__11114__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__21668__auto__","this__21668__auto__",-676258138,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__21669__auto__","writer__21669__auto__",1947830095,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opts__21670__auto__","opts__21670__auto__",-1029688100,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__11114__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"pr-pair__21671__auto__","pr-pair__21671__auto__",108617745,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__11114__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"keyval__21672__auto__","keyval__21672__auto__",-393091850,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","pr-sequential-writer","cljs.core/pr-sequential-writer",-1101677821,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__21669__auto__","writer__21669__auto__",1947830095,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","pr-writer","cljs.core/pr-writer",133956070,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,""),cljs.core._conj.call(null,cljs.core.List.EMPTY," "),cljs.core._conj.call(null,cljs.core.List.EMPTY,""),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opts__21670__auto__","opts__21670__auto__",-1029688100,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"keyval__21672__auto__","keyval__21672__auto__",-393091850,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","pr-sequential-writer","cljs.core/pr-sequential-writer",-1101677821,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__21669__auto__","writer__21669__auto__",1947830095,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"pr-pair__21671__auto__","pr-pair__21671__auto__",108617745,null)),(function (){var x__11114__auto__ = pr_open;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,", "),cljs.core._conj.call(null,cljs.core.List.EMPTY,"}"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opts__21670__auto__","opts__21670__auto__",-1029688100,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null)),(function (){var x__11114__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (p1__21667_SHARP_){
return cljs.core._conj.call(null,(function (){var x__11114__auto__ = cljs.core.keyword.call(null,p1__21667_SHARP_);
return cljs.core._conj.call(null,(function (){var x__11114__auto____$1 = p1__21667_SHARP_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto____$1);
})(),x__11114__auto__);
})(),new cljs.core.Symbol("cljs.core$macros","vector","cljs.core$macros/vector",912237829,null));
});})(gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,base_fields)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())))], null));
var vec__21676 = cljs.core$macros.prepare_protocol_masks.call(null,env,impls__$1);
var fpps = cljs.core.nth.call(null,vec__21676,(0),null);
var pmasks = cljs.core.nth.call(null,vec__21676,(1),null);
var protocols = cljs.core$macros.collect_protocols.call(null,impls__$1,env);
var tagname__$1 = cljs.core.vary_meta.call(null,tagname,cljs.core.assoc,new cljs.core.Keyword(null,"protocols","protocols",-5615896),protocols,new cljs.core.Keyword(null,"skip-protocol-flag","skip-protocol-flag",-1426798630),fpps);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"defrecord*","defrecord*",-1936366207,null)),(function (){var x__11114__auto__ = tagname__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = hinted_fields;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = pmasks;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","extend-type","cljs.core$macros/extend-type",1713295201,null)),(function (){var x__11114__auto__ = tagname__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),cljs.core$macros.dt__GT_et.call(null,tagname__$1,impls__$1,fields__$2,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
});
cljs.core$macros.build_map_factory = (function cljs$core$macros$build_map_factory(rsym,rname,fields){
var fn_name = cljs.core.with_meta.call(null,cljs.core.symbol.call(null,[cljs.core.str(new cljs.core.Symbol(null,"map->","map->",-999714600,null)),cljs.core.str(rsym)].join('')),cljs.core.assoc.call(null,cljs.core.meta.call(null,rsym),new cljs.core.Keyword(null,"factory","factory",63933746),new cljs.core.Keyword(null,"map","map",1371690461)));
var ms = cljs.core.gensym.call(null);
var ks = cljs.core.map.call(null,cljs.core.keyword,fields);
var getters = cljs.core.map.call(null,((function (fn_name,ms,ks){
return (function (k){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__11114__auto__ = k;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = ms;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
});})(fn_name,ms,ks))
,ks);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null)),(function (){var x__11114__auto__ = fn_name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__11114__auto__ = ms;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__11114__auto__ = rname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),getters,cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","dissoc","cljs.core/dissoc",-432349815,null)),(function (){var x__11114__auto__ = ms;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),ks)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
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
var args__11392__auto__ = [];
var len__11385__auto___21686 = arguments.length;
var i__11386__auto___21687 = (0);
while(true){
if((i__11386__auto___21687 < len__11385__auto___21686)){
args__11392__auto__.push((arguments[i__11386__auto___21687]));

var G__21688 = (i__11386__auto___21687 + (1));
i__11386__auto___21687 = G__21688;
continue;
} else {
}
break;
}

var argseq__11393__auto__ = ((((4) < args__11392__auto__.length))?(new cljs.core.IndexedSeq(args__11392__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.defrecord.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__11393__auto__);
});

cljs.core$macros.defrecord.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,rsym,fields,impls){
cljs.core$macros.validate_fields.call(null,"defrecord",rsym,fields);

var rsym__$1 = cljs.core.vary_meta.call(null,rsym,cljs.core.assoc,new cljs.core.Keyword(null,"internal-ctor","internal-ctor",937392560),true);
var r = cljs.core.vary_meta.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,_AMPERSAND_env,new cljs.core.Keyword(null,"locals","locals",535295783)),rsym__$1)),cljs.core.assoc,new cljs.core.Keyword(null,"internal-ctor","internal-ctor",937392560),true);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__11114__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core$macros.emit_defrecord.call(null,_AMPERSAND_env,rsym__$1,r,fields,impls);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-getBasis",".-getBasis",-1306451468,null)),(function (){var x__11114__auto__ = r;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__11114__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__11114__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,fields))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$type",".-cljs$lang$type",-1029307724,null)),(function (){var x__11114__auto__ = r;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$ctorPrSeq",".-cljs$lang$ctorPrSeq",41132414,null)),(function (){var x__11114__auto__ = r;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__11114__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__21679__auto__","this__21679__auto__",-676896032,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null)),(function (){var x__11114__auto__ = [cljs.core.str(r)].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$ctorPrWriter",".-cljs$lang$ctorPrWriter",255834464,null)),(function (){var x__11114__auto__ = r;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__11114__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__21679__auto__","this__21679__auto__",-676896032,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__21680__auto__","writer__21680__auto__",-899237571,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-write","cljs.core/-write",527220517,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__21680__auto__","writer__21680__auto__",-899237571,null)),(function (){var x__11114__auto__ = [cljs.core.str(r)].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core$macros.build_positional_factory.call(null,rsym__$1,r,fields);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core$macros.build_map_factory.call(null,rsym__$1,r,fields);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = r;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
});

cljs.core$macros.defrecord.cljs$lang$maxFixedArity = (4);

cljs.core$macros.defrecord.cljs$lang$applyTo = (function (seq21681){
var G__21682 = cljs.core.first.call(null,seq21681);
var seq21681__$1 = cljs.core.next.call(null,seq21681);
var G__21683 = cljs.core.first.call(null,seq21681__$1);
var seq21681__$2 = cljs.core.next.call(null,seq21681__$1);
var G__21684 = cljs.core.first.call(null,seq21681__$2);
var seq21681__$3 = cljs.core.next.call(null,seq21681__$2);
var G__21685 = cljs.core.first.call(null,seq21681__$3);
var seq21681__$4 = cljs.core.next.call(null,seq21681__$3);
return cljs.core$macros.defrecord.cljs$core$IFn$_invoke$arity$variadic(G__21682,G__21683,G__21684,G__21685,seq21681__$4);
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
var args__11392__auto__ = [];
var len__11385__auto___21716 = arguments.length;
var i__11386__auto___21717 = (0);
while(true){
if((i__11386__auto___21717 < len__11385__auto___21716)){
args__11392__auto__.push((arguments[i__11386__auto___21717]));

var G__21718 = (i__11386__auto___21717 + (1));
i__11386__auto___21717 = G__21718;
continue;
} else {
}
break;
}

var argseq__11393__auto__ = ((((3) < args__11392__auto__.length))?(new cljs.core.IndexedSeq(args__11392__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.defprotocol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__11393__auto__);
});

cljs.core$macros.defprotocol.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,psym,doc_PLUS_methods){
var p = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,_AMPERSAND_env,new cljs.core.Keyword(null,"locals","locals",535295783)),psym));
var vec__21695 = ((typeof cljs.core.first.call(null,doc_PLUS_methods) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,doc_PLUS_methods),cljs.core.next.call(null,doc_PLUS_methods)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,doc_PLUS_methods], null));
var doc = cljs.core.nth.call(null,vec__21695,(0),null);
var methods$ = cljs.core.nth.call(null,vec__21695,(1),null);
var psym__$1 = cljs.core.vary_meta.call(null,psym,cljs.core.assoc,new cljs.core.Keyword(null,"doc","doc",1913296891),doc,new cljs.core.Keyword(null,"protocol-symbol","protocol-symbol",1279552198),true);
var ns_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
var fqn = ((function (p,vec__21695,doc,methods$,psym__$1,ns_name){
return (function (n){
return cljs.core.symbol.call(null,[cljs.core.str(ns_name),cljs.core.str("."),cljs.core.str(n)].join(''));
});})(p,vec__21695,doc,methods$,psym__$1,ns_name))
;
var prefix = cljs.core$macros.protocol_prefix.call(null,p);
var _ = (function (){var seq__21698 = cljs.core.seq.call(null,methods$);
var chunk__21699 = null;
var count__21700 = (0);
var i__21701 = (0);
while(true){
if((i__21701 < count__21700)){
var vec__21702 = cljs.core._nth.call(null,chunk__21699,i__21701);
var seq__21703 = cljs.core.seq.call(null,vec__21702);
var first__21704 = cljs.core.first.call(null,seq__21703);
var seq__21703__$1 = cljs.core.next.call(null,seq__21703);
var mname = first__21704;
var arities = seq__21703__$1;
if(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(0),null], null), null),cljs.core.map.call(null,cljs.core.count,cljs.core.filter.call(null,cljs.core.vector_QMARK_,arities))))){
throw (new Error([cljs.core.str("Invalid protocol, "),cljs.core.str(psym__$1),cljs.core.str(" defines method "),cljs.core.str(mname),cljs.core.str(" with arity 0")].join('')));
} else {
}

var G__21719 = seq__21698;
var G__21720 = chunk__21699;
var G__21721 = count__21700;
var G__21722 = (i__21701 + (1));
seq__21698 = G__21719;
chunk__21699 = G__21720;
count__21700 = G__21721;
i__21701 = G__21722;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__21698);
if(temp__4657__auto__){
var seq__21698__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21698__$1)){
var c__11091__auto__ = cljs.core.chunk_first.call(null,seq__21698__$1);
var G__21723 = cljs.core.chunk_rest.call(null,seq__21698__$1);
var G__21724 = c__11091__auto__;
var G__21725 = cljs.core.count.call(null,c__11091__auto__);
var G__21726 = (0);
seq__21698 = G__21723;
chunk__21699 = G__21724;
count__21700 = G__21725;
i__21701 = G__21726;
continue;
} else {
var vec__21705 = cljs.core.first.call(null,seq__21698__$1);
var seq__21706 = cljs.core.seq.call(null,vec__21705);
var first__21707 = cljs.core.first.call(null,seq__21706);
var seq__21706__$1 = cljs.core.next.call(null,seq__21706);
var mname = first__21707;
var arities = seq__21706__$1;
if(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(0),null], null), null),cljs.core.map.call(null,cljs.core.count,cljs.core.filter.call(null,cljs.core.vector_QMARK_,arities))))){
throw (new Error([cljs.core.str("Invalid protocol, "),cljs.core.str(psym__$1),cljs.core.str(" defines method "),cljs.core.str(mname),cljs.core.str(" with arity 0")].join('')));
} else {
}

var G__21727 = cljs.core.next.call(null,seq__21698__$1);
var G__21728 = null;
var G__21729 = (0);
var G__21730 = (0);
seq__21698 = G__21727;
chunk__21699 = G__21728;
count__21700 = G__21729;
i__21701 = G__21730;
continue;
}
} else {
return null;
}
}
break;
}
})();
var expand_sig = ((function (p,vec__21695,doc,methods$,psym__$1,ns_name,fqn,prefix,_){
return (function (fname,slot,sig){
var sig__$1 = ((!(cljs.core.every_QMARK_.call(null,cljs.core.symbol_QMARK_,sig)))?cljs.core.mapv.call(null,((function (p,vec__21695,doc,methods$,psym__$1,ns_name,fqn,prefix,_){
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
});})(p,vec__21695,doc,methods$,psym__$1,ns_name,fqn,prefix,_))
,sig):sig);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__11114__auto__ = sig__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__11114__auto__ = cljs.core.first.call(null,sig__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__11114__auto__ = cljs.core.first.call(null,sig__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.symbol.call(null,[cljs.core.str("-"),cljs.core.str(slot)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__11114__auto__ = cljs.core.first.call(null,sig__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = slot;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),sig__$1)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__11114__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__21689__auto__","x__21689__auto__",2024565425,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__11114__auto__ = cljs.core.first.call(null,sig__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__11114__auto__ = cljs.core.first.call(null,sig__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__21690__auto__","m__21690__auto__",-166385551,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aget","cljs.core$macros/aget",1976136178,null)),(function (){var x__11114__auto__ = fqn.call(null,fname);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog","typeOf","goog/typeOf",539097255,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__21689__auto__","x__21689__auto__",2024565425,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__21690__auto__","m__21690__auto__",-166385551,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__21690__auto__","m__21690__auto__",-166385551,null)),sig__$1)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__11114__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__21690__auto__","m__21690__auto__",-166385551,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aget","cljs.core$macros/aget",1976136178,null)),(function (){var x__11114__auto__ = fqn.call(null,fname);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,"_"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__21690__auto__","m__21690__auto__",-166385551,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__21690__auto__","m__21690__auto__",-166385551,null)),sig__$1)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","missing-protocol","cljs.core/missing-protocol",531539732,null)),(function (){var x__11114__auto__ = [cljs.core.str(psym__$1),cljs.core.str("."),cljs.core.str(fname)].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.first.call(null,sig__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
});})(p,vec__21695,doc,methods$,psym__$1,ns_name,fqn,prefix,_))
;
var psym__$2 = cljs.core.vary_meta.call(null,cljs.core.vary_meta.call(null,psym__$1,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516)], null),cljs.core.conj,"@interface"),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"protocol-info","protocol-info",1471745843),new cljs.core.Keyword(null,"methods","methods",453930866)], null),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (p,vec__21695,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig){
return (function (p__21708){
var vec__21709 = p__21708;
var seq__21710 = cljs.core.seq.call(null,vec__21709);
var first__21711 = cljs.core.first.call(null,seq__21710);
var seq__21710__$1 = cljs.core.next.call(null,seq__21710);
var fname = first__21711;
var sigs = seq__21710__$1;
var doc__$1 = (function (){var doc__$1 = cljs.core.last.call(null,sigs);
if(typeof doc__$1 === 'string'){
return doc__$1;
} else {
return null;
}
})();
var sigs__$1 = cljs.core.take_while.call(null,cljs.core.vector_QMARK_,sigs);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vary_meta.call(null,fname,cljs.core.assoc,new cljs.core.Keyword(null,"doc","doc",1913296891),doc__$1),cljs.core.vec.call(null,sigs__$1)], null);
});})(p,vec__21695,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig))
,methods$)));
var method = ((function (p,vec__21695,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2){
return (function (p__21712){
var vec__21713 = p__21712;
var seq__21714 = cljs.core.seq.call(null,vec__21713);
var first__21715 = cljs.core.first.call(null,seq__21714);
var seq__21714__$1 = cljs.core.next.call(null,seq__21714);
var fname = first__21715;
var sigs = seq__21714__$1;
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null)),(function (){var x__11114__auto__ = fname__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),cljs.core.map.call(null,((function (doc__$1,sigs__$1,amp,slot,fname__$1,vec__21713,seq__21714,first__21715,seq__21714__$1,fname,sigs,p,vec__21695,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2){
return (function (sig){
return expand_sig.call(null,fname__$1,cljs.core.symbol.call(null,[cljs.core.str(slot),cljs.core.str("$arity$"),cljs.core.str(cljs.core.count.call(null,sig))].join('')),sig);
});})(doc__$1,sigs__$1,amp,slot,fname__$1,vec__21713,seq__21714,first__21715,seq__21714__$1,fname,sigs,p,vec__21695,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2))
,sigs__$1))));
});})(p,vec__21695,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"*unchecked-if*","*unchecked-if*",1542408350,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"def","def",597100991,null)),(function (){var x__11114__auto__ = psym__$2;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"function(){}"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),cljs.core.map.call(null,method,methods$),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"*unchecked-if*","*unchecked-if*",1542408350,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
});

cljs.core$macros.defprotocol.cljs$lang$maxFixedArity = (3);

cljs.core$macros.defprotocol.cljs$lang$applyTo = (function (seq21691){
var G__21692 = cljs.core.first.call(null,seq21691);
var seq21691__$1 = cljs.core.next.call(null,seq21691);
var G__21693 = cljs.core.first.call(null,seq21691__$1);
var seq21691__$2 = cljs.core.next.call(null,seq21691__$1);
var G__21694 = cljs.core.first.call(null,seq21691__$2);
var seq21691__$3 = cljs.core.next.call(null,seq21691__$2);
return cljs.core$macros.defprotocol.cljs$core$IFn$_invoke$arity$variadic(G__21692,G__21693,G__21694,seq21691__$3);
});


cljs.core$macros.defprotocol.cljs$lang$macro = true;
/**
 * EXPERIMENTAL
 */
cljs.core$macros.implements_QMARK_ = (function cljs$core$macros$implements_QMARK_(_AMPERSAND_form,_AMPERSAND_env,psym,x){
var p = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,_AMPERSAND_env,new cljs.core.Keyword(null,"locals","locals",535295783)),psym));
var prefix = cljs.core$macros.protocol_prefix.call(null,p);
var xsym = cljs.core$macros.bool_expr.call(null,cljs.core.gensym.call(null));
var vec__21734 = cljs.core$macros.fast_path_protocols.call(null,p);
var part = cljs.core.nth.call(null,vec__21734,(0),null);
var bit = cljs.core.nth.call(null,vec__21734,(1),null);
var msym = cljs.core.symbol.call(null,[cljs.core.str("-cljs$lang$protocol_mask$partition"),cljs.core.str(part),cljs.core.str("$")].join(''));
if(!((x instanceof cljs.core.Symbol))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__11114__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__11114__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__11114__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","or","cljs.core$macros/or",1346243648,null)),(function (){var x__11114__auto__ = (cljs.core.truth_(bit)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__11114__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = msym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = bit;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})()))):false);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","identical?","cljs.core$macros/identical?",815580547,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PROTOCOL_SENTINEL","cljs.core/PROTOCOL_SENTINEL",210209696,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__11114__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.symbol.call(null,[cljs.core.str("-"),cljs.core.str(prefix)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__11114__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","or","cljs.core$macros/or",1346243648,null)),(function (){var x__11114__auto__ = (cljs.core.truth_(bit)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__11114__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = msym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = bit;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})()))):false);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","identical?","cljs.core$macros/identical?",815580547,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PROTOCOL_SENTINEL","cljs.core/PROTOCOL_SENTINEL",210209696,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__11114__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.symbol.call(null,[cljs.core.str("-"),cljs.core.str(prefix)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
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
var vec__21740 = cljs.core$macros.fast_path_protocols.call(null,p);
var part = cljs.core.nth.call(null,vec__21740,(0),null);
var bit = cljs.core.nth.call(null,vec__21740,(1),null);
var msym = cljs.core.symbol.call(null,[cljs.core.str("-cljs$lang$protocol_mask$partition"),cljs.core.str(part),cljs.core.str("$")].join(''));
if(!((x instanceof cljs.core.Symbol))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__11114__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__11114__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__11114__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","or","cljs.core$macros/or",1346243648,null)),(function (){var x__11114__auto__ = (cljs.core.truth_(bit)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__11114__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = msym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = bit;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})()))):false);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","identical?","cljs.core$macros/identical?",815580547,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PROTOCOL_SENTINEL","cljs.core/PROTOCOL_SENTINEL",210209696,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__11114__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.symbol.call(null,[cljs.core.str("-"),cljs.core.str(prefix)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","coercive-not","cljs.core$macros/coercive-not",115999987,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__11114__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = msym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","native-satisfies?","cljs.core/native-satisfies?",1482305036,null)),(function (){var x__11114__auto__ = psym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","native-satisfies?","cljs.core/native-satisfies?",1482305036,null)),(function (){var x__11114__auto__ = psym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__11114__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","or","cljs.core$macros/or",1346243648,null)),(function (){var x__11114__auto__ = (cljs.core.truth_(bit)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__11114__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = msym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = bit;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})()))):false);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","identical?","cljs.core$macros/identical?",815580547,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PROTOCOL_SENTINEL","cljs.core/PROTOCOL_SENTINEL",210209696,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__11114__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.symbol.call(null,[cljs.core.str("-"),cljs.core.str(prefix)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","coercive-not","cljs.core$macros/coercive-not",115999987,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__11114__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = msym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","native-satisfies?","cljs.core/native-satisfies?",1482305036,null)),(function (){var x__11114__auto__ = psym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","native-satisfies?","cljs.core/native-satisfies?",1482305036,null)),(function (){var x__11114__auto__ = psym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
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
var args__11392__auto__ = [];
var len__11385__auto___21746 = arguments.length;
var i__11386__auto___21747 = (0);
while(true){
if((i__11386__auto___21747 < len__11385__auto___21746)){
args__11392__auto__.push((arguments[i__11386__auto___21747]));

var G__21748 = (i__11386__auto___21747 + (1));
i__11386__auto___21747 = G__21748;
continue;
} else {
}
break;
}

var argseq__11393__auto__ = ((((2) < args__11392__auto__.length))?(new cljs.core.IndexedSeq(args__11392__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.lazy_seq.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__11393__auto__);
});

cljs.core$macros.lazy_seq.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","LazySeq","cljs.core/LazySeq",1986389673,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__11114__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
});

cljs.core$macros.lazy_seq.cljs$lang$maxFixedArity = (2);

cljs.core$macros.lazy_seq.cljs$lang$applyTo = (function (seq21743){
var G__21744 = cljs.core.first.call(null,seq21743);
var seq21743__$1 = cljs.core.next.call(null,seq21743);
var G__21745 = cljs.core.first.call(null,seq21743__$1);
var seq21743__$2 = cljs.core.next.call(null,seq21743__$1);
return cljs.core$macros.lazy_seq.cljs$core$IFn$_invoke$arity$variadic(G__21744,G__21745,seq21743__$2);
});


cljs.core$macros.lazy_seq.cljs$lang$macro = true;
/**
 * Takes a body of expressions and yields a Delay object that will
 *   invoke the body only the first time it is forced (with force or deref/@), and
 *   will cache the result and return it on all subsequent force
 *   calls.
 */
cljs.core$macros.delay = (function cljs$core$macros$delay(var_args){
var args__11392__auto__ = [];
var len__11385__auto___21752 = arguments.length;
var i__11386__auto___21753 = (0);
while(true){
if((i__11386__auto___21753 < len__11385__auto___21752)){
args__11392__auto__.push((arguments[i__11386__auto___21753]));

var G__21754 = (i__11386__auto___21753 + (1));
i__11386__auto___21753 = G__21754;
continue;
} else {
}
break;
}

var argseq__11393__auto__ = ((((2) < args__11392__auto__.length))?(new cljs.core.IndexedSeq(args__11392__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.delay.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__11393__auto__);
});

cljs.core$macros.delay.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","Delay","cljs.core/Delay",-21574999,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__11114__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
});

cljs.core$macros.delay.cljs$lang$maxFixedArity = (2);

cljs.core$macros.delay.cljs$lang$applyTo = (function (seq21749){
var G__21750 = cljs.core.first.call(null,seq21749);
var seq21749__$1 = cljs.core.next.call(null,seq21749);
var G__21751 = cljs.core.first.call(null,seq21749__$1);
var seq21749__$2 = cljs.core.next.call(null,seq21749__$1);
return cljs.core$macros.delay.cljs$core$IFn$_invoke$arity$variadic(G__21750,G__21751,seq21749__$2);
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
var args__11392__auto__ = [];
var len__11385__auto___21763 = arguments.length;
var i__11386__auto___21764 = (0);
while(true){
if((i__11386__auto___21764 < len__11385__auto___21763)){
args__11392__auto__.push((arguments[i__11386__auto___21764]));

var G__21765 = (i__11386__auto___21764 + (1));
i__11386__auto___21764 = G__21765;
continue;
} else {
}
break;
}

var argseq__11393__auto__ = ((((3) < args__11392__auto__.length))?(new cljs.core.IndexedSeq(args__11392__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.with_redefs.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__11393__auto__);
});

cljs.core$macros.with_redefs.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
var names = cljs.core.take_nth.call(null,(2),bindings);
var vals = cljs.core.take_nth.call(null,(2),cljs.core.drop.call(null,(1),bindings));
var tempnames = cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.gensym,cljs.core.name),names);
var binds = cljs.core.map.call(null,cljs.core.vector,names,vals);
var resets = cljs.core.reverse.call(null,cljs.core.map.call(null,cljs.core.vector,names,tempnames));
var bind_value = ((function (names,vals,tempnames,binds,resets){
return (function (p__21759){
var vec__21760 = p__21759;
var k = cljs.core.nth.call(null,vec__21760,(0),null);
var v = cljs.core.nth.call(null,vec__21760,(1),null);
return cljs.core._conj.call(null,(function (){var x__11114__auto__ = k;
return cljs.core._conj.call(null,(function (){var x__11114__auto____$1 = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto____$1);
})(),x__11114__auto__);
})(),new cljs.core.Symbol(null,"set!","set!",250714521,null));
});})(names,vals,tempnames,binds,resets))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__11114__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.interleave.call(null,tempnames,names)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),cljs.core.map.call(null,bind_value,binds),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"try","try",-1273693247,null)),body,(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"finally","finally",-1065347064,null)),cljs.core.map.call(null,bind_value,resets))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
});

cljs.core$macros.with_redefs.cljs$lang$maxFixedArity = (3);

cljs.core$macros.with_redefs.cljs$lang$applyTo = (function (seq21755){
var G__21756 = cljs.core.first.call(null,seq21755);
var seq21755__$1 = cljs.core.next.call(null,seq21755);
var G__21757 = cljs.core.first.call(null,seq21755__$1);
var seq21755__$2 = cljs.core.next.call(null,seq21755__$1);
var G__21758 = cljs.core.first.call(null,seq21755__$2);
var seq21755__$3 = cljs.core.next.call(null,seq21755__$2);
return cljs.core$macros.with_redefs.cljs$core$IFn$_invoke$arity$variadic(G__21756,G__21757,G__21758,seq21755__$3);
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
var args__11392__auto__ = [];
var len__11385__auto___21770 = arguments.length;
var i__11386__auto___21771 = (0);
while(true){
if((i__11386__auto___21771 < len__11385__auto___21770)){
args__11392__auto__.push((arguments[i__11386__auto___21771]));

var G__21772 = (i__11386__auto___21771 + (1));
i__11386__auto___21771 = G__21772;
continue;
} else {
}
break;
}

var argseq__11393__auto__ = ((((3) < args__11392__auto__.length))?(new cljs.core.IndexedSeq(args__11392__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.binding.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__11393__auto__);
});

cljs.core$macros.binding.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
var names = cljs.core.take_nth.call(null,(2),bindings);
cljs.analyzer.confirm_bindings.call(null,_AMPERSAND_env,names);

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","with-redefs","cljs.core$macros/with-redefs",1489217801,null)),(function (){var x__11114__auto__ = bindings;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),body)));
});

cljs.core$macros.binding.cljs$lang$maxFixedArity = (3);

cljs.core$macros.binding.cljs$lang$applyTo = (function (seq21766){
var G__21767 = cljs.core.first.call(null,seq21766);
var seq21766__$1 = cljs.core.next.call(null,seq21766);
var G__21768 = cljs.core.first.call(null,seq21766__$1);
var seq21766__$2 = cljs.core.next.call(null,seq21766__$1);
var G__21769 = cljs.core.first.call(null,seq21766__$2);
var seq21766__$3 = cljs.core.next.call(null,seq21766__$2);
return cljs.core$macros.binding.cljs$core$IFn$_invoke$arity$variadic(G__21767,G__21768,G__21769,seq21766__$3);
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
var args__11392__auto__ = [];
var len__11385__auto___21791 = arguments.length;
var i__11386__auto___21792 = (0);
while(true){
if((i__11386__auto___21792 < len__11385__auto___21791)){
args__11392__auto__.push((arguments[i__11386__auto___21792]));

var G__21793 = (i__11386__auto___21792 + (1));
i__11386__auto___21792 = G__21793;
continue;
} else {
}
break;
}

var argseq__11393__auto__ = ((((4) < args__11392__auto__.length))?(new cljs.core.IndexedSeq(args__11392__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.condp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__11393__auto__);
});

cljs.core$macros.condp.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,pred,expr,clauses){
var gpred = cljs.core.gensym.call(null,"pred__");
var gexpr = cljs.core.gensym.call(null,"expr__");
var emit = ((function (gpred,gexpr){
return (function cljs$core$macros$emit(pred__$1,expr__$1,args){
var vec__21785 = cljs.core.split_at.call(null,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,">>",">>",-277509267),cljs.core.second.call(null,args)))?(3):(2)),args);
var vec__21788 = cljs.core.nth.call(null,vec__21785,(0),null);
var a = cljs.core.nth.call(null,vec__21788,(0),null);
var b = cljs.core.nth.call(null,vec__21788,(1),null);
var c = cljs.core.nth.call(null,vec__21788,(2),null);
var clause = vec__21788;
var more = cljs.core.nth.call(null,vec__21785,(1),null);
var n = cljs.core.count.call(null,clause);
if(cljs.core._EQ_.call(null,(0),n)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"No matching clause: "),(function (){var x__11114__auto__ = expr__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
} else {
if(cljs.core._EQ_.call(null,(1),n)){
return a;
} else {
if(cljs.core._EQ_.call(null,(2),n)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__11114__auto__ = pred__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = a;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = expr__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = b;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs$core$macros$emit.call(null,pred__$1,expr__$1,more);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-let","cljs.core$macros/if-let",1291543946,null)),(function (){var x__11114__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"p__21773__auto__","p__21773__auto__",2047233008,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__11114__auto__ = pred__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = a;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = expr__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__11114__auto__ = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"p__21773__auto__","p__21773__auto__",2047233008,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs$core$macros$emit.call(null,pred__$1,expr__$1,more);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));

}
}
}
});})(gpred,gexpr))
;
var gres = cljs.core.gensym.call(null,"res__");
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__11114__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__11114__auto__ = gpred;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = pred;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = gexpr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = emit.call(null,gpred,gexpr,clauses);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
});

cljs.core$macros.condp.cljs$lang$maxFixedArity = (4);

cljs.core$macros.condp.cljs$lang$applyTo = (function (seq21774){
var G__21775 = cljs.core.first.call(null,seq21774);
var seq21774__$1 = cljs.core.next.call(null,seq21774);
var G__21776 = cljs.core.first.call(null,seq21774__$1);
var seq21774__$2 = cljs.core.next.call(null,seq21774__$1);
var G__21777 = cljs.core.first.call(null,seq21774__$2);
var seq21774__$3 = cljs.core.next.call(null,seq21774__$2);
var G__21778 = cljs.core.first.call(null,seq21774__$3);
var seq21774__$4 = cljs.core.next.call(null,seq21774__$3);
return cljs.core$macros.condp.cljs$core$IFn$_invoke$arity$variadic(G__21775,G__21776,G__21777,G__21778,seq21774__$4);
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
var m = (function (){var and__10265__auto__ = cljs.core.list_QMARK_.call(null,x);
if(and__10265__auto__){
return cljs.analyzer.resolve_var.call(null,env,cljs.core.last.call(null,x));
} else {
return and__10265__auto__;
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
var args__11392__auto__ = [];
var len__11385__auto___21814 = arguments.length;
var i__11386__auto___21815 = (0);
while(true){
if((i__11386__auto___21815 < len__11385__auto___21814)){
args__11392__auto__.push((arguments[i__11386__auto___21815]));

var G__21816 = (i__11386__auto___21815 + (1));
i__11386__auto___21815 = G__21816;
continue;
} else {
}
break;
}

var argseq__11393__auto__ = ((((3) < args__11392__auto__.length))?(new cljs.core.IndexedSeq(args__11392__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.case$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__11393__auto__);
});

cljs.core$macros.case$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,e,clauses){
var default$ = ((cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,clauses)))?cljs.core.last.call(null,clauses):cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"No matching clause: "),(function (){var x__11114__auto__ = e;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})()))));
var env = _AMPERSAND_env;
var pairs = cljs.core.reduce.call(null,((function (default$,env){
return (function (m,p__21802){
var vec__21803 = p__21802;
var test = cljs.core.nth.call(null,vec__21803,(0),null);
var expr = cljs.core.nth.call(null,vec__21803,(1),null);
if(cljs.core.seq_QMARK_.call(null,test)){
return cljs.core.reduce.call(null,((function (vec__21803,test,expr,default$,env){
return (function (m__$1,test__$1){
var test__$2 = (((test__$1 instanceof cljs.core.Symbol))?cljs.core._conj.call(null,(function (){var x__11114__auto__ = test__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),new cljs.core.Symbol(null,"quote","quote",1377916282,null)):test__$1);
return cljs.core$macros.assoc_test.call(null,m__$1,test__$2,expr,env);
});})(vec__21803,test,expr,default$,env))
,m,test);
} else {
if((test instanceof cljs.core.Symbol)){
return cljs.core$macros.assoc_test.call(null,m,cljs.core._conj.call(null,(function (){var x__11114__auto__ = test;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
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
return (function (p1__21794_SHARP_){
return cljs.core$macros.const_QMARK_.call(null,env,p1__21794_SHARP_);
});})(default$,env,pairs,esym,tests))
),tests)){
var no_default = ((cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,clauses)))?cljs.core.butlast.call(null,clauses):clauses);
var tests__$1 = cljs.core.mapv.call(null,((function (no_default,default$,env,pairs,esym,tests){
return (function (p1__21795_SHARP_){
if(cljs.core.seq_QMARK_.call(null,p1__21795_SHARP_)){
return cljs.core.vec.call(null,p1__21795_SHARP_);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21795_SHARP_], null);
}
});})(no_default,default$,env,pairs,esym,tests))
,cljs.core.take_nth.call(null,(2),no_default));
var thens = cljs.core.vec.call(null,cljs.core.take_nth.call(null,(2),cljs.core.drop.call(null,(1),no_default)));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__11114__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__11114__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = e;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"case*","case*",-1938255072,null)),(function (){var x__11114__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = tests__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = thens;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = default$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
} else {
if(cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,tests)){
var tests__$1 = cljs.core.mapv.call(null,((function (default$,env,pairs,esym,tests){
return (function (p1__21797_SHARP_){
if(cljs.core.seq_QMARK_.call(null,p1__21797_SHARP_)){
return cljs.core.vec.call(null,p1__21797_SHARP_);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21797_SHARP_], null);
}
});})(default$,env,pairs,esym,tests))
,cljs.core.vec.call(null,cljs.core.map.call(null,((function (default$,env,pairs,esym,tests){
return (function (p1__21796_SHARP_){
return [cljs.core.str(p1__21796_SHARP_)].join('').substring((1));
});})(default$,env,pairs,esym,tests))
,tests)));
var thens = cljs.core.vec.call(null,cljs.core.vals.call(null,pairs));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__11114__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__11114__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","keyword?","cljs.core$macros/keyword?",1362730141,null)),(function (){var x__11114__auto__ = e;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-fqn",".-fqn",1246113027,null)),(function (){var x__11114__auto__ = e;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"case*","case*",-1938255072,null)),(function (){var x__11114__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = tests__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = thens;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = default$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__11114__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__11114__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = e;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","cond","cljs.core$macros/cond",1626318471,null)),cljs.core.mapcat.call(null,((function (default$,env,pairs,esym,tests){
return (function (p__21810){
var vec__21811 = p__21810;
var m = cljs.core.nth.call(null,vec__21811,(0),null);
var c = cljs.core.nth.call(null,vec__21811,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null)),(function (){var x__11114__auto__ = m;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
});})(default$,env,pairs,esym,tests))
,pairs),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"else","else",-1508377146)),(function (){var x__11114__auto__ = default$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));

}
}
});

cljs.core$macros.case$.cljs$lang$maxFixedArity = (3);

cljs.core$macros.case$.cljs$lang$applyTo = (function (seq21798){
var G__21799 = cljs.core.first.call(null,seq21798);
var seq21798__$1 = cljs.core.next.call(null,seq21798);
var G__21800 = cljs.core.first.call(null,seq21798__$1);
var seq21798__$2 = cljs.core.next.call(null,seq21798__$1);
var G__21801 = cljs.core.first.call(null,seq21798__$2);
var seq21798__$3 = cljs.core.next.call(null,seq21798__$2);
return cljs.core$macros.case$.cljs$core$IFn$_invoke$arity$variadic(G__21799,G__21800,G__21801,seq21798__$3);
});


cljs.core$macros.case$.cljs$lang$macro = true;
/**
 * Evaluates expr and throws an exception if it does not evaluate to
 *   logical true.
 */
cljs.core$macros.assert = (function cljs$core$macros$assert(var_args){
var args21817 = [];
var len__11385__auto___21820 = arguments.length;
var i__11386__auto___21821 = (0);
while(true){
if((i__11386__auto___21821 < len__11385__auto___21820)){
args21817.push((arguments[i__11386__auto___21821]));

var G__21822 = (i__11386__auto___21821 + (1));
i__11386__auto___21821 = G__21822;
continue;
} else {
}
break;
}

var G__21819 = args21817.length;
switch (G__21819) {
case 3:
return cljs.core$macros.assert.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.assert.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str((args21817.length - (2)))].join('')));

}
});

cljs.core$macros.assert.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
if(cljs.core.truth_(cljs.core._STAR_assert_STAR_)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-not","cljs.core$macros/when-not",-764302244,null)),(function (){var x__11114__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__11114__auto__ = [cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,x))].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
} else {
return null;
}
});

cljs.core$macros.assert.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,message){
if(cljs.core.truth_(cljs.core._STAR_assert_STAR_)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-not","cljs.core$macros/when-not",-764302244,null)),(function (){var x__11114__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"Assert failed: "),(function (){var x__11114__auto__ = message;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,"\n"),(function (){var x__11114__auto__ = cljs.core.pr_str.call(null,x);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
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
return cljs.core.reduce.call(null,(function (groups,p__21910){
var vec__21911 = p__21910;
var k = cljs.core.nth.call(null,vec__21911,(0),null);
var v = cljs.core.nth.call(null,vec__21911,(1),null);
if((k instanceof cljs.core.Keyword)){
return cljs.core.conj.call(null,cljs.core.pop.call(null,groups),cljs.core.conj.call(null,cljs.core.peek.call(null,groups),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null)));
} else {
return cljs.core.conj.call(null,groups,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
}
}),cljs.core.PersistentVector.EMPTY,cljs.core.partition.call(null,(2),seq_exprs__$1));
});
var err = ((function (to_groups){
return (function() { 
var G__21991__delegate = function (msg){
throw cljs.core.ex_info.call(null,cljs.core.apply.call(null,cljs.core.str,msg),cljs.core.PersistentArrayMap.EMPTY);
};
var G__21991 = function (var_args){
var msg = null;
if (arguments.length > 0) {
var G__21992__i = 0, G__21992__a = new Array(arguments.length -  0);
while (G__21992__i < G__21992__a.length) {G__21992__a[G__21992__i] = arguments[G__21992__i + 0]; ++G__21992__i;}
  msg = new cljs.core.IndexedSeq(G__21992__a,0);
} 
return G__21991__delegate.call(this,msg);};
G__21991.cljs$lang$maxFixedArity = 0;
G__21991.cljs$lang$applyTo = (function (arglist__21993){
var msg = cljs.core.seq(arglist__21993);
return G__21991__delegate(msg);
});
G__21991.cljs$core$IFn$_invoke$arity$variadic = G__21991__delegate;
return G__21991;
})()
;})(to_groups))
;
var emit_bind = ((function (to_groups,err){
return (function cljs$core$macros$for_$_emit_bind(p__21914){
var vec__21953 = p__21914;
var seq__21954 = cljs.core.seq.call(null,vec__21953);
var first__21955 = cljs.core.first.call(null,seq__21954);
var seq__21954__$1 = cljs.core.next.call(null,seq__21954);
var vec__21956 = first__21955;
var seq__21957 = cljs.core.seq.call(null,vec__21956);
var first__21958 = cljs.core.first.call(null,seq__21957);
var seq__21957__$1 = cljs.core.next.call(null,seq__21957);
var bind = first__21958;
var first__21958__$1 = cljs.core.first.call(null,seq__21957__$1);
var seq__21957__$2 = cljs.core.next.call(null,seq__21957__$1);
var expr = first__21958__$1;
var mod_pairs = seq__21957__$2;
var vec__21959 = seq__21954__$1;
var vec__21962 = cljs.core.nth.call(null,vec__21959,(0),null);
var _ = cljs.core.nth.call(null,vec__21962,(0),null);
var next_expr = cljs.core.nth.call(null,vec__21962,(1),null);
var next_groups = vec__21959;
var giter = cljs.core.gensym.call(null,"iter__");
var gxs = cljs.core.gensym.call(null,"s__");
var do_mod = ((function (giter,gxs,vec__21953,seq__21954,first__21955,seq__21954__$1,vec__21956,seq__21957,first__21958,seq__21957__$1,bind,first__21958__$1,seq__21957__$2,expr,mod_pairs,vec__21959,vec__21962,_,next_expr,next_groups,to_groups,err){
return (function cljs$core$macros$for_$_emit_bind_$_do_mod(p__21965){
var vec__21972 = p__21965;
var seq__21973 = cljs.core.seq.call(null,vec__21972);
var first__21974 = cljs.core.first.call(null,seq__21973);
var seq__21973__$1 = cljs.core.next.call(null,seq__21973);
var vec__21975 = first__21974;
var k = cljs.core.nth.call(null,vec__21975,(0),null);
var v = cljs.core.nth.call(null,vec__21975,(1),null);
var pair = vec__21975;
var etc = seq__21973__$1;
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"let","let",-1282412701))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__11114__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs$core$macros$for_$_emit_bind_$_do_mod.call(null,etc);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
} else {
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"while","while",963117786))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__11114__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs$core$macros$for_$_emit_bind_$_do_mod.call(null,etc);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
} else {
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"when","when",-576417306))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__11114__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs$core$macros$for_$_emit_bind_$_do_mod.call(null,etc);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","rest","cljs.core/rest",-285075455,null)),(function (){var x__11114__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
} else {
if((k instanceof cljs.core.Keyword)){
return err.call(null,"Invalid 'for' keyword ",k);
} else {
if(next_groups){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__11114__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"iterys__21824__auto__","iterys__21824__auto__",574945408,null)),(function (){var x__11114__auto__ = cljs$core$macros$for_$_emit_bind.call(null,next_groups);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"fs__21825__auto__","fs__21825__auto__",-222812714,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"iterys__21824__auto__","iterys__21824__auto__",574945408,null)),(function (){var x__11114__auto__ = next_expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"fs__21825__auto__","fs__21825__auto__",-222812714,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"fs__21825__auto__","fs__21825__auto__",-222812714,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__11114__auto__ = giter;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","rest","cljs.core/rest",-285075455,null)),(function (){var x__11114__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","rest","cljs.core/rest",-285075455,null)),(function (){var x__11114__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","cons","cljs.core/cons",96507417,null)),(function (){var x__11114__auto__ = body_expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__11114__auto__ = giter;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","rest","cljs.core/rest",-285075455,null)),(function (){var x__11114__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));

}
}
}
}
}
});})(giter,gxs,vec__21953,seq__21954,first__21955,seq__21954__$1,vec__21956,seq__21957,first__21958,seq__21957__$1,bind,first__21958__$1,seq__21957__$2,expr,mod_pairs,vec__21959,vec__21962,_,next_expr,next_groups,to_groups,err))
;
if(next_groups){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__11114__auto__ = giter;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__11114__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","lazy-seq","cljs.core$macros/lazy-seq",806482650,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__11114__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__11114__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-first","cljs.core$macros/when-first",-840670160,null)),(function (){var x__11114__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__11114__auto__ = bind;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = do_mod.call(null,mod_pairs);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
} else {
var gi = cljs.core.gensym.call(null,"i__");
var gb = cljs.core.gensym.call(null,"b__");
var do_cmod = ((function (gi,gb,giter,gxs,do_mod,vec__21953,seq__21954,first__21955,seq__21954__$1,vec__21956,seq__21957,first__21958,seq__21957__$1,bind,first__21958__$1,seq__21957__$2,expr,mod_pairs,vec__21959,vec__21962,_,next_expr,next_groups,to_groups,err){
return (function cljs$core$macros$for_$_emit_bind_$_do_cmod(p__21978){
var vec__21985 = p__21978;
var seq__21986 = cljs.core.seq.call(null,vec__21985);
var first__21987 = cljs.core.first.call(null,seq__21986);
var seq__21986__$1 = cljs.core.next.call(null,seq__21986);
var vec__21988 = first__21987;
var k = cljs.core.nth.call(null,vec__21988,(0),null);
var v = cljs.core.nth.call(null,vec__21988,(1),null);
var pair = vec__21988;
var etc = seq__21986__$1;
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"let","let",-1282412701))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__11114__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs$core$macros$for_$_emit_bind_$_do_cmod.call(null,etc);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
} else {
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"while","while",963117786))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__11114__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs$core$macros$for_$_emit_bind_$_do_cmod.call(null,etc);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
} else {
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"when","when",-576417306))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__11114__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs$core$macros$for_$_emit_bind_$_do_cmod.call(null,etc);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unchecked-inc","cljs.core$macros/unchecked-inc",-1615365330,null)),(function (){var x__11114__auto__ = gi;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
} else {
if((k instanceof cljs.core.Keyword)){
return err.call(null,"Invalid 'for' keyword ",k);
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-append","cljs.core/chunk-append",-243671470,null)),(function (){var x__11114__auto__ = gb;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = body_expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unchecked-inc","cljs.core$macros/unchecked-inc",-1615365330,null)),(function (){var x__11114__auto__ = gi;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));

}
}
}
}
});})(gi,gb,giter,gxs,do_mod,vec__21953,seq__21954,first__21955,seq__21954__$1,vec__21956,seq__21957,first__21958,seq__21957__$1,bind,first__21958__$1,seq__21957__$2,expr,mod_pairs,vec__21959,vec__21962,_,next_expr,next_groups,to_groups,err))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__11114__auto__ = giter;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__11114__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","lazy-seq","cljs.core$macros/lazy-seq",806482650,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__11114__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__11114__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-let","cljs.core$macros/when-let",-2004472648,null)),(function (){var x__11114__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__11114__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__11114__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunked-seq?","cljs.core/chunked-seq?",-712922369,null)),(function (){var x__11114__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__11114__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__21826__auto__","c__21826__auto__",-891633511,null)),(function (){var x__11114__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-first","cljs.core/chunk-first",-1157877305,null)),(function (){var x__11114__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})()))),cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"/Users/ru/clojure/fligts-pro/resources/public/js/out/cljs/core.cljc"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2326),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj.call(null,cljs.core.List.EMPTY,52),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2326),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj.call(null,cljs.core.List.EMPTY,82),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"tag","tag",-1290361223)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not-native","cljs.core/not-native",-1716909265,null)))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"size__21827__auto__","size__21827__auto__",-1675577544,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__21826__auto__","c__21826__auto__",-891633511,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = gb;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-buffer","cljs.core/chunk-buffer",14093626,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"size__21827__auto__","size__21827__auto__",-1675577544,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","coercive-boolean","cljs.core$macros/coercive-boolean",-450758280,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__11114__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__11114__auto__ = gi;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__11114__auto__ = gi;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"size__21827__auto__","size__21827__auto__",-1675577544,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__11114__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__11114__auto__ = bind;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-nth","cljs.core/-nth",504234802,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__21826__auto__","c__21826__auto__",-891633511,null)),(function (){var x__11114__auto__ = gi;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = do_cmod.call(null,mod_pairs);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-cons","cljs.core/chunk-cons",-250075688,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk","cljs.core/chunk",847936424,null)),(function (){var x__11114__auto__ = gb;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__11114__auto__ = giter;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-rest","cljs.core/chunk-rest",-398161143,null)),(function (){var x__11114__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-cons","cljs.core/chunk-cons",-250075688,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk","cljs.core/chunk",847936424,null)),(function (){var x__11114__auto__ = gb;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__11114__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__11114__auto__ = bind;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null)),(function (){var x__11114__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = do_mod.call(null,mod_pairs);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
}
});})(to_groups,err))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__11114__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"iter__21828__auto__","iter__21828__auto__",819567094,null)),(function (){var x__11114__auto__ = emit_bind.call(null,to_groups.call(null,seq_exprs));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"iter__21828__auto__","iter__21828__auto__",819567094,null)),(function (){var x__11114__auto__ = cljs.core.second.call(null,seq_exprs);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
});

cljs.core$macros.for$.cljs$lang$macro = true;
/**
 * Repeatedly executes body (presumably for side-effects) with
 *   bindings and filtering as provided by "for".  Does not retain
 *   the head of the sequence. Returns nil.
 */
cljs.core$macros.doseq = (function cljs$core$macros$doseq(var_args){
var args__11392__auto__ = [];
var len__11385__auto___21999 = arguments.length;
var i__11386__auto___22000 = (0);
while(true){
if((i__11386__auto___22000 < len__11385__auto___21999)){
args__11392__auto__.push((arguments[i__11386__auto___22000]));

var G__22001 = (i__11386__auto___22000 + (1));
i__11386__auto___22000 = G__22001;
continue;
} else {
}
break;
}

var argseq__11393__auto__ = ((((3) < args__11392__auto__.length))?(new cljs.core.IndexedSeq(args__11392__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.doseq.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__11393__auto__);
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
var G__22002__delegate = function (msg){
throw cljs.core.ex_info.call(null,cljs.core.apply.call(null,cljs.core.str,msg),cljs.core.PersistentArrayMap.EMPTY);
};
var G__22002 = function (var_args){
var msg = null;
if (arguments.length > 0) {
var G__22003__i = 0, G__22003__a = new Array(arguments.length -  0);
while (G__22003__i < G__22003__a.length) {G__22003__a[G__22003__i] = arguments[G__22003__i + 0]; ++G__22003__i;}
  msg = new cljs.core.IndexedSeq(G__22003__a,0);
} 
return G__22002__delegate.call(this,msg);};
G__22002.cljs$lang$maxFixedArity = 0;
G__22002.cljs$lang$applyTo = (function (arglist__22004){
var msg = cljs.core.seq(arglist__22004);
return G__22002__delegate(msg);
});
G__22002.cljs$core$IFn$_invoke$arity$variadic = G__22002__delegate;
return G__22002;
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
var recform__$1 = (((k instanceof cljs.core.Keyword))?recform:cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","next","cljs.core/next",-1291438473,null)),(function (){var x__11114__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0))))));
var steppair = cljs$core$macros$step.call(null,recform__$1,cljs.core.nnext.call(null,exprs));
var needrec = steppair.call(null,(0));
var subform = steppair.call(null,(1));
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"let","let",-1282412701))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [needrec,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__11114__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = subform;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())))], null);
} else {
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"while","while",963117786))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__11114__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = subform;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(cljs.core.truth_(needrec)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recform__$1], null):null))))], null);
} else {
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"when","when",-576417306))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__11114__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__11114__auto__ = subform;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(cljs.core.truth_(needrec)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recform__$1], null):null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = recform__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())))], null);
} else {
if((k instanceof cljs.core.Keyword)){
return err.call(null,"Invalid 'doseq' keyword",k);
} else {
var chunksym = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"chunk__"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"not-native","not-native",-236392494,null)], null));
var countsym = cljs.core.gensym.call(null,"count__");
var isym = cljs.core.gensym.call(null,"i__");
var recform_chunk = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__11114__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = chunksym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = countsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unchecked-inc","cljs.core$macros/unchecked-inc",-1615365330,null)),(function (){var x__11114__auto__ = isym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
var steppair_chunk = cljs$core$macros$step.call(null,recform_chunk,cljs.core.nnext.call(null,exprs));
var subform_chunk = steppair_chunk.call(null,(1));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__11114__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__11114__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__11114__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = chunksym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__11114__auto__ = countsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),(function (){var x__11114__auto__ = isym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","coercive-boolean","cljs.core$macros/coercive-boolean",-450758280,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__11114__auto__ = isym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = countsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__11114__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__11114__auto__ = k;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-nth","cljs.core/-nth",504234802,null)),(function (){var x__11114__auto__ = chunksym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = isym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = subform_chunk;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(cljs.core.truth_(needrec)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recform_chunk], null):null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-let","cljs.core$macros/when-let",-2004472648,null)),(function (){var x__11114__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__11114__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__11114__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunked-seq?","cljs.core/chunked-seq?",-712922369,null)),(function (){var x__11114__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__11114__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__21994__auto__","c__21994__auto__",-1035409326,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-first","cljs.core/chunk-first",-1157877305,null)),(function (){var x__11114__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-rest","cljs.core/chunk-rest",-398161143,null)),(function (){var x__11114__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__21994__auto__","c__21994__auto__",-1035409326,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__21994__auto__","c__21994__auto__",-1035409326,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__11114__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__11114__auto__ = k;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null)),(function (){var x__11114__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = subform;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(cljs.core.truth_(needrec)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recform__$1], null):null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
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

cljs.core$macros.doseq.cljs$lang$applyTo = (function (seq21995){
var G__21996 = cljs.core.first.call(null,seq21995);
var seq21995__$1 = cljs.core.next.call(null,seq21995);
var G__21997 = cljs.core.first.call(null,seq21995__$1);
var seq21995__$2 = cljs.core.next.call(null,seq21995__$1);
var G__21998 = cljs.core.first.call(null,seq21995__$2);
var seq21995__$3 = cljs.core.next.call(null,seq21995__$2);
return cljs.core$macros.doseq.cljs$core$IFn$_invoke$arity$variadic(G__21996,G__21997,G__21998,seq21995__$3);
});


cljs.core$macros.doseq.cljs$lang$macro = true;
cljs.core$macros.array = (function cljs$core$macros$array(var_args){
var args__11392__auto__ = [];
var len__11385__auto___22008 = arguments.length;
var i__11386__auto___22009 = (0);
while(true){
if((i__11386__auto___22009 < len__11385__auto___22008)){
args__11392__auto__.push((arguments[i__11386__auto___22009]));

var G__22010 = (i__11386__auto___22009 + (1));
i__11386__auto___22009 = G__22010;
continue;
} else {
}
break;
}

var argseq__11393__auto__ = ((((2) < args__11392__auto__.length))?(new cljs.core.IndexedSeq(args__11392__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.array.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__11393__auto__);
});

cljs.core$macros.array.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,rest){
var xs_str = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,",",cljs.core.take.call(null,cljs.core.count.call(null,rest),cljs.core.repeat.call(null,"~{}"))));
return cljs.core.vary_meta.call(null,cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),[cljs.core.str("["),cljs.core.str(xs_str),cljs.core.str("]")].join(''),rest),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"array","array",-440182315,null));
});

cljs.core$macros.array.cljs$lang$maxFixedArity = (2);

cljs.core$macros.array.cljs$lang$applyTo = (function (seq22005){
var G__22006 = cljs.core.first.call(null,seq22005);
var seq22005__$1 = cljs.core.next.call(null,seq22005);
var G__22007 = cljs.core.first.call(null,seq22005__$1);
var seq22005__$2 = cljs.core.next.call(null,seq22005__$1);
return cljs.core$macros.array.cljs$core$IFn$_invoke$arity$variadic(G__22006,G__22007,seq22005__$2);
});


cljs.core$macros.array.cljs$lang$macro = true;
cljs.core$macros.make_array = (function cljs$core$macros$make_array(var_args){
var args22014 = [];
var len__11385__auto___22022 = arguments.length;
var i__11386__auto___22023 = (0);
while(true){
if((i__11386__auto___22023 < len__11385__auto___22022)){
args22014.push((arguments[i__11386__auto___22023]));

var G__22024 = (i__11386__auto___22023 + (1));
i__11386__auto___22023 = G__22024;
continue;
} else {
}
break;
}

var G__22021 = args22014.length;
switch (G__22021) {
case 3:
return cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__11404__auto__ = (new cljs.core.IndexedSeq(args22014.slice((4)),(0),null));
return cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__11404__auto__);

}
});

cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,size){
return cljs.core.vary_meta.call(null,((typeof size === 'number')?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),cljs.core.take.call(null,size,cljs.core.repeat.call(null,null))))):cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Array.","js/Array.",1235645307,null)),(function (){var x__11114__auto__ = size;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"array","array",-440182315,null));
});

cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,type,size){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","make-array","cljs.core/make-array",-1802166799,null)),(function (){var x__11114__auto__ = size;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
});

cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,type,size,more_sizes){
return cljs.core.vary_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__11114__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dims__22011__auto__","dims__22011__auto__",1657261894,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","list","cljs.core$macros/list",-1408486806,null)),more_sizes)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dimarray__22012__auto__","dimarray__22012__auto__",-1647332274,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","make-array","cljs.core/make-array",-1802166799,null)),(function (){var x__11114__auto__ = size;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","dotimes","cljs.core$macros/dotimes",-1407597661,null)),(function (){var x__11114__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__22013__auto__","i__22013__auto__",-971996867,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dimarray__22012__auto__","dimarray__22012__auto__",-1647332274,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aset","cljs.core$macros/aset",-693176374,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dimarray__22012__auto__","dimarray__22012__auto__",-1647332274,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__22013__auto__","i__22013__auto__",-971996867,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","make-array","cljs.core/make-array",-1802166799,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dims__22011__auto__","dims__22011__auto__",1657261894,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dimarray__22012__auto__","dimarray__22012__auto__",-1647332274,null))))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"array","array",-440182315,null));
});

cljs.core$macros.make_array.cljs$lang$applyTo = (function (seq22015){
var G__22016 = cljs.core.first.call(null,seq22015);
var seq22015__$1 = cljs.core.next.call(null,seq22015);
var G__22017 = cljs.core.first.call(null,seq22015__$1);
var seq22015__$2 = cljs.core.next.call(null,seq22015__$1);
var G__22018 = cljs.core.first.call(null,seq22015__$2);
var seq22015__$3 = cljs.core.next.call(null,seq22015__$2);
var G__22019 = cljs.core.first.call(null,seq22015__$3);
var seq22015__$4 = cljs.core.next.call(null,seq22015__$3);
return cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$variadic(G__22016,G__22017,G__22018,G__22019,seq22015__$4);
});

cljs.core$macros.make_array.cljs$lang$maxFixedArity = (4);


cljs.core$macros.make_array.cljs$lang$macro = true;
cljs.core$macros.list = (function cljs$core$macros$list(var_args){
var args22027 = [];
var len__11385__auto___22034 = arguments.length;
var i__11386__auto___22035 = (0);
while(true){
if((i__11386__auto___22035 < len__11385__auto___22034)){
args22027.push((arguments[i__11386__auto___22035]));

var G__22036 = (i__11386__auto___22035 + (1));
i__11386__auto___22035 = G__22036;
continue;
} else {
}
break;
}

var G__22033 = args22027.length;
switch (G__22033) {
case 2:
return cljs.core$macros.list.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__11404__auto__ = (new cljs.core.IndexedSeq(args22027.slice((3)),(0),null));
return cljs.core$macros.list.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__11404__auto__);

}
});

cljs.core$macros.list.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.list(new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null),new cljs.core.Symbol("cljs.core","List","cljs.core/List",1708954352,null));
});

cljs.core$macros.list.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,xs){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"constant","constant",-379609303),new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.analyze.call(null,_AMPERSAND_env,x)))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-conj","cljs.core/-conj",2040622670,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","list","cljs.core$macros/list",-1408486806,null)),xs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__11114__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__22026__auto__","x__22026__auto__",-2025262138,null)),(function (){var x__11114__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-conj","cljs.core/-conj",2040622670,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","list","cljs.core$macros/list",-1408486806,null)),xs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__22026__auto__","x__22026__auto__",-2025262138,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
}
});

cljs.core$macros.list.cljs$lang$applyTo = (function (seq22028){
var G__22029 = cljs.core.first.call(null,seq22028);
var seq22028__$1 = cljs.core.next.call(null,seq22028);
var G__22030 = cljs.core.first.call(null,seq22028__$1);
var seq22028__$2 = cljs.core.next.call(null,seq22028__$1);
var G__22031 = cljs.core.first.call(null,seq22028__$2);
var seq22028__$3 = cljs.core.next.call(null,seq22028__$2);
return cljs.core$macros.list.cljs$core$IFn$_invoke$arity$variadic(G__22029,G__22030,G__22031,seq22028__$3);
});

cljs.core$macros.list.cljs$lang$maxFixedArity = (3);


cljs.core$macros.list.cljs$lang$macro = true;
cljs.core$macros.vector = (function cljs$core$macros$vector(var_args){
var args22038 = [];
var len__11385__auto___22044 = arguments.length;
var i__11386__auto___22045 = (0);
while(true){
if((i__11386__auto___22045 < len__11385__auto___22044)){
args22038.push((arguments[i__11386__auto___22045]));

var G__22046 = (i__11386__auto___22045 + (1));
i__11386__auto___22045 = G__22046;
continue;
} else {
}
break;
}

var G__22043 = args22038.length;
switch (G__22043) {
case 2:
return cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__11404__auto__ = (new cljs.core.IndexedSeq(args22038.slice((2)),(0),null));
return cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__11404__auto__);

}
});

cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.list(new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null),new cljs.core.Symbol("cljs.core","PersistentVector","cljs.core/PersistentVector",-1211028272,null));
});

cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
var cnt = cljs.core.count.call(null,xs);
if((cnt < (32))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentVector.","cljs.core/PersistentVector.",-1074647876,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__11114__auto__ = cnt;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(5)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-EMPTY-NODE",".-EMPTY-NODE",-1333332641,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentVector","cljs.core/PersistentVector",-1211028272,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),xs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
} else {
return cljs.core.vary_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".fromArray",".fromArray",1053499311,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentVector","cljs.core/PersistentVector",-1211028272,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),xs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true)))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","PersistentVector","cljs.core/PersistentVector",-1211028272,null));
}
});

cljs.core$macros.vector.cljs$lang$applyTo = (function (seq22039){
var G__22040 = cljs.core.first.call(null,seq22039);
var seq22039__$1 = cljs.core.next.call(null,seq22039);
var G__22041 = cljs.core.first.call(null,seq22039__$1);
var seq22039__$2 = cljs.core.next.call(null,seq22039__$1);
return cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$variadic(G__22040,G__22041,seq22039__$2);
});

cljs.core$macros.vector.cljs$lang$maxFixedArity = (2);


cljs.core$macros.vector.cljs$lang$macro = true;
cljs.core$macros.array_map = (function cljs$core$macros$array_map(var_args){
var args22050 = [];
var len__11385__auto___22056 = arguments.length;
var i__11386__auto___22057 = (0);
while(true){
if((i__11386__auto___22057 < len__11385__auto___22056)){
args22050.push((arguments[i__11386__auto___22057]));

var G__22058 = (i__11386__auto___22057 + (1));
i__11386__auto___22057 = G__22058;
continue;
} else {
}
break;
}

var G__22055 = args22050.length;
switch (G__22055) {
case 2:
return cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__11404__auto__ = (new cljs.core.IndexedSeq(args22050.slice((2)),(0),null));
return cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__11404__auto__);

}
});

cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.list(new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null),new cljs.core.Symbol("cljs.core","PersistentArrayMap","cljs.core/PersistentArrayMap",1025194468,null));
});

cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,kvs){
var keys = cljs.core.map.call(null,cljs.core.first,cljs.core.partition.call(null,(2),kvs));
if((cljs.core.every_QMARK_.call(null,((function (keys){
return (function (p1__22048_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__22048_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
});})(keys))
,cljs.core.map.call(null,((function (keys){
return (function (p1__22049_SHARP_){
return cljs.analyzer.analyze.call(null,_AMPERSAND_env,p1__22049_SHARP_);
});})(keys))
,keys))) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,keys)),cljs.core.count.call(null,keys)))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentArrayMap.","cljs.core/PersistentArrayMap.",-471979341,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__11114__auto__ = (cljs.core.count.call(null,kvs) / (2));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),kvs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".fromArray",".fromArray",1053499311,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentArrayMap","cljs.core/PersistentArrayMap",1025194468,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),kvs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
}
});

cljs.core$macros.array_map.cljs$lang$applyTo = (function (seq22051){
var G__22052 = cljs.core.first.call(null,seq22051);
var seq22051__$1 = cljs.core.next.call(null,seq22051);
var G__22053 = cljs.core.first.call(null,seq22051__$1);
var seq22051__$2 = cljs.core.next.call(null,seq22051__$1);
return cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$variadic(G__22052,G__22053,seq22051__$2);
});

cljs.core$macros.array_map.cljs$lang$maxFixedArity = (2);


cljs.core$macros.array_map.cljs$lang$macro = true;
cljs.core$macros.hash_map = (function cljs$core$macros$hash_map(var_args){
var args22060 = [];
var len__11385__auto___22066 = arguments.length;
var i__11386__auto___22067 = (0);
while(true){
if((i__11386__auto___22067 < len__11385__auto___22066)){
args22060.push((arguments[i__11386__auto___22067]));

var G__22068 = (i__11386__auto___22067 + (1));
i__11386__auto___22067 = G__22068;
continue;
} else {
}
break;
}

var G__22065 = args22060.length;
switch (G__22065) {
case 2:
return cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__11404__auto__ = (new cljs.core.IndexedSeq(args22060.slice((2)),(0),null));
return cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__11404__auto__);

}
});

cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentHashMap","cljs.core/PersistentHashMap",-454120575,null)))));
});

cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,kvs){
var pairs = cljs.core.partition.call(null,(2),kvs);
var ks = cljs.core.map.call(null,cljs.core.first,pairs);
var vs = cljs.core.map.call(null,cljs.core.second,pairs);
return cljs.core.vary_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".fromArrays",".fromArrays",1110244209,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentHashMap","cljs.core/PersistentHashMap",-454120575,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),ks)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),vs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})()))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","PersistentHashMap","cljs.core/PersistentHashMap",-454120575,null));
});

cljs.core$macros.hash_map.cljs$lang$applyTo = (function (seq22061){
var G__22062 = cljs.core.first.call(null,seq22061);
var seq22061__$1 = cljs.core.next.call(null,seq22061);
var G__22063 = cljs.core.first.call(null,seq22061__$1);
var seq22061__$2 = cljs.core.next.call(null,seq22061__$1);
return cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$variadic(G__22062,G__22063,seq22061__$2);
});

cljs.core$macros.hash_map.cljs$lang$maxFixedArity = (2);


cljs.core$macros.hash_map.cljs$lang$macro = true;
cljs.core$macros.hash_set = (function cljs$core$macros$hash_set(var_args){
var args22072 = [];
var len__11385__auto___22078 = arguments.length;
var i__11386__auto___22079 = (0);
while(true){
if((i__11386__auto___22079 < len__11385__auto___22078)){
args22072.push((arguments[i__11386__auto___22079]));

var G__22080 = (i__11386__auto___22079 + (1));
i__11386__auto___22079 = G__22080;
continue;
} else {
}
break;
}

var G__22077 = args22072.length;
switch (G__22077) {
case 2:
return cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__11404__auto__ = (new cljs.core.IndexedSeq(args22072.slice((2)),(0),null));
return cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__11404__auto__);

}
});

cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentHashSet","cljs.core/PersistentHashSet",-967232330,null)))));
});

cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
if(((cljs.core.count.call(null,xs) <= (8))) && (cljs.core.every_QMARK_.call(null,(function (p1__22070_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__22070_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),cljs.core.map.call(null,(function (p1__22071_SHARP_){
return cljs.analyzer.analyze.call(null,_AMPERSAND_env,p1__22071_SHARP_);
}),xs))) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,xs)),cljs.core.count.call(null,xs)))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentHashSet.","cljs.core/PersistentHashSet.",300313251,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentArrayMap.","cljs.core/PersistentArrayMap.",-471979341,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__11114__auto__ = cljs.core.count.call(null,xs);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),cljs.core.interleave.call(null,xs,cljs.core.repeat.call(null,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
} else {
return cljs.core.vary_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".fromArray",".fromArray",1053499311,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentHashSet","cljs.core/PersistentHashSet",-967232330,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),xs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true)))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","PersistentHashSet","cljs.core/PersistentHashSet",-967232330,null));
}
});

cljs.core$macros.hash_set.cljs$lang$applyTo = (function (seq22073){
var G__22074 = cljs.core.first.call(null,seq22073);
var seq22073__$1 = cljs.core.next.call(null,seq22073);
var G__22075 = cljs.core.first.call(null,seq22073__$1);
var seq22073__$2 = cljs.core.next.call(null,seq22073__$1);
return cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$variadic(G__22074,G__22075,seq22073__$2);
});

cljs.core$macros.hash_set.cljs$lang$maxFixedArity = (2);


cljs.core$macros.hash_set.cljs$lang$macro = true;
cljs.core$macros.js_obj_STAR_ = (function cljs$core$macros$js_obj_STAR_(kvs){
var kvs_str = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,",",cljs.core.take.call(null,cljs.core.count.call(null,kvs),cljs.core.repeat.call(null,"~{}:~{}"))));
return cljs.core.vary_meta.call(null,cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),[cljs.core.str("{"),cljs.core.str(kvs_str),cljs.core.str("}")].join(''),cljs.core.apply.call(null,cljs.core.concat,kvs)),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"object","object",-1179821820,null));
});
cljs.core$macros.js_obj = (function cljs$core$macros$js_obj(var_args){
var args__11392__auto__ = [];
var len__11385__auto___22097 = arguments.length;
var i__11386__auto___22098 = (0);
while(true){
if((i__11386__auto___22098 < len__11385__auto___22097)){
args__11392__auto__.push((arguments[i__11386__auto___22098]));

var G__22099 = (i__11386__auto___22098 + (1));
i__11386__auto___22098 = G__22099;
continue;
} else {
}
break;
}

var argseq__11393__auto__ = ((((2) < args__11392__auto__.length))?(new cljs.core.IndexedSeq(args__11392__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.js_obj.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__11393__auto__);
});

cljs.core$macros.js_obj.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,rest){
var sym_or_str_QMARK_ = (function (x){
return ((x instanceof cljs.core.Symbol)) || (typeof x === 'string');
});
var filter_on_keys = ((function (sym_or_str_QMARK_){
return (function (f,coll){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,((function (sym_or_str_QMARK_){
return (function (p__22085){
var vec__22086 = p__22085;
var k = cljs.core.nth.call(null,vec__22086,(0),null);
var _ = cljs.core.nth.call(null,vec__22086,(1),null);
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__11114__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.apply.call(null,cljs.core.concat,clojure.set.map_invert.call(null,expr__GT_local)),(function (){var x__11114__auto__ = obj;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core$macros.js_obj_STAR_.call(null,filter_on_keys.call(null,cljs.core.string_QMARK_,kvs));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),cljs.core.map.call(null,((function (sym_or_str_QMARK_,filter_on_keys,kvs,sym_pairs,expr__GT_local,obj){
return (function (p__22089){
var vec__22090 = p__22089;
var k = cljs.core.nth.call(null,vec__22090,(0),null);
var v = cljs.core.nth.call(null,vec__22090,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aset","cljs.core$macros/aset",-693176374,null)),(function (){var x__11114__auto__ = obj;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = k;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
});})(sym_or_str_QMARK_,filter_on_keys,kvs,sym_pairs,expr__GT_local,obj))
,sym_pairs),cljs.core.map.call(null,((function (sym_or_str_QMARK_,filter_on_keys,kvs,sym_pairs,expr__GT_local,obj){
return (function (p__22093){
var vec__22094 = p__22093;
var k = cljs.core.nth.call(null,vec__22094,(0),null);
var v = cljs.core.nth.call(null,vec__22094,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aset","cljs.core$macros/aset",-693176374,null)),(function (){var x__11114__auto__ = obj;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.get.call(null,kvs,k);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
});})(sym_or_str_QMARK_,filter_on_keys,kvs,sym_pairs,expr__GT_local,obj))
,expr__GT_local),(function (){var x__11114__auto__ = obj;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
}
});

cljs.core$macros.js_obj.cljs$lang$maxFixedArity = (2);

cljs.core$macros.js_obj.cljs$lang$applyTo = (function (seq22082){
var G__22083 = cljs.core.first.call(null,seq22082);
var seq22082__$1 = cljs.core.next.call(null,seq22082);
var G__22084 = cljs.core.first.call(null,seq22082__$1);
var seq22082__$2 = cljs.core.next.call(null,seq22082__$1);
return cljs.core$macros.js_obj.cljs$core$IFn$_invoke$arity$variadic(G__22083,G__22084,seq22082__$2);
});


cljs.core$macros.js_obj.cljs$lang$macro = true;
cljs.core$macros.alength = (function cljs$core$macros$alength(_AMPERSAND_form,_AMPERSAND_env,a){
return cljs.core.vary_meta.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__11114__auto__ = a;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__11114__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"a__22100__auto__","a__22100__auto__",-1191062397,null)),(function (){var x__11114__auto__ = a;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = ret;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","aclone","cljs.core/aclone",-758078968,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"a__22100__auto__","a__22100__auto__",-1191062397,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__11114__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__11114__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__11114__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"a__22100__auto__","a__22100__auto__",-1191062397,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aset","cljs.core$macros/aset",-693176374,null)),(function (){var x__11114__auto__ = ret;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),(function (){var x__11114__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = ret;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
});

cljs.core$macros.amap.cljs$lang$macro = true;
/**
 * Reduces an expression across an array a, using an index named idx,
 *   and return value named ret, initialized to init, setting ret to the
 *   evaluation of expr at each step, returning ret.
 */
cljs.core$macros.areduce = (function cljs$core$macros$areduce(_AMPERSAND_form,_AMPERSAND_env,a,idx,ret,init,expr){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__11114__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"a__22101__auto__","a__22101__auto__",172486208,null)),(function (){var x__11114__auto__ = a;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__11114__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__11114__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),(function (){var x__11114__auto__ = ret;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = init;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__11114__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"a__22101__auto__","a__22101__auto__",172486208,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),(function (){var x__11114__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = ret;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
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
var args__11392__auto__ = [];
var len__11385__auto___22107 = arguments.length;
var i__11386__auto___22108 = (0);
while(true){
if((i__11386__auto___22108 < len__11385__auto___22107)){
args__11392__auto__.push((arguments[i__11386__auto___22108]));

var G__22109 = (i__11386__auto___22108 + (1));
i__11386__auto___22108 = G__22109;
continue;
} else {
}
break;
}

var argseq__11393__auto__ = ((((3) < args__11392__auto__.length))?(new cljs.core.IndexedSeq(args__11392__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.dotimes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__11393__auto__);
});

cljs.core$macros.dotimes.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
var i = cljs.core.first.call(null,bindings);
var n = cljs.core.second.call(null,bindings);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__11114__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"n__22102__auto__","n__22102__auto__",-2091015155,null)),(function (){var x__11114__auto__ = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__11114__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__11114__auto__ = i;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__11114__auto__ = i;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"n__22102__auto__","n__22102__auto__",-2091015155,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),body,(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),(function (){var x__11114__auto__ = i;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
});

cljs.core$macros.dotimes.cljs$lang$maxFixedArity = (3);

cljs.core$macros.dotimes.cljs$lang$applyTo = (function (seq22103){
var G__22104 = cljs.core.first.call(null,seq22103);
var seq22103__$1 = cljs.core.next.call(null,seq22103);
var G__22105 = cljs.core.first.call(null,seq22103__$1);
var seq22103__$2 = cljs.core.next.call(null,seq22103__$1);
var G__22106 = cljs.core.first.call(null,seq22103__$2);
var seq22103__$3 = cljs.core.next.call(null,seq22103__$2);
return cljs.core$macros.dotimes.cljs$core$IFn$_invoke$arity$variadic(G__22104,G__22105,G__22106,seq22103__$3);
});


cljs.core$macros.dotimes.cljs$lang$macro = true;
/**
 * Throws an exception if the given option map contains keys not listed
 *   as valid, else returns nil.
 */
cljs.core$macros.check_valid_options = (function cljs$core$macros$check_valid_options(var_args){
var args__11392__auto__ = [];
var len__11385__auto___22113 = arguments.length;
var i__11386__auto___22114 = (0);
while(true){
if((i__11386__auto___22114 < len__11385__auto___22113)){
args__11392__auto__.push((arguments[i__11386__auto___22114]));

var G__22115 = (i__11386__auto___22114 + (1));
i__11386__auto___22114 = G__22115;
continue;
} else {
}
break;
}

var argseq__11393__auto__ = ((((1) < args__11392__auto__.length))?(new cljs.core.IndexedSeq(args__11392__auto__.slice((1)),(0),null)):null);
return cljs.core$macros.check_valid_options.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__11393__auto__);
});

cljs.core$macros.check_valid_options.cljs$core$IFn$_invoke$arity$variadic = (function (options,valid_keys){
if(cljs.core.seq.call(null,cljs.core.apply.call(null,cljs.core.disj,cljs.core.apply.call(null,cljs.core.hash_set,cljs.core.keys.call(null,options)),valid_keys))){
throw cljs.core.apply.call(null,cljs.core.str,"Only these options are valid: ",cljs.core.first.call(null,valid_keys),cljs.core.map.call(null,(function (p1__22110_SHARP_){
return [cljs.core.str(", "),cljs.core.str(p1__22110_SHARP_)].join('');
}),cljs.core.rest.call(null,valid_keys)));
} else {
return null;
}
});

cljs.core$macros.check_valid_options.cljs$lang$maxFixedArity = (1);

cljs.core$macros.check_valid_options.cljs$lang$applyTo = (function (seq22111){
var G__22112 = cljs.core.first.call(null,seq22111);
var seq22111__$1 = cljs.core.next.call(null,seq22111);
return cljs.core$macros.check_valid_options.cljs$core$IFn$_invoke$arity$variadic(G__22112,seq22111__$1);
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
var args__11392__auto__ = [];
var len__11385__auto___22125 = arguments.length;
var i__11386__auto___22126 = (0);
while(true){
if((i__11386__auto___22126 < len__11385__auto___22125)){
args__11392__auto__.push((arguments[i__11386__auto___22126]));

var G__22127 = (i__11386__auto___22126 + (1));
i__11386__auto___22126 = G__22127;
continue;
} else {
}
break;
}

var argseq__11393__auto__ = ((((3) < args__11392__auto__.length))?(new cljs.core.IndexedSeq(args__11392__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.defmulti.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__11393__auto__);
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

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defonce","cljs.core$macros/defonce",-1096231613,null)),(function (){var x__11114__auto__ = cljs.core.with_meta.call(null,mm_name,m__$2);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__11114__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"method-table__22116__auto__","method-table__22116__auto__",1377995609,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null)),(function (){var x__11114__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"prefer-table__22117__auto__","prefer-table__22117__auto__",1075215296,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null)),(function (){var x__11114__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"method-cache__22118__auto__","method-cache__22118__auto__",-1966580211,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null)),(function (){var x__11114__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cached-hierarchy__22119__auto__","cached-hierarchy__22119__auto__",-734741458,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null)),(function (){var x__11114__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"hierarchy__22120__auto__","hierarchy__22120__auto__",37888894,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null)),(function (){var x__11114__auto__ = options__$4;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","get-global-hierarchy","cljs.core/get-global-hierarchy",48052871,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","MultiFn.","cljs.core/MultiFn.",1073941573,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","symbol","cljs.core/symbol",195265748,null)),(function (){var x__11114__auto__ = mm_ns;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.name.call(null,mm_name);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = dispatch_fn;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = default$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"hierarchy__22120__auto__","hierarchy__22120__auto__",37888894,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"method-table__22116__auto__","method-table__22116__auto__",1377995609,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"prefer-table__22117__auto__","prefer-table__22117__auto__",1075215296,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"method-cache__22118__auto__","method-cache__22118__auto__",-1966580211,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cached-hierarchy__22119__auto__","cached-hierarchy__22119__auto__",-734741458,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
});

cljs.core$macros.defmulti.cljs$lang$maxFixedArity = (3);

cljs.core$macros.defmulti.cljs$lang$applyTo = (function (seq22121){
var G__22122 = cljs.core.first.call(null,seq22121);
var seq22121__$1 = cljs.core.next.call(null,seq22121);
var G__22123 = cljs.core.first.call(null,seq22121__$1);
var seq22121__$2 = cljs.core.next.call(null,seq22121__$1);
var G__22124 = cljs.core.first.call(null,seq22121__$2);
var seq22121__$3 = cljs.core.next.call(null,seq22121__$2);
return cljs.core$macros.defmulti.cljs$core$IFn$_invoke$arity$variadic(G__22122,G__22123,G__22124,seq22121__$3);
});


cljs.core$macros.defmulti.cljs$lang$macro = true;
/**
 * Creates and installs a new method of multimethod associated with dispatch-value. 
 */
cljs.core$macros.defmethod = (function cljs$core$macros$defmethod(var_args){
var args__11392__auto__ = [];
var len__11385__auto___22133 = arguments.length;
var i__11386__auto___22134 = (0);
while(true){
if((i__11386__auto___22134 < len__11385__auto___22133)){
args__11392__auto__.push((arguments[i__11386__auto___22134]));

var G__22135 = (i__11386__auto___22134 + (1));
i__11386__auto___22134 = G__22135;
continue;
} else {
}
break;
}

var argseq__11393__auto__ = ((((4) < args__11392__auto__.length))?(new cljs.core.IndexedSeq(args__11392__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.defmethod.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__11393__auto__);
});

cljs.core$macros.defmethod.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,multifn,dispatch_val,fn_tail){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-add-method","cljs.core/-add-method",571092113,null)),(function (){var x__11114__auto__ = cljs.core.with_meta.call(null,multifn,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","MultiFn","cljs.core/MultiFn",1487419554,null)], null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = dispatch_val;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),fn_tail)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
});

cljs.core$macros.defmethod.cljs$lang$maxFixedArity = (4);

cljs.core$macros.defmethod.cljs$lang$applyTo = (function (seq22128){
var G__22129 = cljs.core.first.call(null,seq22128);
var seq22128__$1 = cljs.core.next.call(null,seq22128);
var G__22130 = cljs.core.first.call(null,seq22128__$1);
var seq22128__$2 = cljs.core.next.call(null,seq22128__$1);
var G__22131 = cljs.core.first.call(null,seq22128__$2);
var seq22128__$3 = cljs.core.next.call(null,seq22128__$2);
var G__22132 = cljs.core.first.call(null,seq22128__$3);
var seq22128__$4 = cljs.core.next.call(null,seq22128__$3);
return cljs.core$macros.defmethod.cljs$core$IFn$_invoke$arity$variadic(G__22129,G__22130,G__22131,G__22132,seq22128__$4);
});


cljs.core$macros.defmethod.cljs$lang$macro = true;
/**
 * Evaluates expr and prints the time it took. Returns the value of expr.
 */
cljs.core$macros.time = (function cljs$core$macros$time(_AMPERSAND_form,_AMPERSAND_env,expr){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__11114__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"start__22136__auto__","start__22136__auto__",1505444312,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","system-time","cljs.core/system-time",1562011930,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ret__22137__auto__","ret__22137__auto__",149820656,null)),(function (){var x__11114__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","prn","cljs.core/prn",1725204552,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"Elapsed time: "),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".toFixed",".toFixed",-895046938,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","system-time","cljs.core/system-time",1562011930,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"start__22136__auto__","start__22136__auto__",1505444312,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(6)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY," msecs"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ret__22137__auto__","ret__22137__auto__",149820656,null)))));
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
var args__11392__auto__ = [];
var len__11385__auto___22152 = arguments.length;
var i__11386__auto___22153 = (0);
while(true){
if((i__11386__auto___22153 < len__11385__auto___22152)){
args__11392__auto__.push((arguments[i__11386__auto___22153]));

var G__22154 = (i__11386__auto___22153 + (1));
i__11386__auto___22153 = G__22154;
continue;
} else {
}
break;
}

var argseq__11393__auto__ = ((((5) < args__11392__auto__.length))?(new cljs.core.IndexedSeq(args__11392__auto__.slice((5)),(0),null)):null);
return cljs.core$macros.simple_benchmark.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__11393__auto__);
});

cljs.core$macros.simple_benchmark.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,expr,iterations,p__22149){
var map__22150 = p__22149;
var map__22150__$1 = ((((!((map__22150 == null)))?((((map__22150.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22150.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22150):map__22150);
var print_fn = cljs.core.get.call(null,map__22150__$1,new cljs.core.Keyword(null,"print-fn","print-fn",-1720960489),new cljs.core.Symbol(null,"println","println",-733595439,null));
var bs_str = cljs.core.pr_str.call(null,bindings);
var expr_str = cljs.core.pr_str.call(null,expr);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__11114__auto__ = bindings;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__11114__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"start__22138__auto__","start__22138__auto__",-710727841,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".getTime",".getTime",-1048557777,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Date.","js/Date.",384205255,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ret__22139__auto__","ret__22139__auto__",1133896640,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","dotimes","cljs.core$macros/dotimes",-1407597661,null)),(function (){var x__11114__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"___22140__auto__","___22140__auto__",-807382012,null)),(function (){var x__11114__auto__ = iterations;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"end__22141__auto__","end__22141__auto__",-1459426865,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".getTime",".getTime",-1048557777,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Date.","js/Date.",384205255,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"elapsed__22142__auto__","elapsed__22142__auto__",-1968977999,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"end__22141__auto__","end__22141__auto__",-1459426865,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"start__22138__auto__","start__22138__auto__",-710727841,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__11114__auto__ = print_fn;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","str","cljs.core$macros/str",-2019499702,null)),(function (){var x__11114__auto__ = bs_str;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,", "),(function (){var x__11114__auto__ = expr_str;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,", "),(function (){var x__11114__auto__ = iterations;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY," runs, "),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"elapsed__22142__auto__","elapsed__22142__auto__",-1968977999,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY," msecs"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
});

cljs.core$macros.simple_benchmark.cljs$lang$maxFixedArity = (5);

cljs.core$macros.simple_benchmark.cljs$lang$applyTo = (function (seq22143){
var G__22144 = cljs.core.first.call(null,seq22143);
var seq22143__$1 = cljs.core.next.call(null,seq22143);
var G__22145 = cljs.core.first.call(null,seq22143__$1);
var seq22143__$2 = cljs.core.next.call(null,seq22143__$1);
var G__22146 = cljs.core.first.call(null,seq22143__$2);
var seq22143__$3 = cljs.core.next.call(null,seq22143__$2);
var G__22147 = cljs.core.first.call(null,seq22143__$3);
var seq22143__$4 = cljs.core.next.call(null,seq22143__$3);
var G__22148 = cljs.core.first.call(null,seq22143__$4);
var seq22143__$5 = cljs.core.next.call(null,seq22143__$4);
return cljs.core$macros.simple_benchmark.cljs$core$IFn$_invoke$arity$variadic(G__22144,G__22145,G__22146,G__22147,G__22148,seq22143__$5);
});


cljs.core$macros.simple_benchmark.cljs$lang$macro = true;
cljs.core$macros.cs = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.gensym,cljs.core.str,cljs.core.char$),cljs.core.range.call(null,(97),(118))));
cljs.core$macros.gen_apply_to_helper = (function cljs$core$macros$gen_apply_to_helper(var_args){
var args22155 = [];
var len__11385__auto___22158 = arguments.length;
var i__11386__auto___22159 = (0);
while(true){
if((i__11386__auto___22159 < len__11385__auto___22158)){
args22155.push((arguments[i__11386__auto___22159]));

var G__22160 = (i__11386__auto___22159 + (1));
i__11386__auto___22159 = G__22160;
continue;
} else {
}
break;
}

var G__22157 = args22155.length;
switch (G__22157) {
case 0:
return cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22155.length)].join('')));

}
});

cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core$macros.gen_apply_to_helper.call(null,(1));
});

cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$1 = (function (n){
var prop = cljs.core.symbol.call(null,[cljs.core.str("-cljs$core$IFn$_invoke$arity$"),cljs.core.str(n)].join(''));
var f = cljs.core.symbol.call(null,[cljs.core.str("cljs$core$IFn$_invoke$arity$"),cljs.core.str(n)].join(''));
if((n <= (20))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__11114__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__11114__auto__ = cljs.core$macros.cs.call(null,(n - (1)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-first","cljs.core/-first",545297391,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-rest","cljs.core/-rest",-1829241664,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","==","cljs.core$macros/==",-818551413,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argc","argc",187692008,null)),(function (){var x__11114__auto__ = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"f","f",43394975,null)),(function (){var x__11114__auto__ = prop;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"f","f",43394975,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__11114__auto__ = f;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),cljs.core.take.call(null,n,cljs.core$macros.cs))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"f","f",43394975,null)),cljs.core.take.call(null,n,cljs.core$macros.cs))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core$macros.gen_apply_to_helper.call(null,(n + (1)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"Only up to 20 arguments supported on functions"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
}
});

cljs.core$macros.gen_apply_to_helper.cljs$lang$maxFixedArity = 1;

cljs.core$macros.gen_apply_to = (function cljs$core$macros$gen_apply_to(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"*unchecked-if*","*unchecked-if*",1542408350,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"apply-to","apply-to",-1858571928,null)),(function (){var x__11114__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"f","f",43394975,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argc","argc",187692008,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__11114__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","zero?","cljs.core$macros/zero?",-65998367,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argc","argc",187692008,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"f","f",43394975,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core$macros.gen_apply_to_helper.call(null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"*unchecked-if*","*unchecked-if*",1542408350,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
});

cljs.core$macros.gen_apply_to.cljs$lang$macro = true;
/**
 * Evaluates exprs in a context in which *print-fn* is bound to .append
 *   on a fresh StringBuffer.  Returns the string created by any nested
 *   printing calls.
 */
cljs.core$macros.with_out_str = (function cljs$core$macros$with_out_str(var_args){
var args__11392__auto__ = [];
var len__11385__auto___22167 = arguments.length;
var i__11386__auto___22168 = (0);
while(true){
if((i__11386__auto___22168 < len__11385__auto___22167)){
args__11392__auto__.push((arguments[i__11386__auto___22168]));

var G__22169 = (i__11386__auto___22168 + (1));
i__11386__auto___22168 = G__22169;
continue;
} else {
}
break;
}

var argseq__11393__auto__ = ((((2) < args__11392__auto__.length))?(new cljs.core.IndexedSeq(args__11392__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.with_out_str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__11393__auto__);
});

cljs.core$macros.with_out_str.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__11114__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"sb__22162__auto__","sb__22162__auto__",619291190,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","goog.string.StringBuffer.","js/goog.string.StringBuffer.",-1043451650,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","binding","cljs.core$macros/binding",1855847304,null)),(function (){var x__11114__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","*print-newline*","cljs.core/*print-newline*",6231625,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","*print-fn*","cljs.core/*print-fn*",1342365176,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__11114__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__22163__auto__","x__22163__auto__",471654516,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".append",".append",1595439852,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"sb__22162__auto__","sb__22162__auto__",619291190,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__22163__auto__","x__22163__auto__",471654516,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"sb__22162__auto__","sb__22162__auto__",619291190,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
});

cljs.core$macros.with_out_str.cljs$lang$maxFixedArity = (2);

cljs.core$macros.with_out_str.cljs$lang$applyTo = (function (seq22164){
var G__22165 = cljs.core.first.call(null,seq22164);
var seq22164__$1 = cljs.core.next.call(null,seq22164);
var G__22166 = cljs.core.first.call(null,seq22164__$1);
var seq22164__$2 = cljs.core.next.call(null,seq22164__$1);
return cljs.core$macros.with_out_str.cljs$core$IFn$_invoke$arity$variadic(G__22165,G__22166,seq22164__$2);
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
var args__11392__auto__ = [];
var len__11385__auto___22174 = arguments.length;
var i__11386__auto___22175 = (0);
while(true){
if((i__11386__auto___22175 < len__11385__auto___22174)){
args__11392__auto__.push((arguments[i__11386__auto___22175]));

var G__22176 = (i__11386__auto___22175 + (1));
i__11386__auto___22175 = G__22176;
continue;
} else {
}
break;
}

var argseq__11393__auto__ = ((((2) < args__11392__auto__.length))?(new cljs.core.IndexedSeq(args__11392__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.lazy_cat.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__11393__auto__);
});

cljs.core$macros.lazy_cat.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,colls){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null)),cljs.core.map.call(null,(function (p1__22170_SHARP_){
return cljs.core._conj.call(null,(function (){var x__11114__auto__ = p1__22170_SHARP_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),new cljs.core.Symbol("cljs.core$macros","lazy-seq","cljs.core$macros/lazy-seq",806482650,null));
}),colls))));
});

cljs.core$macros.lazy_cat.cljs$lang$maxFixedArity = (2);

cljs.core$macros.lazy_cat.cljs$lang$applyTo = (function (seq22171){
var G__22172 = cljs.core.first.call(null,seq22171);
var seq22171__$1 = cljs.core.next.call(null,seq22171);
var G__22173 = cljs.core.first.call(null,seq22171__$1);
var seq22171__$2 = cljs.core.next.call(null,seq22171__$1);
return cljs.core$macros.lazy_cat.cljs$core$IFn$_invoke$arity$variadic(G__22172,G__22173,seq22171__$2);
});


cljs.core$macros.lazy_cat.cljs$lang$macro = true;
cljs.core$macros.js_str = (function cljs$core$macros$js_str(_AMPERSAND_form,_AMPERSAND_env,s){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__11114__auto__ = s;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),"''+~{}"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.js_str.cljs$lang$macro = true;
cljs.core$macros.es6_iterable = (function cljs$core$macros$es6_iterable(_AMPERSAND_form,_AMPERSAND_env,ty){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aset","cljs.core$macros/aset",-693176374,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-prototype",".-prototype",-1562038608,null)),(function (){var x__11114__auto__ = ty;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","ITER_SYMBOL","cljs.core/ITER_SYMBOL",-2091399233,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__11114__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__22177__auto__","this__22177__auto__",422554059,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","es6-iterator","cljs.core/es6-iterator",856007913,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__22177__auto__","this__22177__auto__",422554059,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
});

cljs.core$macros.es6_iterable.cljs$lang$macro = true;
/**
 * Returns a map of the intern mappings for the namespace.
 */
cljs.core$macros.ns_interns = (function cljs$core$macros$ns_interns(_AMPERSAND_form,_AMPERSAND_env,p__22178){
var vec__22190 = p__22178;
var quote = cljs.core.nth.call(null,vec__22190,(0),null);
var ns = cljs.core.nth.call(null,vec__22190,(1),null);
if((cljs.core._EQ_.call(null,quote,new cljs.core.Symbol(null,"quote","quote",1377916282,null))) && ((ns instanceof cljs.core.Symbol))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Argument to ns-interns must be a quoted symbol"),cljs.core.str("\n"),cljs.core.str("(core/and (= quote (quote quote)) (core/symbol? ns))")].join('')));
}

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","into","cljs.core/into",1879938733,null)),(function (){var x__11114__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,((function (vec__22190,quote,ns){
return (function (p__22197){
var vec__22198 = p__22197;
var sym = cljs.core.nth.call(null,vec__22198,(0),null);
var _ = cljs.core.nth.call(null,vec__22198,(1),null);
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","symbol","cljs.core/symbol",195265748,null)),(function (){var x__11114__auto__ = cljs.core.name.call(null,sym);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"var","var",870848730,null)),(function (){var x__11114__auto__ = cljs.core.symbol.call(null,cljs.core.name.call(null,ns),cljs.core.name.call(null,sym));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})()))));
});})(vec__22190,quote,ns))
,cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns,new cljs.core.Keyword(null,"defs","defs",1398449717)], null)))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
});

cljs.core$macros.ns_interns.cljs$lang$macro = true;
/**
 * Removes the mappings for the symbol from the namespace.
 */
cljs.core$macros.ns_unmap = (function cljs$core$macros$ns_unmap(_AMPERSAND_form,_AMPERSAND_env,p__22201,p__22202){
var vec__22209 = p__22201;
var quote0 = cljs.core.nth.call(null,vec__22209,(0),null);
var ns = cljs.core.nth.call(null,vec__22209,(1),null);
var vec__22212 = p__22202;
var quote1 = cljs.core.nth.call(null,vec__22212,(0),null);
var sym = cljs.core.nth.call(null,vec__22212,(1),null);
if((cljs.core._EQ_.call(null,quote0,new cljs.core.Symbol(null,"quote","quote",1377916282,null))) && ((ns instanceof cljs.core.Symbol)) && (cljs.core._EQ_.call(null,quote1,new cljs.core.Symbol(null,"quote","quote",1377916282,null))) && ((sym instanceof cljs.core.Symbol))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Arguments to ns-unmap must be quoted symbols"),cljs.core.str("\n"),cljs.core.str("(core/and (= quote0 (quote quote)) (core/symbol? ns) (= quote1 (quote quote)) (core/symbol? sym))")].join('')));
}

cljs.core.swap_BANG_.call(null,cljs.env._STAR_compiler_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns,new cljs.core.Keyword(null,"defs","defs",1398449717)], null),cljs.core.dissoc,sym);

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-delete","cljs.core$macros/js-delete",387769082,null)),(function (){var x__11114__auto__ = cljs.compiler.munge.call(null,ns);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.compiler.munge.call(null,[cljs.core.str(sym)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
});

cljs.core$macros.ns_unmap.cljs$lang$macro = true;
/**
 * Non-atomically swaps the value of the volatile as if:
 * (apply f current-value-of-vol args). Returns the value that
 * was swapped in.
 */
cljs.core$macros.vswap_BANG_ = (function cljs$core$macros$vswap_BANG_(var_args){
var args__11392__auto__ = [];
var len__11385__auto___22220 = arguments.length;
var i__11386__auto___22221 = (0);
while(true){
if((i__11386__auto___22221 < len__11385__auto___22220)){
args__11392__auto__.push((arguments[i__11386__auto___22221]));

var G__22222 = (i__11386__auto___22221 + (1));
i__11386__auto___22221 = G__22222;
continue;
} else {
}
break;
}

var argseq__11393__auto__ = ((((4) < args__11392__auto__.length))?(new cljs.core.IndexedSeq(args__11392__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.vswap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__11393__auto__);
});

cljs.core$macros.vswap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,vol,f,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-vreset!","cljs.core/-vreset!",-1186516972,null)),(function (){var x__11114__auto__ = vol;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__11114__auto__ = f;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-deref","cljs.core/-deref",-1260480154,null)),(function (){var x__11114__auto__ = vol;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),args)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
});

cljs.core$macros.vswap_BANG_.cljs$lang$maxFixedArity = (4);

cljs.core$macros.vswap_BANG_.cljs$lang$applyTo = (function (seq22215){
var G__22216 = cljs.core.first.call(null,seq22215);
var seq22215__$1 = cljs.core.next.call(null,seq22215);
var G__22217 = cljs.core.first.call(null,seq22215__$1);
var seq22215__$2 = cljs.core.next.call(null,seq22215__$1);
var G__22218 = cljs.core.first.call(null,seq22215__$2);
var seq22215__$3 = cljs.core.next.call(null,seq22215__$2);
var G__22219 = cljs.core.first.call(null,seq22215__$3);
var seq22215__$4 = cljs.core.next.call(null,seq22215__$3);
return cljs.core$macros.vswap_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__22216,G__22217,G__22218,G__22219,seq22215__$4);
});


cljs.core$macros.vswap_BANG_.cljs$lang$macro = true;
cljs.core$macros.locking = (function cljs$core$macros$locking(var_args){
var args__11392__auto__ = [];
var len__11385__auto___22227 = arguments.length;
var i__11386__auto___22228 = (0);
while(true){
if((i__11386__auto___22228 < len__11385__auto___22227)){
args__11392__auto__.push((arguments[i__11386__auto___22228]));

var G__22229 = (i__11386__auto___22228 + (1));
i__11386__auto___22228 = G__22229;
continue;
} else {
}
break;
}

var argseq__11393__auto__ = ((((3) < args__11392__auto__.length))?(new cljs.core.IndexedSeq(args__11392__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.locking.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__11393__auto__);
});

cljs.core$macros.locking.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),forms)));
});

cljs.core$macros.locking.cljs$lang$maxFixedArity = (3);

cljs.core$macros.locking.cljs$lang$applyTo = (function (seq22223){
var G__22224 = cljs.core.first.call(null,seq22223);
var seq22223__$1 = cljs.core.next.call(null,seq22223);
var G__22225 = cljs.core.first.call(null,seq22223__$1);
var seq22223__$2 = cljs.core.next.call(null,seq22223__$1);
var G__22226 = cljs.core.first.call(null,seq22223__$2);
var seq22223__$3 = cljs.core.next.call(null,seq22223__$2);
return cljs.core$macros.locking.cljs$core$IFn$_invoke$arity$variadic(G__22224,G__22225,G__22226,seq22223__$3);
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
var args__11392__auto__ = [];
var len__11385__auto___22233 = arguments.length;
var i__11386__auto___22234 = (0);
while(true){
if((i__11386__auto___22234 < len__11385__auto___22233)){
args__11392__auto__.push((arguments[i__11386__auto___22234]));

var G__22235 = (i__11386__auto___22234 + (1));
i__11386__auto___22234 = G__22235;
continue;
} else {
}
break;
}

var argseq__11393__auto__ = ((((2) < args__11392__auto__.length))?(new cljs.core.IndexedSeq(args__11392__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.require.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__11393__auto__);
});

cljs.core$macros.require.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ns*","ns*",1840949383,null)),(function (){var x__11114__auto__ = cljs.core.cons.call(null,new cljs.core.Keyword(null,"require","require",-468001333),args);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
});

cljs.core$macros.require.cljs$lang$maxFixedArity = (2);

cljs.core$macros.require.cljs$lang$applyTo = (function (seq22230){
var G__22231 = cljs.core.first.call(null,seq22230);
var seq22230__$1 = cljs.core.next.call(null,seq22230);
var G__22232 = cljs.core.first.call(null,seq22230__$1);
var seq22230__$2 = cljs.core.next.call(null,seq22230__$1);
return cljs.core$macros.require.cljs$core$IFn$_invoke$arity$variadic(G__22231,G__22232,seq22230__$2);
});


cljs.core$macros.require.cljs$lang$macro = true;
/**
 * Similar to require but only for macros.
 */
cljs.core$macros.require_macros = (function cljs$core$macros$require_macros(var_args){
var args__11392__auto__ = [];
var len__11385__auto___22239 = arguments.length;
var i__11386__auto___22240 = (0);
while(true){
if((i__11386__auto___22240 < len__11385__auto___22239)){
args__11392__auto__.push((arguments[i__11386__auto___22240]));

var G__22241 = (i__11386__auto___22240 + (1));
i__11386__auto___22240 = G__22241;
continue;
} else {
}
break;
}

var argseq__11393__auto__ = ((((2) < args__11392__auto__.length))?(new cljs.core.IndexedSeq(args__11392__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.require_macros.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__11393__auto__);
});

cljs.core$macros.require_macros.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ns*","ns*",1840949383,null)),(function (){var x__11114__auto__ = cljs.core.cons.call(null,new cljs.core.Keyword(null,"require-macros","require-macros",707947416),args);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
});

cljs.core$macros.require_macros.cljs$lang$maxFixedArity = (2);

cljs.core$macros.require_macros.cljs$lang$applyTo = (function (seq22236){
var G__22237 = cljs.core.first.call(null,seq22236);
var seq22236__$1 = cljs.core.next.call(null,seq22236);
var G__22238 = cljs.core.first.call(null,seq22236__$1);
var seq22236__$2 = cljs.core.next.call(null,seq22236__$1);
return cljs.core$macros.require_macros.cljs$core$IFn$_invoke$arity$variadic(G__22237,G__22238,seq22236__$2);
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
var args__11392__auto__ = [];
var len__11385__auto___22245 = arguments.length;
var i__11386__auto___22246 = (0);
while(true){
if((i__11386__auto___22246 < len__11385__auto___22245)){
args__11392__auto__.push((arguments[i__11386__auto___22246]));

var G__22247 = (i__11386__auto___22246 + (1));
i__11386__auto___22246 = G__22247;
continue;
} else {
}
break;
}

var argseq__11393__auto__ = ((((2) < args__11392__auto__.length))?(new cljs.core.IndexedSeq(args__11392__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.use.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__11393__auto__);
});

cljs.core$macros.use.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ns*","ns*",1840949383,null)),(function (){var x__11114__auto__ = cljs.core.cons.call(null,new cljs.core.Keyword(null,"use","use",-1846382424),args);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
});

cljs.core$macros.use.cljs$lang$maxFixedArity = (2);

cljs.core$macros.use.cljs$lang$applyTo = (function (seq22242){
var G__22243 = cljs.core.first.call(null,seq22242);
var seq22242__$1 = cljs.core.next.call(null,seq22242);
var G__22244 = cljs.core.first.call(null,seq22242__$1);
var seq22242__$2 = cljs.core.next.call(null,seq22242__$1);
return cljs.core$macros.use.cljs$core$IFn$_invoke$arity$variadic(G__22243,G__22244,seq22242__$2);
});


cljs.core$macros.use.cljs$lang$macro = true;
/**
 * Similar to use but only for macros.
 */
cljs.core$macros.use_macros = (function cljs$core$macros$use_macros(var_args){
var args__11392__auto__ = [];
var len__11385__auto___22251 = arguments.length;
var i__11386__auto___22252 = (0);
while(true){
if((i__11386__auto___22252 < len__11385__auto___22251)){
args__11392__auto__.push((arguments[i__11386__auto___22252]));

var G__22253 = (i__11386__auto___22252 + (1));
i__11386__auto___22252 = G__22253;
continue;
} else {
}
break;
}

var argseq__11393__auto__ = ((((2) < args__11392__auto__.length))?(new cljs.core.IndexedSeq(args__11392__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.use_macros.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__11393__auto__);
});

cljs.core$macros.use_macros.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ns*","ns*",1840949383,null)),(function (){var x__11114__auto__ = cljs.core.cons.call(null,new cljs.core.Keyword(null,"use-macros","use-macros",-905638393),args);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
});

cljs.core$macros.use_macros.cljs$lang$maxFixedArity = (2);

cljs.core$macros.use_macros.cljs$lang$applyTo = (function (seq22248){
var G__22249 = cljs.core.first.call(null,seq22248);
var seq22248__$1 = cljs.core.next.call(null,seq22248);
var G__22250 = cljs.core.first.call(null,seq22248__$1);
var seq22248__$2 = cljs.core.next.call(null,seq22248__$1);
return cljs.core$macros.use_macros.cljs$core$IFn$_invoke$arity$variadic(G__22249,G__22250,seq22248__$2);
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
var args__11392__auto__ = [];
var len__11385__auto___22257 = arguments.length;
var i__11386__auto___22258 = (0);
while(true){
if((i__11386__auto___22258 < len__11385__auto___22257)){
args__11392__auto__.push((arguments[i__11386__auto___22258]));

var G__22259 = (i__11386__auto___22258 + (1));
i__11386__auto___22258 = G__22259;
continue;
} else {
}
break;
}

var argseq__11393__auto__ = ((((2) < args__11392__auto__.length))?(new cljs.core.IndexedSeq(args__11392__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.import$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__11393__auto__);
});

cljs.core$macros.import$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,import_symbols_or_lists){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ns*","ns*",1840949383,null)),(function (){var x__11114__auto__ = cljs.core.cons.call(null,new cljs.core.Keyword(null,"import","import",-1399500709),import_symbols_or_lists);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
});

cljs.core$macros.import$.cljs$lang$maxFixedArity = (2);

cljs.core$macros.import$.cljs$lang$applyTo = (function (seq22254){
var G__22255 = cljs.core.first.call(null,seq22254);
var seq22254__$1 = cljs.core.next.call(null,seq22254);
var G__22256 = cljs.core.first.call(null,seq22254__$1);
var seq22254__$2 = cljs.core.next.call(null,seq22254__$1);
return cljs.core$macros.import$.cljs$core$IFn$_invoke$arity$variadic(G__22255,G__22256,seq22254__$2);
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
var args__11392__auto__ = [];
var len__11385__auto___22263 = arguments.length;
var i__11386__auto___22264 = (0);
while(true){
if((i__11386__auto___22264 < len__11385__auto___22263)){
args__11392__auto__.push((arguments[i__11386__auto___22264]));

var G__22265 = (i__11386__auto___22264 + (1));
i__11386__auto___22264 = G__22265;
continue;
} else {
}
break;
}

var argseq__11393__auto__ = ((((2) < args__11392__auto__.length))?(new cljs.core.IndexedSeq(args__11392__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.refer_clojure.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__11393__auto__);
});

cljs.core$macros.refer_clojure.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ns*","ns*",1840949383,null)),(function (){var x__11114__auto__ = cljs.core.cons.call(null,new cljs.core.Keyword(null,"refer-clojure","refer-clojure",813784440),args);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
});

cljs.core$macros.refer_clojure.cljs$lang$maxFixedArity = (2);

cljs.core$macros.refer_clojure.cljs$lang$applyTo = (function (seq22260){
var G__22261 = cljs.core.first.call(null,seq22260);
var seq22260__$1 = cljs.core.next.call(null,seq22260);
var G__22262 = cljs.core.first.call(null,seq22260__$1);
var seq22260__$2 = cljs.core.next.call(null,seq22260__$1);
return cljs.core$macros.refer_clojure.cljs$core$IFn$_invoke$arity$variadic(G__22261,G__22262,seq22260__$2);
});


cljs.core$macros.refer_clojure.cljs$lang$macro = true;
cljs.core$macros.load_file_STAR_ = (function cljs$core$macros$load_file_STAR_(_AMPERSAND_form,_AMPERSAND_env,f){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","goog","js/goog",-70605150,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"nodeGlobalRequire","nodeGlobalRequire",167018599,null)),(function (){var x__11114__auto__ = f;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__11114__auto__ = cljs.analyzer.macroexpand_1.call(null,_AMPERSAND_env,form);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
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
var G__22266 = form_SINGLEQUOTE_;
var G__22267 = cljs.analyzer.macroexpand_1.call(null,env,form_SINGLEQUOTE_);
form__$1 = G__22266;
form_SINGLEQUOTE_ = G__22267;
continue;
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__11114__auto__ = form_SINGLEQUOTE_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
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
var and__10265__auto__ = cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,fdecl));
if(and__10265__auto__){
return cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),cljs.core.ffirst.call(null,fdecl));
} else {
return and__10265__auto__;
}
});
cljs.core$macros.variadic_fn_STAR_ = (function cljs$core$macros$variadic_fn_STAR_(var_args){
var args22268 = [];
var len__11385__auto___22275 = arguments.length;
var i__11386__auto___22276 = (0);
while(true){
if((i__11386__auto___22276 < len__11385__auto___22275)){
args22268.push((arguments[i__11386__auto___22276]));

var G__22277 = (i__11386__auto___22276 + (1));
i__11386__auto___22276 = G__22277;
continue;
} else {
}
break;
}

var G__22270 = args22268.length;
switch (G__22270) {
case 2:
return cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22268.length)].join('')));

}
});

cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (sym,method){
return cljs.core$macros.variadic_fn_STAR_.call(null,sym,method,true);
});

cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (sym,p__22271,solo){
var vec__22272 = p__22271;
var seq__22273 = cljs.core.seq.call(null,vec__22272);
var first__22274 = cljs.core.first.call(null,seq__22273);
var seq__22273__$1 = cljs.core.next.call(null,seq__22273);
var arglist = first__22274;
var body = seq__22273__$1;
var method = vec__22272;
var sig = cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),arglist);
var restarg = cljs.core.gensym.call(null,"seq");
var get_delegate = ((function (sig,restarg,vec__22272,seq__22273,first__22274,seq__22273__$1,arglist,body,method){
return (function cljs$core$macros$get_delegate(){
return new cljs.core.Symbol(null,"cljs$core$IFn$_invoke$arity$variadic","cljs$core$IFn$_invoke$arity$variadic",-378825034,null);
});})(sig,restarg,vec__22272,seq__22273,first__22274,seq__22273__$1,arglist,body,method))
;
var get_delegate_prop = ((function (sig,restarg,vec__22272,seq__22273,first__22274,seq__22273__$1,arglist,body,method){
return (function cljs$core$macros$get_delegate_prop(){
return cljs.core.symbol.call(null,[cljs.core.str("-"),cljs.core.str(get_delegate.call(null))].join(''));
});})(sig,restarg,vec__22272,seq__22273,first__22274,seq__22273__$1,arglist,body,method))
;
var param_bind = ((function (sig,restarg,vec__22272,seq__22273,first__22274,seq__22273__$1,arglist,body,method){
return (function cljs$core$macros$param_bind(param){
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__11114__auto__ = param;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__11114__auto__ = cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null),cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"/Users/ru/clojure/fligts-pro/resources/public/js/out/cljs/core.cljc"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2877),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj.call(null,cljs.core.List.EMPTY,49),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2877),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj.call(null,cljs.core.List.EMPTY,54),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__11114__auto__ = cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core","next","cljs.core/next",-1291438473,null),cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"/Users/ru/clojure/fligts-pro/resources/public/js/out/cljs/core.cljc"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2878),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj.call(null,cljs.core.List.EMPTY,51),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2878),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj.call(null,cljs.core.List.EMPTY,55),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})()))));
});})(sig,restarg,vec__22272,seq__22273,first__22274,seq__22273__$1,arglist,body,method))
;
var apply_to = ((function (sig,restarg,vec__22272,seq__22273,first__22274,seq__22273__$1,arglist,body,method){
return (function cljs$core$macros$apply_to(){
if(((1) < cljs.core.count.call(null,sig))){
var params = cljs.core.repeatedly.call(null,(cljs.core.count.call(null,sig) - (1)),cljs.core.gensym);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__11114__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__11114__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__11114__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.mapcat.call(null,param_bind,params)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__11114__auto__ = sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__11114__auto__ = get_delegate.call(null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),params,(function (){var x__11114__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__11114__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__11114__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__11114__auto__ = sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__11114__auto__ = get_delegate.call(null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__11114__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
}
});})(sig,restarg,vec__22272,seq__22273,first__22274,seq__22273__$1,arglist,body,method))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__11114__auto__ = sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = get_delegate_prop.call(null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__11114__auto__ = cljs.core.vec.call(null,sig);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(cljs.core.truth_(solo)?cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__11114__auto__ = sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-cljs$lang$maxFixedArity","-cljs$lang$maxFixedArity",-1481434279,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = (cljs.core.count.call(null,sig) - (1));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())))):null),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__11114__auto__ = sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-cljs$lang$applyTo","-cljs$lang$applyTo",-225535181,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = apply_to.call(null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
});

cljs.core$macros.variadic_fn_STAR_.cljs$lang$maxFixedArity = 3;

cljs.core$macros.copy_arguments = (function cljs$core$macros$copy_arguments(_AMPERSAND_form,_AMPERSAND_env,dest){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__11114__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"len__22279__auto__","len__22279__auto__",731405328,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__11114__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__22280__auto__","i__22280__auto__",316485517,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__22280__auto__","i__22280__auto__",316485517,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"len__22279__auto__","len__22279__auto__",731405328,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".push",".push",-1497267248,null)),(function (){var x__11114__auto__ = dest;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aget","cljs.core$macros/aget",1976136178,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__22280__auto__","i__22280__auto__",316485517,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__22280__auto__","i__22280__auto__",316485517,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
});

cljs.core$macros.copy_arguments.cljs$lang$macro = true;
cljs.core$macros.variadic_fn = (function cljs$core$macros$variadic_fn(name,meta,p__22283,emit_var_QMARK_){
var vec__22290 = p__22283;
var vec__22293 = cljs.core.nth.call(null,vec__22290,(0),null);
var seq__22294 = cljs.core.seq.call(null,vec__22293);
var first__22295 = cljs.core.first.call(null,seq__22294);
var seq__22294__$1 = cljs.core.next.call(null,seq__22294);
var arglist = first__22295;
var body = seq__22294__$1;
var method = vec__22293;
var fdecl = vec__22290;
var dest_args = ((function (vec__22290,vec__22293,seq__22294,first__22295,seq__22294__$1,arglist,body,method,fdecl){
return (function cljs$core$macros$variadic_fn_$_dest_args(c){
return cljs.core.map.call(null,((function (vec__22290,vec__22293,seq__22294,first__22295,seq__22294__$1,arglist,body,method,fdecl){
return (function (n){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aget","cljs.core$macros/aget",1976136178,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
});})(vec__22290,vec__22293,seq__22294,first__22295,seq__22294__$1,arglist,body,method,fdecl))
,cljs.core.range.call(null,c));
});})(vec__22290,vec__22293,seq__22294,first__22295,seq__22294__$1,arglist,body,method,fdecl))
;
var rname = cljs.core.symbol.call(null,[cljs.core.str(cljs.analyzer._STAR_cljs_ns_STAR_)].join(''),[cljs.core.str(name)].join(''));
var sig = cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),arglist);
var c_1 = (cljs.core.count.call(null,sig) - (1));
var meta__$1 = cljs.core.assoc.call(null,meta,new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",882626057),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),c_1,new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sig], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),(function (){var x__11114__auto__ = arglist;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.doall.call(null,cljs.core.map.call(null,meta,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arglist], null)))], null));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"def","def",597100991,null)),(function (){var x__11114__auto__ = cljs.core.with_meta.call(null,name,meta__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__11114__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"var_args","var_args",1214280389,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__11114__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args__22281__auto__","args__22281__auto__",-2018863118,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","copy-arguments","cljs.core$macros/copy-arguments",-1675962356,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args__22281__auto__","args__22281__auto__",-2018863118,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__11114__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argseq__22282__auto__","argseq__22282__auto__",1181473854,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__11114__auto__ = c_1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args__22281__auto__","args__22281__auto__",-2018863118,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__11114__auto__ = cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core","IndexedSeq","cljs.core/IndexedSeq",-228688698,null),cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"/Users/ru/clojure/fligts-pro/resources/public/js/out/cljs/core.cljc"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2925),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj.call(null,cljs.core.List.EMPTY,55),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2925),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj.call(null,cljs.core.List.EMPTY,75),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".slice",".slice",1874048374,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args__22281__auto__","args__22281__auto__",-2018863118,null)),(function (){var x__11114__auto__ = c_1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__11114__auto__ = rname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cljs$core$IFn$_invoke$arity$variadic","cljs$core$IFn$_invoke$arity$variadic",-378825034,null)),dest_args.call(null,c_1),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argseq__22282__auto__","argseq__22282__auto__",1181473854,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core$macros.variadic_fn_STAR_.call(null,rname,method);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = (cljs.core.truth_(emit_var_QMARK_)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"var","var",870848730,null)),(function (){var x__11114__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})()))):null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
});
cljs.core$macros.multi_arity_fn = (function cljs$core$macros$multi_arity_fn(name,meta,fdecl,emit_var_QMARK_){
var dest_args = (function cljs$core$macros$multi_arity_fn_$_dest_args(c){
return cljs.core.map.call(null,(function (n){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aget","cljs.core$macros/aget",1976136178,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
}),cljs.core.range.call(null,c));
});
var fixed_arity = (function cljs$core$macros$multi_arity_fn_$_fixed_arity(rname,sig){
var c = cljs.core.count.call(null,sig);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__11114__auto__ = rname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__11114__auto__ = cljs.core.symbol.call(null,[cljs.core.str("cljs$core$IFn$_invoke$arity$"),cljs.core.str(c)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),dest_args.call(null,c))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())))], null);
});
var fn_method = (function cljs$core$macros$multi_arity_fn_$_fn_method(p__22320){
var vec__22324 = p__22320;
var seq__22325 = cljs.core.seq.call(null,vec__22324);
var first__22326 = cljs.core.first.call(null,seq__22325);
var seq__22325__$1 = cljs.core.next.call(null,seq__22325);
var sig = first__22326;
var body = seq__22325__$1;
var method = vec__22324;
if(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),sig))){
return cljs.core$macros.variadic_fn_STAR_.call(null,name,method,false);
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__11114__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.symbol.call(null,[cljs.core.str("-cljs$core$IFn$_invoke$arity$"),cljs.core.str(cljs.core.count.call(null,sig))].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__11114__auto__ = method;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
}
});
var rname = cljs.core.symbol.call(null,[cljs.core.str(cljs.analyzer._STAR_cljs_ns_STAR_)].join(''),[cljs.core.str(name)].join(''));
var arglists = cljs.core.map.call(null,cljs.core.first,fdecl);
var varsig_QMARK_ = ((function (rname,arglists){
return (function (p1__22296_SHARP_){
return cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),p1__22296_SHARP_);
});})(rname,arglists))
;
var variadic = cljs.core.boolean$.call(null,cljs.core.some.call(null,varsig_QMARK_,arglists));
var sigs = cljs.core.remove.call(null,varsig_QMARK_,arglists);
var maxfa = cljs.core.apply.call(null,cljs.core.max,cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.count,sigs),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.count.call(null,cljs.core.first.call(null,cljs.core.filter.call(null,varsig_QMARK_,arglists))) - (2))], null)));
var meta__$1 = cljs.core.assoc.call(null,meta,new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",882626057),variadic,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),maxfa,new cljs.core.Keyword(null,"method-params","method-params",-980792179),sigs,new cljs.core.Keyword(null,"arglists","arglists",1661989754),arglists,new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.doall.call(null,cljs.core.map.call(null,meta,arglists))], null));
var args_sym = cljs.core.gensym.call(null,"args");
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"def","def",597100991,null)),(function (){var x__11114__auto__ = cljs.core.with_meta.call(null,name,meta__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__11114__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"var_args","var_args",1214280389,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__11114__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__11114__auto__ = args_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","copy-arguments","cljs.core$macros/copy-arguments",-1675962356,null)),(function (){var x__11114__auto__ = args_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","case","cljs.core$macros/case",-2131866965,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),(function (){var x__11114__auto__ = args_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),cljs.core.mapcat.call(null,((function (rname,arglists,varsig_QMARK_,variadic,sigs,maxfa,meta__$1,args_sym){
return (function (p1__22297_SHARP_){
return fixed_arity.call(null,rname,p1__22297_SHARP_);
});})(rname,arglists,varsig_QMARK_,variadic,sigs,maxfa,meta__$1,args_sym))
,sigs),(function (){var x__11114__auto__ = ((variadic)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__11114__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argseq__22298__auto__","argseq__22298__auto__",-1721318884,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__11114__auto__ = cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core","IndexedSeq","cljs.core/IndexedSeq",-228688698,null),cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"/Users/ru/clojure/fligts-pro/resources/public/js/out/cljs/core.cljc"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2983),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj.call(null,cljs.core.List.EMPTY,58),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2983),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj.call(null,cljs.core.List.EMPTY,78),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".slice",".slice",1874048374,null)),(function (){var x__11114__auto__ = args_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = maxfa;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__11114__auto__ = rname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cljs$core$IFn$_invoke$arity$variadic","cljs$core$IFn$_invoke$arity$variadic",-378825034,null)),dest_args.call(null,maxfa),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argseq__22298__auto__","argseq__22298__auto__",-1721318884,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})()))):(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(meta__$1))?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","str","cljs.core$macros/str",-2019499702,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"Invalid arity: "),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),(function (){var x__11114__auto__ = args_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(2)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})()))):cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","str","cljs.core$macros/str",-2019499702,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"Invalid arity: "),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),(function (){var x__11114__auto__ = args_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),cljs.core.map.call(null,fn_method,fdecl),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__11114__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__11114__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-cljs$lang$maxFixedArity","-cljs$lang$maxFixedArity",-1481434279,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = maxfa;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),(function (){var x__11114__auto__ = (cljs.core.truth_(emit_var_QMARK_)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"var","var",870848730,null)),(function (){var x__11114__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})()))):null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
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
var fdecl__$3 = ((cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,fdecl__$2)))?(function (){var x__11114__auto__ = fdecl__$2;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})():fdecl__$2);
var m__$2 = ((cljs.core.map_QMARK_.call(null,cljs.core.last.call(null,fdecl__$3)))?cljs.core.conj.call(null,m__$1,cljs.core.last.call(null,fdecl__$3)):m__$1);
var fdecl__$4 = ((cljs.core.map_QMARK_.call(null,cljs.core.last.call(null,fdecl__$3)))?cljs.core.butlast.call(null,fdecl__$3):fdecl__$3);
var m__$3 = cljs.core.conj.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core._conj.call(null,(function (){var x__11114__auto__ = cljs.core$macros.sigs.call(null,fdecl__$4);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})(),new cljs.core.Symbol(null,"quote","quote",1377916282,null))], null),m__$2);
var m__$4 = cljs.core.conj.call(null,(cljs.core.truth_(cljs.core.meta.call(null,name))?cljs.core.meta.call(null,name):cljs.core.PersistentArrayMap.EMPTY),m__$3);
if(cljs.core.truth_(cljs.core$macros.multi_arity_fn_QMARK_.call(null,fdecl__$4))){
return cljs.core$macros.multi_arity_fn.call(null,name,(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))?cljs.core.update_in.call(null,m__$4,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516)], null),cljs.core.conj,"@param {...*} var_args"):m__$4),fdecl__$4,new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
} else {
if(cljs.core.truth_(cljs.core$macros.variadic_fn_QMARK_.call(null,fdecl__$4))){
return cljs.core$macros.variadic_fn.call(null,name,(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))?cljs.core.update_in.call(null,m__$4,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516)], null),cljs.core.conj,"@param {...*} var_args"):m__$4),fdecl__$4,new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
} else {
return cljs.core._conj.call(null,(function (){var x__11114__auto__ = cljs.core.with_meta.call(null,name,m__$4);
return cljs.core._conj.call(null,(function (){var x__11114__auto____$1 = cljs.core.cons.call(null,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null),fdecl__$4);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto____$1);
})(),x__11114__auto__);
})(),new cljs.core.Symbol(null,"def","def",597100991,null));

}
}
};
var cljs$core$macros$defn = function (_AMPERSAND_form,_AMPERSAND_env,name,var_args){
var fdecl = null;
if (arguments.length > 3) {
var G__22327__i = 0, G__22327__a = new Array(arguments.length -  3);
while (G__22327__i < G__22327__a.length) {G__22327__a[G__22327__i] = arguments[G__22327__i + 3]; ++G__22327__i;}
  fdecl = new cljs.core.IndexedSeq(G__22327__a,0);
} 
return cljs$core$macros$defn__delegate.call(this,_AMPERSAND_form,_AMPERSAND_env,name,fdecl);};
cljs$core$macros$defn.cljs$lang$maxFixedArity = 3;
cljs$core$macros$defn.cljs$lang$applyTo = (function (arglist__22328){
var _AMPERSAND_form = cljs.core.first(arglist__22328);
arglist__22328 = cljs.core.next(arglist__22328);
var _AMPERSAND_env = cljs.core.first(arglist__22328);
arglist__22328 = cljs.core.next(arglist__22328);
var name = cljs.core.first(arglist__22328);
var fdecl = cljs.core.rest(arglist__22328);
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
var args__11392__auto__ = [];
var len__11385__auto___22333 = arguments.length;
var i__11386__auto___22334 = (0);
while(true){
if((i__11386__auto___22334 < len__11385__auto___22333)){
args__11392__auto__.push((arguments[i__11386__auto___22334]));

var G__22335 = (i__11386__auto___22334 + (1));
i__11386__auto___22334 = G__22335;
continue;
} else {
}
break;
}

var argseq__11393__auto__ = ((((3) < args__11392__auto__.length))?(new cljs.core.IndexedSeq(args__11392__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.defmacro.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__11393__auto__);
});

cljs.core$macros.defmacro.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,args){
var prefix = (function (){var p = (function (){var x__11114__auto__ = cljs.core.vary_meta.call(null,name,cljs.core.assoc,new cljs.core.Keyword(null,"macro","macro",-867863404),true);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
})();
var args__$1 = args;
while(true){
var f = cljs.core.first.call(null,args__$1);
if(typeof f === 'string'){
var G__22336 = cljs.core.cons.call(null,f,p);
var G__22337 = cljs.core.next.call(null,args__$1);
p = G__22336;
args__$1 = G__22337;
continue;
} else {
if(cljs.core.map_QMARK_.call(null,f)){
var G__22338 = cljs.core.cons.call(null,f,p);
var G__22339 = cljs.core.next.call(null,args__$1);
p = G__22338;
args__$1 = G__22339;
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
var G__22340 = cljs.core.next.call(null,fd);
fd = G__22340;
continue;
} else {
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,fd))){
var G__22341 = cljs.core.next.call(null,fd);
fd = G__22341;
continue;
} else {
return fd;
}
}
break;
}
})();
var fdecl__$1 = ((cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,fdecl)))?(function (){var x__11114__auto__ = fdecl;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto__);
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
var G__22342 = cljs.core.conj.call(null,acc,add_implicit_args.call(null,d));
var G__22343 = cljs.core.next.call(null,ds);
acc = G__22342;
ds = G__22343;
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
var G__22344 = cljs.core.next.call(null,p);
var G__22345 = cljs.core.cons.call(null,cljs.core.first.call(null,p),d);
p = G__22344;
d = G__22345;
continue;
} else {
return d;
}
break;
}
})();
return cljs.core._conj.call(null,(function (){var x__11114__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null),decl);
return cljs.core._conj.call(null,(function (){var x__11114__auto____$1 = cljs.core._conj.call(null,(function (){var x__11114__auto____$1 = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__11114__auto____$1 = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto____$1);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-cljs$lang$macro","-cljs$lang$macro",443600924,null)))));
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,true),x__11114__auto____$1);
})(),new cljs.core.Symbol(null,"set!","set!",250714521,null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__11114__auto____$1);
})(),x__11114__auto__);
})(),new cljs.core.Symbol(null,"do","do",1686842252,null));
});

cljs.core$macros.defmacro.cljs$lang$maxFixedArity = (3);

cljs.core$macros.defmacro.cljs$lang$applyTo = (function (seq22329){
var G__22330 = cljs.core.first.call(null,seq22329);
var seq22329__$1 = cljs.core.next.call(null,seq22329);
var G__22331 = cljs.core.first.call(null,seq22329__$1);
var seq22329__$2 = cljs.core.next.call(null,seq22329__$1);
var G__22332 = cljs.core.first.call(null,seq22329__$2);
var seq22329__$3 = cljs.core.next.call(null,seq22329__$2);
return cljs.core$macros.defmacro.cljs$core$IFn$_invoke$arity$variadic(G__22330,G__22331,G__22332,seq22329__$3);
});

cljs.core$macros.defmacro.cljs$lang$macro = true;

//# sourceMappingURL=core$macros.js.map