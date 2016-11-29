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
var args__20739__auto__ = [];
var len__20732__auto___29798 = arguments.length;
var i__20733__auto___29799 = (0);
while(true){
if((i__20733__auto___29799 < len__20732__auto___29798)){
args__20739__auto__.push((arguments[i__20733__auto___29799]));

var G__29800 = (i__20733__auto___29799 + (1));
i__20733__auto___29799 = G__29800;
continue;
} else {
}
break;
}

var argseq__20740__auto__ = ((((3) < args__20739__auto__.length))?(new cljs.core.IndexedSeq(args__20739__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__20740__auto__);
});

cljs.core$macros.__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
var x__$1 = x;
var forms__$1 = forms;
while(true){
if(cljs.core.truth_(forms__$1)){
var form = cljs.core.first.call(null,forms__$1);
var threaded = ((cljs.core.seq_QMARK_.call(null,form))?cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__20461__auto__ = cljs.core.first.call(null,form);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = x__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),cljs.core.next.call(null,form)))),cljs.core.meta.call(null,form)):(function (){var x__20461__auto__ = form;
return cljs.core._conj.call(null,(function (){var x__20461__auto____$1 = x__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto____$1);
})(),x__20461__auto__);
})());
var G__29801 = threaded;
var G__29802 = cljs.core.next.call(null,forms__$1);
x__$1 = G__29801;
forms__$1 = G__29802;
continue;
} else {
return x__$1;
}
break;
}
});

cljs.core$macros.__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.__GT_.cljs$lang$applyTo = (function (seq29794){
var G__29795 = cljs.core.first.call(null,seq29794);
var seq29794__$1 = cljs.core.next.call(null,seq29794);
var G__29796 = cljs.core.first.call(null,seq29794__$1);
var seq29794__$2 = cljs.core.next.call(null,seq29794__$1);
var G__29797 = cljs.core.first.call(null,seq29794__$2);
var seq29794__$3 = cljs.core.next.call(null,seq29794__$2);
return cljs.core$macros.__GT_.cljs$core$IFn$_invoke$arity$variadic(G__29795,G__29796,G__29797,seq29794__$3);
});


cljs.core$macros.__GT_.cljs$lang$macro = true;
/**
 * Threads the expr through the forms. Inserts x as the
 *   last item in the first form, making a list of it if it is not a
 *   list already. If there are more forms, inserts the first form as the
 *   last item in second form, etc.
 */
cljs.core$macros.__GT__GT_ = (function cljs$core$macros$__GT__GT_(var_args){
var args__20739__auto__ = [];
var len__20732__auto___29807 = arguments.length;
var i__20733__auto___29808 = (0);
while(true){
if((i__20733__auto___29808 < len__20732__auto___29807)){
args__20739__auto__.push((arguments[i__20733__auto___29808]));

var G__29809 = (i__20733__auto___29808 + (1));
i__20733__auto___29808 = G__29809;
continue;
} else {
}
break;
}

var argseq__20740__auto__ = ((((3) < args__20739__auto__.length))?(new cljs.core.IndexedSeq(args__20739__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.__GT__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__20740__auto__);
});

cljs.core$macros.__GT__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
var x__$1 = x;
var forms__$1 = forms;
while(true){
if(cljs.core.truth_(forms__$1)){
var form = cljs.core.first.call(null,forms__$1);
var threaded = ((cljs.core.seq_QMARK_.call(null,form))?cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__20461__auto__ = cljs.core.first.call(null,form);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),cljs.core.next.call(null,form),(function (){var x__20461__auto__ = x__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})()))),cljs.core.meta.call(null,form)):(function (){var x__20461__auto__ = form;
return cljs.core._conj.call(null,(function (){var x__20461__auto____$1 = x__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto____$1);
})(),x__20461__auto__);
})());
var G__29810 = threaded;
var G__29811 = cljs.core.next.call(null,forms__$1);
x__$1 = G__29810;
forms__$1 = G__29811;
continue;
} else {
return x__$1;
}
break;
}
});

cljs.core$macros.__GT__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.__GT__GT_.cljs$lang$applyTo = (function (seq29803){
var G__29804 = cljs.core.first.call(null,seq29803);
var seq29803__$1 = cljs.core.next.call(null,seq29803);
var G__29805 = cljs.core.first.call(null,seq29803__$1);
var seq29803__$2 = cljs.core.next.call(null,seq29803__$1);
var G__29806 = cljs.core.first.call(null,seq29803__$2);
var seq29803__$3 = cljs.core.next.call(null,seq29803__$2);
return cljs.core$macros.__GT__GT_.cljs$core$IFn$_invoke$arity$variadic(G__29804,G__29805,G__29806,seq29803__$3);
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
var args29812 = [];
var len__20732__auto___29820 = arguments.length;
var i__20733__auto___29821 = (0);
while(true){
if((i__20733__auto___29821 < len__20732__auto___29820)){
args29812.push((arguments[i__20733__auto___29821]));

var G__29822 = (i__20733__auto___29821 + (1));
i__20733__auto___29821 = G__29822;
continue;
} else {
}
break;
}

var G__29819 = args29812.length;
switch (G__29819) {
case 4:
return cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__20751__auto__ = (new cljs.core.IndexedSeq(args29812.slice((4)),(0),null));
return cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__20751__auto__);

}
});

cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,form){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__20461__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
});

cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,form,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"..","..",-300507420,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__20461__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),more)));
});

cljs.core$macros._DOT__DOT_.cljs$lang$applyTo = (function (seq29813){
var G__29814 = cljs.core.first.call(null,seq29813);
var seq29813__$1 = cljs.core.next.call(null,seq29813);
var G__29815 = cljs.core.first.call(null,seq29813__$1);
var seq29813__$2 = cljs.core.next.call(null,seq29813__$1);
var G__29816 = cljs.core.first.call(null,seq29813__$2);
var seq29813__$3 = cljs.core.next.call(null,seq29813__$2);
var G__29817 = cljs.core.first.call(null,seq29813__$3);
var seq29813__$4 = cljs.core.next.call(null,seq29813__$3);
return cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$variadic(G__29814,G__29815,G__29816,G__29817,seq29813__$4);
});

cljs.core$macros._DOT__DOT_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._DOT__DOT_.cljs$lang$macro = true;
/**
 * Ignores body, yields nil
 */
cljs.core$macros.comment = (function cljs$core$macros$comment(var_args){
var args__20739__auto__ = [];
var len__20732__auto___29827 = arguments.length;
var i__20733__auto___29828 = (0);
while(true){
if((i__20733__auto___29828 < len__20732__auto___29827)){
args__20739__auto__.push((arguments[i__20733__auto___29828]));

var G__29829 = (i__20733__auto___29828 + (1));
i__20733__auto___29828 = G__29829;
continue;
} else {
}
break;
}

var argseq__20740__auto__ = ((((2) < args__20739__auto__.length))?(new cljs.core.IndexedSeq(args__20739__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.comment.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__20740__auto__);
});

cljs.core$macros.comment.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return null;
});

cljs.core$macros.comment.cljs$lang$maxFixedArity = (2);

cljs.core$macros.comment.cljs$lang$applyTo = (function (seq29824){
var G__29825 = cljs.core.first.call(null,seq29824);
var seq29824__$1 = cljs.core.next.call(null,seq29824);
var G__29826 = cljs.core.first.call(null,seq29824__$1);
var seq29824__$2 = cljs.core.next.call(null,seq29824__$1);
return cljs.core$macros.comment.cljs$core$IFn$_invoke$arity$variadic(G__29825,G__29826,seq29824__$2);
});


cljs.core$macros.comment.cljs$lang$macro = true;
/**
 * Takes a set of test/expr pairs. It evaluates each test one at a
 *   time.  If a test returns logical true, cond evaluates and returns
 *   the value of the corresponding expr and doesn't evaluate any of the
 *   other tests or exprs. (cond) returns nil.
 */
cljs.core$macros.cond = (function cljs$core$macros$cond(var_args){
var args__20739__auto__ = [];
var len__20732__auto___29833 = arguments.length;
var i__20733__auto___29834 = (0);
while(true){
if((i__20733__auto___29834 < len__20732__auto___29833)){
args__20739__auto__.push((arguments[i__20733__auto___29834]));

var G__29835 = (i__20733__auto___29834 + (1));
i__20733__auto___29834 = G__29835;
continue;
} else {
}
break;
}

var argseq__20740__auto__ = ((((2) < args__20739__auto__.length))?(new cljs.core.IndexedSeq(args__20739__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.cond.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__20740__auto__);
});

cljs.core$macros.cond.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,clauses){
if(cljs.core.truth_(clauses)){
return cljs.core._conj.call(null,(function (){var x__20461__auto__ = cljs.core.first.call(null,clauses);
return cljs.core._conj.call(null,(function (){var x__20461__auto____$1 = ((cljs.core.next.call(null,clauses))?cljs.core.second.call(null,clauses):(function(){throw (new Error("cond requires an even number of forms"))})());
return cljs.core._conj.call(null,(function (){var x__20461__auto____$2 = cljs.core.cons.call(null,new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",2005388338,null),cljs.core.next.call(null,cljs.core.next.call(null,clauses)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto____$2);
})(),x__20461__auto____$1);
})(),x__20461__auto__);
})(),new cljs.core.Symbol(null,"if","if",1181717262,null));
} else {
return null;
}
});

cljs.core$macros.cond.cljs$lang$maxFixedArity = (2);

cljs.core$macros.cond.cljs$lang$applyTo = (function (seq29830){
var G__29831 = cljs.core.first.call(null,seq29830);
var seq29830__$1 = cljs.core.next.call(null,seq29830);
var G__29832 = cljs.core.first.call(null,seq29830__$1);
var seq29830__$2 = cljs.core.next.call(null,seq29830__$1);
return cljs.core$macros.cond.cljs$core$IFn$_invoke$arity$variadic(G__29831,G__29832,seq29830__$2);
});


cljs.core$macros.cond.cljs$lang$macro = true;
/**
 * defs the supplied var names with no bindings, useful for making forward declarations.
 */
cljs.core$macros.declare = (function cljs$core$macros$declare(var_args){
var args__20739__auto__ = [];
var len__20732__auto___29840 = arguments.length;
var i__20733__auto___29841 = (0);
while(true){
if((i__20733__auto___29841 < len__20732__auto___29840)){
args__20739__auto__.push((arguments[i__20733__auto___29841]));

var G__29842 = (i__20733__auto___29841 + (1));
i__20733__auto___29841 = G__29842;
continue;
} else {
}
break;
}

var argseq__20740__auto__ = ((((2) < args__20739__auto__.length))?(new cljs.core.IndexedSeq(args__20739__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.declare.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__20740__auto__);
});

cljs.core$macros.declare.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,names){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),cljs.core.map.call(null,(function (p1__29836_SHARP_){
return cljs.core._conj.call(null,(function (){var x__20461__auto__ = cljs.core.vary_meta.call(null,p1__29836_SHARP_,cljs.core.assoc,new cljs.core.Keyword(null,"declared","declared",92336021),true);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),new cljs.core.Symbol(null,"def","def",597100991,null));
}),names))));
});

cljs.core$macros.declare.cljs$lang$maxFixedArity = (2);

cljs.core$macros.declare.cljs$lang$applyTo = (function (seq29837){
var G__29838 = cljs.core.first.call(null,seq29837);
var seq29837__$1 = cljs.core.next.call(null,seq29837);
var G__29839 = cljs.core.first.call(null,seq29837__$1);
var seq29837__$2 = cljs.core.next.call(null,seq29837__$1);
return cljs.core$macros.declare.cljs$core$IFn$_invoke$arity$variadic(G__29838,G__29839,seq29837__$2);
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
var args__20739__auto__ = [];
var len__20732__auto___29847 = arguments.length;
var i__20733__auto___29848 = (0);
while(true){
if((i__20733__auto___29848 < len__20732__auto___29847)){
args__20739__auto__.push((arguments[i__20733__auto___29848]));

var G__29849 = (i__20733__auto___29848 + (1));
i__20733__auto___29848 = G__29849;
continue;
} else {
}
break;
}

var argseq__20740__auto__ = ((((3) < args__20739__auto__.length))?(new cljs.core.IndexedSeq(args__20739__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.doto.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__20740__auto__);
});

cljs.core$macros.doto.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
var gx = cljs.core.gensym.call(null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__20461__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__20461__auto__ = gx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),cljs.core.map.call(null,((function (gx){
return (function (f){
if(cljs.core.seq_QMARK_.call(null,f)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__20461__auto__ = cljs.core.first.call(null,f);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = gx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),cljs.core.next.call(null,f))));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__20461__auto__ = f;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = gx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
}
});})(gx))
,forms),(function (){var x__20461__auto__ = gx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
});

cljs.core$macros.doto.cljs$lang$maxFixedArity = (3);

cljs.core$macros.doto.cljs$lang$applyTo = (function (seq29843){
var G__29844 = cljs.core.first.call(null,seq29843);
var seq29843__$1 = cljs.core.next.call(null,seq29843);
var G__29845 = cljs.core.first.call(null,seq29843__$1);
var seq29843__$2 = cljs.core.next.call(null,seq29843__$1);
var G__29846 = cljs.core.first.call(null,seq29843__$2);
var seq29843__$3 = cljs.core.next.call(null,seq29843__$2);
return cljs.core$macros.doto.cljs$core$IFn$_invoke$arity$variadic(G__29844,G__29845,G__29846,seq29843__$3);
});


cljs.core$macros.doto.cljs$lang$macro = true;
cljs.core$macros.parse_impls = (function cljs$core$macros$parse_impls(specs){
var ret = cljs.core.PersistentArrayMap.EMPTY;
var s = specs;
while(true){
if(cljs.core.seq.call(null,s)){
var G__29850 = cljs.core.assoc.call(null,ret,cljs.core.first.call(null,s),cljs.core.take_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,s)));
var G__29851 = cljs.core.drop_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,s));
ret = G__29850;
s = G__29851;
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
return (function (p__29856){
var vec__29857 = p__29856;
var t = cljs.core.nth.call(null,vec__29857,(0),null);
var fs = cljs.core.nth.call(null,vec__29857,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","extend-type","cljs.core$macros/extend-type",1713295201,null)),(function (){var x__20461__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = p;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
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
var args__20739__auto__ = [];
var len__20732__auto___29864 = arguments.length;
var i__20733__auto___29865 = (0);
while(true){
if((i__20733__auto___29865 < len__20732__auto___29864)){
args__20739__auto__.push((arguments[i__20733__auto___29865]));

var G__29866 = (i__20733__auto___29865 + (1));
i__20733__auto___29865 = G__29866;
continue;
} else {
}
break;
}

var argseq__20740__auto__ = ((((3) < args__20739__auto__.length))?(new cljs.core.IndexedSeq(args__20739__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.extend_protocol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__20740__auto__);
});

cljs.core$macros.extend_protocol.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p,specs){
return cljs.core$macros.emit_extend_protocol.call(null,p,specs);
});

cljs.core$macros.extend_protocol.cljs$lang$maxFixedArity = (3);

cljs.core$macros.extend_protocol.cljs$lang$applyTo = (function (seq29860){
var G__29861 = cljs.core.first.call(null,seq29860);
var seq29860__$1 = cljs.core.next.call(null,seq29860);
var G__29862 = cljs.core.first.call(null,seq29860__$1);
var seq29860__$2 = cljs.core.next.call(null,seq29860__$1);
var G__29863 = cljs.core.first.call(null,seq29860__$2);
var seq29860__$3 = cljs.core.next.call(null,seq29860__$2);
return cljs.core$macros.extend_protocol.cljs$core$IFn$_invoke$arity$variadic(G__29861,G__29862,G__29863,seq29860__$3);
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
var G__29867 = cljs.core.next.call(null,params__$1);
var G__29868 = cljs.core.conj.call(null,new_params,cljs.core.first.call(null,params__$1));
var G__29869 = lets;
params__$1 = G__29867;
new_params = G__29868;
lets = G__29869;
continue;
} else {
var gparam = cljs.core.gensym.call(null,"p__");
var G__29870 = cljs.core.next.call(null,params__$1);
var G__29871 = cljs.core.conj.call(null,new_params,gparam);
var G__29872 = cljs.core.conj.call(null,cljs.core.conj.call(null,lets,cljs.core.first.call(null,params__$1)),gparam);
params__$1 = G__29870;
new_params = G__29871;
lets = G__29872;
continue;
}
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__20461__auto__ = new_params;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__20461__auto__ = lets;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
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
var args__20739__auto__ = [];
var len__20732__auto___29879 = arguments.length;
var i__20733__auto___29880 = (0);
while(true){
if((i__20733__auto___29880 < len__20732__auto___29879)){
args__20739__auto__.push((arguments[i__20733__auto___29880]));

var G__29881 = (i__20733__auto___29880 + (1));
i__20733__auto___29880 = G__29881;
continue;
} else {
}
break;
}

var argseq__20740__auto__ = ((((2) < args__20739__auto__.length))?(new cljs.core.IndexedSeq(args__20739__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.fn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__20740__auto__);
});

cljs.core$macros.fn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,sigs){
var name = (((cljs.core.first.call(null,sigs) instanceof cljs.core.Symbol))?cljs.core.first.call(null,sigs):null);
var sigs__$1 = (cljs.core.truth_(name)?cljs.core.next.call(null,sigs):sigs);
var sigs__$2 = ((cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,sigs__$1)))?(function (){var x__20461__auto__ = sigs__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})():((cljs.core.seq_QMARK_.call(null,cljs.core.first.call(null,sigs__$1)))?sigs__$1:(function(){throw (new Error(((cljs.core.seq.call(null,sigs__$1))?[cljs.core.str("Parameter declaration "),cljs.core.str(cljs.core.first.call(null,sigs__$1)),cljs.core.str(" should be a vector")].join(''):[cljs.core.str("Parameter declaration missing")].join(''))))})()));
var psig = ((function (name,sigs__$1,sigs__$2){
return (function (sig){
if(!(cljs.core.seq_QMARK_.call(null,sig))){
throw (new Error([cljs.core.str("Invalid signature "),cljs.core.str(sig),cljs.core.str(" should be a list")].join('')));
} else {
}

var vec__29876 = sig;
var seq__29877 = cljs.core.seq.call(null,vec__29876);
var first__29878 = cljs.core.first.call(null,seq__29877);
var seq__29877__$1 = cljs.core.next.call(null,seq__29877);
var params = first__29878;
var body = seq__29877__$1;
var _ = ((!(cljs.core.vector_QMARK_.call(null,params)))?(function(){throw (new Error(((cljs.core.seq_QMARK_.call(null,cljs.core.first.call(null,sigs__$2)))?[cljs.core.str("Parameter declaration "),cljs.core.str(params),cljs.core.str(" should be a vector")].join(''):[cljs.core.str("Invalid signature "),cljs.core.str(sig),cljs.core.str(" should be a list")].join(''))))})():null);
var conds = (((cljs.core.next.call(null,body)) && (cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))))?cljs.core.first.call(null,body):null);
var body__$1 = (cljs.core.truth_(conds)?cljs.core.next.call(null,body):body);
var conds__$1 = (function (){var or__19624__auto__ = conds;
if(cljs.core.truth_(or__19624__auto__)){
return or__19624__auto__;
} else {
return cljs.core.meta.call(null,params);
}
})();
var pre = new cljs.core.Keyword(null,"pre","pre",2118456869).cljs$core$IFn$_invoke$arity$1(conds__$1);
var post = new cljs.core.Keyword(null,"post","post",269697687).cljs$core$IFn$_invoke$arity$1(conds__$1);
var body__$2 = (cljs.core.truth_(post)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__20461__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"%","%",-950237169,null)),(function (){var x__20461__auto__ = ((((1) < cljs.core.count.call(null,body__$1)))?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),body__$1))):cljs.core.first.call(null,body__$1));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),cljs.core.map.call(null,((function (vec__29876,seq__29877,first__29878,seq__29877__$1,params,body,_,conds,body__$1,conds__$1,pre,post,name,sigs__$1,sigs__$2){
return (function (c){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","assert","cljs.core$macros/assert",1333198789,null)),(function (){var x__20461__auto__ = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
});})(vec__29876,seq__29877,first__29878,seq__29877__$1,params,body,_,conds,body__$1,conds__$1,pre,post,name,sigs__$1,sigs__$2))
,post),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"%","%",-950237169,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})()))):body__$1);
var body__$3 = (cljs.core.truth_(pre)?cljs.core.concat.call(null,cljs.core.map.call(null,((function (vec__29876,seq__29877,first__29878,seq__29877__$1,params,body,_,conds,body__$1,conds__$1,pre,post,body__$2,name,sigs__$1,sigs__$2){
return (function (c){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","assert","cljs.core$macros/assert",1333198789,null)),(function (){var x__20461__auto__ = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
});})(vec__29876,seq__29877,first__29878,seq__29877__$1,params,body,_,conds,body__$1,conds__$1,pre,post,body__$2,name,sigs__$1,sigs__$2))
,pre),body__$2):body__$2);
return cljs.core$macros.maybe_destructured.call(null,params,body__$3);
});})(name,sigs__$1,sigs__$2))
;
var new_sigs = cljs.core.map.call(null,psig,sigs__$2);
return cljs.core.with_meta.call(null,(cljs.core.truth_(name)?cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),name,new_sigs):cljs.core.cons.call(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new_sigs)),cljs.core.meta.call(null,_AMPERSAND_form));
});

cljs.core$macros.fn.cljs$lang$maxFixedArity = (2);

cljs.core$macros.fn.cljs$lang$applyTo = (function (seq29873){
var G__29874 = cljs.core.first.call(null,seq29873);
var seq29873__$1 = cljs.core.next.call(null,seq29873);
var G__29875 = cljs.core.first.call(null,seq29873__$1);
var seq29873__$2 = cljs.core.next.call(null,seq29873__$1);
return cljs.core$macros.fn.cljs$core$IFn$_invoke$arity$variadic(G__29874,G__29875,seq29873__$2);
});


cljs.core$macros.fn.cljs$lang$macro = true;
/**
 * same as defn, yielding non-public def
 */
cljs.core$macros.defn_ = (function cljs$core$macros$defn_(var_args){
var args__20739__auto__ = [];
var len__20732__auto___29886 = arguments.length;
var i__20733__auto___29887 = (0);
while(true){
if((i__20733__auto___29887 < len__20732__auto___29886)){
args__20739__auto__.push((arguments[i__20733__auto___29887]));

var G__29888 = (i__20733__auto___29887 + (1));
i__20733__auto___29887 = G__29888;
continue;
} else {
}
break;
}

var argseq__20740__auto__ = ((((3) < args__20739__auto__.length))?(new cljs.core.IndexedSeq(args__20739__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.defn_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__20740__auto__);
});

cljs.core$macros.defn_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,decls){
return cljs.core.list_STAR_.call(null,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null),cljs.core.with_meta.call(null,name,cljs.core.assoc.call(null,cljs.core.meta.call(null,name),new cljs.core.Keyword(null,"private","private",-558947994),true)),decls);
});

cljs.core$macros.defn_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.defn_.cljs$lang$applyTo = (function (seq29882){
var G__29883 = cljs.core.first.call(null,seq29882);
var seq29882__$1 = cljs.core.next.call(null,seq29882);
var G__29884 = cljs.core.first.call(null,seq29882__$1);
var seq29882__$2 = cljs.core.next.call(null,seq29882__$1);
var G__29885 = cljs.core.first.call(null,seq29882__$2);
var seq29882__$3 = cljs.core.next.call(null,seq29882__$2);
return cljs.core$macros.defn_.cljs$core$IFn$_invoke$arity$variadic(G__29883,G__29884,G__29885,seq29882__$3);
});


cljs.core$macros.defn_.cljs$lang$macro = true;
/**
 * bindings => binding-form test
 * 
 *   If test is true, evaluates then with binding-form bound to the value of
 *   test, if not, yields else
 */
cljs.core$macros.if_let = (function cljs$core$macros$if_let(var_args){
var args29890 = [];
var len__20732__auto___29899 = arguments.length;
var i__20733__auto___29900 = (0);
while(true){
if((i__20733__auto___29900 < len__20732__auto___29899)){
args29890.push((arguments[i__20733__auto___29900]));

var G__29901 = (i__20733__auto___29900 + (1));
i__20733__auto___29900 = G__29901;
continue;
} else {
}
break;
}

var G__29898 = args29890.length;
switch (G__29898) {
case 4:
return cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__20751__auto__ = (new cljs.core.IndexedSeq(args29890.slice((5)),(0),null));
return cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__20751__auto__);

}
});

cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,then){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-let","cljs.core$macros/if-let",1291543946,null)),(function (){var x__20461__auto__ = bindings;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = then;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__20461__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__29889__auto__","temp__29889__auto__",1157342685,null)),(function (){var x__20461__auto__ = tst;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__29889__auto__","temp__29889__auto__",1157342685,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__20461__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__20461__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__29889__auto__","temp__29889__auto__",1157342685,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = then;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = else$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
});

cljs.core$macros.if_let.cljs$lang$applyTo = (function (seq29891){
var G__29892 = cljs.core.first.call(null,seq29891);
var seq29891__$1 = cljs.core.next.call(null,seq29891);
var G__29893 = cljs.core.first.call(null,seq29891__$1);
var seq29891__$2 = cljs.core.next.call(null,seq29891__$1);
var G__29894 = cljs.core.first.call(null,seq29891__$2);
var seq29891__$3 = cljs.core.next.call(null,seq29891__$2);
var G__29895 = cljs.core.first.call(null,seq29891__$3);
var seq29891__$4 = cljs.core.next.call(null,seq29891__$3);
var G__29896 = cljs.core.first.call(null,seq29891__$4);
var seq29891__$5 = cljs.core.next.call(null,seq29891__$4);
return cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$variadic(G__29892,G__29893,G__29894,G__29895,G__29896,seq29891__$5);
});

cljs.core$macros.if_let.cljs$lang$maxFixedArity = (5);


cljs.core$macros.if_let.cljs$lang$macro = true;
/**
 * Evaluates test. If logical false, evaluates and returns then expr,
 *   otherwise else expr, if supplied, else nil.
 */
cljs.core$macros.if_not = (function cljs$core$macros$if_not(var_args){
var args29903 = [];
var len__20732__auto___29906 = arguments.length;
var i__20733__auto___29907 = (0);
while(true){
if((i__20733__auto___29907 < len__20732__auto___29906)){
args29903.push((arguments[i__20733__auto___29907]));

var G__29908 = (i__20733__auto___29907 + (1));
i__20733__auto___29907 = G__29908;
continue;
} else {
}
break;
}

var G__29905 = args29903.length;
switch (G__29905) {
case 4:
return cljs.core$macros.if_not.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core$macros.if_not.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str((args29903.length - (2)))].join('')));

}
});

cljs.core$macros.if_not.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,test,then){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__20461__auto__ = test;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = then;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
});

cljs.core$macros.if_not.cljs$core$IFn$_invoke$arity$5 = (function (_AMPERSAND_form,_AMPERSAND_env,test,then,else$){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null)),(function (){var x__20461__auto__ = test;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = then;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = else$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
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
var args__20739__auto__ = [];
var len__20732__auto___29915 = arguments.length;
var i__20733__auto___29916 = (0);
while(true){
if((i__20733__auto___29916 < len__20732__auto___29915)){
args__20739__auto__.push((arguments[i__20733__auto___29916]));

var G__29917 = (i__20733__auto___29916 + (1));
i__20733__auto___29916 = G__29917;
continue;
} else {
}
break;
}

var argseq__20740__auto__ = ((((3) < args__20739__auto__.length))?(new cljs.core.IndexedSeq(args__20739__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.letfn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__20740__auto__);
});

cljs.core$macros.letfn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,fnspecs,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"letfn*","letfn*",-110097810,null)),(function (){var x__20461__auto__ = cljs.core.vec.call(null,cljs.core.interleave.call(null,cljs.core.map.call(null,cljs.core.first,fnspecs),cljs.core.map.call(null,(function (p1__29910_SHARP_){
return cljs.core.cons.call(null,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null),p1__29910_SHARP_);
}),fnspecs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),body)));
});

cljs.core$macros.letfn.cljs$lang$maxFixedArity = (3);

cljs.core$macros.letfn.cljs$lang$applyTo = (function (seq29911){
var G__29912 = cljs.core.first.call(null,seq29911);
var seq29911__$1 = cljs.core.next.call(null,seq29911);
var G__29913 = cljs.core.first.call(null,seq29911__$1);
var seq29911__$2 = cljs.core.next.call(null,seq29911__$1);
var G__29914 = cljs.core.first.call(null,seq29911__$2);
var seq29911__$3 = cljs.core.next.call(null,seq29911__$2);
return cljs.core$macros.letfn.cljs$core$IFn$_invoke$arity$variadic(G__29912,G__29913,G__29914,seq29911__$3);
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
var args__20739__auto__ = [];
var len__20732__auto___29922 = arguments.length;
var i__20733__auto___29923 = (0);
while(true){
if((i__20733__auto___29923 < len__20732__auto___29922)){
args__20739__auto__.push((arguments[i__20733__auto___29923]));

var G__29924 = (i__20733__auto___29923 + (1));
i__20733__auto___29923 = G__29924;
continue;
} else {
}
break;
}

var argseq__20740__auto__ = ((((3) < args__20739__auto__.length))?(new cljs.core.IndexedSeq(args__20739__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.memfn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__20740__auto__);
});

cljs.core$macros.memfn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,args){
var t = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"target"),cljs.core.meta.call(null,name));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__20461__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__20461__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),args))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__20461__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__20461__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),args)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
});

cljs.core$macros.memfn.cljs$lang$maxFixedArity = (3);

cljs.core$macros.memfn.cljs$lang$applyTo = (function (seq29918){
var G__29919 = cljs.core.first.call(null,seq29918);
var seq29918__$1 = cljs.core.next.call(null,seq29918);
var G__29920 = cljs.core.first.call(null,seq29918__$1);
var seq29918__$2 = cljs.core.next.call(null,seq29918__$1);
var G__29921 = cljs.core.first.call(null,seq29918__$2);
var seq29918__$3 = cljs.core.next.call(null,seq29918__$2);
return cljs.core$macros.memfn.cljs$core$IFn$_invoke$arity$variadic(G__29919,G__29920,G__29921,seq29918__$3);
});


cljs.core$macros.memfn.cljs$lang$macro = true;
/**
 * Evaluates test. If logical true, evaluates body in an implicit do.
 */
cljs.core$macros.when = (function cljs$core$macros$when(var_args){
var args__20739__auto__ = [];
var len__20732__auto___29929 = arguments.length;
var i__20733__auto___29930 = (0);
while(true){
if((i__20733__auto___29930 < len__20732__auto___29929)){
args__20739__auto__.push((arguments[i__20733__auto___29930]));

var G__29931 = (i__20733__auto___29930 + (1));
i__20733__auto___29930 = G__29931;
continue;
} else {
}
break;
}

var argseq__20740__auto__ = ((((3) < args__20739__auto__.length))?(new cljs.core.IndexedSeq(args__20739__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__20740__auto__);
});

cljs.core$macros.when.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,test,body){
return cljs.core._conj.call(null,(function (){var x__20461__auto__ = test;
return cljs.core._conj.call(null,(function (){var x__20461__auto____$1 = cljs.core.cons.call(null,new cljs.core.Symbol(null,"do","do",1686842252,null),body);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto____$1);
})(),x__20461__auto__);
})(),new cljs.core.Symbol(null,"if","if",1181717262,null));
});

cljs.core$macros.when.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when.cljs$lang$applyTo = (function (seq29925){
var G__29926 = cljs.core.first.call(null,seq29925);
var seq29925__$1 = cljs.core.next.call(null,seq29925);
var G__29927 = cljs.core.first.call(null,seq29925__$1);
var seq29925__$2 = cljs.core.next.call(null,seq29925__$1);
var G__29928 = cljs.core.first.call(null,seq29925__$2);
var seq29925__$3 = cljs.core.next.call(null,seq29925__$2);
return cljs.core$macros.when.cljs$core$IFn$_invoke$arity$variadic(G__29926,G__29927,G__29928,seq29925__$3);
});


cljs.core$macros.when.cljs$lang$macro = true;
/**
 * bindings => x xs
 * 
 *   Roughly the same as (when (seq xs) (let [x (first xs)] body)) but xs is evaluated only once
 */
cljs.core$macros.when_first = (function cljs$core$macros$when_first(var_args){
var args__20739__auto__ = [];
var len__20732__auto___29940 = arguments.length;
var i__20733__auto___29941 = (0);
while(true){
if((i__20733__auto___29941 < len__20732__auto___29940)){
args__20739__auto__.push((arguments[i__20733__auto___29941]));

var G__29942 = (i__20733__auto___29941 + (1));
i__20733__auto___29941 = G__29942;
continue;
} else {
}
break;
}

var argseq__20740__auto__ = ((((3) < args__20739__auto__.length))?(new cljs.core.IndexedSeq(args__20739__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when_first.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__20740__auto__);
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


var vec__29937 = bindings;
var x = cljs.core.nth.call(null,vec__29937,(0),null);
var xs = cljs.core.nth.call(null,vec__29937,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-let","cljs.core$macros/when-let",-2004472648,null)),(function (){var x__20461__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"xs__29932__auto__","xs__29932__auto__",-369650712,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__20461__auto__ = xs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__20461__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__20461__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"xs__29932__auto__","xs__29932__auto__",-369650712,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
});

cljs.core$macros.when_first.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when_first.cljs$lang$applyTo = (function (seq29933){
var G__29934 = cljs.core.first.call(null,seq29933);
var seq29933__$1 = cljs.core.next.call(null,seq29933);
var G__29935 = cljs.core.first.call(null,seq29933__$1);
var seq29933__$2 = cljs.core.next.call(null,seq29933__$1);
var G__29936 = cljs.core.first.call(null,seq29933__$2);
var seq29933__$3 = cljs.core.next.call(null,seq29933__$2);
return cljs.core$macros.when_first.cljs$core$IFn$_invoke$arity$variadic(G__29934,G__29935,G__29936,seq29933__$3);
});


cljs.core$macros.when_first.cljs$lang$macro = true;
/**
 * bindings => binding-form test
 * 
 *   When test is true, evaluates body with binding-form bound to the value of test
 */
cljs.core$macros.when_let = (function cljs$core$macros$when_let(var_args){
var args__20739__auto__ = [];
var len__20732__auto___29948 = arguments.length;
var i__20733__auto___29949 = (0);
while(true){
if((i__20733__auto___29949 < len__20732__auto___29948)){
args__20739__auto__.push((arguments[i__20733__auto___29949]));

var G__29950 = (i__20733__auto___29949 + (1));
i__20733__auto___29949 = G__29950;
continue;
} else {
}
break;
}

var argseq__20740__auto__ = ((((3) < args__20739__auto__.length))?(new cljs.core.IndexedSeq(args__20739__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when_let.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__20740__auto__);
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__20461__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__29943__auto__","temp__29943__auto__",-373505151,null)),(function (){var x__20461__auto__ = tst;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__29943__auto__","temp__29943__auto__",-373505151,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__20461__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__20461__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__29943__auto__","temp__29943__auto__",-373505151,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
});

cljs.core$macros.when_let.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when_let.cljs$lang$applyTo = (function (seq29944){
var G__29945 = cljs.core.first.call(null,seq29944);
var seq29944__$1 = cljs.core.next.call(null,seq29944);
var G__29946 = cljs.core.first.call(null,seq29944__$1);
var seq29944__$2 = cljs.core.next.call(null,seq29944__$1);
var G__29947 = cljs.core.first.call(null,seq29944__$2);
var seq29944__$3 = cljs.core.next.call(null,seq29944__$2);
return cljs.core$macros.when_let.cljs$core$IFn$_invoke$arity$variadic(G__29945,G__29946,G__29947,seq29944__$3);
});


cljs.core$macros.when_let.cljs$lang$macro = true;
/**
 * Evaluates test. If logical false, evaluates body in an implicit do.
 */
cljs.core$macros.when_not = (function cljs$core$macros$when_not(var_args){
var args__20739__auto__ = [];
var len__20732__auto___29955 = arguments.length;
var i__20733__auto___29956 = (0);
while(true){
if((i__20733__auto___29956 < len__20732__auto___29955)){
args__20739__auto__.push((arguments[i__20733__auto___29956]));

var G__29957 = (i__20733__auto___29956 + (1));
i__20733__auto___29956 = G__29957;
continue;
} else {
}
break;
}

var argseq__20740__auto__ = ((((3) < args__20739__auto__.length))?(new cljs.core.IndexedSeq(args__20739__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when_not.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__20740__auto__);
});

cljs.core$macros.when_not.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,test,body){
return cljs.core._conj.call(null,(function (){var x__20461__auto__ = test;
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__20461__auto____$1 = cljs.core.cons.call(null,new cljs.core.Symbol(null,"do","do",1686842252,null),body);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto____$1);
})(),null),x__20461__auto__);
})(),new cljs.core.Symbol(null,"if","if",1181717262,null));
});

cljs.core$macros.when_not.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when_not.cljs$lang$applyTo = (function (seq29951){
var G__29952 = cljs.core.first.call(null,seq29951);
var seq29951__$1 = cljs.core.next.call(null,seq29951);
var G__29953 = cljs.core.first.call(null,seq29951__$1);
var seq29951__$2 = cljs.core.next.call(null,seq29951__$1);
var G__29954 = cljs.core.first.call(null,seq29951__$2);
var seq29951__$3 = cljs.core.next.call(null,seq29951__$2);
return cljs.core$macros.when_not.cljs$core$IFn$_invoke$arity$variadic(G__29952,G__29953,G__29954,seq29951__$3);
});


cljs.core$macros.when_not.cljs$lang$macro = true;
/**
 * Repeatedly executes body while test expression is true. Presumes
 *   some side-effect will cause test to become false/nil. Returns nil
 */
cljs.core$macros.while$ = (function cljs$core$macros$while(var_args){
var args__20739__auto__ = [];
var len__20732__auto___29962 = arguments.length;
var i__20733__auto___29963 = (0);
while(true){
if((i__20733__auto___29963 < len__20732__auto___29962)){
args__20739__auto__.push((arguments[i__20733__auto___29963]));

var G__29964 = (i__20733__auto___29963 + (1));
i__20733__auto___29963 = G__29964;
continue;
} else {
}
break;
}

var argseq__20740__auto__ = ((((3) < args__20739__auto__.length))?(new cljs.core.IndexedSeq(args__20739__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.while$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__20740__auto__);
});

cljs.core$macros.while$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,test,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__20461__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__20461__auto__ = test;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),body,(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
});

cljs.core$macros.while$.cljs$lang$maxFixedArity = (3);

cljs.core$macros.while$.cljs$lang$applyTo = (function (seq29958){
var G__29959 = cljs.core.first.call(null,seq29958);
var seq29958__$1 = cljs.core.next.call(null,seq29958);
var G__29960 = cljs.core.first.call(null,seq29958__$1);
var seq29958__$2 = cljs.core.next.call(null,seq29958__$1);
var G__29961 = cljs.core.first.call(null,seq29958__$2);
var seq29958__$3 = cljs.core.next.call(null,seq29958__$2);
return cljs.core$macros.while$.cljs$core$IFn$_invoke$arity$variadic(G__29959,G__29960,G__29961,seq29958__$3);
});


cljs.core$macros.while$.cljs$lang$macro = true;
/**
 * Takes an expression and a set of test/form pairs. Threads expr (via ->)
 *   through each form for which the corresponding test
 *   expression is true. Note that, unlike cond branching, cond-> threading does
 *   not short circuit after the first true test expression.
 */
cljs.core$macros.cond__GT_ = (function cljs$core$macros$cond__GT_(var_args){
var args__20739__auto__ = [];
var len__20732__auto___29973 = arguments.length;
var i__20733__auto___29974 = (0);
while(true){
if((i__20733__auto___29974 < len__20732__auto___29973)){
args__20739__auto__.push((arguments[i__20733__auto___29974]));

var G__29975 = (i__20733__auto___29974 + (1));
i__20733__auto___29974 = G__29975;
continue;
} else {
}
break;
}

var argseq__20740__auto__ = ((((3) < args__20739__auto__.length))?(new cljs.core.IndexedSeq(args__20739__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.cond__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__20740__auto__);
});

cljs.core$macros.cond__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,clauses){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,clauses))){
} else {
throw (new Error("Assert failed: (even? (count clauses))"));
}

var g = cljs.core.gensym.call(null);
var pstep = ((function (g){
return (function (p__29969){
var vec__29970 = p__29969;
var test = cljs.core.nth.call(null,vec__29970,(0),null);
var step = cljs.core.nth.call(null,vec__29970,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__20461__auto__ = test;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","->","cljs.core$macros/->",-1519455206,null)),(function (){var x__20461__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = step;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
});})(g))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__20461__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__20461__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),cljs.core.interleave.call(null,cljs.core.repeat.call(null,g),cljs.core.map.call(null,pstep,cljs.core.partition.call(null,(2),clauses)))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
});

cljs.core$macros.cond__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.cond__GT_.cljs$lang$applyTo = (function (seq29965){
var G__29966 = cljs.core.first.call(null,seq29965);
var seq29965__$1 = cljs.core.next.call(null,seq29965);
var G__29967 = cljs.core.first.call(null,seq29965__$1);
var seq29965__$2 = cljs.core.next.call(null,seq29965__$1);
var G__29968 = cljs.core.first.call(null,seq29965__$2);
var seq29965__$3 = cljs.core.next.call(null,seq29965__$2);
return cljs.core$macros.cond__GT_.cljs$core$IFn$_invoke$arity$variadic(G__29966,G__29967,G__29968,seq29965__$3);
});


cljs.core$macros.cond__GT_.cljs$lang$macro = true;
/**
 * Takes an expression and a set of test/form pairs. Threads expr (via ->>)
 *   through each form for which the corresponding test expression
 *   is true.  Note that, unlike cond branching, cond->> threading does not short circuit
 *   after the first true test expression.
 */
cljs.core$macros.cond__GT__GT_ = (function cljs$core$macros$cond__GT__GT_(var_args){
var args__20739__auto__ = [];
var len__20732__auto___29984 = arguments.length;
var i__20733__auto___29985 = (0);
while(true){
if((i__20733__auto___29985 < len__20732__auto___29984)){
args__20739__auto__.push((arguments[i__20733__auto___29985]));

var G__29986 = (i__20733__auto___29985 + (1));
i__20733__auto___29985 = G__29986;
continue;
} else {
}
break;
}

var argseq__20740__auto__ = ((((3) < args__20739__auto__.length))?(new cljs.core.IndexedSeq(args__20739__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.cond__GT__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__20740__auto__);
});

cljs.core$macros.cond__GT__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,clauses){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,clauses))){
} else {
throw (new Error("Assert failed: (even? (count clauses))"));
}

var g = cljs.core.gensym.call(null);
var pstep = ((function (g){
return (function (p__29980){
var vec__29981 = p__29980;
var test = cljs.core.nth.call(null,vec__29981,(0),null);
var step = cljs.core.nth.call(null,vec__29981,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__20461__auto__ = test;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","->>","cljs.core$macros/->>",-1353108561,null)),(function (){var x__20461__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = step;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
});})(g))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__20461__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__20461__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),cljs.core.interleave.call(null,cljs.core.repeat.call(null,g),cljs.core.map.call(null,pstep,cljs.core.partition.call(null,(2),clauses)))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
});

cljs.core$macros.cond__GT__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.cond__GT__GT_.cljs$lang$applyTo = (function (seq29976){
var G__29977 = cljs.core.first.call(null,seq29976);
var seq29976__$1 = cljs.core.next.call(null,seq29976);
var G__29978 = cljs.core.first.call(null,seq29976__$1);
var seq29976__$2 = cljs.core.next.call(null,seq29976__$1);
var G__29979 = cljs.core.first.call(null,seq29976__$2);
var seq29976__$3 = cljs.core.next.call(null,seq29976__$2);
return cljs.core$macros.cond__GT__GT_.cljs$core$IFn$_invoke$arity$variadic(G__29977,G__29978,G__29979,seq29976__$3);
});


cljs.core$macros.cond__GT__GT_.cljs$lang$macro = true;
/**
 * Binds name to expr, evaluates the first form in the lexical context
 *   of that binding, then binds name to that result, repeating for each
 *   successive form, returning the result of the last form.
 */
cljs.core$macros.as__GT_ = (function cljs$core$macros$as__GT_(var_args){
var args__20739__auto__ = [];
var len__20732__auto___29992 = arguments.length;
var i__20733__auto___29993 = (0);
while(true){
if((i__20733__auto___29993 < len__20732__auto___29992)){
args__20739__auto__.push((arguments[i__20733__auto___29993]));

var G__29994 = (i__20733__auto___29993 + (1));
i__20733__auto___29993 = G__29994;
continue;
} else {
}
break;
}

var argseq__20740__auto__ = ((((4) < args__20739__auto__.length))?(new cljs.core.IndexedSeq(args__20739__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.as__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__20740__auto__);
});

cljs.core$macros.as__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,name,forms){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__20461__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__20461__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),cljs.core.interleave.call(null,cljs.core.repeat.call(null,name),forms)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
});

cljs.core$macros.as__GT_.cljs$lang$maxFixedArity = (4);

cljs.core$macros.as__GT_.cljs$lang$applyTo = (function (seq29987){
var G__29988 = cljs.core.first.call(null,seq29987);
var seq29987__$1 = cljs.core.next.call(null,seq29987);
var G__29989 = cljs.core.first.call(null,seq29987__$1);
var seq29987__$2 = cljs.core.next.call(null,seq29987__$1);
var G__29990 = cljs.core.first.call(null,seq29987__$2);
var seq29987__$3 = cljs.core.next.call(null,seq29987__$2);
var G__29991 = cljs.core.first.call(null,seq29987__$3);
var seq29987__$4 = cljs.core.next.call(null,seq29987__$3);
return cljs.core$macros.as__GT_.cljs$core$IFn$_invoke$arity$variadic(G__29988,G__29989,G__29990,G__29991,seq29987__$4);
});


cljs.core$macros.as__GT_.cljs$lang$macro = true;
/**
 * When expr is not nil, threads it into the first form (via ->),
 *   and when that result is not nil, through the next etc
 */
cljs.core$macros.some__GT_ = (function cljs$core$macros$some__GT_(var_args){
var args__20739__auto__ = [];
var len__20732__auto___29999 = arguments.length;
var i__20733__auto___30000 = (0);
while(true){
if((i__20733__auto___30000 < len__20732__auto___29999)){
args__20739__auto__.push((arguments[i__20733__auto___30000]));

var G__30001 = (i__20733__auto___30000 + (1));
i__20733__auto___30000 = G__30001;
continue;
} else {
}
break;
}

var argseq__20740__auto__ = ((((3) < args__20739__auto__.length))?(new cljs.core.IndexedSeq(args__20739__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.some__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__20740__auto__);
});

cljs.core$macros.some__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,forms){
var g = cljs.core.gensym.call(null);
var pstep = ((function (g){
return (function (step){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__20461__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","->","cljs.core$macros/->",-1519455206,null)),(function (){var x__20461__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = step;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
});})(g))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__20461__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__20461__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),cljs.core.interleave.call(null,cljs.core.repeat.call(null,g),cljs.core.map.call(null,pstep,forms))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
});

cljs.core$macros.some__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.some__GT_.cljs$lang$applyTo = (function (seq29995){
var G__29996 = cljs.core.first.call(null,seq29995);
var seq29995__$1 = cljs.core.next.call(null,seq29995);
var G__29997 = cljs.core.first.call(null,seq29995__$1);
var seq29995__$2 = cljs.core.next.call(null,seq29995__$1);
var G__29998 = cljs.core.first.call(null,seq29995__$2);
var seq29995__$3 = cljs.core.next.call(null,seq29995__$2);
return cljs.core$macros.some__GT_.cljs$core$IFn$_invoke$arity$variadic(G__29996,G__29997,G__29998,seq29995__$3);
});


cljs.core$macros.some__GT_.cljs$lang$macro = true;
/**
 * When expr is not nil, threads it into the first form (via ->>),
 *   and when that result is not nil, through the next etc
 */
cljs.core$macros.some__GT__GT_ = (function cljs$core$macros$some__GT__GT_(var_args){
var args__20739__auto__ = [];
var len__20732__auto___30006 = arguments.length;
var i__20733__auto___30007 = (0);
while(true){
if((i__20733__auto___30007 < len__20732__auto___30006)){
args__20739__auto__.push((arguments[i__20733__auto___30007]));

var G__30008 = (i__20733__auto___30007 + (1));
i__20733__auto___30007 = G__30008;
continue;
} else {
}
break;
}

var argseq__20740__auto__ = ((((3) < args__20739__auto__.length))?(new cljs.core.IndexedSeq(args__20739__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.some__GT__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__20740__auto__);
});

cljs.core$macros.some__GT__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,forms){
var g = cljs.core.gensym.call(null);
var pstep = ((function (g){
return (function (step){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__20461__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","->>","cljs.core$macros/->>",-1353108561,null)),(function (){var x__20461__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = step;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
});})(g))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__20461__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__20461__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),cljs.core.interleave.call(null,cljs.core.repeat.call(null,g),cljs.core.map.call(null,pstep,forms))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
});

cljs.core$macros.some__GT__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.some__GT__GT_.cljs$lang$applyTo = (function (seq30002){
var G__30003 = cljs.core.first.call(null,seq30002);
var seq30002__$1 = cljs.core.next.call(null,seq30002);
var G__30004 = cljs.core.first.call(null,seq30002__$1);
var seq30002__$2 = cljs.core.next.call(null,seq30002__$1);
var G__30005 = cljs.core.first.call(null,seq30002__$2);
var seq30002__$3 = cljs.core.next.call(null,seq30002__$2);
return cljs.core$macros.some__GT__GT_.cljs$core$IFn$_invoke$arity$variadic(G__30003,G__30004,G__30005,seq30002__$3);
});


cljs.core$macros.some__GT__GT_.cljs$lang$macro = true;
/**
 * bindings => binding-form test
 * 
 *    If test is not nil, evaluates then with binding-form bound to the
 *    value of test, if not, yields else
 */
cljs.core$macros.if_some = (function cljs$core$macros$if_some(var_args){
var args30010 = [];
var len__20732__auto___30019 = arguments.length;
var i__20733__auto___30020 = (0);
while(true){
if((i__20733__auto___30020 < len__20732__auto___30019)){
args30010.push((arguments[i__20733__auto___30020]));

var G__30021 = (i__20733__auto___30020 + (1));
i__20733__auto___30020 = G__30021;
continue;
} else {
}
break;
}

var G__30018 = args30010.length;
switch (G__30018) {
case 4:
return cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__20751__auto__ = (new cljs.core.IndexedSeq(args30010.slice((5)),(0),null));
return cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__20751__auto__);

}
});

cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,then){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-some","cljs.core$macros/if-some",1405341529,null)),(function (){var x__20461__auto__ = bindings;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = then;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__20461__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__30009__auto__","temp__30009__auto__",-159014516,null)),(function (){var x__20461__auto__ = tst;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__30009__auto__","temp__30009__auto__",-159014516,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = else$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__20461__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__20461__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__30009__auto__","temp__30009__auto__",-159014516,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = then;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
});

cljs.core$macros.if_some.cljs$lang$applyTo = (function (seq30011){
var G__30012 = cljs.core.first.call(null,seq30011);
var seq30011__$1 = cljs.core.next.call(null,seq30011);
var G__30013 = cljs.core.first.call(null,seq30011__$1);
var seq30011__$2 = cljs.core.next.call(null,seq30011__$1);
var G__30014 = cljs.core.first.call(null,seq30011__$2);
var seq30011__$3 = cljs.core.next.call(null,seq30011__$2);
var G__30015 = cljs.core.first.call(null,seq30011__$3);
var seq30011__$4 = cljs.core.next.call(null,seq30011__$3);
var G__30016 = cljs.core.first.call(null,seq30011__$4);
var seq30011__$5 = cljs.core.next.call(null,seq30011__$4);
return cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$variadic(G__30012,G__30013,G__30014,G__30015,G__30016,seq30011__$5);
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
var args__20739__auto__ = [];
var len__20732__auto___30028 = arguments.length;
var i__20733__auto___30029 = (0);
while(true){
if((i__20733__auto___30029 < len__20732__auto___30028)){
args__20739__auto__.push((arguments[i__20733__auto___30029]));

var G__30030 = (i__20733__auto___30029 + (1));
i__20733__auto___30029 = G__30030;
continue;
} else {
}
break;
}

var argseq__20740__auto__ = ((((3) < args__20739__auto__.length))?(new cljs.core.IndexedSeq(args__20739__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__20740__auto__);
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__20461__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__30023__auto__","temp__30023__auto__",385249312,null)),(function (){var x__20461__auto__ = tst;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__30023__auto__","temp__30023__auto__",385249312,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__20461__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__20461__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__30023__auto__","temp__30023__auto__",385249312,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
});

cljs.core$macros.when_some.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when_some.cljs$lang$applyTo = (function (seq30024){
var G__30025 = cljs.core.first.call(null,seq30024);
var seq30024__$1 = cljs.core.next.call(null,seq30024);
var G__30026 = cljs.core.first.call(null,seq30024__$1);
var seq30024__$2 = cljs.core.next.call(null,seq30024__$1);
var G__30027 = cljs.core.first.call(null,seq30024__$2);
var seq30024__$3 = cljs.core.next.call(null,seq30024__$2);
return cljs.core$macros.when_some.cljs$core$IFn$_invoke$arity$variadic(G__30025,G__30026,G__30027,seq30024__$3);
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

var argdecls = cljs.core.map.call(null,(function (p1__30031_SHARP_){
if(cljs.core.seq_QMARK_.call(null,p1__30031_SHARP_)){
return cljs.core.first.call(null,p1__30031_SHARP_);
} else {
throw (new Error(((cljs.core.seq_QMARK_.call(null,cljs.core.first.call(null,fdecl)))?[cljs.core.str("Invalid signature \""),cljs.core.str(p1__30031_SHARP_),cljs.core.str("\" should be a list")].join(''):[cljs.core.str("Parameter declaration \""),cljs.core.str(p1__30031_SHARP_),cljs.core.str("\" should be a vector")].join(''))));
}
}),fdecl);
var bad_args = cljs.core.seq.call(null,cljs.core.remove.call(null,((function (argdecls){
return (function (p1__30032_SHARP_){
return cljs.core.vector_QMARK_.call(null,p1__30032_SHARP_);
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
var G__30033 = cljs.core.conj.call(null,ret,asig.call(null,cljs.core.first.call(null,fdecls)));
var G__30034 = cljs.core.next.call(null,fdecls);
ret = G__30033;
fdecls = G__30034;
continue;
} else {
return cljs.core.seq.call(null,ret);
}
break;
}
} else {
var x__20461__auto__ = asig.call(null,fdecl);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
}
});
/**
 * defs name to have the root value of init iff the named var has no root value,
 *   else init is unevaluated
 */
cljs.core$macros.defonce = (function cljs$core$macros$defonce(_AMPERSAND_form,_AMPERSAND_env,x,init){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-not","cljs.core$macros/when-not",-764302244,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","exists?","cljs.core$macros/exists?",-1828590389,null)),(function (){var x__20461__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"def","def",597100991,null)),(function (){var x__20461__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = init;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
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
return cljs.core.conj.call(null,ret,gseq,cljs.core._conj.call(null,(function (){var x__20461__auto__ = gvec;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
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
var G__30044 = cljs$core$macros$destructure_$_pb.call(null,ret,cljs.core.second.call(null,bs),gseq);
var G__30045 = n;
var G__30046 = cljs.core.nnext.call(null,bs);
var G__30047 = true;
ret = G__30044;
n = G__30045;
bs = G__30046;
seen_rest_QMARK_ = G__30047;
continue;
} else {
if(cljs.core._EQ_.call(null,firstb,new cljs.core.Keyword(null,"as","as",1148689641))){
return cljs$core$macros$destructure_$_pb.call(null,ret,cljs.core.second.call(null,bs),gvec);
} else {
if(seen_rest_QMARK_){
throw (new Error("Unsupported binding form, only :as can follow & parameter"));
} else {
var G__30048 = cljs$core$macros$destructure_$_pb.call(null,(cljs.core.truth_(has_rest)?cljs.core.conj.call(null,ret,gfirst,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null)),(function (){var x__20461__auto__ = gseq;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})()))),gseq,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","next","cljs.core/next",-1291438473,null)),(function (){var x__20461__auto__ = gseq;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())))):ret),firstb,(cljs.core.truth_(has_rest)?gfirst:cljs.core._conj.call(null,(function (){var x__20461__auto__ = gvec;
return cljs.core._conj.call(null,(function (){var x__20461__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,null),x__20461__auto____$1);
})(),x__20461__auto__);
})(),new cljs.core.Symbol("cljs.core","nth","cljs.core/nth",1961052085,null))));
var G__30049 = (n + (1));
var G__30050 = cljs.core.next.call(null,bs);
var G__30051 = seen_rest_QMARK_;
ret = G__30048;
n = G__30049;
bs = G__30050;
seen_rest_QMARK_ = G__30051;
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
.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,bvec__$1,gmap),v__$1),gmap),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","implements?","cljs.core$macros/implements?",-94762250,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","ISeq","cljs.core/ISeq",230133392,null)),(function (){var x__20461__auto__ = gmap;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","hash-map","cljs.core/hash-map",303385767,null)),(function (){var x__20461__auto__ = gmap;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = gmap;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())))));
var bes = (function (){var transforms = cljs.core.reduce.call(null,((function (ret,gmap,defaults,pvec,bents){
return (function (transforms,mk){
if((mk instanceof cljs.core.Keyword)){
var mkns = cljs.core.namespace.call(null,mk);
var mkn = cljs.core.name.call(null,mk);
if(cljs.core._EQ_.call(null,mkn,"keys")){
return cljs.core.assoc.call(null,transforms,mk,((function (mkns,mkn,ret,gmap,defaults,pvec,bents){
return (function (p1__30035_SHARP_){
return cljs.core.keyword.call(null,(function (){var or__19624__auto__ = mkns;
if(cljs.core.truth_(or__19624__auto__)){
return or__19624__auto__;
} else {
return cljs.core.namespace.call(null,p1__30035_SHARP_);
}
})(),cljs.core.name.call(null,p1__30035_SHARP_));
});})(mkns,mkn,ret,gmap,defaults,pvec,bents))
);
} else {
if(cljs.core._EQ_.call(null,mkn,"syms")){
return cljs.core.assoc.call(null,transforms,mk,((function (mkns,mkn,ret,gmap,defaults,pvec,bents){
return (function (p1__30036_SHARP_){
return cljs.core._conj.call(null,(function (){var x__20461__auto__ = cljs.core.symbol.call(null,(function (){var or__19624__auto__ = mkns;
if(cljs.core.truth_(or__19624__auto__)){
return or__19624__auto__;
} else {
return cljs.core.namespace.call(null,p1__30036_SHARP_);
}
})(),cljs.core.name.call(null,p1__30036_SHARP_));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
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
return (function (p1__30037_SHARP_,p2__30038_SHARP_){
return cljs.core.assoc.call(null,p1__30037_SHARP_,p2__30038_SHARP_,cljs.core.val.call(null,entry).call(null,p2__30038_SHARP_));
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
var bv = ((cljs.core.contains_QMARK_.call(null,defaults,local))?cljs.core._conj.call(null,(function (){var x__20461__auto__ = gmap;
return cljs.core._conj.call(null,(function (){var x__20461__auto____$1 = bk;
return cljs.core._conj.call(null,(function (){var x__20461__auto____$2 = defaults.call(null,local);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto____$2);
})(),x__20461__auto____$1);
})(),x__20461__auto__);
})(),new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null)):cljs.core._conj.call(null,(function (){var x__20461__auto__ = gmap;
return cljs.core._conj.call(null,(function (){var x__20461__auto____$1 = bk;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto____$1);
})(),x__20461__auto__);
})(),new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null)));
var G__30052 = ((((bb instanceof cljs.core.Keyword)) || ((bb instanceof cljs.core.Symbol)))?cljs.core.conj.call(null,ret,local,bv):cljs$core$macros$destructure_$_pb.call(null,ret,bb,bv));
var G__30053 = cljs.core.next.call(null,bes);
ret = G__30052;
bes = G__30053;
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
return (function (p1__30039_SHARP_){
return (cljs.core.first.call(null,p1__30039_SHARP_) instanceof cljs.core.Keyword);
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","declare","cljs.core$macros/declare",1172642527,null)),(function (){var x__20461__auto__ = cljs.core.symbol.call(null,sym);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),(function (){var x__20461__auto__ = [cljs.core.str("/** @define {"),cljs.core.str(type),cljs.core.str("} */")].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog","define","goog/define",-352722538,null)),(function (){var x__20461__auto__ = defname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = default$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
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
var args__20739__auto__ = [];
var len__20732__auto___30058 = arguments.length;
var i__20733__auto___30059 = (0);
while(true){
if((i__20733__auto___30059 < len__20732__auto___30058)){
args__20739__auto__.push((arguments[i__20733__auto___30059]));

var G__30060 = (i__20733__auto___30059 + (1));
i__20733__auto___30059 = G__30060;
continue;
} else {
}
break;
}

var argseq__20740__auto__ = ((((3) < args__20739__auto__.length))?(new cljs.core.IndexedSeq(args__20739__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.let$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__20740__auto__);
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


return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"let*","let*",1920721458,null)),(function (){var x__20461__auto__ = cljs.core$macros.destructure.call(null,bindings);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),body)));
});

cljs.core$macros.let$.cljs$lang$maxFixedArity = (3);

cljs.core$macros.let$.cljs$lang$applyTo = (function (seq30054){
var G__30055 = cljs.core.first.call(null,seq30054);
var seq30054__$1 = cljs.core.next.call(null,seq30054);
var G__30056 = cljs.core.first.call(null,seq30054__$1);
var seq30054__$2 = cljs.core.next.call(null,seq30054__$1);
var G__30057 = cljs.core.first.call(null,seq30054__$2);
var seq30054__$3 = cljs.core.next.call(null,seq30054__$2);
return cljs.core$macros.let$.cljs$core$IFn$_invoke$arity$variadic(G__30055,G__30056,G__30057,seq30054__$3);
});


cljs.core$macros.let$.cljs$lang$macro = true;
/**
 * Evaluates the exprs in a lexical context in which the symbols in
 *   the binding-forms are bound to their respective init-exprs or parts
 *   therein. Acts as a recur target.
 */
cljs.core$macros.loop = (function cljs$core$macros$loop(var_args){
var args__20739__auto__ = [];
var len__20732__auto___30069 = arguments.length;
var i__20733__auto___30070 = (0);
while(true){
if((i__20733__auto___30070 < len__20732__auto___30069)){
args__20739__auto__.push((arguments[i__20733__auto___30070]));

var G__30071 = (i__20733__auto___30070 + (1));
i__20733__auto___30070 = G__30071;
continue;
} else {
}
break;
}

var argseq__20740__auto__ = ((((3) < args__20739__auto__.length))?(new cljs.core.IndexedSeq(args__20739__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.loop.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__20740__auto__);
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"loop*","loop*",615029416,null)),(function (){var x__20461__auto__ = bindings;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
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
return (function (ret,p__30065){
var vec__30066 = p__30065;
var b = cljs.core.nth.call(null,vec__30066,(0),null);
var v = cljs.core.nth.call(null,vec__30066,(1),null);
var g = cljs.core.nth.call(null,vec__30066,(2),null);
if((b instanceof cljs.core.Symbol)){
return cljs.core.conj.call(null,ret,g,v);
} else {
return cljs.core.conj.call(null,ret,g,v,b,g);
}
});})(vs,bs,gs,db))
,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,cljs.core.vector,bs,vs,gs));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__20461__auto__ = bfs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"loop*","loop*",615029416,null)),(function (){var x__20461__auto__ = cljs.core.vec.call(null,cljs.core.interleave.call(null,gs,gs));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__20461__auto__ = cljs.core.vec.call(null,cljs.core.interleave.call(null,bs,gs));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
}
});

cljs.core$macros.loop.cljs$lang$maxFixedArity = (3);

cljs.core$macros.loop.cljs$lang$applyTo = (function (seq30061){
var G__30062 = cljs.core.first.call(null,seq30061);
var seq30061__$1 = cljs.core.next.call(null,seq30061);
var G__30063 = cljs.core.first.call(null,seq30061__$1);
var seq30061__$2 = cljs.core.next.call(null,seq30061__$1);
var G__30064 = cljs.core.first.call(null,seq30061__$2);
var seq30061__$3 = cljs.core.next.call(null,seq30061__$2);
return cljs.core$macros.loop.cljs$core$IFn$_invoke$arity$variadic(G__30062,G__30063,G__30064,seq30061__$3);
});


cljs.core$macros.loop.cljs$lang$macro = true;
/**
 * protocol fqn -> [partition number, bit]
 */
cljs.core$macros.fast_path_protocols = cljs.core.zipmap.call(null,cljs.core.map.call(null,(function (p1__30072_SHARP_){
return cljs.core.symbol.call(null,"cljs.core",[cljs.core.str(p1__30072_SHARP_)].join(''));
}),cljs.core.PersistentVector.fromArray([new cljs.core.Symbol(null,"IFn","IFn",-244881638,null),new cljs.core.Symbol(null,"ICounted","ICounted",-1705786327,null),new cljs.core.Symbol(null,"IEmptyableCollection","IEmptyableCollection",1477271438,null),new cljs.core.Symbol(null,"ICollection","ICollection",-686709190,null),new cljs.core.Symbol(null,"IIndexed","IIndexed",-574812826,null),new cljs.core.Symbol(null,"ASeq","ASeq",266390234,null),new cljs.core.Symbol(null,"ISeq","ISeq",1517365813,null),new cljs.core.Symbol(null,"INext","INext",562211849,null),new cljs.core.Symbol(null,"ILookup","ILookup",784647298,null),new cljs.core.Symbol(null,"IAssociative","IAssociative",-1306431882,null),new cljs.core.Symbol(null,"IMap","IMap",992876629,null),new cljs.core.Symbol(null,"IMapEntry","IMapEntry",-943754199,null),new cljs.core.Symbol(null,"ISet","ISet",-1398072657,null),new cljs.core.Symbol(null,"IStack","IStack",1136769449,null),new cljs.core.Symbol(null,"IVector","IVector",-1120721434,null),new cljs.core.Symbol(null,"IDeref","IDeref",1738423197,null),new cljs.core.Symbol(null,"IDerefWithTimeout","IDerefWithTimeout",2140974319,null),new cljs.core.Symbol(null,"IMeta","IMeta",1095313672,null),new cljs.core.Symbol(null,"IWithMeta","IWithMeta",-509493158,null),new cljs.core.Symbol(null,"IReduce","IReduce",-440384974,null),new cljs.core.Symbol(null,"IKVReduce","IKVReduce",-870856862,null),new cljs.core.Symbol(null,"IEquiv","IEquiv",-1912850869,null),new cljs.core.Symbol(null,"IHash","IHash",-1495374645,null),new cljs.core.Symbol(null,"ISeqable","ISeqable",1349682102,null),new cljs.core.Symbol(null,"ISequential","ISequential",-1626174217,null),new cljs.core.Symbol(null,"IList","IList",1682281311,null),new cljs.core.Symbol(null,"IRecord","IRecord",-903221169,null),new cljs.core.Symbol(null,"IReversible","IReversible",-723048599,null),new cljs.core.Symbol(null,"ISorted","ISorted",-253627362,null),new cljs.core.Symbol(null,"IPrintWithWriter","IPrintWithWriter",-1205316154,null),new cljs.core.Symbol(null,"IWriter","IWriter",-1681087107,null),new cljs.core.Symbol(null,"IPrintWithWriter","IPrintWithWriter",-1205316154,null),new cljs.core.Symbol(null,"IPending","IPending",1229113039,null),new cljs.core.Symbol(null,"IWatchable","IWatchable",-1929659016,null),new cljs.core.Symbol(null,"IEditableCollection","IEditableCollection",-906687187,null),new cljs.core.Symbol(null,"ITransientCollection","ITransientCollection",252832402,null),new cljs.core.Symbol(null,"ITransientAssociative","ITransientAssociative",-1612754624,null),new cljs.core.Symbol(null,"ITransientMap","ITransientMap",298423651,null),new cljs.core.Symbol(null,"ITransientVector","ITransientVector",1978793164,null),new cljs.core.Symbol(null,"ITransientSet","ITransientSet",-575559912,null),new cljs.core.Symbol(null,"IMultiFn","IMultiFn",-1848282794,null),new cljs.core.Symbol(null,"IChunkedSeq","IChunkedSeq",-1299765705,null),new cljs.core.Symbol(null,"IChunkedNext","IChunkedNext",1193289532,null),new cljs.core.Symbol(null,"IComparable","IComparable",1834481627,null),new cljs.core.Symbol(null,"INamed","INamed",357992946,null),new cljs.core.Symbol(null,"ICloneable","ICloneable",1882653160,null),new cljs.core.Symbol(null,"IAtom","IAtom",-1411134312,null),new cljs.core.Symbol(null,"IReset","IReset",-1893729426,null),new cljs.core.Symbol(null,"ISwap","ISwap",484378193,null)], true)),cljs.core.iterate.call(null,(function (p__30073){
var vec__30074 = p__30073;
var p = cljs.core.nth.call(null,vec__30074,(0),null);
var b = cljs.core.nth.call(null,vec__30074,(1),null);
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
var args__20739__auto__ = [];
var len__20732__auto___30080 = arguments.length;
var i__20733__auto___30081 = (0);
while(true){
if((i__20733__auto___30081 < len__20732__auto___30080)){
args__20739__auto__.push((arguments[i__20733__auto___30081]));

var G__30082 = (i__20733__auto___30081 + (1));
i__20733__auto___30081 = G__30082;
continue;
} else {
}
break;
}

var argseq__20740__auto__ = ((((2) < args__20739__auto__.length))?(new cljs.core.IndexedSeq(args__20739__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__20740__auto__);
});

cljs.core$macros.str.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
var strs = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,",",cljs.core.repeat.call(null,cljs.core.count.call(null,xs),"cljs.core.str(~{})")));
return cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),[cljs.core.str("["),cljs.core.str(strs),cljs.core.str("].join('')")].join(''),xs);
});

cljs.core$macros.str.cljs$lang$maxFixedArity = (2);

cljs.core$macros.str.cljs$lang$applyTo = (function (seq30077){
var G__30078 = cljs.core.first.call(null,seq30077);
var seq30077__$1 = cljs.core.next.call(null,seq30077);
var G__30079 = cljs.core.first.call(null,seq30077__$1);
var seq30077__$2 = cljs.core.next.call(null,seq30077__$1);
return cljs.core$macros.str.cljs$core$IFn$_invoke$arity$variadic(G__30078,G__30079,seq30077__$2);
});


cljs.core$macros.str.cljs$lang$macro = true;
cljs.core$macros.bool_expr = (function cljs$core$macros$bool_expr(e){
return cljs.core.vary_meta.call(null,e,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null));
});
cljs.core$macros.simple_test_expr_QMARK_ = (function cljs$core$macros$simple_test_expr_QMARK_(env,ast){
var and__19612__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"js","js",1768080579),null,new cljs.core.Keyword(null,"constant","constant",-379609303),null,new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"invoke","invoke",1145927159),null,new cljs.core.Keyword(null,"dot","dot",1442709401),null], null), null).call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast));
if(cljs.core.truth_(and__19612__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null).call(null,cljs.analyzer.infer_tag.call(null,env,ast));
} else {
return and__19612__auto__;
}
});
/**
 * Evaluates exprs one at a time, from left to right. If a form
 *   returns logical false (nil or false), and returns that value and
 *   doesn't evaluate any of the other expressions, otherwise it returns
 *   the value of the last expr. (and) returns true.
 */
cljs.core$macros.and = (function cljs$core$macros$and(var_args){
var args30086 = [];
var len__20732__auto___30093 = arguments.length;
var i__20733__auto___30094 = (0);
while(true){
if((i__20733__auto___30094 < len__20732__auto___30093)){
args30086.push((arguments[i__20733__auto___30094]));

var G__30095 = (i__20733__auto___30094 + (1));
i__20733__auto___30094 = G__30095;
continue;
} else {
}
break;
}

var G__30092 = args30086.length;
switch (G__30092) {
case 2:
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__20751__auto__ = (new cljs.core.IndexedSeq(args30086.slice((3)),(0),null));
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__20751__auto__);

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
return (function (p1__30083_SHARP_){
return cljs.core$macros.simple_test_expr_QMARK_.call(null,_AMPERSAND_env,p1__30083_SHARP_);
});})(forms))
,cljs.core.map.call(null,((function (forms){
return (function (p1__30084_SHARP_){
return cljs.analyzer.analyze.call(null,_AMPERSAND_env,p1__30084_SHARP_);
});})(forms))
,forms))){
var and_str = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," && ",cljs.core.repeat.call(null,cljs.core.count.call(null,forms),"(~{})")));
return cljs.core$macros.bool_expr.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),(function (){var x__20461__auto__ = and_str;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),forms))));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__20461__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"and__30085__auto__","and__30085__auto__",-1234769882,null)),(function (){var x__20461__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"and__30085__auto__","and__30085__auto__",-1234769882,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),next)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"and__30085__auto__","and__30085__auto__",-1234769882,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
}
});

cljs.core$macros.and.cljs$lang$applyTo = (function (seq30087){
var G__30088 = cljs.core.first.call(null,seq30087);
var seq30087__$1 = cljs.core.next.call(null,seq30087);
var G__30089 = cljs.core.first.call(null,seq30087__$1);
var seq30087__$2 = cljs.core.next.call(null,seq30087__$1);
var G__30090 = cljs.core.first.call(null,seq30087__$2);
var seq30087__$3 = cljs.core.next.call(null,seq30087__$2);
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$variadic(G__30088,G__30089,G__30090,seq30087__$3);
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
var args30100 = [];
var len__20732__auto___30107 = arguments.length;
var i__20733__auto___30108 = (0);
while(true){
if((i__20733__auto___30108 < len__20732__auto___30107)){
args30100.push((arguments[i__20733__auto___30108]));

var G__30109 = (i__20733__auto___30108 + (1));
i__20733__auto___30108 = G__30109;
continue;
} else {
}
break;
}

var G__30106 = args30100.length;
switch (G__30106) {
case 2:
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__20751__auto__ = (new cljs.core.IndexedSeq(args30100.slice((3)),(0),null));
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__20751__auto__);

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
return (function (p1__30097_SHARP_){
return cljs.core$macros.simple_test_expr_QMARK_.call(null,_AMPERSAND_env,p1__30097_SHARP_);
});})(forms))
,cljs.core.map.call(null,((function (forms){
return (function (p1__30098_SHARP_){
return cljs.analyzer.analyze.call(null,_AMPERSAND_env,p1__30098_SHARP_);
});})(forms))
,forms))){
var or_str = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," || ",cljs.core.repeat.call(null,cljs.core.count.call(null,forms),"(~{})")));
return cljs.core$macros.bool_expr.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),(function (){var x__20461__auto__ = or_str;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),forms))));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__20461__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"or__30099__auto__","or__30099__auto__",2045390641,null)),(function (){var x__20461__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"or__30099__auto__","or__30099__auto__",2045390641,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"or__30099__auto__","or__30099__auto__",2045390641,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","or","cljs.core$macros/or",1346243648,null)),next)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
}
});

cljs.core$macros.or.cljs$lang$applyTo = (function (seq30101){
var G__30102 = cljs.core.first.call(null,seq30101);
var seq30101__$1 = cljs.core.next.call(null,seq30101);
var G__30103 = cljs.core.first.call(null,seq30101__$1);
var seq30101__$2 = cljs.core.next.call(null,seq30101__$1);
var G__30104 = cljs.core.first.call(null,seq30101__$2);
var seq30101__$3 = cljs.core.next.call(null,seq30101__$2);
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$variadic(G__30102,G__30103,G__30104,seq30101__$3);
});

cljs.core$macros.or.cljs$lang$maxFixedArity = (3);


cljs.core$macros.or.cljs$lang$macro = true;
cljs.core$macros.nil_QMARK_ = (function cljs$core$macros$nil_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","coercive-=","cljs.core$macros/coercive-=",-1655776086,null)),(function (){var x__20461__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
});

cljs.core$macros.nil_QMARK_.cljs$lang$macro = true;
cljs.core$macros.coercive_not = (function cljs$core$macros$coercive_not(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__20461__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),"(!~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.coercive_not.cljs$lang$macro = true;
cljs.core$macros.coercive_not_EQ_ = (function cljs$core$macros$coercive_not_EQ_(_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__20461__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__20461__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto____$1);
})(),x__20461__auto__);
})(),"(~{} != ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.coercive_not_EQ_.cljs$lang$macro = true;
cljs.core$macros.coercive__EQ_ = (function cljs$core$macros$coercive__EQ_(_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__20461__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__20461__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto____$1);
})(),x__20461__auto__);
})(),"(~{} == ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.coercive__EQ_.cljs$lang$macro = true;
cljs.core$macros.coercive_boolean = (function cljs$core$macros$coercive_boolean(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.with_meta.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__20461__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),"~{}"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)], null));
});

cljs.core$macros.coercive_boolean.cljs$lang$macro = true;
cljs.core$macros.truth_ = (function cljs$core$macros$truth_(_AMPERSAND_form,_AMPERSAND_env,x){
if((x instanceof cljs.core.Symbol)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("x is substituted twice"),cljs.core.str("\n"),cljs.core.str("(core/symbol? x)")].join('')));
}

return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__20461__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__20461__auto____$1 = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto____$1);
})(),x__20461__auto__);
})(),"(~{} != null && ~{} !== false)"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.truth_.cljs$lang$macro = true;
cljs.core$macros.js_arguments = (function cljs$core$macros$js_arguments(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"arguments"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.js_arguments.cljs$lang$macro = true;
cljs.core$macros.js_delete = (function cljs$core$macros$js_delete(_AMPERSAND_form,_AMPERSAND_env,obj,key){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__20461__auto__ = obj;
return cljs.core._conj.call(null,(function (){var x__20461__auto____$1 = key;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto____$1);
})(),x__20461__auto__);
})(),"delete ~{}[~{}]"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.js_delete.cljs$lang$macro = true;
cljs.core$macros.js_in = (function cljs$core$macros$js_in(_AMPERSAND_form,_AMPERSAND_env,key,obj){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__20461__auto__ = key;
return cljs.core._conj.call(null,(function (){var x__20461__auto____$1 = obj;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto____$1);
})(),x__20461__auto__);
})(),"~{} in ~{}"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.js_in.cljs$lang$macro = true;
/**
 * Emit JavaScript "debugger;" statement
 */
cljs.core$macros.js_debugger = (function cljs$core$macros$js_debugger(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core._conj.call(null,(function (){var x__20461__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"debugger"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,null),x__20461__auto__);
})(),new cljs.core.Symbol(null,"do","do",1686842252,null));
});

cljs.core$macros.js_debugger.cljs$lang$macro = true;
/**
 * Emit a top-level JavaScript multi-line comment. New lines will create a
 *   new comment line. Comment block will be preceded and followed by a newline
 */
cljs.core$macros.js_comment = (function cljs$core$macros$js_comment(_AMPERSAND_form,_AMPERSAND_env,comment){
var vec__30115 = clojure.string.split.call(null,comment,/\n/);
var seq__30116 = cljs.core.seq.call(null,vec__30115);
var first__30117 = cljs.core.first.call(null,seq__30116);
var seq__30116__$1 = cljs.core.next.call(null,seq__30116);
var x = first__30117;
var ys = seq__30116__$1;
return cljs.core._conj.call(null,(function (){var x__20461__auto__ = [cljs.core.str("\n/**\n"),cljs.core.str([cljs.core.str(" * "),cljs.core.str(x),cljs.core.str("\n")].join('')),cljs.core.str(cljs.core.reduce.call(null,cljs.core.str,"",cljs.core.map.call(null,((function (vec__30115,seq__30116,first__30117,seq__30116__$1,x,ys){
return (function (p1__30111_SHARP_){
return [cljs.core.str(" * "),cljs.core.str(clojure.string.replace.call(null,p1__30111_SHARP_,/^   /,"")),cljs.core.str("\n")].join('');
});})(vec__30115,seq__30116,first__30117,seq__30116__$1,x,ys))
,ys))),cljs.core.str(" */\n")].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.js_comment.cljs$lang$macro = true;
/**
 * EXPERIMENTAL: Subject to change. Unsafely cast a value to a different type.
 */
cljs.core$macros.unsafe_cast = (function cljs$core$macros$unsafe_cast(_AMPERSAND_form,_AMPERSAND_env,t,x){
var cast_expr = [cljs.core.str("~{} = /** @type {"),cljs.core.str(t),cljs.core.str("} */ (~{})")].join('');
return cljs.core._conj.call(null,(function (){var x__20461__auto__ = cast_expr;
return cljs.core._conj.call(null,(function (){var x__20461__auto____$1 = x;
return cljs.core._conj.call(null,(function (){var x__20461__auto____$2 = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto____$2);
})(),x__20461__auto____$1);
})(),x__20461__auto__);
})(),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.unsafe_cast.cljs$lang$macro = true;
/**
 * Emit an inline JavaScript comment.
 */
cljs.core$macros.js_inline_comment = (function cljs$core$macros$js_inline_comment(_AMPERSAND_form,_AMPERSAND_env,comment){
return cljs.core._conj.call(null,(function (){var x__20461__auto__ = [cljs.core.str("/**"),cljs.core.str(comment),cljs.core.str("*/")].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.js_inline_comment.cljs$lang$macro = true;
cljs.core$macros.true_QMARK_ = (function cljs$core$macros$true_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__20461__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),"~{} === true"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.true_QMARK_.cljs$lang$macro = true;
cljs.core$macros.false_QMARK_ = (function cljs$core$macros$false_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__20461__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),"~{} === false"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.false_QMARK_.cljs$lang$macro = true;
cljs.core$macros.string_QMARK_ = (function cljs$core$macros$string_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__20461__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),"typeof ~{} === 'string'"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.string_QMARK_.cljs$lang$macro = true;
/**
 * Return true if argument exists, analogous to usage of typeof operator
 * in JavaScript.
 */
cljs.core$macros.exists_QMARK_ = (function cljs$core$macros$exists_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__20461__auto__ = cljs.core.vary_meta.call(null,x,cljs.core.assoc,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),"typeof ~{} !== 'undefined'"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.exists_QMARK_.cljs$lang$macro = true;
/**
 * Return true if argument is identical to the JavaScript undefined value.
 */
cljs.core$macros.undefined_QMARK_ = (function cljs$core$macros$undefined_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__20461__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),"(void 0 === ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.undefined_QMARK_.cljs$lang$macro = true;
cljs.core$macros.identical_QMARK_ = (function cljs$core$macros$identical_QMARK_(_AMPERSAND_form,_AMPERSAND_env,a,b){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__20461__auto__ = a;
return cljs.core._conj.call(null,(function (){var x__20461__auto____$1 = b;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto____$1);
})(),x__20461__auto__);
})(),"(~{} === ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.identical_QMARK_.cljs$lang$macro = true;
cljs.core$macros.instance_QMARK_ = (function cljs$core$macros$instance_QMARK_(_AMPERSAND_form,_AMPERSAND_env,c,x){
return cljs.core$macros.bool_expr.call(null,(((c instanceof cljs.core.Symbol))?cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__20461__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__20461__auto____$1 = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto____$1);
})(),x__20461__auto__);
})(),"(~{} instanceof ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)):cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__20461__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__30118__auto__","c__30118__auto__",-970399358,null)),(function (){var x__20461__auto__ = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__30119__auto__","x__30119__auto__",367057416,null)),(function (){var x__20461__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"(~{} instanceof ~{})"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__30119__auto__","x__30119__auto__",367057416,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__30118__auto__","c__30118__auto__",-970399358,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())))));
});

cljs.core$macros.instance_QMARK_.cljs$lang$macro = true;
cljs.core$macros.number_QMARK_ = (function cljs$core$macros$number_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__20461__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),"typeof ~{} === 'number'"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.number_QMARK_.cljs$lang$macro = true;
cljs.core$macros.symbol_QMARK_ = (function cljs$core$macros$symbol_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","instance?","cljs.core$macros/instance?",1829750179,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","Symbol","cljs.core/Symbol",292989338,null)),(function (){var x__20461__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})()))));
});

cljs.core$macros.symbol_QMARK_.cljs$lang$macro = true;
cljs.core$macros.keyword_QMARK_ = (function cljs$core$macros$keyword_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","instance?","cljs.core$macros/instance?",1829750179,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","Keyword","cljs.core/Keyword",-451434488,null)),(function (){var x__20461__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})()))));
});

cljs.core$macros.keyword_QMARK_.cljs$lang$macro = true;
cljs.core$macros.aget = (function cljs$core$macros$aget(var_args){
var args30120 = [];
var len__20732__auto___30128 = arguments.length;
var i__20733__auto___30129 = (0);
while(true){
if((i__20733__auto___30129 < len__20732__auto___30128)){
args30120.push((arguments[i__20733__auto___30129]));

var G__30130 = (i__20733__auto___30129 + (1));
i__20733__auto___30129 = G__30130;
continue;
} else {
}
break;
}

var G__30127 = args30120.length;
switch (G__30127) {
case 4:
return cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__20751__auto__ = (new cljs.core.IndexedSeq(args30120.slice((4)),(0),null));
return cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__20751__auto__);

}
});

cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,a,i){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__20461__auto__ = a;
return cljs.core._conj.call(null,(function (){var x__20461__auto____$1 = i;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto____$1);
})(),x__20461__auto__);
})(),"(~{}[~{}])"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,a,i,idxs){
var astr = cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,cljs.core.count.call(null,idxs),"[~{}]"));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),(function (){var x__20461__auto__ = [cljs.core.str("(~{}[~{}]"),cljs.core.str(astr),cljs.core.str(")")].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = a;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = i;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),idxs)));
});

cljs.core$macros.aget.cljs$lang$applyTo = (function (seq30121){
var G__30122 = cljs.core.first.call(null,seq30121);
var seq30121__$1 = cljs.core.next.call(null,seq30121);
var G__30123 = cljs.core.first.call(null,seq30121__$1);
var seq30121__$2 = cljs.core.next.call(null,seq30121__$1);
var G__30124 = cljs.core.first.call(null,seq30121__$2);
var seq30121__$3 = cljs.core.next.call(null,seq30121__$2);
var G__30125 = cljs.core.first.call(null,seq30121__$3);
var seq30121__$4 = cljs.core.next.call(null,seq30121__$3);
return cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$variadic(G__30122,G__30123,G__30124,G__30125,seq30121__$4);
});

cljs.core$macros.aget.cljs$lang$maxFixedArity = (4);


cljs.core$macros.aget.cljs$lang$macro = true;
cljs.core$macros.aset = (function cljs$core$macros$aset(var_args){
var args30132 = [];
var len__20732__auto___30141 = arguments.length;
var i__20733__auto___30142 = (0);
while(true){
if((i__20733__auto___30142 < len__20732__auto___30141)){
args30132.push((arguments[i__20733__auto___30142]));

var G__30143 = (i__20733__auto___30142 + (1));
i__20733__auto___30142 = G__30143;
continue;
} else {
}
break;
}

var G__30140 = args30132.length;
switch (G__30140) {
case 5:
return cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
var argseq__20751__auto__ = (new cljs.core.IndexedSeq(args30132.slice((5)),(0),null));
return cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__20751__auto__);

}
});

cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$5 = (function (_AMPERSAND_form,_AMPERSAND_env,a,i,v){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__20461__auto__ = a;
return cljs.core._conj.call(null,(function (){var x__20461__auto____$1 = i;
return cljs.core._conj.call(null,(function (){var x__20461__auto____$2 = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto____$2);
})(),x__20461__auto____$1);
})(),x__20461__auto__);
})(),"(~{}[~{}] = ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,a,idx,idx2,idxv){
var n = (cljs.core.count.call(null,idxv) - (1));
var astr = cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,n,"[~{}]"));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),(function (){var x__20461__auto__ = [cljs.core.str("(~{}[~{}][~{}]"),cljs.core.str(astr),cljs.core.str(" = ~{})")].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = a;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = idx2;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),idxv)));
});

cljs.core$macros.aset.cljs$lang$applyTo = (function (seq30133){
var G__30134 = cljs.core.first.call(null,seq30133);
var seq30133__$1 = cljs.core.next.call(null,seq30133);
var G__30135 = cljs.core.first.call(null,seq30133__$1);
var seq30133__$2 = cljs.core.next.call(null,seq30133__$1);
var G__30136 = cljs.core.first.call(null,seq30133__$2);
var seq30133__$3 = cljs.core.next.call(null,seq30133__$2);
var G__30137 = cljs.core.first.call(null,seq30133__$3);
var seq30133__$4 = cljs.core.next.call(null,seq30133__$3);
var G__30138 = cljs.core.first.call(null,seq30133__$4);
var seq30133__$5 = cljs.core.next.call(null,seq30133__$4);
return cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$variadic(G__30134,G__30135,G__30136,G__30137,G__30138,seq30133__$5);
});

cljs.core$macros.aset.cljs$lang$maxFixedArity = (5);


cljs.core$macros.aset.cljs$lang$macro = true;
cljs.core$macros._PLUS_ = (function cljs$core$macros$_PLUS_(var_args){
var args30145 = [];
var len__20732__auto___30153 = arguments.length;
var i__20733__auto___30154 = (0);
while(true){
if((i__20733__auto___30154 < len__20732__auto___30153)){
args30145.push((arguments[i__20733__auto___30154]));

var G__30155 = (i__20733__auto___30154 + (1));
i__20733__auto___30154 = G__30155;
continue;
} else {
}
break;
}

var G__30152 = args30145.length;
switch (G__30152) {
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
var argseq__20751__auto__ = (new cljs.core.IndexedSeq(args30145.slice((4)),(0),null));
return cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__20751__auto__);

}
});

cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return (0);
});

cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__20461__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__20461__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto____$1);
})(),x__20461__auto__);
})(),"(~{} + ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),(function (){var x__20461__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),more)));
});

cljs.core$macros._PLUS_.cljs$lang$applyTo = (function (seq30146){
var G__30147 = cljs.core.first.call(null,seq30146);
var seq30146__$1 = cljs.core.next.call(null,seq30146);
var G__30148 = cljs.core.first.call(null,seq30146__$1);
var seq30146__$2 = cljs.core.next.call(null,seq30146__$1);
var G__30149 = cljs.core.first.call(null,seq30146__$2);
var seq30146__$3 = cljs.core.next.call(null,seq30146__$2);
var G__30150 = cljs.core.first.call(null,seq30146__$3);
var seq30146__$4 = cljs.core.next.call(null,seq30146__$3);
return cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$variadic(G__30147,G__30148,G__30149,G__30150,seq30146__$4);
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
var args__20739__auto__ = [];
var len__20732__auto___30160 = arguments.length;
var i__20733__auto___30161 = (0);
while(true){
if((i__20733__auto___30161 < len__20732__auto___30160)){
args__20739__auto__.push((arguments[i__20733__auto___30161]));

var G__30162 = (i__20733__auto___30161 + (1));
i__20733__auto___30161 = G__30162;
continue;
} else {
}
break;
}

var argseq__20740__auto__ = ((((2) < args__20739__auto__.length))?(new cljs.core.IndexedSeq(args__20739__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_add.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__20740__auto__);
});

cljs.core$macros.unchecked_add.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),xs)));
});

cljs.core$macros.unchecked_add.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_add.cljs$lang$applyTo = (function (seq30157){
var G__30158 = cljs.core.first.call(null,seq30157);
var seq30157__$1 = cljs.core.next.call(null,seq30157);
var G__30159 = cljs.core.first.call(null,seq30157__$1);
var seq30157__$2 = cljs.core.next.call(null,seq30157__$1);
return cljs.core$macros.unchecked_add.cljs$core$IFn$_invoke$arity$variadic(G__30158,G__30159,seq30157__$2);
});


cljs.core$macros.unchecked_add.cljs$lang$macro = true;
cljs.core$macros.unchecked_add_int = (function cljs$core$macros$unchecked_add_int(var_args){
var args__20739__auto__ = [];
var len__20732__auto___30166 = arguments.length;
var i__20733__auto___30167 = (0);
while(true){
if((i__20733__auto___30167 < len__20732__auto___30166)){
args__20739__auto__.push((arguments[i__20733__auto___30167]));

var G__30168 = (i__20733__auto___30167 + (1));
i__20733__auto___30167 = G__30168;
continue;
} else {
}
break;
}

var argseq__20740__auto__ = ((((2) < args__20739__auto__.length))?(new cljs.core.IndexedSeq(args__20739__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_add_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__20740__auto__);
});

cljs.core$macros.unchecked_add_int.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),xs)));
});

cljs.core$macros.unchecked_add_int.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_add_int.cljs$lang$applyTo = (function (seq30163){
var G__30164 = cljs.core.first.call(null,seq30163);
var seq30163__$1 = cljs.core.next.call(null,seq30163);
var G__30165 = cljs.core.first.call(null,seq30163__$1);
var seq30163__$2 = cljs.core.next.call(null,seq30163__$1);
return cljs.core$macros.unchecked_add_int.cljs$core$IFn$_invoke$arity$variadic(G__30164,G__30165,seq30163__$2);
});


cljs.core$macros.unchecked_add_int.cljs$lang$macro = true;
cljs.core$macros.unchecked_dec = (function cljs$core$macros$unchecked_dec(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","dec","cljs.core$macros/dec",-247694061,null)),(function (){var x__20461__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
});

cljs.core$macros.unchecked_dec.cljs$lang$macro = true;
cljs.core$macros.unchecked_dec_int = (function cljs$core$macros$unchecked_dec_int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","dec","cljs.core$macros/dec",-247694061,null)),(function (){var x__20461__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
});

cljs.core$macros.unchecked_dec_int.cljs$lang$macro = true;
cljs.core$macros.unchecked_divide_int = (function cljs$core$macros$unchecked_divide_int(var_args){
var args__20739__auto__ = [];
var len__20732__auto___30172 = arguments.length;
var i__20733__auto___30173 = (0);
while(true){
if((i__20733__auto___30173 < len__20732__auto___30172)){
args__20739__auto__.push((arguments[i__20733__auto___30173]));

var G__30174 = (i__20733__auto___30173 + (1));
i__20733__auto___30173 = G__30174;
continue;
} else {
}
break;
}

var argseq__20740__auto__ = ((((2) < args__20739__auto__.length))?(new cljs.core.IndexedSeq(args__20739__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_divide_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__20740__auto__);
});

cljs.core$macros.unchecked_divide_int.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),xs)));
});

cljs.core$macros.unchecked_divide_int.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_divide_int.cljs$lang$applyTo = (function (seq30169){
var G__30170 = cljs.core.first.call(null,seq30169);
var seq30169__$1 = cljs.core.next.call(null,seq30169);
var G__30171 = cljs.core.first.call(null,seq30169__$1);
var seq30169__$2 = cljs.core.next.call(null,seq30169__$1);
return cljs.core$macros.unchecked_divide_int.cljs$core$IFn$_invoke$arity$variadic(G__30170,G__30171,seq30169__$2);
});


cljs.core$macros.unchecked_divide_int.cljs$lang$macro = true;
cljs.core$macros.unchecked_inc = (function cljs$core$macros$unchecked_inc(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),(function (){var x__20461__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
});

cljs.core$macros.unchecked_inc.cljs$lang$macro = true;
cljs.core$macros.unchecked_inc_int = (function cljs$core$macros$unchecked_inc_int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),(function (){var x__20461__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
});

cljs.core$macros.unchecked_inc_int.cljs$lang$macro = true;
cljs.core$macros.unchecked_multiply = (function cljs$core$macros$unchecked_multiply(var_args){
var args__20739__auto__ = [];
var len__20732__auto___30178 = arguments.length;
var i__20733__auto___30179 = (0);
while(true){
if((i__20733__auto___30179 < len__20732__auto___30178)){
args__20739__auto__.push((arguments[i__20733__auto___30179]));

var G__30180 = (i__20733__auto___30179 + (1));
i__20733__auto___30179 = G__30180;
continue;
} else {
}
break;
}

var argseq__20740__auto__ = ((((2) < args__20739__auto__.length))?(new cljs.core.IndexedSeq(args__20739__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_multiply.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__20740__auto__);
});

cljs.core$macros.unchecked_multiply.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","*","cljs.core$macros/*",946321529,null)),xs)));
});

cljs.core$macros.unchecked_multiply.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_multiply.cljs$lang$applyTo = (function (seq30175){
var G__30176 = cljs.core.first.call(null,seq30175);
var seq30175__$1 = cljs.core.next.call(null,seq30175);
var G__30177 = cljs.core.first.call(null,seq30175__$1);
var seq30175__$2 = cljs.core.next.call(null,seq30175__$1);
return cljs.core$macros.unchecked_multiply.cljs$core$IFn$_invoke$arity$variadic(G__30176,G__30177,seq30175__$2);
});


cljs.core$macros.unchecked_multiply.cljs$lang$macro = true;
cljs.core$macros.unchecked_multiply_int = (function cljs$core$macros$unchecked_multiply_int(var_args){
var args__20739__auto__ = [];
var len__20732__auto___30184 = arguments.length;
var i__20733__auto___30185 = (0);
while(true){
if((i__20733__auto___30185 < len__20732__auto___30184)){
args__20739__auto__.push((arguments[i__20733__auto___30185]));

var G__30186 = (i__20733__auto___30185 + (1));
i__20733__auto___30185 = G__30186;
continue;
} else {
}
break;
}

var argseq__20740__auto__ = ((((2) < args__20739__auto__.length))?(new cljs.core.IndexedSeq(args__20739__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_multiply_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__20740__auto__);
});

cljs.core$macros.unchecked_multiply_int.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","*","cljs.core$macros/*",946321529,null)),xs)));
});

cljs.core$macros.unchecked_multiply_int.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_multiply_int.cljs$lang$applyTo = (function (seq30181){
var G__30182 = cljs.core.first.call(null,seq30181);
var seq30181__$1 = cljs.core.next.call(null,seq30181);
var G__30183 = cljs.core.first.call(null,seq30181__$1);
var seq30181__$2 = cljs.core.next.call(null,seq30181__$1);
return cljs.core$macros.unchecked_multiply_int.cljs$core$IFn$_invoke$arity$variadic(G__30182,G__30183,seq30181__$2);
});


cljs.core$macros.unchecked_multiply_int.cljs$lang$macro = true;
cljs.core$macros.unchecked_negate = (function cljs$core$macros$unchecked_negate(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__20461__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
});

cljs.core$macros.unchecked_negate.cljs$lang$macro = true;
cljs.core$macros.unchecked_negate_int = (function cljs$core$macros$unchecked_negate_int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__20461__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
});

cljs.core$macros.unchecked_negate_int.cljs$lang$macro = true;
cljs.core$macros.unchecked_remainder_int = (function cljs$core$macros$unchecked_remainder_int(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","mod","cljs.core$macros/mod",2132457375,null)),(function (){var x__20461__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
});

cljs.core$macros.unchecked_remainder_int.cljs$lang$macro = true;
cljs.core$macros.unchecked_subtract = (function cljs$core$macros$unchecked_subtract(var_args){
var args__20739__auto__ = [];
var len__20732__auto___30190 = arguments.length;
var i__20733__auto___30191 = (0);
while(true){
if((i__20733__auto___30191 < len__20732__auto___30190)){
args__20739__auto__.push((arguments[i__20733__auto___30191]));

var G__30192 = (i__20733__auto___30191 + (1));
i__20733__auto___30191 = G__30192;
continue;
} else {
}
break;
}

var argseq__20740__auto__ = ((((2) < args__20739__auto__.length))?(new cljs.core.IndexedSeq(args__20739__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_subtract.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__20740__auto__);
});

cljs.core$macros.unchecked_subtract.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),xs)));
});

cljs.core$macros.unchecked_subtract.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_subtract.cljs$lang$applyTo = (function (seq30187){
var G__30188 = cljs.core.first.call(null,seq30187);
var seq30187__$1 = cljs.core.next.call(null,seq30187);
var G__30189 = cljs.core.first.call(null,seq30187__$1);
var seq30187__$2 = cljs.core.next.call(null,seq30187__$1);
return cljs.core$macros.unchecked_subtract.cljs$core$IFn$_invoke$arity$variadic(G__30188,G__30189,seq30187__$2);
});


cljs.core$macros.unchecked_subtract.cljs$lang$macro = true;
cljs.core$macros.unchecked_subtract_int = (function cljs$core$macros$unchecked_subtract_int(var_args){
var args__20739__auto__ = [];
var len__20732__auto___30196 = arguments.length;
var i__20733__auto___30197 = (0);
while(true){
if((i__20733__auto___30197 < len__20732__auto___30196)){
args__20739__auto__.push((arguments[i__20733__auto___30197]));

var G__30198 = (i__20733__auto___30197 + (1));
i__20733__auto___30197 = G__30198;
continue;
} else {
}
break;
}

var argseq__20740__auto__ = ((((2) < args__20739__auto__.length))?(new cljs.core.IndexedSeq(args__20739__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_subtract_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__20740__auto__);
});

cljs.core$macros.unchecked_subtract_int.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),xs)));
});

cljs.core$macros.unchecked_subtract_int.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_subtract_int.cljs$lang$applyTo = (function (seq30193){
var G__30194 = cljs.core.first.call(null,seq30193);
var seq30193__$1 = cljs.core.next.call(null,seq30193);
var G__30195 = cljs.core.first.call(null,seq30193__$1);
var seq30193__$2 = cljs.core.next.call(null,seq30193__$1);
return cljs.core$macros.unchecked_subtract_int.cljs$core$IFn$_invoke$arity$variadic(G__30194,G__30195,seq30193__$2);
});


cljs.core$macros.unchecked_subtract_int.cljs$lang$macro = true;
cljs.core$macros._ = (function cljs$core$macros$_(var_args){
var args30199 = [];
var len__20732__auto___30207 = arguments.length;
var i__20733__auto___30208 = (0);
while(true){
if((i__20733__auto___30208 < len__20732__auto___30207)){
args30199.push((arguments[i__20733__auto___30208]));

var G__30209 = (i__20733__auto___30208 + (1));
i__20733__auto___30208 = G__30209;
continue;
} else {
}
break;
}

var G__30206 = args30199.length;
switch (G__30206) {
case 3:
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__20751__auto__ = (new cljs.core.IndexedSeq(args30199.slice((4)),(0),null));
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__20751__auto__);

}
});

cljs.core$macros._.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__20461__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),"(- ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros._.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__20461__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__20461__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto____$1);
})(),x__20461__auto__);
})(),"(~{} - ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros._.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__20461__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),more)));
});

cljs.core$macros._.cljs$lang$applyTo = (function (seq30200){
var G__30201 = cljs.core.first.call(null,seq30200);
var seq30200__$1 = cljs.core.next.call(null,seq30200);
var G__30202 = cljs.core.first.call(null,seq30200__$1);
var seq30200__$2 = cljs.core.next.call(null,seq30200__$1);
var G__30203 = cljs.core.first.call(null,seq30200__$2);
var seq30200__$3 = cljs.core.next.call(null,seq30200__$2);
var G__30204 = cljs.core.first.call(null,seq30200__$3);
var seq30200__$4 = cljs.core.next.call(null,seq30200__$3);
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$variadic(G__30201,G__30202,G__30203,G__30204,seq30200__$4);
});

cljs.core$macros._.cljs$lang$maxFixedArity = (4);


cljs.core$macros._.cljs$lang$macro = true;
cljs.core$macros._STAR_ = (function cljs$core$macros$_STAR_(var_args){
var args30211 = [];
var len__20732__auto___30219 = arguments.length;
var i__20733__auto___30220 = (0);
while(true){
if((i__20733__auto___30220 < len__20732__auto___30219)){
args30211.push((arguments[i__20733__auto___30220]));

var G__30221 = (i__20733__auto___30220 + (1));
i__20733__auto___30220 = G__30221;
continue;
} else {
}
break;
}

var G__30218 = args30211.length;
switch (G__30218) {
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
var argseq__20751__auto__ = (new cljs.core.IndexedSeq(args30211.slice((4)),(0),null));
return cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__20751__auto__);

}
});

cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return (1);
});

cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__20461__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__20461__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto____$1);
})(),x__20461__auto__);
})(),"(~{} * ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","*","cljs.core$macros/*",946321529,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","*","cljs.core$macros/*",946321529,null)),(function (){var x__20461__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),more)));
});

cljs.core$macros._STAR_.cljs$lang$applyTo = (function (seq30212){
var G__30213 = cljs.core.first.call(null,seq30212);
var seq30212__$1 = cljs.core.next.call(null,seq30212);
var G__30214 = cljs.core.first.call(null,seq30212__$1);
var seq30212__$2 = cljs.core.next.call(null,seq30212__$1);
var G__30215 = cljs.core.first.call(null,seq30212__$2);
var seq30212__$3 = cljs.core.next.call(null,seq30212__$2);
var G__30216 = cljs.core.first.call(null,seq30212__$3);
var seq30212__$4 = cljs.core.next.call(null,seq30212__$3);
return cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$variadic(G__30213,G__30214,G__30215,G__30216,seq30212__$4);
});

cljs.core$macros._STAR_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._STAR_.cljs$lang$macro = true;
cljs.core$macros._SLASH_ = (function cljs$core$macros$_SLASH_(var_args){
var args30223 = [];
var len__20732__auto___30231 = arguments.length;
var i__20733__auto___30232 = (0);
while(true){
if((i__20733__auto___30232 < len__20732__auto___30231)){
args30223.push((arguments[i__20733__auto___30232]));

var G__30233 = (i__20733__auto___30232 + (1));
i__20733__auto___30232 = G__30233;
continue;
} else {
}
break;
}

var G__30230 = args30223.length;
switch (G__30230) {
case 3:
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__20751__auto__ = (new cljs.core.IndexedSeq(args30223.slice((4)),(0),null));
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__20751__auto__);

}
});

cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)),(function (){var x__20461__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
});

cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__20461__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__20461__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto____$1);
})(),x__20461__auto__);
})(),"(~{} / ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),(function (){var x__20461__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),more)));
});

cljs.core$macros._SLASH_.cljs$lang$applyTo = (function (seq30224){
var G__30225 = cljs.core.first.call(null,seq30224);
var seq30224__$1 = cljs.core.next.call(null,seq30224);
var G__30226 = cljs.core.first.call(null,seq30224__$1);
var seq30224__$2 = cljs.core.next.call(null,seq30224__$1);
var G__30227 = cljs.core.first.call(null,seq30224__$2);
var seq30224__$3 = cljs.core.next.call(null,seq30224__$2);
var G__30228 = cljs.core.first.call(null,seq30224__$3);
var seq30224__$4 = cljs.core.next.call(null,seq30224__$3);
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$variadic(G__30225,G__30226,G__30227,G__30228,seq30224__$4);
});

cljs.core$macros._SLASH_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._SLASH_.cljs$lang$macro = true;
cljs.core$macros.divide = (function cljs$core$macros$divide(var_args){
var args30235 = [];
var len__20732__auto___30243 = arguments.length;
var i__20733__auto___30244 = (0);
while(true){
if((i__20733__auto___30244 < len__20732__auto___30243)){
args30235.push((arguments[i__20733__auto___30244]));

var G__30245 = (i__20733__auto___30244 + (1));
i__20733__auto___30244 = G__30245;
continue;
} else {
}
break;
}

var G__30242 = args30235.length;
switch (G__30242) {
case 3:
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__20751__auto__ = (new cljs.core.IndexedSeq(args30235.slice((4)),(0),null));
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__20751__auto__);

}
});

cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)),(function (){var x__20461__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
});

cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__20461__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__20461__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto____$1);
})(),x__20461__auto__);
})(),"(~{} / ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),(function (){var x__20461__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),more)));
});

cljs.core$macros.divide.cljs$lang$applyTo = (function (seq30236){
var G__30237 = cljs.core.first.call(null,seq30236);
var seq30236__$1 = cljs.core.next.call(null,seq30236);
var G__30238 = cljs.core.first.call(null,seq30236__$1);
var seq30236__$2 = cljs.core.next.call(null,seq30236__$1);
var G__30239 = cljs.core.first.call(null,seq30236__$2);
var seq30236__$3 = cljs.core.next.call(null,seq30236__$2);
var G__30240 = cljs.core.first.call(null,seq30236__$3);
var seq30236__$4 = cljs.core.next.call(null,seq30236__$3);
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$variadic(G__30237,G__30238,G__30239,G__30240,seq30236__$4);
});

cljs.core$macros.divide.cljs$lang$maxFixedArity = (4);


cljs.core$macros.divide.cljs$lang$macro = true;
cljs.core$macros._LT_ = (function cljs$core$macros$_LT_(var_args){
var args30247 = [];
var len__20732__auto___30255 = arguments.length;
var i__20733__auto___30256 = (0);
while(true){
if((i__20733__auto___30256 < len__20732__auto___30255)){
args30247.push((arguments[i__20733__auto___30256]));

var G__30257 = (i__20733__auto___30256 + (1));
i__20733__auto___30256 = G__30257;
continue;
} else {
}
break;
}

var G__30254 = args30247.length;
switch (G__30254) {
case 3:
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__20751__auto__ = (new cljs.core.IndexedSeq(args30247.slice((4)),(0),null));
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__20751__auto__);

}
});

cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__20461__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__20461__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto____$1);
})(),x__20461__auto__);
})(),"(~{} < ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__20461__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__20461__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),more)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
});

cljs.core$macros._LT_.cljs$lang$applyTo = (function (seq30248){
var G__30249 = cljs.core.first.call(null,seq30248);
var seq30248__$1 = cljs.core.next.call(null,seq30248);
var G__30250 = cljs.core.first.call(null,seq30248__$1);
var seq30248__$2 = cljs.core.next.call(null,seq30248__$1);
var G__30251 = cljs.core.first.call(null,seq30248__$2);
var seq30248__$3 = cljs.core.next.call(null,seq30248__$2);
var G__30252 = cljs.core.first.call(null,seq30248__$3);
var seq30248__$4 = cljs.core.next.call(null,seq30248__$3);
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$variadic(G__30249,G__30250,G__30251,G__30252,seq30248__$4);
});

cljs.core$macros._LT_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._LT_.cljs$lang$macro = true;
cljs.core$macros._LT__EQ_ = (function cljs$core$macros$_LT__EQ_(var_args){
var args30259 = [];
var len__20732__auto___30267 = arguments.length;
var i__20733__auto___30268 = (0);
while(true){
if((i__20733__auto___30268 < len__20732__auto___30267)){
args30259.push((arguments[i__20733__auto___30268]));

var G__30269 = (i__20733__auto___30268 + (1));
i__20733__auto___30268 = G__30269;
continue;
} else {
}
break;
}

var G__30266 = args30259.length;
switch (G__30266) {
case 3:
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__20751__auto__ = (new cljs.core.IndexedSeq(args30259.slice((4)),(0),null));
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__20751__auto__);

}
});

cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__20461__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__20461__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto____$1);
})(),x__20461__auto__);
})(),"(~{} <= ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<=","cljs.core$macros/<=",1865244377,null)),(function (){var x__20461__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<=","cljs.core$macros/<=",1865244377,null)),(function (){var x__20461__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),more)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
});

cljs.core$macros._LT__EQ_.cljs$lang$applyTo = (function (seq30260){
var G__30261 = cljs.core.first.call(null,seq30260);
var seq30260__$1 = cljs.core.next.call(null,seq30260);
var G__30262 = cljs.core.first.call(null,seq30260__$1);
var seq30260__$2 = cljs.core.next.call(null,seq30260__$1);
var G__30263 = cljs.core.first.call(null,seq30260__$2);
var seq30260__$3 = cljs.core.next.call(null,seq30260__$2);
var G__30264 = cljs.core.first.call(null,seq30260__$3);
var seq30260__$4 = cljs.core.next.call(null,seq30260__$3);
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__30261,G__30262,G__30263,G__30264,seq30260__$4);
});

cljs.core$macros._LT__EQ_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._LT__EQ_.cljs$lang$macro = true;
cljs.core$macros._GT_ = (function cljs$core$macros$_GT_(var_args){
var args30271 = [];
var len__20732__auto___30279 = arguments.length;
var i__20733__auto___30280 = (0);
while(true){
if((i__20733__auto___30280 < len__20732__auto___30279)){
args30271.push((arguments[i__20733__auto___30280]));

var G__30281 = (i__20733__auto___30280 + (1));
i__20733__auto___30280 = G__30281;
continue;
} else {
}
break;
}

var G__30278 = args30271.length;
switch (G__30278) {
case 3:
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__20751__auto__ = (new cljs.core.IndexedSeq(args30271.slice((4)),(0),null));
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__20751__auto__);

}
});

cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__20461__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__20461__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto____$1);
})(),x__20461__auto__);
})(),"(~{} > ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros",">","cljs.core$macros/>",1703297853,null)),(function (){var x__20461__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros",">","cljs.core$macros/>",1703297853,null)),(function (){var x__20461__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),more)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
});

cljs.core$macros._GT_.cljs$lang$applyTo = (function (seq30272){
var G__30273 = cljs.core.first.call(null,seq30272);
var seq30272__$1 = cljs.core.next.call(null,seq30272);
var G__30274 = cljs.core.first.call(null,seq30272__$1);
var seq30272__$2 = cljs.core.next.call(null,seq30272__$1);
var G__30275 = cljs.core.first.call(null,seq30272__$2);
var seq30272__$3 = cljs.core.next.call(null,seq30272__$2);
var G__30276 = cljs.core.first.call(null,seq30272__$3);
var seq30272__$4 = cljs.core.next.call(null,seq30272__$3);
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$variadic(G__30273,G__30274,G__30275,G__30276,seq30272__$4);
});

cljs.core$macros._GT_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._GT_.cljs$lang$macro = true;
cljs.core$macros._GT__EQ_ = (function cljs$core$macros$_GT__EQ_(var_args){
var args30283 = [];
var len__20732__auto___30291 = arguments.length;
var i__20733__auto___30292 = (0);
while(true){
if((i__20733__auto___30292 < len__20732__auto___30291)){
args30283.push((arguments[i__20733__auto___30292]));

var G__30293 = (i__20733__auto___30292 + (1));
i__20733__auto___30292 = G__30293;
continue;
} else {
}
break;
}

var G__30290 = args30283.length;
switch (G__30290) {
case 3:
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__20751__auto__ = (new cljs.core.IndexedSeq(args30283.slice((4)),(0),null));
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__20751__auto__);

}
});

cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__20461__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__20461__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto____$1);
})(),x__20461__auto__);
})(),"(~{} >= ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros",">=","cljs.core$macros/>=",527849062,null)),(function (){var x__20461__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros",">=","cljs.core$macros/>=",527849062,null)),(function (){var x__20461__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),more)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
});

cljs.core$macros._GT__EQ_.cljs$lang$applyTo = (function (seq30284){
var G__30285 = cljs.core.first.call(null,seq30284);
var seq30284__$1 = cljs.core.next.call(null,seq30284);
var G__30286 = cljs.core.first.call(null,seq30284__$1);
var seq30284__$2 = cljs.core.next.call(null,seq30284__$1);
var G__30287 = cljs.core.first.call(null,seq30284__$2);
var seq30284__$3 = cljs.core.next.call(null,seq30284__$2);
var G__30288 = cljs.core.first.call(null,seq30284__$3);
var seq30284__$4 = cljs.core.next.call(null,seq30284__$3);
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__30285,G__30286,G__30287,G__30288,seq30284__$4);
});

cljs.core$macros._GT__EQ_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._GT__EQ_.cljs$lang$macro = true;
cljs.core$macros._EQ__EQ_ = (function cljs$core$macros$_EQ__EQ_(var_args){
var args30295 = [];
var len__20732__auto___30303 = arguments.length;
var i__20733__auto___30304 = (0);
while(true){
if((i__20733__auto___30304 < len__20732__auto___30303)){
args30295.push((arguments[i__20733__auto___30304]));

var G__30305 = (i__20733__auto___30304 + (1));
i__20733__auto___30304 = G__30305;
continue;
} else {
}
break;
}

var G__30302 = args30295.length;
switch (G__30302) {
case 3:
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__20751__auto__ = (new cljs.core.IndexedSeq(args30295.slice((4)),(0),null));
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__20751__auto__);

}
});

cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__20461__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__20461__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto____$1);
})(),x__20461__auto__);
})(),"(~{} === ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","==","cljs.core$macros/==",-818551413,null)),(function (){var x__20461__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","==","cljs.core$macros/==",-818551413,null)),(function (){var x__20461__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),more)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
});

cljs.core$macros._EQ__EQ_.cljs$lang$applyTo = (function (seq30296){
var G__30297 = cljs.core.first.call(null,seq30296);
var seq30296__$1 = cljs.core.next.call(null,seq30296);
var G__30298 = cljs.core.first.call(null,seq30296__$1);
var seq30296__$2 = cljs.core.next.call(null,seq30296__$1);
var G__30299 = cljs.core.first.call(null,seq30296__$2);
var seq30296__$3 = cljs.core.next.call(null,seq30296__$2);
var G__30300 = cljs.core.first.call(null,seq30296__$3);
var seq30296__$4 = cljs.core.next.call(null,seq30296__$3);
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__30297,G__30298,G__30299,G__30300,seq30296__$4);
});

cljs.core$macros._EQ__EQ_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._EQ__EQ_.cljs$lang$macro = true;
cljs.core$macros.dec = (function cljs$core$macros$dec(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__20461__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)))));
});

cljs.core$macros.dec.cljs$lang$macro = true;
cljs.core$macros.inc = (function cljs$core$macros$inc(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),(function (){var x__20461__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)))));
});

cljs.core$macros.inc.cljs$lang$macro = true;
cljs.core$macros.zero_QMARK_ = (function cljs$core$macros$zero_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","==","cljs.core$macros/==",-818551413,null)),(function (){var x__20461__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)))));
});

cljs.core$macros.zero_QMARK_.cljs$lang$macro = true;
cljs.core$macros.pos_QMARK_ = (function cljs$core$macros$pos_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros",">","cljs.core$macros/>",1703297853,null)),(function (){var x__20461__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)))));
});

cljs.core$macros.pos_QMARK_.cljs$lang$macro = true;
cljs.core$macros.neg_QMARK_ = (function cljs$core$macros$neg_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__20461__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)))));
});

cljs.core$macros.neg_QMARK_.cljs$lang$macro = true;
cljs.core$macros.max = (function cljs$core$macros$max(var_args){
var args30309 = [];
var len__20732__auto___30317 = arguments.length;
var i__20733__auto___30318 = (0);
while(true){
if((i__20733__auto___30318 < len__20732__auto___30317)){
args30309.push((arguments[i__20733__auto___30318]));

var G__30319 = (i__20733__auto___30318 + (1));
i__20733__auto___30318 = G__30319;
continue;
} else {
}
break;
}

var G__30316 = args30309.length;
switch (G__30316) {
case 3:
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__20751__auto__ = (new cljs.core.IndexedSeq(args30309.slice((4)),(0),null));
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__20751__auto__);

}
});

cljs.core$macros.max.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.max.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__20461__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__30307__auto__","x__30307__auto__",1370278580,null)),(function (){var x__20461__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__30308__auto__","y__30308__auto__",1784413314,null)),(function (){var x__20461__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"((~{} > ~{}) ? ~{} : ~{})"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__30307__auto__","x__30307__auto__",1370278580,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__30308__auto__","y__30308__auto__",1784413314,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__30307__auto__","x__30307__auto__",1370278580,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__30308__auto__","y__30308__auto__",1784413314,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
});

cljs.core$macros.max.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","max","cljs.core$macros/max",1176150699,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","max","cljs.core$macros/max",1176150699,null)),(function (){var x__20461__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),more)));
});

cljs.core$macros.max.cljs$lang$applyTo = (function (seq30310){
var G__30311 = cljs.core.first.call(null,seq30310);
var seq30310__$1 = cljs.core.next.call(null,seq30310);
var G__30312 = cljs.core.first.call(null,seq30310__$1);
var seq30310__$2 = cljs.core.next.call(null,seq30310__$1);
var G__30313 = cljs.core.first.call(null,seq30310__$2);
var seq30310__$3 = cljs.core.next.call(null,seq30310__$2);
var G__30314 = cljs.core.first.call(null,seq30310__$3);
var seq30310__$4 = cljs.core.next.call(null,seq30310__$3);
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$variadic(G__30311,G__30312,G__30313,G__30314,seq30310__$4);
});

cljs.core$macros.max.cljs$lang$maxFixedArity = (4);


cljs.core$macros.max.cljs$lang$macro = true;
cljs.core$macros.min = (function cljs$core$macros$min(var_args){
var args30323 = [];
var len__20732__auto___30331 = arguments.length;
var i__20733__auto___30332 = (0);
while(true){
if((i__20733__auto___30332 < len__20732__auto___30331)){
args30323.push((arguments[i__20733__auto___30332]));

var G__30333 = (i__20733__auto___30332 + (1));
i__20733__auto___30332 = G__30333;
continue;
} else {
}
break;
}

var G__30330 = args30323.length;
switch (G__30330) {
case 3:
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__20751__auto__ = (new cljs.core.IndexedSeq(args30323.slice((4)),(0),null));
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__20751__auto__);

}
});

cljs.core$macros.min.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.min.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__20461__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__30321__auto__","x__30321__auto__",-569676584,null)),(function (){var x__20461__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__30322__auto__","y__30322__auto__",1399784293,null)),(function (){var x__20461__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"((~{} < ~{}) ? ~{} : ~{})"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__30321__auto__","x__30321__auto__",-569676584,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__30322__auto__","y__30322__auto__",1399784293,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__30321__auto__","x__30321__auto__",-569676584,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__30322__auto__","y__30322__auto__",1399784293,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
});

cljs.core$macros.min.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","min","cljs.core$macros/min",1499775161,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","min","cljs.core$macros/min",1499775161,null)),(function (){var x__20461__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),more)));
});

cljs.core$macros.min.cljs$lang$applyTo = (function (seq30324){
var G__30325 = cljs.core.first.call(null,seq30324);
var seq30324__$1 = cljs.core.next.call(null,seq30324);
var G__30326 = cljs.core.first.call(null,seq30324__$1);
var seq30324__$2 = cljs.core.next.call(null,seq30324__$1);
var G__30327 = cljs.core.first.call(null,seq30324__$2);
var seq30324__$3 = cljs.core.next.call(null,seq30324__$2);
var G__30328 = cljs.core.first.call(null,seq30324__$3);
var seq30324__$4 = cljs.core.next.call(null,seq30324__$3);
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$variadic(G__30325,G__30326,G__30327,G__30328,seq30324__$4);
});

cljs.core$macros.min.cljs$lang$maxFixedArity = (4);


cljs.core$macros.min.cljs$lang$macro = true;
cljs.core$macros.js_mod = (function cljs$core$macros$js_mod(_AMPERSAND_form,_AMPERSAND_env,num,div){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__20461__auto__ = num;
return cljs.core._conj.call(null,(function (){var x__20461__auto____$1 = div;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto____$1);
})(),x__20461__auto__);
})(),"(~{} % ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.js_mod.cljs$lang$macro = true;
cljs.core$macros.bit_not = (function cljs$core$macros$bit_not(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__20461__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),"(~ ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_not.cljs$lang$macro = true;
cljs.core$macros.bit_and = (function cljs$core$macros$bit_and(var_args){
var args30335 = [];
var len__20732__auto___30343 = arguments.length;
var i__20733__auto___30344 = (0);
while(true){
if((i__20733__auto___30344 < len__20732__auto___30343)){
args30335.push((arguments[i__20733__auto___30344]));

var G__30345 = (i__20733__auto___30344 + (1));
i__20733__auto___30344 = G__30345;
continue;
} else {
}
break;
}

var G__30342 = args30335.length;
switch (G__30342) {
case 4:
return cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__20751__auto__ = (new cljs.core.IndexedSeq(args30335.slice((4)),(0),null));
return cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__20751__auto__);

}
});

cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__20461__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__20461__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto____$1);
})(),x__20461__auto__);
})(),"(~{} & ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-and","cljs.core$macros/bit-and",-1069060797,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-and","cljs.core$macros/bit-and",-1069060797,null)),(function (){var x__20461__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),more)));
});

cljs.core$macros.bit_and.cljs$lang$applyTo = (function (seq30336){
var G__30337 = cljs.core.first.call(null,seq30336);
var seq30336__$1 = cljs.core.next.call(null,seq30336);
var G__30338 = cljs.core.first.call(null,seq30336__$1);
var seq30336__$2 = cljs.core.next.call(null,seq30336__$1);
var G__30339 = cljs.core.first.call(null,seq30336__$2);
var seq30336__$3 = cljs.core.next.call(null,seq30336__$2);
var G__30340 = cljs.core.first.call(null,seq30336__$3);
var seq30336__$4 = cljs.core.next.call(null,seq30336__$3);
return cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$variadic(G__30337,G__30338,G__30339,G__30340,seq30336__$4);
});

cljs.core$macros.bit_and.cljs$lang$maxFixedArity = (4);


cljs.core$macros.bit_and.cljs$lang$macro = true;
cljs.core$macros.unsafe_bit_and = (function cljs$core$macros$unsafe_bit_and(var_args){
var args30347 = [];
var len__20732__auto___30355 = arguments.length;
var i__20733__auto___30356 = (0);
while(true){
if((i__20733__auto___30356 < len__20732__auto___30355)){
args30347.push((arguments[i__20733__auto___30356]));

var G__30357 = (i__20733__auto___30356 + (1));
i__20733__auto___30356 = G__30357;
continue;
} else {
}
break;
}

var G__30354 = args30347.length;
switch (G__30354) {
case 4:
return cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__20751__auto__ = (new cljs.core.IndexedSeq(args30347.slice((4)),(0),null));
return cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__20751__auto__);

}
});

cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__20461__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__20461__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto____$1);
})(),x__20461__auto__);
})(),"(~{} & ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__20461__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),more)));
});

cljs.core$macros.unsafe_bit_and.cljs$lang$applyTo = (function (seq30348){
var G__30349 = cljs.core.first.call(null,seq30348);
var seq30348__$1 = cljs.core.next.call(null,seq30348);
var G__30350 = cljs.core.first.call(null,seq30348__$1);
var seq30348__$2 = cljs.core.next.call(null,seq30348__$1);
var G__30351 = cljs.core.first.call(null,seq30348__$2);
var seq30348__$3 = cljs.core.next.call(null,seq30348__$2);
var G__30352 = cljs.core.first.call(null,seq30348__$3);
var seq30348__$4 = cljs.core.next.call(null,seq30348__$3);
return cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$variadic(G__30349,G__30350,G__30351,G__30352,seq30348__$4);
});

cljs.core$macros.unsafe_bit_and.cljs$lang$maxFixedArity = (4);


cljs.core$macros.unsafe_bit_and.cljs$lang$macro = true;
cljs.core$macros.bit_or = (function cljs$core$macros$bit_or(var_args){
var args30359 = [];
var len__20732__auto___30367 = arguments.length;
var i__20733__auto___30368 = (0);
while(true){
if((i__20733__auto___30368 < len__20732__auto___30367)){
args30359.push((arguments[i__20733__auto___30368]));

var G__30369 = (i__20733__auto___30368 + (1));
i__20733__auto___30368 = G__30369;
continue;
} else {
}
break;
}

var G__30366 = args30359.length;
switch (G__30366) {
case 4:
return cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__20751__auto__ = (new cljs.core.IndexedSeq(args30359.slice((4)),(0),null));
return cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__20751__auto__);

}
});

cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__20461__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__20461__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto____$1);
})(),x__20461__auto__);
})(),"(~{} | ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-or","cljs.core$macros/bit-or",1463236165,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-or","cljs.core$macros/bit-or",1463236165,null)),(function (){var x__20461__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),more)));
});

cljs.core$macros.bit_or.cljs$lang$applyTo = (function (seq30360){
var G__30361 = cljs.core.first.call(null,seq30360);
var seq30360__$1 = cljs.core.next.call(null,seq30360);
var G__30362 = cljs.core.first.call(null,seq30360__$1);
var seq30360__$2 = cljs.core.next.call(null,seq30360__$1);
var G__30363 = cljs.core.first.call(null,seq30360__$2);
var seq30360__$3 = cljs.core.next.call(null,seq30360__$2);
var G__30364 = cljs.core.first.call(null,seq30360__$3);
var seq30360__$4 = cljs.core.next.call(null,seq30360__$3);
return cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$variadic(G__30361,G__30362,G__30363,G__30364,seq30360__$4);
});

cljs.core$macros.bit_or.cljs$lang$maxFixedArity = (4);


cljs.core$macros.bit_or.cljs$lang$macro = true;
cljs.core$macros.int$ = (function cljs$core$macros$int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-or","cljs.core$macros/bit-or",1463236165,null)),(function (){var x__20461__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)))));
});

cljs.core$macros.int$.cljs$lang$macro = true;
cljs.core$macros.bit_xor = (function cljs$core$macros$bit_xor(var_args){
var args30371 = [];
var len__20732__auto___30379 = arguments.length;
var i__20733__auto___30380 = (0);
while(true){
if((i__20733__auto___30380 < len__20732__auto___30379)){
args30371.push((arguments[i__20733__auto___30380]));

var G__30381 = (i__20733__auto___30380 + (1));
i__20733__auto___30380 = G__30381;
continue;
} else {
}
break;
}

var G__30378 = args30371.length;
switch (G__30378) {
case 4:
return cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__20751__auto__ = (new cljs.core.IndexedSeq(args30371.slice((4)),(0),null));
return cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__20751__auto__);

}
});

cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__20461__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__20461__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto____$1);
})(),x__20461__auto__);
})(),"(~{} ^ ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-xor","cljs.core$macros/bit-xor",1284619191,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-xor","cljs.core$macros/bit-xor",1284619191,null)),(function (){var x__20461__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),more)));
});

cljs.core$macros.bit_xor.cljs$lang$applyTo = (function (seq30372){
var G__30373 = cljs.core.first.call(null,seq30372);
var seq30372__$1 = cljs.core.next.call(null,seq30372);
var G__30374 = cljs.core.first.call(null,seq30372__$1);
var seq30372__$2 = cljs.core.next.call(null,seq30372__$1);
var G__30375 = cljs.core.first.call(null,seq30372__$2);
var seq30372__$3 = cljs.core.next.call(null,seq30372__$2);
var G__30376 = cljs.core.first.call(null,seq30372__$3);
var seq30372__$4 = cljs.core.next.call(null,seq30372__$3);
return cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$variadic(G__30373,G__30374,G__30375,G__30376,seq30372__$4);
});

cljs.core$macros.bit_xor.cljs$lang$maxFixedArity = (4);


cljs.core$macros.bit_xor.cljs$lang$macro = true;
cljs.core$macros.bit_and_not = (function cljs$core$macros$bit_and_not(var_args){
var args30383 = [];
var len__20732__auto___30391 = arguments.length;
var i__20733__auto___30392 = (0);
while(true){
if((i__20733__auto___30392 < len__20732__auto___30391)){
args30383.push((arguments[i__20733__auto___30392]));

var G__30393 = (i__20733__auto___30392 + (1));
i__20733__auto___30392 = G__30393;
continue;
} else {
}
break;
}

var G__30390 = args30383.length;
switch (G__30390) {
case 4:
return cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__20751__auto__ = (new cljs.core.IndexedSeq(args30383.slice((4)),(0),null));
return cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__20751__auto__);

}
});

cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__20461__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__20461__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto____$1);
})(),x__20461__auto__);
})(),"(~{} & ~~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-and-not","cljs.core$macros/bit-and-not",-537076037,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-and-not","cljs.core$macros/bit-and-not",-537076037,null)),(function (){var x__20461__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),more)));
});

cljs.core$macros.bit_and_not.cljs$lang$applyTo = (function (seq30384){
var G__30385 = cljs.core.first.call(null,seq30384);
var seq30384__$1 = cljs.core.next.call(null,seq30384);
var G__30386 = cljs.core.first.call(null,seq30384__$1);
var seq30384__$2 = cljs.core.next.call(null,seq30384__$1);
var G__30387 = cljs.core.first.call(null,seq30384__$2);
var seq30384__$3 = cljs.core.next.call(null,seq30384__$2);
var G__30388 = cljs.core.first.call(null,seq30384__$3);
var seq30384__$4 = cljs.core.next.call(null,seq30384__$3);
return cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$variadic(G__30385,G__30386,G__30387,G__30388,seq30384__$4);
});

cljs.core$macros.bit_and_not.cljs$lang$maxFixedArity = (4);


cljs.core$macros.bit_and_not.cljs$lang$macro = true;
cljs.core$macros.bit_clear = (function cljs$core$macros$bit_clear(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__20461__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__20461__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto____$1);
})(),x__20461__auto__);
})(),"(~{} & ~(1 << ~{}))"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_clear.cljs$lang$macro = true;
cljs.core$macros.bit_flip = (function cljs$core$macros$bit_flip(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__20461__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__20461__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto____$1);
})(),x__20461__auto__);
})(),"(~{} ^ (1 << ~{}))"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_flip.cljs$lang$macro = true;
cljs.core$macros.bit_test = (function cljs$core$macros$bit_test(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__20461__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__20461__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto____$1);
})(),x__20461__auto__);
})(),"((~{} & (1 << ~{})) != 0)"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.bit_test.cljs$lang$macro = true;
cljs.core$macros.bit_shift_left = (function cljs$core$macros$bit_shift_left(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__20461__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__20461__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto____$1);
})(),x__20461__auto__);
})(),"(~{} << ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_shift_left.cljs$lang$macro = true;
cljs.core$macros.bit_shift_right = (function cljs$core$macros$bit_shift_right(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__20461__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__20461__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto____$1);
})(),x__20461__auto__);
})(),"(~{} >> ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_shift_right.cljs$lang$macro = true;
cljs.core$macros.bit_shift_right_zero_fill = (function cljs$core$macros$bit_shift_right_zero_fill(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__20461__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__20461__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto____$1);
})(),x__20461__auto__);
})(),"(~{} >>> ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_shift_right_zero_fill.cljs$lang$macro = true;
cljs.core$macros.unsigned_bit_shift_right = (function cljs$core$macros$unsigned_bit_shift_right(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__20461__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__20461__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto____$1);
})(),x__20461__auto__);
})(),"(~{} >>> ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.unsigned_bit_shift_right.cljs$lang$macro = true;
cljs.core$macros.bit_set = (function cljs$core$macros$bit_set(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__20461__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__20461__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto____$1);
})(),x__20461__auto__);
})(),"(~{} | (1 << ~{}))"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_set.cljs$lang$macro = true;
cljs.core$macros.mask = (function cljs$core$macros$mask(_AMPERSAND_form,_AMPERSAND_env,hash,shift){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__20461__auto__ = hash;
return cljs.core._conj.call(null,(function (){var x__20461__auto____$1 = shift;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto____$1);
})(),x__20461__auto__);
})(),"((~{} >>> ~{}) & 0x01f)"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.mask.cljs$lang$macro = true;
cljs.core$macros.bitpos = (function cljs$core$macros$bitpos(_AMPERSAND_form,_AMPERSAND_env,hash,shift){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","mask","cljs.core$macros/mask",1575319768,null)),(function (){var x__20461__auto__ = hash;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = shift;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),"(1 << ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bitpos.cljs$lang$macro = true;
cljs.core$macros.caching_hash = (function cljs$core$macros$caching_hash(_AMPERSAND_form,_AMPERSAND_env,coll,hash_fn,hash_key){
if((hash_key instanceof cljs.core.Symbol)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("hash-key is substituted twice"),cljs.core.str("\n"),cljs.core.str("(clojure.core/symbol? hash-key)")].join('')));
}

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__20461__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__30395__auto__","h__30395__auto__",-924592447,null)),(function (){var x__20461__auto__ = hash_key;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__30395__auto__","h__30395__auto__",-924592447,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__30395__auto__","h__30395__auto__",-924592447,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__20461__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__30395__auto__","h__30395__auto__",-924592447,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__20461__auto__ = hash_fn;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = coll;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__20461__auto__ = hash_key;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__30395__auto__","h__30395__auto__",-924592447,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__30395__auto__","h__30395__auto__",-924592447,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
});

cljs.core$macros.caching_hash.cljs$lang$macro = true;
cljs.core$macros.do_curried = (function cljs$core$macros$do_curried(name,doc,meta,args,body){
var cargs = cljs.core.vec.call(null,cljs.core.butlast.call(null,args));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null)),(function (){var x__20461__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = doc;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = meta;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__20461__auto__ = cargs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__20461__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__30396__auto__","x__30396__auto__",-308462933,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__20461__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),cargs,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__30396__auto__","x__30396__auto__",-308462933,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__20461__auto__ = args;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
});
/**
 * Builds another arity of the fn that returns a fn awaiting the last
 *   param
 */
cljs.core$macros.defcurried = (function cljs$core$macros$defcurried(var_args){
var args__20739__auto__ = [];
var len__20732__auto___30404 = arguments.length;
var i__20733__auto___30405 = (0);
while(true){
if((i__20733__auto___30405 < len__20732__auto___30404)){
args__20739__auto__.push((arguments[i__20733__auto___30405]));

var G__30406 = (i__20733__auto___30405 + (1));
i__20733__auto___30405 = G__30406;
continue;
} else {
}
break;
}

var argseq__20740__auto__ = ((((6) < args__20739__auto__.length))?(new cljs.core.IndexedSeq(args__20739__auto__.slice((6)),(0),null)):null);
return cljs.core$macros.defcurried.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),argseq__20740__auto__);
});

cljs.core$macros.defcurried.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,doc,meta,args,body){
return cljs.core$macros.do_curried.call(null,name,doc,meta,args,body);
});

cljs.core$macros.defcurried.cljs$lang$maxFixedArity = (6);

cljs.core$macros.defcurried.cljs$lang$applyTo = (function (seq30397){
var G__30398 = cljs.core.first.call(null,seq30397);
var seq30397__$1 = cljs.core.next.call(null,seq30397);
var G__30399 = cljs.core.first.call(null,seq30397__$1);
var seq30397__$2 = cljs.core.next.call(null,seq30397__$1);
var G__30400 = cljs.core.first.call(null,seq30397__$2);
var seq30397__$3 = cljs.core.next.call(null,seq30397__$2);
var G__30401 = cljs.core.first.call(null,seq30397__$3);
var seq30397__$4 = cljs.core.next.call(null,seq30397__$3);
var G__30402 = cljs.core.first.call(null,seq30397__$4);
var seq30397__$5 = cljs.core.next.call(null,seq30397__$4);
var G__30403 = cljs.core.first.call(null,seq30397__$5);
var seq30397__$6 = cljs.core.next.call(null,seq30397__$5);
return cljs.core$macros.defcurried.cljs$core$IFn$_invoke$arity$variadic(G__30398,G__30399,G__30400,G__30401,G__30402,G__30403,seq30397__$6);
});


cljs.core$macros.defcurried.cljs$lang$macro = true;
cljs.core$macros.do_rfn = (function cljs$core$macros$do_rfn(f1,k,fkv){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__20461__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__20461__auto__ = f1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = clojure.walk.postwalk.call(null,(function (p1__30407_SHARP_){
if(cljs.core.sequential_QMARK_.call(null,p1__30407_SHARP_)){
return ((cljs.core.vector_QMARK_.call(null,p1__30407_SHARP_))?cljs.core.vec:cljs.core.identity).call(null,cljs.core.remove.call(null,cljs.core.PersistentHashSet.fromArray([k], true),p1__30407_SHARP_));
} else {
return p1__30407_SHARP_;
}
}),fkv);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = fkv;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
});
/**
 * Builds 3-arity reducing fn given names of wrapped fn and key, and k/v impl.
 */
cljs.core$macros.rfn = (function cljs$core$macros$rfn(_AMPERSAND_form,_AMPERSAND_env,p__30408,fkv){
var vec__30412 = p__30408;
var f1 = cljs.core.nth.call(null,vec__30412,(0),null);
var k = cljs.core.nth.call(null,vec__30412,(1),null);
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
var args__20739__auto__ = [];
var len__20732__auto___30418 = arguments.length;
var i__20733__auto___30419 = (0);
while(true){
if((i__20733__auto___30419 < len__20732__auto___30418)){
args__20739__auto__.push((arguments[i__20733__auto___30419]));

var G__30420 = (i__20733__auto___30419 + (1));
i__20733__auto___30419 = G__30420;
continue;
} else {
}
break;
}

var argseq__20740__auto__ = ((((2) < args__20739__auto__.length))?(new cljs.core.IndexedSeq(args__20739__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.reify.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__20740__auto__);
});

cljs.core$macros.reify.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,impls){
var t = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,[cljs.core.str("t_"),cljs.core.str(clojure.string.replace.call(null,[cljs.core.str(cljs.core.munge.call(null,cljs.analyzer._STAR_cljs_ns_STAR_))].join(''),".","$"))].join('')),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"anonymous","anonymous",447897231),true], null));
var meta_sym = cljs.core.gensym.call(null,"meta");
var this_sym = cljs.core.gensym.call(null,"_");
var locals = cljs.core.keys.call(null,new cljs.core.Keyword(null,"locals","locals",535295783).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
var ns = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
var munge = cljs.compiler.munge;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-not","cljs.core$macros/when-not",-764302244,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","exists?","cljs.core$macros/exists?",-1828590389,null)),(function (){var x__20461__auto__ = cljs.core.symbol.call(null,[cljs.core.str(ns)].join(''),[cljs.core.str(t)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","deftype","cljs.core$macros/deftype",1799045688,null)),(function (){var x__20461__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,locals,(function (){var x__20461__auto__ = meta_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","IWithMeta","cljs.core/IWithMeta",-1981666051,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-with-meta","-with-meta",-1610713823,null)),(function (){var x__20461__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__20461__auto__ = this_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = meta_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__20461__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),locals,(function (){var x__20461__auto__ = meta_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","IMeta","cljs.core/IMeta",-1459057517,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-meta","-meta",494863156,null)),(function (){var x__20461__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__20461__auto__ = this_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = meta_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),impls)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__20461__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),locals,(function (){var x__20461__auto__ = cljs.analyzer.elide_reader_meta.call(null,cljs.core.meta.call(null,_AMPERSAND_form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
});

cljs.core$macros.reify.cljs$lang$maxFixedArity = (2);

cljs.core$macros.reify.cljs$lang$applyTo = (function (seq30415){
var G__30416 = cljs.core.first.call(null,seq30415);
var seq30415__$1 = cljs.core.next.call(null,seq30415);
var G__30417 = cljs.core.first.call(null,seq30415__$1);
var seq30415__$2 = cljs.core.next.call(null,seq30415__$1);
return cljs.core$macros.reify.cljs$core$IFn$_invoke$arity$variadic(G__30416,G__30417,seq30415__$2);
});


cljs.core$macros.reify.cljs$lang$macro = true;
/**
 * Identical to reify but mutates its first argument.
 */
cljs.core$macros.specify_BANG_ = (function cljs$core$macros$specify_BANG_(var_args){
var args__20739__auto__ = [];
var len__20732__auto___30425 = arguments.length;
var i__20733__auto___30426 = (0);
while(true){
if((i__20733__auto___30426 < len__20732__auto___30425)){
args__20739__auto__.push((arguments[i__20733__auto___30426]));

var G__30427 = (i__20733__auto___30426 + (1));
i__20733__auto___30426 = G__30427;
continue;
} else {
}
break;
}

var argseq__20740__auto__ = ((((3) < args__20739__auto__.length))?(new cljs.core.IndexedSeq(args__20739__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.specify_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__20740__auto__);
});

cljs.core$macros.specify_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,impls){
var x = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"x"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"extend","extend",1836484006),new cljs.core.Keyword(null,"instance","instance",-2121349050)], null));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__20461__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__20461__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","extend-type","cljs.core$macros/extend-type",1713295201,null)),(function (){var x__20461__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),impls)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
});

cljs.core$macros.specify_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.specify_BANG_.cljs$lang$applyTo = (function (seq30421){
var G__30422 = cljs.core.first.call(null,seq30421);
var seq30421__$1 = cljs.core.next.call(null,seq30421);
var G__30423 = cljs.core.first.call(null,seq30421__$1);
var seq30421__$2 = cljs.core.next.call(null,seq30421__$1);
var G__30424 = cljs.core.first.call(null,seq30421__$2);
var seq30421__$3 = cljs.core.next.call(null,seq30421__$2);
return cljs.core$macros.specify_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__30422,G__30423,G__30424,seq30421__$3);
});


cljs.core$macros.specify_BANG_.cljs$lang$macro = true;
/**
 * Identical to specify! but does not mutate its first argument. The first
 *   argument must be an ICloneable instance.
 */
cljs.core$macros.specify = (function cljs$core$macros$specify(var_args){
var args__20739__auto__ = [];
var len__20732__auto___30432 = arguments.length;
var i__20733__auto___30433 = (0);
while(true){
if((i__20733__auto___30433 < len__20732__auto___30432)){
args__20739__auto__.push((arguments[i__20733__auto___30433]));

var G__30434 = (i__20733__auto___30433 + (1));
i__20733__auto___30433 = G__30434;
continue;
} else {
}
break;
}

var argseq__20740__auto__ = ((((3) < args__20739__auto__.length))?(new cljs.core.IndexedSeq(args__20739__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.specify.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__20740__auto__);
});

cljs.core$macros.specify.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,impls){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","specify!","cljs.core/specify!",-585401629,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","clone","cljs.core/clone",1417120092,null)),(function (){var x__20461__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),impls)));
});

cljs.core$macros.specify.cljs$lang$maxFixedArity = (3);

cljs.core$macros.specify.cljs$lang$applyTo = (function (seq30428){
var G__30429 = cljs.core.first.call(null,seq30428);
var seq30428__$1 = cljs.core.next.call(null,seq30428);
var G__30430 = cljs.core.first.call(null,seq30428__$1);
var seq30428__$2 = cljs.core.next.call(null,seq30428__$1);
var G__30431 = cljs.core.first.call(null,seq30428__$2);
var seq30428__$3 = cljs.core.next.call(null,seq30428__$2);
return cljs.core$macros.specify.cljs$core$IFn$_invoke$arity$variadic(G__30429,G__30430,G__30431,seq30428__$3);
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
var args__20739__auto__ = [];
var len__20732__auto___30439 = arguments.length;
var i__20733__auto___30440 = (0);
while(true){
if((i__20733__auto___30440 < len__20732__auto___30439)){
args__20739__auto__.push((arguments[i__20733__auto___30440]));

var G__30441 = (i__20733__auto___30440 + (1));
i__20733__auto___30440 = G__30441;
continue;
} else {
}
break;
}

var argseq__20740__auto__ = ((((3) < args__20739__auto__.length))?(new cljs.core.IndexedSeq(args__20739__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.this_as.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__20740__auto__);
});

cljs.core$macros.this_as.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__20461__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__20461__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-this","cljs.core$macros/js-this",353597180,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),body)));
});

cljs.core$macros.this_as.cljs$lang$maxFixedArity = (3);

cljs.core$macros.this_as.cljs$lang$applyTo = (function (seq30435){
var G__30436 = cljs.core.first.call(null,seq30435);
var seq30435__$1 = cljs.core.next.call(null,seq30435);
var G__30437 = cljs.core.first.call(null,seq30435__$1);
var seq30435__$2 = cljs.core.next.call(null,seq30435__$1);
var G__30438 = cljs.core.first.call(null,seq30435__$2);
var seq30435__$3 = cljs.core.next.call(null,seq30435__$2);
return cljs.core$macros.this_as.cljs$core$IFn$_invoke$arity$variadic(G__30436,G__30437,G__30438,seq30435__$3);
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

if(cljs.core.truth_((function (){var and__19612__auto__ = new cljs.core.Keyword(null,"protocol-deprecated","protocol-deprecated",103233497).cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_warnings_STAR_);
if(cljs.core.truth_(and__19612__auto__)){
var and__19612__auto____$1 = new cljs.core.Keyword(null,"deprecated","deprecated",1498275348).cljs$core$IFn$_invoke$arity$1(var$);
if(cljs.core.truth_(and__19612__auto____$1)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"deprecation-nowarn","deprecation-nowarn",-1762828044).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,p)));
} else {
return and__19612__auto____$1;
}
} else {
return and__19612__auto__;
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
var G__30442 = cljs.core.assoc.call(null,ret,cljs.core.first.call(null,s),cljs.core.take_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,s)));
var G__30443 = cljs.core.drop_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,s));
ret = G__30442;
s = G__30443;
continue;
} else {
return ret;
}
break;
}
});
cljs.core$macros.base_assign_impls = (function cljs$core$macros$base_assign_impls(env,resolve,tsym,type,p__30444){
var vec__30452 = p__30444;
var p = cljs.core.nth.call(null,vec__30452,(0),null);
var sigs = cljs.core.nth.call(null,vec__30452,(1),null);
cljs.core$macros.warn_and_update_protocol.call(null,p,tsym,env);

var psym = resolve.call(null,p);
var pfn_prefix = cljs.core.subs.call(null,[cljs.core.str(psym)].join(''),(0),([cljs.core.str(psym)].join('').indexOf("/") + (1)));
return cljs.core.cons.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aset","cljs.core$macros/aset",-693176374,null)),(function (){var x__20461__auto__ = psym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = type;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true)))),cljs.core.map.call(null,((function (psym,pfn_prefix,vec__30452,p,sigs){
return (function (p__30455){
var vec__30456 = p__30455;
var seq__30457 = cljs.core.seq.call(null,vec__30456);
var first__30458 = cljs.core.first.call(null,seq__30457);
var seq__30457__$1 = cljs.core.next.call(null,seq__30457);
var f = first__30458;
var meths = seq__30457__$1;
var form = vec__30456;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aset","cljs.core$macros/aset",-693176374,null)),(function (){var x__20461__auto__ = cljs.core.symbol.call(null,[cljs.core.str(pfn_prefix),cljs.core.str(f)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = type;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),meths))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
});})(psym,pfn_prefix,vec__30452,p,sigs))
,sigs));
});
if(typeof cljs.core$macros.extend_prefix !== 'undefined'){
} else {
cljs.core$macros.extend_prefix = (function (){var method_table__20552__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__20553__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__20554__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__20555__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__20556__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.core$macros","extend-prefix"),((function (method_table__20552__auto__,prefer_table__20553__auto__,method_cache__20554__auto__,cached_hierarchy__20555__auto__,hierarchy__20556__auto__){
return (function (tsym,sym){
return new cljs.core.Keyword(null,"extend","extend",1836484006).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,tsym));
});})(method_table__20552__auto__,prefer_table__20553__auto__,method_cache__20554__auto__,cached_hierarchy__20555__auto__,hierarchy__20556__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__20556__auto__,method_table__20552__auto__,prefer_table__20553__auto__,method_cache__20554__auto__,cached_hierarchy__20555__auto__));
})();
}
cljs.core._add_method.call(null,cljs.core$macros.extend_prefix,new cljs.core.Keyword(null,"instance","instance",-2121349050),(function (tsym,sym){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"..","..",-300507420,null)),(function (){var x__20461__auto__ = tsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core$macros.to_property.call(null,sym);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
}));
cljs.core._add_method.call(null,cljs.core$macros.extend_prefix,new cljs.core.Keyword(null,"default","default",-1987822328),(function (tsym,sym){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"..","..",-300507420,null)),(function (){var x__20461__auto__ = tsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-prototype","-prototype",-450831903,null)),(function (){var x__20461__auto__ = cljs.core$macros.to_property.call(null,sym);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
}));
cljs.core$macros.adapt_obj_params = (function cljs$core$macros$adapt_obj_params(type,p__30459){
var vec__30466 = p__30459;
var seq__30467 = cljs.core.seq.call(null,vec__30466);
var first__30468 = cljs.core.first.call(null,seq__30467);
var seq__30467__$1 = cljs.core.next.call(null,seq__30467);
var vec__30469 = first__30468;
var seq__30470 = cljs.core.seq.call(null,vec__30469);
var first__30471 = cljs.core.first.call(null,seq__30470);
var seq__30470__$1 = cljs.core.next.call(null,seq__30470);
var this$ = first__30471;
var args = seq__30470__$1;
var sig = vec__30469;
var body = seq__30467__$1;
var x__20461__auto__ = cljs.core.vec.call(null,args);
return cljs.core._conj.call(null,(function (){var x__20461__auto____$1 = cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"this-as","this-as",-848995740,null),cljs.core.vary_meta.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),type),body);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto____$1);
})(),x__20461__auto__);
});
cljs.core$macros.adapt_ifn_params = (function cljs$core$macros$adapt_ifn_params(type,p__30472){
var vec__30479 = p__30472;
var seq__30480 = cljs.core.seq.call(null,vec__30479);
var first__30481 = cljs.core.first.call(null,seq__30480);
var seq__30480__$1 = cljs.core.next.call(null,seq__30480);
var vec__30482 = first__30481;
var seq__30483 = cljs.core.seq.call(null,vec__30482);
var first__30484 = cljs.core.first.call(null,seq__30483);
var seq__30483__$1 = cljs.core.next.call(null,seq__30483);
var this$ = first__30484;
var args = seq__30483__$1;
var sig = vec__30482;
var body = seq__30480__$1;
var self_sym = cljs.core.with_meta.call(null,new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),type], null));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__20461__auto__ = cljs.core.vec.call(null,cljs.core.cons.call(null,self_sym,args));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null)),(function (){var x__20461__auto__ = self_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__20461__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__20461__auto__ = this$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = self_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
});
cljs.core$macros.adapt_ifn_invoke_params = (function cljs$core$macros$adapt_ifn_invoke_params(type,p__30485){
var vec__30492 = p__30485;
var seq__30493 = cljs.core.seq.call(null,vec__30492);
var first__30494 = cljs.core.first.call(null,seq__30493);
var seq__30493__$1 = cljs.core.next.call(null,seq__30493);
var vec__30495 = first__30494;
var seq__30496 = cljs.core.seq.call(null,vec__30495);
var first__30497 = cljs.core.first.call(null,seq__30496);
var seq__30496__$1 = cljs.core.next.call(null,seq__30496);
var this$ = first__30497;
var args = seq__30496__$1;
var sig = vec__30495;
var body = seq__30493__$1;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__20461__auto__ = cljs.core.vec.call(null,args);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null)),(function (){var x__20461__auto__ = cljs.core.vary_meta.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),type);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
});
cljs.core$macros.adapt_proto_params = (function cljs$core$macros$adapt_proto_params(type,p__30498){
var vec__30505 = p__30498;
var seq__30506 = cljs.core.seq.call(null,vec__30505);
var first__30507 = cljs.core.first.call(null,seq__30506);
var seq__30506__$1 = cljs.core.next.call(null,seq__30506);
var vec__30508 = first__30507;
var seq__30509 = cljs.core.seq.call(null,vec__30508);
var first__30510 = cljs.core.first.call(null,seq__30509);
var seq__30509__$1 = cljs.core.next.call(null,seq__30509);
var this$ = first__30510;
var args = seq__30509__$1;
var sig = vec__30508;
var body = seq__30506__$1;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__20461__auto__ = cljs.core.vec.call(null,cljs.core.cons.call(null,cljs.core.vary_meta.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),type),args));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null)),(function (){var x__20461__auto__ = this$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
});
cljs.core$macros.add_obj_methods = (function cljs$core$macros$add_obj_methods(type,type_sym,sigs){
return cljs.core.map.call(null,(function (p__30519){
var vec__30520 = p__30519;
var seq__30521 = cljs.core.seq.call(null,vec__30520);
var first__30522 = cljs.core.first.call(null,seq__30521);
var seq__30521__$1 = cljs.core.next.call(null,seq__30521);
var f = first__30522;
var meths = seq__30521__$1;
var form = vec__30520;
var vec__30523 = ((cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,meths)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rest.call(null,form)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,meths], null));
var f__$1 = cljs.core.nth.call(null,vec__30523,(0),null);
var meths__$1 = cljs.core.nth.call(null,vec__30523,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__20461__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,f__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),cljs.core.map.call(null,((function (vec__30523,f__$1,meths__$1,vec__30520,seq__30521,first__30522,seq__30521__$1,f,meths,form){
return (function (p1__30511_SHARP_){
return cljs.core$macros.adapt_obj_params.call(null,type,p1__30511_SHARP_);
});})(vec__30523,f__$1,meths__$1,vec__30520,seq__30521,first__30522,seq__30521__$1,f,meths,form))
,meths__$1)))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
}),sigs);
});
cljs.core$macros.ifn_invoke_methods = (function cljs$core$macros$ifn_invoke_methods(type,type_sym,p__30527){
var vec__30531 = p__30527;
var seq__30532 = cljs.core.seq.call(null,vec__30531);
var first__30533 = cljs.core.first.call(null,seq__30532);
var seq__30532__$1 = cljs.core.next.call(null,seq__30532);
var f = first__30533;
var meths = seq__30532__$1;
var form = vec__30531;
return cljs.core.map.call(null,((function (vec__30531,seq__30532,first__30533,seq__30532__$1,f,meths,form){
return (function (meth){
var arity = cljs.core.count.call(null,cljs.core.first.call(null,meth));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__20461__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,cljs.core.symbol.call(null,[cljs.core.str("cljs$core$IFn$_invoke$arity$"),cljs.core.str(arity)].join('')));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__20461__auto__ = meth;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})()))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
});})(vec__30531,seq__30532,first__30533,seq__30532__$1,f,meths,form))
,cljs.core.map.call(null,((function (vec__30531,seq__30532,first__30533,seq__30532__$1,f,meths,form){
return (function (p1__30526_SHARP_){
return cljs.core$macros.adapt_ifn_invoke_params.call(null,type,p1__30526_SHARP_);
});})(vec__30531,seq__30532,first__30533,seq__30532__$1,f,meths,form))
,meths));
});
cljs.core$macros.add_ifn_methods = (function cljs$core$macros$add_ifn_methods(type,type_sym,p__30535){
var vec__30539 = p__30535;
var seq__30540 = cljs.core.seq.call(null,vec__30539);
var first__30541 = cljs.core.first.call(null,seq__30540);
var seq__30540__$1 = cljs.core.next.call(null,seq__30540);
var f = first__30541;
var meths = seq__30540__$1;
var form = vec__30539;
var meths__$1 = cljs.core.map.call(null,((function (vec__30539,seq__30540,first__30541,seq__30540__$1,f,meths,form){
return (function (p1__30534_SHARP_){
return cljs.core$macros.adapt_ifn_params.call(null,type,p1__30534_SHARP_);
});})(vec__30539,seq__30540,first__30541,seq__30540__$1,f,meths,form))
,meths);
var this_sym = cljs.core.with_meta.call(null,new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),type], null));
var argsym = cljs.core.gensym.call(null,"args");
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__20461__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,new cljs.core.Symbol(null,"call","call",1120531661,null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),meths__$1))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})()))),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__20461__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,new cljs.core.Symbol(null,"apply","apply",-1334050276,null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__20461__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this_sym,argsym], null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null)),(function (){var x__20461__auto__ = this_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".apply",".apply",-1176201338,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-call",".-call",1760541695,null)),(function (){var x__20461__auto__ = this_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = this_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".concat",".concat",1180408684,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),(function (){var x__20461__auto__ = this_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","aclone","cljs.core/aclone",-758078968,null)),(function (){var x__20461__auto__ = argsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})()))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())))], null),cljs.core$macros.ifn_invoke_methods.call(null,type,type_sym,form));
});
cljs.core$macros.add_proto_methods_STAR_ = (function cljs$core$macros$add_proto_methods_STAR_(pprefix,type,type_sym,p__30542){
var vec__30550 = p__30542;
var seq__30551 = cljs.core.seq.call(null,vec__30550);
var first__30552 = cljs.core.first.call(null,seq__30551);
var seq__30551__$1 = cljs.core.next.call(null,seq__30551);
var f = first__30552;
var meths = seq__30551__$1;
var form = vec__30550;
var pf = [cljs.core.str(pprefix),cljs.core.str(cljs.core.name.call(null,f))].join('');
if(cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,meths))){
var meth = meths;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__20461__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,[cljs.core.str(pf),cljs.core.str("$arity$"),cljs.core.str(cljs.core.count.call(null,cljs.core.first.call(null,meth)))].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),cljs.core$macros.adapt_proto_params.call(null,type,meth)))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())))], null);
} else {
return cljs.core.map.call(null,((function (pf,vec__30550,seq__30551,first__30552,seq__30551__$1,f,meths,form){
return (function (p__30553){
var vec__30554 = p__30553;
var seq__30555 = cljs.core.seq.call(null,vec__30554);
var first__30556 = cljs.core.first.call(null,seq__30555);
var seq__30555__$1 = cljs.core.next.call(null,seq__30555);
var sig = first__30556;
var body = seq__30555__$1;
var meth = vec__30554;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__20461__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,[cljs.core.str(pf),cljs.core.str("$arity$"),cljs.core.str(cljs.core.count.call(null,sig))].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__20461__auto__ = cljs.core$macros.adapt_proto_params.call(null,type,meth);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})()))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
});})(pf,vec__30550,seq__30551,first__30552,seq__30551__$1,f,meths,form))
,meths);
}
});
cljs.core$macros.proto_assign_impls = (function cljs$core$macros$proto_assign_impls(env,resolve,type_sym,type,p__30557){
var vec__30561 = p__30557;
var p = cljs.core.nth.call(null,vec__30561,(0),null);
var sigs = cljs.core.nth.call(null,vec__30561,(1),null);
cljs.core$macros.warn_and_update_protocol.call(null,p,type,env);

var psym = resolve.call(null,p);
var pprefix = cljs.core$macros.protocol_prefix.call(null,psym);
var skip_flag = cljs.core.set.call(null,new cljs.core.Keyword(null,"skip-protocol-flag","skip-protocol-flag",-1426798630).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,type_sym)));
if(cljs.core._EQ_.call(null,p,new cljs.core.Symbol(null,"Object","Object",61210754,null))){
return cljs.core$macros.add_obj_methods.call(null,type,type_sym,sigs);
} else {
return cljs.core.concat.call(null,(cljs.core.truth_(skip_flag.call(null,psym))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__20461__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,pprefix);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PROTOCOL_SENTINEL","cljs.core/PROTOCOL_SENTINEL",210209696,null)))))], null)),cljs.core.mapcat.call(null,((function (psym,pprefix,skip_flag,vec__30561,p,sigs){
return (function (sig){
if(cljs.core._EQ_.call(null,psym,new cljs.core.Symbol("cljs.core","IFn","cljs.core/IFn",-920223129,null))){
return cljs.core$macros.add_ifn_methods.call(null,type,type_sym,sig);
} else {
return cljs.core$macros.add_proto_methods_STAR_.call(null,pprefix,type,type_sym,sig);
}
});})(psym,pprefix,skip_flag,vec__30561,p,sigs))
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
var vec__30567 = ((cljs.core.vector_QMARK_.call(null,cljs.core.second.call(null,method)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [__GT_name.call(null,method_name),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second.call(null,method)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [__GT_name.call(null,method_name),cljs.core.map.call(null,cljs.core.first,cljs.core.rest.call(null,method))], null));
var fname = cljs.core.nth.call(null,vec__30567,(0),null);
var sigs = cljs.core.nth.call(null,vec__30567,(1),null);
var decmeths = cljs.core.get.call(null,minfo,fname,new cljs.core.Keyword("cljs.core$macros","not-found","cljs.core$macros/not-found",-1226326556));
if(cljs.core._EQ_.call(null,decmeths,new cljs.core.Keyword("cljs.core$macros","not-found","cljs.core$macros/not-found",-1226326556))){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),env,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p,new cljs.core.Keyword(null,"fname","fname",1500291491),fname,new cljs.core.Keyword(null,"no-such-method","no-such-method",1087422840),true], null));
} else {
}

if(cljs.core.truth_(cljs.core.namespace.call(null,method_name))){
var method_var_30570 = cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),method_name,cljs.analyzer.confirm_var_exist_warning);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(var$),new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(method_var_30570))){
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

var G__30571 = cljs.core.next.call(null,sigs__$1);
var G__30572 = cljs.core.conj.call(null,seen,c);
sigs__$1 = G__30571;
seen = G__30572;
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

var seen_30579 = cljs.core.PersistentHashSet.EMPTY;
var methods_30580__$1 = methods$;
while(true){
if(cljs.core.seq.call(null,methods_30580__$1)){
var vec__30576_30581 = cljs.core.first.call(null,methods_30580__$1);
var fname_30582 = cljs.core.nth.call(null,vec__30576_30581,(0),null);
var method_30583 = vec__30576_30581;
if(cljs.core.contains_QMARK_.call(null,seen_30579,fname_30582)){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"extend-type-invalid-method-shape","extend-type-invalid-method-shape",1424103549),env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"protocol","protocol",652470118),proto,new cljs.core.Keyword(null,"method","method",55703592),fname_30582], null));
} else {
}

cljs.core$macros.validate_impl_sigs.call(null,env,proto,method_30583);

var G__30584 = cljs.core.conj.call(null,seen_30579,fname_30582);
var G__30585 = cljs.core.next.call(null,methods_30580__$1);
seen_30579 = G__30584;
methods_30580__$1 = G__30585;
continue;
} else {
}
break;
}

var G__30586 = cljs.core.conj.call(null,protos,proto);
var G__30587 = impls__$2;
protos = G__30586;
impls__$1 = G__30587;
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
var args__20739__auto__ = [];
var len__20732__auto___30596 = arguments.length;
var i__20733__auto___30597 = (0);
while(true){
if((i__20733__auto___30597 < len__20732__auto___30596)){
args__20739__auto__.push((arguments[i__20733__auto___30597]));

var G__30598 = (i__20733__auto___30597 + (1));
i__20733__auto___30597 = G__30598;
continue;
} else {
}
break;
}

var argseq__20740__auto__ = ((((3) < args__20739__auto__.length))?(new cljs.core.IndexedSeq(args__20739__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.extend_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__20740__auto__);
});

cljs.core$macros.extend_type.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,type_sym,impls){
var env = _AMPERSAND_env;
var _ = cljs.core$macros.validate_impls.call(null,env,impls);
var resolve = cljs.core.partial.call(null,cljs.core$macros.resolve_var,env);
var impl_map = cljs.core$macros.__GT_impl_map.call(null,impls);
var impl_map__$1 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null,new cljs.core.Symbol(null,"number","number",-1084057331,null),null], null), null).call(null,type_sym))?cljs.core$macros.type_hint_impl_map.call(null,type_sym,impl_map):impl_map);
var vec__30593 = (function (){var temp__4655__auto__ = cljs.core$macros.base_type.call(null,type_sym);
if(cljs.core.truth_(temp__4655__auto__)){
var type = temp__4655__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core$macros.base_assign_impls], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [resolve.call(null,type_sym),cljs.core$macros.proto_assign_impls], null);
}
})();
var type = cljs.core.nth.call(null,vec__30593,(0),null);
var assign_impls = cljs.core.nth.call(null,vec__30593,(1),null);
if(cljs.core.truth_((function (){var and__19612__auto__ = new cljs.core.Keyword(null,"extending-base-js-type","extending-base-js-type",432787264).cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_warnings_STAR_);
if(cljs.core.truth_(and__19612__auto__)){
return cljs.core$macros.js_base_type.call(null,type_sym);
} else {
return and__19612__auto__;
}
})())){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"extending-base-js-type","extending-base-js-type",432787264),env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-symbol","current-symbol",-932381075),type_sym,new cljs.core.Keyword(null,"suggested-symbol","suggested-symbol",-1329631875),cljs.core$macros.js_base_type.call(null,type_sym)], null));
} else {
}

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),cljs.core.mapcat.call(null,((function (env,_,resolve,impl_map,impl_map__$1,vec__30593,type,assign_impls){
return (function (p1__30588_SHARP_){
return assign_impls.call(null,env,resolve,type_sym,type,p1__30588_SHARP_);
});})(env,_,resolve,impl_map,impl_map__$1,vec__30593,type,assign_impls))
,impl_map__$1))));
});

cljs.core$macros.extend_type.cljs$lang$maxFixedArity = (3);

cljs.core$macros.extend_type.cljs$lang$applyTo = (function (seq30589){
var G__30590 = cljs.core.first.call(null,seq30589);
var seq30589__$1 = cljs.core.next.call(null,seq30589);
var G__30591 = cljs.core.first.call(null,seq30589__$1);
var seq30589__$2 = cljs.core.next.call(null,seq30589__$1);
var G__30592 = cljs.core.first.call(null,seq30589__$2);
var seq30589__$3 = cljs.core.next.call(null,seq30589__$2);
return cljs.core$macros.extend_type.cljs$core$IFn$_invoke$arity$variadic(G__30590,G__30591,G__30592,seq30589__$3);
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
cljs.core$macros.annotate_specs = (function cljs$core$macros$annotate_specs(annots,v,p__30600){
var vec__30604 = p__30600;
var f = cljs.core.nth.call(null,vec__30604,(0),null);
var sigs = cljs.core.nth.call(null,vec__30604,(1),null);
return cljs.core.conj.call(null,v,cljs.core.vary_meta.call(null,cljs.core.cons.call(null,f,cljs.core.map.call(null,((function (vec__30604,f,sigs){
return (function (p1__30599_SHARP_){
return cljs.core.cons.call(null,cljs.core.second.call(null,p1__30599_SHARP_),cljs.core.nnext.call(null,p1__30599_SHARP_));
});})(vec__30604,f,sigs))
,sigs)),cljs.core.merge,annots));
});
cljs.core$macros.dt__GT_et = (function cljs$core$macros$dt__GT_et(var_args){
var args30607 = [];
var len__20732__auto___30610 = arguments.length;
var i__20733__auto___30611 = (0);
while(true){
if((i__20733__auto___30611 < len__20732__auto___30610)){
args30607.push((arguments[i__20733__auto___30611]));

var G__30612 = (i__20733__auto___30611 + (1));
i__20733__auto___30611 = G__30612;
continue;
} else {
}
break;
}

var G__30609 = args30607.length;
switch (G__30609) {
case 3:
return cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30607.length)].join('')));

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
var G__30614 = ret__$1;
var G__30615 = specs__$2;
ret = G__30614;
specs__$1 = G__30615;
continue;
} else {
return ret;
}
break;
}
});

cljs.core$macros.dt__GT_et.cljs$lang$maxFixedArity = 4;

cljs.core$macros.collect_protocols = (function cljs$core$macros$collect_protocols(impls,env){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,(function (p1__30616_SHARP_){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),p1__30616_SHARP_));
}),cljs.core.filter.call(null,cljs.core.symbol_QMARK_,impls)));
});
cljs.core$macros.build_positional_factory = (function cljs$core$macros$build_positional_factory(rsym,rname,fields){
var fn_name = cljs.core.with_meta.call(null,cljs.core.symbol.call(null,[cljs.core.str(new cljs.core.Symbol(null,"->","->",-2139605430,null)),cljs.core.str(rsym)].join('')),cljs.core.assoc.call(null,cljs.core.meta.call(null,rsym),new cljs.core.Keyword(null,"factory","factory",63933746),new cljs.core.Keyword(null,"positional","positional",-203580463)));
var field_values = (cljs.core.truth_(new cljs.core.Keyword(null,"internal-ctor","internal-ctor",937392560).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,rsym)))?cljs.core.conj.call(null,fields,null,null,null):fields);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null)),(function (){var x__20461__auto__ = fn_name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,fields))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__20461__auto__ = rname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),field_values)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
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
var args__20739__auto__ = [];
var len__20732__auto___30628 = arguments.length;
var i__20733__auto___30629 = (0);
while(true){
if((i__20733__auto___30629 < len__20732__auto___30628)){
args__20739__auto__.push((arguments[i__20733__auto___30629]));

var G__30630 = (i__20733__auto___30629 + (1));
i__20733__auto___30629 = G__30630;
continue;
} else {
}
break;
}

var argseq__20740__auto__ = ((((4) < args__20739__auto__.length))?(new cljs.core.IndexedSeq(args__20739__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.deftype.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__20740__auto__);
});

cljs.core$macros.deftype.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,t,fields,impls){
cljs.core$macros.validate_fields.call(null,"deftype",t,fields);

var env = _AMPERSAND_env;
var r = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),t));
var vec__30625 = cljs.core$macros.prepare_protocol_masks.call(null,env,impls);
var fpps = cljs.core.nth.call(null,vec__30625,(0),null);
var pmasks = cljs.core.nth.call(null,vec__30625,(1),null);
var protocols = cljs.core$macros.collect_protocols.call(null,impls,env);
var t__$1 = cljs.core.vary_meta.call(null,t,cljs.core.assoc,new cljs.core.Keyword(null,"protocols","protocols",-5615896),protocols,new cljs.core.Keyword(null,"skip-protocol-flag","skip-protocol-flag",-1426798630),fpps);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"deftype*","deftype*",962659890,null)),(function (){var x__20461__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = fields;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = pmasks;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = ((cljs.core.seq.call(null,impls))?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","extend-type","cljs.core$macros/extend-type",1713295201,null)),(function (){var x__20461__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),cljs.core$macros.dt__GT_et.call(null,t__$1,impls,fields)))):null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-getBasis",".-getBasis",-1306451468,null)),(function (){var x__20461__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__20461__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__20461__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,fields))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$type",".-cljs$lang$type",-1029307724,null)),(function (){var x__20461__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$ctorStr",".-cljs$lang$ctorStr",-1820706991,null)),(function (){var x__20461__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = [cljs.core.str(r)].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$ctorPrWriter",".-cljs$lang$ctorPrWriter",255834464,null)),(function (){var x__20461__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__20461__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__30617__auto__","this__30617__auto__",422318763,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__30618__auto__","writer__30618__auto__",-1226570498,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opt__30619__auto__","opt__30619__auto__",-2055813542,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-write","cljs.core/-write",527220517,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__30618__auto__","writer__30618__auto__",-1226570498,null)),(function (){var x__20461__auto__ = [cljs.core.str(r)].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core$macros.build_positional_factory.call(null,t__$1,r,fields);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
});

cljs.core$macros.deftype.cljs$lang$maxFixedArity = (4);

cljs.core$macros.deftype.cljs$lang$applyTo = (function (seq30620){
var G__30621 = cljs.core.first.call(null,seq30620);
var seq30620__$1 = cljs.core.next.call(null,seq30620);
var G__30622 = cljs.core.first.call(null,seq30620__$1);
var seq30620__$2 = cljs.core.next.call(null,seq30620__$1);
var G__30623 = cljs.core.first.call(null,seq30620__$2);
var seq30620__$3 = cljs.core.next.call(null,seq30620__$2);
var G__30624 = cljs.core.first.call(null,seq30620__$3);
var seq30620__$4 = cljs.core.next.call(null,seq30620__$3);
return cljs.core$macros.deftype.cljs$core$IFn$_invoke$arity$variadic(G__30621,G__30622,G__30623,G__30624,seq30620__$4);
});


cljs.core$macros.deftype.cljs$lang$macro = true;
/**
 * Do not use this directly - use defrecord
 */
cljs.core$macros.emit_defrecord = (function cljs$core$macros$emit_defrecord(env,tagname,rname,fields,impls){
var hinted_fields = fields;
var fields__$1 = cljs.core.vec.call(null,cljs.core.map.call(null,((function (hinted_fields){
return (function (p1__30631_SHARP_){
return cljs.core.with_meta.call(null,p1__30631_SHARP_,null);
});})(hinted_fields))
,fields));
var base_fields = fields__$1;
var pr_open = [cljs.core.str("#"),cljs.core.str(cljs.core.namespace.call(null,rname)),cljs.core.str("."),cljs.core.str(cljs.core.name.call(null,rname)),cljs.core.str("{")].join('');
var fields__$2 = cljs.core.conj.call(null,fields__$1,new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),cljs.core.with_meta.call(null,new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)));
var gs = cljs.core.gensym.call(null);
var ksym = cljs.core.gensym.call(null,"k");
var impls__$1 = cljs.core.concat.call(null,impls,new cljs.core.PersistentVector(null, 28, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"IRecord","IRecord",-903221169,null),new cljs.core.Symbol(null,"ICloneable","ICloneable",1882653160,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-clone","-clone",227130084,null)),(function (){var x__20461__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__30632__auto__","this__30632__auto__",763771908,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__20461__auto__ = tagname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),fields__$2)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})()))),new cljs.core.Symbol(null,"IHash","IHash",-1495374645,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-hash","-hash",-630070274,null)),(function (){var x__20461__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__30633__auto__","this__30633__auto__",493574457,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","caching-hash","cljs.core$macros/caching-hash",-1892393069,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__30633__auto__","this__30633__auto__",493574457,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"hash-imap","hash-imap",-1047446478,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})()))),new cljs.core.Symbol(null,"IEquiv","IEquiv",-1912850869,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-equiv","-equiv",320124272,null)),(function (){var x__20461__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__30634__auto__","this__30634__auto__",-37164646,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"other__30635__auto__","other__30635__auto__",-1974144564,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"other__30635__auto__","other__30635__auto__",-1974144564,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","identical?","cljs.core$macros/identical?",815580547,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-constructor",".-constructor",279801701,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__30634__auto__","this__30634__auto__",-37164646,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-constructor",".-constructor",279801701,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"other__30635__auto__","other__30635__auto__",-1974144564,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","equiv-map","cljs.core/equiv-map",-1185609892,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__30634__auto__","this__30634__auto__",-37164646,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"other__30635__auto__","other__30635__auto__",-1974144564,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})()))),new cljs.core.Symbol(null,"IMeta","IMeta",1095313672,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-meta","-meta",494863156,null)),(function (){var x__20461__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__30636__auto__","this__30636__auto__",-948377603,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__meta","__meta",-946752628,null))))),new cljs.core.Symbol(null,"IWithMeta","IWithMeta",-509493158,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-with-meta","-with-meta",-1610713823,null)),(function (){var x__20461__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__30637__auto__","this__30637__auto__",-1432767389,null)),(function (){var x__20461__auto__ = gs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__20461__auto__ = tagname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),cljs.core.replace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),gs], null),fields__$2))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})()))),new cljs.core.Symbol(null,"ILookup","ILookup",784647298,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-lookup","-lookup",-1438393944,null)),(function (){var x__20461__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__30638__auto__","this__30638__auto__",1910235457,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__30639__auto__","k__30639__auto__",-1916821938,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-lookup","cljs.core/-lookup",-1845674443,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__30638__auto__","this__30638__auto__",1910235457,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__30639__auto__","k__30639__auto__",-1916821938,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})()))),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-lookup","-lookup",-1438393944,null)),(function (){var x__20461__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__30640__auto__","this__30640__auto__",-1759784153,null)),(function (){var x__20461__auto__ = ksym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"else__30641__auto__","else__30641__auto__",1385166460,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","case","cljs.core$macros/case",-2131866965,null)),(function (){var x__20461__auto__ = ksym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),cljs.core.mapcat.call(null,((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (f){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,f),f], null);
});})(gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,base_fields),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)),(function (){var x__20461__auto__ = ksym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"else__30641__auto__","else__30641__auto__",1385166460,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})()))),new cljs.core.Symbol(null,"ICounted","ICounted",-1705786327,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-count","-count",416049189,null)),(function (){var x__20461__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__30642__auto__","this__30642__auto__",1913271912,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),(function (){var x__20461__auto__ = cljs.core.count.call(null,base_fields);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})()))),new cljs.core.Symbol(null,"ICollection","ICollection",-686709190,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-conj","-conj",1373798691,null)),(function (){var x__20461__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__30643__auto__","this__30643__auto__",1393499027,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"entry__30644__auto__","entry__30644__auto__",1031965470,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"entry__30644__auto__","entry__30644__auto__",1031965470,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-assoc","cljs.core/-assoc",-814539323,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__30643__auto__","this__30643__auto__",1393499027,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-nth","cljs.core/-nth",504234802,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"entry__30644__auto__","entry__30644__auto__",1031965470,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-nth","cljs.core/-nth",504234802,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"entry__30644__auto__","entry__30644__auto__",1031965470,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","reduce","cljs.core/reduce",2025430439,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-conj","cljs.core/-conj",2040622670,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__30643__auto__","this__30643__auto__",1393499027,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"entry__30644__auto__","entry__30644__auto__",1031965470,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})()))),new cljs.core.Symbol(null,"IAssociative","IAssociative",-1306431882,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-assoc","-assoc",-416089758,null)),(function (){var x__20461__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__30645__auto__","this__30645__auto__",-1205583450,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__30646__auto__","k__30646__auto__",-975032743,null)),(function (){var x__20461__auto__ = gs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","condp","cljs.core$macros/condp",431619047,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","keyword-identical?","cljs.core/keyword-identical?",1598491177,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__30646__auto__","k__30646__auto__",-975032743,null)),cljs.core.mapcat.call(null,((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (fld){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,fld),cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"new","new",-444906321,null),tagname,cljs.core.replace.call(null,cljs.core.PersistentArrayMap.fromArray([fld,gs,new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),null], true, false),fields__$2))], null);
});})(gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,base_fields),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__20461__auto__ = tagname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),null,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),null], null), null),fields__$2),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","assoc","cljs.core/assoc",322326297,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__30646__auto__","k__30646__auto__",-975032743,null)),(function (){var x__20461__auto__ = gs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})()))),new cljs.core.Symbol(null,"IMap","IMap",992876629,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-dissoc","-dissoc",1638079447,null)),(function (){var x__20461__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__30647__auto__","this__30647__auto__",211112919,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__30648__auto__","k__30648__auto__",-261608517,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null)),(function (){var x__20461__auto__ = cljs.core.apply.call(null,cljs.core.hash_set,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.keyword,base_fields)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__30648__auto__","k__30648__auto__",-261608517,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","dissoc","cljs.core/dissoc",-432349815,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","with-meta","cljs.core/with-meta",749126446,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","into","cljs.core/into",1879938733,null)),(function (){var x__20461__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__30647__auto__","this__30647__auto__",211112919,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__meta","__meta",-946752628,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__30648__auto__","k__30648__auto__",-261608517,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__20461__auto__ = tagname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),null,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),null], null), null),fields__$2),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not-empty","cljs.core/not-empty",540057011,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","dissoc","cljs.core/dissoc",-432349815,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__30648__auto__","k__30648__auto__",-261608517,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})()))),new cljs.core.Symbol(null,"ISeqable","ISeqable",1349682102,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-seq","-seq",1019896831,null)),(function (){var x__20461__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__30650__auto__","this__30650__auto__",-1363447689,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null)),(function (){var x__20461__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (p1__30649_SHARP_){
return cljs.core._conj.call(null,(function (){var x__20461__auto__ = cljs.core.keyword.call(null,p1__30649_SHARP_);
return cljs.core._conj.call(null,(function (){var x__20461__auto____$1 = p1__30649_SHARP_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto____$1);
})(),x__20461__auto__);
})(),new cljs.core.Symbol("cljs.core$macros","vector","cljs.core$macros/vector",912237829,null));
});})(gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,base_fields)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})()))),new cljs.core.Symbol(null,"IIterable","IIterable",577191430,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-iterator","-iterator",310937281,null)),(function (){var x__20461__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__20461__auto__ = gs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"RecordIter.","RecordIter.",-265283060,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),(function (){var x__20461__auto__ = gs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.count.call(null,base_fields);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.keyword,base_fields)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-iterator","cljs.core/-iterator",1833427494,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","nil-iter","cljs.core/nil-iter",-1712403690,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})()))),new cljs.core.Symbol(null,"IPrintWithWriter","IPrintWithWriter",-1205316154,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-pr-writer","-pr-writer",-445354136,null)),(function (){var x__20461__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__30652__auto__","this__30652__auto__",297927708,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__30653__auto__","writer__30653__auto__",1316048127,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opts__30654__auto__","opts__30654__auto__",-1732294139,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__20461__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"pr-pair__30655__auto__","pr-pair__30655__auto__",-51737059,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__20461__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"keyval__30656__auto__","keyval__30656__auto__",1294362511,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","pr-sequential-writer","cljs.core/pr-sequential-writer",-1101677821,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__30653__auto__","writer__30653__auto__",1316048127,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","pr-writer","cljs.core/pr-writer",133956070,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,""),cljs.core._conj.call(null,cljs.core.List.EMPTY," "),cljs.core._conj.call(null,cljs.core.List.EMPTY,""),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opts__30654__auto__","opts__30654__auto__",-1732294139,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"keyval__30656__auto__","keyval__30656__auto__",1294362511,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","pr-sequential-writer","cljs.core/pr-sequential-writer",-1101677821,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__30653__auto__","writer__30653__auto__",1316048127,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"pr-pair__30655__auto__","pr-pair__30655__auto__",-51737059,null)),(function (){var x__20461__auto__ = pr_open;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,", "),cljs.core._conj.call(null,cljs.core.List.EMPTY,"}"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opts__30654__auto__","opts__30654__auto__",-1732294139,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null)),(function (){var x__20461__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (p1__30651_SHARP_){
return cljs.core._conj.call(null,(function (){var x__20461__auto__ = cljs.core.keyword.call(null,p1__30651_SHARP_);
return cljs.core._conj.call(null,(function (){var x__20461__auto____$1 = p1__30651_SHARP_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto____$1);
})(),x__20461__auto__);
})(),new cljs.core.Symbol("cljs.core$macros","vector","cljs.core$macros/vector",912237829,null));
});})(gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,base_fields)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())))], null));
var vec__30660 = cljs.core$macros.prepare_protocol_masks.call(null,env,impls__$1);
var fpps = cljs.core.nth.call(null,vec__30660,(0),null);
var pmasks = cljs.core.nth.call(null,vec__30660,(1),null);
var protocols = cljs.core$macros.collect_protocols.call(null,impls__$1,env);
var tagname__$1 = cljs.core.vary_meta.call(null,tagname,cljs.core.assoc,new cljs.core.Keyword(null,"protocols","protocols",-5615896),protocols,new cljs.core.Keyword(null,"skip-protocol-flag","skip-protocol-flag",-1426798630),fpps);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"defrecord*","defrecord*",-1936366207,null)),(function (){var x__20461__auto__ = tagname__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = hinted_fields;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = pmasks;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","extend-type","cljs.core$macros/extend-type",1713295201,null)),(function (){var x__20461__auto__ = tagname__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),cljs.core$macros.dt__GT_et.call(null,tagname__$1,impls__$1,fields__$2,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
});
cljs.core$macros.build_map_factory = (function cljs$core$macros$build_map_factory(rsym,rname,fields){
var fn_name = cljs.core.with_meta.call(null,cljs.core.symbol.call(null,[cljs.core.str(new cljs.core.Symbol(null,"map->","map->",-999714600,null)),cljs.core.str(rsym)].join('')),cljs.core.assoc.call(null,cljs.core.meta.call(null,rsym),new cljs.core.Keyword(null,"factory","factory",63933746),new cljs.core.Keyword(null,"map","map",1371690461)));
var ms = cljs.core.gensym.call(null);
var ks = cljs.core.map.call(null,cljs.core.keyword,fields);
var getters = cljs.core.map.call(null,((function (fn_name,ms,ks){
return (function (k){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__20461__auto__ = k;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = ms;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
});})(fn_name,ms,ks))
,ks);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null)),(function (){var x__20461__auto__ = fn_name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__20461__auto__ = ms;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__20461__auto__ = rname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),getters,cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","dissoc","cljs.core/dissoc",-432349815,null)),(function (){var x__20461__auto__ = ms;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),ks)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
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
var args__20739__auto__ = [];
var len__20732__auto___30670 = arguments.length;
var i__20733__auto___30671 = (0);
while(true){
if((i__20733__auto___30671 < len__20732__auto___30670)){
args__20739__auto__.push((arguments[i__20733__auto___30671]));

var G__30672 = (i__20733__auto___30671 + (1));
i__20733__auto___30671 = G__30672;
continue;
} else {
}
break;
}

var argseq__20740__auto__ = ((((4) < args__20739__auto__.length))?(new cljs.core.IndexedSeq(args__20739__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.defrecord.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__20740__auto__);
});

cljs.core$macros.defrecord.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,rsym,fields,impls){
cljs.core$macros.validate_fields.call(null,"defrecord",rsym,fields);

var rsym__$1 = cljs.core.vary_meta.call(null,rsym,cljs.core.assoc,new cljs.core.Keyword(null,"internal-ctor","internal-ctor",937392560),true);
var r = cljs.core.vary_meta.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,_AMPERSAND_env,new cljs.core.Keyword(null,"locals","locals",535295783)),rsym__$1)),cljs.core.assoc,new cljs.core.Keyword(null,"internal-ctor","internal-ctor",937392560),true);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__20461__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core$macros.emit_defrecord.call(null,_AMPERSAND_env,rsym__$1,r,fields,impls);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-getBasis",".-getBasis",-1306451468,null)),(function (){var x__20461__auto__ = r;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__20461__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__20461__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,fields))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$type",".-cljs$lang$type",-1029307724,null)),(function (){var x__20461__auto__ = r;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$ctorPrSeq",".-cljs$lang$ctorPrSeq",41132414,null)),(function (){var x__20461__auto__ = r;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__20461__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__30663__auto__","this__30663__auto__",-964664770,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null)),(function (){var x__20461__auto__ = [cljs.core.str(r)].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$ctorPrWriter",".-cljs$lang$ctorPrWriter",255834464,null)),(function (){var x__20461__auto__ = r;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__20461__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__30663__auto__","this__30663__auto__",-964664770,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__30664__auto__","writer__30664__auto__",-263174511,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-write","cljs.core/-write",527220517,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__30664__auto__","writer__30664__auto__",-263174511,null)),(function (){var x__20461__auto__ = [cljs.core.str(r)].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core$macros.build_positional_factory.call(null,rsym__$1,r,fields);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core$macros.build_map_factory.call(null,rsym__$1,r,fields);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = r;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
});

cljs.core$macros.defrecord.cljs$lang$maxFixedArity = (4);

cljs.core$macros.defrecord.cljs$lang$applyTo = (function (seq30665){
var G__30666 = cljs.core.first.call(null,seq30665);
var seq30665__$1 = cljs.core.next.call(null,seq30665);
var G__30667 = cljs.core.first.call(null,seq30665__$1);
var seq30665__$2 = cljs.core.next.call(null,seq30665__$1);
var G__30668 = cljs.core.first.call(null,seq30665__$2);
var seq30665__$3 = cljs.core.next.call(null,seq30665__$2);
var G__30669 = cljs.core.first.call(null,seq30665__$3);
var seq30665__$4 = cljs.core.next.call(null,seq30665__$3);
return cljs.core$macros.defrecord.cljs$core$IFn$_invoke$arity$variadic(G__30666,G__30667,G__30668,G__30669,seq30665__$4);
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
var args__20739__auto__ = [];
var len__20732__auto___30700 = arguments.length;
var i__20733__auto___30701 = (0);
while(true){
if((i__20733__auto___30701 < len__20732__auto___30700)){
args__20739__auto__.push((arguments[i__20733__auto___30701]));

var G__30702 = (i__20733__auto___30701 + (1));
i__20733__auto___30701 = G__30702;
continue;
} else {
}
break;
}

var argseq__20740__auto__ = ((((3) < args__20739__auto__.length))?(new cljs.core.IndexedSeq(args__20739__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.defprotocol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__20740__auto__);
});

cljs.core$macros.defprotocol.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,psym,doc_PLUS_methods){
var p = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,_AMPERSAND_env,new cljs.core.Keyword(null,"locals","locals",535295783)),psym));
var vec__30679 = ((typeof cljs.core.first.call(null,doc_PLUS_methods) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,doc_PLUS_methods),cljs.core.next.call(null,doc_PLUS_methods)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,doc_PLUS_methods], null));
var doc = cljs.core.nth.call(null,vec__30679,(0),null);
var methods$ = cljs.core.nth.call(null,vec__30679,(1),null);
var psym__$1 = cljs.core.vary_meta.call(null,psym,cljs.core.assoc,new cljs.core.Keyword(null,"doc","doc",1913296891),doc,new cljs.core.Keyword(null,"protocol-symbol","protocol-symbol",1279552198),true);
var ns_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
var fqn = ((function (p,vec__30679,doc,methods$,psym__$1,ns_name){
return (function (n){
return cljs.core.symbol.call(null,[cljs.core.str(ns_name),cljs.core.str("."),cljs.core.str(n)].join(''));
});})(p,vec__30679,doc,methods$,psym__$1,ns_name))
;
var prefix = cljs.core$macros.protocol_prefix.call(null,p);
var _ = (function (){var seq__30682 = cljs.core.seq.call(null,methods$);
var chunk__30683 = null;
var count__30684 = (0);
var i__30685 = (0);
while(true){
if((i__30685 < count__30684)){
var vec__30686 = cljs.core._nth.call(null,chunk__30683,i__30685);
var seq__30687 = cljs.core.seq.call(null,vec__30686);
var first__30688 = cljs.core.first.call(null,seq__30687);
var seq__30687__$1 = cljs.core.next.call(null,seq__30687);
var mname = first__30688;
var arities = seq__30687__$1;
if(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(0),null], null), null),cljs.core.map.call(null,cljs.core.count,cljs.core.filter.call(null,cljs.core.vector_QMARK_,arities))))){
throw (new Error([cljs.core.str("Invalid protocol, "),cljs.core.str(psym__$1),cljs.core.str(" defines method "),cljs.core.str(mname),cljs.core.str(" with arity 0")].join('')));
} else {
}

var G__30703 = seq__30682;
var G__30704 = chunk__30683;
var G__30705 = count__30684;
var G__30706 = (i__30685 + (1));
seq__30682 = G__30703;
chunk__30683 = G__30704;
count__30684 = G__30705;
i__30685 = G__30706;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__30682);
if(temp__4657__auto__){
var seq__30682__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30682__$1)){
var c__20438__auto__ = cljs.core.chunk_first.call(null,seq__30682__$1);
var G__30707 = cljs.core.chunk_rest.call(null,seq__30682__$1);
var G__30708 = c__20438__auto__;
var G__30709 = cljs.core.count.call(null,c__20438__auto__);
var G__30710 = (0);
seq__30682 = G__30707;
chunk__30683 = G__30708;
count__30684 = G__30709;
i__30685 = G__30710;
continue;
} else {
var vec__30689 = cljs.core.first.call(null,seq__30682__$1);
var seq__30690 = cljs.core.seq.call(null,vec__30689);
var first__30691 = cljs.core.first.call(null,seq__30690);
var seq__30690__$1 = cljs.core.next.call(null,seq__30690);
var mname = first__30691;
var arities = seq__30690__$1;
if(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(0),null], null), null),cljs.core.map.call(null,cljs.core.count,cljs.core.filter.call(null,cljs.core.vector_QMARK_,arities))))){
throw (new Error([cljs.core.str("Invalid protocol, "),cljs.core.str(psym__$1),cljs.core.str(" defines method "),cljs.core.str(mname),cljs.core.str(" with arity 0")].join('')));
} else {
}

var G__30711 = cljs.core.next.call(null,seq__30682__$1);
var G__30712 = null;
var G__30713 = (0);
var G__30714 = (0);
seq__30682 = G__30711;
chunk__30683 = G__30712;
count__30684 = G__30713;
i__30685 = G__30714;
continue;
}
} else {
return null;
}
}
break;
}
})();
var expand_sig = ((function (p,vec__30679,doc,methods$,psym__$1,ns_name,fqn,prefix,_){
return (function (fname,slot,sig){
var sig__$1 = ((!(cljs.core.every_QMARK_.call(null,cljs.core.symbol_QMARK_,sig)))?cljs.core.mapv.call(null,((function (p,vec__30679,doc,methods$,psym__$1,ns_name,fqn,prefix,_){
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
});})(p,vec__30679,doc,methods$,psym__$1,ns_name,fqn,prefix,_))
,sig):sig);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__20461__auto__ = sig__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__20461__auto__ = cljs.core.first.call(null,sig__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__20461__auto__ = cljs.core.first.call(null,sig__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.symbol.call(null,[cljs.core.str("-"),cljs.core.str(slot)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__20461__auto__ = cljs.core.first.call(null,sig__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = slot;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),sig__$1)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__20461__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__30673__auto__","x__30673__auto__",-207753296,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__20461__auto__ = cljs.core.first.call(null,sig__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__20461__auto__ = cljs.core.first.call(null,sig__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__30674__auto__","m__30674__auto__",-1833244399,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aget","cljs.core$macros/aget",1976136178,null)),(function (){var x__20461__auto__ = fqn.call(null,fname);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog","typeOf","goog/typeOf",539097255,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__30673__auto__","x__30673__auto__",-207753296,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__30674__auto__","m__30674__auto__",-1833244399,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__30674__auto__","m__30674__auto__",-1833244399,null)),sig__$1)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__20461__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__30674__auto__","m__30674__auto__",-1833244399,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aget","cljs.core$macros/aget",1976136178,null)),(function (){var x__20461__auto__ = fqn.call(null,fname);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,"_"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__30674__auto__","m__30674__auto__",-1833244399,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__30674__auto__","m__30674__auto__",-1833244399,null)),sig__$1)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","missing-protocol","cljs.core/missing-protocol",531539732,null)),(function (){var x__20461__auto__ = [cljs.core.str(psym__$1),cljs.core.str("."),cljs.core.str(fname)].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.first.call(null,sig__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
});})(p,vec__30679,doc,methods$,psym__$1,ns_name,fqn,prefix,_))
;
var psym__$2 = cljs.core.vary_meta.call(null,cljs.core.vary_meta.call(null,psym__$1,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516)], null),cljs.core.conj,"@interface"),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"protocol-info","protocol-info",1471745843),new cljs.core.Keyword(null,"methods","methods",453930866)], null),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (p,vec__30679,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig){
return (function (p__30692){
var vec__30693 = p__30692;
var seq__30694 = cljs.core.seq.call(null,vec__30693);
var first__30695 = cljs.core.first.call(null,seq__30694);
var seq__30694__$1 = cljs.core.next.call(null,seq__30694);
var fname = first__30695;
var sigs = seq__30694__$1;
var doc__$1 = (function (){var doc__$1 = cljs.core.last.call(null,sigs);
if(typeof doc__$1 === 'string'){
return doc__$1;
} else {
return null;
}
})();
var sigs__$1 = cljs.core.take_while.call(null,cljs.core.vector_QMARK_,sigs);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vary_meta.call(null,fname,cljs.core.assoc,new cljs.core.Keyword(null,"doc","doc",1913296891),doc__$1),cljs.core.vec.call(null,sigs__$1)], null);
});})(p,vec__30679,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig))
,methods$)));
var method = ((function (p,vec__30679,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2){
return (function (p__30696){
var vec__30697 = p__30696;
var seq__30698 = cljs.core.seq.call(null,vec__30697);
var first__30699 = cljs.core.first.call(null,seq__30698);
var seq__30698__$1 = cljs.core.next.call(null,seq__30698);
var fname = first__30699;
var sigs = seq__30698__$1;
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null)),(function (){var x__20461__auto__ = fname__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),cljs.core.map.call(null,((function (doc__$1,sigs__$1,amp,slot,fname__$1,vec__30697,seq__30698,first__30699,seq__30698__$1,fname,sigs,p,vec__30679,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2){
return (function (sig){
return expand_sig.call(null,fname__$1,cljs.core.symbol.call(null,[cljs.core.str(slot),cljs.core.str("$arity$"),cljs.core.str(cljs.core.count.call(null,sig))].join('')),sig);
});})(doc__$1,sigs__$1,amp,slot,fname__$1,vec__30697,seq__30698,first__30699,seq__30698__$1,fname,sigs,p,vec__30679,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2))
,sigs__$1))));
});})(p,vec__30679,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"*unchecked-if*","*unchecked-if*",1542408350,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"def","def",597100991,null)),(function (){var x__20461__auto__ = psym__$2;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"function(){}"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),cljs.core.map.call(null,method,methods$),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"*unchecked-if*","*unchecked-if*",1542408350,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
});

cljs.core$macros.defprotocol.cljs$lang$maxFixedArity = (3);

cljs.core$macros.defprotocol.cljs$lang$applyTo = (function (seq30675){
var G__30676 = cljs.core.first.call(null,seq30675);
var seq30675__$1 = cljs.core.next.call(null,seq30675);
var G__30677 = cljs.core.first.call(null,seq30675__$1);
var seq30675__$2 = cljs.core.next.call(null,seq30675__$1);
var G__30678 = cljs.core.first.call(null,seq30675__$2);
var seq30675__$3 = cljs.core.next.call(null,seq30675__$2);
return cljs.core$macros.defprotocol.cljs$core$IFn$_invoke$arity$variadic(G__30676,G__30677,G__30678,seq30675__$3);
});


cljs.core$macros.defprotocol.cljs$lang$macro = true;
/**
 * EXPERIMENTAL
 */
cljs.core$macros.implements_QMARK_ = (function cljs$core$macros$implements_QMARK_(_AMPERSAND_form,_AMPERSAND_env,psym,x){
var p = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,_AMPERSAND_env,new cljs.core.Keyword(null,"locals","locals",535295783)),psym));
var prefix = cljs.core$macros.protocol_prefix.call(null,p);
var xsym = cljs.core$macros.bool_expr.call(null,cljs.core.gensym.call(null));
var vec__30718 = cljs.core$macros.fast_path_protocols.call(null,p);
var part = cljs.core.nth.call(null,vec__30718,(0),null);
var bit = cljs.core.nth.call(null,vec__30718,(1),null);
var msym = cljs.core.symbol.call(null,[cljs.core.str("-cljs$lang$protocol_mask$partition"),cljs.core.str(part),cljs.core.str("$")].join(''));
if(!((x instanceof cljs.core.Symbol))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__20461__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__20461__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__20461__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","or","cljs.core$macros/or",1346243648,null)),(function (){var x__20461__auto__ = (cljs.core.truth_(bit)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__20461__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = msym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = bit;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})()))):false);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","identical?","cljs.core$macros/identical?",815580547,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PROTOCOL_SENTINEL","cljs.core/PROTOCOL_SENTINEL",210209696,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__20461__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.symbol.call(null,[cljs.core.str("-"),cljs.core.str(prefix)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__20461__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","or","cljs.core$macros/or",1346243648,null)),(function (){var x__20461__auto__ = (cljs.core.truth_(bit)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__20461__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = msym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = bit;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})()))):false);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","identical?","cljs.core$macros/identical?",815580547,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PROTOCOL_SENTINEL","cljs.core/PROTOCOL_SENTINEL",210209696,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__20461__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.symbol.call(null,[cljs.core.str("-"),cljs.core.str(prefix)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
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
var vec__30724 = cljs.core$macros.fast_path_protocols.call(null,p);
var part = cljs.core.nth.call(null,vec__30724,(0),null);
var bit = cljs.core.nth.call(null,vec__30724,(1),null);
var msym = cljs.core.symbol.call(null,[cljs.core.str("-cljs$lang$protocol_mask$partition"),cljs.core.str(part),cljs.core.str("$")].join(''));
if(!((x instanceof cljs.core.Symbol))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__20461__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__20461__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__20461__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","or","cljs.core$macros/or",1346243648,null)),(function (){var x__20461__auto__ = (cljs.core.truth_(bit)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__20461__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = msym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = bit;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})()))):false);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","identical?","cljs.core$macros/identical?",815580547,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PROTOCOL_SENTINEL","cljs.core/PROTOCOL_SENTINEL",210209696,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__20461__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.symbol.call(null,[cljs.core.str("-"),cljs.core.str(prefix)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","coercive-not","cljs.core$macros/coercive-not",115999987,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__20461__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = msym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","native-satisfies?","cljs.core/native-satisfies?",1482305036,null)),(function (){var x__20461__auto__ = psym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","native-satisfies?","cljs.core/native-satisfies?",1482305036,null)),(function (){var x__20461__auto__ = psym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__20461__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","or","cljs.core$macros/or",1346243648,null)),(function (){var x__20461__auto__ = (cljs.core.truth_(bit)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__20461__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = msym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = bit;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})()))):false);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","identical?","cljs.core$macros/identical?",815580547,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PROTOCOL_SENTINEL","cljs.core/PROTOCOL_SENTINEL",210209696,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__20461__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.symbol.call(null,[cljs.core.str("-"),cljs.core.str(prefix)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","coercive-not","cljs.core$macros/coercive-not",115999987,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__20461__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = msym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","native-satisfies?","cljs.core/native-satisfies?",1482305036,null)),(function (){var x__20461__auto__ = psym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","native-satisfies?","cljs.core/native-satisfies?",1482305036,null)),(function (){var x__20461__auto__ = psym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
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
var args__20739__auto__ = [];
var len__20732__auto___30730 = arguments.length;
var i__20733__auto___30731 = (0);
while(true){
if((i__20733__auto___30731 < len__20732__auto___30730)){
args__20739__auto__.push((arguments[i__20733__auto___30731]));

var G__30732 = (i__20733__auto___30731 + (1));
i__20733__auto___30731 = G__30732;
continue;
} else {
}
break;
}

var argseq__20740__auto__ = ((((2) < args__20739__auto__.length))?(new cljs.core.IndexedSeq(args__20739__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.lazy_seq.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__20740__auto__);
});

cljs.core$macros.lazy_seq.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","LazySeq","cljs.core/LazySeq",1986389673,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__20461__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
});

cljs.core$macros.lazy_seq.cljs$lang$maxFixedArity = (2);

cljs.core$macros.lazy_seq.cljs$lang$applyTo = (function (seq30727){
var G__30728 = cljs.core.first.call(null,seq30727);
var seq30727__$1 = cljs.core.next.call(null,seq30727);
var G__30729 = cljs.core.first.call(null,seq30727__$1);
var seq30727__$2 = cljs.core.next.call(null,seq30727__$1);
return cljs.core$macros.lazy_seq.cljs$core$IFn$_invoke$arity$variadic(G__30728,G__30729,seq30727__$2);
});


cljs.core$macros.lazy_seq.cljs$lang$macro = true;
/**
 * Takes a body of expressions and yields a Delay object that will
 *   invoke the body only the first time it is forced (with force or deref/@), and
 *   will cache the result and return it on all subsequent force
 *   calls.
 */
cljs.core$macros.delay = (function cljs$core$macros$delay(var_args){
var args__20739__auto__ = [];
var len__20732__auto___30736 = arguments.length;
var i__20733__auto___30737 = (0);
while(true){
if((i__20733__auto___30737 < len__20732__auto___30736)){
args__20739__auto__.push((arguments[i__20733__auto___30737]));

var G__30738 = (i__20733__auto___30737 + (1));
i__20733__auto___30737 = G__30738;
continue;
} else {
}
break;
}

var argseq__20740__auto__ = ((((2) < args__20739__auto__.length))?(new cljs.core.IndexedSeq(args__20739__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.delay.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__20740__auto__);
});

cljs.core$macros.delay.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","Delay","cljs.core/Delay",-21574999,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__20461__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
});

cljs.core$macros.delay.cljs$lang$maxFixedArity = (2);

cljs.core$macros.delay.cljs$lang$applyTo = (function (seq30733){
var G__30734 = cljs.core.first.call(null,seq30733);
var seq30733__$1 = cljs.core.next.call(null,seq30733);
var G__30735 = cljs.core.first.call(null,seq30733__$1);
var seq30733__$2 = cljs.core.next.call(null,seq30733__$1);
return cljs.core$macros.delay.cljs$core$IFn$_invoke$arity$variadic(G__30734,G__30735,seq30733__$2);
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
var args__20739__auto__ = [];
var len__20732__auto___30747 = arguments.length;
var i__20733__auto___30748 = (0);
while(true){
if((i__20733__auto___30748 < len__20732__auto___30747)){
args__20739__auto__.push((arguments[i__20733__auto___30748]));

var G__30749 = (i__20733__auto___30748 + (1));
i__20733__auto___30748 = G__30749;
continue;
} else {
}
break;
}

var argseq__20740__auto__ = ((((3) < args__20739__auto__.length))?(new cljs.core.IndexedSeq(args__20739__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.with_redefs.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__20740__auto__);
});

cljs.core$macros.with_redefs.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
var names = cljs.core.take_nth.call(null,(2),bindings);
var vals = cljs.core.take_nth.call(null,(2),cljs.core.drop.call(null,(1),bindings));
var tempnames = cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.gensym,cljs.core.name),names);
var binds = cljs.core.map.call(null,cljs.core.vector,names,vals);
var resets = cljs.core.reverse.call(null,cljs.core.map.call(null,cljs.core.vector,names,tempnames));
var bind_value = ((function (names,vals,tempnames,binds,resets){
return (function (p__30743){
var vec__30744 = p__30743;
var k = cljs.core.nth.call(null,vec__30744,(0),null);
var v = cljs.core.nth.call(null,vec__30744,(1),null);
return cljs.core._conj.call(null,(function (){var x__20461__auto__ = k;
return cljs.core._conj.call(null,(function (){var x__20461__auto____$1 = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto____$1);
})(),x__20461__auto__);
})(),new cljs.core.Symbol(null,"set!","set!",250714521,null));
});})(names,vals,tempnames,binds,resets))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__20461__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.interleave.call(null,tempnames,names)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),cljs.core.map.call(null,bind_value,binds),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"try","try",-1273693247,null)),body,(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"finally","finally",-1065347064,null)),cljs.core.map.call(null,bind_value,resets))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
});

cljs.core$macros.with_redefs.cljs$lang$maxFixedArity = (3);

cljs.core$macros.with_redefs.cljs$lang$applyTo = (function (seq30739){
var G__30740 = cljs.core.first.call(null,seq30739);
var seq30739__$1 = cljs.core.next.call(null,seq30739);
var G__30741 = cljs.core.first.call(null,seq30739__$1);
var seq30739__$2 = cljs.core.next.call(null,seq30739__$1);
var G__30742 = cljs.core.first.call(null,seq30739__$2);
var seq30739__$3 = cljs.core.next.call(null,seq30739__$2);
return cljs.core$macros.with_redefs.cljs$core$IFn$_invoke$arity$variadic(G__30740,G__30741,G__30742,seq30739__$3);
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
var args__20739__auto__ = [];
var len__20732__auto___30754 = arguments.length;
var i__20733__auto___30755 = (0);
while(true){
if((i__20733__auto___30755 < len__20732__auto___30754)){
args__20739__auto__.push((arguments[i__20733__auto___30755]));

var G__30756 = (i__20733__auto___30755 + (1));
i__20733__auto___30755 = G__30756;
continue;
} else {
}
break;
}

var argseq__20740__auto__ = ((((3) < args__20739__auto__.length))?(new cljs.core.IndexedSeq(args__20739__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.binding.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__20740__auto__);
});

cljs.core$macros.binding.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
var names = cljs.core.take_nth.call(null,(2),bindings);
cljs.analyzer.confirm_bindings.call(null,_AMPERSAND_env,names);

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","with-redefs","cljs.core$macros/with-redefs",1489217801,null)),(function (){var x__20461__auto__ = bindings;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),body)));
});

cljs.core$macros.binding.cljs$lang$maxFixedArity = (3);

cljs.core$macros.binding.cljs$lang$applyTo = (function (seq30750){
var G__30751 = cljs.core.first.call(null,seq30750);
var seq30750__$1 = cljs.core.next.call(null,seq30750);
var G__30752 = cljs.core.first.call(null,seq30750__$1);
var seq30750__$2 = cljs.core.next.call(null,seq30750__$1);
var G__30753 = cljs.core.first.call(null,seq30750__$2);
var seq30750__$3 = cljs.core.next.call(null,seq30750__$2);
return cljs.core$macros.binding.cljs$core$IFn$_invoke$arity$variadic(G__30751,G__30752,G__30753,seq30750__$3);
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
var args__20739__auto__ = [];
var len__20732__auto___30775 = arguments.length;
var i__20733__auto___30776 = (0);
while(true){
if((i__20733__auto___30776 < len__20732__auto___30775)){
args__20739__auto__.push((arguments[i__20733__auto___30776]));

var G__30777 = (i__20733__auto___30776 + (1));
i__20733__auto___30776 = G__30777;
continue;
} else {
}
break;
}

var argseq__20740__auto__ = ((((4) < args__20739__auto__.length))?(new cljs.core.IndexedSeq(args__20739__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.condp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__20740__auto__);
});

cljs.core$macros.condp.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,pred,expr,clauses){
var gpred = cljs.core.gensym.call(null,"pred__");
var gexpr = cljs.core.gensym.call(null,"expr__");
var emit = ((function (gpred,gexpr){
return (function cljs$core$macros$emit(pred__$1,expr__$1,args){
var vec__30769 = cljs.core.split_at.call(null,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,">>",">>",-277509267),cljs.core.second.call(null,args)))?(3):(2)),args);
var vec__30772 = cljs.core.nth.call(null,vec__30769,(0),null);
var a = cljs.core.nth.call(null,vec__30772,(0),null);
var b = cljs.core.nth.call(null,vec__30772,(1),null);
var c = cljs.core.nth.call(null,vec__30772,(2),null);
var clause = vec__30772;
var more = cljs.core.nth.call(null,vec__30769,(1),null);
var n = cljs.core.count.call(null,clause);
if(cljs.core._EQ_.call(null,(0),n)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"No matching clause: "),(function (){var x__20461__auto__ = expr__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
} else {
if(cljs.core._EQ_.call(null,(1),n)){
return a;
} else {
if(cljs.core._EQ_.call(null,(2),n)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__20461__auto__ = pred__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = a;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = expr__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = b;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs$core$macros$emit.call(null,pred__$1,expr__$1,more);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-let","cljs.core$macros/if-let",1291543946,null)),(function (){var x__20461__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"p__30757__auto__","p__30757__auto__",2095529200,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__20461__auto__ = pred__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = a;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = expr__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__20461__auto__ = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"p__30757__auto__","p__30757__auto__",2095529200,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs$core$macros$emit.call(null,pred__$1,expr__$1,more);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));

}
}
}
});})(gpred,gexpr))
;
var gres = cljs.core.gensym.call(null,"res__");
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__20461__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__20461__auto__ = gpred;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = pred;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = gexpr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = emit.call(null,gpred,gexpr,clauses);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
});

cljs.core$macros.condp.cljs$lang$maxFixedArity = (4);

cljs.core$macros.condp.cljs$lang$applyTo = (function (seq30758){
var G__30759 = cljs.core.first.call(null,seq30758);
var seq30758__$1 = cljs.core.next.call(null,seq30758);
var G__30760 = cljs.core.first.call(null,seq30758__$1);
var seq30758__$2 = cljs.core.next.call(null,seq30758__$1);
var G__30761 = cljs.core.first.call(null,seq30758__$2);
var seq30758__$3 = cljs.core.next.call(null,seq30758__$2);
var G__30762 = cljs.core.first.call(null,seq30758__$3);
var seq30758__$4 = cljs.core.next.call(null,seq30758__$3);
return cljs.core$macros.condp.cljs$core$IFn$_invoke$arity$variadic(G__30759,G__30760,G__30761,G__30762,seq30758__$4);
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
var m = (function (){var and__19612__auto__ = cljs.core.list_QMARK_.call(null,x);
if(and__19612__auto__){
return cljs.analyzer.resolve_var.call(null,env,cljs.core.last.call(null,x));
} else {
return and__19612__auto__;
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
var args__20739__auto__ = [];
var len__20732__auto___30798 = arguments.length;
var i__20733__auto___30799 = (0);
while(true){
if((i__20733__auto___30799 < len__20732__auto___30798)){
args__20739__auto__.push((arguments[i__20733__auto___30799]));

var G__30800 = (i__20733__auto___30799 + (1));
i__20733__auto___30799 = G__30800;
continue;
} else {
}
break;
}

var argseq__20740__auto__ = ((((3) < args__20739__auto__.length))?(new cljs.core.IndexedSeq(args__20739__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.case$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__20740__auto__);
});

cljs.core$macros.case$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,e,clauses){
var default$ = ((cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,clauses)))?cljs.core.last.call(null,clauses):cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"No matching clause: "),(function (){var x__20461__auto__ = e;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})()))));
var env = _AMPERSAND_env;
var pairs = cljs.core.reduce.call(null,((function (default$,env){
return (function (m,p__30786){
var vec__30787 = p__30786;
var test = cljs.core.nth.call(null,vec__30787,(0),null);
var expr = cljs.core.nth.call(null,vec__30787,(1),null);
if(cljs.core.seq_QMARK_.call(null,test)){
return cljs.core.reduce.call(null,((function (vec__30787,test,expr,default$,env){
return (function (m__$1,test__$1){
var test__$2 = (((test__$1 instanceof cljs.core.Symbol))?cljs.core._conj.call(null,(function (){var x__20461__auto__ = test__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),new cljs.core.Symbol(null,"quote","quote",1377916282,null)):test__$1);
return cljs.core$macros.assoc_test.call(null,m__$1,test__$2,expr,env);
});})(vec__30787,test,expr,default$,env))
,m,test);
} else {
if((test instanceof cljs.core.Symbol)){
return cljs.core$macros.assoc_test.call(null,m,cljs.core._conj.call(null,(function (){var x__20461__auto__ = test;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
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
return (function (p1__30778_SHARP_){
return cljs.core$macros.const_QMARK_.call(null,env,p1__30778_SHARP_);
});})(default$,env,pairs,esym,tests))
),tests)){
var no_default = ((cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,clauses)))?cljs.core.butlast.call(null,clauses):clauses);
var tests__$1 = cljs.core.mapv.call(null,((function (no_default,default$,env,pairs,esym,tests){
return (function (p1__30779_SHARP_){
if(cljs.core.seq_QMARK_.call(null,p1__30779_SHARP_)){
return cljs.core.vec.call(null,p1__30779_SHARP_);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30779_SHARP_], null);
}
});})(no_default,default$,env,pairs,esym,tests))
,cljs.core.take_nth.call(null,(2),no_default));
var thens = cljs.core.vec.call(null,cljs.core.take_nth.call(null,(2),cljs.core.drop.call(null,(1),no_default)));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__20461__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__20461__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = e;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"case*","case*",-1938255072,null)),(function (){var x__20461__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = tests__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = thens;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = default$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
} else {
if(cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,tests)){
var tests__$1 = cljs.core.mapv.call(null,((function (default$,env,pairs,esym,tests){
return (function (p1__30781_SHARP_){
if(cljs.core.seq_QMARK_.call(null,p1__30781_SHARP_)){
return cljs.core.vec.call(null,p1__30781_SHARP_);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30781_SHARP_], null);
}
});})(default$,env,pairs,esym,tests))
,cljs.core.vec.call(null,cljs.core.map.call(null,((function (default$,env,pairs,esym,tests){
return (function (p1__30780_SHARP_){
return [cljs.core.str(p1__30780_SHARP_)].join('').substring((1));
});})(default$,env,pairs,esym,tests))
,tests)));
var thens = cljs.core.vec.call(null,cljs.core.vals.call(null,pairs));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__20461__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__20461__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","keyword?","cljs.core$macros/keyword?",1362730141,null)),(function (){var x__20461__auto__ = e;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-fqn",".-fqn",1246113027,null)),(function (){var x__20461__auto__ = e;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"case*","case*",-1938255072,null)),(function (){var x__20461__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = tests__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = thens;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = default$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__20461__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__20461__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = e;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","cond","cljs.core$macros/cond",1626318471,null)),cljs.core.mapcat.call(null,((function (default$,env,pairs,esym,tests){
return (function (p__30794){
var vec__30795 = p__30794;
var m = cljs.core.nth.call(null,vec__30795,(0),null);
var c = cljs.core.nth.call(null,vec__30795,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null)),(function (){var x__20461__auto__ = m;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
});})(default$,env,pairs,esym,tests))
,pairs),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"else","else",-1508377146)),(function (){var x__20461__auto__ = default$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));

}
}
});

cljs.core$macros.case$.cljs$lang$maxFixedArity = (3);

cljs.core$macros.case$.cljs$lang$applyTo = (function (seq30782){
var G__30783 = cljs.core.first.call(null,seq30782);
var seq30782__$1 = cljs.core.next.call(null,seq30782);
var G__30784 = cljs.core.first.call(null,seq30782__$1);
var seq30782__$2 = cljs.core.next.call(null,seq30782__$1);
var G__30785 = cljs.core.first.call(null,seq30782__$2);
var seq30782__$3 = cljs.core.next.call(null,seq30782__$2);
return cljs.core$macros.case$.cljs$core$IFn$_invoke$arity$variadic(G__30783,G__30784,G__30785,seq30782__$3);
});


cljs.core$macros.case$.cljs$lang$macro = true;
/**
 * Evaluates expr and throws an exception if it does not evaluate to
 *   logical true.
 */
cljs.core$macros.assert = (function cljs$core$macros$assert(var_args){
var args30801 = [];
var len__20732__auto___30804 = arguments.length;
var i__20733__auto___30805 = (0);
while(true){
if((i__20733__auto___30805 < len__20732__auto___30804)){
args30801.push((arguments[i__20733__auto___30805]));

var G__30806 = (i__20733__auto___30805 + (1));
i__20733__auto___30805 = G__30806;
continue;
} else {
}
break;
}

var G__30803 = args30801.length;
switch (G__30803) {
case 3:
return cljs.core$macros.assert.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.assert.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str((args30801.length - (2)))].join('')));

}
});

cljs.core$macros.assert.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
if(cljs.core.truth_(cljs.core._STAR_assert_STAR_)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-not","cljs.core$macros/when-not",-764302244,null)),(function (){var x__20461__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__20461__auto__ = [cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,x))].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
} else {
return null;
}
});

cljs.core$macros.assert.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,message){
if(cljs.core.truth_(cljs.core._STAR_assert_STAR_)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-not","cljs.core$macros/when-not",-764302244,null)),(function (){var x__20461__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"Assert failed: "),(function (){var x__20461__auto__ = message;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,"\n"),(function (){var x__20461__auto__ = cljs.core.pr_str.call(null,x);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
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
return cljs.core.reduce.call(null,(function (groups,p__30894){
var vec__30895 = p__30894;
var k = cljs.core.nth.call(null,vec__30895,(0),null);
var v = cljs.core.nth.call(null,vec__30895,(1),null);
if((k instanceof cljs.core.Keyword)){
return cljs.core.conj.call(null,cljs.core.pop.call(null,groups),cljs.core.conj.call(null,cljs.core.peek.call(null,groups),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null)));
} else {
return cljs.core.conj.call(null,groups,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
}
}),cljs.core.PersistentVector.EMPTY,cljs.core.partition.call(null,(2),seq_exprs__$1));
});
var err = ((function (to_groups){
return (function() { 
var G__30975__delegate = function (msg){
throw cljs.core.ex_info.call(null,cljs.core.apply.call(null,cljs.core.str,msg),cljs.core.PersistentArrayMap.EMPTY);
};
var G__30975 = function (var_args){
var msg = null;
if (arguments.length > 0) {
var G__30976__i = 0, G__30976__a = new Array(arguments.length -  0);
while (G__30976__i < G__30976__a.length) {G__30976__a[G__30976__i] = arguments[G__30976__i + 0]; ++G__30976__i;}
  msg = new cljs.core.IndexedSeq(G__30976__a,0);
} 
return G__30975__delegate.call(this,msg);};
G__30975.cljs$lang$maxFixedArity = 0;
G__30975.cljs$lang$applyTo = (function (arglist__30977){
var msg = cljs.core.seq(arglist__30977);
return G__30975__delegate(msg);
});
G__30975.cljs$core$IFn$_invoke$arity$variadic = G__30975__delegate;
return G__30975;
})()
;})(to_groups))
;
var emit_bind = ((function (to_groups,err){
return (function cljs$core$macros$for_$_emit_bind(p__30898){
var vec__30937 = p__30898;
var seq__30938 = cljs.core.seq.call(null,vec__30937);
var first__30939 = cljs.core.first.call(null,seq__30938);
var seq__30938__$1 = cljs.core.next.call(null,seq__30938);
var vec__30940 = first__30939;
var seq__30941 = cljs.core.seq.call(null,vec__30940);
var first__30942 = cljs.core.first.call(null,seq__30941);
var seq__30941__$1 = cljs.core.next.call(null,seq__30941);
var bind = first__30942;
var first__30942__$1 = cljs.core.first.call(null,seq__30941__$1);
var seq__30941__$2 = cljs.core.next.call(null,seq__30941__$1);
var expr = first__30942__$1;
var mod_pairs = seq__30941__$2;
var vec__30943 = seq__30938__$1;
var vec__30946 = cljs.core.nth.call(null,vec__30943,(0),null);
var _ = cljs.core.nth.call(null,vec__30946,(0),null);
var next_expr = cljs.core.nth.call(null,vec__30946,(1),null);
var next_groups = vec__30943;
var giter = cljs.core.gensym.call(null,"iter__");
var gxs = cljs.core.gensym.call(null,"s__");
var do_mod = ((function (giter,gxs,vec__30937,seq__30938,first__30939,seq__30938__$1,vec__30940,seq__30941,first__30942,seq__30941__$1,bind,first__30942__$1,seq__30941__$2,expr,mod_pairs,vec__30943,vec__30946,_,next_expr,next_groups,to_groups,err){
return (function cljs$core$macros$for_$_emit_bind_$_do_mod(p__30949){
var vec__30956 = p__30949;
var seq__30957 = cljs.core.seq.call(null,vec__30956);
var first__30958 = cljs.core.first.call(null,seq__30957);
var seq__30957__$1 = cljs.core.next.call(null,seq__30957);
var vec__30959 = first__30958;
var k = cljs.core.nth.call(null,vec__30959,(0),null);
var v = cljs.core.nth.call(null,vec__30959,(1),null);
var pair = vec__30959;
var etc = seq__30957__$1;
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"let","let",-1282412701))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__20461__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs$core$macros$for_$_emit_bind_$_do_mod.call(null,etc);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
} else {
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"while","while",963117786))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__20461__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs$core$macros$for_$_emit_bind_$_do_mod.call(null,etc);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
} else {
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"when","when",-576417306))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__20461__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs$core$macros$for_$_emit_bind_$_do_mod.call(null,etc);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","rest","cljs.core/rest",-285075455,null)),(function (){var x__20461__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
} else {
if((k instanceof cljs.core.Keyword)){
return err.call(null,"Invalid 'for' keyword ",k);
} else {
if(next_groups){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__20461__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"iterys__30808__auto__","iterys__30808__auto__",1341365798,null)),(function (){var x__20461__auto__ = cljs$core$macros$for_$_emit_bind.call(null,next_groups);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"fs__30809__auto__","fs__30809__auto__",-652118085,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"iterys__30808__auto__","iterys__30808__auto__",1341365798,null)),(function (){var x__20461__auto__ = next_expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"fs__30809__auto__","fs__30809__auto__",-652118085,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"fs__30809__auto__","fs__30809__auto__",-652118085,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__20461__auto__ = giter;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","rest","cljs.core/rest",-285075455,null)),(function (){var x__20461__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","rest","cljs.core/rest",-285075455,null)),(function (){var x__20461__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","cons","cljs.core/cons",96507417,null)),(function (){var x__20461__auto__ = body_expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__20461__auto__ = giter;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","rest","cljs.core/rest",-285075455,null)),(function (){var x__20461__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));

}
}
}
}
}
});})(giter,gxs,vec__30937,seq__30938,first__30939,seq__30938__$1,vec__30940,seq__30941,first__30942,seq__30941__$1,bind,first__30942__$1,seq__30941__$2,expr,mod_pairs,vec__30943,vec__30946,_,next_expr,next_groups,to_groups,err))
;
if(next_groups){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__20461__auto__ = giter;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__20461__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","lazy-seq","cljs.core$macros/lazy-seq",806482650,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__20461__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__20461__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-first","cljs.core$macros/when-first",-840670160,null)),(function (){var x__20461__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__20461__auto__ = bind;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = do_mod.call(null,mod_pairs);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
} else {
var gi = cljs.core.gensym.call(null,"i__");
var gb = cljs.core.gensym.call(null,"b__");
var do_cmod = ((function (gi,gb,giter,gxs,do_mod,vec__30937,seq__30938,first__30939,seq__30938__$1,vec__30940,seq__30941,first__30942,seq__30941__$1,bind,first__30942__$1,seq__30941__$2,expr,mod_pairs,vec__30943,vec__30946,_,next_expr,next_groups,to_groups,err){
return (function cljs$core$macros$for_$_emit_bind_$_do_cmod(p__30962){
var vec__30969 = p__30962;
var seq__30970 = cljs.core.seq.call(null,vec__30969);
var first__30971 = cljs.core.first.call(null,seq__30970);
var seq__30970__$1 = cljs.core.next.call(null,seq__30970);
var vec__30972 = first__30971;
var k = cljs.core.nth.call(null,vec__30972,(0),null);
var v = cljs.core.nth.call(null,vec__30972,(1),null);
var pair = vec__30972;
var etc = seq__30970__$1;
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"let","let",-1282412701))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__20461__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs$core$macros$for_$_emit_bind_$_do_cmod.call(null,etc);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
} else {
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"while","while",963117786))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__20461__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs$core$macros$for_$_emit_bind_$_do_cmod.call(null,etc);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
} else {
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"when","when",-576417306))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__20461__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs$core$macros$for_$_emit_bind_$_do_cmod.call(null,etc);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unchecked-inc","cljs.core$macros/unchecked-inc",-1615365330,null)),(function (){var x__20461__auto__ = gi;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
} else {
if((k instanceof cljs.core.Keyword)){
return err.call(null,"Invalid 'for' keyword ",k);
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-append","cljs.core/chunk-append",-243671470,null)),(function (){var x__20461__auto__ = gb;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = body_expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unchecked-inc","cljs.core$macros/unchecked-inc",-1615365330,null)),(function (){var x__20461__auto__ = gi;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));

}
}
}
}
});})(gi,gb,giter,gxs,do_mod,vec__30937,seq__30938,first__30939,seq__30938__$1,vec__30940,seq__30941,first__30942,seq__30941__$1,bind,first__30942__$1,seq__30941__$2,expr,mod_pairs,vec__30943,vec__30946,_,next_expr,next_groups,to_groups,err))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__20461__auto__ = giter;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__20461__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","lazy-seq","cljs.core$macros/lazy-seq",806482650,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__20461__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__20461__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-let","cljs.core$macros/when-let",-2004472648,null)),(function (){var x__20461__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__20461__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__20461__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunked-seq?","cljs.core/chunked-seq?",-712922369,null)),(function (){var x__20461__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__20461__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__30810__auto__","c__30810__auto__",-1195893053,null)),(function (){var x__20461__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-first","cljs.core/chunk-first",-1157877305,null)),(function (){var x__20461__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})()))),cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"/home/ru/clojure/flights-pro/resources/public/js/out/cljs/core.cljc"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2326),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj.call(null,cljs.core.List.EMPTY,52),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2326),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj.call(null,cljs.core.List.EMPTY,82),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"tag","tag",-1290361223)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not-native","cljs.core/not-native",-1716909265,null)))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"size__30811__auto__","size__30811__auto__",2076942424,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__30810__auto__","c__30810__auto__",-1195893053,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = gb;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-buffer","cljs.core/chunk-buffer",14093626,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"size__30811__auto__","size__30811__auto__",2076942424,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","coercive-boolean","cljs.core$macros/coercive-boolean",-450758280,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__20461__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__20461__auto__ = gi;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__20461__auto__ = gi;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"size__30811__auto__","size__30811__auto__",2076942424,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__20461__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__20461__auto__ = bind;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-nth","cljs.core/-nth",504234802,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__30810__auto__","c__30810__auto__",-1195893053,null)),(function (){var x__20461__auto__ = gi;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = do_cmod.call(null,mod_pairs);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-cons","cljs.core/chunk-cons",-250075688,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk","cljs.core/chunk",847936424,null)),(function (){var x__20461__auto__ = gb;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__20461__auto__ = giter;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-rest","cljs.core/chunk-rest",-398161143,null)),(function (){var x__20461__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-cons","cljs.core/chunk-cons",-250075688,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk","cljs.core/chunk",847936424,null)),(function (){var x__20461__auto__ = gb;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__20461__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__20461__auto__ = bind;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null)),(function (){var x__20461__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = do_mod.call(null,mod_pairs);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
}
});})(to_groups,err))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__20461__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"iter__30812__auto__","iter__30812__auto__",1076090980,null)),(function (){var x__20461__auto__ = emit_bind.call(null,to_groups.call(null,seq_exprs));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"iter__30812__auto__","iter__30812__auto__",1076090980,null)),(function (){var x__20461__auto__ = cljs.core.second.call(null,seq_exprs);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
});

cljs.core$macros.for$.cljs$lang$macro = true;
/**
 * Repeatedly executes body (presumably for side-effects) with
 *   bindings and filtering as provided by "for".  Does not retain
 *   the head of the sequence. Returns nil.
 */
cljs.core$macros.doseq = (function cljs$core$macros$doseq(var_args){
var args__20739__auto__ = [];
var len__20732__auto___30983 = arguments.length;
var i__20733__auto___30984 = (0);
while(true){
if((i__20733__auto___30984 < len__20732__auto___30983)){
args__20739__auto__.push((arguments[i__20733__auto___30984]));

var G__30985 = (i__20733__auto___30984 + (1));
i__20733__auto___30984 = G__30985;
continue;
} else {
}
break;
}

var argseq__20740__auto__ = ((((3) < args__20739__auto__.length))?(new cljs.core.IndexedSeq(args__20739__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.doseq.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__20740__auto__);
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
var G__30986__delegate = function (msg){
throw cljs.core.ex_info.call(null,cljs.core.apply.call(null,cljs.core.str,msg),cljs.core.PersistentArrayMap.EMPTY);
};
var G__30986 = function (var_args){
var msg = null;
if (arguments.length > 0) {
var G__30987__i = 0, G__30987__a = new Array(arguments.length -  0);
while (G__30987__i < G__30987__a.length) {G__30987__a[G__30987__i] = arguments[G__30987__i + 0]; ++G__30987__i;}
  msg = new cljs.core.IndexedSeq(G__30987__a,0);
} 
return G__30986__delegate.call(this,msg);};
G__30986.cljs$lang$maxFixedArity = 0;
G__30986.cljs$lang$applyTo = (function (arglist__30988){
var msg = cljs.core.seq(arglist__30988);
return G__30986__delegate(msg);
});
G__30986.cljs$core$IFn$_invoke$arity$variadic = G__30986__delegate;
return G__30986;
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
var recform__$1 = (((k instanceof cljs.core.Keyword))?recform:cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","next","cljs.core/next",-1291438473,null)),(function (){var x__20461__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0))))));
var steppair = cljs$core$macros$step.call(null,recform__$1,cljs.core.nnext.call(null,exprs));
var needrec = steppair.call(null,(0));
var subform = steppair.call(null,(1));
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"let","let",-1282412701))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [needrec,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__20461__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = subform;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())))], null);
} else {
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"while","while",963117786))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__20461__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = subform;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(cljs.core.truth_(needrec)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recform__$1], null):null))))], null);
} else {
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"when","when",-576417306))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__20461__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__20461__auto__ = subform;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(cljs.core.truth_(needrec)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recform__$1], null):null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = recform__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())))], null);
} else {
if((k instanceof cljs.core.Keyword)){
return err.call(null,"Invalid 'doseq' keyword",k);
} else {
var chunksym = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"chunk__"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"not-native","not-native",-236392494,null)], null));
var countsym = cljs.core.gensym.call(null,"count__");
var isym = cljs.core.gensym.call(null,"i__");
var recform_chunk = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__20461__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = chunksym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = countsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unchecked-inc","cljs.core$macros/unchecked-inc",-1615365330,null)),(function (){var x__20461__auto__ = isym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
var steppair_chunk = cljs$core$macros$step.call(null,recform_chunk,cljs.core.nnext.call(null,exprs));
var subform_chunk = steppair_chunk.call(null,(1));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__20461__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__20461__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__20461__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = chunksym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__20461__auto__ = countsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),(function (){var x__20461__auto__ = isym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","coercive-boolean","cljs.core$macros/coercive-boolean",-450758280,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__20461__auto__ = isym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = countsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__20461__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__20461__auto__ = k;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-nth","cljs.core/-nth",504234802,null)),(function (){var x__20461__auto__ = chunksym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = isym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = subform_chunk;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(cljs.core.truth_(needrec)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recform_chunk], null):null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-let","cljs.core$macros/when-let",-2004472648,null)),(function (){var x__20461__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__20461__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__20461__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunked-seq?","cljs.core/chunked-seq?",-712922369,null)),(function (){var x__20461__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__20461__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__30978__auto__","c__30978__auto__",-1847948211,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-first","cljs.core/chunk-first",-1157877305,null)),(function (){var x__20461__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-rest","cljs.core/chunk-rest",-398161143,null)),(function (){var x__20461__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__30978__auto__","c__30978__auto__",-1847948211,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__30978__auto__","c__30978__auto__",-1847948211,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__20461__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__20461__auto__ = k;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null)),(function (){var x__20461__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = subform;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(cljs.core.truth_(needrec)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recform__$1], null):null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
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

cljs.core$macros.doseq.cljs$lang$applyTo = (function (seq30979){
var G__30980 = cljs.core.first.call(null,seq30979);
var seq30979__$1 = cljs.core.next.call(null,seq30979);
var G__30981 = cljs.core.first.call(null,seq30979__$1);
var seq30979__$2 = cljs.core.next.call(null,seq30979__$1);
var G__30982 = cljs.core.first.call(null,seq30979__$2);
var seq30979__$3 = cljs.core.next.call(null,seq30979__$2);
return cljs.core$macros.doseq.cljs$core$IFn$_invoke$arity$variadic(G__30980,G__30981,G__30982,seq30979__$3);
});


cljs.core$macros.doseq.cljs$lang$macro = true;
cljs.core$macros.array = (function cljs$core$macros$array(var_args){
var args__20739__auto__ = [];
var len__20732__auto___30992 = arguments.length;
var i__20733__auto___30993 = (0);
while(true){
if((i__20733__auto___30993 < len__20732__auto___30992)){
args__20739__auto__.push((arguments[i__20733__auto___30993]));

var G__30994 = (i__20733__auto___30993 + (1));
i__20733__auto___30993 = G__30994;
continue;
} else {
}
break;
}

var argseq__20740__auto__ = ((((2) < args__20739__auto__.length))?(new cljs.core.IndexedSeq(args__20739__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.array.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__20740__auto__);
});

cljs.core$macros.array.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,rest){
var xs_str = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,",",cljs.core.take.call(null,cljs.core.count.call(null,rest),cljs.core.repeat.call(null,"~{}"))));
return cljs.core.vary_meta.call(null,cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),[cljs.core.str("["),cljs.core.str(xs_str),cljs.core.str("]")].join(''),rest),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"array","array",-440182315,null));
});

cljs.core$macros.array.cljs$lang$maxFixedArity = (2);

cljs.core$macros.array.cljs$lang$applyTo = (function (seq30989){
var G__30990 = cljs.core.first.call(null,seq30989);
var seq30989__$1 = cljs.core.next.call(null,seq30989);
var G__30991 = cljs.core.first.call(null,seq30989__$1);
var seq30989__$2 = cljs.core.next.call(null,seq30989__$1);
return cljs.core$macros.array.cljs$core$IFn$_invoke$arity$variadic(G__30990,G__30991,seq30989__$2);
});


cljs.core$macros.array.cljs$lang$macro = true;
cljs.core$macros.make_array = (function cljs$core$macros$make_array(var_args){
var args30998 = [];
var len__20732__auto___31006 = arguments.length;
var i__20733__auto___31007 = (0);
while(true){
if((i__20733__auto___31007 < len__20732__auto___31006)){
args30998.push((arguments[i__20733__auto___31007]));

var G__31008 = (i__20733__auto___31007 + (1));
i__20733__auto___31007 = G__31008;
continue;
} else {
}
break;
}

var G__31005 = args30998.length;
switch (G__31005) {
case 3:
return cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__20751__auto__ = (new cljs.core.IndexedSeq(args30998.slice((4)),(0),null));
return cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__20751__auto__);

}
});

cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,size){
return cljs.core.vary_meta.call(null,((typeof size === 'number')?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),cljs.core.take.call(null,size,cljs.core.repeat.call(null,null))))):cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Array.","js/Array.",1235645307,null)),(function (){var x__20461__auto__ = size;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"array","array",-440182315,null));
});

cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,type,size){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","make-array","cljs.core/make-array",-1802166799,null)),(function (){var x__20461__auto__ = size;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
});

cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,type,size,more_sizes){
return cljs.core.vary_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__20461__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dims__30995__auto__","dims__30995__auto__",2142559408,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","list","cljs.core$macros/list",-1408486806,null)),more_sizes)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dimarray__30996__auto__","dimarray__30996__auto__",-619943979,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","make-array","cljs.core/make-array",-1802166799,null)),(function (){var x__20461__auto__ = size;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","dotimes","cljs.core$macros/dotimes",-1407597661,null)),(function (){var x__20461__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__30997__auto__","i__30997__auto__",-441658019,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dimarray__30996__auto__","dimarray__30996__auto__",-619943979,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aset","cljs.core$macros/aset",-693176374,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dimarray__30996__auto__","dimarray__30996__auto__",-619943979,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__30997__auto__","i__30997__auto__",-441658019,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","make-array","cljs.core/make-array",-1802166799,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dims__30995__auto__","dims__30995__auto__",2142559408,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dimarray__30996__auto__","dimarray__30996__auto__",-619943979,null))))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"array","array",-440182315,null));
});

cljs.core$macros.make_array.cljs$lang$applyTo = (function (seq30999){
var G__31000 = cljs.core.first.call(null,seq30999);
var seq30999__$1 = cljs.core.next.call(null,seq30999);
var G__31001 = cljs.core.first.call(null,seq30999__$1);
var seq30999__$2 = cljs.core.next.call(null,seq30999__$1);
var G__31002 = cljs.core.first.call(null,seq30999__$2);
var seq30999__$3 = cljs.core.next.call(null,seq30999__$2);
var G__31003 = cljs.core.first.call(null,seq30999__$3);
var seq30999__$4 = cljs.core.next.call(null,seq30999__$3);
return cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$variadic(G__31000,G__31001,G__31002,G__31003,seq30999__$4);
});

cljs.core$macros.make_array.cljs$lang$maxFixedArity = (4);


cljs.core$macros.make_array.cljs$lang$macro = true;
cljs.core$macros.list = (function cljs$core$macros$list(var_args){
var args31011 = [];
var len__20732__auto___31018 = arguments.length;
var i__20733__auto___31019 = (0);
while(true){
if((i__20733__auto___31019 < len__20732__auto___31018)){
args31011.push((arguments[i__20733__auto___31019]));

var G__31020 = (i__20733__auto___31019 + (1));
i__20733__auto___31019 = G__31020;
continue;
} else {
}
break;
}

var G__31017 = args31011.length;
switch (G__31017) {
case 2:
return cljs.core$macros.list.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__20751__auto__ = (new cljs.core.IndexedSeq(args31011.slice((3)),(0),null));
return cljs.core$macros.list.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__20751__auto__);

}
});

cljs.core$macros.list.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.list(new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null),new cljs.core.Symbol("cljs.core","List","cljs.core/List",1708954352,null));
});

cljs.core$macros.list.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,xs){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"constant","constant",-379609303),new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.analyze.call(null,_AMPERSAND_env,x)))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-conj","cljs.core/-conj",2040622670,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","list","cljs.core$macros/list",-1408486806,null)),xs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__20461__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__31010__auto__","x__31010__auto__",-292730543,null)),(function (){var x__20461__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-conj","cljs.core/-conj",2040622670,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","list","cljs.core$macros/list",-1408486806,null)),xs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__31010__auto__","x__31010__auto__",-292730543,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
}
});

cljs.core$macros.list.cljs$lang$applyTo = (function (seq31012){
var G__31013 = cljs.core.first.call(null,seq31012);
var seq31012__$1 = cljs.core.next.call(null,seq31012);
var G__31014 = cljs.core.first.call(null,seq31012__$1);
var seq31012__$2 = cljs.core.next.call(null,seq31012__$1);
var G__31015 = cljs.core.first.call(null,seq31012__$2);
var seq31012__$3 = cljs.core.next.call(null,seq31012__$2);
return cljs.core$macros.list.cljs$core$IFn$_invoke$arity$variadic(G__31013,G__31014,G__31015,seq31012__$3);
});

cljs.core$macros.list.cljs$lang$maxFixedArity = (3);


cljs.core$macros.list.cljs$lang$macro = true;
cljs.core$macros.vector = (function cljs$core$macros$vector(var_args){
var args31022 = [];
var len__20732__auto___31028 = arguments.length;
var i__20733__auto___31029 = (0);
while(true){
if((i__20733__auto___31029 < len__20732__auto___31028)){
args31022.push((arguments[i__20733__auto___31029]));

var G__31030 = (i__20733__auto___31029 + (1));
i__20733__auto___31029 = G__31030;
continue;
} else {
}
break;
}

var G__31027 = args31022.length;
switch (G__31027) {
case 2:
return cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__20751__auto__ = (new cljs.core.IndexedSeq(args31022.slice((2)),(0),null));
return cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__20751__auto__);

}
});

cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.list(new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null),new cljs.core.Symbol("cljs.core","PersistentVector","cljs.core/PersistentVector",-1211028272,null));
});

cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
var cnt = cljs.core.count.call(null,xs);
if((cnt < (32))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentVector.","cljs.core/PersistentVector.",-1074647876,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__20461__auto__ = cnt;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(5)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-EMPTY-NODE",".-EMPTY-NODE",-1333332641,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentVector","cljs.core/PersistentVector",-1211028272,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),xs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
} else {
return cljs.core.vary_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".fromArray",".fromArray",1053499311,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentVector","cljs.core/PersistentVector",-1211028272,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),xs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true)))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","PersistentVector","cljs.core/PersistentVector",-1211028272,null));
}
});

cljs.core$macros.vector.cljs$lang$applyTo = (function (seq31023){
var G__31024 = cljs.core.first.call(null,seq31023);
var seq31023__$1 = cljs.core.next.call(null,seq31023);
var G__31025 = cljs.core.first.call(null,seq31023__$1);
var seq31023__$2 = cljs.core.next.call(null,seq31023__$1);
return cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$variadic(G__31024,G__31025,seq31023__$2);
});

cljs.core$macros.vector.cljs$lang$maxFixedArity = (2);


cljs.core$macros.vector.cljs$lang$macro = true;
cljs.core$macros.array_map = (function cljs$core$macros$array_map(var_args){
var args31034 = [];
var len__20732__auto___31040 = arguments.length;
var i__20733__auto___31041 = (0);
while(true){
if((i__20733__auto___31041 < len__20732__auto___31040)){
args31034.push((arguments[i__20733__auto___31041]));

var G__31042 = (i__20733__auto___31041 + (1));
i__20733__auto___31041 = G__31042;
continue;
} else {
}
break;
}

var G__31039 = args31034.length;
switch (G__31039) {
case 2:
return cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__20751__auto__ = (new cljs.core.IndexedSeq(args31034.slice((2)),(0),null));
return cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__20751__auto__);

}
});

cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.list(new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null),new cljs.core.Symbol("cljs.core","PersistentArrayMap","cljs.core/PersistentArrayMap",1025194468,null));
});

cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,kvs){
var keys = cljs.core.map.call(null,cljs.core.first,cljs.core.partition.call(null,(2),kvs));
if((cljs.core.every_QMARK_.call(null,((function (keys){
return (function (p1__31032_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__31032_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
});})(keys))
,cljs.core.map.call(null,((function (keys){
return (function (p1__31033_SHARP_){
return cljs.analyzer.analyze.call(null,_AMPERSAND_env,p1__31033_SHARP_);
});})(keys))
,keys))) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,keys)),cljs.core.count.call(null,keys)))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentArrayMap.","cljs.core/PersistentArrayMap.",-471979341,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__20461__auto__ = (cljs.core.count.call(null,kvs) / (2));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),kvs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".fromArray",".fromArray",1053499311,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentArrayMap","cljs.core/PersistentArrayMap",1025194468,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),kvs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
}
});

cljs.core$macros.array_map.cljs$lang$applyTo = (function (seq31035){
var G__31036 = cljs.core.first.call(null,seq31035);
var seq31035__$1 = cljs.core.next.call(null,seq31035);
var G__31037 = cljs.core.first.call(null,seq31035__$1);
var seq31035__$2 = cljs.core.next.call(null,seq31035__$1);
return cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$variadic(G__31036,G__31037,seq31035__$2);
});

cljs.core$macros.array_map.cljs$lang$maxFixedArity = (2);


cljs.core$macros.array_map.cljs$lang$macro = true;
cljs.core$macros.hash_map = (function cljs$core$macros$hash_map(var_args){
var args31044 = [];
var len__20732__auto___31050 = arguments.length;
var i__20733__auto___31051 = (0);
while(true){
if((i__20733__auto___31051 < len__20732__auto___31050)){
args31044.push((arguments[i__20733__auto___31051]));

var G__31052 = (i__20733__auto___31051 + (1));
i__20733__auto___31051 = G__31052;
continue;
} else {
}
break;
}

var G__31049 = args31044.length;
switch (G__31049) {
case 2:
return cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__20751__auto__ = (new cljs.core.IndexedSeq(args31044.slice((2)),(0),null));
return cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__20751__auto__);

}
});

cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentHashMap","cljs.core/PersistentHashMap",-454120575,null)))));
});

cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,kvs){
var pairs = cljs.core.partition.call(null,(2),kvs);
var ks = cljs.core.map.call(null,cljs.core.first,pairs);
var vs = cljs.core.map.call(null,cljs.core.second,pairs);
return cljs.core.vary_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".fromArrays",".fromArrays",1110244209,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentHashMap","cljs.core/PersistentHashMap",-454120575,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),ks)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),vs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})()))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","PersistentHashMap","cljs.core/PersistentHashMap",-454120575,null));
});

cljs.core$macros.hash_map.cljs$lang$applyTo = (function (seq31045){
var G__31046 = cljs.core.first.call(null,seq31045);
var seq31045__$1 = cljs.core.next.call(null,seq31045);
var G__31047 = cljs.core.first.call(null,seq31045__$1);
var seq31045__$2 = cljs.core.next.call(null,seq31045__$1);
return cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$variadic(G__31046,G__31047,seq31045__$2);
});

cljs.core$macros.hash_map.cljs$lang$maxFixedArity = (2);


cljs.core$macros.hash_map.cljs$lang$macro = true;
cljs.core$macros.hash_set = (function cljs$core$macros$hash_set(var_args){
var args31056 = [];
var len__20732__auto___31062 = arguments.length;
var i__20733__auto___31063 = (0);
while(true){
if((i__20733__auto___31063 < len__20732__auto___31062)){
args31056.push((arguments[i__20733__auto___31063]));

var G__31064 = (i__20733__auto___31063 + (1));
i__20733__auto___31063 = G__31064;
continue;
} else {
}
break;
}

var G__31061 = args31056.length;
switch (G__31061) {
case 2:
return cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__20751__auto__ = (new cljs.core.IndexedSeq(args31056.slice((2)),(0),null));
return cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__20751__auto__);

}
});

cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentHashSet","cljs.core/PersistentHashSet",-967232330,null)))));
});

cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
if(((cljs.core.count.call(null,xs) <= (8))) && (cljs.core.every_QMARK_.call(null,(function (p1__31054_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__31054_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),cljs.core.map.call(null,(function (p1__31055_SHARP_){
return cljs.analyzer.analyze.call(null,_AMPERSAND_env,p1__31055_SHARP_);
}),xs))) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,xs)),cljs.core.count.call(null,xs)))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentHashSet.","cljs.core/PersistentHashSet.",300313251,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentArrayMap.","cljs.core/PersistentArrayMap.",-471979341,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__20461__auto__ = cljs.core.count.call(null,xs);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),cljs.core.interleave.call(null,xs,cljs.core.repeat.call(null,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
} else {
return cljs.core.vary_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".fromArray",".fromArray",1053499311,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentHashSet","cljs.core/PersistentHashSet",-967232330,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),xs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true)))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","PersistentHashSet","cljs.core/PersistentHashSet",-967232330,null));
}
});

cljs.core$macros.hash_set.cljs$lang$applyTo = (function (seq31057){
var G__31058 = cljs.core.first.call(null,seq31057);
var seq31057__$1 = cljs.core.next.call(null,seq31057);
var G__31059 = cljs.core.first.call(null,seq31057__$1);
var seq31057__$2 = cljs.core.next.call(null,seq31057__$1);
return cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$variadic(G__31058,G__31059,seq31057__$2);
});

cljs.core$macros.hash_set.cljs$lang$maxFixedArity = (2);


cljs.core$macros.hash_set.cljs$lang$macro = true;
cljs.core$macros.js_obj_STAR_ = (function cljs$core$macros$js_obj_STAR_(kvs){
var kvs_str = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,",",cljs.core.take.call(null,cljs.core.count.call(null,kvs),cljs.core.repeat.call(null,"~{}:~{}"))));
return cljs.core.vary_meta.call(null,cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),[cljs.core.str("{"),cljs.core.str(kvs_str),cljs.core.str("}")].join(''),cljs.core.apply.call(null,cljs.core.concat,kvs)),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"object","object",-1179821820,null));
});
cljs.core$macros.js_obj = (function cljs$core$macros$js_obj(var_args){
var args__20739__auto__ = [];
var len__20732__auto___31081 = arguments.length;
var i__20733__auto___31082 = (0);
while(true){
if((i__20733__auto___31082 < len__20732__auto___31081)){
args__20739__auto__.push((arguments[i__20733__auto___31082]));

var G__31083 = (i__20733__auto___31082 + (1));
i__20733__auto___31082 = G__31083;
continue;
} else {
}
break;
}

var argseq__20740__auto__ = ((((2) < args__20739__auto__.length))?(new cljs.core.IndexedSeq(args__20739__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.js_obj.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__20740__auto__);
});

cljs.core$macros.js_obj.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,rest){
var sym_or_str_QMARK_ = (function (x){
return ((x instanceof cljs.core.Symbol)) || (typeof x === 'string');
});
var filter_on_keys = ((function (sym_or_str_QMARK_){
return (function (f,coll){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,((function (sym_or_str_QMARK_){
return (function (p__31069){
var vec__31070 = p__31069;
var k = cljs.core.nth.call(null,vec__31070,(0),null);
var _ = cljs.core.nth.call(null,vec__31070,(1),null);
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__20461__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.apply.call(null,cljs.core.concat,clojure.set.map_invert.call(null,expr__GT_local)),(function (){var x__20461__auto__ = obj;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core$macros.js_obj_STAR_.call(null,filter_on_keys.call(null,cljs.core.string_QMARK_,kvs));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),cljs.core.map.call(null,((function (sym_or_str_QMARK_,filter_on_keys,kvs,sym_pairs,expr__GT_local,obj){
return (function (p__31073){
var vec__31074 = p__31073;
var k = cljs.core.nth.call(null,vec__31074,(0),null);
var v = cljs.core.nth.call(null,vec__31074,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aset","cljs.core$macros/aset",-693176374,null)),(function (){var x__20461__auto__ = obj;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = k;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
});})(sym_or_str_QMARK_,filter_on_keys,kvs,sym_pairs,expr__GT_local,obj))
,sym_pairs),cljs.core.map.call(null,((function (sym_or_str_QMARK_,filter_on_keys,kvs,sym_pairs,expr__GT_local,obj){
return (function (p__31077){
var vec__31078 = p__31077;
var k = cljs.core.nth.call(null,vec__31078,(0),null);
var v = cljs.core.nth.call(null,vec__31078,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aset","cljs.core$macros/aset",-693176374,null)),(function (){var x__20461__auto__ = obj;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.get.call(null,kvs,k);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
});})(sym_or_str_QMARK_,filter_on_keys,kvs,sym_pairs,expr__GT_local,obj))
,expr__GT_local),(function (){var x__20461__auto__ = obj;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
}
});

cljs.core$macros.js_obj.cljs$lang$maxFixedArity = (2);

cljs.core$macros.js_obj.cljs$lang$applyTo = (function (seq31066){
var G__31067 = cljs.core.first.call(null,seq31066);
var seq31066__$1 = cljs.core.next.call(null,seq31066);
var G__31068 = cljs.core.first.call(null,seq31066__$1);
var seq31066__$2 = cljs.core.next.call(null,seq31066__$1);
return cljs.core$macros.js_obj.cljs$core$IFn$_invoke$arity$variadic(G__31067,G__31068,seq31066__$2);
});


cljs.core$macros.js_obj.cljs$lang$macro = true;
cljs.core$macros.alength = (function cljs$core$macros$alength(_AMPERSAND_form,_AMPERSAND_env,a){
return cljs.core.vary_meta.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__20461__auto__ = a;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__20461__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"a__31084__auto__","a__31084__auto__",841000424,null)),(function (){var x__20461__auto__ = a;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = ret;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","aclone","cljs.core/aclone",-758078968,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"a__31084__auto__","a__31084__auto__",841000424,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__20461__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__20461__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__20461__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"a__31084__auto__","a__31084__auto__",841000424,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aset","cljs.core$macros/aset",-693176374,null)),(function (){var x__20461__auto__ = ret;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),(function (){var x__20461__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = ret;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
});

cljs.core$macros.amap.cljs$lang$macro = true;
/**
 * Reduces an expression across an array a, using an index named idx,
 *   and return value named ret, initialized to init, setting ret to the
 *   evaluation of expr at each step, returning ret.
 */
cljs.core$macros.areduce = (function cljs$core$macros$areduce(_AMPERSAND_form,_AMPERSAND_env,a,idx,ret,init,expr){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__20461__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"a__31085__auto__","a__31085__auto__",-1086185834,null)),(function (){var x__20461__auto__ = a;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__20461__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__20461__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),(function (){var x__20461__auto__ = ret;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = init;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__20461__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"a__31085__auto__","a__31085__auto__",-1086185834,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),(function (){var x__20461__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = ret;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
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
var args__20739__auto__ = [];
var len__20732__auto___31091 = arguments.length;
var i__20733__auto___31092 = (0);
while(true){
if((i__20733__auto___31092 < len__20732__auto___31091)){
args__20739__auto__.push((arguments[i__20733__auto___31092]));

var G__31093 = (i__20733__auto___31092 + (1));
i__20733__auto___31092 = G__31093;
continue;
} else {
}
break;
}

var argseq__20740__auto__ = ((((3) < args__20739__auto__.length))?(new cljs.core.IndexedSeq(args__20739__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.dotimes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__20740__auto__);
});

cljs.core$macros.dotimes.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
var i = cljs.core.first.call(null,bindings);
var n = cljs.core.second.call(null,bindings);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__20461__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"n__31086__auto__","n__31086__auto__",-56976762,null)),(function (){var x__20461__auto__ = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__20461__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__20461__auto__ = i;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__20461__auto__ = i;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"n__31086__auto__","n__31086__auto__",-56976762,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),body,(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),(function (){var x__20461__auto__ = i;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
});

cljs.core$macros.dotimes.cljs$lang$maxFixedArity = (3);

cljs.core$macros.dotimes.cljs$lang$applyTo = (function (seq31087){
var G__31088 = cljs.core.first.call(null,seq31087);
var seq31087__$1 = cljs.core.next.call(null,seq31087);
var G__31089 = cljs.core.first.call(null,seq31087__$1);
var seq31087__$2 = cljs.core.next.call(null,seq31087__$1);
var G__31090 = cljs.core.first.call(null,seq31087__$2);
var seq31087__$3 = cljs.core.next.call(null,seq31087__$2);
return cljs.core$macros.dotimes.cljs$core$IFn$_invoke$arity$variadic(G__31088,G__31089,G__31090,seq31087__$3);
});


cljs.core$macros.dotimes.cljs$lang$macro = true;
/**
 * Throws an exception if the given option map contains keys not listed
 *   as valid, else returns nil.
 */
cljs.core$macros.check_valid_options = (function cljs$core$macros$check_valid_options(var_args){
var args__20739__auto__ = [];
var len__20732__auto___31097 = arguments.length;
var i__20733__auto___31098 = (0);
while(true){
if((i__20733__auto___31098 < len__20732__auto___31097)){
args__20739__auto__.push((arguments[i__20733__auto___31098]));

var G__31099 = (i__20733__auto___31098 + (1));
i__20733__auto___31098 = G__31099;
continue;
} else {
}
break;
}

var argseq__20740__auto__ = ((((1) < args__20739__auto__.length))?(new cljs.core.IndexedSeq(args__20739__auto__.slice((1)),(0),null)):null);
return cljs.core$macros.check_valid_options.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__20740__auto__);
});

cljs.core$macros.check_valid_options.cljs$core$IFn$_invoke$arity$variadic = (function (options,valid_keys){
if(cljs.core.seq.call(null,cljs.core.apply.call(null,cljs.core.disj,cljs.core.apply.call(null,cljs.core.hash_set,cljs.core.keys.call(null,options)),valid_keys))){
throw cljs.core.apply.call(null,cljs.core.str,"Only these options are valid: ",cljs.core.first.call(null,valid_keys),cljs.core.map.call(null,(function (p1__31094_SHARP_){
return [cljs.core.str(", "),cljs.core.str(p1__31094_SHARP_)].join('');
}),cljs.core.rest.call(null,valid_keys)));
} else {
return null;
}
});

cljs.core$macros.check_valid_options.cljs$lang$maxFixedArity = (1);

cljs.core$macros.check_valid_options.cljs$lang$applyTo = (function (seq31095){
var G__31096 = cljs.core.first.call(null,seq31095);
var seq31095__$1 = cljs.core.next.call(null,seq31095);
return cljs.core$macros.check_valid_options.cljs$core$IFn$_invoke$arity$variadic(G__31096,seq31095__$1);
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
var args__20739__auto__ = [];
var len__20732__auto___31109 = arguments.length;
var i__20733__auto___31110 = (0);
while(true){
if((i__20733__auto___31110 < len__20732__auto___31109)){
args__20739__auto__.push((arguments[i__20733__auto___31110]));

var G__31111 = (i__20733__auto___31110 + (1));
i__20733__auto___31110 = G__31111;
continue;
} else {
}
break;
}

var argseq__20740__auto__ = ((((3) < args__20739__auto__.length))?(new cljs.core.IndexedSeq(args__20739__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.defmulti.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__20740__auto__);
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

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defonce","cljs.core$macros/defonce",-1096231613,null)),(function (){var x__20461__auto__ = cljs.core.with_meta.call(null,mm_name,m__$2);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__20461__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"method-table__31100__auto__","method-table__31100__auto__",-999647213,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null)),(function (){var x__20461__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"prefer-table__31101__auto__","prefer-table__31101__auto__",-579010965,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null)),(function (){var x__20461__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"method-cache__31102__auto__","method-cache__31102__auto__",107442908,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null)),(function (){var x__20461__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cached-hierarchy__31103__auto__","cached-hierarchy__31103__auto__",-1042910636,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null)),(function (){var x__20461__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"hierarchy__31104__auto__","hierarchy__31104__auto__",1324225754,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null)),(function (){var x__20461__auto__ = options__$4;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","get-global-hierarchy","cljs.core/get-global-hierarchy",48052871,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","MultiFn.","cljs.core/MultiFn.",1073941573,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","symbol","cljs.core/symbol",195265748,null)),(function (){var x__20461__auto__ = mm_ns;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.name.call(null,mm_name);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = dispatch_fn;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = default$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"hierarchy__31104__auto__","hierarchy__31104__auto__",1324225754,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"method-table__31100__auto__","method-table__31100__auto__",-999647213,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"prefer-table__31101__auto__","prefer-table__31101__auto__",-579010965,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"method-cache__31102__auto__","method-cache__31102__auto__",107442908,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cached-hierarchy__31103__auto__","cached-hierarchy__31103__auto__",-1042910636,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
});

cljs.core$macros.defmulti.cljs$lang$maxFixedArity = (3);

cljs.core$macros.defmulti.cljs$lang$applyTo = (function (seq31105){
var G__31106 = cljs.core.first.call(null,seq31105);
var seq31105__$1 = cljs.core.next.call(null,seq31105);
var G__31107 = cljs.core.first.call(null,seq31105__$1);
var seq31105__$2 = cljs.core.next.call(null,seq31105__$1);
var G__31108 = cljs.core.first.call(null,seq31105__$2);
var seq31105__$3 = cljs.core.next.call(null,seq31105__$2);
return cljs.core$macros.defmulti.cljs$core$IFn$_invoke$arity$variadic(G__31106,G__31107,G__31108,seq31105__$3);
});


cljs.core$macros.defmulti.cljs$lang$macro = true;
/**
 * Creates and installs a new method of multimethod associated with dispatch-value. 
 */
cljs.core$macros.defmethod = (function cljs$core$macros$defmethod(var_args){
var args__20739__auto__ = [];
var len__20732__auto___31117 = arguments.length;
var i__20733__auto___31118 = (0);
while(true){
if((i__20733__auto___31118 < len__20732__auto___31117)){
args__20739__auto__.push((arguments[i__20733__auto___31118]));

var G__31119 = (i__20733__auto___31118 + (1));
i__20733__auto___31118 = G__31119;
continue;
} else {
}
break;
}

var argseq__20740__auto__ = ((((4) < args__20739__auto__.length))?(new cljs.core.IndexedSeq(args__20739__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.defmethod.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__20740__auto__);
});

cljs.core$macros.defmethod.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,multifn,dispatch_val,fn_tail){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-add-method","cljs.core/-add-method",571092113,null)),(function (){var x__20461__auto__ = cljs.core.with_meta.call(null,multifn,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","MultiFn","cljs.core/MultiFn",1487419554,null)], null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = dispatch_val;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),fn_tail)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
});

cljs.core$macros.defmethod.cljs$lang$maxFixedArity = (4);

cljs.core$macros.defmethod.cljs$lang$applyTo = (function (seq31112){
var G__31113 = cljs.core.first.call(null,seq31112);
var seq31112__$1 = cljs.core.next.call(null,seq31112);
var G__31114 = cljs.core.first.call(null,seq31112__$1);
var seq31112__$2 = cljs.core.next.call(null,seq31112__$1);
var G__31115 = cljs.core.first.call(null,seq31112__$2);
var seq31112__$3 = cljs.core.next.call(null,seq31112__$2);
var G__31116 = cljs.core.first.call(null,seq31112__$3);
var seq31112__$4 = cljs.core.next.call(null,seq31112__$3);
return cljs.core$macros.defmethod.cljs$core$IFn$_invoke$arity$variadic(G__31113,G__31114,G__31115,G__31116,seq31112__$4);
});


cljs.core$macros.defmethod.cljs$lang$macro = true;
/**
 * Evaluates expr and prints the time it took. Returns the value of expr.
 */
cljs.core$macros.time = (function cljs$core$macros$time(_AMPERSAND_form,_AMPERSAND_env,expr){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__20461__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"start__31120__auto__","start__31120__auto__",1252304546,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","system-time","cljs.core/system-time",1562011930,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ret__31121__auto__","ret__31121__auto__",396792131,null)),(function (){var x__20461__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","prn","cljs.core/prn",1725204552,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"Elapsed time: "),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".toFixed",".toFixed",-895046938,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","system-time","cljs.core/system-time",1562011930,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"start__31120__auto__","start__31120__auto__",1252304546,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(6)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY," msecs"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ret__31121__auto__","ret__31121__auto__",396792131,null)))));
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
var args__20739__auto__ = [];
var len__20732__auto___31136 = arguments.length;
var i__20733__auto___31137 = (0);
while(true){
if((i__20733__auto___31137 < len__20732__auto___31136)){
args__20739__auto__.push((arguments[i__20733__auto___31137]));

var G__31138 = (i__20733__auto___31137 + (1));
i__20733__auto___31137 = G__31138;
continue;
} else {
}
break;
}

var argseq__20740__auto__ = ((((5) < args__20739__auto__.length))?(new cljs.core.IndexedSeq(args__20739__auto__.slice((5)),(0),null)):null);
return cljs.core$macros.simple_benchmark.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__20740__auto__);
});

cljs.core$macros.simple_benchmark.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,expr,iterations,p__31133){
var map__31134 = p__31133;
var map__31134__$1 = ((((!((map__31134 == null)))?((((map__31134.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31134.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31134):map__31134);
var print_fn = cljs.core.get.call(null,map__31134__$1,new cljs.core.Keyword(null,"print-fn","print-fn",-1720960489),new cljs.core.Symbol(null,"println","println",-733595439,null));
var bs_str = cljs.core.pr_str.call(null,bindings);
var expr_str = cljs.core.pr_str.call(null,expr);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__20461__auto__ = bindings;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__20461__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"start__31122__auto__","start__31122__auto__",1370214347,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".getTime",".getTime",-1048557777,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Date.","js/Date.",384205255,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ret__31123__auto__","ret__31123__auto__",561453280,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","dotimes","cljs.core$macros/dotimes",-1407597661,null)),(function (){var x__20461__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"___31124__auto__","___31124__auto__",1413564432,null)),(function (){var x__20461__auto__ = iterations;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"end__31125__auto__","end__31125__auto__",-1533584789,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".getTime",".getTime",-1048557777,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Date.","js/Date.",384205255,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"elapsed__31126__auto__","elapsed__31126__auto__",-1813190574,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"end__31125__auto__","end__31125__auto__",-1533584789,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"start__31122__auto__","start__31122__auto__",1370214347,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__20461__auto__ = print_fn;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","str","cljs.core$macros/str",-2019499702,null)),(function (){var x__20461__auto__ = bs_str;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,", "),(function (){var x__20461__auto__ = expr_str;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,", "),(function (){var x__20461__auto__ = iterations;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY," runs, "),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"elapsed__31126__auto__","elapsed__31126__auto__",-1813190574,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY," msecs"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
});

cljs.core$macros.simple_benchmark.cljs$lang$maxFixedArity = (5);

cljs.core$macros.simple_benchmark.cljs$lang$applyTo = (function (seq31127){
var G__31128 = cljs.core.first.call(null,seq31127);
var seq31127__$1 = cljs.core.next.call(null,seq31127);
var G__31129 = cljs.core.first.call(null,seq31127__$1);
var seq31127__$2 = cljs.core.next.call(null,seq31127__$1);
var G__31130 = cljs.core.first.call(null,seq31127__$2);
var seq31127__$3 = cljs.core.next.call(null,seq31127__$2);
var G__31131 = cljs.core.first.call(null,seq31127__$3);
var seq31127__$4 = cljs.core.next.call(null,seq31127__$3);
var G__31132 = cljs.core.first.call(null,seq31127__$4);
var seq31127__$5 = cljs.core.next.call(null,seq31127__$4);
return cljs.core$macros.simple_benchmark.cljs$core$IFn$_invoke$arity$variadic(G__31128,G__31129,G__31130,G__31131,G__31132,seq31127__$5);
});


cljs.core$macros.simple_benchmark.cljs$lang$macro = true;
cljs.core$macros.cs = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.gensym,cljs.core.str,cljs.core.char$),cljs.core.range.call(null,(97),(118))));
cljs.core$macros.gen_apply_to_helper = (function cljs$core$macros$gen_apply_to_helper(var_args){
var args31139 = [];
var len__20732__auto___31142 = arguments.length;
var i__20733__auto___31143 = (0);
while(true){
if((i__20733__auto___31143 < len__20732__auto___31142)){
args31139.push((arguments[i__20733__auto___31143]));

var G__31144 = (i__20733__auto___31143 + (1));
i__20733__auto___31143 = G__31144;
continue;
} else {
}
break;
}

var G__31141 = args31139.length;
switch (G__31141) {
case 0:
return cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31139.length)].join('')));

}
});

cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core$macros.gen_apply_to_helper.call(null,(1));
});

cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$1 = (function (n){
var prop = cljs.core.symbol.call(null,[cljs.core.str("-cljs$core$IFn$_invoke$arity$"),cljs.core.str(n)].join(''));
var f = cljs.core.symbol.call(null,[cljs.core.str("cljs$core$IFn$_invoke$arity$"),cljs.core.str(n)].join(''));
if((n <= (20))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__20461__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__20461__auto__ = cljs.core$macros.cs.call(null,(n - (1)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-first","cljs.core/-first",545297391,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-rest","cljs.core/-rest",-1829241664,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","==","cljs.core$macros/==",-818551413,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argc","argc",187692008,null)),(function (){var x__20461__auto__ = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"f","f",43394975,null)),(function (){var x__20461__auto__ = prop;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"f","f",43394975,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__20461__auto__ = f;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),cljs.core.take.call(null,n,cljs.core$macros.cs))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"f","f",43394975,null)),cljs.core.take.call(null,n,cljs.core$macros.cs))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core$macros.gen_apply_to_helper.call(null,(n + (1)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"Only up to 20 arguments supported on functions"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
}
});

cljs.core$macros.gen_apply_to_helper.cljs$lang$maxFixedArity = 1;

cljs.core$macros.gen_apply_to = (function cljs$core$macros$gen_apply_to(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"*unchecked-if*","*unchecked-if*",1542408350,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"apply-to","apply-to",-1858571928,null)),(function (){var x__20461__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"f","f",43394975,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argc","argc",187692008,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__20461__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","zero?","cljs.core$macros/zero?",-65998367,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argc","argc",187692008,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"f","f",43394975,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core$macros.gen_apply_to_helper.call(null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"*unchecked-if*","*unchecked-if*",1542408350,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
});

cljs.core$macros.gen_apply_to.cljs$lang$macro = true;
/**
 * Evaluates exprs in a context in which *print-fn* is bound to .append
 *   on a fresh StringBuffer.  Returns the string created by any nested
 *   printing calls.
 */
cljs.core$macros.with_out_str = (function cljs$core$macros$with_out_str(var_args){
var args__20739__auto__ = [];
var len__20732__auto___31151 = arguments.length;
var i__20733__auto___31152 = (0);
while(true){
if((i__20733__auto___31152 < len__20732__auto___31151)){
args__20739__auto__.push((arguments[i__20733__auto___31152]));

var G__31153 = (i__20733__auto___31152 + (1));
i__20733__auto___31152 = G__31153;
continue;
} else {
}
break;
}

var argseq__20740__auto__ = ((((2) < args__20739__auto__.length))?(new cljs.core.IndexedSeq(args__20739__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.with_out_str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__20740__auto__);
});

cljs.core$macros.with_out_str.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__20461__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"sb__31146__auto__","sb__31146__auto__",-1665691917,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","goog.string.StringBuffer.","js/goog.string.StringBuffer.",-1043451650,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","binding","cljs.core$macros/binding",1855847304,null)),(function (){var x__20461__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","*print-newline*","cljs.core/*print-newline*",6231625,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","*print-fn*","cljs.core/*print-fn*",1342365176,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__20461__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__31147__auto__","x__31147__auto__",1691618738,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".append",".append",1595439852,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"sb__31146__auto__","sb__31146__auto__",-1665691917,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__31147__auto__","x__31147__auto__",1691618738,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"sb__31146__auto__","sb__31146__auto__",-1665691917,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
});

cljs.core$macros.with_out_str.cljs$lang$maxFixedArity = (2);

cljs.core$macros.with_out_str.cljs$lang$applyTo = (function (seq31148){
var G__31149 = cljs.core.first.call(null,seq31148);
var seq31148__$1 = cljs.core.next.call(null,seq31148);
var G__31150 = cljs.core.first.call(null,seq31148__$1);
var seq31148__$2 = cljs.core.next.call(null,seq31148__$1);
return cljs.core$macros.with_out_str.cljs$core$IFn$_invoke$arity$variadic(G__31149,G__31150,seq31148__$2);
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
var args__20739__auto__ = [];
var len__20732__auto___31158 = arguments.length;
var i__20733__auto___31159 = (0);
while(true){
if((i__20733__auto___31159 < len__20732__auto___31158)){
args__20739__auto__.push((arguments[i__20733__auto___31159]));

var G__31160 = (i__20733__auto___31159 + (1));
i__20733__auto___31159 = G__31160;
continue;
} else {
}
break;
}

var argseq__20740__auto__ = ((((2) < args__20739__auto__.length))?(new cljs.core.IndexedSeq(args__20739__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.lazy_cat.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__20740__auto__);
});

cljs.core$macros.lazy_cat.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,colls){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null)),cljs.core.map.call(null,(function (p1__31154_SHARP_){
return cljs.core._conj.call(null,(function (){var x__20461__auto__ = p1__31154_SHARP_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),new cljs.core.Symbol("cljs.core$macros","lazy-seq","cljs.core$macros/lazy-seq",806482650,null));
}),colls))));
});

cljs.core$macros.lazy_cat.cljs$lang$maxFixedArity = (2);

cljs.core$macros.lazy_cat.cljs$lang$applyTo = (function (seq31155){
var G__31156 = cljs.core.first.call(null,seq31155);
var seq31155__$1 = cljs.core.next.call(null,seq31155);
var G__31157 = cljs.core.first.call(null,seq31155__$1);
var seq31155__$2 = cljs.core.next.call(null,seq31155__$1);
return cljs.core$macros.lazy_cat.cljs$core$IFn$_invoke$arity$variadic(G__31156,G__31157,seq31155__$2);
});


cljs.core$macros.lazy_cat.cljs$lang$macro = true;
cljs.core$macros.js_str = (function cljs$core$macros$js_str(_AMPERSAND_form,_AMPERSAND_env,s){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__20461__auto__ = s;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),"''+~{}"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.js_str.cljs$lang$macro = true;
cljs.core$macros.es6_iterable = (function cljs$core$macros$es6_iterable(_AMPERSAND_form,_AMPERSAND_env,ty){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aset","cljs.core$macros/aset",-693176374,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-prototype",".-prototype",-1562038608,null)),(function (){var x__20461__auto__ = ty;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","ITER_SYMBOL","cljs.core/ITER_SYMBOL",-2091399233,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__20461__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__31161__auto__","this__31161__auto__",495856965,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","es6-iterator","cljs.core/es6-iterator",856007913,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__31161__auto__","this__31161__auto__",495856965,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
});

cljs.core$macros.es6_iterable.cljs$lang$macro = true;
/**
 * Returns a map of the intern mappings for the namespace.
 */
cljs.core$macros.ns_interns = (function cljs$core$macros$ns_interns(_AMPERSAND_form,_AMPERSAND_env,p__31162){
var vec__31174 = p__31162;
var quote = cljs.core.nth.call(null,vec__31174,(0),null);
var ns = cljs.core.nth.call(null,vec__31174,(1),null);
if((cljs.core._EQ_.call(null,quote,new cljs.core.Symbol(null,"quote","quote",1377916282,null))) && ((ns instanceof cljs.core.Symbol))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Argument to ns-interns must be a quoted symbol"),cljs.core.str("\n"),cljs.core.str("(core/and (= quote (quote quote)) (core/symbol? ns))")].join('')));
}

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","into","cljs.core/into",1879938733,null)),(function (){var x__20461__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,((function (vec__31174,quote,ns){
return (function (p__31181){
var vec__31182 = p__31181;
var sym = cljs.core.nth.call(null,vec__31182,(0),null);
var _ = cljs.core.nth.call(null,vec__31182,(1),null);
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","symbol","cljs.core/symbol",195265748,null)),(function (){var x__20461__auto__ = cljs.core.name.call(null,sym);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"var","var",870848730,null)),(function (){var x__20461__auto__ = cljs.core.symbol.call(null,cljs.core.name.call(null,ns),cljs.core.name.call(null,sym));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})()))));
});})(vec__31174,quote,ns))
,cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns,new cljs.core.Keyword(null,"defs","defs",1398449717)], null)))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
});

cljs.core$macros.ns_interns.cljs$lang$macro = true;
/**
 * Removes the mappings for the symbol from the namespace.
 */
cljs.core$macros.ns_unmap = (function cljs$core$macros$ns_unmap(_AMPERSAND_form,_AMPERSAND_env,p__31185,p__31186){
var vec__31193 = p__31185;
var quote0 = cljs.core.nth.call(null,vec__31193,(0),null);
var ns = cljs.core.nth.call(null,vec__31193,(1),null);
var vec__31196 = p__31186;
var quote1 = cljs.core.nth.call(null,vec__31196,(0),null);
var sym = cljs.core.nth.call(null,vec__31196,(1),null);
if((cljs.core._EQ_.call(null,quote0,new cljs.core.Symbol(null,"quote","quote",1377916282,null))) && ((ns instanceof cljs.core.Symbol)) && (cljs.core._EQ_.call(null,quote1,new cljs.core.Symbol(null,"quote","quote",1377916282,null))) && ((sym instanceof cljs.core.Symbol))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Arguments to ns-unmap must be quoted symbols"),cljs.core.str("\n"),cljs.core.str("(core/and (= quote0 (quote quote)) (core/symbol? ns) (= quote1 (quote quote)) (core/symbol? sym))")].join('')));
}

cljs.core.swap_BANG_.call(null,cljs.env._STAR_compiler_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns,new cljs.core.Keyword(null,"defs","defs",1398449717)], null),cljs.core.dissoc,sym);

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-delete","cljs.core$macros/js-delete",387769082,null)),(function (){var x__20461__auto__ = cljs.compiler.munge.call(null,ns);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.compiler.munge.call(null,[cljs.core.str(sym)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
});

cljs.core$macros.ns_unmap.cljs$lang$macro = true;
/**
 * Non-atomically swaps the value of the volatile as if:
 * (apply f current-value-of-vol args). Returns the value that
 * was swapped in.
 */
cljs.core$macros.vswap_BANG_ = (function cljs$core$macros$vswap_BANG_(var_args){
var args__20739__auto__ = [];
var len__20732__auto___31204 = arguments.length;
var i__20733__auto___31205 = (0);
while(true){
if((i__20733__auto___31205 < len__20732__auto___31204)){
args__20739__auto__.push((arguments[i__20733__auto___31205]));

var G__31206 = (i__20733__auto___31205 + (1));
i__20733__auto___31205 = G__31206;
continue;
} else {
}
break;
}

var argseq__20740__auto__ = ((((4) < args__20739__auto__.length))?(new cljs.core.IndexedSeq(args__20739__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.vswap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__20740__auto__);
});

cljs.core$macros.vswap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,vol,f,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-vreset!","cljs.core/-vreset!",-1186516972,null)),(function (){var x__20461__auto__ = vol;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__20461__auto__ = f;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-deref","cljs.core/-deref",-1260480154,null)),(function (){var x__20461__auto__ = vol;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),args)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
});

cljs.core$macros.vswap_BANG_.cljs$lang$maxFixedArity = (4);

cljs.core$macros.vswap_BANG_.cljs$lang$applyTo = (function (seq31199){
var G__31200 = cljs.core.first.call(null,seq31199);
var seq31199__$1 = cljs.core.next.call(null,seq31199);
var G__31201 = cljs.core.first.call(null,seq31199__$1);
var seq31199__$2 = cljs.core.next.call(null,seq31199__$1);
var G__31202 = cljs.core.first.call(null,seq31199__$2);
var seq31199__$3 = cljs.core.next.call(null,seq31199__$2);
var G__31203 = cljs.core.first.call(null,seq31199__$3);
var seq31199__$4 = cljs.core.next.call(null,seq31199__$3);
return cljs.core$macros.vswap_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__31200,G__31201,G__31202,G__31203,seq31199__$4);
});


cljs.core$macros.vswap_BANG_.cljs$lang$macro = true;
cljs.core$macros.locking = (function cljs$core$macros$locking(var_args){
var args__20739__auto__ = [];
var len__20732__auto___31211 = arguments.length;
var i__20733__auto___31212 = (0);
while(true){
if((i__20733__auto___31212 < len__20732__auto___31211)){
args__20739__auto__.push((arguments[i__20733__auto___31212]));

var G__31213 = (i__20733__auto___31212 + (1));
i__20733__auto___31212 = G__31213;
continue;
} else {
}
break;
}

var argseq__20740__auto__ = ((((3) < args__20739__auto__.length))?(new cljs.core.IndexedSeq(args__20739__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.locking.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__20740__auto__);
});

cljs.core$macros.locking.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),forms)));
});

cljs.core$macros.locking.cljs$lang$maxFixedArity = (3);

cljs.core$macros.locking.cljs$lang$applyTo = (function (seq31207){
var G__31208 = cljs.core.first.call(null,seq31207);
var seq31207__$1 = cljs.core.next.call(null,seq31207);
var G__31209 = cljs.core.first.call(null,seq31207__$1);
var seq31207__$2 = cljs.core.next.call(null,seq31207__$1);
var G__31210 = cljs.core.first.call(null,seq31207__$2);
var seq31207__$3 = cljs.core.next.call(null,seq31207__$2);
return cljs.core$macros.locking.cljs$core$IFn$_invoke$arity$variadic(G__31208,G__31209,G__31210,seq31207__$3);
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
var args__20739__auto__ = [];
var len__20732__auto___31217 = arguments.length;
var i__20733__auto___31218 = (0);
while(true){
if((i__20733__auto___31218 < len__20732__auto___31217)){
args__20739__auto__.push((arguments[i__20733__auto___31218]));

var G__31219 = (i__20733__auto___31218 + (1));
i__20733__auto___31218 = G__31219;
continue;
} else {
}
break;
}

var argseq__20740__auto__ = ((((2) < args__20739__auto__.length))?(new cljs.core.IndexedSeq(args__20739__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.require.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__20740__auto__);
});

cljs.core$macros.require.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ns*","ns*",1840949383,null)),(function (){var x__20461__auto__ = cljs.core.cons.call(null,new cljs.core.Keyword(null,"require","require",-468001333),args);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
});

cljs.core$macros.require.cljs$lang$maxFixedArity = (2);

cljs.core$macros.require.cljs$lang$applyTo = (function (seq31214){
var G__31215 = cljs.core.first.call(null,seq31214);
var seq31214__$1 = cljs.core.next.call(null,seq31214);
var G__31216 = cljs.core.first.call(null,seq31214__$1);
var seq31214__$2 = cljs.core.next.call(null,seq31214__$1);
return cljs.core$macros.require.cljs$core$IFn$_invoke$arity$variadic(G__31215,G__31216,seq31214__$2);
});


cljs.core$macros.require.cljs$lang$macro = true;
/**
 * Similar to require but only for macros.
 */
cljs.core$macros.require_macros = (function cljs$core$macros$require_macros(var_args){
var args__20739__auto__ = [];
var len__20732__auto___31223 = arguments.length;
var i__20733__auto___31224 = (0);
while(true){
if((i__20733__auto___31224 < len__20732__auto___31223)){
args__20739__auto__.push((arguments[i__20733__auto___31224]));

var G__31225 = (i__20733__auto___31224 + (1));
i__20733__auto___31224 = G__31225;
continue;
} else {
}
break;
}

var argseq__20740__auto__ = ((((2) < args__20739__auto__.length))?(new cljs.core.IndexedSeq(args__20739__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.require_macros.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__20740__auto__);
});

cljs.core$macros.require_macros.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ns*","ns*",1840949383,null)),(function (){var x__20461__auto__ = cljs.core.cons.call(null,new cljs.core.Keyword(null,"require-macros","require-macros",707947416),args);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
});

cljs.core$macros.require_macros.cljs$lang$maxFixedArity = (2);

cljs.core$macros.require_macros.cljs$lang$applyTo = (function (seq31220){
var G__31221 = cljs.core.first.call(null,seq31220);
var seq31220__$1 = cljs.core.next.call(null,seq31220);
var G__31222 = cljs.core.first.call(null,seq31220__$1);
var seq31220__$2 = cljs.core.next.call(null,seq31220__$1);
return cljs.core$macros.require_macros.cljs$core$IFn$_invoke$arity$variadic(G__31221,G__31222,seq31220__$2);
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
var args__20739__auto__ = [];
var len__20732__auto___31229 = arguments.length;
var i__20733__auto___31230 = (0);
while(true){
if((i__20733__auto___31230 < len__20732__auto___31229)){
args__20739__auto__.push((arguments[i__20733__auto___31230]));

var G__31231 = (i__20733__auto___31230 + (1));
i__20733__auto___31230 = G__31231;
continue;
} else {
}
break;
}

var argseq__20740__auto__ = ((((2) < args__20739__auto__.length))?(new cljs.core.IndexedSeq(args__20739__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.use.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__20740__auto__);
});

cljs.core$macros.use.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ns*","ns*",1840949383,null)),(function (){var x__20461__auto__ = cljs.core.cons.call(null,new cljs.core.Keyword(null,"use","use",-1846382424),args);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
});

cljs.core$macros.use.cljs$lang$maxFixedArity = (2);

cljs.core$macros.use.cljs$lang$applyTo = (function (seq31226){
var G__31227 = cljs.core.first.call(null,seq31226);
var seq31226__$1 = cljs.core.next.call(null,seq31226);
var G__31228 = cljs.core.first.call(null,seq31226__$1);
var seq31226__$2 = cljs.core.next.call(null,seq31226__$1);
return cljs.core$macros.use.cljs$core$IFn$_invoke$arity$variadic(G__31227,G__31228,seq31226__$2);
});


cljs.core$macros.use.cljs$lang$macro = true;
/**
 * Similar to use but only for macros.
 */
cljs.core$macros.use_macros = (function cljs$core$macros$use_macros(var_args){
var args__20739__auto__ = [];
var len__20732__auto___31235 = arguments.length;
var i__20733__auto___31236 = (0);
while(true){
if((i__20733__auto___31236 < len__20732__auto___31235)){
args__20739__auto__.push((arguments[i__20733__auto___31236]));

var G__31237 = (i__20733__auto___31236 + (1));
i__20733__auto___31236 = G__31237;
continue;
} else {
}
break;
}

var argseq__20740__auto__ = ((((2) < args__20739__auto__.length))?(new cljs.core.IndexedSeq(args__20739__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.use_macros.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__20740__auto__);
});

cljs.core$macros.use_macros.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ns*","ns*",1840949383,null)),(function (){var x__20461__auto__ = cljs.core.cons.call(null,new cljs.core.Keyword(null,"use-macros","use-macros",-905638393),args);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
});

cljs.core$macros.use_macros.cljs$lang$maxFixedArity = (2);

cljs.core$macros.use_macros.cljs$lang$applyTo = (function (seq31232){
var G__31233 = cljs.core.first.call(null,seq31232);
var seq31232__$1 = cljs.core.next.call(null,seq31232);
var G__31234 = cljs.core.first.call(null,seq31232__$1);
var seq31232__$2 = cljs.core.next.call(null,seq31232__$1);
return cljs.core$macros.use_macros.cljs$core$IFn$_invoke$arity$variadic(G__31233,G__31234,seq31232__$2);
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
var args__20739__auto__ = [];
var len__20732__auto___31241 = arguments.length;
var i__20733__auto___31242 = (0);
while(true){
if((i__20733__auto___31242 < len__20732__auto___31241)){
args__20739__auto__.push((arguments[i__20733__auto___31242]));

var G__31243 = (i__20733__auto___31242 + (1));
i__20733__auto___31242 = G__31243;
continue;
} else {
}
break;
}

var argseq__20740__auto__ = ((((2) < args__20739__auto__.length))?(new cljs.core.IndexedSeq(args__20739__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.import$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__20740__auto__);
});

cljs.core$macros.import$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,import_symbols_or_lists){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ns*","ns*",1840949383,null)),(function (){var x__20461__auto__ = cljs.core.cons.call(null,new cljs.core.Keyword(null,"import","import",-1399500709),import_symbols_or_lists);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
});

cljs.core$macros.import$.cljs$lang$maxFixedArity = (2);

cljs.core$macros.import$.cljs$lang$applyTo = (function (seq31238){
var G__31239 = cljs.core.first.call(null,seq31238);
var seq31238__$1 = cljs.core.next.call(null,seq31238);
var G__31240 = cljs.core.first.call(null,seq31238__$1);
var seq31238__$2 = cljs.core.next.call(null,seq31238__$1);
return cljs.core$macros.import$.cljs$core$IFn$_invoke$arity$variadic(G__31239,G__31240,seq31238__$2);
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
var args__20739__auto__ = [];
var len__20732__auto___31247 = arguments.length;
var i__20733__auto___31248 = (0);
while(true){
if((i__20733__auto___31248 < len__20732__auto___31247)){
args__20739__auto__.push((arguments[i__20733__auto___31248]));

var G__31249 = (i__20733__auto___31248 + (1));
i__20733__auto___31248 = G__31249;
continue;
} else {
}
break;
}

var argseq__20740__auto__ = ((((2) < args__20739__auto__.length))?(new cljs.core.IndexedSeq(args__20739__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.refer_clojure.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__20740__auto__);
});

cljs.core$macros.refer_clojure.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ns*","ns*",1840949383,null)),(function (){var x__20461__auto__ = cljs.core.cons.call(null,new cljs.core.Keyword(null,"refer-clojure","refer-clojure",813784440),args);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
});

cljs.core$macros.refer_clojure.cljs$lang$maxFixedArity = (2);

cljs.core$macros.refer_clojure.cljs$lang$applyTo = (function (seq31244){
var G__31245 = cljs.core.first.call(null,seq31244);
var seq31244__$1 = cljs.core.next.call(null,seq31244);
var G__31246 = cljs.core.first.call(null,seq31244__$1);
var seq31244__$2 = cljs.core.next.call(null,seq31244__$1);
return cljs.core$macros.refer_clojure.cljs$core$IFn$_invoke$arity$variadic(G__31245,G__31246,seq31244__$2);
});


cljs.core$macros.refer_clojure.cljs$lang$macro = true;
cljs.core$macros.load_file_STAR_ = (function cljs$core$macros$load_file_STAR_(_AMPERSAND_form,_AMPERSAND_env,f){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","goog","js/goog",-70605150,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"nodeGlobalRequire","nodeGlobalRequire",167018599,null)),(function (){var x__20461__auto__ = f;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__20461__auto__ = cljs.analyzer.macroexpand_1.call(null,_AMPERSAND_env,form);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
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
var G__31250 = form_SINGLEQUOTE_;
var G__31251 = cljs.analyzer.macroexpand_1.call(null,env,form_SINGLEQUOTE_);
form__$1 = G__31250;
form_SINGLEQUOTE_ = G__31251;
continue;
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__20461__auto__ = form_SINGLEQUOTE_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
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
var and__19612__auto__ = cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,fdecl));
if(and__19612__auto__){
return cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),cljs.core.ffirst.call(null,fdecl));
} else {
return and__19612__auto__;
}
});
cljs.core$macros.variadic_fn_STAR_ = (function cljs$core$macros$variadic_fn_STAR_(var_args){
var args31252 = [];
var len__20732__auto___31259 = arguments.length;
var i__20733__auto___31260 = (0);
while(true){
if((i__20733__auto___31260 < len__20732__auto___31259)){
args31252.push((arguments[i__20733__auto___31260]));

var G__31261 = (i__20733__auto___31260 + (1));
i__20733__auto___31260 = G__31261;
continue;
} else {
}
break;
}

var G__31254 = args31252.length;
switch (G__31254) {
case 2:
return cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31252.length)].join('')));

}
});

cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (sym,method){
return cljs.core$macros.variadic_fn_STAR_.call(null,sym,method,true);
});

cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (sym,p__31255,solo){
var vec__31256 = p__31255;
var seq__31257 = cljs.core.seq.call(null,vec__31256);
var first__31258 = cljs.core.first.call(null,seq__31257);
var seq__31257__$1 = cljs.core.next.call(null,seq__31257);
var arglist = first__31258;
var body = seq__31257__$1;
var method = vec__31256;
var sig = cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),arglist);
var restarg = cljs.core.gensym.call(null,"seq");
var get_delegate = ((function (sig,restarg,vec__31256,seq__31257,first__31258,seq__31257__$1,arglist,body,method){
return (function cljs$core$macros$get_delegate(){
return new cljs.core.Symbol(null,"cljs$core$IFn$_invoke$arity$variadic","cljs$core$IFn$_invoke$arity$variadic",-378825034,null);
});})(sig,restarg,vec__31256,seq__31257,first__31258,seq__31257__$1,arglist,body,method))
;
var get_delegate_prop = ((function (sig,restarg,vec__31256,seq__31257,first__31258,seq__31257__$1,arglist,body,method){
return (function cljs$core$macros$get_delegate_prop(){
return cljs.core.symbol.call(null,[cljs.core.str("-"),cljs.core.str(get_delegate.call(null))].join(''));
});})(sig,restarg,vec__31256,seq__31257,first__31258,seq__31257__$1,arglist,body,method))
;
var param_bind = ((function (sig,restarg,vec__31256,seq__31257,first__31258,seq__31257__$1,arglist,body,method){
return (function cljs$core$macros$param_bind(param){
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__20461__auto__ = param;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__20461__auto__ = cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null),cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"/home/ru/clojure/flights-pro/resources/public/js/out/cljs/core.cljc"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2877),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj.call(null,cljs.core.List.EMPTY,49),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2877),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj.call(null,cljs.core.List.EMPTY,54),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__20461__auto__ = cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core","next","cljs.core/next",-1291438473,null),cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"/home/ru/clojure/flights-pro/resources/public/js/out/cljs/core.cljc"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2878),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj.call(null,cljs.core.List.EMPTY,51),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2878),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj.call(null,cljs.core.List.EMPTY,55),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})()))));
});})(sig,restarg,vec__31256,seq__31257,first__31258,seq__31257__$1,arglist,body,method))
;
var apply_to = ((function (sig,restarg,vec__31256,seq__31257,first__31258,seq__31257__$1,arglist,body,method){
return (function cljs$core$macros$apply_to(){
if(((1) < cljs.core.count.call(null,sig))){
var params = cljs.core.repeatedly.call(null,(cljs.core.count.call(null,sig) - (1)),cljs.core.gensym);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__20461__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__20461__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__20461__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.mapcat.call(null,param_bind,params)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__20461__auto__ = sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__20461__auto__ = get_delegate.call(null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),params,(function (){var x__20461__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__20461__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__20461__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__20461__auto__ = sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__20461__auto__ = get_delegate.call(null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__20461__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
}
});})(sig,restarg,vec__31256,seq__31257,first__31258,seq__31257__$1,arglist,body,method))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__20461__auto__ = sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = get_delegate_prop.call(null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__20461__auto__ = cljs.core.vec.call(null,sig);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(cljs.core.truth_(solo)?cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__20461__auto__ = sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-cljs$lang$maxFixedArity","-cljs$lang$maxFixedArity",-1481434279,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = (cljs.core.count.call(null,sig) - (1));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())))):null),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__20461__auto__ = sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-cljs$lang$applyTo","-cljs$lang$applyTo",-225535181,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = apply_to.call(null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
});

cljs.core$macros.variadic_fn_STAR_.cljs$lang$maxFixedArity = 3;

cljs.core$macros.copy_arguments = (function cljs$core$macros$copy_arguments(_AMPERSAND_form,_AMPERSAND_env,dest){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__20461__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"len__31263__auto__","len__31263__auto__",-1015921876,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__20461__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__31264__auto__","i__31264__auto__",-1062962386,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__31264__auto__","i__31264__auto__",-1062962386,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"len__31263__auto__","len__31263__auto__",-1015921876,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".push",".push",-1497267248,null)),(function (){var x__20461__auto__ = dest;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aget","cljs.core$macros/aget",1976136178,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__31264__auto__","i__31264__auto__",-1062962386,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__31264__auto__","i__31264__auto__",-1062962386,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
});

cljs.core$macros.copy_arguments.cljs$lang$macro = true;
cljs.core$macros.variadic_fn = (function cljs$core$macros$variadic_fn(name,meta,p__31267,emit_var_QMARK_){
var vec__31274 = p__31267;
var vec__31277 = cljs.core.nth.call(null,vec__31274,(0),null);
var seq__31278 = cljs.core.seq.call(null,vec__31277);
var first__31279 = cljs.core.first.call(null,seq__31278);
var seq__31278__$1 = cljs.core.next.call(null,seq__31278);
var arglist = first__31279;
var body = seq__31278__$1;
var method = vec__31277;
var fdecl = vec__31274;
var dest_args = ((function (vec__31274,vec__31277,seq__31278,first__31279,seq__31278__$1,arglist,body,method,fdecl){
return (function cljs$core$macros$variadic_fn_$_dest_args(c){
return cljs.core.map.call(null,((function (vec__31274,vec__31277,seq__31278,first__31279,seq__31278__$1,arglist,body,method,fdecl){
return (function (n){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aget","cljs.core$macros/aget",1976136178,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
});})(vec__31274,vec__31277,seq__31278,first__31279,seq__31278__$1,arglist,body,method,fdecl))
,cljs.core.range.call(null,c));
});})(vec__31274,vec__31277,seq__31278,first__31279,seq__31278__$1,arglist,body,method,fdecl))
;
var rname = cljs.core.symbol.call(null,[cljs.core.str(cljs.analyzer._STAR_cljs_ns_STAR_)].join(''),[cljs.core.str(name)].join(''));
var sig = cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),arglist);
var c_1 = (cljs.core.count.call(null,sig) - (1));
var meta__$1 = cljs.core.assoc.call(null,meta,new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",882626057),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),c_1,new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sig], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),(function (){var x__20461__auto__ = arglist;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.doall.call(null,cljs.core.map.call(null,meta,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arglist], null)))], null));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"def","def",597100991,null)),(function (){var x__20461__auto__ = cljs.core.with_meta.call(null,name,meta__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__20461__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"var_args","var_args",1214280389,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__20461__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args__31265__auto__","args__31265__auto__",1902185918,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","copy-arguments","cljs.core$macros/copy-arguments",-1675962356,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args__31265__auto__","args__31265__auto__",1902185918,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__20461__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argseq__31266__auto__","argseq__31266__auto__",-1795414459,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__20461__auto__ = c_1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args__31265__auto__","args__31265__auto__",1902185918,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__20461__auto__ = cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core","IndexedSeq","cljs.core/IndexedSeq",-228688698,null),cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"/home/ru/clojure/flights-pro/resources/public/js/out/cljs/core.cljc"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2925),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj.call(null,cljs.core.List.EMPTY,55),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2925),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj.call(null,cljs.core.List.EMPTY,75),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".slice",".slice",1874048374,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args__31265__auto__","args__31265__auto__",1902185918,null)),(function (){var x__20461__auto__ = c_1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__20461__auto__ = rname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cljs$core$IFn$_invoke$arity$variadic","cljs$core$IFn$_invoke$arity$variadic",-378825034,null)),dest_args.call(null,c_1),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argseq__31266__auto__","argseq__31266__auto__",-1795414459,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core$macros.variadic_fn_STAR_.call(null,rname,method);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = (cljs.core.truth_(emit_var_QMARK_)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"var","var",870848730,null)),(function (){var x__20461__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})()))):null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
});
cljs.core$macros.multi_arity_fn = (function cljs$core$macros$multi_arity_fn(name,meta,fdecl,emit_var_QMARK_){
var dest_args = (function cljs$core$macros$multi_arity_fn_$_dest_args(c){
return cljs.core.map.call(null,(function (n){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aget","cljs.core$macros/aget",1976136178,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
}),cljs.core.range.call(null,c));
});
var fixed_arity = (function cljs$core$macros$multi_arity_fn_$_fixed_arity(rname,sig){
var c = cljs.core.count.call(null,sig);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__20461__auto__ = rname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__20461__auto__ = cljs.core.symbol.call(null,[cljs.core.str("cljs$core$IFn$_invoke$arity$"),cljs.core.str(c)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),dest_args.call(null,c))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())))], null);
});
var fn_method = (function cljs$core$macros$multi_arity_fn_$_fn_method(p__31304){
var vec__31308 = p__31304;
var seq__31309 = cljs.core.seq.call(null,vec__31308);
var first__31310 = cljs.core.first.call(null,seq__31309);
var seq__31309__$1 = cljs.core.next.call(null,seq__31309);
var sig = first__31310;
var body = seq__31309__$1;
var method = vec__31308;
if(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),sig))){
return cljs.core$macros.variadic_fn_STAR_.call(null,name,method,false);
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__20461__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.symbol.call(null,[cljs.core.str("-cljs$core$IFn$_invoke$arity$"),cljs.core.str(cljs.core.count.call(null,sig))].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__20461__auto__ = method;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
}
});
var rname = cljs.core.symbol.call(null,[cljs.core.str(cljs.analyzer._STAR_cljs_ns_STAR_)].join(''),[cljs.core.str(name)].join(''));
var arglists = cljs.core.map.call(null,cljs.core.first,fdecl);
var varsig_QMARK_ = ((function (rname,arglists){
return (function (p1__31280_SHARP_){
return cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),p1__31280_SHARP_);
});})(rname,arglists))
;
var variadic = cljs.core.boolean$.call(null,cljs.core.some.call(null,varsig_QMARK_,arglists));
var sigs = cljs.core.remove.call(null,varsig_QMARK_,arglists);
var maxfa = cljs.core.apply.call(null,cljs.core.max,cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.count,sigs),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.count.call(null,cljs.core.first.call(null,cljs.core.filter.call(null,varsig_QMARK_,arglists))) - (2))], null)));
var meta__$1 = cljs.core.assoc.call(null,meta,new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",882626057),variadic,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),maxfa,new cljs.core.Keyword(null,"method-params","method-params",-980792179),sigs,new cljs.core.Keyword(null,"arglists","arglists",1661989754),arglists,new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.doall.call(null,cljs.core.map.call(null,meta,arglists))], null));
var args_sym = cljs.core.gensym.call(null,"args");
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"def","def",597100991,null)),(function (){var x__20461__auto__ = cljs.core.with_meta.call(null,name,meta__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__20461__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"var_args","var_args",1214280389,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__20461__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__20461__auto__ = args_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","copy-arguments","cljs.core$macros/copy-arguments",-1675962356,null)),(function (){var x__20461__auto__ = args_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","case","cljs.core$macros/case",-2131866965,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),(function (){var x__20461__auto__ = args_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),cljs.core.mapcat.call(null,((function (rname,arglists,varsig_QMARK_,variadic,sigs,maxfa,meta__$1,args_sym){
return (function (p1__31281_SHARP_){
return fixed_arity.call(null,rname,p1__31281_SHARP_);
});})(rname,arglists,varsig_QMARK_,variadic,sigs,maxfa,meta__$1,args_sym))
,sigs),(function (){var x__20461__auto__ = ((variadic)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__20461__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argseq__31282__auto__","argseq__31282__auto__",-1252384995,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__20461__auto__ = cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core","IndexedSeq","cljs.core/IndexedSeq",-228688698,null),cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"/home/ru/clojure/flights-pro/resources/public/js/out/cljs/core.cljc"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2983),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj.call(null,cljs.core.List.EMPTY,58),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2983),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj.call(null,cljs.core.List.EMPTY,78),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".slice",".slice",1874048374,null)),(function (){var x__20461__auto__ = args_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = maxfa;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__20461__auto__ = rname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cljs$core$IFn$_invoke$arity$variadic","cljs$core$IFn$_invoke$arity$variadic",-378825034,null)),dest_args.call(null,maxfa),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argseq__31282__auto__","argseq__31282__auto__",-1252384995,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})()))):(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(meta__$1))?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","str","cljs.core$macros/str",-2019499702,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"Invalid arity: "),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),(function (){var x__20461__auto__ = args_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(2)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})()))):cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","str","cljs.core$macros/str",-2019499702,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"Invalid arity: "),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),(function (){var x__20461__auto__ = args_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),cljs.core.map.call(null,fn_method,fdecl),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__20461__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__20461__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-cljs$lang$maxFixedArity","-cljs$lang$maxFixedArity",-1481434279,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = maxfa;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),(function (){var x__20461__auto__ = (cljs.core.truth_(emit_var_QMARK_)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"var","var",870848730,null)),(function (){var x__20461__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})()))):null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
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
var fdecl__$3 = ((cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,fdecl__$2)))?(function (){var x__20461__auto__ = fdecl__$2;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})():fdecl__$2);
var m__$2 = ((cljs.core.map_QMARK_.call(null,cljs.core.last.call(null,fdecl__$3)))?cljs.core.conj.call(null,m__$1,cljs.core.last.call(null,fdecl__$3)):m__$1);
var fdecl__$4 = ((cljs.core.map_QMARK_.call(null,cljs.core.last.call(null,fdecl__$3)))?cljs.core.butlast.call(null,fdecl__$3):fdecl__$3);
var m__$3 = cljs.core.conj.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core._conj.call(null,(function (){var x__20461__auto__ = cljs.core$macros.sigs.call(null,fdecl__$4);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})(),new cljs.core.Symbol(null,"quote","quote",1377916282,null))], null),m__$2);
var m__$4 = cljs.core.conj.call(null,(cljs.core.truth_(cljs.core.meta.call(null,name))?cljs.core.meta.call(null,name):cljs.core.PersistentArrayMap.EMPTY),m__$3);
if(cljs.core.truth_(cljs.core$macros.multi_arity_fn_QMARK_.call(null,fdecl__$4))){
return cljs.core$macros.multi_arity_fn.call(null,name,(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))?cljs.core.update_in.call(null,m__$4,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516)], null),cljs.core.conj,"@param {...*} var_args"):m__$4),fdecl__$4,new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
} else {
if(cljs.core.truth_(cljs.core$macros.variadic_fn_QMARK_.call(null,fdecl__$4))){
return cljs.core$macros.variadic_fn.call(null,name,(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))?cljs.core.update_in.call(null,m__$4,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516)], null),cljs.core.conj,"@param {...*} var_args"):m__$4),fdecl__$4,new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
} else {
return cljs.core._conj.call(null,(function (){var x__20461__auto__ = cljs.core.with_meta.call(null,name,m__$4);
return cljs.core._conj.call(null,(function (){var x__20461__auto____$1 = cljs.core.cons.call(null,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null),fdecl__$4);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto____$1);
})(),x__20461__auto__);
})(),new cljs.core.Symbol(null,"def","def",597100991,null));

}
}
};
var cljs$core$macros$defn = function (_AMPERSAND_form,_AMPERSAND_env,name,var_args){
var fdecl = null;
if (arguments.length > 3) {
var G__31311__i = 0, G__31311__a = new Array(arguments.length -  3);
while (G__31311__i < G__31311__a.length) {G__31311__a[G__31311__i] = arguments[G__31311__i + 3]; ++G__31311__i;}
  fdecl = new cljs.core.IndexedSeq(G__31311__a,0);
} 
return cljs$core$macros$defn__delegate.call(this,_AMPERSAND_form,_AMPERSAND_env,name,fdecl);};
cljs$core$macros$defn.cljs$lang$maxFixedArity = 3;
cljs$core$macros$defn.cljs$lang$applyTo = (function (arglist__31312){
var _AMPERSAND_form = cljs.core.first(arglist__31312);
arglist__31312 = cljs.core.next(arglist__31312);
var _AMPERSAND_env = cljs.core.first(arglist__31312);
arglist__31312 = cljs.core.next(arglist__31312);
var name = cljs.core.first(arglist__31312);
var fdecl = cljs.core.rest(arglist__31312);
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
var args__20739__auto__ = [];
var len__20732__auto___31317 = arguments.length;
var i__20733__auto___31318 = (0);
while(true){
if((i__20733__auto___31318 < len__20732__auto___31317)){
args__20739__auto__.push((arguments[i__20733__auto___31318]));

var G__31319 = (i__20733__auto___31318 + (1));
i__20733__auto___31318 = G__31319;
continue;
} else {
}
break;
}

var argseq__20740__auto__ = ((((3) < args__20739__auto__.length))?(new cljs.core.IndexedSeq(args__20739__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.defmacro.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__20740__auto__);
});

cljs.core$macros.defmacro.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,args){
var prefix = (function (){var p = (function (){var x__20461__auto__ = cljs.core.vary_meta.call(null,name,cljs.core.assoc,new cljs.core.Keyword(null,"macro","macro",-867863404),true);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
})();
var args__$1 = args;
while(true){
var f = cljs.core.first.call(null,args__$1);
if(typeof f === 'string'){
var G__31320 = cljs.core.cons.call(null,f,p);
var G__31321 = cljs.core.next.call(null,args__$1);
p = G__31320;
args__$1 = G__31321;
continue;
} else {
if(cljs.core.map_QMARK_.call(null,f)){
var G__31322 = cljs.core.cons.call(null,f,p);
var G__31323 = cljs.core.next.call(null,args__$1);
p = G__31322;
args__$1 = G__31323;
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
var G__31324 = cljs.core.next.call(null,fd);
fd = G__31324;
continue;
} else {
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,fd))){
var G__31325 = cljs.core.next.call(null,fd);
fd = G__31325;
continue;
} else {
return fd;
}
}
break;
}
})();
var fdecl__$1 = ((cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,fdecl)))?(function (){var x__20461__auto__ = fdecl;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto__);
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
var G__31326 = cljs.core.conj.call(null,acc,add_implicit_args.call(null,d));
var G__31327 = cljs.core.next.call(null,ds);
acc = G__31326;
ds = G__31327;
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
var G__31328 = cljs.core.next.call(null,p);
var G__31329 = cljs.core.cons.call(null,cljs.core.first.call(null,p),d);
p = G__31328;
d = G__31329;
continue;
} else {
return d;
}
break;
}
})();
return cljs.core._conj.call(null,(function (){var x__20461__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null),decl);
return cljs.core._conj.call(null,(function (){var x__20461__auto____$1 = cljs.core._conj.call(null,(function (){var x__20461__auto____$1 = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__20461__auto____$1 = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto____$1);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-cljs$lang$macro","-cljs$lang$macro",443600924,null)))));
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,true),x__20461__auto____$1);
})(),new cljs.core.Symbol(null,"set!","set!",250714521,null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__20461__auto____$1);
})(),x__20461__auto__);
})(),new cljs.core.Symbol(null,"do","do",1686842252,null));
});

cljs.core$macros.defmacro.cljs$lang$maxFixedArity = (3);

cljs.core$macros.defmacro.cljs$lang$applyTo = (function (seq31313){
var G__31314 = cljs.core.first.call(null,seq31313);
var seq31313__$1 = cljs.core.next.call(null,seq31313);
var G__31315 = cljs.core.first.call(null,seq31313__$1);
var seq31313__$2 = cljs.core.next.call(null,seq31313__$1);
var G__31316 = cljs.core.first.call(null,seq31313__$2);
var seq31313__$3 = cljs.core.next.call(null,seq31313__$2);
return cljs.core$macros.defmacro.cljs$core$IFn$_invoke$arity$variadic(G__31314,G__31315,G__31316,seq31313__$3);
});

cljs.core$macros.defmacro.cljs$lang$macro = true;

//# sourceMappingURL=core$macros.js.map