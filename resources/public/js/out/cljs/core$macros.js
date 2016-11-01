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
var args__9933__auto__ = [];
var len__9926__auto___15675 = arguments.length;
var i__9927__auto___15676 = (0);
while(true){
if((i__9927__auto___15676 < len__9926__auto___15675)){
args__9933__auto__.push((arguments[i__9927__auto___15676]));

var G__15677 = (i__9927__auto___15676 + (1));
i__9927__auto___15676 = G__15677;
continue;
} else {
}
break;
}

var argseq__9934__auto__ = ((((3) < args__9933__auto__.length))?(new cljs.core.IndexedSeq(args__9933__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9934__auto__);
});

cljs.core$macros.__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
var x__$1 = x;
var forms__$1 = forms;
while(true){
if(cljs.core.truth_(forms__$1)){
var form = cljs.core.first.call(null,forms__$1);
var threaded = ((cljs.core.seq_QMARK_.call(null,form))?cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9655__auto__ = cljs.core.first.call(null,form);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = x__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),cljs.core.next.call(null,form)))),cljs.core.meta.call(null,form)):(function (){var x__9655__auto__ = form;
return cljs.core._conj.call(null,(function (){var x__9655__auto____$1 = x__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto____$1);
})(),x__9655__auto__);
})());
var G__15678 = threaded;
var G__15679 = cljs.core.next.call(null,forms__$1);
x__$1 = G__15678;
forms__$1 = G__15679;
continue;
} else {
return x__$1;
}
break;
}
});

cljs.core$macros.__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.__GT_.cljs$lang$applyTo = (function (seq15671){
var G__15672 = cljs.core.first.call(null,seq15671);
var seq15671__$1 = cljs.core.next.call(null,seq15671);
var G__15673 = cljs.core.first.call(null,seq15671__$1);
var seq15671__$2 = cljs.core.next.call(null,seq15671__$1);
var G__15674 = cljs.core.first.call(null,seq15671__$2);
var seq15671__$3 = cljs.core.next.call(null,seq15671__$2);
return cljs.core$macros.__GT_.cljs$core$IFn$_invoke$arity$variadic(G__15672,G__15673,G__15674,seq15671__$3);
});


cljs.core$macros.__GT_.cljs$lang$macro = true;
/**
 * Threads the expr through the forms. Inserts x as the
 *   last item in the first form, making a list of it if it is not a
 *   list already. If there are more forms, inserts the first form as the
 *   last item in second form, etc.
 */
cljs.core$macros.__GT__GT_ = (function cljs$core$macros$__GT__GT_(var_args){
var args__9933__auto__ = [];
var len__9926__auto___15684 = arguments.length;
var i__9927__auto___15685 = (0);
while(true){
if((i__9927__auto___15685 < len__9926__auto___15684)){
args__9933__auto__.push((arguments[i__9927__auto___15685]));

var G__15686 = (i__9927__auto___15685 + (1));
i__9927__auto___15685 = G__15686;
continue;
} else {
}
break;
}

var argseq__9934__auto__ = ((((3) < args__9933__auto__.length))?(new cljs.core.IndexedSeq(args__9933__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.__GT__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9934__auto__);
});

cljs.core$macros.__GT__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
var x__$1 = x;
var forms__$1 = forms;
while(true){
if(cljs.core.truth_(forms__$1)){
var form = cljs.core.first.call(null,forms__$1);
var threaded = ((cljs.core.seq_QMARK_.call(null,form))?cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9655__auto__ = cljs.core.first.call(null,form);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),cljs.core.next.call(null,form),(function (){var x__9655__auto__ = x__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})()))),cljs.core.meta.call(null,form)):(function (){var x__9655__auto__ = form;
return cljs.core._conj.call(null,(function (){var x__9655__auto____$1 = x__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto____$1);
})(),x__9655__auto__);
})());
var G__15687 = threaded;
var G__15688 = cljs.core.next.call(null,forms__$1);
x__$1 = G__15687;
forms__$1 = G__15688;
continue;
} else {
return x__$1;
}
break;
}
});

cljs.core$macros.__GT__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.__GT__GT_.cljs$lang$applyTo = (function (seq15680){
var G__15681 = cljs.core.first.call(null,seq15680);
var seq15680__$1 = cljs.core.next.call(null,seq15680);
var G__15682 = cljs.core.first.call(null,seq15680__$1);
var seq15680__$2 = cljs.core.next.call(null,seq15680__$1);
var G__15683 = cljs.core.first.call(null,seq15680__$2);
var seq15680__$3 = cljs.core.next.call(null,seq15680__$2);
return cljs.core$macros.__GT__GT_.cljs$core$IFn$_invoke$arity$variadic(G__15681,G__15682,G__15683,seq15680__$3);
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
var args15689 = [];
var len__9926__auto___15697 = arguments.length;
var i__9927__auto___15698 = (0);
while(true){
if((i__9927__auto___15698 < len__9926__auto___15697)){
args15689.push((arguments[i__9927__auto___15698]));

var G__15699 = (i__9927__auto___15698 + (1));
i__9927__auto___15698 = G__15699;
continue;
} else {
}
break;
}

var G__15696 = args15689.length;
switch (G__15696) {
case 4:
return cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__9945__auto__ = (new cljs.core.IndexedSeq(args15689.slice((4)),(0),null));
return cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__9945__auto__);

}
});

cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,form){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9655__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
});

cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,form,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"..","..",-300507420,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9655__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),more)));
});

cljs.core$macros._DOT__DOT_.cljs$lang$applyTo = (function (seq15690){
var G__15691 = cljs.core.first.call(null,seq15690);
var seq15690__$1 = cljs.core.next.call(null,seq15690);
var G__15692 = cljs.core.first.call(null,seq15690__$1);
var seq15690__$2 = cljs.core.next.call(null,seq15690__$1);
var G__15693 = cljs.core.first.call(null,seq15690__$2);
var seq15690__$3 = cljs.core.next.call(null,seq15690__$2);
var G__15694 = cljs.core.first.call(null,seq15690__$3);
var seq15690__$4 = cljs.core.next.call(null,seq15690__$3);
return cljs.core$macros._DOT__DOT_.cljs$core$IFn$_invoke$arity$variadic(G__15691,G__15692,G__15693,G__15694,seq15690__$4);
});

cljs.core$macros._DOT__DOT_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._DOT__DOT_.cljs$lang$macro = true;
/**
 * Ignores body, yields nil
 */
cljs.core$macros.comment = (function cljs$core$macros$comment(var_args){
var args__9933__auto__ = [];
var len__9926__auto___15704 = arguments.length;
var i__9927__auto___15705 = (0);
while(true){
if((i__9927__auto___15705 < len__9926__auto___15704)){
args__9933__auto__.push((arguments[i__9927__auto___15705]));

var G__15706 = (i__9927__auto___15705 + (1));
i__9927__auto___15705 = G__15706;
continue;
} else {
}
break;
}

var argseq__9934__auto__ = ((((2) < args__9933__auto__.length))?(new cljs.core.IndexedSeq(args__9933__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.comment.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9934__auto__);
});

cljs.core$macros.comment.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return null;
});

cljs.core$macros.comment.cljs$lang$maxFixedArity = (2);

cljs.core$macros.comment.cljs$lang$applyTo = (function (seq15701){
var G__15702 = cljs.core.first.call(null,seq15701);
var seq15701__$1 = cljs.core.next.call(null,seq15701);
var G__15703 = cljs.core.first.call(null,seq15701__$1);
var seq15701__$2 = cljs.core.next.call(null,seq15701__$1);
return cljs.core$macros.comment.cljs$core$IFn$_invoke$arity$variadic(G__15702,G__15703,seq15701__$2);
});


cljs.core$macros.comment.cljs$lang$macro = true;
/**
 * Takes a set of test/expr pairs. It evaluates each test one at a
 *   time.  If a test returns logical true, cond evaluates and returns
 *   the value of the corresponding expr and doesn't evaluate any of the
 *   other tests or exprs. (cond) returns nil.
 */
cljs.core$macros.cond = (function cljs$core$macros$cond(var_args){
var args__9933__auto__ = [];
var len__9926__auto___15710 = arguments.length;
var i__9927__auto___15711 = (0);
while(true){
if((i__9927__auto___15711 < len__9926__auto___15710)){
args__9933__auto__.push((arguments[i__9927__auto___15711]));

var G__15712 = (i__9927__auto___15711 + (1));
i__9927__auto___15711 = G__15712;
continue;
} else {
}
break;
}

var argseq__9934__auto__ = ((((2) < args__9933__auto__.length))?(new cljs.core.IndexedSeq(args__9933__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.cond.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9934__auto__);
});

cljs.core$macros.cond.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,clauses){
if(cljs.core.truth_(clauses)){
return cljs.core._conj.call(null,(function (){var x__9655__auto__ = cljs.core.first.call(null,clauses);
return cljs.core._conj.call(null,(function (){var x__9655__auto____$1 = ((cljs.core.next.call(null,clauses))?cljs.core.second.call(null,clauses):(function(){throw (new Error("cond requires an even number of forms"))})());
return cljs.core._conj.call(null,(function (){var x__9655__auto____$2 = cljs.core.cons.call(null,new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",2005388338,null),cljs.core.next.call(null,cljs.core.next.call(null,clauses)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto____$2);
})(),x__9655__auto____$1);
})(),x__9655__auto__);
})(),new cljs.core.Symbol(null,"if","if",1181717262,null));
} else {
return null;
}
});

cljs.core$macros.cond.cljs$lang$maxFixedArity = (2);

cljs.core$macros.cond.cljs$lang$applyTo = (function (seq15707){
var G__15708 = cljs.core.first.call(null,seq15707);
var seq15707__$1 = cljs.core.next.call(null,seq15707);
var G__15709 = cljs.core.first.call(null,seq15707__$1);
var seq15707__$2 = cljs.core.next.call(null,seq15707__$1);
return cljs.core$macros.cond.cljs$core$IFn$_invoke$arity$variadic(G__15708,G__15709,seq15707__$2);
});


cljs.core$macros.cond.cljs$lang$macro = true;
/**
 * defs the supplied var names with no bindings, useful for making forward declarations.
 */
cljs.core$macros.declare = (function cljs$core$macros$declare(var_args){
var args__9933__auto__ = [];
var len__9926__auto___15717 = arguments.length;
var i__9927__auto___15718 = (0);
while(true){
if((i__9927__auto___15718 < len__9926__auto___15717)){
args__9933__auto__.push((arguments[i__9927__auto___15718]));

var G__15719 = (i__9927__auto___15718 + (1));
i__9927__auto___15718 = G__15719;
continue;
} else {
}
break;
}

var argseq__9934__auto__ = ((((2) < args__9933__auto__.length))?(new cljs.core.IndexedSeq(args__9933__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.declare.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9934__auto__);
});

cljs.core$macros.declare.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,names){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),cljs.core.map.call(null,(function (p1__15713_SHARP_){
return cljs.core._conj.call(null,(function (){var x__9655__auto__ = cljs.core.vary_meta.call(null,p1__15713_SHARP_,cljs.core.assoc,new cljs.core.Keyword(null,"declared","declared",92336021),true);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),new cljs.core.Symbol(null,"def","def",597100991,null));
}),names))));
});

cljs.core$macros.declare.cljs$lang$maxFixedArity = (2);

cljs.core$macros.declare.cljs$lang$applyTo = (function (seq15714){
var G__15715 = cljs.core.first.call(null,seq15714);
var seq15714__$1 = cljs.core.next.call(null,seq15714);
var G__15716 = cljs.core.first.call(null,seq15714__$1);
var seq15714__$2 = cljs.core.next.call(null,seq15714__$1);
return cljs.core$macros.declare.cljs$core$IFn$_invoke$arity$variadic(G__15715,G__15716,seq15714__$2);
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
var args__9933__auto__ = [];
var len__9926__auto___15724 = arguments.length;
var i__9927__auto___15725 = (0);
while(true){
if((i__9927__auto___15725 < len__9926__auto___15724)){
args__9933__auto__.push((arguments[i__9927__auto___15725]));

var G__15726 = (i__9927__auto___15725 + (1));
i__9927__auto___15725 = G__15726;
continue;
} else {
}
break;
}

var argseq__9934__auto__ = ((((3) < args__9933__auto__.length))?(new cljs.core.IndexedSeq(args__9933__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.doto.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9934__auto__);
});

cljs.core$macros.doto.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
var gx = cljs.core.gensym.call(null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9655__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9655__auto__ = gx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),cljs.core.map.call(null,((function (gx){
return (function (f){
if(cljs.core.seq_QMARK_.call(null,f)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9655__auto__ = cljs.core.first.call(null,f);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = gx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),cljs.core.next.call(null,f))));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9655__auto__ = f;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = gx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
}
});})(gx))
,forms),(function (){var x__9655__auto__ = gx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
});

cljs.core$macros.doto.cljs$lang$maxFixedArity = (3);

cljs.core$macros.doto.cljs$lang$applyTo = (function (seq15720){
var G__15721 = cljs.core.first.call(null,seq15720);
var seq15720__$1 = cljs.core.next.call(null,seq15720);
var G__15722 = cljs.core.first.call(null,seq15720__$1);
var seq15720__$2 = cljs.core.next.call(null,seq15720__$1);
var G__15723 = cljs.core.first.call(null,seq15720__$2);
var seq15720__$3 = cljs.core.next.call(null,seq15720__$2);
return cljs.core$macros.doto.cljs$core$IFn$_invoke$arity$variadic(G__15721,G__15722,G__15723,seq15720__$3);
});


cljs.core$macros.doto.cljs$lang$macro = true;
cljs.core$macros.parse_impls = (function cljs$core$macros$parse_impls(specs){
var ret = cljs.core.PersistentArrayMap.EMPTY;
var s = specs;
while(true){
if(cljs.core.seq.call(null,s)){
var G__15727 = cljs.core.assoc.call(null,ret,cljs.core.first.call(null,s),cljs.core.take_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,s)));
var G__15728 = cljs.core.drop_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,s));
ret = G__15727;
s = G__15728;
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
return (function (p__15733){
var vec__15734 = p__15733;
var t = cljs.core.nth.call(null,vec__15734,(0),null);
var fs = cljs.core.nth.call(null,vec__15734,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","extend-type","cljs.core$macros/extend-type",1713295201,null)),(function (){var x__9655__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = p;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
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
var args__9933__auto__ = [];
var len__9926__auto___15741 = arguments.length;
var i__9927__auto___15742 = (0);
while(true){
if((i__9927__auto___15742 < len__9926__auto___15741)){
args__9933__auto__.push((arguments[i__9927__auto___15742]));

var G__15743 = (i__9927__auto___15742 + (1));
i__9927__auto___15742 = G__15743;
continue;
} else {
}
break;
}

var argseq__9934__auto__ = ((((3) < args__9933__auto__.length))?(new cljs.core.IndexedSeq(args__9933__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.extend_protocol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9934__auto__);
});

cljs.core$macros.extend_protocol.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,p,specs){
return cljs.core$macros.emit_extend_protocol.call(null,p,specs);
});

cljs.core$macros.extend_protocol.cljs$lang$maxFixedArity = (3);

cljs.core$macros.extend_protocol.cljs$lang$applyTo = (function (seq15737){
var G__15738 = cljs.core.first.call(null,seq15737);
var seq15737__$1 = cljs.core.next.call(null,seq15737);
var G__15739 = cljs.core.first.call(null,seq15737__$1);
var seq15737__$2 = cljs.core.next.call(null,seq15737__$1);
var G__15740 = cljs.core.first.call(null,seq15737__$2);
var seq15737__$3 = cljs.core.next.call(null,seq15737__$2);
return cljs.core$macros.extend_protocol.cljs$core$IFn$_invoke$arity$variadic(G__15738,G__15739,G__15740,seq15737__$3);
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
var G__15744 = cljs.core.next.call(null,params__$1);
var G__15745 = cljs.core.conj.call(null,new_params,cljs.core.first.call(null,params__$1));
var G__15746 = lets;
params__$1 = G__15744;
new_params = G__15745;
lets = G__15746;
continue;
} else {
var gparam = cljs.core.gensym.call(null,"p__");
var G__15747 = cljs.core.next.call(null,params__$1);
var G__15748 = cljs.core.conj.call(null,new_params,gparam);
var G__15749 = cljs.core.conj.call(null,cljs.core.conj.call(null,lets,cljs.core.first.call(null,params__$1)),gparam);
params__$1 = G__15747;
new_params = G__15748;
lets = G__15749;
continue;
}
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9655__auto__ = new_params;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9655__auto__ = lets;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
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
var args__9933__auto__ = [];
var len__9926__auto___15756 = arguments.length;
var i__9927__auto___15757 = (0);
while(true){
if((i__9927__auto___15757 < len__9926__auto___15756)){
args__9933__auto__.push((arguments[i__9927__auto___15757]));

var G__15758 = (i__9927__auto___15757 + (1));
i__9927__auto___15757 = G__15758;
continue;
} else {
}
break;
}

var argseq__9934__auto__ = ((((2) < args__9933__auto__.length))?(new cljs.core.IndexedSeq(args__9933__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.fn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9934__auto__);
});

cljs.core$macros.fn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,sigs){
var name = (((cljs.core.first.call(null,sigs) instanceof cljs.core.Symbol))?cljs.core.first.call(null,sigs):null);
var sigs__$1 = (cljs.core.truth_(name)?cljs.core.next.call(null,sigs):sigs);
var sigs__$2 = ((cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,sigs__$1)))?(function (){var x__9655__auto__ = sigs__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})():((cljs.core.seq_QMARK_.call(null,cljs.core.first.call(null,sigs__$1)))?sigs__$1:(function(){throw (new Error(((cljs.core.seq.call(null,sigs__$1))?[cljs.core.str("Parameter declaration "),cljs.core.str(cljs.core.first.call(null,sigs__$1)),cljs.core.str(" should be a vector")].join(''):[cljs.core.str("Parameter declaration missing")].join(''))))})()));
var psig = ((function (name,sigs__$1,sigs__$2){
return (function (sig){
if(!(cljs.core.seq_QMARK_.call(null,sig))){
throw (new Error([cljs.core.str("Invalid signature "),cljs.core.str(sig),cljs.core.str(" should be a list")].join('')));
} else {
}

var vec__15753 = sig;
var seq__15754 = cljs.core.seq.call(null,vec__15753);
var first__15755 = cljs.core.first.call(null,seq__15754);
var seq__15754__$1 = cljs.core.next.call(null,seq__15754);
var params = first__15755;
var body = seq__15754__$1;
var _ = ((!(cljs.core.vector_QMARK_.call(null,params)))?(function(){throw (new Error(((cljs.core.seq_QMARK_.call(null,cljs.core.first.call(null,sigs__$2)))?[cljs.core.str("Parameter declaration "),cljs.core.str(params),cljs.core.str(" should be a vector")].join(''):[cljs.core.str("Invalid signature "),cljs.core.str(sig),cljs.core.str(" should be a list")].join(''))))})():null);
var conds = (((cljs.core.next.call(null,body)) && (cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))))?cljs.core.first.call(null,body):null);
var body__$1 = (cljs.core.truth_(conds)?cljs.core.next.call(null,body):body);
var conds__$1 = (function (){var or__8818__auto__ = conds;
if(cljs.core.truth_(or__8818__auto__)){
return or__8818__auto__;
} else {
return cljs.core.meta.call(null,params);
}
})();
var pre = new cljs.core.Keyword(null,"pre","pre",2118456869).cljs$core$IFn$_invoke$arity$1(conds__$1);
var post = new cljs.core.Keyword(null,"post","post",269697687).cljs$core$IFn$_invoke$arity$1(conds__$1);
var body__$2 = (cljs.core.truth_(post)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9655__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"%","%",-950237169,null)),(function (){var x__9655__auto__ = ((((1) < cljs.core.count.call(null,body__$1)))?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),body__$1))):cljs.core.first.call(null,body__$1));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),cljs.core.map.call(null,((function (vec__15753,seq__15754,first__15755,seq__15754__$1,params,body,_,conds,body__$1,conds__$1,pre,post,name,sigs__$1,sigs__$2){
return (function (c){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","assert","cljs.core$macros/assert",1333198789,null)),(function (){var x__9655__auto__ = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
});})(vec__15753,seq__15754,first__15755,seq__15754__$1,params,body,_,conds,body__$1,conds__$1,pre,post,name,sigs__$1,sigs__$2))
,post),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"%","%",-950237169,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})()))):body__$1);
var body__$3 = (cljs.core.truth_(pre)?cljs.core.concat.call(null,cljs.core.map.call(null,((function (vec__15753,seq__15754,first__15755,seq__15754__$1,params,body,_,conds,body__$1,conds__$1,pre,post,body__$2,name,sigs__$1,sigs__$2){
return (function (c){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","assert","cljs.core$macros/assert",1333198789,null)),(function (){var x__9655__auto__ = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
});})(vec__15753,seq__15754,first__15755,seq__15754__$1,params,body,_,conds,body__$1,conds__$1,pre,post,body__$2,name,sigs__$1,sigs__$2))
,pre),body__$2):body__$2);
return cljs.core$macros.maybe_destructured.call(null,params,body__$3);
});})(name,sigs__$1,sigs__$2))
;
var new_sigs = cljs.core.map.call(null,psig,sigs__$2);
return cljs.core.with_meta.call(null,(cljs.core.truth_(name)?cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),name,new_sigs):cljs.core.cons.call(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new_sigs)),cljs.core.meta.call(null,_AMPERSAND_form));
});

cljs.core$macros.fn.cljs$lang$maxFixedArity = (2);

cljs.core$macros.fn.cljs$lang$applyTo = (function (seq15750){
var G__15751 = cljs.core.first.call(null,seq15750);
var seq15750__$1 = cljs.core.next.call(null,seq15750);
var G__15752 = cljs.core.first.call(null,seq15750__$1);
var seq15750__$2 = cljs.core.next.call(null,seq15750__$1);
return cljs.core$macros.fn.cljs$core$IFn$_invoke$arity$variadic(G__15751,G__15752,seq15750__$2);
});


cljs.core$macros.fn.cljs$lang$macro = true;
/**
 * same as defn, yielding non-public def
 */
cljs.core$macros.defn_ = (function cljs$core$macros$defn_(var_args){
var args__9933__auto__ = [];
var len__9926__auto___15763 = arguments.length;
var i__9927__auto___15764 = (0);
while(true){
if((i__9927__auto___15764 < len__9926__auto___15763)){
args__9933__auto__.push((arguments[i__9927__auto___15764]));

var G__15765 = (i__9927__auto___15764 + (1));
i__9927__auto___15764 = G__15765;
continue;
} else {
}
break;
}

var argseq__9934__auto__ = ((((3) < args__9933__auto__.length))?(new cljs.core.IndexedSeq(args__9933__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.defn_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9934__auto__);
});

cljs.core$macros.defn_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,decls){
return cljs.core.list_STAR_.call(null,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null),cljs.core.with_meta.call(null,name,cljs.core.assoc.call(null,cljs.core.meta.call(null,name),new cljs.core.Keyword(null,"private","private",-558947994),true)),decls);
});

cljs.core$macros.defn_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.defn_.cljs$lang$applyTo = (function (seq15759){
var G__15760 = cljs.core.first.call(null,seq15759);
var seq15759__$1 = cljs.core.next.call(null,seq15759);
var G__15761 = cljs.core.first.call(null,seq15759__$1);
var seq15759__$2 = cljs.core.next.call(null,seq15759__$1);
var G__15762 = cljs.core.first.call(null,seq15759__$2);
var seq15759__$3 = cljs.core.next.call(null,seq15759__$2);
return cljs.core$macros.defn_.cljs$core$IFn$_invoke$arity$variadic(G__15760,G__15761,G__15762,seq15759__$3);
});


cljs.core$macros.defn_.cljs$lang$macro = true;
/**
 * bindings => binding-form test
 * 
 *   If test is true, evaluates then with binding-form bound to the value of
 *   test, if not, yields else
 */
cljs.core$macros.if_let = (function cljs$core$macros$if_let(var_args){
var args15767 = [];
var len__9926__auto___15776 = arguments.length;
var i__9927__auto___15777 = (0);
while(true){
if((i__9927__auto___15777 < len__9926__auto___15776)){
args15767.push((arguments[i__9927__auto___15777]));

var G__15778 = (i__9927__auto___15777 + (1));
i__9927__auto___15777 = G__15778;
continue;
} else {
}
break;
}

var G__15775 = args15767.length;
switch (G__15775) {
case 4:
return cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__9945__auto__ = (new cljs.core.IndexedSeq(args15767.slice((5)),(0),null));
return cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__9945__auto__);

}
});

cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,then){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-let","cljs.core$macros/if-let",1291543946,null)),(function (){var x__9655__auto__ = bindings;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = then;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9655__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__15766__auto__","temp__15766__auto__",245594415,null)),(function (){var x__9655__auto__ = tst;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__15766__auto__","temp__15766__auto__",245594415,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9655__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9655__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__15766__auto__","temp__15766__auto__",245594415,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = then;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = else$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
});

cljs.core$macros.if_let.cljs$lang$applyTo = (function (seq15768){
var G__15769 = cljs.core.first.call(null,seq15768);
var seq15768__$1 = cljs.core.next.call(null,seq15768);
var G__15770 = cljs.core.first.call(null,seq15768__$1);
var seq15768__$2 = cljs.core.next.call(null,seq15768__$1);
var G__15771 = cljs.core.first.call(null,seq15768__$2);
var seq15768__$3 = cljs.core.next.call(null,seq15768__$2);
var G__15772 = cljs.core.first.call(null,seq15768__$3);
var seq15768__$4 = cljs.core.next.call(null,seq15768__$3);
var G__15773 = cljs.core.first.call(null,seq15768__$4);
var seq15768__$5 = cljs.core.next.call(null,seq15768__$4);
return cljs.core$macros.if_let.cljs$core$IFn$_invoke$arity$variadic(G__15769,G__15770,G__15771,G__15772,G__15773,seq15768__$5);
});

cljs.core$macros.if_let.cljs$lang$maxFixedArity = (5);


cljs.core$macros.if_let.cljs$lang$macro = true;
/**
 * Evaluates test. If logical false, evaluates and returns then expr,
 *   otherwise else expr, if supplied, else nil.
 */
cljs.core$macros.if_not = (function cljs$core$macros$if_not(var_args){
var args15780 = [];
var len__9926__auto___15783 = arguments.length;
var i__9927__auto___15784 = (0);
while(true){
if((i__9927__auto___15784 < len__9926__auto___15783)){
args15780.push((arguments[i__9927__auto___15784]));

var G__15785 = (i__9927__auto___15784 + (1));
i__9927__auto___15784 = G__15785;
continue;
} else {
}
break;
}

var G__15782 = args15780.length;
switch (G__15782) {
case 4:
return cljs.core$macros.if_not.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core$macros.if_not.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str((args15780.length - (2)))].join('')));

}
});

cljs.core$macros.if_not.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,test,then){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__9655__auto__ = test;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = then;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
});

cljs.core$macros.if_not.cljs$core$IFn$_invoke$arity$5 = (function (_AMPERSAND_form,_AMPERSAND_env,test,then,else$){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null)),(function (){var x__9655__auto__ = test;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = then;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = else$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
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
var args__9933__auto__ = [];
var len__9926__auto___15792 = arguments.length;
var i__9927__auto___15793 = (0);
while(true){
if((i__9927__auto___15793 < len__9926__auto___15792)){
args__9933__auto__.push((arguments[i__9927__auto___15793]));

var G__15794 = (i__9927__auto___15793 + (1));
i__9927__auto___15793 = G__15794;
continue;
} else {
}
break;
}

var argseq__9934__auto__ = ((((3) < args__9933__auto__.length))?(new cljs.core.IndexedSeq(args__9933__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.letfn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9934__auto__);
});

cljs.core$macros.letfn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,fnspecs,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"letfn*","letfn*",-110097810,null)),(function (){var x__9655__auto__ = cljs.core.vec.call(null,cljs.core.interleave.call(null,cljs.core.map.call(null,cljs.core.first,fnspecs),cljs.core.map.call(null,(function (p1__15787_SHARP_){
return cljs.core.cons.call(null,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null),p1__15787_SHARP_);
}),fnspecs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),body)));
});

cljs.core$macros.letfn.cljs$lang$maxFixedArity = (3);

cljs.core$macros.letfn.cljs$lang$applyTo = (function (seq15788){
var G__15789 = cljs.core.first.call(null,seq15788);
var seq15788__$1 = cljs.core.next.call(null,seq15788);
var G__15790 = cljs.core.first.call(null,seq15788__$1);
var seq15788__$2 = cljs.core.next.call(null,seq15788__$1);
var G__15791 = cljs.core.first.call(null,seq15788__$2);
var seq15788__$3 = cljs.core.next.call(null,seq15788__$2);
return cljs.core$macros.letfn.cljs$core$IFn$_invoke$arity$variadic(G__15789,G__15790,G__15791,seq15788__$3);
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
var args__9933__auto__ = [];
var len__9926__auto___15799 = arguments.length;
var i__9927__auto___15800 = (0);
while(true){
if((i__9927__auto___15800 < len__9926__auto___15799)){
args__9933__auto__.push((arguments[i__9927__auto___15800]));

var G__15801 = (i__9927__auto___15800 + (1));
i__9927__auto___15800 = G__15801;
continue;
} else {
}
break;
}

var argseq__9934__auto__ = ((((3) < args__9933__auto__.length))?(new cljs.core.IndexedSeq(args__9933__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.memfn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9934__auto__);
});

cljs.core$macros.memfn.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,args){
var t = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"target"),cljs.core.meta.call(null,name));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9655__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9655__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),args))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9655__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9655__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),args)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
});

cljs.core$macros.memfn.cljs$lang$maxFixedArity = (3);

cljs.core$macros.memfn.cljs$lang$applyTo = (function (seq15795){
var G__15796 = cljs.core.first.call(null,seq15795);
var seq15795__$1 = cljs.core.next.call(null,seq15795);
var G__15797 = cljs.core.first.call(null,seq15795__$1);
var seq15795__$2 = cljs.core.next.call(null,seq15795__$1);
var G__15798 = cljs.core.first.call(null,seq15795__$2);
var seq15795__$3 = cljs.core.next.call(null,seq15795__$2);
return cljs.core$macros.memfn.cljs$core$IFn$_invoke$arity$variadic(G__15796,G__15797,G__15798,seq15795__$3);
});


cljs.core$macros.memfn.cljs$lang$macro = true;
/**
 * Evaluates test. If logical true, evaluates body in an implicit do.
 */
cljs.core$macros.when = (function cljs$core$macros$when(var_args){
var args__9933__auto__ = [];
var len__9926__auto___15806 = arguments.length;
var i__9927__auto___15807 = (0);
while(true){
if((i__9927__auto___15807 < len__9926__auto___15806)){
args__9933__auto__.push((arguments[i__9927__auto___15807]));

var G__15808 = (i__9927__auto___15807 + (1));
i__9927__auto___15807 = G__15808;
continue;
} else {
}
break;
}

var argseq__9934__auto__ = ((((3) < args__9933__auto__.length))?(new cljs.core.IndexedSeq(args__9933__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9934__auto__);
});

cljs.core$macros.when.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,test,body){
return cljs.core._conj.call(null,(function (){var x__9655__auto__ = test;
return cljs.core._conj.call(null,(function (){var x__9655__auto____$1 = cljs.core.cons.call(null,new cljs.core.Symbol(null,"do","do",1686842252,null),body);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto____$1);
})(),x__9655__auto__);
})(),new cljs.core.Symbol(null,"if","if",1181717262,null));
});

cljs.core$macros.when.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when.cljs$lang$applyTo = (function (seq15802){
var G__15803 = cljs.core.first.call(null,seq15802);
var seq15802__$1 = cljs.core.next.call(null,seq15802);
var G__15804 = cljs.core.first.call(null,seq15802__$1);
var seq15802__$2 = cljs.core.next.call(null,seq15802__$1);
var G__15805 = cljs.core.first.call(null,seq15802__$2);
var seq15802__$3 = cljs.core.next.call(null,seq15802__$2);
return cljs.core$macros.when.cljs$core$IFn$_invoke$arity$variadic(G__15803,G__15804,G__15805,seq15802__$3);
});


cljs.core$macros.when.cljs$lang$macro = true;
/**
 * bindings => x xs
 * 
 *   Roughly the same as (when (seq xs) (let [x (first xs)] body)) but xs is evaluated only once
 */
cljs.core$macros.when_first = (function cljs$core$macros$when_first(var_args){
var args__9933__auto__ = [];
var len__9926__auto___15817 = arguments.length;
var i__9927__auto___15818 = (0);
while(true){
if((i__9927__auto___15818 < len__9926__auto___15817)){
args__9933__auto__.push((arguments[i__9927__auto___15818]));

var G__15819 = (i__9927__auto___15818 + (1));
i__9927__auto___15818 = G__15819;
continue;
} else {
}
break;
}

var argseq__9934__auto__ = ((((3) < args__9933__auto__.length))?(new cljs.core.IndexedSeq(args__9933__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when_first.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9934__auto__);
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


var vec__15814 = bindings;
var x = cljs.core.nth.call(null,vec__15814,(0),null);
var xs = cljs.core.nth.call(null,vec__15814,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-let","cljs.core$macros/when-let",-2004472648,null)),(function (){var x__9655__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"xs__15809__auto__","xs__15809__auto__",410516440,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__9655__auto__ = xs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9655__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9655__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"xs__15809__auto__","xs__15809__auto__",410516440,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
});

cljs.core$macros.when_first.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when_first.cljs$lang$applyTo = (function (seq15810){
var G__15811 = cljs.core.first.call(null,seq15810);
var seq15810__$1 = cljs.core.next.call(null,seq15810);
var G__15812 = cljs.core.first.call(null,seq15810__$1);
var seq15810__$2 = cljs.core.next.call(null,seq15810__$1);
var G__15813 = cljs.core.first.call(null,seq15810__$2);
var seq15810__$3 = cljs.core.next.call(null,seq15810__$2);
return cljs.core$macros.when_first.cljs$core$IFn$_invoke$arity$variadic(G__15811,G__15812,G__15813,seq15810__$3);
});


cljs.core$macros.when_first.cljs$lang$macro = true;
/**
 * bindings => binding-form test
 * 
 *   When test is true, evaluates body with binding-form bound to the value of test
 */
cljs.core$macros.when_let = (function cljs$core$macros$when_let(var_args){
var args__9933__auto__ = [];
var len__9926__auto___15825 = arguments.length;
var i__9927__auto___15826 = (0);
while(true){
if((i__9927__auto___15826 < len__9926__auto___15825)){
args__9933__auto__.push((arguments[i__9927__auto___15826]));

var G__15827 = (i__9927__auto___15826 + (1));
i__9927__auto___15826 = G__15827;
continue;
} else {
}
break;
}

var argseq__9934__auto__ = ((((3) < args__9933__auto__.length))?(new cljs.core.IndexedSeq(args__9933__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when_let.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9934__auto__);
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9655__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__15820__auto__","temp__15820__auto__",-1103693722,null)),(function (){var x__9655__auto__ = tst;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__15820__auto__","temp__15820__auto__",-1103693722,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9655__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9655__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__15820__auto__","temp__15820__auto__",-1103693722,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
});

cljs.core$macros.when_let.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when_let.cljs$lang$applyTo = (function (seq15821){
var G__15822 = cljs.core.first.call(null,seq15821);
var seq15821__$1 = cljs.core.next.call(null,seq15821);
var G__15823 = cljs.core.first.call(null,seq15821__$1);
var seq15821__$2 = cljs.core.next.call(null,seq15821__$1);
var G__15824 = cljs.core.first.call(null,seq15821__$2);
var seq15821__$3 = cljs.core.next.call(null,seq15821__$2);
return cljs.core$macros.when_let.cljs$core$IFn$_invoke$arity$variadic(G__15822,G__15823,G__15824,seq15821__$3);
});


cljs.core$macros.when_let.cljs$lang$macro = true;
/**
 * Evaluates test. If logical false, evaluates body in an implicit do.
 */
cljs.core$macros.when_not = (function cljs$core$macros$when_not(var_args){
var args__9933__auto__ = [];
var len__9926__auto___15832 = arguments.length;
var i__9927__auto___15833 = (0);
while(true){
if((i__9927__auto___15833 < len__9926__auto___15832)){
args__9933__auto__.push((arguments[i__9927__auto___15833]));

var G__15834 = (i__9927__auto___15833 + (1));
i__9927__auto___15833 = G__15834;
continue;
} else {
}
break;
}

var argseq__9934__auto__ = ((((3) < args__9933__auto__.length))?(new cljs.core.IndexedSeq(args__9933__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when_not.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9934__auto__);
});

cljs.core$macros.when_not.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,test,body){
return cljs.core._conj.call(null,(function (){var x__9655__auto__ = test;
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9655__auto____$1 = cljs.core.cons.call(null,new cljs.core.Symbol(null,"do","do",1686842252,null),body);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto____$1);
})(),null),x__9655__auto__);
})(),new cljs.core.Symbol(null,"if","if",1181717262,null));
});

cljs.core$macros.when_not.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when_not.cljs$lang$applyTo = (function (seq15828){
var G__15829 = cljs.core.first.call(null,seq15828);
var seq15828__$1 = cljs.core.next.call(null,seq15828);
var G__15830 = cljs.core.first.call(null,seq15828__$1);
var seq15828__$2 = cljs.core.next.call(null,seq15828__$1);
var G__15831 = cljs.core.first.call(null,seq15828__$2);
var seq15828__$3 = cljs.core.next.call(null,seq15828__$2);
return cljs.core$macros.when_not.cljs$core$IFn$_invoke$arity$variadic(G__15829,G__15830,G__15831,seq15828__$3);
});


cljs.core$macros.when_not.cljs$lang$macro = true;
/**
 * Repeatedly executes body while test expression is true. Presumes
 *   some side-effect will cause test to become false/nil. Returns nil
 */
cljs.core$macros.while$ = (function cljs$core$macros$while(var_args){
var args__9933__auto__ = [];
var len__9926__auto___15839 = arguments.length;
var i__9927__auto___15840 = (0);
while(true){
if((i__9927__auto___15840 < len__9926__auto___15839)){
args__9933__auto__.push((arguments[i__9927__auto___15840]));

var G__15841 = (i__9927__auto___15840 + (1));
i__9927__auto___15840 = G__15841;
continue;
} else {
}
break;
}

var argseq__9934__auto__ = ((((3) < args__9933__auto__.length))?(new cljs.core.IndexedSeq(args__9933__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.while$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9934__auto__);
});

cljs.core$macros.while$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,test,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__9655__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__9655__auto__ = test;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),body,(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
});

cljs.core$macros.while$.cljs$lang$maxFixedArity = (3);

cljs.core$macros.while$.cljs$lang$applyTo = (function (seq15835){
var G__15836 = cljs.core.first.call(null,seq15835);
var seq15835__$1 = cljs.core.next.call(null,seq15835);
var G__15837 = cljs.core.first.call(null,seq15835__$1);
var seq15835__$2 = cljs.core.next.call(null,seq15835__$1);
var G__15838 = cljs.core.first.call(null,seq15835__$2);
var seq15835__$3 = cljs.core.next.call(null,seq15835__$2);
return cljs.core$macros.while$.cljs$core$IFn$_invoke$arity$variadic(G__15836,G__15837,G__15838,seq15835__$3);
});


cljs.core$macros.while$.cljs$lang$macro = true;
/**
 * Takes an expression and a set of test/form pairs. Threads expr (via ->)
 *   through each form for which the corresponding test
 *   expression is true. Note that, unlike cond branching, cond-> threading does
 *   not short circuit after the first true test expression.
 */
cljs.core$macros.cond__GT_ = (function cljs$core$macros$cond__GT_(var_args){
var args__9933__auto__ = [];
var len__9926__auto___15850 = arguments.length;
var i__9927__auto___15851 = (0);
while(true){
if((i__9927__auto___15851 < len__9926__auto___15850)){
args__9933__auto__.push((arguments[i__9927__auto___15851]));

var G__15852 = (i__9927__auto___15851 + (1));
i__9927__auto___15851 = G__15852;
continue;
} else {
}
break;
}

var argseq__9934__auto__ = ((((3) < args__9933__auto__.length))?(new cljs.core.IndexedSeq(args__9933__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.cond__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9934__auto__);
});

cljs.core$macros.cond__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,clauses){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,clauses))){
} else {
throw (new Error("Assert failed: (even? (count clauses))"));
}

var g = cljs.core.gensym.call(null);
var pstep = ((function (g){
return (function (p__15846){
var vec__15847 = p__15846;
var test = cljs.core.nth.call(null,vec__15847,(0),null);
var step = cljs.core.nth.call(null,vec__15847,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9655__auto__ = test;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","->","cljs.core$macros/->",-1519455206,null)),(function (){var x__9655__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = step;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
});})(g))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9655__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9655__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),cljs.core.interleave.call(null,cljs.core.repeat.call(null,g),cljs.core.map.call(null,pstep,cljs.core.partition.call(null,(2),clauses)))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
});

cljs.core$macros.cond__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.cond__GT_.cljs$lang$applyTo = (function (seq15842){
var G__15843 = cljs.core.first.call(null,seq15842);
var seq15842__$1 = cljs.core.next.call(null,seq15842);
var G__15844 = cljs.core.first.call(null,seq15842__$1);
var seq15842__$2 = cljs.core.next.call(null,seq15842__$1);
var G__15845 = cljs.core.first.call(null,seq15842__$2);
var seq15842__$3 = cljs.core.next.call(null,seq15842__$2);
return cljs.core$macros.cond__GT_.cljs$core$IFn$_invoke$arity$variadic(G__15843,G__15844,G__15845,seq15842__$3);
});


cljs.core$macros.cond__GT_.cljs$lang$macro = true;
/**
 * Takes an expression and a set of test/form pairs. Threads expr (via ->>)
 *   through each form for which the corresponding test expression
 *   is true.  Note that, unlike cond branching, cond->> threading does not short circuit
 *   after the first true test expression.
 */
cljs.core$macros.cond__GT__GT_ = (function cljs$core$macros$cond__GT__GT_(var_args){
var args__9933__auto__ = [];
var len__9926__auto___15861 = arguments.length;
var i__9927__auto___15862 = (0);
while(true){
if((i__9927__auto___15862 < len__9926__auto___15861)){
args__9933__auto__.push((arguments[i__9927__auto___15862]));

var G__15863 = (i__9927__auto___15862 + (1));
i__9927__auto___15862 = G__15863;
continue;
} else {
}
break;
}

var argseq__9934__auto__ = ((((3) < args__9933__auto__.length))?(new cljs.core.IndexedSeq(args__9933__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.cond__GT__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9934__auto__);
});

cljs.core$macros.cond__GT__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,clauses){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,clauses))){
} else {
throw (new Error("Assert failed: (even? (count clauses))"));
}

var g = cljs.core.gensym.call(null);
var pstep = ((function (g){
return (function (p__15857){
var vec__15858 = p__15857;
var test = cljs.core.nth.call(null,vec__15858,(0),null);
var step = cljs.core.nth.call(null,vec__15858,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9655__auto__ = test;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","->>","cljs.core$macros/->>",-1353108561,null)),(function (){var x__9655__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = step;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
});})(g))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9655__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9655__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),cljs.core.interleave.call(null,cljs.core.repeat.call(null,g),cljs.core.map.call(null,pstep,cljs.core.partition.call(null,(2),clauses)))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
});

cljs.core$macros.cond__GT__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.cond__GT__GT_.cljs$lang$applyTo = (function (seq15853){
var G__15854 = cljs.core.first.call(null,seq15853);
var seq15853__$1 = cljs.core.next.call(null,seq15853);
var G__15855 = cljs.core.first.call(null,seq15853__$1);
var seq15853__$2 = cljs.core.next.call(null,seq15853__$1);
var G__15856 = cljs.core.first.call(null,seq15853__$2);
var seq15853__$3 = cljs.core.next.call(null,seq15853__$2);
return cljs.core$macros.cond__GT__GT_.cljs$core$IFn$_invoke$arity$variadic(G__15854,G__15855,G__15856,seq15853__$3);
});


cljs.core$macros.cond__GT__GT_.cljs$lang$macro = true;
/**
 * Binds name to expr, evaluates the first form in the lexical context
 *   of that binding, then binds name to that result, repeating for each
 *   successive form, returning the result of the last form.
 */
cljs.core$macros.as__GT_ = (function cljs$core$macros$as__GT_(var_args){
var args__9933__auto__ = [];
var len__9926__auto___15869 = arguments.length;
var i__9927__auto___15870 = (0);
while(true){
if((i__9927__auto___15870 < len__9926__auto___15869)){
args__9933__auto__.push((arguments[i__9927__auto___15870]));

var G__15871 = (i__9927__auto___15870 + (1));
i__9927__auto___15870 = G__15871;
continue;
} else {
}
break;
}

var argseq__9934__auto__ = ((((4) < args__9933__auto__.length))?(new cljs.core.IndexedSeq(args__9933__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.as__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__9934__auto__);
});

cljs.core$macros.as__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,name,forms){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9655__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9655__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),cljs.core.interleave.call(null,cljs.core.repeat.call(null,name),forms)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
});

cljs.core$macros.as__GT_.cljs$lang$maxFixedArity = (4);

cljs.core$macros.as__GT_.cljs$lang$applyTo = (function (seq15864){
var G__15865 = cljs.core.first.call(null,seq15864);
var seq15864__$1 = cljs.core.next.call(null,seq15864);
var G__15866 = cljs.core.first.call(null,seq15864__$1);
var seq15864__$2 = cljs.core.next.call(null,seq15864__$1);
var G__15867 = cljs.core.first.call(null,seq15864__$2);
var seq15864__$3 = cljs.core.next.call(null,seq15864__$2);
var G__15868 = cljs.core.first.call(null,seq15864__$3);
var seq15864__$4 = cljs.core.next.call(null,seq15864__$3);
return cljs.core$macros.as__GT_.cljs$core$IFn$_invoke$arity$variadic(G__15865,G__15866,G__15867,G__15868,seq15864__$4);
});


cljs.core$macros.as__GT_.cljs$lang$macro = true;
/**
 * When expr is not nil, threads it into the first form (via ->),
 *   and when that result is not nil, through the next etc
 */
cljs.core$macros.some__GT_ = (function cljs$core$macros$some__GT_(var_args){
var args__9933__auto__ = [];
var len__9926__auto___15876 = arguments.length;
var i__9927__auto___15877 = (0);
while(true){
if((i__9927__auto___15877 < len__9926__auto___15876)){
args__9933__auto__.push((arguments[i__9927__auto___15877]));

var G__15878 = (i__9927__auto___15877 + (1));
i__9927__auto___15877 = G__15878;
continue;
} else {
}
break;
}

var argseq__9934__auto__ = ((((3) < args__9933__auto__.length))?(new cljs.core.IndexedSeq(args__9933__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.some__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9934__auto__);
});

cljs.core$macros.some__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,forms){
var g = cljs.core.gensym.call(null);
var pstep = ((function (g){
return (function (step){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__9655__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","->","cljs.core$macros/->",-1519455206,null)),(function (){var x__9655__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = step;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
});})(g))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9655__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9655__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),cljs.core.interleave.call(null,cljs.core.repeat.call(null,g),cljs.core.map.call(null,pstep,forms))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
});

cljs.core$macros.some__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.some__GT_.cljs$lang$applyTo = (function (seq15872){
var G__15873 = cljs.core.first.call(null,seq15872);
var seq15872__$1 = cljs.core.next.call(null,seq15872);
var G__15874 = cljs.core.first.call(null,seq15872__$1);
var seq15872__$2 = cljs.core.next.call(null,seq15872__$1);
var G__15875 = cljs.core.first.call(null,seq15872__$2);
var seq15872__$3 = cljs.core.next.call(null,seq15872__$2);
return cljs.core$macros.some__GT_.cljs$core$IFn$_invoke$arity$variadic(G__15873,G__15874,G__15875,seq15872__$3);
});


cljs.core$macros.some__GT_.cljs$lang$macro = true;
/**
 * When expr is not nil, threads it into the first form (via ->>),
 *   and when that result is not nil, through the next etc
 */
cljs.core$macros.some__GT__GT_ = (function cljs$core$macros$some__GT__GT_(var_args){
var args__9933__auto__ = [];
var len__9926__auto___15883 = arguments.length;
var i__9927__auto___15884 = (0);
while(true){
if((i__9927__auto___15884 < len__9926__auto___15883)){
args__9933__auto__.push((arguments[i__9927__auto___15884]));

var G__15885 = (i__9927__auto___15884 + (1));
i__9927__auto___15884 = G__15885;
continue;
} else {
}
break;
}

var argseq__9934__auto__ = ((((3) < args__9933__auto__.length))?(new cljs.core.IndexedSeq(args__9933__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.some__GT__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9934__auto__);
});

cljs.core$macros.some__GT__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,forms){
var g = cljs.core.gensym.call(null);
var pstep = ((function (g){
return (function (step){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__9655__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","->>","cljs.core$macros/->>",-1353108561,null)),(function (){var x__9655__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = step;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
});})(g))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9655__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9655__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),cljs.core.interleave.call(null,cljs.core.repeat.call(null,g),cljs.core.map.call(null,pstep,forms))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = g;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
});

cljs.core$macros.some__GT__GT_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.some__GT__GT_.cljs$lang$applyTo = (function (seq15879){
var G__15880 = cljs.core.first.call(null,seq15879);
var seq15879__$1 = cljs.core.next.call(null,seq15879);
var G__15881 = cljs.core.first.call(null,seq15879__$1);
var seq15879__$2 = cljs.core.next.call(null,seq15879__$1);
var G__15882 = cljs.core.first.call(null,seq15879__$2);
var seq15879__$3 = cljs.core.next.call(null,seq15879__$2);
return cljs.core$macros.some__GT__GT_.cljs$core$IFn$_invoke$arity$variadic(G__15880,G__15881,G__15882,seq15879__$3);
});


cljs.core$macros.some__GT__GT_.cljs$lang$macro = true;
/**
 * bindings => binding-form test
 * 
 *    If test is not nil, evaluates then with binding-form bound to the
 *    value of test, if not, yields else
 */
cljs.core$macros.if_some = (function cljs$core$macros$if_some(var_args){
var args15887 = [];
var len__9926__auto___15896 = arguments.length;
var i__9927__auto___15897 = (0);
while(true){
if((i__9927__auto___15897 < len__9926__auto___15896)){
args15887.push((arguments[i__9927__auto___15897]));

var G__15898 = (i__9927__auto___15897 + (1));
i__9927__auto___15897 = G__15898;
continue;
} else {
}
break;
}

var G__15895 = args15887.length;
switch (G__15895) {
case 4:
return cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__9945__auto__ = (new cljs.core.IndexedSeq(args15887.slice((5)),(0),null));
return cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__9945__auto__);

}
});

cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,then){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-some","cljs.core$macros/if-some",1405341529,null)),(function (){var x__9655__auto__ = bindings;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = then;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9655__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__15886__auto__","temp__15886__auto__",-255682299,null)),(function (){var x__9655__auto__ = tst;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__15886__auto__","temp__15886__auto__",-255682299,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = else$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9655__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9655__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__15886__auto__","temp__15886__auto__",-255682299,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = then;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
});

cljs.core$macros.if_some.cljs$lang$applyTo = (function (seq15888){
var G__15889 = cljs.core.first.call(null,seq15888);
var seq15888__$1 = cljs.core.next.call(null,seq15888);
var G__15890 = cljs.core.first.call(null,seq15888__$1);
var seq15888__$2 = cljs.core.next.call(null,seq15888__$1);
var G__15891 = cljs.core.first.call(null,seq15888__$2);
var seq15888__$3 = cljs.core.next.call(null,seq15888__$2);
var G__15892 = cljs.core.first.call(null,seq15888__$3);
var seq15888__$4 = cljs.core.next.call(null,seq15888__$3);
var G__15893 = cljs.core.first.call(null,seq15888__$4);
var seq15888__$5 = cljs.core.next.call(null,seq15888__$4);
return cljs.core$macros.if_some.cljs$core$IFn$_invoke$arity$variadic(G__15889,G__15890,G__15891,G__15892,G__15893,seq15888__$5);
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
var args__9933__auto__ = [];
var len__9926__auto___15905 = arguments.length;
var i__9927__auto___15906 = (0);
while(true){
if((i__9927__auto___15906 < len__9926__auto___15905)){
args__9933__auto__.push((arguments[i__9927__auto___15906]));

var G__15907 = (i__9927__auto___15906 + (1));
i__9927__auto___15906 = G__15907;
continue;
} else {
}
break;
}

var argseq__9934__auto__ = ((((3) < args__9933__auto__.length))?(new cljs.core.IndexedSeq(args__9933__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.when_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9934__auto__);
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9655__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__15900__auto__","temp__15900__auto__",-1204348694,null)),(function (){var x__9655__auto__ = tst;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__15900__auto__","temp__15900__auto__",-1204348694,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9655__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9655__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"temp__15900__auto__","temp__15900__auto__",-1204348694,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
});

cljs.core$macros.when_some.cljs$lang$maxFixedArity = (3);

cljs.core$macros.when_some.cljs$lang$applyTo = (function (seq15901){
var G__15902 = cljs.core.first.call(null,seq15901);
var seq15901__$1 = cljs.core.next.call(null,seq15901);
var G__15903 = cljs.core.first.call(null,seq15901__$1);
var seq15901__$2 = cljs.core.next.call(null,seq15901__$1);
var G__15904 = cljs.core.first.call(null,seq15901__$2);
var seq15901__$3 = cljs.core.next.call(null,seq15901__$2);
return cljs.core$macros.when_some.cljs$core$IFn$_invoke$arity$variadic(G__15902,G__15903,G__15904,seq15901__$3);
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

var argdecls = cljs.core.map.call(null,(function (p1__15908_SHARP_){
if(cljs.core.seq_QMARK_.call(null,p1__15908_SHARP_)){
return cljs.core.first.call(null,p1__15908_SHARP_);
} else {
throw (new Error(((cljs.core.seq_QMARK_.call(null,cljs.core.first.call(null,fdecl)))?[cljs.core.str("Invalid signature \""),cljs.core.str(p1__15908_SHARP_),cljs.core.str("\" should be a list")].join(''):[cljs.core.str("Parameter declaration \""),cljs.core.str(p1__15908_SHARP_),cljs.core.str("\" should be a vector")].join(''))));
}
}),fdecl);
var bad_args = cljs.core.seq.call(null,cljs.core.remove.call(null,((function (argdecls){
return (function (p1__15909_SHARP_){
return cljs.core.vector_QMARK_.call(null,p1__15909_SHARP_);
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
var G__15910 = cljs.core.conj.call(null,ret,asig.call(null,cljs.core.first.call(null,fdecls)));
var G__15911 = cljs.core.next.call(null,fdecls);
ret = G__15910;
fdecls = G__15911;
continue;
} else {
return cljs.core.seq.call(null,ret);
}
break;
}
} else {
var x__9655__auto__ = asig.call(null,fdecl);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
}
});
/**
 * defs name to have the root value of init iff the named var has no root value,
 *   else init is unevaluated
 */
cljs.core$macros.defonce = (function cljs$core$macros$defonce(_AMPERSAND_form,_AMPERSAND_env,x,init){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-not","cljs.core$macros/when-not",-764302244,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","exists?","cljs.core$macros/exists?",-1828590389,null)),(function (){var x__9655__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"def","def",597100991,null)),(function (){var x__9655__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = init;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
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
return cljs.core.conj.call(null,ret,gseq,cljs.core._conj.call(null,(function (){var x__9655__auto__ = gvec;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
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
var G__15921 = cljs$core$macros$destructure_$_pb.call(null,ret,cljs.core.second.call(null,bs),gseq);
var G__15922 = n;
var G__15923 = cljs.core.nnext.call(null,bs);
var G__15924 = true;
ret = G__15921;
n = G__15922;
bs = G__15923;
seen_rest_QMARK_ = G__15924;
continue;
} else {
if(cljs.core._EQ_.call(null,firstb,new cljs.core.Keyword(null,"as","as",1148689641))){
return cljs$core$macros$destructure_$_pb.call(null,ret,cljs.core.second.call(null,bs),gvec);
} else {
if(seen_rest_QMARK_){
throw (new Error("Unsupported binding form, only :as can follow & parameter"));
} else {
var G__15925 = cljs$core$macros$destructure_$_pb.call(null,(cljs.core.truth_(has_rest)?cljs.core.conj.call(null,ret,gfirst,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null)),(function (){var x__9655__auto__ = gseq;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})()))),gseq,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","next","cljs.core/next",-1291438473,null)),(function (){var x__9655__auto__ = gseq;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())))):ret),firstb,(cljs.core.truth_(has_rest)?gfirst:cljs.core._conj.call(null,(function (){var x__9655__auto__ = gvec;
return cljs.core._conj.call(null,(function (){var x__9655__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,null),x__9655__auto____$1);
})(),x__9655__auto__);
})(),new cljs.core.Symbol("cljs.core","nth","cljs.core/nth",1961052085,null))));
var G__15926 = (n + (1));
var G__15927 = cljs.core.next.call(null,bs);
var G__15928 = seen_rest_QMARK_;
ret = G__15925;
n = G__15926;
bs = G__15927;
seen_rest_QMARK_ = G__15928;
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
.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,cljs.core.conj.call(null,bvec__$1,gmap),v__$1),gmap),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","implements?","cljs.core$macros/implements?",-94762250,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","ISeq","cljs.core/ISeq",230133392,null)),(function (){var x__9655__auto__ = gmap;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","hash-map","cljs.core/hash-map",303385767,null)),(function (){var x__9655__auto__ = gmap;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = gmap;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())))));
var bes = (function (){var transforms = cljs.core.reduce.call(null,((function (ret,gmap,defaults,pvec,bents){
return (function (transforms,mk){
if((mk instanceof cljs.core.Keyword)){
var mkns = cljs.core.namespace.call(null,mk);
var mkn = cljs.core.name.call(null,mk);
if(cljs.core._EQ_.call(null,mkn,"keys")){
return cljs.core.assoc.call(null,transforms,mk,((function (mkns,mkn,ret,gmap,defaults,pvec,bents){
return (function (p1__15912_SHARP_){
return cljs.core.keyword.call(null,(function (){var or__8818__auto__ = mkns;
if(cljs.core.truth_(or__8818__auto__)){
return or__8818__auto__;
} else {
return cljs.core.namespace.call(null,p1__15912_SHARP_);
}
})(),cljs.core.name.call(null,p1__15912_SHARP_));
});})(mkns,mkn,ret,gmap,defaults,pvec,bents))
);
} else {
if(cljs.core._EQ_.call(null,mkn,"syms")){
return cljs.core.assoc.call(null,transforms,mk,((function (mkns,mkn,ret,gmap,defaults,pvec,bents){
return (function (p1__15913_SHARP_){
return cljs.core._conj.call(null,(function (){var x__9655__auto__ = cljs.core.symbol.call(null,(function (){var or__8818__auto__ = mkns;
if(cljs.core.truth_(or__8818__auto__)){
return or__8818__auto__;
} else {
return cljs.core.namespace.call(null,p1__15913_SHARP_);
}
})(),cljs.core.name.call(null,p1__15913_SHARP_));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
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
return (function (p1__15914_SHARP_,p2__15915_SHARP_){
return cljs.core.assoc.call(null,p1__15914_SHARP_,p2__15915_SHARP_,cljs.core.val.call(null,entry).call(null,p2__15915_SHARP_));
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
var bv = ((cljs.core.contains_QMARK_.call(null,defaults,local))?cljs.core._conj.call(null,(function (){var x__9655__auto__ = gmap;
return cljs.core._conj.call(null,(function (){var x__9655__auto____$1 = bk;
return cljs.core._conj.call(null,(function (){var x__9655__auto____$2 = defaults.call(null,local);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto____$2);
})(),x__9655__auto____$1);
})(),x__9655__auto__);
})(),new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null)):cljs.core._conj.call(null,(function (){var x__9655__auto__ = gmap;
return cljs.core._conj.call(null,(function (){var x__9655__auto____$1 = bk;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto____$1);
})(),x__9655__auto__);
})(),new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null)));
var G__15929 = ((((bb instanceof cljs.core.Keyword)) || ((bb instanceof cljs.core.Symbol)))?cljs.core.conj.call(null,ret,local,bv):cljs$core$macros$destructure_$_pb.call(null,ret,bb,bv));
var G__15930 = cljs.core.next.call(null,bes);
ret = G__15929;
bes = G__15930;
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
return (function (p1__15916_SHARP_){
return (cljs.core.first.call(null,p1__15916_SHARP_) instanceof cljs.core.Keyword);
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","declare","cljs.core$macros/declare",1172642527,null)),(function (){var x__9655__auto__ = cljs.core.symbol.call(null,sym);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),(function (){var x__9655__auto__ = [cljs.core.str("/** @define {"),cljs.core.str(type),cljs.core.str("} */")].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog","define","goog/define",-352722538,null)),(function (){var x__9655__auto__ = defname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = default$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
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
var args__9933__auto__ = [];
var len__9926__auto___15935 = arguments.length;
var i__9927__auto___15936 = (0);
while(true){
if((i__9927__auto___15936 < len__9926__auto___15935)){
args__9933__auto__.push((arguments[i__9927__auto___15936]));

var G__15937 = (i__9927__auto___15936 + (1));
i__9927__auto___15936 = G__15937;
continue;
} else {
}
break;
}

var argseq__9934__auto__ = ((((3) < args__9933__auto__.length))?(new cljs.core.IndexedSeq(args__9933__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.let$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9934__auto__);
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


return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"let*","let*",1920721458,null)),(function (){var x__9655__auto__ = cljs.core$macros.destructure.call(null,bindings);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),body)));
});

cljs.core$macros.let$.cljs$lang$maxFixedArity = (3);

cljs.core$macros.let$.cljs$lang$applyTo = (function (seq15931){
var G__15932 = cljs.core.first.call(null,seq15931);
var seq15931__$1 = cljs.core.next.call(null,seq15931);
var G__15933 = cljs.core.first.call(null,seq15931__$1);
var seq15931__$2 = cljs.core.next.call(null,seq15931__$1);
var G__15934 = cljs.core.first.call(null,seq15931__$2);
var seq15931__$3 = cljs.core.next.call(null,seq15931__$2);
return cljs.core$macros.let$.cljs$core$IFn$_invoke$arity$variadic(G__15932,G__15933,G__15934,seq15931__$3);
});


cljs.core$macros.let$.cljs$lang$macro = true;
/**
 * Evaluates the exprs in a lexical context in which the symbols in
 *   the binding-forms are bound to their respective init-exprs or parts
 *   therein. Acts as a recur target.
 */
cljs.core$macros.loop = (function cljs$core$macros$loop(var_args){
var args__9933__auto__ = [];
var len__9926__auto___15946 = arguments.length;
var i__9927__auto___15947 = (0);
while(true){
if((i__9927__auto___15947 < len__9926__auto___15946)){
args__9933__auto__.push((arguments[i__9927__auto___15947]));

var G__15948 = (i__9927__auto___15947 + (1));
i__9927__auto___15947 = G__15948;
continue;
} else {
}
break;
}

var argseq__9934__auto__ = ((((3) < args__9933__auto__.length))?(new cljs.core.IndexedSeq(args__9933__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.loop.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9934__auto__);
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"loop*","loop*",615029416,null)),(function (){var x__9655__auto__ = bindings;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
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
return (function (ret,p__15942){
var vec__15943 = p__15942;
var b = cljs.core.nth.call(null,vec__15943,(0),null);
var v = cljs.core.nth.call(null,vec__15943,(1),null);
var g = cljs.core.nth.call(null,vec__15943,(2),null);
if((b instanceof cljs.core.Symbol)){
return cljs.core.conj.call(null,ret,g,v);
} else {
return cljs.core.conj.call(null,ret,g,v,b,g);
}
});})(vs,bs,gs,db))
,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,cljs.core.vector,bs,vs,gs));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9655__auto__ = bfs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"loop*","loop*",615029416,null)),(function (){var x__9655__auto__ = cljs.core.vec.call(null,cljs.core.interleave.call(null,gs,gs));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9655__auto__ = cljs.core.vec.call(null,cljs.core.interleave.call(null,bs,gs));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
}
});

cljs.core$macros.loop.cljs$lang$maxFixedArity = (3);

cljs.core$macros.loop.cljs$lang$applyTo = (function (seq15938){
var G__15939 = cljs.core.first.call(null,seq15938);
var seq15938__$1 = cljs.core.next.call(null,seq15938);
var G__15940 = cljs.core.first.call(null,seq15938__$1);
var seq15938__$2 = cljs.core.next.call(null,seq15938__$1);
var G__15941 = cljs.core.first.call(null,seq15938__$2);
var seq15938__$3 = cljs.core.next.call(null,seq15938__$2);
return cljs.core$macros.loop.cljs$core$IFn$_invoke$arity$variadic(G__15939,G__15940,G__15941,seq15938__$3);
});


cljs.core$macros.loop.cljs$lang$macro = true;
/**
 * protocol fqn -> [partition number, bit]
 */
cljs.core$macros.fast_path_protocols = cljs.core.zipmap.call(null,cljs.core.map.call(null,(function (p1__15949_SHARP_){
return cljs.core.symbol.call(null,"cljs.core",[cljs.core.str(p1__15949_SHARP_)].join(''));
}),cljs.core.PersistentVector.fromArray([new cljs.core.Symbol(null,"IFn","IFn",-244881638,null),new cljs.core.Symbol(null,"ICounted","ICounted",-1705786327,null),new cljs.core.Symbol(null,"IEmptyableCollection","IEmptyableCollection",1477271438,null),new cljs.core.Symbol(null,"ICollection","ICollection",-686709190,null),new cljs.core.Symbol(null,"IIndexed","IIndexed",-574812826,null),new cljs.core.Symbol(null,"ASeq","ASeq",266390234,null),new cljs.core.Symbol(null,"ISeq","ISeq",1517365813,null),new cljs.core.Symbol(null,"INext","INext",562211849,null),new cljs.core.Symbol(null,"ILookup","ILookup",784647298,null),new cljs.core.Symbol(null,"IAssociative","IAssociative",-1306431882,null),new cljs.core.Symbol(null,"IMap","IMap",992876629,null),new cljs.core.Symbol(null,"IMapEntry","IMapEntry",-943754199,null),new cljs.core.Symbol(null,"ISet","ISet",-1398072657,null),new cljs.core.Symbol(null,"IStack","IStack",1136769449,null),new cljs.core.Symbol(null,"IVector","IVector",-1120721434,null),new cljs.core.Symbol(null,"IDeref","IDeref",1738423197,null),new cljs.core.Symbol(null,"IDerefWithTimeout","IDerefWithTimeout",2140974319,null),new cljs.core.Symbol(null,"IMeta","IMeta",1095313672,null),new cljs.core.Symbol(null,"IWithMeta","IWithMeta",-509493158,null),new cljs.core.Symbol(null,"IReduce","IReduce",-440384974,null),new cljs.core.Symbol(null,"IKVReduce","IKVReduce",-870856862,null),new cljs.core.Symbol(null,"IEquiv","IEquiv",-1912850869,null),new cljs.core.Symbol(null,"IHash","IHash",-1495374645,null),new cljs.core.Symbol(null,"ISeqable","ISeqable",1349682102,null),new cljs.core.Symbol(null,"ISequential","ISequential",-1626174217,null),new cljs.core.Symbol(null,"IList","IList",1682281311,null),new cljs.core.Symbol(null,"IRecord","IRecord",-903221169,null),new cljs.core.Symbol(null,"IReversible","IReversible",-723048599,null),new cljs.core.Symbol(null,"ISorted","ISorted",-253627362,null),new cljs.core.Symbol(null,"IPrintWithWriter","IPrintWithWriter",-1205316154,null),new cljs.core.Symbol(null,"IWriter","IWriter",-1681087107,null),new cljs.core.Symbol(null,"IPrintWithWriter","IPrintWithWriter",-1205316154,null),new cljs.core.Symbol(null,"IPending","IPending",1229113039,null),new cljs.core.Symbol(null,"IWatchable","IWatchable",-1929659016,null),new cljs.core.Symbol(null,"IEditableCollection","IEditableCollection",-906687187,null),new cljs.core.Symbol(null,"ITransientCollection","ITransientCollection",252832402,null),new cljs.core.Symbol(null,"ITransientAssociative","ITransientAssociative",-1612754624,null),new cljs.core.Symbol(null,"ITransientMap","ITransientMap",298423651,null),new cljs.core.Symbol(null,"ITransientVector","ITransientVector",1978793164,null),new cljs.core.Symbol(null,"ITransientSet","ITransientSet",-575559912,null),new cljs.core.Symbol(null,"IMultiFn","IMultiFn",-1848282794,null),new cljs.core.Symbol(null,"IChunkedSeq","IChunkedSeq",-1299765705,null),new cljs.core.Symbol(null,"IChunkedNext","IChunkedNext",1193289532,null),new cljs.core.Symbol(null,"IComparable","IComparable",1834481627,null),new cljs.core.Symbol(null,"INamed","INamed",357992946,null),new cljs.core.Symbol(null,"ICloneable","ICloneable",1882653160,null),new cljs.core.Symbol(null,"IAtom","IAtom",-1411134312,null),new cljs.core.Symbol(null,"IReset","IReset",-1893729426,null),new cljs.core.Symbol(null,"ISwap","ISwap",484378193,null)], true)),cljs.core.iterate.call(null,(function (p__15950){
var vec__15951 = p__15950;
var p = cljs.core.nth.call(null,vec__15951,(0),null);
var b = cljs.core.nth.call(null,vec__15951,(1),null);
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
var args__9933__auto__ = [];
var len__9926__auto___15957 = arguments.length;
var i__9927__auto___15958 = (0);
while(true){
if((i__9927__auto___15958 < len__9926__auto___15957)){
args__9933__auto__.push((arguments[i__9927__auto___15958]));

var G__15959 = (i__9927__auto___15958 + (1));
i__9927__auto___15958 = G__15959;
continue;
} else {
}
break;
}

var argseq__9934__auto__ = ((((2) < args__9933__auto__.length))?(new cljs.core.IndexedSeq(args__9933__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9934__auto__);
});

cljs.core$macros.str.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
var strs = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,",",cljs.core.repeat.call(null,cljs.core.count.call(null,xs),"cljs.core.str(~{})")));
return cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),[cljs.core.str("["),cljs.core.str(strs),cljs.core.str("].join('')")].join(''),xs);
});

cljs.core$macros.str.cljs$lang$maxFixedArity = (2);

cljs.core$macros.str.cljs$lang$applyTo = (function (seq15954){
var G__15955 = cljs.core.first.call(null,seq15954);
var seq15954__$1 = cljs.core.next.call(null,seq15954);
var G__15956 = cljs.core.first.call(null,seq15954__$1);
var seq15954__$2 = cljs.core.next.call(null,seq15954__$1);
return cljs.core$macros.str.cljs$core$IFn$_invoke$arity$variadic(G__15955,G__15956,seq15954__$2);
});


cljs.core$macros.str.cljs$lang$macro = true;
cljs.core$macros.bool_expr = (function cljs$core$macros$bool_expr(e){
return cljs.core.vary_meta.call(null,e,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null));
});
cljs.core$macros.simple_test_expr_QMARK_ = (function cljs$core$macros$simple_test_expr_QMARK_(env,ast){
var and__8806__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"js","js",1768080579),null,new cljs.core.Keyword(null,"constant","constant",-379609303),null,new cljs.core.Keyword(null,"var","var",-769682797),null,new cljs.core.Keyword(null,"invoke","invoke",1145927159),null,new cljs.core.Keyword(null,"dot","dot",1442709401),null], null), null).call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(ast));
if(cljs.core.truth_(and__8806__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),null,new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null], null), null).call(null,cljs.analyzer.infer_tag.call(null,env,ast));
} else {
return and__8806__auto__;
}
});
/**
 * Evaluates exprs one at a time, from left to right. If a form
 *   returns logical false (nil or false), and returns that value and
 *   doesn't evaluate any of the other expressions, otherwise it returns
 *   the value of the last expr. (and) returns true.
 */
cljs.core$macros.and = (function cljs$core$macros$and(var_args){
var args15963 = [];
var len__9926__auto___15970 = arguments.length;
var i__9927__auto___15971 = (0);
while(true){
if((i__9927__auto___15971 < len__9926__auto___15970)){
args15963.push((arguments[i__9927__auto___15971]));

var G__15972 = (i__9927__auto___15971 + (1));
i__9927__auto___15971 = G__15972;
continue;
} else {
}
break;
}

var G__15969 = args15963.length;
switch (G__15969) {
case 2:
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__9945__auto__ = (new cljs.core.IndexedSeq(args15963.slice((3)),(0),null));
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9945__auto__);

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
return (function (p1__15960_SHARP_){
return cljs.core$macros.simple_test_expr_QMARK_.call(null,_AMPERSAND_env,p1__15960_SHARP_);
});})(forms))
,cljs.core.map.call(null,((function (forms){
return (function (p1__15961_SHARP_){
return cljs.analyzer.analyze.call(null,_AMPERSAND_env,p1__15961_SHARP_);
});})(forms))
,forms))){
var and_str = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," && ",cljs.core.repeat.call(null,cljs.core.count.call(null,forms),"(~{})")));
return cljs.core$macros.bool_expr.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),(function (){var x__9655__auto__ = and_str;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),forms))));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9655__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"and__15962__auto__","and__15962__auto__",-1094727992,null)),(function (){var x__9655__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"and__15962__auto__","and__15962__auto__",-1094727992,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),next)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"and__15962__auto__","and__15962__auto__",-1094727992,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
}
});

cljs.core$macros.and.cljs$lang$applyTo = (function (seq15964){
var G__15965 = cljs.core.first.call(null,seq15964);
var seq15964__$1 = cljs.core.next.call(null,seq15964);
var G__15966 = cljs.core.first.call(null,seq15964__$1);
var seq15964__$2 = cljs.core.next.call(null,seq15964__$1);
var G__15967 = cljs.core.first.call(null,seq15964__$2);
var seq15964__$3 = cljs.core.next.call(null,seq15964__$2);
return cljs.core$macros.and.cljs$core$IFn$_invoke$arity$variadic(G__15965,G__15966,G__15967,seq15964__$3);
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
var args15977 = [];
var len__9926__auto___15984 = arguments.length;
var i__9927__auto___15985 = (0);
while(true){
if((i__9927__auto___15985 < len__9926__auto___15984)){
args15977.push((arguments[i__9927__auto___15985]));

var G__15986 = (i__9927__auto___15985 + (1));
i__9927__auto___15985 = G__15986;
continue;
} else {
}
break;
}

var G__15983 = args15977.length;
switch (G__15983) {
case 2:
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var argseq__9945__auto__ = (new cljs.core.IndexedSeq(args15977.slice((3)),(0),null));
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9945__auto__);

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
return (function (p1__15974_SHARP_){
return cljs.core$macros.simple_test_expr_QMARK_.call(null,_AMPERSAND_env,p1__15974_SHARP_);
});})(forms))
,cljs.core.map.call(null,((function (forms){
return (function (p1__15975_SHARP_){
return cljs.analyzer.analyze.call(null,_AMPERSAND_env,p1__15975_SHARP_);
});})(forms))
,forms))){
var or_str = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," || ",cljs.core.repeat.call(null,cljs.core.count.call(null,forms),"(~{})")));
return cljs.core$macros.bool_expr.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),(function (){var x__9655__auto__ = or_str;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),forms))));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9655__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"or__15976__auto__","or__15976__auto__",398214955,null)),(function (){var x__9655__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"or__15976__auto__","or__15976__auto__",398214955,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"or__15976__auto__","or__15976__auto__",398214955,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","or","cljs.core$macros/or",1346243648,null)),next)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
}
});

cljs.core$macros.or.cljs$lang$applyTo = (function (seq15978){
var G__15979 = cljs.core.first.call(null,seq15978);
var seq15978__$1 = cljs.core.next.call(null,seq15978);
var G__15980 = cljs.core.first.call(null,seq15978__$1);
var seq15978__$2 = cljs.core.next.call(null,seq15978__$1);
var G__15981 = cljs.core.first.call(null,seq15978__$2);
var seq15978__$3 = cljs.core.next.call(null,seq15978__$2);
return cljs.core$macros.or.cljs$core$IFn$_invoke$arity$variadic(G__15979,G__15980,G__15981,seq15978__$3);
});

cljs.core$macros.or.cljs$lang$maxFixedArity = (3);


cljs.core$macros.or.cljs$lang$macro = true;
cljs.core$macros.nil_QMARK_ = (function cljs$core$macros$nil_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","coercive-=","cljs.core$macros/coercive-=",-1655776086,null)),(function (){var x__9655__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
});

cljs.core$macros.nil_QMARK_.cljs$lang$macro = true;
cljs.core$macros.coercive_not = (function cljs$core$macros$coercive_not(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9655__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),"(!~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.coercive_not.cljs$lang$macro = true;
cljs.core$macros.coercive_not_EQ_ = (function cljs$core$macros$coercive_not_EQ_(_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9655__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__9655__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto____$1);
})(),x__9655__auto__);
})(),"(~{} != ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.coercive_not_EQ_.cljs$lang$macro = true;
cljs.core$macros.coercive__EQ_ = (function cljs$core$macros$coercive__EQ_(_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9655__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__9655__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto____$1);
})(),x__9655__auto__);
})(),"(~{} == ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.coercive__EQ_.cljs$lang$macro = true;
cljs.core$macros.coercive_boolean = (function cljs$core$macros$coercive_boolean(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.with_meta.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9655__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),"~{}"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"boolean","boolean",-278886877,null)], null));
});

cljs.core$macros.coercive_boolean.cljs$lang$macro = true;
cljs.core$macros.truth_ = (function cljs$core$macros$truth_(_AMPERSAND_form,_AMPERSAND_env,x){
if((x instanceof cljs.core.Symbol)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("x is substituted twice"),cljs.core.str("\n"),cljs.core.str("(core/symbol? x)")].join('')));
}

return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9655__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__9655__auto____$1 = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto____$1);
})(),x__9655__auto__);
})(),"(~{} != null && ~{} !== false)"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.truth_.cljs$lang$macro = true;
cljs.core$macros.js_arguments = (function cljs$core$macros$js_arguments(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"arguments"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.js_arguments.cljs$lang$macro = true;
cljs.core$macros.js_delete = (function cljs$core$macros$js_delete(_AMPERSAND_form,_AMPERSAND_env,obj,key){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9655__auto__ = obj;
return cljs.core._conj.call(null,(function (){var x__9655__auto____$1 = key;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto____$1);
})(),x__9655__auto__);
})(),"delete ~{}[~{}]"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.js_delete.cljs$lang$macro = true;
cljs.core$macros.js_in = (function cljs$core$macros$js_in(_AMPERSAND_form,_AMPERSAND_env,key,obj){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9655__auto__ = key;
return cljs.core._conj.call(null,(function (){var x__9655__auto____$1 = obj;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto____$1);
})(),x__9655__auto__);
})(),"~{} in ~{}"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.js_in.cljs$lang$macro = true;
/**
 * Emit JavaScript "debugger;" statement
 */
cljs.core$macros.js_debugger = (function cljs$core$macros$js_debugger(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core._conj.call(null,(function (){var x__9655__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"debugger"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,null),x__9655__auto__);
})(),new cljs.core.Symbol(null,"do","do",1686842252,null));
});

cljs.core$macros.js_debugger.cljs$lang$macro = true;
/**
 * Emit a top-level JavaScript multi-line comment. New lines will create a
 *   new comment line. Comment block will be preceded and followed by a newline
 */
cljs.core$macros.js_comment = (function cljs$core$macros$js_comment(_AMPERSAND_form,_AMPERSAND_env,comment){
var vec__15992 = clojure.string.split.call(null,comment,/\n/);
var seq__15993 = cljs.core.seq.call(null,vec__15992);
var first__15994 = cljs.core.first.call(null,seq__15993);
var seq__15993__$1 = cljs.core.next.call(null,seq__15993);
var x = first__15994;
var ys = seq__15993__$1;
return cljs.core._conj.call(null,(function (){var x__9655__auto__ = [cljs.core.str("\n/**\n"),cljs.core.str([cljs.core.str(" * "),cljs.core.str(x),cljs.core.str("\n")].join('')),cljs.core.str(cljs.core.reduce.call(null,cljs.core.str,"",cljs.core.map.call(null,((function (vec__15992,seq__15993,first__15994,seq__15993__$1,x,ys){
return (function (p1__15988_SHARP_){
return [cljs.core.str(" * "),cljs.core.str(clojure.string.replace.call(null,p1__15988_SHARP_,/^   /,"")),cljs.core.str("\n")].join('');
});})(vec__15992,seq__15993,first__15994,seq__15993__$1,x,ys))
,ys))),cljs.core.str(" */\n")].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.js_comment.cljs$lang$macro = true;
/**
 * EXPERIMENTAL: Subject to change. Unsafely cast a value to a different type.
 */
cljs.core$macros.unsafe_cast = (function cljs$core$macros$unsafe_cast(_AMPERSAND_form,_AMPERSAND_env,t,x){
var cast_expr = [cljs.core.str("~{} = /** @type {"),cljs.core.str(t),cljs.core.str("} */ (~{})")].join('');
return cljs.core._conj.call(null,(function (){var x__9655__auto__ = cast_expr;
return cljs.core._conj.call(null,(function (){var x__9655__auto____$1 = x;
return cljs.core._conj.call(null,(function (){var x__9655__auto____$2 = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto____$2);
})(),x__9655__auto____$1);
})(),x__9655__auto__);
})(),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.unsafe_cast.cljs$lang$macro = true;
/**
 * Emit an inline JavaScript comment.
 */
cljs.core$macros.js_inline_comment = (function cljs$core$macros$js_inline_comment(_AMPERSAND_form,_AMPERSAND_env,comment){
return cljs.core._conj.call(null,(function (){var x__9655__auto__ = [cljs.core.str("/**"),cljs.core.str(comment),cljs.core.str("*/")].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.js_inline_comment.cljs$lang$macro = true;
cljs.core$macros.true_QMARK_ = (function cljs$core$macros$true_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9655__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),"~{} === true"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.true_QMARK_.cljs$lang$macro = true;
cljs.core$macros.false_QMARK_ = (function cljs$core$macros$false_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9655__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),"~{} === false"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.false_QMARK_.cljs$lang$macro = true;
cljs.core$macros.string_QMARK_ = (function cljs$core$macros$string_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9655__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),"typeof ~{} === 'string'"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.string_QMARK_.cljs$lang$macro = true;
/**
 * Return true if argument exists, analogous to usage of typeof operator
 * in JavaScript.
 */
cljs.core$macros.exists_QMARK_ = (function cljs$core$macros$exists_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9655__auto__ = cljs.core.vary_meta.call(null,x,cljs.core.assoc,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017),true);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),"typeof ~{} !== 'undefined'"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.exists_QMARK_.cljs$lang$macro = true;
/**
 * Return true if argument is identical to the JavaScript undefined value.
 */
cljs.core$macros.undefined_QMARK_ = (function cljs$core$macros$undefined_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9655__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),"(void 0 === ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.undefined_QMARK_.cljs$lang$macro = true;
cljs.core$macros.identical_QMARK_ = (function cljs$core$macros$identical_QMARK_(_AMPERSAND_form,_AMPERSAND_env,a,b){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9655__auto__ = a;
return cljs.core._conj.call(null,(function (){var x__9655__auto____$1 = b;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto____$1);
})(),x__9655__auto__);
})(),"(~{} === ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.identical_QMARK_.cljs$lang$macro = true;
cljs.core$macros.instance_QMARK_ = (function cljs$core$macros$instance_QMARK_(_AMPERSAND_form,_AMPERSAND_env,c,x){
return cljs.core$macros.bool_expr.call(null,(((c instanceof cljs.core.Symbol))?cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9655__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__9655__auto____$1 = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto____$1);
})(),x__9655__auto__);
})(),"(~{} instanceof ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)):cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9655__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__15995__auto__","c__15995__auto__",241696764,null)),(function (){var x__9655__auto__ = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__15996__auto__","x__15996__auto__",1406704700,null)),(function (){var x__9655__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"(~{} instanceof ~{})"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__15996__auto__","x__15996__auto__",1406704700,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__15995__auto__","c__15995__auto__",241696764,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())))));
});

cljs.core$macros.instance_QMARK_.cljs$lang$macro = true;
cljs.core$macros.number_QMARK_ = (function cljs$core$macros$number_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9655__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),"typeof ~{} === 'number'"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.number_QMARK_.cljs$lang$macro = true;
cljs.core$macros.symbol_QMARK_ = (function cljs$core$macros$symbol_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","instance?","cljs.core$macros/instance?",1829750179,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","Symbol","cljs.core/Symbol",292989338,null)),(function (){var x__9655__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})()))));
});

cljs.core$macros.symbol_QMARK_.cljs$lang$macro = true;
cljs.core$macros.keyword_QMARK_ = (function cljs$core$macros$keyword_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core$macros.bool_expr.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","instance?","cljs.core$macros/instance?",1829750179,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","Keyword","cljs.core/Keyword",-451434488,null)),(function (){var x__9655__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})()))));
});

cljs.core$macros.keyword_QMARK_.cljs$lang$macro = true;
cljs.core$macros.aget = (function cljs$core$macros$aget(var_args){
var args15997 = [];
var len__9926__auto___16005 = arguments.length;
var i__9927__auto___16006 = (0);
while(true){
if((i__9927__auto___16006 < len__9926__auto___16005)){
args15997.push((arguments[i__9927__auto___16006]));

var G__16007 = (i__9927__auto___16006 + (1));
i__9927__auto___16006 = G__16007;
continue;
} else {
}
break;
}

var G__16004 = args15997.length;
switch (G__16004) {
case 4:
return cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__9945__auto__ = (new cljs.core.IndexedSeq(args15997.slice((4)),(0),null));
return cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__9945__auto__);

}
});

cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,a,i){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9655__auto__ = a;
return cljs.core._conj.call(null,(function (){var x__9655__auto____$1 = i;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto____$1);
})(),x__9655__auto__);
})(),"(~{}[~{}])"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,a,i,idxs){
var astr = cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,cljs.core.count.call(null,idxs),"[~{}]"));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),(function (){var x__9655__auto__ = [cljs.core.str("(~{}[~{}]"),cljs.core.str(astr),cljs.core.str(")")].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = a;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = i;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),idxs)));
});

cljs.core$macros.aget.cljs$lang$applyTo = (function (seq15998){
var G__15999 = cljs.core.first.call(null,seq15998);
var seq15998__$1 = cljs.core.next.call(null,seq15998);
var G__16000 = cljs.core.first.call(null,seq15998__$1);
var seq15998__$2 = cljs.core.next.call(null,seq15998__$1);
var G__16001 = cljs.core.first.call(null,seq15998__$2);
var seq15998__$3 = cljs.core.next.call(null,seq15998__$2);
var G__16002 = cljs.core.first.call(null,seq15998__$3);
var seq15998__$4 = cljs.core.next.call(null,seq15998__$3);
return cljs.core$macros.aget.cljs$core$IFn$_invoke$arity$variadic(G__15999,G__16000,G__16001,G__16002,seq15998__$4);
});

cljs.core$macros.aget.cljs$lang$maxFixedArity = (4);


cljs.core$macros.aget.cljs$lang$macro = true;
cljs.core$macros.aset = (function cljs$core$macros$aset(var_args){
var args16009 = [];
var len__9926__auto___16018 = arguments.length;
var i__9927__auto___16019 = (0);
while(true){
if((i__9927__auto___16019 < len__9926__auto___16018)){
args16009.push((arguments[i__9927__auto___16019]));

var G__16020 = (i__9927__auto___16019 + (1));
i__9927__auto___16019 = G__16020;
continue;
} else {
}
break;
}

var G__16017 = args16009.length;
switch (G__16017) {
case 5:
return cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
var argseq__9945__auto__ = (new cljs.core.IndexedSeq(args16009.slice((5)),(0),null));
return cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__9945__auto__);

}
});

cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$5 = (function (_AMPERSAND_form,_AMPERSAND_env,a,i,v){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9655__auto__ = a;
return cljs.core._conj.call(null,(function (){var x__9655__auto____$1 = i;
return cljs.core._conj.call(null,(function (){var x__9655__auto____$2 = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto____$2);
})(),x__9655__auto____$1);
})(),x__9655__auto__);
})(),"(~{}[~{}] = ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,a,idx,idx2,idxv){
var n = (cljs.core.count.call(null,idxv) - (1));
var astr = cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,n,"[~{}]"));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),(function (){var x__9655__auto__ = [cljs.core.str("(~{}[~{}][~{}]"),cljs.core.str(astr),cljs.core.str(" = ~{})")].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = a;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = idx2;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),idxv)));
});

cljs.core$macros.aset.cljs$lang$applyTo = (function (seq16010){
var G__16011 = cljs.core.first.call(null,seq16010);
var seq16010__$1 = cljs.core.next.call(null,seq16010);
var G__16012 = cljs.core.first.call(null,seq16010__$1);
var seq16010__$2 = cljs.core.next.call(null,seq16010__$1);
var G__16013 = cljs.core.first.call(null,seq16010__$2);
var seq16010__$3 = cljs.core.next.call(null,seq16010__$2);
var G__16014 = cljs.core.first.call(null,seq16010__$3);
var seq16010__$4 = cljs.core.next.call(null,seq16010__$3);
var G__16015 = cljs.core.first.call(null,seq16010__$4);
var seq16010__$5 = cljs.core.next.call(null,seq16010__$4);
return cljs.core$macros.aset.cljs$core$IFn$_invoke$arity$variadic(G__16011,G__16012,G__16013,G__16014,G__16015,seq16010__$5);
});

cljs.core$macros.aset.cljs$lang$maxFixedArity = (5);


cljs.core$macros.aset.cljs$lang$macro = true;
cljs.core$macros._PLUS_ = (function cljs$core$macros$_PLUS_(var_args){
var args16022 = [];
var len__9926__auto___16030 = arguments.length;
var i__9927__auto___16031 = (0);
while(true){
if((i__9927__auto___16031 < len__9926__auto___16030)){
args16022.push((arguments[i__9927__auto___16031]));

var G__16032 = (i__9927__auto___16031 + (1));
i__9927__auto___16031 = G__16032;
continue;
} else {
}
break;
}

var G__16029 = args16022.length;
switch (G__16029) {
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
var argseq__9945__auto__ = (new cljs.core.IndexedSeq(args16022.slice((4)),(0),null));
return cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__9945__auto__);

}
});

cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return (0);
});

cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9655__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__9655__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto____$1);
})(),x__9655__auto__);
})(),"(~{} + ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),(function (){var x__9655__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),more)));
});

cljs.core$macros._PLUS_.cljs$lang$applyTo = (function (seq16023){
var G__16024 = cljs.core.first.call(null,seq16023);
var seq16023__$1 = cljs.core.next.call(null,seq16023);
var G__16025 = cljs.core.first.call(null,seq16023__$1);
var seq16023__$2 = cljs.core.next.call(null,seq16023__$1);
var G__16026 = cljs.core.first.call(null,seq16023__$2);
var seq16023__$3 = cljs.core.next.call(null,seq16023__$2);
var G__16027 = cljs.core.first.call(null,seq16023__$3);
var seq16023__$4 = cljs.core.next.call(null,seq16023__$3);
return cljs.core$macros._PLUS_.cljs$core$IFn$_invoke$arity$variadic(G__16024,G__16025,G__16026,G__16027,seq16023__$4);
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
var args__9933__auto__ = [];
var len__9926__auto___16037 = arguments.length;
var i__9927__auto___16038 = (0);
while(true){
if((i__9927__auto___16038 < len__9926__auto___16037)){
args__9933__auto__.push((arguments[i__9927__auto___16038]));

var G__16039 = (i__9927__auto___16038 + (1));
i__9927__auto___16038 = G__16039;
continue;
} else {
}
break;
}

var argseq__9934__auto__ = ((((2) < args__9933__auto__.length))?(new cljs.core.IndexedSeq(args__9933__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_add.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9934__auto__);
});

cljs.core$macros.unchecked_add.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),xs)));
});

cljs.core$macros.unchecked_add.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_add.cljs$lang$applyTo = (function (seq16034){
var G__16035 = cljs.core.first.call(null,seq16034);
var seq16034__$1 = cljs.core.next.call(null,seq16034);
var G__16036 = cljs.core.first.call(null,seq16034__$1);
var seq16034__$2 = cljs.core.next.call(null,seq16034__$1);
return cljs.core$macros.unchecked_add.cljs$core$IFn$_invoke$arity$variadic(G__16035,G__16036,seq16034__$2);
});


cljs.core$macros.unchecked_add.cljs$lang$macro = true;
cljs.core$macros.unchecked_add_int = (function cljs$core$macros$unchecked_add_int(var_args){
var args__9933__auto__ = [];
var len__9926__auto___16043 = arguments.length;
var i__9927__auto___16044 = (0);
while(true){
if((i__9927__auto___16044 < len__9926__auto___16043)){
args__9933__auto__.push((arguments[i__9927__auto___16044]));

var G__16045 = (i__9927__auto___16044 + (1));
i__9927__auto___16044 = G__16045;
continue;
} else {
}
break;
}

var argseq__9934__auto__ = ((((2) < args__9933__auto__.length))?(new cljs.core.IndexedSeq(args__9933__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_add_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9934__auto__);
});

cljs.core$macros.unchecked_add_int.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),xs)));
});

cljs.core$macros.unchecked_add_int.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_add_int.cljs$lang$applyTo = (function (seq16040){
var G__16041 = cljs.core.first.call(null,seq16040);
var seq16040__$1 = cljs.core.next.call(null,seq16040);
var G__16042 = cljs.core.first.call(null,seq16040__$1);
var seq16040__$2 = cljs.core.next.call(null,seq16040__$1);
return cljs.core$macros.unchecked_add_int.cljs$core$IFn$_invoke$arity$variadic(G__16041,G__16042,seq16040__$2);
});


cljs.core$macros.unchecked_add_int.cljs$lang$macro = true;
cljs.core$macros.unchecked_dec = (function cljs$core$macros$unchecked_dec(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","dec","cljs.core$macros/dec",-247694061,null)),(function (){var x__9655__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
});

cljs.core$macros.unchecked_dec.cljs$lang$macro = true;
cljs.core$macros.unchecked_dec_int = (function cljs$core$macros$unchecked_dec_int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","dec","cljs.core$macros/dec",-247694061,null)),(function (){var x__9655__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
});

cljs.core$macros.unchecked_dec_int.cljs$lang$macro = true;
cljs.core$macros.unchecked_divide_int = (function cljs$core$macros$unchecked_divide_int(var_args){
var args__9933__auto__ = [];
var len__9926__auto___16049 = arguments.length;
var i__9927__auto___16050 = (0);
while(true){
if((i__9927__auto___16050 < len__9926__auto___16049)){
args__9933__auto__.push((arguments[i__9927__auto___16050]));

var G__16051 = (i__9927__auto___16050 + (1));
i__9927__auto___16050 = G__16051;
continue;
} else {
}
break;
}

var argseq__9934__auto__ = ((((2) < args__9933__auto__.length))?(new cljs.core.IndexedSeq(args__9933__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_divide_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9934__auto__);
});

cljs.core$macros.unchecked_divide_int.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),xs)));
});

cljs.core$macros.unchecked_divide_int.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_divide_int.cljs$lang$applyTo = (function (seq16046){
var G__16047 = cljs.core.first.call(null,seq16046);
var seq16046__$1 = cljs.core.next.call(null,seq16046);
var G__16048 = cljs.core.first.call(null,seq16046__$1);
var seq16046__$2 = cljs.core.next.call(null,seq16046__$1);
return cljs.core$macros.unchecked_divide_int.cljs$core$IFn$_invoke$arity$variadic(G__16047,G__16048,seq16046__$2);
});


cljs.core$macros.unchecked_divide_int.cljs$lang$macro = true;
cljs.core$macros.unchecked_inc = (function cljs$core$macros$unchecked_inc(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),(function (){var x__9655__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
});

cljs.core$macros.unchecked_inc.cljs$lang$macro = true;
cljs.core$macros.unchecked_inc_int = (function cljs$core$macros$unchecked_inc_int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),(function (){var x__9655__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
});

cljs.core$macros.unchecked_inc_int.cljs$lang$macro = true;
cljs.core$macros.unchecked_multiply = (function cljs$core$macros$unchecked_multiply(var_args){
var args__9933__auto__ = [];
var len__9926__auto___16055 = arguments.length;
var i__9927__auto___16056 = (0);
while(true){
if((i__9927__auto___16056 < len__9926__auto___16055)){
args__9933__auto__.push((arguments[i__9927__auto___16056]));

var G__16057 = (i__9927__auto___16056 + (1));
i__9927__auto___16056 = G__16057;
continue;
} else {
}
break;
}

var argseq__9934__auto__ = ((((2) < args__9933__auto__.length))?(new cljs.core.IndexedSeq(args__9933__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_multiply.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9934__auto__);
});

cljs.core$macros.unchecked_multiply.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","*","cljs.core$macros/*",946321529,null)),xs)));
});

cljs.core$macros.unchecked_multiply.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_multiply.cljs$lang$applyTo = (function (seq16052){
var G__16053 = cljs.core.first.call(null,seq16052);
var seq16052__$1 = cljs.core.next.call(null,seq16052);
var G__16054 = cljs.core.first.call(null,seq16052__$1);
var seq16052__$2 = cljs.core.next.call(null,seq16052__$1);
return cljs.core$macros.unchecked_multiply.cljs$core$IFn$_invoke$arity$variadic(G__16053,G__16054,seq16052__$2);
});


cljs.core$macros.unchecked_multiply.cljs$lang$macro = true;
cljs.core$macros.unchecked_multiply_int = (function cljs$core$macros$unchecked_multiply_int(var_args){
var args__9933__auto__ = [];
var len__9926__auto___16061 = arguments.length;
var i__9927__auto___16062 = (0);
while(true){
if((i__9927__auto___16062 < len__9926__auto___16061)){
args__9933__auto__.push((arguments[i__9927__auto___16062]));

var G__16063 = (i__9927__auto___16062 + (1));
i__9927__auto___16062 = G__16063;
continue;
} else {
}
break;
}

var argseq__9934__auto__ = ((((2) < args__9933__auto__.length))?(new cljs.core.IndexedSeq(args__9933__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_multiply_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9934__auto__);
});

cljs.core$macros.unchecked_multiply_int.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","*","cljs.core$macros/*",946321529,null)),xs)));
});

cljs.core$macros.unchecked_multiply_int.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_multiply_int.cljs$lang$applyTo = (function (seq16058){
var G__16059 = cljs.core.first.call(null,seq16058);
var seq16058__$1 = cljs.core.next.call(null,seq16058);
var G__16060 = cljs.core.first.call(null,seq16058__$1);
var seq16058__$2 = cljs.core.next.call(null,seq16058__$1);
return cljs.core$macros.unchecked_multiply_int.cljs$core$IFn$_invoke$arity$variadic(G__16059,G__16060,seq16058__$2);
});


cljs.core$macros.unchecked_multiply_int.cljs$lang$macro = true;
cljs.core$macros.unchecked_negate = (function cljs$core$macros$unchecked_negate(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__9655__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
});

cljs.core$macros.unchecked_negate.cljs$lang$macro = true;
cljs.core$macros.unchecked_negate_int = (function cljs$core$macros$unchecked_negate_int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__9655__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
});

cljs.core$macros.unchecked_negate_int.cljs$lang$macro = true;
cljs.core$macros.unchecked_remainder_int = (function cljs$core$macros$unchecked_remainder_int(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","mod","cljs.core$macros/mod",2132457375,null)),(function (){var x__9655__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
});

cljs.core$macros.unchecked_remainder_int.cljs$lang$macro = true;
cljs.core$macros.unchecked_subtract = (function cljs$core$macros$unchecked_subtract(var_args){
var args__9933__auto__ = [];
var len__9926__auto___16067 = arguments.length;
var i__9927__auto___16068 = (0);
while(true){
if((i__9927__auto___16068 < len__9926__auto___16067)){
args__9933__auto__.push((arguments[i__9927__auto___16068]));

var G__16069 = (i__9927__auto___16068 + (1));
i__9927__auto___16068 = G__16069;
continue;
} else {
}
break;
}

var argseq__9934__auto__ = ((((2) < args__9933__auto__.length))?(new cljs.core.IndexedSeq(args__9933__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_subtract.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9934__auto__);
});

cljs.core$macros.unchecked_subtract.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),xs)));
});

cljs.core$macros.unchecked_subtract.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_subtract.cljs$lang$applyTo = (function (seq16064){
var G__16065 = cljs.core.first.call(null,seq16064);
var seq16064__$1 = cljs.core.next.call(null,seq16064);
var G__16066 = cljs.core.first.call(null,seq16064__$1);
var seq16064__$2 = cljs.core.next.call(null,seq16064__$1);
return cljs.core$macros.unchecked_subtract.cljs$core$IFn$_invoke$arity$variadic(G__16065,G__16066,seq16064__$2);
});


cljs.core$macros.unchecked_subtract.cljs$lang$macro = true;
cljs.core$macros.unchecked_subtract_int = (function cljs$core$macros$unchecked_subtract_int(var_args){
var args__9933__auto__ = [];
var len__9926__auto___16073 = arguments.length;
var i__9927__auto___16074 = (0);
while(true){
if((i__9927__auto___16074 < len__9926__auto___16073)){
args__9933__auto__.push((arguments[i__9927__auto___16074]));

var G__16075 = (i__9927__auto___16074 + (1));
i__9927__auto___16074 = G__16075;
continue;
} else {
}
break;
}

var argseq__9934__auto__ = ((((2) < args__9933__auto__.length))?(new cljs.core.IndexedSeq(args__9933__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.unchecked_subtract_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9934__auto__);
});

cljs.core$macros.unchecked_subtract_int.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),xs)));
});

cljs.core$macros.unchecked_subtract_int.cljs$lang$maxFixedArity = (2);

cljs.core$macros.unchecked_subtract_int.cljs$lang$applyTo = (function (seq16070){
var G__16071 = cljs.core.first.call(null,seq16070);
var seq16070__$1 = cljs.core.next.call(null,seq16070);
var G__16072 = cljs.core.first.call(null,seq16070__$1);
var seq16070__$2 = cljs.core.next.call(null,seq16070__$1);
return cljs.core$macros.unchecked_subtract_int.cljs$core$IFn$_invoke$arity$variadic(G__16071,G__16072,seq16070__$2);
});


cljs.core$macros.unchecked_subtract_int.cljs$lang$macro = true;
cljs.core$macros._ = (function cljs$core$macros$_(var_args){
var args16076 = [];
var len__9926__auto___16084 = arguments.length;
var i__9927__auto___16085 = (0);
while(true){
if((i__9927__auto___16085 < len__9926__auto___16084)){
args16076.push((arguments[i__9927__auto___16085]));

var G__16086 = (i__9927__auto___16085 + (1));
i__9927__auto___16085 = G__16086;
continue;
} else {
}
break;
}

var G__16083 = args16076.length;
switch (G__16083) {
case 3:
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__9945__auto__ = (new cljs.core.IndexedSeq(args16076.slice((4)),(0),null));
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__9945__auto__);

}
});

cljs.core$macros._.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9655__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),"(- ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros._.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9655__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__9655__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto____$1);
})(),x__9655__auto__);
})(),"(~{} - ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros._.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__9655__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),more)));
});

cljs.core$macros._.cljs$lang$applyTo = (function (seq16077){
var G__16078 = cljs.core.first.call(null,seq16077);
var seq16077__$1 = cljs.core.next.call(null,seq16077);
var G__16079 = cljs.core.first.call(null,seq16077__$1);
var seq16077__$2 = cljs.core.next.call(null,seq16077__$1);
var G__16080 = cljs.core.first.call(null,seq16077__$2);
var seq16077__$3 = cljs.core.next.call(null,seq16077__$2);
var G__16081 = cljs.core.first.call(null,seq16077__$3);
var seq16077__$4 = cljs.core.next.call(null,seq16077__$3);
return cljs.core$macros._.cljs$core$IFn$_invoke$arity$variadic(G__16078,G__16079,G__16080,G__16081,seq16077__$4);
});

cljs.core$macros._.cljs$lang$maxFixedArity = (4);


cljs.core$macros._.cljs$lang$macro = true;
cljs.core$macros._STAR_ = (function cljs$core$macros$_STAR_(var_args){
var args16088 = [];
var len__9926__auto___16096 = arguments.length;
var i__9927__auto___16097 = (0);
while(true){
if((i__9927__auto___16097 < len__9926__auto___16096)){
args16088.push((arguments[i__9927__auto___16097]));

var G__16098 = (i__9927__auto___16097 + (1));
i__9927__auto___16097 = G__16098;
continue;
} else {
}
break;
}

var G__16095 = args16088.length;
switch (G__16095) {
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
var argseq__9945__auto__ = (new cljs.core.IndexedSeq(args16088.slice((4)),(0),null));
return cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__9945__auto__);

}
});

cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return (1);
});

cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9655__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__9655__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto____$1);
})(),x__9655__auto__);
})(),"(~{} * ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","*","cljs.core$macros/*",946321529,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","*","cljs.core$macros/*",946321529,null)),(function (){var x__9655__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),more)));
});

cljs.core$macros._STAR_.cljs$lang$applyTo = (function (seq16089){
var G__16090 = cljs.core.first.call(null,seq16089);
var seq16089__$1 = cljs.core.next.call(null,seq16089);
var G__16091 = cljs.core.first.call(null,seq16089__$1);
var seq16089__$2 = cljs.core.next.call(null,seq16089__$1);
var G__16092 = cljs.core.first.call(null,seq16089__$2);
var seq16089__$3 = cljs.core.next.call(null,seq16089__$2);
var G__16093 = cljs.core.first.call(null,seq16089__$3);
var seq16089__$4 = cljs.core.next.call(null,seq16089__$3);
return cljs.core$macros._STAR_.cljs$core$IFn$_invoke$arity$variadic(G__16090,G__16091,G__16092,G__16093,seq16089__$4);
});

cljs.core$macros._STAR_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._STAR_.cljs$lang$macro = true;
cljs.core$macros._SLASH_ = (function cljs$core$macros$_SLASH_(var_args){
var args16100 = [];
var len__9926__auto___16108 = arguments.length;
var i__9927__auto___16109 = (0);
while(true){
if((i__9927__auto___16109 < len__9926__auto___16108)){
args16100.push((arguments[i__9927__auto___16109]));

var G__16110 = (i__9927__auto___16109 + (1));
i__9927__auto___16109 = G__16110;
continue;
} else {
}
break;
}

var G__16107 = args16100.length;
switch (G__16107) {
case 3:
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__9945__auto__ = (new cljs.core.IndexedSeq(args16100.slice((4)),(0),null));
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__9945__auto__);

}
});

cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)),(function (){var x__9655__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
});

cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9655__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__9655__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto____$1);
})(),x__9655__auto__);
})(),"(~{} / ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),(function (){var x__9655__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),more)));
});

cljs.core$macros._SLASH_.cljs$lang$applyTo = (function (seq16101){
var G__16102 = cljs.core.first.call(null,seq16101);
var seq16101__$1 = cljs.core.next.call(null,seq16101);
var G__16103 = cljs.core.first.call(null,seq16101__$1);
var seq16101__$2 = cljs.core.next.call(null,seq16101__$1);
var G__16104 = cljs.core.first.call(null,seq16101__$2);
var seq16101__$3 = cljs.core.next.call(null,seq16101__$2);
var G__16105 = cljs.core.first.call(null,seq16101__$3);
var seq16101__$4 = cljs.core.next.call(null,seq16101__$3);
return cljs.core$macros._SLASH_.cljs$core$IFn$_invoke$arity$variadic(G__16102,G__16103,G__16104,G__16105,seq16101__$4);
});

cljs.core$macros._SLASH_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._SLASH_.cljs$lang$macro = true;
cljs.core$macros.divide = (function cljs$core$macros$divide(var_args){
var args16112 = [];
var len__9926__auto___16120 = arguments.length;
var i__9927__auto___16121 = (0);
while(true){
if((i__9927__auto___16121 < len__9926__auto___16120)){
args16112.push((arguments[i__9927__auto___16121]));

var G__16122 = (i__9927__auto___16121 + (1));
i__9927__auto___16121 = G__16122;
continue;
} else {
}
break;
}

var G__16119 = args16112.length;
switch (G__16119) {
case 3:
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__9945__auto__ = (new cljs.core.IndexedSeq(args16112.slice((4)),(0),null));
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__9945__auto__);

}
});

cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)),(function (){var x__9655__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
});

cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9655__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__9655__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto____$1);
})(),x__9655__auto__);
})(),"(~{} / ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","/","cljs.core$macros//",-893374331,null)),(function (){var x__9655__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),more)));
});

cljs.core$macros.divide.cljs$lang$applyTo = (function (seq16113){
var G__16114 = cljs.core.first.call(null,seq16113);
var seq16113__$1 = cljs.core.next.call(null,seq16113);
var G__16115 = cljs.core.first.call(null,seq16113__$1);
var seq16113__$2 = cljs.core.next.call(null,seq16113__$1);
var G__16116 = cljs.core.first.call(null,seq16113__$2);
var seq16113__$3 = cljs.core.next.call(null,seq16113__$2);
var G__16117 = cljs.core.first.call(null,seq16113__$3);
var seq16113__$4 = cljs.core.next.call(null,seq16113__$3);
return cljs.core$macros.divide.cljs$core$IFn$_invoke$arity$variadic(G__16114,G__16115,G__16116,G__16117,seq16113__$4);
});

cljs.core$macros.divide.cljs$lang$maxFixedArity = (4);


cljs.core$macros.divide.cljs$lang$macro = true;
cljs.core$macros._LT_ = (function cljs$core$macros$_LT_(var_args){
var args16124 = [];
var len__9926__auto___16132 = arguments.length;
var i__9927__auto___16133 = (0);
while(true){
if((i__9927__auto___16133 < len__9926__auto___16132)){
args16124.push((arguments[i__9927__auto___16133]));

var G__16134 = (i__9927__auto___16133 + (1));
i__9927__auto___16133 = G__16134;
continue;
} else {
}
break;
}

var G__16131 = args16124.length;
switch (G__16131) {
case 3:
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__9945__auto__ = (new cljs.core.IndexedSeq(args16124.slice((4)),(0),null));
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__9945__auto__);

}
});

cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9655__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__9655__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto____$1);
})(),x__9655__auto__);
})(),"(~{} < ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__9655__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__9655__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),more)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
});

cljs.core$macros._LT_.cljs$lang$applyTo = (function (seq16125){
var G__16126 = cljs.core.first.call(null,seq16125);
var seq16125__$1 = cljs.core.next.call(null,seq16125);
var G__16127 = cljs.core.first.call(null,seq16125__$1);
var seq16125__$2 = cljs.core.next.call(null,seq16125__$1);
var G__16128 = cljs.core.first.call(null,seq16125__$2);
var seq16125__$3 = cljs.core.next.call(null,seq16125__$2);
var G__16129 = cljs.core.first.call(null,seq16125__$3);
var seq16125__$4 = cljs.core.next.call(null,seq16125__$3);
return cljs.core$macros._LT_.cljs$core$IFn$_invoke$arity$variadic(G__16126,G__16127,G__16128,G__16129,seq16125__$4);
});

cljs.core$macros._LT_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._LT_.cljs$lang$macro = true;
cljs.core$macros._LT__EQ_ = (function cljs$core$macros$_LT__EQ_(var_args){
var args16136 = [];
var len__9926__auto___16144 = arguments.length;
var i__9927__auto___16145 = (0);
while(true){
if((i__9927__auto___16145 < len__9926__auto___16144)){
args16136.push((arguments[i__9927__auto___16145]));

var G__16146 = (i__9927__auto___16145 + (1));
i__9927__auto___16145 = G__16146;
continue;
} else {
}
break;
}

var G__16143 = args16136.length;
switch (G__16143) {
case 3:
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__9945__auto__ = (new cljs.core.IndexedSeq(args16136.slice((4)),(0),null));
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__9945__auto__);

}
});

cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9655__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__9655__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto____$1);
})(),x__9655__auto__);
})(),"(~{} <= ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<=","cljs.core$macros/<=",1865244377,null)),(function (){var x__9655__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<=","cljs.core$macros/<=",1865244377,null)),(function (){var x__9655__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),more)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
});

cljs.core$macros._LT__EQ_.cljs$lang$applyTo = (function (seq16137){
var G__16138 = cljs.core.first.call(null,seq16137);
var seq16137__$1 = cljs.core.next.call(null,seq16137);
var G__16139 = cljs.core.first.call(null,seq16137__$1);
var seq16137__$2 = cljs.core.next.call(null,seq16137__$1);
var G__16140 = cljs.core.first.call(null,seq16137__$2);
var seq16137__$3 = cljs.core.next.call(null,seq16137__$2);
var G__16141 = cljs.core.first.call(null,seq16137__$3);
var seq16137__$4 = cljs.core.next.call(null,seq16137__$3);
return cljs.core$macros._LT__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__16138,G__16139,G__16140,G__16141,seq16137__$4);
});

cljs.core$macros._LT__EQ_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._LT__EQ_.cljs$lang$macro = true;
cljs.core$macros._GT_ = (function cljs$core$macros$_GT_(var_args){
var args16148 = [];
var len__9926__auto___16156 = arguments.length;
var i__9927__auto___16157 = (0);
while(true){
if((i__9927__auto___16157 < len__9926__auto___16156)){
args16148.push((arguments[i__9927__auto___16157]));

var G__16158 = (i__9927__auto___16157 + (1));
i__9927__auto___16157 = G__16158;
continue;
} else {
}
break;
}

var G__16155 = args16148.length;
switch (G__16155) {
case 3:
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__9945__auto__ = (new cljs.core.IndexedSeq(args16148.slice((4)),(0),null));
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__9945__auto__);

}
});

cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9655__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__9655__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto____$1);
})(),x__9655__auto__);
})(),"(~{} > ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros",">","cljs.core$macros/>",1703297853,null)),(function (){var x__9655__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros",">","cljs.core$macros/>",1703297853,null)),(function (){var x__9655__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),more)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
});

cljs.core$macros._GT_.cljs$lang$applyTo = (function (seq16149){
var G__16150 = cljs.core.first.call(null,seq16149);
var seq16149__$1 = cljs.core.next.call(null,seq16149);
var G__16151 = cljs.core.first.call(null,seq16149__$1);
var seq16149__$2 = cljs.core.next.call(null,seq16149__$1);
var G__16152 = cljs.core.first.call(null,seq16149__$2);
var seq16149__$3 = cljs.core.next.call(null,seq16149__$2);
var G__16153 = cljs.core.first.call(null,seq16149__$3);
var seq16149__$4 = cljs.core.next.call(null,seq16149__$3);
return cljs.core$macros._GT_.cljs$core$IFn$_invoke$arity$variadic(G__16150,G__16151,G__16152,G__16153,seq16149__$4);
});

cljs.core$macros._GT_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._GT_.cljs$lang$macro = true;
cljs.core$macros._GT__EQ_ = (function cljs$core$macros$_GT__EQ_(var_args){
var args16160 = [];
var len__9926__auto___16168 = arguments.length;
var i__9927__auto___16169 = (0);
while(true){
if((i__9927__auto___16169 < len__9926__auto___16168)){
args16160.push((arguments[i__9927__auto___16169]));

var G__16170 = (i__9927__auto___16169 + (1));
i__9927__auto___16169 = G__16170;
continue;
} else {
}
break;
}

var G__16167 = args16160.length;
switch (G__16167) {
case 3:
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__9945__auto__ = (new cljs.core.IndexedSeq(args16160.slice((4)),(0),null));
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__9945__auto__);

}
});

cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9655__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__9655__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto____$1);
})(),x__9655__auto__);
})(),"(~{} >= ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros",">=","cljs.core$macros/>=",527849062,null)),(function (){var x__9655__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros",">=","cljs.core$macros/>=",527849062,null)),(function (){var x__9655__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),more)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
});

cljs.core$macros._GT__EQ_.cljs$lang$applyTo = (function (seq16161){
var G__16162 = cljs.core.first.call(null,seq16161);
var seq16161__$1 = cljs.core.next.call(null,seq16161);
var G__16163 = cljs.core.first.call(null,seq16161__$1);
var seq16161__$2 = cljs.core.next.call(null,seq16161__$1);
var G__16164 = cljs.core.first.call(null,seq16161__$2);
var seq16161__$3 = cljs.core.next.call(null,seq16161__$2);
var G__16165 = cljs.core.first.call(null,seq16161__$3);
var seq16161__$4 = cljs.core.next.call(null,seq16161__$3);
return cljs.core$macros._GT__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__16162,G__16163,G__16164,G__16165,seq16161__$4);
});

cljs.core$macros._GT__EQ_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._GT__EQ_.cljs$lang$macro = true;
cljs.core$macros._EQ__EQ_ = (function cljs$core$macros$_EQ__EQ_(var_args){
var args16172 = [];
var len__9926__auto___16180 = arguments.length;
var i__9927__auto___16181 = (0);
while(true){
if((i__9927__auto___16181 < len__9926__auto___16180)){
args16172.push((arguments[i__9927__auto___16181]));

var G__16182 = (i__9927__auto___16181 + (1));
i__9927__auto___16181 = G__16182;
continue;
} else {
}
break;
}

var G__16179 = args16172.length;
switch (G__16179) {
case 3:
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__9945__auto__ = (new cljs.core.IndexedSeq(args16172.slice((4)),(0),null));
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__9945__auto__);

}
});

cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return true;
});

cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9655__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__9655__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto____$1);
})(),x__9655__auto__);
})(),"(~{} === ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","==","cljs.core$macros/==",-818551413,null)),(function (){var x__9655__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","==","cljs.core$macros/==",-818551413,null)),(function (){var x__9655__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),more)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
});

cljs.core$macros._EQ__EQ_.cljs$lang$applyTo = (function (seq16173){
var G__16174 = cljs.core.first.call(null,seq16173);
var seq16173__$1 = cljs.core.next.call(null,seq16173);
var G__16175 = cljs.core.first.call(null,seq16173__$1);
var seq16173__$2 = cljs.core.next.call(null,seq16173__$1);
var G__16176 = cljs.core.first.call(null,seq16173__$2);
var seq16173__$3 = cljs.core.next.call(null,seq16173__$2);
var G__16177 = cljs.core.first.call(null,seq16173__$3);
var seq16173__$4 = cljs.core.next.call(null,seq16173__$3);
return cljs.core$macros._EQ__EQ_.cljs$core$IFn$_invoke$arity$variadic(G__16174,G__16175,G__16176,G__16177,seq16173__$4);
});

cljs.core$macros._EQ__EQ_.cljs$lang$maxFixedArity = (4);


cljs.core$macros._EQ__EQ_.cljs$lang$macro = true;
cljs.core$macros.dec = (function cljs$core$macros$dec(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__9655__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)))));
});

cljs.core$macros.dec.cljs$lang$macro = true;
cljs.core$macros.inc = (function cljs$core$macros$inc(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),(function (){var x__9655__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)))));
});

cljs.core$macros.inc.cljs$lang$macro = true;
cljs.core$macros.zero_QMARK_ = (function cljs$core$macros$zero_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","==","cljs.core$macros/==",-818551413,null)),(function (){var x__9655__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)))));
});

cljs.core$macros.zero_QMARK_.cljs$lang$macro = true;
cljs.core$macros.pos_QMARK_ = (function cljs$core$macros$pos_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros",">","cljs.core$macros/>",1703297853,null)),(function (){var x__9655__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)))));
});

cljs.core$macros.pos_QMARK_.cljs$lang$macro = true;
cljs.core$macros.neg_QMARK_ = (function cljs$core$macros$neg_QMARK_(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__9655__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)))));
});

cljs.core$macros.neg_QMARK_.cljs$lang$macro = true;
cljs.core$macros.max = (function cljs$core$macros$max(var_args){
var args16186 = [];
var len__9926__auto___16194 = arguments.length;
var i__9927__auto___16195 = (0);
while(true){
if((i__9927__auto___16195 < len__9926__auto___16194)){
args16186.push((arguments[i__9927__auto___16195]));

var G__16196 = (i__9927__auto___16195 + (1));
i__9927__auto___16195 = G__16196;
continue;
} else {
}
break;
}

var G__16193 = args16186.length;
switch (G__16193) {
case 3:
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__9945__auto__ = (new cljs.core.IndexedSeq(args16186.slice((4)),(0),null));
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__9945__auto__);

}
});

cljs.core$macros.max.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.max.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9655__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__16184__auto__","x__16184__auto__",1352549336,null)),(function (){var x__9655__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__16185__auto__","y__16185__auto__",1761664600,null)),(function (){var x__9655__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"((~{} > ~{}) ? ~{} : ~{})"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__16184__auto__","x__16184__auto__",1352549336,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__16185__auto__","y__16185__auto__",1761664600,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__16184__auto__","x__16184__auto__",1352549336,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__16185__auto__","y__16185__auto__",1761664600,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
});

cljs.core$macros.max.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","max","cljs.core$macros/max",1176150699,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","max","cljs.core$macros/max",1176150699,null)),(function (){var x__9655__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),more)));
});

cljs.core$macros.max.cljs$lang$applyTo = (function (seq16187){
var G__16188 = cljs.core.first.call(null,seq16187);
var seq16187__$1 = cljs.core.next.call(null,seq16187);
var G__16189 = cljs.core.first.call(null,seq16187__$1);
var seq16187__$2 = cljs.core.next.call(null,seq16187__$1);
var G__16190 = cljs.core.first.call(null,seq16187__$2);
var seq16187__$3 = cljs.core.next.call(null,seq16187__$2);
var G__16191 = cljs.core.first.call(null,seq16187__$3);
var seq16187__$4 = cljs.core.next.call(null,seq16187__$3);
return cljs.core$macros.max.cljs$core$IFn$_invoke$arity$variadic(G__16188,G__16189,G__16190,G__16191,seq16187__$4);
});

cljs.core$macros.max.cljs$lang$maxFixedArity = (4);


cljs.core$macros.max.cljs$lang$macro = true;
cljs.core$macros.min = (function cljs$core$macros$min(var_args){
var args16200 = [];
var len__9926__auto___16208 = arguments.length;
var i__9927__auto___16209 = (0);
while(true){
if((i__9927__auto___16209 < len__9926__auto___16208)){
args16200.push((arguments[i__9927__auto___16209]));

var G__16210 = (i__9927__auto___16209 + (1));
i__9927__auto___16209 = G__16210;
continue;
} else {
}
break;
}

var G__16207 = args16200.length;
switch (G__16207) {
case 3:
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__9945__auto__ = (new cljs.core.IndexedSeq(args16200.slice((4)),(0),null));
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__9945__auto__);

}
});

cljs.core$macros.min.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
return x;
});

cljs.core$macros.min.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9655__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__16198__auto__","x__16198__auto__",1716772969,null)),(function (){var x__9655__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__16199__auto__","y__16199__auto__",-1510628259,null)),(function (){var x__9655__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"((~{} < ~{}) ? ~{} : ~{})"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__16198__auto__","x__16198__auto__",1716772969,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__16199__auto__","y__16199__auto__",-1510628259,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__16198__auto__","x__16198__auto__",1716772969,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"y__16199__auto__","y__16199__auto__",-1510628259,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
});

cljs.core$macros.min.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","min","cljs.core$macros/min",1499775161,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","min","cljs.core$macros/min",1499775161,null)),(function (){var x__9655__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),more)));
});

cljs.core$macros.min.cljs$lang$applyTo = (function (seq16201){
var G__16202 = cljs.core.first.call(null,seq16201);
var seq16201__$1 = cljs.core.next.call(null,seq16201);
var G__16203 = cljs.core.first.call(null,seq16201__$1);
var seq16201__$2 = cljs.core.next.call(null,seq16201__$1);
var G__16204 = cljs.core.first.call(null,seq16201__$2);
var seq16201__$3 = cljs.core.next.call(null,seq16201__$2);
var G__16205 = cljs.core.first.call(null,seq16201__$3);
var seq16201__$4 = cljs.core.next.call(null,seq16201__$3);
return cljs.core$macros.min.cljs$core$IFn$_invoke$arity$variadic(G__16202,G__16203,G__16204,G__16205,seq16201__$4);
});

cljs.core$macros.min.cljs$lang$maxFixedArity = (4);


cljs.core$macros.min.cljs$lang$macro = true;
cljs.core$macros.js_mod = (function cljs$core$macros$js_mod(_AMPERSAND_form,_AMPERSAND_env,num,div){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9655__auto__ = num;
return cljs.core._conj.call(null,(function (){var x__9655__auto____$1 = div;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto____$1);
})(),x__9655__auto__);
})(),"(~{} % ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.js_mod.cljs$lang$macro = true;
cljs.core$macros.bit_not = (function cljs$core$macros$bit_not(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9655__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),"(~ ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_not.cljs$lang$macro = true;
cljs.core$macros.bit_and = (function cljs$core$macros$bit_and(var_args){
var args16212 = [];
var len__9926__auto___16220 = arguments.length;
var i__9927__auto___16221 = (0);
while(true){
if((i__9927__auto___16221 < len__9926__auto___16220)){
args16212.push((arguments[i__9927__auto___16221]));

var G__16222 = (i__9927__auto___16221 + (1));
i__9927__auto___16221 = G__16222;
continue;
} else {
}
break;
}

var G__16219 = args16212.length;
switch (G__16219) {
case 4:
return cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__9945__auto__ = (new cljs.core.IndexedSeq(args16212.slice((4)),(0),null));
return cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__9945__auto__);

}
});

cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9655__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__9655__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto____$1);
})(),x__9655__auto__);
})(),"(~{} & ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-and","cljs.core$macros/bit-and",-1069060797,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-and","cljs.core$macros/bit-and",-1069060797,null)),(function (){var x__9655__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),more)));
});

cljs.core$macros.bit_and.cljs$lang$applyTo = (function (seq16213){
var G__16214 = cljs.core.first.call(null,seq16213);
var seq16213__$1 = cljs.core.next.call(null,seq16213);
var G__16215 = cljs.core.first.call(null,seq16213__$1);
var seq16213__$2 = cljs.core.next.call(null,seq16213__$1);
var G__16216 = cljs.core.first.call(null,seq16213__$2);
var seq16213__$3 = cljs.core.next.call(null,seq16213__$2);
var G__16217 = cljs.core.first.call(null,seq16213__$3);
var seq16213__$4 = cljs.core.next.call(null,seq16213__$3);
return cljs.core$macros.bit_and.cljs$core$IFn$_invoke$arity$variadic(G__16214,G__16215,G__16216,G__16217,seq16213__$4);
});

cljs.core$macros.bit_and.cljs$lang$maxFixedArity = (4);


cljs.core$macros.bit_and.cljs$lang$macro = true;
cljs.core$macros.unsafe_bit_and = (function cljs$core$macros$unsafe_bit_and(var_args){
var args16224 = [];
var len__9926__auto___16232 = arguments.length;
var i__9927__auto___16233 = (0);
while(true){
if((i__9927__auto___16233 < len__9926__auto___16232)){
args16224.push((arguments[i__9927__auto___16233]));

var G__16234 = (i__9927__auto___16233 + (1));
i__9927__auto___16233 = G__16234;
continue;
} else {
}
break;
}

var G__16231 = args16224.length;
switch (G__16231) {
case 4:
return cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__9945__auto__ = (new cljs.core.IndexedSeq(args16224.slice((4)),(0),null));
return cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__9945__auto__);

}
});

cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9655__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__9655__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto____$1);
})(),x__9655__auto__);
})(),"(~{} & ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__9655__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),more)));
});

cljs.core$macros.unsafe_bit_and.cljs$lang$applyTo = (function (seq16225){
var G__16226 = cljs.core.first.call(null,seq16225);
var seq16225__$1 = cljs.core.next.call(null,seq16225);
var G__16227 = cljs.core.first.call(null,seq16225__$1);
var seq16225__$2 = cljs.core.next.call(null,seq16225__$1);
var G__16228 = cljs.core.first.call(null,seq16225__$2);
var seq16225__$3 = cljs.core.next.call(null,seq16225__$2);
var G__16229 = cljs.core.first.call(null,seq16225__$3);
var seq16225__$4 = cljs.core.next.call(null,seq16225__$3);
return cljs.core$macros.unsafe_bit_and.cljs$core$IFn$_invoke$arity$variadic(G__16226,G__16227,G__16228,G__16229,seq16225__$4);
});

cljs.core$macros.unsafe_bit_and.cljs$lang$maxFixedArity = (4);


cljs.core$macros.unsafe_bit_and.cljs$lang$macro = true;
cljs.core$macros.bit_or = (function cljs$core$macros$bit_or(var_args){
var args16236 = [];
var len__9926__auto___16244 = arguments.length;
var i__9927__auto___16245 = (0);
while(true){
if((i__9927__auto___16245 < len__9926__auto___16244)){
args16236.push((arguments[i__9927__auto___16245]));

var G__16246 = (i__9927__auto___16245 + (1));
i__9927__auto___16245 = G__16246;
continue;
} else {
}
break;
}

var G__16243 = args16236.length;
switch (G__16243) {
case 4:
return cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__9945__auto__ = (new cljs.core.IndexedSeq(args16236.slice((4)),(0),null));
return cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__9945__auto__);

}
});

cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9655__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__9655__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto____$1);
})(),x__9655__auto__);
})(),"(~{} | ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-or","cljs.core$macros/bit-or",1463236165,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-or","cljs.core$macros/bit-or",1463236165,null)),(function (){var x__9655__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),more)));
});

cljs.core$macros.bit_or.cljs$lang$applyTo = (function (seq16237){
var G__16238 = cljs.core.first.call(null,seq16237);
var seq16237__$1 = cljs.core.next.call(null,seq16237);
var G__16239 = cljs.core.first.call(null,seq16237__$1);
var seq16237__$2 = cljs.core.next.call(null,seq16237__$1);
var G__16240 = cljs.core.first.call(null,seq16237__$2);
var seq16237__$3 = cljs.core.next.call(null,seq16237__$2);
var G__16241 = cljs.core.first.call(null,seq16237__$3);
var seq16237__$4 = cljs.core.next.call(null,seq16237__$3);
return cljs.core$macros.bit_or.cljs$core$IFn$_invoke$arity$variadic(G__16238,G__16239,G__16240,G__16241,seq16237__$4);
});

cljs.core$macros.bit_or.cljs$lang$maxFixedArity = (4);


cljs.core$macros.bit_or.cljs$lang$macro = true;
cljs.core$macros.int$ = (function cljs$core$macros$int(_AMPERSAND_form,_AMPERSAND_env,x){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-or","cljs.core$macros/bit-or",1463236165,null)),(function (){var x__9655__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)))));
});

cljs.core$macros.int$.cljs$lang$macro = true;
cljs.core$macros.bit_xor = (function cljs$core$macros$bit_xor(var_args){
var args16248 = [];
var len__9926__auto___16256 = arguments.length;
var i__9927__auto___16257 = (0);
while(true){
if((i__9927__auto___16257 < len__9926__auto___16256)){
args16248.push((arguments[i__9927__auto___16257]));

var G__16258 = (i__9927__auto___16257 + (1));
i__9927__auto___16257 = G__16258;
continue;
} else {
}
break;
}

var G__16255 = args16248.length;
switch (G__16255) {
case 4:
return cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__9945__auto__ = (new cljs.core.IndexedSeq(args16248.slice((4)),(0),null));
return cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__9945__auto__);

}
});

cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9655__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__9655__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto____$1);
})(),x__9655__auto__);
})(),"(~{} ^ ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-xor","cljs.core$macros/bit-xor",1284619191,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-xor","cljs.core$macros/bit-xor",1284619191,null)),(function (){var x__9655__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),more)));
});

cljs.core$macros.bit_xor.cljs$lang$applyTo = (function (seq16249){
var G__16250 = cljs.core.first.call(null,seq16249);
var seq16249__$1 = cljs.core.next.call(null,seq16249);
var G__16251 = cljs.core.first.call(null,seq16249__$1);
var seq16249__$2 = cljs.core.next.call(null,seq16249__$1);
var G__16252 = cljs.core.first.call(null,seq16249__$2);
var seq16249__$3 = cljs.core.next.call(null,seq16249__$2);
var G__16253 = cljs.core.first.call(null,seq16249__$3);
var seq16249__$4 = cljs.core.next.call(null,seq16249__$3);
return cljs.core$macros.bit_xor.cljs$core$IFn$_invoke$arity$variadic(G__16250,G__16251,G__16252,G__16253,seq16249__$4);
});

cljs.core$macros.bit_xor.cljs$lang$maxFixedArity = (4);


cljs.core$macros.bit_xor.cljs$lang$macro = true;
cljs.core$macros.bit_and_not = (function cljs$core$macros$bit_and_not(var_args){
var args16260 = [];
var len__9926__auto___16268 = arguments.length;
var i__9927__auto___16269 = (0);
while(true){
if((i__9927__auto___16269 < len__9926__auto___16268)){
args16260.push((arguments[i__9927__auto___16269]));

var G__16270 = (i__9927__auto___16269 + (1));
i__9927__auto___16269 = G__16270;
continue;
} else {
}
break;
}

var G__16267 = args16260.length;
switch (G__16267) {
case 4:
return cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__9945__auto__ = (new cljs.core.IndexedSeq(args16260.slice((4)),(0),null));
return cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__9945__auto__);

}
});

cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,y){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9655__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__9655__auto____$1 = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto____$1);
})(),x__9655__auto__);
})(),"(~{} & ~~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,y,more){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-and-not","cljs.core$macros/bit-and-not",-537076037,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","bit-and-not","cljs.core$macros/bit-and-not",-537076037,null)),(function (){var x__9655__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = y;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),more)));
});

cljs.core$macros.bit_and_not.cljs$lang$applyTo = (function (seq16261){
var G__16262 = cljs.core.first.call(null,seq16261);
var seq16261__$1 = cljs.core.next.call(null,seq16261);
var G__16263 = cljs.core.first.call(null,seq16261__$1);
var seq16261__$2 = cljs.core.next.call(null,seq16261__$1);
var G__16264 = cljs.core.first.call(null,seq16261__$2);
var seq16261__$3 = cljs.core.next.call(null,seq16261__$2);
var G__16265 = cljs.core.first.call(null,seq16261__$3);
var seq16261__$4 = cljs.core.next.call(null,seq16261__$3);
return cljs.core$macros.bit_and_not.cljs$core$IFn$_invoke$arity$variadic(G__16262,G__16263,G__16264,G__16265,seq16261__$4);
});

cljs.core$macros.bit_and_not.cljs$lang$maxFixedArity = (4);


cljs.core$macros.bit_and_not.cljs$lang$macro = true;
cljs.core$macros.bit_clear = (function cljs$core$macros$bit_clear(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9655__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__9655__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto____$1);
})(),x__9655__auto__);
})(),"(~{} & ~(1 << ~{}))"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_clear.cljs$lang$macro = true;
cljs.core$macros.bit_flip = (function cljs$core$macros$bit_flip(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9655__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__9655__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto____$1);
})(),x__9655__auto__);
})(),"(~{} ^ (1 << ~{}))"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_flip.cljs$lang$macro = true;
cljs.core$macros.bit_test = (function cljs$core$macros$bit_test(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core$macros.bool_expr.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9655__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__9655__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto____$1);
})(),x__9655__auto__);
})(),"((~{} & (1 << ~{})) != 0)"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null)));
});

cljs.core$macros.bit_test.cljs$lang$macro = true;
cljs.core$macros.bit_shift_left = (function cljs$core$macros$bit_shift_left(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9655__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__9655__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto____$1);
})(),x__9655__auto__);
})(),"(~{} << ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_shift_left.cljs$lang$macro = true;
cljs.core$macros.bit_shift_right = (function cljs$core$macros$bit_shift_right(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9655__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__9655__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto____$1);
})(),x__9655__auto__);
})(),"(~{} >> ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_shift_right.cljs$lang$macro = true;
cljs.core$macros.bit_shift_right_zero_fill = (function cljs$core$macros$bit_shift_right_zero_fill(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9655__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__9655__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto____$1);
})(),x__9655__auto__);
})(),"(~{} >>> ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_shift_right_zero_fill.cljs$lang$macro = true;
cljs.core$macros.unsigned_bit_shift_right = (function cljs$core$macros$unsigned_bit_shift_right(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9655__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__9655__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto____$1);
})(),x__9655__auto__);
})(),"(~{} >>> ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.unsigned_bit_shift_right.cljs$lang$macro = true;
cljs.core$macros.bit_set = (function cljs$core$macros$bit_set(_AMPERSAND_form,_AMPERSAND_env,x,n){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9655__auto__ = x;
return cljs.core._conj.call(null,(function (){var x__9655__auto____$1 = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto____$1);
})(),x__9655__auto__);
})(),"(~{} | (1 << ~{}))"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bit_set.cljs$lang$macro = true;
cljs.core$macros.mask = (function cljs$core$macros$mask(_AMPERSAND_form,_AMPERSAND_env,hash,shift){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9655__auto__ = hash;
return cljs.core._conj.call(null,(function (){var x__9655__auto____$1 = shift;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto____$1);
})(),x__9655__auto__);
})(),"((~{} >>> ~{}) & 0x01f)"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.mask.cljs$lang$macro = true;
cljs.core$macros.bitpos = (function cljs$core$macros$bitpos(_AMPERSAND_form,_AMPERSAND_env,hash,shift){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","mask","cljs.core$macros/mask",1575319768,null)),(function (){var x__9655__auto__ = hash;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = shift;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),"(1 << ~{})"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.bitpos.cljs$lang$macro = true;
cljs.core$macros.caching_hash = (function cljs$core$macros$caching_hash(_AMPERSAND_form,_AMPERSAND_env,coll,hash_fn,hash_key){
if((hash_key instanceof cljs.core.Symbol)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("hash-key is substituted twice"),cljs.core.str("\n"),cljs.core.str("(clojure.core/symbol? hash-key)")].join('')));
}

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9655__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__16272__auto__","h__16272__auto__",-469229997,null)),(function (){var x__9655__auto__ = hash_key;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__16272__auto__","h__16272__auto__",-469229997,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__16272__auto__","h__16272__auto__",-469229997,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9655__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__16272__auto__","h__16272__auto__",-469229997,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9655__auto__ = hash_fn;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = coll;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__9655__auto__ = hash_key;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__16272__auto__","h__16272__auto__",-469229997,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"h__16272__auto__","h__16272__auto__",-469229997,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
});

cljs.core$macros.caching_hash.cljs$lang$macro = true;
cljs.core$macros.do_curried = (function cljs$core$macros$do_curried(name,doc,meta,args,body){
var cargs = cljs.core.vec.call(null,cljs.core.butlast.call(null,args));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null)),(function (){var x__9655__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = doc;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = meta;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9655__auto__ = cargs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9655__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__16273__auto__","x__16273__auto__",34282507,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9655__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),cargs,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__16273__auto__","x__16273__auto__",34282507,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9655__auto__ = args;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
});
/**
 * Builds another arity of the fn that returns a fn awaiting the last
 *   param
 */
cljs.core$macros.defcurried = (function cljs$core$macros$defcurried(var_args){
var args__9933__auto__ = [];
var len__9926__auto___16281 = arguments.length;
var i__9927__auto___16282 = (0);
while(true){
if((i__9927__auto___16282 < len__9926__auto___16281)){
args__9933__auto__.push((arguments[i__9927__auto___16282]));

var G__16283 = (i__9927__auto___16282 + (1));
i__9927__auto___16282 = G__16283;
continue;
} else {
}
break;
}

var argseq__9934__auto__ = ((((6) < args__9933__auto__.length))?(new cljs.core.IndexedSeq(args__9933__auto__.slice((6)),(0),null)):null);
return cljs.core$macros.defcurried.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),argseq__9934__auto__);
});

cljs.core$macros.defcurried.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,doc,meta,args,body){
return cljs.core$macros.do_curried.call(null,name,doc,meta,args,body);
});

cljs.core$macros.defcurried.cljs$lang$maxFixedArity = (6);

cljs.core$macros.defcurried.cljs$lang$applyTo = (function (seq16274){
var G__16275 = cljs.core.first.call(null,seq16274);
var seq16274__$1 = cljs.core.next.call(null,seq16274);
var G__16276 = cljs.core.first.call(null,seq16274__$1);
var seq16274__$2 = cljs.core.next.call(null,seq16274__$1);
var G__16277 = cljs.core.first.call(null,seq16274__$2);
var seq16274__$3 = cljs.core.next.call(null,seq16274__$2);
var G__16278 = cljs.core.first.call(null,seq16274__$3);
var seq16274__$4 = cljs.core.next.call(null,seq16274__$3);
var G__16279 = cljs.core.first.call(null,seq16274__$4);
var seq16274__$5 = cljs.core.next.call(null,seq16274__$4);
var G__16280 = cljs.core.first.call(null,seq16274__$5);
var seq16274__$6 = cljs.core.next.call(null,seq16274__$5);
return cljs.core$macros.defcurried.cljs$core$IFn$_invoke$arity$variadic(G__16275,G__16276,G__16277,G__16278,G__16279,G__16280,seq16274__$6);
});


cljs.core$macros.defcurried.cljs$lang$macro = true;
cljs.core$macros.do_rfn = (function cljs$core$macros$do_rfn(f1,k,fkv){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9655__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9655__auto__ = f1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = clojure.walk.postwalk.call(null,(function (p1__16284_SHARP_){
if(cljs.core.sequential_QMARK_.call(null,p1__16284_SHARP_)){
return ((cljs.core.vector_QMARK_.call(null,p1__16284_SHARP_))?cljs.core.vec:cljs.core.identity).call(null,cljs.core.remove.call(null,cljs.core.PersistentHashSet.fromArray([k], true),p1__16284_SHARP_));
} else {
return p1__16284_SHARP_;
}
}),fkv);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = fkv;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
});
/**
 * Builds 3-arity reducing fn given names of wrapped fn and key, and k/v impl.
 */
cljs.core$macros.rfn = (function cljs$core$macros$rfn(_AMPERSAND_form,_AMPERSAND_env,p__16285,fkv){
var vec__16289 = p__16285;
var f1 = cljs.core.nth.call(null,vec__16289,(0),null);
var k = cljs.core.nth.call(null,vec__16289,(1),null);
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
var args__9933__auto__ = [];
var len__9926__auto___16295 = arguments.length;
var i__9927__auto___16296 = (0);
while(true){
if((i__9927__auto___16296 < len__9926__auto___16295)){
args__9933__auto__.push((arguments[i__9927__auto___16296]));

var G__16297 = (i__9927__auto___16296 + (1));
i__9927__auto___16296 = G__16297;
continue;
} else {
}
break;
}

var argseq__9934__auto__ = ((((2) < args__9933__auto__.length))?(new cljs.core.IndexedSeq(args__9933__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.reify.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9934__auto__);
});

cljs.core$macros.reify.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,impls){
var t = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,[cljs.core.str("t_"),cljs.core.str(clojure.string.replace.call(null,[cljs.core.str(cljs.core.munge.call(null,cljs.analyzer._STAR_cljs_ns_STAR_))].join(''),".","$"))].join('')),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"anonymous","anonymous",447897231),true], null));
var meta_sym = cljs.core.gensym.call(null,"meta");
var this_sym = cljs.core.gensym.call(null,"_");
var locals = cljs.core.keys.call(null,new cljs.core.Keyword(null,"locals","locals",535295783).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
var ns = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
var munge = cljs.compiler.munge;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-not","cljs.core$macros/when-not",-764302244,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","exists?","cljs.core$macros/exists?",-1828590389,null)),(function (){var x__9655__auto__ = cljs.core.symbol.call(null,[cljs.core.str(ns)].join(''),[cljs.core.str(t)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","deftype","cljs.core$macros/deftype",1799045688,null)),(function (){var x__9655__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,locals,(function (){var x__9655__auto__ = meta_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","IWithMeta","cljs.core/IWithMeta",-1981666051,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-with-meta","-with-meta",-1610713823,null)),(function (){var x__9655__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9655__auto__ = this_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = meta_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__9655__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),locals,(function (){var x__9655__auto__ = meta_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","IMeta","cljs.core/IMeta",-1459057517,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-meta","-meta",494863156,null)),(function (){var x__9655__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9655__auto__ = this_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = meta_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),impls)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__9655__auto__ = t;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),locals,(function (){var x__9655__auto__ = cljs.analyzer.elide_reader_meta.call(null,cljs.core.meta.call(null,_AMPERSAND_form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
});

cljs.core$macros.reify.cljs$lang$maxFixedArity = (2);

cljs.core$macros.reify.cljs$lang$applyTo = (function (seq16292){
var G__16293 = cljs.core.first.call(null,seq16292);
var seq16292__$1 = cljs.core.next.call(null,seq16292);
var G__16294 = cljs.core.first.call(null,seq16292__$1);
var seq16292__$2 = cljs.core.next.call(null,seq16292__$1);
return cljs.core$macros.reify.cljs$core$IFn$_invoke$arity$variadic(G__16293,G__16294,seq16292__$2);
});


cljs.core$macros.reify.cljs$lang$macro = true;
/**
 * Identical to reify but mutates its first argument.
 */
cljs.core$macros.specify_BANG_ = (function cljs$core$macros$specify_BANG_(var_args){
var args__9933__auto__ = [];
var len__9926__auto___16302 = arguments.length;
var i__9927__auto___16303 = (0);
while(true){
if((i__9927__auto___16303 < len__9926__auto___16302)){
args__9933__auto__.push((arguments[i__9927__auto___16303]));

var G__16304 = (i__9927__auto___16303 + (1));
i__9927__auto___16303 = G__16304;
continue;
} else {
}
break;
}

var argseq__9934__auto__ = ((((3) < args__9933__auto__.length))?(new cljs.core.IndexedSeq(args__9933__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.specify_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9934__auto__);
});

cljs.core$macros.specify_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,impls){
var x = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"x"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"extend","extend",1836484006),new cljs.core.Keyword(null,"instance","instance",-2121349050)], null));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9655__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9655__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","extend-type","cljs.core$macros/extend-type",1713295201,null)),(function (){var x__9655__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),impls)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
});

cljs.core$macros.specify_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core$macros.specify_BANG_.cljs$lang$applyTo = (function (seq16298){
var G__16299 = cljs.core.first.call(null,seq16298);
var seq16298__$1 = cljs.core.next.call(null,seq16298);
var G__16300 = cljs.core.first.call(null,seq16298__$1);
var seq16298__$2 = cljs.core.next.call(null,seq16298__$1);
var G__16301 = cljs.core.first.call(null,seq16298__$2);
var seq16298__$3 = cljs.core.next.call(null,seq16298__$2);
return cljs.core$macros.specify_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__16299,G__16300,G__16301,seq16298__$3);
});


cljs.core$macros.specify_BANG_.cljs$lang$macro = true;
/**
 * Identical to specify! but does not mutate its first argument. The first
 *   argument must be an ICloneable instance.
 */
cljs.core$macros.specify = (function cljs$core$macros$specify(var_args){
var args__9933__auto__ = [];
var len__9926__auto___16309 = arguments.length;
var i__9927__auto___16310 = (0);
while(true){
if((i__9927__auto___16310 < len__9926__auto___16309)){
args__9933__auto__.push((arguments[i__9927__auto___16310]));

var G__16311 = (i__9927__auto___16310 + (1));
i__9927__auto___16310 = G__16311;
continue;
} else {
}
break;
}

var argseq__9934__auto__ = ((((3) < args__9933__auto__.length))?(new cljs.core.IndexedSeq(args__9933__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.specify.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9934__auto__);
});

cljs.core$macros.specify.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,expr,impls){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","specify!","cljs.core/specify!",-585401629,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","clone","cljs.core/clone",1417120092,null)),(function (){var x__9655__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),impls)));
});

cljs.core$macros.specify.cljs$lang$maxFixedArity = (3);

cljs.core$macros.specify.cljs$lang$applyTo = (function (seq16305){
var G__16306 = cljs.core.first.call(null,seq16305);
var seq16305__$1 = cljs.core.next.call(null,seq16305);
var G__16307 = cljs.core.first.call(null,seq16305__$1);
var seq16305__$2 = cljs.core.next.call(null,seq16305__$1);
var G__16308 = cljs.core.first.call(null,seq16305__$2);
var seq16305__$3 = cljs.core.next.call(null,seq16305__$2);
return cljs.core$macros.specify.cljs$core$IFn$_invoke$arity$variadic(G__16306,G__16307,G__16308,seq16305__$3);
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
var args__9933__auto__ = [];
var len__9926__auto___16316 = arguments.length;
var i__9927__auto___16317 = (0);
while(true){
if((i__9927__auto___16317 < len__9926__auto___16316)){
args__9933__auto__.push((arguments[i__9927__auto___16317]));

var G__16318 = (i__9927__auto___16317 + (1));
i__9927__auto___16317 = G__16318;
continue;
} else {
}
break;
}

var argseq__9934__auto__ = ((((3) < args__9933__auto__.length))?(new cljs.core.IndexedSeq(args__9933__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.this_as.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9934__auto__);
});

cljs.core$macros.this_as.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9655__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9655__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-this","cljs.core$macros/js-this",353597180,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),body)));
});

cljs.core$macros.this_as.cljs$lang$maxFixedArity = (3);

cljs.core$macros.this_as.cljs$lang$applyTo = (function (seq16312){
var G__16313 = cljs.core.first.call(null,seq16312);
var seq16312__$1 = cljs.core.next.call(null,seq16312);
var G__16314 = cljs.core.first.call(null,seq16312__$1);
var seq16312__$2 = cljs.core.next.call(null,seq16312__$1);
var G__16315 = cljs.core.first.call(null,seq16312__$2);
var seq16312__$3 = cljs.core.next.call(null,seq16312__$2);
return cljs.core$macros.this_as.cljs$core$IFn$_invoke$arity$variadic(G__16313,G__16314,G__16315,seq16312__$3);
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

if(cljs.core.truth_((function (){var and__8806__auto__ = new cljs.core.Keyword(null,"protocol-deprecated","protocol-deprecated",103233497).cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_warnings_STAR_);
if(cljs.core.truth_(and__8806__auto__)){
var and__8806__auto____$1 = new cljs.core.Keyword(null,"deprecated","deprecated",1498275348).cljs$core$IFn$_invoke$arity$1(var$);
if(cljs.core.truth_(and__8806__auto____$1)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"deprecation-nowarn","deprecation-nowarn",-1762828044).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,p)));
} else {
return and__8806__auto____$1;
}
} else {
return and__8806__auto__;
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
var G__16319 = cljs.core.assoc.call(null,ret,cljs.core.first.call(null,s),cljs.core.take_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,s)));
var G__16320 = cljs.core.drop_while.call(null,cljs.core.seq_QMARK_,cljs.core.next.call(null,s));
ret = G__16319;
s = G__16320;
continue;
} else {
return ret;
}
break;
}
});
cljs.core$macros.base_assign_impls = (function cljs$core$macros$base_assign_impls(env,resolve,tsym,type,p__16321){
var vec__16329 = p__16321;
var p = cljs.core.nth.call(null,vec__16329,(0),null);
var sigs = cljs.core.nth.call(null,vec__16329,(1),null);
cljs.core$macros.warn_and_update_protocol.call(null,p,tsym,env);

var psym = resolve.call(null,p);
var pfn_prefix = cljs.core.subs.call(null,[cljs.core.str(psym)].join(''),(0),([cljs.core.str(psym)].join('').indexOf("/") + (1)));
return cljs.core.cons.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aset","cljs.core$macros/aset",-693176374,null)),(function (){var x__9655__auto__ = psym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = type;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true)))),cljs.core.map.call(null,((function (psym,pfn_prefix,vec__16329,p,sigs){
return (function (p__16332){
var vec__16333 = p__16332;
var seq__16334 = cljs.core.seq.call(null,vec__16333);
var first__16335 = cljs.core.first.call(null,seq__16334);
var seq__16334__$1 = cljs.core.next.call(null,seq__16334);
var f = first__16335;
var meths = seq__16334__$1;
var form = vec__16333;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aset","cljs.core$macros/aset",-693176374,null)),(function (){var x__9655__auto__ = cljs.core.symbol.call(null,[cljs.core.str(pfn_prefix),cljs.core.str(f)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = type;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),meths))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
});})(psym,pfn_prefix,vec__16329,p,sigs))
,sigs));
});
if(typeof cljs.core$macros.extend_prefix !== 'undefined'){
} else {
cljs.core$macros.extend_prefix = (function (){var method_table__9746__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9747__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9748__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9749__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9750__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.core$macros","extend-prefix"),((function (method_table__9746__auto__,prefer_table__9747__auto__,method_cache__9748__auto__,cached_hierarchy__9749__auto__,hierarchy__9750__auto__){
return (function (tsym,sym){
return new cljs.core.Keyword(null,"extend","extend",1836484006).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,tsym));
});})(method_table__9746__auto__,prefer_table__9747__auto__,method_cache__9748__auto__,cached_hierarchy__9749__auto__,hierarchy__9750__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__9750__auto__,method_table__9746__auto__,prefer_table__9747__auto__,method_cache__9748__auto__,cached_hierarchy__9749__auto__));
})();
}
cljs.core._add_method.call(null,cljs.core$macros.extend_prefix,new cljs.core.Keyword(null,"instance","instance",-2121349050),(function (tsym,sym){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"..","..",-300507420,null)),(function (){var x__9655__auto__ = tsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core$macros.to_property.call(null,sym);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
}));
cljs.core._add_method.call(null,cljs.core$macros.extend_prefix,new cljs.core.Keyword(null,"default","default",-1987822328),(function (tsym,sym){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"..","..",-300507420,null)),(function (){var x__9655__auto__ = tsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-prototype","-prototype",-450831903,null)),(function (){var x__9655__auto__ = cljs.core$macros.to_property.call(null,sym);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
}));
cljs.core$macros.adapt_obj_params = (function cljs$core$macros$adapt_obj_params(type,p__16336){
var vec__16343 = p__16336;
var seq__16344 = cljs.core.seq.call(null,vec__16343);
var first__16345 = cljs.core.first.call(null,seq__16344);
var seq__16344__$1 = cljs.core.next.call(null,seq__16344);
var vec__16346 = first__16345;
var seq__16347 = cljs.core.seq.call(null,vec__16346);
var first__16348 = cljs.core.first.call(null,seq__16347);
var seq__16347__$1 = cljs.core.next.call(null,seq__16347);
var this$ = first__16348;
var args = seq__16347__$1;
var sig = vec__16346;
var body = seq__16344__$1;
var x__9655__auto__ = cljs.core.vec.call(null,args);
return cljs.core._conj.call(null,(function (){var x__9655__auto____$1 = cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"this-as","this-as",-848995740,null),cljs.core.vary_meta.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),type),body);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto____$1);
})(),x__9655__auto__);
});
cljs.core$macros.adapt_ifn_params = (function cljs$core$macros$adapt_ifn_params(type,p__16349){
var vec__16356 = p__16349;
var seq__16357 = cljs.core.seq.call(null,vec__16356);
var first__16358 = cljs.core.first.call(null,seq__16357);
var seq__16357__$1 = cljs.core.next.call(null,seq__16357);
var vec__16359 = first__16358;
var seq__16360 = cljs.core.seq.call(null,vec__16359);
var first__16361 = cljs.core.first.call(null,seq__16360);
var seq__16360__$1 = cljs.core.next.call(null,seq__16360);
var this$ = first__16361;
var args = seq__16360__$1;
var sig = vec__16359;
var body = seq__16357__$1;
var self_sym = cljs.core.with_meta.call(null,new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),type], null));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9655__auto__ = cljs.core.vec.call(null,cljs.core.cons.call(null,self_sym,args));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null)),(function (){var x__9655__auto__ = self_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9655__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9655__auto__ = this$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = self_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
});
cljs.core$macros.adapt_ifn_invoke_params = (function cljs$core$macros$adapt_ifn_invoke_params(type,p__16362){
var vec__16369 = p__16362;
var seq__16370 = cljs.core.seq.call(null,vec__16369);
var first__16371 = cljs.core.first.call(null,seq__16370);
var seq__16370__$1 = cljs.core.next.call(null,seq__16370);
var vec__16372 = first__16371;
var seq__16373 = cljs.core.seq.call(null,vec__16372);
var first__16374 = cljs.core.first.call(null,seq__16373);
var seq__16373__$1 = cljs.core.next.call(null,seq__16373);
var this$ = first__16374;
var args = seq__16373__$1;
var sig = vec__16372;
var body = seq__16370__$1;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9655__auto__ = cljs.core.vec.call(null,args);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null)),(function (){var x__9655__auto__ = cljs.core.vary_meta.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),type);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
});
cljs.core$macros.adapt_proto_params = (function cljs$core$macros$adapt_proto_params(type,p__16375){
var vec__16382 = p__16375;
var seq__16383 = cljs.core.seq.call(null,vec__16382);
var first__16384 = cljs.core.first.call(null,seq__16383);
var seq__16383__$1 = cljs.core.next.call(null,seq__16383);
var vec__16385 = first__16384;
var seq__16386 = cljs.core.seq.call(null,vec__16385);
var first__16387 = cljs.core.first.call(null,seq__16386);
var seq__16386__$1 = cljs.core.next.call(null,seq__16386);
var this$ = first__16387;
var args = seq__16386__$1;
var sig = vec__16385;
var body = seq__16383__$1;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9655__auto__ = cljs.core.vec.call(null,cljs.core.cons.call(null,cljs.core.vary_meta.call(null,this$,cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),type),args));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null)),(function (){var x__9655__auto__ = this$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
});
cljs.core$macros.add_obj_methods = (function cljs$core$macros$add_obj_methods(type,type_sym,sigs){
return cljs.core.map.call(null,(function (p__16396){
var vec__16397 = p__16396;
var seq__16398 = cljs.core.seq.call(null,vec__16397);
var first__16399 = cljs.core.first.call(null,seq__16398);
var seq__16398__$1 = cljs.core.next.call(null,seq__16398);
var f = first__16399;
var meths = seq__16398__$1;
var form = vec__16397;
var vec__16400 = ((cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,meths)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rest.call(null,form)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,meths], null));
var f__$1 = cljs.core.nth.call(null,vec__16400,(0),null);
var meths__$1 = cljs.core.nth.call(null,vec__16400,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__9655__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,f__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),cljs.core.map.call(null,((function (vec__16400,f__$1,meths__$1,vec__16397,seq__16398,first__16399,seq__16398__$1,f,meths,form){
return (function (p1__16388_SHARP_){
return cljs.core$macros.adapt_obj_params.call(null,type,p1__16388_SHARP_);
});})(vec__16400,f__$1,meths__$1,vec__16397,seq__16398,first__16399,seq__16398__$1,f,meths,form))
,meths__$1)))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
}),sigs);
});
cljs.core$macros.ifn_invoke_methods = (function cljs$core$macros$ifn_invoke_methods(type,type_sym,p__16404){
var vec__16408 = p__16404;
var seq__16409 = cljs.core.seq.call(null,vec__16408);
var first__16410 = cljs.core.first.call(null,seq__16409);
var seq__16409__$1 = cljs.core.next.call(null,seq__16409);
var f = first__16410;
var meths = seq__16409__$1;
var form = vec__16408;
return cljs.core.map.call(null,((function (vec__16408,seq__16409,first__16410,seq__16409__$1,f,meths,form){
return (function (meth){
var arity = cljs.core.count.call(null,cljs.core.first.call(null,meth));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__9655__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,cljs.core.symbol.call(null,[cljs.core.str("cljs$core$IFn$_invoke$arity$"),cljs.core.str(arity)].join('')));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9655__auto__ = meth;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})()))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
});})(vec__16408,seq__16409,first__16410,seq__16409__$1,f,meths,form))
,cljs.core.map.call(null,((function (vec__16408,seq__16409,first__16410,seq__16409__$1,f,meths,form){
return (function (p1__16403_SHARP_){
return cljs.core$macros.adapt_ifn_invoke_params.call(null,type,p1__16403_SHARP_);
});})(vec__16408,seq__16409,first__16410,seq__16409__$1,f,meths,form))
,meths));
});
cljs.core$macros.add_ifn_methods = (function cljs$core$macros$add_ifn_methods(type,type_sym,p__16412){
var vec__16416 = p__16412;
var seq__16417 = cljs.core.seq.call(null,vec__16416);
var first__16418 = cljs.core.first.call(null,seq__16417);
var seq__16417__$1 = cljs.core.next.call(null,seq__16417);
var f = first__16418;
var meths = seq__16417__$1;
var form = vec__16416;
var meths__$1 = cljs.core.map.call(null,((function (vec__16416,seq__16417,first__16418,seq__16417__$1,f,meths,form){
return (function (p1__16411_SHARP_){
return cljs.core$macros.adapt_ifn_params.call(null,type,p1__16411_SHARP_);
});})(vec__16416,seq__16417,first__16418,seq__16417__$1,f,meths,form))
,meths);
var this_sym = cljs.core.with_meta.call(null,new cljs.core.Symbol(null,"self__","self__",-153190816,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),type], null));
var argsym = cljs.core.gensym.call(null,"args");
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__9655__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,new cljs.core.Symbol(null,"call","call",1120531661,null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),meths__$1))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})()))),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__9655__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,new cljs.core.Symbol(null,"apply","apply",-1334050276,null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9655__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this_sym,argsym], null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null)),(function (){var x__9655__auto__ = this_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".apply",".apply",-1176201338,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-call",".-call",1760541695,null)),(function (){var x__9655__auto__ = this_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = this_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".concat",".concat",1180408684,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),(function (){var x__9655__auto__ = this_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","aclone","cljs.core/aclone",-758078968,null)),(function (){var x__9655__auto__ = argsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})()))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())))], null),cljs.core$macros.ifn_invoke_methods.call(null,type,type_sym,form));
});
cljs.core$macros.add_proto_methods_STAR_ = (function cljs$core$macros$add_proto_methods_STAR_(pprefix,type,type_sym,p__16419){
var vec__16427 = p__16419;
var seq__16428 = cljs.core.seq.call(null,vec__16427);
var first__16429 = cljs.core.first.call(null,seq__16428);
var seq__16428__$1 = cljs.core.next.call(null,seq__16428);
var f = first__16429;
var meths = seq__16428__$1;
var form = vec__16427;
var pf = [cljs.core.str(pprefix),cljs.core.str(cljs.core.name.call(null,f))].join('');
if(cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,meths))){
var meth = meths;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__9655__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,[cljs.core.str(pf),cljs.core.str("$arity$"),cljs.core.str(cljs.core.count.call(null,cljs.core.first.call(null,meth)))].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),cljs.core$macros.adapt_proto_params.call(null,type,meth)))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())))], null);
} else {
return cljs.core.map.call(null,((function (pf,vec__16427,seq__16428,first__16429,seq__16428__$1,f,meths,form){
return (function (p__16430){
var vec__16431 = p__16430;
var seq__16432 = cljs.core.seq.call(null,vec__16431);
var first__16433 = cljs.core.first.call(null,seq__16432);
var seq__16432__$1 = cljs.core.next.call(null,seq__16432);
var sig = first__16433;
var body = seq__16432__$1;
var meth = vec__16431;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__9655__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,[cljs.core.str(pf),cljs.core.str("$arity$"),cljs.core.str(cljs.core.count.call(null,sig))].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9655__auto__ = cljs.core$macros.adapt_proto_params.call(null,type,meth);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})()))),cljs.core.meta.call(null,form));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
});})(pf,vec__16427,seq__16428,first__16429,seq__16428__$1,f,meths,form))
,meths);
}
});
cljs.core$macros.proto_assign_impls = (function cljs$core$macros$proto_assign_impls(env,resolve,type_sym,type,p__16434){
var vec__16438 = p__16434;
var p = cljs.core.nth.call(null,vec__16438,(0),null);
var sigs = cljs.core.nth.call(null,vec__16438,(1),null);
cljs.core$macros.warn_and_update_protocol.call(null,p,type,env);

var psym = resolve.call(null,p);
var pprefix = cljs.core$macros.protocol_prefix.call(null,psym);
var skip_flag = cljs.core.set.call(null,new cljs.core.Keyword(null,"skip-protocol-flag","skip-protocol-flag",-1426798630).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,type_sym)));
if(cljs.core._EQ_.call(null,p,new cljs.core.Symbol(null,"Object","Object",61210754,null))){
return cljs.core$macros.add_obj_methods.call(null,type,type_sym,sigs);
} else {
return cljs.core.concat.call(null,(cljs.core.truth_(skip_flag.call(null,psym))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__9655__auto__ = cljs.core$macros.extend_prefix.call(null,type_sym,pprefix);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PROTOCOL_SENTINEL","cljs.core/PROTOCOL_SENTINEL",210209696,null)))))], null)),cljs.core.mapcat.call(null,((function (psym,pprefix,skip_flag,vec__16438,p,sigs){
return (function (sig){
if(cljs.core._EQ_.call(null,psym,new cljs.core.Symbol("cljs.core","IFn","cljs.core/IFn",-920223129,null))){
return cljs.core$macros.add_ifn_methods.call(null,type,type_sym,sig);
} else {
return cljs.core$macros.add_proto_methods_STAR_.call(null,pprefix,type,type_sym,sig);
}
});})(psym,pprefix,skip_flag,vec__16438,p,sigs))
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
var vec__16444 = ((cljs.core.vector_QMARK_.call(null,cljs.core.second.call(null,method)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [__GT_name.call(null,method_name),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second.call(null,method)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [__GT_name.call(null,method_name),cljs.core.map.call(null,cljs.core.first,cljs.core.rest.call(null,method))], null));
var fname = cljs.core.nth.call(null,vec__16444,(0),null);
var sigs = cljs.core.nth.call(null,vec__16444,(1),null);
var decmeths = cljs.core.get.call(null,minfo,fname,new cljs.core.Keyword("cljs.core$macros","not-found","cljs.core$macros/not-found",-1226326556));
if(cljs.core._EQ_.call(null,decmeths,new cljs.core.Keyword("cljs.core$macros","not-found","cljs.core$macros/not-found",-1226326556))){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"protocol-invalid-method","protocol-invalid-method",522647516),env,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"protocol","protocol",652470118),p,new cljs.core.Keyword(null,"fname","fname",1500291491),fname,new cljs.core.Keyword(null,"no-such-method","no-such-method",1087422840),true], null));
} else {
}

if(cljs.core.truth_(cljs.core.namespace.call(null,method_name))){
var method_var_16447 = cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),method_name,cljs.analyzer.confirm_var_exist_warning);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(var$),new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(method_var_16447))){
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

var G__16448 = cljs.core.next.call(null,sigs__$1);
var G__16449 = cljs.core.conj.call(null,seen,c);
sigs__$1 = G__16448;
seen = G__16449;
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

var seen_16456 = cljs.core.PersistentHashSet.EMPTY;
var methods_16457__$1 = methods$;
while(true){
if(cljs.core.seq.call(null,methods_16457__$1)){
var vec__16453_16458 = cljs.core.first.call(null,methods_16457__$1);
var fname_16459 = cljs.core.nth.call(null,vec__16453_16458,(0),null);
var method_16460 = vec__16453_16458;
if(cljs.core.contains_QMARK_.call(null,seen_16456,fname_16459)){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"extend-type-invalid-method-shape","extend-type-invalid-method-shape",1424103549),env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"protocol","protocol",652470118),proto,new cljs.core.Keyword(null,"method","method",55703592),fname_16459], null));
} else {
}

cljs.core$macros.validate_impl_sigs.call(null,env,proto,method_16460);

var G__16461 = cljs.core.conj.call(null,seen_16456,fname_16459);
var G__16462 = cljs.core.next.call(null,methods_16457__$1);
seen_16456 = G__16461;
methods_16457__$1 = G__16462;
continue;
} else {
}
break;
}

var G__16463 = cljs.core.conj.call(null,protos,proto);
var G__16464 = impls__$2;
protos = G__16463;
impls__$1 = G__16464;
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
var args__9933__auto__ = [];
var len__9926__auto___16473 = arguments.length;
var i__9927__auto___16474 = (0);
while(true){
if((i__9927__auto___16474 < len__9926__auto___16473)){
args__9933__auto__.push((arguments[i__9927__auto___16474]));

var G__16475 = (i__9927__auto___16474 + (1));
i__9927__auto___16474 = G__16475;
continue;
} else {
}
break;
}

var argseq__9934__auto__ = ((((3) < args__9933__auto__.length))?(new cljs.core.IndexedSeq(args__9933__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.extend_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9934__auto__);
});

cljs.core$macros.extend_type.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,type_sym,impls){
var env = _AMPERSAND_env;
var _ = cljs.core$macros.validate_impls.call(null,env,impls);
var resolve = cljs.core.partial.call(null,cljs.core$macros.resolve_var,env);
var impl_map = cljs.core$macros.__GT_impl_map.call(null,impls);
var impl_map__$1 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"boolean","boolean",-278886877,null),null,new cljs.core.Symbol(null,"number","number",-1084057331,null),null], null), null).call(null,type_sym))?cljs.core$macros.type_hint_impl_map.call(null,type_sym,impl_map):impl_map);
var vec__16470 = (function (){var temp__4655__auto__ = cljs.core$macros.base_type.call(null,type_sym);
if(cljs.core.truth_(temp__4655__auto__)){
var type = temp__4655__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core$macros.base_assign_impls], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [resolve.call(null,type_sym),cljs.core$macros.proto_assign_impls], null);
}
})();
var type = cljs.core.nth.call(null,vec__16470,(0),null);
var assign_impls = cljs.core.nth.call(null,vec__16470,(1),null);
if(cljs.core.truth_((function (){var and__8806__auto__ = new cljs.core.Keyword(null,"extending-base-js-type","extending-base-js-type",432787264).cljs$core$IFn$_invoke$arity$1(cljs.analyzer._STAR_cljs_warnings_STAR_);
if(cljs.core.truth_(and__8806__auto__)){
return cljs.core$macros.js_base_type.call(null,type_sym);
} else {
return and__8806__auto__;
}
})())){
cljs.analyzer.warning.call(null,new cljs.core.Keyword(null,"extending-base-js-type","extending-base-js-type",432787264),env,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-symbol","current-symbol",-932381075),type_sym,new cljs.core.Keyword(null,"suggested-symbol","suggested-symbol",-1329631875),cljs.core$macros.js_base_type.call(null,type_sym)], null));
} else {
}

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),cljs.core.mapcat.call(null,((function (env,_,resolve,impl_map,impl_map__$1,vec__16470,type,assign_impls){
return (function (p1__16465_SHARP_){
return assign_impls.call(null,env,resolve,type_sym,type,p1__16465_SHARP_);
});})(env,_,resolve,impl_map,impl_map__$1,vec__16470,type,assign_impls))
,impl_map__$1))));
});

cljs.core$macros.extend_type.cljs$lang$maxFixedArity = (3);

cljs.core$macros.extend_type.cljs$lang$applyTo = (function (seq16466){
var G__16467 = cljs.core.first.call(null,seq16466);
var seq16466__$1 = cljs.core.next.call(null,seq16466);
var G__16468 = cljs.core.first.call(null,seq16466__$1);
var seq16466__$2 = cljs.core.next.call(null,seq16466__$1);
var G__16469 = cljs.core.first.call(null,seq16466__$2);
var seq16466__$3 = cljs.core.next.call(null,seq16466__$2);
return cljs.core$macros.extend_type.cljs$core$IFn$_invoke$arity$variadic(G__16467,G__16468,G__16469,seq16466__$3);
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
cljs.core$macros.annotate_specs = (function cljs$core$macros$annotate_specs(annots,v,p__16477){
var vec__16481 = p__16477;
var f = cljs.core.nth.call(null,vec__16481,(0),null);
var sigs = cljs.core.nth.call(null,vec__16481,(1),null);
return cljs.core.conj.call(null,v,cljs.core.vary_meta.call(null,cljs.core.cons.call(null,f,cljs.core.map.call(null,((function (vec__16481,f,sigs){
return (function (p1__16476_SHARP_){
return cljs.core.cons.call(null,cljs.core.second.call(null,p1__16476_SHARP_),cljs.core.nnext.call(null,p1__16476_SHARP_));
});})(vec__16481,f,sigs))
,sigs)),cljs.core.merge,annots));
});
cljs.core$macros.dt__GT_et = (function cljs$core$macros$dt__GT_et(var_args){
var args16484 = [];
var len__9926__auto___16487 = arguments.length;
var i__9927__auto___16488 = (0);
while(true){
if((i__9927__auto___16488 < len__9926__auto___16487)){
args16484.push((arguments[i__9927__auto___16488]));

var G__16489 = (i__9927__auto___16488 + (1));
i__9927__auto___16488 = G__16489;
continue;
} else {
}
break;
}

var G__16486 = args16484.length;
switch (G__16486) {
case 3:
return cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.dt__GT_et.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16484.length)].join('')));

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
var G__16491 = ret__$1;
var G__16492 = specs__$2;
ret = G__16491;
specs__$1 = G__16492;
continue;
} else {
return ret;
}
break;
}
});

cljs.core$macros.dt__GT_et.cljs$lang$maxFixedArity = 4;

cljs.core$macros.collect_protocols = (function cljs$core$macros$collect_protocols(impls,env){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,(function (p1__16493_SHARP_){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),p1__16493_SHARP_));
}),cljs.core.filter.call(null,cljs.core.symbol_QMARK_,impls)));
});
cljs.core$macros.build_positional_factory = (function cljs$core$macros$build_positional_factory(rsym,rname,fields){
var fn_name = cljs.core.with_meta.call(null,cljs.core.symbol.call(null,[cljs.core.str(new cljs.core.Symbol(null,"->","->",-2139605430,null)),cljs.core.str(rsym)].join('')),cljs.core.assoc.call(null,cljs.core.meta.call(null,rsym),new cljs.core.Keyword(null,"factory","factory",63933746),new cljs.core.Keyword(null,"positional","positional",-203580463)));
var field_values = (cljs.core.truth_(new cljs.core.Keyword(null,"internal-ctor","internal-ctor",937392560).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,rsym)))?cljs.core.conj.call(null,fields,null,null,null):fields);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null)),(function (){var x__9655__auto__ = fn_name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,fields))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__9655__auto__ = rname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),field_values)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
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
var args__9933__auto__ = [];
var len__9926__auto___16505 = arguments.length;
var i__9927__auto___16506 = (0);
while(true){
if((i__9927__auto___16506 < len__9926__auto___16505)){
args__9933__auto__.push((arguments[i__9927__auto___16506]));

var G__16507 = (i__9927__auto___16506 + (1));
i__9927__auto___16506 = G__16507;
continue;
} else {
}
break;
}

var argseq__9934__auto__ = ((((4) < args__9933__auto__.length))?(new cljs.core.IndexedSeq(args__9933__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.deftype.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__9934__auto__);
});

cljs.core$macros.deftype.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,t,fields,impls){
cljs.core$macros.validate_fields.call(null,"deftype",t,fields);

var env = _AMPERSAND_env;
var r = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,env,new cljs.core.Keyword(null,"locals","locals",535295783)),t));
var vec__16502 = cljs.core$macros.prepare_protocol_masks.call(null,env,impls);
var fpps = cljs.core.nth.call(null,vec__16502,(0),null);
var pmasks = cljs.core.nth.call(null,vec__16502,(1),null);
var protocols = cljs.core$macros.collect_protocols.call(null,impls,env);
var t__$1 = cljs.core.vary_meta.call(null,t,cljs.core.assoc,new cljs.core.Keyword(null,"protocols","protocols",-5615896),protocols,new cljs.core.Keyword(null,"skip-protocol-flag","skip-protocol-flag",-1426798630),fpps);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"deftype*","deftype*",962659890,null)),(function (){var x__9655__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = fields;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = pmasks;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = ((cljs.core.seq.call(null,impls))?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","extend-type","cljs.core$macros/extend-type",1713295201,null)),(function (){var x__9655__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),cljs.core$macros.dt__GT_et.call(null,t__$1,impls,fields)))):null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-getBasis",".-getBasis",-1306451468,null)),(function (){var x__9655__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9655__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__9655__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,fields))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$type",".-cljs$lang$type",-1029307724,null)),(function (){var x__9655__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$ctorStr",".-cljs$lang$ctorStr",-1820706991,null)),(function (){var x__9655__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = [cljs.core.str(r)].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$ctorPrWriter",".-cljs$lang$ctorPrWriter",255834464,null)),(function (){var x__9655__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9655__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__16494__auto__","this__16494__auto__",-98726437,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__16495__auto__","writer__16495__auto__",-352324845,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opt__16496__auto__","opt__16496__auto__",1660679854,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-write","cljs.core/-write",527220517,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__16495__auto__","writer__16495__auto__",-352324845,null)),(function (){var x__9655__auto__ = [cljs.core.str(r)].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core$macros.build_positional_factory.call(null,t__$1,r,fields);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = t__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
});

cljs.core$macros.deftype.cljs$lang$maxFixedArity = (4);

cljs.core$macros.deftype.cljs$lang$applyTo = (function (seq16497){
var G__16498 = cljs.core.first.call(null,seq16497);
var seq16497__$1 = cljs.core.next.call(null,seq16497);
var G__16499 = cljs.core.first.call(null,seq16497__$1);
var seq16497__$2 = cljs.core.next.call(null,seq16497__$1);
var G__16500 = cljs.core.first.call(null,seq16497__$2);
var seq16497__$3 = cljs.core.next.call(null,seq16497__$2);
var G__16501 = cljs.core.first.call(null,seq16497__$3);
var seq16497__$4 = cljs.core.next.call(null,seq16497__$3);
return cljs.core$macros.deftype.cljs$core$IFn$_invoke$arity$variadic(G__16498,G__16499,G__16500,G__16501,seq16497__$4);
});


cljs.core$macros.deftype.cljs$lang$macro = true;
/**
 * Do not use this directly - use defrecord
 */
cljs.core$macros.emit_defrecord = (function cljs$core$macros$emit_defrecord(env,tagname,rname,fields,impls){
var hinted_fields = fields;
var fields__$1 = cljs.core.vec.call(null,cljs.core.map.call(null,((function (hinted_fields){
return (function (p1__16508_SHARP_){
return cljs.core.with_meta.call(null,p1__16508_SHARP_,null);
});})(hinted_fields))
,fields));
var base_fields = fields__$1;
var pr_open = [cljs.core.str("#"),cljs.core.str(cljs.core.namespace.call(null,rname)),cljs.core.str("."),cljs.core.str(cljs.core.name.call(null,rname)),cljs.core.str("{")].join('');
var fields__$2 = cljs.core.conj.call(null,fields__$1,new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),cljs.core.with_meta.call(null,new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)));
var gs = cljs.core.gensym.call(null);
var ksym = cljs.core.gensym.call(null,"k");
var impls__$1 = cljs.core.concat.call(null,impls,new cljs.core.PersistentVector(null, 28, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"IRecord","IRecord",-903221169,null),new cljs.core.Symbol(null,"ICloneable","ICloneable",1882653160,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-clone","-clone",227130084,null)),(function (){var x__9655__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__16509__auto__","this__16509__auto__",1853814903,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__9655__auto__ = tagname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),fields__$2)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})()))),new cljs.core.Symbol(null,"IHash","IHash",-1495374645,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-hash","-hash",-630070274,null)),(function (){var x__9655__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__16510__auto__","this__16510__auto__",-2093782555,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","caching-hash","cljs.core$macros/caching-hash",-1892393069,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__16510__auto__","this__16510__auto__",-2093782555,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"hash-imap","hash-imap",-1047446478,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})()))),new cljs.core.Symbol(null,"IEquiv","IEquiv",-1912850869,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-equiv","-equiv",320124272,null)),(function (){var x__9655__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__16511__auto__","this__16511__auto__",-2001641231,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"other__16512__auto__","other__16512__auto__",-1456293005,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"other__16512__auto__","other__16512__auto__",-1456293005,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","identical?","cljs.core$macros/identical?",815580547,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-constructor",".-constructor",279801701,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__16511__auto__","this__16511__auto__",-2001641231,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-constructor",".-constructor",279801701,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"other__16512__auto__","other__16512__auto__",-1456293005,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","equiv-map","cljs.core/equiv-map",-1185609892,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__16511__auto__","this__16511__auto__",-2001641231,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"other__16512__auto__","other__16512__auto__",-1456293005,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})()))),new cljs.core.Symbol(null,"IMeta","IMeta",1095313672,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-meta","-meta",494863156,null)),(function (){var x__9655__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__16513__auto__","this__16513__auto__",944669322,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__meta","__meta",-946752628,null))))),new cljs.core.Symbol(null,"IWithMeta","IWithMeta",-509493158,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-with-meta","-with-meta",-1610713823,null)),(function (){var x__9655__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__16514__auto__","this__16514__auto__",-1757970269,null)),(function (){var x__9655__auto__ = gs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__9655__auto__ = tagname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),cljs.core.replace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"__meta","__meta",-946752628,null),gs], null),fields__$2))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})()))),new cljs.core.Symbol(null,"ILookup","ILookup",784647298,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-lookup","-lookup",-1438393944,null)),(function (){var x__9655__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__16515__auto__","this__16515__auto__",-664354203,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__16516__auto__","k__16516__auto__",-1358594232,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-lookup","cljs.core/-lookup",-1845674443,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__16515__auto__","this__16515__auto__",-664354203,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__16516__auto__","k__16516__auto__",-1358594232,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})()))),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-lookup","-lookup",-1438393944,null)),(function (){var x__9655__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__16517__auto__","this__16517__auto__",-950357774,null)),(function (){var x__9655__auto__ = ksym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"else__16518__auto__","else__16518__auto__",1557554888,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","case","cljs.core$macros/case",-2131866965,null)),(function (){var x__9655__auto__ = ksym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),cljs.core.mapcat.call(null,((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (f){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,f),f], null);
});})(gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,base_fields),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)),(function (){var x__9655__auto__ = ksym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"else__16518__auto__","else__16518__auto__",1557554888,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})()))),new cljs.core.Symbol(null,"ICounted","ICounted",-1705786327,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-count","-count",416049189,null)),(function (){var x__9655__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__16519__auto__","this__16519__auto__",1967498084,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","+","cljs.core$macros/+",-18260342,null)),(function (){var x__9655__auto__ = cljs.core.count.call(null,base_fields);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})()))),new cljs.core.Symbol(null,"ICollection","ICollection",-686709190,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-conj","-conj",1373798691,null)),(function (){var x__9655__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__16520__auto__","this__16520__auto__",1130020838,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"entry__16521__auto__","entry__16521__auto__",-894625436,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"entry__16521__auto__","entry__16521__auto__",-894625436,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-assoc","cljs.core/-assoc",-814539323,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__16520__auto__","this__16520__auto__",1130020838,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-nth","cljs.core/-nth",504234802,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"entry__16521__auto__","entry__16521__auto__",-894625436,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-nth","cljs.core/-nth",504234802,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"entry__16521__auto__","entry__16521__auto__",-894625436,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","reduce","cljs.core/reduce",2025430439,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-conj","cljs.core/-conj",2040622670,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__16520__auto__","this__16520__auto__",1130020838,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"entry__16521__auto__","entry__16521__auto__",-894625436,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})()))),new cljs.core.Symbol(null,"IAssociative","IAssociative",-1306431882,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-assoc","-assoc",-416089758,null)),(function (){var x__9655__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__16522__auto__","this__16522__auto__",1815033273,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__16523__auto__","k__16523__auto__",2114494516,null)),(function (){var x__9655__auto__ = gs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","condp","cljs.core$macros/condp",431619047,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","keyword-identical?","cljs.core/keyword-identical?",1598491177,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__16523__auto__","k__16523__auto__",2114494516,null)),cljs.core.mapcat.call(null,((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (fld){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,fld),cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"new","new",-444906321,null),tagname,cljs.core.replace.call(null,cljs.core.PersistentArrayMap.fromArray([fld,gs,new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),null], true, false),fields__$2))], null);
});})(gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,base_fields),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__9655__auto__ = tagname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),null,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),null], null), null),fields__$2),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","assoc","cljs.core/assoc",322326297,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__16523__auto__","k__16523__auto__",2114494516,null)),(function (){var x__9655__auto__ = gs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})()))),new cljs.core.Symbol(null,"IMap","IMap",992876629,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-dissoc","-dissoc",1638079447,null)),(function (){var x__9655__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__16524__auto__","this__16524__auto__",1212394153,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__16525__auto__","k__16525__auto__",505461146,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null)),(function (){var x__9655__auto__ = cljs.core.apply.call(null,cljs.core.hash_set,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.keyword,base_fields)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__16525__auto__","k__16525__auto__",505461146,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","dissoc","cljs.core/dissoc",-432349815,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","with-meta","cljs.core/with-meta",749126446,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","into","cljs.core/into",1879938733,null)),(function (){var x__9655__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__16524__auto__","this__16524__auto__",1212394153,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__meta","__meta",-946752628,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__16525__auto__","k__16525__auto__",505461146,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__9655__auto__ = tagname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"__hash","__hash",-1328796629,null),null,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null),null], null), null),fields__$2),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not-empty","cljs.core/not-empty",540057011,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","dissoc","cljs.core/dissoc",-432349815,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"k__16525__auto__","k__16525__auto__",505461146,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})()))),new cljs.core.Symbol(null,"ISeqable","ISeqable",1349682102,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-seq","-seq",1019896831,null)),(function (){var x__9655__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__16527__auto__","this__16527__auto__",-1279753020,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null)),(function (){var x__9655__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (p1__16526_SHARP_){
return cljs.core._conj.call(null,(function (){var x__9655__auto__ = cljs.core.keyword.call(null,p1__16526_SHARP_);
return cljs.core._conj.call(null,(function (){var x__9655__auto____$1 = p1__16526_SHARP_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto____$1);
})(),x__9655__auto__);
})(),new cljs.core.Symbol("cljs.core$macros","vector","cljs.core$macros/vector",912237829,null));
});})(gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,base_fields)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})()))),new cljs.core.Symbol(null,"IIterable","IIterable",577191430,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-iterator","-iterator",310937281,null)),(function (){var x__9655__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9655__auto__ = gs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"RecordIter.","RecordIter.",-265283060,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),(function (){var x__9655__auto__ = gs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.count.call(null,base_fields);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.keyword,base_fields)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-iterator","cljs.core/-iterator",1833427494,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","nil-iter","cljs.core/nil-iter",-1712403690,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})()))),new cljs.core.Symbol(null,"IPrintWithWriter","IPrintWithWriter",-1205316154,null),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-pr-writer","-pr-writer",-445354136,null)),(function (){var x__9655__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__16529__auto__","this__16529__auto__",-1247808900,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__16530__auto__","writer__16530__auto__",551461363,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opts__16531__auto__","opts__16531__auto__",600156286,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9655__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"pr-pair__16532__auto__","pr-pair__16532__auto__",-340825038,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9655__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"keyval__16533__auto__","keyval__16533__auto__",1979556956,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","pr-sequential-writer","cljs.core/pr-sequential-writer",-1101677821,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__16530__auto__","writer__16530__auto__",551461363,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","pr-writer","cljs.core/pr-writer",133956070,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,""),cljs.core._conj.call(null,cljs.core.List.EMPTY," "),cljs.core._conj.call(null,cljs.core.List.EMPTY,""),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opts__16531__auto__","opts__16531__auto__",600156286,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"keyval__16533__auto__","keyval__16533__auto__",1979556956,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","pr-sequential-writer","cljs.core/pr-sequential-writer",-1101677821,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__16530__auto__","writer__16530__auto__",551461363,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"pr-pair__16532__auto__","pr-pair__16532__auto__",-340825038,null)),(function (){var x__9655__auto__ = pr_open;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,", "),cljs.core._conj.call(null,cljs.core.List.EMPTY,"}"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"opts__16531__auto__","opts__16531__auto__",600156286,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null)),(function (){var x__9655__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,((function (gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2){
return (function (p1__16528_SHARP_){
return cljs.core._conj.call(null,(function (){var x__9655__auto__ = cljs.core.keyword.call(null,p1__16528_SHARP_);
return cljs.core._conj.call(null,(function (){var x__9655__auto____$1 = p1__16528_SHARP_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto____$1);
})(),x__9655__auto__);
})(),new cljs.core.Symbol("cljs.core$macros","vector","cljs.core$macros/vector",912237829,null));
});})(gs,ksym,hinted_fields,fields__$1,base_fields,pr_open,fields__$2))
,base_fields)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"__extmap","__extmap",-1435580931,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())))], null));
var vec__16537 = cljs.core$macros.prepare_protocol_masks.call(null,env,impls__$1);
var fpps = cljs.core.nth.call(null,vec__16537,(0),null);
var pmasks = cljs.core.nth.call(null,vec__16537,(1),null);
var protocols = cljs.core$macros.collect_protocols.call(null,impls__$1,env);
var tagname__$1 = cljs.core.vary_meta.call(null,tagname,cljs.core.assoc,new cljs.core.Keyword(null,"protocols","protocols",-5615896),protocols,new cljs.core.Keyword(null,"skip-protocol-flag","skip-protocol-flag",-1426798630),fpps);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"defrecord*","defrecord*",-1936366207,null)),(function (){var x__9655__auto__ = tagname__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = hinted_fields;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = pmasks;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","extend-type","cljs.core$macros/extend-type",1713295201,null)),(function (){var x__9655__auto__ = tagname__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),cljs.core$macros.dt__GT_et.call(null,tagname__$1,impls__$1,fields__$2,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
});
cljs.core$macros.build_map_factory = (function cljs$core$macros$build_map_factory(rsym,rname,fields){
var fn_name = cljs.core.with_meta.call(null,cljs.core.symbol.call(null,[cljs.core.str(new cljs.core.Symbol(null,"map->","map->",-999714600,null)),cljs.core.str(rsym)].join('')),cljs.core.assoc.call(null,cljs.core.meta.call(null,rsym),new cljs.core.Keyword(null,"factory","factory",63933746),new cljs.core.Keyword(null,"map","map",1371690461)));
var ms = cljs.core.gensym.call(null);
var ks = cljs.core.map.call(null,cljs.core.keyword,fields);
var getters = cljs.core.map.call(null,((function (fn_name,ms,ks){
return (function (k){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9655__auto__ = k;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = ms;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
});})(fn_name,ms,ks))
,ks);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null)),(function (){var x__9655__auto__ = fn_name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9655__auto__ = ms;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__9655__auto__ = rname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),getters,cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","dissoc","cljs.core/dissoc",-432349815,null)),(function (){var x__9655__auto__ = ms;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),ks)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
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
var args__9933__auto__ = [];
var len__9926__auto___16547 = arguments.length;
var i__9927__auto___16548 = (0);
while(true){
if((i__9927__auto___16548 < len__9926__auto___16547)){
args__9933__auto__.push((arguments[i__9927__auto___16548]));

var G__16549 = (i__9927__auto___16548 + (1));
i__9927__auto___16548 = G__16549;
continue;
} else {
}
break;
}

var argseq__9934__auto__ = ((((4) < args__9933__auto__.length))?(new cljs.core.IndexedSeq(args__9933__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.defrecord.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__9934__auto__);
});

cljs.core$macros.defrecord.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,rsym,fields,impls){
cljs.core$macros.validate_fields.call(null,"defrecord",rsym,fields);

var rsym__$1 = cljs.core.vary_meta.call(null,rsym,cljs.core.assoc,new cljs.core.Keyword(null,"internal-ctor","internal-ctor",937392560),true);
var r = cljs.core.vary_meta.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,_AMPERSAND_env,new cljs.core.Keyword(null,"locals","locals",535295783)),rsym__$1)),cljs.core.assoc,new cljs.core.Keyword(null,"internal-ctor","internal-ctor",937392560),true);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9655__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core$macros.emit_defrecord.call(null,_AMPERSAND_env,rsym__$1,r,fields,impls);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-getBasis",".-getBasis",-1306451468,null)),(function (){var x__9655__auto__ = r;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9655__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__9655__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,fields))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$type",".-cljs$lang$type",-1029307724,null)),(function (){var x__9655__auto__ = r;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$ctorPrSeq",".-cljs$lang$ctorPrSeq",41132414,null)),(function (){var x__9655__auto__ = r;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9655__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__16540__auto__","this__16540__auto__",1475113416,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","list","cljs.core/list",-1331406371,null)),(function (){var x__9655__auto__ = [cljs.core.str(r)].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-cljs$lang$ctorPrWriter",".-cljs$lang$ctorPrWriter",255834464,null)),(function (){var x__9655__auto__ = r;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9655__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__16540__auto__","this__16540__auto__",1475113416,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__16541__auto__","writer__16541__auto__",737712027,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-write","cljs.core/-write",527220517,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"writer__16541__auto__","writer__16541__auto__",737712027,null)),(function (){var x__9655__auto__ = [cljs.core.str(r)].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core$macros.build_positional_factory.call(null,rsym__$1,r,fields);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core$macros.build_map_factory.call(null,rsym__$1,r,fields);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = r;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
});

cljs.core$macros.defrecord.cljs$lang$maxFixedArity = (4);

cljs.core$macros.defrecord.cljs$lang$applyTo = (function (seq16542){
var G__16543 = cljs.core.first.call(null,seq16542);
var seq16542__$1 = cljs.core.next.call(null,seq16542);
var G__16544 = cljs.core.first.call(null,seq16542__$1);
var seq16542__$2 = cljs.core.next.call(null,seq16542__$1);
var G__16545 = cljs.core.first.call(null,seq16542__$2);
var seq16542__$3 = cljs.core.next.call(null,seq16542__$2);
var G__16546 = cljs.core.first.call(null,seq16542__$3);
var seq16542__$4 = cljs.core.next.call(null,seq16542__$3);
return cljs.core$macros.defrecord.cljs$core$IFn$_invoke$arity$variadic(G__16543,G__16544,G__16545,G__16546,seq16542__$4);
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
var args__9933__auto__ = [];
var len__9926__auto___16577 = arguments.length;
var i__9927__auto___16578 = (0);
while(true){
if((i__9927__auto___16578 < len__9926__auto___16577)){
args__9933__auto__.push((arguments[i__9927__auto___16578]));

var G__16579 = (i__9927__auto___16578 + (1));
i__9927__auto___16578 = G__16579;
continue;
} else {
}
break;
}

var argseq__9934__auto__ = ((((3) < args__9933__auto__.length))?(new cljs.core.IndexedSeq(args__9933__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.defprotocol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9934__auto__);
});

cljs.core$macros.defprotocol.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,psym,doc_PLUS_methods){
var p = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,_AMPERSAND_env,new cljs.core.Keyword(null,"locals","locals",535295783)),psym));
var vec__16556 = ((typeof cljs.core.first.call(null,doc_PLUS_methods) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,doc_PLUS_methods),cljs.core.next.call(null,doc_PLUS_methods)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,doc_PLUS_methods], null));
var doc = cljs.core.nth.call(null,vec__16556,(0),null);
var methods$ = cljs.core.nth.call(null,vec__16556,(1),null);
var psym__$1 = cljs.core.vary_meta.call(null,psym,cljs.core.assoc,new cljs.core.Keyword(null,"doc","doc",1913296891),doc,new cljs.core.Keyword(null,"protocol-symbol","protocol-symbol",1279552198),true);
var ns_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
var fqn = ((function (p,vec__16556,doc,methods$,psym__$1,ns_name){
return (function (n){
return cljs.core.symbol.call(null,[cljs.core.str(ns_name),cljs.core.str("."),cljs.core.str(n)].join(''));
});})(p,vec__16556,doc,methods$,psym__$1,ns_name))
;
var prefix = cljs.core$macros.protocol_prefix.call(null,p);
var _ = (function (){var seq__16559 = cljs.core.seq.call(null,methods$);
var chunk__16560 = null;
var count__16561 = (0);
var i__16562 = (0);
while(true){
if((i__16562 < count__16561)){
var vec__16563 = cljs.core._nth.call(null,chunk__16560,i__16562);
var seq__16564 = cljs.core.seq.call(null,vec__16563);
var first__16565 = cljs.core.first.call(null,seq__16564);
var seq__16564__$1 = cljs.core.next.call(null,seq__16564);
var mname = first__16565;
var arities = seq__16564__$1;
if(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(0),null], null), null),cljs.core.map.call(null,cljs.core.count,cljs.core.filter.call(null,cljs.core.vector_QMARK_,arities))))){
throw (new Error([cljs.core.str("Invalid protocol, "),cljs.core.str(psym__$1),cljs.core.str(" defines method "),cljs.core.str(mname),cljs.core.str(" with arity 0")].join('')));
} else {
}

var G__16580 = seq__16559;
var G__16581 = chunk__16560;
var G__16582 = count__16561;
var G__16583 = (i__16562 + (1));
seq__16559 = G__16580;
chunk__16560 = G__16581;
count__16561 = G__16582;
i__16562 = G__16583;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__16559);
if(temp__4657__auto__){
var seq__16559__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16559__$1)){
var c__9632__auto__ = cljs.core.chunk_first.call(null,seq__16559__$1);
var G__16584 = cljs.core.chunk_rest.call(null,seq__16559__$1);
var G__16585 = c__9632__auto__;
var G__16586 = cljs.core.count.call(null,c__9632__auto__);
var G__16587 = (0);
seq__16559 = G__16584;
chunk__16560 = G__16585;
count__16561 = G__16586;
i__16562 = G__16587;
continue;
} else {
var vec__16566 = cljs.core.first.call(null,seq__16559__$1);
var seq__16567 = cljs.core.seq.call(null,vec__16566);
var first__16568 = cljs.core.first.call(null,seq__16567);
var seq__16567__$1 = cljs.core.next.call(null,seq__16567);
var mname = first__16568;
var arities = seq__16567__$1;
if(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [(0),null], null), null),cljs.core.map.call(null,cljs.core.count,cljs.core.filter.call(null,cljs.core.vector_QMARK_,arities))))){
throw (new Error([cljs.core.str("Invalid protocol, "),cljs.core.str(psym__$1),cljs.core.str(" defines method "),cljs.core.str(mname),cljs.core.str(" with arity 0")].join('')));
} else {
}

var G__16588 = cljs.core.next.call(null,seq__16559__$1);
var G__16589 = null;
var G__16590 = (0);
var G__16591 = (0);
seq__16559 = G__16588;
chunk__16560 = G__16589;
count__16561 = G__16590;
i__16562 = G__16591;
continue;
}
} else {
return null;
}
}
break;
}
})();
var expand_sig = ((function (p,vec__16556,doc,methods$,psym__$1,ns_name,fqn,prefix,_){
return (function (fname,slot,sig){
var sig__$1 = ((!(cljs.core.every_QMARK_.call(null,cljs.core.symbol_QMARK_,sig)))?cljs.core.mapv.call(null,((function (p,vec__16556,doc,methods$,psym__$1,ns_name,fqn,prefix,_){
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
});})(p,vec__16556,doc,methods$,psym__$1,ns_name,fqn,prefix,_))
,sig):sig);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9655__auto__ = sig__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","and","cljs.core$macros/and",48320334,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__9655__auto__ = cljs.core.first.call(null,sig__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9655__auto__ = cljs.core.first.call(null,sig__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.symbol.call(null,[cljs.core.str("-"),cljs.core.str(slot)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9655__auto__ = cljs.core.first.call(null,sig__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = slot;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),sig__$1)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9655__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__16550__auto__","x__16550__auto__",1244618850,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__9655__auto__ = cljs.core.first.call(null,sig__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__9655__auto__ = cljs.core.first.call(null,sig__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__16551__auto__","m__16551__auto__",1645579183,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aget","cljs.core$macros/aget",1976136178,null)),(function (){var x__9655__auto__ = fqn.call(null,fname);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("goog","typeOf","goog/typeOf",539097255,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__16550__auto__","x__16550__auto__",1244618850,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__16551__auto__","m__16551__auto__",1645579183,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__16551__auto__","m__16551__auto__",1645579183,null)),sig__$1)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9655__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__16551__auto__","m__16551__auto__",1645579183,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aget","cljs.core$macros/aget",1976136178,null)),(function (){var x__9655__auto__ = fqn.call(null,fname);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,"_"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__16551__auto__","m__16551__auto__",1645579183,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"m__16551__auto__","m__16551__auto__",1645579183,null)),sig__$1)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","missing-protocol","cljs.core/missing-protocol",531539732,null)),(function (){var x__9655__auto__ = [cljs.core.str(psym__$1),cljs.core.str("."),cljs.core.str(fname)].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.first.call(null,sig__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
});})(p,vec__16556,doc,methods$,psym__$1,ns_name,fqn,prefix,_))
;
var psym__$2 = cljs.core.vary_meta.call(null,cljs.core.vary_meta.call(null,psym__$1,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516)], null),cljs.core.conj,"@interface"),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"protocol-info","protocol-info",1471745843),new cljs.core.Keyword(null,"methods","methods",453930866)], null),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (p,vec__16556,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig){
return (function (p__16569){
var vec__16570 = p__16569;
var seq__16571 = cljs.core.seq.call(null,vec__16570);
var first__16572 = cljs.core.first.call(null,seq__16571);
var seq__16571__$1 = cljs.core.next.call(null,seq__16571);
var fname = first__16572;
var sigs = seq__16571__$1;
var doc__$1 = (function (){var doc__$1 = cljs.core.last.call(null,sigs);
if(typeof doc__$1 === 'string'){
return doc__$1;
} else {
return null;
}
})();
var sigs__$1 = cljs.core.take_while.call(null,cljs.core.vector_QMARK_,sigs);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vary_meta.call(null,fname,cljs.core.assoc,new cljs.core.Keyword(null,"doc","doc",1913296891),doc__$1),cljs.core.vec.call(null,sigs__$1)], null);
});})(p,vec__16556,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig))
,methods$)));
var method = ((function (p,vec__16556,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2){
return (function (p__16573){
var vec__16574 = p__16573;
var seq__16575 = cljs.core.seq.call(null,vec__16574);
var first__16576 = cljs.core.first.call(null,seq__16575);
var seq__16575__$1 = cljs.core.next.call(null,seq__16575);
var fname = first__16576;
var sigs = seq__16575__$1;
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null)),(function (){var x__9655__auto__ = fname__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),cljs.core.map.call(null,((function (doc__$1,sigs__$1,amp,slot,fname__$1,vec__16574,seq__16575,first__16576,seq__16575__$1,fname,sigs,p,vec__16556,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2){
return (function (sig){
return expand_sig.call(null,fname__$1,cljs.core.symbol.call(null,[cljs.core.str(slot),cljs.core.str("$arity$"),cljs.core.str(cljs.core.count.call(null,sig))].join('')),sig);
});})(doc__$1,sigs__$1,amp,slot,fname__$1,vec__16574,seq__16575,first__16576,seq__16575__$1,fname,sigs,p,vec__16556,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2))
,sigs__$1))));
});})(p,vec__16556,doc,methods$,psym__$1,ns_name,fqn,prefix,_,expand_sig,psym__$2))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"*unchecked-if*","*unchecked-if*",1542408350,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"def","def",597100991,null)),(function (){var x__9655__auto__ = psym__$2;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"js*","js*",-1134233646,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"function(){}"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),cljs.core.map.call(null,method,methods$),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"*unchecked-if*","*unchecked-if*",1542408350,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
});

cljs.core$macros.defprotocol.cljs$lang$maxFixedArity = (3);

cljs.core$macros.defprotocol.cljs$lang$applyTo = (function (seq16552){
var G__16553 = cljs.core.first.call(null,seq16552);
var seq16552__$1 = cljs.core.next.call(null,seq16552);
var G__16554 = cljs.core.first.call(null,seq16552__$1);
var seq16552__$2 = cljs.core.next.call(null,seq16552__$1);
var G__16555 = cljs.core.first.call(null,seq16552__$2);
var seq16552__$3 = cljs.core.next.call(null,seq16552__$2);
return cljs.core$macros.defprotocol.cljs$core$IFn$_invoke$arity$variadic(G__16553,G__16554,G__16555,seq16552__$3);
});


cljs.core$macros.defprotocol.cljs$lang$macro = true;
/**
 * EXPERIMENTAL
 */
cljs.core$macros.implements_QMARK_ = (function cljs$core$macros$implements_QMARK_(_AMPERSAND_form,_AMPERSAND_env,psym,x){
var p = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.resolve_var.call(null,cljs.core.dissoc.call(null,_AMPERSAND_env,new cljs.core.Keyword(null,"locals","locals",535295783)),psym));
var prefix = cljs.core$macros.protocol_prefix.call(null,p);
var xsym = cljs.core$macros.bool_expr.call(null,cljs.core.gensym.call(null));
var vec__16595 = cljs.core$macros.fast_path_protocols.call(null,p);
var part = cljs.core.nth.call(null,vec__16595,(0),null);
var bit = cljs.core.nth.call(null,vec__16595,(1),null);
var msym = cljs.core.symbol.call(null,[cljs.core.str("-cljs$lang$protocol_mask$partition"),cljs.core.str(part),cljs.core.str("$")].join(''));
if(!((x instanceof cljs.core.Symbol))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9655__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9655__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9655__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","or","cljs.core$macros/or",1346243648,null)),(function (){var x__9655__auto__ = (cljs.core.truth_(bit)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9655__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = msym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = bit;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})()))):false);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","identical?","cljs.core$macros/identical?",815580547,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PROTOCOL_SENTINEL","cljs.core/PROTOCOL_SENTINEL",210209696,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9655__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.symbol.call(null,[cljs.core.str("-"),cljs.core.str(prefix)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__9655__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","or","cljs.core$macros/or",1346243648,null)),(function (){var x__9655__auto__ = (cljs.core.truth_(bit)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9655__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = msym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = bit;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})()))):false);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","identical?","cljs.core$macros/identical?",815580547,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PROTOCOL_SENTINEL","cljs.core/PROTOCOL_SENTINEL",210209696,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9655__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.symbol.call(null,[cljs.core.str("-"),cljs.core.str(prefix)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
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
var vec__16601 = cljs.core$macros.fast_path_protocols.call(null,p);
var part = cljs.core.nth.call(null,vec__16601,(0),null);
var bit = cljs.core.nth.call(null,vec__16601,(1),null);
var msym = cljs.core.symbol.call(null,[cljs.core.str("-cljs$lang$protocol_mask$partition"),cljs.core.str(part),cljs.core.str("$")].join(''));
if(!((x instanceof cljs.core.Symbol))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9655__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9655__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__9655__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","or","cljs.core$macros/or",1346243648,null)),(function (){var x__9655__auto__ = (cljs.core.truth_(bit)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9655__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = msym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = bit;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})()))):false);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","identical?","cljs.core$macros/identical?",815580547,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PROTOCOL_SENTINEL","cljs.core/PROTOCOL_SENTINEL",210209696,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9655__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.symbol.call(null,[cljs.core.str("-"),cljs.core.str(prefix)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","coercive-not","cljs.core$macros/coercive-not",115999987,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9655__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = msym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","native-satisfies?","cljs.core/native-satisfies?",1482305036,null)),(function (){var x__9655__auto__ = psym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","native-satisfies?","cljs.core/native-satisfies?",1482305036,null)),(function (){var x__9655__auto__ = psym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = xsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-not","cljs.core$macros/if-not",-1825285737,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","nil?","cljs.core$macros/nil?",83624258,null)),(function (){var x__9655__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","or","cljs.core$macros/or",1346243648,null)),(function (){var x__9655__auto__ = (cljs.core.truth_(bit)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unsafe-bit-and","cljs.core$macros/unsafe-bit-and",1803731600,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9655__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = msym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = bit;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})()))):false);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","identical?","cljs.core$macros/identical?",815580547,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PROTOCOL_SENTINEL","cljs.core/PROTOCOL_SENTINEL",210209696,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9655__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.symbol.call(null,[cljs.core.str("-"),cljs.core.str(prefix)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","coercive-not","cljs.core$macros/coercive-not",115999987,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9655__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = msym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","native-satisfies?","cljs.core/native-satisfies?",1482305036,null)),(function (){var x__9655__auto__ = psym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","native-satisfies?","cljs.core/native-satisfies?",1482305036,null)),(function (){var x__9655__auto__ = psym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
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
var args__9933__auto__ = [];
var len__9926__auto___16607 = arguments.length;
var i__9927__auto___16608 = (0);
while(true){
if((i__9927__auto___16608 < len__9926__auto___16607)){
args__9933__auto__.push((arguments[i__9927__auto___16608]));

var G__16609 = (i__9927__auto___16608 + (1));
i__9927__auto___16608 = G__16609;
continue;
} else {
}
break;
}

var argseq__9934__auto__ = ((((2) < args__9933__auto__.length))?(new cljs.core.IndexedSeq(args__9933__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.lazy_seq.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9934__auto__);
});

cljs.core$macros.lazy_seq.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","LazySeq","cljs.core/LazySeq",1986389673,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9655__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
});

cljs.core$macros.lazy_seq.cljs$lang$maxFixedArity = (2);

cljs.core$macros.lazy_seq.cljs$lang$applyTo = (function (seq16604){
var G__16605 = cljs.core.first.call(null,seq16604);
var seq16604__$1 = cljs.core.next.call(null,seq16604);
var G__16606 = cljs.core.first.call(null,seq16604__$1);
var seq16604__$2 = cljs.core.next.call(null,seq16604__$1);
return cljs.core$macros.lazy_seq.cljs$core$IFn$_invoke$arity$variadic(G__16605,G__16606,seq16604__$2);
});


cljs.core$macros.lazy_seq.cljs$lang$macro = true;
/**
 * Takes a body of expressions and yields a Delay object that will
 *   invoke the body only the first time it is forced (with force or deref/@), and
 *   will cache the result and return it on all subsequent force
 *   calls.
 */
cljs.core$macros.delay = (function cljs$core$macros$delay(var_args){
var args__9933__auto__ = [];
var len__9926__auto___16613 = arguments.length;
var i__9927__auto___16614 = (0);
while(true){
if((i__9927__auto___16614 < len__9926__auto___16613)){
args__9933__auto__.push((arguments[i__9927__auto___16614]));

var G__16615 = (i__9927__auto___16614 + (1));
i__9927__auto___16614 = G__16615;
continue;
} else {
}
break;
}

var argseq__9934__auto__ = ((((2) < args__9933__auto__.length))?(new cljs.core.IndexedSeq(args__9933__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.delay.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9934__auto__);
});

cljs.core$macros.delay.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","Delay","cljs.core/Delay",-21574999,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9655__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
});

cljs.core$macros.delay.cljs$lang$maxFixedArity = (2);

cljs.core$macros.delay.cljs$lang$applyTo = (function (seq16610){
var G__16611 = cljs.core.first.call(null,seq16610);
var seq16610__$1 = cljs.core.next.call(null,seq16610);
var G__16612 = cljs.core.first.call(null,seq16610__$1);
var seq16610__$2 = cljs.core.next.call(null,seq16610__$1);
return cljs.core$macros.delay.cljs$core$IFn$_invoke$arity$variadic(G__16611,G__16612,seq16610__$2);
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
var args__9933__auto__ = [];
var len__9926__auto___16624 = arguments.length;
var i__9927__auto___16625 = (0);
while(true){
if((i__9927__auto___16625 < len__9926__auto___16624)){
args__9933__auto__.push((arguments[i__9927__auto___16625]));

var G__16626 = (i__9927__auto___16625 + (1));
i__9927__auto___16625 = G__16626;
continue;
} else {
}
break;
}

var argseq__9934__auto__ = ((((3) < args__9933__auto__.length))?(new cljs.core.IndexedSeq(args__9933__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.with_redefs.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9934__auto__);
});

cljs.core$macros.with_redefs.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
var names = cljs.core.take_nth.call(null,(2),bindings);
var vals = cljs.core.take_nth.call(null,(2),cljs.core.drop.call(null,(1),bindings));
var tempnames = cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.gensym,cljs.core.name),names);
var binds = cljs.core.map.call(null,cljs.core.vector,names,vals);
var resets = cljs.core.reverse.call(null,cljs.core.map.call(null,cljs.core.vector,names,tempnames));
var bind_value = ((function (names,vals,tempnames,binds,resets){
return (function (p__16620){
var vec__16621 = p__16620;
var k = cljs.core.nth.call(null,vec__16621,(0),null);
var v = cljs.core.nth.call(null,vec__16621,(1),null);
return cljs.core._conj.call(null,(function (){var x__9655__auto__ = k;
return cljs.core._conj.call(null,(function (){var x__9655__auto____$1 = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto____$1);
})(),x__9655__auto__);
})(),new cljs.core.Symbol(null,"set!","set!",250714521,null));
});})(names,vals,tempnames,binds,resets))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9655__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.interleave.call(null,tempnames,names)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),cljs.core.map.call(null,bind_value,binds),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"try","try",-1273693247,null)),body,(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"finally","finally",-1065347064,null)),cljs.core.map.call(null,bind_value,resets))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
});

cljs.core$macros.with_redefs.cljs$lang$maxFixedArity = (3);

cljs.core$macros.with_redefs.cljs$lang$applyTo = (function (seq16616){
var G__16617 = cljs.core.first.call(null,seq16616);
var seq16616__$1 = cljs.core.next.call(null,seq16616);
var G__16618 = cljs.core.first.call(null,seq16616__$1);
var seq16616__$2 = cljs.core.next.call(null,seq16616__$1);
var G__16619 = cljs.core.first.call(null,seq16616__$2);
var seq16616__$3 = cljs.core.next.call(null,seq16616__$2);
return cljs.core$macros.with_redefs.cljs$core$IFn$_invoke$arity$variadic(G__16617,G__16618,G__16619,seq16616__$3);
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
var args__9933__auto__ = [];
var len__9926__auto___16631 = arguments.length;
var i__9927__auto___16632 = (0);
while(true){
if((i__9927__auto___16632 < len__9926__auto___16631)){
args__9933__auto__.push((arguments[i__9927__auto___16632]));

var G__16633 = (i__9927__auto___16632 + (1));
i__9927__auto___16632 = G__16633;
continue;
} else {
}
break;
}

var argseq__9934__auto__ = ((((3) < args__9933__auto__.length))?(new cljs.core.IndexedSeq(args__9933__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.binding.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9934__auto__);
});

cljs.core$macros.binding.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
var names = cljs.core.take_nth.call(null,(2),bindings);
cljs.analyzer.confirm_bindings.call(null,_AMPERSAND_env,names);

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","with-redefs","cljs.core$macros/with-redefs",1489217801,null)),(function (){var x__9655__auto__ = bindings;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),body)));
});

cljs.core$macros.binding.cljs$lang$maxFixedArity = (3);

cljs.core$macros.binding.cljs$lang$applyTo = (function (seq16627){
var G__16628 = cljs.core.first.call(null,seq16627);
var seq16627__$1 = cljs.core.next.call(null,seq16627);
var G__16629 = cljs.core.first.call(null,seq16627__$1);
var seq16627__$2 = cljs.core.next.call(null,seq16627__$1);
var G__16630 = cljs.core.first.call(null,seq16627__$2);
var seq16627__$3 = cljs.core.next.call(null,seq16627__$2);
return cljs.core$macros.binding.cljs$core$IFn$_invoke$arity$variadic(G__16628,G__16629,G__16630,seq16627__$3);
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
var args__9933__auto__ = [];
var len__9926__auto___16652 = arguments.length;
var i__9927__auto___16653 = (0);
while(true){
if((i__9927__auto___16653 < len__9926__auto___16652)){
args__9933__auto__.push((arguments[i__9927__auto___16653]));

var G__16654 = (i__9927__auto___16653 + (1));
i__9927__auto___16653 = G__16654;
continue;
} else {
}
break;
}

var argseq__9934__auto__ = ((((4) < args__9933__auto__.length))?(new cljs.core.IndexedSeq(args__9933__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.condp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__9934__auto__);
});

cljs.core$macros.condp.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,pred,expr,clauses){
var gpred = cljs.core.gensym.call(null,"pred__");
var gexpr = cljs.core.gensym.call(null,"expr__");
var emit = ((function (gpred,gexpr){
return (function cljs$core$macros$emit(pred__$1,expr__$1,args){
var vec__16646 = cljs.core.split_at.call(null,((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,">>",">>",-277509267),cljs.core.second.call(null,args)))?(3):(2)),args);
var vec__16649 = cljs.core.nth.call(null,vec__16646,(0),null);
var a = cljs.core.nth.call(null,vec__16649,(0),null);
var b = cljs.core.nth.call(null,vec__16649,(1),null);
var c = cljs.core.nth.call(null,vec__16649,(2),null);
var clause = vec__16649;
var more = cljs.core.nth.call(null,vec__16646,(1),null);
var n = cljs.core.count.call(null,clause);
if(cljs.core._EQ_.call(null,(0),n)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"No matching clause: "),(function (){var x__9655__auto__ = expr__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
} else {
if(cljs.core._EQ_.call(null,(1),n)){
return a;
} else {
if(cljs.core._EQ_.call(null,(2),n)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9655__auto__ = pred__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = a;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = expr__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = b;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs$core$macros$emit.call(null,pred__$1,expr__$1,more);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","if-let","cljs.core$macros/if-let",1291543946,null)),(function (){var x__9655__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"p__16634__auto__","p__16634__auto__",1625675714,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9655__auto__ = pred__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = a;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = expr__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9655__auto__ = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"p__16634__auto__","p__16634__auto__",1625675714,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs$core$macros$emit.call(null,pred__$1,expr__$1,more);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));

}
}
}
});})(gpred,gexpr))
;
var gres = cljs.core.gensym.call(null,"res__");
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9655__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9655__auto__ = gpred;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = pred;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = gexpr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = emit.call(null,gpred,gexpr,clauses);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
});

cljs.core$macros.condp.cljs$lang$maxFixedArity = (4);

cljs.core$macros.condp.cljs$lang$applyTo = (function (seq16635){
var G__16636 = cljs.core.first.call(null,seq16635);
var seq16635__$1 = cljs.core.next.call(null,seq16635);
var G__16637 = cljs.core.first.call(null,seq16635__$1);
var seq16635__$2 = cljs.core.next.call(null,seq16635__$1);
var G__16638 = cljs.core.first.call(null,seq16635__$2);
var seq16635__$3 = cljs.core.next.call(null,seq16635__$2);
var G__16639 = cljs.core.first.call(null,seq16635__$3);
var seq16635__$4 = cljs.core.next.call(null,seq16635__$3);
return cljs.core$macros.condp.cljs$core$IFn$_invoke$arity$variadic(G__16636,G__16637,G__16638,G__16639,seq16635__$4);
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
var m = (function (){var and__8806__auto__ = cljs.core.list_QMARK_.call(null,x);
if(and__8806__auto__){
return cljs.analyzer.resolve_var.call(null,env,cljs.core.last.call(null,x));
} else {
return and__8806__auto__;
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
var args__9933__auto__ = [];
var len__9926__auto___16675 = arguments.length;
var i__9927__auto___16676 = (0);
while(true){
if((i__9927__auto___16676 < len__9926__auto___16675)){
args__9933__auto__.push((arguments[i__9927__auto___16676]));

var G__16677 = (i__9927__auto___16676 + (1));
i__9927__auto___16676 = G__16677;
continue;
} else {
}
break;
}

var argseq__9934__auto__ = ((((3) < args__9933__auto__.length))?(new cljs.core.IndexedSeq(args__9933__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.case$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9934__auto__);
});

cljs.core$macros.case$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,e,clauses){
var default$ = ((cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,clauses)))?cljs.core.last.call(null,clauses):cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"No matching clause: "),(function (){var x__9655__auto__ = e;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})()))));
var env = _AMPERSAND_env;
var pairs = cljs.core.reduce.call(null,((function (default$,env){
return (function (m,p__16663){
var vec__16664 = p__16663;
var test = cljs.core.nth.call(null,vec__16664,(0),null);
var expr = cljs.core.nth.call(null,vec__16664,(1),null);
if(cljs.core.seq_QMARK_.call(null,test)){
return cljs.core.reduce.call(null,((function (vec__16664,test,expr,default$,env){
return (function (m__$1,test__$1){
var test__$2 = (((test__$1 instanceof cljs.core.Symbol))?cljs.core._conj.call(null,(function (){var x__9655__auto__ = test__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),new cljs.core.Symbol(null,"quote","quote",1377916282,null)):test__$1);
return cljs.core$macros.assoc_test.call(null,m__$1,test__$2,expr,env);
});})(vec__16664,test,expr,default$,env))
,m,test);
} else {
if((test instanceof cljs.core.Symbol)){
return cljs.core$macros.assoc_test.call(null,m,cljs.core._conj.call(null,(function (){var x__9655__auto__ = test;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
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
return (function (p1__16655_SHARP_){
return cljs.core$macros.const_QMARK_.call(null,env,p1__16655_SHARP_);
});})(default$,env,pairs,esym,tests))
),tests)){
var no_default = ((cljs.core.odd_QMARK_.call(null,cljs.core.count.call(null,clauses)))?cljs.core.butlast.call(null,clauses):clauses);
var tests__$1 = cljs.core.mapv.call(null,((function (no_default,default$,env,pairs,esym,tests){
return (function (p1__16656_SHARP_){
if(cljs.core.seq_QMARK_.call(null,p1__16656_SHARP_)){
return cljs.core.vec.call(null,p1__16656_SHARP_);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16656_SHARP_], null);
}
});})(no_default,default$,env,pairs,esym,tests))
,cljs.core.take_nth.call(null,(2),no_default));
var thens = cljs.core.vec.call(null,cljs.core.take_nth.call(null,(2),cljs.core.drop.call(null,(1),no_default)));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9655__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9655__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = e;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"case*","case*",-1938255072,null)),(function (){var x__9655__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = tests__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = thens;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = default$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
} else {
if(cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,tests)){
var tests__$1 = cljs.core.mapv.call(null,((function (default$,env,pairs,esym,tests){
return (function (p1__16658_SHARP_){
if(cljs.core.seq_QMARK_.call(null,p1__16658_SHARP_)){
return cljs.core.vec.call(null,p1__16658_SHARP_);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16658_SHARP_], null);
}
});})(default$,env,pairs,esym,tests))
,cljs.core.vec.call(null,cljs.core.map.call(null,((function (default$,env,pairs,esym,tests){
return (function (p1__16657_SHARP_){
return [cljs.core.str(p1__16657_SHARP_)].join('').substring((1));
});})(default$,env,pairs,esym,tests))
,tests)));
var thens = cljs.core.vec.call(null,cljs.core.vals.call(null,pairs));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9655__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9655__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","keyword?","cljs.core$macros/keyword?",1362730141,null)),(function (){var x__9655__auto__ = e;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-fqn",".-fqn",1246113027,null)),(function (){var x__9655__auto__ = e;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"case*","case*",-1938255072,null)),(function (){var x__9655__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = tests__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = thens;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = default$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9655__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9655__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = e;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","cond","cljs.core$macros/cond",1626318471,null)),cljs.core.mapcat.call(null,((function (default$,env,pairs,esym,tests){
return (function (p__16671){
var vec__16672 = p__16671;
var m = cljs.core.nth.call(null,vec__16672,(0),null);
var c = cljs.core.nth.call(null,vec__16672,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null)),(function (){var x__9655__auto__ = m;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = esym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = c;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
});})(default$,env,pairs,esym,tests))
,pairs),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"else","else",-1508377146)),(function (){var x__9655__auto__ = default$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));

}
}
});

cljs.core$macros.case$.cljs$lang$maxFixedArity = (3);

cljs.core$macros.case$.cljs$lang$applyTo = (function (seq16659){
var G__16660 = cljs.core.first.call(null,seq16659);
var seq16659__$1 = cljs.core.next.call(null,seq16659);
var G__16661 = cljs.core.first.call(null,seq16659__$1);
var seq16659__$2 = cljs.core.next.call(null,seq16659__$1);
var G__16662 = cljs.core.first.call(null,seq16659__$2);
var seq16659__$3 = cljs.core.next.call(null,seq16659__$2);
return cljs.core$macros.case$.cljs$core$IFn$_invoke$arity$variadic(G__16660,G__16661,G__16662,seq16659__$3);
});


cljs.core$macros.case$.cljs$lang$macro = true;
/**
 * Evaluates expr and throws an exception if it does not evaluate to
 *   logical true.
 */
cljs.core$macros.assert = (function cljs$core$macros$assert(var_args){
var args16678 = [];
var len__9926__auto___16681 = arguments.length;
var i__9927__auto___16682 = (0);
while(true){
if((i__9927__auto___16682 < len__9926__auto___16681)){
args16678.push((arguments[i__9927__auto___16682]));

var G__16683 = (i__9927__auto___16682 + (1));
i__9927__auto___16682 = G__16683;
continue;
} else {
}
break;
}

var G__16680 = args16678.length;
switch (G__16680) {
case 3:
return cljs.core$macros.assert.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.assert.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str((args16678.length - (2)))].join('')));

}
});

cljs.core$macros.assert.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,x){
if(cljs.core.truth_(cljs.core._STAR_assert_STAR_)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-not","cljs.core$macros/when-not",-764302244,null)),(function (){var x__9655__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__9655__auto__ = [cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,x))].join('');
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
} else {
return null;
}
});

cljs.core$macros.assert.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,x,message){
if(cljs.core.truth_(cljs.core._STAR_assert_STAR_)){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-not","cljs.core$macros/when-not",-764302244,null)),(function (){var x__9655__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"Assert failed: "),(function (){var x__9655__auto__ = message;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,"\n"),(function (){var x__9655__auto__ = cljs.core.pr_str.call(null,x);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
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
return cljs.core.reduce.call(null,(function (groups,p__16771){
var vec__16772 = p__16771;
var k = cljs.core.nth.call(null,vec__16772,(0),null);
var v = cljs.core.nth.call(null,vec__16772,(1),null);
if((k instanceof cljs.core.Keyword)){
return cljs.core.conj.call(null,cljs.core.pop.call(null,groups),cljs.core.conj.call(null,cljs.core.peek.call(null,groups),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null)));
} else {
return cljs.core.conj.call(null,groups,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
}
}),cljs.core.PersistentVector.EMPTY,cljs.core.partition.call(null,(2),seq_exprs__$1));
});
var err = ((function (to_groups){
return (function() { 
var G__16852__delegate = function (msg){
throw cljs.core.ex_info.call(null,cljs.core.apply.call(null,cljs.core.str,msg),cljs.core.PersistentArrayMap.EMPTY);
};
var G__16852 = function (var_args){
var msg = null;
if (arguments.length > 0) {
var G__16853__i = 0, G__16853__a = new Array(arguments.length -  0);
while (G__16853__i < G__16853__a.length) {G__16853__a[G__16853__i] = arguments[G__16853__i + 0]; ++G__16853__i;}
  msg = new cljs.core.IndexedSeq(G__16853__a,0);
} 
return G__16852__delegate.call(this,msg);};
G__16852.cljs$lang$maxFixedArity = 0;
G__16852.cljs$lang$applyTo = (function (arglist__16854){
var msg = cljs.core.seq(arglist__16854);
return G__16852__delegate(msg);
});
G__16852.cljs$core$IFn$_invoke$arity$variadic = G__16852__delegate;
return G__16852;
})()
;})(to_groups))
;
var emit_bind = ((function (to_groups,err){
return (function cljs$core$macros$for_$_emit_bind(p__16775){
var vec__16814 = p__16775;
var seq__16815 = cljs.core.seq.call(null,vec__16814);
var first__16816 = cljs.core.first.call(null,seq__16815);
var seq__16815__$1 = cljs.core.next.call(null,seq__16815);
var vec__16817 = first__16816;
var seq__16818 = cljs.core.seq.call(null,vec__16817);
var first__16819 = cljs.core.first.call(null,seq__16818);
var seq__16818__$1 = cljs.core.next.call(null,seq__16818);
var bind = first__16819;
var first__16819__$1 = cljs.core.first.call(null,seq__16818__$1);
var seq__16818__$2 = cljs.core.next.call(null,seq__16818__$1);
var expr = first__16819__$1;
var mod_pairs = seq__16818__$2;
var vec__16820 = seq__16815__$1;
var vec__16823 = cljs.core.nth.call(null,vec__16820,(0),null);
var _ = cljs.core.nth.call(null,vec__16823,(0),null);
var next_expr = cljs.core.nth.call(null,vec__16823,(1),null);
var next_groups = vec__16820;
var giter = cljs.core.gensym.call(null,"iter__");
var gxs = cljs.core.gensym.call(null,"s__");
var do_mod = ((function (giter,gxs,vec__16814,seq__16815,first__16816,seq__16815__$1,vec__16817,seq__16818,first__16819,seq__16818__$1,bind,first__16819__$1,seq__16818__$2,expr,mod_pairs,vec__16820,vec__16823,_,next_expr,next_groups,to_groups,err){
return (function cljs$core$macros$for_$_emit_bind_$_do_mod(p__16826){
var vec__16833 = p__16826;
var seq__16834 = cljs.core.seq.call(null,vec__16833);
var first__16835 = cljs.core.first.call(null,seq__16834);
var seq__16834__$1 = cljs.core.next.call(null,seq__16834);
var vec__16836 = first__16835;
var k = cljs.core.nth.call(null,vec__16836,(0),null);
var v = cljs.core.nth.call(null,vec__16836,(1),null);
var pair = vec__16836;
var etc = seq__16834__$1;
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"let","let",-1282412701))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9655__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs$core$macros$for_$_emit_bind_$_do_mod.call(null,etc);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
} else {
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"while","while",963117786))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__9655__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs$core$macros$for_$_emit_bind_$_do_mod.call(null,etc);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
} else {
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"when","when",-576417306))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9655__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs$core$macros$for_$_emit_bind_$_do_mod.call(null,etc);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","rest","cljs.core/rest",-285075455,null)),(function (){var x__9655__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
} else {
if((k instanceof cljs.core.Keyword)){
return err.call(null,"Invalid 'for' keyword ",k);
} else {
if(next_groups){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9655__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"iterys__16685__auto__","iterys__16685__auto__",159158643,null)),(function (){var x__9655__auto__ = cljs$core$macros$for_$_emit_bind.call(null,next_groups);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"fs__16686__auto__","fs__16686__auto__",1756542319,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"iterys__16685__auto__","iterys__16685__auto__",159158643,null)),(function (){var x__9655__auto__ = next_expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"fs__16686__auto__","fs__16686__auto__",1756542319,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"fs__16686__auto__","fs__16686__auto__",1756542319,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9655__auto__ = giter;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","rest","cljs.core/rest",-285075455,null)),(function (){var x__9655__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","rest","cljs.core/rest",-285075455,null)),(function (){var x__9655__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","cons","cljs.core/cons",96507417,null)),(function (){var x__9655__auto__ = body_expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9655__auto__ = giter;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","rest","cljs.core/rest",-285075455,null)),(function (){var x__9655__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));

}
}
}
}
}
});})(giter,gxs,vec__16814,seq__16815,first__16816,seq__16815__$1,vec__16817,seq__16818,first__16819,seq__16818__$1,bind,first__16819__$1,seq__16818__$2,expr,mod_pairs,vec__16820,vec__16823,_,next_expr,next_groups,to_groups,err))
;
if(next_groups){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9655__auto__ = giter;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9655__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","lazy-seq","cljs.core$macros/lazy-seq",806482650,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__9655__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9655__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-first","cljs.core$macros/when-first",-840670160,null)),(function (){var x__9655__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9655__auto__ = bind;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = do_mod.call(null,mod_pairs);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
} else {
var gi = cljs.core.gensym.call(null,"i__");
var gb = cljs.core.gensym.call(null,"b__");
var do_cmod = ((function (gi,gb,giter,gxs,do_mod,vec__16814,seq__16815,first__16816,seq__16815__$1,vec__16817,seq__16818,first__16819,seq__16818__$1,bind,first__16819__$1,seq__16818__$2,expr,mod_pairs,vec__16820,vec__16823,_,next_expr,next_groups,to_groups,err){
return (function cljs$core$macros$for_$_emit_bind_$_do_cmod(p__16839){
var vec__16846 = p__16839;
var seq__16847 = cljs.core.seq.call(null,vec__16846);
var first__16848 = cljs.core.first.call(null,seq__16847);
var seq__16847__$1 = cljs.core.next.call(null,seq__16847);
var vec__16849 = first__16848;
var k = cljs.core.nth.call(null,vec__16849,(0),null);
var v = cljs.core.nth.call(null,vec__16849,(1),null);
var pair = vec__16849;
var etc = seq__16847__$1;
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"let","let",-1282412701))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9655__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs$core$macros$for_$_emit_bind_$_do_cmod.call(null,etc);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
} else {
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"while","while",963117786))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__9655__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs$core$macros$for_$_emit_bind_$_do_cmod.call(null,etc);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
} else {
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"when","when",-576417306))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9655__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs$core$macros$for_$_emit_bind_$_do_cmod.call(null,etc);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unchecked-inc","cljs.core$macros/unchecked-inc",-1615365330,null)),(function (){var x__9655__auto__ = gi;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
} else {
if((k instanceof cljs.core.Keyword)){
return err.call(null,"Invalid 'for' keyword ",k);
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-append","cljs.core/chunk-append",-243671470,null)),(function (){var x__9655__auto__ = gb;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = body_expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unchecked-inc","cljs.core$macros/unchecked-inc",-1615365330,null)),(function (){var x__9655__auto__ = gi;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));

}
}
}
}
});})(gi,gb,giter,gxs,do_mod,vec__16814,seq__16815,first__16816,seq__16815__$1,vec__16817,seq__16818,first__16819,seq__16818__$1,bind,first__16819__$1,seq__16818__$2,expr,mod_pairs,vec__16820,vec__16823,_,next_expr,next_groups,to_groups,err))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9655__auto__ = giter;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9655__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","lazy-seq","cljs.core$macros/lazy-seq",806482650,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__9655__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9655__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-let","cljs.core$macros/when-let",-2004472648,null)),(function (){var x__9655__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9655__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__9655__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunked-seq?","cljs.core/chunked-seq?",-712922369,null)),(function (){var x__9655__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9655__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__16687__auto__","c__16687__auto__",2121977940,null)),(function (){var x__9655__auto__ = cljs.core.with_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-first","cljs.core/chunk-first",-1157877305,null)),(function (){var x__9655__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})()))),cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"/Users/ru/clojure/fligts-pro/resources/public/js/out/cljs/core.cljc"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2326),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj.call(null,cljs.core.List.EMPTY,52),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2326),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj.call(null,cljs.core.List.EMPTY,82),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"tag","tag",-1290361223)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","not-native","cljs.core/not-native",-1716909265,null)))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"size__16688__auto__","size__16688__auto__",-1503217992,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__16687__auto__","c__16687__auto__",2121977940,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = gb;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-buffer","cljs.core/chunk-buffer",14093626,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"size__16688__auto__","size__16688__auto__",-1503217992,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","coercive-boolean","cljs.core$macros/coercive-boolean",-450758280,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__9655__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9655__auto__ = gi;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__9655__auto__ = gi;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"size__16688__auto__","size__16688__auto__",-1503217992,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9655__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9655__auto__ = bind;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-nth","cljs.core/-nth",504234802,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__16687__auto__","c__16687__auto__",2121977940,null)),(function (){var x__9655__auto__ = gi;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = do_cmod.call(null,mod_pairs);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-cons","cljs.core/chunk-cons",-250075688,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk","cljs.core/chunk",847936424,null)),(function (){var x__9655__auto__ = gb;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9655__auto__ = giter;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-rest","cljs.core/chunk-rest",-398161143,null)),(function (){var x__9655__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-cons","cljs.core/chunk-cons",-250075688,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk","cljs.core/chunk",847936424,null)),(function (){var x__9655__auto__ = gb;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9655__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9655__auto__ = bind;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null)),(function (){var x__9655__auto__ = gxs;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = do_mod.call(null,mod_pairs);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
}
});})(to_groups,err))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9655__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"iter__16689__auto__","iter__16689__auto__",-217171428,null)),(function (){var x__9655__auto__ = emit_bind.call(null,to_groups.call(null,seq_exprs));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"iter__16689__auto__","iter__16689__auto__",-217171428,null)),(function (){var x__9655__auto__ = cljs.core.second.call(null,seq_exprs);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
});

cljs.core$macros.for$.cljs$lang$macro = true;
/**
 * Repeatedly executes body (presumably for side-effects) with
 *   bindings and filtering as provided by "for".  Does not retain
 *   the head of the sequence. Returns nil.
 */
cljs.core$macros.doseq = (function cljs$core$macros$doseq(var_args){
var args__9933__auto__ = [];
var len__9926__auto___16860 = arguments.length;
var i__9927__auto___16861 = (0);
while(true){
if((i__9927__auto___16861 < len__9926__auto___16860)){
args__9933__auto__.push((arguments[i__9927__auto___16861]));

var G__16862 = (i__9927__auto___16861 + (1));
i__9927__auto___16861 = G__16862;
continue;
} else {
}
break;
}

var argseq__9934__auto__ = ((((3) < args__9933__auto__.length))?(new cljs.core.IndexedSeq(args__9933__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.doseq.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9934__auto__);
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
var G__16863__delegate = function (msg){
throw cljs.core.ex_info.call(null,cljs.core.apply.call(null,cljs.core.str,msg),cljs.core.PersistentArrayMap.EMPTY);
};
var G__16863 = function (var_args){
var msg = null;
if (arguments.length > 0) {
var G__16864__i = 0, G__16864__a = new Array(arguments.length -  0);
while (G__16864__i < G__16864__a.length) {G__16864__a[G__16864__i] = arguments[G__16864__i + 0]; ++G__16864__i;}
  msg = new cljs.core.IndexedSeq(G__16864__a,0);
} 
return G__16863__delegate.call(this,msg);};
G__16863.cljs$lang$maxFixedArity = 0;
G__16863.cljs$lang$applyTo = (function (arglist__16865){
var msg = cljs.core.seq(arglist__16865);
return G__16863__delegate(msg);
});
G__16863.cljs$core$IFn$_invoke$arity$variadic = G__16863__delegate;
return G__16863;
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
var recform__$1 = (((k instanceof cljs.core.Keyword))?recform:cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","next","cljs.core/next",-1291438473,null)),(function (){var x__9655__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0))))));
var steppair = cljs$core$macros$step.call(null,recform__$1,cljs.core.nnext.call(null,exprs));
var needrec = steppair.call(null,(0));
var subform = steppair.call(null,(1));
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"let","let",-1282412701))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [needrec,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9655__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = subform;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())))], null);
} else {
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"while","while",963117786))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__9655__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = subform;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(cljs.core.truth_(needrec)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recform__$1], null):null))))], null);
} else {
if(cljs.core._EQ_.call(null,k,new cljs.core.Keyword(null,"when","when",-576417306))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9655__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__9655__auto__ = subform;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(cljs.core.truth_(needrec)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recform__$1], null):null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = recform__$1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())))], null);
} else {
if((k instanceof cljs.core.Keyword)){
return err.call(null,"Invalid 'doseq' keyword",k);
} else {
var chunksym = cljs.core.with_meta.call(null,cljs.core.gensym.call(null,"chunk__"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"not-native","not-native",-236392494,null)], null));
var countsym = cljs.core.gensym.call(null,"count__");
var isym = cljs.core.gensym.call(null,"i__");
var recform_chunk = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__9655__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = chunksym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = countsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","unchecked-inc","cljs.core$macros/unchecked-inc",-1615365330,null)),(function (){var x__9655__auto__ = isym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
var steppair_chunk = cljs$core$macros$step.call(null,recform_chunk,cljs.core.nnext.call(null,exprs));
var subform_chunk = steppair_chunk.call(null,(1));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__9655__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9655__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__9655__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = chunksym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__9655__auto__ = countsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),(function (){var x__9655__auto__ = isym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","coercive-boolean","cljs.core$macros/coercive-boolean",-450758280,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__9655__auto__ = isym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = countsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9655__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9655__auto__ = k;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-nth","cljs.core/-nth",504234802,null)),(function (){var x__9655__auto__ = chunksym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = isym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = subform_chunk;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(cljs.core.truth_(needrec)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recform_chunk], null):null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when-let","cljs.core$macros/when-let",-2004472648,null)),(function (){var x__9655__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9655__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__9655__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunked-seq?","cljs.core/chunked-seq?",-712922369,null)),(function (){var x__9655__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9655__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__16855__auto__","c__16855__auto__",-272222881,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-first","cljs.core/chunk-first",-1157877305,null)),(function (){var x__9655__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","chunk-rest","cljs.core/chunk-rest",-398161143,null)),(function (){var x__9655__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__16855__auto__","c__16855__auto__",-272222881,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"c__16855__auto__","c__16855__auto__",-272222881,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9655__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9655__auto__ = k;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null)),(function (){var x__9655__auto__ = seqsym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = subform;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(cljs.core.truth_(needrec)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recform__$1], null):null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
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

cljs.core$macros.doseq.cljs$lang$applyTo = (function (seq16856){
var G__16857 = cljs.core.first.call(null,seq16856);
var seq16856__$1 = cljs.core.next.call(null,seq16856);
var G__16858 = cljs.core.first.call(null,seq16856__$1);
var seq16856__$2 = cljs.core.next.call(null,seq16856__$1);
var G__16859 = cljs.core.first.call(null,seq16856__$2);
var seq16856__$3 = cljs.core.next.call(null,seq16856__$2);
return cljs.core$macros.doseq.cljs$core$IFn$_invoke$arity$variadic(G__16857,G__16858,G__16859,seq16856__$3);
});


cljs.core$macros.doseq.cljs$lang$macro = true;
cljs.core$macros.array = (function cljs$core$macros$array(var_args){
var args__9933__auto__ = [];
var len__9926__auto___16869 = arguments.length;
var i__9927__auto___16870 = (0);
while(true){
if((i__9927__auto___16870 < len__9926__auto___16869)){
args__9933__auto__.push((arguments[i__9927__auto___16870]));

var G__16871 = (i__9927__auto___16870 + (1));
i__9927__auto___16870 = G__16871;
continue;
} else {
}
break;
}

var argseq__9934__auto__ = ((((2) < args__9933__auto__.length))?(new cljs.core.IndexedSeq(args__9933__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.array.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9934__auto__);
});

cljs.core$macros.array.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,rest){
var xs_str = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,",",cljs.core.take.call(null,cljs.core.count.call(null,rest),cljs.core.repeat.call(null,"~{}"))));
return cljs.core.vary_meta.call(null,cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),[cljs.core.str("["),cljs.core.str(xs_str),cljs.core.str("]")].join(''),rest),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"array","array",-440182315,null));
});

cljs.core$macros.array.cljs$lang$maxFixedArity = (2);

cljs.core$macros.array.cljs$lang$applyTo = (function (seq16866){
var G__16867 = cljs.core.first.call(null,seq16866);
var seq16866__$1 = cljs.core.next.call(null,seq16866);
var G__16868 = cljs.core.first.call(null,seq16866__$1);
var seq16866__$2 = cljs.core.next.call(null,seq16866__$1);
return cljs.core$macros.array.cljs$core$IFn$_invoke$arity$variadic(G__16867,G__16868,seq16866__$2);
});


cljs.core$macros.array.cljs$lang$macro = true;
cljs.core$macros.make_array = (function cljs$core$macros$make_array(var_args){
var args16875 = [];
var len__9926__auto___16883 = arguments.length;
var i__9927__auto___16884 = (0);
while(true){
if((i__9927__auto___16884 < len__9926__auto___16883)){
args16875.push((arguments[i__9927__auto___16884]));

var G__16885 = (i__9927__auto___16884 + (1));
i__9927__auto___16884 = G__16885;
continue;
} else {
}
break;
}

var G__16882 = args16875.length;
switch (G__16882) {
case 3:
return cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
var argseq__9945__auto__ = (new cljs.core.IndexedSeq(args16875.slice((4)),(0),null));
return cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__9945__auto__);

}
});

cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$3 = (function (_AMPERSAND_form,_AMPERSAND_env,size){
return cljs.core.vary_meta.call(null,((typeof size === 'number')?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),cljs.core.take.call(null,size,cljs.core.repeat.call(null,null))))):cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Array.","js/Array.",1235645307,null)),(function (){var x__9655__auto__ = size;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"array","array",-440182315,null));
});

cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$4 = (function (_AMPERSAND_form,_AMPERSAND_env,type,size){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","make-array","cljs.core/make-array",-1802166799,null)),(function (){var x__9655__auto__ = size;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
});

cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,type,size,more_sizes){
return cljs.core.vary_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9655__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dims__16872__auto__","dims__16872__auto__",1910081324,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","list","cljs.core$macros/list",-1408486806,null)),more_sizes)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dimarray__16873__auto__","dimarray__16873__auto__",1654361589,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","make-array","cljs.core/make-array",-1802166799,null)),(function (){var x__9655__auto__ = size;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","dotimes","cljs.core$macros/dotimes",-1407597661,null)),(function (){var x__9655__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__16874__auto__","i__16874__auto__",441166224,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dimarray__16873__auto__","dimarray__16873__auto__",1654361589,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aset","cljs.core$macros/aset",-693176374,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dimarray__16873__auto__","dimarray__16873__auto__",1654361589,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__16874__auto__","i__16874__auto__",441166224,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","make-array","cljs.core/make-array",-1802166799,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dims__16872__auto__","dims__16872__auto__",1910081324,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"dimarray__16873__auto__","dimarray__16873__auto__",1654361589,null))))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"array","array",-440182315,null));
});

cljs.core$macros.make_array.cljs$lang$applyTo = (function (seq16876){
var G__16877 = cljs.core.first.call(null,seq16876);
var seq16876__$1 = cljs.core.next.call(null,seq16876);
var G__16878 = cljs.core.first.call(null,seq16876__$1);
var seq16876__$2 = cljs.core.next.call(null,seq16876__$1);
var G__16879 = cljs.core.first.call(null,seq16876__$2);
var seq16876__$3 = cljs.core.next.call(null,seq16876__$2);
var G__16880 = cljs.core.first.call(null,seq16876__$3);
var seq16876__$4 = cljs.core.next.call(null,seq16876__$3);
return cljs.core$macros.make_array.cljs$core$IFn$_invoke$arity$variadic(G__16877,G__16878,G__16879,G__16880,seq16876__$4);
});

cljs.core$macros.make_array.cljs$lang$maxFixedArity = (4);


cljs.core$macros.make_array.cljs$lang$macro = true;
cljs.core$macros.list = (function cljs$core$macros$list(var_args){
var args16888 = [];
var len__9926__auto___16895 = arguments.length;
var i__9927__auto___16896 = (0);
while(true){
if((i__9927__auto___16896 < len__9926__auto___16895)){
args16888.push((arguments[i__9927__auto___16896]));

var G__16897 = (i__9927__auto___16896 + (1));
i__9927__auto___16896 = G__16897;
continue;
} else {
}
break;
}

var G__16894 = args16888.length;
switch (G__16894) {
case 2:
return cljs.core$macros.list.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__9945__auto__ = (new cljs.core.IndexedSeq(args16888.slice((3)),(0),null));
return cljs.core$macros.list.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9945__auto__);

}
});

cljs.core$macros.list.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.list(new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null),new cljs.core.Symbol("cljs.core","List","cljs.core/List",1708954352,null));
});

cljs.core$macros.list.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,xs){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"constant","constant",-379609303),new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(cljs.analyzer.analyze.call(null,_AMPERSAND_env,x)))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-conj","cljs.core/-conj",2040622670,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","list","cljs.core$macros/list",-1408486806,null)),xs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9655__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__16887__auto__","x__16887__auto__",-1647814002,null)),(function (){var x__9655__auto__ = x;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-conj","cljs.core/-conj",2040622670,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","list","cljs.core$macros/list",-1408486806,null)),xs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__16887__auto__","x__16887__auto__",-1647814002,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
}
});

cljs.core$macros.list.cljs$lang$applyTo = (function (seq16889){
var G__16890 = cljs.core.first.call(null,seq16889);
var seq16889__$1 = cljs.core.next.call(null,seq16889);
var G__16891 = cljs.core.first.call(null,seq16889__$1);
var seq16889__$2 = cljs.core.next.call(null,seq16889__$1);
var G__16892 = cljs.core.first.call(null,seq16889__$2);
var seq16889__$3 = cljs.core.next.call(null,seq16889__$2);
return cljs.core$macros.list.cljs$core$IFn$_invoke$arity$variadic(G__16890,G__16891,G__16892,seq16889__$3);
});

cljs.core$macros.list.cljs$lang$maxFixedArity = (3);


cljs.core$macros.list.cljs$lang$macro = true;
cljs.core$macros.vector = (function cljs$core$macros$vector(var_args){
var args16899 = [];
var len__9926__auto___16905 = arguments.length;
var i__9927__auto___16906 = (0);
while(true){
if((i__9927__auto___16906 < len__9926__auto___16905)){
args16899.push((arguments[i__9927__auto___16906]));

var G__16907 = (i__9927__auto___16906 + (1));
i__9927__auto___16906 = G__16907;
continue;
} else {
}
break;
}

var G__16904 = args16899.length;
switch (G__16904) {
case 2:
return cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__9945__auto__ = (new cljs.core.IndexedSeq(args16899.slice((2)),(0),null));
return cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9945__auto__);

}
});

cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.list(new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null),new cljs.core.Symbol("cljs.core","PersistentVector","cljs.core/PersistentVector",-1211028272,null));
});

cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
var cnt = cljs.core.count.call(null,xs);
if((cnt < (32))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentVector.","cljs.core/PersistentVector.",-1074647876,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__9655__auto__ = cnt;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(5)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-EMPTY-NODE",".-EMPTY-NODE",-1333332641,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentVector","cljs.core/PersistentVector",-1211028272,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),xs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
} else {
return cljs.core.vary_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".fromArray",".fromArray",1053499311,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentVector","cljs.core/PersistentVector",-1211028272,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),xs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true)))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","PersistentVector","cljs.core/PersistentVector",-1211028272,null));
}
});

cljs.core$macros.vector.cljs$lang$applyTo = (function (seq16900){
var G__16901 = cljs.core.first.call(null,seq16900);
var seq16900__$1 = cljs.core.next.call(null,seq16900);
var G__16902 = cljs.core.first.call(null,seq16900__$1);
var seq16900__$2 = cljs.core.next.call(null,seq16900__$1);
return cljs.core$macros.vector.cljs$core$IFn$_invoke$arity$variadic(G__16901,G__16902,seq16900__$2);
});

cljs.core$macros.vector.cljs$lang$maxFixedArity = (2);


cljs.core$macros.vector.cljs$lang$macro = true;
cljs.core$macros.array_map = (function cljs$core$macros$array_map(var_args){
var args16911 = [];
var len__9926__auto___16917 = arguments.length;
var i__9927__auto___16918 = (0);
while(true){
if((i__9927__auto___16918 < len__9926__auto___16917)){
args16911.push((arguments[i__9927__auto___16918]));

var G__16919 = (i__9927__auto___16918 + (1));
i__9927__auto___16918 = G__16919;
continue;
} else {
}
break;
}

var G__16916 = args16911.length;
switch (G__16916) {
case 2:
return cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__9945__auto__ = (new cljs.core.IndexedSeq(args16911.slice((2)),(0),null));
return cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9945__auto__);

}
});

cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.list(new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null),new cljs.core.Symbol("cljs.core","PersistentArrayMap","cljs.core/PersistentArrayMap",1025194468,null));
});

cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,kvs){
var keys = cljs.core.map.call(null,cljs.core.first,cljs.core.partition.call(null,(2),kvs));
if((cljs.core.every_QMARK_.call(null,((function (keys){
return (function (p1__16909_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__16909_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
});})(keys))
,cljs.core.map.call(null,((function (keys){
return (function (p1__16910_SHARP_){
return cljs.analyzer.analyze.call(null,_AMPERSAND_env,p1__16910_SHARP_);
});})(keys))
,keys))) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,keys)),cljs.core.count.call(null,keys)))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentArrayMap.","cljs.core/PersistentArrayMap.",-471979341,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__9655__auto__ = (cljs.core.count.call(null,kvs) / (2));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),kvs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".fromArray",".fromArray",1053499311,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentArrayMap","cljs.core/PersistentArrayMap",1025194468,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),kvs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
}
});

cljs.core$macros.array_map.cljs$lang$applyTo = (function (seq16912){
var G__16913 = cljs.core.first.call(null,seq16912);
var seq16912__$1 = cljs.core.next.call(null,seq16912);
var G__16914 = cljs.core.first.call(null,seq16912__$1);
var seq16912__$2 = cljs.core.next.call(null,seq16912__$1);
return cljs.core$macros.array_map.cljs$core$IFn$_invoke$arity$variadic(G__16913,G__16914,seq16912__$2);
});

cljs.core$macros.array_map.cljs$lang$maxFixedArity = (2);


cljs.core$macros.array_map.cljs$lang$macro = true;
cljs.core$macros.hash_map = (function cljs$core$macros$hash_map(var_args){
var args16921 = [];
var len__9926__auto___16927 = arguments.length;
var i__9927__auto___16928 = (0);
while(true){
if((i__9927__auto___16928 < len__9926__auto___16927)){
args16921.push((arguments[i__9927__auto___16928]));

var G__16929 = (i__9927__auto___16928 + (1));
i__9927__auto___16928 = G__16929;
continue;
} else {
}
break;
}

var G__16926 = args16921.length;
switch (G__16926) {
case 2:
return cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__9945__auto__ = (new cljs.core.IndexedSeq(args16921.slice((2)),(0),null));
return cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9945__auto__);

}
});

cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentHashMap","cljs.core/PersistentHashMap",-454120575,null)))));
});

cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,kvs){
var pairs = cljs.core.partition.call(null,(2),kvs);
var ks = cljs.core.map.call(null,cljs.core.first,pairs);
var vs = cljs.core.map.call(null,cljs.core.second,pairs);
return cljs.core.vary_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".fromArrays",".fromArrays",1110244209,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentHashMap","cljs.core/PersistentHashMap",-454120575,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),ks)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),vs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})()))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","PersistentHashMap","cljs.core/PersistentHashMap",-454120575,null));
});

cljs.core$macros.hash_map.cljs$lang$applyTo = (function (seq16922){
var G__16923 = cljs.core.first.call(null,seq16922);
var seq16922__$1 = cljs.core.next.call(null,seq16922);
var G__16924 = cljs.core.first.call(null,seq16922__$1);
var seq16922__$2 = cljs.core.next.call(null,seq16922__$1);
return cljs.core$macros.hash_map.cljs$core$IFn$_invoke$arity$variadic(G__16923,G__16924,seq16922__$2);
});

cljs.core$macros.hash_map.cljs$lang$maxFixedArity = (2);


cljs.core$macros.hash_map.cljs$lang$macro = true;
cljs.core$macros.hash_set = (function cljs$core$macros$hash_set(var_args){
var args16933 = [];
var len__9926__auto___16939 = arguments.length;
var i__9927__auto___16940 = (0);
while(true){
if((i__9927__auto___16940 < len__9926__auto___16939)){
args16933.push((arguments[i__9927__auto___16940]));

var G__16941 = (i__9927__auto___16940 + (1));
i__9927__auto___16940 = G__16941;
continue;
} else {
}
break;
}

var G__16938 = args16933.length;
switch (G__16938) {
case 2:
return cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__9945__auto__ = (new cljs.core.IndexedSeq(args16933.slice((2)),(0),null));
return cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9945__auto__);

}
});

cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$2 = (function (_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-EMPTY",".-EMPTY",-471586691,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentHashSet","cljs.core/PersistentHashSet",-967232330,null)))));
});

cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,xs){
if(((cljs.core.count.call(null,xs) <= (8))) && (cljs.core.every_QMARK_.call(null,(function (p1__16931_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(p1__16931_SHARP_),new cljs.core.Keyword(null,"constant","constant",-379609303));
}),cljs.core.map.call(null,(function (p1__16932_SHARP_){
return cljs.analyzer.analyze.call(null,_AMPERSAND_env,p1__16932_SHARP_);
}),xs))) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,xs)),cljs.core.count.call(null,xs)))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentHashSet.","cljs.core/PersistentHashSet.",300313251,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentArrayMap.","cljs.core/PersistentArrayMap.",-471979341,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null),(function (){var x__9655__auto__ = cljs.core.count.call(null,xs);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),cljs.core.interleave.call(null,xs,cljs.core.repeat.call(null,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
} else {
return cljs.core.vary_meta.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".fromArray",".fromArray",1053499311,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","PersistentHashSet","cljs.core/PersistentHashSet",-967232330,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)),xs)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,true)))),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","PersistentHashSet","cljs.core/PersistentHashSet",-967232330,null));
}
});

cljs.core$macros.hash_set.cljs$lang$applyTo = (function (seq16934){
var G__16935 = cljs.core.first.call(null,seq16934);
var seq16934__$1 = cljs.core.next.call(null,seq16934);
var G__16936 = cljs.core.first.call(null,seq16934__$1);
var seq16934__$2 = cljs.core.next.call(null,seq16934__$1);
return cljs.core$macros.hash_set.cljs$core$IFn$_invoke$arity$variadic(G__16935,G__16936,seq16934__$2);
});

cljs.core$macros.hash_set.cljs$lang$maxFixedArity = (2);


cljs.core$macros.hash_set.cljs$lang$macro = true;
cljs.core$macros.js_obj_STAR_ = (function cljs$core$macros$js_obj_STAR_(kvs){
var kvs_str = cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,",",cljs.core.take.call(null,cljs.core.count.call(null,kvs),cljs.core.repeat.call(null,"~{}:~{}"))));
return cljs.core.vary_meta.call(null,cljs.core.list_STAR_.call(null,new cljs.core.Symbol(null,"js*","js*",-1134233646,null),[cljs.core.str("{"),cljs.core.str(kvs_str),cljs.core.str("}")].join(''),cljs.core.apply.call(null,cljs.core.concat,kvs)),cljs.core.assoc,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"object","object",-1179821820,null));
});
cljs.core$macros.js_obj = (function cljs$core$macros$js_obj(var_args){
var args__9933__auto__ = [];
var len__9926__auto___16958 = arguments.length;
var i__9927__auto___16959 = (0);
while(true){
if((i__9927__auto___16959 < len__9926__auto___16958)){
args__9933__auto__.push((arguments[i__9927__auto___16959]));

var G__16960 = (i__9927__auto___16959 + (1));
i__9927__auto___16959 = G__16960;
continue;
} else {
}
break;
}

var argseq__9934__auto__ = ((((2) < args__9933__auto__.length))?(new cljs.core.IndexedSeq(args__9933__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.js_obj.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9934__auto__);
});

cljs.core$macros.js_obj.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,rest){
var sym_or_str_QMARK_ = (function (x){
return ((x instanceof cljs.core.Symbol)) || (typeof x === 'string');
});
var filter_on_keys = ((function (sym_or_str_QMARK_){
return (function (f,coll){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,((function (sym_or_str_QMARK_){
return (function (p__16946){
var vec__16947 = p__16946;
var k = cljs.core.nth.call(null,vec__16947,(0),null);
var _ = cljs.core.nth.call(null,vec__16947,(1),null);
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9655__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.apply.call(null,cljs.core.concat,clojure.set.map_invert.call(null,expr__GT_local)),(function (){var x__9655__auto__ = obj;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core$macros.js_obj_STAR_.call(null,filter_on_keys.call(null,cljs.core.string_QMARK_,kvs));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),cljs.core.map.call(null,((function (sym_or_str_QMARK_,filter_on_keys,kvs,sym_pairs,expr__GT_local,obj){
return (function (p__16950){
var vec__16951 = p__16950;
var k = cljs.core.nth.call(null,vec__16951,(0),null);
var v = cljs.core.nth.call(null,vec__16951,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aset","cljs.core$macros/aset",-693176374,null)),(function (){var x__9655__auto__ = obj;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = k;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
});})(sym_or_str_QMARK_,filter_on_keys,kvs,sym_pairs,expr__GT_local,obj))
,sym_pairs),cljs.core.map.call(null,((function (sym_or_str_QMARK_,filter_on_keys,kvs,sym_pairs,expr__GT_local,obj){
return (function (p__16954){
var vec__16955 = p__16954;
var k = cljs.core.nth.call(null,vec__16955,(0),null);
var v = cljs.core.nth.call(null,vec__16955,(1),null);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aset","cljs.core$macros/aset",-693176374,null)),(function (){var x__9655__auto__ = obj;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = v;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.get.call(null,kvs,k);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
});})(sym_or_str_QMARK_,filter_on_keys,kvs,sym_pairs,expr__GT_local,obj))
,expr__GT_local),(function (){var x__9655__auto__ = obj;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
}
});

cljs.core$macros.js_obj.cljs$lang$maxFixedArity = (2);

cljs.core$macros.js_obj.cljs$lang$applyTo = (function (seq16943){
var G__16944 = cljs.core.first.call(null,seq16943);
var seq16943__$1 = cljs.core.next.call(null,seq16943);
var G__16945 = cljs.core.first.call(null,seq16943__$1);
var seq16943__$2 = cljs.core.next.call(null,seq16943__$1);
return cljs.core$macros.js_obj.cljs$core$IFn$_invoke$arity$variadic(G__16944,G__16945,seq16943__$2);
});


cljs.core$macros.js_obj.cljs$lang$macro = true;
cljs.core$macros.alength = (function cljs$core$macros$alength(_AMPERSAND_form,_AMPERSAND_env,a){
return cljs.core.vary_meta.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9655__auto__ = a;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9655__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"a__16961__auto__","a__16961__auto__",1805290416,null)),(function (){var x__9655__auto__ = a;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = ret;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","aclone","cljs.core/aclone",-758078968,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"a__16961__auto__","a__16961__auto__",1805290416,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__9655__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9655__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__9655__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"a__16961__auto__","a__16961__auto__",1805290416,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aset","cljs.core$macros/aset",-693176374,null)),(function (){var x__9655__auto__ = ret;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),(function (){var x__9655__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = ret;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
});

cljs.core$macros.amap.cljs$lang$macro = true;
/**
 * Reduces an expression across an array a, using an index named idx,
 *   and return value named ret, initialized to init, setting ret to the
 *   evaluation of expr at each step, returning ret.
 */
cljs.core$macros.areduce = (function cljs$core$macros$areduce(_AMPERSAND_form,_AMPERSAND_env,a,idx,ret,init,expr){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9655__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"a__16962__auto__","a__16962__auto__",706935491,null)),(function (){var x__9655__auto__ = a;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__9655__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9655__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),(function (){var x__9655__auto__ = ret;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = init;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__9655__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"a__16962__auto__","a__16962__auto__",706935491,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),(function (){var x__9655__auto__ = idx;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = ret;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
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
var args__9933__auto__ = [];
var len__9926__auto___16968 = arguments.length;
var i__9927__auto___16969 = (0);
while(true){
if((i__9927__auto___16969 < len__9926__auto___16968)){
args__9933__auto__.push((arguments[i__9927__auto___16969]));

var G__16970 = (i__9927__auto___16969 + (1));
i__9927__auto___16969 = G__16970;
continue;
} else {
}
break;
}

var argseq__9934__auto__ = ((((3) < args__9933__auto__.length))?(new cljs.core.IndexedSeq(args__9933__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.dotimes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9934__auto__);
});

cljs.core$macros.dotimes.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,body){
var i = cljs.core.first.call(null,bindings);
var n = cljs.core.second.call(null,bindings);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9655__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"n__16963__auto__","n__16963__auto__",471720098,null)),(function (){var x__9655__auto__ = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__9655__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9655__auto__ = i;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__9655__auto__ = i;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"n__16963__auto__","n__16963__auto__",471720098,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),body,(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),(function (){var x__9655__auto__ = i;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
});

cljs.core$macros.dotimes.cljs$lang$maxFixedArity = (3);

cljs.core$macros.dotimes.cljs$lang$applyTo = (function (seq16964){
var G__16965 = cljs.core.first.call(null,seq16964);
var seq16964__$1 = cljs.core.next.call(null,seq16964);
var G__16966 = cljs.core.first.call(null,seq16964__$1);
var seq16964__$2 = cljs.core.next.call(null,seq16964__$1);
var G__16967 = cljs.core.first.call(null,seq16964__$2);
var seq16964__$3 = cljs.core.next.call(null,seq16964__$2);
return cljs.core$macros.dotimes.cljs$core$IFn$_invoke$arity$variadic(G__16965,G__16966,G__16967,seq16964__$3);
});


cljs.core$macros.dotimes.cljs$lang$macro = true;
/**
 * Throws an exception if the given option map contains keys not listed
 *   as valid, else returns nil.
 */
cljs.core$macros.check_valid_options = (function cljs$core$macros$check_valid_options(var_args){
var args__9933__auto__ = [];
var len__9926__auto___16974 = arguments.length;
var i__9927__auto___16975 = (0);
while(true){
if((i__9927__auto___16975 < len__9926__auto___16974)){
args__9933__auto__.push((arguments[i__9927__auto___16975]));

var G__16976 = (i__9927__auto___16975 + (1));
i__9927__auto___16975 = G__16976;
continue;
} else {
}
break;
}

var argseq__9934__auto__ = ((((1) < args__9933__auto__.length))?(new cljs.core.IndexedSeq(args__9933__auto__.slice((1)),(0),null)):null);
return cljs.core$macros.check_valid_options.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9934__auto__);
});

cljs.core$macros.check_valid_options.cljs$core$IFn$_invoke$arity$variadic = (function (options,valid_keys){
if(cljs.core.seq.call(null,cljs.core.apply.call(null,cljs.core.disj,cljs.core.apply.call(null,cljs.core.hash_set,cljs.core.keys.call(null,options)),valid_keys))){
throw cljs.core.apply.call(null,cljs.core.str,"Only these options are valid: ",cljs.core.first.call(null,valid_keys),cljs.core.map.call(null,(function (p1__16971_SHARP_){
return [cljs.core.str(", "),cljs.core.str(p1__16971_SHARP_)].join('');
}),cljs.core.rest.call(null,valid_keys)));
} else {
return null;
}
});

cljs.core$macros.check_valid_options.cljs$lang$maxFixedArity = (1);

cljs.core$macros.check_valid_options.cljs$lang$applyTo = (function (seq16972){
var G__16973 = cljs.core.first.call(null,seq16972);
var seq16972__$1 = cljs.core.next.call(null,seq16972);
return cljs.core$macros.check_valid_options.cljs$core$IFn$_invoke$arity$variadic(G__16973,seq16972__$1);
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
var args__9933__auto__ = [];
var len__9926__auto___16986 = arguments.length;
var i__9927__auto___16987 = (0);
while(true){
if((i__9927__auto___16987 < len__9926__auto___16986)){
args__9933__auto__.push((arguments[i__9927__auto___16987]));

var G__16988 = (i__9927__auto___16987 + (1));
i__9927__auto___16987 = G__16988;
continue;
} else {
}
break;
}

var argseq__9934__auto__ = ((((3) < args__9933__auto__.length))?(new cljs.core.IndexedSeq(args__9933__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.defmulti.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9934__auto__);
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

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defonce","cljs.core$macros/defonce",-1096231613,null)),(function (){var x__9655__auto__ = cljs.core.with_meta.call(null,mm_name,m__$2);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9655__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"method-table__16977__auto__","method-table__16977__auto__",1167727136,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null)),(function (){var x__9655__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"prefer-table__16978__auto__","prefer-table__16978__auto__",459907715,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null)),(function (){var x__9655__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"method-cache__16979__auto__","method-cache__16979__auto__",948293634,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null)),(function (){var x__9655__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cached-hierarchy__16980__auto__","cached-hierarchy__16980__auto__",413803912,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","atom","cljs.core/atom",1943839529,null)),(function (){var x__9655__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"hierarchy__16981__auto__","hierarchy__16981__auto__",-401678223,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null)),(function (){var x__9655__auto__ = options__$4;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","get-global-hierarchy","cljs.core/get-global-hierarchy",48052871,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","MultiFn.","cljs.core/MultiFn.",1073941573,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","symbol","cljs.core/symbol",195265748,null)),(function (){var x__9655__auto__ = mm_ns;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.name.call(null,mm_name);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = dispatch_fn;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = default$;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"hierarchy__16981__auto__","hierarchy__16981__auto__",-401678223,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"method-table__16977__auto__","method-table__16977__auto__",1167727136,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"prefer-table__16978__auto__","prefer-table__16978__auto__",459907715,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"method-cache__16979__auto__","method-cache__16979__auto__",948293634,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cached-hierarchy__16980__auto__","cached-hierarchy__16980__auto__",413803912,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
});

cljs.core$macros.defmulti.cljs$lang$maxFixedArity = (3);

cljs.core$macros.defmulti.cljs$lang$applyTo = (function (seq16982){
var G__16983 = cljs.core.first.call(null,seq16982);
var seq16982__$1 = cljs.core.next.call(null,seq16982);
var G__16984 = cljs.core.first.call(null,seq16982__$1);
var seq16982__$2 = cljs.core.next.call(null,seq16982__$1);
var G__16985 = cljs.core.first.call(null,seq16982__$2);
var seq16982__$3 = cljs.core.next.call(null,seq16982__$2);
return cljs.core$macros.defmulti.cljs$core$IFn$_invoke$arity$variadic(G__16983,G__16984,G__16985,seq16982__$3);
});


cljs.core$macros.defmulti.cljs$lang$macro = true;
/**
 * Creates and installs a new method of multimethod associated with dispatch-value. 
 */
cljs.core$macros.defmethod = (function cljs$core$macros$defmethod(var_args){
var args__9933__auto__ = [];
var len__9926__auto___16994 = arguments.length;
var i__9927__auto___16995 = (0);
while(true){
if((i__9927__auto___16995 < len__9926__auto___16994)){
args__9933__auto__.push((arguments[i__9927__auto___16995]));

var G__16996 = (i__9927__auto___16995 + (1));
i__9927__auto___16995 = G__16996;
continue;
} else {
}
break;
}

var argseq__9934__auto__ = ((((4) < args__9933__auto__.length))?(new cljs.core.IndexedSeq(args__9933__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.defmethod.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__9934__auto__);
});

cljs.core$macros.defmethod.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,multifn,dispatch_val,fn_tail){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-add-method","cljs.core/-add-method",571092113,null)),(function (){var x__9655__auto__ = cljs.core.with_meta.call(null,multifn,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core","MultiFn","cljs.core/MultiFn",1487419554,null)], null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = dispatch_val;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),fn_tail)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
});

cljs.core$macros.defmethod.cljs$lang$maxFixedArity = (4);

cljs.core$macros.defmethod.cljs$lang$applyTo = (function (seq16989){
var G__16990 = cljs.core.first.call(null,seq16989);
var seq16989__$1 = cljs.core.next.call(null,seq16989);
var G__16991 = cljs.core.first.call(null,seq16989__$1);
var seq16989__$2 = cljs.core.next.call(null,seq16989__$1);
var G__16992 = cljs.core.first.call(null,seq16989__$2);
var seq16989__$3 = cljs.core.next.call(null,seq16989__$2);
var G__16993 = cljs.core.first.call(null,seq16989__$3);
var seq16989__$4 = cljs.core.next.call(null,seq16989__$3);
return cljs.core$macros.defmethod.cljs$core$IFn$_invoke$arity$variadic(G__16990,G__16991,G__16992,G__16993,seq16989__$4);
});


cljs.core$macros.defmethod.cljs$lang$macro = true;
/**
 * Evaluates expr and prints the time it took. Returns the value of expr.
 */
cljs.core$macros.time = (function cljs$core$macros$time(_AMPERSAND_form,_AMPERSAND_env,expr){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9655__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"start__16997__auto__","start__16997__auto__",1150119340,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","system-time","cljs.core/system-time",1562011930,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ret__16998__auto__","ret__16998__auto__",757414904,null)),(function (){var x__9655__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","prn","cljs.core/prn",1725204552,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"Elapsed time: "),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".toFixed",".toFixed",-895046938,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","system-time","cljs.core/system-time",1562011930,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"start__16997__auto__","start__16997__auto__",1150119340,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(6)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY," msecs"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ret__16998__auto__","ret__16998__auto__",757414904,null)))));
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
var args__9933__auto__ = [];
var len__9926__auto___17013 = arguments.length;
var i__9927__auto___17014 = (0);
while(true){
if((i__9927__auto___17014 < len__9926__auto___17013)){
args__9933__auto__.push((arguments[i__9927__auto___17014]));

var G__17015 = (i__9927__auto___17014 + (1));
i__9927__auto___17014 = G__17015;
continue;
} else {
}
break;
}

var argseq__9934__auto__ = ((((5) < args__9933__auto__.length))?(new cljs.core.IndexedSeq(args__9933__auto__.slice((5)),(0),null)):null);
return cljs.core$macros.simple_benchmark.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__9934__auto__);
});

cljs.core$macros.simple_benchmark.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,bindings,expr,iterations,p__17010){
var map__17011 = p__17010;
var map__17011__$1 = ((((!((map__17011 == null)))?((((map__17011.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17011.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17011):map__17011);
var print_fn = cljs.core.get.call(null,map__17011__$1,new cljs.core.Keyword(null,"print-fn","print-fn",-1720960489),new cljs.core.Symbol(null,"println","println",-733595439,null));
var bs_str = cljs.core.pr_str.call(null,bindings);
var expr_str = cljs.core.pr_str.call(null,expr);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9655__auto__ = bindings;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9655__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"start__16999__auto__","start__16999__auto__",377545948,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".getTime",".getTime",-1048557777,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Date.","js/Date.",384205255,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ret__17000__auto__","ret__17000__auto__",1050585878,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","dotimes","cljs.core$macros/dotimes",-1407597661,null)),(function (){var x__9655__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"___17001__auto__","___17001__auto__",745872967,null)),(function (){var x__9655__auto__ = iterations;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = expr;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"end__17002__auto__","end__17002__auto__",1997703195,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".getTime",".getTime",-1048557777,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Date.","js/Date.",384205255,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"elapsed__17003__auto__","elapsed__17003__auto__",-317669784,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"end__17002__auto__","end__17002__auto__",1997703195,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"start__16999__auto__","start__16999__auto__",377545948,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9655__auto__ = print_fn;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","str","cljs.core$macros/str",-2019499702,null)),(function (){var x__9655__auto__ = bs_str;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,", "),(function (){var x__9655__auto__ = expr_str;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,", "),(function (){var x__9655__auto__ = iterations;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY," runs, "),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"elapsed__17003__auto__","elapsed__17003__auto__",-317669784,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY," msecs"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
});

cljs.core$macros.simple_benchmark.cljs$lang$maxFixedArity = (5);

cljs.core$macros.simple_benchmark.cljs$lang$applyTo = (function (seq17004){
var G__17005 = cljs.core.first.call(null,seq17004);
var seq17004__$1 = cljs.core.next.call(null,seq17004);
var G__17006 = cljs.core.first.call(null,seq17004__$1);
var seq17004__$2 = cljs.core.next.call(null,seq17004__$1);
var G__17007 = cljs.core.first.call(null,seq17004__$2);
var seq17004__$3 = cljs.core.next.call(null,seq17004__$2);
var G__17008 = cljs.core.first.call(null,seq17004__$3);
var seq17004__$4 = cljs.core.next.call(null,seq17004__$3);
var G__17009 = cljs.core.first.call(null,seq17004__$4);
var seq17004__$5 = cljs.core.next.call(null,seq17004__$4);
return cljs.core$macros.simple_benchmark.cljs$core$IFn$_invoke$arity$variadic(G__17005,G__17006,G__17007,G__17008,G__17009,seq17004__$5);
});


cljs.core$macros.simple_benchmark.cljs$lang$macro = true;
cljs.core$macros.cs = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.gensym,cljs.core.str,cljs.core.char$),cljs.core.range.call(null,(97),(118))));
cljs.core$macros.gen_apply_to_helper = (function cljs$core$macros$gen_apply_to_helper(var_args){
var args17016 = [];
var len__9926__auto___17019 = arguments.length;
var i__9927__auto___17020 = (0);
while(true){
if((i__9927__auto___17020 < len__9926__auto___17019)){
args17016.push((arguments[i__9927__auto___17020]));

var G__17021 = (i__9927__auto___17020 + (1));
i__9927__auto___17020 = G__17021;
continue;
} else {
}
break;
}

var G__17018 = args17016.length;
switch (G__17018) {
case 0:
return cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17016.length)].join('')));

}
});

cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core$macros.gen_apply_to_helper.call(null,(1));
});

cljs.core$macros.gen_apply_to_helper.cljs$core$IFn$_invoke$arity$1 = (function (n){
var prop = cljs.core.symbol.call(null,[cljs.core.str("-cljs$core$IFn$_invoke$arity$"),cljs.core.str(n)].join(''));
var f = cljs.core.symbol.call(null,[cljs.core.str("cljs$core$IFn$_invoke$arity$"),cljs.core.str(n)].join(''));
if((n <= (20))){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9655__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9655__auto__ = cljs.core$macros.cs.call(null,(n - (1)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-first","cljs.core/-first",545297391,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-rest","cljs.core/-rest",-1829241664,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","==","cljs.core$macros/==",-818551413,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argc","argc",187692008,null)),(function (){var x__9655__auto__ = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"f","f",43394975,null)),(function (){var x__9655__auto__ = prop;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"f","f",43394975,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9655__auto__ = f;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),cljs.core.take.call(null,n,cljs.core$macros.cs))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"f","f",43394975,null)),cljs.core.take.call(null,n,cljs.core$macros.cs))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core$macros.gen_apply_to_helper.call(null,(n + (1)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"Only up to 20 arguments supported on functions"))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
}
});

cljs.core$macros.gen_apply_to_helper.cljs$lang$maxFixedArity = 1;

cljs.core$macros.gen_apply_to = (function cljs$core$macros$gen_apply_to(_AMPERSAND_form,_AMPERSAND_env){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"*unchecked-if*","*unchecked-if*",1542408350,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"apply-to","apply-to",-1858571928,null)),(function (){var x__9655__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"f","f",43394975,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argc","argc",187692008,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9655__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args","args",-1338879193,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"if","if",1181717262,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","zero?","cljs.core$macros/zero?",-65998367,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argc","argc",187692008,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"f","f",43394975,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core$macros.gen_apply_to_helper.call(null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"*unchecked-if*","*unchecked-if*",1542408350,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,false))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
});

cljs.core$macros.gen_apply_to.cljs$lang$macro = true;
/**
 * Evaluates exprs in a context in which *print-fn* is bound to .append
 *   on a fresh StringBuffer.  Returns the string created by any nested
 *   printing calls.
 */
cljs.core$macros.with_out_str = (function cljs$core$macros$with_out_str(var_args){
var args__9933__auto__ = [];
var len__9926__auto___17028 = arguments.length;
var i__9927__auto___17029 = (0);
while(true){
if((i__9927__auto___17029 < len__9926__auto___17028)){
args__9933__auto__.push((arguments[i__9927__auto___17029]));

var G__17030 = (i__9927__auto___17029 + (1));
i__9927__auto___17029 = G__17030;
continue;
} else {
}
break;
}

var argseq__9934__auto__ = ((((2) < args__9933__auto__.length))?(new cljs.core.IndexedSeq(args__9933__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.with_out_str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9934__auto__);
});

cljs.core$macros.with_out_str.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,body){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9655__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"sb__17023__auto__","sb__17023__auto__",2051636183,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","goog.string.StringBuffer.","js/goog.string.StringBuffer.",-1043451650,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","binding","cljs.core$macros/binding",1855847304,null)),(function (){var x__9655__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","*print-newline*","cljs.core/*print-newline*",6231625,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","*print-fn*","cljs.core/*print-fn*",1342365176,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9655__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__17024__auto__","x__17024__auto__",-2107140883,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".append",".append",1595439852,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"sb__17023__auto__","sb__17023__auto__",2051636183,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"x__17024__auto__","x__17024__auto__",-2107140883,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"sb__17023__auto__","sb__17023__auto__",2051636183,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
});

cljs.core$macros.with_out_str.cljs$lang$maxFixedArity = (2);

cljs.core$macros.with_out_str.cljs$lang$applyTo = (function (seq17025){
var G__17026 = cljs.core.first.call(null,seq17025);
var seq17025__$1 = cljs.core.next.call(null,seq17025);
var G__17027 = cljs.core.first.call(null,seq17025__$1);
var seq17025__$2 = cljs.core.next.call(null,seq17025__$1);
return cljs.core$macros.with_out_str.cljs$core$IFn$_invoke$arity$variadic(G__17026,G__17027,seq17025__$2);
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
var args__9933__auto__ = [];
var len__9926__auto___17035 = arguments.length;
var i__9927__auto___17036 = (0);
while(true){
if((i__9927__auto___17036 < len__9926__auto___17035)){
args__9933__auto__.push((arguments[i__9927__auto___17036]));

var G__17037 = (i__9927__auto___17036 + (1));
i__9927__auto___17036 = G__17037;
continue;
} else {
}
break;
}

var argseq__9934__auto__ = ((((2) < args__9933__auto__.length))?(new cljs.core.IndexedSeq(args__9933__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.lazy_cat.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9934__auto__);
});

cljs.core$macros.lazy_cat.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,colls){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","concat","cljs.core/concat",-1133584918,null)),cljs.core.map.call(null,(function (p1__17031_SHARP_){
return cljs.core._conj.call(null,(function (){var x__9655__auto__ = p1__17031_SHARP_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),new cljs.core.Symbol("cljs.core$macros","lazy-seq","cljs.core$macros/lazy-seq",806482650,null));
}),colls))));
});

cljs.core$macros.lazy_cat.cljs$lang$maxFixedArity = (2);

cljs.core$macros.lazy_cat.cljs$lang$applyTo = (function (seq17032){
var G__17033 = cljs.core.first.call(null,seq17032);
var seq17032__$1 = cljs.core.next.call(null,seq17032);
var G__17034 = cljs.core.first.call(null,seq17032__$1);
var seq17032__$2 = cljs.core.next.call(null,seq17032__$1);
return cljs.core$macros.lazy_cat.cljs$core$IFn$_invoke$arity$variadic(G__17033,G__17034,seq17032__$2);
});


cljs.core$macros.lazy_cat.cljs$lang$macro = true;
cljs.core$macros.js_str = (function cljs$core$macros$js_str(_AMPERSAND_form,_AMPERSAND_env,s){
return cljs.core._conj.call(null,cljs.core._conj.call(null,(function (){var x__9655__auto__ = s;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),"''+~{}"),new cljs.core.Symbol(null,"js*","js*",-1134233646,null));
});

cljs.core$macros.js_str.cljs$lang$macro = true;
cljs.core$macros.es6_iterable = (function cljs$core$macros$es6_iterable(_AMPERSAND_form,_AMPERSAND_env,ty){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aset","cljs.core$macros/aset",-693176374,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".-prototype",".-prototype",-1562038608,null)),(function (){var x__9655__auto__ = ty;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","ITER_SYMBOL","cljs.core/ITER_SYMBOL",-2091399233,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9655__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","this-as","cljs.core$macros/this-as",-799075148,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__17038__auto__","this__17038__auto__",-53607094,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","es6-iterator","cljs.core/es6-iterator",856007913,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"this__17038__auto__","this__17038__auto__",-53607094,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
});

cljs.core$macros.es6_iterable.cljs$lang$macro = true;
/**
 * Returns a map of the intern mappings for the namespace.
 */
cljs.core$macros.ns_interns = (function cljs$core$macros$ns_interns(_AMPERSAND_form,_AMPERSAND_env,p__17039){
var vec__17051 = p__17039;
var quote = cljs.core.nth.call(null,vec__17051,(0),null);
var ns = cljs.core.nth.call(null,vec__17051,(1),null);
if((cljs.core._EQ_.call(null,quote,new cljs.core.Symbol(null,"quote","quote",1377916282,null))) && ((ns instanceof cljs.core.Symbol))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Argument to ns-interns must be a quoted symbol"),cljs.core.str("\n"),cljs.core.str("(core/and (= quote (quote quote)) (core/symbol? ns))")].join('')));
}

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","into","cljs.core/into",1879938733,null)),(function (){var x__9655__auto__ = cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.map.call(null,((function (vec__17051,quote,ns){
return (function (p__17058){
var vec__17059 = p__17058;
var sym = cljs.core.nth.call(null,vec__17059,(0),null);
var _ = cljs.core.nth.call(null,vec__17059,(1),null);
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","symbol","cljs.core/symbol",195265748,null)),(function (){var x__9655__auto__ = cljs.core.name.call(null,sym);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"var","var",870848730,null)),(function (){var x__9655__auto__ = cljs.core.symbol.call(null,cljs.core.name.call(null,ns),cljs.core.name.call(null,sym));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})()))));
});})(vec__17051,quote,ns))
,cljs.core.get_in.call(null,cljs.core.deref.call(null,cljs.env._STAR_compiler_STAR_),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns,new cljs.core.Keyword(null,"defs","defs",1398449717)], null)))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
});

cljs.core$macros.ns_interns.cljs$lang$macro = true;
/**
 * Removes the mappings for the symbol from the namespace.
 */
cljs.core$macros.ns_unmap = (function cljs$core$macros$ns_unmap(_AMPERSAND_form,_AMPERSAND_env,p__17062,p__17063){
var vec__17070 = p__17062;
var quote0 = cljs.core.nth.call(null,vec__17070,(0),null);
var ns = cljs.core.nth.call(null,vec__17070,(1),null);
var vec__17073 = p__17063;
var quote1 = cljs.core.nth.call(null,vec__17073,(0),null);
var sym = cljs.core.nth.call(null,vec__17073,(1),null);
if((cljs.core._EQ_.call(null,quote0,new cljs.core.Symbol(null,"quote","quote",1377916282,null))) && ((ns instanceof cljs.core.Symbol)) && (cljs.core._EQ_.call(null,quote1,new cljs.core.Symbol(null,"quote","quote",1377916282,null))) && ((sym instanceof cljs.core.Symbol))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Arguments to ns-unmap must be quoted symbols"),cljs.core.str("\n"),cljs.core.str("(core/and (= quote0 (quote quote)) (core/symbol? ns) (= quote1 (quote quote)) (core/symbol? sym))")].join('')));
}

cljs.core.swap_BANG_.call(null,cljs.env._STAR_compiler_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.analyzer","namespaces","cljs.analyzer/namespaces",-260788927),ns,new cljs.core.Keyword(null,"defs","defs",1398449717)], null),cljs.core.dissoc,sym);

return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-delete","cljs.core$macros/js-delete",387769082,null)),(function (){var x__9655__auto__ = cljs.compiler.munge.call(null,ns);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.compiler.munge.call(null,[cljs.core.str(sym)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
});

cljs.core$macros.ns_unmap.cljs$lang$macro = true;
/**
 * Non-atomically swaps the value of the volatile as if:
 * (apply f current-value-of-vol args). Returns the value that
 * was swapped in.
 */
cljs.core$macros.vswap_BANG_ = (function cljs$core$macros$vswap_BANG_(var_args){
var args__9933__auto__ = [];
var len__9926__auto___17081 = arguments.length;
var i__9927__auto___17082 = (0);
while(true){
if((i__9927__auto___17082 < len__9926__auto___17081)){
args__9933__auto__.push((arguments[i__9927__auto___17082]));

var G__17083 = (i__9927__auto___17082 + (1));
i__9927__auto___17082 = G__17083;
continue;
} else {
}
break;
}

var argseq__9934__auto__ = ((((4) < args__9933__auto__.length))?(new cljs.core.IndexedSeq(args__9933__auto__.slice((4)),(0),null)):null);
return cljs.core$macros.vswap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__9934__auto__);
});

cljs.core$macros.vswap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,vol,f,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-vreset!","cljs.core/-vreset!",-1186516972,null)),(function (){var x__9655__auto__ = vol;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9655__auto__ = f;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","-deref","cljs.core/-deref",-1260480154,null)),(function (){var x__9655__auto__ = vol;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),args)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
});

cljs.core$macros.vswap_BANG_.cljs$lang$maxFixedArity = (4);

cljs.core$macros.vswap_BANG_.cljs$lang$applyTo = (function (seq17076){
var G__17077 = cljs.core.first.call(null,seq17076);
var seq17076__$1 = cljs.core.next.call(null,seq17076);
var G__17078 = cljs.core.first.call(null,seq17076__$1);
var seq17076__$2 = cljs.core.next.call(null,seq17076__$1);
var G__17079 = cljs.core.first.call(null,seq17076__$2);
var seq17076__$3 = cljs.core.next.call(null,seq17076__$2);
var G__17080 = cljs.core.first.call(null,seq17076__$3);
var seq17076__$4 = cljs.core.next.call(null,seq17076__$3);
return cljs.core$macros.vswap_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__17077,G__17078,G__17079,G__17080,seq17076__$4);
});


cljs.core$macros.vswap_BANG_.cljs$lang$macro = true;
cljs.core$macros.locking = (function cljs$core$macros$locking(var_args){
var args__9933__auto__ = [];
var len__9926__auto___17088 = arguments.length;
var i__9927__auto___17089 = (0);
while(true){
if((i__9927__auto___17089 < len__9926__auto___17088)){
args__9933__auto__.push((arguments[i__9927__auto___17089]));

var G__17090 = (i__9927__auto___17089 + (1));
i__9927__auto___17089 = G__17090;
continue;
} else {
}
break;
}

var argseq__9934__auto__ = ((((3) < args__9933__auto__.length))?(new cljs.core.IndexedSeq(args__9933__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.locking.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9934__auto__);
});

cljs.core$macros.locking.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,x,forms){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),forms)));
});

cljs.core$macros.locking.cljs$lang$maxFixedArity = (3);

cljs.core$macros.locking.cljs$lang$applyTo = (function (seq17084){
var G__17085 = cljs.core.first.call(null,seq17084);
var seq17084__$1 = cljs.core.next.call(null,seq17084);
var G__17086 = cljs.core.first.call(null,seq17084__$1);
var seq17084__$2 = cljs.core.next.call(null,seq17084__$1);
var G__17087 = cljs.core.first.call(null,seq17084__$2);
var seq17084__$3 = cljs.core.next.call(null,seq17084__$2);
return cljs.core$macros.locking.cljs$core$IFn$_invoke$arity$variadic(G__17085,G__17086,G__17087,seq17084__$3);
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
var args__9933__auto__ = [];
var len__9926__auto___17094 = arguments.length;
var i__9927__auto___17095 = (0);
while(true){
if((i__9927__auto___17095 < len__9926__auto___17094)){
args__9933__auto__.push((arguments[i__9927__auto___17095]));

var G__17096 = (i__9927__auto___17095 + (1));
i__9927__auto___17095 = G__17096;
continue;
} else {
}
break;
}

var argseq__9934__auto__ = ((((2) < args__9933__auto__.length))?(new cljs.core.IndexedSeq(args__9933__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.require.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9934__auto__);
});

cljs.core$macros.require.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ns*","ns*",1840949383,null)),(function (){var x__9655__auto__ = cljs.core.cons.call(null,new cljs.core.Keyword(null,"require","require",-468001333),args);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
});

cljs.core$macros.require.cljs$lang$maxFixedArity = (2);

cljs.core$macros.require.cljs$lang$applyTo = (function (seq17091){
var G__17092 = cljs.core.first.call(null,seq17091);
var seq17091__$1 = cljs.core.next.call(null,seq17091);
var G__17093 = cljs.core.first.call(null,seq17091__$1);
var seq17091__$2 = cljs.core.next.call(null,seq17091__$1);
return cljs.core$macros.require.cljs$core$IFn$_invoke$arity$variadic(G__17092,G__17093,seq17091__$2);
});


cljs.core$macros.require.cljs$lang$macro = true;
/**
 * Similar to require but only for macros.
 */
cljs.core$macros.require_macros = (function cljs$core$macros$require_macros(var_args){
var args__9933__auto__ = [];
var len__9926__auto___17100 = arguments.length;
var i__9927__auto___17101 = (0);
while(true){
if((i__9927__auto___17101 < len__9926__auto___17100)){
args__9933__auto__.push((arguments[i__9927__auto___17101]));

var G__17102 = (i__9927__auto___17101 + (1));
i__9927__auto___17101 = G__17102;
continue;
} else {
}
break;
}

var argseq__9934__auto__ = ((((2) < args__9933__auto__.length))?(new cljs.core.IndexedSeq(args__9933__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.require_macros.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9934__auto__);
});

cljs.core$macros.require_macros.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ns*","ns*",1840949383,null)),(function (){var x__9655__auto__ = cljs.core.cons.call(null,new cljs.core.Keyword(null,"require-macros","require-macros",707947416),args);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
});

cljs.core$macros.require_macros.cljs$lang$maxFixedArity = (2);

cljs.core$macros.require_macros.cljs$lang$applyTo = (function (seq17097){
var G__17098 = cljs.core.first.call(null,seq17097);
var seq17097__$1 = cljs.core.next.call(null,seq17097);
var G__17099 = cljs.core.first.call(null,seq17097__$1);
var seq17097__$2 = cljs.core.next.call(null,seq17097__$1);
return cljs.core$macros.require_macros.cljs$core$IFn$_invoke$arity$variadic(G__17098,G__17099,seq17097__$2);
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
var args__9933__auto__ = [];
var len__9926__auto___17106 = arguments.length;
var i__9927__auto___17107 = (0);
while(true){
if((i__9927__auto___17107 < len__9926__auto___17106)){
args__9933__auto__.push((arguments[i__9927__auto___17107]));

var G__17108 = (i__9927__auto___17107 + (1));
i__9927__auto___17107 = G__17108;
continue;
} else {
}
break;
}

var argseq__9934__auto__ = ((((2) < args__9933__auto__.length))?(new cljs.core.IndexedSeq(args__9933__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.use.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9934__auto__);
});

cljs.core$macros.use.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ns*","ns*",1840949383,null)),(function (){var x__9655__auto__ = cljs.core.cons.call(null,new cljs.core.Keyword(null,"use","use",-1846382424),args);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
});

cljs.core$macros.use.cljs$lang$maxFixedArity = (2);

cljs.core$macros.use.cljs$lang$applyTo = (function (seq17103){
var G__17104 = cljs.core.first.call(null,seq17103);
var seq17103__$1 = cljs.core.next.call(null,seq17103);
var G__17105 = cljs.core.first.call(null,seq17103__$1);
var seq17103__$2 = cljs.core.next.call(null,seq17103__$1);
return cljs.core$macros.use.cljs$core$IFn$_invoke$arity$variadic(G__17104,G__17105,seq17103__$2);
});


cljs.core$macros.use.cljs$lang$macro = true;
/**
 * Similar to use but only for macros.
 */
cljs.core$macros.use_macros = (function cljs$core$macros$use_macros(var_args){
var args__9933__auto__ = [];
var len__9926__auto___17112 = arguments.length;
var i__9927__auto___17113 = (0);
while(true){
if((i__9927__auto___17113 < len__9926__auto___17112)){
args__9933__auto__.push((arguments[i__9927__auto___17113]));

var G__17114 = (i__9927__auto___17113 + (1));
i__9927__auto___17113 = G__17114;
continue;
} else {
}
break;
}

var argseq__9934__auto__ = ((((2) < args__9933__auto__.length))?(new cljs.core.IndexedSeq(args__9933__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.use_macros.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9934__auto__);
});

cljs.core$macros.use_macros.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ns*","ns*",1840949383,null)),(function (){var x__9655__auto__ = cljs.core.cons.call(null,new cljs.core.Keyword(null,"use-macros","use-macros",-905638393),args);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
});

cljs.core$macros.use_macros.cljs$lang$maxFixedArity = (2);

cljs.core$macros.use_macros.cljs$lang$applyTo = (function (seq17109){
var G__17110 = cljs.core.first.call(null,seq17109);
var seq17109__$1 = cljs.core.next.call(null,seq17109);
var G__17111 = cljs.core.first.call(null,seq17109__$1);
var seq17109__$2 = cljs.core.next.call(null,seq17109__$1);
return cljs.core$macros.use_macros.cljs$core$IFn$_invoke$arity$variadic(G__17110,G__17111,seq17109__$2);
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
var args__9933__auto__ = [];
var len__9926__auto___17118 = arguments.length;
var i__9927__auto___17119 = (0);
while(true){
if((i__9927__auto___17119 < len__9926__auto___17118)){
args__9933__auto__.push((arguments[i__9927__auto___17119]));

var G__17120 = (i__9927__auto___17119 + (1));
i__9927__auto___17119 = G__17120;
continue;
} else {
}
break;
}

var argseq__9934__auto__ = ((((2) < args__9933__auto__.length))?(new cljs.core.IndexedSeq(args__9933__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.import$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9934__auto__);
});

cljs.core$macros.import$.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,import_symbols_or_lists){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ns*","ns*",1840949383,null)),(function (){var x__9655__auto__ = cljs.core.cons.call(null,new cljs.core.Keyword(null,"import","import",-1399500709),import_symbols_or_lists);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
});

cljs.core$macros.import$.cljs$lang$maxFixedArity = (2);

cljs.core$macros.import$.cljs$lang$applyTo = (function (seq17115){
var G__17116 = cljs.core.first.call(null,seq17115);
var seq17115__$1 = cljs.core.next.call(null,seq17115);
var G__17117 = cljs.core.first.call(null,seq17115__$1);
var seq17115__$2 = cljs.core.next.call(null,seq17115__$1);
return cljs.core$macros.import$.cljs$core$IFn$_invoke$arity$variadic(G__17116,G__17117,seq17115__$2);
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
var args__9933__auto__ = [];
var len__9926__auto___17124 = arguments.length;
var i__9927__auto___17125 = (0);
while(true){
if((i__9927__auto___17125 < len__9926__auto___17124)){
args__9933__auto__.push((arguments[i__9927__auto___17125]));

var G__17126 = (i__9927__auto___17125 + (1));
i__9927__auto___17125 = G__17126;
continue;
} else {
}
break;
}

var argseq__9934__auto__ = ((((2) < args__9933__auto__.length))?(new cljs.core.IndexedSeq(args__9933__auto__.slice((2)),(0),null)):null);
return cljs.core$macros.refer_clojure.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__9934__auto__);
});

cljs.core$macros.refer_clojure.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,args){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"ns*","ns*",1840949383,null)),(function (){var x__9655__auto__ = cljs.core.cons.call(null,new cljs.core.Keyword(null,"refer-clojure","refer-clojure",813784440),args);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
});

cljs.core$macros.refer_clojure.cljs$lang$maxFixedArity = (2);

cljs.core$macros.refer_clojure.cljs$lang$applyTo = (function (seq17121){
var G__17122 = cljs.core.first.call(null,seq17121);
var seq17121__$1 = cljs.core.next.call(null,seq17121);
var G__17123 = cljs.core.first.call(null,seq17121__$1);
var seq17121__$2 = cljs.core.next.call(null,seq17121__$1);
return cljs.core$macros.refer_clojure.cljs$core$IFn$_invoke$arity$variadic(G__17122,G__17123,seq17121__$2);
});


cljs.core$macros.refer_clojure.cljs$lang$macro = true;
cljs.core$macros.load_file_STAR_ = (function cljs$core$macros$load_file_STAR_(_AMPERSAND_form,_AMPERSAND_env,f){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","goog","js/goog",-70605150,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"nodeGlobalRequire","nodeGlobalRequire",167018599,null)),(function (){var x__9655__auto__ = f;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
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
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__9655__auto__ = cljs.analyzer.macroexpand_1.call(null,_AMPERSAND_env,form);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
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
var G__17127 = form_SINGLEQUOTE_;
var G__17128 = cljs.analyzer.macroexpand_1.call(null,env,form_SINGLEQUOTE_);
form__$1 = G__17127;
form_SINGLEQUOTE_ = G__17128;
continue;
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"quote","quote",1377916282,null)),(function (){var x__9655__auto__ = form_SINGLEQUOTE_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
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
var and__8806__auto__ = cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,fdecl));
if(and__8806__auto__){
return cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),cljs.core.ffirst.call(null,fdecl));
} else {
return and__8806__auto__;
}
});
cljs.core$macros.variadic_fn_STAR_ = (function cljs$core$macros$variadic_fn_STAR_(var_args){
var args17129 = [];
var len__9926__auto___17136 = arguments.length;
var i__9927__auto___17137 = (0);
while(true){
if((i__9927__auto___17137 < len__9926__auto___17136)){
args17129.push((arguments[i__9927__auto___17137]));

var G__17138 = (i__9927__auto___17137 + (1));
i__9927__auto___17137 = G__17138;
continue;
} else {
}
break;
}

var G__17131 = args17129.length;
switch (G__17131) {
case 2:
return cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17129.length)].join('')));

}
});

cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (sym,method){
return cljs.core$macros.variadic_fn_STAR_.call(null,sym,method,true);
});

cljs.core$macros.variadic_fn_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (sym,p__17132,solo){
var vec__17133 = p__17132;
var seq__17134 = cljs.core.seq.call(null,vec__17133);
var first__17135 = cljs.core.first.call(null,seq__17134);
var seq__17134__$1 = cljs.core.next.call(null,seq__17134);
var arglist = first__17135;
var body = seq__17134__$1;
var method = vec__17133;
var sig = cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),arglist);
var restarg = cljs.core.gensym.call(null,"seq");
var get_delegate = ((function (sig,restarg,vec__17133,seq__17134,first__17135,seq__17134__$1,arglist,body,method){
return (function cljs$core$macros$get_delegate(){
return new cljs.core.Symbol(null,"cljs$core$IFn$_invoke$arity$variadic","cljs$core$IFn$_invoke$arity$variadic",-378825034,null);
});})(sig,restarg,vec__17133,seq__17134,first__17135,seq__17134__$1,arglist,body,method))
;
var get_delegate_prop = ((function (sig,restarg,vec__17133,seq__17134,first__17135,seq__17134__$1,arglist,body,method){
return (function cljs$core$macros$get_delegate_prop(){
return cljs.core.symbol.call(null,[cljs.core.str("-"),cljs.core.str(get_delegate.call(null))].join(''));
});})(sig,restarg,vec__17133,seq__17134,first__17135,seq__17134__$1,arglist,body,method))
;
var param_bind = ((function (sig,restarg,vec__17133,seq__17134,first__17135,seq__17134__$1,arglist,body,method){
return (function cljs$core$macros$param_bind(param){
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9655__auto__ = param;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9655__auto__ = cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core","first","cljs.core/first",-752535972,null),cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"/Users/ru/clojure/fligts-pro/resources/public/js/out/cljs/core.cljc"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2877),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj.call(null,cljs.core.List.EMPTY,49),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2877),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj.call(null,cljs.core.List.EMPTY,54),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9655__auto__ = cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core","next","cljs.core/next",-1291438473,null),cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"/Users/ru/clojure/fligts-pro/resources/public/js/out/cljs/core.cljc"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2878),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj.call(null,cljs.core.List.EMPTY,51),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2878),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj.call(null,cljs.core.List.EMPTY,55),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})()))));
});})(sig,restarg,vec__17133,seq__17134,first__17135,seq__17134__$1,arglist,body,method))
;
var apply_to = ((function (sig,restarg,vec__17133,seq__17134,first__17135,seq__17134__$1,arglist,body,method){
return (function cljs$core$macros$apply_to(){
if(((1) < cljs.core.count.call(null,sig))){
var params = cljs.core.repeatedly.call(null,(cljs.core.count.call(null,sig) - (1)),cljs.core.gensym);
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9655__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9655__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9655__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core.mapcat.call(null,param_bind,params)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9655__auto__ = sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9655__auto__ = get_delegate.call(null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),params,(function (){var x__9655__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9655__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9655__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9655__auto__ = sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9655__auto__ = get_delegate.call(null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","seq","cljs.core/seq",-1649497689,null)),(function (){var x__9655__auto__ = restarg;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
}
});})(sig,restarg,vec__17133,seq__17134,first__17135,seq__17134__$1,arglist,body,method))
;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9655__auto__ = sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = get_delegate_prop.call(null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9655__auto__ = cljs.core.vec.call(null,sig);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),body)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(cljs.core.truth_(solo)?cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9655__auto__ = sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-cljs$lang$maxFixedArity","-cljs$lang$maxFixedArity",-1481434279,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = (cljs.core.count.call(null,sig) - (1));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())))):null),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9655__auto__ = sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-cljs$lang$applyTo","-cljs$lang$applyTo",-225535181,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = apply_to.call(null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
});

cljs.core$macros.variadic_fn_STAR_.cljs$lang$maxFixedArity = 3;

cljs.core$macros.copy_arguments = (function cljs$core$macros$copy_arguments(_AMPERSAND_form,_AMPERSAND_env,dest){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9655__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"len__17140__auto__","len__17140__auto__",619584269,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","loop","cljs.core$macros/loop",1731108390,null)),(function (){var x__9655__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__17141__auto__","i__17141__auto__",-1773308081,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__17141__auto__","i__17141__auto__",-1773308081,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"len__17140__auto__","len__17140__auto__",619584269,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".push",".push",-1497267248,null)),(function (){var x__9655__auto__ = dest;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aget","cljs.core$macros/aget",1976136178,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__17141__auto__","i__17141__auto__",-1773308081,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"recur","recur",1202958259,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","inc","cljs.core$macros/inc",876629257,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"i__17141__auto__","i__17141__auto__",-1773308081,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
});

cljs.core$macros.copy_arguments.cljs$lang$macro = true;
cljs.core$macros.variadic_fn = (function cljs$core$macros$variadic_fn(name,meta,p__17144,emit_var_QMARK_){
var vec__17151 = p__17144;
var vec__17154 = cljs.core.nth.call(null,vec__17151,(0),null);
var seq__17155 = cljs.core.seq.call(null,vec__17154);
var first__17156 = cljs.core.first.call(null,seq__17155);
var seq__17155__$1 = cljs.core.next.call(null,seq__17155);
var arglist = first__17156;
var body = seq__17155__$1;
var method = vec__17154;
var fdecl = vec__17151;
var dest_args = ((function (vec__17151,vec__17154,seq__17155,first__17156,seq__17155__$1,arglist,body,method,fdecl){
return (function cljs$core$macros$variadic_fn_$_dest_args(c){
return cljs.core.map.call(null,((function (vec__17151,vec__17154,seq__17155,first__17156,seq__17155__$1,arglist,body,method,fdecl){
return (function (n){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aget","cljs.core$macros/aget",1976136178,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
});})(vec__17151,vec__17154,seq__17155,first__17156,seq__17155__$1,arglist,body,method,fdecl))
,cljs.core.range.call(null,c));
});})(vec__17151,vec__17154,seq__17155,first__17156,seq__17155__$1,arglist,body,method,fdecl))
;
var rname = cljs.core.symbol.call(null,[cljs.core.str(cljs.analyzer._STAR_cljs_ns_STAR_)].join(''),[cljs.core.str(name)].join(''));
var sig = cljs.core.remove.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),arglist);
var c_1 = (cljs.core.count.call(null,sig) - (1));
var meta__$1 = cljs.core.assoc.call(null,meta,new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",882626057),true,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),c_1,new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sig], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),(function (){var x__9655__auto__ = arglist;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.doall.call(null,cljs.core.map.call(null,meta,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arglist], null)))], null));
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"def","def",597100991,null)),(function (){var x__9655__auto__ = cljs.core.with_meta.call(null,name,meta__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9655__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"var_args","var_args",1214280389,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9655__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args__17142__auto__","args__17142__auto__",22912448,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","copy-arguments","cljs.core$macros/copy-arguments",-1675962356,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args__17142__auto__","args__17142__auto__",22912448,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9655__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argseq__17143__auto__","argseq__17143__auto__",578141686,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","when","cljs.core$macros/when",328457725,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","<","cljs.core$macros/<",371512596,null)),(function (){var x__9655__auto__ = c_1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args__17142__auto__","args__17142__auto__",22912448,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__9655__auto__ = cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core","IndexedSeq","cljs.core/IndexedSeq",-228688698,null),cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"/Users/ru/clojure/fligts-pro/resources/public/js/out/cljs/core.cljc"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2925),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj.call(null,cljs.core.List.EMPTY,55),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2925),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj.call(null,cljs.core.List.EMPTY,75),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".slice",".slice",1874048374,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"args__17142__auto__","args__17142__auto__",22912448,null)),(function (){var x__9655__auto__ = c_1;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9655__auto__ = rname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cljs$core$IFn$_invoke$arity$variadic","cljs$core$IFn$_invoke$arity$variadic",-378825034,null)),dest_args.call(null,c_1),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argseq__17143__auto__","argseq__17143__auto__",578141686,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core$macros.variadic_fn_STAR_.call(null,rname,method);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = (cljs.core.truth_(emit_var_QMARK_)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"var","var",870848730,null)),(function (){var x__9655__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})()))):null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
});
cljs.core$macros.multi_arity_fn = (function cljs$core$macros$multi_arity_fn(name,meta,fdecl,emit_var_QMARK_){
var dest_args = (function cljs$core$macros$multi_arity_fn_$_dest_args(c){
return cljs.core.map.call(null,(function (n){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","aget","cljs.core$macros/aget",1976136178,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","js-arguments","cljs.core$macros/js-arguments",390128540,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = n;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
}),cljs.core.range.call(null,c));
});
var fixed_arity = (function cljs$core$macros$multi_arity_fn_$_fixed_arity(rname,sig){
var c = cljs.core.count.call(null,sig);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9655__auto__ = rname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9655__auto__ = cljs.core.symbol.call(null,[cljs.core.str("cljs$core$IFn$_invoke$arity$"),cljs.core.str(c)].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),dest_args.call(null,c))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())))], null);
});
var fn_method = (function cljs$core$macros$multi_arity_fn_$_fn_method(p__17181){
var vec__17185 = p__17181;
var seq__17186 = cljs.core.seq.call(null,vec__17185);
var first__17187 = cljs.core.first.call(null,seq__17186);
var seq__17186__$1 = cljs.core.next.call(null,seq__17186);
var sig = first__17187;
var body = seq__17186__$1;
var method = vec__17185;
if(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),sig))){
return cljs.core$macros.variadic_fn_STAR_.call(null,name,method,false);
} else {
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9655__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.symbol.call(null,[cljs.core.str("-cljs$core$IFn$_invoke$arity$"),cljs.core.str(cljs.core.count.call(null,sig))].join(''));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9655__auto__ = method;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
}
});
var rname = cljs.core.symbol.call(null,[cljs.core.str(cljs.analyzer._STAR_cljs_ns_STAR_)].join(''),[cljs.core.str(name)].join(''));
var arglists = cljs.core.map.call(null,cljs.core.first,fdecl);
var varsig_QMARK_ = ((function (rname,arglists){
return (function (p1__17157_SHARP_){
return cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),null], null), null),p1__17157_SHARP_);
});})(rname,arglists))
;
var variadic = cljs.core.boolean$.call(null,cljs.core.some.call(null,varsig_QMARK_,arglists));
var sigs = cljs.core.remove.call(null,varsig_QMARK_,arglists);
var maxfa = cljs.core.apply.call(null,cljs.core.max,cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.count,sigs),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.count.call(null,cljs.core.first.call(null,cljs.core.filter.call(null,varsig_QMARK_,arglists))) - (2))], null)));
var meta__$1 = cljs.core.assoc.call(null,meta,new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"variadic","variadic",882626057),variadic,new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),maxfa,new cljs.core.Keyword(null,"method-params","method-params",-980792179),sigs,new cljs.core.Keyword(null,"arglists","arglists",1661989754),arglists,new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.doall.call(null,cljs.core.map.call(null,meta,arglists))], null));
var args_sym = cljs.core.gensym.call(null,"args");
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"do","do",1686842252,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"def","def",597100991,null)),(function (){var x__9655__auto__ = cljs.core.with_meta.call(null,name,meta__$1);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null)),(function (){var x__9655__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"var_args","var_args",1214280389,null))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9655__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__9655__auto__ = args_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","array","cljs.core$macros/array",49650437,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","copy-arguments","cljs.core$macros/copy-arguments",-1675962356,null)),(function (){var x__9655__auto__ = args_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","case","cljs.core$macros/case",-2131866965,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),(function (){var x__9655__auto__ = args_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),cljs.core.mapcat.call(null,((function (rname,arglists,varsig_QMARK_,variadic,sigs,maxfa,meta__$1,args_sym){
return (function (p1__17158_SHARP_){
return fixed_arity.call(null,rname,p1__17158_SHARP_);
});})(rname,arglists,varsig_QMARK_,variadic,sigs,maxfa,meta__$1,args_sym))
,sigs),(function (){var x__9655__auto__ = ((variadic)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","let","cljs.core$macros/let",-160286726,null)),(function (){var x__9655__auto__ = cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argseq__17159__auto__","argseq__17159__auto__",429220328,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"new","new",-444906321,null)),(function (){var x__9655__auto__ = cljs.core.with_meta.call(null,new cljs.core.Symbol("cljs.core","IndexedSeq","cljs.core/IndexedSeq",-228688698,null),cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"file","file",-1269645878)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"/Users/ru/clojure/fligts-pro/resources/public/js/out/cljs/core.cljc"),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"line","line",212345235)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2983),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"column","column",2078222095)),cljs.core._conj.call(null,cljs.core.List.EMPTY,58),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-line","end-line",1837326455)),cljs.core._conj.call(null,cljs.core.List.EMPTY,2983),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"end-column","end-column",1425389514)),cljs.core._conj.call(null,cljs.core.List.EMPTY,78),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("cljs.analyzer","no-resolve","cljs.analyzer/no-resolve",-1872351017)),cljs.core._conj.call(null,cljs.core.List.EMPTY,true))))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".slice",".slice",1874048374,null)),(function (){var x__9655__auto__ = args_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = maxfa;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(0)),cljs.core._conj.call(null,cljs.core.List.EMPTY,null))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})()))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9655__auto__ = rname;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"cljs$core$IFn$_invoke$arity$variadic","cljs$core$IFn$_invoke$arity$variadic",-378825034,null)),dest_args.call(null,maxfa),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"argseq__17159__auto__","argseq__17159__auto__",429220328,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})()))):(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(meta__$1))?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","str","cljs.core$macros/str",-2019499702,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"Invalid arity: "),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","-","cljs.core$macros/-",13526976,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),(function (){var x__9655__auto__ = args_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,(2)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})()))):cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"throw","throw",595905694,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("js","Error.","js/Error.",750655924,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","str","cljs.core$macros/str",-2019499702,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,"Invalid arity: "),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core$macros","alength","cljs.core$macros/alength",-683052937,null)),(function (){var x__9655__auto__ = args_sym;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),cljs.core.map.call(null,fn_method,fdecl),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"set!","set!",250714521,null)),(function (){var x__9655__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9655__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-cljs$lang$maxFixedArity","-cljs$lang$maxFixedArity",-1481434279,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = maxfa;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),(function (){var x__9655__auto__ = (cljs.core.truth_(emit_var_QMARK_)?cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"var","var",870848730,null)),(function (){var x__9655__auto__ = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})()))):null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
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
var fdecl__$3 = ((cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,fdecl__$2)))?(function (){var x__9655__auto__ = fdecl__$2;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})():fdecl__$2);
var m__$2 = ((cljs.core.map_QMARK_.call(null,cljs.core.last.call(null,fdecl__$3)))?cljs.core.conj.call(null,m__$1,cljs.core.last.call(null,fdecl__$3)):m__$1);
var fdecl__$4 = ((cljs.core.map_QMARK_.call(null,cljs.core.last.call(null,fdecl__$3)))?cljs.core.butlast.call(null,fdecl__$3):fdecl__$3);
var m__$3 = cljs.core.conj.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core._conj.call(null,(function (){var x__9655__auto__ = cljs.core$macros.sigs.call(null,fdecl__$4);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})(),new cljs.core.Symbol(null,"quote","quote",1377916282,null))], null),m__$2);
var m__$4 = cljs.core.conj.call(null,(cljs.core.truth_(cljs.core.meta.call(null,name))?cljs.core.meta.call(null,name):cljs.core.PersistentArrayMap.EMPTY),m__$3);
if(cljs.core.truth_(cljs.core$macros.multi_arity_fn_QMARK_.call(null,fdecl__$4))){
return cljs.core$macros.multi_arity_fn.call(null,name,(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))?cljs.core.update_in.call(null,m__$4,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516)], null),cljs.core.conj,"@param {...*} var_args"):m__$4),fdecl__$4,new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
} else {
if(cljs.core.truth_(cljs.core$macros.variadic_fn_QMARK_.call(null,fdecl__$4))){
return cljs.core$macros.variadic_fn.call(null,name,(cljs.core.truth_(cljs.compiler.checking_types_QMARK_.call(null))?cljs.core.update_in.call(null,m__$4,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516)], null),cljs.core.conj,"@param {...*} var_args"):m__$4),fdecl__$4,new cljs.core.Keyword(null,"def-emits-var","def-emits-var",-1551927320).cljs$core$IFn$_invoke$arity$1(_AMPERSAND_env));
} else {
return cljs.core._conj.call(null,(function (){var x__9655__auto__ = cljs.core.with_meta.call(null,name,m__$4);
return cljs.core._conj.call(null,(function (){var x__9655__auto____$1 = cljs.core.cons.call(null,new cljs.core.Symbol("cljs.core$macros","fn","cljs.core$macros/fn",-187522821,null),fdecl__$4);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto____$1);
})(),x__9655__auto__);
})(),new cljs.core.Symbol(null,"def","def",597100991,null));

}
}
};
var cljs$core$macros$defn = function (_AMPERSAND_form,_AMPERSAND_env,name,var_args){
var fdecl = null;
if (arguments.length > 3) {
var G__17188__i = 0, G__17188__a = new Array(arguments.length -  3);
while (G__17188__i < G__17188__a.length) {G__17188__a[G__17188__i] = arguments[G__17188__i + 3]; ++G__17188__i;}
  fdecl = new cljs.core.IndexedSeq(G__17188__a,0);
} 
return cljs$core$macros$defn__delegate.call(this,_AMPERSAND_form,_AMPERSAND_env,name,fdecl);};
cljs$core$macros$defn.cljs$lang$maxFixedArity = 3;
cljs$core$macros$defn.cljs$lang$applyTo = (function (arglist__17189){
var _AMPERSAND_form = cljs.core.first(arglist__17189);
arglist__17189 = cljs.core.next(arglist__17189);
var _AMPERSAND_env = cljs.core.first(arglist__17189);
arglist__17189 = cljs.core.next(arglist__17189);
var name = cljs.core.first(arglist__17189);
var fdecl = cljs.core.rest(arglist__17189);
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
var args__9933__auto__ = [];
var len__9926__auto___17194 = arguments.length;
var i__9927__auto___17195 = (0);
while(true){
if((i__9927__auto___17195 < len__9926__auto___17194)){
args__9933__auto__.push((arguments[i__9927__auto___17195]));

var G__17196 = (i__9927__auto___17195 + (1));
i__9927__auto___17195 = G__17196;
continue;
} else {
}
break;
}

var argseq__9934__auto__ = ((((3) < args__9933__auto__.length))?(new cljs.core.IndexedSeq(args__9933__auto__.slice((3)),(0),null)):null);
return cljs.core$macros.defmacro.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9934__auto__);
});

cljs.core$macros.defmacro.cljs$core$IFn$_invoke$arity$variadic = (function (_AMPERSAND_form,_AMPERSAND_env,name,args){
var prefix = (function (){var p = (function (){var x__9655__auto__ = cljs.core.vary_meta.call(null,name,cljs.core.assoc,new cljs.core.Keyword(null,"macro","macro",-867863404),true);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
})();
var args__$1 = args;
while(true){
var f = cljs.core.first.call(null,args__$1);
if(typeof f === 'string'){
var G__17197 = cljs.core.cons.call(null,f,p);
var G__17198 = cljs.core.next.call(null,args__$1);
p = G__17197;
args__$1 = G__17198;
continue;
} else {
if(cljs.core.map_QMARK_.call(null,f)){
var G__17199 = cljs.core.cons.call(null,f,p);
var G__17200 = cljs.core.next.call(null,args__$1);
p = G__17199;
args__$1 = G__17200;
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
var G__17201 = cljs.core.next.call(null,fd);
fd = G__17201;
continue;
} else {
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,fd))){
var G__17202 = cljs.core.next.call(null,fd);
fd = G__17202;
continue;
} else {
return fd;
}
}
break;
}
})();
var fdecl__$1 = ((cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,fdecl)))?(function (){var x__9655__auto__ = fdecl;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto__);
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
var G__17203 = cljs.core.conj.call(null,acc,add_implicit_args.call(null,d));
var G__17204 = cljs.core.next.call(null,ds);
acc = G__17203;
ds = G__17204;
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
var G__17205 = cljs.core.next.call(null,p);
var G__17206 = cljs.core.cons.call(null,cljs.core.first.call(null,p),d);
p = G__17205;
d = G__17206;
continue;
} else {
return d;
}
break;
}
})();
return cljs.core._conj.call(null,(function (){var x__9655__auto__ = cljs.core.cons.call(null,new cljs.core.Symbol("cljs.core$macros","defn","cljs.core$macros/defn",-728332354,null),decl);
return cljs.core._conj.call(null,(function (){var x__9655__auto____$1 = cljs.core._conj.call(null,(function (){var x__9655__auto____$1 = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,".",".",1975675962,null)),(function (){var x__9655__auto____$1 = name;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto____$1);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"-cljs$lang$macro","-cljs$lang$macro",443600924,null)))));
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,true),x__9655__auto____$1);
})(),new cljs.core.Symbol(null,"set!","set!",250714521,null));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__9655__auto____$1);
})(),x__9655__auto__);
})(),new cljs.core.Symbol(null,"do","do",1686842252,null));
});

cljs.core$macros.defmacro.cljs$lang$maxFixedArity = (3);

cljs.core$macros.defmacro.cljs$lang$applyTo = (function (seq17190){
var G__17191 = cljs.core.first.call(null,seq17190);
var seq17190__$1 = cljs.core.next.call(null,seq17190);
var G__17192 = cljs.core.first.call(null,seq17190__$1);
var seq17190__$2 = cljs.core.next.call(null,seq17190__$1);
var G__17193 = cljs.core.first.call(null,seq17190__$2);
var seq17190__$3 = cljs.core.next.call(null,seq17190__$2);
return cljs.core$macros.defmacro.cljs$core$IFn$_invoke$arity$variadic(G__17191,G__17192,G__17193,seq17190__$3);
});

cljs.core$macros.defmacro.cljs$lang$macro = true;

//# sourceMappingURL=core$macros.js.map