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
var args__10360__auto__ = [];
var len__10353__auto___19782 = arguments.length;
var i__10354__auto___19783 = (0);
while(true){
if((i__10354__auto___19783 < len__10353__auto___19782)){
args__10360__auto__.push((arguments[i__10354__auto___19783]));

var G__19784 = (i__10354__auto___19783 + (1));
i__10354__auto___19783 = G__19784;
continue;
} else {
}
break;
}

var argseq__10361__auto__ = ((((3) < args__10360__auto__.length))?(new cljs.core.IndexedSeq(args__10360__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10361__auto__);
});

cljs.core$macros.__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
var x__$1 = x;
var forms__$1 = forms;
while(true){
if(cljs.core.truth_(forms__$1)){
var form = cljs.core.first.call(null,forms__$1);
var threaded = ((cljs.core.seq_QMARK_.call(null,form))?cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__10082__auto__ = cljs.core.first.call(null,form);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = x__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),cljs.core.next.call(null,form)))),cljs.core.meta.call(null,form)):(function (){var x__10082__auto__ = form;
return cljs.core._conj.call(null,(function (){var x__10082__auto____$1 = x__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto____$1);
})(),x__10082__auto__);
})());
var G__19785 = threaded;
var G__19786 = cljs.core.next.call(null,forms__$1);
x__$1 = G__19785;
forms__$1 = G__19786;
continue;
} else {
return x__$1;
}
break;
}
});

cljs.core$macros.__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.__GT_.cljs$lang$applyTo = (function (seq19778){
var G__19779 = cljs.core.first.call(null,seq19778);
var seq19778__$1 = cljs.core.next.call(null,seq19778);
var G__19780 = cljs.core.first.call(null,seq19778__$1);
var seq19778__$2 = cljs.core.next.call(null,seq19778__$1);
var G__19781 = cljs.core.first.call(null,seq19778__$2);
var seq19778__$3 = cljs.core.next.call(null,seq19778__$2);
return cljs.core$macros.__GT_.cljs$core$IFn$_invoke$arity$variadic(G__19779,G__19780,G__19781,seq19778__$3);
});


cljs.core$macros.__GT_.cljs$lang$macro = true;
/**
 * Threads the expr through the forms. Inserts x as the
 *   last item in the first form, making a list of it if it is not a
 *   list already. If there are more forms, inserts the first form as the
 *   last item in second form, etc.
 */
cljs.core$macros.__GT__GT_ = (function cljs$core$macros$__GT__GT_(var_args){
var args__10360__auto__ = [];
var len__10353__auto___19791 = arguments.length;
var i__10354__auto___19792 = (0);
while(true){
if((i__10354__auto___19792 < len__10353__auto___19791)){
args__10360__auto__.push((arguments[i__10354__auto___19792]));

var G__19793 = (i__10354__auto___19792 + (1));
i__10354__auto___19792 = G__19793;
continue;
} else {
}
break;
}

var argseq__10361__auto__ = ((((3) < args__10360__auto__.length))?(new cljs.core.IndexedSeq(args__10360__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.__GT__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10361__auto__);
});

cljs.core$macros.__GT__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
var x__$1 = x;
var forms__$1 = forms;
while(true){
if(cljs.core.truth_(forms__$1)){
var form = cljs.core.first.call(null,forms__$1);
var threaded = ((cljs.core.seq_QMARK_.call(null,form))?cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__10082__auto__ = cljs.core.first.call(null,form);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),cljs.core.next.call(null,form),(function (){var x__10082__auto__ = x__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})()))),cljs.core.meta.call(null,form)):(function (){var x__10082__auto__ = form;
return cljs.core._conj.call(null,(function (){var x__10082__auto____$1 = x__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto____$1);
})(),x__10082__auto__);
})());
var G__19794 = threaded;
var G__19795 = cljs.core.next.call(null,forms__$1);
x__$1 = G__19794;
forms__$1 = G__19795;
continue;
} else {
return x__$1;
}
break;
}
});

cljs.core$macros.__GT__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.__GT__GT_.cljs$lang$applyTo = (function (seq19787){
var G__19788 = cljs.core.first.call(null,seq19787);
var seq19787__$1 = cljs.core.next.call(null,seq19787);
var G__19789 = cljs.core.first.call(null,seq19787__$1);
var seq19787__$2 = cljs.core.next.call(null,seq19787__$1);
var G__19790 = cljs.core.first.call(null,seq19787__$2);
var seq19787__$3 = cljs.core.next.call(null,seq19787__$2);
return cljs.core$macros.__GT__GT_.cljs$core$IFn$_invoke$arity$variadic(G__19788,G__19789,G__19790,seq19787__$3);
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
var args19796 = [];
var len__10353__auto___19804 = arguments.length;
var i__10354__auto___19805 = (0);
while(true){
if((i__10354__auto___19805 < len__10353__auto___19804)){
args19796.push((arguments[i__10354__auto___19805]));

var G__19806 = (i__10354__auto___19805 + (1));
i__10354__auto___19805 = G__19806;
continue;
} else {
}
break;
}

var G__19803 = args19796.length;
switch (G__19803) {
case 4:
return cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__10372__auto__ = (new cljs.core.IndexedSeq(args19796.slice((4)),(0),null));
return cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__10372__auto__);

}
});

cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,form){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__10082__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
});

cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,form,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"..","..",-300507420,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__10082__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),more)));
});

cljs.core$macros._DOT__DOT_.cljs$lang$applyTo = (function (seq19797){
var G__19798 = cljs.core.first.call(null,seq19797);
var seq19797__$1 = cljs.core.next.call(null,seq19797);
var G__19799 = cljs.core.first.call(null,seq19797__$1);
var seq19797__$2 = cljs.core.next.call(null,seq19797__$1);
var G__19800 = cljs.core.first.call(null,seq19797__$2);
var seq19797__$3 = cljs.core.next.call(null,seq19797__$2);
var G__19801 = cljs.core.first.call(null,seq19797__$3);
var seq19797__$4 = cljs.core.next.call(null,seq19797__$3);
return cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$variadic(G__19798,G__19799,G__19800,G__19801,seq19797__$4);
});

cljs.core$macros._DOT__DOT_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._DOT__DOT_.cljs$lang$macro = true;
/**
 * Ignores body, yields nil
 */
cljs.core$macros.comment = (function cljs$core$macros$comment(var_args){
var args__10360__auto__ = [];
var len__10353__auto___19811 = arguments.length;
var i__10354__auto___19812 = (0);
while(true){
if((i__10354__auto___19812 < len__10353__auto___19811)){
args__10360__auto__.push((arguments[i__10354__auto___19812]));

var G__19813 = (i__10354__auto___19812 + (1));
i__10354__auto___19812 = G__19813;
continue;
} else {
}
break;
}

var argseq__10361__auto__ = ((((2) < args__10360__auto__.length))?(new cljs.core.IndexedSeq(args__10360__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.comment.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10361__auto__);
});

cljs.core$macros.comment.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return null;
});

cljs.core$macros.comment.cljs$lang$maxFixedArity = (2);

cljs.core$macros.comment.cljs$lang$applyTo = (function (seq19808){
var G__19809 = cljs.core.first.call(null,seq19808);
var seq19808__$1 = cljs.core.next.call(null,seq19808);
var G__19810 = cljs.core.first.call(null,seq19808__$1);
var seq19808__$2 = cljs.core.next.call(null,seq19808__$1);
return cljs.core$macros.comment.cljs$core$IFn$_invoke$arity$variadic(G__19809,G__19810,seq19808__$2);
});


cljs.core$macros.comment.cljs$lang$macro = true;
/**
 * Takes a set of test/expr pairs. It evaluates each test one at a
 *   time.  If a test returns logical true, cond evaluates and returns
 *   the value of the corresponding expr and doesn't evaluate any of the
 *   other tests or exprs. (cond) returns nil.
 */
cljs.core$macros.cond = (function cljs$core$macros$cond(var_args){
var args__10360__auto__ = [];
var len__10353__auto___19817 = arguments.length;
var i__10354__auto___19818 = (0);
while(true){
if((i__10354__auto___19818 < len__10353__auto___19817)){
args__10360__auto__.push((arguments[i__10354__auto___19818]));

var G__19819 = (i__10354__auto___19818 + (1));
i__10354__auto___19818 = G__19819;
continue;
} else {
}
break;
}

var argseq__10361__auto__ = ((((2) < args__10360__auto__.length))?(new cljs.core.IndexedSeq(args__10360__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.cond.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10361__auto__);
});

cljs.core$macros.cond.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,clauses){
if(cljs.core.truth_(clauses)){
return cljs.core._conj.call(null,(function (){var x__10082__auto__ = cljs.core.first.call(null,clauses);
return cljs.core._conj.call(null,(function (){var x__10082__auto____$1 = ((cljs.core.next.call(null,clauses))?cljs.core.second.call(null,clauses):(function(){throw (new Error("cond requires an even number of forms"))})());
return cljs.core._conj.call(null,(function (){var x__10082__auto____$2 = cljs.core.cons.call(null,new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",2005388338,null),cljs.core.next.call(null,cljs.core.next.call(null,clauses)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto____$2);
})(),x__10082__auto____$1);
})(),x__10082__auto__);
})(),new cljs.core.Symbol(null,"if","if",1181717262,null));
} else {
return null;
}
});

cljs.core$macros.cond.cljs$lang$maxFixedArity = (2);

cljs.core$macros.cond.cljs$lang$applyTo = (function (seq19814){
var G__19815 = cljs.core.first.call(null,seq19814);
var seq19814__$1 = cljs.core.next.call(null,seq19814);
var G__19816 = cljs.core.first.call(null,seq19814__$1);
var seq19814__$2 = cljs.core.next.call(null,seq19814__$1);
return cljs.core$macros.cond.cljs$core$IFn$_invoke$arity$variadic(G__19815,G__19816,seq19814__$2);
});


cljs.core$macros.cond.cljs$lang$macro = true;
/**
 * defs the supplied var names with no bindings, useful for making forward declarations.
 */
cljs.core$macros.declare = (function cljs$core$macros$declare(var_args){
var args__10360__auto__ = [];
var len__10353__auto___19824 = arguments.length;
var i__10354__auto___19825 = (0);
while(true){
if((i__10354__auto___19825 < len__10353__auto___19824)){
args__10360__auto__.push((arguments[i__10354__auto___19825]));

var G__19826 = (i__10354__auto___19825 + (1));
i__10354__auto___19825 = G__19826;
continue;
} else {
}
break;
}

var argseq__10361__auto__ = ((((2) < args__10360__auto__.length))?(new cljs.core.IndexedSeq(args__10360__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.declare.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10361__auto__);
});

cljs.core$macros.declare.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,names){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),cljs.core.map.call(null,(function (p1__19820_SHARP_){
return cljs.core._conj.call(null,(function (){var x__10082__auto__ = cljs.core.vary_meta.call(null,p1__19820_SHARP_,cljs.core.assoc,new cljs.core.Keyword(null,"declared","declared",92336021),true);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),new cljs.core.Symbol(null,"def","def",597100991,null));
}),names))));
});

cljs.core$macros.declare.cljs$lang$maxFixedArity = (2);

cljs.core$macros.declare.cljs$lang$applyTo = (function (seq19821){
var G__19822 = cljs.core.first.call(null,seq19821);
var seq19821__$1 = cljs.core.next.call(null,seq19821);
var G__19823 = cljs.core.first.call(null,seq19821__$1);
var seq19821__$2 = cljs.core.next.call(null,seq19821__$1);
return cljs.core$macros.declare.cljs$core$IFn$_invoke$arity$variadic(G__19822,G__19823,seq19821__$2);
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
var args__10360__auto__ = [];
var len__10353__auto___19831 = arguments.length;
var i__10354__auto___19832 = (0);
while(true){
if((i__10354__auto___19832 < len__10353__auto___19831)){
args__10360__auto__.push((arguments[i__10354__auto___19832]));

var G__19833 = (i__10354__auto___19832 + (1));
i__10354__auto___19832 = G__19833;
continue;
} else {
}
break;
}

var argseq__10361__auto__ = ((((3) < args__10360__auto__.length))?(new cljs.core.IndexedSeq(args__10360__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.doto.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10361__auto__);
});

cljs.core$macros.doto.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
var gx = cljs.core.gensym.call(null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__10082__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__10082__auto__ = gx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),cljs.core.map.call(null,((function (gx){
return (function (f){
if(cljs.core.seq_QMARK_.call(null,f)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__10082__auto__ = cljs.core.first.call(null,f);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = gx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),cljs.core.next.call(null,f))));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__10082__auto__ = f;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = gx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
}
});})(gx))
,forms),(function (){var x__10082__auto__ = gx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
});

cljs.core$macros.doto.cljs$lang$maxFixedArity = (3);

cljs.core$macros.doto.cljs$lang$applyTo = (function (seq19827){
var G__19828 = cljs.core.first.call(null,seq19827);
var seq19827__$1 = cljs.core.next.call(null,seq19827);
var G__19829 = cljs.core.first.call(null,seq19827__$1);
var seq19827__$2 = cljs.core.next.call(null,seq19827__$1);
var G__19830 = cljs.core.first.call(null,seq19827__$2);
var seq19827__$3 = cljs.core.next.call(null,seq19827__$2);
return cljs.core$macros.doto.cljs$core$IFn$_invoke$arity$variadic(G__19828,G__19829,G__19830,seq19827__$3);
});


cljs.core$macros.doto.cljs$lang$macro = true;
cljs.core$macros.parse_impls = (function cljs$core$macros$parse_impls(specs){
var ret = cljs.core.PersistentArrayMap.EMPTY;
var s = specs;
while(true){
if(cljs.core.seq.call(null,s)){
var G__19834 = cljs.core.assoc.call(null,ret,cljs.core.first.call(null,s),cljs.core.take_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,s)));
var G__19835 = cljs.core.drop_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,s));
ret = G__19834;
s = G__19835;
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
return (function (p__19840){
var vec__19841 = p__19840;
var t = cljs.core.nth.call(null,vec__19841,(0),null);
var fs = cljs.core.nth.call(null,vec__19841,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","extend-type","cljs.core$macros/extend-type",1713295201,null)),(function (){var x__10082__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = p;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
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
var args__10360__auto__ = [];
var len__10353__auto___19848 = arguments.length;
var i__10354__auto___19849 = (0);
while(true){
if((i__10354__auto___19849 < len__10353__auto___19848)){
args__10360__auto__.push((arguments[i__10354__auto___19849]));

var G__19850 = (i__10354__auto___19849 + (1));
i__10354__auto___19849 = G__19850;
continue;
} else {
}
break;
}

var argseq__10361__auto__ = ((((3) < args__10360__auto__.length))?(new cljs.core.IndexedSeq(args__10360__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.extend_protocol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10361__auto__);
});

cljs.core$macros.extend_protocol.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p,specs){
return cljs.core$macros.emit_extend_protocol.call(null,p,specs);
});

cljs.core$macros.extend_protocol.cljs$lang$maxFixedArity = (3);

cljs.core$macros.extend_protocol.cljs$lang$applyTo = (function (seq19844){
var G__19845 = cljs.core.first.call(null,seq19844);
var seq19844__$1 = cljs.core.next.call(null,seq19844);
var G__19846 = cljs.core.first.call(null,seq19844__$1);
var seq19844__$2 = cljs.core.next.call(null,seq19844__$1);
var G__19847 = cljs.core.first.call(null,seq19844__$2);
var seq19844__$3 = cljs.core.next.call(null,seq19844__$2);
return cljs.core$macros.extend_protocol.cljs$core$IFn$_invoke$arity$variadic(G__19845,G__19846,G__19847,seq19844__$3);
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
var G__19851 = cljs.core.next.call(null,params__$1);
var G__19852 = cljs.core.conj.call(null,new_params,cljs.core.first.call(null,params__$1));
var G__19853 = lets;
params__$1 = G__19851;
new_params = G__19852;
lets = G__19853;
continue;
} else {
var gparam = cljs.core.gensym.call(null,"p__");
var G__19854 = cljs.core.next.call(null,params__$1);
var G__19855 = cljs.core.conj.call(null,new_params,gparam);
var G__19856 = cljs.core.conj.call(null,cljs.core.conj.call(null,lets,cljs.core.first.call(null,params__$1)),gparam);
params__$1 = G__19854;
new_params = G__19855;
lets = G__19856;
continue;
}
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__10082__auto__ = new_params;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__10082__auto__ = lets;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
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
var args__10360__auto__ = [];
var len__10353__auto___19863 = arguments.length;
var i__10354__auto___19864 = (0);
while(true){
if((i__10354__auto___19864 < len__10353__auto___19863)){
args__10360__auto__.push((arguments[i__10354__auto___19864]));

var G__19865 = (i__10354__auto___19864 + (1));
i__10354__auto___19864 = G__19865;
continue;
} else {
}
break;
}

var argseq__10361__auto__ = ((((2) < args__10360__auto__.length))?(new cljs.core.IndexedSeq(args__10360__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.fn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10361__auto__);
});

cljs.core$macros.fn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,sigs){
var name = (((cljs.core.first.call(null,sigs) instanceof cljs.core.Symbol))?cljs.core.first.call(null,sigs):null);
var sigs__$1 = (cljs.core.truth_(name)?cljs.core.next.call(null,sigs):sigs);
var sigs__$2 = ((cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,sigs__$1)))?(function (){var x__10082__auto__ = sigs__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})():((cljs.core.seq_QMARK_.call(null,cljs.core.first.call(null,sigs__$1)))?sigs__$1:(function(){throw (new Error(((cljs.core.seq.call(null,sigs__$1))?[cljs.core.str("Parameter declaration "),cljs.core.str(cljs.core.first.call(null,sigs__$1)),cljs.core.str(" should be a vector")].join(''):[cljs.core.str("Parameter declaration missing")].join(''))))})()));
var psig = ((function (name,sigs__$1,sigs__$2){
return (function (sig){
if(!(cljs.core.seq_QMARK_.call(null,sig))){
throw (new Error([cljs.core.str("Invalid signature "),cljs.core.str(sig),cljs.core.str(" should be a list")].join('')));
} else {
}

var vec__19860 = sig;
var seq__19861 = cljs.core.seq.call(null,vec__19860);
var first__19862 = cljs.core.first.call(null,seq__19861);
var seq__19861__$1 = cljs.core.next.call(null,seq__19861);
var params = first__19862;
var body = seq__19861__$1;
var _ = ((!(cljs.core.vector_QMARK_.call(null,params)))?(function(){throw (new Error(((cljs.core.seq_QMARK_.call(null,cljs.core.first.call(null,sigs__$2)))?[cljs.core.str("Parameter declaration "),cljs.core.str(params),cljs.core.str(" should be a vector")].join(''):[cljs.core.str("Invalid signature "),cljs.core.str(sig),cljs.core.str(" should be a list")].join(''))))})():null);
var conds = (((cljs.core.next.call(null,body)) && (cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))))?cljs.core.first.call(null,body):null);
var body__$1 = (cljs.core.truth_(conds)?cljs.core.next.call(null,body):body);
var conds__$1 = (function (){var or__9245__auto__ = conds;
if(cljs.core.truth_(or__9245__auto__)){
return or__9245__auto__;
} else {
return cljs.core.meta.call(null,params);
}
})();
var pre = new cljs.core.Keyword(null,"pre","pre",2118456869).cljs$core$IFn$_invoke$arity$1(conds__$1);
var post = new cljs.core.Keyword(null,"post","post",269697687).cljs$core$IFn$_invoke$arity$1(conds__$1);
var body__$2 = (cljs.core.truth_(post)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__10082__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"%","%",-950237169,null)),(function (){var x__10082__auto__ = ((((1) < cljs.core.count.call(null,body__$1)))?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),body__$1))):cljs.core.first.call(null,body__$1));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),cljs.core.map.call(null,((function (vec__19860,seq__19861,first__19862,seq__19861__$1,params,body,_,conds,body__$1,conds__$1,pre,post,name,sigs__$1,sigs__$2){
return (function (c){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","assert","cljs.core$macros/assert",1333198789,null)),(function (){var x__10082__auto__ = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
});})(vec__19860,seq__19861,first__19862,seq__19861__$1,params,body,_,conds,body__$1,conds__$1,pre,post,name,sigs__$1,sigs__$2))
,post),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"%","%",-950237169,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})()))):body__$1);
var body__$3 = (cljs.core.truth_(pre)?cljs.core.concat.call(null,cljs.core.map.call(null,((function (vec__19860,seq__19861,first__19862,seq__19861__$1,params,body,_,conds,body__$1,conds__$1,pre,post,body__$2,name,sigs__$1,sigs__$2){
return (function (c){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","assert","cljs.core$macros/assert",1333198789,null)),(function (){var x__10082__auto__ = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
});})(vec__19860,seq__19861,first__19862,seq__19861__$1,params,body,_,conds,body__$1,conds__$1,pre,post,body__$2,name,sigs__$1,sigs__$2))
,pre),body__$2):body__$2);
return cljs.core$macros.maybe_destructured.call(null,params,body__$3);
});})(name,sigs__$1,sigs__$2))
;
var new_sigs = cljs.core.map.call(null,psig,sigs__$2);
return cljs.core.with_meta.call(null,(cljs.core.truth_(name)?cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),name,new_sigs):cljs.core.cons.call(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new_sigs)),cljs.core.meta.call(null,_AMPERSAND_form));
});

cljs.core$macros.fn.cljs$lang$maxFixedArity = (2);

cljs.core$macros.fn.cljs$lang$applyTo = (function (seq19857){
var G__19858 = cljs.core.first.call(null,seq19857);
var seq19857__$1 = cljs.core.next.call(null,seq19857);
var G__19859 = cljs.core.first.call(null,seq19857__$1);
var seq19857__$2 = cljs.core.next.call(null,seq19857__$1);
return cljs.core$macros.fn.cljs$core$IFn$_invoke$arity$variadic(G__19858,G__19859,seq19857__$2);
});


cljs.core$macros.fn.cljs$lang$macro = true;
/**
 * same as defn, yielding non-public def
 */
cljs.core$macros.defn_ = (function cljs$core$macros$defn_(var_args){
var args__10360__auto__ = [];
var len__10353__auto___19870 = arguments.length;
var i__10354__auto___19871 = (0);
while(true){
if((i__10354__auto___19871 < len__10353__auto___19870)){
args__10360__auto__.push((arguments[i__10354__auto___19871]));

var G__19872 = (i__10354__auto___19871 + (1));
i__10354__auto___19871 = G__19872;
continue;
} else {
}
break;
}

var argseq__10361__auto__ = ((((3) < args__10360__auto__.length))?(new cljs.core.IndexedSeq(args__10360__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.defn_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10361__auto__);
});

cljs.core$macros.defn_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,decls){
return cljs.core.list_STAR_.call(null,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null),cljs.core.with_meta.call(null,name,cljs.core.assoc.call(null,cljs.core.meta.call(null,name),new cljs.core.Keyword(null,"private","private",-558947994),true)),decls);
});

cljs.core$macros.defn_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.defn_.cljs$lang$applyTo = (function (seq19866){
var G__19867 = cljs.core.first.call(null,seq19866);
var seq19866__$1 = cljs.core.next.call(null,seq19866);
var G__19868 = cljs.core.first.call(null,seq19866__$1);
var seq19866__$2 = cljs.core.next.call(null,seq19866__$1);
var G__19869 = cljs.core.first.call(null,seq19866__$2);
var seq19866__$3 = cljs.core.next.call(null,seq19866__$2);
return cljs.core$macros.defn_.cljs$core$IFn$_invoke$arity$variadic(G__19867,G__19868,G__19869,seq19866__$3);
});


cljs.core$macros.defn_.cljs$lang$macro = true;
/**
 * bindings => binding-form test
 * 
 *   If test is true, evaluates then with binding-form bound to the value of
 *   test, if not, yields else
 */
cljs.core$macros.if_let = (function cljs$core$macros$if_let(var_args){
var args19874 = [];
var len__10353__auto___19883 = arguments.length;
var i__10354__auto___19884 = (0);
while(true){
if((i__10354__auto___19884 < len__10353__auto___19883)){
args19874.push((arguments[i__10354__auto___19884]));

var G__19885 = (i__10354__auto___19884 + (1));
i__10354__auto___19884 = G__19885;
continue;
} else {
}
break;
}

var G__19882 = args19874.length;
switch (G__19882) {
case 4:
return cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__10372__auto__ = (new cljs.core.IndexedSeq(args19874.slice((5)),(0),null));
return cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__10372__auto__);

}
});

cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,then){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-let","cljs.core$macros/if-let",1291543946,null)),(function (){var x__10082__auto__ = bindings;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = then;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__10082__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__19873__auto__","temp__19873__auto__",-1495947319,null)),(function (){var x__10082__auto__ = tst;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__19873__auto__","temp__19873__auto__",-1495947319,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__10082__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__10082__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__19873__auto__","temp__19873__auto__",-1495947319,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = then;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = else$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
});

cljs.core$macros.if_let.cljs$lang$applyTo = (function (seq19875){
var G__19876 = cljs.core.first.call(null,seq19875);
var seq19875__$1 = cljs.core.next.call(null,seq19875);
var G__19877 = cljs.core.first.call(null,seq19875__$1);
var seq19875__$2 = cljs.core.next.call(null,seq19875__$1);
var G__19878 = cljs.core.first.call(null,seq19875__$2);
var seq19875__$3 = cljs.core.next.call(null,seq19875__$2);
var G__19879 = cljs.core.first.call(null,seq19875__$3);
var seq19875__$4 = cljs.core.next.call(null,seq19875__$3);
var G__19880 = cljs.core.first.call(null,seq19875__$4);
var seq19875__$5 = cljs.core.next.call(null,seq19875__$4);
return cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$variadic(G__19876,G__19877,G__19878,G__19879,G__19880,seq19875__$5);
});

cljs.core$macros.if_let.cljs$lang$maxFixedArity = (5);


cljs.core$macros.if_let.cljs$lang$macro = true;
/**
 * Evaluates test. If logical false, evaluates and returns then expr,
 *   otherwise else expr, if supplied, else nil.
 */
cljs.core$macros.if_not = (function cljs$core$macros$if_not(var_args){
var args19887 = [];
var len__10353__auto___19890 = arguments.length;
var i__10354__auto___19891 = (0);
while(true){
if((i__10354__auto___19891 < len__10353__auto___19890)){
args19887.push((arguments[i__10354__auto___19891]));

var G__19892 = (i__10354__auto___19891 + (1));
i__10354__auto___19891 = G__19892;
continue;
} else {
}
break;
}

var G__19889 = args19887.length;
switch (G__19889) {
case 4:
return cljs.core$macros.if_not.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core$macros.if_not.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str((args19887.length - (2)))].join('')));

}
});

cljs.core$macros.if_not.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,test,then){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__10082__auto__ = test;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = then;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
});

cljs.core$macros.if_not.cljs$core$IFn$_invoke$arity$5 = (function (_AMPERSAND_form,_AMPERSAND_env,test,then,else$){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null)),(function (){var x__10082__auto__ = test;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = then;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = else$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
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
var args__10360__auto__ = [];
var len__10353__auto___19899 = arguments.length;
var i__10354__auto___19900 = (0);
while(true){
if((i__10354__auto___19900 < len__10353__auto___19899)){
args__10360__auto__.push((arguments[i__10354__auto___19900]));

var G__19901 = (i__10354__auto___19900 + (1));
i__10354__auto___19900 = G__19901;
continue;
} else {
}
break;
}

var argseq__10361__auto__ = ((((3) < args__10360__auto__.length))?(new cljs.core.IndexedSeq(args__10360__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.letfn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10361__auto__);
});

cljs.core$macros.letfn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,fnspecs,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"letfn*","letfn*",-110097810,null)),(function (){var x__10082__auto__ = cljs.core.vec.call(null,cljs.core.interleave.call(null,cljs.core.map.call(null,cljs.core.first,fnspecs),cljs.core.map.call(null,(function (p1__19894_SHARP_){
return cljs.core.cons.call(null,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null),p1__19894_SHARP_);
}),fnspecs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),body)));
});

cljs.core$macros.letfn.cljs$lang$maxFixedArity = (3);

cljs.core$macros.letfn.cljs$lang$applyTo = (function (seq19895){
var G__19896 = cljs.core.first.call(null,seq19895);
var seq19895__$1 = cljs.core.next.call(null,seq19895);
var G__19897 = cljs.core.first.call(null,seq19895__$1);
var seq19895__$2 = cljs.core.next.call(null,seq19895__$1);
var G__19898 = cljs.core.first.call(null,seq19895__$2);
var seq19895__$3 = cljs.core.next.call(null,seq19895__$2);
return cljs.core$macros.letfn.cljs$core$IFn$_invoke$arity$variadic(G__19896,G__19897,G__19898,seq19895__$3);
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
var args__10360__auto__ = [];
var len__10353__auto___19906 = arguments.length;
var i__10354__auto___19907 = (0);
while(true){
if((i__10354__auto___19907 < len__10353__auto___19906)){
args__10360__auto__.push((arguments[i__10354__auto___19907]));

var G__19908 = (i__10354__auto___19907 + (1));
i__10354__auto___19907 = G__19908;
continue;
} else {
}
break;
}

var argseq__10361__auto__ = ((((3) < args__10360__auto__.length))?(new cljs.core.IndexedSeq(args__10360__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.memfn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10361__auto__);
});

cljs.core$macros.memfn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,args){
var t = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"target"),cljs.core.meta.call(null,name));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__10082__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__10082__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),args))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__10082__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__10082__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),args)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
});

cljs.core$macros.memfn.cljs$lang$maxFixedArity = (3);

cljs.core$macros.memfn.cljs$lang$applyTo = (function (seq19902){
var G__19903 = cljs.core.first.call(null,seq19902);
var seq19902__$1 = cljs.core.next.call(null,seq19902);
var G__19904 = cljs.core.first.call(null,seq19902__$1);
var seq19902__$2 = cljs.core.next.call(null,seq19902__$1);
var G__19905 = cljs.core.first.call(null,seq19902__$2);
var seq19902__$3 = cljs.core.next.call(null,seq19902__$2);
return cljs.core$macros.memfn.cljs$core$IFn$_invoke$arity$variadic(G__19903,G__19904,G__19905,seq19902__$3);
});


cljs.core$macros.memfn.cljs$lang$macro = true;
/**
 * Evaluates test. If logical true, evaluates body in an implicit do.
 */
cljs.core$macros.when = (function cljs$core$macros$when(var_args){
var args__10360__auto__ = [];
var len__10353__auto___19913 = arguments.length;
var i__10354__auto___19914 = (0);
while(true){
if((i__10354__auto___19914 < len__10353__auto___19913)){
args__10360__auto__.push((arguments[i__10354__auto___19914]));

var G__19915 = (i__10354__auto___19914 + (1));
i__10354__auto___19914 = G__19915;
continue;
} else {
}
break;
}

var argseq__10361__auto__ = ((((3) < args__10360__auto__.length))?(new cljs.core.IndexedSeq(args__10360__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10361__auto__);
});

cljs.core$macros.when.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,test,body){
return cljs.core._conj.call(null,(function (){var x__10082__auto__ = test;
return cljs.core._conj.call(null,(function (){var x__10082__auto____$1 = cljs.core.cons.call(null,new cljs.core.Symbol(null,"do","do",1686842252,null),body);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto____$1);
})(),x__10082__auto__);
})(),new cljs.core.Symbol(null,"if","if",1181717262,null));
});

cljs.core$macros.when.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when.cljs$lang$applyTo = (function (seq19909){
var G__19910 = cljs.core.first.call(null,seq19909);
var seq19909__$1 = cljs.core.next.call(null,seq19909);
var G__19911 = cljs.core.first.call(null,seq19909__$1);
var seq19909__$2 = cljs.core.next.call(null,seq19909__$1);
var G__19912 = cljs.core.first.call(null,seq19909__$2);
var seq19909__$3 = cljs.core.next.call(null,seq19909__$2);
return cljs.core$macros.when.cljs$core$IFn$_invoke$arity$variadic(G__19910,G__19911,G__19912,seq19909__$3);
});


cljs.core$macros.when.cljs$lang$macro = true;
/**
 * bindings => x xs
 * 
 *   Roughly the same as (when (seq xs) (let [x (first xs)] body)) but xs is evaluated only once
 */
cljs.core$macros.when_first = (function cljs$core$macros$when_first(var_args){
var args__10360__auto__ = [];
var len__10353__auto___19924 = arguments.length;
var i__10354__auto___19925 = (0);
while(true){
if((i__10354__auto___19925 < len__10353__auto___19924)){
args__10360__auto__.push((arguments[i__10354__auto___19925]));

var G__19926 = (i__10354__auto___19925 + (1));
i__10354__auto___19925 = G__19926;
continue;
} else {
}
break;
}

var argseq__10361__auto__ = ((((3) < args__10360__auto__.length))?(new cljs.core.IndexedSeq(args__10360__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when_first.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10361__auto__);
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


var vec__19921 = bindings;
var x = cljs.core.nth.call(null,vec__19921,(0),null);
var xs = cljs.core.nth.call(null,vec__19921,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-let","cljs.core$macros/when-let",-2004472648,null)),(function (){var x__10082__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"xs__19916__auto__","xs__19916__auto__",1075129634,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__10082__auto__ = xs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__10082__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__10082__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"xs__19916__auto__","xs__19916__auto__",1075129634,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
});

cljs.core$macros.when_first.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when_first.cljs$lang$applyTo = (function (seq19917){
var G__19918 = cljs.core.first.call(null,seq19917);
var seq19917__$1 = cljs.core.next.call(null,seq19917);
var G__19919 = cljs.core.first.call(null,seq19917__$1);
var seq19917__$2 = cljs.core.next.call(null,seq19917__$1);
var G__19920 = cljs.core.first.call(null,seq19917__$2);
var seq19917__$3 = cljs.core.next.call(null,seq19917__$2);
return cljs.core$macros.when_first.cljs$core$IFn$_invoke$arity$variadic(G__19918,G__19919,G__19920,seq19917__$3);
});


cljs.core$macros.when_first.cljs$lang$macro = true;
/**
 * bindings => binding-form test
 * 
 *   When test is true, evaluates body with binding-form bound to the value of test
 */
cljs.core$macros.when_let = (function cljs$core$macros$when_let(var_args){
var args__10360__auto__ = [];
var len__10353__auto___19932 = arguments.length;
var i__10354__auto___19933 = (0);
while(true){
if((i__10354__auto___19933 < len__10353__auto___19932)){
args__10360__auto__.push((arguments[i__10354__auto___19933]));

var G__19934 = (i__10354__auto___19933 + (1));
i__10354__auto___19933 = G__19934;
continue;
} else {
}
break;
}

var argseq__10361__auto__ = ((((3) < args__10360__auto__.length))?(new cljs.core.IndexedSeq(args__10360__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when_let.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10361__auto__);
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__10082__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__19927__auto__","temp__19927__auto__",829811227,null)),(function (){var x__10082__auto__ = tst;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__19927__auto__","temp__19927__auto__",829811227,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__10082__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__10082__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__19927__auto__","temp__19927__auto__",829811227,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
});

cljs.core$macros.when_let.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when_let.cljs$lang$applyTo = (function (seq19928){
var G__19929 = cljs.core.first.call(null,seq19928);
var seq19928__$1 = cljs.core.next.call(null,seq19928);
var G__19930 = cljs.core.first.call(null,seq19928__$1);
var seq19928__$2 = cljs.core.next.call(null,seq19928__$1);
var G__19931 = cljs.core.first.call(null,seq19928__$2);
var seq19928__$3 = cljs.core.next.call(null,seq19928__$2);
return cljs.core$macros.when_let.cljs$core$IFn$_invoke$arity$variadic(G__19929,G__19930,G__19931,seq19928__$3);
});


cljs.core$macros.when_let.cljs$lang$macro = true;
/**
 * Evaluates test. If logical false, evaluates body in an implicit do.
 */
cljs.core$macros.when_not = (function cljs$core$macros$when_not(var_args){
var args__10360__auto__ = [];
var len__10353__auto___19939 = arguments.length;
var i__10354__auto___19940 = (0);
while(true){
if((i__10354__auto___19940 < len__10353__auto___19939)){
args__10360__auto__.push((arguments[i__10354__auto___19940]));

var G__19941 = (i__10354__auto___19940 + (1));
i__10354__auto___19940 = G__19941;
continue;
} else {
}
break;
}

var argseq__10361__auto__ = ((((3) < args__10360__auto__.length))?(new cljs.core.IndexedSeq(args__10360__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when_not.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10361__auto__);
});

cljs.core$macros.when_not.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,test,body){
return cljs.core._conj.call(null,(function (){var x__10082__auto__ = test;
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__10082__auto____$1 = cljs.core.cons.call(null,new cljs.core.Symbol(null,"do","do",1686842252,null),body);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto____$1);
})(),null),x__10082__auto__);
})(),new cljs.core.Symbol(null,"if","if",1181717262,null));
});

cljs.core$macros.when_not.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when_not.cljs$lang$applyTo = (function (seq19935){
var G__19936 = cljs.core.first.call(null,seq19935);
var seq19935__$1 = cljs.core.next.call(null,seq19935);
var G__19937 = cljs.core.first.call(null,seq19935__$1);
var seq19935__$2 = cljs.core.next.call(null,seq19935__$1);
var G__19938 = cljs.core.first.call(null,seq19935__$2);
var seq19935__$3 = cljs.core.next.call(null,seq19935__$2);
return cljs.core$macros.when_not.cljs$core$IFn$_invoke$arity$variadic(G__19936,G__19937,G__19938,seq19935__$3);
});


cljs.core$macros.when_not.cljs$lang$macro = true;
/**
 * Repeatedly executes body while test expression is true. Presumes
 *   some side-effect will cause test to become false/nil. Returns nil
 */
cljs.core$macros.while$ = (function cljs$core$macros$while(var_args){
var args__10360__auto__ = [];
var len__10353__auto___19946 = arguments.length;
var i__10354__auto___19947 = (0);
while(true){
if((i__10354__auto___19947 < len__10353__auto___19946)){
args__10360__auto__.push((arguments[i__10354__auto___19947]));

var G__19948 = (i__10354__auto___19947 + (1));
i__10354__auto___19947 = G__19948;
continue;
} else {
}
break;
}

var argseq__10361__auto__ = ((((3) < args__10360__auto__.length))?(new cljs.core.IndexedSeq(args__10360__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.while$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10361__auto__);
});

cljs.core$macros.while$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,test,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__10082__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__10082__auto__ = test;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),body,(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
});

cljs.core$macros.while$.cljs$lang$maxFixedArity = (3);

cljs.core$macros.while$.cljs$lang$applyTo = (function (seq19942){
var G__19943 = cljs.core.first.call(null,seq19942);
var seq19942__$1 = cljs.core.next.call(null,seq19942);
var G__19944 = cljs.core.first.call(null,seq19942__$1);
var seq19942__$2 = cljs.core.next.call(null,seq19942__$1);
var G__19945 = cljs.core.first.call(null,seq19942__$2);
var seq19942__$3 = cljs.core.next.call(null,seq19942__$2);
return cljs.core$macros.while$.cljs$core$IFn$_invoke$arity$variadic(G__19943,G__19944,G__19945,seq19942__$3);
});


cljs.core$macros.while$.cljs$lang$macro = true;
/**
 * Takes an expression and a set of test/form pairs. Threads expr (via ->)
 *   through each form for which the corresponding test
 *   expression is true. Note that, unlike cond branching, cond-> threading does
 *   not short circuit after the first true test expression.
 */
cljs.core$macros.cond__GT_ = (function cljs$core$macros$cond__GT_(var_args){
var args__10360__auto__ = [];
var len__10353__auto___19957 = arguments.length;
var i__10354__auto___19958 = (0);
while(true){
if((i__10354__auto___19958 < len__10353__auto___19957)){
args__10360__auto__.push((arguments[i__10354__auto___19958]));

var G__19959 = (i__10354__auto___19958 + (1));
i__10354__auto___19958 = G__19959;
continue;
} else {
}
break;
}

var argseq__10361__auto__ = ((((3) < args__10360__auto__.length))?(new cljs.core.IndexedSeq(args__10360__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.cond__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10361__auto__);
});

cljs.core$macros.cond__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,clauses){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,clauses))){
} else {
throw (new Error("Assert failed: (even? (count clauses))"));
}

var g = cljs.core.gensym.call(null);
var pstep = ((function (g){
return (function (p__19953){
var vec__19954 = p__19953;
var test = cljs.core.nth.call(null,vec__19954,(0),null);
var step = cljs.core.nth.call(null,vec__19954,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__10082__auto__ = test;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","->","cljs.core$macros/->",-1519455206,null)),(function (){var x__10082__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = step;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
});})(g))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__10082__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__10082__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),cljs.core.interleave.call(null,cljs.core.repeat.call(null,g),cljs.core.map.call(null,pstep,cljs.core.partition.call(null,(2),clauses)))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
});

cljs.core$macros.cond__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.cond__GT_.cljs$lang$applyTo = (function (seq19949){
var G__19950 = cljs.core.first.call(null,seq19949);
var seq19949__$1 = cljs.core.next.call(null,seq19949);
var G__19951 = cljs.core.first.call(null,seq19949__$1);
var seq19949__$2 = cljs.core.next.call(null,seq19949__$1);
var G__19952 = cljs.core.first.call(null,seq19949__$2);
var seq19949__$3 = cljs.core.next.call(null,seq19949__$2);
return cljs.core$macros.cond__GT_.cljs$core$IFn$_invoke$arity$variadic(G__19950,G__19951,G__19952,seq19949__$3);
});


cljs.core$macros.cond__GT_.cljs$lang$macro = true;
/**
 * Takes an expression and a set of test/form pairs. Threads expr (via ->>)
 *   through each form for which the corresponding test expression
 *   is true.  Note that, unlike cond branching, cond->> threading does not short circuit
 *   after the first true test expression.
 */
cljs.core$macros.cond__GT__GT_ = (function cljs$core$macros$cond__GT__GT_(var_args){
var args__10360__auto__ = [];
var len__10353__auto___19968 = arguments.length;
var i__10354__auto___19969 = (0);
while(true){
if((i__10354__auto___19969 < len__10353__auto___19968)){
args__10360__auto__.push((arguments[i__10354__auto___19969]));

var G__19970 = (i__10354__auto___19969 + (1));
i__10354__auto___19969 = G__19970;
continue;
} else {
}
break;
}

var argseq__10361__auto__ = ((((3) < args__10360__auto__.length))?(new cljs.core.IndexedSeq(args__10360__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.cond__GT__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10361__auto__);
});

cljs.core$macros.cond__GT__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,clauses){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,clauses))){
} else {
throw (new Error("Assert failed: (even? (count clauses))"));
}

var g = cljs.core.gensym.call(null);
var pstep = ((function (g){
return (function (p__19964){
var vec__19965 = p__19964;
var test = cljs.core.nth.call(null,vec__19965,(0),null);
var step = cljs.core.nth.call(null,vec__19965,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__10082__auto__ = test;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","->>","cljs.core$macros/->>",-1353108561,null)),(function (){var x__10082__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = step;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
});})(g))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__10082__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__10082__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),cljs.core.interleave.call(null,cljs.core.repeat.call(null,g),cljs.core.map.call(null,pstep,cljs.core.partition.call(null,(2),clauses)))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
});

cljs.core$macros.cond__GT__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.cond__GT__GT_.cljs$lang$applyTo = (function (seq19960){
var G__19961 = cljs.core.first.call(null,seq19960);
var seq19960__$1 = cljs.core.next.call(null,seq19960);
var G__19962 = cljs.core.first.call(null,seq19960__$1);
var seq19960__$2 = cljs.core.next.call(null,seq19960__$1);
var G__19963 = cljs.core.first.call(null,seq19960__$2);
var seq19960__$3 = cljs.core.next.call(null,seq19960__$2);
return cljs.core$macros.cond__GT__GT_.cljs$core$IFn$_invoke$arity$variadic(G__19961,G__19962,G__19963,seq19960__$3);
});


cljs.core$macros.cond__GT__GT_.cljs$lang$macro = true;
/**
 * Binds name to expr, evaluates the first form in the lexical context
 *   of that binding, then binds name to that result, repeating for each
 *   successive form, returning the result of the last form.
 */
cljs.core$macros.as__GT_ = (function cljs$core$macros$as__GT_(var_args){
var args__10360__auto__ = [];
var len__10353__auto___19976 = arguments.length;
var i__10354__auto___19977 = (0);
while(true){
if((i__10354__auto___19977 < len__10353__auto___19976)){
args__10360__auto__.push((arguments[i__10354__auto___19977]));

var G__19978 = (i__10354__auto___19977 + (1));
i__10354__auto___19977 = G__19978;
continue;
} else {
}
break;
}

var argseq__10361__auto__ = ((((4) < args__10360__auto__.length))?(new cljs.core.IndexedSeq(args__10360__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.as__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__10361__auto__);
});

cljs.core$macros.as__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,name,forms){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__10082__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__10082__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),cljs.core.interleave.call(null,cljs.core.repeat.call(null,name),forms)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
});

cljs.core$macros.as__GT_.cljs$lang$maxFixedArity = (4);

cljs.core$macros.as__GT_.cljs$lang$applyTo = (function (seq19971){
var G__19972 = cljs.core.first.call(null,seq19971);
var seq19971__$1 = cljs.core.next.call(null,seq19971);
var G__19973 = cljs.core.first.call(null,seq19971__$1);
var seq19971__$2 = cljs.core.next.call(null,seq19971__$1);
var G__19974 = cljs.core.first.call(null,seq19971__$2);
var seq19971__$3 = cljs.core.next.call(null,seq19971__$2);
var G__19975 = cljs.core.first.call(null,seq19971__$3);
var seq19971__$4 = cljs.core.next.call(null,seq19971__$3);
return cljs.core$macros.as__GT_.cljs$core$IFn$_invoke$arity$variadic(G__19972,G__19973,G__19974,G__19975,seq19971__$4);
});


cljs.core$macros.as__GT_.cljs$lang$macro = true;
/**
 * When expr is not nil, threads it into the first form (via ->),
 *   and when that result is not nil, through the next etc
 */
cljs.core$macros.some__GT_ = (function cljs$core$macros$some__GT_(var_args){
var args__10360__auto__ = [];
var len__10353__auto___19983 = arguments.length;
var i__10354__auto___19984 = (0);
while(true){
if((i__10354__auto___19984 < len__10353__auto___19983)){
args__10360__auto__.push((arguments[i__10354__auto___19984]));

var G__19985 = (i__10354__auto___19984 + (1));
i__10354__auto___19984 = G__19985;
continue;
} else {
}
break;
}

var argseq__10361__auto__ = ((((3) < args__10360__auto__.length))?(new cljs.core.IndexedSeq(args__10360__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.some__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10361__auto__);
});

cljs.core$macros.some__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,forms){
var g = cljs.core.gensym.call(null);
var pstep = ((function (g){
return (function (step){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__10082__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","->","cljs.core$macros/->",-1519455206,null)),(function (){var x__10082__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = step;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
});})(g))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__10082__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__10082__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),cljs.core.interleave.call(null,cljs.core.repeat.call(null,g),cljs.core.map.call(null,pstep,forms))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
});

cljs.core$macros.some__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.some__GT_.cljs$lang$applyTo = (function (seq19979){
var G__19980 = cljs.core.first.call(null,seq19979);
var seq19979__$1 = cljs.core.next.call(null,seq19979);
var G__19981 = cljs.core.first.call(null,seq19979__$1);
var seq19979__$2 = cljs.core.next.call(null,seq19979__$1);
var G__19982 = cljs.core.first.call(null,seq19979__$2);
var seq19979__$3 = cljs.core.next.call(null,seq19979__$2);
return cljs.core$macros.some__GT_.cljs$core$IFn$_invoke$arity$variadic(G__19980,G__19981,G__19982,seq19979__$3);
});


cljs.core$macros.some__GT_.cljs$lang$macro = true;
/**
 * When expr is not nil, threads it into the first form (via ->>),
 *   and when that result is not nil, through the next etc
 */
cljs.core$macros.some__GT__GT_ = (function cljs$core$macros$some__GT__GT_(var_args){
var args__10360__auto__ = [];
var len__10353__auto___19990 = arguments.length;
var i__10354__auto___19991 = (0);
while(true){
if((i__10354__auto___19991 < len__10353__auto___19990)){
args__10360__auto__.push((arguments[i__10354__auto___19991]));

var G__19992 = (i__10354__auto___19991 + (1));
i__10354__auto___19991 = G__19992;
continue;
} else {
}
break;
}

var argseq__10361__auto__ = ((((3) < args__10360__auto__.length))?(new cljs.core.IndexedSeq(args__10360__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.some__GT__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10361__auto__);
});

cljs.core$macros.some__GT__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,forms){
var g = cljs.core.gensym.call(null);
var pstep = ((function (g){
return (function (step){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__10082__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","->>","cljs.core$macros/->>",-1353108561,null)),(function (){var x__10082__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = step;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
});})(g))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__10082__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__10082__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),cljs.core.interleave.call(null,cljs.core.repeat.call(null,g),cljs.core.map.call(null,pstep,forms))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
});

cljs.core$macros.some__GT__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.some__GT__GT_.cljs$lang$applyTo = (function (seq19986){
var G__19987 = cljs.core.first.call(null,seq19986);
var seq19986__$1 = cljs.core.next.call(null,seq19986);
var G__19988 = cljs.core.first.call(null,seq19986__$1);
var seq19986__$2 = cljs.core.next.call(null,seq19986__$1);
var G__19989 = cljs.core.first.call(null,seq19986__$2);
var seq19986__$3 = cljs.core.next.call(null,seq19986__$2);
return cljs.core$macros.some__GT__GT_.cljs$core$IFn$_invoke$arity$variadic(G__19987,G__19988,G__19989,seq19986__$3);
});


cljs.core$macros.some__GT__GT_.cljs$lang$macro = true;
/**
 * bindings => binding-form test
 * 
 *    If test is not nil, evaluates then with binding-form bound to the
 *    value of test, if not, yields else
 */
cljs.core$macros.if_some = (function cljs$core$macros$if_some(var_args){
var args19994 = [];
var len__10353__auto___20003 = arguments.length;
var i__10354__auto___20004 = (0);
while(true){
if((i__10354__auto___20004 < len__10353__auto___20003)){
args19994.push((arguments[i__10354__auto___20004]));

var G__20005 = (i__10354__auto___20004 + (1));
i__10354__auto___20004 = G__20005;
continue;
} else {
}
break;
}

var G__20002 = args19994.length;
switch (G__20002) {
case 4:
return cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__10372__auto__ = (new cljs.core.IndexedSeq(args19994.slice((5)),(0),null));
return cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__10372__auto__);

}
});

cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,then){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-some","cljs.core$macros/if-some",1405341529,null)),(function (){var x__10082__auto__ = bindings;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = then;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__10082__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__19993__auto__","temp__19993__auto__",783266038,null)),(function (){var x__10082__auto__ = tst;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__19993__auto__","temp__19993__auto__",783266038,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = else$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__10082__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__10082__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__19993__auto__","temp__19993__auto__",783266038,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = then;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
});

cljs.core$macros.if_some.cljs$lang$applyTo = (function (seq19995){
var G__19996 = cljs.core.first.call(null,seq19995);
var seq19995__$1 = cljs.core.next.call(null,seq19995);
var G__19997 = cljs.core.first.call(null,seq19995__$1);
var seq19995__$2 = cljs.core.next.call(null,seq19995__$1);
var G__19998 = cljs.core.first.call(null,seq19995__$2);
var seq19995__$3 = cljs.core.next.call(null,seq19995__$2);
var G__19999 = cljs.core.first.call(null,seq19995__$3);
var seq19995__$4 = cljs.core.next.call(null,seq19995__$3);
var G__20000 = cljs.core.first.call(null,seq19995__$4);
var seq19995__$5 = cljs.core.next.call(null,seq19995__$4);
return cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$variadic(G__19996,G__19997,G__19998,G__19999,G__20000,seq19995__$5);
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
var args__10360__auto__ = [];
var len__10353__auto___20012 = arguments.length;
var i__10354__auto___20013 = (0);
while(true){
if((i__10354__auto___20013 < len__10353__auto___20012)){
args__10360__auto__.push((arguments[i__10354__auto___20013]));

var G__20014 = (i__10354__auto___20013 + (1));
i__10354__auto___20013 = G__20014;
continue;
} else {
}
break;
}

var argseq__10361__auto__ = ((((3) < args__10360__auto__.length))?(new cljs.core.IndexedSeq(args__10360__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10361__auto__);
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__10082__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__20007__auto__","temp__20007__auto__",-887968507,null)),(function (){var x__10082__auto__ = tst;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__20007__auto__","temp__20007__auto__",-887968507,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__10082__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__10082__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__20007__auto__","temp__20007__auto__",-887968507,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
});

cljs.core$macros.when_some.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when_some.cljs$lang$applyTo = (function (seq20008){
var G__20009 = cljs.core.first.call(null,seq20008);
var seq20008__$1 = cljs.core.next.call(null,seq20008);
var G__20010 = cljs.core.first.call(null,seq20008__$1);
var seq20008__$2 = cljs.core.next.call(null,seq20008__$1);
var G__20011 = cljs.core.first.call(null,seq20008__$2);
var seq20008__$3 = cljs.core.next.call(null,seq20008__$2);
return cljs.core$macros.when_some.cljs$core$IFn$_invoke$arity$variadic(G__20009,G__20010,G__20011,seq20008__$3);
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

var argdecls = cljs.core.map.call(null,(function (p1__20015_SHARP_){
if(cljs.core.seq_QMARK_.call(null,p1__20015_SHARP_)){
return cljs.core.first.call(null,p1__20015_SHARP_);
} else {
throw (new Error(((cljs.core.seq_QMARK_.call(null,cljs.core.first.call(null,fdecl)))?[cljs.core.str("Invalid signature \""),cljs.core.str(p1__20015_SHARP_),cljs.core.str("\" should be a list")].join(''):[cljs.core.str("Parameter declaration \""),cljs.core.str(p1__20015_SHARP_),cljs.core.str("\" should be a vector")].join(''))));
}
}),fdecl);
var bad_args = cljs.core.seq.call(null,cljs.core.remove.call(null,((function (argdecls){
return (function (p1__20016_SHARP_){
return cljs.core.vector_QMARK_.call(null,p1__20016_SHARP_);
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
var G__20017 = cljs.core.conj.call(null,ret,asig.call(null,cljs.core.first.call(null,fdecls)));
var G__20018 = cljs.core.next.call(null,fdecls);
ret = G__20017;
fdecls = G__20018;
continue;
} else {
return cljs.core.seq.call(null,ret);
}
break;
}
} else {
var x__10082__auto__ = asig.call(null,fdecl);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
}
});
/**
 * defs name to have the root value of init iff the named var has no root value,
 *   else init is unevaluated
 */
cljs.core$macros.defonce = (function cljs$core$macros$defonce(_AMPERSAND_form,_AMPERSAND_env,x,init){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-not","cljs.core$macros/when-not",-764302244,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","exists?","cljs.core$macros/exists?",-1828590389,null)),(function (){var x__10082__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"def","def",597100991,null)),(function (){var x__10082__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = init;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
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
return cljs.core.conj.call(null,ret,gseq,cljs.core._conj.call(null,(function (){var x__10082__auto__ = gvec;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
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
var G__20028 = cljs$core$macros$destructure_$_pb.call(null,ret,cljs.core.second.call(null,bs),gseq);
var G__20029 = n;
var G__20030 = cljs.core.nnext.call(null,bs);
var G__20031 = true;
ret = G__20028;
n = G__20029;
bs = G__20030;
seen_rest_QMARK_ = G__20031;
continue;
} else {
if(cljs.core._EQ_.call(null,firstb,new cljs.core.Keyword(null,"as","as",1148689641))){
return cljs$core$macros$destructure_$_pb.call(null,ret,cljs.core.second.call(null,bs),gvec);
} else {
if(seen_rest_QMARK_){
throw (new Error("Unsupported binding form, only :as can follow & parameter"));
} else {
var G__20032 = cljs$core$macros$destructure_$_pb.call(null,(cljs.core.truth_(has_rest)?cljs.core.conj.call(null,ret,gfirst,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null)),(function (){var x__10082__auto__ = gseq;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})()))),gseq,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","next","cljs.core/next",-1291438473,null)),(function (){var x__10082__auto__ = gseq;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())))):ret),firstb,(cljs.core.truth_(has_rest)?gfirst:cljs.core._conj.call(null,(function (){var x__10082__auto__ = gvec;
return cljs.core._conj.call(null,(function (){var x__10082__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,null),x__10082__auto____$1);
})(),x__10082__auto__);
})(),new cljs.core.Symbol("cljs.core","nth","cljs.core/nth",1961052085,null))));
var G__20033 = (n + (1));
var G__20034 = cljs.core.next.call(null,bs);
var G__20035 = seen_rest_QMARK_;
ret = G__20032;
n = G__20033;
bs = G__20034;
seen_rest_QMARK_ = G__20035;
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
.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,bvec__$1,gmap),v__$1),gmap),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","implements?","cljs.core$macros/implements?",-94762250,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","ISeq","cljs.core/ISeq",230133392,null)),(function (){var x__10082__auto__ = gmap;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","hash-map","cljs.core/hash-map",303385767,null)),(function (){var x__10082__auto__ = gmap;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = gmap;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())))));
var bes = (function (){var transforms = cljs.core.reduce.call(null,((function (ret,gmap,defaults,pvec,bents){
return (function (transforms,mk){
if((mk instanceof cljs.core.Keyword)){
var mkns = cljs.core.namespace.call(null,mk);
var mkn = cljs.core.name.call(null,mk);
if(cljs.core._EQ_.call(null,mkn,"keys")){
return cljs.core.assoc.call(null,transforms,mk,((function (mkns,mkn,ret,gmap,defaults,pvec,bents){
return (function (p1__20019_SHARP_){
return cljs.core.keyword.call(null,(function (){var or__9245__auto__ = mkns;
if(cljs.core.truth_(or__9245__auto__)){
return or__9245__auto__;
} else {
return cljs.core.namespace.call(null,p1__20019_SHARP_);
}
})(),cljs.core.name.call(null,p1__20019_SHARP_));
});})(mkns,mkn,ret,gmap,defaults,pvec,bents))
);
} else {
if(cljs.core._EQ_.call(null,mkn,"syms")){
return cljs.core.assoc.call(null,transforms,mk,((function (mkns,mkn,ret,gmap,defaults,pvec,bents){
return (function (p1__20020_SHARP_){
return cljs.core._conj.call(null,(function (){var x__10082__auto__ = cljs.core.symbol.call(null,(function (){var or__9245__auto__ = mkns;
if(cljs.core.truth_(or__9245__auto__)){
return or__9245__auto__;
} else {
return cljs.core.namespace.call(null,p1__20020_SHARP_);
}
})(),cljs.core.name.call(null,p1__20020_SHARP_));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
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
return (function (p1__20021_SHARP_,p2__20022_SHARP_){
return cljs.core.assoc.call(null,p1__20021_SHARP_,p2__20022_SHARP_,cljs.core.val.call(null,entry).call(null,p2__20022_SHARP_));
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
var bv = ((cljs.core.contains_QMARK_.call(null,defaults,local))?cljs.core._conj.call(null,(function (){var x__10082__auto__ = gmap;
return cljs.core._conj.call(null,(function (){var x__10082__auto____$1 = bk;
return cljs.core._conj.call(null,(function (){var x__10082__auto____$2 = defaults.call(null,local);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto____$2);
})(),x__10082__auto____$1);
})(),x__10082__auto__);
})(),new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null)):cljs.core._conj.call(null,(function (){var x__10082__auto__ = gmap;
return cljs.core._conj.call(null,(function (){var x__10082__auto____$1 = bk;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto____$1);
})(),x__10082__auto__);
})(),new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null)));
var G__20036 = ((((bb instanceof cljs.core.Keyword)) || ((bb instanceof cljs.core.Symbol)))?cljs.core.conj.call(null,ret,local,bv):cljs$core$macros$destructure_$_pb.call(null,ret,bb,bv));
var G__20037 = cljs.core.next.call(null,bes);
ret = G__20036;
bes = G__20037;
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
return (function (p1__20023_SHARP_){
return (cljs.core.first.call(null,p1__20023_SHARP_) instanceof cljs.core.Keyword);
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","declare","cljs.core$macros/declare",1172642527,null)),(function (){var x__10082__auto__ = cljs.core.symbol.call(null,sym);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),(function (){var x__10082__auto__ = [cljs.core.str("/** @define {"),cljs.core.str(type),cljs.core.str("} */")].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog","define","goog/define",-352722538,null)),(function (){var x__10082__auto__ = defname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = default$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
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
var args__10360__auto__ = [];
var len__10353__auto___20042 = arguments.length;
var i__10354__auto___20043 = (0);
while(true){
if((i__10354__auto___20043 < len__10353__auto___20042)){
args__10360__auto__.push((arguments[i__10354__auto___20043]));

var G__20044 = (i__10354__auto___20043 + (1));
i__10354__auto___20043 = G__20044;
continue;
} else {
}
break;
}

var argseq__10361__auto__ = ((((3) < args__10360__auto__.length))?(new cljs.core.IndexedSeq(args__10360__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.let$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10361__auto__);
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


return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"let*","let*",1920721458,null)),(function (){var x__10082__auto__ = cljs.core$macros.destructure.call(null,bindings);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),body)));
});

cljs.core$macros.let$.cljs$lang$maxFixedArity = (3);

cljs.core$macros.let$.cljs$lang$applyTo = (function (seq20038){
var G__20039 = cljs.core.first.call(null,seq20038);
var seq20038__$1 = cljs.core.next.call(null,seq20038);
var G__20040 = cljs.core.first.call(null,seq20038__$1);
var seq20038__$2 = cljs.core.next.call(null,seq20038__$1);
var G__20041 = cljs.core.first.call(null,seq20038__$2);
var seq20038__$3 = cljs.core.next.call(null,seq20038__$2);
return cljs.core$macros.let$.cljs$core$IFn$_invoke$arity$variadic(G__20039,G__20040,G__20041,seq20038__$3);
});


cljs.core$macros.let$.cljs$lang$macro = true;
/**
 * Evaluates the exprs in a lexical context in which the symbols in
 *   the binding-forms are bound to their respective init-exprs or parts
 *   therein. Acts as a recur target.
 */
cljs.core$macros.loop = (function cljs$core$macros$loop(var_args){
var args__10360__auto__ = [];
var len__10353__auto___20053 = arguments.length;
var i__10354__auto___20054 = (0);
while(true){
if((i__10354__auto___20054 < len__10353__auto___20053)){
args__10360__auto__.push((arguments[i__10354__auto___20054]));

var G__20055 = (i__10354__auto___20054 + (1));
i__10354__auto___20054 = G__20055;
continue;
} else {
}
break;
}

var argseq__10361__auto__ = ((((3) < args__10360__auto__.length))?(new cljs.core.IndexedSeq(args__10360__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.loop.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10361__auto__);
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"loop*","loop*",615029416,null)),(function (){var x__10082__auto__ = bindings;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
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
return (function (ret,p__20049){
var vec__20050 = p__20049;
var b = cljs.core.nth.call(null,vec__20050,(0),null);
var v = cljs.core.nth.call(null,vec__20050,(1),null);
var g = cljs.core.nth.call(null,vec__20050,(2),null);
if((b instanceof cljs.core.Symbol)){
return cljs.core.conj.call(null,ret,g,v);
} else {
return cljs.core.conj.call(null,ret,g,v,b,g);
}
});})(vs,bs,gs,db))
,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,cljs.core.vector,bs,vs,gs));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__10082__auto__ = bfs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"loop*","loop*",615029416,null)),(function (){var x__10082__auto__ = cljs.core.vec.call(null,cljs.core.interleave.call(null,gs,gs));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__10082__auto__ = cljs.core.vec.call(null,cljs.core.interleave.call(null,bs,gs));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
}
});

cljs.core$macros.loop.cljs$lang$maxFixedArity = (3);

cljs.core$macros.loop.cljs$lang$applyTo = (function (seq20045){
var G__20046 = cljs.core.first.call(null,seq20045);
var seq20045__$1 = cljs.core.next.call(null,seq20045);
var G__20047 = cljs.core.first.call(null,seq20045__$1);
var seq20045__$2 = cljs.core.next.call(null,seq20045__$1);
var G__20048 = cljs.core.first.call(null,seq20045__$2);
var seq20045__$3 = cljs.core.next.call(null,seq20045__$2);
return cljs.core$macros.loop.cljs$core$IFn$_invoke$arity$variadic(G__20046,G__20047,G__20048,seq20045__$3);
});


cljs.core$macros.loop.cljs$lang$macro = true;
/**
 * protocol fqn -> [partition number, bit]
 */
cljs.core$macros.fast_path_protocols = cljs.core.zipmap.call(null,cljs.core.map.call(null,(function (p1__20056_SHARP_){
return cljs.core.symbol.call(null,"cljs.core",[cljs.core.str(p1__20056_SHARP_)].join(''));
}),cljs.core.PersistentVector.fromArray([new cljs.core.Symbol(null,"IFn","IFn",-244881638,null),new cljs.core.Symbol(null,"ICounted","ICounted",-1705786327,null),new cljs.core.Symbol(null,"IEmptyableCollection","IEmptyableCollection",1477271438,null),new cljs.core.Symbol(null,"ICollection","ICollection",-686709190,null),new cljs.core.Symbol(null,"IIndexed","IIndexed",-574812826,null),new cljs.core.Symbol(null,"ASeq","ASeq",266390234,null),new cljs.core.Symbol(null,"ISeq","ISeq",1517365813,null),new cljs.core.Symbol(null,"INext","INext",562211849,null),new cljs.core.Symbol(null,"ILookup","ILookup",784647298,null),new cljs.core.Symbol(null,"IAssociative","IAssociative",-1306431882,null),new cljs.core.Symbol(null,"IMap","IMap",992876629,null),new cljs.core.Symbol(null,"IMapEntry","IMapEntry",-943754199,null),new cljs.core.Symbol(null,"ISet","ISet",-1398072657,null),new cljs.core.Symbol(null,"IStack","IStack",1136769449,null),new cljs.core.Symbol(null,"IVector","IVector",-1120721434,null),new cljs.core.Symbol(null,"IDeref","IDeref",1738423197,null),new cljs.core.Symbol(null,"IDerefWithTimeout","IDerefWithTimeout",2140974319,null),new cljs.core.Symbol(null,"IMeta","IMeta",1095313672,null),new cljs.core.Symbol(null,"IWithMeta","IWithMeta",-509493158,null),new cljs.core.Symbol(null,"IReduce","IReduce",-440384974,null),new cljs.core.Symbol(null,"IKVReduce","IKVReduce",-870856862,null),new cljs.core.Symbol(null,"IEquiv","IEquiv",-1912850869,null),new cljs.core.Symbol(null,"IHash","IHash",-1495374645,null),new cljs.core.Symbol(null,"ISeqable","ISeqable",1349682102,null),new cljs.core.Symbol(null,"ISequential","ISequential",-1626174217,null),new cljs.core.Symbol(null,"IList","IList",1682281311,null),new cljs.core.Symbol(null,"IRecord","IRecord",-903221169,null),new cljs.core.Symbol(null,"IReversible","IReversible",-723048599,null),new cljs.core.Symbol(null,"ISorted","ISorted",-253627362,null),new cljs.core.Symbol(null,"IPrintWithWriter","IPrintWithWriter",-1205316154,null),new cljs.core.Symbol(null,"IWriter","IWriter",-1681087107,null),new cljs.core.Symbol(null,"IPrintWithWriter","IPrintWithWriter",-1205316154,null),new cljs.core.Symbol(null,"IPending","IPending",1229113039,null),new cljs.core.Symbol(null,"IWatchable","IWatchable",-1929659016,null),new cljs.core.Symbol(null,"IEditableCollection","IEditableCollection",-906687187,null),new cljs.core.Symbol(null,"ITransientCollection","ITransientCollection",252832402,null),new cljs.core.Symbol(null,"ITransientAssociative","ITransientAssociative",-1612754624,null),new cljs.core.Symbol(null,"ITransientMap","ITransientMap",298423651,null),new cljs.core.Symbol(null,"ITransientVector","ITransientVector",1978793164,null),new cljs.core.Symbol(null,"ITransientSet","ITransientSet",-575559912,null),new cljs.core.Symbol(null,"IMultiFn","IMultiFn",-1848282794,null),new cljs.core.Symbol(null,"IChunkedSeq","IChunkedSeq",-1299765705,null),new cljs.core.Symbol(null,"IChunkedNext","IChunkedNext",1193289532,null),new cljs.core.Symbol(null,"IComparable","IComparable",1834481627,null),new cljs.core.Symbol(null,"INamed","INamed",357992946,null),new cljs.core.Symbol(null,"ICloneable","ICloneable",1882653160,null),new cljs.core.Symbol(null,"IAtom","IAtom",-1411134312,null),new cljs.core.Symbol(null,"IReset","IReset",-1893729426,null),new cljs.core.Symbol(null,"ISwap","ISwap",484378193,null)], true)),cljs.core.iterate.call(null,(function (p__20057){
var vec__20058 = p__20057;
var p = cljs.core.nth.call(null,vec__20058,(0),null);
var b = cljs.core.nth.call(null,vec__20058,(1),null);
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
var args__10360__auto__ = [];
var len__10353__auto___20064 = arguments.length;
var i__10354__auto___20065 = (0);
while(true){
if((i__10354__auto___20065 < len__10353__auto___20064)){
args__10360__auto__.push((arguments[i__10354__auto___20065]));

var G__20066 = (i__10354__auto___20065 + (1));
i__10354__auto___20065 = G__20066;
continue;
} else {
}
break;
}

var argseq__10361__auto__ = ((((2) < args__10360__auto__.length))?(new cljs.core.IndexedSeq(args__10360__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10361__auto__);
});

cljs.core$macros.str.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
var strs = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,",",cljs.core.repeat.call(null,cljs.core.count.call(null,xs),"cljs.core.str(~{})")));
return cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),[cljs.core.str("["),cljs.core.str(strs),cljs.core.str("].join('')")].join(''),xs);
});

cljs.core$macros.str.cljs$lang$maxFixedArity = (2);

cljs.core$macros.str.cljs$lang$applyTo = (function (seq20061){
var G__20062 = cljs.core.first.call(null,seq20061);
var seq20061__$1 = cljs.core.next.call(null,seq20061);
var G__20063 = cljs.core.first.call(null,seq20061__$1);
var seq20061__$2 = cljs.core.next.call(null,seq20061__$1);
return cljs.core$macros.str.cljs$core$IFn$_invoke$arity$variadic(G__20062,G__20063,seq20061__$2);
});


cljs.core$macros.str.cljs$lang$macro = true;
cljs.core$macros.bool_expr = (function cljs$core$macros$bool_expr(e){
return cljs.core.vary_meta.call(null,e,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null));
});
cljs.core$macros.simple_test_expr_QMARK_ = (function cljs$core$macros$simple_test_expr_QMARK_(env,ast){
var and__9233__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"js","js",1768080579),null,new cljs.core.Keyword(null,"constant","constant",-379609303),null,new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"invoke","invoke",1145927159),null,new cljs.core.Keyword(null,"dot","dot",1442709401),null], null), null).call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast));
if(cljs.core.truth_(and__9233__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null).call(null,cljs.analyzer.infer_tag.call(null,env,ast));
} else {
return and__9233__auto__;
}
});
/**
 * Evaluates exprs one at a time, from left to right. If a form
 *   returns logical false (nil or false), and returns that value and
 *   doesn't evaluate any of the other expressions, otherwise it returns
 *   the value of the last expr. (and) returns true.
 */
cljs.core$macros.and = (function cljs$core$macros$and(var_args){
var args20070 = [];
var len__10353__auto___20077 = arguments.length;
var i__10354__auto___20078 = (0);
while(true){
if((i__10354__auto___20078 < len__10353__auto___20077)){
args20070.push((arguments[i__10354__auto___20078]));

var G__20079 = (i__10354__auto___20078 + (1));
i__10354__auto___20078 = G__20079;
continue;
} else {
}
break;
}

var G__20076 = args20070.length;
switch (G__20076) {
case 2:
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__10372__auto__ = (new cljs.core.IndexedSeq(args20070.slice((3)),(0),null));
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10372__auto__);

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
return (function (p1__20067_SHARP_){
return cljs.core$macros.simple_test_expr_QMARK_.call(null,_AMPERSAND_env,p1__20067_SHARP_);
});})(forms))
,cljs.core.map.call(null,((function (forms){
return (function (p1__20068_SHARP_){
return cljs.analyzer.analyze.call(null,_AMPERSAND_env,p1__20068_SHARP_);
});})(forms))
,forms))){
var and_str = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," && ",cljs.core.repeat.call(null,cljs.core.count.call(null,forms),"(~{})")));
return cljs.core$macros.bool_expr.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),(function (){var x__10082__auto__ = and_str;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),forms))));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__10082__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"and__20069__auto__","and__20069__auto__",274530531,null)),(function (){var x__10082__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"and__20069__auto__","and__20069__auto__",274530531,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),next)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"and__20069__auto__","and__20069__auto__",274530531,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
}
});

cljs.core$macros.and.cljs$lang$applyTo = (function (seq20071){
var G__20072 = cljs.core.first.call(null,seq20071);
var seq20071__$1 = cljs.core.next.call(null,seq20071);
var G__20073 = cljs.core.first.call(null,seq20071__$1);
var seq20071__$2 = cljs.core.next.call(null,seq20071__$1);
var G__20074 = cljs.core.first.call(null,seq20071__$2);
var seq20071__$3 = cljs.core.next.call(null,seq20071__$2);
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$variadic(G__20072,G__20073,G__20074,seq20071__$3);
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
var args20084 = [];
var len__10353__auto___20091 = arguments.length;
var i__10354__auto___20092 = (0);
while(true){
if((i__10354__auto___20092 < len__10353__auto___20091)){
args20084.push((arguments[i__10354__auto___20092]));

var G__20093 = (i__10354__auto___20092 + (1));
i__10354__auto___20092 = G__20093;
continue;
} else {
}
break;
}

var G__20090 = args20084.length;
switch (G__20090) {
case 2:
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__10372__auto__ = (new cljs.core.IndexedSeq(args20084.slice((3)),(0),null));
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10372__auto__);

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
return (function (p1__20081_SHARP_){
return cljs.core$macros.simple_test_expr_QMARK_.call(null,_AMPERSAND_env,p1__20081_SHARP_);
});})(forms))
,cljs.core.map.call(null,((function (forms){
return (function (p1__20082_SHARP_){
return cljs.analyzer.analyze.call(null,_AMPERSAND_env,p1__20082_SHARP_);
});})(forms))
,forms))){
var or_str = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," || ",cljs.core.repeat.call(null,cljs.core.count.call(null,forms),"(~{})")));
return cljs.core$macros.bool_expr.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),(function (){var x__10082__auto__ = or_str;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),forms))));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__10082__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"or__20083__auto__","or__20083__auto__",2015184133,null)),(function (){var x__10082__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"or__20083__auto__","or__20083__auto__",2015184133,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"or__20083__auto__","or__20083__auto__",2015184133,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","or","cljs.core$macros/or",1346243648,null)),next)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
}
});

cljs.core$macros.or.cljs$lang$applyTo = (function (seq20085){
var G__20086 = cljs.core.first.call(null,seq20085);
var seq20085__$1 = cljs.core.next.call(null,seq20085);
var G__20087 = cljs.core.first.call(null,seq20085__$1);
var seq20085__$2 = cljs.core.next.call(null,seq20085__$1);
var G__20088 = cljs.core.first.call(null,seq20085__$2);
var seq20085__$3 = cljs.core.next.call(null,seq20085__$2);
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$variadic(G__20086,G__20087,G__20088,seq20085__$3);
});

cljs.core$macros.or.cljs$lang$maxFixedArity = (3);


cljs.core$macros.or.cljs$lang$macro = true;
cljs.core$macros.nil_QMARK_ = (function cljs$core$macros$nil_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","coercive-=","cljs.core$macros/coercive-=",-1655776086,null)),(function (){var x__10082__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
});

cljs.core$macros.nil_QMARK_.cljs$lang$macro = true;
cljs.core$macros.coercive_not = (function cljs$core$macros$coercive_not(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__10082__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),"(!~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.coercive_not.cljs$lang$macro = true;
cljs.core$macros.coercive_not_EQ_ = (function cljs$core$macros$coercive_not_EQ_(_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__10082__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__10082__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto____$1);
})(),x__10082__auto__);
})(),"(~{} != ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.coercive_not_EQ_.cljs$lang$macro = true;
cljs.core$macros.coercive__EQ_ = (function cljs$core$macros$coercive__EQ_(_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__10082__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__10082__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto____$1);
})(),x__10082__auto__);
})(),"(~{} == ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.coercive__EQ_.cljs$lang$macro = true;
cljs.core$macros.coercive_boolean = (function cljs$core$macros$coercive_boolean(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.with_meta.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__10082__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),"~{}"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)], null));
});

cljs.core$macros.coercive_boolean.cljs$lang$macro = true;
cljs.core$macros.truth_ = (function cljs$core$macros$truth_(_AMPERSAND_form,_AMPERSAND_env,x){
if((x instanceof cljs.core.Symbol)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("x is substituted twice"),cljs.core.str("\n"),cljs.core.str("(core/symbol? x)")].join('')));
}

return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__10082__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__10082__auto____$1 = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto____$1);
})(),x__10082__auto__);
})(),"(~{} != null && ~{} !== false)"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.truth_.cljs$lang$macro = true;
cljs.core$macros.js_arguments = (function cljs$core$macros$js_arguments(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"arguments"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.js_arguments.cljs$lang$macro = true;
cljs.core$macros.js_delete = (function cljs$core$macros$js_delete(_AMPERSAND_form,_AMPERSAND_env,obj,key){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__10082__auto__ = obj;
return cljs.core._conj.call(null,(function (){var x__10082__auto____$1 = key;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto____$1);
})(),x__10082__auto__);
})(),"delete ~{}[~{}]"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.js_delete.cljs$lang$macro = true;
cljs.core$macros.js_in = (function cljs$core$macros$js_in(_AMPERSAND_form,_AMPERSAND_env,key,obj){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__10082__auto__ = key;
return cljs.core._conj.call(null,(function (){var x__10082__auto____$1 = obj;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto____$1);
})(),x__10082__auto__);
})(),"~{} in ~{}"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.js_in.cljs$lang$macro = true;
/**
 * Emit JavaScript "debugger;" statement
 */
cljs.core$macros.js_debugger = (function cljs$core$macros$js_debugger(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core._conj.call(null,(function (){var x__10082__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"debugger"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,null),x__10082__auto__);
})(),new cljs.core.Symbol(null,"do","do",1686842252,null));
});

cljs.core$macros.js_debugger.cljs$lang$macro = true;
/**
 * Emit a top-level JavaScript multi-line comment. New lines will create a
 *   new comment line. Comment block will be preceded and followed by a newline
 */
cljs.core$macros.js_comment = (function cljs$core$macros$js_comment(_AMPERSAND_form,_AMPERSAND_env,comment){
var vec__20099 = clojure.string.split.call(null,comment,/\n/);
var seq__20100 = cljs.core.seq.call(null,vec__20099);
var first__20101 = cljs.core.first.call(null,seq__20100);
var seq__20100__$1 = cljs.core.next.call(null,seq__20100);
var x = first__20101;
var ys = seq__20100__$1;
return cljs.core._conj.call(null,(function (){var x__10082__auto__ = [cljs.core.str("\n/**\n"),cljs.core.str([cljs.core.str(" * "),cljs.core.str(x),cljs.core.str("\n")].join('')),cljs.core.str(cljs.core.reduce.call(null,cljs.core.str,"",cljs.core.map.call(null,((function (vec__20099,seq__20100,first__20101,seq__20100__$1,x,ys){
return (function (p1__20095_SHARP_){
return [cljs.core.str(" * "),cljs.core.str(clojure.string.replace.call(null,p1__20095_SHARP_,/^   /,"")),cljs.core.str("\n")].join('');
});})(vec__20099,seq__20100,first__20101,seq__20100__$1,x,ys))
,ys))),cljs.core.str(" */\n")].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.js_comment.cljs$lang$macro = true;
/**
 * EXPERIMENTAL: Subject to change. Unsafely cast a value to a different type.
 */
cljs.core$macros.unsafe_cast = (function cljs$core$macros$unsafe_cast(_AMPERSAND_form,_AMPERSAND_env,t,x){
var cast_expr = [cljs.core.str("~{} = /** @type {"),cljs.core.str(t),cljs.core.str("} */ (~{})")].join('');
return cljs.core._conj.call(null,(function (){var x__10082__auto__ = cast_expr;
return cljs.core._conj.call(null,(function (){var x__10082__auto____$1 = x;
return cljs.core._conj.call(null,(function (){var x__10082__auto____$2 = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto____$2);
})(),x__10082__auto____$1);
})(),x__10082__auto__);
})(),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.unsafe_cast.cljs$lang$macro = true;
/**
 * Emit an inline JavaScript comment.
 */
cljs.core$macros.js_inline_comment = (function cljs$core$macros$js_inline_comment(_AMPERSAND_form,_AMPERSAND_env,comment){
return cljs.core._conj.call(null,(function (){var x__10082__auto__ = [cljs.core.str("/**"),cljs.core.str(comment),cljs.core.str("*/")].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.js_inline_comment.cljs$lang$macro = true;
cljs.core$macros.true_QMARK_ = (function cljs$core$macros$true_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__10082__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),"~{} === true"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.true_QMARK_.cljs$lang$macro = true;
cljs.core$macros.false_QMARK_ = (function cljs$core$macros$false_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__10082__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),"~{} === false"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.false_QMARK_.cljs$lang$macro = true;
cljs.core$macros.string_QMARK_ = (function cljs$core$macros$string_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__10082__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),"typeof ~{} === 'string'"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.string_QMARK_.cljs$lang$macro = true;
/**
 * Return true if argument exists, analogous to usage of typeof operator
 * in JavaScript.
 */
cljs.core$macros.exists_QMARK_ = (function cljs$core$macros$exists_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__10082__auto__ = cljs.core.vary_meta.call(null,x,cljs.core.assoc,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),"typeof ~{} !== 'undefined'"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.exists_QMARK_.cljs$lang$macro = true;
/**
 * Return true if argument is identical to the JavaScript undefined value.
 */
cljs.core$macros.undefined_QMARK_ = (function cljs$core$macros$undefined_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__10082__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),"(void 0 === ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.undefined_QMARK_.cljs$lang$macro = true;
cljs.core$macros.identical_QMARK_ = (function cljs$core$macros$identical_QMARK_(_AMPERSAND_form,_AMPERSAND_env,a,b){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__10082__auto__ = a;
return cljs.core._conj.call(null,(function (){var x__10082__auto____$1 = b;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto____$1);
})(),x__10082__auto__);
})(),"(~{} === ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.identical_QMARK_.cljs$lang$macro = true;
cljs.core$macros.instance_QMARK_ = (function cljs$core$macros$instance_QMARK_(_AMPERSAND_form,_AMPERSAND_env,c,x){
return cljs.core$macros.bool_expr.call(null,(((c instanceof cljs.core.Symbol))?cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__10082__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__10082__auto____$1 = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto____$1);
})(),x__10082__auto__);
})(),"(~{} instanceof ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)):cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__10082__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__20102__auto__","c__20102__auto__",-2009983766,null)),(function (){var x__10082__auto__ = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__20103__auto__","x__20103__auto__",-1758833638,null)),(function (){var x__10082__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"(~{} instanceof ~{})"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__20103__auto__","x__20103__auto__",-1758833638,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__20102__auto__","c__20102__auto__",-2009983766,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())))));
});

cljs.core$macros.instance_QMARK_.cljs$lang$macro = true;
cljs.core$macros.number_QMARK_ = (function cljs$core$macros$number_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__10082__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),"typeof ~{} === 'number'"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.number_QMARK_.cljs$lang$macro = true;
cljs.core$macros.symbol_QMARK_ = (function cljs$core$macros$symbol_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","instance?","cljs.core$macros/instance?",1829750179,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","Symbol","cljs.core/Symbol",292989338,null)),(function (){var x__10082__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})()))));
});

cljs.core$macros.symbol_QMARK_.cljs$lang$macro = true;
cljs.core$macros.keyword_QMARK_ = (function cljs$core$macros$keyword_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","instance?","cljs.core$macros/instance?",1829750179,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","Keyword","cljs.core/Keyword",-451434488,null)),(function (){var x__10082__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})()))));
});

cljs.core$macros.keyword_QMARK_.cljs$lang$macro = true;
cljs.core$macros.aget = (function cljs$core$macros$aget(var_args){
var args20104 = [];
var len__10353__auto___20112 = arguments.length;
var i__10354__auto___20113 = (0);
while(true){
if((i__10354__auto___20113 < len__10353__auto___20112)){
args20104.push((arguments[i__10354__auto___20113]));

var G__20114 = (i__10354__auto___20113 + (1));
i__10354__auto___20113 = G__20114;
continue;
} else {
}
break;
}

var G__20111 = args20104.length;
switch (G__20111) {
case 4:
return cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__10372__auto__ = (new cljs.core.IndexedSeq(args20104.slice((4)),(0),null));
return cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__10372__auto__);

}
});

cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,a,i){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__10082__auto__ = a;
return cljs.core._conj.call(null,(function (){var x__10082__auto____$1 = i;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto____$1);
})(),x__10082__auto__);
})(),"(~{}[~{}])"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,a,i,idxs){
var astr = cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,cljs.core.count.call(null,idxs),"[~{}]"));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),(function (){var x__10082__auto__ = [cljs.core.str("(~{}[~{}]"),cljs.core.str(astr),cljs.core.str(")")].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = a;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = i;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),idxs)));
});

cljs.core$macros.aget.cljs$lang$applyTo = (function (seq20105){
var G__20106 = cljs.core.first.call(null,seq20105);
var seq20105__$1 = cljs.core.next.call(null,seq20105);
var G__20107 = cljs.core.first.call(null,seq20105__$1);
var seq20105__$2 = cljs.core.next.call(null,seq20105__$1);
var G__20108 = cljs.core.first.call(null,seq20105__$2);
var seq20105__$3 = cljs.core.next.call(null,seq20105__$2);
var G__20109 = cljs.core.first.call(null,seq20105__$3);
var seq20105__$4 = cljs.core.next.call(null,seq20105__$3);
return cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$variadic(G__20106,G__20107,G__20108,G__20109,seq20105__$4);
});

cljs.core$macros.aget.cljs$lang$maxFixedArity = (4);


cljs.core$macros.aget.cljs$lang$macro = true;
cljs.core$macros.aset = (function cljs$core$macros$aset(var_args){
var args20116 = [];
var len__10353__auto___20125 = arguments.length;
var i__10354__auto___20126 = (0);
while(true){
if((i__10354__auto___20126 < len__10353__auto___20125)){
args20116.push((arguments[i__10354__auto___20126]));

var G__20127 = (i__10354__auto___20126 + (1));
i__10354__auto___20126 = G__20127;
continue;
} else {
}
break;
}

var G__20124 = args20116.length;
switch (G__20124) {
case 5:
return cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
var argseq__10372__auto__ = (new cljs.core.IndexedSeq(args20116.slice((5)),(0),null));
return cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__10372__auto__);

}
});

cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$5 = (function (_AMPERSAND_form,_AMPERSAND_env,a,i,v){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__10082__auto__ = a;
return cljs.core._conj.call(null,(function (){var x__10082__auto____$1 = i;
return cljs.core._conj.call(null,(function (){var x__10082__auto____$2 = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto____$2);
})(),x__10082__auto____$1);
})(),x__10082__auto__);
})(),"(~{}[~{}] = ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,a,idx,idx2,idxv){
var n = (cljs.core.count.call(null,idxv) - (1));
var astr = cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,n,"[~{}]"));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),(function (){var x__10082__auto__ = [cljs.core.str("(~{}[~{}][~{}]"),cljs.core.str(astr),cljs.core.str(" = ~{})")].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = a;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = idx2;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),idxv)));
});

cljs.core$macros.aset.cljs$lang$applyTo = (function (seq20117){
var G__20118 = cljs.core.first.call(null,seq20117);
var seq20117__$1 = cljs.core.next.call(null,seq20117);
var G__20119 = cljs.core.first.call(null,seq20117__$1);
var seq20117__$2 = cljs.core.next.call(null,seq20117__$1);
var G__20120 = cljs.core.first.call(null,seq20117__$2);
var seq20117__$3 = cljs.core.next.call(null,seq20117__$2);
var G__20121 = cljs.core.first.call(null,seq20117__$3);
var seq20117__$4 = cljs.core.next.call(null,seq20117__$3);
var G__20122 = cljs.core.first.call(null,seq20117__$4);
var seq20117__$5 = cljs.core.next.call(null,seq20117__$4);
return cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$variadic(G__20118,G__20119,G__20120,G__20121,G__20122,seq20117__$5);
});

cljs.core$macros.aset.cljs$lang$maxFixedArity = (5);


cljs.core$macros.aset.cljs$lang$macro = true;
cljs.core$macros._PLUS_ = (function cljs$core$macros$_PLUS_(var_args){
var args20129 = [];
var len__10353__auto___20137 = arguments.length;
var i__10354__auto___20138 = (0);
while(true){
if((i__10354__auto___20138 < len__10353__auto___20137)){
args20129.push((arguments[i__10354__auto___20138]));

var G__20139 = (i__10354__auto___20138 + (1));
i__10354__auto___20138 = G__20139;
continue;
} else {
}
break;
}

var G__20136 = args20129.length;
switch (G__20136) {
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
var argseq__10372__auto__ = (new cljs.core.IndexedSeq(args20129.slice((4)),(0),null));
return cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__10372__auto__);

}
});

cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return (0);
});

cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__10082__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__10082__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto____$1);
})(),x__10082__auto__);
})(),"(~{} + ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),(function (){var x__10082__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),more)));
});

cljs.core$macros._PLUS_.cljs$lang$applyTo = (function (seq20130){
var G__20131 = cljs.core.first.call(null,seq20130);
var seq20130__$1 = cljs.core.next.call(null,seq20130);
var G__20132 = cljs.core.first.call(null,seq20130__$1);
var seq20130__$2 = cljs.core.next.call(null,seq20130__$1);
var G__20133 = cljs.core.first.call(null,seq20130__$2);
var seq20130__$3 = cljs.core.next.call(null,seq20130__$2);
var G__20134 = cljs.core.first.call(null,seq20130__$3);
var seq20130__$4 = cljs.core.next.call(null,seq20130__$3);
return cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$variadic(G__20131,G__20132,G__20133,G__20134,seq20130__$4);
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
var args__10360__auto__ = [];
var len__10353__auto___20144 = arguments.length;
var i__10354__auto___20145 = (0);
while(true){
if((i__10354__auto___20145 < len__10353__auto___20144)){
args__10360__auto__.push((arguments[i__10354__auto___20145]));

var G__20146 = (i__10354__auto___20145 + (1));
i__10354__auto___20145 = G__20146;
continue;
} else {
}
break;
}

var argseq__10361__auto__ = ((((2) < args__10360__auto__.length))?(new cljs.core.IndexedSeq(args__10360__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_add.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10361__auto__);
});

cljs.core$macros.unchecked_add.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),xs)));
});

cljs.core$macros.unchecked_add.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_add.cljs$lang$applyTo = (function (seq20141){
var G__20142 = cljs.core.first.call(null,seq20141);
var seq20141__$1 = cljs.core.next.call(null,seq20141);
var G__20143 = cljs.core.first.call(null,seq20141__$1);
var seq20141__$2 = cljs.core.next.call(null,seq20141__$1);
return cljs.core$macros.unchecked_add.cljs$core$IFn$_invoke$arity$variadic(G__20142,G__20143,seq20141__$2);
});


cljs.core$macros.unchecked_add.cljs$lang$macro = true;
cljs.core$macros.unchecked_add_int = (function cljs$core$macros$unchecked_add_int(var_args){
var args__10360__auto__ = [];
var len__10353__auto___20150 = arguments.length;
var i__10354__auto___20151 = (0);
while(true){
if((i__10354__auto___20151 < len__10353__auto___20150)){
args__10360__auto__.push((arguments[i__10354__auto___20151]));

var G__20152 = (i__10354__auto___20151 + (1));
i__10354__auto___20151 = G__20152;
continue;
} else {
}
break;
}

var argseq__10361__auto__ = ((((2) < args__10360__auto__.length))?(new cljs.core.IndexedSeq(args__10360__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_add_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10361__auto__);
});

cljs.core$macros.unchecked_add_int.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),xs)));
});

cljs.core$macros.unchecked_add_int.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_add_int.cljs$lang$applyTo = (function (seq20147){
var G__20148 = cljs.core.first.call(null,seq20147);
var seq20147__$1 = cljs.core.next.call(null,seq20147);
var G__20149 = cljs.core.first.call(null,seq20147__$1);
var seq20147__$2 = cljs.core.next.call(null,seq20147__$1);
return cljs.core$macros.unchecked_add_int.cljs$core$IFn$_invoke$arity$variadic(G__20148,G__20149,seq20147__$2);
});


cljs.core$macros.unchecked_add_int.cljs$lang$macro = true;
cljs.core$macros.unchecked_dec = (function cljs$core$macros$unchecked_dec(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","dec","cljs.core$macros/dec",-247694061,null)),(function (){var x__10082__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
});

cljs.core$macros.unchecked_dec.cljs$lang$macro = true;
cljs.core$macros.unchecked_dec_int = (function cljs$core$macros$unchecked_dec_int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","dec","cljs.core$macros/dec",-247694061,null)),(function (){var x__10082__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
});

cljs.core$macros.unchecked_dec_int.cljs$lang$macro = true;
cljs.core$macros.unchecked_divide_int = (function cljs$core$macros$unchecked_divide_int(var_args){
var args__10360__auto__ = [];
var len__10353__auto___20156 = arguments.length;
var i__10354__auto___20157 = (0);
while(true){
if((i__10354__auto___20157 < len__10353__auto___20156)){
args__10360__auto__.push((arguments[i__10354__auto___20157]));

var G__20158 = (i__10354__auto___20157 + (1));
i__10354__auto___20157 = G__20158;
continue;
} else {
}
break;
}

var argseq__10361__auto__ = ((((2) < args__10360__auto__.length))?(new cljs.core.IndexedSeq(args__10360__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_divide_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10361__auto__);
});

cljs.core$macros.unchecked_divide_int.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),xs)));
});

cljs.core$macros.unchecked_divide_int.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_divide_int.cljs$lang$applyTo = (function (seq20153){
var G__20154 = cljs.core.first.call(null,seq20153);
var seq20153__$1 = cljs.core.next.call(null,seq20153);
var G__20155 = cljs.core.first.call(null,seq20153__$1);
var seq20153__$2 = cljs.core.next.call(null,seq20153__$1);
return cljs.core$macros.unchecked_divide_int.cljs$core$IFn$_invoke$arity$variadic(G__20154,G__20155,seq20153__$2);
});


cljs.core$macros.unchecked_divide_int.cljs$lang$macro = true;
cljs.core$macros.unchecked_inc = (function cljs$core$macros$unchecked_inc(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),(function (){var x__10082__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
});

cljs.core$macros.unchecked_inc.cljs$lang$macro = true;
cljs.core$macros.unchecked_inc_int = (function cljs$core$macros$unchecked_inc_int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),(function (){var x__10082__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
});

cljs.core$macros.unchecked_inc_int.cljs$lang$macro = true;
cljs.core$macros.unchecked_multiply = (function cljs$core$macros$unchecked_multiply(var_args){
var args__10360__auto__ = [];
var len__10353__auto___20162 = arguments.length;
var i__10354__auto___20163 = (0);
while(true){
if((i__10354__auto___20163 < len__10353__auto___20162)){
args__10360__auto__.push((arguments[i__10354__auto___20163]));

var G__20164 = (i__10354__auto___20163 + (1));
i__10354__auto___20163 = G__20164;
continue;
} else {
}
break;
}

var argseq__10361__auto__ = ((((2) < args__10360__auto__.length))?(new cljs.core.IndexedSeq(args__10360__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_multiply.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10361__auto__);
});

cljs.core$macros.unchecked_multiply.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","*","cljs.core$macros/*",946321529,null)),xs)));
});

cljs.core$macros.unchecked_multiply.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_multiply.cljs$lang$applyTo = (function (seq20159){
var G__20160 = cljs.core.first.call(null,seq20159);
var seq20159__$1 = cljs.core.next.call(null,seq20159);
var G__20161 = cljs.core.first.call(null,seq20159__$1);
var seq20159__$2 = cljs.core.next.call(null,seq20159__$1);
return cljs.core$macros.unchecked_multiply.cljs$core$IFn$_invoke$arity$variadic(G__20160,G__20161,seq20159__$2);
});


cljs.core$macros.unchecked_multiply.cljs$lang$macro = true;
cljs.core$macros.unchecked_multiply_int = (function cljs$core$macros$unchecked_multiply_int(var_args){
var args__10360__auto__ = [];
var len__10353__auto___20168 = arguments.length;
var i__10354__auto___20169 = (0);
while(true){
if((i__10354__auto___20169 < len__10353__auto___20168)){
args__10360__auto__.push((arguments[i__10354__auto___20169]));

var G__20170 = (i__10354__auto___20169 + (1));
i__10354__auto___20169 = G__20170;
continue;
} else {
}
break;
}

var argseq__10361__auto__ = ((((2) < args__10360__auto__.length))?(new cljs.core.IndexedSeq(args__10360__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_multiply_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10361__auto__);
});

cljs.core$macros.unchecked_multiply_int.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","*","cljs.core$macros/*",946321529,null)),xs)));
});

cljs.core$macros.unchecked_multiply_int.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_multiply_int.cljs$lang$applyTo = (function (seq20165){
var G__20166 = cljs.core.first.call(null,seq20165);
var seq20165__$1 = cljs.core.next.call(null,seq20165);
var G__20167 = cljs.core.first.call(null,seq20165__$1);
var seq20165__$2 = cljs.core.next.call(null,seq20165__$1);
return cljs.core$macros.unchecked_multiply_int.cljs$core$IFn$_invoke$arity$variadic(G__20166,G__20167,seq20165__$2);
});


cljs.core$macros.unchecked_multiply_int.cljs$lang$macro = true;
cljs.core$macros.unchecked_negate = (function cljs$core$macros$unchecked_negate(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__10082__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
});

cljs.core$macros.unchecked_negate.cljs$lang$macro = true;
cljs.core$macros.unchecked_negate_int = (function cljs$core$macros$unchecked_negate_int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__10082__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
});

cljs.core$macros.unchecked_negate_int.cljs$lang$macro = true;
cljs.core$macros.unchecked_remainder_int = (function cljs$core$macros$unchecked_remainder_int(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","mod","cljs.core$macros/mod",2132457375,null)),(function (){var x__10082__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
});

cljs.core$macros.unchecked_remainder_int.cljs$lang$macro = true;
cljs.core$macros.unchecked_subtract = (function cljs$core$macros$unchecked_subtract(var_args){
var args__10360__auto__ = [];
var len__10353__auto___20174 = arguments.length;
var i__10354__auto___20175 = (0);
while(true){
if((i__10354__auto___20175 < len__10353__auto___20174)){
args__10360__auto__.push((arguments[i__10354__auto___20175]));

var G__20176 = (i__10354__auto___20175 + (1));
i__10354__auto___20175 = G__20176;
continue;
} else {
}
break;
}

var argseq__10361__auto__ = ((((2) < args__10360__auto__.length))?(new cljs.core.IndexedSeq(args__10360__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_subtract.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10361__auto__);
});

cljs.core$macros.unchecked_subtract.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),xs)));
});

cljs.core$macros.unchecked_subtract.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_subtract.cljs$lang$applyTo = (function (seq20171){
var G__20172 = cljs.core.first.call(null,seq20171);
var seq20171__$1 = cljs.core.next.call(null,seq20171);
var G__20173 = cljs.core.first.call(null,seq20171__$1);
var seq20171__$2 = cljs.core.next.call(null,seq20171__$1);
return cljs.core$macros.unchecked_subtract.cljs$core$IFn$_invoke$arity$variadic(G__20172,G__20173,seq20171__$2);
});


cljs.core$macros.unchecked_subtract.cljs$lang$macro = true;
cljs.core$macros.unchecked_subtract_int = (function cljs$core$macros$unchecked_subtract_int(var_args){
var args__10360__auto__ = [];
var len__10353__auto___20180 = arguments.length;
var i__10354__auto___20181 = (0);
while(true){
if((i__10354__auto___20181 < len__10353__auto___20180)){
args__10360__auto__.push((arguments[i__10354__auto___20181]));

var G__20182 = (i__10354__auto___20181 + (1));
i__10354__auto___20181 = G__20182;
continue;
} else {
}
break;
}

var argseq__10361__auto__ = ((((2) < args__10360__auto__.length))?(new cljs.core.IndexedSeq(args__10360__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_subtract_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10361__auto__);
});

cljs.core$macros.unchecked_subtract_int.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),xs)));
});

cljs.core$macros.unchecked_subtract_int.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_subtract_int.cljs$lang$applyTo = (function (seq20177){
var G__20178 = cljs.core.first.call(null,seq20177);
var seq20177__$1 = cljs.core.next.call(null,seq20177);
var G__20179 = cljs.core.first.call(null,seq20177__$1);
var seq20177__$2 = cljs.core.next.call(null,seq20177__$1);
return cljs.core$macros.unchecked_subtract_int.cljs$core$IFn$_invoke$arity$variadic(G__20178,G__20179,seq20177__$2);
});


cljs.core$macros.unchecked_subtract_int.cljs$lang$macro = true;
cljs.core$macros._ = (function cljs$core$macros$_(var_args){
var args20183 = [];
var len__10353__auto___20191 = arguments.length;
var i__10354__auto___20192 = (0);
while(true){
if((i__10354__auto___20192 < len__10353__auto___20191)){
args20183.push((arguments[i__10354__auto___20192]));

var G__20193 = (i__10354__auto___20192 + (1));
i__10354__auto___20192 = G__20193;
continue;
} else {
}
break;
}

var G__20190 = args20183.length;
switch (G__20190) {
case 3:
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__10372__auto__ = (new cljs.core.IndexedSeq(args20183.slice((4)),(0),null));
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__10372__auto__);

}
});

cljs.core$macros._.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__10082__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),"(- ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros._.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__10082__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__10082__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto____$1);
})(),x__10082__auto__);
})(),"(~{} - ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros._.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__10082__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),more)));
});

cljs.core$macros._.cljs$lang$applyTo = (function (seq20184){
var G__20185 = cljs.core.first.call(null,seq20184);
var seq20184__$1 = cljs.core.next.call(null,seq20184);
var G__20186 = cljs.core.first.call(null,seq20184__$1);
var seq20184__$2 = cljs.core.next.call(null,seq20184__$1);
var G__20187 = cljs.core.first.call(null,seq20184__$2);
var seq20184__$3 = cljs.core.next.call(null,seq20184__$2);
var G__20188 = cljs.core.first.call(null,seq20184__$3);
var seq20184__$4 = cljs.core.next.call(null,seq20184__$3);
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$variadic(G__20185,G__20186,G__20187,G__20188,seq20184__$4);
});

cljs.core$macros._.cljs$lang$maxFixedArity = (4);


cljs.core$macros._.cljs$lang$macro = true;
cljs.core$macros._STAR_ = (function cljs$core$macros$_STAR_(var_args){
var args20195 = [];
var len__10353__auto___20203 = arguments.length;
var i__10354__auto___20204 = (0);
while(true){
if((i__10354__auto___20204 < len__10353__auto___20203)){
args20195.push((arguments[i__10354__auto___20204]));

var G__20205 = (i__10354__auto___20204 + (1));
i__10354__auto___20204 = G__20205;
continue;
} else {
}
break;
}

var G__20202 = args20195.length;
switch (G__20202) {
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
var argseq__10372__auto__ = (new cljs.core.IndexedSeq(args20195.slice((4)),(0),null));
return cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__10372__auto__);

}
});

cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return (1);
});

cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__10082__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__10082__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto____$1);
})(),x__10082__auto__);
})(),"(~{} * ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","*","cljs.core$macros/*",946321529,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","*","cljs.core$macros/*",946321529,null)),(function (){var x__10082__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),more)));
});

cljs.core$macros._STAR_.cljs$lang$applyTo = (function (seq20196){
var G__20197 = cljs.core.first.call(null,seq20196);
var seq20196__$1 = cljs.core.next.call(null,seq20196);
var G__20198 = cljs.core.first.call(null,seq20196__$1);
var seq20196__$2 = cljs.core.next.call(null,seq20196__$1);
var G__20199 = cljs.core.first.call(null,seq20196__$2);
var seq20196__$3 = cljs.core.next.call(null,seq20196__$2);
var G__20200 = cljs.core.first.call(null,seq20196__$3);
var seq20196__$4 = cljs.core.next.call(null,seq20196__$3);
return cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$variadic(G__20197,G__20198,G__20199,G__20200,seq20196__$4);
});

cljs.core$macros._STAR_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._STAR_.cljs$lang$macro = true;
cljs.core$macros._SLASH_ = (function cljs$core$macros$_SLASH_(var_args){
var args20207 = [];
var len__10353__auto___20215 = arguments.length;
var i__10354__auto___20216 = (0);
while(true){
if((i__10354__auto___20216 < len__10353__auto___20215)){
args20207.push((arguments[i__10354__auto___20216]));

var G__20217 = (i__10354__auto___20216 + (1));
i__10354__auto___20216 = G__20217;
continue;
} else {
}
break;
}

var G__20214 = args20207.length;
switch (G__20214) {
case 3:
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__10372__auto__ = (new cljs.core.IndexedSeq(args20207.slice((4)),(0),null));
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__10372__auto__);

}
});

cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)),(function (){var x__10082__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
});

cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__10082__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__10082__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto____$1);
})(),x__10082__auto__);
})(),"(~{} / ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),(function (){var x__10082__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),more)));
});

cljs.core$macros._SLASH_.cljs$lang$applyTo = (function (seq20208){
var G__20209 = cljs.core.first.call(null,seq20208);
var seq20208__$1 = cljs.core.next.call(null,seq20208);
var G__20210 = cljs.core.first.call(null,seq20208__$1);
var seq20208__$2 = cljs.core.next.call(null,seq20208__$1);
var G__20211 = cljs.core.first.call(null,seq20208__$2);
var seq20208__$3 = cljs.core.next.call(null,seq20208__$2);
var G__20212 = cljs.core.first.call(null,seq20208__$3);
var seq20208__$4 = cljs.core.next.call(null,seq20208__$3);
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$variadic(G__20209,G__20210,G__20211,G__20212,seq20208__$4);
});

cljs.core$macros._SLASH_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._SLASH_.cljs$lang$macro = true;
cljs.core$macros.divide = (function cljs$core$macros$divide(var_args){
var args20219 = [];
var len__10353__auto___20227 = arguments.length;
var i__10354__auto___20228 = (0);
while(true){
if((i__10354__auto___20228 < len__10353__auto___20227)){
args20219.push((arguments[i__10354__auto___20228]));

var G__20229 = (i__10354__auto___20228 + (1));
i__10354__auto___20228 = G__20229;
continue;
} else {
}
break;
}

var G__20226 = args20219.length;
switch (G__20226) {
case 3:
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__10372__auto__ = (new cljs.core.IndexedSeq(args20219.slice((4)),(0),null));
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__10372__auto__);

}
});

cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)),(function (){var x__10082__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
});

cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__10082__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__10082__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto____$1);
})(),x__10082__auto__);
})(),"(~{} / ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),(function (){var x__10082__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),more)));
});

cljs.core$macros.divide.cljs$lang$applyTo = (function (seq20220){
var G__20221 = cljs.core.first.call(null,seq20220);
var seq20220__$1 = cljs.core.next.call(null,seq20220);
var G__20222 = cljs.core.first.call(null,seq20220__$1);
var seq20220__$2 = cljs.core.next.call(null,seq20220__$1);
var G__20223 = cljs.core.first.call(null,seq20220__$2);
var seq20220__$3 = cljs.core.next.call(null,seq20220__$2);
var G__20224 = cljs.core.first.call(null,seq20220__$3);
var seq20220__$4 = cljs.core.next.call(null,seq20220__$3);
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$variadic(G__20221,G__20222,G__20223,G__20224,seq20220__$4);
});

cljs.core$macros.divide.cljs$lang$maxFixedArity = (4);


cljs.core$macros.divide.cljs$lang$macro = true;
cljs.core$macros._LT_ = (function cljs$core$macros$_LT_(var_args){
var args20231 = [];
var len__10353__auto___20239 = arguments.length;
var i__10354__auto___20240 = (0);
while(true){
if((i__10354__auto___20240 < len__10353__auto___20239)){
args20231.push((arguments[i__10354__auto___20240]));

var G__20241 = (i__10354__auto___20240 + (1));
i__10354__auto___20240 = G__20241;
continue;
} else {
}
break;
}

var G__20238 = args20231.length;
switch (G__20238) {
case 3:
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__10372__auto__ = (new cljs.core.IndexedSeq(args20231.slice((4)),(0),null));
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__10372__auto__);

}
});

cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__10082__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__10082__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto____$1);
})(),x__10082__auto__);
})(),"(~{} < ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__10082__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__10082__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),more)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
});

cljs.core$macros._LT_.cljs$lang$applyTo = (function (seq20232){
var G__20233 = cljs.core.first.call(null,seq20232);
var seq20232__$1 = cljs.core.next.call(null,seq20232);
var G__20234 = cljs.core.first.call(null,seq20232__$1);
var seq20232__$2 = cljs.core.next.call(null,seq20232__$1);
var G__20235 = cljs.core.first.call(null,seq20232__$2);
var seq20232__$3 = cljs.core.next.call(null,seq20232__$2);
var G__20236 = cljs.core.first.call(null,seq20232__$3);
var seq20232__$4 = cljs.core.next.call(null,seq20232__$3);
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$variadic(G__20233,G__20234,G__20235,G__20236,seq20232__$4);
});

cljs.core$macros._LT_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._LT_.cljs$lang$macro = true;
cljs.core$macros._LT__EQ_ = (function cljs$core$macros$_LT__EQ_(var_args){
var args20243 = [];
var len__10353__auto___20251 = arguments.length;
var i__10354__auto___20252 = (0);
while(true){
if((i__10354__auto___20252 < len__10353__auto___20251)){
args20243.push((arguments[i__10354__auto___20252]));

var G__20253 = (i__10354__auto___20252 + (1));
i__10354__auto___20252 = G__20253;
continue;
} else {
}
break;
}

var G__20250 = args20243.length;
switch (G__20250) {
case 3:
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__10372__auto__ = (new cljs.core.IndexedSeq(args20243.slice((4)),(0),null));
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__10372__auto__);

}
});

cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__10082__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__10082__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto____$1);
})(),x__10082__auto__);
})(),"(~{} <= ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<=","cljs.core$macros/<=",1865244377,null)),(function (){var x__10082__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<=","cljs.core$macros/<=",1865244377,null)),(function (){var x__10082__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),more)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
});

cljs.core$macros._LT__EQ_.cljs$lang$applyTo = (function (seq20244){
var G__20245 = cljs.core.first.call(null,seq20244);
var seq20244__$1 = cljs.core.next.call(null,seq20244);
var G__20246 = cljs.core.first.call(null,seq20244__$1);
var seq20244__$2 = cljs.core.next.call(null,seq20244__$1);
var G__20247 = cljs.core.first.call(null,seq20244__$2);
var seq20244__$3 = cljs.core.next.call(null,seq20244__$2);
var G__20248 = cljs.core.first.call(null,seq20244__$3);
var seq20244__$4 = cljs.core.next.call(null,seq20244__$3);
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__20245,G__20246,G__20247,G__20248,seq20244__$4);
});

cljs.core$macros._LT__EQ_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._LT__EQ_.cljs$lang$macro = true;
cljs.core$macros._GT_ = (function cljs$core$macros$_GT_(var_args){
var args20255 = [];
var len__10353__auto___20263 = arguments.length;
var i__10354__auto___20264 = (0);
while(true){
if((i__10354__auto___20264 < len__10353__auto___20263)){
args20255.push((arguments[i__10354__auto___20264]));

var G__20265 = (i__10354__auto___20264 + (1));
i__10354__auto___20264 = G__20265;
continue;
} else {
}
break;
}

var G__20262 = args20255.length;
switch (G__20262) {
case 3:
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__10372__auto__ = (new cljs.core.IndexedSeq(args20255.slice((4)),(0),null));
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__10372__auto__);

}
});

cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__10082__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__10082__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto____$1);
})(),x__10082__auto__);
})(),"(~{} > ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros",">","cljs.core$macros/>",1703297853,null)),(function (){var x__10082__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros",">","cljs.core$macros/>",1703297853,null)),(function (){var x__10082__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),more)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
});

cljs.core$macros._GT_.cljs$lang$applyTo = (function (seq20256){
var G__20257 = cljs.core.first.call(null,seq20256);
var seq20256__$1 = cljs.core.next.call(null,seq20256);
var G__20258 = cljs.core.first.call(null,seq20256__$1);
var seq20256__$2 = cljs.core.next.call(null,seq20256__$1);
var G__20259 = cljs.core.first.call(null,seq20256__$2);
var seq20256__$3 = cljs.core.next.call(null,seq20256__$2);
var G__20260 = cljs.core.first.call(null,seq20256__$3);
var seq20256__$4 = cljs.core.next.call(null,seq20256__$3);
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$variadic(G__20257,G__20258,G__20259,G__20260,seq20256__$4);
});

cljs.core$macros._GT_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._GT_.cljs$lang$macro = true;
cljs.core$macros._GT__EQ_ = (function cljs$core$macros$_GT__EQ_(var_args){
var args20267 = [];
var len__10353__auto___20275 = arguments.length;
var i__10354__auto___20276 = (0);
while(true){
if((i__10354__auto___20276 < len__10353__auto___20275)){
args20267.push((arguments[i__10354__auto___20276]));

var G__20277 = (i__10354__auto___20276 + (1));
i__10354__auto___20276 = G__20277;
continue;
} else {
}
break;
}

var G__20274 = args20267.length;
switch (G__20274) {
case 3:
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__10372__auto__ = (new cljs.core.IndexedSeq(args20267.slice((4)),(0),null));
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__10372__auto__);

}
});

cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__10082__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__10082__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto____$1);
})(),x__10082__auto__);
})(),"(~{} >= ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros",">=","cljs.core$macros/>=",527849062,null)),(function (){var x__10082__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros",">=","cljs.core$macros/>=",527849062,null)),(function (){var x__10082__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),more)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
});

cljs.core$macros._GT__EQ_.cljs$lang$applyTo = (function (seq20268){
var G__20269 = cljs.core.first.call(null,seq20268);
var seq20268__$1 = cljs.core.next.call(null,seq20268);
var G__20270 = cljs.core.first.call(null,seq20268__$1);
var seq20268__$2 = cljs.core.next.call(null,seq20268__$1);
var G__20271 = cljs.core.first.call(null,seq20268__$2);
var seq20268__$3 = cljs.core.next.call(null,seq20268__$2);
var G__20272 = cljs.core.first.call(null,seq20268__$3);
var seq20268__$4 = cljs.core.next.call(null,seq20268__$3);
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__20269,G__20270,G__20271,G__20272,seq20268__$4);
});

cljs.core$macros._GT__EQ_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._GT__EQ_.cljs$lang$macro = true;
cljs.core$macros._EQ__EQ_ = (function cljs$core$macros$_EQ__EQ_(var_args){
var args20279 = [];
var len__10353__auto___20287 = arguments.length;
var i__10354__auto___20288 = (0);
while(true){
if((i__10354__auto___20288 < len__10353__auto___20287)){
args20279.push((arguments[i__10354__auto___20288]));

var G__20289 = (i__10354__auto___20288 + (1));
i__10354__auto___20288 = G__20289;
continue;
} else {
}
break;
}

var G__20286 = args20279.length;
switch (G__20286) {
case 3:
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__10372__auto__ = (new cljs.core.IndexedSeq(args20279.slice((4)),(0),null));
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__10372__auto__);

}
});

cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__10082__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__10082__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto____$1);
})(),x__10082__auto__);
})(),"(~{} === ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","==","cljs.core$macros/==",-818551413,null)),(function (){var x__10082__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","==","cljs.core$macros/==",-818551413,null)),(function (){var x__10082__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),more)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
});

cljs.core$macros._EQ__EQ_.cljs$lang$applyTo = (function (seq20280){
var G__20281 = cljs.core.first.call(null,seq20280);
var seq20280__$1 = cljs.core.next.call(null,seq20280);
var G__20282 = cljs.core.first.call(null,seq20280__$1);
var seq20280__$2 = cljs.core.next.call(null,seq20280__$1);
var G__20283 = cljs.core.first.call(null,seq20280__$2);
var seq20280__$3 = cljs.core.next.call(null,seq20280__$2);
var G__20284 = cljs.core.first.call(null,seq20280__$3);
var seq20280__$4 = cljs.core.next.call(null,seq20280__$3);
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__20281,G__20282,G__20283,G__20284,seq20280__$4);
});

cljs.core$macros._EQ__EQ_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._EQ__EQ_.cljs$lang$macro = true;
cljs.core$macros.dec = (function cljs$core$macros$dec(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__10082__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)))));
});

cljs.core$macros.dec.cljs$lang$macro = true;
cljs.core$macros.inc = (function cljs$core$macros$inc(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),(function (){var x__10082__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)))));
});

cljs.core$macros.inc.cljs$lang$macro = true;
cljs.core$macros.zero_QMARK_ = (function cljs$core$macros$zero_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","==","cljs.core$macros/==",-818551413,null)),(function (){var x__10082__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)))));
});

cljs.core$macros.zero_QMARK_.cljs$lang$macro = true;
cljs.core$macros.pos_QMARK_ = (function cljs$core$macros$pos_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros",">","cljs.core$macros/>",1703297853,null)),(function (){var x__10082__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)))));
});

cljs.core$macros.pos_QMARK_.cljs$lang$macro = true;
cljs.core$macros.neg_QMARK_ = (function cljs$core$macros$neg_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__10082__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)))));
});

cljs.core$macros.neg_QMARK_.cljs$lang$macro = true;
cljs.core$macros.max = (function cljs$core$macros$max(var_args){
var args20293 = [];
var len__10353__auto___20301 = arguments.length;
var i__10354__auto___20302 = (0);
while(true){
if((i__10354__auto___20302 < len__10353__auto___20301)){
args20293.push((arguments[i__10354__auto___20302]));

var G__20303 = (i__10354__auto___20302 + (1));
i__10354__auto___20302 = G__20303;
continue;
} else {
}
break;
}

var G__20300 = args20293.length;
switch (G__20300) {
case 3:
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__10372__auto__ = (new cljs.core.IndexedSeq(args20293.slice((4)),(0),null));
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__10372__auto__);

}
});

cljs.core$macros.max.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.max.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__10082__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__20291__auto__","x__20291__auto__",-871717887,null)),(function (){var x__10082__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__20292__auto__","y__20292__auto__",-1988615728,null)),(function (){var x__10082__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"((~{} > ~{}) ? ~{} : ~{})"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__20291__auto__","x__20291__auto__",-871717887,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__20292__auto__","y__20292__auto__",-1988615728,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__20291__auto__","x__20291__auto__",-871717887,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__20292__auto__","y__20292__auto__",-1988615728,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
});

cljs.core$macros.max.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","max","cljs.core$macros/max",1176150699,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","max","cljs.core$macros/max",1176150699,null)),(function (){var x__10082__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),more)));
});

cljs.core$macros.max.cljs$lang$applyTo = (function (seq20294){
var G__20295 = cljs.core.first.call(null,seq20294);
var seq20294__$1 = cljs.core.next.call(null,seq20294);
var G__20296 = cljs.core.first.call(null,seq20294__$1);
var seq20294__$2 = cljs.core.next.call(null,seq20294__$1);
var G__20297 = cljs.core.first.call(null,seq20294__$2);
var seq20294__$3 = cljs.core.next.call(null,seq20294__$2);
var G__20298 = cljs.core.first.call(null,seq20294__$3);
var seq20294__$4 = cljs.core.next.call(null,seq20294__$3);
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$variadic(G__20295,G__20296,G__20297,G__20298,seq20294__$4);
});

cljs.core$macros.max.cljs$lang$maxFixedArity = (4);


cljs.core$macros.max.cljs$lang$macro = true;
cljs.core$macros.min = (function cljs$core$macros$min(var_args){
var args20307 = [];
var len__10353__auto___20315 = arguments.length;
var i__10354__auto___20316 = (0);
while(true){
if((i__10354__auto___20316 < len__10353__auto___20315)){
args20307.push((arguments[i__10354__auto___20316]));

var G__20317 = (i__10354__auto___20316 + (1));
i__10354__auto___20316 = G__20317;
continue;
} else {
}
break;
}

var G__20314 = args20307.length;
switch (G__20314) {
case 3:
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__10372__auto__ = (new cljs.core.IndexedSeq(args20307.slice((4)),(0),null));
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__10372__auto__);

}
});

cljs.core$macros.min.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.min.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__10082__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__20305__auto__","x__20305__auto__",1945525132,null)),(function (){var x__10082__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__20306__auto__","y__20306__auto__",-1567539567,null)),(function (){var x__10082__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"((~{} < ~{}) ? ~{} : ~{})"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__20305__auto__","x__20305__auto__",1945525132,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__20306__auto__","y__20306__auto__",-1567539567,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__20305__auto__","x__20305__auto__",1945525132,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__20306__auto__","y__20306__auto__",-1567539567,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
});

cljs.core$macros.min.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","min","cljs.core$macros/min",1499775161,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","min","cljs.core$macros/min",1499775161,null)),(function (){var x__10082__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),more)));
});

cljs.core$macros.min.cljs$lang$applyTo = (function (seq20308){
var G__20309 = cljs.core.first.call(null,seq20308);
var seq20308__$1 = cljs.core.next.call(null,seq20308);
var G__20310 = cljs.core.first.call(null,seq20308__$1);
var seq20308__$2 = cljs.core.next.call(null,seq20308__$1);
var G__20311 = cljs.core.first.call(null,seq20308__$2);
var seq20308__$3 = cljs.core.next.call(null,seq20308__$2);
var G__20312 = cljs.core.first.call(null,seq20308__$3);
var seq20308__$4 = cljs.core.next.call(null,seq20308__$3);
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$variadic(G__20309,G__20310,G__20311,G__20312,seq20308__$4);
});

cljs.core$macros.min.cljs$lang$maxFixedArity = (4);


cljs.core$macros.min.cljs$lang$macro = true;
cljs.core$macros.js_mod = (function cljs$core$macros$js_mod(_AMPERSAND_form,_AMPERSAND_env,num,div){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__10082__auto__ = num;
return cljs.core._conj.call(null,(function (){var x__10082__auto____$1 = div;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto____$1);
})(),x__10082__auto__);
})(),"(~{} % ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.js_mod.cljs$lang$macro = true;
cljs.core$macros.bit_not = (function cljs$core$macros$bit_not(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__10082__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),"(~ ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_not.cljs$lang$macro = true;
cljs.core$macros.bit_and = (function cljs$core$macros$bit_and(var_args){
var args20319 = [];
var len__10353__auto___20327 = arguments.length;
var i__10354__auto___20328 = (0);
while(true){
if((i__10354__auto___20328 < len__10353__auto___20327)){
args20319.push((arguments[i__10354__auto___20328]));

var G__20329 = (i__10354__auto___20328 + (1));
i__10354__auto___20328 = G__20329;
continue;
} else {
}
break;
}

var G__20326 = args20319.length;
switch (G__20326) {
case 4:
return cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__10372__auto__ = (new cljs.core.IndexedSeq(args20319.slice((4)),(0),null));
return cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__10372__auto__);

}
});

cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__10082__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__10082__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto____$1);
})(),x__10082__auto__);
})(),"(~{} & ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-and","cljs.core$macros/bit-and",-1069060797,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-and","cljs.core$macros/bit-and",-1069060797,null)),(function (){var x__10082__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),more)));
});

cljs.core$macros.bit_and.cljs$lang$applyTo = (function (seq20320){
var G__20321 = cljs.core.first.call(null,seq20320);
var seq20320__$1 = cljs.core.next.call(null,seq20320);
var G__20322 = cljs.core.first.call(null,seq20320__$1);
var seq20320__$2 = cljs.core.next.call(null,seq20320__$1);
var G__20323 = cljs.core.first.call(null,seq20320__$2);
var seq20320__$3 = cljs.core.next.call(null,seq20320__$2);
var G__20324 = cljs.core.first.call(null,seq20320__$3);
var seq20320__$4 = cljs.core.next.call(null,seq20320__$3);
return cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$variadic(G__20321,G__20322,G__20323,G__20324,seq20320__$4);
});

cljs.core$macros.bit_and.cljs$lang$maxFixedArity = (4);


cljs.core$macros.bit_and.cljs$lang$macro = true;
cljs.core$macros.unsafe_bit_and = (function cljs$core$macros$unsafe_bit_and(var_args){
var args20331 = [];
var len__10353__auto___20339 = arguments.length;
var i__10354__auto___20340 = (0);
while(true){
if((i__10354__auto___20340 < len__10353__auto___20339)){
args20331.push((arguments[i__10354__auto___20340]));

var G__20341 = (i__10354__auto___20340 + (1));
i__10354__auto___20340 = G__20341;
continue;
} else {
}
break;
}

var G__20338 = args20331.length;
switch (G__20338) {
case 4:
return cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__10372__auto__ = (new cljs.core.IndexedSeq(args20331.slice((4)),(0),null));
return cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__10372__auto__);

}
});

cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__10082__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__10082__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto____$1);
})(),x__10082__auto__);
})(),"(~{} & ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__10082__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),more)));
});

cljs.core$macros.unsafe_bit_and.cljs$lang$applyTo = (function (seq20332){
var G__20333 = cljs.core.first.call(null,seq20332);
var seq20332__$1 = cljs.core.next.call(null,seq20332);
var G__20334 = cljs.core.first.call(null,seq20332__$1);
var seq20332__$2 = cljs.core.next.call(null,seq20332__$1);
var G__20335 = cljs.core.first.call(null,seq20332__$2);
var seq20332__$3 = cljs.core.next.call(null,seq20332__$2);
var G__20336 = cljs.core.first.call(null,seq20332__$3);
var seq20332__$4 = cljs.core.next.call(null,seq20332__$3);
return cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$variadic(G__20333,G__20334,G__20335,G__20336,seq20332__$4);
});

cljs.core$macros.unsafe_bit_and.cljs$lang$maxFixedArity = (4);


cljs.core$macros.unsafe_bit_and.cljs$lang$macro = true;
cljs.core$macros.bit_or = (function cljs$core$macros$bit_or(var_args){
var args20343 = [];
var len__10353__auto___20351 = arguments.length;
var i__10354__auto___20352 = (0);
while(true){
if((i__10354__auto___20352 < len__10353__auto___20351)){
args20343.push((arguments[i__10354__auto___20352]));

var G__20353 = (i__10354__auto___20352 + (1));
i__10354__auto___20352 = G__20353;
continue;
} else {
}
break;
}

var G__20350 = args20343.length;
switch (G__20350) {
case 4:
return cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__10372__auto__ = (new cljs.core.IndexedSeq(args20343.slice((4)),(0),null));
return cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__10372__auto__);

}
});

cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__10082__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__10082__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto____$1);
})(),x__10082__auto__);
})(),"(~{} | ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-or","cljs.core$macros/bit-or",1463236165,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-or","cljs.core$macros/bit-or",1463236165,null)),(function (){var x__10082__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),more)));
});

cljs.core$macros.bit_or.cljs$lang$applyTo = (function (seq20344){
var G__20345 = cljs.core.first.call(null,seq20344);
var seq20344__$1 = cljs.core.next.call(null,seq20344);
var G__20346 = cljs.core.first.call(null,seq20344__$1);
var seq20344__$2 = cljs.core.next.call(null,seq20344__$1);
var G__20347 = cljs.core.first.call(null,seq20344__$2);
var seq20344__$3 = cljs.core.next.call(null,seq20344__$2);
var G__20348 = cljs.core.first.call(null,seq20344__$3);
var seq20344__$4 = cljs.core.next.call(null,seq20344__$3);
return cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$variadic(G__20345,G__20346,G__20347,G__20348,seq20344__$4);
});

cljs.core$macros.bit_or.cljs$lang$maxFixedArity = (4);


cljs.core$macros.bit_or.cljs$lang$macro = true;
cljs.core$macros.int$ = (function cljs$core$macros$int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-or","cljs.core$macros/bit-or",1463236165,null)),(function (){var x__10082__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)))));
});

cljs.core$macros.int$.cljs$lang$macro = true;
cljs.core$macros.bit_xor = (function cljs$core$macros$bit_xor(var_args){
var args20355 = [];
var len__10353__auto___20363 = arguments.length;
var i__10354__auto___20364 = (0);
while(true){
if((i__10354__auto___20364 < len__10353__auto___20363)){
args20355.push((arguments[i__10354__auto___20364]));

var G__20365 = (i__10354__auto___20364 + (1));
i__10354__auto___20364 = G__20365;
continue;
} else {
}
break;
}

var G__20362 = args20355.length;
switch (G__20362) {
case 4:
return cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__10372__auto__ = (new cljs.core.IndexedSeq(args20355.slice((4)),(0),null));
return cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__10372__auto__);

}
});

cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__10082__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__10082__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto____$1);
})(),x__10082__auto__);
})(),"(~{} ^ ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-xor","cljs.core$macros/bit-xor",1284619191,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-xor","cljs.core$macros/bit-xor",1284619191,null)),(function (){var x__10082__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),more)));
});

cljs.core$macros.bit_xor.cljs$lang$applyTo = (function (seq20356){
var G__20357 = cljs.core.first.call(null,seq20356);
var seq20356__$1 = cljs.core.next.call(null,seq20356);
var G__20358 = cljs.core.first.call(null,seq20356__$1);
var seq20356__$2 = cljs.core.next.call(null,seq20356__$1);
var G__20359 = cljs.core.first.call(null,seq20356__$2);
var seq20356__$3 = cljs.core.next.call(null,seq20356__$2);
var G__20360 = cljs.core.first.call(null,seq20356__$3);
var seq20356__$4 = cljs.core.next.call(null,seq20356__$3);
return cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$variadic(G__20357,G__20358,G__20359,G__20360,seq20356__$4);
});

cljs.core$macros.bit_xor.cljs$lang$maxFixedArity = (4);


cljs.core$macros.bit_xor.cljs$lang$macro = true;
cljs.core$macros.bit_and_not = (function cljs$core$macros$bit_and_not(var_args){
var args20367 = [];
var len__10353__auto___20375 = arguments.length;
var i__10354__auto___20376 = (0);
while(true){
if((i__10354__auto___20376 < len__10353__auto___20375)){
args20367.push((arguments[i__10354__auto___20376]));

var G__20377 = (i__10354__auto___20376 + (1));
i__10354__auto___20376 = G__20377;
continue;
} else {
}
break;
}

var G__20374 = args20367.length;
switch (G__20374) {
case 4:
return cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__10372__auto__ = (new cljs.core.IndexedSeq(args20367.slice((4)),(0),null));
return cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__10372__auto__);

}
});

cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__10082__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__10082__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto____$1);
})(),x__10082__auto__);
})(),"(~{} & ~~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-and-not","cljs.core$macros/bit-and-not",-537076037,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-and-not","cljs.core$macros/bit-and-not",-537076037,null)),(function (){var x__10082__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),more)));
});

cljs.core$macros.bit_and_not.cljs$lang$applyTo = (function (seq20368){
var G__20369 = cljs.core.first.call(null,seq20368);
var seq20368__$1 = cljs.core.next.call(null,seq20368);
var G__20370 = cljs.core.first.call(null,seq20368__$1);
var seq20368__$2 = cljs.core.next.call(null,seq20368__$1);
var G__20371 = cljs.core.first.call(null,seq20368__$2);
var seq20368__$3 = cljs.core.next.call(null,seq20368__$2);
var G__20372 = cljs.core.first.call(null,seq20368__$3);
var seq20368__$4 = cljs.core.next.call(null,seq20368__$3);
return cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$variadic(G__20369,G__20370,G__20371,G__20372,seq20368__$4);
});

cljs.core$macros.bit_and_not.cljs$lang$maxFixedArity = (4);


cljs.core$macros.bit_and_not.cljs$lang$macro = true;
cljs.core$macros.bit_clear = (function cljs$core$macros$bit_clear(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__10082__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__10082__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto____$1);
})(),x__10082__auto__);
})(),"(~{} & ~(1 << ~{}))"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_clear.cljs$lang$macro = true;
cljs.core$macros.bit_flip = (function cljs$core$macros$bit_flip(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__10082__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__10082__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto____$1);
})(),x__10082__auto__);
})(),"(~{} ^ (1 << ~{}))"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_flip.cljs$lang$macro = true;
cljs.core$macros.bit_test = (function cljs$core$macros$bit_test(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__10082__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__10082__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto____$1);
})(),x__10082__auto__);
})(),"((~{} & (1 << ~{})) != 0)"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.bit_test.cljs$lang$macro = true;
cljs.core$macros.bit_shift_left = (function cljs$core$macros$bit_shift_left(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__10082__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__10082__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto____$1);
})(),x__10082__auto__);
})(),"(~{} << ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_shift_left.cljs$lang$macro = true;
cljs.core$macros.bit_shift_right = (function cljs$core$macros$bit_shift_right(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__10082__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__10082__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto____$1);
})(),x__10082__auto__);
})(),"(~{} >> ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_shift_right.cljs$lang$macro = true;
cljs.core$macros.bit_shift_right_zero_fill = (function cljs$core$macros$bit_shift_right_zero_fill(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__10082__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__10082__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto____$1);
})(),x__10082__auto__);
})(),"(~{} >>> ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_shift_right_zero_fill.cljs$lang$macro = true;
cljs.core$macros.unsigned_bit_shift_right = (function cljs$core$macros$unsigned_bit_shift_right(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__10082__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__10082__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto____$1);
})(),x__10082__auto__);
})(),"(~{} >>> ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.unsigned_bit_shift_right.cljs$lang$macro = true;
cljs.core$macros.bit_set = (function cljs$core$macros$bit_set(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__10082__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__10082__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto____$1);
})(),x__10082__auto__);
})(),"(~{} | (1 << ~{}))"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_set.cljs$lang$macro = true;
cljs.core$macros.mask = (function cljs$core$macros$mask(_AMPERSAND_form,_AMPERSAND_env,hash,shift){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__10082__auto__ = hash;
return cljs.core._conj.call(null,(function (){var x__10082__auto____$1 = shift;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto____$1);
})(),x__10082__auto__);
})(),"((~{} >>> ~{}) & 0x01f)"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.mask.cljs$lang$macro = true;
cljs.core$macros.bitpos = (function cljs$core$macros$bitpos(_AMPERSAND_form,_AMPERSAND_env,hash,shift){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","mask","cljs.core$macros/mask",1575319768,null)),(function (){var x__10082__auto__ = hash;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = shift;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),"(1 << ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bitpos.cljs$lang$macro = true;
cljs.core$macros.caching_hash = (function cljs$core$macros$caching_hash(_AMPERSAND_form,_AMPERSAND_env,coll,hash_fn,hash_key){
if((hash_key instanceof cljs.core.Symbol)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("hash-key is substituted twice"),cljs.core.str("\n"),cljs.core.str("(clojure.core/symbol? hash-key)")].join('')));
}

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__10082__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__20379__auto__","h__20379__auto__",-637116961,null)),(function (){var x__10082__auto__ = hash_key;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__20379__auto__","h__20379__auto__",-637116961,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__20379__auto__","h__20379__auto__",-637116961,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__10082__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__20379__auto__","h__20379__auto__",-637116961,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__10082__auto__ = hash_fn;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = coll;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__10082__auto__ = hash_key;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__20379__auto__","h__20379__auto__",-637116961,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__20379__auto__","h__20379__auto__",-637116961,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
});

cljs.core$macros.caching_hash.cljs$lang$macro = true;
cljs.core$macros.do_curried = (function cljs$core$macros$do_curried(name,doc,meta,args,body){
var cargs = cljs.core.vec.call(null,cljs.core.butlast.call(null,args));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null)),(function (){var x__10082__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = doc;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = meta;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__10082__auto__ = cargs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__10082__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__20380__auto__","x__20380__auto__",1504286947,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__10082__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),cargs,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__20380__auto__","x__20380__auto__",1504286947,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__10082__auto__ = args;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
});
/**
 * Builds another arity of the fn that returns a fn awaiting the last
 *   param
 */
cljs.core$macros.defcurried = (function cljs$core$macros$defcurried(var_args){
var args__10360__auto__ = [];
var len__10353__auto___20388 = arguments.length;
var i__10354__auto___20389 = (0);
while(true){
if((i__10354__auto___20389 < len__10353__auto___20388)){
args__10360__auto__.push((arguments[i__10354__auto___20389]));

var G__20390 = (i__10354__auto___20389 + (1));
i__10354__auto___20389 = G__20390;
continue;
} else {
}
break;
}

var argseq__10361__auto__ = ((((6) < args__10360__auto__.length))?(new cljs.core.IndexedSeq(args__10360__auto__.slice((6)),(0),null)):null);
return cljs.core$macros.defcurried.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),argseq__10361__auto__);
});

cljs.core$macros.defcurried.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,doc,meta,args,body){
return cljs.core$macros.do_curried.call(null,name,doc,meta,args,body);
});

cljs.core$macros.defcurried.cljs$lang$maxFixedArity = (6);

cljs.core$macros.defcurried.cljs$lang$applyTo = (function (seq20381){
var G__20382 = cljs.core.first.call(null,seq20381);
var seq20381__$1 = cljs.core.next.call(null,seq20381);
var G__20383 = cljs.core.first.call(null,seq20381__$1);
var seq20381__$2 = cljs.core.next.call(null,seq20381__$1);
var G__20384 = cljs.core.first.call(null,seq20381__$2);
var seq20381__$3 = cljs.core.next.call(null,seq20381__$2);
var G__20385 = cljs.core.first.call(null,seq20381__$3);
var seq20381__$4 = cljs.core.next.call(null,seq20381__$3);
var G__20386 = cljs.core.first.call(null,seq20381__$4);
var seq20381__$5 = cljs.core.next.call(null,seq20381__$4);
var G__20387 = cljs.core.first.call(null,seq20381__$5);
var seq20381__$6 = cljs.core.next.call(null,seq20381__$5);
return cljs.core$macros.defcurried.cljs$core$IFn$_invoke$arity$variadic(G__20382,G__20383,G__20384,G__20385,G__20386,G__20387,seq20381__$6);
});


cljs.core$macros.defcurried.cljs$lang$macro = true;
cljs.core$macros.do_rfn = (function cljs$core$macros$do_rfn(f1,k,fkv){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__10082__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__10082__auto__ = f1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = clojure.walk.postwalk.call(null,(function (p1__20391_SHARP_){
if(cljs.core.sequential_QMARK_.call(null,p1__20391_SHARP_)){
return ((cljs.core.vector_QMARK_.call(null,p1__20391_SHARP_))?cljs.core.vec:cljs.core.identity).call(null,cljs.core.remove.call(null,cljs.core.PersistentHashSet.fromArray([k], true),p1__20391_SHARP_));
} else {
return p1__20391_SHARP_;
}
}),fkv);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = fkv;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
});
/**
 * Builds 3-arity reducing fn given names of wrapped fn and key, and k/v impl.
 */
cljs.core$macros.rfn = (function cljs$core$macros$rfn(_AMPERSAND_form,_AMPERSAND_env,p__20392,fkv){
var vec__20396 = p__20392;
var f1 = cljs.core.nth.call(null,vec__20396,(0),null);
var k = cljs.core.nth.call(null,vec__20396,(1),null);
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
var args__10360__auto__ = [];
var len__10353__auto___20402 = arguments.length;
var i__10354__auto___20403 = (0);
while(true){
if((i__10354__auto___20403 < len__10353__auto___20402)){
args__10360__auto__.push((arguments[i__10354__auto___20403]));

var G__20404 = (i__10354__auto___20403 + (1));
i__10354__auto___20403 = G__20404;
continue;
} else {
}
break;
}

var argseq__10361__auto__ = ((((2) < args__10360__auto__.length))?(new cljs.core.IndexedSeq(args__10360__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.reify.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10361__auto__);
});

cljs.core$macros.reify.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,impls){
var t = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,[cljs.core.str("t_"),cljs.core.str(clojure.string.replace.call(null,[cljs.core.str(cljs.core.munge.call(null,cljs.analyzer._STAR_cljs_ns_STAR_))].join(''),".","$"))].join('')),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"anonymous","anonymous",447897231),true], null));
var meta_sym = cljs.core.gensym.call(null,"meta");
var this_sym = cljs.core.gensym.call(null,"_");
var locals = cljs.core.keys.call(null,new cljs.core.Keyword(null,"locals","locals",535295783).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
var ns = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
var munge = cljs.compiler.munge;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-not","cljs.core$macros/when-not",-764302244,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","exists?","cljs.core$macros/exists?",-1828590389,null)),(function (){var x__10082__auto__ = cljs.core.symbol.call(null,[cljs.core.str(ns)].join(''),[cljs.core.str(t)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","deftype","cljs.core$macros/deftype",1799045688,null)),(function (){var x__10082__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,locals,(function (){var x__10082__auto__ = meta_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","IWithMeta","cljs.core/IWithMeta",-1981666051,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-with-meta","-with-meta",-1610713823,null)),(function (){var x__10082__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__10082__auto__ = this_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = meta_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__10082__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),locals,(function (){var x__10082__auto__ = meta_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","IMeta","cljs.core/IMeta",-1459057517,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-meta","-meta",494863156,null)),(function (){var x__10082__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__10082__auto__ = this_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = meta_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),impls)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__10082__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),locals,(function (){var x__10082__auto__ = cljs.analyzer.elide_reader_meta.call(null,cljs.core.meta.call(null,_AMPERSAND_form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
});

cljs.core$macros.reify.cljs$lang$maxFixedArity = (2);

cljs.core$macros.reify.cljs$lang$applyTo = (function (seq20399){
var G__20400 = cljs.core.first.call(null,seq20399);
var seq20399__$1 = cljs.core.next.call(null,seq20399);
var G__20401 = cljs.core.first.call(null,seq20399__$1);
var seq20399__$2 = cljs.core.next.call(null,seq20399__$1);
return cljs.core$macros.reify.cljs$core$IFn$_invoke$arity$variadic(G__20400,G__20401,seq20399__$2);
});


cljs.core$macros.reify.cljs$lang$macro = true;
/**
 * Identical to reify but mutates its first argument.
 */
cljs.core$macros.specify_BANG_ = (function cljs$core$macros$specify_BANG_(var_args){
var args__10360__auto__ = [];
var len__10353__auto___20409 = arguments.length;
var i__10354__auto___20410 = (0);
while(true){
if((i__10354__auto___20410 < len__10353__auto___20409)){
args__10360__auto__.push((arguments[i__10354__auto___20410]));

var G__20411 = (i__10354__auto___20410 + (1));
i__10354__auto___20410 = G__20411;
continue;
} else {
}
break;
}

var argseq__10361__auto__ = ((((3) < args__10360__auto__.length))?(new cljs.core.IndexedSeq(args__10360__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.specify_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10361__auto__);
});

cljs.core$macros.specify_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,impls){
var x = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"x"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"extend","extend",1836484006),new cljs.core.Keyword(null,"instance","instance",-2121349050)], null));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__10082__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__10082__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","extend-type","cljs.core$macros/extend-type",1713295201,null)),(function (){var x__10082__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),impls)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
});

cljs.core$macros.specify_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.specify_BANG_.cljs$lang$applyTo = (function (seq20405){
var G__20406 = cljs.core.first.call(null,seq20405);
var seq20405__$1 = cljs.core.next.call(null,seq20405);
var G__20407 = cljs.core.first.call(null,seq20405__$1);
var seq20405__$2 = cljs.core.next.call(null,seq20405__$1);
var G__20408 = cljs.core.first.call(null,seq20405__$2);
var seq20405__$3 = cljs.core.next.call(null,seq20405__$2);
return cljs.core$macros.specify_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__20406,G__20407,G__20408,seq20405__$3);
});


cljs.core$macros.specify_BANG_.cljs$lang$macro = true;
/**
 * Identical to specify! but does not mutate its first argument. The first
 *   argument must be an ICloneable instance.
 */
cljs.core$macros.specify = (function cljs$core$macros$specify(var_args){
var args__10360__auto__ = [];
var len__10353__auto___20416 = arguments.length;
var i__10354__auto___20417 = (0);
while(true){
if((i__10354__auto___20417 < len__10353__auto___20416)){
args__10360__auto__.push((arguments[i__10354__auto___20417]));

var G__20418 = (i__10354__auto___20417 + (1));
i__10354__auto___20417 = G__20418;
continue;
} else {
}
break;
}

var argseq__10361__auto__ = ((((3) < args__10360__auto__.length))?(new cljs.core.IndexedSeq(args__10360__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.specify.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10361__auto__);
});

cljs.core$macros.specify.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,impls){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","specify!","cljs.core/specify!",-585401629,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","clone","cljs.core/clone",1417120092,null)),(function (){var x__10082__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),impls)));
});

cljs.core$macros.specify.cljs$lang$maxFixedArity = (3);

cljs.core$macros.specify.cljs$lang$applyTo = (function (seq20412){
var G__20413 = cljs.core.first.call(null,seq20412);
var seq20412__$1 = cljs.core.next.call(null,seq20412);
var G__20414 = cljs.core.first.call(null,seq20412__$1);
var seq20412__$2 = cljs.core.next.call(null,seq20412__$1);
var G__20415 = cljs.core.first.call(null,seq20412__$2);
var seq20412__$3 = cljs.core.next.call(null,seq20412__$2);
return cljs.core$macros.specify.cljs$core$IFn$_invoke$arity$variadic(G__20413,G__20414,G__20415,seq20412__$3);
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
var args__10360__auto__ = [];
var len__10353__auto___20423 = arguments.length;
var i__10354__auto___20424 = (0);
while(true){
if((i__10354__auto___20424 < len__10353__auto___20423)){
args__10360__auto__.push((arguments[i__10354__auto___20424]));

var G__20425 = (i__10354__auto___20424 + (1));
i__10354__auto___20424 = G__20425;
continue;
} else {
}
break;
}

var argseq__10361__auto__ = ((((3) < args__10360__auto__.length))?(new cljs.core.IndexedSeq(args__10360__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.this_as.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10361__auto__);
});

cljs.core$macros.this_as.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__10082__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__10082__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-this","cljs.core$macros/js-this",353597180,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),body)));
});

cljs.core$macros.this_as.cljs$lang$maxFixedArity = (3);

cljs.core$macros.this_as.cljs$lang$applyTo = (function (seq20419){
var G__20420 = cljs.core.first.call(null,seq20419);
var seq20419__$1 = cljs.core.next.call(null,seq20419);
var G__20421 = cljs.core.first.call(null,seq20419__$1);
var seq20419__$2 = cljs.core.next.call(null,seq20419__$1);
var G__20422 = cljs.core.first.call(null,seq20419__$2);
var seq20419__$3 = cljs.core.next.call(null,seq20419__$2);
return cljs.core$macros.this_as.cljs$core$IFn$_invoke$arity$variadic(G__20420,G__20421,G__20422,seq20419__$3);
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

if(cljs.core.truth_((function (){var and__9233__auto__ = new cljs.core.Keyword(null,"protocol-deprecated","protocol-deprecated",103233497).cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_warnings_STAR_);
if(cljs.core.truth_(and__9233__auto__)){
var and__9233__auto____$1 = new cljs.core.Keyword(null,"deprecated","deprecated",1498275348).cljs$core$IFn$_invoke$arity$1(var$);
if(cljs.core.truth_(and__9233__auto____$1)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"deprecation-nowarn","deprecation-nowarn",-1762828044).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,p)));
} else {
return and__9233__auto____$1;
}
} else {
return and__9233__auto__;
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
var G__20426 = cljs.core.assoc.call(null,ret,cljs.core.first.call(null,s),cljs.core.take_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,s)));
var G__20427 = cljs.core.drop_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,s));
ret = G__20426;
s = G__20427;
continue;
} else {
return ret;
}
break;
}
});
cljs.core$macros.base_assign_impls = (function cljs$core$macros$base_assign_impls(env,resolve,tsym,type,p__20428){
var vec__20436 = p__20428;
var p = cljs.core.nth.call(null,vec__20436,(0),null);
var sigs = cljs.core.nth.call(null,vec__20436,(1),null);
cljs.core$macros.warn_and_update_protocol.call(null,p,tsym,env);

var psym = resolve.call(null,p);
var pfn_prefix = cljs.core.subs.call(null,[cljs.core.str(psym)].join(''),(0),([cljs.core.str(psym)].join('').indexOf("/") + (1)));
return cljs.core.cons.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aset","cljs.core$macros/aset",-693176374,null)),(function (){var x__10082__auto__ = psym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = type;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true)))),cljs.core.map.call(null,((function (psym,pfn_prefix,vec__20436,p,sigs){
return (function (p__20439){
var vec__20440 = p__20439;
var seq__20441 = cljs.core.seq.call(null,vec__20440);
var first__20442 = cljs.core.first.call(null,seq__20441);
var seq__20441__$1 = cljs.core.next.call(null,seq__20441);
var f = first__20442;
var meths = seq__20441__$1;
var form = vec__20440;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aset","cljs.core$macros/aset",-693176374,null)),(function (){var x__10082__auto__ = cljs.core.symbol.call(null,[cljs.core.str(pfn_prefix),cljs.core.str(f)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = type;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),meths))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
});})(psym,pfn_prefix,vec__20436,p,sigs))
,sigs));
});
if(typeof cljs.core$macros.extend_prefix !== 'undefined'){
} else {
cljs.core$macros.extend_prefix = (function (){var method_table__10173__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__10174__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__10175__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__10176__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__10177__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.core$macros","extend-prefix"),((function (method_table__10173__auto__,prefer_table__10174__auto__,method_cache__10175__auto__,cached_hierarchy__10176__auto__,hierarchy__10177__auto__){
return (function (tsym,sym){
return new cljs.core.Keyword(null,"extend","extend",1836484006).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,tsym));
});})(method_table__10173__auto__,prefer_table__10174__auto__,method_cache__10175__auto__,cached_hierarchy__10176__auto__,hierarchy__10177__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__10177__auto__,method_table__10173__auto__,prefer_table__10174__auto__,method_cache__10175__auto__,cached_hierarchy__10176__auto__));
})();
}
cljs.core._add_method.call(null,cljs.core$macros.extend_prefix,new cljs.core.Keyword(null,"instance","instance",-2121349050),(function (tsym,sym){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"..","..",-300507420,null)),(function (){var x__10082__auto__ = tsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core$macros.to_property.call(null,sym);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
}));
cljs.core._add_method.call(null,cljs.core$macros.extend_prefix,new cljs.core.Keyword(null,"default","default",-1987822328),(function (tsym,sym){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"..","..",-300507420,null)),(function (){var x__10082__auto__ = tsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-prototype","-prototype",-450831903,null)),(function (){var x__10082__auto__ = cljs.core$macros.to_property.call(null,sym);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
}));
cljs.core$macros.adapt_obj_params = (function cljs$core$macros$adapt_obj_params(type,p__20443){
var vec__20450 = p__20443;
var seq__20451 = cljs.core.seq.call(null,vec__20450);
var first__20452 = cljs.core.first.call(null,seq__20451);
var seq__20451__$1 = cljs.core.next.call(null,seq__20451);
var vec__20453 = first__20452;
var seq__20454 = cljs.core.seq.call(null,vec__20453);
var first__20455 = cljs.core.first.call(null,seq__20454);
var seq__20454__$1 = cljs.core.next.call(null,seq__20454);
var this$ = first__20455;
var args = seq__20454__$1;
var sig = vec__20453;
var body = seq__20451__$1;
var x__10082__auto__ = cljs.core.vec.call(null,args);
return cljs.core._conj.call(null,(function (){var x__10082__auto____$1 = cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"this-as","this-as",-848995740,null),cljs.core.vary_meta.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),type),body);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto____$1);
})(),x__10082__auto__);
});
cljs.core$macros.adapt_ifn_params = (function cljs$core$macros$adapt_ifn_params(type,p__20456){
var vec__20463 = p__20456;
var seq__20464 = cljs.core.seq.call(null,vec__20463);
var first__20465 = cljs.core.first.call(null,seq__20464);
var seq__20464__$1 = cljs.core.next.call(null,seq__20464);
var vec__20466 = first__20465;
var seq__20467 = cljs.core.seq.call(null,vec__20466);
var first__20468 = cljs.core.first.call(null,seq__20467);
var seq__20467__$1 = cljs.core.next.call(null,seq__20467);
var this$ = first__20468;
var args = seq__20467__$1;
var sig = vec__20466;
var body = seq__20464__$1;
var self_sym = cljs.core.with_meta.call(null,new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),type], null));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__10082__auto__ = cljs.core.vec.call(null,cljs.core.cons.call(null,self_sym,args));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null)),(function (){var x__10082__auto__ = self_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__10082__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__10082__auto__ = this$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = self_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
});
cljs.core$macros.adapt_ifn_invoke_params = (function cljs$core$macros$adapt_ifn_invoke_params(type,p__20469){
var vec__20476 = p__20469;
var seq__20477 = cljs.core.seq.call(null,vec__20476);
var first__20478 = cljs.core.first.call(null,seq__20477);
var seq__20477__$1 = cljs.core.next.call(null,seq__20477);
var vec__20479 = first__20478;
var seq__20480 = cljs.core.seq.call(null,vec__20479);
var first__20481 = cljs.core.first.call(null,seq__20480);
var seq__20480__$1 = cljs.core.next.call(null,seq__20480);
var this$ = first__20481;
var args = seq__20480__$1;
var sig = vec__20479;
var body = seq__20477__$1;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__10082__auto__ = cljs.core.vec.call(null,args);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null)),(function (){var x__10082__auto__ = cljs.core.vary_meta.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),type);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
});
cljs.core$macros.adapt_proto_params = (function cljs$core$macros$adapt_proto_params(type,p__20482){
var vec__20489 = p__20482;
var seq__20490 = cljs.core.seq.call(null,vec__20489);
var first__20491 = cljs.core.first.call(null,seq__20490);
var seq__20490__$1 = cljs.core.next.call(null,seq__20490);
var vec__20492 = first__20491;
var seq__20493 = cljs.core.seq.call(null,vec__20492);
var first__20494 = cljs.core.first.call(null,seq__20493);
var seq__20493__$1 = cljs.core.next.call(null,seq__20493);
var this$ = first__20494;
var args = seq__20493__$1;
var sig = vec__20492;
var body = seq__20490__$1;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__10082__auto__ = cljs.core.vec.call(null,cljs.core.cons.call(null,cljs.core.vary_meta.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),type),args));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null)),(function (){var x__10082__auto__ = this$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
});
cljs.core$macros.add_obj_methods = (function cljs$core$macros$add_obj_methods(type,type_sym,sigs){
return cljs.core.map.call(null,(function (p__20503){
var vec__20504 = p__20503;
var seq__20505 = cljs.core.seq.call(null,vec__20504);
var first__20506 = cljs.core.first.call(null,seq__20505);
var seq__20505__$1 = cljs.core.next.call(null,seq__20505);
var f = first__20506;
var meths = seq__20505__$1;
var form = vec__20504;
var vec__20507 = ((cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,meths)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rest.call(null,form)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,meths], null));
var f__$1 = cljs.core.nth.call(null,vec__20507,(0),null);
var meths__$1 = cljs.core.nth.call(null,vec__20507,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__10082__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,f__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),cljs.core.map.call(null,((function (vec__20507,f__$1,meths__$1,vec__20504,seq__20505,first__20506,seq__20505__$1,f,meths,form){
return (function (p1__20495_SHARP_){
return cljs.core$macros.adapt_obj_params.call(null,type,p1__20495_SHARP_);
});})(vec__20507,f__$1,meths__$1,vec__20504,seq__20505,first__20506,seq__20505__$1,f,meths,form))
,meths__$1)))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
}),sigs);
});
cljs.core$macros.ifn_invoke_methods = (function cljs$core$macros$ifn_invoke_methods(type,type_sym,p__20511){
var vec__20515 = p__20511;
var seq__20516 = cljs.core.seq.call(null,vec__20515);
var first__20517 = cljs.core.first.call(null,seq__20516);
var seq__20516__$1 = cljs.core.next.call(null,seq__20516);
var f = first__20517;
var meths = seq__20516__$1;
var form = vec__20515;
return cljs.core.map.call(null,((function (vec__20515,seq__20516,first__20517,seq__20516__$1,f,meths,form){
return (function (meth){
var arity = cljs.core.count.call(null,cljs.core.first.call(null,meth));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__10082__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,cljs.core.symbol.call(null,[cljs.core.str("cljs$core$IFn$_invoke$arity$"),cljs.core.str(arity)].join('')));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__10082__auto__ = meth;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})()))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
});})(vec__20515,seq__20516,first__20517,seq__20516__$1,f,meths,form))
,cljs.core.map.call(null,((function (vec__20515,seq__20516,first__20517,seq__20516__$1,f,meths,form){
return (function (p1__20510_SHARP_){
return cljs.core$macros.adapt_ifn_invoke_params.call(null,type,p1__20510_SHARP_);
});})(vec__20515,seq__20516,first__20517,seq__20516__$1,f,meths,form))
,meths));
});
cljs.core$macros.add_ifn_methods = (function cljs$core$macros$add_ifn_methods(type,type_sym,p__20519){
var vec__20523 = p__20519;
var seq__20524 = cljs.core.seq.call(null,vec__20523);
var first__20525 = cljs.core.first.call(null,seq__20524);
var seq__20524__$1 = cljs.core.next.call(null,seq__20524);
var f = first__20525;
var meths = seq__20524__$1;
var form = vec__20523;
var meths__$1 = cljs.core.map.call(null,((function (vec__20523,seq__20524,first__20525,seq__20524__$1,f,meths,form){
return (function (p1__20518_SHARP_){
return cljs.core$macros.adapt_ifn_params.call(null,type,p1__20518_SHARP_);
});})(vec__20523,seq__20524,first__20525,seq__20524__$1,f,meths,form))
,meths);
var this_sym = cljs.core.with_meta.call(null,new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),type], null));
var argsym = cljs.core.gensym.call(null,"args");
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__10082__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,new cljs.core.Symbol(null,"call","call",1120531661,null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),meths__$1))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})()))),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__10082__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,new cljs.core.Symbol(null,"apply","apply",-1334050276,null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__10082__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this_sym,argsym], null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null)),(function (){var x__10082__auto__ = this_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".apply",".apply",-1176201338,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-call",".-call",1760541695,null)),(function (){var x__10082__auto__ = this_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = this_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".concat",".concat",1180408684,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),(function (){var x__10082__auto__ = this_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","aclone","cljs.core/aclone",-758078968,null)),(function (){var x__10082__auto__ = argsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})()))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())))], null),cljs.core$macros.ifn_invoke_methods.call(null,type,type_sym,form));
});
cljs.core$macros.add_proto_methods_STAR_ = (function cljs$core$macros$add_proto_methods_STAR_(pprefix,type,type_sym,p__20526){
var vec__20534 = p__20526;
var seq__20535 = cljs.core.seq.call(null,vec__20534);
var first__20536 = cljs.core.first.call(null,seq__20535);
var seq__20535__$1 = cljs.core.next.call(null,seq__20535);
var f = first__20536;
var meths = seq__20535__$1;
var form = vec__20534;
var pf = [cljs.core.str(pprefix),cljs.core.str(cljs.core.name.call(null,f))].join('');
if(cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,meths))){
var meth = meths;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__10082__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,[cljs.core.str(pf),cljs.core.str("$arity$"),cljs.core.str(cljs.core.count.call(null,cljs.core.first.call(null,meth)))].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),cljs.core$macros.adapt_proto_params.call(null,type,meth)))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())))], null);
} else {
return cljs.core.map.call(null,((function (pf,vec__20534,seq__20535,first__20536,seq__20535__$1,f,meths,form){
return (function (p__20537){
var vec__20538 = p__20537;
var seq__20539 = cljs.core.seq.call(null,vec__20538);
var first__20540 = cljs.core.first.call(null,seq__20539);
var seq__20539__$1 = cljs.core.next.call(null,seq__20539);
var sig = first__20540;
var body = seq__20539__$1;
var meth = vec__20538;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__10082__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,[cljs.core.str(pf),cljs.core.str("$arity$"),cljs.core.str(cljs.core.count.call(null,sig))].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__10082__auto__ = cljs.core$macros.adapt_proto_params.call(null,type,meth);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})()))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
});})(pf,vec__20534,seq__20535,first__20536,seq__20535__$1,f,meths,form))
,meths);
}
});
cljs.core$macros.proto_assign_impls = (function cljs$core$macros$proto_assign_impls(env,resolve,type_sym,type,p__20541){
var vec__20545 = p__20541;
var p = cljs.core.nth.call(null,vec__20545,(0),null);
var sigs = cljs.core.nth.call(null,vec__20545,(1),null);
cljs.core$macros.warn_and_update_protocol.call(null,p,type,env);

var psym = resolve.call(null,p);
var pprefix = cljs.core$macros.protocol_prefix.call(null,psym);
var skip_flag = cljs.core.set.call(null,new cljs.core.Keyword(null,"skip-protocol-flag","skip-protocol-flag",-1426798630).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,type_sym)));
if(cljs.core._EQ_.call(null,p,new cljs.core.Symbol(null,"Object","Object",61210754,null))){
return cljs.core$macros.add_obj_methods.call(null,type,type_sym,sigs);
} else {
return cljs.core.concat.call(null,(cljs.core.truth_(skip_flag.call(null,psym))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__10082__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,pprefix);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PROTOCOL_SENTINEL","cljs.core/PROTOCOL_SENTINEL",210209696,null)))))], null)),cljs.core.mapcat.call(null,((function (psym,pprefix,skip_flag,vec__20545,p,sigs){
return (function (sig){
if(cljs.core._EQ_.call(null,psym,new cljs.core.Symbol("cljs.core","IFn","cljs.core/IFn",-920223129,null))){
return cljs.core$macros.add_ifn_methods.call(null,type,type_sym,sig);
} else {
return cljs.core$macros.add_proto_methods_STAR_.call(null,pprefix,type,type_sym,sig);
}
});})(psym,pprefix,skip_flag,vec__20545,p,sigs))
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
var vec__20551 = ((cljs.core.vector_QMARK_.call(null,cljs.core.second.call(null,method)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [__GT_name.call(null,method_name),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second.call(null,method)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [__GT_name.call(null,method_name),cljs.core.map.call(null,cljs.core.first,cljs.core.rest.call(null,method))], null));
var fname = cljs.core.nth.call(null,vec__20551,(0),null);
var sigs = cljs.core.nth.call(null,vec__20551,(1),null);
var decmeths = cljs.core.get.call(null,minfo,fname,new cljs.core.Keyword("cljs.core$macros","not-found","cljs.core$macros/not-found",-1226326556));
if(cljs.core._EQ_.call(null,decmeths,new cljs.core.Keyword("cljs.core$macros","not-found","cljs.core$macros/not-found",-1226326556))){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),env,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p,new cljs.core.Keyword(null,"fname","fname",1500291491),fname,new cljs.core.Keyword(null,"no-such-method","no-such-method",1087422840),true], null));
} else {
}

if(cljs.core.truth_(cljs.core.namespace.call(null,method_name))){
var method_var_20554 = cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),method_name,cljs.analyzer.confirm_var_exist_warning);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(var$),new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(method_var_20554))){
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

var G__20555 = cljs.core.next.call(null,sigs__$1);
var G__20556 = cljs.core.conj.call(null,seen,c);
sigs__$1 = G__20555;
seen = G__20556;
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

var seen_20563 = cljs.core.PersistentHashSet.EMPTY;
var methods_20564__$1 = methods$;
while(true){
if(cljs.core.seq.call(null,methods_20564__$1)){
var vec__20560_20565 = cljs.core.first.call(null,methods_20564__$1);
var fname_20566 = cljs.core.nth.call(null,vec__20560_20565,(0),null);
var method_20567 = vec__20560_20565;
if(cljs.core.contains_QMARK_.call(null,seen_20563,fname_20566)){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"extend-type-invalid-method-shape","extend-type-invalid-method-shape",1424103549),env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"protocol","protocol",652470118),proto,new cljs.core.Keyword(null,"method","method",55703592),fname_20566], null));
} else {
}

cljs.core$macros.validate_impl_sigs.call(null,env,proto,method_20567);

var G__20568 = cljs.core.conj.call(null,seen_20563,fname_20566);
var G__20569 = cljs.core.next.call(null,methods_20564__$1);
seen_20563 = G__20568;
methods_20564__$1 = G__20569;
continue;
} else {
}
break;
}

var G__20570 = cljs.core.conj.call(null,protos,proto);
var G__20571 = impls__$2;
protos = G__20570;
impls__$1 = G__20571;
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
var args__10360__auto__ = [];
var len__10353__auto___20580 = arguments.length;
var i__10354__auto___20581 = (0);
while(true){
if((i__10354__auto___20581 < len__10353__auto___20580)){
args__10360__auto__.push((arguments[i__10354__auto___20581]));

var G__20582 = (i__10354__auto___20581 + (1));
i__10354__auto___20581 = G__20582;
continue;
} else {
}
break;
}

var argseq__10361__auto__ = ((((3) < args__10360__auto__.length))?(new cljs.core.IndexedSeq(args__10360__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.extend_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10361__auto__);
});

cljs.core$macros.extend_type.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,type_sym,impls){
var env = _AMPERSAND_env;
var _ = cljs.core$macros.validate_impls.call(null,env,impls);
var resolve = cljs.core.partial.call(null,cljs.core$macros.resolve_var,env);
var impl_map = cljs.core$macros.__GT_impl_map.call(null,impls);
var impl_map__$1 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null,new cljs.core.Symbol(null,"number","number",-1084057331,null),null], null), null).call(null,type_sym))?cljs.core$macros.type_hint_impl_map.call(null,type_sym,impl_map):impl_map);
var vec__20577 = (function (){var temp__4655__auto__ = cljs.core$macros.base_type.call(null,type_sym);
if(cljs.core.truth_(temp__4655__auto__)){
var type = temp__4655__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core$macros.base_assign_impls], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [resolve.call(null,type_sym),cljs.core$macros.proto_assign_impls], null);
}
})();
var type = cljs.core.nth.call(null,vec__20577,(0),null);
var assign_impls = cljs.core.nth.call(null,vec__20577,(1),null);
if(cljs.core.truth_((function (){var and__9233__auto__ = new cljs.core.Keyword(null,"extending-base-js-type","extending-base-js-type",432787264).cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_warnings_STAR_);
if(cljs.core.truth_(and__9233__auto__)){
return cljs.core$macros.js_base_type.call(null,type_sym);
} else {
return and__9233__auto__;
}
})())){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"extending-base-js-type","extending-base-js-type",432787264),env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-symbol","current-symbol",-932381075),type_sym,new cljs.core.Keyword(null,"suggested-symbol","suggested-symbol",-1329631875),cljs.core$macros.js_base_type.call(null,type_sym)], null));
} else {
}

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),cljs.core.mapcat.call(null,((function (env,_,resolve,impl_map,impl_map__$1,vec__20577,type,assign_impls){
return (function (p1__20572_SHARP_){
return assign_impls.call(null,env,resolve,type_sym,type,p1__20572_SHARP_);
});})(env,_,resolve,impl_map,impl_map__$1,vec__20577,type,assign_impls))
,impl_map__$1))));
});

cljs.core$macros.extend_type.cljs$lang$maxFixedArity = (3);

cljs.core$macros.extend_type.cljs$lang$applyTo = (function (seq20573){
var G__20574 = cljs.core.first.call(null,seq20573);
var seq20573__$1 = cljs.core.next.call(null,seq20573);
var G__20575 = cljs.core.first.call(null,seq20573__$1);
var seq20573__$2 = cljs.core.next.call(null,seq20573__$1);
var G__20576 = cljs.core.first.call(null,seq20573__$2);
var seq20573__$3 = cljs.core.next.call(null,seq20573__$2);
return cljs.core$macros.extend_type.cljs$core$IFn$_invoke$arity$variadic(G__20574,G__20575,G__20576,seq20573__$3);
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
cljs.core$macros.annotate_specs = (function cljs$core$macros$annotate_specs(annots,v,p__20584){
var vec__20588 = p__20584;
var f = cljs.core.nth.call(null,vec__20588,(0),null);
var sigs = cljs.core.nth.call(null,vec__20588,(1),null);
return cljs.core.conj.call(null,v,cljs.core.vary_meta.call(null,cljs.core.cons.call(null,f,cljs.core.map.call(null,((function (vec__20588,f,sigs){
return (function (p1__20583_SHARP_){
return cljs.core.cons.call(null,cljs.core.second.call(null,p1__20583_SHARP_),cljs.core.nnext.call(null,p1__20583_SHARP_));
});})(vec__20588,f,sigs))
,sigs)),cljs.core.merge,annots));
});
cljs.core$macros.dt__GT_et = (function cljs$core$macros$dt__GT_et(var_args){
var args20591 = [];
var len__10353__auto___20594 = arguments.length;
var i__10354__auto___20595 = (0);
while(true){
if((i__10354__auto___20595 < len__10353__auto___20594)){
args20591.push((arguments[i__10354__auto___20595]));

var G__20596 = (i__10354__auto___20595 + (1));
i__10354__auto___20595 = G__20596;
continue;
} else {
}
break;
}

var G__20593 = args20591.length;
switch (G__20593) {
case 3:
return cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20591.length)].join('')));

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
var G__20598 = ret__$1;
var G__20599 = specs__$2;
ret = G__20598;
specs__$1 = G__20599;
continue;
} else {
return ret;
}
break;
}
});

cljs.core$macros.dt__GT_et.cljs$lang$maxFixedArity = 4;

cljs.core$macros.collect_protocols = (function cljs$core$macros$collect_protocols(impls,env){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,(function (p1__20600_SHARP_){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),p1__20600_SHARP_));
}),cljs.core.filter.call(null,cljs.core.symbol_QMARK_,impls)));
});
cljs.core$macros.build_positional_factory = (function cljs$core$macros$build_positional_factory(rsym,rname,fields){
var fn_name = cljs.core.with_meta.call(null,cljs.core.symbol.call(null,[cljs.core.str(new cljs.core.Symbol(null,"->","->",-2139605430,null)),cljs.core.str(rsym)].join('')),cljs.core.assoc.call(null,cljs.core.meta.call(null,rsym),new cljs.core.Keyword(null,"factory","factory",63933746),new cljs.core.Keyword(null,"positional","positional",-203580463)));
var field_values = (cljs.core.truth_(new cljs.core.Keyword(null,"internal-ctor","internal-ctor",937392560).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,rsym)))?cljs.core.conj.call(null,fields,null,null,null):fields);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null)),(function (){var x__10082__auto__ = fn_name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,fields))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__10082__auto__ = rname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),field_values)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
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
var args__10360__auto__ = [];
var len__10353__auto___20612 = arguments.length;
var i__10354__auto___20613 = (0);
while(true){
if((i__10354__auto___20613 < len__10353__auto___20612)){
args__10360__auto__.push((arguments[i__10354__auto___20613]));

var G__20614 = (i__10354__auto___20613 + (1));
i__10354__auto___20613 = G__20614;
continue;
} else {
}
break;
}

var argseq__10361__auto__ = ((((4) < args__10360__auto__.length))?(new cljs.core.IndexedSeq(args__10360__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.deftype.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__10361__auto__);
});

cljs.core$macros.deftype.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,t,fields,impls){
cljs.core$macros.validate_fields.call(null,"deftype",t,fields);

var env = _AMPERSAND_env;
var r = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),t));
var vec__20609 = cljs.core$macros.prepare_protocol_masks.call(null,env,impls);
var fpps = cljs.core.nth.call(null,vec__20609,(0),null);
var pmasks = cljs.core.nth.call(null,vec__20609,(1),null);
var protocols = cljs.core$macros.collect_protocols.call(null,impls,env);
var t__$1 = cljs.core.vary_meta.call(null,t,cljs.core.assoc,new cljs.core.Keyword(null,"protocols","protocols",-5615896),protocols,new cljs.core.Keyword(null,"skip-protocol-flag","skip-protocol-flag",-1426798630),fpps);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"deftype*","deftype*",962659890,null)),(function (){var x__10082__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = fields;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = pmasks;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = ((cljs.core.seq.call(null,impls))?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","extend-type","cljs.core$macros/extend-type",1713295201,null)),(function (){var x__10082__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),cljs.core$macros.dt__GT_et.call(null,t__$1,impls,fields)))):null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-getBasis",".-getBasis",-1306451468,null)),(function (){var x__10082__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__10082__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__10082__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,fields))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$type",".-cljs$lang$type",-1029307724,null)),(function (){var x__10082__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$ctorStr",".-cljs$lang$ctorStr",-1820706991,null)),(function (){var x__10082__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = [cljs.core.str(r)].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$ctorPrWriter",".-cljs$lang$ctorPrWriter",255834464,null)),(function (){var x__10082__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__10082__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__20601__auto__","this__20601__auto__",1189518904,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__20602__auto__","writer__20602__auto__",94772853,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opt__20603__auto__","opt__20603__auto__",-773308744,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-write","cljs.core/-write",527220517,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__20602__auto__","writer__20602__auto__",94772853,null)),(function (){var x__10082__auto__ = [cljs.core.str(r)].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core$macros.build_positional_factory.call(null,t__$1,r,fields);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
});

cljs.core$macros.deftype.cljs$lang$maxFixedArity = (4);

cljs.core$macros.deftype.cljs$lang$applyTo = (function (seq20604){
var G__20605 = cljs.core.first.call(null,seq20604);
var seq20604__$1 = cljs.core.next.call(null,seq20604);
var G__20606 = cljs.core.first.call(null,seq20604__$1);
var seq20604__$2 = cljs.core.next.call(null,seq20604__$1);
var G__20607 = cljs.core.first.call(null,seq20604__$2);
var seq20604__$3 = cljs.core.next.call(null,seq20604__$2);
var G__20608 = cljs.core.first.call(null,seq20604__$3);
var seq20604__$4 = cljs.core.next.call(null,seq20604__$3);
return cljs.core$macros.deftype.cljs$core$IFn$_invoke$arity$variadic(G__20605,G__20606,G__20607,G__20608,seq20604__$4);
});


cljs.core$macros.deftype.cljs$lang$macro = true;
/**
 * Do not use this directly - use defrecord
 */
cljs.core$macros.emit_defrecord = (function cljs$core$macros$emit_defrecord(env,tagname,rname,fields,impls){
var hinted_fields = fields;
var fields__$1 = cljs.core.vec.call(null,cljs.core.map.call(null,((function (hinted_fields){
return (function (p1__20615_SHARP_){
return cljs.core.with_meta.call(null,p1__20615_SHARP_,null);
});})(hinted_fields))
,fields));
var base_fields = fields__$1;
var pr_open = [cljs.core.str("#"),cljs.core.str(cljs.core.namespace.call(null,rname)),cljs.core.str("."),cljs.core.str(cljs.core.name.call(null,rname)),cljs.core.str("{")].join('');
var fields__$2 = cljs.core.conj.call(null,fields__$1,new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),cljs.core.with_meta.call(null,new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)));
var gs = cljs.core.gensym.call(null);
var ksym = cljs.core.gensym.call(null,"k");
var impls__$1 = cljs.core.concat.call(null,impls,new cljs.core.PersistentVector(null, 28, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"IRecord","IRecord",-903221169,null),new cljs.core.Symbol(null,"ICloneable","ICloneable",1882653160,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-clone","-clone",227130084,null)),(function (){var x__10082__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__20616__auto__","this__20616__auto__",-827501974,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__10082__auto__ = tagname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),fields__$2)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})()))),new cljs.core.Symbol(null,"IHash","IHash",-1495374645,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-hash","-hash",-630070274,null)),(function (){var x__10082__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__20617__auto__","this__20617__auto__",1740308050,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","caching-hash","cljs.core$macros/caching-hash",-1892393069,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__20617__auto__","this__20617__auto__",1740308050,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"hash-imap","hash-imap",-1047446478,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})()))),new cljs.core.Symbol(null,"IEquiv","IEquiv",-1912850869,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-equiv","-equiv",320124272,null)),(function (){var x__10082__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__20618__auto__","this__20618__auto__",1730676312,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"other__20619__auto__","other__20619__auto__",-881411030,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"other__20619__auto__","other__20619__auto__",-881411030,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","identical?","cljs.core$macros/identical?",815580547,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-constructor",".-constructor",279801701,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__20618__auto__","this__20618__auto__",1730676312,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-constructor",".-constructor",279801701,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"other__20619__auto__","other__20619__auto__",-881411030,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","equiv-map","cljs.core/equiv-map",-1185609892,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__20618__auto__","this__20618__auto__",1730676312,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"other__20619__auto__","other__20619__auto__",-881411030,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})()))),new cljs.core.Symbol(null,"IMeta","IMeta",1095313672,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-meta","-meta",494863156,null)),(function (){var x__10082__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__20620__auto__","this__20620__auto__",-401922061,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__meta","__meta",-946752628,null))))),new cljs.core.Symbol(null,"IWithMeta","IWithMeta",-509493158,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-with-meta","-with-meta",-1610713823,null)),(function (){var x__10082__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__20621__auto__","this__20621__auto__",-1427638389,null)),(function (){var x__10082__auto__ = gs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__10082__auto__ = tagname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),cljs.core.replace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),gs], null),fields__$2))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})()))),new cljs.core.Symbol(null,"ILookup","ILookup",784647298,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-lookup","-lookup",-1438393944,null)),(function (){var x__10082__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__20622__auto__","this__20622__auto__",-873702936,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__20623__auto__","k__20623__auto__",808164254,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-lookup","cljs.core/-lookup",-1845674443,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__20622__auto__","this__20622__auto__",-873702936,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__20623__auto__","k__20623__auto__",808164254,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})()))),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-lookup","-lookup",-1438393944,null)),(function (){var x__10082__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__20624__auto__","this__20624__auto__",187579113,null)),(function (){var x__10082__auto__ = ksym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"else__20625__auto__","else__20625__auto__",2095974514,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","case","cljs.core$macros/case",-2131866965,null)),(function (){var x__10082__auto__ = ksym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),cljs.core.mapcat.call(null,((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (f){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,f),f], null);
});})(gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,base_fields),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)),(function (){var x__10082__auto__ = ksym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"else__20625__auto__","else__20625__auto__",2095974514,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})()))),new cljs.core.Symbol(null,"ICounted","ICounted",-1705786327,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-count","-count",416049189,null)),(function (){var x__10082__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__20626__auto__","this__20626__auto__",1095117728,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),(function (){var x__10082__auto__ = cljs.core.count.call(null,base_fields);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})()))),new cljs.core.Symbol(null,"ICollection","ICollection",-686709190,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-conj","-conj",1373798691,null)),(function (){var x__10082__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__20627__auto__","this__20627__auto__",1058532735,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"entry__20628__auto__","entry__20628__auto__",-885064360,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"entry__20628__auto__","entry__20628__auto__",-885064360,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-assoc","cljs.core/-assoc",-814539323,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__20627__auto__","this__20627__auto__",1058532735,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-nth","cljs.core/-nth",504234802,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"entry__20628__auto__","entry__20628__auto__",-885064360,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-nth","cljs.core/-nth",504234802,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"entry__20628__auto__","entry__20628__auto__",-885064360,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","reduce","cljs.core/reduce",2025430439,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-conj","cljs.core/-conj",2040622670,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__20627__auto__","this__20627__auto__",1058532735,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"entry__20628__auto__","entry__20628__auto__",-885064360,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})()))),new cljs.core.Symbol(null,"IAssociative","IAssociative",-1306431882,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-assoc","-assoc",-416089758,null)),(function (){var x__10082__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__20629__auto__","this__20629__auto__",-1650537209,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__20630__auto__","k__20630__auto__",1382628059,null)),(function (){var x__10082__auto__ = gs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","condp","cljs.core$macros/condp",431619047,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","keyword-identical?","cljs.core/keyword-identical?",1598491177,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__20630__auto__","k__20630__auto__",1382628059,null)),cljs.core.mapcat.call(null,((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (fld){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,fld),cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"new","new",-444906321,null),tagname,cljs.core.replace.call(null,cljs.core.PersistentArrayMap.fromArray([fld,gs,new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),null], true, false),fields__$2))], null);
});})(gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,base_fields),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__10082__auto__ = tagname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),null,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),null], null), null),fields__$2),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","assoc","cljs.core/assoc",322326297,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__20630__auto__","k__20630__auto__",1382628059,null)),(function (){var x__10082__auto__ = gs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})()))),new cljs.core.Symbol(null,"IMap","IMap",992876629,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-dissoc","-dissoc",1638079447,null)),(function (){var x__10082__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__20631__auto__","this__20631__auto__",-2043297536,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__20632__auto__","k__20632__auto__",2057472269,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null)),(function (){var x__10082__auto__ = cljs.core.apply.call(null,cljs.core.hash_set,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.keyword,base_fields)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__20632__auto__","k__20632__auto__",2057472269,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","dissoc","cljs.core/dissoc",-432349815,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","with-meta","cljs.core/with-meta",749126446,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","into","cljs.core/into",1879938733,null)),(function (){var x__10082__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__20631__auto__","this__20631__auto__",-2043297536,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__meta","__meta",-946752628,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__20632__auto__","k__20632__auto__",2057472269,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__10082__auto__ = tagname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),null,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),null], null), null),fields__$2),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not-empty","cljs.core/not-empty",540057011,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","dissoc","cljs.core/dissoc",-432349815,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__20632__auto__","k__20632__auto__",2057472269,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})()))),new cljs.core.Symbol(null,"ISeqable","ISeqable",1349682102,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-seq","-seq",1019896831,null)),(function (){var x__10082__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__20634__auto__","this__20634__auto__",957027245,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null)),(function (){var x__10082__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (p1__20633_SHARP_){
return cljs.core._conj.call(null,(function (){var x__10082__auto__ = cljs.core.keyword.call(null,p1__20633_SHARP_);
return cljs.core._conj.call(null,(function (){var x__10082__auto____$1 = p1__20633_SHARP_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto____$1);
})(),x__10082__auto__);
})(),new cljs.core.Symbol("cljs.core$macros","vector","cljs.core$macros/vector",912237829,null));
});})(gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,base_fields)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})()))),new cljs.core.Symbol(null,"IIterable","IIterable",577191430,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-iterator","-iterator",310937281,null)),(function (){var x__10082__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__10082__auto__ = gs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"RecordIter.","RecordIter.",-265283060,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),(function (){var x__10082__auto__ = gs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.count.call(null,base_fields);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.keyword,base_fields)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-iterator","cljs.core/-iterator",1833427494,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","nil-iter","cljs.core/nil-iter",-1712403690,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})()))),new cljs.core.Symbol(null,"IPrintWithWriter","IPrintWithWriter",-1205316154,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-pr-writer","-pr-writer",-445354136,null)),(function (){var x__10082__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__20636__auto__","this__20636__auto__",1256572083,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__20637__auto__","writer__20637__auto__",-1205339519,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opts__20638__auto__","opts__20638__auto__",52550376,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__10082__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"pr-pair__20639__auto__","pr-pair__20639__auto__",-1291719416,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__10082__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"keyval__20640__auto__","keyval__20640__auto__",883495044,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","pr-sequential-writer","cljs.core/pr-sequential-writer",-1101677821,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__20637__auto__","writer__20637__auto__",-1205339519,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","pr-writer","cljs.core/pr-writer",133956070,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,""),cljs.core._conj.call(null,cljs.core.List.EMPTY," "),cljs.core._conj.call(null,cljs.core.List.EMPTY,""),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opts__20638__auto__","opts__20638__auto__",52550376,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"keyval__20640__auto__","keyval__20640__auto__",883495044,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","pr-sequential-writer","cljs.core/pr-sequential-writer",-1101677821,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__20637__auto__","writer__20637__auto__",-1205339519,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"pr-pair__20639__auto__","pr-pair__20639__auto__",-1291719416,null)),(function (){var x__10082__auto__ = pr_open;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,", "),cljs.core._conj.call(null,cljs.core.List.EMPTY,"}"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opts__20638__auto__","opts__20638__auto__",52550376,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null)),(function (){var x__10082__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (p1__20635_SHARP_){
return cljs.core._conj.call(null,(function (){var x__10082__auto__ = cljs.core.keyword.call(null,p1__20635_SHARP_);
return cljs.core._conj.call(null,(function (){var x__10082__auto____$1 = p1__20635_SHARP_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto____$1);
})(),x__10082__auto__);
})(),new cljs.core.Symbol("cljs.core$macros","vector","cljs.core$macros/vector",912237829,null));
});})(gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,base_fields)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())))], null));
var vec__20644 = cljs.core$macros.prepare_protocol_masks.call(null,env,impls__$1);
var fpps = cljs.core.nth.call(null,vec__20644,(0),null);
var pmasks = cljs.core.nth.call(null,vec__20644,(1),null);
var protocols = cljs.core$macros.collect_protocols.call(null,impls__$1,env);
var tagname__$1 = cljs.core.vary_meta.call(null,tagname,cljs.core.assoc,new cljs.core.Keyword(null,"protocols","protocols",-5615896),protocols,new cljs.core.Keyword(null,"skip-protocol-flag","skip-protocol-flag",-1426798630),fpps);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"defrecord*","defrecord*",-1936366207,null)),(function (){var x__10082__auto__ = tagname__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = hinted_fields;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = pmasks;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","extend-type","cljs.core$macros/extend-type",1713295201,null)),(function (){var x__10082__auto__ = tagname__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),cljs.core$macros.dt__GT_et.call(null,tagname__$1,impls__$1,fields__$2,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
});
cljs.core$macros.build_map_factory = (function cljs$core$macros$build_map_factory(rsym,rname,fields){
var fn_name = cljs.core.with_meta.call(null,cljs.core.symbol.call(null,[cljs.core.str(new cljs.core.Symbol(null,"map->","map->",-999714600,null)),cljs.core.str(rsym)].join('')),cljs.core.assoc.call(null,cljs.core.meta.call(null,rsym),new cljs.core.Keyword(null,"factory","factory",63933746),new cljs.core.Keyword(null,"map","map",1371690461)));
var ms = cljs.core.gensym.call(null);
var ks = cljs.core.map.call(null,cljs.core.keyword,fields);
var getters = cljs.core.map.call(null,((function (fn_name,ms,ks){
return (function (k){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__10082__auto__ = k;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = ms;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
});})(fn_name,ms,ks))
,ks);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null)),(function (){var x__10082__auto__ = fn_name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__10082__auto__ = ms;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__10082__auto__ = rname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),getters,cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","dissoc","cljs.core/dissoc",-432349815,null)),(function (){var x__10082__auto__ = ms;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),ks)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
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
var args__10360__auto__ = [];
var len__10353__auto___20654 = arguments.length;
var i__10354__auto___20655 = (0);
while(true){
if((i__10354__auto___20655 < len__10353__auto___20654)){
args__10360__auto__.push((arguments[i__10354__auto___20655]));

var G__20656 = (i__10354__auto___20655 + (1));
i__10354__auto___20655 = G__20656;
continue;
} else {
}
break;
}

var argseq__10361__auto__ = ((((4) < args__10360__auto__.length))?(new cljs.core.IndexedSeq(args__10360__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.defrecord.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__10361__auto__);
});

cljs.core$macros.defrecord.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,rsym,fields,impls){
cljs.core$macros.validate_fields.call(null,"defrecord",rsym,fields);

var rsym__$1 = cljs.core.vary_meta.call(null,rsym,cljs.core.assoc,new cljs.core.Keyword(null,"internal-ctor","internal-ctor",937392560),true);
var r = cljs.core.vary_meta.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,_AMPERSAND_env,new cljs.core.Keyword(null,"locals","locals",535295783)),rsym__$1)),cljs.core.assoc,new cljs.core.Keyword(null,"internal-ctor","internal-ctor",937392560),true);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__10082__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core$macros.emit_defrecord.call(null,_AMPERSAND_env,rsym__$1,r,fields,impls);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-getBasis",".-getBasis",-1306451468,null)),(function (){var x__10082__auto__ = r;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__10082__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__10082__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,fields))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$type",".-cljs$lang$type",-1029307724,null)),(function (){var x__10082__auto__ = r;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$ctorPrSeq",".-cljs$lang$ctorPrSeq",41132414,null)),(function (){var x__10082__auto__ = r;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__10082__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__20647__auto__","this__20647__auto__",-1455566659,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null)),(function (){var x__10082__auto__ = [cljs.core.str(r)].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$ctorPrWriter",".-cljs$lang$ctorPrWriter",255834464,null)),(function (){var x__10082__auto__ = r;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__10082__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__20647__auto__","this__20647__auto__",-1455566659,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__20648__auto__","writer__20648__auto__",1528278646,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-write","cljs.core/-write",527220517,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__20648__auto__","writer__20648__auto__",1528278646,null)),(function (){var x__10082__auto__ = [cljs.core.str(r)].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core$macros.build_positional_factory.call(null,rsym__$1,r,fields);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core$macros.build_map_factory.call(null,rsym__$1,r,fields);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = r;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
});

cljs.core$macros.defrecord.cljs$lang$maxFixedArity = (4);

cljs.core$macros.defrecord.cljs$lang$applyTo = (function (seq20649){
var G__20650 = cljs.core.first.call(null,seq20649);
var seq20649__$1 = cljs.core.next.call(null,seq20649);
var G__20651 = cljs.core.first.call(null,seq20649__$1);
var seq20649__$2 = cljs.core.next.call(null,seq20649__$1);
var G__20652 = cljs.core.first.call(null,seq20649__$2);
var seq20649__$3 = cljs.core.next.call(null,seq20649__$2);
var G__20653 = cljs.core.first.call(null,seq20649__$3);
var seq20649__$4 = cljs.core.next.call(null,seq20649__$3);
return cljs.core$macros.defrecord.cljs$core$IFn$_invoke$arity$variadic(G__20650,G__20651,G__20652,G__20653,seq20649__$4);
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
var args__10360__auto__ = [];
var len__10353__auto___20684 = arguments.length;
var i__10354__auto___20685 = (0);
while(true){
if((i__10354__auto___20685 < len__10353__auto___20684)){
args__10360__auto__.push((arguments[i__10354__auto___20685]));

var G__20686 = (i__10354__auto___20685 + (1));
i__10354__auto___20685 = G__20686;
continue;
} else {
}
break;
}

var argseq__10361__auto__ = ((((3) < args__10360__auto__.length))?(new cljs.core.IndexedSeq(args__10360__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.defprotocol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10361__auto__);
});

cljs.core$macros.defprotocol.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,psym,doc_PLUS_methods){
var p = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,_AMPERSAND_env,new cljs.core.Keyword(null,"locals","locals",535295783)),psym));
var vec__20663 = ((typeof cljs.core.first.call(null,doc_PLUS_methods) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,doc_PLUS_methods),cljs.core.next.call(null,doc_PLUS_methods)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,doc_PLUS_methods], null));
var doc = cljs.core.nth.call(null,vec__20663,(0),null);
var methods$ = cljs.core.nth.call(null,vec__20663,(1),null);
var psym__$1 = cljs.core.vary_meta.call(null,psym,cljs.core.assoc,new cljs.core.Keyword(null,"doc","doc",1913296891),doc,new cljs.core.Keyword(null,"protocol-symbol","protocol-symbol",1279552198),true);
var ns_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
var fqn = ((function (p,vec__20663,doc,methods$,psym__$1,ns_name){
return (function (n){
return cljs.core.symbol.call(null,[cljs.core.str(ns_name),cljs.core.str("."),cljs.core.str(n)].join(''));
});})(p,vec__20663,doc,methods$,psym__$1,ns_name))
;
var prefix = cljs.core$macros.protocol_prefix.call(null,p);
var _ = (function (){var seq__20666 = cljs.core.seq.call(null,methods$);
var chunk__20667 = null;
var count__20668 = (0);
var i__20669 = (0);
while(true){
if((i__20669 < count__20668)){
var vec__20670 = cljs.core._nth.call(null,chunk__20667,i__20669);
var seq__20671 = cljs.core.seq.call(null,vec__20670);
var first__20672 = cljs.core.first.call(null,seq__20671);
var seq__20671__$1 = cljs.core.next.call(null,seq__20671);
var mname = first__20672;
var arities = seq__20671__$1;
if(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(0),null], null), null),cljs.core.map.call(null,cljs.core.count,cljs.core.filter.call(null,cljs.core.vector_QMARK_,arities))))){
throw (new Error([cljs.core.str("Invalid protocol, "),cljs.core.str(psym__$1),cljs.core.str(" defines method "),cljs.core.str(mname),cljs.core.str(" with arity 0")].join('')));
} else {
}

var G__20687 = seq__20666;
var G__20688 = chunk__20667;
var G__20689 = count__20668;
var G__20690 = (i__20669 + (1));
seq__20666 = G__20687;
chunk__20667 = G__20688;
count__20668 = G__20689;
i__20669 = G__20690;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__20666);
if(temp__4657__auto__){
var seq__20666__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20666__$1)){
var c__10059__auto__ = cljs.core.chunk_first.call(null,seq__20666__$1);
var G__20691 = cljs.core.chunk_rest.call(null,seq__20666__$1);
var G__20692 = c__10059__auto__;
var G__20693 = cljs.core.count.call(null,c__10059__auto__);
var G__20694 = (0);
seq__20666 = G__20691;
chunk__20667 = G__20692;
count__20668 = G__20693;
i__20669 = G__20694;
continue;
} else {
var vec__20673 = cljs.core.first.call(null,seq__20666__$1);
var seq__20674 = cljs.core.seq.call(null,vec__20673);
var first__20675 = cljs.core.first.call(null,seq__20674);
var seq__20674__$1 = cljs.core.next.call(null,seq__20674);
var mname = first__20675;
var arities = seq__20674__$1;
if(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(0),null], null), null),cljs.core.map.call(null,cljs.core.count,cljs.core.filter.call(null,cljs.core.vector_QMARK_,arities))))){
throw (new Error([cljs.core.str("Invalid protocol, "),cljs.core.str(psym__$1),cljs.core.str(" defines method "),cljs.core.str(mname),cljs.core.str(" with arity 0")].join('')));
} else {
}

var G__20695 = cljs.core.next.call(null,seq__20666__$1);
var G__20696 = null;
var G__20697 = (0);
var G__20698 = (0);
seq__20666 = G__20695;
chunk__20667 = G__20696;
count__20668 = G__20697;
i__20669 = G__20698;
continue;
}
} else {
return null;
}
}
break;
}
})();
var expand_sig = ((function (p,vec__20663,doc,methods$,psym__$1,ns_name,fqn,prefix,_){
return (function (fname,slot,sig){
var sig__$1 = ((!(cljs.core.every_QMARK_.call(null,cljs.core.symbol_QMARK_,sig)))?cljs.core.mapv.call(null,((function (p,vec__20663,doc,methods$,psym__$1,ns_name,fqn,prefix,_){
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
});})(p,vec__20663,doc,methods$,psym__$1,ns_name,fqn,prefix,_))
,sig):sig);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__10082__auto__ = sig__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__10082__auto__ = cljs.core.first.call(null,sig__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__10082__auto__ = cljs.core.first.call(null,sig__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.symbol.call(null,[cljs.core.str("-"),cljs.core.str(slot)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__10082__auto__ = cljs.core.first.call(null,sig__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = slot;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),sig__$1)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__10082__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__20657__auto__","x__20657__auto__",-975290166,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__10082__auto__ = cljs.core.first.call(null,sig__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__10082__auto__ = cljs.core.first.call(null,sig__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__20658__auto__","m__20658__auto__",1022453788,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aget","cljs.core$macros/aget",1976136178,null)),(function (){var x__10082__auto__ = fqn.call(null,fname);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog","typeOf","goog/typeOf",539097255,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__20657__auto__","x__20657__auto__",-975290166,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__20658__auto__","m__20658__auto__",1022453788,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__20658__auto__","m__20658__auto__",1022453788,null)),sig__$1)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__10082__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__20658__auto__","m__20658__auto__",1022453788,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aget","cljs.core$macros/aget",1976136178,null)),(function (){var x__10082__auto__ = fqn.call(null,fname);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,"_"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__20658__auto__","m__20658__auto__",1022453788,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__20658__auto__","m__20658__auto__",1022453788,null)),sig__$1)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","missing-protocol","cljs.core/missing-protocol",531539732,null)),(function (){var x__10082__auto__ = [cljs.core.str(psym__$1),cljs.core.str("."),cljs.core.str(fname)].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.first.call(null,sig__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
});})(p,vec__20663,doc,methods$,psym__$1,ns_name,fqn,prefix,_))
;
var psym__$2 = cljs.core.vary_meta.call(null,cljs.core.vary_meta.call(null,psym__$1,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516)], null),cljs.core.conj,"@interface"),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"protocol-info","protocol-info",1471745843),new cljs.core.Keyword(null,"methods","methods",453930866)], null),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (p,vec__20663,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig){
return (function (p__20676){
var vec__20677 = p__20676;
var seq__20678 = cljs.core.seq.call(null,vec__20677);
var first__20679 = cljs.core.first.call(null,seq__20678);
var seq__20678__$1 = cljs.core.next.call(null,seq__20678);
var fname = first__20679;
var sigs = seq__20678__$1;
var doc__$1 = (function (){var doc__$1 = cljs.core.last.call(null,sigs);
if(typeof doc__$1 === 'string'){
return doc__$1;
} else {
return null;
}
})();
var sigs__$1 = cljs.core.take_while.call(null,cljs.core.vector_QMARK_,sigs);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vary_meta.call(null,fname,cljs.core.assoc,new cljs.core.Keyword(null,"doc","doc",1913296891),doc__$1),cljs.core.vec.call(null,sigs__$1)], null);
});})(p,vec__20663,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig))
,methods$)));
var method = ((function (p,vec__20663,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2){
return (function (p__20680){
var vec__20681 = p__20680;
var seq__20682 = cljs.core.seq.call(null,vec__20681);
var first__20683 = cljs.core.first.call(null,seq__20682);
var seq__20682__$1 = cljs.core.next.call(null,seq__20682);
var fname = first__20683;
var sigs = seq__20682__$1;
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null)),(function (){var x__10082__auto__ = fname__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),cljs.core.map.call(null,((function (doc__$1,sigs__$1,amp,slot,fname__$1,vec__20681,seq__20682,first__20683,seq__20682__$1,fname,sigs,p,vec__20663,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2){
return (function (sig){
return expand_sig.call(null,fname__$1,cljs.core.symbol.call(null,[cljs.core.str(slot),cljs.core.str("$arity$"),cljs.core.str(cljs.core.count.call(null,sig))].join('')),sig);
});})(doc__$1,sigs__$1,amp,slot,fname__$1,vec__20681,seq__20682,first__20683,seq__20682__$1,fname,sigs,p,vec__20663,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2))
,sigs__$1))));
});})(p,vec__20663,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"*unchecked-if*","*unchecked-if*",1542408350,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"def","def",597100991,null)),(function (){var x__10082__auto__ = psym__$2;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"function(){}"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),cljs.core.map.call(null,method,methods$),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"*unchecked-if*","*unchecked-if*",1542408350,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
});

cljs.core$macros.defprotocol.cljs$lang$maxFixedArity = (3);

cljs.core$macros.defprotocol.cljs$lang$applyTo = (function (seq20659){
var G__20660 = cljs.core.first.call(null,seq20659);
var seq20659__$1 = cljs.core.next.call(null,seq20659);
var G__20661 = cljs.core.first.call(null,seq20659__$1);
var seq20659__$2 = cljs.core.next.call(null,seq20659__$1);
var G__20662 = cljs.core.first.call(null,seq20659__$2);
var seq20659__$3 = cljs.core.next.call(null,seq20659__$2);
return cljs.core$macros.defprotocol.cljs$core$IFn$_invoke$arity$variadic(G__20660,G__20661,G__20662,seq20659__$3);
});


cljs.core$macros.defprotocol.cljs$lang$macro = true;
/**
 * EXPERIMENTAL
 */
cljs.core$macros.implements_QMARK_ = (function cljs$core$macros$implements_QMARK_(_AMPERSAND_form,_AMPERSAND_env,psym,x){
var p = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,_AMPERSAND_env,new cljs.core.Keyword(null,"locals","locals",535295783)),psym));
var prefix = cljs.core$macros.protocol_prefix.call(null,p);
var xsym = cljs.core$macros.bool_expr.call(null,cljs.core.gensym.call(null));
var vec__20702 = cljs.core$macros.fast_path_protocols.call(null,p);
var part = cljs.core.nth.call(null,vec__20702,(0),null);
var bit = cljs.core.nth.call(null,vec__20702,(1),null);
var msym = cljs.core.symbol.call(null,[cljs.core.str("-cljs$lang$protocol_mask$partition"),cljs.core.str(part),cljs.core.str("$")].join(''));
if(!((x instanceof cljs.core.Symbol))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__10082__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__10082__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__10082__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","or","cljs.core$macros/or",1346243648,null)),(function (){var x__10082__auto__ = (cljs.core.truth_(bit)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__10082__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = msym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = bit;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})()))):false);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","identical?","cljs.core$macros/identical?",815580547,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PROTOCOL_SENTINEL","cljs.core/PROTOCOL_SENTINEL",210209696,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__10082__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.symbol.call(null,[cljs.core.str("-"),cljs.core.str(prefix)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__10082__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","or","cljs.core$macros/or",1346243648,null)),(function (){var x__10082__auto__ = (cljs.core.truth_(bit)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__10082__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = msym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = bit;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})()))):false);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","identical?","cljs.core$macros/identical?",815580547,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PROTOCOL_SENTINEL","cljs.core/PROTOCOL_SENTINEL",210209696,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__10082__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.symbol.call(null,[cljs.core.str("-"),cljs.core.str(prefix)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
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
var vec__20708 = cljs.core$macros.fast_path_protocols.call(null,p);
var part = cljs.core.nth.call(null,vec__20708,(0),null);
var bit = cljs.core.nth.call(null,vec__20708,(1),null);
var msym = cljs.core.symbol.call(null,[cljs.core.str("-cljs$lang$protocol_mask$partition"),cljs.core.str(part),cljs.core.str("$")].join(''));
if(!((x instanceof cljs.core.Symbol))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__10082__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__10082__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__10082__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","or","cljs.core$macros/or",1346243648,null)),(function (){var x__10082__auto__ = (cljs.core.truth_(bit)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__10082__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = msym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = bit;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})()))):false);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","identical?","cljs.core$macros/identical?",815580547,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PROTOCOL_SENTINEL","cljs.core/PROTOCOL_SENTINEL",210209696,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__10082__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.symbol.call(null,[cljs.core.str("-"),cljs.core.str(prefix)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","coercive-not","cljs.core$macros/coercive-not",115999987,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__10082__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = msym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","native-satisfies?","cljs.core/native-satisfies?",1482305036,null)),(function (){var x__10082__auto__ = psym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","native-satisfies?","cljs.core/native-satisfies?",1482305036,null)),(function (){var x__10082__auto__ = psym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__10082__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","or","cljs.core$macros/or",1346243648,null)),(function (){var x__10082__auto__ = (cljs.core.truth_(bit)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__10082__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = msym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = bit;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})()))):false);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","identical?","cljs.core$macros/identical?",815580547,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PROTOCOL_SENTINEL","cljs.core/PROTOCOL_SENTINEL",210209696,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__10082__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.symbol.call(null,[cljs.core.str("-"),cljs.core.str(prefix)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","coercive-not","cljs.core$macros/coercive-not",115999987,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__10082__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = msym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","native-satisfies?","cljs.core/native-satisfies?",1482305036,null)),(function (){var x__10082__auto__ = psym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","native-satisfies?","cljs.core/native-satisfies?",1482305036,null)),(function (){var x__10082__auto__ = psym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
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
var args__10360__auto__ = [];
var len__10353__auto___20714 = arguments.length;
var i__10354__auto___20715 = (0);
while(true){
if((i__10354__auto___20715 < len__10353__auto___20714)){
args__10360__auto__.push((arguments[i__10354__auto___20715]));

var G__20716 = (i__10354__auto___20715 + (1));
i__10354__auto___20715 = G__20716;
continue;
} else {
}
break;
}

var argseq__10361__auto__ = ((((2) < args__10360__auto__.length))?(new cljs.core.IndexedSeq(args__10360__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.lazy_seq.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10361__auto__);
});

cljs.core$macros.lazy_seq.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","LazySeq","cljs.core/LazySeq",1986389673,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__10082__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
});

cljs.core$macros.lazy_seq.cljs$lang$maxFixedArity = (2);

cljs.core$macros.lazy_seq.cljs$lang$applyTo = (function (seq20711){
var G__20712 = cljs.core.first.call(null,seq20711);
var seq20711__$1 = cljs.core.next.call(null,seq20711);
var G__20713 = cljs.core.first.call(null,seq20711__$1);
var seq20711__$2 = cljs.core.next.call(null,seq20711__$1);
return cljs.core$macros.lazy_seq.cljs$core$IFn$_invoke$arity$variadic(G__20712,G__20713,seq20711__$2);
});


cljs.core$macros.lazy_seq.cljs$lang$macro = true;
/**
 * Takes a body of expressions and yields a Delay object that will
 *   invoke the body only the first time it is forced (with force or deref/@), and
 *   will cache the result and return it on all subsequent force
 *   calls.
 */
cljs.core$macros.delay = (function cljs$core$macros$delay(var_args){
var args__10360__auto__ = [];
var len__10353__auto___20720 = arguments.length;
var i__10354__auto___20721 = (0);
while(true){
if((i__10354__auto___20721 < len__10353__auto___20720)){
args__10360__auto__.push((arguments[i__10354__auto___20721]));

var G__20722 = (i__10354__auto___20721 + (1));
i__10354__auto___20721 = G__20722;
continue;
} else {
}
break;
}

var argseq__10361__auto__ = ((((2) < args__10360__auto__.length))?(new cljs.core.IndexedSeq(args__10360__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.delay.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10361__auto__);
});

cljs.core$macros.delay.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","Delay","cljs.core/Delay",-21574999,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__10082__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
});

cljs.core$macros.delay.cljs$lang$maxFixedArity = (2);

cljs.core$macros.delay.cljs$lang$applyTo = (function (seq20717){
var G__20718 = cljs.core.first.call(null,seq20717);
var seq20717__$1 = cljs.core.next.call(null,seq20717);
var G__20719 = cljs.core.first.call(null,seq20717__$1);
var seq20717__$2 = cljs.core.next.call(null,seq20717__$1);
return cljs.core$macros.delay.cljs$core$IFn$_invoke$arity$variadic(G__20718,G__20719,seq20717__$2);
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
var args__10360__auto__ = [];
var len__10353__auto___20731 = arguments.length;
var i__10354__auto___20732 = (0);
while(true){
if((i__10354__auto___20732 < len__10353__auto___20731)){
args__10360__auto__.push((arguments[i__10354__auto___20732]));

var G__20733 = (i__10354__auto___20732 + (1));
i__10354__auto___20732 = G__20733;
continue;
} else {
}
break;
}

var argseq__10361__auto__ = ((((3) < args__10360__auto__.length))?(new cljs.core.IndexedSeq(args__10360__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.with_redefs.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10361__auto__);
});

cljs.core$macros.with_redefs.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
var names = cljs.core.take_nth.call(null,(2),bindings);
var vals = cljs.core.take_nth.call(null,(2),cljs.core.drop.call(null,(1),bindings));
var tempnames = cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.gensym,cljs.core.name),names);
var binds = cljs.core.map.call(null,cljs.core.vector,names,vals);
var resets = cljs.core.reverse.call(null,cljs.core.map.call(null,cljs.core.vector,names,tempnames));
var bind_value = ((function (names,vals,tempnames,binds,resets){
return (function (p__20727){
var vec__20728 = p__20727;
var k = cljs.core.nth.call(null,vec__20728,(0),null);
var v = cljs.core.nth.call(null,vec__20728,(1),null);
return cljs.core._conj.call(null,(function (){var x__10082__auto__ = k;
return cljs.core._conj.call(null,(function (){var x__10082__auto____$1 = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto____$1);
})(),x__10082__auto__);
})(),new cljs.core.Symbol(null,"set!","set!",250714521,null));
});})(names,vals,tempnames,binds,resets))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__10082__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.interleave.call(null,tempnames,names)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),cljs.core.map.call(null,bind_value,binds),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"try","try",-1273693247,null)),body,(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"finally","finally",-1065347064,null)),cljs.core.map.call(null,bind_value,resets))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
});

cljs.core$macros.with_redefs.cljs$lang$maxFixedArity = (3);

cljs.core$macros.with_redefs.cljs$lang$applyTo = (function (seq20723){
var G__20724 = cljs.core.first.call(null,seq20723);
var seq20723__$1 = cljs.core.next.call(null,seq20723);
var G__20725 = cljs.core.first.call(null,seq20723__$1);
var seq20723__$2 = cljs.core.next.call(null,seq20723__$1);
var G__20726 = cljs.core.first.call(null,seq20723__$2);
var seq20723__$3 = cljs.core.next.call(null,seq20723__$2);
return cljs.core$macros.with_redefs.cljs$core$IFn$_invoke$arity$variadic(G__20724,G__20725,G__20726,seq20723__$3);
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
var args__10360__auto__ = [];
var len__10353__auto___20738 = arguments.length;
var i__10354__auto___20739 = (0);
while(true){
if((i__10354__auto___20739 < len__10353__auto___20738)){
args__10360__auto__.push((arguments[i__10354__auto___20739]));

var G__20740 = (i__10354__auto___20739 + (1));
i__10354__auto___20739 = G__20740;
continue;
} else {
}
break;
}

var argseq__10361__auto__ = ((((3) < args__10360__auto__.length))?(new cljs.core.IndexedSeq(args__10360__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.binding.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10361__auto__);
});

cljs.core$macros.binding.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
var names = cljs.core.take_nth.call(null,(2),bindings);
cljs.analyzer.confirm_bindings.call(null,_AMPERSAND_env,names);

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","with-redefs","cljs.core$macros/with-redefs",1489217801,null)),(function (){var x__10082__auto__ = bindings;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),body)));
});

cljs.core$macros.binding.cljs$lang$maxFixedArity = (3);

cljs.core$macros.binding.cljs$lang$applyTo = (function (seq20734){
var G__20735 = cljs.core.first.call(null,seq20734);
var seq20734__$1 = cljs.core.next.call(null,seq20734);
var G__20736 = cljs.core.first.call(null,seq20734__$1);
var seq20734__$2 = cljs.core.next.call(null,seq20734__$1);
var G__20737 = cljs.core.first.call(null,seq20734__$2);
var seq20734__$3 = cljs.core.next.call(null,seq20734__$2);
return cljs.core$macros.binding.cljs$core$IFn$_invoke$arity$variadic(G__20735,G__20736,G__20737,seq20734__$3);
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
var args__10360__auto__ = [];
var len__10353__auto___20759 = arguments.length;
var i__10354__auto___20760 = (0);
while(true){
if((i__10354__auto___20760 < len__10353__auto___20759)){
args__10360__auto__.push((arguments[i__10354__auto___20760]));

var G__20761 = (i__10354__auto___20760 + (1));
i__10354__auto___20760 = G__20761;
continue;
} else {
}
break;
}

var argseq__10361__auto__ = ((((4) < args__10360__auto__.length))?(new cljs.core.IndexedSeq(args__10360__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.condp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__10361__auto__);
});

cljs.core$macros.condp.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,pred,expr,clauses){
var gpred = cljs.core.gensym.call(null,"pred__");
var gexpr = cljs.core.gensym.call(null,"expr__");
var emit = ((function (gpred,gexpr){
return (function cljs$core$macros$emit(pred__$1,expr__$1,args){
var vec__20753 = cljs.core.split_at.call(null,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,">>",">>",-277509267),cljs.core.second.call(null,args)))?(3):(2)),args);
var vec__20756 = cljs.core.nth.call(null,vec__20753,(0),null);
var a = cljs.core.nth.call(null,vec__20756,(0),null);
var b = cljs.core.nth.call(null,vec__20756,(1),null);
var c = cljs.core.nth.call(null,vec__20756,(2),null);
var clause = vec__20756;
var more = cljs.core.nth.call(null,vec__20753,(1),null);
var n = cljs.core.count.call(null,clause);
if(cljs.core._EQ_.call(null,(0),n)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"No matching clause: "),(function (){var x__10082__auto__ = expr__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
} else {
if(cljs.core._EQ_.call(null,(1),n)){
return a;
} else {
if(cljs.core._EQ_.call(null,(2),n)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__10082__auto__ = pred__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = a;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = expr__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = b;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs$core$macros$emit.call(null,pred__$1,expr__$1,more);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-let","cljs.core$macros/if-let",1291543946,null)),(function (){var x__10082__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"p__20741__auto__","p__20741__auto__",338552281,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__10082__auto__ = pred__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = a;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = expr__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__10082__auto__ = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"p__20741__auto__","p__20741__auto__",338552281,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs$core$macros$emit.call(null,pred__$1,expr__$1,more);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));

}
}
}
});})(gpred,gexpr))
;
var gres = cljs.core.gensym.call(null,"res__");
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__10082__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__10082__auto__ = gpred;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = pred;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = gexpr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = emit.call(null,gpred,gexpr,clauses);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
});

cljs.core$macros.condp.cljs$lang$maxFixedArity = (4);

cljs.core$macros.condp.cljs$lang$applyTo = (function (seq20742){
var G__20743 = cljs.core.first.call(null,seq20742);
var seq20742__$1 = cljs.core.next.call(null,seq20742);
var G__20744 = cljs.core.first.call(null,seq20742__$1);
var seq20742__$2 = cljs.core.next.call(null,seq20742__$1);
var G__20745 = cljs.core.first.call(null,seq20742__$2);
var seq20742__$3 = cljs.core.next.call(null,seq20742__$2);
var G__20746 = cljs.core.first.call(null,seq20742__$3);
var seq20742__$4 = cljs.core.next.call(null,seq20742__$3);
return cljs.core$macros.condp.cljs$core$IFn$_invoke$arity$variadic(G__20743,G__20744,G__20745,G__20746,seq20742__$4);
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
var m = (function (){var and__9233__auto__ = cljs.core.list_QMARK_.call(null,x);
if(and__9233__auto__){
return cljs.analyzer.resolve_var.call(null,env,cljs.core.last.call(null,x));
} else {
return and__9233__auto__;
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
var args__10360__auto__ = [];
var len__10353__auto___20782 = arguments.length;
var i__10354__auto___20783 = (0);
while(true){
if((i__10354__auto___20783 < len__10353__auto___20782)){
args__10360__auto__.push((arguments[i__10354__auto___20783]));

var G__20784 = (i__10354__auto___20783 + (1));
i__10354__auto___20783 = G__20784;
continue;
} else {
}
break;
}

var argseq__10361__auto__ = ((((3) < args__10360__auto__.length))?(new cljs.core.IndexedSeq(args__10360__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.case$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10361__auto__);
});

cljs.core$macros.case$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,e,clauses){
var default$ = ((cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,clauses)))?cljs.core.last.call(null,clauses):cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"No matching clause: "),(function (){var x__10082__auto__ = e;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})()))));
var env = _AMPERSAND_env;
var pairs = cljs.core.reduce.call(null,((function (default$,env){
return (function (m,p__20770){
var vec__20771 = p__20770;
var test = cljs.core.nth.call(null,vec__20771,(0),null);
var expr = cljs.core.nth.call(null,vec__20771,(1),null);
if(cljs.core.seq_QMARK_.call(null,test)){
return cljs.core.reduce.call(null,((function (vec__20771,test,expr,default$,env){
return (function (m__$1,test__$1){
var test__$2 = (((test__$1 instanceof cljs.core.Symbol))?cljs.core._conj.call(null,(function (){var x__10082__auto__ = test__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),new cljs.core.Symbol(null,"quote","quote",1377916282,null)):test__$1);
return cljs.core$macros.assoc_test.call(null,m__$1,test__$2,expr,env);
});})(vec__20771,test,expr,default$,env))
,m,test);
} else {
if((test instanceof cljs.core.Symbol)){
return cljs.core$macros.assoc_test.call(null,m,cljs.core._conj.call(null,(function (){var x__10082__auto__ = test;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
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
return (function (p1__20762_SHARP_){
return cljs.core$macros.const_QMARK_.call(null,env,p1__20762_SHARP_);
});})(default$,env,pairs,esym,tests))
),tests)){
var no_default = ((cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,clauses)))?cljs.core.butlast.call(null,clauses):clauses);
var tests__$1 = cljs.core.mapv.call(null,((function (no_default,default$,env,pairs,esym,tests){
return (function (p1__20763_SHARP_){
if(cljs.core.seq_QMARK_.call(null,p1__20763_SHARP_)){
return cljs.core.vec.call(null,p1__20763_SHARP_);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20763_SHARP_], null);
}
});})(no_default,default$,env,pairs,esym,tests))
,cljs.core.take_nth.call(null,(2),no_default));
var thens = cljs.core.vec.call(null,cljs.core.take_nth.call(null,(2),cljs.core.drop.call(null,(1),no_default)));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__10082__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__10082__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = e;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"case*","case*",-1938255072,null)),(function (){var x__10082__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = tests__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = thens;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = default$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
} else {
if(cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,tests)){
var tests__$1 = cljs.core.mapv.call(null,((function (default$,env,pairs,esym,tests){
return (function (p1__20765_SHARP_){
if(cljs.core.seq_QMARK_.call(null,p1__20765_SHARP_)){
return cljs.core.vec.call(null,p1__20765_SHARP_);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20765_SHARP_], null);
}
});})(default$,env,pairs,esym,tests))
,cljs.core.vec.call(null,cljs.core.map.call(null,((function (default$,env,pairs,esym,tests){
return (function (p1__20764_SHARP_){
return [cljs.core.str(p1__20764_SHARP_)].join('').substring((1));
});})(default$,env,pairs,esym,tests))
,tests)));
var thens = cljs.core.vec.call(null,cljs.core.vals.call(null,pairs));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__10082__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__10082__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","keyword?","cljs.core$macros/keyword?",1362730141,null)),(function (){var x__10082__auto__ = e;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-fqn",".-fqn",1246113027,null)),(function (){var x__10082__auto__ = e;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"case*","case*",-1938255072,null)),(function (){var x__10082__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = tests__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = thens;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = default$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__10082__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__10082__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = e;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","cond","cljs.core$macros/cond",1626318471,null)),cljs.core.mapcat.call(null,((function (default$,env,pairs,esym,tests){
return (function (p__20778){
var vec__20779 = p__20778;
var m = cljs.core.nth.call(null,vec__20779,(0),null);
var c = cljs.core.nth.call(null,vec__20779,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null)),(function (){var x__10082__auto__ = m;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
});})(default$,env,pairs,esym,tests))
,pairs),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"else","else",-1508377146)),(function (){var x__10082__auto__ = default$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));

}
}
});

cljs.core$macros.case$.cljs$lang$maxFixedArity = (3);

cljs.core$macros.case$.cljs$lang$applyTo = (function (seq20766){
var G__20767 = cljs.core.first.call(null,seq20766);
var seq20766__$1 = cljs.core.next.call(null,seq20766);
var G__20768 = cljs.core.first.call(null,seq20766__$1);
var seq20766__$2 = cljs.core.next.call(null,seq20766__$1);
var G__20769 = cljs.core.first.call(null,seq20766__$2);
var seq20766__$3 = cljs.core.next.call(null,seq20766__$2);
return cljs.core$macros.case$.cljs$core$IFn$_invoke$arity$variadic(G__20767,G__20768,G__20769,seq20766__$3);
});


cljs.core$macros.case$.cljs$lang$macro = true;
/**
 * Evaluates expr and throws an exception if it does not evaluate to
 *   logical true.
 */
cljs.core$macros.assert = (function cljs$core$macros$assert(var_args){
var args20785 = [];
var len__10353__auto___20788 = arguments.length;
var i__10354__auto___20789 = (0);
while(true){
if((i__10354__auto___20789 < len__10353__auto___20788)){
args20785.push((arguments[i__10354__auto___20789]));

var G__20790 = (i__10354__auto___20789 + (1));
i__10354__auto___20789 = G__20790;
continue;
} else {
}
break;
}

var G__20787 = args20785.length;
switch (G__20787) {
case 3:
return cljs.core$macros.assert.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.assert.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str((args20785.length - (2)))].join('')));

}
});

cljs.core$macros.assert.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
if(cljs.core.truth_(cljs.core._STAR_assert_STAR_)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-not","cljs.core$macros/when-not",-764302244,null)),(function (){var x__10082__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__10082__auto__ = [cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,x))].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
} else {
return null;
}
});

cljs.core$macros.assert.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,message){
if(cljs.core.truth_(cljs.core._STAR_assert_STAR_)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-not","cljs.core$macros/when-not",-764302244,null)),(function (){var x__10082__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"Assert failed: "),(function (){var x__10082__auto__ = message;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,"\n"),(function (){var x__10082__auto__ = cljs.core.pr_str.call(null,x);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
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
return cljs.core.reduce.call(null,(function (groups,p__20878){
var vec__20879 = p__20878;
var k = cljs.core.nth.call(null,vec__20879,(0),null);
var v = cljs.core.nth.call(null,vec__20879,(1),null);
if((k instanceof cljs.core.Keyword)){
return cljs.core.conj.call(null,cljs.core.pop.call(null,groups),cljs.core.conj.call(null,cljs.core.peek.call(null,groups),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null)));
} else {
return cljs.core.conj.call(null,groups,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
}
}),cljs.core.PersistentVector.EMPTY,cljs.core.partition.call(null,(2),seq_exprs__$1));
});
var err = ((function (to_groups){
return (function() { 
var G__20959__delegate = function (msg){
throw cljs.core.ex_info.call(null,cljs.core.apply.call(null,cljs.core.str,msg),cljs.core.PersistentArrayMap.EMPTY);
};
var G__20959 = function (var_args){
var msg = null;
if (arguments.length > 0) {
var G__20960__i = 0, G__20960__a = new Array(arguments.length -  0);
while (G__20960__i < G__20960__a.length) {G__20960__a[G__20960__i] = arguments[G__20960__i + 0]; ++G__20960__i;}
  msg = new cljs.core.IndexedSeq(G__20960__a,0);
} 
return G__20959__delegate.call(this,msg);};
G__20959.cljs$lang$maxFixedArity = 0;
G__20959.cljs$lang$applyTo = (function (arglist__20961){
var msg = cljs.core.seq(arglist__20961);
return G__20959__delegate(msg);
});
G__20959.cljs$core$IFn$_invoke$arity$variadic = G__20959__delegate;
return G__20959;
})()
;})(to_groups))
;
var emit_bind = ((function (to_groups,err){
return (function cljs$core$macros$for_$_emit_bind(p__20882){
var vec__20921 = p__20882;
var seq__20922 = cljs.core.seq.call(null,vec__20921);
var first__20923 = cljs.core.first.call(null,seq__20922);
var seq__20922__$1 = cljs.core.next.call(null,seq__20922);
var vec__20924 = first__20923;
var seq__20925 = cljs.core.seq.call(null,vec__20924);
var first__20926 = cljs.core.first.call(null,seq__20925);
var seq__20925__$1 = cljs.core.next.call(null,seq__20925);
var bind = first__20926;
var first__20926__$1 = cljs.core.first.call(null,seq__20925__$1);
var seq__20925__$2 = cljs.core.next.call(null,seq__20925__$1);
var expr = first__20926__$1;
var mod_pairs = seq__20925__$2;
var vec__20927 = seq__20922__$1;
var vec__20930 = cljs.core.nth.call(null,vec__20927,(0),null);
var _ = cljs.core.nth.call(null,vec__20930,(0),null);
var next_expr = cljs.core.nth.call(null,vec__20930,(1),null);
var next_groups = vec__20927;
var giter = cljs.core.gensym.call(null,"iter__");
var gxs = cljs.core.gensym.call(null,"s__");
var do_mod = ((function (giter,gxs,vec__20921,seq__20922,first__20923,seq__20922__$1,vec__20924,seq__20925,first__20926,seq__20925__$1,bind,first__20926__$1,seq__20925__$2,expr,mod_pairs,vec__20927,vec__20930,_,next_expr,next_groups,to_groups,err){
return (function cljs$core$macros$for_$_emit_bind_$_do_mod(p__20933){
var vec__20940 = p__20933;
var seq__20941 = cljs.core.seq.call(null,vec__20940);
var first__20942 = cljs.core.first.call(null,seq__20941);
var seq__20941__$1 = cljs.core.next.call(null,seq__20941);
var vec__20943 = first__20942;
var k = cljs.core.nth.call(null,vec__20943,(0),null);
var v = cljs.core.nth.call(null,vec__20943,(1),null);
var pair = vec__20943;
var etc = seq__20941__$1;
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"let","let",-1282412701))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__10082__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs$core$macros$for_$_emit_bind_$_do_mod.call(null,etc);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
} else {
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"while","while",963117786))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__10082__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs$core$macros$for_$_emit_bind_$_do_mod.call(null,etc);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
} else {
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"when","when",-576417306))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__10082__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs$core$macros$for_$_emit_bind_$_do_mod.call(null,etc);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","rest","cljs.core/rest",-285075455,null)),(function (){var x__10082__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
} else {
if((k instanceof cljs.core.Keyword)){
return err.call(null,"Invalid 'for' keyword ",k);
} else {
if(next_groups){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__10082__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"iterys__20792__auto__","iterys__20792__auto__",-541579403,null)),(function (){var x__10082__auto__ = cljs$core$macros$for_$_emit_bind.call(null,next_groups);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"fs__20793__auto__","fs__20793__auto__",-1577055109,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"iterys__20792__auto__","iterys__20792__auto__",-541579403,null)),(function (){var x__10082__auto__ = next_expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"fs__20793__auto__","fs__20793__auto__",-1577055109,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"fs__20793__auto__","fs__20793__auto__",-1577055109,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__10082__auto__ = giter;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","rest","cljs.core/rest",-285075455,null)),(function (){var x__10082__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","rest","cljs.core/rest",-285075455,null)),(function (){var x__10082__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","cons","cljs.core/cons",96507417,null)),(function (){var x__10082__auto__ = body_expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__10082__auto__ = giter;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","rest","cljs.core/rest",-285075455,null)),(function (){var x__10082__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));

}
}
}
}
}
});})(giter,gxs,vec__20921,seq__20922,first__20923,seq__20922__$1,vec__20924,seq__20925,first__20926,seq__20925__$1,bind,first__20926__$1,seq__20925__$2,expr,mod_pairs,vec__20927,vec__20930,_,next_expr,next_groups,to_groups,err))
;
if(next_groups){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__10082__auto__ = giter;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__10082__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","lazy-seq","cljs.core$macros/lazy-seq",806482650,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__10082__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__10082__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-first","cljs.core$macros/when-first",-840670160,null)),(function (){var x__10082__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__10082__auto__ = bind;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = do_mod.call(null,mod_pairs);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
} else {
var gi = cljs.core.gensym.call(null,"i__");
var gb = cljs.core.gensym.call(null,"b__");
var do_cmod = ((function (gi,gb,giter,gxs,do_mod,vec__20921,seq__20922,first__20923,seq__20922__$1,vec__20924,seq__20925,first__20926,seq__20925__$1,bind,first__20926__$1,seq__20925__$2,expr,mod_pairs,vec__20927,vec__20930,_,next_expr,next_groups,to_groups,err){
return (function cljs$core$macros$for_$_emit_bind_$_do_cmod(p__20946){
var vec__20953 = p__20946;
var seq__20954 = cljs.core.seq.call(null,vec__20953);
var first__20955 = cljs.core.first.call(null,seq__20954);
var seq__20954__$1 = cljs.core.next.call(null,seq__20954);
var vec__20956 = first__20955;
var k = cljs.core.nth.call(null,vec__20956,(0),null);
var v = cljs.core.nth.call(null,vec__20956,(1),null);
var pair = vec__20956;
var etc = seq__20954__$1;
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"let","let",-1282412701))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__10082__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs$core$macros$for_$_emit_bind_$_do_cmod.call(null,etc);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
} else {
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"while","while",963117786))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__10082__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs$core$macros$for_$_emit_bind_$_do_cmod.call(null,etc);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
} else {
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"when","when",-576417306))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__10082__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs$core$macros$for_$_emit_bind_$_do_cmod.call(null,etc);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unchecked-inc","cljs.core$macros/unchecked-inc",-1615365330,null)),(function (){var x__10082__auto__ = gi;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
} else {
if((k instanceof cljs.core.Keyword)){
return err.call(null,"Invalid 'for' keyword ",k);
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-append","cljs.core/chunk-append",-243671470,null)),(function (){var x__10082__auto__ = gb;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = body_expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unchecked-inc","cljs.core$macros/unchecked-inc",-1615365330,null)),(function (){var x__10082__auto__ = gi;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));

}
}
}
}
});})(gi,gb,giter,gxs,do_mod,vec__20921,seq__20922,first__20923,seq__20922__$1,vec__20924,seq__20925,first__20926,seq__20925__$1,bind,first__20926__$1,seq__20925__$2,expr,mod_pairs,vec__20927,vec__20930,_,next_expr,next_groups,to_groups,err))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__10082__auto__ = giter;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__10082__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","lazy-seq","cljs.core$macros/lazy-seq",806482650,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__10082__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__10082__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-let","cljs.core$macros/when-let",-2004472648,null)),(function (){var x__10082__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__10082__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__10082__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunked-seq?","cljs.core/chunked-seq?",-712922369,null)),(function (){var x__10082__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__10082__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__20794__auto__","c__20794__auto__",192922946,null)),(function (){var x__10082__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-first","cljs.core/chunk-first",-1157877305,null)),(function (){var x__10082__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})()))),cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"/home/ru/clojure/flights-pro/resources/public/js/out/cljs/core.cljc"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2326),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj.call(null,cljs.core.List.EMPTY,52),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2326),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj.call(null,cljs.core.List.EMPTY,82),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"tag","tag",-1290361223)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not-native","cljs.core/not-native",-1716909265,null)))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"size__20795__auto__","size__20795__auto__",-1139108872,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__20794__auto__","c__20794__auto__",192922946,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = gb;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-buffer","cljs.core/chunk-buffer",14093626,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"size__20795__auto__","size__20795__auto__",-1139108872,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","coercive-boolean","cljs.core$macros/coercive-boolean",-450758280,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__10082__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__10082__auto__ = gi;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__10082__auto__ = gi;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"size__20795__auto__","size__20795__auto__",-1139108872,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__10082__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__10082__auto__ = bind;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-nth","cljs.core/-nth",504234802,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__20794__auto__","c__20794__auto__",192922946,null)),(function (){var x__10082__auto__ = gi;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = do_cmod.call(null,mod_pairs);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-cons","cljs.core/chunk-cons",-250075688,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk","cljs.core/chunk",847936424,null)),(function (){var x__10082__auto__ = gb;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__10082__auto__ = giter;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-rest","cljs.core/chunk-rest",-398161143,null)),(function (){var x__10082__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-cons","cljs.core/chunk-cons",-250075688,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk","cljs.core/chunk",847936424,null)),(function (){var x__10082__auto__ = gb;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__10082__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__10082__auto__ = bind;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null)),(function (){var x__10082__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = do_mod.call(null,mod_pairs);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
}
});})(to_groups,err))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__10082__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"iter__20796__auto__","iter__20796__auto__",-1749352776,null)),(function (){var x__10082__auto__ = emit_bind.call(null,to_groups.call(null,seq_exprs));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"iter__20796__auto__","iter__20796__auto__",-1749352776,null)),(function (){var x__10082__auto__ = cljs.core.second.call(null,seq_exprs);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
});

cljs.core$macros.for$.cljs$lang$macro = true;
/**
 * Repeatedly executes body (presumably for side-effects) with
 *   bindings and filtering as provided by "for".  Does not retain
 *   the head of the sequence. Returns nil.
 */
cljs.core$macros.doseq = (function cljs$core$macros$doseq(var_args){
var args__10360__auto__ = [];
var len__10353__auto___20967 = arguments.length;
var i__10354__auto___20968 = (0);
while(true){
if((i__10354__auto___20968 < len__10353__auto___20967)){
args__10360__auto__.push((arguments[i__10354__auto___20968]));

var G__20969 = (i__10354__auto___20968 + (1));
i__10354__auto___20968 = G__20969;
continue;
} else {
}
break;
}

var argseq__10361__auto__ = ((((3) < args__10360__auto__.length))?(new cljs.core.IndexedSeq(args__10360__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.doseq.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10361__auto__);
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
var G__20970__delegate = function (msg){
throw cljs.core.ex_info.call(null,cljs.core.apply.call(null,cljs.core.str,msg),cljs.core.PersistentArrayMap.EMPTY);
};
var G__20970 = function (var_args){
var msg = null;
if (arguments.length > 0) {
var G__20971__i = 0, G__20971__a = new Array(arguments.length -  0);
while (G__20971__i < G__20971__a.length) {G__20971__a[G__20971__i] = arguments[G__20971__i + 0]; ++G__20971__i;}
  msg = new cljs.core.IndexedSeq(G__20971__a,0);
} 
return G__20970__delegate.call(this,msg);};
G__20970.cljs$lang$maxFixedArity = 0;
G__20970.cljs$lang$applyTo = (function (arglist__20972){
var msg = cljs.core.seq(arglist__20972);
return G__20970__delegate(msg);
});
G__20970.cljs$core$IFn$_invoke$arity$variadic = G__20970__delegate;
return G__20970;
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
var recform__$1 = (((k instanceof cljs.core.Keyword))?recform:cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","next","cljs.core/next",-1291438473,null)),(function (){var x__10082__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0))))));
var steppair = cljs$core$macros$step.call(null,recform__$1,cljs.core.nnext.call(null,exprs));
var needrec = steppair.call(null,(0));
var subform = steppair.call(null,(1));
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"let","let",-1282412701))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [needrec,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__10082__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = subform;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())))], null);
} else {
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"while","while",963117786))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__10082__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = subform;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(cljs.core.truth_(needrec)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recform__$1], null):null))))], null);
} else {
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"when","when",-576417306))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__10082__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__10082__auto__ = subform;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(cljs.core.truth_(needrec)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recform__$1], null):null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = recform__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())))], null);
} else {
if((k instanceof cljs.core.Keyword)){
return err.call(null,"Invalid 'doseq' keyword",k);
} else {
var chunksym = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"chunk__"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"not-native","not-native",-236392494,null)], null));
var countsym = cljs.core.gensym.call(null,"count__");
var isym = cljs.core.gensym.call(null,"i__");
var recform_chunk = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__10082__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = chunksym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = countsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unchecked-inc","cljs.core$macros/unchecked-inc",-1615365330,null)),(function (){var x__10082__auto__ = isym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
var steppair_chunk = cljs$core$macros$step.call(null,recform_chunk,cljs.core.nnext.call(null,exprs));
var subform_chunk = steppair_chunk.call(null,(1));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__10082__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__10082__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__10082__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = chunksym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__10082__auto__ = countsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),(function (){var x__10082__auto__ = isym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","coercive-boolean","cljs.core$macros/coercive-boolean",-450758280,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__10082__auto__ = isym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = countsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__10082__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__10082__auto__ = k;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-nth","cljs.core/-nth",504234802,null)),(function (){var x__10082__auto__ = chunksym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = isym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = subform_chunk;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(cljs.core.truth_(needrec)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recform_chunk], null):null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-let","cljs.core$macros/when-let",-2004472648,null)),(function (){var x__10082__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__10082__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__10082__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunked-seq?","cljs.core/chunked-seq?",-712922369,null)),(function (){var x__10082__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__10082__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__20962__auto__","c__20962__auto__",127918242,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-first","cljs.core/chunk-first",-1157877305,null)),(function (){var x__10082__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-rest","cljs.core/chunk-rest",-398161143,null)),(function (){var x__10082__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__20962__auto__","c__20962__auto__",127918242,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__20962__auto__","c__20962__auto__",127918242,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__10082__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__10082__auto__ = k;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null)),(function (){var x__10082__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = subform;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(cljs.core.truth_(needrec)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recform__$1], null):null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
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

cljs.core$macros.doseq.cljs$lang$applyTo = (function (seq20963){
var G__20964 = cljs.core.first.call(null,seq20963);
var seq20963__$1 = cljs.core.next.call(null,seq20963);
var G__20965 = cljs.core.first.call(null,seq20963__$1);
var seq20963__$2 = cljs.core.next.call(null,seq20963__$1);
var G__20966 = cljs.core.first.call(null,seq20963__$2);
var seq20963__$3 = cljs.core.next.call(null,seq20963__$2);
return cljs.core$macros.doseq.cljs$core$IFn$_invoke$arity$variadic(G__20964,G__20965,G__20966,seq20963__$3);
});


cljs.core$macros.doseq.cljs$lang$macro = true;
cljs.core$macros.array = (function cljs$core$macros$array(var_args){
var args__10360__auto__ = [];
var len__10353__auto___20976 = arguments.length;
var i__10354__auto___20977 = (0);
while(true){
if((i__10354__auto___20977 < len__10353__auto___20976)){
args__10360__auto__.push((arguments[i__10354__auto___20977]));

var G__20978 = (i__10354__auto___20977 + (1));
i__10354__auto___20977 = G__20978;
continue;
} else {
}
break;
}

var argseq__10361__auto__ = ((((2) < args__10360__auto__.length))?(new cljs.core.IndexedSeq(args__10360__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.array.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10361__auto__);
});

cljs.core$macros.array.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,rest){
var xs_str = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,",",cljs.core.take.call(null,cljs.core.count.call(null,rest),cljs.core.repeat.call(null,"~{}"))));
return cljs.core.vary_meta.call(null,cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),[cljs.core.str("["),cljs.core.str(xs_str),cljs.core.str("]")].join(''),rest),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"array","array",-440182315,null));
});

cljs.core$macros.array.cljs$lang$maxFixedArity = (2);

cljs.core$macros.array.cljs$lang$applyTo = (function (seq20973){
var G__20974 = cljs.core.first.call(null,seq20973);
var seq20973__$1 = cljs.core.next.call(null,seq20973);
var G__20975 = cljs.core.first.call(null,seq20973__$1);
var seq20973__$2 = cljs.core.next.call(null,seq20973__$1);
return cljs.core$macros.array.cljs$core$IFn$_invoke$arity$variadic(G__20974,G__20975,seq20973__$2);
});


cljs.core$macros.array.cljs$lang$macro = true;
cljs.core$macros.make_array = (function cljs$core$macros$make_array(var_args){
var args20982 = [];
var len__10353__auto___20990 = arguments.length;
var i__10354__auto___20991 = (0);
while(true){
if((i__10354__auto___20991 < len__10353__auto___20990)){
args20982.push((arguments[i__10354__auto___20991]));

var G__20992 = (i__10354__auto___20991 + (1));
i__10354__auto___20991 = G__20992;
continue;
} else {
}
break;
}

var G__20989 = args20982.length;
switch (G__20989) {
case 3:
return cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__10372__auto__ = (new cljs.core.IndexedSeq(args20982.slice((4)),(0),null));
return cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__10372__auto__);

}
});

cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,size){
return cljs.core.vary_meta.call(null,((typeof size === 'number')?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),cljs.core.take.call(null,size,cljs.core.repeat.call(null,null))))):cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Array.","js/Array.",1235645307,null)),(function (){var x__10082__auto__ = size;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"array","array",-440182315,null));
});

cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,type,size){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","make-array","cljs.core/make-array",-1802166799,null)),(function (){var x__10082__auto__ = size;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
});

cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,type,size,more_sizes){
return cljs.core.vary_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__10082__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dims__20979__auto__","dims__20979__auto__",-1873987514,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","list","cljs.core$macros/list",-1408486806,null)),more_sizes)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dimarray__20980__auto__","dimarray__20980__auto__",-1166414902,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","make-array","cljs.core/make-array",-1802166799,null)),(function (){var x__10082__auto__ = size;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","dotimes","cljs.core$macros/dotimes",-1407597661,null)),(function (){var x__10082__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__20981__auto__","i__20981__auto__",2114211100,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dimarray__20980__auto__","dimarray__20980__auto__",-1166414902,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aset","cljs.core$macros/aset",-693176374,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dimarray__20980__auto__","dimarray__20980__auto__",-1166414902,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__20981__auto__","i__20981__auto__",2114211100,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","make-array","cljs.core/make-array",-1802166799,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dims__20979__auto__","dims__20979__auto__",-1873987514,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dimarray__20980__auto__","dimarray__20980__auto__",-1166414902,null))))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"array","array",-440182315,null));
});

cljs.core$macros.make_array.cljs$lang$applyTo = (function (seq20983){
var G__20984 = cljs.core.first.call(null,seq20983);
var seq20983__$1 = cljs.core.next.call(null,seq20983);
var G__20985 = cljs.core.first.call(null,seq20983__$1);
var seq20983__$2 = cljs.core.next.call(null,seq20983__$1);
var G__20986 = cljs.core.first.call(null,seq20983__$2);
var seq20983__$3 = cljs.core.next.call(null,seq20983__$2);
var G__20987 = cljs.core.first.call(null,seq20983__$3);
var seq20983__$4 = cljs.core.next.call(null,seq20983__$3);
return cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$variadic(G__20984,G__20985,G__20986,G__20987,seq20983__$4);
});

cljs.core$macros.make_array.cljs$lang$maxFixedArity = (4);


cljs.core$macros.make_array.cljs$lang$macro = true;
cljs.core$macros.list = (function cljs$core$macros$list(var_args){
var args20995 = [];
var len__10353__auto___21002 = arguments.length;
var i__10354__auto___21003 = (0);
while(true){
if((i__10354__auto___21003 < len__10353__auto___21002)){
args20995.push((arguments[i__10354__auto___21003]));

var G__21004 = (i__10354__auto___21003 + (1));
i__10354__auto___21003 = G__21004;
continue;
} else {
}
break;
}

var G__21001 = args20995.length;
switch (G__21001) {
case 2:
return cljs.core$macros.list.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__10372__auto__ = (new cljs.core.IndexedSeq(args20995.slice((3)),(0),null));
return cljs.core$macros.list.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10372__auto__);

}
});

cljs.core$macros.list.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.list(new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null),new cljs.core.Symbol("cljs.core","List","cljs.core/List",1708954352,null));
});

cljs.core$macros.list.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,xs){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"constant","constant",-379609303),new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.analyze.call(null,_AMPERSAND_env,x)))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-conj","cljs.core/-conj",2040622670,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","list","cljs.core$macros/list",-1408486806,null)),xs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__10082__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__20994__auto__","x__20994__auto__",1075076222,null)),(function (){var x__10082__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-conj","cljs.core/-conj",2040622670,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","list","cljs.core$macros/list",-1408486806,null)),xs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__20994__auto__","x__20994__auto__",1075076222,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
}
});

cljs.core$macros.list.cljs$lang$applyTo = (function (seq20996){
var G__20997 = cljs.core.first.call(null,seq20996);
var seq20996__$1 = cljs.core.next.call(null,seq20996);
var G__20998 = cljs.core.first.call(null,seq20996__$1);
var seq20996__$2 = cljs.core.next.call(null,seq20996__$1);
var G__20999 = cljs.core.first.call(null,seq20996__$2);
var seq20996__$3 = cljs.core.next.call(null,seq20996__$2);
return cljs.core$macros.list.cljs$core$IFn$_invoke$arity$variadic(G__20997,G__20998,G__20999,seq20996__$3);
});

cljs.core$macros.list.cljs$lang$maxFixedArity = (3);


cljs.core$macros.list.cljs$lang$macro = true;
cljs.core$macros.vector = (function cljs$core$macros$vector(var_args){
var args21006 = [];
var len__10353__auto___21012 = arguments.length;
var i__10354__auto___21013 = (0);
while(true){
if((i__10354__auto___21013 < len__10353__auto___21012)){
args21006.push((arguments[i__10354__auto___21013]));

var G__21014 = (i__10354__auto___21013 + (1));
i__10354__auto___21013 = G__21014;
continue;
} else {
}
break;
}

var G__21011 = args21006.length;
switch (G__21011) {
case 2:
return cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__10372__auto__ = (new cljs.core.IndexedSeq(args21006.slice((2)),(0),null));
return cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10372__auto__);

}
});

cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.list(new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null),new cljs.core.Symbol("cljs.core","PersistentVector","cljs.core/PersistentVector",-1211028272,null));
});

cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
var cnt = cljs.core.count.call(null,xs);
if((cnt < (32))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentVector.","cljs.core/PersistentVector.",-1074647876,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__10082__auto__ = cnt;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(5)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-EMPTY-NODE",".-EMPTY-NODE",-1333332641,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentVector","cljs.core/PersistentVector",-1211028272,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),xs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
} else {
return cljs.core.vary_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".fromArray",".fromArray",1053499311,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentVector","cljs.core/PersistentVector",-1211028272,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),xs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true)))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","PersistentVector","cljs.core/PersistentVector",-1211028272,null));
}
});

cljs.core$macros.vector.cljs$lang$applyTo = (function (seq21007){
var G__21008 = cljs.core.first.call(null,seq21007);
var seq21007__$1 = cljs.core.next.call(null,seq21007);
var G__21009 = cljs.core.first.call(null,seq21007__$1);
var seq21007__$2 = cljs.core.next.call(null,seq21007__$1);
return cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$variadic(G__21008,G__21009,seq21007__$2);
});

cljs.core$macros.vector.cljs$lang$maxFixedArity = (2);


cljs.core$macros.vector.cljs$lang$macro = true;
cljs.core$macros.array_map = (function cljs$core$macros$array_map(var_args){
var args21018 = [];
var len__10353__auto___21024 = arguments.length;
var i__10354__auto___21025 = (0);
while(true){
if((i__10354__auto___21025 < len__10353__auto___21024)){
args21018.push((arguments[i__10354__auto___21025]));

var G__21026 = (i__10354__auto___21025 + (1));
i__10354__auto___21025 = G__21026;
continue;
} else {
}
break;
}

var G__21023 = args21018.length;
switch (G__21023) {
case 2:
return cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__10372__auto__ = (new cljs.core.IndexedSeq(args21018.slice((2)),(0),null));
return cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10372__auto__);

}
});

cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.list(new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null),new cljs.core.Symbol("cljs.core","PersistentArrayMap","cljs.core/PersistentArrayMap",1025194468,null));
});

cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,kvs){
var keys = cljs.core.map.call(null,cljs.core.first,cljs.core.partition.call(null,(2),kvs));
if((cljs.core.every_QMARK_.call(null,((function (keys){
return (function (p1__21016_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__21016_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
});})(keys))
,cljs.core.map.call(null,((function (keys){
return (function (p1__21017_SHARP_){
return cljs.analyzer.analyze.call(null,_AMPERSAND_env,p1__21017_SHARP_);
});})(keys))
,keys))) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,keys)),cljs.core.count.call(null,keys)))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentArrayMap.","cljs.core/PersistentArrayMap.",-471979341,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__10082__auto__ = (cljs.core.count.call(null,kvs) / (2));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),kvs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".fromArray",".fromArray",1053499311,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentArrayMap","cljs.core/PersistentArrayMap",1025194468,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),kvs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
}
});

cljs.core$macros.array_map.cljs$lang$applyTo = (function (seq21019){
var G__21020 = cljs.core.first.call(null,seq21019);
var seq21019__$1 = cljs.core.next.call(null,seq21019);
var G__21021 = cljs.core.first.call(null,seq21019__$1);
var seq21019__$2 = cljs.core.next.call(null,seq21019__$1);
return cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$variadic(G__21020,G__21021,seq21019__$2);
});

cljs.core$macros.array_map.cljs$lang$maxFixedArity = (2);


cljs.core$macros.array_map.cljs$lang$macro = true;
cljs.core$macros.hash_map = (function cljs$core$macros$hash_map(var_args){
var args21028 = [];
var len__10353__auto___21034 = arguments.length;
var i__10354__auto___21035 = (0);
while(true){
if((i__10354__auto___21035 < len__10353__auto___21034)){
args21028.push((arguments[i__10354__auto___21035]));

var G__21036 = (i__10354__auto___21035 + (1));
i__10354__auto___21035 = G__21036;
continue;
} else {
}
break;
}

var G__21033 = args21028.length;
switch (G__21033) {
case 2:
return cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__10372__auto__ = (new cljs.core.IndexedSeq(args21028.slice((2)),(0),null));
return cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10372__auto__);

}
});

cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentHashMap","cljs.core/PersistentHashMap",-454120575,null)))));
});

cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,kvs){
var pairs = cljs.core.partition.call(null,(2),kvs);
var ks = cljs.core.map.call(null,cljs.core.first,pairs);
var vs = cljs.core.map.call(null,cljs.core.second,pairs);
return cljs.core.vary_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".fromArrays",".fromArrays",1110244209,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentHashMap","cljs.core/PersistentHashMap",-454120575,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),ks)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),vs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})()))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","PersistentHashMap","cljs.core/PersistentHashMap",-454120575,null));
});

cljs.core$macros.hash_map.cljs$lang$applyTo = (function (seq21029){
var G__21030 = cljs.core.first.call(null,seq21029);
var seq21029__$1 = cljs.core.next.call(null,seq21029);
var G__21031 = cljs.core.first.call(null,seq21029__$1);
var seq21029__$2 = cljs.core.next.call(null,seq21029__$1);
return cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$variadic(G__21030,G__21031,seq21029__$2);
});

cljs.core$macros.hash_map.cljs$lang$maxFixedArity = (2);


cljs.core$macros.hash_map.cljs$lang$macro = true;
cljs.core$macros.hash_set = (function cljs$core$macros$hash_set(var_args){
var args21040 = [];
var len__10353__auto___21046 = arguments.length;
var i__10354__auto___21047 = (0);
while(true){
if((i__10354__auto___21047 < len__10353__auto___21046)){
args21040.push((arguments[i__10354__auto___21047]));

var G__21048 = (i__10354__auto___21047 + (1));
i__10354__auto___21047 = G__21048;
continue;
} else {
}
break;
}

var G__21045 = args21040.length;
switch (G__21045) {
case 2:
return cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__10372__auto__ = (new cljs.core.IndexedSeq(args21040.slice((2)),(0),null));
return cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10372__auto__);

}
});

cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentHashSet","cljs.core/PersistentHashSet",-967232330,null)))));
});

cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
if(((cljs.core.count.call(null,xs) <= (8))) && (cljs.core.every_QMARK_.call(null,(function (p1__21038_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__21038_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),cljs.core.map.call(null,(function (p1__21039_SHARP_){
return cljs.analyzer.analyze.call(null,_AMPERSAND_env,p1__21039_SHARP_);
}),xs))) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,xs)),cljs.core.count.call(null,xs)))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentHashSet.","cljs.core/PersistentHashSet.",300313251,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentArrayMap.","cljs.core/PersistentArrayMap.",-471979341,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__10082__auto__ = cljs.core.count.call(null,xs);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),cljs.core.interleave.call(null,xs,cljs.core.repeat.call(null,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
} else {
return cljs.core.vary_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".fromArray",".fromArray",1053499311,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentHashSet","cljs.core/PersistentHashSet",-967232330,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),xs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true)))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","PersistentHashSet","cljs.core/PersistentHashSet",-967232330,null));
}
});

cljs.core$macros.hash_set.cljs$lang$applyTo = (function (seq21041){
var G__21042 = cljs.core.first.call(null,seq21041);
var seq21041__$1 = cljs.core.next.call(null,seq21041);
var G__21043 = cljs.core.first.call(null,seq21041__$1);
var seq21041__$2 = cljs.core.next.call(null,seq21041__$1);
return cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$variadic(G__21042,G__21043,seq21041__$2);
});

cljs.core$macros.hash_set.cljs$lang$maxFixedArity = (2);


cljs.core$macros.hash_set.cljs$lang$macro = true;
cljs.core$macros.js_obj_STAR_ = (function cljs$core$macros$js_obj_STAR_(kvs){
var kvs_str = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,",",cljs.core.take.call(null,cljs.core.count.call(null,kvs),cljs.core.repeat.call(null,"~{}:~{}"))));
return cljs.core.vary_meta.call(null,cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),[cljs.core.str("{"),cljs.core.str(kvs_str),cljs.core.str("}")].join(''),cljs.core.apply.call(null,cljs.core.concat,kvs)),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"object","object",-1179821820,null));
});
cljs.core$macros.js_obj = (function cljs$core$macros$js_obj(var_args){
var args__10360__auto__ = [];
var len__10353__auto___21065 = arguments.length;
var i__10354__auto___21066 = (0);
while(true){
if((i__10354__auto___21066 < len__10353__auto___21065)){
args__10360__auto__.push((arguments[i__10354__auto___21066]));

var G__21067 = (i__10354__auto___21066 + (1));
i__10354__auto___21066 = G__21067;
continue;
} else {
}
break;
}

var argseq__10361__auto__ = ((((2) < args__10360__auto__.length))?(new cljs.core.IndexedSeq(args__10360__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.js_obj.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10361__auto__);
});

cljs.core$macros.js_obj.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,rest){
var sym_or_str_QMARK_ = (function (x){
return ((x instanceof cljs.core.Symbol)) || (typeof x === 'string');
});
var filter_on_keys = ((function (sym_or_str_QMARK_){
return (function (f,coll){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,((function (sym_or_str_QMARK_){
return (function (p__21053){
var vec__21054 = p__21053;
var k = cljs.core.nth.call(null,vec__21054,(0),null);
var _ = cljs.core.nth.call(null,vec__21054,(1),null);
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__10082__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.apply.call(null,cljs.core.concat,clojure.set.map_invert.call(null,expr__GT_local)),(function (){var x__10082__auto__ = obj;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core$macros.js_obj_STAR_.call(null,filter_on_keys.call(null,cljs.core.string_QMARK_,kvs));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),cljs.core.map.call(null,((function (sym_or_str_QMARK_,filter_on_keys,kvs,sym_pairs,expr__GT_local,obj){
return (function (p__21057){
var vec__21058 = p__21057;
var k = cljs.core.nth.call(null,vec__21058,(0),null);
var v = cljs.core.nth.call(null,vec__21058,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aset","cljs.core$macros/aset",-693176374,null)),(function (){var x__10082__auto__ = obj;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = k;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
});})(sym_or_str_QMARK_,filter_on_keys,kvs,sym_pairs,expr__GT_local,obj))
,sym_pairs),cljs.core.map.call(null,((function (sym_or_str_QMARK_,filter_on_keys,kvs,sym_pairs,expr__GT_local,obj){
return (function (p__21061){
var vec__21062 = p__21061;
var k = cljs.core.nth.call(null,vec__21062,(0),null);
var v = cljs.core.nth.call(null,vec__21062,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aset","cljs.core$macros/aset",-693176374,null)),(function (){var x__10082__auto__ = obj;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.get.call(null,kvs,k);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
});})(sym_or_str_QMARK_,filter_on_keys,kvs,sym_pairs,expr__GT_local,obj))
,expr__GT_local),(function (){var x__10082__auto__ = obj;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
}
});

cljs.core$macros.js_obj.cljs$lang$maxFixedArity = (2);

cljs.core$macros.js_obj.cljs$lang$applyTo = (function (seq21050){
var G__21051 = cljs.core.first.call(null,seq21050);
var seq21050__$1 = cljs.core.next.call(null,seq21050);
var G__21052 = cljs.core.first.call(null,seq21050__$1);
var seq21050__$2 = cljs.core.next.call(null,seq21050__$1);
return cljs.core$macros.js_obj.cljs$core$IFn$_invoke$arity$variadic(G__21051,G__21052,seq21050__$2);
});


cljs.core$macros.js_obj.cljs$lang$macro = true;
cljs.core$macros.alength = (function cljs$core$macros$alength(_AMPERSAND_form,_AMPERSAND_env,a){
return cljs.core.vary_meta.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__10082__auto__ = a;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__10082__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"a__21068__auto__","a__21068__auto__",1821438239,null)),(function (){var x__10082__auto__ = a;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = ret;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","aclone","cljs.core/aclone",-758078968,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"a__21068__auto__","a__21068__auto__",1821438239,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__10082__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__10082__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__10082__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"a__21068__auto__","a__21068__auto__",1821438239,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aset","cljs.core$macros/aset",-693176374,null)),(function (){var x__10082__auto__ = ret;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),(function (){var x__10082__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = ret;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
});

cljs.core$macros.amap.cljs$lang$macro = true;
/**
 * Reduces an expression across an array a, using an index named idx,
 *   and return value named ret, initialized to init, setting ret to the
 *   evaluation of expr at each step, returning ret.
 */
cljs.core$macros.areduce = (function cljs$core$macros$areduce(_AMPERSAND_form,_AMPERSAND_env,a,idx,ret,init,expr){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__10082__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"a__21069__auto__","a__21069__auto__",1605226198,null)),(function (){var x__10082__auto__ = a;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__10082__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__10082__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),(function (){var x__10082__auto__ = ret;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = init;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__10082__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"a__21069__auto__","a__21069__auto__",1605226198,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),(function (){var x__10082__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = ret;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
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
var args__10360__auto__ = [];
var len__10353__auto___21075 = arguments.length;
var i__10354__auto___21076 = (0);
while(true){
if((i__10354__auto___21076 < len__10353__auto___21075)){
args__10360__auto__.push((arguments[i__10354__auto___21076]));

var G__21077 = (i__10354__auto___21076 + (1));
i__10354__auto___21076 = G__21077;
continue;
} else {
}
break;
}

var argseq__10361__auto__ = ((((3) < args__10360__auto__.length))?(new cljs.core.IndexedSeq(args__10360__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.dotimes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10361__auto__);
});

cljs.core$macros.dotimes.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
var i = cljs.core.first.call(null,bindings);
var n = cljs.core.second.call(null,bindings);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__10082__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"n__21070__auto__","n__21070__auto__",-1379439627,null)),(function (){var x__10082__auto__ = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__10082__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__10082__auto__ = i;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__10082__auto__ = i;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"n__21070__auto__","n__21070__auto__",-1379439627,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),body,(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),(function (){var x__10082__auto__ = i;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
});

cljs.core$macros.dotimes.cljs$lang$maxFixedArity = (3);

cljs.core$macros.dotimes.cljs$lang$applyTo = (function (seq21071){
var G__21072 = cljs.core.first.call(null,seq21071);
var seq21071__$1 = cljs.core.next.call(null,seq21071);
var G__21073 = cljs.core.first.call(null,seq21071__$1);
var seq21071__$2 = cljs.core.next.call(null,seq21071__$1);
var G__21074 = cljs.core.first.call(null,seq21071__$2);
var seq21071__$3 = cljs.core.next.call(null,seq21071__$2);
return cljs.core$macros.dotimes.cljs$core$IFn$_invoke$arity$variadic(G__21072,G__21073,G__21074,seq21071__$3);
});


cljs.core$macros.dotimes.cljs$lang$macro = true;
/**
 * Throws an exception if the given option map contains keys not listed
 *   as valid, else returns nil.
 */
cljs.core$macros.check_valid_options = (function cljs$core$macros$check_valid_options(var_args){
var args__10360__auto__ = [];
var len__10353__auto___21081 = arguments.length;
var i__10354__auto___21082 = (0);
while(true){
if((i__10354__auto___21082 < len__10353__auto___21081)){
args__10360__auto__.push((arguments[i__10354__auto___21082]));

var G__21083 = (i__10354__auto___21082 + (1));
i__10354__auto___21082 = G__21083;
continue;
} else {
}
break;
}

var argseq__10361__auto__ = ((((1) < args__10360__auto__.length))?(new cljs.core.IndexedSeq(args__10360__auto__.slice((1)),(0),null)):null);
return cljs.core$macros.check_valid_options.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10361__auto__);
});

cljs.core$macros.check_valid_options.cljs$core$IFn$_invoke$arity$variadic = (function (options,valid_keys){
if(cljs.core.seq.call(null,cljs.core.apply.call(null,cljs.core.disj,cljs.core.apply.call(null,cljs.core.hash_set,cljs.core.keys.call(null,options)),valid_keys))){
throw cljs.core.apply.call(null,cljs.core.str,"Only these options are valid: ",cljs.core.first.call(null,valid_keys),cljs.core.map.call(null,(function (p1__21078_SHARP_){
return [cljs.core.str(", "),cljs.core.str(p1__21078_SHARP_)].join('');
}),cljs.core.rest.call(null,valid_keys)));
} else {
return null;
}
});

cljs.core$macros.check_valid_options.cljs$lang$maxFixedArity = (1);

cljs.core$macros.check_valid_options.cljs$lang$applyTo = (function (seq21079){
var G__21080 = cljs.core.first.call(null,seq21079);
var seq21079__$1 = cljs.core.next.call(null,seq21079);
return cljs.core$macros.check_valid_options.cljs$core$IFn$_invoke$arity$variadic(G__21080,seq21079__$1);
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
var args__10360__auto__ = [];
var len__10353__auto___21093 = arguments.length;
var i__10354__auto___21094 = (0);
while(true){
if((i__10354__auto___21094 < len__10353__auto___21093)){
args__10360__auto__.push((arguments[i__10354__auto___21094]));

var G__21095 = (i__10354__auto___21094 + (1));
i__10354__auto___21094 = G__21095;
continue;
} else {
}
break;
}

var argseq__10361__auto__ = ((((3) < args__10360__auto__.length))?(new cljs.core.IndexedSeq(args__10360__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.defmulti.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10361__auto__);
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

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defonce","cljs.core$macros/defonce",-1096231613,null)),(function (){var x__10082__auto__ = cljs.core.with_meta.call(null,mm_name,m__$2);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__10082__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"method-table__21084__auto__","method-table__21084__auto__",-1547997963,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null)),(function (){var x__10082__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"prefer-table__21085__auto__","prefer-table__21085__auto__",351491951,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null)),(function (){var x__10082__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"method-cache__21086__auto__","method-cache__21086__auto__",-1159715952,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null)),(function (){var x__10082__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cached-hierarchy__21087__auto__","cached-hierarchy__21087__auto__",692361752,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null)),(function (){var x__10082__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"hierarchy__21088__auto__","hierarchy__21088__auto__",-617948211,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null)),(function (){var x__10082__auto__ = options__$4;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","get-global-hierarchy","cljs.core/get-global-hierarchy",48052871,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","MultiFn.","cljs.core/MultiFn.",1073941573,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","symbol","cljs.core/symbol",195265748,null)),(function (){var x__10082__auto__ = mm_ns;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.name.call(null,mm_name);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = dispatch_fn;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = default$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"hierarchy__21088__auto__","hierarchy__21088__auto__",-617948211,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"method-table__21084__auto__","method-table__21084__auto__",-1547997963,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"prefer-table__21085__auto__","prefer-table__21085__auto__",351491951,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"method-cache__21086__auto__","method-cache__21086__auto__",-1159715952,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cached-hierarchy__21087__auto__","cached-hierarchy__21087__auto__",692361752,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
});

cljs.core$macros.defmulti.cljs$lang$maxFixedArity = (3);

cljs.core$macros.defmulti.cljs$lang$applyTo = (function (seq21089){
var G__21090 = cljs.core.first.call(null,seq21089);
var seq21089__$1 = cljs.core.next.call(null,seq21089);
var G__21091 = cljs.core.first.call(null,seq21089__$1);
var seq21089__$2 = cljs.core.next.call(null,seq21089__$1);
var G__21092 = cljs.core.first.call(null,seq21089__$2);
var seq21089__$3 = cljs.core.next.call(null,seq21089__$2);
return cljs.core$macros.defmulti.cljs$core$IFn$_invoke$arity$variadic(G__21090,G__21091,G__21092,seq21089__$3);
});


cljs.core$macros.defmulti.cljs$lang$macro = true;
/**
 * Creates and installs a new method of multimethod associated with dispatch-value. 
 */
cljs.core$macros.defmethod = (function cljs$core$macros$defmethod(var_args){
var args__10360__auto__ = [];
var len__10353__auto___21101 = arguments.length;
var i__10354__auto___21102 = (0);
while(true){
if((i__10354__auto___21102 < len__10353__auto___21101)){
args__10360__auto__.push((arguments[i__10354__auto___21102]));

var G__21103 = (i__10354__auto___21102 + (1));
i__10354__auto___21102 = G__21103;
continue;
} else {
}
break;
}

var argseq__10361__auto__ = ((((4) < args__10360__auto__.length))?(new cljs.core.IndexedSeq(args__10360__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.defmethod.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__10361__auto__);
});

cljs.core$macros.defmethod.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,multifn,dispatch_val,fn_tail){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-add-method","cljs.core/-add-method",571092113,null)),(function (){var x__10082__auto__ = cljs.core.with_meta.call(null,multifn,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","MultiFn","cljs.core/MultiFn",1487419554,null)], null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = dispatch_val;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),fn_tail)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
});

cljs.core$macros.defmethod.cljs$lang$maxFixedArity = (4);

cljs.core$macros.defmethod.cljs$lang$applyTo = (function (seq21096){
var G__21097 = cljs.core.first.call(null,seq21096);
var seq21096__$1 = cljs.core.next.call(null,seq21096);
var G__21098 = cljs.core.first.call(null,seq21096__$1);
var seq21096__$2 = cljs.core.next.call(null,seq21096__$1);
var G__21099 = cljs.core.first.call(null,seq21096__$2);
var seq21096__$3 = cljs.core.next.call(null,seq21096__$2);
var G__21100 = cljs.core.first.call(null,seq21096__$3);
var seq21096__$4 = cljs.core.next.call(null,seq21096__$3);
return cljs.core$macros.defmethod.cljs$core$IFn$_invoke$arity$variadic(G__21097,G__21098,G__21099,G__21100,seq21096__$4);
});


cljs.core$macros.defmethod.cljs$lang$macro = true;
/**
 * Evaluates expr and prints the time it took. Returns the value of expr.
 */
cljs.core$macros.time = (function cljs$core$macros$time(_AMPERSAND_form,_AMPERSAND_env,expr){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__10082__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"start__21104__auto__","start__21104__auto__",-1799679770,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","system-time","cljs.core/system-time",1562011930,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ret__21105__auto__","ret__21105__auto__",-205379324,null)),(function (){var x__10082__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","prn","cljs.core/prn",1725204552,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"Elapsed time: "),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".toFixed",".toFixed",-895046938,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","system-time","cljs.core/system-time",1562011930,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"start__21104__auto__","start__21104__auto__",-1799679770,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(6)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY," msecs"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ret__21105__auto__","ret__21105__auto__",-205379324,null)))));
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
var args__10360__auto__ = [];
var len__10353__auto___21120 = arguments.length;
var i__10354__auto___21121 = (0);
while(true){
if((i__10354__auto___21121 < len__10353__auto___21120)){
args__10360__auto__.push((arguments[i__10354__auto___21121]));

var G__21122 = (i__10354__auto___21121 + (1));
i__10354__auto___21121 = G__21122;
continue;
} else {
}
break;
}

var argseq__10361__auto__ = ((((5) < args__10360__auto__.length))?(new cljs.core.IndexedSeq(args__10360__auto__.slice((5)),(0),null)):null);
return cljs.core$macros.simple_benchmark.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__10361__auto__);
});

cljs.core$macros.simple_benchmark.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,expr,iterations,p__21117){
var map__21118 = p__21117;
var map__21118__$1 = ((((!((map__21118 == null)))?((((map__21118.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21118.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21118):map__21118);
var print_fn = cljs.core.get.call(null,map__21118__$1,new cljs.core.Keyword(null,"print-fn","print-fn",-1720960489),new cljs.core.Symbol(null,"println","println",-733595439,null));
var bs_str = cljs.core.pr_str.call(null,bindings);
var expr_str = cljs.core.pr_str.call(null,expr);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__10082__auto__ = bindings;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__10082__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"start__21106__auto__","start__21106__auto__",2095852571,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".getTime",".getTime",-1048557777,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Date.","js/Date.",384205255,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ret__21107__auto__","ret__21107__auto__",275796451,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","dotimes","cljs.core$macros/dotimes",-1407597661,null)),(function (){var x__10082__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"___21108__auto__","___21108__auto__",-1782778782,null)),(function (){var x__10082__auto__ = iterations;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"end__21109__auto__","end__21109__auto__",22361657,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".getTime",".getTime",-1048557777,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Date.","js/Date.",384205255,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"elapsed__21110__auto__","elapsed__21110__auto__",2105440757,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"end__21109__auto__","end__21109__auto__",22361657,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"start__21106__auto__","start__21106__auto__",2095852571,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__10082__auto__ = print_fn;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","str","cljs.core$macros/str",-2019499702,null)),(function (){var x__10082__auto__ = bs_str;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,", "),(function (){var x__10082__auto__ = expr_str;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,", "),(function (){var x__10082__auto__ = iterations;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY," runs, "),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"elapsed__21110__auto__","elapsed__21110__auto__",2105440757,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY," msecs"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
});

cljs.core$macros.simple_benchmark.cljs$lang$maxFixedArity = (5);

cljs.core$macros.simple_benchmark.cljs$lang$applyTo = (function (seq21111){
var G__21112 = cljs.core.first.call(null,seq21111);
var seq21111__$1 = cljs.core.next.call(null,seq21111);
var G__21113 = cljs.core.first.call(null,seq21111__$1);
var seq21111__$2 = cljs.core.next.call(null,seq21111__$1);
var G__21114 = cljs.core.first.call(null,seq21111__$2);
var seq21111__$3 = cljs.core.next.call(null,seq21111__$2);
var G__21115 = cljs.core.first.call(null,seq21111__$3);
var seq21111__$4 = cljs.core.next.call(null,seq21111__$3);
var G__21116 = cljs.core.first.call(null,seq21111__$4);
var seq21111__$5 = cljs.core.next.call(null,seq21111__$4);
return cljs.core$macros.simple_benchmark.cljs$core$IFn$_invoke$arity$variadic(G__21112,G__21113,G__21114,G__21115,G__21116,seq21111__$5);
});


cljs.core$macros.simple_benchmark.cljs$lang$macro = true;
cljs.core$macros.cs = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.gensym,cljs.core.str,cljs.core.char$),cljs.core.range.call(null,(97),(118))));
cljs.core$macros.gen_apply_to_helper = (function cljs$core$macros$gen_apply_to_helper(var_args){
var args21123 = [];
var len__10353__auto___21126 = arguments.length;
var i__10354__auto___21127 = (0);
while(true){
if((i__10354__auto___21127 < len__10353__auto___21126)){
args21123.push((arguments[i__10354__auto___21127]));

var G__21128 = (i__10354__auto___21127 + (1));
i__10354__auto___21127 = G__21128;
continue;
} else {
}
break;
}

var G__21125 = args21123.length;
switch (G__21125) {
case 0:
return cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21123.length)].join('')));

}
});

cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core$macros.gen_apply_to_helper.call(null,(1));
});

cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$1 = (function (n){
var prop = cljs.core.symbol.call(null,[cljs.core.str("-cljs$core$IFn$_invoke$arity$"),cljs.core.str(n)].join(''));
var f = cljs.core.symbol.call(null,[cljs.core.str("cljs$core$IFn$_invoke$arity$"),cljs.core.str(n)].join(''));
if((n <= (20))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__10082__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__10082__auto__ = cljs.core$macros.cs.call(null,(n - (1)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-first","cljs.core/-first",545297391,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-rest","cljs.core/-rest",-1829241664,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","==","cljs.core$macros/==",-818551413,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argc","argc",187692008,null)),(function (){var x__10082__auto__ = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"f","f",43394975,null)),(function (){var x__10082__auto__ = prop;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"f","f",43394975,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__10082__auto__ = f;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),cljs.core.take.call(null,n,cljs.core$macros.cs))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"f","f",43394975,null)),cljs.core.take.call(null,n,cljs.core$macros.cs))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core$macros.gen_apply_to_helper.call(null,(n + (1)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"Only up to 20 arguments supported on functions"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
}
});

cljs.core$macros.gen_apply_to_helper.cljs$lang$maxFixedArity = 1;

cljs.core$macros.gen_apply_to = (function cljs$core$macros$gen_apply_to(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"*unchecked-if*","*unchecked-if*",1542408350,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"apply-to","apply-to",-1858571928,null)),(function (){var x__10082__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"f","f",43394975,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argc","argc",187692008,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__10082__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","zero?","cljs.core$macros/zero?",-65998367,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argc","argc",187692008,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"f","f",43394975,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core$macros.gen_apply_to_helper.call(null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"*unchecked-if*","*unchecked-if*",1542408350,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
});

cljs.core$macros.gen_apply_to.cljs$lang$macro = true;
/**
 * Evaluates exprs in a context in which *print-fn* is bound to .append
 *   on a fresh StringBuffer.  Returns the string created by any nested
 *   printing calls.
 */
cljs.core$macros.with_out_str = (function cljs$core$macros$with_out_str(var_args){
var args__10360__auto__ = [];
var len__10353__auto___21135 = arguments.length;
var i__10354__auto___21136 = (0);
while(true){
if((i__10354__auto___21136 < len__10353__auto___21135)){
args__10360__auto__.push((arguments[i__10354__auto___21136]));

var G__21137 = (i__10354__auto___21136 + (1));
i__10354__auto___21136 = G__21137;
continue;
} else {
}
break;
}

var argseq__10361__auto__ = ((((2) < args__10360__auto__.length))?(new cljs.core.IndexedSeq(args__10360__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.with_out_str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10361__auto__);
});

cljs.core$macros.with_out_str.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__10082__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"sb__21130__auto__","sb__21130__auto__",-1497061934,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","goog.string.StringBuffer.","js/goog.string.StringBuffer.",-1043451650,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","binding","cljs.core$macros/binding",1855847304,null)),(function (){var x__10082__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","*print-newline*","cljs.core/*print-newline*",6231625,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","*print-fn*","cljs.core/*print-fn*",1342365176,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__10082__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__21131__auto__","x__21131__auto__",601008811,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".append",".append",1595439852,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"sb__21130__auto__","sb__21130__auto__",-1497061934,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__21131__auto__","x__21131__auto__",601008811,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"sb__21130__auto__","sb__21130__auto__",-1497061934,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
});

cljs.core$macros.with_out_str.cljs$lang$maxFixedArity = (2);

cljs.core$macros.with_out_str.cljs$lang$applyTo = (function (seq21132){
var G__21133 = cljs.core.first.call(null,seq21132);
var seq21132__$1 = cljs.core.next.call(null,seq21132);
var G__21134 = cljs.core.first.call(null,seq21132__$1);
var seq21132__$2 = cljs.core.next.call(null,seq21132__$1);
return cljs.core$macros.with_out_str.cljs$core$IFn$_invoke$arity$variadic(G__21133,G__21134,seq21132__$2);
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
var args__10360__auto__ = [];
var len__10353__auto___21142 = arguments.length;
var i__10354__auto___21143 = (0);
while(true){
if((i__10354__auto___21143 < len__10353__auto___21142)){
args__10360__auto__.push((arguments[i__10354__auto___21143]));

var G__21144 = (i__10354__auto___21143 + (1));
i__10354__auto___21143 = G__21144;
continue;
} else {
}
break;
}

var argseq__10361__auto__ = ((((2) < args__10360__auto__.length))?(new cljs.core.IndexedSeq(args__10360__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.lazy_cat.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10361__auto__);
});

cljs.core$macros.lazy_cat.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,colls){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null)),cljs.core.map.call(null,(function (p1__21138_SHARP_){
return cljs.core._conj.call(null,(function (){var x__10082__auto__ = p1__21138_SHARP_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),new cljs.core.Symbol("cljs.core$macros","lazy-seq","cljs.core$macros/lazy-seq",806482650,null));
}),colls))));
});

cljs.core$macros.lazy_cat.cljs$lang$maxFixedArity = (2);

cljs.core$macros.lazy_cat.cljs$lang$applyTo = (function (seq21139){
var G__21140 = cljs.core.first.call(null,seq21139);
var seq21139__$1 = cljs.core.next.call(null,seq21139);
var G__21141 = cljs.core.first.call(null,seq21139__$1);
var seq21139__$2 = cljs.core.next.call(null,seq21139__$1);
return cljs.core$macros.lazy_cat.cljs$core$IFn$_invoke$arity$variadic(G__21140,G__21141,seq21139__$2);
});


cljs.core$macros.lazy_cat.cljs$lang$macro = true;
cljs.core$macros.js_str = (function cljs$core$macros$js_str(_AMPERSAND_form,_AMPERSAND_env,s){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__10082__auto__ = s;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),"''+~{}"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.js_str.cljs$lang$macro = true;
cljs.core$macros.es6_iterable = (function cljs$core$macros$es6_iterable(_AMPERSAND_form,_AMPERSAND_env,ty){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aset","cljs.core$macros/aset",-693176374,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-prototype",".-prototype",-1562038608,null)),(function (){var x__10082__auto__ = ty;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","ITER_SYMBOL","cljs.core/ITER_SYMBOL",-2091399233,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__10082__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__21145__auto__","this__21145__auto__",1089435449,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","es6-iterator","cljs.core/es6-iterator",856007913,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__21145__auto__","this__21145__auto__",1089435449,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
});

cljs.core$macros.es6_iterable.cljs$lang$macro = true;
/**
 * Returns a map of the intern mappings for the namespace.
 */
cljs.core$macros.ns_interns = (function cljs$core$macros$ns_interns(_AMPERSAND_form,_AMPERSAND_env,p__21146){
var vec__21158 = p__21146;
var quote = cljs.core.nth.call(null,vec__21158,(0),null);
var ns = cljs.core.nth.call(null,vec__21158,(1),null);
if((cljs.core._EQ_.call(null,quote,new cljs.core.Symbol(null,"quote","quote",1377916282,null))) && ((ns instanceof cljs.core.Symbol))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Argument to ns-interns must be a quoted symbol"),cljs.core.str("\n"),cljs.core.str("(core/and (= quote (quote quote)) (core/symbol? ns))")].join('')));
}

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","into","cljs.core/into",1879938733,null)),(function (){var x__10082__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,((function (vec__21158,quote,ns){
return (function (p__21165){
var vec__21166 = p__21165;
var sym = cljs.core.nth.call(null,vec__21166,(0),null);
var _ = cljs.core.nth.call(null,vec__21166,(1),null);
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","symbol","cljs.core/symbol",195265748,null)),(function (){var x__10082__auto__ = cljs.core.name.call(null,sym);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"var","var",870848730,null)),(function (){var x__10082__auto__ = cljs.core.symbol.call(null,cljs.core.name.call(null,ns),cljs.core.name.call(null,sym));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})()))));
});})(vec__21158,quote,ns))
,cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns,new cljs.core.Keyword(null,"defs","defs",1398449717)], null)))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
});

cljs.core$macros.ns_interns.cljs$lang$macro = true;
/**
 * Removes the mappings for the symbol from the namespace.
 */
cljs.core$macros.ns_unmap = (function cljs$core$macros$ns_unmap(_AMPERSAND_form,_AMPERSAND_env,p__21169,p__21170){
var vec__21177 = p__21169;
var quote0 = cljs.core.nth.call(null,vec__21177,(0),null);
var ns = cljs.core.nth.call(null,vec__21177,(1),null);
var vec__21180 = p__21170;
var quote1 = cljs.core.nth.call(null,vec__21180,(0),null);
var sym = cljs.core.nth.call(null,vec__21180,(1),null);
if((cljs.core._EQ_.call(null,quote0,new cljs.core.Symbol(null,"quote","quote",1377916282,null))) && ((ns instanceof cljs.core.Symbol)) && (cljs.core._EQ_.call(null,quote1,new cljs.core.Symbol(null,"quote","quote",1377916282,null))) && ((sym instanceof cljs.core.Symbol))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Arguments to ns-unmap must be quoted symbols"),cljs.core.str("\n"),cljs.core.str("(core/and (= quote0 (quote quote)) (core/symbol? ns) (= quote1 (quote quote)) (core/symbol? sym))")].join('')));
}

cljs.core.swap_BANG_.call(null,cljs.env._STAR_compiler_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns,new cljs.core.Keyword(null,"defs","defs",1398449717)], null),cljs.core.dissoc,sym);

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-delete","cljs.core$macros/js-delete",387769082,null)),(function (){var x__10082__auto__ = cljs.compiler.munge.call(null,ns);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.compiler.munge.call(null,[cljs.core.str(sym)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
});

cljs.core$macros.ns_unmap.cljs$lang$macro = true;
/**
 * Non-atomically swaps the value of the volatile as if:
 * (apply f current-value-of-vol args). Returns the value that
 * was swapped in.
 */
cljs.core$macros.vswap_BANG_ = (function cljs$core$macros$vswap_BANG_(var_args){
var args__10360__auto__ = [];
var len__10353__auto___21188 = arguments.length;
var i__10354__auto___21189 = (0);
while(true){
if((i__10354__auto___21189 < len__10353__auto___21188)){
args__10360__auto__.push((arguments[i__10354__auto___21189]));

var G__21190 = (i__10354__auto___21189 + (1));
i__10354__auto___21189 = G__21190;
continue;
} else {
}
break;
}

var argseq__10361__auto__ = ((((4) < args__10360__auto__.length))?(new cljs.core.IndexedSeq(args__10360__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.vswap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__10361__auto__);
});

cljs.core$macros.vswap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,vol,f,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-vreset!","cljs.core/-vreset!",-1186516972,null)),(function (){var x__10082__auto__ = vol;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__10082__auto__ = f;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-deref","cljs.core/-deref",-1260480154,null)),(function (){var x__10082__auto__ = vol;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),args)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
});

cljs.core$macros.vswap_BANG_.cljs$lang$maxFixedArity = (4);

cljs.core$macros.vswap_BANG_.cljs$lang$applyTo = (function (seq21183){
var G__21184 = cljs.core.first.call(null,seq21183);
var seq21183__$1 = cljs.core.next.call(null,seq21183);
var G__21185 = cljs.core.first.call(null,seq21183__$1);
var seq21183__$2 = cljs.core.next.call(null,seq21183__$1);
var G__21186 = cljs.core.first.call(null,seq21183__$2);
var seq21183__$3 = cljs.core.next.call(null,seq21183__$2);
var G__21187 = cljs.core.first.call(null,seq21183__$3);
var seq21183__$4 = cljs.core.next.call(null,seq21183__$3);
return cljs.core$macros.vswap_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__21184,G__21185,G__21186,G__21187,seq21183__$4);
});


cljs.core$macros.vswap_BANG_.cljs$lang$macro = true;
cljs.core$macros.locking = (function cljs$core$macros$locking(var_args){
var args__10360__auto__ = [];
var len__10353__auto___21195 = arguments.length;
var i__10354__auto___21196 = (0);
while(true){
if((i__10354__auto___21196 < len__10353__auto___21195)){
args__10360__auto__.push((arguments[i__10354__auto___21196]));

var G__21197 = (i__10354__auto___21196 + (1));
i__10354__auto___21196 = G__21197;
continue;
} else {
}
break;
}

var argseq__10361__auto__ = ((((3) < args__10360__auto__.length))?(new cljs.core.IndexedSeq(args__10360__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.locking.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10361__auto__);
});

cljs.core$macros.locking.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),forms)));
});

cljs.core$macros.locking.cljs$lang$maxFixedArity = (3);

cljs.core$macros.locking.cljs$lang$applyTo = (function (seq21191){
var G__21192 = cljs.core.first.call(null,seq21191);
var seq21191__$1 = cljs.core.next.call(null,seq21191);
var G__21193 = cljs.core.first.call(null,seq21191__$1);
var seq21191__$2 = cljs.core.next.call(null,seq21191__$1);
var G__21194 = cljs.core.first.call(null,seq21191__$2);
var seq21191__$3 = cljs.core.next.call(null,seq21191__$2);
return cljs.core$macros.locking.cljs$core$IFn$_invoke$arity$variadic(G__21192,G__21193,G__21194,seq21191__$3);
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
var args__10360__auto__ = [];
var len__10353__auto___21201 = arguments.length;
var i__10354__auto___21202 = (0);
while(true){
if((i__10354__auto___21202 < len__10353__auto___21201)){
args__10360__auto__.push((arguments[i__10354__auto___21202]));

var G__21203 = (i__10354__auto___21202 + (1));
i__10354__auto___21202 = G__21203;
continue;
} else {
}
break;
}

var argseq__10361__auto__ = ((((2) < args__10360__auto__.length))?(new cljs.core.IndexedSeq(args__10360__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.require.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10361__auto__);
});

cljs.core$macros.require.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ns*","ns*",1840949383,null)),(function (){var x__10082__auto__ = cljs.core.cons.call(null,new cljs.core.Keyword(null,"require","require",-468001333),args);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
});

cljs.core$macros.require.cljs$lang$maxFixedArity = (2);

cljs.core$macros.require.cljs$lang$applyTo = (function (seq21198){
var G__21199 = cljs.core.first.call(null,seq21198);
var seq21198__$1 = cljs.core.next.call(null,seq21198);
var G__21200 = cljs.core.first.call(null,seq21198__$1);
var seq21198__$2 = cljs.core.next.call(null,seq21198__$1);
return cljs.core$macros.require.cljs$core$IFn$_invoke$arity$variadic(G__21199,G__21200,seq21198__$2);
});


cljs.core$macros.require.cljs$lang$macro = true;
/**
 * Similar to require but only for macros.
 */
cljs.core$macros.require_macros = (function cljs$core$macros$require_macros(var_args){
var args__10360__auto__ = [];
var len__10353__auto___21207 = arguments.length;
var i__10354__auto___21208 = (0);
while(true){
if((i__10354__auto___21208 < len__10353__auto___21207)){
args__10360__auto__.push((arguments[i__10354__auto___21208]));

var G__21209 = (i__10354__auto___21208 + (1));
i__10354__auto___21208 = G__21209;
continue;
} else {
}
break;
}

var argseq__10361__auto__ = ((((2) < args__10360__auto__.length))?(new cljs.core.IndexedSeq(args__10360__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.require_macros.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10361__auto__);
});

cljs.core$macros.require_macros.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ns*","ns*",1840949383,null)),(function (){var x__10082__auto__ = cljs.core.cons.call(null,new cljs.core.Keyword(null,"require-macros","require-macros",707947416),args);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
});

cljs.core$macros.require_macros.cljs$lang$maxFixedArity = (2);

cljs.core$macros.require_macros.cljs$lang$applyTo = (function (seq21204){
var G__21205 = cljs.core.first.call(null,seq21204);
var seq21204__$1 = cljs.core.next.call(null,seq21204);
var G__21206 = cljs.core.first.call(null,seq21204__$1);
var seq21204__$2 = cljs.core.next.call(null,seq21204__$1);
return cljs.core$macros.require_macros.cljs$core$IFn$_invoke$arity$variadic(G__21205,G__21206,seq21204__$2);
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
var args__10360__auto__ = [];
var len__10353__auto___21213 = arguments.length;
var i__10354__auto___21214 = (0);
while(true){
if((i__10354__auto___21214 < len__10353__auto___21213)){
args__10360__auto__.push((arguments[i__10354__auto___21214]));

var G__21215 = (i__10354__auto___21214 + (1));
i__10354__auto___21214 = G__21215;
continue;
} else {
}
break;
}

var argseq__10361__auto__ = ((((2) < args__10360__auto__.length))?(new cljs.core.IndexedSeq(args__10360__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.use.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10361__auto__);
});

cljs.core$macros.use.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ns*","ns*",1840949383,null)),(function (){var x__10082__auto__ = cljs.core.cons.call(null,new cljs.core.Keyword(null,"use","use",-1846382424),args);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
});

cljs.core$macros.use.cljs$lang$maxFixedArity = (2);

cljs.core$macros.use.cljs$lang$applyTo = (function (seq21210){
var G__21211 = cljs.core.first.call(null,seq21210);
var seq21210__$1 = cljs.core.next.call(null,seq21210);
var G__21212 = cljs.core.first.call(null,seq21210__$1);
var seq21210__$2 = cljs.core.next.call(null,seq21210__$1);
return cljs.core$macros.use.cljs$core$IFn$_invoke$arity$variadic(G__21211,G__21212,seq21210__$2);
});


cljs.core$macros.use.cljs$lang$macro = true;
/**
 * Similar to use but only for macros.
 */
cljs.core$macros.use_macros = (function cljs$core$macros$use_macros(var_args){
var args__10360__auto__ = [];
var len__10353__auto___21219 = arguments.length;
var i__10354__auto___21220 = (0);
while(true){
if((i__10354__auto___21220 < len__10353__auto___21219)){
args__10360__auto__.push((arguments[i__10354__auto___21220]));

var G__21221 = (i__10354__auto___21220 + (1));
i__10354__auto___21220 = G__21221;
continue;
} else {
}
break;
}

var argseq__10361__auto__ = ((((2) < args__10360__auto__.length))?(new cljs.core.IndexedSeq(args__10360__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.use_macros.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10361__auto__);
});

cljs.core$macros.use_macros.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ns*","ns*",1840949383,null)),(function (){var x__10082__auto__ = cljs.core.cons.call(null,new cljs.core.Keyword(null,"use-macros","use-macros",-905638393),args);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
});

cljs.core$macros.use_macros.cljs$lang$maxFixedArity = (2);

cljs.core$macros.use_macros.cljs$lang$applyTo = (function (seq21216){
var G__21217 = cljs.core.first.call(null,seq21216);
var seq21216__$1 = cljs.core.next.call(null,seq21216);
var G__21218 = cljs.core.first.call(null,seq21216__$1);
var seq21216__$2 = cljs.core.next.call(null,seq21216__$1);
return cljs.core$macros.use_macros.cljs$core$IFn$_invoke$arity$variadic(G__21217,G__21218,seq21216__$2);
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
var args__10360__auto__ = [];
var len__10353__auto___21225 = arguments.length;
var i__10354__auto___21226 = (0);
while(true){
if((i__10354__auto___21226 < len__10353__auto___21225)){
args__10360__auto__.push((arguments[i__10354__auto___21226]));

var G__21227 = (i__10354__auto___21226 + (1));
i__10354__auto___21226 = G__21227;
continue;
} else {
}
break;
}

var argseq__10361__auto__ = ((((2) < args__10360__auto__.length))?(new cljs.core.IndexedSeq(args__10360__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.import$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10361__auto__);
});

cljs.core$macros.import$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,import_symbols_or_lists){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ns*","ns*",1840949383,null)),(function (){var x__10082__auto__ = cljs.core.cons.call(null,new cljs.core.Keyword(null,"import","import",-1399500709),import_symbols_or_lists);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
});

cljs.core$macros.import$.cljs$lang$maxFixedArity = (2);

cljs.core$macros.import$.cljs$lang$applyTo = (function (seq21222){
var G__21223 = cljs.core.first.call(null,seq21222);
var seq21222__$1 = cljs.core.next.call(null,seq21222);
var G__21224 = cljs.core.first.call(null,seq21222__$1);
var seq21222__$2 = cljs.core.next.call(null,seq21222__$1);
return cljs.core$macros.import$.cljs$core$IFn$_invoke$arity$variadic(G__21223,G__21224,seq21222__$2);
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
var args__10360__auto__ = [];
var len__10353__auto___21231 = arguments.length;
var i__10354__auto___21232 = (0);
while(true){
if((i__10354__auto___21232 < len__10353__auto___21231)){
args__10360__auto__.push((arguments[i__10354__auto___21232]));

var G__21233 = (i__10354__auto___21232 + (1));
i__10354__auto___21232 = G__21233;
continue;
} else {
}
break;
}

var argseq__10361__auto__ = ((((2) < args__10360__auto__.length))?(new cljs.core.IndexedSeq(args__10360__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.refer_clojure.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10361__auto__);
});

cljs.core$macros.refer_clojure.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ns*","ns*",1840949383,null)),(function (){var x__10082__auto__ = cljs.core.cons.call(null,new cljs.core.Keyword(null,"refer-clojure","refer-clojure",813784440),args);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
});

cljs.core$macros.refer_clojure.cljs$lang$maxFixedArity = (2);

cljs.core$macros.refer_clojure.cljs$lang$applyTo = (function (seq21228){
var G__21229 = cljs.core.first.call(null,seq21228);
var seq21228__$1 = cljs.core.next.call(null,seq21228);
var G__21230 = cljs.core.first.call(null,seq21228__$1);
var seq21228__$2 = cljs.core.next.call(null,seq21228__$1);
return cljs.core$macros.refer_clojure.cljs$core$IFn$_invoke$arity$variadic(G__21229,G__21230,seq21228__$2);
});


cljs.core$macros.refer_clojure.cljs$lang$macro = true;
cljs.core$macros.load_file_STAR_ = (function cljs$core$macros$load_file_STAR_(_AMPERSAND_form,_AMPERSAND_env,f){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","goog","js/goog",-70605150,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"nodeGlobalRequire","nodeGlobalRequire",167018599,null)),(function (){var x__10082__auto__ = f;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__10082__auto__ = cljs.analyzer.macroexpand_1.call(null,_AMPERSAND_env,form);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
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
var G__21234 = form_SINGLEQUOTE_;
var G__21235 = cljs.analyzer.macroexpand_1.call(null,env,form_SINGLEQUOTE_);
form__$1 = G__21234;
form_SINGLEQUOTE_ = G__21235;
continue;
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__10082__auto__ = form_SINGLEQUOTE_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
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
var and__9233__auto__ = cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,fdecl));
if(and__9233__auto__){
return cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),cljs.core.ffirst.call(null,fdecl));
} else {
return and__9233__auto__;
}
});
cljs.core$macros.variadic_fn_STAR_ = (function cljs$core$macros$variadic_fn_STAR_(var_args){
var args21236 = [];
var len__10353__auto___21243 = arguments.length;
var i__10354__auto___21244 = (0);
while(true){
if((i__10354__auto___21244 < len__10353__auto___21243)){
args21236.push((arguments[i__10354__auto___21244]));

var G__21245 = (i__10354__auto___21244 + (1));
i__10354__auto___21244 = G__21245;
continue;
} else {
}
break;
}

var G__21238 = args21236.length;
switch (G__21238) {
case 2:
return cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21236.length)].join('')));

}
});

cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (sym,method){
return cljs.core$macros.variadic_fn_STAR_.call(null,sym,method,true);
});

cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (sym,p__21239,solo){
var vec__21240 = p__21239;
var seq__21241 = cljs.core.seq.call(null,vec__21240);
var first__21242 = cljs.core.first.call(null,seq__21241);
var seq__21241__$1 = cljs.core.next.call(null,seq__21241);
var arglist = first__21242;
var body = seq__21241__$1;
var method = vec__21240;
var sig = cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),arglist);
var restarg = cljs.core.gensym.call(null,"seq");
var get_delegate = ((function (sig,restarg,vec__21240,seq__21241,first__21242,seq__21241__$1,arglist,body,method){
return (function cljs$core$macros$get_delegate(){
return new cljs.core.Symbol(null,"cljs$core$IFn$_invoke$arity$variadic","cljs$core$IFn$_invoke$arity$variadic",-378825034,null);
});})(sig,restarg,vec__21240,seq__21241,first__21242,seq__21241__$1,arglist,body,method))
;
var get_delegate_prop = ((function (sig,restarg,vec__21240,seq__21241,first__21242,seq__21241__$1,arglist,body,method){
return (function cljs$core$macros$get_delegate_prop(){
return cljs.core.symbol.call(null,[cljs.core.str("-"),cljs.core.str(get_delegate.call(null))].join(''));
});})(sig,restarg,vec__21240,seq__21241,first__21242,seq__21241__$1,arglist,body,method))
;
var param_bind = ((function (sig,restarg,vec__21240,seq__21241,first__21242,seq__21241__$1,arglist,body,method){
return (function cljs$core$macros$param_bind(param){
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__10082__auto__ = param;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__10082__auto__ = cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null),cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"/home/ru/clojure/flights-pro/resources/public/js/out/cljs/core.cljc"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2877),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj.call(null,cljs.core.List.EMPTY,49),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2877),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj.call(null,cljs.core.List.EMPTY,54),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__10082__auto__ = cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core","next","cljs.core/next",-1291438473,null),cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"/home/ru/clojure/flights-pro/resources/public/js/out/cljs/core.cljc"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2878),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj.call(null,cljs.core.List.EMPTY,51),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2878),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj.call(null,cljs.core.List.EMPTY,55),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})()))));
});})(sig,restarg,vec__21240,seq__21241,first__21242,seq__21241__$1,arglist,body,method))
;
var apply_to = ((function (sig,restarg,vec__21240,seq__21241,first__21242,seq__21241__$1,arglist,body,method){
return (function cljs$core$macros$apply_to(){
if(((1) < cljs.core.count.call(null,sig))){
var params = cljs.core.repeatedly.call(null,(cljs.core.count.call(null,sig) - (1)),cljs.core.gensym);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__10082__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__10082__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__10082__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.mapcat.call(null,param_bind,params)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__10082__auto__ = sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__10082__auto__ = get_delegate.call(null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),params,(function (){var x__10082__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__10082__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__10082__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__10082__auto__ = sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__10082__auto__ = get_delegate.call(null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__10082__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
}
});})(sig,restarg,vec__21240,seq__21241,first__21242,seq__21241__$1,arglist,body,method))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__10082__auto__ = sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = get_delegate_prop.call(null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__10082__auto__ = cljs.core.vec.call(null,sig);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(cljs.core.truth_(solo)?cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__10082__auto__ = sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-cljs$lang$maxFixedArity","-cljs$lang$maxFixedArity",-1481434279,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = (cljs.core.count.call(null,sig) - (1));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())))):null),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__10082__auto__ = sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-cljs$lang$applyTo","-cljs$lang$applyTo",-225535181,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = apply_to.call(null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
});

cljs.core$macros.variadic_fn_STAR_.cljs$lang$maxFixedArity = 3;

cljs.core$macros.copy_arguments = (function cljs$core$macros$copy_arguments(_AMPERSAND_form,_AMPERSAND_env,dest){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__10082__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"len__21247__auto__","len__21247__auto__",-1973598838,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__10082__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__21248__auto__","i__21248__auto__",1580517598,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__21248__auto__","i__21248__auto__",1580517598,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"len__21247__auto__","len__21247__auto__",-1973598838,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".push",".push",-1497267248,null)),(function (){var x__10082__auto__ = dest;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aget","cljs.core$macros/aget",1976136178,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__21248__auto__","i__21248__auto__",1580517598,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__21248__auto__","i__21248__auto__",1580517598,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
});

cljs.core$macros.copy_arguments.cljs$lang$macro = true;
cljs.core$macros.variadic_fn = (function cljs$core$macros$variadic_fn(name,meta,p__21251,emit_var_QMARK_){
var vec__21258 = p__21251;
var vec__21261 = cljs.core.nth.call(null,vec__21258,(0),null);
var seq__21262 = cljs.core.seq.call(null,vec__21261);
var first__21263 = cljs.core.first.call(null,seq__21262);
var seq__21262__$1 = cljs.core.next.call(null,seq__21262);
var arglist = first__21263;
var body = seq__21262__$1;
var method = vec__21261;
var fdecl = vec__21258;
var dest_args = ((function (vec__21258,vec__21261,seq__21262,first__21263,seq__21262__$1,arglist,body,method,fdecl){
return (function cljs$core$macros$variadic_fn_$_dest_args(c){
return cljs.core.map.call(null,((function (vec__21258,vec__21261,seq__21262,first__21263,seq__21262__$1,arglist,body,method,fdecl){
return (function (n){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aget","cljs.core$macros/aget",1976136178,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
});})(vec__21258,vec__21261,seq__21262,first__21263,seq__21262__$1,arglist,body,method,fdecl))
,cljs.core.range.call(null,c));
});})(vec__21258,vec__21261,seq__21262,first__21263,seq__21262__$1,arglist,body,method,fdecl))
;
var rname = cljs.core.symbol.call(null,[cljs.core.str(cljs.analyzer._STAR_cljs_ns_STAR_)].join(''),[cljs.core.str(name)].join(''));
var sig = cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),arglist);
var c_1 = (cljs.core.count.call(null,sig) - (1));
var meta__$1 = cljs.core.assoc.call(null,meta,new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",882626057),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),c_1,new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sig], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),(function (){var x__10082__auto__ = arglist;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.doall.call(null,cljs.core.map.call(null,meta,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arglist], null)))], null));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"def","def",597100991,null)),(function (){var x__10082__auto__ = cljs.core.with_meta.call(null,name,meta__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__10082__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"var_args","var_args",1214280389,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__10082__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args__21249__auto__","args__21249__auto__",-1336201972,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","copy-arguments","cljs.core$macros/copy-arguments",-1675962356,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args__21249__auto__","args__21249__auto__",-1336201972,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__10082__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argseq__21250__auto__","argseq__21250__auto__",-901358523,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__10082__auto__ = c_1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args__21249__auto__","args__21249__auto__",-1336201972,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__10082__auto__ = cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core","IndexedSeq","cljs.core/IndexedSeq",-228688698,null),cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"/home/ru/clojure/flights-pro/resources/public/js/out/cljs/core.cljc"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2925),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj.call(null,cljs.core.List.EMPTY,55),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2925),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj.call(null,cljs.core.List.EMPTY,75),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".slice",".slice",1874048374,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args__21249__auto__","args__21249__auto__",-1336201972,null)),(function (){var x__10082__auto__ = c_1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__10082__auto__ = rname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cljs$core$IFn$_invoke$arity$variadic","cljs$core$IFn$_invoke$arity$variadic",-378825034,null)),dest_args.call(null,c_1),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argseq__21250__auto__","argseq__21250__auto__",-901358523,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core$macros.variadic_fn_STAR_.call(null,rname,method);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = (cljs.core.truth_(emit_var_QMARK_)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"var","var",870848730,null)),(function (){var x__10082__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})()))):null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
});
cljs.core$macros.multi_arity_fn = (function cljs$core$macros$multi_arity_fn(name,meta,fdecl,emit_var_QMARK_){
var dest_args = (function cljs$core$macros$multi_arity_fn_$_dest_args(c){
return cljs.core.map.call(null,(function (n){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aget","cljs.core$macros/aget",1976136178,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
}),cljs.core.range.call(null,c));
});
var fixed_arity = (function cljs$core$macros$multi_arity_fn_$_fixed_arity(rname,sig){
var c = cljs.core.count.call(null,sig);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__10082__auto__ = rname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__10082__auto__ = cljs.core.symbol.call(null,[cljs.core.str("cljs$core$IFn$_invoke$arity$"),cljs.core.str(c)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),dest_args.call(null,c))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())))], null);
});
var fn_method = (function cljs$core$macros$multi_arity_fn_$_fn_method(p__21288){
var vec__21292 = p__21288;
var seq__21293 = cljs.core.seq.call(null,vec__21292);
var first__21294 = cljs.core.first.call(null,seq__21293);
var seq__21293__$1 = cljs.core.next.call(null,seq__21293);
var sig = first__21294;
var body = seq__21293__$1;
var method = vec__21292;
if(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),sig))){
return cljs.core$macros.variadic_fn_STAR_.call(null,name,method,false);
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__10082__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.symbol.call(null,[cljs.core.str("-cljs$core$IFn$_invoke$arity$"),cljs.core.str(cljs.core.count.call(null,sig))].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__10082__auto__ = method;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
}
});
var rname = cljs.core.symbol.call(null,[cljs.core.str(cljs.analyzer._STAR_cljs_ns_STAR_)].join(''),[cljs.core.str(name)].join(''));
var arglists = cljs.core.map.call(null,cljs.core.first,fdecl);
var varsig_QMARK_ = ((function (rname,arglists){
return (function (p1__21264_SHARP_){
return cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),p1__21264_SHARP_);
});})(rname,arglists))
;
var variadic = cljs.core.boolean$.call(null,cljs.core.some.call(null,varsig_QMARK_,arglists));
var sigs = cljs.core.remove.call(null,varsig_QMARK_,arglists);
var maxfa = cljs.core.apply.call(null,cljs.core.max,cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.count,sigs),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.count.call(null,cljs.core.first.call(null,cljs.core.filter.call(null,varsig_QMARK_,arglists))) - (2))], null)));
var meta__$1 = cljs.core.assoc.call(null,meta,new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",882626057),variadic,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),maxfa,new cljs.core.Keyword(null,"method-params","method-params",-980792179),sigs,new cljs.core.Keyword(null,"arglists","arglists",1661989754),arglists,new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.doall.call(null,cljs.core.map.call(null,meta,arglists))], null));
var args_sym = cljs.core.gensym.call(null,"args");
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"def","def",597100991,null)),(function (){var x__10082__auto__ = cljs.core.with_meta.call(null,name,meta__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__10082__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"var_args","var_args",1214280389,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__10082__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__10082__auto__ = args_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","copy-arguments","cljs.core$macros/copy-arguments",-1675962356,null)),(function (){var x__10082__auto__ = args_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","case","cljs.core$macros/case",-2131866965,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),(function (){var x__10082__auto__ = args_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),cljs.core.mapcat.call(null,((function (rname,arglists,varsig_QMARK_,variadic,sigs,maxfa,meta__$1,args_sym){
return (function (p1__21265_SHARP_){
return fixed_arity.call(null,rname,p1__21265_SHARP_);
});})(rname,arglists,varsig_QMARK_,variadic,sigs,maxfa,meta__$1,args_sym))
,sigs),(function (){var x__10082__auto__ = ((variadic)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__10082__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argseq__21266__auto__","argseq__21266__auto__",1484232004,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__10082__auto__ = cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core","IndexedSeq","cljs.core/IndexedSeq",-228688698,null),cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"/home/ru/clojure/flights-pro/resources/public/js/out/cljs/core.cljc"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2983),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj.call(null,cljs.core.List.EMPTY,58),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2983),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj.call(null,cljs.core.List.EMPTY,78),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".slice",".slice",1874048374,null)),(function (){var x__10082__auto__ = args_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = maxfa;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__10082__auto__ = rname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cljs$core$IFn$_invoke$arity$variadic","cljs$core$IFn$_invoke$arity$variadic",-378825034,null)),dest_args.call(null,maxfa),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argseq__21266__auto__","argseq__21266__auto__",1484232004,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})()))):(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(meta__$1))?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","str","cljs.core$macros/str",-2019499702,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"Invalid arity: "),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),(function (){var x__10082__auto__ = args_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(2)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})()))):cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","str","cljs.core$macros/str",-2019499702,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"Invalid arity: "),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),(function (){var x__10082__auto__ = args_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),cljs.core.map.call(null,fn_method,fdecl),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__10082__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__10082__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-cljs$lang$maxFixedArity","-cljs$lang$maxFixedArity",-1481434279,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = maxfa;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),(function (){var x__10082__auto__ = (cljs.core.truth_(emit_var_QMARK_)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"var","var",870848730,null)),(function (){var x__10082__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})()))):null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
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
var fdecl__$3 = ((cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,fdecl__$2)))?(function (){var x__10082__auto__ = fdecl__$2;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})():fdecl__$2);
var m__$2 = ((cljs.core.map_QMARK_.call(null,cljs.core.last.call(null,fdecl__$3)))?cljs.core.conj.call(null,m__$1,cljs.core.last.call(null,fdecl__$3)):m__$1);
var fdecl__$4 = ((cljs.core.map_QMARK_.call(null,cljs.core.last.call(null,fdecl__$3)))?cljs.core.butlast.call(null,fdecl__$3):fdecl__$3);
var m__$3 = cljs.core.conj.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core._conj.call(null,(function (){var x__10082__auto__ = cljs.core$macros.sigs.call(null,fdecl__$4);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})(),new cljs.core.Symbol(null,"quote","quote",1377916282,null))], null),m__$2);
var m__$4 = cljs.core.conj.call(null,(cljs.core.truth_(cljs.core.meta.call(null,name))?cljs.core.meta.call(null,name):cljs.core.PersistentArrayMap.EMPTY),m__$3);
if(cljs.core.truth_(cljs.core$macros.multi_arity_fn_QMARK_.call(null,fdecl__$4))){
return cljs.core$macros.multi_arity_fn.call(null,name,(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))?cljs.core.update_in.call(null,m__$4,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516)], null),cljs.core.conj,"@param {...*} var_args"):m__$4),fdecl__$4,new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
} else {
if(cljs.core.truth_(cljs.core$macros.variadic_fn_QMARK_.call(null,fdecl__$4))){
return cljs.core$macros.variadic_fn.call(null,name,(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))?cljs.core.update_in.call(null,m__$4,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516)], null),cljs.core.conj,"@param {...*} var_args"):m__$4),fdecl__$4,new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
} else {
return cljs.core._conj.call(null,(function (){var x__10082__auto__ = cljs.core.with_meta.call(null,name,m__$4);
return cljs.core._conj.call(null,(function (){var x__10082__auto____$1 = cljs.core.cons.call(null,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null),fdecl__$4);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto____$1);
})(),x__10082__auto__);
})(),new cljs.core.Symbol(null,"def","def",597100991,null));

}
}
};
var cljs$core$macros$defn = function (_AMPERSAND_form,_AMPERSAND_env,name,var_args){
var fdecl = null;
if (arguments.length > 3) {
var G__21295__i = 0, G__21295__a = new Array(arguments.length -  3);
while (G__21295__i < G__21295__a.length) {G__21295__a[G__21295__i] = arguments[G__21295__i + 3]; ++G__21295__i;}
  fdecl = new cljs.core.IndexedSeq(G__21295__a,0);
} 
return cljs$core$macros$defn__delegate.call(this,_AMPERSAND_form,_AMPERSAND_env,name,fdecl);};
cljs$core$macros$defn.cljs$lang$maxFixedArity = 3;
cljs$core$macros$defn.cljs$lang$applyTo = (function (arglist__21296){
var _AMPERSAND_form = cljs.core.first(arglist__21296);
arglist__21296 = cljs.core.next(arglist__21296);
var _AMPERSAND_env = cljs.core.first(arglist__21296);
arglist__21296 = cljs.core.next(arglist__21296);
var name = cljs.core.first(arglist__21296);
var fdecl = cljs.core.rest(arglist__21296);
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
var args__10360__auto__ = [];
var len__10353__auto___21301 = arguments.length;
var i__10354__auto___21302 = (0);
while(true){
if((i__10354__auto___21302 < len__10353__auto___21301)){
args__10360__auto__.push((arguments[i__10354__auto___21302]));

var G__21303 = (i__10354__auto___21302 + (1));
i__10354__auto___21302 = G__21303;
continue;
} else {
}
break;
}

var argseq__10361__auto__ = ((((3) < args__10360__auto__.length))?(new cljs.core.IndexedSeq(args__10360__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.defmacro.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10361__auto__);
});

cljs.core$macros.defmacro.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,args){
var prefix = (function (){var p = (function (){var x__10082__auto__ = cljs.core.vary_meta.call(null,name,cljs.core.assoc,new cljs.core.Keyword(null,"macro","macro",-867863404),true);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
})();
var args__$1 = args;
while(true){
var f = cljs.core.first.call(null,args__$1);
if(typeof f === 'string'){
var G__21304 = cljs.core.cons.call(null,f,p);
var G__21305 = cljs.core.next.call(null,args__$1);
p = G__21304;
args__$1 = G__21305;
continue;
} else {
if(cljs.core.map_QMARK_.call(null,f)){
var G__21306 = cljs.core.cons.call(null,f,p);
var G__21307 = cljs.core.next.call(null,args__$1);
p = G__21306;
args__$1 = G__21307;
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
var G__21308 = cljs.core.next.call(null,fd);
fd = G__21308;
continue;
} else {
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,fd))){
var G__21309 = cljs.core.next.call(null,fd);
fd = G__21309;
continue;
} else {
return fd;
}
}
break;
}
})();
var fdecl__$1 = ((cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,fdecl)))?(function (){var x__10082__auto__ = fdecl;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto__);
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
var G__21310 = cljs.core.conj.call(null,acc,add_implicit_args.call(null,d));
var G__21311 = cljs.core.next.call(null,ds);
acc = G__21310;
ds = G__21311;
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
var G__21312 = cljs.core.next.call(null,p);
var G__21313 = cljs.core.cons.call(null,cljs.core.first.call(null,p),d);
p = G__21312;
d = G__21313;
continue;
} else {
return d;
}
break;
}
})();
return cljs.core._conj.call(null,(function (){var x__10082__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null),decl);
return cljs.core._conj.call(null,(function (){var x__10082__auto____$1 = cljs.core._conj.call(null,(function (){var x__10082__auto____$1 = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__10082__auto____$1 = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto____$1);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-cljs$lang$macro","-cljs$lang$macro",443600924,null)))));
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,true),x__10082__auto____$1);
})(),new cljs.core.Symbol(null,"set!","set!",250714521,null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__10082__auto____$1);
})(),x__10082__auto__);
})(),new cljs.core.Symbol(null,"do","do",1686842252,null));
});

cljs.core$macros.defmacro.cljs$lang$maxFixedArity = (3);

cljs.core$macros.defmacro.cljs$lang$applyTo = (function (seq21297){
var G__21298 = cljs.core.first.call(null,seq21297);
var seq21297__$1 = cljs.core.next.call(null,seq21297);
var G__21299 = cljs.core.first.call(null,seq21297__$1);
var seq21297__$2 = cljs.core.next.call(null,seq21297__$1);
var G__21300 = cljs.core.first.call(null,seq21297__$2);
var seq21297__$3 = cljs.core.next.call(null,seq21297__$2);
return cljs.core$macros.defmacro.cljs$core$IFn$_invoke$arity$variadic(G__21298,G__21299,G__21300,seq21297__$3);
});

cljs.core$macros.defmacro.cljs$lang$macro = true;

//# sourceMappingURL=core$macros.js.map